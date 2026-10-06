# Mathematics — Chapter 03: Number Play

> **Class VI | CBSE / NCERT**
> Textbook: *Ganita Prakash* (NCERT, 2024)
> Last updated: 2026-10-03

> **Source note:** written from knowledge of the NCERT *Ganita Prakash* chapter, **not** from textbook photos. Check any detail that differs from your copy.

---

## Overview
A playful chapter about what numbers can tell us: arrangements and "supercells", digit sums, odd/even (parity) rules, palindromes, Kaprekar's magic number 6174, clock and calendar patterns, mental-math tricks, the unsolved Collatz conjecture, estimation, and a number game with a winning strategy.

---

## Key Terms & Definitions
| Term | Definition |
|---|---|
| Supercell | A cell in a grid whose number is **greater than all its neighbours** (left, right, above, below). |
| Digit sum | The sum of the digits of a number: digit sum of 4,725 = 4 + 7 + 2 + 5 = 18. |
| Parity | Whether a number is **odd or even**. |
| Palindrome | A number that reads the same forwards and backwards: 121, 4334, 90709. |
| Reverse-and-add | Add a number to its reverse; repeat until a palindrome appears (39 + 93 = 132, 132 + 231 = 363). |
| Kaprekar constant | **6174**. Take any 4-digit number (digits not all the same), arrange digits largest-first and smallest-first, subtract; repeat. You always reach 6174 (in at most 7 steps). Found by D. R. Kaprekar, an Indian mathematics teacher, in 1949. |
| 3-digit Kaprekar number | The same routine on 3-digit numbers always reaches **495**. |
| Collatz conjecture | Start with any number: if even, halve it; if odd, multiply by 3 and add 1. It is believed you always reach 1, but **no one has proved it** (proposed by Lothar Collatz, 1937). |
| Estimation | Finding an approximate answer quickly and sensibly. |

---

## Core Concepts

### 1. Numbers can tell us things
Children standing in a line each call out how many of their **neighbours** are taller than them (0, 1 or 2). From these numbers you can reason about the arrangement — e.g. a child who says 0 is taller than both neighbours.

### 2. Supercells
In a grid of numbers, a supercell beats every neighbour that shares a side with it. Corner cells have 2 neighbours, edge cells 3, inside cells 4. The **largest number in a grid is always a supercell**; the smallest never is (in a grid with more than one cell).

### 3. Playing with digits
- Digit sums group numbers: 14, 23, 32, 41, 50, 59, 68, 77, … all have digit sum 5 or 14 …
- Smallest number with a given digit sum: put the big digits at the end (digit sum 20, 3-digit → **299**).
- The digit 7 appears **20 times** when writing 1 to 100 (10 times in the ones place: 7, 17, … 97; 10 times in the tens place: 70–79).

### 4. Pass the parity — odd and even rules
| Operation | Result |
|---|---|
| even + even | even |
| odd + odd | even |
| odd + even | odd |
| even × anything | even |
| odd × odd | odd |
- A sum of **an odd number of odd numbers** is odd; a sum of an even number of odd numbers is even.
- Odd numbers can be written 2*n* + 1; even numbers 2*n*.

### 5. Palindromic patterns
- Reverse-and-add usually produces a palindrome quickly (68 → 154 → 605 → 1111).
- Palindromic times: 10:01, 12:21, 1:11, 2:22 … Palindromic dates like 12/02/2021 (12022021).

### 6. Kaprekar's magic number
Example with 3524: 5432 − 2345 = 3087 → 8730 − 0378 = 8352 → 8532 − 2358 = 6174 → 7641 − 1467 = 6174 (stays). Keep leading zeros (0378) so the number stays 4-digit.

### 7. Mental math
Split by place value or use nearby round numbers: 498 + 367 = 500 + 367 − 2 = 865.

### 8. Collatz conjecture example
6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1 (8 steps).

### 9. Estimation
Estimate quantities like the number of students in the school, or steps from home to school, using a small sample × number of times it repeats.

### 10. Games and winning strategies
In the "reach 21" game (players take turns adding 1, 2 or 3 to a running total; whoever says 21 wins) the winning positions are 21, 17, 13, 9, 5, 1 — always leave a total that is 1 more than a multiple of 4. *(The rules in your book may differ slightly — check.)*

---

## Important Rules / Formulas
- Parity table above.
- Kaprekar: 4-digit → 6174; 3-digit → 495.
- Collatz: even → ÷ 2, odd → × 3 + 1.

---

## Solved Examples
### Example 1
Apply Kaprekar's routine to 352.
**Solution:** 532 − 235 = 297 → 972 − 279 = 693 → 963 − 369 = 594 → 954 − 459 = **495** → 954 − 459 = 495 (repeats).

### Example 2
Is 37 + 52 + 81 + 19 odd or even (without adding)?
**Solution:** three odd numbers (37, 81, 19) + one even → odd + even = **odd** (sum = 189).

---

## Exercise Questions (typical)
1. Find the supercells in a given grid.
2. Make the largest/smallest 5-digit palindrome with a given digit sum.
3. Apply Kaprekar's routine to your birth year.
4. How many times does a digit appear from 1 to 100?

---

## Quick Summary
- Supercell = bigger than all side-neighbours.
- odd + odd = even; odd × odd = odd; odd count of odd numbers → odd sum.
- Palindromes read the same both ways; reverse-and-add makes them.
- 6174 (4-digit) and 495 (3-digit) are Kaprekar's numbers.
- Collatz: always reaches 1? Still unproven.

---

## Interactive version
Practice questions on this chapter are in **`../pt2-practice-papers/html/index.html`**.

---

## Session Log
| Date | Pages / Content Added |
|---|---|
| 2026-10-03 | Initial: whole chapter written from knowledge of the NCERT book (no photos supplied). Built for PT-2 revision. |
