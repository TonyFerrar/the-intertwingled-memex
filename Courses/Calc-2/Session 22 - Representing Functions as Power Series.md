---
title: "Session 22 - Representing Functions as Power Series"
type: course-session
course: MATH-182
semester: Fall 2026
publish: true
cssclasses: []
updated: 2026-08-18
---

# Session 22 - Representing Functions as Power Series

## Session Objectives
By the end of this session, you will be able to:
- Analyzing the Convergence of Power Series
- Constructing Taylor and Maclaurin Series from Functions
- Using Polynomials to Approximate Non-Arithmetic Values

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
In this session, we investigate the mathematical principles of **Representing Functions as Power Series** and explore how engineers apply these concepts to analyze real-world physical and structural systems.

### Skill Block 1
## 1. Overview and Notes

When we convert a function into an infinite polynomial (Skill 1), we must ask a critical question: *Does this infinite sum actually equal the function for all values of $x$?* The answer is usually no. Power series only work within a specific safe operating boundary. Finding this boundary is called **analyzing convergence**.

### What is Convergence?
If you plug an $x$-value into an infinite series and the sum approaches a finite, stable number, the series **converges**. If the sum spirals out of control to infinity (or oscillates wildly), the series **diverges**.

### The Interval and Radius of Convergence
The set of all $x$-values where a series converges is called the **Interval of Convergence (IOC)**. The distance from the center $a$ to the edge of this interval is the **Radius of Convergence ($R$)**.
*   If $R = 0$, the series only works at the exact center $x = a$.
*   If $R = \infty$, the series works for all real numbers (e.g., $e^x, \sin(x), \cos(x)$).
*   If $R$ is a finite number, the series only works within the bounds $(a - R, a + R)$.

### The Ratio Test
The most powerful tool to find the radius of convergence is the **Ratio Test**. A power series $\sum_{k=0}^{\infty} c_k(x-a)^k$ converges absolutely if the limit of the ratio of successive terms is less than $1$:
$$ \lim_{k \to \infty} \left| \frac{c_{k+1}(x-a)^{k+1}}{c_k(x-a)^k} \right| = \lim_{k \to \infty} \left| \frac{c_{k+1}}{c_k} (x-a) \right| < 1 $$
By isolating $(x-a)$ in this inequality, you can determine exactly which values of $x$ keep the series mathematically stable.

---

## 2. Sample Mathematical Problems

### Problem A: Find the Radius of Convergence for $\sum_{n=0}^{\infty} \frac{x^n}{3^n (n+1)}$.
**Step 1: Set up the Ratio Test**
Identify the general term $a_n = \frac{x^n}{3^n (n+1)}$. 
We need to evaluate $L = \lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right| < 1$.

**Step 2: Substitute $a_n$ and $a_{n+1}$**
$$ \lim_{n \to \infty} \left| \frac{x^{n+1}}{3^{n+1}(n+2)} \cdot \frac{3^n(n+1)}{x^n} \right| < 1 $$

**Step 3: Simplify the expression**
Cancel out the $x$ terms and the $3$ terms:
$$ \lim_{n \to \infty} \left| \frac{x}{3} \cdot \frac{n+1}{n+2} \right| < 1 $$

**Step 4: Evaluate the Limit**
As $n$ approaches infinity, the fraction $\frac{n+1}{n+2}$ approaches $1$. The $x$ and $3$ are independent of $n$ and can be pulled out of the limit:
$$ \left| \frac{x}{3} \right| \cdot (1) < 1 $$

**Step 5: Isolate $x$**
$$ \frac{|x|}{3} < 1 \implies |x| < 3 $$
This means the series converges for $-3 < x < 3$. Therefore, the **Radius of Convergence is $R = 3$**.

### Problem B: Analyze the convergence of the Maclaurin series for $e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!}$.
**Step 1: Set up the Ratio Test**
$$ \lim_{n \to \infty} \left| \frac{x^{n+1}}{(n+1)!} \cdot \frac{n!}{x^n} \right| < 1 $$

**Step 2: Simplify**
Recall that $(n+1)! = (n+1) \cdot n!$, so the factorials cancel out:
$$ \lim_{n \to \infty} \left| x \cdot \frac{1}{n+1} \right| < 1 $$

