---
title: "Session 19 - Sequences and Infinite Series"
type: course-session
course: MATH-182
semester: Fall 2026
publish: true
cssclasses: []
updated: 2026-08-18
---

# Session 19 - Sequences and Infinite Series

## Session Objectives
By the end of this session, you will be able to:
- Analyzing the Long-Term Behavior of Sequences (Limits & Convergence)
- Evaluating Infinite Series via Partial Sums and Special Series Tests
- Generating Sequences (Implicit vs. Explicit Modeling)

## Session Timeline
- **00:00 - 00:10 (10 mins)**: Micro-Lecture
- **00:10 - 00:25 (15 mins)**: Skill Block 1
- **00:25 - 00:30 (5 mins)**: Regroup 1
- **00:30 - 00:45 (15 mins)**: Skill Block 2
- **00:45 - 00:50 (5 mins)**: Regroup 2
- **00:50 - 01:05 (15 mins)**: Skill Block 3
- **01:05 - 01:10 (5 mins)**: Regroup 3
- **01:10 - 01:15 (5 mins)**: Synthesis Wrap-up

## Session Content

### Micro-Lecture
#### Engineering Context: Engineering Calculus II Application
In this session, we investigate the mathematical principles of **Sequences and Infinite Series** and explore how engineers apply these concepts to analyze real-world physical and structural systems.

### Skill Block 1
One of the most vital characteristics of any sequence is understanding how its terms behave as the index variable $n$ grows infinitely large. When we evaluate a sequence's ultimate destination, we are analyzing its mathematical **limit**.

## Conceptual Overview

When tracking a sequence out toward infinity ($\infty$), its terms will generally exhibit one of three behaviors:

1. They will approach a single, fixed numerical value.
    
2. They will grow infinitely large in magnitude without any bound.
    
3. They will oscillate back and forth erratically with no clear pattern.
    

Based on these behaviors, we mathematically classify sequences into two distinct categories:

### 1. Convergent Sequences

If the terms of a sequence approach a unique, finite number $L$ as $n$ increases, we say the sequence **converges** to that limit.

- **Mathematical Notation:**
    
    $$\lim_{n \to \infty} a_n = L$$
    

### 2. Divergent Sequences

If the terms do not settle down near a single, unique finite number as $n$ increases, the limit does not exist, and we say the sequence **diverges**. This happens if the sequence climbs toward infinity ($\infty$), drops toward negative infinity ($-\infty$), or oscillates perpetually without stabilizing.

## Standard Sample Problems

### Problem 1: Evaluating a Convergent Rational Sequence

**Scenario:** Determine if the sequence defined by $a_n = \frac{4n}{2n + 3}$ converges or diverges. If it converges, find its limit.

#### Solution

To find the long-term behavior, evaluate the limit as $n \to \infty$:

$$\lim_{n \to \infty} \frac{4n}{2n + 3}$$

Divide every term in both the numerator and the denominator by the highest power of $n$ present (which is $n^1$):

$$\lim_{n \to \infty} \frac{\frac{4n}{n}}{\frac{2n}{n} + \frac{3}{n}} = \lim_{n \to \infty} \frac{4}{2 + \frac{3}{n}}$$

As $n$ approaches infinity, the fractional term $\frac{3}{n}$ shrinks down to $0$:

$$\frac{4}{2 + 0} = \frac{4}{2} = 2$$

- **Result:** The sequence **converges**.
    
- **Limit:** $\lim_{n \to \infty} a_n = 2$
    

### Problem 2: Evaluating an Unbounded Divergent Sequence

**Scenario:** Determine if the sequence defined by $a_n = 4^n - 3$ converges or diverges.

#### Solution

Evaluate the limit as $n \to \infty$:

$$\lim_{n \to \infty} (4^n - 3)$$

As $n$ grows larger, raising the base number 4 to an increasingly massive exponent causes the term $4^n$ to grow exponentially without bound. Subtracting 3 from an infinitely large number does nothing to slow it down.

$$\lim_{n \to \infty} (4^n - 3) = \infty$$

- **Result:** The sequence **diverges** because it grows without bound.
    

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Finite Element Analysis (Structural Stress Convergence)]]
[[Finite Element Analysis (Structural Stress Convergence) Solution]]


