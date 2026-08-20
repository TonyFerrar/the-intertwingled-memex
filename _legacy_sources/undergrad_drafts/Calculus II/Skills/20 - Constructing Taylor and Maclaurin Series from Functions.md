# Skill 1: Constructing Taylor and Maclaurin Series from Functions

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
