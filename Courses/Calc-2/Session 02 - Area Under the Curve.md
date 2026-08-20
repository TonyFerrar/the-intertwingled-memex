---
title: "Session 02 - Area Under the Curve"
type: course-session
course: MATH-182
semester: Fall 2026
publish: true
cssclasses: []
updated: 2026-08-18
---

# Session 02 - Area Under the Curve

> [!abstract] Session Objectives & Overview
> By the end of this session, you will be able to:
> - Analytical Evaluation via FTOC & Integration Techniques
> - Fluency with the Properties of Definite Integrals
> - Geometric Interpretation & Understanding Net Signed Area

## Timeline & Session Breakdown

### 00:00 - 00:10 (10 mins) — Micro-Lecture: Motivation & Theory
> [!example] Engineering Context: Engineering Calculus II Application
> In engineering, calculating the area under a curve is fundamental to translating continuous physical data into system logic, such as accumulating instantaneous acceleration over time to determine a vehicle's exact velocity and position. Whether mechanical engineers are integrating variable forces to compute total **rocket payload work**, civil engineers analyzing **bridge load distributions** to pinpoint structural stress, or electrical engineers utilizing integral properties to evaluate **alternating current (AC) signal power** without opposing waves canceling out, these three calculus skills underpin modern simulation software. By combining geometric spatial awareness, algebraic interval manipulation, and analytical evaluation, engineers successfully transform fluctuating real-world rates of change into stable, predictable designs.