### Engineering Problem 2: [[Aerospace Control Loops (Unstable Autopilot Divergence)]]
[[Aerospace Control Loops (Unstable Autopilot Divergence) Solution]]

#### Worked Example
1. Write the first four terms of the sequence $\{a_{n}\}_{n=1}^{\infty}$ defined by the following.
    (a) $a_{n}=\frac{1}{3^{n}}$
    (b) $a_{n+1}=a_{n}^{2}-2$, $a_{1}=0$

##### Solution
###### Part (a): Explicit Sequence

**Formula:**

$$a_n = \frac{1}{3^n}$$

An **explicit formula** allows you to find any term in the sequence directly by plugging in the index number ($n$). Since the sequence starts at $n = 1$, we substitute $n = 1, 2, 3,$ and $4$ into the formula.

- **For $n = 1$:**

$$a_1 = \frac{1}{3^1} = \frac{1}{3}$$

- **For $n = 2$:**

$$a_2 = \frac{1}{3^2} = \frac{1}{9}$$

- **For $n = 3$:**

$$a_3 = \frac{1}{3^3} = \frac{1}{27}$$

- **For $n = 4$:**

$$a_4 = \frac{1}{3^4} = \frac{1}{81}$$


**First four terms for (a):**

$$\left\{ \frac{1}{3}, \frac{1}{9}, \frac{1}{27}, \frac{1}{81} \right\}$$

###### Part (b): Recursive Sequence

**Formula:**

$$a_{n+1} = a_n^2 - 2 \quad \text{with} \quad a_1 = 0$$

A **recurrence relation** defines each new term based on the value of the previous term. We are already given the very first term, so we use it to chain our way forward.

- **First term ($a_1$):**

Given directly in the problem:

$$a_1 = 0$$

- **Second term ($a_2$):**

Plug $a_1$ into the recurrence relation:

$$a_2 = (a_1)^2 - 2 = (0)^2 - 2 = -2$$

- **Third term ($a_3$):**

Plug $a_2$ into the recurrence relation:

$$a_3 = (a_2)^2 - 2 = (-2)^2 - 2 = 4 - 2 = 2$$

- **Fourth term ($a_4$):**

Plug $a_3$ into the recurrence relation:

$$a_4 = (a_3)^2 - 2 = (2)^2 - 2 = 4 - 2 = 2$$


**First four terms for (b):**

$$\{0, -2, 2, 2\}$$
#### Active Practice Problem
2. Find a recurrence relation that generates the following sequence. Make sure to indicate the initial term.
    $\{-1,0,3,12,39,...\}$

##### Workspace

##### Solution
###### Step 1: Identify the Initial Term

A recurrence relation always requires a starting point. Looking at the sequence, the very first term is $-1$.

$$a_1 = -1$$

###### Step 2: Analyze the Pattern Between Terms

Let's list out the terms to see how we get from one to the next:

- $a_1 = -1$

- $a_2 = 0$

- $a_3 = 3$

- $a_4 = 12$

- $a_5 = 39$


One common strategy for sequences like this is to see if a term can be generated by multiplying the previous term by a constant and adding/subtracting a number. Let's assume the relation looks like this:

$$a_{n+1} = c \cdot a_n + d$$

We can plug in our known terms to find the constants $c$ and $d$:

1. **Using $a_1 = -1$ and $a_2 = 0$:**

$$0 = c(-1) + d \implies d = c$$

2. **Using $a_2 = 0$ and $a_3 = 3$:**

$$3 = c(0) + d \implies d = 3$$


Since $d = 3$ and $d = c$, then $c$ must also be $3$.

This gives us the candidate relation:

$$a_{n+1} = 3a_n + 3$$

###### Step 3: Verify the Relation

Before finalizing, we need to test this rule on the rest of the sequence to ensure it holds true.

- **Find $a_4$ using $a_3 = 3$:**

$$a_4 = 3(3) + 3 = 9 + 3 = 12 \quad \text{(Matches!)}$$

- **Find $a_5$ using $a_4 = 12$:**

$$a_5 = 3(12) + 3 = 36 + 3 = 39 \quad \text{(Matches!)}$$


###### Final Answer

The recurrence relation, including its initial term, is:

$$a_{n+1} = 3a_n + 3 \quad \text{for } n \ge 1, \quad \text{with } a_1 = -1$$

