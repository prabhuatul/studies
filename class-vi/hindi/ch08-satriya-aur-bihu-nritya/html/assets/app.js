/* ==========================================================================
   Class VI Study Pack — shared behaviour
   ========================================================================== */
(function () {
  'use strict';

  /* ---------- theme ---------- */
  var KEY = 'cls6-theme';
  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    var b = document.getElementById('themeBtn');
    if (b) {
      b.textContent = t === 'dark' ? '☀' : '☾';
      b.setAttribute('aria-label', t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }
  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  applyTheme(saved || 'light');

  document.addEventListener('click', function (e) {
    var btn = e.target.closest && e.target.closest('#themeBtn');
    if (!btn) return;
    var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem(KEY, next); } catch (err) {}
  });

  /* ---------- expand / collapse all ---------- */
  document.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('[data-acc]');
    if (!t) return;
    var open = t.getAttribute('data-acc') === 'open';
    var scope = t.getAttribute('data-scope');
    var root = scope ? document.querySelector(scope) : document;
    if (!root) return;
    root.querySelectorAll('details.acc').forEach(function (d) { d.open = open; });
  });

  /* ---------- live search / filter ---------- */
  document.querySelectorAll('[data-filter]').forEach(function (input) {
    var sel = input.getAttribute('data-filter');
    var countEl = input.getAttribute('data-count')
      ? document.querySelector(input.getAttribute('data-count')) : null;

    function run() {
      var q = input.value.trim().toLowerCase();
      var shown = 0, total = 0;
      document.querySelectorAll(sel).forEach(function (item) {
        total++;
        var hit = !q || item.textContent.toLowerCase().indexOf(q) !== -1;
        item.classList.toggle('hidden', !hit);
        if (hit) {
          shown++;
          if (q && item.tagName === 'DETAILS') item.open = true;
        }
      });
      // hide a section heading whose whole group is filtered out
      document.querySelectorAll('[data-group]').forEach(function (g) {
        var any = g.querySelectorAll(sel.split(' ').pop() + ':not(.hidden)').length;
        g.classList.toggle('hidden', q && !any);
      });
      if (countEl) countEl.textContent = q ? (shown + ' of ' + total + ' match') : '';
    }
    input.addEventListener('input', run);
    input.addEventListener('search', run);
  });

  /* ---------- flashcards ---------- */
  var deck = document.getElementById('deck');
  if (deck) initFlashcards(deck);

  function initFlashcards(host) {
    var DATA = window.FLASHCARDS || [];
    var state = { deck: 'all', order: null, revealed: 0 };

    var decks = [];
    DATA.forEach(function (c) { if (decks.indexOf(c.deck) === -1) decks.push(c.deck); });

    var chips = document.getElementById('deckChips');
    if (chips) {
      var mk = function (label, val) {
        var b = document.createElement('button');
        b.className = 'chip' + (val === 'all' ? ' on' : '');
        b.textContent = label;
        b.dataset.deck = val;
        b.addEventListener('click', function () {
          chips.querySelectorAll('.chip').forEach(function (c) { c.classList.remove('on'); });
          b.classList.add('on');
          state.deck = val; state.order = null; render();
        });
        return b;
      };
      chips.appendChild(mk('All ' + DATA.length + ' cards', 'all'));
      decks.forEach(function (d) {
        var n = DATA.filter(function (c) { return c.deck === d; }).length;
        chips.appendChild(mk(d + ' (' + n + ')', d));
      });
    }

    function current() {
      var list = state.deck === 'all'
        ? DATA.slice()
        : DATA.filter(function (c) { return c.deck === state.deck; });
      if (state.order) {
        var byId = {};
        list.forEach(function (c) { byId[c.n] = c; });
        list = state.order.map(function (n) { return byId[n]; }).filter(Boolean);
      }
      return list;
    }

    function render() {
      var list = current();
      host.innerHTML = '';
      state.revealed = 0;
      list.forEach(function (c) {
        var btn = document.createElement('button');
        btn.className = 'fc';
        btn.type = 'button';
        btn.setAttribute('aria-label', 'Card ' + c.n + '. ' + c.q + '. Click to reveal answer.');
        btn.innerHTML =
          '<span class="fc-inner">' +
            '<span class="fc-face fc-front">' +
              '<span class="n">CARD ' + c.n + ' · ' + esc(c.deck) + '</span>' +
              '<span class="q">' + c.q + '</span>' +
              '<span class="hint">click to flip</span>' +
            '</span>' +
            '<span class="fc-face fc-back">' +
              '<span class="n">ANSWER</span>' +
              '<span class="a">' + c.a + '</span>' +
            '</span>' +
          '</span>';
        btn.addEventListener('click', function () {
          btn.classList.toggle('flipped');
          updateCount();
        });
        host.appendChild(btn);
      });
      updateCount();
    }

    function updateCount() {
      var el = document.getElementById('fcCount');
      if (!el) return;
      var all = host.querySelectorAll('.fc').length;
      var flipped = host.querySelectorAll('.fc.flipped').length;
      el.textContent = flipped + ' of ' + all + ' revealed';
    }

    var sh = document.getElementById('shuffleBtn');
    if (sh) sh.addEventListener('click', function () {
      var ns = current().map(function (c) { return c.n; });
      for (var i = ns.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = ns[i]; ns[i] = ns[j]; ns[j] = tmp;
      }
      state.order = ns; render();
    });

    var rs = document.getElementById('resetBtn');
    if (rs) rs.addEventListener('click', function () { state.order = null; render(); });

    var fa = document.getElementById('flipAllBtn');
    if (fa) fa.addEventListener('click', function () {
      var cards = host.querySelectorAll('.fc');
      var anyUn = Array.prototype.some.call(cards, function (c) { return !c.classList.contains('flipped'); });
      cards.forEach(function (c) { c.classList.toggle('flipped', anyUn); });
      updateCount();
    });

    render();
  }

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  window.escHtml = esc;

  /* ---------- reveal-answer toggles (question bank) ---------- */
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-reveal]');
    if (!b) return;
    var box = document.querySelector(b.getAttribute('data-reveal'));
    if (!box) return;
    var on = box.classList.toggle('hidden');
    b.textContent = on ? (b.dataset.showText || 'Show answer')
                       : (b.dataset.hideText || 'Hide answer');
  });

  var revAll = document.getElementById('revealAllBtn');
  if (revAll) revAll.addEventListener('click', function () {
    var boxes = document.querySelectorAll('.answerbox');
    var accs = document.querySelectorAll('details.acc');
    var anyHidden = Array.prototype.some.call(boxes, function (b) { return b.classList.contains('hidden'); })
                 || Array.prototype.some.call(accs, function (d) { return !d.open; });
    boxes.forEach(function (b) { b.classList.toggle('hidden', !anyHidden); });
    accs.forEach(function (d) { d.open = anyHidden; });
    document.querySelectorAll('[data-reveal]').forEach(function (b) {
      b.textContent = anyHidden ? (b.dataset.hideText || 'Hide answer')
                                : (b.dataset.showText || 'Show answer');
    });
    revAll.textContent = anyHidden ? 'Hide all answers' : 'Reveal all answers';
  });

  /* ---------- self-test checkboxes with memory ---------- */
  document.querySelectorAll('[data-check]').forEach(function (box) {
    var id = 'chk-' + location.pathname.split('/').pop() + '-' + box.getAttribute('data-check');
    try { if (localStorage.getItem(id) === '1') box.checked = true; } catch (e) {}
    box.addEventListener('change', function () {
      try { localStorage.setItem(id, box.checked ? '1' : '0'); } catch (e) {}
    });
  });
})();
