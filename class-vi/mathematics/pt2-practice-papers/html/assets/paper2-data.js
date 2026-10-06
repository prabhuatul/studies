/* Practice Paper 2 — PT-2, Class VI Mathematics (Ch 1–6) */
(function () {
  var fivePts =
    '<div class="fig"><svg viewBox="0 0 420 60" width="420" role="img" aria-label="Points A to E on a line">' +
    '<line x1="10" y1="30" x2="410" y2="30" stroke="currentColor" stroke-width="2"/>' +
    '<path d="M10 30 l10 -6 v12 z M410 30 l-10 -6 v12 z" fill="currentColor"/>' +
    ['A', 'B', 'C', 'D', 'E'].map(function (p, i) {
      var x = 60 + i * 75;
      return '<circle cx="' + x + '" cy="30" r="4" fill="currentColor"/><text x="' + x + '" y="54" text-anchor="middle" font-size="14" font-weight="700">' + p + '</text>';
    }).join('') + '</svg></div>';

  window.PAPER = {
    no: 2,
    sections: [
      { id: 'A', title: 'Section A · Multiple choice &amp; Assertion–Reason', pill: '8 × 1 = 8 marks',
        note: 'Choose the correct option. Q7–Q8: choose (a), (b), (c) or (d) as described.',
        qs: [
          { ch: 1, m: 1, q: '<p>The Virahānka numbers begin 1, 2, 3, 5, 8, … What is the <b>7th</b> Virahānka number?</p>',
            opts: ['13', '18', '21', '34'], a: 2,
            ans: '<p>Each number is the sum of the two before it: 1, 2, 3, 5, 8, 13, <b>21</b>.</p>' },
          { ch: 2, m: 1, q: '<p>How many rays can be drawn starting from a single point?</p>',
            opts: ['Only one', 'Two', 'Exactly 100', 'Countless'], a: 3,
            ans: '<p>A ray can start at the point and go in any direction, so there is no limit.</p>' },
          { ch: 5, m: 1, q: '<p>Which of these is a pair of <b>twin primes</b>?</p>',
            opts: ['51 and 53', '41 and 43', '87 and 89', '91 and 93'], a: 1,
            ans: '<p>41 and 43 are both prime and differ by 2. The others fail: 51 = 3 × 17, 87 = 3 × 29, 91 = 7 × 13, 93 = 3 × 31.</p>' },
          { ch: 4, m: 1, q: '<p>In a bar graph the scale is 1 unit = 25 kg. How long is the bar for 175 kg?</p>',
            opts: ['5 units', '6 units', '6.5 units', '7 units'], a: 3,
            ans: '<p>175 ÷ 25 = 7 units.</p>' },
          { ch: 6, m: 1, q: '<p>The area of a square is 144 cm². Its perimeter is</p>',
            opts: ['12 cm', '48 cm', '72 cm', '144 cm'], a: 1,
            ans: '<p>Side × side = 144 → side = 12 cm. Perimeter = 4 × 12 = 48 cm.</p>' },
          { ch: 3, m: 1, q: '<p>The <b>smallest</b> 3-digit number whose digits add up to 20 is</p>',
            opts: ['299', '389', '479', '992'], a: 0,
            ans: '<p>To keep the number small, make the hundreds digit as small as possible and push the big digits to the right: 2 + 9 + 9 = 20 → 299. (A hundreds digit of 1 would need 19 from two digits — impossible, since 9 + 9 = 18.)</p>' },
          { ch: 3, m: 1, ar: true,
            A: 'The sum of any five odd numbers is always odd.',
            R: 'odd + odd = even, and even + odd = odd.', a: 0,
            ans: '<p>Pair up four of the odd numbers: two odd + odd pairs give even + even = even. Adding the fifth odd number gives even + odd = odd. R is exactly the reasoning.</p>' },
          { ch: 2, m: 1, ar: true,
            A: 'A straight angle is twice a right angle.',
            R: 'A straight angle measures 90°.', a: 2,
            ans: '<p>Straight angle = 180° = 2 × 90° (A true). But a straight angle is 180°, not 90° (R false).</p>' }
        ] },

      { id: 'B', title: 'Section B · Do as directed', pill: '6 × 2 = 12 marks', qs: [
          { ch: 5, m: 2, q: '<p>(i) Find all the common factors of 72 and 108. (ii) Find the smallest common multiple of 12 and 18.</p>',
            ans: '<p>(i) 72: 1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36, 72<br>108: 1, 2, 3, 4, 6, 9, 12, 18, 27, 36, 54, 108<br>Common factors: <b>1, 2, 3, 4, 6, 9, 12, 18, 36</b> <span class="mk">[1]</span></p>' +
                 '<p>(ii) Multiples of 18: 18, <b>36</b>, … ; 36 = 12 × 3 ✓ → <b>36</b> <span class="mk">[1]</span></p>' },
          { ch: 5, m: 2, q: '<p>Which of these pairs are co-prime? Give a reason for each.<br>(i) 21 and 64 &nbsp; (ii) 39 and 91 &nbsp; (iii) 45 and 77 &nbsp; (iv) 51 and 85</p>',
            ans: '<ol class="subq"><li>21 = 3 × 7, 64 = 2 × 2 × 2 × 2 × 2 × 2 → no common prime → <b>co-prime</b>.</li>' +
                 '<li>39 = 3 × 13, 91 = 7 × 13 → 13 is common → <b>not co-prime</b>.</li>' +
                 '<li>45 = 3 × 3 × 5, 77 = 7 × 11 → <b>co-prime</b>.</li>' +
                 '<li>51 = 3 × 17, 85 = 5 × 17 → 17 is common → <b>not co-prime</b>.</li></ol><p><span class="mk">[½ each]</span></p>' },
          { ch: 2, m: 2, q: '<p>Five points lie on a line as shown.</p>' + fivePts +
               '<p>(i) How many different line segments can be named using these points? List them.<br>(ii) Are ray BC and ray BD the same ray? Give a reason.</p>',
            ans: '<p>(i) AB, AC, AD, AE, BC, BD, BE, CD, CE, DE → <b>10 segments</b> (4 + 3 + 2 + 1). <span class="mk">[1]</span></p>' +
                 '<p>(ii) <b>Yes.</b> Both start at B and go in the same direction (towards C, D, E), so they are the same ray. <span class="mk">[1]</span></p>' },
          { ch: 6, m: 2, q: '<p>A square has a perimeter of 84 cm. (i) Find its side and its area. (ii) An equilateral triangle has the same perimeter. Find the length of its side.</p>',
            ans: '<p>(i) Side = 84 ÷ 4 = <b>21 cm</b>; area = 21 × 21 = <b>441 cm²</b> <span class="mk">[1]</span></p>' +
                 '<p>(ii) Side = 84 ÷ 3 = <b>28 cm</b> <span class="mk">[1]</span></p>' },
          { ch: 4, m: 2, q: '<p>The pictograph shows the trees planted by four sections of Class VI.</p>' +
               PH.fig('picto', { head: 'Section', labels: ['VI A', 'VI B', 'VI C', 'VI D'], values: [40, 28, 48, 20], per: 8, sym: '🌳', unit: 'trees', hideValues: true }) +
               '<p>(i) How many trees did VI C plant? (ii) How many more trees did VI A plant than VI D?</p>',
            ans: '<p>(i) 6 symbols × 8 = <b>48 trees</b> <span class="mk">[1]</span></p>' +
                 '<p>(ii) VI A: 5 × 8 = 40; VI D: 2½ × 8 = 20 → 40 − 20 = <b>20 more</b> <span class="mk">[1]</span></p>' },
          { ch: 3, m: 2, q: '<p>Apply Kaprekar\'s routine (largest arrangement − smallest arrangement) to the 3-digit number <b>352</b>. Continue until a number repeats. Which number do you reach?</p>',
            ans: '<p>532 − 235 = 297<br>972 − 279 = 693<br>963 − 369 = 594<br>954 − 459 = <b>495</b><br>954 − 459 = 495 (repeats) <span class="mk">[1½]</span></p><p>Reached <b>495</b> — the Kaprekar number for 3 digits. <span class="mk">[½]</span></p>' }
        ] },

      { id: 'C', title: 'Section C · Short answer', pill: '4 × 3 = 12 marks', qs: [
          { ch: 5, m: 3, q: '<p>Find the prime factorisation of <b>2520</b> by repeated division. Use it (not division) to say whether 2520 is divisible by (i) 8 (ii) 9 (iii) 7 (iv) 11.</p>',
            ans: '<p>2520 ÷ 2 = 1260 ÷ 2 = 630 ÷ 2 = 315 ÷ 3 = 105 ÷ 3 = 35 ÷ 5 = 7 ÷ 7 = 1</p>' +
                 '<p><b>2520 = 2 × 2 × 2 × 3 × 3 × 5 × 7</b> <span class="mk">[1½]</span></p>' +
                 '<p>(i) 8 = 2 × 2 × 2 — three 2s are present → <b>yes</b>. (ii) 9 = 3 × 3 — two 3s present → <b>yes</b>. (iii) 7 is a prime factor → <b>yes</b>. (iv) 11 is not a prime factor → <b>no</b>. <span class="mk">[1½]</span></p>' +
                 '<p class="small">Fun fact: 2520 is the smallest number divisible by every number from 1 to 10.</p>' },
          { ch: 1, m: 3, hard: true,
            q: '<p>The Koch snowflake starts (stage 0) as an equilateral triangle. At every stage, each side is replaced by 4 sides, each one-third as long.</p>' +
               '<ol class="subq"><li>How many sides does the snowflake have at stage 3?</li><li>How many at stage 4?</li><li>If each side at stage 0 is 27 cm, find the perimeter at stage 0 and at stage 1.</li></ol>',
            ans: '<ol class="subq"><li>Sides: 3 → 12 → 48 → <b>192</b> (× 4 each stage). <span class="mk">[1]</span></li>' +
                 '<li>192 × 4 = <b>768</b>. <span class="mk">[1]</span></li>' +
                 '<li>Stage 0: 3 × 27 = <b>81 cm</b>. Stage 1: 12 sides, each 27 ÷ 3 = 9 cm → 12 × 9 = <b>108 cm</b>. (The perimeter grows even though each side shrinks.) <span class="mk">[1]</span></li></ol>' },
          { ch: 2, m: 3, q: '<p>(i) Using a protractor, draw ∠ABC = 72° and ∠XYZ = 158°.<br>(ii) What angle must be added to ∠ABC to make a right angle?<br>(iii) What angle must be added to ∠XYZ to make a straight angle?</p>',
            ans: PH.fig('angle', { deg: 72, labels: ['A', 'B', 'C'] }) + PH.fig('angle', { deg: 158, labels: ['X', 'Y', 'Z'] }) +
                 '<p>(i) Centre on the vertex, base line on one arm, count from 0° on that arm, mark and join. <span class="mk">[1 + ½]</span><br>' +
                 '(ii) 90° − 72° = <b>18°</b> <span class="mk">[½]</span> &nbsp; (iii) 180° − 158° = <b>22°</b> <span class="mk">[1]</span></p>' },
          { ch: 4, m: 3, q: '<p>Marks (out of 50) scored by 30 students:</p><p class="rawdata">23, 41, 37, 18, 45, 29, 33, 8, 47, 36, 25, 39, 42, 31, 14, 28, 35, 49, 22, 38, 44, 17, 30, 26, 40, 34, 12, 46, 32, 27</p>' +
               '<p>(i) Make a frequency table with tally marks using the groups 0–9, 10–19, 20–29, 30–39, 40–49. (ii) Which group has the most students? (iii) How many students scored 30 or more?</p>',
            ans: PH.freqTable('Marks', [['0–9', 1], ['10–19', 4], ['20–29', 7], ['30–39', 10], ['40–49', 8]]) +
                 '<p>Table <span class="mk">[1½]</span> &nbsp; (ii) <b>30–39</b> <span class="mk">[½]</span> &nbsp; (iii) 10 + 8 = <b>18 students</b> <span class="mk">[1]</span></p>' }
        ] },

      { id: 'D', title: 'Section D · Long answer &amp; case study', pill: '2 × 4 = 8 marks', qs: [
          { ch: 6, m: 4, q: '<p><b>Case study — The school garden.</b> A rectangular garden is 24 m long and 15 m wide.</p>' +
               '<ol class="subq"><li>Find its perimeter.</li><li>It is fenced all round except for a 3 m gate. Find the cost of fencing at ₹35 per metre.</li><li>Find the area of the garden.</li><li>★ A path 1 m wide runs <b>inside</b> the garden all along its edges. Find the area of the path.</li></ol>',
            ans: '<ol class="subq"><li>2 × (24 + 15) = <b>78 m</b> <span class="mk">[1]</span></li>' +
                 '<li>Fence = 78 − 3 = 75 m → 75 × ₹35 = <b>₹2,625</b> <span class="mk">[1]</span></li>' +
                 '<li>24 × 15 = <b>360 m²</b> <span class="mk">[½]</span></li>' +
                 '<li>Inner rectangle: (24 − 2) × (15 − 2) = 22 × 13 = 286 m². Path = 360 − 286 = <b>74 m²</b>. (Subtract 2, not 1 — the path is on both sides.) <span class="mk">[1½]</span></li></ol>' },
          { ch: 4, m: 4, q: '<p>Books issued by the school library in one week:</p>' +
               '<div class="tablewrap"><table class="compact"><thead><tr><th>Day</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr></thead>' +
               '<tbody><tr><td>Books</td><td>45</td><td>70</td><td>55</td><td>90</td><td>30</td><td>65</td></tr></tbody></table></div>' +
               '<ol class="subq"><li>Draw a bar graph with a suitable scale.</li><li>Find the difference between the most and the fewest books issued on a day.</li><li>How many books were issued in the week?</li><li>On how many days were more than 50 books issued?</li></ol>',
            ans: PH.fig('bars', { title: 'Books issued in a week', labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], values: [45, 70, 55, 90, 30, 65], step: 10, unit: 'books', xlab: 'Day', ylab: 'Number of books' }) +
                 '<p>Scale 1 unit = 10 books → bars 4.5, 7, 5.5, 9, 3, 6.5 units. <span class="mk">[2]</span></p>' +
                 '<p>(ii) Thu 90 − Fri 30 = <b>60</b> <span class="mk">[1]</span> &nbsp; (iii) 45 + 70 + 55 + 90 + 30 + 65 = <b>355</b> <span class="mk">[½]</span> &nbsp; (iv) Tue, Wed, Thu, Sat → <b>4 days</b> <span class="mk">[½]</span></p>' }
        ] }
    ]
  };
})();