_(Note: It can also be written in terms of $a_n$ and $a_{n-1}$ as $a_n = 3a_{n-1} + 3$ for $n \ge 2$, with $a_1 = -1$. Both forms mean the exact same thing!)_

### Regroup 1
- Review common misconceptions and clarify key notations.

### Skill Block 2
While a sequence is just a list of numbers, an **infinite series** is the result of adding that infinite list of numbers together. Since you cannot physically perform an infinite number of additions, calculus provides frameworks to determine if an endless sum adds up to a clean, finite number or explodes to infinity.

## Conceptual Overview

An infinite series is written using summation notation:

$$\sum_{n=1}^{\infty} a_n = a_1 + a_2 + a_3 + \dots$$

To evaluate whether this endless addition settles on a finite total, we analyze its structural behavior using two primary approaches:

### 1. The Sequence of Partial Sums ($S_n$)

A partial sum $S_n$ is the sum of just the first $n$ terms of the series. We create a new list out of these running totals ($S_1, S_2, S_3, \dots$) and evaluate its limit:

$$\text{Total Sum} = \lim_{n \to \infty} S_n = L$$

- If the limit is a finite number $L$, the series **converges** to $L$.
    
- If the limit does not exist or goes to infinity, the series **diverges**.
    

### 2. Special Structural Series Tests

Instead of building a partial sum sequence from scratch every time, we look for recognizable geometric or algebraic patterns:

- **Geometric Series:** Each term is found by multiplying the previous term by a fixed ratio $r$. It takes the form $\sum a r^{n-1}$.
    
    - It **converges** if and only if $\vert{}r\vert{} < 1$, and its total sum is exactly $\frac{a}{1-r}$.
        
    - It **diverges** if $\vert{}r\vert{} \ge 1$.
        
- **Telescoping Series:** A series where the internal parts of the terms cancel each other out when expanded, leaving only a few clean terms at the beginning and the very end.
    

## Standard Sample Problems

### Problem 1: Evaluating a Geometric Series

**Scenario:** Determine if the infinite series $\sum_{n=1}^{\infty} 3\left(\frac{1}{4}\right)^{n-1}$ converges or diverges. If it converges, find the sum.

#### Solution

- **Step 1:** Recognize the structure. This matches the geometric series form $\sum a r^{n-1}$.
    
- **Step 2:** Identify the key parameters. The first term is $a = 3$, and the common ratio is $r = \frac{1}{4}$.
    
- **Step 3:** Check for convergence.
    
    $$\vert{}r\vert{} = \left\vert{}\frac{1}{4}\right\vert{} = \frac{1}{4} < 1$$
    
    Because the absolute value of the ratio is strictly less than 1, the series **converges**.
    
- **Step 4:** Compute the sum using the geometric sum formula:
    
    $$\text{Sum} = \frac{a}{1-r} = \frac{3}{1 - \frac{1}{4}} = \frac{3}{\frac{3}{4}} = 3 \cdot \frac{4}{3} = 4$$
    

### Problem 2: Evaluating a Telescoping Series

**Scenario:** Find the sum of the infinite series $\sum_{n=1}^{\infty} \left( \frac{1}{n} - \frac{1}{n+1} \right)$.

#### Solution

- **Step 1:** Write out the first few partial sums to see the "telescoping" cancellation pattern:
    
    $$S_n = \left(1 - \frac{1}{2}\right) + \left(\frac{1}{2} - \frac{1}{3}\right) + \left(\frac{1}{3} - \frac{1}{4}\right) + \dots + \left(\frac{1}{n} - \frac{1}{n+1}\right)$$
    
- **Step 2:** Cancel the adjacent positive and negative fractional pairs:
    
    $$S_n = 1 - \cancel{\frac{1}{2}} + \cancel{\frac{1}{2}} - \cancel{\frac{1}{3}} + \cancel{\frac{1}{3}} - \dots + \cancel{\frac{1}{n}} - \frac{1}{n+1}$$
    
    This collapses down to a clean, explicit formula for the $n$-th partial sum:
    
    $$S_n = 1 - \frac{1}{n+1}$$
    
