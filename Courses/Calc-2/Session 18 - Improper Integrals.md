---
title: "Session 18 - Improper Integrals"
type: course-session
course: MATH-182
semester: Fall 2026
publish: true
cssclasses: []
updated: 2026-08-18
---

# Session 18 - Improper Integrals

## Session Objectives
By the end of this session, you will be able to:
- Mathematical Diagnosis Identifying and Classifying the Impropriety
- Qualitative Estimation Analyzing Convergence Without Integrating
- Structural Execution Setting up Limits and Splitting Integrals

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
In real-world engineering, these improper integral skills are essential for evaluating infinite domains and asymptotic behaviors across multiple disciplines. **Electrical engineers** rely on them for signal processing via Fourier and Laplace transforms and for calculating electric potential fields around circuit components. **Aerospace and mechanical engineers** use them to model planetary escape velocity, open-boundary fluid dynamics, and heat dissipation, ensuring that infinite physical fields resolve into stable, finite simulation data. Additionally, **reliability engineers** apply these limit and comparison techniques to infinite-tail probability distributions to accurately predict component lifespans and system failure rates, ultimately preventing computer simulation errors caused by unbounded mathematical calculations.

### Skill Block 1
## Conceptual Notes

Before calculating any integrals, you must perform a **mathematical diagnosis** to check if the integral is proper or improper. A standard definite integral assumes the domain is finite and the function remains bounded (finite) across that entire domain. If either of these conditions fails, the integral is **improper**.

Improper integrals are categorized into two primary types based on the root cause of their "impropriety":

### 1. Type I: Unbounded Domains (Infinite Intervals)

An integral is Type I if one or both of its integration limits are infinite. The function itself might be completely well-behaved, but we are attempting to calculate the area under the curve across an infinitely long stretch of the x-axis.

- **Visual Cue:** Look directly at the upper and lower limits of integration ($\infty$ or $-\infty$).
    
- **Mathematical Forms:**
    
    $$\int_{a}^{\infty} f(x) \, dx, \quad \int_{-\infty}^{b} f(x) \, dx, \quad \text{or} \quad \int_{-\infty}^{\infty} f(x) \, dx$$
    

### 2. Type II: Discontinuous Integrands (Infinite Range)

An integral is Type II if the integration limits are finite numbers, but the integrand $f(x)$ approaches infinity (a vertical asymptote) at some point within the interval of integration.

- **Visual Cue:** Look for values of $x$ that make the denominator equal to zero.
    
- **The Hidden Trap:** The asymptote isn't always at the boundaries ($a$ or $b$); it can be hidden right in the middle of the interval.
    
- **Mathematical Forms:**
    
    - Discontinuity at the lower bound: $f(x) \to \infty$ as $x \to a^+$
        
    - Discontinuity at the upper bound: $f(x) \to \infty$ as $x \to b^-$
        
    - Discontinuity at an interior point $c$ (where $a < c < b$): $f(x) \to \infty$ as $x \to c$
        

## Standard Sample Problems

### Sample Problem 1

**Problem:** Diagnose and evaluate the following integral:

$$\int_{3}^{\infty} \frac{1}{(x-2)^2} \, dx$$

#### **Step 1: Diagnosis**

1. **Check the bounds:** The upper limit is $\infty$, making this automatically a **Type I improper integral**.
    
2. **Check for interior discontinuities:** The denominator is zero when $x = 2$. However, our interval of integration is $[3, \infty)$. Since $2$ is outside this interval, there are no hidden Type II discontinuities.
    

#### **Step 2: Solution**

Rewrite the integral as a limit and integrate using the power rule:

$$\lim_{t \to \infty} \int_{3}^{t} (x-2)^{-2} \, dx = \lim_{t \to \infty} \left[ -\frac{1}{x-2} \right]_{3}^{t}$$

$$= \lim_{t \to \infty} \left( -\frac{1}{t-2} - \left(-\frac{1}{3-2}\right) \right)$$

$$= \lim_{t \to \infty} \left( -\frac{1}{t-2} + 1 \right)$$

As $t \to \infty$, the fraction $-\frac{1}{t-2} \to 0$.

$$= 0 + 1 = 1$$

- **Conclusion:** The integral **converges** to 1.
    

### Sample Problem 2

**Problem:** Diagnose and evaluate the following integral:

$$\int_{0}^{4} \frac{1}{\sqrt{4-x}} \, dx$$

#### **Step 1: Diagnosis**

1. **Check the bounds:** Both limits ($0$ and $4$) are finite numbers.
    
2. **Check for interior discontinuities:** Look at the denominator. When $x = 4$, the denominator becomes $\sqrt{4-4} = 0$, causing the function to approach infinity. Because this vertical asymptote occurs at the upper limit of our interval $[0, 4]$, this is a **Type II improper integral**.
    

#### **Step 2: Solution**

Rewrite the integral using a one-sided limit approaching 4 from the left:

$$\lim_{t \to 4^-} \int_{0}^{t} (4-x)^{-1/2} \, dx$$

Using $u$-substitution ($u = 4-x$, $du = -dx$), the antiderivative is $-2\sqrt{4-x}$:

$$\lim_{t \to 4^-} \left[ -2\sqrt{4-x} \right]_{0}^{t} = \lim_{t \to 4^-} \left( -2\sqrt{4-t} - (-2\sqrt{4-0}) \right)$$

$$= \lim_{t \to 4^-} \left( -2\sqrt{4-t} + 2(2) \right)$$

As $t \to 4^-$, the term $-2\sqrt{4-t} \to 0$.

$$= 0 + 4 = 4$$

- **Conclusion:** The integral **converges** to 4.
    

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Electrical Engineering (Electric Potential Field)]]
[[Electrical Engineering (Electric Potential Field) Solution]]


