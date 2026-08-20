# Skill 2: Using Polynomials to Approximate Non-Arithmetic Values

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
