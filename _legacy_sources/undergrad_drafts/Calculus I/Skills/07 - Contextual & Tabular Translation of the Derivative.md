# Calculus I Skill 3: Contextual & Tabular Translation of the Derivative

## 1. Core Lecture Notes
Calculus is not just a collection of algebraic rules; it is a language used to describe the real world. One of the most critical skills you can develop is the ability to bridge the gap between abstract calculus formulas and tangible geometric or empirical data. This translation skill manifests in two primary ways: **Geometric Construction** (Tangent Lines) and **Empirical Analysis** (Tabular Data).

### A. The Geometric Frame: Tangent Lines as Trajectories
A function's derivative $f'(x)$ gives a formula for the *instantaneous rate of change* at any point. When we evaluate that derivative at a specific coordinate, $x = x_1$, the resulting number is the exact slope ($m$) of a line that skims the curve at that point. 

To build the equation of this tangent line, we always rely on the **Point-Slope Form**:
$$y - y_1 = m(x - x_1)$$

#### The 3-Step Tangent Line Protocol:
1. **Find the Point:** If you are only given $x_1$, plug it back into the *original function* to find $y_1 = f(x_1)$.
2. **Find the Slope:** Take the derivative $f'(x)$ and evaluate it at $x_1$ to find your numerical slope, $m = f'(x_1)$.
3. **Assemble and Simplify:** Substitute $x_1$, $y_1$, and $m$ into the point-slope formula, then isolate $y$ to finish in slope-intercept form ($y = mx + b$).

### B. The Empirical Frame: Tabular Data Differentiation
In the real world, nature does not always present us with clean algebraic formulas like $f(x) = x^2$. Often, engineers work with discrete sensor logs—data points collected at specific time intervals. 

When evaluating expressions containing composite table data, you must apply derivative rules *structurally* to the general functions before plugging in the specific numerical data entries. 

---

## 2. Walkthrough Sample Problems 

### Example 1: Finding a Tangent Line Equation
**Problem:** Find an equation of the line tangent to the function $f(x) = 3x^2 - 4x$ at $x = 2$.

* **Step 1: Find the Point ($y_1$)** Plug $x = 2$ into the original function:
  $$f(2) = 3(2)^2 - 4(2) = 12 - 8 = 4 \longrightarrow \text{Point: } (2, 4)$$

* **Step 2: Find the Slope ($m$)** First, differentiate the function using the Power Rule:
  $$f'(x) = 6x - 4$$
  Now, evaluate the derivative at $x = 2$:
  $$m = f'(2) = 6(2) - 4 = 12 - 4 = 8 \longrightarrow \text{Slope: } m = 8$$

* **Step 3: Assemble into Point-Slope Form**
  $$y - 4 = 8(x - 2)$$
  $$y - 4 = 8x - 16 \longrightarrow y = 8x - 12$$

---

### Example 2: Tabular Differentiation via the Quotient Rule
**Problem:** Let $h(x) = \frac{f(x)}{g(x)}$. Use the data table below to evaluate $h'(3)$.

| $x$ | $f(x)$ | $g(x)$ | $f'(x)$ | $g'(x)$ |
| :--- | :---: | :---: | :---: | :---: |
| **3** | $5$ | $2$ | $-1$ | $4$ |

* **Step 1: Differentiate Structurally** Apply the Quotient Rule to the functional definition of $h(x)$:
  $$h'(x) = \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$$

* **Step 2: Substitute $x = 3$**
  $$h'(3) = \frac{f'(3)g(3) - f(3)g'(3)}{[g(3)]^2}$$

* **Step 3: Extract Values from Table and Compute** Substitute $f'(3) = -1$, $g(3) = 2$, $f(3) = 5$, and $g'(3) = 4$:
  $$h'(3) = \frac{(-1)(2) - (5)(4)}{(2)^2} = \frac{-2 - 20}{4} = \frac{-22}{4} = -\frac{11}{2}$$

---

## 3. Real-Life Engineering Application Problems

### Problem 1: [[Chemical Engineering — Dynamic Concentration Logs]]
[[Chemical Engineering — Dynamic Concentration Logs Solution]]

---

### Problem 2: [[Aerospace Engineering — Escaping a Curved Flight Trajectory]]
[[Aerospace Engineering — Escaping a Curved Flight Trajectory Solution]]