### Engineering Problem 2: [[Aerospace Engineering (Spacecraft Escape Velocity)]]
[[Aerospace Engineering (Spacecraft Escape Velocity) Solution]]

    

### Engineering Problem 3: [[Reliability Engineering (Component Lifespan Prediction)]]
[[Reliability Engineering (Component Lifespan Prediction) Solution]]

#### Worked Example
A. Determine convergence for each of the integrals below, and evaluate those that are convergent.
1. $\int_{0}^{\infty}e^{-x}dx$

##### Solution
###### **Problem**

Determine whether the following improper integral converges or diverges, and evaluate it if it converges:

$$\int_{0}^{\infty}e^{-x}dx$$

###### **Step-by-Step Solution**

###### **Step 1: Rewrite the improper integral as a limit**

Because the upper limit of integration is infinity ($\infty$), this is a Type 1 improper integral. To evaluate it, we replace $\infty$ with a variable $t$ and set up a limit as $t$ approaches infinity:

$$\int_{0}^{\infty}e^{-x}dx = \lim_{t \to \infty} \int_{0}^{t}e^{-x}dx$$

###### **Step 2: Find the antiderivative**

Next, we find the indefinite integral of the inner function, $e^{-x}$. Using basic integration rules (or $u$-substitution where $u = -x$):

$$\int e^{-x}dx = -e^{-x}$$

###### **Step 3: Apply the Fundamental Theorem of Calculus**

Now, evaluate the definite integral from $0$ to $t$ by plugging in the upper and lower limits:

$$\int_{0}^{t}e^{-x}dx = \left[ -e^{-x} \right]_{0}^{t}$$

$$= (-e^{-t}) - (-e^{-0})$$

Since any non-zero number raised to the power of 0 is 1 ($e^0 = 1$), this simplifies to:

$$= -e^{-t} + 1$$

$$= 1 - e^{-t}$$

###### **Step 4: Evaluate the limit**

Now substitute this back into the limit expression we established in Step 1:

$$\lim_{t \to \infty} (1 - e^{-t})$$

To see what happens as $t \to \infty$, it helps to rewrite the negative exponent as a fraction:

$$e^{-t} = \frac{1}{e^t}$$

As $t$ grows infinitely large, $e^t$ also grows infinitely large, making the fraction approach $0$:

$$\lim_{t \to \infty} \frac{1}{e^t} = 0$$

Therefore:

$$\lim_{t \to \infty} (1 - e^{-t}) = 1 - 0 = 1$$

###### **Conclusion**

Since the limit results in a finite, defined number, the improper integral **converges**.

**Final Answer:**

$$\int_{0}^{\infty}e^{-x}dx = 1$$
#### Active Practice Problem
A. Determine convergence for each of the integrals below, and evaluate those that are convergent.
2. $\int_{-\infty}^{\infty}x^{3}e^{-x^{4}}dx$

##### Workspace

##### Solution
###### **Problem**

Determine whether the following improper integral converges or diverges, and evaluate it if it converges:

$$\int_{-\infty}^{\infty}x^{3}e^{-x^{4}}dx$$

###### **Step-by-Step Solution**

###### **Step 1: Split the integral into two parts**

Because both the upper limit ($\infty$) and the lower limit ($-\infty$) are infinite, this is a doubly improper integral. To evaluate it properly, we must split it at a convenient interior point (like $0$) into two separate limits:

$$\int_{-\infty}^{\infty}x^{3}e^{-x^{4}}dx = \int_{-\infty}^{0}x^{3}e^{-x^{4}}dx + \int_{0}^{\infty}x^{3}e^{-x^{4}}dx$$

For the entire integral to converge, **both** individual pieces must converge independently. We can rewrite these using limits with variables $s$ and $t$:

$$\lim_{s \to -\infty} \int_{s}^{0}x^{3}e^{-x^{4}}dx + \lim_{t \to \infty} \int_{0}^{t}x^{3}e^{-x^{4}}dx$$

###### **Step 2: Find the antiderivative using $u$-substitution**

Let's find the indefinite integral of the inner function, $\int x^{3}e^{-x^{4}}dx$, using substitution:

- Let $u = -x^4$

- Then, find the derivative: $du = -4x^3 dx \implies x^3 dx = -\frac{1}{4} du$


Substitute these into the integral:

$$\int x^{3}e^{-x^{4}}dx = \int e^u \left(-\frac{1}{4}\right) du = -\frac{1}{4}e^u$$

Substitute $-x^4$ back in for $u$ to get the final antiderivative:

$$-\frac{1}{4}e^{-x^{4}}$$

###### **Step 3: Evaluate the first half (from $-\infty$ to $0$)**

Now, let's plug our antiderivative into the left-hand limit:

$$\lim_{s \to -\infty} \left[ -\frac{1}{4}e^{-x^{4}} \right]_{s}^{0} = \lim_{s \to -\infty} \left( \left(-\frac{1}{4}e^{-0^4}\right) - \left(-\frac{1}{4}e^{-s^4}\right) \right)$$

$$= \lim_{s \to -\infty} \left( -\frac{1}{4}(1) + \frac{1}{4e^{s^4}} \right)$$

As $s \to -\infty$, the term $s^4$ becomes a massive positive number, which means $e^{s^4} \to \infty$. Therefore, the fraction $\frac{1}{4e^{s^4}}$ shrinks to $0$:

$$= -\frac{1}{4} + 0 = -\frac{1}{4}$$

The first half converges to $-\frac{1}{4}$.

###### **Step 4: Evaluate the second half (from $0$ to $\infty$)**

Next, plug the antiderivative into the right-hand limit:

