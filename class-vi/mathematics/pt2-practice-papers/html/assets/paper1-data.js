/* Practice Paper 1 — PT-2, Class VI Mathematics (Ch 1–6) */
window.PAPER = {
  no: 1,
  sections: [
    { id: 'A', title: 'Section A · Multiple choice &amp; Assertion–Reason', pill: '8 × 1 = 8 marks',
      note: 'Choose the correct option. Q7–Q8: choose (a), (b), (c) or (d) as described.',
      qs: [
        { ch: 1, m: 1, q: '<p>Which of these is <b>not</b> a triangular number?</p>',
          opts: ['21', '28', '36', '35'], a: 3,
          ans: '<p>Triangular numbers: 1, 3, 6, 10, 15, 21, 28, 36, 45 … 35 is skipped (28 + 8 = 36).</p>' },
        { ch: 2, m: 1, q: '<p>The <b>smaller</b> angle between the hands of a clock at 4 o\'clock is</p>',
          opts: ['120°', '100°', '140°', '240°'], a: 0,
          ans: '<p>Each hour mark = 360° ÷ 12 = 30°. From 12 to 4 is 4 marks → 4 × 30° = 120°. (240° is the reflex angle, not the smaller one.)</p>' },
        { ch: 5, m: 1, q: '<p>How many prime numbers are there from 1 to 100?</p>',
          opts: ['21', '24', '25', '26'], a: 2,
          ans: '<p>2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 → 25 primes.</p>' },
        { ch: 4, m: 1, q: '<p>In a pictograph, 1 symbol = 50 students. How many symbols show 175 students?</p>',
          opts: ['3', '3½', '4', '4½'], a: 1,
          ans: '<p>175 ÷ 50 = 3.5 → 3 full symbols and a half symbol.</p>' },
        { ch: 6, m: 1, q: '<p>A rectangle and a square both have perimeter 36 cm. The rectangle is 12 cm long. Which has the larger area?</p>',
          opts: ['Both are the same', 'The rectangle', 'The square', 'Cannot be decided'], a: 2,
          ans: '<p>Square: side 36 ÷ 4 = 9 cm → area 81 cm². Rectangle: 12 + b = 18 → b = 6 cm → area 72 cm². The square wins — for the same perimeter, the square always has the largest area.</p>' },
        { ch: 3, m: 1, q: '<p>The first step of Kaprekar\'s routine on 3524 gives</p>',
          opts: ['3078', '1998', '6174', '3087'], a: 3,
          ans: '<p>Largest arrangement 5432 − smallest 2345 = 3087.</p>' },
        { ch: 5, m: 1, ar: true,
          A: 'The number 1 is neither prime nor composite.',
          R: '1 has exactly one factor.', a: 0,
          ans: '<p>A prime needs exactly 2 factors and a composite more than 2. 1 has only one factor, which is exactly why it is neither — R explains A.</p>' },
        { ch: 5, m: 1, ar: true,
          A: '18 and 25 are co-prime numbers.',
          R: 'Both 18 and 25 are composite numbers.', a: 1,
          ans: '<p>18 = 2 × 3 × 3 and 25 = 5 × 5 share no prime factor → co-prime (A true). Both are composite (R true), but being composite has nothing to do with being co-prime (e.g. 4 and 6 are both composite and not co-prime). So R does not explain A.</p>' }
      ] },

    { id: 'B', title: 'Section B · Do as directed', pill: '6 × 2 = 12 marks', qs: [
        { ch: 5, m: 2, q: '<p>(i) Write all the factors of 84. (ii) Write the first five multiples of 18.</p>',
          ans: '<p>(i) 1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42, 84 <span class="mk">[1]</span><br>' +
               '(Pairs: 1×84, 2×42, 3×28, 4×21, 6×14, 7×12.)<br>' +
               '(ii) 18, 36, 54, 72, 90 <span class="mk">[1]</span></p>' },
        { ch: 5, m: 2, q: '<p>Find the prime factorisation of 1260 using a factor tree.</p>',
          ans: '<p>1260 → 126 × 10; 126 → 2 × 63 → 2 × 7 × 9 → 2 × 7 × 3 × 3; 10 → 2 × 5. <span class="mk">[1 for tree]</span><br>' +
               '<b>1260 = 2 × 2 × 3 × 3 × 5 × 7</b> <span class="mk">[1]</span></p>' +
               '<p class="small">Check: 4 × 9 × 35 = 36 × 35 = 1260 ✓</p>' },
        { ch: 2, m: 2, q: '<p>Using a protractor, draw ∠PQR = 125°. Name the type of angle and write the measure of its reflex angle.</p>',
          ans: PH.fig('angle', { deg: 125, labels: ['P', 'Q', 'R'] }) +
               '<ol><li>Draw ray QR.</li><li>Place the protractor centre on Q, base line along QR.</li>' +
               '<li>Using the scale that starts at 0° on QR, mark P at 125°.</li><li>Join QP.</li></ol>' +
               '<p>Correct drawing <span class="mk">[1]</span>. Type: <b>obtuse</b> (between 90° and 180°); reflex angle = 360° − 125° = <b>235°</b> <span class="mk">[1]</span></p>' },
        { ch: 5, m: 2, q: '<p>Find the common factors of 36, 48 and 60.</p>',
          ans: '<p>36: 1, 2, 3, 4, 6, 9, 12, 18, 36<br>48: 1, 2, 3, 4, 6, 8, 12, 16, 24, 48<br>60: 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60 <span class="mk">[1]</span></p>' +
               '<p>Common factors: <b>1, 2, 3, 4, 6, 12</b> <span class="mk">[1]</span></p>' },
        { ch: 6, m: 2, q: '<p>The perimeter of a rectangle is 62 cm and its length is 19 cm. Find its breadth and its area.</p>',
          ans: '<p>2 × (19 + b) = 62 → 19 + b = 31 → <b>b = 12 cm</b> <span class="mk">[1]</span><br>' +
               'Area = 19 × 12 = <b>228 cm²</b> <span class="mk">[1]</span></p>' },
        { ch: 3, m: 2, q: '<p>Start with 68. Reverse its digits and add. Repeat until you get a palindrome. Show every step and say how many steps it took.</p>',
          ans: '<p>68 + 86 = 154<br>154 + 451 = 605<br>605 + 506 = <b>1111</b> — a palindrome <span class="mk">[1½]</span></p>' +
               '<p><b>3 steps</b> <span class="mk">[½]</span></p>' }
      ] },

    { id: 'C', title: 'Section C · Short answer', pill: '4 × 3 = 12 marks', qs: [
        { ch: 5, m: 3, q: '<p>Without actually dividing, test whether <b>4,356</b> is divisible by (i) 4 (ii) 8 (iii) 9 (iv) 11. Give a reason each time.</p>',
          ans: '<ol class="subq"><li>Last two digits 56 = 4 × 14 → <b>divisible by 4</b>.</li>' +
               '<li>Last three digits 356 ÷ 8 = 44 remainder 4 → <b>not divisible by 8</b>.</li>' +
               '<li>Digit sum 4 + 3 + 5 + 6 = 18, a multiple of 9 → <b>divisible by 9</b>.</li>' +
               '<li>Alternate sums: (6 + 3) − (5 + 4) = 0 → <b>divisible by 11</b> (4356 = 11 × 396).</li></ol>' +
               '<p><span class="mk">[¾ each — ½ for the answer, ¼ for the reason]</span></p>' },
        { ch: 4, m: 3, q: '<p>The shoe sizes of 30 students are:</p><p class="rawdata">5, 6, 4, 7, 6, 5, 8, 6, 5, 7, 6, 4, 6, 7, 5, 6, 8, 5, 6, 7, 4, 6, 5, 7, 6, 9, 5, 6, 7, 6</p>' +
             '<p>(i) Make a frequency table using tally marks. (ii) Which size is the most common? (iii) How many students wear size 7 or bigger?</p>',
          ans: PH.freqTable('Shoe size', [[4, 3], [5, 7], [6, 11], [7, 6], [8, 2], [9, 1]]) +
               '<p>Table <span class="mk">[1½]</span> &nbsp; (ii) <b>Size 6</b> (11 students) <span class="mk">[½]</span> &nbsp; (iii) 6 + 2 + 1 = <b>9 students</b> <span class="mk">[1]</span></p>' },
        { ch: 1, m: 3, hard: true,
          q: '<p>Look at the pattern: 1 = 1 × 1, &nbsp;1 + 3 = 2 × 2, &nbsp;1 + 3 + 5 = 3 × 3.</p>' +
             '<ol class="subq"><li>Without adding, find 1 + 3 + 5 + … + 19.</li><li>How many consecutive odd numbers starting from 1 must be added to get 225?</li><li>Use the pattern to find 21 + 23 + 25 + … + 39.</li></ol>',
          ans: '<ol class="subq"><li>Odd numbers from 1 to 19: (19 + 1) ÷ 2 = 10 of them → 10 × 10 = <b>100</b>. <span class="mk">[1]</span></li>' +
               '<li>225 = 15 × 15 → <b>15 odd numbers</b> (1 to 29). <span class="mk">[1]</span></li>' +
               '<li>1 + 3 + … + 39 = first 20 odd numbers = 20 × 20 = 400. Subtract 1 + 3 + … + 19 = 100. → 400 − 100 = <b>300</b>. <span class="mk">[1]</span></li></ol>' },
        { ch: 6, m: 3, q: '<p>A hall is 12 m long and 9 m wide. Its floor is to be covered with square tiles of side 60 cm.</p>' +
             '<ol class="subq"><li>How many tiles are needed?</li><li>Find the cost of the tiles at ₹45 per tile.</li><li>A skirting strip is fixed along all four walls. How long is the strip?</li></ol>',
          ans: '<ol class="subq"><li>12 m = 1200 cm → 1200 ÷ 60 = 20 tiles along the length; 9 m = 900 cm → 900 ÷ 60 = 15 along the width. Tiles = 20 × 15 = <b>300</b>. <span class="mk">[1]</span><br><span class="small">(Or: area 1200 × 900 = 10,80,000 cm² ÷ 3600 cm² = 300.)</span></li>' +
               '<li>300 × ₹45 = <b>₹13,500</b>. <span class="mk">[1]</span></li>' +
               '<li>Perimeter = 2 × (12 + 9) = <b>42 m</b>. <span class="mk">[1]</span></li></ol>' }
      ] },

    { id: 'D', title: 'Section D · Long answer &amp; case study', pill: '2 × 4 = 8 marks', qs: [
        { ch: 4, m: 4, q: '<p>A school survey asked students to choose one sport:</p>' +
             '<div class="tablewrap"><table class="compact"><thead><tr><th>Sport</th><th>Cricket</th><th>Football</th><th>Badminton</th><th>Kabaddi</th><th>Chess</th></tr></thead>' +
             '<tbody><tr><td>Students</td><td>120</td><td>85</td><td>60</td><td>45</td><td>30</td></tr></tbody></table></div>' +
             '<ol class="subq"><li>Draw a bar graph. Choose a suitable scale and mention it.</li><li>How many students were surveyed?</li><li>How many times as many students chose cricket as chose chess?</li></ol>',
          ans: PH.fig('bars', { title: 'Favourite sport of students', labels: ['Cricket', 'Football', 'Badminton', 'Kabaddi', 'Chess'], values: [120, 85, 60, 45, 30], step: 10, unit: 'students', xlab: 'Sport', ylab: 'Number of students' }) +
               '<p>Scale 1 unit = 10 students → bar lengths 12, 8.5, 6, 4.5, 3 units. Equal widths, equal gaps, title and axis labels. <span class="mk">[2]</span></p>' +
               '<p>(ii) 120 + 85 + 60 + 45 + 30 = <b>340</b> <span class="mk">[1]</span> &nbsp; (iii) 120 ÷ 30 = <b>4 times</b> <span class="mk">[1]</span></p>' },
        { ch: 2, m: 4, q: '<p><b>Case study — The clock.</b> Meera notices that the hands of a clock form different angles during the day.</p>' +
             '<ol class="subq"><li>Through what angle does the minute hand turn in 20 minutes?</li><li>Through what angle does the hour hand turn in 1 hour?</li><li>What is the smaller angle between the hands at 5:00? Name its type.</li><li>What is the <b>reflex</b> angle between the hands at 2:00?</li></ol>',
          ans: '<ol class="subq"><li>Minute hand: 360° in 60 min → 6° per minute → 20 × 6° = <b>120°</b>. <span class="mk">[1]</span></li>' +
               '<li>Hour hand: 360° in 12 hours → <b>30°</b> per hour. <span class="mk">[1]</span></li>' +
               '<li>5 × 30° = <b>150°</b>, an <b>obtuse</b> angle. <span class="mk">[1]</span></li>' +
               '<li>Smaller angle = 2 × 30° = 60° → reflex = 360° − 60° = <b>300°</b>. <span class="mk">[1]</span></li></ol>' }
      ] }
  ]
};
