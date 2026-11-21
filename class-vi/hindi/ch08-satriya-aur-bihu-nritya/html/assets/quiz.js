/* ==========================================================================
   MCQ test engine — start screen, one question at a time, reasoned review
   ========================================================================== */
(function () {
  'use strict';

  var Q = window.QUIZ;
  if (!Q) return;

  var LETTERS = ['A', 'B', 'C', 'D', 'E'];
  var LAST_KEY = 'cls6-quiz-last-' + (Q.title || 'x').replace(/\W+/g, '');

  var order = [];          // indices into Q.questions, in the order presented
  var answers = [];        // answers[position] = chosen option index, or null
  var pos = 0;
  var endsAt = 0;
  var tick = null;
  var submitted = false;
  var reviewFilter = 'all';

  var el = {};
  ['start', 'test', 'result'].forEach(function (id) { el[id] = document.getElementById('screen-' + id); });
  el.qtext   = document.getElementById('qtext');
  el.opts    = document.getElementById('opts');
  el.qnum    = document.getElementById('qnum');
  el.qtopic  = document.getElementById('qtopic');
  el.bar     = document.getElementById('bar');
  el.timer   = document.getElementById('timer');
  el.dots    = document.getElementById('dots');
  el.prev    = document.getElementById('prevBtn');
  el.next    = document.getElementById('nextBtn');
  el.finish  = document.getElementById('finishBtn');
  el.answered= document.getElementById('answeredCount');

  /* ---------- start screen ---------- */
  var totalEl = document.getElementById('totalQ');
  if (totalEl) totalEl.textContent = Q.questions.length;
  var minEl = document.getElementById('totalMin');
  if (minEl) minEl.textContent = Q.minutes;

  try {
    var last = JSON.parse(localStorage.getItem(LAST_KEY) || 'null');
    if (last && last.total) {
      var box = document.getElementById('lastAttempt');
      if (box) {
        box.innerHTML = 'Your last attempt: <strong>' + last.score + ' / ' + last.total +
          '</strong> (' + Math.round(last.score / last.total * 100) + '%) — ' + last.when;
        box.classList.remove('hidden');
      }
    }
  } catch (e) {}

  document.getElementById('startBtn').addEventListener('click', begin);
  var retake = document.getElementById('retakeBtn');
  if (retake) retake.addEventListener('click', function () { show('start'); });

  function begin() {
    var n = Q.questions.length;
    order = [];
    for (var i = 0; i < n; i++) order.push(i);

    var shuffleBox = document.getElementById('shuffleOpt');
    if (shuffleBox && shuffleBox.checked) {
      for (var k = order.length - 1; k > 0; k--) {
        var j = Math.floor(Math.random() * (k + 1));
        var t = order[k]; order[k] = order[j]; order[j] = t;
      }
    }

    answers = order.map(function () { return null; });
    pos = 0;
    submitted = false;
    reviewFilter = 'all';

    var timed = document.getElementById('timedOpt');
    if (timed && timed.checked) {
      endsAt = Date.now() + Q.minutes * 60000;
      if (tick) clearInterval(tick);
      tick = setInterval(updateTimer, 1000);
      el.timer.classList.remove('hidden');
      updateTimer();
    } else {
      endsAt = 0;
      if (tick) clearInterval(tick);
      el.timer.classList.add('hidden');
    }

    buildDots();
    show('test');
    render();
  }

  function updateTimer() {
    if (!endsAt) return;
    var left = Math.max(0, endsAt - Date.now());
    var m = Math.floor(left / 60000);
    var s = Math.floor((left % 60000) / 1000);
    el.timer.textContent = '⏱ ' + m + ':' + (s < 10 ? '0' : '') + s;
    el.timer.style.color = left < 120000 ? 'var(--rose)' : '';
    if (left === 0) { clearInterval(tick); finish(true); }
  }

  /* ---------- navigation ---------- */
  function show(name) {
    ['start', 'test', 'result'].forEach(function (s) {
      el[s].classList.toggle('hidden', s !== name);
    });
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }

  function buildDots() {
    el.dots.innerHTML = '';
    order.forEach(function (_, i) {
      var b = document.createElement('button');
      b.className = 'dot';
      b.type = 'button';
      b.textContent = i + 1;
      b.setAttribute('aria-label', 'Go to question ' + (i + 1));
      b.addEventListener('click', function () { pos = i; render(); });
      el.dots.appendChild(b);
    });
  }

  function refreshDots() {
    var kids = el.dots.children;
    for (var i = 0; i < kids.length; i++) {
      var d = kids[i];
      d.className = 'dot';
      if (submitted) {
        if (answers[i] === null) d.classList.add('no');
        else if (answers[i] === Q.questions[order[i]].a) d.classList.add('ok');
        else d.classList.add('no');
      } else if (answers[i] !== null) {
        d.classList.add('done');
      }
      if (i === pos) d.classList.add('here');
    }
  }

  function render() {
    var q = Q.questions[order[pos]];
    var n = order.length;

    el.qnum.textContent = 'Question ' + (pos + 1) + ' of ' + n;
    el.qtopic.textContent = q.topic;
    el.qtext.textContent = q.q;
    el.bar.style.width = ((pos + 1) / n * 100) + '%';

    el.opts.innerHTML = '';
    q.opts.forEach(function (text, i) {
      var b = document.createElement('button');
      b.className = 'opt' + (answers[pos] === i ? ' sel' : '');
      b.type = 'button';
      b.innerHTML = '<span class="key">' + LETTERS[i] + '</span><span>' + window.escHtml(text) + '</span>';
      b.addEventListener('click', function () {
        answers[pos] = (answers[pos] === i) ? null : i;
        render();
      });
      el.opts.appendChild(b);
    });

    var done = answers.filter(function (a) { return a !== null; }).length;
    el.answered.textContent = done + ' answered · ' + (n - done) + ' left';

    el.prev.disabled = pos === 0;
    el.next.disabled = pos === n - 1;
    refreshDots();
  }

  el.prev.addEventListener('click', function () { if (pos > 0) { pos--; render(); } });
  el.next.addEventListener('click', function () { if (pos < order.length - 1) { pos++; render(); } });
  el.finish.addEventListener('click', function () { finish(false); });

  document.addEventListener('keydown', function (e) {
    if (el.test.classList.contains('hidden')) return;
    if (e.key === 'ArrowRight' && pos < order.length - 1) { pos++; render(); }
    else if (e.key === 'ArrowLeft' && pos > 0) { pos--; render(); }
    else if (/^[1-4]$/.test(e.key)) {
      var i = parseInt(e.key, 10) - 1;
      var q = Q.questions[order[pos]];
      if (i < q.opts.length) { answers[pos] = i; render(); }
    } else if (/^[a-dA-D]$/.test(e.key)) {
      var idx = LETTERS.indexOf(e.key.toUpperCase());
      var qq = Q.questions[order[pos]];
      if (idx > -1 && idx < qq.opts.length) { answers[pos] = idx; render(); }
    }
  });

  /* ---------- finishing ---------- */
  function finish(auto) {
    var blank = answers.filter(function (a) { return a === null; }).length;
    if (!auto && blank > 0) {
      var msg = blank === 1
        ? 'You have 1 question still unanswered. Finish the test anyway?'
        : 'You have ' + blank + ' questions still unanswered. Finish the test anyway?';
      if (!window.confirm(msg)) return;
    }
    if (tick) clearInterval(tick);
    submitted = true;

    var correct = 0, wrong = 0, blanks = 0;
    order.forEach(function (qi, i) {
      if (answers[i] === null) blanks++;
      else if (answers[i] === Q.questions[qi].a) correct++;
      else wrong++;
    });

    var total = order.length;
    var pct = Math.round(correct / total * 100);

    document.getElementById('bigScore').textContent = correct + ' / ' + total;
    document.getElementById('scorePct').textContent = pct + '% correct';
    document.getElementById('sCorrect').textContent = correct;
    document.getElementById('sWrong').textContent = wrong;
    document.getElementById('sBlank').textContent = blanks;

    var v = document.getElementById('verdict');
    var msg2, cls;
    if (pct >= 90)      { msg2 = 'Excellent — you really know this chapter.'; cls = 'g'; }
    else if (pct >= 75) { msg2 = 'Well done. Read the reasons below for the few you missed.'; cls = 'g'; }
    else if (pct >= 60) { msg2 = 'A decent start. Go through every reason below, then try again.'; cls = 't'; }
    else if (pct >= 40) { msg2 = 'Keep going — revise the summary sheet, then retake the test.'; cls = 'a'; }
    else                { msg2 = 'This chapter needs another read. Start with the revision sheet and the flashcards.'; cls = 'r'; }
    v.innerHTML = '<span class="pill ' + cls + '">' + msg2 + '</span>';

    // weakest topics
    var byTopic = {};
    order.forEach(function (qi, i) {
      var q = Q.questions[qi];
      if (!byTopic[q.topic]) byTopic[q.topic] = { right: 0, total: 0 };
      byTopic[q.topic].total++;
      if (answers[i] === q.a) byTopic[q.topic].right++;
    });
    var weak = Object.keys(byTopic)
      .filter(function (t) { return byTopic[t].right < byTopic[t].total; })
      .sort(function (a, b) {
        return (byTopic[a].right / byTopic[a].total) - (byTopic[b].right / byTopic[b].total);
      });
    var wt = document.getElementById('weakTopics');
    if (weak.length) {
      wt.innerHTML = '<span class="lbl">Topics to revise</span>' +
        weak.map(function (t) {
          return '<span class="pill r" style="margin:.15rem .25rem .15rem 0">' + t +
                 ' — ' + byTopic[t].right + '/' + byTopic[t].total + '</span>';
        }).join('');
      wt.classList.remove('hidden');
    } else {
      wt.innerHTML = '<span class="lbl">Topics to revise</span>Nothing — every topic fully correct. ' +
                     'Try the test again with <em>Shuffle</em> on.';
      wt.classList.remove('hidden');
    }

    try {
      localStorage.setItem(LAST_KEY, JSON.stringify({
        score: correct, total: total,
        when: new Date().toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' })
      }));
    } catch (e) {}

    buildReview();
    refreshDots();
    show('result');
  }

  /* ---------- review ---------- */
  function buildReview() {
    var host = document.getElementById('reviewList');
    host.innerHTML = '';
    var shown = 0;

    order.forEach(function (qi, i) {
      var q = Q.questions[qi];
      var chosen = answers[i];
      var isRight = chosen === q.a;
      var isBlank = chosen === null;

      if (reviewFilter === 'wrong' && isRight) return;
      if (reviewFilter === 'blank' && !isBlank) return;
      shown++;

      var d = document.createElement('div');
      d.className = 'rev-item ' + (isRight ? 'ok' : 'no');

      var head = '<div class="rq"><span class="pill ' + (isRight ? 'g' : 'r') + '">Q' + (i + 1) +
                 ' · ' + (isRight ? 'Correct' : (isBlank ? 'Not attempted' : 'Wrong')) +
                 '</span> <span class="pill">' + q.topic + '</span><br>' +
                 window.escHtml(q.q) + '</div>';

      var body = '';
      if (!isRight) {
        body += '<div class="ra you"><span class="tag">Your answer</span>' +
                (isBlank ? '<em class="muted">left blank</em>'
                         : LETTERS[chosen] + '. ' + window.escHtml(q.opts[chosen])) + '</div>';
      }
      body += '<div class="ra cor"><span class="tag">Correct answer</span>' +
              LETTERS[q.a] + '. ' + window.escHtml(q.opts[q.a]) + '</div>';

      if (!isRight) {
        body += '<div class="why"><span class="tag">Why</span>' + window.escHtml(q.why) + '</div>';
      }

      d.innerHTML = head + body;
      host.appendChild(d);
    });

    if (!shown) {
      host.innerHTML = '<div class="note tip"><span class="lbl">Nothing to show</span>' +
                       'There are no questions in this category — well done.</div>';
    }
  }

  document.querySelectorAll('[data-rev]').forEach(function (b) {
    b.addEventListener('click', function () {
      document.querySelectorAll('[data-rev]').forEach(function (x) { x.classList.remove('on'); });
      b.classList.add('on');
      reviewFilter = b.getAttribute('data-rev');
      buildReview();
    });
  });
})();