- **Step 3:** Take the limit of $S_n$ as $n \to \infty$ to find the infinite sum:
    
    $$\text{Sum} = \lim_{n \to \infty} \left( 1 - \frac{1}{n+1} \right) = 1 - 0 = 1$$
    

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Engineering Economics (Net Present Value of Automation Maintenance)]]
[[Engineering Economics (Net Present Value of Automation Maintenance) Solution]]


### Engineering Problem 2: [[Chemical & Environmental Engineering (Telescoping Contaminant Filtering)]]
[[Chemical & Environmental Engineering (Telescoping Contaminant Filtering) Solution]]

#### Worked Example
3. Find an explicit formula for the n-th term of the following sequence. Make sure to indicate the starting index.
    $\{1,-\frac{1}{4},\frac{1}{9},-\frac{1}{16},\frac{1}{25},...\}$

##### Solution
###### Step 1: Choose a Starting Index and Align the Terms

We need to assign an index number ($n$) to each term. The most natural choice is to start at $n = 1$. Let's map our index numbers to the terms in the sequence:

- For $n = 1$: $a_1 = 1$

- For $n = 2$: $a_2 = -\frac{1}{4}$

- For $n = 3$: $a_3 = \frac{1}{9}$

- For $n = 4$: $a_4 = -\frac{1}{16}$

- For $n = 5$: $a_5 = \frac{1}{25}$


To build our formula, we will break the pattern down into two separate parts: **the numbers** (ignoring the signs) and **the alternating signs**.

###### Step 2: Analyze the Magnitudes (The Numbers)

If we temporarily ignore the negative signs, the sequence looks like this:

$$1, \frac{1}{4}, \frac{1}{9}, \frac{1}{16}, \frac{1}{25}, \dots$$

Notice that the first term can be written as a fraction, $\frac{1}{1}$. Look closely at the denominators: $1, 4, 9, 16, 25$. These are all **perfect squares**:

- $1 = 1^2$

- $4 = 2^2$

- $9 = 3^2$

- $16 = 4^2$

- $25 = 5^2$


Because the denominator perfectly matches the square of our index number ($n$), the fractional part of our formula is:

$$\frac{1}{n^2}$$

###### Step 3: Handle the Alternating Signs

The signs of the terms alternate back and forth: $\text{positive, negative, positive, negative, \dots}$

To make signs alternate in a sequence, we use a base of $-1$ raised to a power involving $n$. Let's test the options:

- If we use $(-1)^n$:

