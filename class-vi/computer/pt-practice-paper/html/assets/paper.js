/* ==========================================================================
   Practice-paper renderer.
   Load order on a page:  paper.js  →  paperN-data.js (sets window.PAPER)  →  app.js
   Renders window.PAPER into #paper on DOMContentLoaded, then draws figures.
   ========================================================================== */
(function () {
  'use strict';

  var CH = {
    1: 'Patterns in Mathematics', 2: 'Lines and Angles', 3: 'Number Play',
    4: 'Data Handling', 5: 'Prime Time', 6: 'Perimeter and Area'
  };
  var AR_OPTS = [
    'Both A and R are true, and R is the correct explanation of A.',
    'Both A and R are true, but R is <em>not</em> the correct explanation of A.',
    'A is true, but R is false.',
    'A is false, but R is true.'
  ];
  var L = ['a', 'b', 'c', 'd'];

  /* ---------- helpers available to data files ---------- */
  var PH = window.PH = {
    // tally marks for n, groups of five struck through
    tally: function (n) {
      var out = [];
      for (var i = 0; i < Math.floor(n / 5); i++) out.push('<s>||||</s>');
      if (n % 5) out.push(new Array(n % 5 + 1).join('|'));
      return '<span class="tally">' + out.join(' ') + '</span>';
    },
    // frequency table: rows = [[label, count], ...]
    freqTable: function (head, rows) {
      var tot = 0;
      var body = rows.map(function (r) {
        tot += r[1];
        return '<tr><td>' + r[0] + '</td><td>' + PH.tally(r[1]) + '</td><td>' + r[1] + '</td></tr>';
      }).join('');
      return '<div class="tablewrap"><table class="compact"><thead><tr><th>' + head +
        '</th><th>Tally marks</th><th>Frequency</th></tr></thead><tbody>' + body +
        '<tr><td><b>Total</b></td><td></td><td><b>' + tot + '</b></td></tr></tbody></table></div>';
    },
    // number grid; marks = list of "r,c" cells to highlight
    grid: function (rows, marks) {
      marks = marks || [];
      return '<table class="grid-n"><tbody>' + rows.map(function (r, i) {
        return '<tr>' + r.map(function (v, j) {
          return '<td' + (marks.indexOf(i + ',' + j) > -1 ? ' class="sc"' : '') + '>' + v + '</td>';
        }).join('') + '</tr>';
      }).join('') + '</tbody></table>';
    },
    fig: function (attr, val) {
      return '<div class="fig" data-' + attr + "='" + JSON.stringify(val) + "'></div>";
    }
  };

  /* ---------- figure renderers ---------- */
  var NS = 'http://www.w3.org/2000/svg';
  function svgEl(w, h, label) {
    return '<svg viewBox="0 0 ' + w + ' ' + h + '" width="' + w + '" role="img" aria-label="' +
      (label || '').replace(/"/g, '') + '">';
  }

  // single-series bar chart: {title, labels, values, step, unit, xlab, ylab}
  function bars(d) {
    var W = 600, H = 320, ml = 56, mr = 16, mt = 34, mb = 58;
    var max = Math.max.apply(null, d.values);
    var top = Math.ceil(max / d.step) * d.step;
    if (top === max) top += d.step;
    var pw = W - ml - mr, ph = H - mt - mb;
    var n = d.values.length, slot = pw / n, bw = Math.min(54, slot * 0.55);
    var s = svgEl(W, H, d.title);
    s += '<text x="' + (W / 2) + '" y="18" text-anchor="middle" font-size="14" font-weight="700">' + d.title + '</text>';
    for (var v = 0; v <= top; v += d.step) {
      var y = mt + ph - (v / top) * ph;
      s += '<line x1="' + ml + '" x2="' + (W - mr) + '" y1="' + y + '" y2="' + y +
        '" stroke="currentColor" stroke-opacity="' + (v === 0 ? '.9' : '.15') + '" stroke-width="1"/>';
      s += '<text x="' + (ml - 8) + '" y="' + (y + 4) + '" text-anchor="end" font-size="11" opacity=".75">' + v + '</text>';
    }
    s += '<line x1="' + ml + '" x2="' + ml + '" y1="' + mt + '" y2="' + (mt + ph) + '" stroke="currentColor" stroke-opacity=".9"/>';
    d.values.forEach(function (val, i) {
      var h = (val / top) * ph, x = ml + slot * i + (slot - bw) / 2, y = mt + ph - h;
      s += '<g class="svg-accent"><rect x="' + x + '" y="' + y + '" width="' + bw + '" height="' + h +
        '" rx="4" fill="currentColor"><title>' + d.labels[i] + ': ' + val + '</title></rect></g>';
      s += '<text x="' + (x + bw / 2) + '" y="' + (y - 5) + '" text-anchor="middle" font-size="11" font-weight="650">' + val + '</text>';
      s += '<text x="' + (x + bw / 2) + '" y="' + (mt + ph + 16) + '" text-anchor="middle" font-size="11.5">' + d.labels[i] + '</text>';
    });
    s += '<text x="' + (ml + pw / 2) + '" y="' + (H - 18) + '" text-anchor="middle" font-size="12" opacity=".8">' + (d.xlab || '') + '</text>';
    s += '<text transform="translate(14 ' + (mt + ph / 2) + ') rotate(-90)" text-anchor="middle" font-size="12" opacity=".8">' + (d.ylab || '') + '</text>';
    s += '<text x="' + (W - mr) + '" y="' + (H - 2) + '" text-anchor="end" font-size="11" font-weight="650">Scale: 1 unit = ' + d.step + ' ' + (d.unit || '') + '</text>';
    return s + '</svg>';
  }

  // pictograph: {labels, values, per, sym, head}
  function picto(d) {
    var rows = d.labels.map(function (lab, i) {
      var k = d.values[i] / d.per, full = Math.floor(k), half = k - full >= 0.5;
      var sy = new Array(full + 1).join(d.sym) + (half ? '<span class="half">' + d.sym + '</span>' : '');
      return '<tr><td>' + lab + '</td><td>' + sy + '</td>' + (d.hideValues ? '' : '<td>' + d.values[i] + '</td>') + '</tr>';
    }).join('');
    return '<div class="tablewrap"><table class="compact picto"><thead><tr><th>' + (d.head || '') +
      '</th><th>Symbols</th>' + (d.hideValues ? '' : '<th>Value</th>') + '</tr></thead><tbody>' + rows +
      '</tbody></table></div><div class="picto-key">Key: ' + d.sym + ' = ' + d.per + ' ' + (d.unit || '') +
      ' &nbsp;·&nbsp; half symbol = ' + (d.per / 2) + '</div>';
  }

  // regular polygon with n sides
  function poly(n) {
    var W = 150, r = 58, cx = 75, cy = 72, pts = [];
    for (var i = 0; i < n; i++) {
      var t = -Math.PI / 2 + (i * 2 * Math.PI) / n + (n % 2 ? 0 : Math.PI / n);
      pts.push((cx + r * Math.cos(t)).toFixed(1) + ',' + (cy + r * Math.sin(t)).toFixed(1));
    }
    var names = { 3: 'Triangle', 4: 'Quadrilateral', 5: 'Pentagon', 6: 'Hexagon', 8: 'Octagon', 10: 'Decagon', 12: 'Dodecagon' };
    return svgEl(W, 160, n + ' sides') + '<polygon points="' + pts.join(' ') +
      '" fill="none" stroke="currentColor" stroke-width="2"/>' +
      '<text x="75" y="154" text-anchor="middle" font-size="12" font-weight="650">' + (names[n] || n + '-gon') + ' (' + n + ')</text></svg>';
  }

  // angle drawing: {deg, labels:[arm, vertex, arm]}
  function angle(d) {
    var deg = d.deg, W = 260, H = 170, vx = 110, vy = 130, R = 100;
    var lab = d.labels || ['A', 'B', 'C'];
    var draw = deg > 180 ? 360 - deg : deg;
    var rad = (draw * Math.PI) / 180;
    var ex = vx + R * Math.cos(rad), ey = vy - R * Math.sin(rad);
    var ar = 26, ax = vx + ar * Math.cos(rad), ay = vy - ar * Math.sin(rad);
    var s = svgEl(W, H, deg + ' degrees');
    s += '<line x1="' + vx + '" y1="' + vy + '" x2="' + (vx + 130) + '" y2="' + vy + '" stroke="currentColor" stroke-width="2"/>';
    s += '<line x1="' + vx + '" y1="' + vy + '" x2="' + ex.toFixed(1) + '" y2="' + ey.toFixed(1) + '" stroke="currentColor" stroke-width="2"/>';
    if (deg > 180) {
      // reflex: arc the long way round
      s += '<path class="svg-accent" d="M ' + (vx + ar) + ' ' + vy + ' A ' + ar + ' ' + ar + ' 0 1 1 ' + ax.toFixed(1) + ' ' + ay.toFixed(1) +
        '" fill="none" stroke="currentColor" stroke-width="2"/>';
    } else {
      s += '<path class="svg-accent" d="M ' + (vx + ar) + ' ' + vy + ' A ' + ar + ' ' + ar + ' 0 0 0 ' + ax.toFixed(1) + ' ' + ay.toFixed(1) +
        '" fill="none" stroke="currentColor" stroke-width="2"/>';
    }
    var mid = deg > 180 ? Math.PI + rad / 2 : rad / 2;
    var tx = vx + (ar + 22) * Math.cos(deg > 180 ? (rad + 2 * Math.PI) / 2 : mid);
    var ty = vy - (ar + 22) * Math.sin(deg > 180 ? (rad + 2 * Math.PI) / 2 : mid);
    s += '<text class="svg-accent" x="' + tx.toFixed(1) + '" y="' + (ty + 4).toFixed(1) + '" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor">' + deg + '°</text>';
    s += '<circle cx="' + vx + '" cy="' + vy + '" r="2.5" fill="currentColor"/>';
    s += '<text x="' + (vx - 6) + '" y="' + (vy + 16) + '" font-size="13" font-weight="700">' + lab[1] + '</text>';
    s += '<text x="' + (vx + 132) + '" y="' + (vy + 4) + '" font-size="13" font-weight="700">' + lab[2] + '</text>';
    s += '<text x="' + (ex + 6 * Math.cos(rad)).toFixed(1) + '" y="' + (ey - 6).toFixed(1) + '" font-size="13" font-weight="700" text-anchor="middle">' + lab[0] + '</text>';
    return s + '</svg>';
  }

  function drawFigures(root) {
    root.querySelectorAll('[data-bars]').forEach(function (el) { el.innerHTML = bars(JSON.parse(el.getAttribute('data-bars'))); });
    root.querySelectorAll('[data-picto]').forEach(function (el) { el.innerHTML = picto(JSON.parse(el.getAttribute('data-picto'))); });
    root.querySelectorAll('[data-poly]').forEach(function (el) { el.innerHTML = poly(+el.getAttribute('data-poly')); el.style.display = 'inline-block'; });
    root.querySelectorAll('[data-angle]').forEach(function (el) { el.innerHTML = angle(JSON.parse(el.getAttribute('data-angle'))); el.style.display = 'inline-block'; });
  }

  /* ---------- paper ---------- */
  function render() {
    var P = window.PAPER, host = document.getElementById('paper');
    if (!P || !host) { drawFigures(document); return; }
    if (P.chapters) CH = P.chapters;  // a paper may name its own chapters  // non-paper pages (revision) still get figures
    var isWs = P.kind === 'worksheet';
    var qn = 0, html = '';

    if (!isWs) {
      // blueprint: marks per chapter × section
      var secIds = P.sections.map(function (s) { return s.id; });
      var tab = {}, tot = 0;
      P.sections.forEach(function (s) {
        s.qs.forEach(function (q) {
          tab[q.ch] = tab[q.ch] || {};
          tab[q.ch][s.id] = (tab[q.ch][s.id] || 0) + q.m;
          tot += q.m;
        });
      });
      P._total = tot;
      html += '<details class="acc noprint"><summary><span class="num">ℹ</span> Blueprint — marks per chapter</summary><div class="body"><div class="tablewrap"><table class="compact blueprint"><thead><tr><th>Chapter</th>' +
        secIds.map(function (i) { return '<th>' + i + '</th>'; }).join('') + '<th>Total</th></tr></thead><tbody>' +
        Object.keys(tab).sort().map(function (c) {
          var row = 0;
          var cells = secIds.map(function (i) { row += tab[c][i] || 0; return '<td>' + (tab[c][i] || '–') + '</td>'; }).join('');
          return '<tr><td>Ch ' + c + ' · ' + CH[c] + '</td>' + cells + '<td><b>' + row + '</b></td></tr>';
        }).join('') + '<tr><td><b>Total</b></td>' + secIds.map(function (i) {
          var t = 0; P.sections.forEach(function (s) { if (s.id === i) s.qs.forEach(function (q) { t += q.m; }); });
          return '<td><b>' + t + '</b></td>';
        }).join('') + '<td><b>' + tot + '</b></td></tr></tbody></table></div></div></details>';
    }

    P.sections.forEach(function (s) {
      html += '<h2 class="sec-title">' + s.title + (s.pill ? ' <span class="pill">' + s.pill + '</span>' : '') + '</h2>';
      if (s.note) html += '<p class="sec-note">' + s.note + '</p>';
      s.qs.forEach(function (q) {
        qn++;
        var id = 'ans' + qn, body = q.q;
        if (q.ar) {
          body = '<p class="ar"><b>Assertion (A):</b> ' + q.A + '</p><p class="ar"><b>Reason (R):</b> ' + q.R + '</p>';
          q.opts = AR_OPTS;
        }
        if (q.opts) {
          var long = q.ar || q.opts.some(function (o) { return o.length > 28; });
          body += '<ol class="mcq-opts' + (long ? ' long' : '') + '">' + q.opts.map(function (o, i) {
            return '<li>(' + L[i] + ') ' + o + '</li>';
          }).join('') + '</ol>';
        }
        var ans = '';
        if (q.opts) ans += '<p><b>Answer: (' + L[q.a] + ')</b> ' + q.opts[q.a] + '</p>';
        ans += q.ans || '';
        var tags = '';
        if (q.ch) tags += '<span class="pill">Ch ' + q.ch + ' · ' + CH[q.ch] + '</span>';
        if (q.hard) tags += '<span class="pill r">★ Challenging</span>';
        html += '<div class="q" id="q' + qn + '">' +
          '<div class="qn">' + (q.label || ('Q' + qn)) + '</div>' +
          '<div class="qb">' + body + '</div>' +
          '<div class="qm">' + (q.m ? q.m + (q.m === 1 ? ' mark' : ' marks') : '') + '</div>' +
          (tags ? '<div class="tags noprint">' + tags + '</div>' : '') +
          '<div id="' + id + '" class="answerbox hidden"><div class="note"><span class="lbl">' +
          (isWs ? 'Solution' : 'Answer &amp; marking') + '</span>' + ans + '</div></div>' +
          '</div>';
      });
    });

    host.innerHTML = html;
    drawFigures(host);
    var t = document.getElementById('totalMarks');
    if (t && P._total) t.textContent = P._total;
  }

  /* ---------- answer lock: one code for the whole paper ---------- */
  var LOCK = 3271444834; // scrambled code, see hash()
  function hash(s) {
    var h = 5381;
    s = 'pt2:' + s;
    for (var i = 0; i < s.length; i++) h = ((h * 33) ^ s.charCodeAt(i)) >>> 0;
    return h;
  }
  function initLock() {
    var input = document.getElementById('codeInput'),
        btn = document.getElementById('unlockBtn'),
        msg = document.getElementById('codeMsg');
    if (!btn) return;
    var open = false;
    function show(on) {
      open = on;
      document.querySelectorAll('.answerbox').forEach(function (b) { b.classList.toggle('hidden', !on); });
      btn.textContent = on ? 'Hide answers' : 'Show answers';
      input.hidden = on;
      msg.textContent = on ? 'Answers unlocked.' : '';
    }
    function tryUnlock() {
      if (open) { show(false); input.value = ''; return; }
      if (hash(input.value.trim()) === LOCK) { show(true); }
      else { msg.textContent = 'Wrong code — ask a parent.'; input.value = ''; input.focus(); }
    }
    btn.addEventListener('click', tryUnlock);
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter') tryUnlock(); });
  }

  document.addEventListener('DOMContentLoaded', function () {
    render();
    initLock();
    var pb = document.getElementById('printBtn');
    if (pb) pb.addEventListener('click', function () { window.print(); });
  });
})();
