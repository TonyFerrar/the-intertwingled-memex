# Skill 2 Masterclass: Summation Mechanics and Function Evaluation

Welcome to the study guide for **Skill 2**. Once you have partitioned your interval and identified your sample points (Skill 1), you must execute the algebraic arithmetic required to sum the areas of the rectangles. This guide covers the mechanics of function evaluation, using Sigma ($\sum$) notation, and applying the algebraic factoring rules that make computing Riemann sums highly efficient.

---

## 1. Conceptual Notes & Core Theory

### A. The Mechanics of Function Evaluation
A Riemann sum requires finding the area of multiple rectangles ($n$ rectangles). Each individual rectangle has an area defined by:
$$\text{Area}_i = \text{Height} \times \text{Width} = f(c_i) \cdot \Delta x$$

To find the height, you must carefully evaluate your chosen function $f(x)$ at each distinct sample point $c_i$. Precision is vital here, as signs (positive vs. negative outputs) and exponents directly alter the geometric accumulation.

### B. Deconstructing Sigma ($\sum$) Notation
Sigma notation is a mathematical shorthand used to write long, repetitive additions compactly. 
$$\sum_{i=a}^{b} a_i$$
* **The Index of Summation ($i$):** The variable that changes with each step.
* **The Lower Limit ($a$):** The starting integer plugged into the expression.
* **The Upper Limit ($b$):** The final integer plugged into the expression.

For a Left-Hand Riemann sum with $n$ rectangles, the index usually runs from $i = 0$ to $n-1$. For Right-Hand and Midpoint sums, it runs from $i = 1$ to $n$.

### C. The Distributive Property and Factoring Out $\Delta x$
Writing out a full Riemann sum manually looks like this:
$$\text{Total Area} \approx f(c_1)\Delta x + f(c_2)\Delta x + f(c_3)\Delta x + \dots + f(c_n)\Delta x$$

Because the width of each subinterval ($\Delta x$) is uniform and constant across all rectangles, you can use the **distributive law** to factor $\Delta x$ completely out of the summation:
$$\text{Total Area} \approx \Delta x \cdot [f(c_1) + f(c_2) + f(c_3) + \dots + f(c_n)]$$

In Sigma notation, this foundational algebraic property is written as:
$$\sum_{i=1}^{n} f(c_i)\Delta x = \Delta x \sum_{i=1}^{n} f(c_i)$$

Factoring out the constant width first saves massive amounts of computing time, allowing you to add all the heights together in a single string before multiplying by the width just once at the very end.

---

## 2. Pure Mathematics Sample Problems

### Problem 1: Manual Expansion and Factoring
**Question:** Given the function $f(x) = 3x + 2$ and sample points $c_i = \{1, 2, 3, 4\}$ with a uniform width of $\Delta x = 0.5$:
1. Write out the Riemann sum in expanded form showing the area of each rectangle explicitly.
2. Factor out $\Delta x$, evaluate the heights, and calculate the final accumulated sum.

**Solution:**
1. **Expanded Form:**
   $$\text{Sum} = f(1)(0.5) + f(2)(0.5) + f(3)(0.5) + f(4)(0.5)$$
2. **Factoring and Evaluation:**
   Factor out $\Delta x = 0.5$:
   $$\text{Sum} = 0.5 \cdot [f(1) + f(2) + f(3) + f(4)]$$
   Evaluate $f(x) = 3x + 2$ at each point:
   * $f(1) = 3(1) + 2 = 5$
   * $f(2) = 3(2) + 2 = 8$
   * $f(3) = 3(3) + 2 = 11$
   * $f(4) = 3(4) + 2 = 14$
   
   Substitute the heights back into the factored equation:
   $$\text{Sum} = 0.5 \cdot [5 + 8 + 11 + 14]$$
   $$\text{Sum} = 0.5 \cdot [38] = 19$$

### Problem 2: Compacting into Sigma Notation
**Question:** Express the following expanded arithmetic area calculation using compact Sigma ($\sum$) notation:
$$\text{Area} \approx 0.2 \cdot [(0.2)^2 + (0.4)^2 + (0.6)^2 + (0.8)^2 + (1.0)^2]$$

**Solution:**
1. **Identify the constant width ($\Delta x$):** The number factored out front is $0.2$.
2. **Identify the function template $f(x)$:** Each term inside the bracket is being squared, so the function is $f(x) = x^2$.
3. **Determine the pattern of the sample points ($c_i$):** The inputs step up by $0.2$ each time: $0.2, 0.4, 0.6, 0.8, 1.0$. This pattern can be modeled as $0.2 \cdot i$ where $i$ changes by integers.
4. **Set the limits of the index ($i$):** * When $i = 1$, $0.2(1) = 0.2$ (first term)
   * When $i = 5$, $0.2(5) = 1.0$ (last term)
5. **Write the final Sigma notation:**
   $$\text{Area} \approx \sum_{i=1}^{5} (0.2i)^2 \cdot 0.2 \quad \text{or} \quad 0.2 \sum_{i=1}^{5} (0.2i)^2$$

---

## 3. Real-Life Engineering Application Problems

### Application 1: [[Aerospace Engineering (Total Impulse of a Thruster)]]
[[Aerospace Engineering (Total Impulse of a Thruster) Solution]]


---

### Application 2: [[Civil Engineering (Total Distributed Weight on a Beam)]]
[[Civil Engineering (Total Distributed Weight on a Beam) Solution]]

---

### Application 3: [[Electrical Engineering (Industrial Grid Energy Consumption)]]
[[Electrical Engineering (Industrial Grid Energy Consumption) Solution]]
