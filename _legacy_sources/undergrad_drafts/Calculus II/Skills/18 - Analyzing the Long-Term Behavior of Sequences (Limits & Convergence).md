# Skill 2: Analyzing the Long-Term Behavior of Sequences (Limits & Convergence)

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