- For $n = 1$: $(-1)^1 = -1$ (This is negative, but our first term is positive. This doesn't match!)

- If we use $(-1)^{n+1}$ (or $(-1)^{n-1}$):

- For $n = 1$: $(-1)^{1+1} = (-1)^2 = 1$ (Positive $\rightarrow$ Matches!)

- For $n = 2$: $(-1)^{2+1} = (-1)^3 = -1$ (Negative $\rightarrow$ Matches!)

- For $n = 3$: $(-1)^{3+1} = (-1)^4 = 1$ (Positive $\rightarrow$ Matches!)


So, the sign regulator we need is $(-1)^{n+1}$.

###### Final Answer

Combining the alternating sign piece and the fraction piece together gives us our explicit formula.

$$a_n = \frac{(-1)^{n+1}}{n^2} \quad \text{for } n \ge 1$$
#### Active Practice Problem
4. Consider the following sequences and determine if they converge or diverge. If the sequence converges, make a statement about its limit. If the sequence diverges, briefly explain why.
    (a) $\{a_{n}\}_{n=1}^{\infty}=\{\frac{(-1)^{n}}{n^{2}+1}\}_{n=1}^{\infty}$
    (b) $\{a_{n}\}_{n=1}^{\infty}=\{10^{n}-1\}_{n=1}^{\infty}$

##### Workspace

##### Solution
###### Part (a): $\{a_n\}_{n=1}^{\infty} = \left\{\frac{(-1)^n}{n^2+1}\right\}_{n=1}^{\infty}$

To find out if a sequence converges or diverges, we evaluate its limit as $n$ approaches infinity ($\infty$).

###### Step 1: Handle the alternating sign using the Absolute Value Theorem

The sequence has an alternating term, $(-1)^n$, which causes the terms to flip between positive and negative. A very useful rule for this is the **Absolute Value Theorem for Sequences**, which states:

$$\text{If } \lim_{n \to \infty} \vert{}a_n\vert{} = 0, \text{ then } \lim_{n \to \infty} a_n = 0.$$

Let's take the absolute value of our sequence's formula to remove the negative signs:

$$\vert{}a_n\vert{} = \left\vert{} \frac{(-1)^n}{n^2+1} \right\vert{} = \frac{1}{n^2+1}$$

###### Step 2: Take the limit

Now, we take the limit of this simplified expression as $n \to \infty$:

$$\lim_{n \to \infty} \frac{1}{n^2+1} = 0$$

**Why?** As $n$ grows infinitely large, the denominator ($n^2+1$) becomes massive. Dividing a fixed number (1) by an infinitely large number pushes the value closer and closer to $0$.

###### Conclusion for (a)

Since the absolute value limit goes to $0$, the original alternating sequence must also go to $0$.

- **Result:** The sequence **converges**.

- **Limit Statement:** $\lim_{n \to \infty} a_n = 0$


###### Part (b): $\{a_n\}_{n=1}^{\infty} = \{10^n - 1\}_{n=1}^{\infty}$

Let's test the behavior of this sequence as $n$ approaches infinity.

###### Step 1: Observe the growth of the terms

If we plug in a few values of $n$, we can see what is happening to the sequence:

- For $n = 1$: $10^1 - 1 = 9$

- For $n = 2$: $10^2 - 1 = 99$

- For $n = 3$: $10^3 - 1 = 999$

- For $n = 4$: $10^4 - 1 = 9999$


###### Step 2: Evaluate the limit

Let's look at the algebraic limit:

$$\lim_{n \to \infty} (10^n - 1)$$

As $n \to \infty$, the base of $10$ is being raised to an infinitely large exponent. Exponential growth with a base greater than 1 increases without bound. Subtracting $1$ from an infinitely large number changes nothing.

$$\lim_{n \to \infty} (10^n - 1) = \infty$$

###### Conclusion for (b)

Because the terms grow larger and larger without ever settling down near a specific, finite value, the sequence cannot settle on a limit.

- **Result:** The sequence **diverges**.

- **Explanation:** It diverges because its terms grow without bound toward infinity ($\lim_{n \to \infty} a_n = \infty$).

### Regroup 2
- Reflect on the physical modeling applications and mathematical setups.

### Skill Block 3
A **sequence** is simply an ordered list of numbers governed by a specific mathematical rule. In engineering and calculus, we represent these lists using index variables (usually $n$) to denote the position of each number in the line.

There are two primary ways to define and generate these sequences: **implicitly** (via a recurrence relation) and **explicitly** (via an explicit formula).

## Conceptual Overview

### 1. Recurrence Relations (Implicit Modeling)

A recurrence relation defines each new term of a sequence by performing operations on the **previous term(s)**.

- **The Catch:** You cannot calculate a far-out term (like $a_{100}$) unless you know the term right before it ($a_{99}$).
    
- **Structure:** It _must_ include an explicit **initial term** (the starting point) and a **dependent rule**.
    
    $$a_1 = \text{value}, \quad a_{n+1} = f(a_n)$$
    

### 2. Explicit Formulas (Direct Modeling)

An explicit formula defines the $n$-th term directly as a function of its index position $n$.

- **The Advantage:** You can plug in _any_ integer $n$ and calculate that specific term instantly without knowing any prior terms.
    
- **Structure:**
    
    $$a_n = f(n) \quad \text{for } n \ge 1$$
    

> 💡 **Calculus Tip:** Think of a recurrence relation like an assembly line where each machine modifies the part coming from the previous machine. Think of an explicit formula like a GPS coordinate grid—you can pinpoint any location instantly without traveling through the intermediate points.

## Standard Sample Problems

### Problem 1: From a Pattern to Both Models

**Scenario:** Consider the following mathematical sequence: $\{4, 7, 10, 13, 16, \dots\}$

1. Find a recurrence relation that generates the sequence.
    
2. Find an explicit formula for the $n$-th term assuming a starting index of $n = 1$.
    

#### Solution

- **Step 1 (Recurrence):** Notice that each term is found by adding $3$ to the term preceding it. The initial term is $4$.
    
    $$a_1 = 4, \quad a_{n+1} = a_n + 3 \quad \text{for } n \ge 1$$
    
- **Step 2 (Explicit):** Because we add $3$ repeatedly, this is an arithmetic progression involving multiples of $3$. Let's align them with $n$:
    
    - For $n=1 \rightarrow 4 = 3(1) + 1$
        
    - For $n=2 \rightarrow 7 = 3(2) + 1$
        
    - For $n=3 \rightarrow 10 = 3(3) + 1$
        
    
    The explicit formula is:
    
    $$a_n = 3n + 1 \quad \text{for } n \ge 1$$
    

### Problem 2: Converting a Recurrence Relation to an Explicit Formula

**Scenario:** A sequence is defined implicitly by $a_1 = 5$ and $a_{n+1} = 2a_n$. Find its explicit formula.

#### Solution

Let's unpack the first few terms to discover the underlying pattern:

- $a_1 = 5$
    
- $a_2 = 2(5) = 10$
    
- $a_3 = 2(10) = 2 \cdot 2 \cdot 5 = 5(2)^2$
    
- $a_4 = 2(20) = 2 \cdot 2 \cdot 2 \cdot 5 = 5(2)^3$
    

Notice that the exponent of the base $2$ is always exactly **one less** than the index $n$.

$$a_n = 5 \cdot 2^{n-1} \quad \text{for } n \ge 1$$

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Digital Signal Processing (Audio Echo Filter)]]
[[Digital Signal Processing (Audio Echo Filter) Solution]]

