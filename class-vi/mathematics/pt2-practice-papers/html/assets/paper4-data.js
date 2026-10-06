/* Practice Paper 4 — PT-2, Class VI Mathematics (Ch 1–6) */
(function () {
  // regular pentagon with all diagonals
  var pent = (function () {
    var cx = 90, cy = 88, r = 70, P = [];
    for (var i = 0; i < 5; i++) {
      var t = -Math.PI / 2 + i * 2 * Math.PI / 5;
      P.push([cx + r * Math.cos(t), cy + r * Math.sin(t)]);
    }
    var pts = P.map(function (p) { return p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' ');
    var diag = '';
    for (var a = 0; a < 5; a++) {
      var b = (a + 2) % 5;
      diag += '<line class="svg-accent" x1="' + P[a][0].toFixed(1) + '" y1="' + P[a][1].toFixed(1) + '" x2="' + P[b][0].toFixed(1) + '" y2="' + P[b][1].toFixed(1) + '" stroke="currentColor" stroke-width="1.6" stroke-dasharray="5 3"/>';
    }
    return '<div class="fig"><svg viewBox="0 0 180 170" width="180" role="img" aria-label="Pentagon with its 5 diagonals">' +
      '<polygon points="' + pts + '" fill="none" stroke="currentColor" stroke-width="2"/>' + diag + '</svg>' +
      '<div class="cap">Pentagon: 5 sides (solid) + 5 diagonals (dashed) = 10 lines = complete graph on 5 points.</div></div>';
  })();

  // 10 × 6 rectangle ABCD with diagonal AC, triangle ABC shaded; 1 cm = 24 px
  var rectTri = '<div class="fig"><svg viewBox="0 0 300 190" width="300" role="img" aria-label="Rectangle ABCD with diagonal AC">' +
    '<g class="svg-accent"><path d="M30 160 H270 V16 Z" fill="currentColor" fill-opacity=".18"/></g>' +
    '<rect x="30" y="16" width="240" height="144" fill="none" stroke="currentColor" stroke-width="2"/>' +
    '<line x1="30" y1="160" x2="270" y2="16" stroke="currentColor" stroke-width="2"/>' +
    '<text x="22" y="176" font-size="13" font-weight="700">A</text><text x="272" y="176" font-size="13" font-weight="700">B</text>' +
    '<text x="272" y="14" font-size="13" font-weight="700">C</text><text x="18" y="14" font-size="13" font-weight="700">D</text>' +
    '<text x="150" y="182" text-anchor="middle" font-size="12">10 cm</text>' +
    '<text x="290" y="92" text-anchor="middle" font-size="12">6 cm</text></svg></div>';

  // triangle ABC with D on BC and AD joined
  var triD = '<div class="fig"><svg viewBox="0 0 300 200" width="300" role="img" aria-label="Triangle ABC with point D on BC joined to A">' +
    '<path d="M120 20 L20 175 L280 175 Z" fill="none" stroke="currentColor" stroke-width="2"/>' +
    '<line x1="120" y1="20" x2="170" y2="175" stroke="currentColor" stroke-width="2"/>' +
    '<text x="116" y="14" font-size="14" font-weight="700">A</text><text x="6" y="190" font-size="14" font-weight="700">B</text>' +
    '<text x="164" y="194" font-size="14" font-weight="700">D</text><text x="282" y="190" font-size="14" font-weight="700">C</text></svg></div>';

  window.PAPER = {
    no: 4,
    sections: [
      { id: 'A', title: 'Section A · Multiple choice &amp; Assertion–Reason', pill: '8 × 1 = 8 marks',
        note: 'Choose the correct option. Q7–Q8: choose (a), (b), (c) or (d) as described.',
        qs: [
          { ch: 1, m: 1, q: '<p>In a complete graph, every pair of points is joined by a line. How many lines are there with <b>6</b> points?</p>',
            opts: ['12', '15', '21', '30'], a: 1,
            ans: '<p>1 + 2 + 3 + 4 + 5 = 15 (each new point joins every earlier point). A triangular number again!</p>' },
          { ch: 2, m: 1, q: '<p>Which of these angles is obtuse?</p>',
            opts: ['89°', '90°', '145°', '181°'], a: 2,
            ans: '<p>Obtuse means more than 90° and less than 180°. 89° is acute, 90° is right, 181° is reflex.</p>' },
          { ch: 5, m: 1, hard: true, q: '<p>The smallest prime factor of 391 is</p>',
            opts: ['13', '17', '19', '23'], a: 1,
            ans: '<p>391 is odd, digit sum 13 (not ÷ 3), doesn\'t end in 0/5. Try 7: 7 × 55 = 385, remainder 6 ✗. 11: 3 − 9 + 1 = −5 ✗. 13: 13 × 30 = 390, remainder 1 ✗. 17: 17 × 23 = 391 ✓.</p>' },
          { ch: 4, m: 1, q: '<p>In a pictograph, 1 🍎 = 20 apples. How many apples do 3½ symbols show?</p>',
            opts: ['60', '65', '70', '80'], a: 2,
            ans: '<p>3 × 20 + 10 = 70 (half a symbol = 10).</p>' },
          { ch: 6, m: 1, q: '<p>A wire bent into a square of side 15 cm is straightened and bent into a rectangle 18 cm long. The breadth of the rectangle is</p>',
            opts: ['9 cm', '10 cm', '11 cm', '12 cm'], a: 3,
            ans: '<p>Wire length = perimeter = 4 × 15 = 60 cm. For the rectangle, l + b = 30 → b = 30 − 18 = 12 cm.</p>' },
          { ch: 3, m: 1, q: '<p>Which time on a clock reads as a palindrome (ignore the colon)?</p>',
            opts: ['12:21', '10:10', '11:12', '2:23'], a: 0,
            ans: '<p>1221 reads the same backwards. 1010 → 0101, 1112 → 2111, 223 → 322.</p>' },
          { ch: 5, m: 1, ar: true,
            A: '6 is a perfect number.',
            R: 'The sum of all the factors of 6, other than 6 itself, is 1 + 2 + 3 = 6.', a: 0,
            ans: '<p>A perfect number equals the sum of its factors other than itself — R is the very definition applied to 6.</p>' },
          { ch: 2, m: 1, ar: true,
            A: 'Ray AB and ray BA are the same ray.',
            R: 'A ray has only one end point.', a: 3,
            ans: '<p>Ray AB starts at A; ray BA starts at B and goes the opposite way — different rays (A false). A ray does have exactly one end point (R true).</p>' }
        ] },

      { id: 'B', title: 'Section B · Do as directed', pill: '6 × 2 = 12 marks', qs: [
          { ch: 5, m: 2, q: '<p>(i) Write all the factors of 120. (ii) Is 120 a common multiple of 8 and 15? Explain.</p>',
            ans: '<p>(i) 1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 24, 30, 40, 60, 120 (16 factors) <span class="mk">[1]</span></p>' +
                 '<p>(ii) <b>Yes</b> — 120 = 8 × 15, so it is a multiple of 8 (8 × 15) and of 15 (15 × 8). <span class="mk">[1]</span></p>' },
          { ch: 5, m: 2, q: '<p>Find the prime factorisations of 980 and 1155. Are they co-prime? If not, write all their common factors.</p>',
            ans: '<p>980 = 2 × 2 × 5 × 7 × 7; &nbsp;1155 = 3 × 5 × 7 × 11 <span class="mk">[1]</span></p>' +
                 '<p>Common primes 5 and 7 → <b>not co-prime</b>. Common factors: <b>1, 5, 7, 35</b> <span class="mk">[1]</span></p>' },
          { ch: 1, m: 2, hard: true, q: '<p>(i) Draw a pentagon and all its diagonals. How many diagonals does it have? (ii) Using the complete-graph pattern, find the number of diagonals of an <b>octagon</b>.</p>',
            ans: pent + '<p>(i) <b>5 diagonals</b> <span class="mk">[1]</span></p>' +
                 '<p>(ii) Complete graph on 8 points: 1 + 2 + … + 7 = 28 lines. 8 of them are sides → 28 − 8 = <b>20 diagonals</b> <span class="mk">[1]</span></p>' },
          { ch: 6, m: 2, q: rectTri + '<p>ABCD is a rectangle 10 cm by 6 cm. Find (i) the area of the rectangle (ii) the area of the shaded triangle ABC. Give a reason for (ii).</p>',
            ans: '<p>(i) 10 × 6 = <b>60 cm²</b> <span class="mk">[½]</span></p>' +
                 '<p>(ii) The diagonal AC cuts the rectangle into two identical triangles, so triangle ABC = 60 ÷ 2 = <b>30 cm²</b> <span class="mk">[1½]</span></p>' },
          { ch: 3, m: 2, q: '<p>Without calculating, say whether each answer is odd or even. Give a reason.<br>(i) 37 + 52 + 81 + 19 &nbsp; (ii) the sum of the first 15 odd numbers &nbsp; (iii) 999 − 452 &nbsp; (iv) 135 × 42</p>',
            ans: '<ol class="subq"><li>Three odd numbers + one even: odd + odd = even, + odd = odd, + even = <b>odd</b> (189).</li>' +
                 '<li>An odd count (15) of odd numbers → <b>odd</b> (225).</li>' +
                 '<li>odd − even = <b>odd</b> (547).</li>' +
                 '<li>Anything × even = <b>even</b> (5670).</li></ol><p><span class="mk">[½ each]</span></p>' },
          { ch: 4, m: 2, q: '<p>The tally table shows the pets owned by students of a class.</p>' +
               '<div class="tablewrap"><table class="compact"><thead><tr><th>Pet</th><th>Tally marks</th></tr></thead><tbody>' +
               '<tr><td>Dog</td><td>' + PH.tally(12) + '</td></tr><tr><td>Cat</td><td>' + PH.tally(8) + '</td></tr>' +
               '<tr><td>Fish</td><td>' + PH.tally(15) + '</td></tr><tr><td>Bird</td><td>' + PH.tally(4) + '</td></tr></tbody></table></div>' +
               '<p>(i) Write the frequency of each pet and the total. (ii) Which pet is owned by exactly twice as many students as birds?</p>',
            ans: '<p>(i) Dog 12, Cat 8, Fish 15, Bird 4 → total <b>39</b> <span class="mk">[1]</span></p><p>(ii) 2 × 4 = 8 → <b>Cat</b> <span class="mk">[1]</span></p>' }
        ] },

      { id: 'C', title: 'Section C · Short answer', pill: '4 × 3 = 12 marks', qs: [
          { ch: 5, m: 3, hard: true, q: '<ol class="subq"><li>A number is divisible by both 4 and 6. Must it be divisible by 24? Give an example.</li><li>A number is divisible by both 3 and 8. Must it be divisible by 24? Explain.</li><li>Why do the two answers differ?</li></ol>',
            ans: '<ol class="subq"><li><b>No.</b> 12 is divisible by 4 and by 6 but not by 24. <span class="mk">[1]</span></li>' +
                 '<li><b>Yes.</b> Its prime factorisation must contain 2 × 2 × 2 (for 8) and 3 (for 3), so it contains 2 × 2 × 2 × 3 = 24. <span class="mk">[1]</span></li>' +
                 '<li>3 and 8 are <b>co-prime</b> (no common factor except 1), so their factors can\'t overlap. 4 and 6 share the factor 2, so a number only needs 2 × 2 × 3 = 12. <span class="mk">[1]</span></li></ol>' },
          { ch: 4, m: 3, q: '<p>40 students chose their favourite game (C = Cricket, F = Football, B = Badminton, K = Kho-kho):</p>' +
               '<p class="rawdata">C F B K C C B F C K B C F C B C K C F B C C F K B C F C B C K F C B C F C C B F</p>' +
               '<p>(i) Make a frequency table with tally marks. (ii) Which two games are equally popular? (iii) How many more students chose cricket than kho-kho?</p>',
            ans: PH.freqTable('Game', [['Cricket', 17], ['Football', 9], ['Badminton', 9], ['Kho-kho', 5]]) +
                 '<p>Table <span class="mk">[1½]</span> &nbsp; (ii) <b>Football and Badminton</b> (9 each) <span class="mk">[½]</span> &nbsp; (iii) 17 − 5 = <b>12</b> <span class="mk">[1]</span></p>' },
          { ch: 2, m: 3, q: triD + '<p>In the figure, D is a point on BC and A is joined to D.<br>(i) Name all the line segments. (ii) Name all the angles with vertex A. (iii) How many triangles are there? Name them.</p>',
            ans: '<ol class="subq"><li>AB, AC, AD, BD, DC, BC → <b>6</b> <span class="mk">[1]</span></li>' +
                 '<li>∠BAD, ∠DAC, ∠BAC → <b>3</b> <span class="mk">[1]</span></li>' +
                 '<li>△ABD, △ADC, △ABC → <b>3</b> (don\'t forget the big one!) <span class="mk">[1]</span></li></ol>' },
          { ch: 6, m: 3, q: '<p>Akshi runs 4 rounds of a rectangular track 60 m long and 40 m wide. Toshi runs 5 rounds of a square track of side 35 m.</p>' +
               '<ol class="subq"><li>How far does each girl run?</li><li>Who runs more, and by how much?</li><li>How many complete rounds must Toshi run to cover <b>at least</b> 1 km?</li></ol>',
            ans: '<ol class="subq"><li>Akshi: 2 × (60 + 40) = 200 m per round × 4 = <b>800 m</b>. Toshi: 4 × 35 = 140 m per round × 5 = <b>700 m</b>. <span class="mk">[1]</span></li>' +
                 '<li><b>Akshi, by 100 m</b>. <span class="mk">[1]</span></li>' +
                 '<li>1 km = 1000 m. 7 rounds = 980 m (not enough); 8 rounds = 1120 m → <b>8 rounds</b>. <span class="mk">[1]</span></li></ol>' }
        ] },

      { id: 'D', title: 'Section D · Long answer &amp; case study', pill: '2 × 4 = 8 marks', qs: [
          { ch: 4, m: 4, q: '<p>Visitors to a museum:</p>' +
               '<div class="tablewrap"><table class="compact"><thead><tr><th>Month</th><th>Jan</th><th>Feb</th><th>Mar</th><th>Apr</th><th>May</th></tr></thead>' +
               '<tbody><tr><td>Visitors</td><td>1200</td><td>1500</td><td>900</td><td>2100</td><td>1800</td></tr></tbody></table></div>' +
               '<ol class="subq"><li>Draw a bar graph using the scale 1 unit = 300 visitors.</li><li>Find the difference between the busiest and the quietest month.</li><li>In which months were there more than 1400 visitors?</li><li>How many visitors came in the five months?</li></ol>',
            ans: PH.fig('bars', { title: 'Museum visitors', labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], values: [1200, 1500, 900, 2100, 1800], step: 300, unit: 'visitors', xlab: 'Month', ylab: 'Visitors' }) +
                 '<p>Bar lengths 4, 5, 3, 7, 6 units. <span class="mk">[2]</span></p>' +
                 '<p>(ii) Apr 2100 − Mar 900 = <b>1200</b> <span class="mk">[1]</span> &nbsp; (iii) <b>Feb, Apr, May</b> <span class="mk">[½]</span> &nbsp; (iv) <b>7500</b> <span class="mk">[½]</span></p>' },
          { ch: 5, m: 4, q: '<p><b>Case study — The Idli-Vada game.</b> Children count 1, 2, 3, … in turn. On a multiple of 3 they say "idli", on a multiple of 5 they say "vada", and on a multiple of both they say "idli-vada". They play up to 90.</p>' +
               '<ol class="subq"><li>How many times is "idli-vada" said? List the numbers.</li><li>How many times is only "idli" said?</li><li>How many times is only "vada" said?</li><li>If the game used 4 and 6 instead, what is the first number where "idli-vada" is said?</li></ol>',
            ans: '<ol class="subq"><li>Common multiples of 3 and 5 = multiples of 15: 15, 30, 45, 60, 75, 90 → <b>6 times</b>. <span class="mk">[1]</span></li>' +
                 '<li>Multiples of 3 up to 90 = 30; remove the 6 idli-vadas → <b>24</b>. <span class="mk">[1]</span></li>' +
                 '<li>Multiples of 5 up to 90 = 18; remove 6 → <b>12</b>. <span class="mk">[1]</span></li>' +
                 '<li>Smallest common multiple of 4 and 6 = <b>12</b> (not 24!). <span class="mk">[1]</span></li></ol>' }
        ] }
    ]
  };
})();