**Step 3: Evaluate Limit**
$$ |x| \cdot \lim_{n \to \infty} \left( \frac{1}{n+1} \right) = |x| \cdot 0 = 0 $$
Since $0$ is *always* less than $1$ regardless of what $x$ is, this series converges for all real numbers. **The Radius of Convergence is $R = \infty$.**

---

## 3. Engineering Application Problems

### Application 1: [[Fluid Dynamics Simulation (Boundary Definition)]]
[[Fluid Dynamics Simulation (Boundary Definition) Solution]]


***

### Application 2: [[Automated Drug Dosing System (Predicting Local Stability)]]
[[Automated Drug Dosing System (Predicting Local Stability) Solution]]
**Scenario:** A biomedical engineer is programming an automated IV drip for a hospital. The concentration of the drug in the patient's bloodstream $C(t)$ over time (in minutes) relies on a power series approximation centered at $t = 60$ minutes:
$$ C(t) = \sum_{k=0}^{\infty} \frac{k!(t - 60)^k}{10^k} $$

**Problem:** Determine the radius of convergence for this series to check the stability of the software's dosing algorithm.

**Solution:** Apply the Ratio Test.
$$ \lim_{k \to \infty} \left| \frac{(k+1)!(t-60)^{k+1}}{10^{k+1}} \cdot \frac{10^k}{k!(t-60)^k} \right| < 1 $$
Simplify the factorials ($(k+1)! / k! = k+1$) and the powers:
$$ \lim_{k \to \infty} \left| \frac{(k+1)(t-60)}{10} \right| < 1 $$
$$ \frac{|t-60|}{10} \lim_{k \to \infty} (k+1) < 1 $$
Because the limit of $(k+1)$ as $k \to \infty$ is infinity, this inequality can only ever be less than $1$ if the variable portion is exactly zero. That means $|t - 60| = 0$, so $t = 60$. The radius of convergence is $R = 0$.

**Meaning in Real-Life Application:**
The engineer discovers a catastrophic flaw in the mathematical model. A radius of $0$ means this series *only* works at exactly $60$ minutes. If the IV computer tries to calculate the drug concentration at $61$ minutes, the algorithm will diverge and the system will crash, potentially halting the life-saving medication. Thanks to convergence analysis, the engineer knows they must abandon this specific formula entirely and find a different mathematical representation that converges over a wider timeframe.

#### Worked Example
1. The first three Taylor polynomials for the function $f(x)=\sqrt{1+x}$ centered at $x=0$ are $p_{0}=1$, $p_{1}=1+\frac{x}{2}$, and $p_{2}=1+\frac{x}{2}-\frac{x^{2}}{8}$. Use these to find three approximations of $f(.1)=\sqrt{1.1}$.

##### Solution
###### Step 1: Identify the Value of $x$

The given function is:

$$f(x) = \sqrt{1 + x}$$

We want to approximate:

$$f(0.1) = \sqrt{1.1}$$

By comparing the two expressions, we can see that the input variable $x$ must be set to:

$$x = 0.1$$

To find our three approximations, we will substitute $x = 0.1$ into each of the three given Taylor polynomials ($p_0$, $p_1$, and $p_2$).

###### Step 2: First Approximation ($p_0$)

The zeroth-order Taylor polynomial is a constant:

$$p_0(x) = 1$$

Since there is no $x$ variable in this polynomial, the value remains constant for any input:

$$p_0(0.1) = 1$$

- **First Approximation:** $1$


###### Step 3: Second Approximation ($p_1$)

The first-order Taylor polynomial (which represents the linear approximation or tangent line) is:

$$p_1(x) = 1 + \frac{x}{2}$$

Substitute $x = 0.1$ into the polynomial:

$$p_1(0.1) = 1 + \frac{0.1}{2}$$

Perform the division:

$$\frac{0.1}{2} = 0.05$$

Add the terms together:

$$p_1(0.1) = 1 + 0.05 = 1.05$$

- **Second Approximation:** $1.05$


###### Step 4: Third Approximation ($p_2$)

The second-order Taylor polynomial (which adds quadratic curvature) is:

