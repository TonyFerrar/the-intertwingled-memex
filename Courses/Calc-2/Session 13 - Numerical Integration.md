---
title: "Session 13 - Numerical Integration"
type: course-session
course: MATH-182
semester: Fall 2026
publish: true
cssclasses: []
updated: 2026-08-18
---

# Session 13 - Numerical Integration

## Session Objectives
By the end of this session, you will be able to:
- Error Analysis
- Executing Rule-Specific Approximations
- Interval Partitioning and Discretization
- Precise Function Evaluation and Arithmetic

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
In this session, we investigate the mathematical principles of **Numerical Integration** and explore how engineers apply these concepts to analyze real-world physical and structural systems.

### Skill Block 1
Numerical integration methods typically do not produce exact analytical results. Because these calculations are approximations, engineers must evaluate the accuracy of their solutions to determine if they are dependable. This requires understanding two complementary concepts: measuring known errors after an evaluation, and predicting the maximum possible error beforehand using mathematical upper bounds.

## Conceptual Notes

### **1. Absolute and Relative Error**

Suppose $c$ is a computed numerical solution to a problem possessing an exact analytical solution $x$. To determine how close an approximation is, two standard measures of error are used:

- **Absolute Error:** Measures the total magnitude of the discrepancy between the approximation and the true value.
    
    $$\text{Absolute Error} = |c - x|$$
    
- **Relative Error:** Scales the absolute error against the true baseline value, showing the scale of the mistake relative to the magnitude of the system.
    
    $$\text{Relative Error} = \frac{|c - x|}{|x|}$$
    

### **2. Theoretical Error Bounds**

When evaluating active engineering systems, the true analytical answer ($x$) is often unknown. In these scenarios, derivatives over the integration interval $[a, b]$ are used to calculate a guaranteed **upper bound** for the absolute error. Let $K$ represent the maximum absolute value of the designated derivative on the interval $[a, b]$.

- **Trapezoidal Rule Error Bound ($E_T$):** Requires the maximum value of the second derivative, $|f''(x)| \le K$:
    
    $$|E_T| \le \frac{K(b - a)^3}{12n^2}$$
    
- **Midpoint Rule Error Bound ($E_M$):** Requires the maximum value of the second derivative, $|f''(x)| \le K$:
    
    $$|E_M| \le \frac{K(b - a)^3}{24n^2}$$
    
- **Simpson's Rule Error Bound ($E_S$):** Requires the maximum value of the fourth derivative, $|f^{(4)}(x)| \le K$:
    
    $$|E_S| \le \frac{K(b - a)^5}{180n^4}$$
    

## Pure Mathematics Sample Problems

### **Sample Problem 1: Post-Evaluation Error Tracking**

**Problem:** A student uses the Midpoint Rule to approximate a definite integral and gets a numerical solution of $c = 18.625$. The true analytical evaluation of the integral is exactly $x = \frac{56}{3}$. Compute the absolute and relative errors of this approximation.

**Step-by-Step Solution:**

1. **Identify parameters:** $c = 18.625$, $x = \frac{56}{3} \approx 18.6667$.
    
2. **Calculate Absolute Error:**
    
    $$\text{Absolute Error} = \left|18.625 - \frac{56}{3}\right| \approx 0.0417$$
    
3. **Calculate Relative Error:**
    
    $$\text{Relative Error} = \frac{\left|18.625 - \frac{56}{3}\right|}{\left|\frac{56}{3}\right|} \approx 0.00223 \approx 0.223\%$$
    

### **Sample Problem 2: Theoretical Error Bounding**

**Problem:** Find an upper bound for the absolute error when using the Trapezoidal Rule with $n = 4$ subintervals to approximate the integral $\int_{0}^{2} 5x^2 \, dx$.

**Step-by-Step Solution:**

1. **Identify parameters:** $a = 0$, $b = 2$, $n = 4$, and $f(x) = 5x^2$.
    
2. **Find the second derivative $f''(x)$:**
    
    $$f'(x) = 10x \implies f''(x) = 10$$
    
3. **Find the maximum value $K$ on $[0, 2]$:**
    
    Since $f''(x) = 10$ is a constant, its maximum absolute value is $K = 10$.
    
