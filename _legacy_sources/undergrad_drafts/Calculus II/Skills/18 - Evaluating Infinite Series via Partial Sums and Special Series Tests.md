# Skill 3: Evaluating Infinite Series via Partial Sums and Special Series Tests

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