$$p_2(x) = 1 + \frac{x}{2} - \frac{x^2}{8}$$

Substitute $x = 0.1$ into the polynomial:

$$p_2(0.1) = 1 + \frac{0.1}{2} - \frac{(0.1)^2}{8}$$

We already know from Step 3 that $1 + \frac{0.1}{2} = 1.05$. Now, calculate the quadratic term:

$$(0.1)^2 = 0.01$$

$$\frac{0.01}{8} = 0.00125$$

Subtract this value from our previous terms:

$$p_2(0.1) = 1.05 - 0.00125 = 1.04875$$

- **Third Approximation:** $1.04875$


###### Summary of Results

|**Taylor Polynomial**|**Formula**|**Approximation of 1.1​**|
|---|---|---|
|**$p_0(0.1)$**|$1$|**$1$**|
|**$p_1(0.1)$**|$1 + \frac{0.1}{2}$|**$1.05$**|
|**$p_2(0.1)$**|$1 + \frac{0.1}{2} - \frac{0.1^2}{8}$|**$1.04875$**|

**Comparison to Actual Value:**

The exact value of $\sqrt{1.1}$ is approximately **$1.048809$**. Notice how each higher-degree polynomial gets closer to the actual value, with the quadratic approximation ($p_2$) being accurate to four decimal places!
#### Active Practice Problem
2. Suppose $f(2)=1$, $f^{\prime}(2)=1$, $f^{\prime\prime}(2)=1$ and $f^{(3)}(2)=12$. Find the third order Taylor polynomial for $f(x)$ centered at $x=2$ and use it to approximate $f(2.1)$.

##### Workspace

##### Solution
###### Step 1: Recall the General Formula

The general formula for a third-order Taylor polynomial ($p_3(x)$) centered at a point $x = a$ is:

$$p_3(x) = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \frac{f^{(3)}(a)}{3!}(x-a)^3$$

###### Step 2: Identify the Given Values

From the problem description, we are given the following information:

- **Center ($a$):** $2$

- **Function value:** $f(2) = 1$

- **First derivative:** $f'(2) = 1$

- **Second derivative:** $f''(2) = 1$

- **Third derivative:** $f^{(3)}(2) = 12$


###### Step 3: Construct the Polynomial

Now, substitute the center $a = 2$ and the given derivative values into our general formula:

$$p_3(x) = 1 + 1(x-2) + \frac{1}{2!}(x-2)^2 + \frac{12}{3!}(x-2)^3$$

Next, let's simplify the factorial fractions:

- For the quadratic term: $2! = 2 \cdot 1 = 2$, so the coefficient is $\frac{1}{2}$.

- For the cubic term: $3! = 3 \cdot 2 \cdot 1 = 6$, so the coefficient is $\frac{12}{6} = 2$.


Putting it all together gives the final third-order Taylor polynomial:

$$p_3(x) = 1 + (x-2) + \frac{1}{2}(x-2)^2 + 2(x-2)^3$$

###### Step 4: Approximate $f(2.1)$

To approximate $f(2.1)$, substitute $x = 2.1$ into our polynomial $p_3(x)$:

$$p_3(2.1) = 1 + (2.1-2) + \frac{1}{2}(2.1-2)^2 + 2(2.1-2)^3$$

First, calculate the base term $(x - 2)$:

$$2.1 - 2 = 0.1$$

Now substitute $0.1$ back into the expression:

$$p_3(2.1) = 1 + 0.1 + \frac{1}{2}(0.1)^2 + 2(0.1)^3$$

###### Step 5: Final Arithmetic Evaluation

Evaluate each term step by step:

- **Linear term:** $0.1$

- **Quadratic term:** $\frac{1}{2}(0.01) = 0.005$

- **Cubic term:** $2(0.001) = 0.002$


Add all the pieces together:

$$p_3(2.1) = 1 + 0.1 + 0.005 + 0.002$$

$$p_3(2.1) = 1.107$$

###### Summary of Answers

- **Third-order Taylor Polynomial:**

$$p_3(x) = 1 + (x-2) + \frac{1}{2}(x-2)^2 + 2(x-2)^3$$

- **Approximation of $f(2.1)$:**