$$\lim_{t \to \infty} \left[ -\frac{1}{4}e^{-x^{4}} \right]_{0}^{t} = \lim_{t \to \infty} \left( \left(-\frac{1}{4}e^{-t^4}\right) - \left(-\frac{1}{4}e^{-0^4}\right) \right)$$

$$= \lim_{t \to \infty} \left( -\frac{1}{4e^{t^4}} + \frac{1}{4}(1) \right)$$

Just like before, as $t \to \infty$, the fraction $\frac{1}{4e^{t^4}}$ goes to $0$:

$$= 0 + \frac{1}{4} = \frac{1}{4}$$

The second half converges to $\frac{1}{4}$.

###### **Step 5: Combine the results**

Since both halves converged to finite numbers, the total improper integral converges. We add the two values together:

$$\int_{-\infty}^{\infty}x^{3}e^{-x^{4}}dx = -\frac{1}{4} + \frac{1}{4} = 0$$

###### **Conclusion**

The improper integral **converges**.

**Final Answer:**

$$\int_{-\infty}^{\infty}x^{3}e^{-x^{4}}dx = 0$$

💡 **Pro-Tip Shortcut (Odd Function Symmetry):**

Notice that the integrand $f(x) = x^3e^{-x^4}$ is an **odd function** because $f(-x) = -f(x)$. For a regular definite integral with symmetric bounds around zero (like $-a$ to $a$), an odd function always integrates to $0$.

For _improper_ integrals, you can only safely use this rule _after_ proving that the individual pieces converge (which we just did!). Because they converge, the perfectly symmetric balancing act cancels out nicely to zero.
##### Extra Practice & Extensions
> ##### Extension Problem (Improper)
> A. Determine convergence for each of the integrals below, and evaluate those that are convergent.
3. $\int_{-1}^{0}\frac{1}{\sqrt{1-x^{2}}}dx$
> 
> > [!check]- Solution
> > ### **Problem**
> > 
> > Determine whether the following improper integral converges or diverges, and evaluate it if it converges:
> > 
> > $$\int_{-1}^{0}\frac{1}{\sqrt{1-x^{2}}}dx$$
> > 
> > ### **Step-by-Step Solution**
> > 
> > #### **Step 1: Identify the discontinuity and rewrite as a limit**
> > 
> > Unlike the previous problems, the limits of integration here are finite numbers ($-1$ and $0$). However, if we look at the denominator of the integrand, $\sqrt{1-x^2}$, it becomes $0$ when $x = -1$.
> > 
> > Because the function approaches infinity as $x$ approaches $-1$, this is a **Type 2 improper integral** with an infinite discontinuity at the lower bound. We must rewrite it as a limit approaching $-1$ from the right side (indicated by $-1^+$):
> > 
> > $$\int_{-1}^{0}\frac{1}{\sqrt{1-x^{2}}}dx = \lim_{t \to -1^{+}} \int_{t}^{0}\frac{1}{\sqrt{1-x^{2}}}dx$$
> > 
> > #### **Step 2: Find the antiderivative**
> > 
> > The integrand matches a standard inverse trigonometric derivative form. The fundamental antiderivative of this function is the arcsine (or inverse sine) function:
> > 
> > $$\int \frac{1}{\sqrt{1-x^2}}dx = \arcsin(x)$$
> > 
> > #### **Step 3: Apply the Fundamental Theorem of Calculus**
> > 
> > Now, evaluate the definite integral from $t$ to $0$ by plugging in the bounds:
> > 
> > $$\int_{t}^{0}\frac{1}{\sqrt{1-x^{2}}}dx = \left[ \arcsin(x) \right]_{t}^{0}$$
> > 
> > $$= \arcsin(0) - \arcsin(t)$$
> > 
> > We know that the angle whose sine is $0$ is simply $0$ ($\arcsin(0) = 0$). Substituting this in simplifies the expression to:
> > 
> > $$= 0 - \arcsin(t)$$
> > 
> > $$= -\arcsin(t)$$
> > 
> > #### **Step 4: Evaluate the limit**
> > 
> > Now, we take the limit of our expression as $t$ approaches $-1$ from the right:
> > 
> > $$\lim_{t \to -1^{+}} (-\arcsin(t))$$
> > 
> > We need to find the angle in the interval $[-\frac{\pi}{2}, \frac{\pi}{2}]$ whose sine value is $-1$. Since $\sin(-\frac{\pi}{2}) = -1$, we have:
> > 
> > $$\arcsin(-1) = -\frac{\pi}{2}$$
> > 
> > Substituting this value back into our limit calculation gives:
> > 
> > $$- \left(-\frac{\pi}{2}\right) = \frac{\pi}{2}$$
> > 
> > ### **Conclusion**
> > 
> > Since the limit yields a finite, well-defined number, the improper integral **converges**.
> > 
> > **Final Answer:**
> > 
> > $$\int_{-1}^{0}\frac{1}{\sqrt{1-x^{2}}}dx = \frac{\pi}{2}$$
>

### Regroup 1
- Review common misconceptions and clarify key notations.

### Skill Block 2
## Conceptual Notes

In professional engineering and advanced applied mathematics, finding an exact symbolic antiderivative is frequently impossible because real-world functions are highly complex. Fortunately, you often do not need to know the exact numerical value of an improper integral; you only need to know whether the physical system stabilizes or fails. This is where **Qualitative Estimation** comes in—allowing you to determine convergence or divergence without ever performing the underlying integration.

To analyze an integral qualitatively, you rely on two main structural benchmarks:

### 1. The $p$-Integral Benchmark Test

The behavior of the baseline function $\frac{1}{x^p}$ on an infinite interval is a thoroughly proven mathematical standard. You can use it as a reference metric to instantly evaluate basic fractions:

