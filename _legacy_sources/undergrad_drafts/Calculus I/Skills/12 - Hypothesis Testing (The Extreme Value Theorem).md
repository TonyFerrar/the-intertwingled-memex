# Skill 3: Hypothesis Testing with the Extreme Value Theorem (Template & Analysis)

Before executing any algebraic optimization pipeline, an engineer or mathematician must establish whether an absolute optimal solution is mathematically guaranteed to exist. This diagnostic stage relies entirely on **Hypothesis Testing** using the **Extreme Value Theorem (EVT)**. Testing these preconditions prevents engineers from chasing mathematical solutions that do not exist or operating systems in unstable zones.

## 📘 Conceptual Notes & Core Definitions

### 1. The Extreme Value Theorem (EVT)

The Extreme Value Theorem states:

> If a function $f(x)$ is **continuous** on a **closed interval** $[a, b]$, then $f(x)$ is guaranteed to attain both an absolute maximum value and an absolute minimum value at least once within that interval.

### 2. The Two Pillars of the Hypothesis

To apply the EVT successfully, your problem must pass two distinct test criteria simultaneously:

- **Test 1: Continuity:** The function must have no breaks, holes, jumps, or vertical asymptotes within the test zone. Every point in the interval must map to a defined, real output.
    
- **Test 2: Closed Domain Boundaries:** The interval must explicitly include its boundary endpoints, mathematically denoted with square brackets $[a, b]$ or inequalities $a \le x \le b$.
    

### 3. What Happens When Hypotheses Fail?

If a function fails either test, the EVT is neutralized. This does **not** mean that absolute extrema do not exist; it means that their existence is **no longer guaranteed**.

- **Discontinuity Failure:** If a function shoots off toward a vertical asymptote within the interval, it may grow infinitely large or small, preventing an absolute maximum or minimum from existing.
    
- **Open Interval Failure:** If a graph approaches a peak at an open boundary marker ($\circ$), it will get infinitely close to that value but never reach it, meaning an absolute maximum value cannot be formally defined.
    

## ✏️ Original Sample Problems

### Example 1

Determine if the Extreme Value Theorem applies to the function $f(x) = \frac{x + 2}{x - 3}$ on the interval $[1, 5]$. If it does not apply, identify which hypothesis failed.

#### **Solution and Analysis:**

1. **Check Interval Type:** The interval is bounded by square brackets $[1, 5]$, so the domain constraint is successfully **closed**.
    
2. **Check Continuity:** The rational function $f(x)$ has a non-removable discontinuity (a vertical asymptote) where its denominator equals zero:
    
    $$x - 3 = 0 \implies x = 3$$
    
3. **Hypothesis Evaluation:** We must check if this problem area falls inside our test zone. Because $3 \in [1, 5]$, the function is **not continuous** across the selected interval.
    

**Conclusion:** The EVT **does not apply** to this function on $[1, 5]$ because the hypothesis of continuity is violated at $x = 3$.

### Example 2

Determine if the Extreme Value Theorem applies to the function $g(x) = 4x^3 - 12x$ on the interval $(0, 3]$. If it does not apply, identify which hypothesis failed.

#### **Solution and Analysis:**

1. **Check Continuity:** The function $g(x)$ is a polynomial. Polynomial functions are continuous for all real numbers, so it passes the continuity test on this interval.
    
2. **Check Interval Type:** Examine the boundaries of $(0, 3]$. The left boundary at $x = 0$ uses a parenthesis, indicating it is an **open** boundary.
    

**Conclusion:** The EVT **does not apply** because the interval is not fully closed. Because the boundary at $x = 0$ is excluded, an absolute minimum value is not guaranteed to exist.

## 🚀 Real-Life Engineering Application Problems

### Engineering Problem 1: [[Structural Support Arch Safety Index]]
[[Structural Support Arch Safety Index Solution]]


---

### Engineering Problem 2: [[Power Inverter Switching Transient Failure]]
[[Power Inverter Switching Transient Failure Solution]]