### Engineering Problem 2: [[Robotics (Precision Automated Deceleration)]]
[[Robotics (Precision Automated Deceleration) Solution]]

#### Worked Example
5. Consider the infinite series: $\sum_{n=1}^{\infty}\frac{1}{4n^{2}-1}$
    (a) Find the first four terms of the sequence of partial sums.
    (b) Find an expression for $S_{n}.$
    (c) Using a limit, make a conjecture about the value of the series.

##### Solution
###### Part (a): Find the first four terms of the sequence of partial sums

A **partial sum** $S_n$ is the sum of the first $n$ terms of the series. To find them, we first calculate the individual terms $a_n = \frac{1}{4n^2-1}$ for $n = 1, 2, 3, 4$:

- **For $n = 1$:** $a_1 = \frac{1}{4(1)^2 - 1} = \frac{1}{3}$

- **For $n = 2$:** $a_2 = \frac{1}{4(2)^2 - 1} = \frac{1}{15}$

- **For $n = 3$:** $a_3 = \frac{1}{4(3)^2 - 1} = \frac{1}{35}$

- **For $n = 4$:** $a_4 = \frac{1}{4(4)^2 - 1} = \frac{1}{63}$


Now, we accumulate these terms to get the first four partial sums:

- **First partial sum ($S_1$):**

$$S_1 = a_1 = \frac{1}{3}$$

- **Second partial sum ($S_2$):**

$$S_2 = S_1 + a_2 = \frac{1}{3} + \frac{1}{15} = \frac{5}{15} + \frac{1}{15} = \frac{6}{15} = \frac{2}{5}$$

- **Third partial sum ($S_3$):**

$$S_3 = S_2 + a_3 = \frac{2}{5} + \frac{1}{35} = \frac{14}{35} + \frac{1}{35} = \frac{15}{35} = \frac{3}{7}$$

- **Fourth partial sum ($S_4$):**

$$S_4 = S_3 + a_4 = \frac{3}{7} + \frac{1}{63} = \frac{27}{63} + \frac{1}{63} = \frac{28}{63} = \frac{4}{9}$$


**Sequence of partial sums:**

$$\left\{ \frac{1}{3}, \frac{2}{5}, \frac{3}{7}, \frac{4}{9} \right\}$$

###### Part (b): Find an expression for $S_n$

Looking closely at the pattern of our answers from part (a) — $\frac{1}{3}, \frac{2}{5}, \frac{3}{7}, \frac{4}{9}$ — the numerator matches $n$ exactly, and the denominator is always $2n + 1$.

To prove this algebraically, we use **Partial Fraction Decomposition** because this is a telescoping series.

###### Step 1: Decompose the general term

Factor the denominator as a difference of squares: $4n^2 - 1 = (2n-1)(2n+1)$.

$$\frac{1}{(2n-1)(2n+1)} = \frac{A}{2n-1} + \frac{B}{2n+1}$$

Multiply through by the common denominator:

$$1 = A(2n+1) + B(2n-1)$$