$$\int_{1}^{\infty} \frac{1}{x^p} \, dx = \begin{cases} \text{Converges} & \text{if } p > 1 \\ \text{Diverges} & \text{if } p \le 1 \end{cases}$$

- **Core Intuition:** If $p > 1$, the curve drops toward the x-axis rapidly enough to trap a finite, bounded area underneath it. If $p \le 1$, the curve drops too slowly, and the accumulated area under the tail blows up to infinity.
    

### 2. The Direct Comparison Test (DCT)

The Direct Comparison Test acts as a logical sandwich rule for improper integrals. Suppose you have two continuous functions such that $0 \le f(x) \le g(x)$ for all values of $x$ across the interval $[a, \infty)$:

- **The Ceiling Rule (Testing for Convergence):** If you can prove that the _larger_ function $g(x)$ traps a finite, bounded area ($\int_{a}^{\infty} g(x) \, dx$ converges), then the _smaller_ function $f(x)$ is trapped underneath it and is forced to also be finite (**converge**).
    
    $$\int_{a}^{\infty} g(x) \, dx \text{ converges} \implies \int_{a}^{\infty} f(x) \, dx \text{ converges}$$
    
- **The Floor Rule (Testing for Divergence):** If you can prove that the _smaller_ function $f(x)$ accumulates an infinite area ($\int_{a}^{\infty} f(x) \, dx$ diverges), then the _larger_ function $g(x)$ sitting on top of it is forced to also blow up to infinity (**diverge**).
    
    $$\int_{a}^{\infty} f(x) \, dx \text{ diverges} \implies \int_{a}^{\infty} g(x) \, dx \text{ diverges}$$
    

> ⚠️ **The Logical Trap:** Comparison only works in these two specific directions. Knowing that a _larger_ function diverges tells you absolutely nothing about the smaller function; knowing that a _smaller_ function converges tells you absolutely nothing about the larger one.

## Standard Sample Problems

### Sample Problem 1: Bounding Above (Proving Convergence)

**Problem:** Determine whether the following improper integral converges or diverges:

$$\int_{1}^{\infty} \frac{1}{x^4 + 3} \, dx$$

#### **Step 1: Analyze Tail Behavior**

As $x \to \infty$, the $+3$ in the denominator becomes completely negligible compared to the massive growth of $x^4$. The function behaves almost identically to $\frac{1}{x^4}$, which suggests it should converge. Therefore, our goal is to find a clean, _larger_ function that is known to converge.

#### **Step 2: Build the Inequality**

Establish the relationship for any $x \ge 1$:

$$x^4 + 3 > x^4$$

Taking the reciprocal flips the inequality sign:

$$\frac{1}{x^4 + 3} < \frac{1}{x^4}$$

#### **Step 3: Evaluate the Reference Function**

Test the larger reference function using the $p$-integral test:

$$\int_{1}^{\infty} \frac{1}{x^4} \, dx \implies p = 4$$

Since $p = 4 > 1$, this reference integral **converges**.

#### **Step 4: Conclude**

Because our original function is strictly smaller than a known convergent function, the Direct Comparison Test confirms that the original integral **converges**.

### Sample Problem 2: Bounding Below (Proving Divergence)

**Problem:** Determine whether the following improper integral converges or diverges:

$$\int_{2}^{\infty} \frac{1}{\sqrt{x} - 1} \, dx$$

#### **Step 1: Analyze Tail Behavior**

As $x$ grows large, subtracting 1 has very little impact on the denominator. The function scales similarly to $\frac{1}{\sqrt{x}} = \frac{1}{x^{1/2}}$. Since $p = 1/2 \le 1$, we suspect this integral will diverge. Therefore, our goal is to find a clean, _smaller_ function that is known to diverge.

#### **Step 2: Build the Inequality**

For any $x \ge 2$, subtracting 1 makes the denominator smaller:

$$\sqrt{x} - 1 < \sqrt{x}$$

Taking the reciprocal flips the inequality sign:

$$\frac{1}{\sqrt{x} - 1} > \frac{1}{\sqrt{x}}$$

#### **Step 3: Evaluate the Reference Function**

Test the smaller reference function using the $p$-integral test:

$$\int_{2}^{\infty} \frac{1}{x^{1/2}} \, dx \implies p = \frac{1}{2}$$

Since $p = \frac{1}{2} \le 1$, this reference integral **diverges**.

#### **Step 4: Conclude**

Because our original function is strictly larger than a known divergent function, the Direct Comparison Test confirms that the original integral **diverges**.

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Electrical Engineering (High-Frequency Signal Power Bounding)]]
[[Electrical Engineering (High-Frequency Signal Power Bounding) Solution]]


### Engineering Problem 2: [[Aerospace Engineering (Gravitational Drag Fields in Nebula Clouds)]]
[[Aerospace Engineering (Gravitational Drag Fields in Nebula Clouds) Solution]]


### Engineering Problem 3: [[Reliability Engineering (Infinite Lifespan Machine Wear-Out Thresholds)]]
[[Reliability Engineering (Infinite Lifespan Machine Wear-Out Thresholds) Solution]]

#### Worked Example
A. Determine convergence for each of the integrals below, and evaluate those that are convergent.
4. $\int_{0}^{2}\frac{1}{\sqrt[3]{x-1}}dx$

##### Solution
###### **Problem**

Determine whether the following improper integral converges or diverges, and evaluate it if it converges:

$$\int_{0}^{2}\frac{1}{\sqrt[3]{x-1}}dx$$

###### **Step-by-Step Solution**

###### **Step 1: Identify the interior discontinuity and split the integral**