$$f(2.1) \approx 1.107$$

### Regroup 1
- Review common misconceptions and clarify key notations.

### Skill Block 2
## 1. Overview and Notes

The foundational skill in power series is the ability to transform a complex, non-algebraic function (like $e^x$, $\sin(x)$, or $\ln(x)$) into an infinite polynomial representation. This is primarily done using **Taylor Series** and **Maclaurin Series**.

### What is a Power Series?
A power series centered at $x = a$ is an infinite sum of the form:
$$ \sum_{k=0}^{\infty} c_k(x - a)^k = c_0 + c_1(x - a) + c_2(x - a)^2 + \dots $$
where $c_k$ are the coefficients and $a$ is the center. 

### The Taylor Series
If a function $f(x)$ has derivatives of all orders at $x = a$, we can represent it exactly (within its radius of convergence) by choosing specific coefficients:
$$ c_k = \frac{f^{(k)}(a)}{k!} $$
This gives the general **Taylor Series** formula:
$$ f(x) = \sum_{k=0}^{\infty} \frac{f^{(k)}(a)}{k!}(x - a)^k = f(a) + f'(a)(x - a) + \frac{f''(a)}{2!}(x - a)^2 + \frac{f'''(a)}{3!}(x - a)^3 + \dots $$

### The Maclaurin Series
A **Maclaurin Series** is simply a special case of a Taylor series where the center is zero ($a = 0$):
$$ f(x) = \sum_{k=0}^{\infty} \frac{f^{(k)}(0)}{k!}x^k = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + \dots $$

### General Steps to Find a Series:
1.  **Find the Derivatives:** Calculate the first several derivatives of the function $f(x)$.
2.  **Evaluate at the Center:** Plug the center value ($a$) into the function and each derivative.
3.  **Identify the Pattern:** Look for a mathematical pattern in the evaluated derivatives (such as alternating signs, factorials, or powers).
4.  **Construct the Series:** Write the generalized $n$-th term formula using the Taylor definition.

---

## 2. Sample Mathematical Problems

### Problem A: Find the Maclaurin series for $f(x) = \cos(x)$.
**Step 1 & 2: Derivatives evaluated at $a=0$**
*   $f(x) = \cos(x) \implies f(0) = 1$
*   $f'(x) = -\sin(x) \implies f'(0) = 0$
*   $f''(x) = -\cos(x) \implies f''(0) = -1$
*   $f^{(3)}(x) = \sin(x) \implies f^{(3)}(0) = 0$
*   $f^{(4)}(x) = \cos(x) \implies f^{(4)}(0) = 1$

**Step 3: Identify Pattern**
Notice that all odd derivatives evaluate to $0$. The even derivatives alternate between $1$ and $-1$. To represent even numbers, we use $2n$. To represent alternating signs, we use $(-1)^n$.

**Step 4: Construct Series**
$$ \cos(x) = \sum_{n=0}^{\infty} \frac{f^{(2n)}(0)}{(2n)!}x^{2n} = \sum_{n=0}^{\infty} \frac{(-1)^n}{(2n)!}x^{2n} $$
$$ \cos(x) = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \dots $$

### Problem B: Find the Taylor series for $f(x) = \frac{1}{x}$ centered at $a = 1$.
**Step 1 & 2: Derivatives evaluated at $a=1$**
*   $f(x) = x^{-1} \implies f(1) = 1$
*   $f'(x) = -1x^{-2} \implies f'(1) = -1$
*   $f''(x) = 2x^{-3} \implies f''(1) = 2$
*   $f^{(3)}(x) = -6x^{-4} \implies f^{(3)}(1) = -6$
*   $f^{(4)}(x) = 24x^{-5} \implies f^{(4)}(1) = 24$

**Step 3: Identify Pattern**
The sequence $1, -1, 2, -6, 24$ is alternating factorials: $f^{(n)}(1) = (-1)^n n!$.

**Step 4: Construct Series**
Using the Taylor formula $c_n = \frac{f^{(n)}(1)}{n!}$:
$$ c_n = \frac{(-1)^n n!}{n!} = (-1)^n $$
$$ \frac{1}{x} = \sum_{n=0}^{\infty} (-1)^n (x-1)^n = 1 - (x-1) + (x-1)^2 - (x-1)^3 + \dots $$