- Setting $n = \frac{1}{2}$ gives: $1 = A(2) \implies A = \frac{1}{2}$

- Setting $n = -\frac{1}{2}$ gives: $1 = B(-2) \implies B = -\frac{1}{2}$


Thus, the general term can be written as:

$$a_n = \frac{1}{2} \left( \frac{1}{2n-1} - \frac{1}{2n+1} \right)$$

###### Step 2: Expand the sum to see it telescope

Write out the partial sum $S_n$:

$$S_n = \frac{1}{2} \left[ \left(\frac{1}{1} - \frac{1}{3}\right) + \left(\frac{1}{3} - \frac{1}{5}\right) + \left(\frac{1}{5} - \frac{1}{7}\right) + \dots + \left(\frac{1}{2n-1} - \frac{1}{2n+1}\right) \right]$$

Notice how the internal terms cancel each other out ($-\frac{1}{3}$ with $+\frac{1}{3}$, $-\frac{1}{5}$ with $+\frac{1}{5}$, etc.). Only the very first and very last terms survive:

$$S_n = \frac{1}{2} \left( 1 - \frac{1}{2n+1} \right)$$

###### Step 3: Simplify the expression

Find a common denominator inside the parentheses:

$$S_n = \frac{1}{2} \left( \frac{2n+1 - 1}{2n+1} \right) = \frac{1}{2} \left( \frac{2n}{2n+1} \right) = \frac{n}{2n+1}$$

**Expression for $S_n$:**

$$S_n = \frac{n}{2n+1}$$

###### Part (c): Using a limit, make a conjecture about the value of the series

The value of an infinite series is equal to the limit of its partial sums as $n$ approaches infinity.

$$\lim_{n \to \infty} S_n = \lim_{n \to \infty} \frac{n}{2n+1}$$

To evaluate this limit, divide every term in the numerator and denominator by the highest power of $n$ (which is $n^1$):

$$\lim_{n \to \infty} \frac{\frac{n}{n}}{\frac{2n}{n} + \frac{1}{n}} = \lim_{n \to \infty} \frac{1}{2 + \frac{1}{n}}$$

As $n \to \infty$, the fraction $\frac{1}{n}$ approaches $0$:

$$\frac{1}{2 + 0} = \frac{1}{2}$$

**Conjecture:** The infinite series converges to a total value of **$\frac{1}{2}$**.
#### Active Practice Problem
6. Consider the following infinite series and determine if they converge or diverge. If the series converges, determine the value of the sum.
    (a) $\sum_{n=1}^{\infty}\frac{(-1)^{n}}{2^{n}}$
    (b) $\sum_{n=1}^{\infty}(\frac{2}{n+2}-\frac{2}{n+4})$
    (c) $\sum_{n=1}^{\infty}(\frac{1}{e})^{-n}$

##### Workspace

##### Solution
###### Part (a): $\sum_{n=1}^{\infty} \frac{(-1)^n}{2^n}$

###### Step 1: Identify the type of series

We can rewrite the general term by pulling out the shared exponent $n$:

$$\sum_{n=1}^{\infty} \left(-\frac{1}{2}\right)^n$$

This is a **geometric series**, which has the general form $\sum a r^{n-1}$ or $\sum r^n$.

###### Step 2: Determine the common ratio ($r$) and the first term ($a_1$)

- **Common ratio ($r$):** The base being raised to the power of $n$ is $r = -\frac{1}{2}$.

- **First term ($a_1$):** Plug in the starting index $n = 1$:

$$a_1 = \left(-\frac{1}{2}\right)^1 = -\frac{1}{2}$$


###### Step 3: Check for convergence

A geometric series converges if and only if the absolute value of its common ratio is strictly less than 1 ($\vert{}r\vert{} < 1$).

$$\left\vert{}-\frac{1}{2}\right\vert{} = \frac{1}{2} < 1$$

Because this condition is met, the series **converges**.

###### Step 4: Calculate the sum

The formula for the sum of a convergent infinite geometric series is:

$$\text{Sum} = \frac{\text{First Term}}{1 - r} = \frac{a_1}{1 - r}$$

Plugging in our values:

