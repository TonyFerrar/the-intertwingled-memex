# Understanding Domain and Range: A Step-by-Step Guide

This guide breaks down the core concepts of **domain** and **range**, provides algebraic strategies for finding them, and walks through diverse worked examples step-by-step.

---

## Core Concepts

### What is Domain?
The **domain** of a function is the set of all possible **input values** (typically $x$-values) for which the function is defined and produces a real number output. 

When looking at a function algebraically, you start by assuming the domain is all real numbers, $(-\infty, \infty)$, and look for "red flags" that restrict it.

#### The Two Main Domain Restrictions:
1. **Division by Zero:** The denominator of a fraction cannot equal zero.
2. **Negative Roots:** The expression inside an even-indexed root (like a square root) must be greater than or equal to zero.

### What is Range?
The **range** of a function is the set of all possible **output values** (typically $y$-values) that the function can produce after plugging in every number from the domain.

Finding the range algebraically is often trickier than finding the domain. It requires looking at the behavior of the function, utilizing known minimums/maximums, or solving the equation for $x$ to find restrictions on $y$.

---

## Worked Examples

### Example 1: The Quadratic Function (Parabola)
State the domain and range of:
$$f(x) = x^2 + 1$$

#### Step-by-Step Solution:

**1. Finding the Domain:**
* Look for restrictions: Is there a fraction with a variable in the denominator? No. Is there a square root? No.
* Because $x$ can be any real number without breaking any mathematical rules, the domain is all real numbers.
* **Domain:** $(-\infty, \infty)$

**2. Finding the Range:**
* Analyze the behavior of the leading term, $x^2$. Any real number squared is always non-negative:
  $$x^2 \geq 0$$
* Now, build the function by adding $1$ to both sides of the inequality:
  $$x^2 + 1 \geq 0 + 1$$
  $$f(x) \geq 1$$
* This tells us that the outputs ($y$-values) will never drop below $1$, but they will extend upwards toward infinity.
* **Range:** $[1, \infty)$

---

### Example 2: The Radical Function (Square Root)
State the domain and range of:
$$f(x) = \sqrt{x+3}$$

#### Step-by-Step Solution:

**1. Finding the Domain:**
* **Restriction Alert:** We have a square root. The values underneath the radical sign (the radicand) cannot be negative.
* Set up an inequality where the radicand is greater than or equal to zero:
  $$x + 3 \geq 0$$
* Solve for $x$:
  $$x \geq -3$$
* **Domain:** $[-3, \infty)$

**2. Finding the Range:**
* Consider the definition of a principal square root symbol ($\sqrt{\quad}$). By default, it outputs a value that is greater than or equal to zero:
  $$\sqrt{\text{anything}} \geq 0$$
* When $x = -3$ (the absolute edge of our domain), $f(-3) = \sqrt{-3+3} = 0$. As $x$ grows larger, the square root grows larger indefinitely.
* **Range:** $[0, \infty)$

---

### Example 3: The Rational Function (Fractions)
State the domain and range of:
$$f(x) = \frac{9}{x-2}$$

#### Step-by-Step Solution:

**1. Finding the Domain:**
* **Restriction Alert:** We have a variable in the denominator. The denominator cannot equal zero.
* Set the denominator equal to zero to find the excluded value:
  $$x - 2 = 0 \implies x = 2$$
* Since $x$ cannot be $2$, the domain includes everything up to $2$, and everything past $2$.
* **Domain:** $(-\infty, 2) \cup (2, \infty)$

**2. Finding the Range:**
* **Method 1 (Conceptual):** Look at the fraction $\frac{9}{x-2}$. For a fraction to equal zero, its *numerator* must equal zero. Because the numerator is a constant ($9$), this fraction can **never** equal zero, no matter how large or small the denominator becomes. Therefore, $y \neq 0$.
* **Method 2 (Algebraic Inverse):** Set $f(x) = y$ and solve the equation for $x$ to look for $y$-restrictions:
  $$y = \frac{9}{x-2}$$
  $$y(x - 2) = 9$$
  $$x - 2 = \frac{9}{y}$$
  $$x = \frac{9}{y} + 2$$
* Looking at this rearranged equation, we can clearly see a new restriction: $y$ cannot be $0$ because it sits in a denominator.
* **Range:** $(-\infty, 0) \cup (0, \infty)$

---

## Summary Cheat Sheet

| Function Type | General Form | Domain Tip | Range Tip |
| :--- | :--- | :--- | :--- |
| **Linear** | $f(x) = mx + b$ | Always $(-\infty, \infty)$ | Always $(-\infty, \infty)$ (if $m \neq 0$) |
| **Quadratic** | $f(x) = ax^2 + bx + c$ | Always $(-\infty, \infty)$ | Find the vertex ($k$). If $a>0$: $[k, \infty)$. If $a<0$: $(-\infty, k]$ |
| **Square Root**| $f(x) = \sqrt{\text{expression}}$ | Set $\text{expression} \geq 0$ | Look at the sign outside the radical to determine direction. |
| **Rational** | $f(x) = \frac{\text{numerator}}{\text{denominator}}$ | Set $\text{denominator} \neq 0$ | Look for horizontal asymptotes or solve for $x$. |



## Extra Help 

<iframe width="560" height="315" src="https://www.youtube.com/embed/djT6-YamHaA?si=jal3hkfLwT9ipuVP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 