The limits of integration are finite ($0$ to $2$). However, look closely at the denominator of the integrand: $\sqrt[3]{x-1}$.

When $x = 1$, the denominator becomes $0$, making the function approach infinity. Because $x = 1$ lies right in the **middle** of our integration interval $[0, 2]$, this is a Type 2 improper integral with an interior discontinuity.

We must split the integral at the point of discontinuity ($x = 1$) into two separate limits:

$$\int_{0}^{2}\frac{1}{\sqrt[3]{x-1}}dx = \int_{0}^{1}\frac{1}{\sqrt[3]{x-1}}dx + \int_{1}^{2}\frac{1}{\sqrt[3]{x-1}}dx$$

Expressing these as limits gives:

$$\lim_{b \to 1^{-}} \int_{0}^{b}\frac{1}{\sqrt[3]{x-1}}dx + \lim_{c \to 1^{+}} \int_{c}^{2}\frac{1}{\sqrt[3]{x-1}}dx$$

Both parts must converge independently for the entire integral to converge.

###### **Step 2: Find the general antiderivative**

To make integration easier, rewrite the radical using a fractional negative exponent:

$$\int \frac{1}{\sqrt[3]{x-1}}dx = \int (x-1)^{-1/3}dx$$

Using the power rule for integration ($\int x^n dx = \frac{x^{n+1}}{n+1}$):

$$\int (x-1)^{-1/3}dx = \frac{(x-1)^{2/3}}{\frac{2}{3}} = \frac{3}{2}(x-1)^{2/3}$$

###### **Step 3: Evaluate the first half (from $0$ to $1$)**

Apply the fundamental theorem of calculus to the first limit:

$$\lim_{b \to 1^{-}} \left[ \frac{3}{2}(x-1)^{2/3} \right]_{0}^{b} = \lim_{b \to 1^{-}} \left( \frac{3}{2}(b-1)^{2/3} - \frac{3}{2}(0-1)^{2/3} \right)$$

- As $b \to 1^{-}$, the term $(b-1)^{2/3} \to 0$.

- For the lower bound, simplify $(-1)^{2/3}$: squaring $-1$ gives $1$, and the cube root of $1$ is $1$. So, $(-1)^{2/3} = 1$.


Evaluating the limit:

$$= 0 - \frac{3}{2}(1) = -\frac{3}{2}$$

###### **Step 4: Evaluate the second half (from $1$ to $2$)**

Apply the fundamental theorem of calculus to the second limit:

$$\lim_{c \to 1^{+}} \left[ \frac{3}{2}(x-1)^{2/3} \right]_{c}^{2} = \lim_{c \to 1^{+}} \left( \frac{3}{2}(2-1)^{2/3} - \frac{3}{2}(c-1)^{2/3} \right)$$

- For the upper bound, simplify $(2-1)^{2/3} = (1)^{2/3} = 1$.

- As $c \to 1^{+}$, the term $(c-1)^{2/3} \to 0$.


Evaluating the limit:

$$= \frac{3}{2}(1) - 0 = \frac{3}{2}$$

###### **Step 5: Combine the results**

Since both individual one-sided limits converged to finite numbers, the total improper integral converges. Now we add the two pieces together:

$$\int_{0}^{2}\frac{1}{\sqrt[3]{x-1}}dx = -\frac{3}{2} + \frac{3}{2} = 0$$

###### **Conclusion**

The improper integral **converges**.

**Final Answer:**

$$\int_{0}^{2}\frac{1}{\sqrt[3]{x-1}}dx = 0$$
#### Active Practice Problem
B. Determine convergence for each of the integrals below.
1. $\int_{1}^{\infty}x^{-2}dx$

##### Workspace

##### Solution
###### **Problem**

Determine whether the following improper integral converges or diverges:

$$\int_{1}^{\infty}x^{-2}dx$$

###### **Step-by-Step Solution**

###### **Step 1: Rewrite the improper integral as a limit**

Because the upper limit of integration is infinity ($\infty$), this is a Type 1 improper integral. We replace $\infty$ with a variable $t$ and rewrite the integral as a limit:

$$\int_{1}^{\infty}x^{-2}dx = \lim_{t \to \infty} \int_{1}^{t}x^{-2}dx$$

###### **Step 2: Find the antiderivative**

To find the indefinite integral of $x^{-2}$, we use the power rule for integration ($\int x^n dx = \frac{x^{n+1}}{n+1}$):

$$\int x^{-2}dx = \frac{x^{-2+1}}{-2+1} = \frac{x^{-1}}{-1} = -x^{-1}$$

Rewriting it with a positive exponent makes it easier to work with:

$$-\frac{1}{x}$$

###### **Step 3: Apply the Fundamental Theorem of Calculus**

Now, evaluate the definite integral from $1$ to $t$ by plugging in the upper and lower limits:

$$\int_{1}^{t}x^{-2}dx = \left[ -\frac{1}{x} \right]_{1}^{t}$$

$$= \left(-\frac{1}{t}\right) - \left(-\frac{1}{1}\right)$$

$$= -\frac{1}{t} + 1$$

$$= 1 - \frac{1}{t}$$

###### **Step 4: Evaluate the limit**

Now, substitute this result back into our limit expression from Step 1:

$$\lim_{t \to \infty} \left(1 - \frac{1}{t}\right)$$

As $t$ approaches infinity, the denominator of the fraction $\frac{1}{t}$ grows infinitely large, which means the value of the fraction shrinks to $0$:

$$\lim_{t \to \infty} \frac{1}{t} = 0$$

Therefore:

$$1 - 0 = 1$$

###### **Conclusion**

Because the limit resolves to a finite number ($1$), the improper integral **converges**.

