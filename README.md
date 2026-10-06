# Class VI Study Hub

Managed by the `study-assistant` Claude Code agent.

## How to start a session

1. Open Claude Code in this project folder.
2. Upload one or more textbook page images.
3. Type `/study-session` — or just say _"let's study Chapter 3 of Science"_.

Claude will:
- Identify the subject and chapter from the image
- Create or update `lesson.md` for that chapter (cumulative across sessions)
- Generate whatever outputs you ask for (question bank, summary, practice test, etc.)

## Folder layout

```
studies/
  class-vi/
    mathematics/
      ch01-knowing-our-numbers/
        lesson.md          ← grows with every session
        outputs/
          question-bank-2026-08-09.md
          summary-2026-08-10.md
    science/
    english/
    hindi/
    social-science/
    sanskrit/
```

## Output types available

| Command | What you get |
|---|---|
| question bank | Fill-in-the-blank, T/F, MCQ, short & long answer, HOTS + answer key |
| summary | One-page revision sheet |
| practice test | Timed test with marks breakdown + answer key |
| mind map | Text-based hierarchical map of the chapter |
| flashcards | Term ↔ definition table, ready to quiz from |

## Continuity

`lesson.md` is the single source of truth per chapter. Each session appends to it — so you can feed in a few pages at a time and the context builds up over weeks, ready to reference in any future session.
