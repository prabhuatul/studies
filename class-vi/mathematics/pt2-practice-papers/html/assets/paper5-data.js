/* Practice Paper 5 — PT-2, Class VI Mathematics (Ch 1–6) — the hardest of the set */
(function () {
  // 30 × 20 sheet with 5 × 5 squares cut from each corner; 1 cm = 9 px
  var sheet = '<div class="fig"><svg viewBox="0 0 320 220" width="320" role="img" aria-label="Rectangular sheet with squares cut from the corners">' +
    '<path d="M70 20 H250 V65 H295 V155 H250 V200 H70 V155 H25 V65 H70 Z" fill="none" stroke="currentColor" stroke-width="2"/>' +
    '<path d="M25 20 H70 V65 H25 Z M250 20 H295 V65 H250 Z M25 155 H70 V200 H25 Z M250 155 H295 V200 H250 Z" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3" opacity=".5"/>' +
    '<text x="160" y="216" text-anchor="middle" font-size="12">30 cm</text>' +
    '<text x="312" y="114" text-anchor="middle" font-size="12">20 cm</text>' +
    '<text x="47" y="46" text-anchor="middle" font-size="11" opacity=".75">5</text></svg>' +
    '<div class="cap">A square of side 5 cm (dashed) is cut from each corner of a 30 cm × 20 cm sheet.</div></div>';

  var G = [[12, 45, 30, 27], [38, 19, 52, 16], [24, 61, 40, 33]];

  window.PAPER = {
    no: 5,
    sections: [
      { id: 'A', title: 'Section A · Multiple choice &amp; Assertion–Reason', pill: '8 × 1 = 8 marks',
        note: 'Choose the correct option. Q7–Q8: choose (a), (b), (c) or (d) as described.',
        qs: [
          { ch: 1, m: 1, q: '<p>The 10th triangular number is</p>',
            opts: ['45', '55', '66', '100'], a: 1,
            ans: '<p>1 + 2 + … + 10 = 10 × 11 ÷ 2 = 55.</p>' },
          { ch: 2, m: 1, q: '<p>∠AOC is a right angle and ray OB lies inside it. If ∠AOB = 35°, then ∠BOC =</p>',
            opts: ['35°', '45°', '55°', '125°'], a: 2,
            ans: '<p>∠AOB + ∠BOC = 90° → ∠BOC = 90° − 35° = 55°.</p>' },
          { ch: 5, m: 1, q: '<p>Which pair is <b>not</b> co-prime?</p>',
            opts: ['9 and 13', '1 and 117', '117 and 118', '3 and 39'], a: 3,
            ans: '<p>3 divides both 3 and 39. (1 is co-prime to every number; consecutive numbers like 117 and 118 are always co-prime.)</p>' },
          { ch: 4, m: 1, q: '<p>On a bar graph with scale 1 unit = 50 cars, a bar is 3.5 units long. It shows</p>',
            opts: ['35 cars', '150 cars', '175 cars', '350 cars'], a: 2,
            ans: '<p>3.5 × 50 = 175.</p>' },
          { ch: 6, m: 1, hard: true, q: '<p>A square of side 12 cm is cut into 4 equal squares. What is the <b>total</b> perimeter of the 4 small squares?</p>',
            opts: ['96 cm', '120 cm', '144 cm', '192 cm'], a: 0,
            ans: '<p>Each small square has side 6 cm → perimeter 24 cm → 4 × 24 = 96 cm (double the original 48 cm, because the cuts add new edges).</p>' },
          { ch: 3, m: 1, q: '<p>Start with 57, reverse and add, and repeat until you get a palindrome. How many steps does it take?</p>',
            opts: ['1', '2', '3', '4'], a: 1,
            ans: '<p>57 + 75 = 132; 132 + 231 = 363 ✓ — 2 steps.</p>' },
          { ch: 5, m: 1, ar: true,
            A: '1729 is divisible by 9.',
            R: 'The sum of the digits of 1729 is 19.', a: 3,
            ans: '<p>Digit sum 1 + 7 + 2 + 9 = 19 (R true). 19 is not a multiple of 9, so 1729 is <b>not</b> divisible by 9 (A false). (1729 = 7 × 13 × 19 — the famous Ramanujan number.)</p>' },
          { ch: 2, m: 1, ar: true,
            A: 'At 6 o\'clock, the hands of a clock make a straight angle.',
            R: 'At 6 o\'clock the two hands point in exactly opposite directions.', a: 0,
            ans: '<p>6 × 30° = 180°. Opposite directions are what make a straight angle — R explains A.</p>' }
        ] },

      { id: 'B', title: 'Section B · Do as directed', pill: '6 × 2 = 12 marks', qs: [
          { ch: 5, m: 2, hard: true, q: '<p>Find the smallest number which, when divided by 6, by 8 and by 12, leaves a remainder of 5 each time. Find the next such number too.</p>',
            ans: '<p>The number minus 5 must be a common multiple of 6, 8 and 12. Smallest common multiple: multiples of 12 → 12, <b>24</b> (24 ÷ 8 = 3 ✓, 24 ÷ 6 = 4 ✓). <span class="mk">[1]</span></p>' +
                 '<p>Number = 24 + 5 = <b>29</b>; next = 48 + 5 = <b>53</b>. <span class="mk">[1]</span></p><p class="small">Check: 29 = 6 × 4 + 5 = 8 × 3 + 5 = 12 × 2 + 5 ✓</p>' },
          { ch: 5, m: 2, q: '<p>Find the prime factorisations of 5040 and 1925, and use them to list all the common factors of the two numbers.</p>',
            ans: '<p>5040 = 2 × 2 × 2 × 2 × 3 × 3 × 5 × 7; &nbsp;1925 = 5 × 5 × 7 × 11 <span class="mk">[1]</span></p>' +
                 '<p>Shared primes: one 5 and one 7 → common factors <b>1, 5, 7, 35</b> <span class="mk">[1]</span></p>' +
                 '<p class="small">25 is not common: 5040 has only one 5.</p>' },
          { ch: 2, m: 2, q: '<p>Using a protractor, draw a <b>reflex</b> angle ∠PQR = 240°. Explain your method.</p>',
            ans: PH.fig('angle', { deg: 240, labels: ['P', 'Q', 'R'] }) +
                 '<p>A protractor only goes up to 180°, so draw 360° − 240° = <b>120°</b> first: ray QR, protractor centre at Q, mark P at 120°, join QP. The angle on the <b>outside</b> is 240° — mark it with an arc. <span class="mk">[1 method + 1 drawing]</span></p>' },
          { ch: 6, m: 2, hard: true, q: sheet + '<p>Find (i) the area and (ii) the perimeter of the remaining sheet.</p>',
            ans: '<p>(i) 30 × 20 − 4 × (5 × 5) = 600 − 100 = <b>500 cm²</b> <span class="mk">[1]</span></p>' +
                 '<p>(ii) Each corner swaps two 5 cm edges for two new 5 cm edges, so the perimeter is unchanged: 2 × (30 + 20) = <b>100 cm</b> <span class="mk">[1]</span></p>' },
          { ch: 3, m: 2, q: '<p>A cell is a <b>supercell</b> if its number is greater than all the numbers next to it (left, right, above, below).</p>' + PH.grid(G) +
               '<p>(i) Find all the supercells. (ii) Explain why the largest number in any grid is always a supercell.</p>',
            ans: PH.grid(G, ['0,1', '1,0', '1,2', '2,1']) +
                 '<p>(i) <b>45, 38, 52, 61</b> (4 supercells) <span class="mk">[1]</span></p>' +
                 '<p>(ii) The largest number is greater than <b>every</b> number in the grid, so it is certainly greater than its own neighbours. <span class="mk">[1]</span></p>' },
          { ch: 1, m: 2, q: '<p>A big triangle is divided into rows of small triangles: 1 row gives 1 small triangle, 2 rows give 4, 3 rows give 9.<br>(i) How many small triangles are there with 6 rows? (ii) How many rows give 81 small triangles?</p>',
            ans: '<p>The counts are square numbers (rows × rows). <span class="mk">[½]</span></p><p>(i) 6 × 6 = <b>36</b> <span class="mk">[½]</span> &nbsp; (ii) 81 = 9 × 9 → <b>9 rows</b> <span class="mk">[1]</span></p>' }
        ] },

      { id: 'C', title: 'Section C · Short answer', pill: '4 × 3 = 12 marks', qs: [
          { ch: 5, m: 3, hard: true, q: '<p>Find the <b>greatest 4-digit number</b> that is divisible by each of 2, 3, 4, 5, 6, 8, 9 and 10. Check your answer using divisibility tests for 8 and 9.</p>',
            ans: '<p>It must contain 2 × 2 × 2 (for 8), 3 × 3 (for 9) and 5 (for 5 and 10) → smallest such number 8 × 9 × 5 = <b>360</b>; all the others (2, 3, 4, 6) are then automatic. <span class="mk">[1]</span></p>' +
                 '<p>9999 ÷ 360 = 27 remainder 279 → 27 × 360 = <b>9720</b>. <span class="mk">[1]</span></p>' +
                 '<p>Check: last three digits 720 = 8 × 90 ✓; digit sum 9 + 7 + 2 + 0 = 18 ✓ (and it ends in 0). <span class="mk">[1]</span></p>' },
          { ch: 4, m: 3, q: '<p>Students absent in a school: Mon 48, Tue 30, Wed 54, Thu 18, Fri 42.</p><p>(i) Draw a pictograph with 1 🧒 = 12 students. (ii) On which days were more than 40 students absent? (iii) Find the total absences.</p>',
            ans: PH.fig('picto', { head: 'Day', labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], values: [48, 30, 54, 18, 42], per: 12, sym: '🧒', unit: 'students' }) +
                 '<p>Symbols 4, 2½, 4½, 1½, 3½ <span class="mk">[1½]</span> &nbsp; (ii) <b>Mon, Wed, Fri</b> <span class="mk">[½]</span> &nbsp; (iii) <b>192</b> <span class="mk">[1]</span></p>' },
          { ch: 6, m: 3, hard: true, q: '<p>A rectangle has a perimeter of 46 cm and an area of 120 cm². Its sides are whole numbers.</p><ol class="subq"><li>Find its length and breadth.</li><li>A square has the same perimeter. Find its area.</li><li>Which has the larger area?</li></ol>',
            ans: '<ol class="subq"><li>l + b = 23 and l × b = 120. Factor pairs of 120: (1, 120), (2, 60), (3, 40), (4, 30), (5, 24), (6, 20), (8, 15), (10, 12). Only 8 + 15 = 23 → <b>15 cm × 8 cm</b>. <span class="mk">[1½]</span></li>' +
                 '<li>Side = 46 ÷ 4 = 11.5 cm → area = 11.5 × 11.5 = <b>132.25 cm²</b>. <span class="mk">[1]</span></li>' +
                 '<li>The <b>square</b> (132.25 > 120). <span class="mk">[½]</span></li></ol>' },
          { ch: 2, m: 3, hard: true, q: '<ol class="subq"><li>Find the smaller angle between the hands of a clock at <b>2:30</b>. (Careful: the hour hand moves too!)</li><li>Find the smaller and the reflex angle between the hands at 7:00.</li><li>Name the type of angle the hands make at 9:00.</li></ol>',
            ans: '<ol class="subq"><li>Minute hand at 6 → 180° from 12. Hour hand: 2 × 30° = 60°, plus half of the next 30° (half an hour has passed) = 75°. Angle = 180° − 75° = <b>105°</b>. <span class="mk">[1½]</span></li>' +
                 '<li>7 × 30° = 210° measured one way → smaller angle = 360° − 210° = <b>150°</b>; reflex = <b>210°</b>. <span class="mk">[1]</span></li>' +
                 '<li>3 × 30° = 90° → <b>right angle</b>. <span class="mk">[½]</span></li></ol>' }
        ] },

      { id: 'D', title: 'Section D · Long answer &amp; case study', pill: '2 × 4 = 8 marks', qs: [
          { ch: 4, m: 4, q: '<p>Anu\'s Periodic Test-1 marks (out of 40):</p>' +
               '<div class="tablewrap"><table class="compact"><thead><tr><th>Subject</th><th>English</th><th>Hindi</th><th>Maths</th><th>Science</th><th>Social Sci.</th><th>Kannada</th></tr></thead>' +
               '<tbody><tr><td>Marks</td><td>34</td><td>28</td><td>38</td><td>31</td><td>26</td><td>30</td></tr></tbody></table></div>' +
               '<ol class="subq"><li>Draw a bar graph. Choose a suitable scale and mention it.</li><li>In which subject did she score the highest and the lowest? Find the difference.</li><li>Find her total out of 240.</li><li>In how many subjects did she score 30 or more?</li></ol>',
            ans: PH.fig('bars', { title: "Anu's PT-1 marks (out of 40)", labels: ['English', 'Hindi', 'Maths', 'Science', 'Social Sci.', 'Kannada'], values: [34, 28, 38, 31, 26, 30], step: 5, unit: 'marks', xlab: 'Subject', ylab: 'Marks' }) +
                 '<p>Scale 1 unit = 5 marks → bars 6.8, 5.6, 7.6, 6.2, 5.2, 6 units. (1 unit = 2 marks also works.) <span class="mk">[2]</span></p>' +
                 '<p>(ii) Highest Maths 38, lowest Social Science 26 → <b>12</b> <span class="mk">[1]</span> &nbsp; (iii) <b>187</b> <span class="mk">[½]</span> &nbsp; (iv) English, Maths, Science, Kannada → <b>4</b> <span class="mk">[½]</span></p>' +
                 '<p class="small">Now redo this with your own PT-1 marks — that is worksheet Q16.</p>' },
          { ch: 5, m: 4, q: '<p><b>Case study — The Sieve of Eratosthenes.</b> To find the primes from 1 to 100, Ravi crosses out 1, then crosses out every multiple of 2 (except 2), then of 3, of 5 and of 7.</p>' +
               '<ol class="subq"><li>Why can he stop after crossing out multiples of 7?</li><li>How many primes are there between 50 and 100? List them.</li><li>What is the largest pair of twin primes below 100?</li><li>Write 100 as the sum of two primes in two different ways.</li></ol>',
            ans: '<ol class="subq"><li>The next prime is 11, and 11 × 11 = 121 > 100. Every composite number up to 100 has a prime factor of 7 or less, so it is already crossed out. <span class="mk">[1]</span></li>' +
                 '<li>53, 59, 61, 67, 71, 73, 79, 83, 89, 97 → <b>10 primes</b>. <span class="mk">[1]</span></li>' +
                 '<li><b>71 and 73</b>. <span class="mk">[1]</span></li>' +
                 '<li>Any two of: 3 + 97, 11 + 89, 17 + 83, 29 + 71, 41 + 59, 47 + 53. <span class="mk">[½ each]</span></li></ol>' }
        ] }
    ]
  };
})();