---

## 3. Engineering Application Problems

### Application 1: [[Designing a Microcontroller Math Library]]
[[Designing a Microcontroller Math Library Solution]]


***

### Application 2: [[Thermal Expansion Modeling]]
[[Thermal Expansion Modeling Solution]]

#### Active Practice Problem
3. Find the first four terms of the Taylor series for $ln(x)$ near $x=1$ and use it to approximate $ln(1.1)$.

##### Workspace

##### Solution
###### Step 1: Recall the General Taylor Series Formula

A Taylor series for a function $f(x)$ centered at a point $x = a$ is written as:

$$f(x) = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \frac{f^{(3)}(a)}{3!}(x-a)^3 + \frac{f^{(4)}(a)}{4!}(x-a)^4 + \dots$$

For this problem:

- The function is $f(x) = \ln(x)$

- The center is $a = 1$ ("near $x = 1$")


###### Step 2: Find the Derivatives and Evaluate at $a = 1$

To find the coefficients, we need to take successive derivatives of $f(x) = \ln(x)$ and substitute $x = 1$:

- **$n = 0$ (The function itself):**

$$f(x) = \ln(x) \implies f(1) = \ln(1) = 0$$

- **$n = 1$ (First derivative):**

$$f'(x) = \frac{1}{x} = x^{-1} \implies f'(1) = \frac{1}{1} = 1$$

- **$n = 2$ (Second derivative):**

$$f''(x) = -x^{-2} = -\frac{1}{x^2} \implies f''(1) = -\frac{1}{1^2} = -1$$

- **$n = 3$ (Third derivative):**

$$f^{(3)}(x) = 2x^{-3} = \frac{2}{x^3} \implies f^{(3)}(1) = \frac{2}{1^3} = 2$$

- **$n = 4$ (Fourth derivative):**

$$f^{(4)}(x) = -6x^{-4} = -\frac{6}{x^4} \implies f^{(4)}(1) = -\frac{6}{1^4} = -6$$


###### Step 3: Address "First Four Terms"

In calculus, the phrase _"first four terms"_ can sometimes mean the first four powers of the expansion ($n=0$ to $n=3$), or it can mean the first four **non-zero** terms ($n=1$ to $n=4$, since the $n=0$ term is zero).

To ensure you get full credit regardless of your instructor's preference, we will construct the polynomial both ways.

###### Option A: First four indexing terms ($n = 0, 1, 2, 3$)

Substitute our values from Step 2 into the general formula:

$$p_3(x) = 0 + 1(x-1) + \frac{-1}{2!}(x-1)^2 + \frac{2}{3!}(x-1)^3$$

Simplify the factorials ($2! = 2$ and $3! = 6$, meaning $\frac{2}{6} = \frac{1}{3}$):

$$p_3(x) = (x-1) - \frac{1}{2}(x-1)^2 + \frac{1}{3}(x-1)^3$$

###### Option B: First four non-zero terms ($n = 1, 2, 3, 4$)

Include the fourth derivative term to get four active terms:

$$p_4(x) = (x-1) - \frac{1}{2}(x-1)^2 + \frac{1}{3}(x-1)^3 + \frac{-6}{4!}(x-1)^4$$

Simplify the new factorial ($4! = 24$, meaning $\frac{-6}{24} = -\frac{1}{4}$):

$$p_4(x) = (x-1) - \frac{1}{2}(x-1)^2 + \frac{1}{3}(x-1)^3 - \frac{1}{4}(x-1)^4$$

###### Step 4: Approximate $\ln(1.1)$

To approximate $\ln(1.1)$, substitute $x = 1.1$ into our polynomials. Notice that the shared base term is:

$$(x - 1) = (1.1 - 1) = 0.1$$

###### Calculation using Option A ($n = 3$):

$$p_3(1.1) = (0.1) - \frac{(0.1)^2}{2} + \frac{(0.1)^3}{3}$$

$$p_3(1.1) = 0.1 - \frac{0.01}{2} + \frac{0.001}{3}$$

$$p_3(1.1) = 0.1 - 0.005 + 0.0003333...$$