**Final Answer:** The integral **converges** (and evaluates to $1$).

💡 **Pro-Tip Shortcut (The $p$-test):**

You can save a lot of time on integrals like this by using the **$p$-test for improper integrals**.

The rule states that an integral of the form $\int_{1}^{\infty} \frac{1}{x^p} dx$ will:

- **Converge** if $p > 1$

- **Diverge** if $p \le 1


For this problem, rewriting $x^{-2}$ gives $\frac{1}{x^2}$. Since $p = 2$ (which is greater than $1$), you can immediately conclude that the integral **converges** without doing any of the calculus calculus steps!
##### Extra Practice & Extensions
> ##### Extension Problem (Improper)
> B. Determine convergence for each of the integrals below.
2. $\int_{1}^{\infty}\frac{1}{\sqrt{x}}dx$
> 
> > [!check]- Solution
> > ### **Problem**
> > 
> > Determine whether the following improper integral converges or diverges:
> > 
> > $$\int_{1}^{\infty}\frac{1}{\sqrt{x}}dx$$
> > 
> > ### **Step-by-Step Solution**
> > 
> > #### **Step 1: Rewrite the improper integral as a limit**
> > 
> > Because the upper limit of integration is infinity ($\infty$), this is a Type 1 improper integral. We replace the $\infty$ symbol with a variable $t$ and write it as a limit:
> > 
> > $$\int_{1}^{\infty}\frac{1}{\sqrt{x}}dx = \lim_{t \to \infty} \int_{1}^{t}\frac{1}{\sqrt{x}}dx$$
> > 
> > #### **Step 2: Find the antiderivative**
> > 
> > To integrate more easily, rewrite the radical in the denominator using a fractional negative exponent:
> > 
> > $$\frac{1}{\sqrt{x}} = \frac{1}{x^{1/2}} = x^{-1/2}$$
> > 
> > Now, apply the power rule for integration ($\int x^n dx = \frac{x^{n+1}}{n+1}$):
> > 
> > $$\int x^{-1/2}dx = \frac{x^{-1/2 + 1}}{-1/2 + 1} = \frac{x^{1/2}}{\frac{1}{2}} = 2x^{1/2}$$
> > 
> > Rewriting it back into radical form gives our antiderivative:
> > 
> > $$2\sqrt{x}$$
> > 
> > #### **Step 3: Apply the Fundamental Theorem of Calculus**
> > 
> > Evaluate the definite integral from $1$ to $t$ by plugging in the upper and lower bounds:
> > 
> > $$\int_{1}^{t}x^{-1/2}dx = \left[ 2\sqrt{x} \right]_{1}^{t}$$
> > 
> > $$= (2\sqrt{t}) - (2\sqrt{1})$$
> > 
> > $$= 2\sqrt{t} - 2$$
> > 
> > #### **Step 4: Evaluate the limit**
> > 
> > Substitute this result back into the limit expression we set up in Step 1:
> > 
> > $$\lim_{t \to \infty} (2\sqrt{t} - 2)$$
> > 
> > As $t$ approaches infinity, the square root of $t$ ($\sqrt{t}$) also grows without bound towards infinity:
> > 
> > $$\lim_{t \to \infty} 2\sqrt{t} = \infty$$
> > 
> > Subtracting 2 from an infinitely large number still leaves it infinitely large:
> > 
> > $$\infty - 2 = \infty$$
> > 
> > ### **Conclusion**
> > 
> > Because the limit does not result in a finite number and instead approaches infinity, the improper integral **diverges**.
> > 
> > **Final Answer:** The integral **diverges**.
> > 
> > 💡 **Pro-Tip Shortcut (The $p$-test):**
> > 
> > Just like the previous question, you can use the **$p$-test for improper integrals** here to find the answer instantly!
> > 
> > The integral can be written as $\int_{1}^{\infty} \frac{1}{x^{1/2}} dx$.
> > 
> > - Here, $p = \frac{1}{2}$.
> > 
> > - Since $p \le 1$, the $p$-test tells us automatically that the area under the curve is infinite, meaning the integral **diverges**!
> > 
>

### Regroup 2
- Reflect on the physical modeling applications and mathematical setups.

### Skill Block 3
## Conceptual Notes

Once you have diagnosed an integral as improper, you cannot evaluate it using standard plugging-and-chugging methods. The Fundamental Theorem of Calculus strictly requires the integration interval $[a, b]$ to be closed and the function to be continuous. To get around this, you must use **Structural Execution**: replacing the problem areas with a variable and setting up a formal limit expression.

There are two major structural mechanics you must master:

### 1. Translating Singularities into Limits

You must strip away the improper component ($\infty$, $-\infty$, or a vertical asymptote) and substitute a dummy variable (usually $t$, $s$, $b$, or $c$), then evaluate the limit as that variable approaches the problem point.

- **For Type I (Infinite Bounds):** Replace $\infty$ with $t$ and evaluate $\lim_{t \to \infty}$.
    
- **For Type II (Asymptotes):** You must use **one-sided limits** because the function only exists on the side of the asymptote that falls within the integration zone. If the asymptote is at the lower bound $a$, approach from the right ($\lim_{t \to a^+}$). If it is at the upper bound $b$, approach from the left ($\lim_{t \to b^-}$).
    

### 2. Splitting the Domain of Integration

You cannot evaluate a limit at two different problem zones simultaneously. If an integral contains more than one "impropriety," you must structurally split the integral into separate, independent pieces at a convenient interior point.

- **Doubly Unbounded Domains ($-\infty$ to $\infty$):** Split the domain at a baseline integer (usually $0$):
    
    $$\int_{-\infty}^{\infty} f(x) \, dx = \lim_{s \to -\infty} \int_{s}^{0} f(x) \, dx + \lim_{t \to \infty} \int_{0}^{t} f(x) \, dx$$
    