$$\text{Sum} = \frac{-\frac{1}{2}}{1 - \left(-\frac{1}{2}\right)} = \frac{-\frac{1}{2}}{1 + \frac{1}{2}} = \frac{-\frac{1}{2}}{\frac{3}{2}}$$

Multiply by the reciprocal of the denominator to simplify:

$$\text{Sum} = -\frac{1}{2} \cdot \frac{2}{3} = -\frac{1}{3}$$

- **Result:** **Converges**

- **Value of the Sum:** **$-\frac{1}{3}$**


###### Part (b): $\sum_{n=1}^{\infty} \left(\frac{2}{n+2} - \frac{2}{n+4}\right)$

###### Step 1: Identify the type of series

Because the terms consist of a fraction subtracting a shifted version of a similar fraction, this is a **telescoping series** where many intermediate terms will cancel out.

###### Step 2: Expand the partial sum ($S_k$) to observe the cancellation pattern

Let's write out the first few terms explicitly:

- **For $n = 1$:** $\left(\frac{2}{3} - \frac{2}{5}\right)$

- **For $n = 2$:** $\left(\frac{2}{4} - \frac{2}{6}\right)$

- **For $n = 3$:** $\left(\frac{2}{5} - \frac{2}{7}\right)$

- **For $n = 4$:** $\left(\frac{2}{6} - \frac{2}{8}\right)$


Let's group them together into a single sum up to a stopping point $k$:

$$S_k = \left(\frac{2}{3} - \cancel{\frac{2}{5}}\right) + \left(\frac{2}{4} - \cancel{\frac{2}{6}}\right) + \left(\cancel{\frac{2}{5}} - \frac{2}{7}\right) + \left(\cancel{\frac{2}{6}} - \frac{2}{8}\right) + \dots + \left(\frac{2}{k+1} - \frac{2}{k+3}\right) + \left(\frac{2}{k+2} - \frac{2}{k+4}\right)$$

Notice that the negative parts are cancelled out two steps later by positive parts (e.g., $-\frac{2}{5}$ cancels with $+\frac{2}{5}$).

- The terms that survive at the **beginning** are: $\frac{2}{3} + \frac{2}{4}$

- The terms that survive at the **end** are: $-\frac{2}{k+3} - \frac{2}{k+4}$


This leaves us with a clean expression for the $k$-th partial sum:

$$S_k = \frac{2}{3} + \frac{1}{2} - \frac{2}{k+3} - \frac{2}{k+4} = \frac{7}{6} - \frac{2}{k+3} - \frac{2}{k+4}$$

###### Step 3: Take the limit as $k \to \infty$

The value of the infinite series is the limit of its partial sums:

$$\text{Sum} = \lim_{k \to \infty} \left( \frac{7}{6} - \frac{2}{k+3} - \frac{2}{k+4} \right)$$

As $k$ approaches infinity, both fractions with $k$ in the denominator vanish to $0$:

$$\text{Sum} = \frac{7}{6} - 0 - 0 = \frac{7}{6}$$

- **Result:** **Converges**

- **Value of the Sum:** **$\frac{7}{6}$**


###### Part (c): $\sum_{n=1}^{\infty} \left(\frac{1}{e}\right)^{-n}$

###### Step 1: Simplify the general term

Using exponent rules, a negative exponent flips the base fraction into its reciprocal:

$$\left(\frac{1}{e}\right)^{-n} = \left(\left(\frac{1}{e}\right)^{-1}\right)^n = e^n$$

So, the series is simply:

$$\sum_{n=1}^{\infty} e^n$$

###### Step 2: Analyze the series behavior

This is a geometric series where the common ratio is $r = e$.

Euler's number $e$ is approximately equal to $2.718$. According to the geometric series test, if the absolute value of the common ratio is greater than or equal to 1 ($\vert{}r\vert{} \ge 1$), the terms grow larger over time rather than shrinking to 0.

$$\lvert r \rvert = e \approx 2.718 \ge 1$$

Alternatively, by the **Divergence Test**, if we look at the limit of individual terms:

$$\lim_{n \to \infty} e^n = \infty$$

Since the limit of the terms is not $0$, the series cannot add up to a finite number.

- **Result:** **Diverges** (The sum grows infinitely large without bound)

### Regroup 3
- Verify calculations and mathematical reasoning.

### Synthesis Wrap-up
- Core takeaways from Session 19 and overview of homework homework assignment.
