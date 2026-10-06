/* Practice Paper 3 — PT-2, Class VI Mathematics (Ch 1–6) */
(function () {
  // four rays from O
  var rays = (function () {
    var cx = 200, cy = 150, R = 130, s = '';
    [['A', 12], ['B', 58], ['C', 112], ['D', 166]].forEach(function (r) {
      var t = r[1] * Math.PI / 180, x = cx + R * Math.cos(t), y = cy - R * Math.sin(t);
      s += '<line x1="' + cx + '" y1="' + cy + '" x2="' + x.toFixed(1) + '" y2="' + y.toFixed(1) + '" stroke="currentColor" stroke-width="2"/>';
      s += '<text x="' + (cx + (R + 14) * Math.cos(t)).toFixed(1) + '" y="' + (cy - (R + 14) * Math.sin(t) + 5).toFixed(1) + '" text-anchor="middle" font-size="14" font-weight="700">' + r[0] + '</text>';
    });
    return '<div class="fig"><svg viewBox="0 0 400 175" width="400" role="img" aria-label="Four rays OA, OB, OC, OD from point O">' + s +
      '<circle cx="' + cx + '" cy="' + cy + '" r="3" fill="currentColor"/><text x="' + cx + '" y="' + (cy + 20) + '" text-anchor="middle" font-size="14" font-weight="700">O</text></svg></div>';
  })();

  // L-shape: 8 × 6 rectangle with 3 × 2 cut from top-right corner; 1 cm = 30 px
  var lshape = '<div class="fig"><svg viewBox="0 0 330 240" width="330" role="img" aria-label="L-shaped figure">' +
    '<path d="M40 30 H190 V90 H280 V210 H40 Z" fill="none" stroke="currentColor" stroke-width="2"/>' +
    '<path d="M190 30 H280 V90" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4" opacity=".55"/>' +
    '<text x="160" y="228" text-anchor="middle" font-size="13">8 cm</text>' +
    '<text x="20" y="124" text-anchor="middle" font-size="13">6 cm</text>' +
    '<text x="235" y="22" text-anchor="middle" font-size="12" opacity=".75">3 cm</text>' +
    '<text x="300" y="64" text-anchor="middle" font-size="12" opacity=".75">2 cm</text>' +
    '<text x="235" y="65" text-anchor="middle" font-size="11" opacity=".7">cut out</text></svg>' +
    '<div class="cap">A 3 cm × 2 cm piece (dashed) is cut from the corner of an 8 cm × 6 cm rectangle.</div></div>';

  window.PAPER = {
    no: 3,
    sections: [
      { id: 'A', title: 'Section A · Multiple choice &amp; Assertion–Reason', pill: '8 × 1 = 8 marks',
        note: 'Choose the correct option. Q7–Q8: choose (a), (b), (c) or (d) as described.',
        qs: [
          { ch: 1, m: 1, q: '<p>The sequence 1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4, … gives the</p>',
            opts: ['Square numbers', 'Triangular numbers', 'Cube numbers', 'Odd numbers'], a: 1,
            ans: '<p>1, 3, 6, 10, … — adding up counting numbers gives triangular numbers.</p>' },
          { ch: 2, m: 1, q: '<p>An angle of 270° is</p>',
            opts: ['Obtuse', 'Straight', 'Reflex', 'Complete'], a: 2,
            ans: '<p>Between 180° and 360° → reflex.</p>' },
          { ch: 5, m: 1, q: '<p>How many factors does 36 have?</p>',
            opts: ['9', '10', '11', '12'], a: 0,
            ans: '<p>1, 2, 3, 4, 6, 9, 12, 18, 36 → 9 factors. (6 × 6 is counted once, which is why a square number has an odd number of factors.)</p>' },
          { ch: 4, m: 1, q: '<p>Three groups of five tally marks followed by ||| stand for</p>',
            opts: ['15', '16', '17', '18'], a: 3,
            ans: '<p>3 × 5 + 3 = 18.</p>' },
          { ch: 6, m: 1, q: '<p>A regular hexagon has a perimeter of 54 cm. Each side is</p>',
            opts: ['6 cm', '8 cm', '9 cm', '12 cm'], a: 2,
            ans: '<p>A hexagon has 6 equal sides: 54 ÷ 6 = 9 cm.</p>' },
          { ch: 3, m: 1, q: '<p>Collatz rule: if a number is even, halve it; if odd, multiply by 3 and add 1. Starting from 6, how many steps does it take to reach 1?</p>',
            opts: ['7', '8', '9', '10'], a: 1,
            ans: '<p>6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1: that is 8 steps.</p>' },
          { ch: 5, m: 1, ar: true,
            A: '2 is the only even prime number.',
            R: 'Every other even number has 2 as a factor, besides 1 and itself.', a: 0,
            ans: '<p>Any even number bigger than 2 has at least three factors (1, 2, itself) so it is composite. That is exactly why 2 is the only even prime.</p>' },
          { ch: 6, m: 1, ar: true,
            A: 'Two squares with different side lengths can have the same perimeter.',
            R: 'The perimeter of a square = 4 × side.', a: 3,
            ans: '<p>R is true. Because perimeter = 4 × side, different sides always give different perimeters, so A is false.</p>' }
        ] },

      { id: 'B', title: 'Section B · Do as directed', pill: '6 × 2 = 12 marks', qs: [
          { ch: 5, m: 2, q: '<p>(i) Find the smallest number that is divisible by each of 4, 6 and 10. (ii) Find the smallest <b>4-digit</b> number divisible by each of 4, 6 and 10.</p>',
            ans: '<p>(i) Multiples of 10: 10, 20, 30, 40, 50, <b>60</b> — the first divisible by both 4 and 6. <span class="mk">[1]</span></p>' +
                 '<p>(ii) Such numbers are multiples of 60. 1000 ÷ 60 = 16 remainder 40, so 16 × 60 = 960 is too small → 17 × 60 = <b>1020</b>. <span class="mk">[1]</span></p>' },
          { ch: 5, m: 2, q: '<p>(i) Write the prime factorisation of 58 × 30 <b>without</b> multiplying the numbers first. (ii) Find the prime factorisation of 1001.</p>',
            ans: '<p>(i) 58 = 2 × 29 and 30 = 2 × 3 × 5 → 58 × 30 = <b>2 × 2 × 3 × 5 × 29</b> <span class="mk">[1]</span></p>' +
                 '<p>(ii) 1001 ÷ 7 = 143; 143 = 11 × 13 → <b>1001 = 7 × 11 × 13</b> <span class="mk">[1]</span></p>' },
          { ch: 2, m: 2, q: '<p>Four rays OA, OB, OC and OD start from O.</p>' + rays + '<p>(i) How many angles (less than 180°) are formed at O? (ii) Name them all.</p>',
            ans: '<p>(i) <b>6 angles</b> (3 + 2 + 1) <span class="mk">[½]</span></p><p>(ii) ∠AOB, ∠AOC, ∠AOD, ∠BOC, ∠BOD, ∠COD <span class="mk">[1½]</span></p>' +
                 '<p class="small">Common mistake: counting only the 3 small angles. Any two rays make an angle.</p>' },
          { ch: 6, m: 2, hard: true, q: lshape + '<p>Find (i) the area and (ii) the perimeter of the remaining L-shaped figure.</p>',
            ans: '<p>(i) Area = 8 × 6 − 3 × 2 = 48 − 6 = <b>42 cm²</b> <span class="mk">[1]</span></p>' +
                 '<p>(ii) Perimeter = 8 + 6 + 5 + 2 + 3 + 4 = <b>28 cm</b> <span class="mk">[1]</span></p>' +
                 '<p class="small">The perimeter is the same as the full rectangle\'s (2 × 14 = 28): the two inner edges (3 cm and 2 cm) exactly replace the two pieces that were removed.</p>' },
          { ch: 3, m: 2, q: '<p>(i) How many times does the digit <b>5</b> appear when you write all the numbers from 1 to 100? (ii) How many 2-digit numbers have a digit sum of 9?</p>',
            ans: '<p>(i) Ones place: 5, 15, 25, …, 95 → 10. Tens place: 50–59 → 10. Total <b>20</b> (55 is counted twice because it has two 5s). <span class="mk">[1]</span></p>' +
                 '<p>(ii) 18, 27, 36, 45, 54, 63, 72, 81, 90 → <b>9</b> numbers. <span class="mk">[1]</span></p>' },
          { ch: 4, m: 2, q: '<p>The bar graph shows the favourite colours of a group of students.</p>' +
               PH.fig('bars', { title: 'Favourite colour', labels: ['Red', 'Blue', 'Green', 'Yellow', 'Pink'], values: [35, 50, 20, 25, 30], step: 5, unit: 'students', xlab: 'Colour', ylab: 'Number of students' }) +
               '<p>(i) How many students were surveyed in all? (ii) Which colour was chosen by exactly twice as many students as yellow?</p>',
            ans: '<p>(i) 35 + 50 + 20 + 25 + 30 = <b>160</b> <span class="mk">[1]</span></p><p>(ii) Yellow = 25, so twice = 50 → <b>Blue</b> <span class="mk">[1]</span></p>' }
        ] },

      { id: 'C', title: 'Section C · Short answer', pill: '4 × 3 = 12 marks', qs: [
          { ch: 5, m: 3, hard: true, q: '<p>In the number 5 2 ★ 4, the ★ stands for a missing digit. Find the <b>smallest</b> digit ★ so that the number is divisible by (i) 3 (ii) 8 (iii) 11.</p>',
            ans: '<ol class="subq"><li>Digit sum = 5 + 2 + ★ + 4 = 11 + ★. The next multiple of 3 is 12 → <b>★ = 1</b> (5214). <span class="mk">[1]</span></li>' +
                 '<li>Last three digits 2★4 must be divisible by 8: 204 ✗, 214 ✗, 224 = 8 × 28 ✓ → <b>★ = 2</b> (5224). <span class="mk">[1]</span></li>' +
                 '<li>Alternate sums: (4 + 2) − (★ + 5) = 1 − ★ must be 0 → <b>★ = 1</b> (5214 = 11 × 474). <span class="mk">[1]</span></li></ol>' },
          { ch: 6, m: 3, q: '<p>List all rectangles with whole-number sides (in cm) whose perimeter is 24 cm. Find the area of each. Which one has the largest area?</p>',
            ans: '<p>Length + breadth = 12. <span class="mk">[½]</span></p>' +
                 '<div class="tablewrap"><table class="compact"><thead><tr><th>l × b</th><th>1 × 11</th><th>2 × 10</th><th>3 × 9</th><th>4 × 8</th><th>5 × 7</th><th>6 × 6</th></tr></thead>' +
                 '<tbody><tr><td>Area (cm²)</td><td>11</td><td>20</td><td>27</td><td>32</td><td>35</td><td><b>36</b></td></tr></tbody></table></div>' +
                 '<p>Table <span class="mk">[2]</span> &nbsp; Largest: the <b>6 cm × 6 cm square</b>, 36 cm² <span class="mk">[½]</span></p>' },
          { ch: 1, m: 3, hard: true, q: '<p>Observe: 1 + 2 = 3, &nbsp;1 + 2 + 4 = 7, &nbsp;1 + 2 + 4 + 8 = 15.</p>' +
               '<ol class="subq"><li>Describe the pattern in words.</li><li>Use it to find 1 + 2 + 4 + 8 + … + 512.</li><li>Similarly (1 + 3 + 9 + 27) × 2 + 1 = 81. Use this idea to find 1 + 3 + 9 + 27 + 81 + 243.</li></ol>',
            ans: '<ol class="subq"><li>The sum of powers of 2 from 1 up to a power of 2 is <b>one less than the next power of 2</b> (3 = 4 − 1, 7 = 8 − 1, 15 = 16 − 1). <span class="mk">[1]</span></li>' +
                 '<li>Next power of 2 after 512 is 1024 → sum = 1024 − 1 = <b>1023</b>. <span class="mk">[1]</span></li>' +
                 '<li>(sum) × 2 + 1 = next power of 3 = 729 → sum × 2 = 728 → sum = <b>364</b>. <span class="mk">[1]</span><br><span class="small">Check: 1 + 3 + 9 + 27 + 81 + 243 = 364 ✓</span></li></ol>' },
          { ch: 4, m: 3, q: '<p>Ice-creams sold at a shop: Mon 150, Tue 225, Wed 300, Thu 75, Fri 375.</p><p>(i) Draw a pictograph using 1 🍦 = 50 ice-creams. (ii) How many ice-creams were sold in all?</p>',
            ans: PH.fig('picto', { head: 'Day', labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], values: [150, 225, 300, 75, 375], per: 50, sym: '🍦', unit: 'ice-creams' }) +
                 '<p>Symbols: 3, 4½, 6, 1½, 7½ (e.g. 225 ÷ 50 = 4.5). Pictograph with key <span class="mk">[2]</span></p>' +
                 '<p>(ii) 150 + 225 + 300 + 75 + 375 = <b>1125</b> <span class="mk">[1]</span></p>' }
        ] },

      { id: 'D', title: 'Section D · Long answer &amp; case study', pill: '2 × 4 = 8 marks', qs: [
          { ch: 5, m: 4, q: '<p><b>Case study — Jumpy and Grumpy.</b> Two rabbits start at 0 on a number line. Jumpy always jumps 4 units; Grumpy always jumps 6 units.</p>' +
               '<ol class="subq"><li>Where do both of them land for the first time (after 0)?</li><li>List all the places up to 60 where both land.</li><li>Treasures are hidden at 30 and at 48. Who can collect each treasure?</li><li>Which jump sizes from 2 to 10 would let a rabbit land on 24?</li></ol>',
            ans: '<ol class="subq"><li>Jumpy: 4, 8, <b>12</b>, … ; Grumpy: 6, <b>12</b>, … → <b>12</b> (smallest common multiple of 4 and 6). <span class="mk">[1]</span></li>' +
                 '<li>Common multiples of 4 and 6 up to 60: <b>12, 24, 36, 48, 60</b>. <span class="mk">[1]</span></li>' +
                 '<li>30: multiple of 6 but not of 4 → <b>Grumpy only</b>. 48: multiple of both → <b>both</b>. <span class="mk">[1]</span></li>' +
                 '<li>Factors of 24 between 2 and 10: <b>2, 3, 4, 6, 8</b>. <span class="mk">[1]</span></li></ol>' },
          { ch: 2, m: 4, q: '<p><b>Case study — Turning on the spot.</b> Riya stands facing North.</p>' +
               '<ol class="subq"><li>She turns clockwise until she faces East. What angle has she turned? Name the type.</li><li>From East she turns a further 135° clockwise. Which direction does she face now?</li><li>What angle does she turn if she goes clockwise from North all the way to West? Name the type.</li><li>Find the smaller angle between the directions North-East and South.</li></ol>',
            ans: '<ol class="subq"><li><b>90°</b> — a right angle. <span class="mk">[1]</span></li>' +
                 '<li>East → South is 90°, then 45° more → <b>South-West</b>. <span class="mk">[1]</span></li>' +
                 '<li>N → E → S → W = 3 × 90° = <b>270°</b> — a reflex angle. <span class="mk">[1]</span></li>' +
                 '<li>NE → E = 45°, E → S = 90° → <b>135°</b> (obtuse). <span class="mk">[1]</span></li></ol>' }
        ] }
    ]
  };
})();