4. **Apply the Trapezoidal error bound formula:**
    
    $$|E_T| \le \frac{10(2 - 0)^3}{12(4)^2} = \frac{10(8)}{12(16)} = \frac{80}{192} = \frac{5}{12} \approx 0.4167$$
    

## Real-Life Engineering Application Problems

### **Engineering Problem 1: [[Aerospace Inertial Navigation Sensor Drift]]**
[[Aerospace Inertial Navigation Sensor Drift Solution]]


### **Engineering Problem 2: [[Civil Engineering Earthwork Material Balancing]]**
[[Civil Engineering Earthwork Material Balancing Solution]]

#### Worked Example
Use the Trapezoidal Rule with $n=4$ to estimate 
   $$\int_{2}^{4} 8x^{2} \, dx$$

##### Solution
###### **1. Identify the Given Information**

From the problem statement, we have:

- **Function:** $f(x) = 8x^2$

- **Interval:** $[a, b] = [2, 4]$

- **Number of subintervals:** $n = 4$


###### **2. Calculate the Subinterval Width ($\Delta x$)**

The formula for the width of each subinterval is:

$$\Delta x = \frac{b - a}{n}$$

Substituting our values:

$$\Delta x = \frac{4 - 2}{4} = \frac{2}{4} = 0.5$$

###### **3. Determine the Grid Points ($x_i$)**

We start at the lower bound $a = 2$ and repeatedly add $\Delta x = 0.5$ until we reach the upper bound $b = 4$:

- $x_0 = 2$

- $x_1 = 2 + 0.5 = 2.5$

- $x_2 = 2.5 + 0.5 = 3$

- $x_3 = 3 + 0.5 = 3.5$

- $x_4 = 4$


###### **4. Evaluate the Function at Each Grid Point**

Now, substitute each $x_i$ value back into the original function $f(x) = 8x^2$:

- $f(x_0) = f(2) = 8(2)^2 = 8(4) = \mathbf{32}$

- $f(x_1) = f(2.5) = 8(2.5)^2 = 8(6.25) = \mathbf{50}$

- $f(x_2) = f(3) = 8(3)^2 = 8(9) = \mathbf{72}$

- $f(x_3) = f(3.5) = 8(3.5)^2 = 8(12.25) = \mathbf{98}$

- $f(x_4) = f(4) = 8(4)^2 = 8(16) = \mathbf{128}$


###### **5. Apply the Trapezoidal Rule Formula**

The general formula for the Trapezoidal Rule is:

$$T_n = \frac{\Delta x}{2} \left[ f(x_0) + 2f(x_1) + 2f(x_2) + 2f(x_3) + \dots + 2f(x_{n-1}) + f(x_n) \right]$$

Substituting our calculated values into the formula:

$$T_4 = \frac{0.5}{2} \left[ 32 + 2(50) + 2(72) + 2(98) + 128 \right]$$

Simplify the expression step-by-step:

$$T_4 = 0.25 \left[ 32 + 100 + 144 + 196 + 128 \right]$$

$$T_4 = 0.25 \left[ 600 \right]$$

$$T_4 = 150$$

###### **Final Answer**

The estimated value of the integral using the Trapezoidal Rule with $n = 4$ is **$150$**.
#### Active Practice Problem
Use Simpson's Rule with $n=4$ to estimate 
   $$\int_{0}^{2} 5x^{2} \, dx$$

##### Workspace

##### Solution
###### **1. Identify the Given Information**

From the problem statement, we have:

- **Function:** $f(x) = 5x^2$

- **Interval:** $[a, b] = [0, 2]$

