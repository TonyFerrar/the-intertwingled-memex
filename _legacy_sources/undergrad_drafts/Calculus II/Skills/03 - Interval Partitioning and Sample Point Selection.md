# Skill 1 Masterclass: Interval Partitioning and Sample Point Selection

Welcome to the foundational study guide for **Skill 1**. Before any area or total accumulation can be calculated under a curve, a continuous function must be systematically broken down into discrete, manageable blocks. This guide covers the mathematical theory of interval partitioning and sample point selection, followed by pure math practice and real-world engineering applications.

---

## 1. Conceptual Notes & Core Theory

### A. The Geometry of Partitioning
When finding the area under a curve $y = f(x)$ over a closed interval $[a, b]$, we cannot evaluate the entire continuous shape simultaneously. Instead, we chop the horizontal domain into $n$ subintervals of equal width. 

* **Subinterval Width ($\Delta x$):** The total distance of the domain $(b - a)$ divided by the number of desired rectangles ($n$).
$$\Delta x = \frac{b - a}{n}$$

### B. Defining the Grid Points
The division of the interval creates a set of boundary markers along the $x$-axis called **grid points**. We label these boundaries from $x_0$ to $x_n$:
* $x_0 = a$ (The starting boundary)
* $x_1 = a + 1(\Delta x)$
* $x_2 = a + 2(\Delta x)$
* $x_i = a + i(\Delta x)$
* $x_n = a + n(\Delta x) = b$ (The final boundary)

This splits our continuous domain into $n$ individual subintervals: $[x_0, x_1], [x_1, x_2], [x_2, x_3], \dots, [x_{i-1}, x_i], \dots, [x_{n-1}, x_n]$.

### C. Sample Point Selection ($c_i$)
To build a rectangle over any subinterval, we must choose a single $x$-value within that subinterval to plug into the function $f(x)$. The resulting output, $f(c_i)$, establishes the **height** of that rectangle. There are three primary methods for choosing this point ($c_i$):

1. **Left-Hand Sum (LHS):** We choose the left boundary of each subinterval. 
   * Index: $i$ runs from $0$ to $n-1$.
   * Formula: $c_i = x_i = a + i(\Delta x)$
   
2. **Right-Hand Sum (RHS):** We choose the right boundary of each subinterval.
   * Index: $i$ runs from $1$ to $n$.
   * Formula: $c_i = x_i = a + i(\Delta x)$
   
3. **Midpoint Sum (MPS):** We choose the exact geometric center of each subinterval.
   * Index: $i$ runs from $1$ to $n$.
   * Formula: $c_i = \frac{x_{i-1} + x_i}{2}$

---

## 2. Pure Mathematics Sample Problems

### Problem 1: Set up a Partition Grid
**Question:** Partition the interval $[3, 7]$ into $n = 8$ equal subintervals. 
1. Calculate the subinterval width ($\Delta x$).
2. List out all grid points ($x_0$ through $x_8$).
3. Identify the sample points ($c_i$) if using the **Left-Hand Sum** method.

**Solution:**
1. **Calculate $\Delta x$:**
   $$\Delta x = \frac{7 - 3}{8} = \frac{4}{8} = 0.5$$
2. **List all grid points:** Add $0.5$ sequentially starting at $a = 3$:
   * $x_0 = 3.0$
   * $x_1 = 3.5$
   * $x_2 = 4.0$
   * $x_3 = 4.5$
   * $x_4 = 5.0$
   * $x_5 = 5.5$
   * $x_6 = 6.0$
   * $x_7 = 6.5$
   * $x_8 = 7.0$
3. **LHS Sample Points ($c_i$):** Take the left endpoint of each of the 8 subintervals (from $x_0$ up to $x_7$):
   $$\text{LHS Sample Points } \{c_0, \dots, c_7\} = \{3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 6.0, 6.5\}$$

### Problem 2: Midpoint Coordinate Extraction
**Question:** Given the function $f(x) = x^3$ over the interval $[0, 2]$, determine the sample points ($c_i$) and the corresponding rectangle heights $f(c_i)$ for a Midpoint Riemann Sum with $n = 4$.

**Solution:**
1. **Calculate $\Delta x$:**
   $$\Delta x = \frac{2 - 0}{4} = 0.5$$
2. **Find subintervals:** The subintervals are $[0, 0.5]$, $[0.5, 1.0]$, $[1.0, 1.5]$, and $[1.5, 2.0]$.
3. **Find Midpoints ($c_i$):** Calculate the exact middle value of each subinterval:
   * $m_1 = \frac{0 + 0.5}{2} = 0.25$
   * $m_2 = \frac{0.5 + 1.0}{2} = 0.75$
   * $m_3 = \frac{1.0 + 1.5}{2} = 1.25$
   * $m_4 = \frac{1.5 + 2.0}{2} = 1.75$
4. **Evaluate Heights $f(c_i)$:** Plug each midpoint into $f(x) = x^3$:
   * $f(0.25) = (0.25)^3 = 0.015625$
   * $f(0.75) = (0.75)^3 = 0.421875$
   * $f(1.25) = (1.25)^3 = 1.953125$
   * $f(1.75) = (1.75)^3 = 5.359375$

---

## 3. Real-Life Engineering Application Problems

### Application 1: [[Aerospace Engineering (Rocket Thrust Tracking)]]
[[Aerospace Engineering (Rocket Thrust Tracking) Solution]]

---

### Application 2: [[Civil Engineering (Hydrostatic Pressure on Dams)]]
[[Civil Engineering (Hydrostatic Pressure on Dams) Solution]]

---

### Application 3: [[Electrical Engineering (Industrial Power Grid Consumption)]]
[[Electrical Engineering (Industrial Power Grid Consumption) Solution]]
