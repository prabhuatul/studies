/* Renders window.KN into #kn. Load order: kn-data.js → kn.js → app.js */
(function () {
  'use strict';
  var D = window.KN, host = document.getElementById('kn');
  if (!D || !host) return;

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function spk(t) { return '<button class="spk" type="button" data-say="' + esc(t) + '" aria-label="Read aloud" title="Read aloud">🔊</button>'; }
  function trio(arr, cls) {
    return '<div class="' + cls + '">' +
      '<div class="ln kn">' + esc(arr[0]) + spk(arr[0]) + '</div>' +
      '<div class="ln ro"><span class="tg">say</span>' + esc(arr[1]) + '</div>' +
      '<div class="ln en"><span class="tg">means</span>' + esc(arr[2]) + '</div></div>';
  }
  function vocabTable(rows) {
    return '<div class="tablewrap"><table class="compact vt"><thead><tr><th>Kannada</th><th class="ro">Say it</th><th class="en">English</th></tr></thead><tbody>' +
      rows.map(function (r) { return '<tr><td class="kn">' + esc(r[0]) + '</td><td class="ro">' + esc(r[1]) + '</td><td class="en">' + esc(r[2]) + '</td></tr>'; }).join('') +
      '</tbody></table></div>';
  }
  function wordsTable(rows) {
    return '<div class="tablewrap"><table class="compact wt"><thead><tr><th>#</th><th>Word</th><th class="ro">Say it</th><th>Meaning (Kannada)</th><th class="ro">Say it</th><th class="en">English</th></tr></thead><tbody>' +
      rows.map(function (r, i) {
        return '<tr><td>' + (i + 1) + '</td><td class="kn">' + esc(r[0]) + spk(r[0]) + '</td><td class="ro">' + esc(r[1]) + '</td><td class="kn">' + esc(r[2]) + '</td><td class="ro">' + esc(r[3]) + '</td><td class="en">' + esc(r[4]) + '</td></tr>';
      }).join('') + '</tbody></table></div>';
  }
  function head(t) {
    return '<h3 class="kh"><span class="kn">' + esc(t[0]) + '</span> <span class="ro">· ' + esc(t[1]) + '</span> <span class="en">— ' + esc(t[2]) + '</span></h3>';
  }

  var html = '';
  D.sections.forEach(function (s) {
    html += '<section class="kns" id="' + s.id + '">';
    html += '<h2><span class="pill a">' + esc(s.tag) + '</span> <span class="kn">' + esc(s.kn) + '</span> <span class="ro small">(' + esc(s.ro) + ')</span> <span class="en">— ' + esc(s.en) + '</span></h2>';
    if (s.intro) html += '<p class="muted en">' + esc(s.intro) + '</p>';

    var wordsHtml = s.words ? head(['ಪದಗಳ ಅರ್ಥ', 'padagaLa artha', 'Meanings of words']) + wordsTable(s.words) : '';
    if (s.words && !s.poem && s.id !== 'l5') html += wordsHtml;

    if (s.poem) {
      html += head(['ಪದ್ಯ', 'padya', 'The poem, verse by verse']);
      s.poem.forEach(function (v, i) {
        html += '<div class="card verse"><div class="vn">Verse ' + (i + 1) + '</div>' +
          '<div class="ln kn">' + v.kn.map(esc).join('<br>') + spk(v.kn.join(' ')) + '</div>' +
          '<div class="ln ro"><span class="tg">say</span>' + v.ro.map(esc).join('<br>') + '</div>' +
          '<div class="ln en"><span class="tg">means</span>' + esc(v.en) + '</div></div>';
      });
      if (s.poemNote) html += '<div class="note warn"><span class="lbl">Check</span>' + esc(s.poemNote) + '</div>';
      html += wordsHtml;
    }

    if (s.definition) {
      var d = s.definition;
      html += head(['ಶಬ್ದ ಎಂದರೇನು?', 'shabda endaraynu?', 'What is a word?']);
      html += '<div class="card">' + trio([d.kn, d.ro, d.en], 'blk') +
        '<p style="margin:.6rem 0 .2rem"><b class="kn">ಉದಾ:</b> <span class="ro small">(udaa: for example)</span> ' +
        d.eg.map(function (e) { return '<span class="kn">' + esc(e[0]) + '</span> <span class="ro small">' + esc(e[1]) + '</span> <span class="en small">(' + esc(e[2]) + ')</span>'; }).join(', ') + '</p>' +
        (d.egNote ? '<p class="small muted">' + esc(d.egNote) + '</p>' : '') +
        '<details class="vocab"><summary>Word by word</summary>' + vocabTable(s.vocab) + '</details></div>';
    }

    if (s.jumble) {
      html += head(s.jumbleTitle);
      html += '<div class="tablewrap"><table class="compact jt"><thead><tr><th>#</th><th>Jumbled letters</th><th class="ansc">Word</th><th class="ro ansc">Say it</th><th class="en ansc">Meaning</th></tr></thead><tbody>' +
        s.jumble.map(function (j, i) {
          return '<tr' + (j.unclear ? ' class="unc"' : '') + '><td>' + 'ABCDE'[i] + '</td><td class="kn">' + esc(j.letters) + '</td><td class="kn ansc">' + esc(j.kn) + '</td><td class="ro ansc">' + esc(j.ro) + '</td><td class="en ansc">' + esc(j.en) + '</td></tr>';
        }).join('') + '</tbody></table></div>';
    }

    if (s.qa) {
      html += head(s.qaTitle);
      s.qa.forEach(function (x, i) {
        html += '<div class="card kq"><div class="qn">' + (i + 1) + '</div><div class="qbody">' +
          '<div class="lbl2">ಪ್ರಶ್ನೆ <span class="ro">(prashne)</span> · Question</div>' + trio(x.q, 'blk') +
          '<div class="ansblk"><div class="lbl2">ಉತ್ತರ <span class="ro">(uttara)</span> · Answer</div>' + trio(x.a, 'blk') + '</div>' +
          (x.vocab ? '<details class="vocab"><summary>Word by word</summary>' + vocabTable(x.vocab) + '</details>' : '') +
          (x.note ? '<p class="small muted nt">📝 ' + esc(x.note) + '</p>' : '') +
          '</div></div>';
      });
    }

    if (s.words && s.id === 'l5') html += wordsHtml;
    html += '</section>';
  });
  host.innerHTML = html;

  /* ---------- view toggles (remembered) ---------- */
  document.querySelectorAll('[data-view]').forEach(function (cb) {
    var cls = cb.getAttribute('data-view'), key = 'kn-view-' + cls;
    try { var v = localStorage.getItem(key); if (v !== null) cb.checked = v === '1'; } catch (e) {}
    function apply() { document.body.classList.toggle(cls, !cb.checked); try { localStorage.setItem(key, cb.checked ? '1' : '0'); } catch (e) {} }
    cb.addEventListener('change', apply); apply();
  });
  var vAll = document.getElementById('vocabAll');
  if (vAll) vAll.addEventListener('click', function () {
    var ds = document.querySelectorAll('details.vocab'), any = Array.prototype.some.call(ds, function (d) { return !d.open; });
    ds.forEach(function (d) { d.open = any; });
    vAll.textContent = any ? 'Close all word-by-word' : 'Open all word-by-word';
  });

  /* ---------- read aloud (only if the device has a Kannada voice) ---------- */
  var synth = window.speechSynthesis, knVoice = null;
  function pick() {
    if (!synth) return;
    knVoice = synth.getVoices().filter(function (v) { return /^kn/i.test(v.lang); })[0] || null;
    document.body.classList.toggle('can-speak', !!knVoice);
  }
  if (synth) { pick(); synth.onvoiceschanged = pick; }
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('.spk');
    if (!b || !knVoice) return;
    synth.cancel();
    var u = new SpeechSynthesisUtterance(b.getAttribute('data-say'));
    u.voice = knVoice; u.lang = knVoice.lang; u.rate = 0.8;
    synth.speak(u);
  });
})();