$$p_3(1.1) \approx 0.095333$$

###### Calculation using Option B ($n = 4$):

$$p_4(1.1) = 0.1 - 0.005 + 0.0003333... - \frac{(0.1)^4}{4}$$

$$p_4(1.1) = 0.0953333... - \frac{0.0001}{4}$$

$$p_4(1.1) = 0.0953333... - 0.000025$$

$$p_4(1.1) \approx 0.095308$$

###### Summary of Answers

Depending on how your class defines "first four terms", your final answer will be one of these two configurations:

|**Interpretation**|**Taylor Polynomial Terms**|**Approximation of ln(1.1)**|
|---|---|---|
|**By Index ($n=0$ to $3$)**|$(x-1) - \frac{1}{2}(x-1)^2 + \frac{1}{3}(x-1)^3$|**$\approx 0.095333$**|
|**By Non-Zero Terms**|$(x-1) - \frac{1}{2}(x-1)^2 + \frac{1}{3}(x-1)^3 - \frac{1}{4}(x-1)^4$|**$\approx 0.095308$**|

_(Note: The actual calculator value of $\ln(1.1)$ is $\approx 0.095310$, showing just how accurate Taylor series expansions are close to their center!)_

### Regroup 2
- Reflect on the physical modeling applications and mathematical setups.

### Skill Block 3
## 1. Overview and Notes

While transforming a function into an infinite series (Skill 1) is a powerful mathematical concept, infinite series are impossible for computers or humans to calculate completely. To make these series useful in the real world, we truncate them to create **Taylor Polynomials**—finite approximations of complex functions.

### The Taylor Polynomial
A Taylor polynomial of degree $n$, denoted as $p_n(x)$, consists of the terms of the Taylor series up to the $n$-th power:
$$ p_n(x) = f(a) + f'(a)(x - a) + \frac{f''(a)}{2!}(x - a)^2 + \dots + \frac{f^{(n)}(a)}{n!}(x - a)^n $$

### Why Center Matters (Local Approximation)
Taylor polynomials are **local approximations**. This means $p_n(x)$ is incredibly accurate when your input $x$ is very close to the center $a$. As $x$ moves further away from $a$, the approximation loses accuracy. 

### Controlling the Error (Tolerance)
In engineering and computing, we must control the mathematical error (the difference between the true value $f(x)$ and the approximated value $p_n(x)$). You can improve accuracy in two ways:
1.  **Increase the degree ($n$):** Adding more terms to the polynomial tightens the approximation.
2.  **Shift the center ($a$):** Choose a center point $a$ that is as close as possible to the $x$ value you are trying to evaluate, ensuring $f(a)$ is an easily known value.

---

## 2. Sample Mathematical Problems

### Problem A: Approximate $\sqrt{4.2}$ using a 2nd-degree Taylor polynomial.
**Step 1: Define function and center**
Let $f(x) = \sqrt{x}$. Since we want to find $\sqrt{4.2}$, we should choose a center $a$ close to $4.2$ where the square root is a known integer. We choose $a = 4$.

**Step 2: Find derivatives and evaluate at $a = 4$**
*   $f(x) = x^{1/2} \implies f(4) = 2$
*   $f'(x) = \frac{1}{2}x^{-1/2} = \frac{1}{2\sqrt{x}} \implies f'(4) = \frac{1}{4}$
*   $f''(x) = -\frac{1}{4}x^{-3/2} = -\frac{1}{4(\sqrt{x})^3} \implies f''(4) = -\frac{1}{32}$

**Step 3: Construct the 2nd-degree polynomial $p_2(x)$**
$$ p_2(x) = f(4) + f'(4)(x - 4) + \frac{f''(4)}{2!}(x - 4)^2 $$
$$ p_2(x) = 2 + \frac{1}{4}(x - 4) - \frac{1}{64}(x - 4)^2 $$

**Step 4: Approximate $\sqrt{4.2}$**
Substitute $x = 4.2$. Notice that $(x - 4) = 0.2$.
$$ p_2(4.2) = 2 + \frac{1}{4}(0.2) - \frac{1}{64}(0.2)^2 $$
$$ p_2(4.2) = 2 + 0.05 - \frac{1}{64}(0.04) = 2.05 - 0.000625 = 2.049375 $$
*(Note: The actual calculator value is $\approx 2.049390$, showing this quick polynomial is highly accurate!)*