- **Interior Discontinuities:** If a vertical asymptote occurs at a point $c$ hidden inside the interval $[a, b]$, you must split the integral exactly at $x = c$:
    
    $$\int_{a}^{b} f(x) \, dx = \lim_{b \to c^-} \int_{a}^{b} f(x) \, dx + \lim_{c \to c^+} \int_{c}^{b} f(x) \, dx$$
    

> ⚠️ **The Absolute Convergence Rule:** For the entire original integral to converge, **every single individual piece must converge independently**. If even one piece blows up to infinity (diverges), the entire integral is declared divergent. You cannot subtract $\infty$ from $\infty$ to cancel them out.

## Standard Sample Problems

### Sample Problem 1: Doubly Infinite Bounds (Type I Splitting)

**Problem:** Structurally execute and evaluate the following integral:

$$\int_{-\infty}^{\infty} \frac{1}{1+x^2} \, dx$$

#### **Step 1: Structural Setup**

Both bounds are infinite. Split the domain at $x = 0$ and introduce two independent limit expressions using variables $s$ and $t$:

$$\int_{-\infty}^{\infty} \frac{1}{1+x^2} \, dx = \lim_{s \to -\infty} \int_{s}^{0} \frac{1}{1+x^2} \, dx + \lim_{t \to \infty} \int_{0}^{t} \frac{1}{1+x^2} \, dx$$

#### **Step 2: Integration and Limit Execution**

The standard antiderivative is $\arctan(x)$. Evaluate both pieces separately:

- **Left Piece:**
    
    $$\lim_{s \to -\infty} \left[ \arctan(x) \right]_s^0 = \lim_{s \to -\infty} (\arctan(0) - \arctan(s))$$
    
    Since $\arctan(0) = 0$ and $\lim_{s \to -\infty} \arctan(s) = -\frac{\pi}{2}$:
    
    $$= 0 - \left(-\frac{\pi}{2}\right) = \frac{\pi}{2}$$
    
- **Right Piece:**
    
    $$\lim_{t \to \infty} \left[ \arctan(x) \right]_0^t = \lim_{t \to \infty} (\arctan(t) - \arctan(0))$$
    
    Since $\lim_{t \to \infty} \arctan(t) = \frac{\pi}{2}$:
    
    $$= \frac{\pi}{2} - 0 = \frac{\pi}{2}$$
    

#### **Step 3: Combine**

Since both individual pieces converged to finite values, add them together:

$$\frac{\pi}{2} + \frac{\pi}{2} = \pi$$

### Sample Problem 2: Hidden Interior Discontinuity (Type II Splitting)

**Problem:** Structurally execute and evaluate the following integral:

$$\int_{0}^{3} \frac{1}{(x-1)^{2/3}} \, dx$$

#### **Step 1: Structural Setup**

The bounds ($0$ and $3$) look normal, but the denominator goes to zero at $x = 1$. Because $1$ lies directly inside the interval $[0, 3]$, you must split the domain at $x = 1$:

$$\int_{0}^{3} \frac{1}{(x-1)^{2/3}} \, dx = \lim_{b \to 1^-} \int_{0}^{b} (x-1)^{-2/3} \, dx + \lim_{c \to 1^+} \int_{c}^{3} (x-1)^{-2/3} \, dx$$

#### **Step 2: Integration and Limit Execution**

Using the power rule, the antiderivative is $3(x-1)^{1/3}$.

- **Left Piece (Approaching 1 from the left):**
    
    $$\lim_{b \to 1^-} \left[ 3(x-1)^{1/3} \right]_0^b = \lim_{b \to 1^-} \left( 3(b-1)^{1/3} - 3(0-1)^{1/3} \right)$$
    
    $$= 3(0) - 3(-1) = 3$$
    
- **Right Piece (Approaching 1 from the right):**
    
    $$\lim_{c \to 1^+} \left[ 3(x-1)^{1/3} \right]_c^3 = \lim_{c \to 1^+} \left( 3(3-1)^{1/3} - 3(c-1)^{1/3} \right)$$
    
    $$= 3(2)^{1/3} - 3(0) = 3\sqrt[3]{2}$$
    

#### **Step 3: Combine**

Both sections converge independently, so the total integral converges to their sum:

$$3 + 3\sqrt[3]{2}$$

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Electrical Engineering & Signal Processing (Total Signal Energy)]]
[[Electrical Engineering & Signal Processing (Total Signal Energy) Solution]]


### Engineering Problem 2: [[Thermal & Mechanical Engineering (Point-Source Stress Fields)]]
[[Thermal & Mechanical Engineering (Point-Source Stress Fields) Solution]]


### Engineering Problem 3: [[Safety & Reliability Engineering (Multi-Phase System Risk Lifecycle)]]
[[Safety & Reliability Engineering (Multi-Phase System Risk Lifecycle) Solution]]

#### Worked Example
B. Determine convergence for each of the integrals below.
3. $\int_{0}^{\infty}\frac{x}{x^{5}+1}dx$

##### Solution
###### **Problem**

Determine whether the following improper integral converges or diverges:

$$\int_{0}^{\infty}\frac{x}{x^{5}+1}dx$$

###### **Step-by-Step Solution**

###### **Step 1: Check for hidden discontinuities**

Before looking at the infinity symbol, we must check if the denominator ever becomes zero in our interval $[0, \infty)$.

$$x^5 + 1 = 0 \implies x^5 = -1 \implies x = -1$$

Since $x = -1$ is completely outside our integration interval of $0$ to $\infty$, the function is perfectly continuous across the entire region. The only reason this integral is improper is due to the upper limit of infinity ($\infty$).

