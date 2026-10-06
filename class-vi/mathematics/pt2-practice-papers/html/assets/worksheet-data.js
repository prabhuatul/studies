/* Solutions to the school's PT-2 revision worksheet (Global Academy for Learning, 2026–27) */
(function () {
  function poly(n) { return '<div class="fig" data-poly="' + n + '"></div>'; }
  var defs = [
    ['Prime number', 'A number with exactly two factors, 1 and itself.', '2, 3, 5, 7, 11, 13'],
    ['Composite number', 'A number with more than two factors.', '4, 6, 8, 9, 10, 12'],
    ['Odd number', 'A number not divisible by 2; ends in 1, 3, 5, 7 or 9.', '1, 3, 15, 27'],
    ['Even number', 'A number divisible by 2; ends in 0, 2, 4, 6 or 8.', '2, 10, 36, 98'],
    ['Twin primes', 'Two prime numbers that differ by 2.', '(3, 5), (11, 13), (41, 43)'],
    ['Factor', 'A number that divides a given number exactly, leaving no remainder.', 'Factors of 12: 1, 2, 3, 4, 6, 12'],
    ['Multiple', 'The product of a number with 1, 2, 3, …', 'Multiples of 7: 7, 14, 21, 28'],
    ['Triangular numbers', 'Numbers of dots that can be arranged in a triangle; 1, 1+2, 1+2+3, …', '1, 3, 6, 10, 15, 21'],
    ['Virahānka numbers', 'A sequence in which each number is the sum of the two before it.', '1, 2, 3, 5, 8, 13, 21'],
    ['Palindromic pattern', 'Numbers that read the same forwards and backwards; reverse-and-add often produces them.', '121, 4334; 39 + 93 = 132, 132 + 231 = 363'],
    ['Kaprekar constant', '6174 — the number every 4-digit number (digits not all equal) reaches by repeatedly doing (largest arrangement − smallest arrangement).', '3524 → 3087 → 8352 → 6174'],
    ['Point', 'An exact location; it has no size. Named by a capital letter.', 'Point A; the tip of a pencil'],
    ['Line segment', 'The shortest path between two points; has two end points and a fixed length.', 'Segment AB; an edge of a ruler'],
    ['Line', 'A line segment extended endlessly in both directions; no end points.', 'Line AB (↔), line l'],
    ['Ray', 'Part of a line that starts at one point and goes endlessly in one direction.', 'Ray OP; a torch beam'],
    ['Angle', 'The figure formed by two rays with a common starting point (vertex).', '∠ABC; the opening of scissors'],
    ['Perimeter', 'The total length of the boundary of a closed figure.', 'Square of side 5 cm: 20 cm'],
    ['Data', 'A collection of facts or numbers gathered to give information.', 'Heights of students in a class'],
    ['Tally marks', 'Vertical strokes used to count data, grouped in fives with the fifth stroke across the four.', PH.tally(7) + ' = 7'],
    ['Frequency', 'The number of times a particular value occurs in the data.', 'If 6 students like mango, its frequency is 6'],
    ['Pictograph', 'Data shown using pictures/symbols, with a key giving the value of one symbol.', '1 📘 = 10 books'],
    ['Bar graph', 'Data shown by bars of equal width and equal gaps, whose lengths follow a uniform scale.', 'Marks in each subject']
  ];

  window.PAPER = {
    kind: 'worksheet',
    sections: [
      { id: 'II', title: 'II. Do as directed — worked solutions', qs: [
          { ch: 5, q: '<p>Write all the factors of the numbers: 100, 96, 77, 35, 45 and 42.</p>',
            ans: '<div class="tablewrap"><table class="compact"><tbody>' +
                 '<tr><td>100</td><td>1, 2, 4, 5, 10, 20, 25, 50, 100</td></tr>' +
                 '<tr><td>96</td><td>1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 96</td></tr>' +
                 '<tr><td>77</td><td>1, 7, 11, 77</td></tr>' +
                 '<tr><td>35</td><td>1, 5, 7, 35</td></tr>' +
                 '<tr><td>45</td><td>1, 3, 5, 9, 15, 45</td></tr>' +
                 '<tr><td>42</td><td>1, 2, 3, 6, 7, 14, 21, 42</td></tr></tbody></table></div>' +
                 '<p class="small">Method: find factor pairs (1 × 100, 2 × 50, 4 × 25, 5 × 20, 10 × 10) and stop when the pairs meet.</p>' },
          { ch: 5, q: '<p>Write the first 5 multiples of 15, 16, 24, 12, 26, 32.</p>',
            ans: '<div class="tablewrap"><table class="compact"><tbody>' +
                 '<tr><td>15</td><td>15, 30, 45, 60, 75</td></tr><tr><td>16</td><td>16, 32, 48, 64, 80</td></tr>' +
                 '<tr><td>24</td><td>24, 48, 72, 96, 120</td></tr><tr><td>12</td><td>12, 24, 36, 48, 60</td></tr>' +
                 '<tr><td>26</td><td>26, 52, 78, 104, 130</td></tr><tr><td>32</td><td>32, 64, 96, 128, 160</td></tr></tbody></table></div>' },
          { ch: 4, q: '<p>The marks obtained by 35 students are: 45, 25, 19, 26, 44, 48, 12, 33, 30, 42, 14, 15, 26, 39, 44, 37, 24, 49, 17, 35, 26, 36, 33 and 26. Using tally marks, represent the data.</p>',
            ans: '<div class="note warn"><span class="lbl">Check the question</span>The worksheet says 35 students, but only <b>24</b> marks are listed. The table below uses the 24 marks given — ask the teacher whether some marks are missing.</div>' +
                 '<p>The marks are spread out, so group them in tens:</p>' +
                 PH.freqTable('Marks', [['10–19', 5], ['20–29', 6], ['30–39', 7], ['40–49', 6]]) +
                 '<p class="small">10–19: 19, 12, 14, 15, 17 · 20–29: 25, 26, 26, 24, 26, 26 · 30–39: 33, 30, 39, 37, 35, 36, 33 · 40–49: 45, 44, 48, 42, 44, 49. Strike off each mark as you tally it so none is missed.</p>' },
          { ch: 4, q: '<p>Sale of books in a week: Mon 240, Tue 720, Wed 480, Thu 600, Fri 840, Sat 360, Sun 720. Represent the data using a pictograph.</p>',
            ans: '<p>Every number is a multiple of 120 → choose the key <b>1 📘 = 120 books</b>.</p>' +
                 PH.fig('picto', { head: 'Day', labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], values: [240, 720, 480, 600, 840, 360, 720], per: 120, sym: '📘', unit: 'books' }) +
                 '<p class="small">Symbols: 2, 6, 4, 5, 7, 3, 6. Always write the key.</p>' },
          { ch: 1, q: '<p>Draw a polygon with (a) 3 sides (b) 8 sides (c) 12 sides (d) 4 sides.</p>',
            ans: poly(3) + poly(8) + poly(12) + poly(4) +
                 '<p>(a) triangle (b) octagon (c) dodecagon (d) quadrilateral. These are drawn <b>regular</b> (all sides and angles equal), but any closed figure with that many straight sides is correct.</p>' },
          { ch: 1, q: '<p>Define with examples: prime numbers, odd and even numbers, perimeter, data, pictograph, tally mark, composite numbers, twin prime numbers, triangular numbers, Virahānka numbers, ray, line, line segment, point, factors, multiples, angle, palindromic patterns, Kaprekar constant, frequencies, bar graph.</p>',
            ans: '<div class="tablewrap"><table class="compact"><thead><tr><th>Term</th><th>Definition</th><th>Example</th></tr></thead><tbody>' +
                 defs.map(function (d) { return '<tr><td>' + d[0] + '</td><td>' + d[1] + '</td><td>' + d[2] + '</td></tr>'; }).join('') +
                 '</tbody></table></div>' },
          { ch: 5, q: '<p>Find the common factors of: (i) 20 and 28 (ii) 35 and 50 (iii) 4, 8 and 12 (iv) 5, 15 and 25.</p>',
            ans: '<ol class="subq"><li>20: 1, 2, 4, 5, 10, 20; 28: 1, 2, 4, 7, 14, 28 → <b>1, 2, 4</b></li>' +
                 '<li>35: 1, 5, 7, 35; 50: 1, 2, 5, 10, 25, 50 → <b>1, 5</b></li>' +
                 '<li>4: 1, 2, 4; 8: 1, 2, 4, 8; 12: 1, 2, 3, 4, 6, 12 → <b>1, 2, 4</b></li>' +
                 '<li>5: 1, 5; 15: 1, 3, 5, 15; 25: 1, 5, 25 → <b>1, 5</b></li></ol>' },
          { ch: 5, q: '<p>List all the prime numbers from 1 to 100.</p>',
            ans: '<div class="tablewrap"><table class="compact"><tbody>' +
                 '<tr><td>1–10</td><td>2, 3, 5, 7</td><td>4</td></tr><tr><td>11–20</td><td>11, 13, 17, 19</td><td>4</td></tr>' +
                 '<tr><td>21–30</td><td>23, 29</td><td>2</td></tr><tr><td>31–40</td><td>31, 37</td><td>2</td></tr>' +
                 '<tr><td>41–50</td><td>41, 43, 47</td><td>3</td></tr><tr><td>51–60</td><td>53, 59</td><td>2</td></tr>' +
                 '<tr><td>61–70</td><td>61, 67</td><td>2</td></tr><tr><td>71–80</td><td>71, 73, 79</td><td>3</td></tr>' +
                 '<tr><td>81–90</td><td>83, 89</td><td>2</td></tr><tr><td>91–100</td><td>97</td><td>1</td></tr>' +
                 '<tr><td><b>Total</b></td><td></td><td><b>25</b></td></tr></tbody></table></div>' +
                 '<p class="small">Traps: 1 is not prime; 51 = 3 × 17, 57 = 3 × 19, 87 = 3 × 29, 91 = 7 × 13 are not prime.</p>' },
          { ch: 5, q: '<p>Which pairs are co-prime? (a) 18 and 35 (b) 15 and 37 (c) 30 and 415 (d) 17 and 69 (e) 81 and 18</p>',
            ans: '<ol class="subq alpha"><li>18 = 2 × 3 × 3, 35 = 5 × 7 → <b>co-prime</b></li>' +
                 '<li>15 = 3 × 5, 37 is prime → <b>co-prime</b></li>' +
                 '<li>Both end in 0 or 5 → 5 is a common factor → <b>not co-prime</b></li>' +
                 '<li>17 is prime, 69 = 3 × 23 → <b>co-prime</b></li>' +
                 '<li>81 = 3 × 3 × 3 × 3, 18 = 2 × 3 × 3 → 9 is a common factor → <b>not co-prime</b></li></ol>' },
          { ch: 5, q: '<p>Find the prime factorisations of 66, 104, 107, 243, 420, 241, 1728, 729.</p>',
            ans: '<div class="tablewrap"><table class="compact"><tbody>' +
                 '<tr><td>66</td><td>2 × 3 × 11</td></tr>' +
                 '<tr><td>104</td><td>2 × 2 × 2 × 13</td></tr>' +
                 '<tr><td>107</td><td>107 — it is <b>prime</b> (not divisible by 2, 3, 5 or 7, and 11 × 11 = 121 > 107)</td></tr>' +
                 '<tr><td>243</td><td>3 × 3 × 3 × 3 × 3</td></tr>' +
                 '<tr><td>420</td><td>2 × 2 × 3 × 5 × 7</td></tr>' +
                 '<tr><td>241</td><td>241 — it is <b>prime</b> (not divisible by 2, 3, 5, 7, 11 or 13, and 17 × 17 = 289 > 241)</td></tr>' +
                 '<tr><td>1728</td><td>2 × 2 × 2 × 2 × 2 × 2 × 3 × 3 × 3</td></tr>' +
                 '<tr><td>729</td><td>3 × 3 × 3 × 3 × 3 × 3</td></tr></tbody></table></div>' },
          { ch: 5, q: '<p>Explain the divisibility rules for 2, 3, 4, 5, 6, 8, 9, 10 and 11.</p>',
            ans: '<div class="tablewrap"><table class="compact"><thead><tr><th>By</th><th>Rule</th><th>Example</th></tr></thead><tbody>' +
                 '<tr><td>2</td><td>Last digit is 0, 2, 4, 6 or 8</td><td>3,958</td></tr>' +
                 '<tr><td>3</td><td>Sum of digits divisible by 3</td><td>5,214 (5+2+1+4 = 12)</td></tr>' +
                 '<tr><td>4</td><td>Number formed by the last two digits divisible by 4</td><td>7,316 (16)</td></tr>' +
                 '<tr><td>5</td><td>Last digit 0 or 5</td><td>9,135</td></tr>' +
                 '<tr><td>6</td><td>Divisible by both 2 and 3</td><td>4,356</td></tr>' +
                 '<tr><td>8</td><td>Number formed by the last three digits divisible by 8</td><td>5,224 (224 = 8 × 28)</td></tr>' +
                 '<tr><td>9</td><td>Sum of digits divisible by 9</td><td>4,356 (18)</td></tr>' +
                 '<tr><td>10</td><td>Last digit 0</td><td>3,960</td></tr>' +
                 '<tr><td>11</td><td>(Sum of digits in odd places) − (sum in even places) is 0 or a multiple of 11</td><td>4,356: (6+3) − (5+4) = 0</td></tr>' +
                 '</tbody></table></div>' },
          { ch: 6, q: '<p>Find the missing term: perimeter of a rectangle = 25 cm, breadth = 5 cm, length = ?</p>',
            ans: '<p>2 × (l + 5) = 25 → l + 5 = 12.5 → <b>l = 7.5 cm</b></p>' },
          { ch: 6, q: '<p>Find the perimeter of a square of side 20 cm.</p>',
            ans: '<p>4 × 20 = <b>80 cm</b></p>' },
          { ch: 6, q: '<p>A regular pentagon has a perimeter of 100 cm. What is the measure of its side?</p>',
            ans: '<p>A regular pentagon has 5 equal sides → 100 ÷ 5 = <b>20 cm</b></p>' },
          { ch: 2, q: '<p>Use a protractor to draw angles of 110°, 40°, 75°, 112° and 134°.</p>',
            ans: [110, 40, 75, 112, 134].map(function (d) { return PH.fig('angle', { deg: d, labels: ['A', 'B', 'C'] }); }).join('') +
                 '<ol><li>Draw ray BC.</li><li>Put the protractor centre exactly on B, base line on BC.</li><li>Read from the 0° that lies on BC (inner or outer scale) and mark A at the required degree.</li><li>Join BA and write the measure.</li></ol>' +
                 '<p class="small">Self-check: 40° and 75° must look smaller than a right angle (acute); 110°, 112°, 134° bigger (obtuse). If not, you read the wrong scale.</p>' },
          { ch: 4, q: '<p>Prepare a bar graph of the marks you scored in Periodic Test-1 in all subjects (out of 40). Take a suitable scale and mention it.</p>',
            ans: '<div class="note warn"><span class="lbl">Use your own marks</span>The graph below uses <b>example</b> marks. Replace them with your real PT-1 marks.</div>' +
                 PH.fig('bars', { title: 'PT-1 marks (example)', labels: ['English', 'Hindi', 'Maths', 'Science', 'Social Sci.', 'Kannada'], values: [34, 28, 38, 31, 26, 30], step: 5, unit: 'marks', xlab: 'Subject', ylab: 'Marks (out of 40)' }) +
                 '<p>Since marks are out of 40, a scale of <b>1 unit = 5 marks</b> (8 units tall) or 1 unit = 4 marks fits well. Give equal widths and gaps, label both axes, write a title and the scale.</p>' }
        ] }
    ]
  };
})();