### Problem B: Approximate $\ln(1.5)$ using the 3rd-degree Maclaurin polynomial for $\ln(1+x)$.
**Step 1: Define the Maclaurin series**
The known Maclaurin series (centered at $a = 0$) for $\ln(1+x)$ is:
$$ \ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \dots $$
The 3rd-degree polynomial is $p_3(x) = x - \frac{x^2}{2} + \frac{x^3}{3}$.

**Step 2: Evaluate for the target value**
To approximate $\ln(1.5)$ using $\ln(1+x)$, we must set $x = 0.5$.
$$ p_3(0.5) = (0.5) - \frac{(0.5)^2}{2} + \frac{(0.5)^3}{3} $$
$$ p_3(0.5) = 0.5 - \frac{0.25}{2} + \frac{0.125}{3} = 0.5 - 0.125 + 0.04166... $$
$$ p_3(0.5) \approx 0.41667 $$
*(Note: Actual value is $\approx 0.40546$. More terms are needed for higher accuracy since $0.5$ is somewhat far from the center $0$.)*

---

## 3. Engineering Application Problems

### Application 1: [[Defense Radar Trajectory (Computational Deviation)]]
[[Defense Radar Trajectory (Computational Deviation) Solution]]
.

***

### Application 2: [[Smart Watch Battery Estimation (Precision Engineering)]]
[[Smart Watch Battery Estimation (Precision Engineering) Solution]]

#### Active Practice Problem
4. Find the Taylor series for the following functions at the indicated point $a$.
   (a) $f(x)=ln(x)$ at $a=1$
   (b) $f(x)=e^{2x}$ at $a=0$
   (c) $f(x)=cos(x)$ at $a=0$
   (d) $f(x)=x^{3}cos(2x)$ at $a=0$
   (e) $f(x)=e^{-2x}$ at $a=0$

##### Workspace

##### Solution
###### (a) $f(x) = \ln(x)$ at $a = 1$

###### Step 1: Find the pattern of derivatives evaluated at $a = 1$

To find a Taylor series from scratch, we compute the first few derivatives and look for a pattern:

- $f(x) = \ln(x) \implies f(1) = \ln(1) = 0$

- $f'(x) = \frac{1}{x} = x^{-1} \implies f'(1) = 1$

- $f''(x) = -x^{-2} \implies f''(1) = -1$

- $f^{(3)}(x) = 2x^{-3} \implies f^{(3)}(1) = 2$

- $f^{(4)}(x) = -6x^{-4} \implies f^{(4)}(1) = -6$


###### Step 2: Establish the general formula for the $n$-th derivative

Ignoring the $n=0$ term (which is $0$), notice that the derivatives at $x=1$ follow a factorial pattern with alternating signs:

$$f^{(n)}(1) = (-1)^{n-1}(n-1)! \quad \text{for } n \ge 1$$

###### Step 3: Substitute into the Taylor Series formula

The general definition of a Taylor series centered at $a = 1$ is:

$$\sum_{n=0}^{\infty} \frac{f^{(n)}(1)}{n!}(x-1)^n$$

Since the $n=0$ term is $0$, we start the summation from $n=1$:

$$\sum_{n=1}^{\infty} \frac{(-1)^{n-1}(n-1)!}{n!}(x-1)^n$$

###### Step 4: Simplify the factorial expression

Recall that $n! = n \cdot (n-1)!$. Substituting this allows us to cancel out terms:

$$\frac{(n-1)!}{n!} = \frac{(n-1)!}{n \cdot (n-1)!} = \frac{1}{n}$$

###### Final Answer:

$$\ln(x) = \sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{n}(x-1)^n = (x-1) - \frac{(x-1)^2}{2} + \frac{(x-1)^3}{3} - \dots$$

###### (b) $f(x) = e^{2x}$ at $a = 0$

###### Step 1: Use a known standard Maclaurin series

Instead of deriving from scratch, it is much faster to substitute into the known Maclaurin series (Taylor series centered at $a = 0$) for $e^u$:

