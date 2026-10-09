/* Practice Paper 1 — 80 marks, Class VI Social Science (Ch 1, 7, 9, 10, 13) */
window.PAPER = {
  no: 1,
  sections: [
    { id: 'A', title: 'Section A · Multiple choice &amp; Assertion–Reason', pill: '20 × 1 = 20 marks',
      note: 'Q1–Q16: choose the correct option. Q17–Q20: choose (a), (b), (c) or (d) as described.',
      qs: [
        { ch: 1, m: 1, q: '<p>A map has the scale 1 cm = 500 m. Two places are 3 cm apart on the map. The real distance between them is</p>',
          opts: ['500 m', '1,000 m', '1,500 m', '3,000 m'], a: 2,
          ans: '<p>3 × 500 m = 1,500 m.</p>' },
        { ch: 1, m: 1, q: '<p>The Prime Meridian (0° longitude) passes through</p>',
          opts: ['Greenwich, London', 'Ujjain, India', 'New York, USA', 'Tokyo, Japan'], a: 0,
          ans: '<p>In 1884 nations agreed that the meridian through Greenwich (an area of London) would be the international standard.</p>' },
        { ch: 1, m: 1, q: '<p>The Earth turns through how many degrees of longitude every hour?</p>',
          opts: ['1°', '4°', '15°', '24°'], a: 2,
          ans: '<p>360° ÷ 24 hours = 15° per hour.</p>' },
        { ch: 1, m: 1, q: '<p>When it is 12 noon (GMT) in London, the time in India (IST) is</p>',
          opts: ['6:30 am', '12 noon', '5:30 pm', '7:30 pm'], a: 2,
          ans: '<p>IST = GMT + 5 hours 30 minutes, so 12:00 + 5:30 = 5:30 pm.</p>' },
        { ch: 7, m: 1, q: '<p>Which of these is <b>not</b> one of the four Vedas?</p>',
          opts: ['Ṛig Veda', 'Upanishad', 'Sāma Veda', 'Atharva Veda'], a: 1,
          ans: '<p>The four Vedas are Ṛig, Yajur, Sāma and Atharva. The Upanishads are later texts that built on Vedic ideas.</p>' },
        { ch: 7, m: 1, q: '<p>Siddhārtha Gautama attained enlightenment under a pipal tree at</p>',
          opts: ['Bodh Gaya', 'Lumbini', 'Vaishālī', 'Ujjayinī'], a: 0,
          ans: '<p>He meditated under a pipal tree at Bodh Gaya (Bihar) and became the Buddha. He was born in Lumbini.</p>' },
        { ch: 7, m: 1, q: '<p>The word "Jain" comes from <i>jina</i>, which means</p>',
          opts: ['teacher', 'king', 'monk', 'conqueror'], a: 3,
          ans: '<p><i>Jina</i> means "conqueror" — conquest of ignorance and attachment, not of territory.</p>' },
        { ch: 7, m: 1, q: '<p>The Jain teaching of <i>aparigraha</i> means</p>',
          opts: ['non-violence', 'non-possession', 'truth has many aspects', 'rebirth'], a: 1,
          ans: '<p><i>Aparigraha</i> = non-possession — keeping only what is truly necessary. (Anekāntavāda = truth has many aspects.)</p>' },
        { ch: 9, m: 1, q: '<p>A family made up of a couple and their children is called a</p>',
          opts: ['joint family', 'community', 'nuclear family', 'jāti'], a: 2,
          ans: '<p>A nuclear family is a couple and their children (sometimes one parent and children).</p>' },
        { ch: 9, m: 1, q: '<p><i>Halma</i> is a tradition of coming together in times of crisis followed by the</p>',
          opts: ['Bhil community of Jhabua', 'Munda tribe of Jharkhand', 'Residents\' Welfare Associations of Chennai', 'Parsi community of Mumbai'], a: 0,
          ans: '<p>The Bhil community of Jhabua (Madhya Pradesh) used <i>halma</i> to plant trees and conserve rainwater — unpaid work for the community.</p>' },
        { ch: 9, m: 1, q: '<p>Which of these is an example of a newer, urban type of community that makes its own rules?</p>',
          opts: ['A gurukula', 'A jana', 'A sangha', 'A Residents\' Welfare Association'], a: 3,
          ans: '<p>RWAs, which emerged in the last 30–40 years, make rules on waste, cleanliness, pets and so on.</p>' },
        { ch: 10, m: 1, q: '<p>Which organ of government makes laws?</p>',
          opts: ['Executive', 'Legislature', 'Judiciary', 'Police'], a: 1,
          ans: '<p>The legislature makes laws; the executive implements them; the judiciary decides whether laws are broken.</p>' },
        { ch: 10, m: 1, q: '<p>The highest court at the State level is the</p>',
          opts: ['Supreme Court', 'District Court', 'Lok Sabha', 'High Court'], a: 3,
          ans: '<p>National level: Supreme Court. State level: High Court.</p>' },
        { ch: 10, m: 1, q: '<p>The word "democracy" comes from Greek words meaning</p>',
          opts: ['rule of the king', 'rule of the people', 'rule of law', 'rule of the army'], a: 1,
          ans: '<p><i>dēmos</i> (people) + <i>kratos</i> (rule) = "rule of the people".</p>' },
        { ch: 13, m: 1, q: '<p>Sahil, a farm labourer, is paid partly in cash and partly in mangoes of equal value. The mango part is called</p>',
          opts: ['salary', 'fee', 'value addition', 'payment in kind'], a: 3,
          ans: '<p>A non-cash payment for work is called payment in kind.</p>' },
        { ch: 13, m: 1, q: '<p>Rajesh buys wood for ₹600 and sells a chair made from it for ₹1,000. The value he added is</p>',
          opts: ['₹400', '₹600', '₹1,000', '₹1,600'], a: 0,
          ans: '<p>₹1,000 − ₹600 = ₹400 — the value of his skill, time and effort.</p>' },
        { ch: 1, m: 1, ar: true,
          A: 'Delhi and Bengaluru have almost the same local time.',
          R: 'Delhi and Bengaluru lie at almost the same longitude (about 77°E).', a: 0,
          ans: '<p>Both true. Local time depends only on longitude, not latitude — R explains A.</p>' },
        { ch: 7, m: 1, ar: true,
          A: 'The Vedic hymns were passed on for many generations with hardly any changes.',
          R: 'The Vedic hymns were written down on palm-leaf manuscripts from the start.', a: 2,
          ans: '<p>A is true. R is false — the hymns were recited orally and memorised through rigorous training, not written.</p>' },
        { ch: 10, m: 1, ar: true,
          A: 'The three organs of government are kept separate from each other.',
          R: 'Separation of powers provides checks and balances, so no organ acts beyond its role.', a: 0,
          ans: '<p>Both true, and R is the reason for A.</p>' },
        { ch: 13, m: 1, ar: true,
          A: 'Kabir\'s grandfather teaching neighbourhood children for free is an economic activity.',
          R: 'Non-economic activities are done out of love, care or gratitude, without payment.', a: 3,
          ans: '<p>A is false — free teaching is a non-economic activity. R is true.</p>' }
      ] },

    { id: 'B', title: 'Section B · Very short answer', pill: '4 × 2 = 8 marks', qs: [
        { ch: 1, m: 2, q: '<p>Give two differences between parallels of latitude and meridians of longitude.</p>',
          ans: '<p>Parallels of latitude are <b>full circles</b> running east–west and are <b>unequal</b> in length (the Equator is the longest); meridians of longitude are <b>half-circles</b> running pole to pole and are all <b>equal</b>. <span class="mk">[1]</span><br>' +
               'Latitude is measured from the Equator (0° to 90°N/S); longitude from the Prime Meridian (0° to 180°E/W). <span class="mk">[1]</span></p>' },
        { ch: 7, m: 2, q: '<p>Explain the Jain teachings of <i>anekāntavāda</i> and <i>aparigraha</i>.</p>',
          ans: '<p><b>Anekāntavāda</b> ("not just one" aspect): truth has many aspects and cannot be fully described by one statement. <span class="mk">[1]</span><br>' +
               '<b>Aparigraha</b> (non-possession): detachment from material things — keeping only what is truly necessary. <span class="mk">[1]</span></p>' },
        { ch: 9, m: 2, q: '<p>Differentiate between a joint family and a nuclear family.</p>',
          ans: '<p><b>Joint family:</b> several generations live together — grandparents, parents, uncles, aunts, siblings, cousins. <span class="mk">[1]</span><br>' +
               '<b>Nuclear family:</b> a couple and their children, sometimes just one parent and children. <span class="mk">[1]</span></p>' },
        { ch: 13, m: 2, q: '<p>What is the difference between a salary and a wage? Give one example of each from the chapter.</p>',
          ans: '<p><b>Salary:</b> a fixed, regular payment, usually monthly — e.g. Kavya\'s aunt at the village post office. <span class="mk">[1]</span><br>' +
               '<b>Wage:</b> payment for a specific period of work — e.g. Sahil\'s daily wage as a farm labourer. <span class="mk">[1]</span></p>' }
      ] },

    { id: 'C', title: 'Section C · Short answer', pill: '5 × 3 = 15 marks', qs: [
        { ch: 1, m: 3, q: '<p>It is 12 noon at Greenwich. Find the local time at (i) 45°E and (ii) 30°W. State the rule you used.</p>',
          ans: '<p>Rule: the Earth turns 15° per hour; going <b>east</b> time is <b>ahead</b>, going <b>west</b> it is <b>behind</b>. <span class="mk">[1]</span><br>' +
               '(i) 45 ÷ 15 = 3 hours ahead → <b>3 pm</b>. <span class="mk">[1]</span><br>' +
               '(ii) 30 ÷ 15 = 2 hours behind → <b>10 am</b>. <span class="mk">[1]</span></p>' },
        { ch: 7, m: 3, q: '<p>How was early Vedic society organised? What clues do the Vedas give about governance and professions?</p>',
          ans: '<p>It was organised into <b>janas</b> (clans) — the Ṛig Veda lists over 30, e.g. Bharatas, Purus, Kurus, Yadus. <span class="mk">[1]</span><br>' +
               'Governance clues: <b>rājā</b> (king/ruler), <b>sabha</b> and <b>samiti</b> (assemblies). <span class="mk">[1]</span><br>' +
               'Professions: agriculturist, weaver, potter, builder, carpenter, healer, dancer, barber, priest (any three). <span class="mk">[1]</span></p>' },
        { ch: 10, m: 3, q: '<p>Name the three organs of government and state one function of each.</p>',
          ans: '<p><b>Legislature</b> — makes, updates or removes laws. <span class="mk">[1]</span><br>' +
               '<b>Executive</b> — implements the laws (head of state, ministers, agencies like the police). <span class="mk">[1]</span><br>' +
               '<b>Judiciary</b> — courts decide whether a law was broken and whether laws/decisions are fair. <span class="mk">[1]</span></p>' },
        { ch: 9, m: 3, q: '<p>What did Kamal Parmar do for the children of his area in Ahmedabad? What values does his work show?</p>',
          ans: '<p>He noticed underprivileged children on the street (some had dropped out, some had never been to school) and gave them free tuition from 5:30 to 9:30 pm after work, along with a free dinner; about 150 children came. <span class="mk">[2]</span><br>' +
               'Values: selfless service (<i>sevā</i>), care for the community, giving (<i>dāna</i>), belief that every child deserves education. <span class="mk">[1]</span></p>' },
        { ch: 13, m: 3, q: '<p>Explain value addition with the example of Rajesh the carpenter.</p>',
          ans: '<p>Value addition is the increase in money value created when something is turned into another form. <span class="mk">[1]</span><br>' +
               'Rajesh buys wood for ₹600, uses his tools and skill, and sells a chair for ₹1,000. <span class="mk">[1]</span><br>' +
               'The extra ₹400 is the value of his skill, time and effort — the value added. <span class="mk">[1]</span></p>' }
      ] },

    { id: 'D', title: 'Section D · Long answer', pill: '4 × 5 = 20 marks',
      note: 'Each question has an internal choice — answer either the question or its OR part.',
      qs: [
        { ch: 1, m: 5, q: '<p>(a) What is the difference between local time and standard time? Why does India use one standard time? <span class="mk">[2]</span><br>(b) Why are the lines separating time zones not straight? <span class="mk">[1]</span><br>(c) What is the International Date Line and what happens when you cross it? <span class="mk">[2]</span></p>' +
             '<p class="or"><b>OR</b></p><p>(a) Name and explain the three components of a map. <span class="mk">[3]</span><br>(b) Distinguish between a physical map and a political map. <span class="mk">[2]</span></p>',
          ans: '<p>(a) Local time is the time at a particular meridian, based on the Sun; standard time is one time adopted by a whole country, based on a meridian passing through it. Many local times would be confusing, so India uses IST (GMT + 5:30). <span class="mk">[2]</span><br>' +
               '(b) They bend to follow international borders, so each country can keep its own standard time. <span class="mk">[1]</span><br>' +
               '(c) A line at about 180° longitude, opposite the Prime Meridian, where the +12 and −12 zones meet. Crossing eastward you subtract a day; westward you add a day. <span class="mk">[2]</span></p>' +
               '<p><b>OR:</b> (a) <b>Distance</b> — shown by the scale; <b>direction</b> — shown by cardinal points, with N at the top; <b>symbols</b> — standard drawings for features (fixed by the Survey of India). <span class="mk">[3]</span><br>' +
               '(b) Physical map: natural features such as mountains, rivers, oceans. Political map: countries/states, boundaries, cities, capitals. <span class="mk">[2]</span></p>' },
        { ch: 7, m: 5, q: '<p>Describe the life of Siddhārtha Gautama and how he became the Buddha. What did he teach about ahimsa and inner purity? What was the Sangha?</p>' +
             '<p class="or"><b>OR</b></p><p>What new ideas did the Upanishads introduce? Explain karma, rebirth, brahman and ātman, and narrate briefly one Upanishad story.</p>',
          ans: '<p>Born a prince in <b>Lumbini</b>; at 29, he saw an old man, a sick man, a dead body and a peaceful ascetic, and left palace life. <span class="mk">[1]</span> He searched for the cause of suffering and, after meditating under a pipal tree at <b>Bodh Gaya</b>, attained enlightenment — becoming the <b>Buddha</b> ("awakened one"). <span class="mk">[1]</span><br>' +
               'He taught <b>ahimsa</b> — non-hurting, in thought as well as action. <span class="mk">[1]</span> Purity comes from truth and dharma within, not from bathing in rivers; "conquering oneself is greater than conquering a thousand men". <span class="mk">[1]</span><br>' +
               'The <b>Sangha</b> was the community of monks (bhikshus) and later nuns (bhikshunīs) who practised and spread his teachings. <span class="mk">[1]</span></p>' +
               '<p><b>OR:</b> <b>Karma</b> — our actions or their results; <b>rebirth</b> — being born again and again; <b>brahman</b> — the one divine essence of everything; <b>ātman</b> — the Self in every being, one with brahman ("tat tvam asi"). <span class="mk">[3]</span> Any one story, e.g. Nachiketa asks Yama what happens after death; Yama teaches that the ātman is never born and never dies. <span class="mk">[2]</span></p>' },
        { ch: 10, m: 5, q: '<p>(a) Name India\'s three levels of government. Using the flood example, show how each steps in. <span class="mk">[2]</span><br>(b) Compare the National and State levels for judiciary, legislature and executive. <span class="mk">[3]</span></p>' +
             '<p class="or"><b>OR</b></p><p>Explain representative, direct and grassroots democracy with one example each. Why is India called the world\'s largest democracy? <span class="mk">[5]</span></p>',
          ans: '<p>(a) Local, State and Central. A small flood in part of a district is handled locally; a flood across several towns brings in the State; a massive flood brings the Centre (relief, army). <span class="mk">[2]</span></p>' +
               '<table class="compact"><thead><tr><th></th><th>National</th><th>State</th></tr></thead><tbody>' +
               '<tr><td>Judiciary</td><td>Supreme Court</td><td>High Court</td></tr>' +
               '<tr><td>Legislature</td><td>Lok Sabha + Rajya Sabha</td><td>Vidhan Sabha</td></tr>' +
               '<tr><td>Executive</td><td>President (nominal), PM (head)</td><td>Governor (nominal), CM (head)</td></tr></tbody></table><p><span class="mk">[3]</span></p>' +
               '<p><b>OR:</b> Representative — people elect MLAs/MPs to decide for them (India). Direct — everyone votes on the decision itself (a class picnic vote). Grassroots — ordinary citizens take part in decisions affecting them at the base level. <span class="mk">[3]</span> India has about 970 million voters (2024), citizens 18+ can vote. <span class="mk">[2]</span></p>' },
        { ch: 13, m: 5, q: '<p>(a) Differentiate between economic and non-economic activities with two examples each. <span class="mk">[3]</span><br>(b) "Non-economic activities have great value." Explain with two examples of community participation. <span class="mk">[2]</span></p>' +
             '<p class="or"><b>OR</b></p><p>Explain four ways in which people are paid for economic activities, with an example of each from the chapter. Can one person do both economic and non-economic activities? Give an example.</p>',
          ans: '<p>(a) Economic: involve money or money\'s worth — a shopkeeper selling uniforms, a lawyer earning a fee, a pilot\'s salary. Non-economic: done out of love, care or gratitude, no payment — parents cooking for the family, caring for grandparents, volunteering. <span class="mk">[3]</span><br>' +
               '(b) They improve social welfare, wellbeing and quality of life — e.g. <b>Swachh Bharat Abhiyan</b> (citizens cleaning streets and parks), <b>Van Mahotsav</b> (tree planting), langars (sevā). <span class="mk">[2]</span></p>' +
               '<p><b>OR:</b> Salary (aunt at the post office), fee (aunt\'s online classes; a lawyer or doctor), wage (Sahil\'s daily wage), payment in kind (Sahil\'s mangoes). <span class="mk">[4]</span> Yes — Rohan earns a salary as a software engineer and volunteers to teach computers on weekends. <span class="mk">[1]</span></p>' }
      ] },

    { id: 'E', title: 'Section E · Case-based questions', pill: '3 × 4 = 12 marks',
      note: 'Read each passage and answer the questions that follow.',
      qs: [
        { ch: 9, m: 4, q: '<div class="case"><p>Shalini lives in a town in Kerala with her parents, younger brother, grandmother (Acchamma), her father\'s brother (Chittappa), his wife (Chitti) and their daughter Chinni. Chittappa has just lost his job. During festival shopping, Shalini\'s parents buy new clothes for everyone, so Shalini gets a simple cotton dress instead of the silk one she wanted. Acchamma explains that this is how families support each other.</p></div>' +
             '<p>(i) What type of family is Shalini\'s? <span class="mk">[1]</span><br>(ii) Which family value is shown by Shalini accepting the simpler dress? <span class="mk">[1]</span><br>(iii) Give two ways in which members of a family depend on each other. <span class="mk">[2]</span></p>',
          ans: '<p>(i) A joint family. <span class="mk">[1]</span><br>(ii) <i>Tyāga</i> (sacrifice) — giving up her wish for the family\'s needs (also sharing/caring). <span class="mk">[1]</span><br>' +
               '(iii) Any two: sharing money and resources in hard times; sharing chores; elders guiding and teaching children; children helping more as they grow. <span class="mk">[2]</span></p>' },
        { ch: 10, m: 4, q: '<div class="case"><p>Dr. A.P.J. Abdul Kalam was born in a humble family in Rameswaram, Tamil Nadu, in 1931. A renowned scientist known as the "Missile Man of India", he served as the 11th President of India from 2002 to 2007. Though the President is a nominal head, Dr. Kalam stayed deeply connected to people, especially the youth, through his passion for education and innovation.</p></div>' +
             '<p>(i) What does "nominal head" mean? <span class="mk">[1]</span><br>(ii) Who is the actual executive head of the Central Government? <span class="mk">[1]</span><br>(iii) How did Dr. Kalam show that a nominal role can still have a real impact? <span class="mk">[2]</span></p>',
          ans: '<p>(i) Head in name only — not the actual executive head, though holding some special powers. <span class="mk">[1]</span><br>(ii) The Prime Minister. <span class="mk">[1]</span><br>' +
               '(iii) He inspired millions, especially young people, through his focus on education and innovation, so his influence went far beyond his formal powers. <span class="mk">[2]</span></p>' },
        { ch: 13, m: 4, q: '<div class="case"><p>Kavya visits her aunt in the village of Kamlapur. Her aunt works at the village post office and is paid every month. In the evenings she takes online classes for students and charges a weekly fee. At a mango orchard, Kavya meets Sahil, who tills a farmer\'s land with a tractor and is paid a daily wage, partly in cash and partly in mangoes.</p></div>' +
             '<p>(i) What type of payment does the aunt get from the post office? <span class="mk">[1]</span><br>(ii) What is the aunt\'s payment for online classes called? <span class="mk">[1]</span><br>(iii) Name the two kinds of payment Sahil receives and explain them. <span class="mk">[2]</span></p>',
          ans: '<p>(i) Salary — fixed, regular, monthly. <span class="mk">[1]</span><br>(ii) A fee. <span class="mk">[1]</span><br>' +
               '(iii) A <b>wage</b> (payment for a specific period — a day\'s work) and <b>payment in kind</b> (the non-cash part — mangoes of equal value). <span class="mk">[2]</span></p>' }
      ] },

    { id: 'F', title: 'Section F · Map work', pill: '1 × 5 = 5 marks',
      note: 'Use a printed political outline map of India. Mark and label each place neatly.',
      qs: [
        { ch: 7, m: 2, label: 'Q37 (a)', q: '<p><b>History</b> — On the outline map of India, locate and label:<br>(i) the place where Siddhārtha Gautama attained enlightenment;<br>(ii) the city near which Mahāvīra was born.</p>',
          ans: '<p>(i) <b>Bodh Gaya</b>, Bihar — south of Patna. <span class="mk">[1]</span><br>(ii) <b>Vaishālī</b>, Bihar — north of Patna, across the Ganga. <span class="mk">[1]</span></p>' },
        { ch: 1, m: 3, label: 'Q37 (b)', q: '<p><b>Geography</b> — On the same map, locate and label:<br>(i) Ujjain — the city on India\'s ancient prime meridian (<i>madhya rekhā</i>);<br>(ii) Porbandar (Gujarat);<br>(iii) Tinsukia (Assam).<br>Which of (ii) and (iii) sees sunset earlier, and why?</p>',
          ans: '<p>(i) <b>Ujjain</b> — western Madhya Pradesh. (ii) <b>Porbandar</b> — on the west coast of the Saurashtra peninsula, Gujarat. (iii) <b>Tinsukia</b> — far north-east, in eastern Assam. <span class="mk">[½ each]</span><br>' +
               '<b>Tinsukia</b> sees sunset earlier: it is far to the east, and since the Earth rotates west to east, places further east see sunrise and sunset first (about 2 hours earlier for a 30° longitude difference). <span class="mk">[1½]</span></p>' }
      ] }
  ]
};
