/* Practice Paper 1 — 80 marks, Class VI Science (Curiosity Ch 1–5) */
window.PAPER = {
  no: 1,
  sections: [
    { id: 'A', title: 'Section A · Multiple choice &amp; Assertion–Reason', pill: '20 × 1 = 20 marks',
      note: 'Q1–Q16: choose the correct option. Q17–Q20: choose (a), (b), (c) or (d) as described.',
      qs: [
        { ch: 1, m: 1, q: '<p>Which is the correct order of the steps of the scientific method?</p>',
          opts: ['Guess → Observe → Test → Question → Analyse', 'Observe → Question → Guess → Test → Analyse', 'Question → Test → Observe → Guess → Analyse', 'Observe → Guess → Analyse → Test → Question'], a: 1,
          ans: '<p>We first observe, then ask a question, guess an answer, test the guess, and finally analyse the results.</p>' },
        { ch: 1, m: 1, q: '<p>Your pen stops writing. You open it and find the refill still full of ink. According to the scientific method, what should you do next?</p>',
          opts: ['Decide the pen is broken for ever', 'Stop investigating', 'Make a new guess, e.g. the ink has dried up, and test it', 'Say the first guess was right anyway'], a: 2,
          ans: '<p>The test showed the first guess (ink finished) was wrong, so make another guess and test it.</p>' },
        { ch: 1, m: 1, q: '<p>According to the chapter, who is working like a scientist?</p>',
          opts: ['Anyone who follows the scientific method', 'Only a person in a laboratory', 'Only a person who has written a book', 'Only a teacher'], a: 0,
          ans: '<p>"Anyone who follows the scientific method is working like a scientist" — e.g. a cook, a cycle repairer, an electrician.</p>' },
        { ch: 2, m: 1, q: '<p>A plant has many hard, woody stems that branch close to the ground. It is a</p>',
          opts: ['herb', 'tree', 'creeper', 'shrub'], a: 3,
          ans: '<p>Shrubs (e.g. rose) have many woody stems branching very close to the ground.</p>' },
        { ch: 2, m: 1, q: '<p>A maize seed has a single cotyledon. Its leaves and roots will most likely be</p>',
          opts: ['parallel venation, fibrous roots', 'reticulate venation, taproot', 'parallel venation, taproot', 'reticulate venation, fibrous roots'], a: 0,
          ans: '<p>Maize is a monocot: monocots generally have parallel venation and fibrous roots.</p>' },
        { ch: 2, m: 1, q: '<p>The conical shape and sloping branches of the deodar tree help it to</p>',
          opts: ['store water', 'let snow slide off easily', 'survive in the desert', 'float in water'], a: 1,
          ans: '<p>Deodar trees grow in snowy mountains; their shape lets snow slide off — an adaptation.</p>' },
        { ch: 2, m: 1, q: '<p>Animals that can live in water as well as on land are called</p>',
          opts: ['terrestrial animals', 'aquatic animals', 'amphibians', 'herbivores'], a: 2,
          ans: '<p>Frogs live in both water and on land — they are amphibians.</p>' },
        { ch: 3, m: 1, q: '<p>A few drops of dilute iodine solution are added to a slice of potato. The colour it turns shows the presence of starch. The colour is</p>',
          opts: ['violet', 'red', 'yellow', 'blue-black'], a: 3,
          ans: '<p>Starch turns blue-black with iodine. (Violet is the test for protein.)</p>' },
        { ch: 3, m: 1, q: '<p>Bleeding gums and slow healing of wounds are symptoms of a deficiency of</p>',
          opts: ['Vitamin A', 'Vitamin D', 'Iron', 'Vitamin C'], a: 3,
          ans: '<p>Lack of Vitamin C causes scurvy — bleeding gums and slow healing of wounds.</p>' },
        { ch: 3, m: 1, q: '<p>Which of these is <b>not</b> a millet?</p>',
          opts: ['Jowar', 'Wheat', 'Ragi', 'Bajra'], a: 1,
          ans: '<p>Jowar, bajra, ragi and sanwa are millets (nutri-cereals). Wheat is a cereal but not a millet.</p>' },
        { ch: 4, m: 1, q: '<p>Which of these will <b>not</b> be attracted by a magnet?</p>',
          opts: ['An iron nail', 'A steel pin', 'A nickel object', 'A plastic scale'], a: 3,
          ans: '<p>Plastic is a non-magnetic material. Iron, steel (containing iron) and nickel are attracted.</p>' },
        { ch: 4, m: 1, q: '<p>When a bar magnet is placed in iron filings, most of the filings stick</p>',
          opts: ['near its two ends', 'only in the middle', 'evenly all over it', 'only on one end'], a: 0,
          ans: '<p>Attraction is strongest at the poles, which are near the ends.</p>' },
        { ch: 4, m: 1, q: '<p>The <i>matsya-yantra</i> used by Indian sailors was</p>',
          opts: ['a star map', 'a magnetised fish-shaped iron piece in a vessel of oil', 'a fishing net', 'a measuring rod for ships'], a: 1,
          ans: '<p>It was an early compass: a magnetised fish-shaped iron piece floating in oil.</p>' },
        { ch: 5, m: 1, q: '<p>The distance from home to school is 2.5 km. In metres this is</p>',
          opts: ['25 m', '250 m', '2500 m', '25000 m'], a: 2,
          ans: '<p>1 km = 1000 m, so 2.5 × 1000 = 2500 m.</p>' },
        { ch: 5, m: 1, q: '<p>The motion of a swing in a park is</p>',
          opts: ['oscillatory motion', 'linear motion', 'circular motion', 'no motion'], a: 0,
          ans: '<p>A swing moves to and fro about a fixed position — oscillatory motion.</p>' },
        { ch: 5, m: 1, q: '<p>A pencil is measured with a broken scale. One end is at the 2.0 cm mark and the other at 11.5 cm. The length of the pencil is</p>',
          opts: ['11.5 cm', '13.5 cm', '9.5 cm', '2.0 cm'], a: 2,
          ans: '<p>Length = 11.5 cm − 2.0 cm = 9.5 cm.</p>' },
        { ch: 2, m: 1, ar: true,
          A: 'Camels can survive for many days without drinking water.',
          R: 'Camels pass small amounts of urine, their dung is dry and they do not sweat.', a: 0,
          ans: '<p>Both true. Because they lose very little water from their bodies, they can go many days without drinking — R explains A.</p>' },
        { ch: 3, m: 1, ar: true,
          A: 'Vegetables should be washed before cutting or peeling them.',
          R: 'Our body produces Vitamin D when the skin is exposed to sunlight.', a: 1,
          ans: '<p>Both statements are true, but R has nothing to do with A. A is true because washing after cutting washes away vitamins.</p>' },
        { ch: 4, m: 1, ar: true,
          A: 'Repulsion is the sure test to find out whether an object is a magnet.',
          R: 'An iron bar is attracted by both the North and South poles of a magnet.', a: 0,
          ans: '<p>Both true. Since a plain iron bar is also attracted, attraction cannot prove an object is a magnet — only repulsion can. R explains A.</p>' },
        { ch: 5, m: 1, ar: true,
          A: 'The SI unit of length is the centimetre.',
          R: 'One metre is divided into 100 centimetres.', a: 3,
          ans: '<p>A is false — the SI unit of length is the metre. R is true: 1 m = 100 cm.</p>' }
      ] },

    { id: 'B', title: 'Section B · Very short answer', pill: '6 × 2 = 12 marks', qs: [
        { ch: 1, m: 2, q: '<p>A cook finds that the dal has spilled out of the pressure cooker. Show how she can use the scientific method to find the cause.</p>',
          ans: '<p><b>Observe:</b> dal spilled. <b>Question:</b> why did it spill? <b>Guess:</b> too much water was added. <span class="mk">[1]</span><br>' +
               '<b>Test:</b> cook again with less water. <b>Analyse:</b> if it does not spill, the guess was right; if it still spills, make a new guess. <span class="mk">[1]</span></p>' },
        { ch: 2, m: 2, q: '<p>Differentiate between a taproot and fibrous roots. Give one example of each.</p>',
          ans: '<p><b>Taproot:</b> one main root with small side roots — e.g. mustard, hibiscus. <span class="mk">[1]</span><br>' +
               '<b>Fibrous roots:</b> a bunch of similar-sized thin roots from the base of the stem — e.g. grass, wheat. <span class="mk">[1]</span></p>' },
        { ch: 3, m: 2, q: '<p>Roughage gives no nutrients to the body. Why is it still an important part of our diet? Name two sources.</p>',
          ans: '<p>It helps the body get rid of undigested food and ensures smooth passage of stools (prevents constipation). <span class="mk">[1]</span><br>' +
               'Sources (any two): green leafy vegetables, fresh fruits, whole grains, pulses, nuts. <span class="mk">[1]</span></p>' },
        { ch: 4, m: 2, q: '<p>A bar magnet has no markings. How will you find its North pole <b>without</b> using another magnet?</p>',
          ans: '<p>Tie a thread to the middle of the magnet and suspend it freely so it is balanced horizontally. <span class="mk">[1]</span><br>' +
               'It comes to rest along the north–south direction; the end pointing towards the north is the North pole. <span class="mk">[1]</span></p>' },
        { ch: 5, m: 2, q: '<p>Convert: (i) 3.25 m into centimetres (ii) 480 mm into centimetres.</p>',
          ans: '<p>(i) 1 m = 100 cm → 3.25 × 100 = <b>325 cm</b> <span class="mk">[1]</span><br>' +
               '(ii) 10 mm = 1 cm → 480 ÷ 10 = <b>48 cm</b> <span class="mk">[1]</span></p>' },
        { ch: 5, m: 2, q: '<p>What is a reference point? Padma reads a kilometre stone that says "Delhi 70 km". What is the reference point here?</p>',
          ans: '<p>When distance is stated with respect to a fixed object or point, that point is the reference point. <span class="mk">[1]</span><br>' +
               'Here the reference point is <b>Delhi</b>. <span class="mk">[1]</span></p>' }
      ] },

    { id: 'C', title: 'Section C · Short answer', pill: '7 × 3 = 21 marks', qs: [
        { ch: 2, m: 3, q: '<p>How are herbs, shrubs and trees different from each other? Give one example of each.</p>',
          ans: '<table class="compact"><thead><tr><th></th><th>Herb</th><th>Shrub</th><th>Tree</th></tr></thead><tbody>' +
               '<tr><td>Height</td><td>Short</td><td>Medium</td><td>Tall</td></tr>' +
               '<tr><td>Stem</td><td>Soft, green</td><td>Hard, woody, many stems</td><td>Hard, thick, woody</td></tr>' +
               '<tr><td>Branches</td><td>—</td><td>Close to the ground</td><td>High up on the stem</td></tr>' +
               '<tr><td>Example</td><td>Tomato</td><td>Rose</td><td>Mango</td></tr></tbody></table>' +
               '<p><span class="mk">[1 each, including example]</span></p>' },
        { ch: 2, m: 3, q: '<p>(a) What is a cotyledon? (b) Group these plants as dicot or monocot: wheat, chickpea, maize, mustard. (c) What type of leaf venation will the dicot plants have?</p>',
          ans: '<p>(a) Each part of a seed (a chickpea seed splits into two cotyledons). <span class="mk">[1]</span><br>' +
               '(b) Dicot: chickpea, mustard. Monocot: wheat, maize. <span class="mk">[1]</span><br>' +
               '(c) Reticulate (net-like) venation. <span class="mk">[1]</span></p>' },
        { ch: 3, m: 3, q: '<p>Name the deficiency disease and one symptom caused by lack of: (i) Vitamin A (ii) Iron (iii) Iodine.</p>',
          ans: '<p>(i) Vitamin A — <b>night blindness / loss of vision</b>: poor vision in darkness. <span class="mk">[1]</span><br>' +
               '(ii) Iron — <b>anaemia</b>: weakness, shortness of breath. <span class="mk">[1]</span><br>' +
               '(iii) Iodine — <b>goitre</b>: swelling at the front of the neck. <span class="mk">[1]</span></p>' },
        { ch: 3, m: 3, q: '<p>Describe a simple test to check whether a food item contains fat. Name two food items that would give a positive result.</p>',
          ans: '<p>Place the food on a piece of paper, wrap and press it; if the food is wet, let the paper dry. <span class="mk">[1]</span><br>' +
               'Hold the paper against light — an oily patch through which light passes shows fat is present. <span class="mk">[1]</span><br>' +
               'Positive: peanuts, butter, coconut (any two). <span class="mk">[1]</span></p>' },
        { ch: 4, m: 3, q: '<p>List the steps to turn an iron sewing needle into a magnet. How will you check that it has become a magnet?</p>',
          ans: '<p>Place the needle on a table; put one pole of a bar magnet at one end and move it along the needle to the other end, then lift it. <span class="mk">[1]</span><br>' +
               'Bring the same pole back to the same starting end and repeat 30–40 times. <span class="mk">[1]</span><br>' +
               'Check: bring iron filings or steel pins near it — if they are attracted, it is a magnet. <span class="mk">[1]</span></p>' },
        { ch: 4, m: 3, q: '<p>Reshma has three identical metal bars. Two are magnets and one is a plain iron bar. Without using any other material, how can she identify the iron bar? Explain your reasoning.</p>', hard: true,
          ans: '<p>Bring the bars near each other in pairs, trying both ends. <span class="mk">[1]</span><br>' +
               'The two bars that <b>repel</b> each other in some position are the magnets (like poles repel). <span class="mk">[1]</span><br>' +
               'The iron bar is always attracted, never repelled, because both its ends are attracted by both poles of a magnet. <span class="mk">[1]</span></p>' },
        { ch: 5, m: 3, q: '<p>Write three precautions to be taken while measuring the length of an object with a scale.</p>',
          ans: '<p>1. Place the scale in contact with the object along its length. <span class="mk">[1]</span><br>' +
               '2. Keep the eye directly above the point being read. <span class="mk">[1]</span><br>' +
               '3. If the zero mark is broken, start from another full mark and subtract that reading. (Also: choose the right scale; write the unit.) <span class="mk">[1]</span></p>' }
      ] },

    { id: 'D', title: 'Section D · Long answer', pill: '3 × 5 = 15 marks',
      note: 'Each question has an internal choice — answer either the question or its OR part.',
      qs: [
        { ch: 2, m: 5, q: '<p>(a) What are adaptations? <span class="mk">[1]</span><br>(b) Compare the camel of the hot desert of Rajasthan with the camel of the cold desert of Ladakh under three headings, and say how each feature helps it. <span class="mk">[3]</span><br>(c) Give one adaptation of a desert plant. <span class="mk">[1]</span></p>' +
             '<p class="or"><b>OR</b></p><p>(a) Define habitat. Name two terrestrial and two aquatic habitats. <span class="mk">[2]</span><br>(b) How does damage to habitats lead to loss of biodiversity? Name two steps taken in India to protect biodiversity. <span class="mk">[3]</span></p>',
          ans: '<p>(a) Special features that enable plants and animals to survive in a particular region. <span class="mk">[1]</span></p>' +
               '<table class="compact"><thead><tr><th></th><th>Hot desert</th><th>Cold desert</th></tr></thead><tbody>' +
               '<tr><td>Legs</td><td>Long, wide hooves — no sinking in sand</td><td>Shorter — walk easily in mountains</td></tr>' +
               '<tr><td>Humps</td><td>One — food store</td><td>Two — shrink in late winter as food is used</td></tr>' +
               '<tr><td>Hair</td><td>—</td><td>Long hair head to neck — survive cold</td></tr></tbody></table>' +
               '<p><span class="mk">[3]</span> (c) Cactus — thick fleshy stem stores water. <span class="mk">[1]</span></p>' +
               '<p><b>OR:</b> (a) Habitat = place where plants and animals live. Terrestrial: forest, desert, grassland, mountain; aquatic: pond, lake, river, ocean. <span class="mk">[2]</span><br>' +
               '(b) Plants and animals lose their homes, food and other resources, so their numbers fall and biodiversity is lost. <span class="mk">[1]</span> Steps: Project Tiger (1973), Cheetah Reintroduction Project (2022), protected areas for the Great Indian Bustard, sacred groves (any two). <span class="mk">[2]</span></p>' },
        { ch: 3, m: 5, q: '<p>(a) What is a balanced diet? <span class="mk">[1]</span><br>(b) Name the nutrients that are "energy-giving", "body-building" and "protective", with one food source of each. <span class="mk">[3]</span><br>(c) Why are millets called nutri-cereals? <span class="mk">[1]</span></p>' +
             '<p class="or"><b>OR</b></p><p>(a) What are food miles? Give two reasons to reduce them. <span class="mk">[3]</span><br>(b) What is fortification? Give one example. <span class="mk">[2]</span></p>',
          ans: '<p>(a) A diet containing all essential nutrients, roughage and water in the right amounts for proper growth and development. <span class="mk">[1]</span><br>' +
               '(b) Energy-giving: carbohydrates (rice, wheat) and fats (ghee, nuts); body-building: proteins (pulses, milk, egg); protective: vitamins and minerals (fruits, green leafy vegetables). <span class="mk">[3]</span><br>' +
               '(c) Millets (jowar, bajra, ragi, sanwa) are rich in vitamins, minerals such as iron and calcium, and dietary fibre. <span class="mk">[1]</span></p>' +
               '<p><b>OR:</b> (a) The total distance food travels from the farmer to the consumer. <span class="mk">[1]</span> Reducing them cuts transport cost and pollution, supports local farmers, and keeps food fresher (any two). <span class="mk">[2]</span><br>' +
               '(b) Adding nutrients to food during processing to improve its nutritional quality — e.g. iodised salt. <span class="mk">[2]</span></p>' },
        { ch: 5, m: 5, q: '<p>(a) When is an object said to be in motion and when at rest? <span class="mk">[1]</span><br>(b) Deepa is sitting in a moving bus. Explain how she is at rest and in motion at the same time. <span class="mk">[1]</span><br>(c) Define linear, circular and oscillatory motion, giving one example of each. <span class="mk">[3]</span></p>' +
             '<p class="or"><b>OR</b></p><p>(a) Why do we need standard units? Use the handspan activity to explain. <span class="mk">[2]</span><br>(b) How would you measure the length of a curved line? <span class="mk">[1]</span><br>(c) Write two rules for writing units of length correctly. <span class="mk">[2]</span></p>',
          ans: '<p>(a) In motion if its position changes with respect to a reference point with time; at rest if it does not. <span class="mk">[1]</span><br>' +
               '(b) With respect to the bus (or other passengers) her position does not change — rest; with respect to a building outside it changes — motion. <span class="mk">[1]</span><br>' +
               '(c) Linear: along a straight line — falling eraser, march-past. Circular: along a circular path — merry-go-round. Oscillatory: to and fro about a fixed position — swing. <span class="mk">[3]</span></p>' +
               '<p><b>OR:</b> (a) Five friends measured one table as 13 to 14 handspans because handspans differ in size; body-part units vary from person to person, so standard units (SI — metre) are needed to give the same result for everyone. <span class="mk">[2]</span><br>' +
               '(b) Lay a thread along the curve, mark it, straighten it and measure it with a scale (or use a flexible tape). <span class="mk">[1]</span><br>' +
               '(c) Any two: unit symbols in lowercase; no "s" for plural; no full stop after the symbol; a space between number and unit. <span class="mk">[2]</span></p>' }
      ] },

    { id: 'E', title: 'Section E · Case-based questions', pill: '3 × 4 = 12 marks',
      note: 'Read each passage and answer the questions that follow.',
      qs: [
        { ch: 4, m: 4, q: '<div class="case"><p>Reshma is writing a story about sailors carrying spices from Kerala in the olden days. One night a storm covers the sky with clouds and the sailors cannot see the stars. One sailor takes out a small round box with a transparent cover. Inside, a needle balanced on a pin swings for a while and then comes to rest. Its red end points in one direction.</p></div>' +
             '<p>(i) What is this device called? <span class="mk">[1]</span><br>(ii) In which direction does the red end of the needle point? <span class="mk">[1]</span><br>(iii) Why does the needle always come to rest in the same direction? What should the sailor do next to read all the directions? <span class="mk">[2]</span></p>',
          ans: '<p>(i) A magnetic compass. <span class="mk">[1]</span><br>(ii) North. <span class="mk">[1]</span><br>' +
               '(iii) The needle is a magnet, and a freely rotating magnet rests along the north–south direction because the Earth behaves like a giant magnet. <span class="mk">[1]</span> He should gently rotate the box until N and S on the dial line up with the needle; all directions are then as shown on the dial. <span class="mk">[1]</span></p>' },
        { ch: 3, m: 4, q: '<div class="case"><p>Arjun compares the nutrition labels of two snacks (per 100 g):</p>' +
             '<table class="compact"><thead><tr><th>Nutrient</th><th>Potato wafers</th><th>Roasted chana</th></tr></thead><tbody>' +
             '<tr><td>Energy</td><td>536 kcal</td><td>355 kcal</td></tr><tr><td>Fats</td><td>35.0 g</td><td>6.26 g</td></tr>' +
             '<tr><td>Proteins</td><td>7.0 g</td><td>18.64 g</td></tr><tr><td>Dietary fibre</td><td>4.8 g</td><td>16.8 g</td></tr></tbody></table></div>' +
             '<p>(i) Which snack has more protein? <span class="mk">[1]</span><br>(ii) Which food component in the wafers makes them so high in energy? <span class="mk">[1]</span><br>(iii) Which snack should Arjun choose? Give two reasons from the table. <span class="mk">[2]</span></p>',
          ans: '<p>(i) Roasted chana (18.64 g). <span class="mk">[1]</span><br>(ii) Fat (35.0 g). <span class="mk">[1]</span><br>' +
               '(iii) Roasted chana — it has much less fat, more protein (body-building) and more dietary fibre (about 3.5 times as much); eating junk food like wafers often can lead to obesity. <span class="mk">[2]</span></p>' },
        { ch: 5, m: 4, q: '<div class="case"><p>Padma is travelling by bus to her grandparents\' house in Delhi. Through the window she sees a kilometre stone reading "Delhi 70 km". A little later another stone reads "Delhi 60 km". Inside the bus, her brother is asleep in the seat next to her.</p></div>' +
             '<p>(i) What is the reference point in this situation? <span class="mk">[1]</span><br>(ii) How far did the bus travel between the two stones, in metres? <span class="mk">[1]</span><br>(iii) Is her brother at rest or in motion? Explain your answer using reference points. <span class="mk">[2]</span></p>',
          ans: '<p>(i) Delhi. <span class="mk">[1]</span><br>(ii) 70 − 60 = 10 km = 10 × 1000 = <b>10000 m</b>. <span class="mk">[1]</span><br>' +
               '(iii) Both, depending on the reference point: with respect to Padma or the bus his position does not change, so he is at rest; with respect to the kilometre stones or Delhi his position changes with time, so he is in motion. <span class="mk">[2]</span></p>' }
      ] }
  ]
};