### 00:10 - 00:25 (15 mins) — Skill Block 1: Analytical Evaluation via FTOC & Integration Techniques
> [!note]- Theory & Derivations
> ## Core Conceptual Notes
> 
> When visual graphs or simple geometric shapes are unavailable, you must transition from spatial estimation to pure symbolic computation. This analytical evaluation relies entirely on **The Fundamental Theorem of Calculus (FTOC)**, which bridges the gap between derivatives and integrals.
> 
> If a function $f(x)$ is continuous on the interval $[a, b]$, and you can find its antiderivative $F(x)$ (such that $F'(x) = f(x)$), then the definite integral evaluates to the difference between the antiderivative at the boundaries:
> 
> $$\int_{a}^{b} f(x) \, dx = \Big[ F(x) \Big]_{a}^{b} = F(b) - F(a)$$
> 
> ### Core Integration Rules
> 
> * **The Power Rule:** $\int x^n \, dx = \frac{x^{n+1}}{n+1} \quad (n \neq -1)$
> * **The Logarithmic Rule:** $\int \frac{1}{x} \, dx = \ln|x|$
> * **The Exponential Rule:** $\int e^x \, dx = e^x$
> 
> ### Advanced Technique: $u$-Substitution
> 
> When integrating composite functions (a function inside another function), you must use $u$-substitution to reverse the chain rule.
> 
> 1. Define a new variable $u$ equal to the inner function.
> 2. Differentiate $u$ to find $du = u'(x) \, dx$.
> 3. **Crucial Step:** Calculate new integration bounds by plugging the original $x$-bounds ($a$ and $b$) into your $u$-equation. This removes the need to "back-substitute" your variables at the end.
> 
> ---
> 
> ## Pure Mathematical Sample Problems
> 
> ### Sample Problem 1: Polynomial Evaluation via Power Rule
> 
> Evaluate the following definite integral:
> 
> 
> $$\int_{1}^{3} (6x^2 - 2x + 5) \, dx$$
> 
> #### Step-by-Step Solution:
> 
> 1. **Find the antiderivative term-by-term using the power rule:**
> * For $6x^2$: $\frac{6x^3}{3} = 2x^3$
> * For $-2x$: $-\frac{2x^2}{2} = -x^2$
> * For $5$: $5x$
> 
> $$F(x) = 2x^3 - x^2 + 5x$$
> 
> 
> 
> 
> 2. **Evaluate at the upper limit ($x = 3$):**
> 
> $$F(3) = 2(3)^3 - (3)^2 + 5(3) = 2(27) - 9 + 15 = 54 - 9 + 15 = 60$$
> 
> 
> 3. **Evaluate at the lower limit ($x = 1$):**
> 
> $$F(1) = 2(1)^3 - (1)^2 + 5(1) = 2 - 1 + 5 = 6$$
> 
> 
> 4. **Subtract the lower limit from the upper limit ($F(3) - F(1)$):**
> 
> $$\text{Value} = 60 - 6 = 54$$
> 
> 
> 
> ---
> 
> ### Sample Problem 2: $u$-Substitution with Boundary Shifting
> 
> Evaluate the following definite integral:
> 
> 
> $$\int_{0}^{2} 4x(x^2 + 1)^3 \, dx$$
> 
> #### Step-by-Step Solution:
> 
> 1. **Identify $u$ and find $du$:**
> * Let the inner function be $u = x^2 + 1$.
> * Differentiating gives $du = 2x \, dx$, which means $2 \, du = 4x \, dx$.
> 
> 
> 2. **Transform the integration boundaries:**
> * **Lower bound ($x = 0$):** $u = (0)^2 + 1 = 1$
> * **Upper bound ($x = 2$):** $u = (2)^2 + 1 = 5$
> 
> 
> 3. **Rewrite the integral entirely in terms of $u$:**
> 
> $$\int_{1}^{5} u^3 \cdot (2 \, du) = 2 \int_{1}^{5} u^3 \, du$$
> 
> 
> 4. **Integrate and evaluate using the new limits:**
> 
> $$2 \left[ \frac{u^4}{4} \right]_{1}^{5} = \left[ \frac{u^4}{2} \right]_{1}^{5}$$
> 
> 
> $$\text{Value} = \left( \frac{5^4}{2} \right) - \left( \frac{1^4}{2} \right) = \frac{625}{2} - \frac{1}{2} = \frac{624}{2} = 312$$
> 
> 
> 
> ---
> 
> ## Real-Life Engineering Application Problems
> 
> ### Problem 1: [[Robotics & Kinematics (Automated Joint Tracking)]]
> [[Robotics & Kinematics (Automated Joint Tracking) Solution]]
> 
> ---
> 
> ### Problem 2: [[Mechanical Engineering (Hyperloop Magnetic Braking Work)]]
> [[Mechanical Engineering (Hyperloop Magnetic Braking Work) Solution]]


#### Worked Example
1. Definite Integrals from Region Areas
Imagine the function $f(x)$ bounds four different regions whose areas are indicated below.

![[21 - Definite Integrals and Fundamental Theorem of Calculus Image 1.png]]

* **Region $A_1$:** on interval $[a, b]$, above the $x$-axis
* **Region $A_2$:** on interval $[b, c]$, above the $x$-axis
* **Region $A_3$:** on interval $[c, d]$, below the $x$-axis
* **Region $A_4$:** on interval $[d, e]$, above the $x$-axis

Determine the following definite integrals given:
* $A_1 = 5$
* $A_2 = 8$
* $A_3 = 9$
* $A_4 = 6$

**(a)** $\int_{a}^{c} f(x) \, dx$

**(b)** $\int_{c}^{d} \frac{1}{3} f(x) \, dx$

**(c)** $\int_{a}^{d} f(x) \, dx$

**(d)** $\int_{b}^{e} -2f(x) \, dx$

> [!check]- Worked Solution
> To solve these definite integrals, we use the core concept that a definite integral calculates the **net signed area** between the function and the $x$-axis:
> 
> - **Above the $x$-axis:** The area contributes **positively** to the integral.
> 
> - **Below the $x$-axis:** The area contributes **negatively** to the integral.
> 
> 
> From the given information, we can establish the value of the integral over each individual sub-interval:
> 
> - $\int_{a}^{b} f(x) \, dx = A_1 = 5$
> 
> - $\int_{b}^{c} f(x) \, dx = A_2 = 8$
> 
> - $\int_{c}^{d} f(x) \, dx = -A_3 = -9$ (since it is below the $x$-axis)
> 
> - $\int_{d}^{e} f(x) \, dx = A_4 = 6$
> 
> 
> ### (a) $\int_{a}^{c} f(x) \, dx$
> 
> 1. **Split the interval** into its component regions using the additive property of integrals:
> 
> $$\int_{a}^{c} f(x) \, dx = \int_{a}^{b} f(x) \, dx + \int_{b}^{c} f(x) \, dx$$
> 
> 2. **Substitute the signed area values**:
> 
> $$\int_{a}^{c} f(x) \, dx = 5 + 8$$
> 
> 3. **Calculate the final value**:
> 
> $$\int_{a}^{c} f(x) \, dx = 13$$
> 
> 
> ### (b) $\int_{c}^{d} \frac{1}{3} f(x) \, dx$
> 
> 1. **Pull out the constant multiplier** using the constant multiple rule:
> 
> $$\int_{c}^{d} \frac{1}{3} f(x) \, dx = \frac{1}{3} \int_{c}^{d} f(x) \, dx$$
> 
> 2. **Substitute the signed area value** for the interval $[c, d]$. Since region $A_3$ lies below the $x$-axis, its integral value is $-9$:
> 
> $$\frac{1}{3} \int_{c}^{d} f(x) \, dx = \frac{1}{3} \cdot (-9)$$
> 
> 3. **Calculate the final value**:
> 
> $$\int_{c}^{d} \frac{1}{3} f(x) \, dx = -3$$
> 
> 
> ### (c) $\int_{a}^{d} f(x) \, dx$
> 
> 1. **Split the integral** across the three sub-intervals that span from $a$ to $d$:
> 
> $$\int_{a}^{d} f(x) \, dx = \int_{a}^{b} f(x) \, dx + \int_{b}^{c} f(x) \, dx + \int_{c}^{d} f(x) \, dx$$
> 
> 2. **Substitute the corresponding signed areas** ($A_1$ and $A_2$ are positive, $A_3$ is negative):
> 
> $$\int_{a}^{d} f(x) \, dx = 5 + 8 + (-9)$$
> 
> 3. **Calculate the final value**:
> 
> $$\int_{a}^{d} f(x) \, dx = 13 - 9 = 4$$
> 
> 
> ### (d) $\int_{b}^{e} -2f(x) \, dx$
> 
> 1. **Pull out the constant multiplier**:
> 
> $$\int_{b}^{e} -2f(x) \, dx = -2 \int_{b}^{e} f(x) \, dx$$
> 
> 2. **Split the remaining integral** over the intervals spanning from $b$ to $e$:
> 
> $$\int_{b}^{e} f(x) \, dx = \int_{b}^{c} f(x) \, dx + \int_{c}^{d} f(x) \, dx + \int_{d}^{e} f(x) \, dx$$
> 
> 3. **Substitute the signed areas** inside the parentheses:
> 
> $$-2 \cdot \left( 8 + (-9) + 6 \right)$$
> 
> 4. **Simplify the terms inside the parentheses** first:
> 
> $$8 - 9 + 6 = 5$$
> 
> 5. **Multiply by the constant** outside:
> 
> $$-2 \cdot 5 = -10$$

#### Active Practice Problem
2. Net Area and Definite Integrals of a Linear Function
Use the graph of the linear function to evaluate the following:

![[21 - Definite Integrals and Fundamental Theorem of Calculus Image 2.png]]

* **Function:** $y = 2x - 8$
* **Shaded Regions:** from $x = 2$ to $x = 4$ (below the $x$-axis, bounded by $y = -4$ at $x=2$) and from $x = 4$ to $x = 7$ (above the $x$-axis, bounded by $y = 6$ at $x=7$).

**(a)** Using geometry, compute the net area between the function $f(x) = 2x - 8$ and the $x$-axis on the interval $[2, 7]$.

**(b)** Confirm your previous answer by evaluating the definite integral $\int_{2}^{7} (2x - 8) \, dx$.

> [!workspace] Student Practice Space
> 

> [!check]- Solution
> To evaluate this linear function, we will calculate the net signed area using two different approaches: first with basic geometry, and then by computing the definite integral.
> 
> ### (a) Using geometry, compute the net area on the interval $[2, 7]$
> 
> To find the net area geometrically, we look at the two right triangles formed between the line $y = 2x - 8$ and the $x$-axis.
> 
> **1. Triangle 1: Below the $x$-axis (on the interval $[2, 4]$)**
> 
> - **Base:** The horizontal width along the $x$-axis from $x = 2$ to $x = 4$ is $4 - 2 = 2$.
> 
> - **Height:** The vertical distance from the $x$-axis down to the line at $x = 2$ is $|-4| [cite_start]= 4$.
> 
> - **Area Calculation:** Computing the triangular area gives $A_{\text{below}} = \frac{1}{2} \times 2 \times 4 = 4$.
> 
> 
> Since this region lies completely below the $x$-axis, its area contributes **negatively** to the net area: $-4$.
> 
> **2. Triangle 2: Above the $x$-axis (on the interval $[4, 7]$)**
> 
> - **Base:** The horizontal width along the $x$-axis from $x = 4$ to $x = 7$ is $7 - 4 = 3$.
> 
> - **Height:** The vertical distance from the $x$-axis up to the line at $x = 7$ is $6$.
> 
> - **Area Calculation:** Computing the triangular area gives $A_{\text{above}} = \frac{1}{2} \times 3 \times 6 = 9$.
> 
> 
> Since this region lies completely above the $x$-axis, its area contributes **positively** to the net area: $+9$.
> 
> **3. Total Net Area:**
> 
> Summing the signed values of the two regions yields:
> 
> $$\text{Net Area} = A_{\text{above}} - A_{\text{below}} = 9 - 4 = 5$$
> 
> ### (b) Confirm by evaluating the definite integral $\int_{2}^{7} (2x - 8) \, dx$
> 
> We can verify our geometric result analytically by finding the antiderivative and applying the Fundamental Theorem of Calculus.
> 
> **1. Find the antiderivative of the function $f(x) = 2x - 8$:**
> 
> Using the power rule for integration:
> 
> $$F(x) = \int (2x - 8) \, dx = x^2 - 8x$$
> 
> **2. Evaluate the antiderivative at the upper limit ($x = 7$):**
> 
> $$F(7) = (7)^2 - 8(7)$$
> 
> $$F(7) = 49 - 56 = -7$$
> 
> **3. Evaluate the antiderivative at the lower limit ($x = 2$):**
> 
> $$F(2) = (2)^2 - 8(2)$$
> 
> $$F(2) = 4 - 16 = -12$$
> 
> **4. Subtract the lower limit evaluation from the upper limit evaluation ($F(7) - F(2)$):**
> 
> $$\int_{2}^{7} (2x - 8) \, dx = -7 - (-12)$$
> 
> $$\int_{2}^{7} (2x - 8) \, dx = -7 + 12 = 5$$
> 
> ### Conclusion
> 
> Both methods yield an identical result of **5**, confirming that the geometric net area matches the definite integral calculation perfectly.

### 00:25 - 00:30 (5 mins) — Regroup 1: Class Discussion
- Review common misconceptions and clarify key notations.

### 00:30 - 00:45 (15 mins) — Skill Block 2: Fluency with the Properties of Definite Integrals
> [!note]- Theory & Derivations
> ## Core Conceptual Notes
> 
> In calculus, you will frequently encounter scenarios where a function's explicit algebraic equation is unknown or too complex to integrate directly. The **properties of definite integrals** serve as an algebraic toolkit, allowing you to manipulate, deconstruct, and solve integral problems by treating them as puzzle pieces.
> 
> These properties are derived directly from the behavior of Riemann sums and the geometric properties of areas under curves.
> 
> ### The Four Essential Integral Properties
> 
> - **Constant Multiple Rule:** You can factor out a constant multiplier from inside the integral to simplify calculation: $\int_{a}^{b} k \cdot f(x) \, dx = k \int_{a}^{b} f(x) \, dx$.
>     
> - **Sum and Difference Rule:** The integral of a combined sum or difference of two functions can be separated into individual integrals: $\int_{a}^{b} (f(x) \pm g(x)) \, dx = \int_{a}^{b} f(x) \, dx \pm \int_{a}^{b} g(x) \, dx$.
>     
> - **Additivity of Intervals (Splitting Rule):** If an interval spans from $a$ to $c$, you can break it up at any intermediate point $b$: $\int_{a}^{b} f(x) \, dx + \int_{b}^{c} f(x) \, dx = \int_{a}^{c} f(x) \, dx$.
>     
> - **Reversal of Limits Rule:** Integrating backward from an upper limit to a lower limit flips the sign of the net area: $\int_{a}^{b} f(x) \, dx = -\int_{b}^{a} f(x) \, dx$.
>     
> 
> ## Pure Mathematical Sample Problems
> 
> ### Sample Problem 1: Combining Interval Splitting and Constants
> 
> Given that $\int_{1}^{4} f(x) \, dx = 5$ and $\int_{4}^{7} f(x) \, dx = -2$, find the exact value of:
> 
> $$\int_{1}^{7} 3f(x) \, dx$$
> 
> #### Step-by-Step Solution:
> 
> 1. **Apply the Constant Multiple Rule:** Pull the constant multiplier 3 out to the front of the entire expression.
>     
>     $$\int_{1}^{7} 3f(x) \, dx = 3 \int_{1}^{7} f(x) \, dx$$
>     
> 2. **Apply the Additivity Rule:** Split the remaining interval $[1, 7]$ into the two known sub-intervals $[1, 4]$ and $[4, 7]$.
>     
>     $$3 \int_{1}^{7} f(x) \, dx = 3 \left( \int_{1}^{4} f(x) \, dx + \int_{4}^{7} f(x) \, dx \right)$$
>     
> 3. **Substitute the Given Values:** Replace the integrals inside the parentheses with their known numerical values.
>     
>     $$3 \cdot (5 + (-2)) = 3 \cdot (3)$$
>     
> 4. **Calculate the Final Value:**
>     
>     $$\int_{1}^{7} 3f(x) \, dx = 9$$
>     
> 
> ### Sample Problem 2: Handling Reversal of Limits and Subtraction
> 
> Given that $\int_{2}^{8} g(x) \, dx = 12$ and $\int_{5}^{8} g(x) \, dx = 4$, evaluate the following integral:
> 
> $$\int_{5}^{2} g(x) \, dx$$
> 
> #### Step-by-Step Solution:
> 
> 1. **Set Up the Interval Relationship:** We know that the total interval from 2 to 8 is the sum of the intervals from 2 to 5 and 5 to 8.
>     
>     $$\int_{2}^{8} g(x) \, dx = \int_{2}^{5} g(x) \, dx + \int_{5}^{8} g(x) \, dx$$
>     
> 2. **Isolate the Unknown Lower-to-Upper Interval ($\int_{2}^{5}$):** Rearrange the equation to solve for the missing piece.
>     
>     $$\int_{2}^{5} g(x) \, dx = \int_{2}^{8} g(x) \, dx - \int_{5}^{8} g(x) \, dx$$
>     
> 3. **Substitute the Given Values:**
>     
>     $$\int_{2}^{5} g(x) \, dx = 12 - 4 = 8$$
>     
> 4. **Apply the Reversal of Limits Rule:** The problem asks for $\int_{5}^{2}$ (integrating from 5 down to 2), which is the exact reverse of our calculated interval.
>     
>     $$\int_{5}^{2} g(x) \, dx = -\int_{2}^{5} g(x) \, dx = -8$$
>     
> 
> ## Real-Life Engineering Application Problems
> 
> ### Problem 1: [[Aerospace Engineering (Multi-Stage Rocket Booster Work)]]
> [[Aerospace Engineering (Multi-Stage Rocket Booster Work) Solution]]
> 
> 
> ### Problem 2: [[Civil Engineering (Superposition of Structural Bridge Loads)]]
> [[Civil Engineering (Superposition of Structural Bridge Loads) Solution]]


#### Active Practice Problem
3. Net Area of a Quadratic Function
Compute the net area of the following function on the given interval.
![[21 - Definite Integrals and Fundamental Theorem of Calculus Image 3.png]]
* **Function:** $f(x) = x^2 - 4$ on the interval $[-2, 2]$
* *Note: The region is bounded entirely below the $x$-axis with a $y$-intercept at $(0, -4)$ and roots at $x = -2$ and $x = 2$.*

> [!workspace] Student Practice Space
> 

> [!check]- Solution
> To find the net area of the quadratic function $f(x) = x^2 - 4$ on the interval $[-2, 2]$ , we set up and evaluate a definite integral.
> 
> As noted, the entire shaded region lies completely below the $x$-axis, so we should fully expect our final net area to be a negative value.
> 
> $$\text{Net Area} = \int_{-2}^{2} (x^2 - 4) \, dx$$
> 
> Here are two ways to solve this: the standard way, and a faster shortcut using calculus properties.
> 
> ### Method 1: Standard Integration (FTOC)
> 
> **1. Find the antiderivative:**
> 
> Using the power rule for integration, we integrate each term individually:
> 
> $$F(x) = \int (x^2 - 4) \, dx = \frac{x^3}{3} - 4x$$
> 
> **2. Evaluate at the upper limit ($x = 2$):**
> 
> $$F(2) = \frac{(2)^3}{3} - 4(2)$$
> 
> $$F(2) = \frac{8}{3} - 8 = \frac{8}{3} - \frac{24}{3} = -\frac{16}{3}$$
> 
> **3. Evaluate at the lower limit ($x = -2$):**
> 
> $$F(-2) = \frac{(-2)^3}{3} - 4(-2)$$
> 
> $$F(-2) = -\frac{8}{3} + 8 = -\frac{8}{3} + \frac{24}{3} = \frac{16}{3}$$
> 
> **4. Subtract the lower limit from the upper limit ($F(2) - F(-2)$):**
> 
> $$\text{Net Area} = -\frac{16}{3} - \left(\frac{16}{3}\right)$$
> 
> $$\text{Net Area} = -\frac{32}{3} \approx -10.67$$
> 
> ### Method 2: The Symmetry Shortcut (Even Function)
> 
> Because a parabola centered on the $y$-axis is perfectly symmetrical, $f(x) = x^2 - 4$ is an **even function**. Since our interval $[-2, 2]$ is perfectly symmetric around zero, we can compute the area from $0$ to $2$ and simply double it.
> 
> $$\int_{-2}^{2} (x^2 - 4) \, dx = 2 \int_{0}^{2} (x^2 - 4) \, dx$$
> 
> **1. Set up the doubled integral with a lower limit of 0:**
> 
> $$\text{Net Area} = 2 \left[ \frac{x^3}{3} - 4x \right]_{0}^{2}$$
> 
> **2. Plug in the limits:**
> 
> $$\text{Net Area} = 2 \left( \left[ \frac{(2)^3}{3} - 4(2) \right] - \left[ \frac{(0)^3}{3} - 4(0) \right] \right)$$
> 
> $$\text{Net Area} = 2 \left( \left[ \frac{8}{3} - 8 \right] - 0 \right)$$
> 
> **3. Simplify:**
> 
> $$\text{Net Area} = 2 \left( -\frac{16}{3} \right) = -\frac{32}{3}$$
> 
> ### Conclusion
> 
> Both methods yield a total net area of **$-\frac{32}{3}$** (or approximately **$-10.67$**).

### 00:45 - 00:50 (5 mins) — Regroup 2: Reflection
- Reflect on the physical modeling applications and mathematical setups.

### 00:50 - 01:05 (15 mins) — Skill Block 3: Geometric Interpretation & Understanding Net Signed Area
> [!note]- Theory & Derivations
> ## Core Conceptual Notes
> 
> The fundamental concept behind definite integrals is that they do not simply calculate the total physical area trapped between a curve and the $x$-axis; instead, they calculate the **net signed area**.
> 
> When evaluating an integral geometrically, you map the regions bounded by the function $f(x)$ and the $x$-axis on a given interval $[a, b]$:
> 
> - **Regions Above the $x$-axis ($f(x) > 0$):** Trapped areas are assigned a **positive** sign.
>     
> - **Regions Below the $x$-axis ($f(x) < 0$):** Trapped areas are assigned a **negative** sign.
>     
> 
> If the graph consists of geometric shapes (rectangles, triangles, or circles), you can entirely bypass complex calculus antiderivatives and find the exact value of the definite integral using standard geometric formulas.
> 
> ### Essential Geometric Toolset
> 
> - **Rectangle:** $\text{Area} = \text{base} \times \text{height}$
>     
> - **Triangle:** $\text{Area} = \frac{1}{2} \times \text{base} \times \text{height}$
>     
> - **Circle/Semicircle:** $\text{Area} = \frac{1}{2}\pi r^2$
>     
> 
> ## Pure Mathematical Sample Problems
> 
> ### Sample Problem 1: Semicircles and Triangles
> 
> Evaluate $\int_{0}^{7} f(x) \, dx$ for the function $f(x)$ pictured below, which consists of a quarter-circle above the $x$-axis from $x = 0$ to $x = 3$ and a triangle below the $x$-axis from $x = 3$ to $x = 7$ with a vertex at $(5, -2)$.
> 
> #### Step-by-Step Solution:
> 
> 1. **Identify Region 1 (Quarter-circle above the $x$-axis on $[0, 3]$):**
>     
>     - This is a quarter-circle with a radius of $r = 3$.
>         
>     - $\text{Area}_1 = \frac{1}{4}\pi r^2 = \frac{1}{4}\pi (3)^2 = \frac{9\pi}{4}$
>         
>     - Since it is above the $x$-axis, its signed value is $+\frac{9\pi}{4}$.
>         
> 2. **Identify Region 2 (Triangle below the $x$-axis on $[3, 7]$):**
>     
>     - This is a triangle with a horizontal base spanning from $x = 3$ to $x = 7$ ($\text{base} = 4$) and a vertical height reaching down to $y = -2$ ($\text{height} = 2$).
>         
>     - $\text{Area}_2 = \frac{1}{2} \times \text{base} \times \text{height} = \frac{1}{2} \times 4 \times 2 = 4$
>         
>     - Since it is below the $x$-axis, its signed value is $-4$.
>         
> 3. **Sum the Signed Areas:**
>     
>     $$\int_{0}^{7} f(x) \, dx = \text{Area}_1 - \text{Area}_2 = \frac{9\pi}{4} - 4$$
>     
> 
> ### Sample Problem 2: Piecewise Linear Function
> 
> Evaluate $\int_{-2}^{4} g(x) \, dx$ where $g(x)$ forms a flat line at $y = 3$ on the interval $[-2, 0]$ and a single straight line spanning from $(0, 3)$ down to $(4, -5)$, crossing the $x$-axis at $x = 1.5$.
> 
> #### Step-by-Step Solution:
> 
> 1. **Identify Region 1 (Rectangle above the $x$-axis on $[-2, 0]$):**
>     
>     - $\text{base} = 0 - (-2) = 2$, $\text{height} = 3$
>         
>     - $\text{Area}_1 = 2 \times 3 = 6 \rightarrow \text{Signed value} = +6$
>         
> 2. **Identify Region 2 (Triangle above the $x$-axis on $[0, 1.5]$):**
>     
>     - $\text{base} = 1.5 - 0 = 1.5$, $\text{height} = 3$
>         
>     - $\text{Area}_2 = \frac{1}{2} \times 1.5 \times 3 = 2.25 \rightarrow \text{Signed value} = +2.25$
>         
> 3. **Identify Region 3 (Triangle below the $x$-axis on $[1.5, 4]$):**
>     
>     - $\text{base} = 4 - 1.5 = 2.5$, $\text{height} = |-5| = 5$
>         
>     - $\text{Area}_3 = \frac{1}{2} \times 2.5 \times 5 = 6.25 \rightarrow \text{Signed value} = -6.25$
>         
> 4. **Combine All Sub-Intervals:**
>     
>     $$\int_{-2}^{4} g(x) \, dx = 6 + 2.25 - 6.25 = 2$$
>     
> 
> ## Real-Life Engineering Application Problems
> 
> ### Problem 1: [[Electrical Engineering (AC Signal Power)]]
> [[Electrical Engineering (AC Signal Power) Solution]]
> 
> 
> ### Problem 2: [[Civil Engineering (Bridge Wind Load Shear Forces)]]
> [[Civil Engineering (Bridge Wind Load Shear Forces) Solution]]
> 
> 
> ### Problem 3: [[Robotics & Autonomous Navigation (Dead Reckoning)]]
> [[Robotics & Autonomous Navigation (Dead Reckoning) Solution]]


#### Active Practice Problem
4. Evaluating Definite Integrals
Evaluate the following definite integrals. If substitution is used, be sure to clearly indicate $u$ and $du$.

**(a)** $\int_{1}^{2} \frac{2}{x^2} \, dx$

**(b)** $\int_{0}^{3} \frac{1}{5x+1} \, dx$

**(c)** $\int_{1}^{3} \left(3x^2 - \frac{1}{4}x^3\right) \, dx$

> [!workspace] Student Practice Space
> 

> [!check]- Solution
> Here are the step-by-step solutions for evaluating these definite integrals.
> 
> ### (a)
> 
> $\int_{1}^{2} \frac{2}{x^2} \, dx$
> 
> **1. Rewrite the integrand with a negative exponent:** To make it easier to apply the power rule, rewrite $\frac{2}{x^2}$ as $2x^{-2}$:
> 
> $$\int_{1}^{2} 2x^{-2} \, dx$$
> 
> **2. Find the antiderivative:**
> 
> Using the power rule for integration ($\int x^n \, dx = \frac{x^{n+1}}{n+1}$):
> 
> $$F(x) = 2 \left( \frac{x^{-1}}{-1} \right) = -2x^{-1} = -\frac{2}{x}$$
> 
> **3. Evaluate at the upper limit ($x = 2$):**
> 
> $$F(2) = -\frac{2}{2} = -1$$
> 
> **4. Evaluate at the lower limit ($x = 1$):**
> 
> $$F(1) = -\frac{2}{1} = -2$$
> 
> **5. Subtract the lower limit evaluation from the upper limit evaluation ($F(2) - F(1)$):**
> 
> $$\text{Value} = -1 - (-2) = -1 + 2 = 1$$
> 
> ### (b)
> 
> $\int_{0}^{3} \frac{1}{5x+1} \, dx$
> 
> Because the denominator contains a linear function, this requires **$u$-substitution**.
> 
> 1. Define $u$ and find $du$:
> 
> - Let $u = 5x + 1$
> 
> - Then $du = 5 \, dx$, which means $dx = \frac{1}{5} \, du$
> 
> 
> **2. Change the integration limits to match $u$:**
> 
> - **Lower limit:** When $x = 0$, then $u = 5(0) + 1 = 1$
> 
> - **Upper limit:** When $x = 3$, then $u = 5(3) + 1 = 16$
> 
> 
> **3. Rewrite the integral in terms of $u$:**
> 
> $$\int_{1}^{16} \frac{1}{u} \cdot \left(\frac{1}{5} \, du\right) = \frac{1}{5} \int_{1}^{16} \frac{1}{u} \, du$$
> 
> **4. Find the antiderivative:**
> 
> The antiderivative of $\frac{1}{u}$ is $\ln|u|$:
> 
> $$\frac{1}{5} \Big[ \ln|u| \Big]_{1}^{16}$$
> 
> **5. Evaluate the definite integral:**
> 
> $$\frac{1}{5} \left( \ln(16) - \ln(1) \right)$$
> 
> Since $\ln(1) = 0$, the expression simplifies completely to:
> 
> $$\text{Value} = \frac{1}{5} \ln(16)$$
> 
> _(Note: If you want to simplify further using log properties, $\ln(16) = \ln(2^4) = 4\ln(2)$, so the answer can also be written as $\frac{4}{5}\ln(2)$)._
> 
> ### (c)
> 
> $\int_{1}^{3} \left(3x^2 - \frac{1}{4}x^3\right) \, dx$
> 
> **1. Find the antiderivative term-by-term:** Apply the power rule to each component of the function:
> 
> - For $3x^2$: $\int 3x^2 \, dx = x^3$
> 
> - For $-\frac{1}{4}x^3$: $\int -\frac{1}{4}x^3 \, dx = -\frac{1}{4} \left( \frac{x^4}{4} \right) = -\frac{1}{16}x^4$
> 
> 
> Combining them gives the total antiderivative function:
> 
> $$F(x) = x^3 - \frac{1}{16}x^4$$
> 
> **2. Evaluate at the upper limit ($x = 3$):**
> 
> $$F(3) = (3)^3 - \frac{1}{16}(3)^4$$
> 
> $$F(3) = 27 - \frac{81}{16}$$
> 
> $$F(3) = \frac{432}{16} - \frac{81}{16} = \frac{351}{16}$$
> 
> **3. Evaluate at the lower limit ($x = 1$):**
> 
> $$F(1) = (1)^3 - \frac{1}{16}(1)^4$$
> 
> $$F(1) = 1 - \frac{1}{16} = \frac{15}{16}$$
> 
> **4. Subtract the lower limit from the upper limit ($F(3) - F(1)$):**
> 
> $$\text{Value} = \frac{351}{16} - \frac{15}{16}$$
> 
> $$\text{Value} = \frac{336}{16}$$
> 
> **5. Simplify the fraction:**
> 
> $$\text{Value} = 21$$

### 01:05 - 01:10 (5 mins) — Regroup 3: Verification
- Verify calculations and mathematical reasoning.

### 01:10 - 01:15 (5 mins) — Synthesis Wrap-up
- Core takeaways from Session 02 and overview of homework homework assignment.
