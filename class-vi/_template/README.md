# Study Pack Template — Class VI

This folder is the **canonical source** for the interactive HTML study packs. Do not study from it; copy from it.

## What lives here

```
_template/
  assets/
    app.css     ← shared stylesheet: light/dark, cards, tables, callouts,
                  collapsibles, flashcards, quiz UI, print rules
    app.js      ← shared behaviour: theme toggle, expand/collapse all,
                  live search/filter, flashcard flip deck, reveal-answer
                  toggles, localStorage tick-boxes
    quiz.js     ← the MCQ test engine (chapter-agnostic — never edit per chapter)
  README.md     ← this file
```

`quiz-data.js` is **not** here, because the questions are chapter-specific. Each chapter writes its own.

## Recipe for a new chapter

1. Create the chapter folder and write `lesson.md` (Markdown — the knowledge base).
2. `mkdir` the pack: `{chapter}/html/assets/`
3. Copy all three files from `_template/assets/` into `{chapter}/html/assets/`. **Copy — do not symlink, and do not rewrite them from scratch.**
4. Write `{chapter}/html/assets/quiz-data.js` with that chapter's questions.
5. Write the pages: `index.html`, `lesson.html`, `summary.html`, `flashcards.html`, `mind-map.html`, `question-bank.html`, `quiz.html`.
6. Validate before handing over (see below).

Each chapter ends up self-contained, so a single chapter folder can be zipped or copied to a tablet and still work.

## Page skeleton

Every page uses this shell. Set `aria-current="page"` on the current nav link, and drop nav entries for pages you did not generate.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{Page} — {Chapter Title}</title>
<link rel="stylesheet" href="assets/app.css">
</head>
<body>

<header class="topbar">
  <div class="brand">📍 <span>Ch {NN}</span> {Chapter Title}</div>
  <nav>
    <a href="index.html">Home</a>
    <a href="lesson.html">Lesson</a>
    <a href="summary.html">Revision</a>
    <a href="flashcards.html">Flashcards</a>
    <a href="mind-map.html">Mind Map</a>
    <a href="question-bank.html">Question Bank</a>
    <a href="quiz.html">MCQ Test</a>
  </nav>
  <button class="icon-btn" id="themeBtn" aria-label="Toggle dark mode">☾</button>
</header>

<main class="wrap">        <!-- add class "narrow" for text-heavy pages -->
  <div class="pagehead">
    <div class="eyebrow">{context line}</div>
    <h1>{Heading}</h1>
    <p>{one-line intro}</p>
  </div>

  <!-- content -->

  <footer class="foot">
    <span>Class VI · CBSE / NCERT · <em>{Textbook name}</em></span>
    <span>Generated {DD Mon YYYY}</span>
  </footer>