###### **Step 2: Split the integral**

To easily compare our function to a standard $p$-test fraction, it is best to isolate the "infinite tail" behavior. We can split the integral at a convenient positive number, like $1$:

$$\int_{0}^{\infty}\frac{x}{x^{5}+1}dx = \int_{0}^{1}\frac{x}{x^{5}+1}dx + \int_{1}^{\infty}\frac{x}{x^{5}+1}dx$$

- **The first part ($\int_{0}^{1}$):** This is a normal, proper definite integral of a continuous function over a closed interval. It is guaranteed to equal a finite number, meaning it **converges** automatically.

- **The second part ($\int_{1}^{\infty}$):** This is the improper part we need to test.


###### **Step 3: Set up the Direct Comparison Test (DCT)**

Let's analyze how the improper function behaves when $x$ gets very large. In the denominator ($x^5 + 1$), the $+1$ becomes completely insignificant compared to $x^5$. Therefore:

$$\frac{x}{x^5 + 1} \approx \frac{x}{x^5} = \frac{1}{x^4}$$

Let's turn this logic into a formal mathematical inequality for any $x \ge 1$:

1. We know that:

$$x^5 + 1 > x^5$$

2. Taking the reciprocal flips the inequality sign:

$$\frac{1}{x^5 + 1} < \frac{1}{x^5}$$

3. Multiplying both sides by the positive variable $x$ gives:

$$\frac{x}{x^5 + 1} < \frac{x}{x^5} = \frac{1}{x^4}$$


###### **Step 4: Apply the $p$-test to the larger function**

Now we test the larger function, $\frac{1}{x^4}$, on our infinite interval:

$$\int_{1}^{\infty}\frac{1}{x^4}dx$$

Using the **$p$-test rule** (which states that $\int_{1}^{\infty} \frac{1}{x^p} dx$ converges if $p > 1$):

- Here, $p = 4$.

- Since $4 > 1$, this larger integral **converges**.


###### **Step 5: Conclude using DCT**

According to the Direct Comparison Test, if the area under a _larger_ function is finite (converges), then the area under our _smaller_ function must also be finite (converges).

- Since $\int_{1}^{\infty}\frac{1}{x^4}dx$ converges, then $\int_{1}^{\infty}\frac{x}{x^{5}+1}dx$ **converges**.

- Since both the proper part and the improper part converge, the entire original integral converges.


###### **Conclusion**

The improper integral **converges**.

**Final Answer:** The integral **converges**.
#### Active Practice Problem
B. Determine convergence for each of the integrals below.
4. $\int_{2}^{\infty}\frac{1}{\ln(x)}dx$ (Hint: $\ln(x) < x$ on $(2, \infty)$)

##### Workspace

##### Solution
###### **Problem**

Determine whether the following improper integral converges or diverges:

$$\int_{2}^{\infty}\frac{1}{\ln(x)}dx \quad \left(\text{Hint: } \ln(x) < x \text{ on } (2, \infty)\right)$$

###### **Step-by-Step Solution**

###### **Step 1: Check for hidden discontinuities**

First, look at the denominator, $\ln(x)$. The natural logarithm equals $0$ when $x = 1$. Because our interval of integration starts at $2$ and goes to infinity ($[2, \infty)$), the value $x = 1$ is safely outside the region. The function is completely continuous on this interval, meaning it is only improper because of the infinite upper limit.

###### **Step 2: Use the hint to build a comparison inequality**

We are given the helpful hint that for all $x > 2$:

$$\ln(x) < x$$

Since we are dealing with values of $x \ge 2$, both $\ln(x)$ and $x$ are positive numbers. When you take the reciprocal of both sides of an inequality involving positive numbers, the inequality sign flips:

$$\frac{1}{\ln(x)} > \frac{1}{x}$$

This tells us that our original function, $\frac{1}{\ln(x)}$, is strictly **larger** than the function $\frac{1}{x}$ on our entire interval.

###### **Step 3: Test the smaller function for convergence**

Now let's look at the improper integral of the **smaller** function from $2$ to $\infty$:

$$\int_{2}^{\infty}\frac{1}{x}dx$$

We can evaluate this by writing it as a limit:

$$\lim_{t \to \infty} \int_{2}^{t}\frac{1}{x}dx = \lim_{t \to \infty} \left[ \ln(x) \right]_{2}^{t}$$

$$= \lim_{t \to \infty} \left( \ln(t) - \ln(2) \right)$$

As $t$ approaches infinity, $\ln(t)$ also grows towards infinity without bound:

$$\infty - \ln(2) = \infty$$

Because the limit is infinite, the smaller integral $\int_{2}^{\infty}\frac{1}{x}dx$ **diverges**.

_(Note: You can also instantly know this diverges by the $p$-test rule, where $p = 1$.)_

###### **Step 4: Apply the Direct Comparison Test (DCT)**

The Direct Comparison Test states the following logic:

- If a _larger_ function converges, the _smaller_ function must also converge.

- If a _smaller_ function diverges (approaches infinity), the _larger_ function is forced to blow up to infinity and **diverge** as well.


Since our smaller function's area is infinite ($\int_{2}^{\infty}\frac{1}{x}dx = \infty$), and our original function is even larger ($\frac{1}{\ln(x)} > \frac{1}{x}$), the area under our original function must also be infinite.

###### **Conclusion**

By the Direct Comparison Test, the improper integral **diverges**.

**Final Answer:** The integral **diverges**.

### Regroup 3
- Verify calculations and mathematical reasoning.

### Synthesis Wrap-up
- Core takeaways from Session 18 and overview of homework homework assignment.