- **Number of subintervals:** $n = 4$ _(Note: Simpson's Rule requires $n$ to be an even number, which it is here)._


###### **2. Calculate the Subinterval Width ($\Delta x$)**

The formula for the width of each subinterval is the same as the Trapezoidal rule:

$$\Delta x = \frac{b - a}{n}$$

Substituting our values:

$$\Delta x = \frac{2 - 0}{4} = \frac{2}{4} = 0.5$$

###### **3. Determine the Grid Points ($x_i$)**

Starting at the lower bound $a = 0$, we repeatedly add $\Delta x = 0.5$ until we reach the upper bound $b = 2$:

- $x_0 = 0$

- $x_1 = 0.5$

- $x_2 = 1.0$

- $x_3 = 1.5$

- $x_4 = 2.0$


###### **4. Evaluate the Function at Each Grid Point**

Substitute each $x_i$ value into our function $f(x) = 5x^2$:

- $f(x_0) = f(0) = 5(0)^2 = \mathbf{0}$

- $f(x_1) = f(0.5) = 5(0.5)^2 = 5(0.25) = \mathbf{1.25}$

- $f(x_2) = f(1.0) = 5(1.0)^2 = 5(1) = \mathbf{5}$

- $f(x_3) = f(1.5) = 5(1.5)^2 = 5(2.25) = \mathbf{11.25}$

- $f(x_4) = f(2.0) = 5(2.0)^2 = 5(4) = \mathbf{20}$


###### **5. Apply Simpson's Rule Formula**

Unlike the Trapezoidal Rule, Simpson's Rule uses parabolas to approximate the curve, meaning the coefficients follow a strict **1, 4, 2, 4, 1** pattern:

$$S_n = \frac{\Delta x}{3} \left[ f(x_0) + 4f(x_1) + 2f(x_2) + 4f(x_3) + f(x_4) \right]$$

Substituting our values:

$$S_4 = \frac{0.5}{3} \left[ 0 + 4(1.25) + 2(5) + 4(11.25) + 20 \right]$$

Now, simplify the terms inside the brackets step-by-step:

- $4(1.25) = 5$

- $2(5) = 10$

- $4(11.25) = 45$


$$S_4 = \frac{0.5}{3} \left[ 0 + 5 + 10 + 45 + 20 \right]$$

$$S_4 = \frac{0.5}{3} \left[ 80 \right]$$

$$S_4 = \frac{40}{3} \approx 13.333$$

**Fun Calculus Fact:** Because Simpson's Rule utilizes quadratic approximations (parabolas) to find the area, it yields the _exact_ analytical area whenever it is applied to any quadratic function like $5x^2$!

###### **Final Answer**

The estimated value of the integral using Simpson's Rule with $n = 4$ is **$\frac{40}{3}$** (or approximately **$13.33$**).

### Regroup 1
- Review common misconceptions and clarify key notations.

### Skill Block 2
Once an interval has been successfully partitioned into discrete slices, the next step is to apply a specific numerical method to estimate the total area under the curve. Different rules treat the top boundary of each slice differently—ranging from flat rectangular tops to sloped lines and parabolic curves.

## Conceptual Notes

### **1. The Midpoint Rule, $M(n)$**

- **Core Concept:** This method approximates the region under a curve using a series of horizontal rectangles.
    
- **Height Evaluation:** The height of each rectangle is determined by evaluating the function exactly at the center point ($c_k$) of each subinterval.
    
- **Formula:**
    
    $$M(n) = \sum_{k=1}^{n} f(c_k)\Delta x \quad \text{[cite: 87]}$$
    
    Where $\Delta x = \frac{b-a}{n}$ and the midpoints are calculated as $c_k = a + (k-\frac{1}{2})\Delta x$ for $k \in \{1, 2, \dots, n\}$.
    

### **2. The Trapezoidal Rule, $T(n)$**

- **Core Concept:** This method connects the evaluated grid points with straight, sloped lines, creating a series of trapezoids underneath the curve.
    
- **Height Evaluation:** The rule evaluates the function at the subinterval endpoints ($x_k$).
    
- **Formula:**
    
    $$T(n) = \frac{\Delta x}{2}(y_0 + 2y_1 + 2y_2 + \dots + 2y_{n-1} + y_n) \quad \text{[cite: 120]}$$
    
    Where $\Delta x = \frac{b-a}{n}$ , $x_k = a + k\Delta x$ , and $y_k = f(x_k)$. Notice that the interior y-values are multiplied by 2 because they form a shared wall between two adjacent trapezoids.
    

### **3. Simpson's Rule, $S(n)$**

- **Core Concept:** Instead of using straight lines, Simpson's Rule models the top edge of the slices using quadratic curves (parabolas). This generally makes it much more accurate than the Midpoint or Trapezoidal rules.
    
- **Strict Constraint:** The number of subintervals ($n$) **must be an even number** ($n \ge 2$).
    
- **Formula:**
    
    $$S(n) = \frac{\Delta x}{3}(y_0 + 4y_1 + 2y_2 + 4y_3 + \dots + 2y_{n-2} + 4y_{n-1} + y_n) \quad \text{[cite: 158]}$$
    
    Where $\Delta x = \frac{b-a}{n}$ and the coefficients follow a strict alternating pattern of **1, 4, 2, 4, 2, ..., 4, 1**.
    

## Pure Mathematics Sample Problems

### **Sample Problem 1: Trapezoidal Rule**

**Problem:** Use the Trapezoidal Rule with $n = 4$ to approximate $\int_{1}^{3} x^2 \, dx$.

**Step-by-Step Solution:**

1. **Find $\Delta x$ and grid points:**
    
    $$\Delta x = \frac{3 - 1}{4} = 0.5$$
    
    The grid points are: $x_0 = 1.0$, $x_1 = 1.5$, $x_2 = 2.0$, $x_3 = 2.5$, $x_4 = 3.0$.
    
2. **Evaluate the function $f(x) = x^2$ at each point:**
    
    - $y_0 = (1.0)^2 = 1.0$
        
    - $y_1 = (1.5)^2 = 2.25$
        
    - $y_2 = (2.0)^2 = 4.0$
        
    - $y_3 = (2.5)^2 = 6.25$
        
    - $y_4 = (3.0)^2 = 9.0$
        
3. **Apply the Trapezoidal formula:**
    
    $$T(4) = \frac{0.5}{2} \left[ 1.0 + 2(2.25) + 2(4.0) + 2(6.25) + 9.0 \right]$$
    
    $$T(4) = 0.25 \left[ 1.0 + 4.5 + 8.0 + 12.5 + 9.0 \right]$$
    
    $$T(4) = 0.25 \left[ 35 \right] = 8.75$$
    

### **Sample Problem 2: Simpson's Rule**

**Problem:** Use Simpson's Rule with $n = 4$ to approximate $\int_{0}^{2} x^3 \, dx$.

**Step-by-Step Solution:**

1. **Find $\Delta x$ and grid points ($n=4$ is even, so this is valid):**
    
    $$\Delta x = \frac{2 - 0}{4} = 0.5$$
    
    The grid points are: $x_0 = 0.0$, $x_1 = 0.5$, $x_2 = 1.0$, $x_3 = 1.5$, $x_4 = 2.0$.
    
2. **Evaluate the function $f(x) = x^3$ at each point:**
    
    - $y_0 = (0.0)^3 = 0.0$
        
    - $y_1 = (0.5)^3 = 0.125$
        
    - $y_2 = (1.0)^3 = 1.0$
        
    - $y_3 = (1.5)^3 = 3.375$
        
    - $y_4 = (2.0)^3 = 8.0$
        
3. **Apply the Simpson's Rule formula (1, 4, 2, 4, 1 pattern):**
    
    $$S(4) = \frac{0.5}{3} \left[ 0.0 + 4(0.125) + 2(1.0) + 4(3.375) + 8.0 \right]$$
    
    $$S(4) = \frac{1}{6} \left[ 0.0 + 0.5 + 2.0 + 13.5 + 8.0 \right]$$
    
    $$S(4) = \frac{1}{6} \left[ 24 \right] = 4$$
    

## Real-Life Engineering Application Problems

### **Engineering Problem 1: [[Naval Architecture Hull Displacement (Simpson's Rule)]]**
[[Naval Architecture Hull Displacement (Simpson's Rule) Solution]]


### **Engineering Problem 2: [[Electrical Engineering Power Management (Trapezoidal Rule)]]**
[[Electrical Engineering Power Management (Trapezoidal Rule) Solution]]

#### Worked Example
Compute the following approximations of 
   $$\int_{0}^{8} f(x) \, dx$$ 
   using the graph:

![[12 - Numerical Integration LA Image 1.png]]

   * **(a)** The Trapezoidal Rule with $n=4$, $T(4)$
   * **(b)** Simpson's Rule with $n=4$, $S(4)$
   * **(c)** The Midpoint Rule with $n=4$, $M(4)$

##### Solution
###### **1. Identify the Interval and Subinterval Width ($\Delta x$)**

From the graph and the problem definitions:

- **Interval:** $[a, b] = [0, 8]$

- **Number of subintervals:** $n = 4$


The width of each subinterval ($\Delta x$) is calculated as:

$$\Delta x = \frac{b - a}{n} = \frac{8 - 0}{4} = 2$$

- **Grid points (endpoints):** We start at $0$ and add $\Delta x = 2$ each time:

$$x_0 = 0, \quad x_1 = 2, \quad x_2 = 4, \quad x_3 = 6, \quad x_4 = 8$$

- **Midpoints:** The middle value of each subinterval:

$$\bar{x}_1 = 1, \quad \bar{x}_2 = 3, \quad \bar{x}_3 = 5, \quad \bar{x}_4 = 7$$


###### **2. Read the Function Values from the Graph**

By tracking the grid intersections on the curve $y = f(x)$, we can read the exact integer values at both the endpoints and the midpoints:

**Values at endpoints:**

- $f(0) = 1$

- $f(2) = 4$

- $f(4) = 7$

- $f(6) = 5$

- $f(8) = 5$


**Values at midpoints:**

- $f(1) = 2$

- $f(3) = 5$

- $f(5) = 6$

- $f(7) = 9$


###### **(a) The Trapezoidal Rule, $T(4)$**

The formula for the Trapezoidal Rule is:

$$T_4 = \frac{\Delta x}{2} \left[ f(x_0) + 2f(x_1) + 2f(x_2) + 2f(x_3) + f(x_4) \right]$$

Substituting our endpoint values and $\Delta x = 2$:

$$T_4 = \frac{2}{2} \left[ 1 + 2(4) + 2(7) + 2(5) + 5 \right]$$

$$T_4 = 1 \cdot \left[ 1 + 8 + 14 + 10 + 5 \right]$$

$$T_4 = \mathbf{38}$$

###### **(b) Simpson's Rule, $S(4)$**

The formula for Simpson's Rule follows a **1, 4, 2, 4, 1** pattern for the coefficients:

$$S_4 = \frac{\Delta x}{3} \left[ f(x_0) + 4f(x_1) + 2f(x_2) + 4f(x_3) + f(x_4) \right]$$

Substituting our endpoint values and $\Delta x = 2$:

$$S_4 = \frac{2}{3} \left[ 1 + 4(4) + 2(7) + 4(5) + 5 \right]$$

$$S_4 = \frac{2}{3} \left[ 1 + 16 + 14 + 20 + 5 \right]$$

$$S_4 = \frac{2}{3} \left[ 56 \right] = \frac{112}{3} \approx \mathbf{37.33}$$

###### **(c) The Midpoint Rule, $M(4)$**

The formula for the Midpoint Rule relies on evaluating the function at the center of each interval:

$$M_4 = \Delta x \left[ f(\bar{x}_1) + f(\bar{x}_2) + f(\bar{x}_3) + f(\bar{x}_4) \right]$$

Substituting our midpoint values and $\Delta x = 2$:

$$M_4 = 2 \left[ f(1) + f(3) + f(5) + f(7) \right]$$

$$M_4 = 2 \left[ 2 + 5 + 6 + 9 \right]$$

$$M_4 = 2 \left[ 22 \right] = \mathbf{44}$$
#### Active Practice Problem
Find an upper bound for the error in estimating 
   $$\int_{0}^{2} 5x^{2} \, dx$$
   * **(a)** The Trapezoidal Rule with $n=4$.
   * **(b)** Midpoint Rule with $n=4$

##### Workspace

##### Solution
###### **1. Identify the Given Information**

From the problem, we have:

- **Function:** $f(x) = 5x^2$

- **Interval:** $[a, b] = [0, 2]$

- **Number of subintervals:** $n = 4$


To find the error bounds for both the Trapezoidal and Midpoint rules, we first need to compute the second derivative of the function, $f''(x)$, to find its maximum possible absolute value ($K$) on the interval $[0, 2]$.

- **First derivative:** $f'(x) = 10x$

- **Second derivative:** $f''(x) = 10$


Since $f''(x) = 10$ is a constant, its maximum absolute value anywhere on the interval $[0, 2]$ is simply:

$$K = 10$$

###### **(a) Upper Bound for the Trapezoidal Rule Error ($E_T$)**

The formula for the Trapezoidal Rule error bound is:

$$|E_T| \le \frac{K(b - a)^3}{12n^2}$$

Substituting our values ($K = 10$, $a = 0$, $b = 2$, and $n = 4$):

$$|E_T| \le \frac{10(2 - 0)^3}{12(4)^2}$$

$$|E_T| \le \frac{10(8)}{12(16)}$$

$$|E_T| \le \frac{80}{192}$$

Simplifying the fraction by dividing the numerator and denominator by 16 gives:

$$|E_T| \le \frac{5}{12} \approx 0.4167$$

###### **(b) Upper Bound for the Midpoint Rule Error ($E_M$)**

The formula for the Midpoint Rule error bound is:

$$|E_M| \le \frac{K(b - a)^3}{24n^2}$$

_(Notice that the denominator is $24n^2$, making the Midpoint error bound exactly half that of the Trapezoidal Rule error bound)._

Substituting our values:

$$|E_M| \le \frac{10(2 - 0)^3}{24(4)^2}$$

$$|E_M| \le \frac{10(8)}{24(16)}$$

$$|E_M| \le \frac{80}{384}$$

Simplifying the fraction by dividing the numerator and denominator by 16 gives:

$$|E_M| \le \frac{5}{24} \approx 0.2083$$

###### **Final Answers**

- **(a) Trapezoidal Rule Error Upper Bound:** **$\frac{5}{12}$** (or $\approx \mathbf{0.4167}$)

- **(b) Midpoint Rule Error Upper Bound:** **$\frac{5}{24}$** (or $\approx \mathbf{0.2083}$)

### Regroup 2
- Reflect on the physical modeling applications and mathematical setups.

### Skill Block 3
Numerical integration methods do not interpret curves as continuous, infinite lines. Instead, they require breaking a continuous domain down into a finite set of manageable, distinct points. This process is known as **interval partitioning** or **discretization**.

Before you can calculate any areas using the Midpoint, Trapezoidal, or Simpson’s rules, you must first establish the horizontal geometry of your slices.

## Conceptual Notes

Discretizing a mathematical interval requires two primary steps:

- **Calculating the Subinterval Width ($\Delta x$):** If you want to split a continuous interval $[a, b]$ into $n$ subintervals of equal width, you calculate the width of each slice using the formula:
    
    $$\Delta x = \frac{b - a}{n} \quad \text{[cite: 86, 121, 159]}$$
    
- **Generating the Grid Points ($x_k$):** Once you have the width of your slices, you map out the boundary coordinates of each subinterval. You start at the lower bound $a$ and repeatedly add $\Delta x$ until you hit the upper bound $b$. The math formula for any given grid point is:
    
    $$x_k = a + k\Delta x \quad \text{for } k \in \{0, 1, 2, \dots, n\} \quad \text{[cite: 121, 161]}$$
    

> 📌 **Important Rule of Thumb:** When partitioning an interval into $n$ subintervals, you will always generate exactly $n + 1$ grid points, starting from $x_0$ up to $x_n$.

## Pure Mathematics Sample Problems

### **Sample Problem 1**

**Problem:** Partition the interval $[1, 5]$ into $n = 8$ equal subintervals. Find the subinterval width ($\Delta x$) and list all the resulting grid points ($x_k$).

**Step-by-Step Solution:**

1. **Identify the variables:** $a = 1$, $b = 5$, and $n = 8$.
    
2. **Calculate $\Delta x$:**
    
    $$\Delta x = \frac{5 - 1}{8} = \frac{4}{8} = 0.5$$
    
3. **Generate the grid points:** Start at $x_0 = 1$ and add $0.5$ progressively until $x_8$:
    
    - $x_0 = 1.0$
        
    - $x_1 = 1.0 + 0.5 = 1.5$
        
    - $x_2 = 1.5 + 0.5 = 2.0$
        
    - $x_3 = 2.0 + 0.5 = 2.5$
        
    - $x_4 = 2.5 + 0.5 = 3.0$
        
    - $x_5 = 3.0 + 0.5 = 3.5$
        
    - $x_6 = 3.5 + 0.5 = 4.0$
        
    - $x_7 = 4.0 + 0.5 = 4.5$
        
    - $x_8 = 4.5 + 0.5 = 5.0$
        

### **Sample Problem 2**

**Problem:** Partition the interval $[0, 3]$ into $n = 6$ equal subintervals. Find the subinterval width ($\Delta x$) and list all the resulting grid points ($x_k$).

**Step-by-Step Solution:**

1. **Identify the variables:** $a = 0$, $b = 3$, and $n = 6$.
    
2. **Calculate $\Delta x$:**
    
    $$\Delta x = \frac{3 - 0}{6} = \frac{3}{6} = 0.5$$
    
3. **Generate the grid points:** Start at $x_0 = 0$ and add $0.5$ progressively until $x_6$:
    
    - $x_0 = 0.0$
        
    - $x_1 = 0.5$
        
    - $x_2 = 1.0$
        
    - $x_3 = 1.5$
        
    - $x_4 = 2.0$
        
    - $x_5 = 2.5$
        
    - $x_6 = 3.0$
        

## Real-Life Engineering Application Problems

### **Engineering Problem 1: [[Aerospace Telemetry Sampling]]**
[[Aerospace Telemetry Sampling Solution]]

### **Engineering Problem 2: [[Civil Engineering Cross-Sectional Hydrology]]**
[[Civil Engineering Cross-Sectional Hydrology Solution]]

#### Active Practice Problem
Suppose we approximate 
   $$\int_{0}^{2} 3x^{4} \, dx$$ 
   using Simpson's Rule with $n=4$.
   * **(a)** Find an upper bound for the error in estimating.
   * **(b)** Estimate the minimum number of subintervals needed to approximate the integral with an error less than $10^{-4}$.

##### Workspace

##### Solution
###### **1. Identify the Given Information & Find the 4th Derivative**

From the problem statement, we have:

- **Function:** $f(x) = 3x^4$

- **Interval:** $[a, b] = [0, 2]$


The error bound formula for Simpson's Rule requires the **fourth derivative** of the function, $f^{(4)}(x)$, to find its maximum absolute value ($K$) on the interval $[0, 2]$. Let's take the derivatives step-by-step:

- **1st Derivative:** $f'(x) = 12x^3$

- **2nd Derivative:** $f''(x) = 36x^2$

- **3rd Derivative:** $f'''(x) = 72x$

- **4th Derivative:** $f^{(4)}(x) = 72$


Since $f^{(4)}(x) = 72$ is a constant, its maximum absolute value anywhere on the interval is simply:

$$K = 72$$

###### **(a) Find an Upper Bound for the Error with $n = 4$**

The formula for Simpson's Rule error bound is:

$$|E_S| \le \frac{K(b - a)^5}{180n^4}$$

Substituting our values ($K = 72$, $a = 0$, $b = 2$, and $n = 4$):

$$|E_S| \le \frac{72(2 - 0)^5}{180(4)^4}$$

$$|E_S| \le \frac{72(32)}{180(256)}$$

$$|E_S| \le \frac{2304}{46080}$$

Simplifying this fraction:

$$|E_S| \le \frac{1}{20} = 0.05$$

- **Answer for (a):** The upper bound for the error is **$0.05$**.


###### **(b) Estimate the Minimum Number of Subintervals for Error $< 10^{-4}$**

We want to find a value of $n$ such that the error formula yields a value less than $10^{-4}$ (or $0.0001$):

$$\frac{K(b - a)^5}{180n^4} < 10^{-4}$$

Substitute the known constants ($K = 72$ and $b - a = 2$):

$$\frac{72(32)}{180n^4} < 10^{-4}$$

$$\frac{2304}{180n^4} < 10^{-4}$$

$$\frac{12.8}{n^4} < 10^{-4}$$

Now, rearrange the inequality to solve for $n^4$:

$$n^4 > \frac{12.8}{10^{-4}}$$

$$n^4 > 128,000$$

Take the fourth root of both sides to isolate $n$:

$$n > \sqrt[4]{128,000}$$

$$n > 18.91$$

⚠️ **Crucial Simpson's Rule Constraint:** By design, Simpson's Rule **strictly requires $n$ to be an even integer** because it couples subintervals together to construct parabolic arcs.

Since $n$ must be an even integer greater than $18.91$, we must round up to the next even integer.

- **Answer for (b):** The minimum number of subintervals needed is **$20$**.

### Regroup 3
- Verify calculations and mathematical reasoning.

### Synthesis Wrap-up
- Core takeaways from Session 13 and overview of homework homework assignment.