</main>
<script src="assets/app.js"></script>
</body>
</html>
```

## CSS building blocks

| Class | Use |
|---|---|
| `.card` | Standard white panel |
| `.grid.two` / `.three` / `.four` | Responsive columns |
| `.tile` | Clickable hub tile (use on `index.html`) |
| `.note.tip` / `.warn` / `.key` / `.err` | Coloured callout; put a `<span class="lbl">LABEL</span>` first |
| `.pill` / `.pill.a` `.g` `.r` `.t` | Small status chip |
| `details.acc` + `<div class="body">` | Collapsible section; `<span class="num">N</span>` for the badge |
| `.tablewrap` around `<table>` | Makes wide tables scroll on mobile instead of overflowing |
| `pre.diagram` | Monospace ASCII diagram |
| `.btn` / `.btn.primary` / `.btn.big` | Buttons; wrap groups in `.btnrow` |
| `.chipbar` + `.chip` | Filter chips |
| `.bar` + inner `<i>` | Progress bar |

## Behaviours wired by `app.js`

| Markup | Effect |
|---|---|
| `id="themeBtn"` | Light/dark toggle, remembered in `localStorage` |
| `data-acc="open"` / `="closed"` | Expand or collapse every `details.acc` on the page |
| `<input class="search" data-filter="details.acc" data-count="#searchCount">` | Live filter; auto-opens matches |
| `id="deck"` + `id="deckChips"` + `window.FLASHCARDS` | Builds the flip-card deck |
| `id="shuffleBtn"` `id="resetBtn"` `id="flipAllBtn"` `id="fcCount"` | Flashcard controls |
| `data-reveal="#someId"` | Show/hide an answer box (`.answerbox hidden`) |
| `id="revealAllBtn"` | Reveals every `.answerbox` and opens every `details.acc` |
| `data-check="key"` on a checkbox | Tick state remembered per page in `localStorage` |

### Flashcard data shape

```js
window.FLASHCARDS = [
  { n: 1, deck: 'Deck name', q: 'Front of card', a: 'Back of card — <b>HTML allowed</b>' },
  ...
];
```
Put this in an inline `<script>` **before** `assets/app.js`. Deck chips are generated automatically from the distinct `deck` values.

## The MCQ test

`quiz.html` needs the shell below plus these three scripts in this order:

```html
<script src="assets/app.js"></script>
<script src="assets/quiz-data.js"></script>
<script src="assets/quiz.js"></script>
```

### Question data shape

```js
window.QUIZ = {
  title: 'Chapter title',
  subtitle: 'Subject · Class VI · Chapter N',
  minutes: 40,
  questions: [
    {
      n: 1,
      topic: 'Short topic label — used for the weak-topic breakdown',
      q: 'The question text',
      opts: ['Option A', 'Option B', 'Option C', 'Option D'],
      a: 2,                    // 0-based index of the CORRECT option
      why: 'The reason. Shown in the review when the student got it wrong.'
    }
  ]
};
```

### Element IDs the engine requires

The engine will silently do nothing if these are missing, so copy `quiz.html` from an existing chapter rather than writing it fresh.

`screen-start` `screen-test` `screen-result` · `totalQ` `totalMin` `lastAttempt` `timedOpt` `shuffleOpt` `startBtn` · `qnum` `qtopic` `qtext` `opts` `bar` `timer` `dots` `answeredCount` `prevBtn` `nextBtn` `finishBtn` · `bigScore` `scorePct` `verdict` `sCorrect` `sWrong` `sBlank` `weakTopics` `reviewList` `retakeBtn` · plus `[data-rev="all|wrong|blank"]` filter chips.

### What the engine gives you for free

Start screen → one question at a time → timer with auto-submit → jump-to-question dots → confirm prompt if questions are unanswered → score, verdict and correct/wrong/skipped stats → weak-topic breakdown → per-question review showing their answer, the correct answer and the reason → filter to "only what I got wrong" → last-score memory → keyboard shortcuts (`1`–`4`, `A`–`D`, `←` `→`).

**No answer is revealed until the test is submitted.** The jump dots show *answered*, never *correct*. Do not add anything that leaks the answer mid-test.

## Validation — always run before handing over

1. **Answer spread.** Count how many correct answers sit at A / B / C / D. It must be roughly even (±2 of `total/4`). A first draft typically clusters heavily on one letter, which lets the student game the test. Fix by swapping the correct option into a target slot — but **leave options that form a genuine numeric or chronological sequence in sorted order** (never scramble "100 / 200 / 250 / 500 km").
2. **Structure.** Every question has 4 options, `a` within range, a non-empty `why`, a `topic`, no duplicate question text, no duplicate option text.
3. **Syntax.** `node --check` each `.js` file.
4. **Links.** Every `href`/`src` resolves to a file that exists.
5. **Tags.** `div`, `details`, `table`, `section`, `ul`, `ol` open/close counts match per page.
6. **Wiring.** Every ID the engine reaches for exists in `quiz.html`.

Write checks 1–6 as a throwaway Node script in the scratchpad — do not eyeball them.

### 7. Actually render every page and look at it

**Checks 1–6 all passed on a flashcards page that displayed nothing at all.** Structural validation cannot see layout. Screenshot each page with headless Chrome and view the images:

```powershell
$chrome = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$page = "file:///<abs-path>/html/flashcards.html"
Start-Process -FilePath $chrome -Wait -ArgumentList `
  "--headless=new","--disable-gpu","--hide-scrollbars",`
  "--virtual-time-budget=5000","--window-size=1280,1000",`
  "--screenshot=<out>\shot.png",$page
```

Edge works too: `C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`.

For **interactive states** the initial screenshot cannot reach — a flipped flashcard, a mid-test question, the results screen — write a temp copy of the page with a `<script>` injected before `</body>` that drives the UI, screenshot that, then delete the temp file:

```js
window.confirm = function () { return true; };   // if the flow prompts
window.addEventListener("load", function () {
  setTimeout(function () {
    document.getElementById("startBtn").click();
    // click options, press Next, click Finish …
  }, 300);
});
```

Verify at minimum: every page's first screen, a flipped flashcard, one mid-test question, and the results screen with its review.

> **Known trap — inline elements cannot be sized.** A `<button>` may only contain *phrasing content*, so the flashcard faces have to be `<span>`s. `width`/`height` **do not apply to non-replaced inline elements**, and `transform` / `transform-style: preserve-3d` are unreliable on them. Size such wrappers with `position: absolute; inset: 0` (which also blockifies them) rather than `width: 100%; height: 100%`. This exact mistake made every flashcard render as an empty box.
