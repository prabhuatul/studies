/* Practice Paper 1 — Class VI Computer / IT (4 chapters) */
window.PAPER = {
  no: 1,
  chapters: { 1: 'Computer Components', 2: 'File Management', 3: 'Tables in MS Word', 4: 'Mail Merge' },
  sections: [
    { id: 'A', title: 'Section A · Multiple choice &amp; Assertion–Reason', pill: '10 × 1 = 10 marks',
      note: 'Choose the correct option. Q9–Q10: choose (a), (b), (c) or (d) as described.',
      qs: [
        { ch: 1, m: 1, q: '<p>Which of these devices works as <b>both</b> an input and an output device?</p>',
          opts: ['Scanner', 'Touch screen', 'Printer', 'Mouse'], a: 1,
          ans: '<p>You give input by touching the screen, and the same screen shows the output. A scanner and a mouse are input only; a printer is output only.</p>' },
        { ch: 1, m: 1, q: '<p>Which memory loses its contents when the computer is switched off?</p>',
          opts: ['ROM', 'Hard disk', 'RAM', 'Pen drive'], a: 2,
          ans: '<p>RAM is <b>volatile</b> — it holds data only while power is on. ROM, the hard disk and a pen drive keep data without power.</p>' },
        { ch: 1, m: 1, q: '<p>The part of the CPU that does calculations and comparisons is the</p>',
          opts: ['Control Unit', 'Arithmetic Logic Unit', 'Memory Unit', 'Monitor'], a: 1,
          ans: '<p>The ALU does arithmetic (+, −, ×, ÷) and logic (comparing, e.g. is A &gt; B). The Control Unit directs the other parts; the Memory Unit stores data.</p>' },
        { ch: 2, m: 1, q: '<p>Which key is used to <b>rename</b> a selected file or folder in Windows?</p>',
          opts: ['F2', 'F5', 'Delete', 'Esc'], a: 0,
          ans: '<p>F2 renames the selected item. F5 refreshes the window; Delete sends it to the Recycle Bin.</p>' },
        { ch: 2, m: 1, q: '<p>A file deleted from the hard disk in the normal way first goes to the</p>',
          opts: ['Desktop', 'Clipboard', 'Documents folder', 'Recycle Bin'], a: 3,
          ans: '<p>It goes to the Recycle Bin, from where it can be restored. (Shift + Delete skips the Recycle Bin and deletes it permanently.)</p>' },
        { ch: 3, m: 1, q: '<p>The box formed where a row and a column of a table meet is called a</p>',
          opts: ['Cell', 'Border', 'Field', 'Gridline'], a: 0,
          ans: '<p>A <b>cell</b> is the intersection of a row and a column.</p>' },
        { ch: 3, m: 1, q: '<p>The cursor is in the <b>last cell</b> of a table. Which key adds a new row at the end?</p>',
          opts: ['Enter', 'Shift + Tab', 'Tab', 'Ctrl + Enter'], a: 2,
          ans: '<p>Tab moves to the next cell; from the last cell it creates a new row. Shift + Tab moves back one cell; Enter only adds a new line inside the same cell.</p>' },
        { ch: 4, m: 1, q: '<p>In mail merge, the document that holds the text which is the <b>same</b> in every letter is the</p>',
          opts: ['Data source', 'Recipient list', 'Main document', 'Merged document'], a: 2,
          ans: '<p>The <b>main document</b> has the common text plus merge fields. The data source (recipient list) holds the details that change; the merged document is the final result.</p>' },
        { ch: 4, m: 1, ar: true,
          A: 'Mail merge saves time when the same letter has to be sent to many people.',
          R: 'The data source stores the details that change in each letter, such as names and addresses.', a: 0,
          ans: '<p>Both are true. Because the changing details are kept in the data source, Word fills them in automatically and you write the letter only once — so R explains A.</p>' },
        { ch: 2, m: 1, ar: true,
          A: 'Two files with exactly the same name and extension can be saved in the same folder.',
          R: 'A folder can store many files.', a: 3,
          ans: '<p>A is false: inside one folder every file name (with its extension) must be different — Windows asks you to replace or rename. R is true: a folder can hold many files.</p>' }
      ] },

    { id: 'B', title: 'Section B · Very short answer', pill: '5 × 2 = 10 marks', qs: [
        { ch: 1, m: 2, q: '<p>Differentiate between <b>hardware</b> and <b>software</b>. Give one example of each.</p>',
          ans: '<p><b>Hardware</b> — the physical parts of a computer that we can see and touch, e.g. keyboard, monitor. <span class="mk">[1]</span><br>' +
               '<b>Software</b> — the set of programs (instructions) that tells the hardware what to do; it cannot be touched, e.g. MS Word, Windows. <span class="mk">[1]</span></p>' },
        { ch: 1, m: 2, q: '<p>Write the full forms of: (i) CPU (ii) RAM (iii) ROM (iv) USB</p>',
          ans: '<p>(i) Central Processing Unit (ii) Random Access Memory (iii) Read Only Memory (iv) Universal Serial Bus <span class="mk">[½ each]</span></p>' },
        { ch: 2, m: 2, q: '<p>What is a <b>file extension</b>? Write the extension of (i) a Word document (ii) a picture file.</p>',
          ans: '<p>The letters after the dot in a file name that tell the <b>type</b> of file and which program opens it. <span class="mk">[1]</span><br>' +
               '(i) <b>.docx</b> <span class="mk">[½]</span> (ii) <b>.jpg</b> or .png <span class="mk">[½]</span></p>' },
        { ch: 3, m: 2, q: '<p>Write the steps to insert a table with <b>4 columns and 5 rows</b> in MS Word.</p>',
          ans: '<ol><li>Click where the table is needed and open the <b>Insert</b> tab.</li><li>Click <b>Table</b> → <b>Insert Table</b>.</li>' +
               '<li>Type <b>4</b> in Number of columns and <b>5</b> in Number of rows.</li><li>Click <b>OK</b>.</li></ol>' +
               '<p class="small">(Or drag over a 4 × 5 grid in the Table menu.) <span class="mk">[½ each step]</span></p>' },
        { ch: 4, m: 2, q: '<p>What is a <b>merge field</b>? Give two examples.</p>',
          ans: '<p>A placeholder in the main document that is replaced by data from the data source for each letter. <span class="mk">[1]</span><br>' +
               'Examples: «First_Name», «Address» (any two, e.g. «Class», «City»). <span class="mk">[½ each]</span></p>' }
      ] },

    { id: 'C', title: 'Section C · Short answer', pill: '4 × 3 = 12 marks', qs: [
        { ch: 1, m: 3, q: '<p>Classify these as <b>input</b>, <b>output</b> or <b>storage</b> devices:</p><p class="rawdata">Keyboard, Monitor, Pen drive, Microphone, Speaker, Hard disk</p>',
          ans: '<div class="tablewrap"><table class="compact"><thead><tr><th>Input</th><th>Output</th><th>Storage</th></tr></thead>' +
               '<tbody><tr><td>Keyboard, Microphone</td><td>Monitor, Speaker</td><td>Pen drive, Hard disk</td></tr></tbody></table></div>' +
               '<p><span class="mk">[½ each]</span></p>' },
        { ch: 2, m: 3, q: '<p>(i) What is the difference between <b>copying</b> and <b>moving</b> a file? (ii) Write the shortcut keys for Copy, Cut and Paste.</p>',
          ans: '<p>(i) <b>Copy</b> keeps the file in its original place and puts a duplicate in the new place. <b>Move</b> (cut and paste) takes it out of the original place and puts it in the new place — only one copy remains. <span class="mk">[1½]</span><br>' +
               '(ii) Copy <b>Ctrl + C</b>, Cut <b>Ctrl + X</b>, Paste <b>Ctrl + V</b> <span class="mk">[½ each]</span></p>' },
        { ch: 3, m: 3, q: '<p>Explain the use of each in an MS Word table: (i) Merge Cells (ii) Split Cells (iii) Shading</p>',
          ans: '<p>(i) <b>Merge Cells</b> joins two or more selected cells into one cell, e.g. for a heading across the table. <span class="mk">[1]</span><br>' +
               '(ii) <b>Split Cells</b> divides one cell into the number of rows and columns you choose. <span class="mk">[1]</span><br>' +
               '(iii) <b>Shading</b> fills the background of cells with a colour, to highlight them (Table Design tab). <span class="mk">[1]</span></p>' },
        { ch: 4, m: 3, q: '<p>List the steps to do a mail merge for letters in MS Word using the <b>Mailings</b> tab.</p>',
          ans: '<ol><li>Open the main document; <b>Mailings → Start Mail Merge → Letters</b>.</li>' +
               '<li><b>Select Recipients</b> → Type a New List or Use an Existing List (the data source).</li>' +
               '<li>Place the cursor and use <b>Insert Merge Field</b> to add fields such as «Name».</li>' +
               '<li><b>Preview Results</b> to check each letter.</li>' +
               '<li><b>Finish &amp; Merge</b> → Edit Individual Documents (or Print Documents).</li></ol>' +
               '<p><span class="mk">[3 marks for steps in the right order; ½ off for each missing step]</span></p>' }
      ] },

    { id: 'D', title: 'Section D · Case-based', pill: '2 × 4 = 8 marks', qs: [
        { ch: 3, m: 4, q: '<p>Riya is making her class timetable in MS Word. It must show <b>6 days</b> (Monday–Saturday) down the side and <b>8 periods</b> across the top, plus a heading row and a heading column.</p>' +
             '<ol class="subq"><li>How many rows and columns should her table have?</li><li>She wants the word “LUNCH” to appear once, running down the whole column after period 4. Which option should she use?</li>' +
             '<li>How can she make the heading row stand out?</li><li>Her school adds a 9th period. How can she add one more column at the end?</li></ol>',
          ans: '<ol class="subq"><li>1 heading row + 6 days = <b>7 rows</b>; 1 heading column + 8 periods = <b>9 columns</b>. (A lunch column, if added, makes 10.) <span class="mk">[1]</span></li>' +
               '<li>Select the cells in that column and use <b>Merge Cells</b> (Layout tab). <span class="mk">[1]</span></li>' +
               '<li>Select the row and make it <b>bold</b> and/or add <b>Shading</b> (Table Design tab). <span class="mk">[1]</span></li>' +
               '<li>Click in the last column → Layout tab → <b>Insert Right</b>. <span class="mk">[1]</span></li></ol>' },
        { ch: 4, m: 4, hard: true,
          q: '<p>The school must send a PTM invitation to the parents of <b>120 students</b>. Every letter is the same except the parent’s name, the student’s name and the class. Mr Rao has these details in a list.</p>' +
             '<ol class="subq"><li>Which feature of MS Word should he use, and why?</li><li>What is his list of names called in this feature?</li>' +
             '<li>Name the merge fields he should insert.</li><li>How can he check a few letters before printing all 120?</li></ol>',
          ans: '<ol class="subq"><li><b>Mail merge</b> — he writes the letter once and Word makes 120 personalised copies automatically, saving time and avoiding typing errors. <span class="mk">[1]</span></li>' +
               '<li>The <b>data source</b> (recipient list). <span class="mk">[1]</span></li>' +
               '<li>«Parent_Name», «Student_Name», «Class». <span class="mk">[1]</span></li>' +
               '<li>Use <b>Preview Results</b> on the Mailings tab and step through the records with the arrows. <span class="mk">[1]</span></li></ol>' }
      ] }
  ]
};