$$e^u = \sum_{n=0}^{\infty} \frac{u^n}{n!} = 1 + u + \frac{u^2}{2!} + \frac{u^3}{3!} + \dots$$

###### Step 2: Substitute $u = 2x$

Replace every instance of $u$ with $2x$:

$$e^{2x} = \sum_{n=0}^{\infty} \frac{(2x)^n}{n!}$$

###### Step 3: Distribute the exponent

Distribute the power of $n$ to both the $2$ and the $x$:

$$e^{2x} = \sum_{n=0}^{\infty} \frac{2^n x^n}{n!}$$

###### Final Answer:

$$e^{2x} = \sum_{n=0}^{\infty} \frac{2^n x^n}{n!} = 1 + 2x + \frac{4x^2}{2!} + \frac{8x^3}{3!} + \dots$$

###### (c) $f(x) = \cos(x)$ at $a = 0$

###### Step 1: Analyze derivatives at $a = 0$

Let's find the behavior of the trigonometric derivatives at the center:

- $f(0) = \cos(0) = 1$

- $f'(0) = -\sin(0) = 0$

- $f''(0) = -\cos(0) = -1$

- $f^{(3)}(0) = \sin(0) = 0$

- $f^{(4)}(0) = \cos(0) = 1$


###### Step 2: Notice the pattern

- All odd-indexed derivatives ($n = 1, 3, 5, \dots$) evaluate to $0$.

- All even-indexed derivatives ($n = 0, 2, 4, \dots$) alternate between $+1$ and $-1$.


###### Step 3: Write the general form for even indices

To represent only even numbers, we use $2n$ instead of $n$. The alternating signs can be written as $(-1)^n$.

###### Final Answer:

$$\cos(x) = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!} = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \dots$$

###### (d) $f(x) = x^3\cos(2x)$ at $a = 0$

###### Step 1: Modify the standard $\cos(u)$ series

From part (c), we know the standard series for cosine. Let's substitute $u = 2x$ into it:

$$\cos(2x) = \sum_{n=0}^{\infty} \frac{(-1)^n (2x)^{2n}}{(2n)!}$$

###### Step 2: Simplify inside the summation

Distribute the power of $2n$:

$$\cos(2x) = \sum_{n=0}^{\infty} \frac{(-1)^n 2^{2n} x^{2n}}{(2n)!}$$

###### Step 3: Multiply the entire series by $x^3$

Bring $x^3$ inside the summation index:

$$x^3\cos(2x) = x^3 \sum_{n=0}^{\infty} \frac{(-1)^n 2^{2n} x^{2n}}{(2n)!} = \sum_{n=0}^{\infty} \frac{(-1)^n 2^{2n} x^{2n} \cdot x^3}{(2n)!}$$

###### Step 4: Use exponent rules to combine $x$ terms

Add the exponents together ($2n + 3$):

###### Final Answer:

$$x^3\cos(2x) = \sum_{n=0}^{\infty} \frac{(-1)^n 2^{2n} x^{2n+3}}{(2n)!} = x^3 - \frac{4x^5}{2!} + \frac{16x^7}{4!} - \dots$$

###### (e) $f(x) = e^{-2x}$ at $a = 0$

###### Step 1: Use the standard series for $e^u$

Like part (b), start with the standard definition:

$$e^u = \sum_{n=0}^{\infty} \frac{u^n}{n!}$$

###### Step 2: Substitute $u = -2x$

$$e^{-2x} = \sum_{n=0}^{\infty} \frac{(-2x)^n}{n!}$$

###### Step 3: Separate the negative sign and constants

Distribute the power of $n$ to each component within the parentheses: $(-2x)^n = (-1)^n \cdot 2^n \cdot x^n$.

###### Final Answer:

$$e^{-2x} = \sum_{n=0}^{\infty} \frac{(-1)^n 2^n x^n}{n!} = 1 - 2x + \frac{4x^2}{2!} - \frac{8x^3}{3!} + \dots$$

### Regroup 3
- Verify calculations and mathematical reasoning.

### Synthesis Wrap-up
- Core takeaways from Session 22 and overview of homework homework assignment.
