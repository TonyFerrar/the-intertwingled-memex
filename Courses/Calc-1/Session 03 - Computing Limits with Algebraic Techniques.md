---
title: "Session 03 - Computing Limits with Algebraic Techniques"
type: course-session
course: MATH-181
semester: Fall 2026
publish: true
cssclasses: []
updated: 2026-08-18
---

# Session 03 - Computing Limits with Algebraic Techniques

> [!abstract] Session Objectives & Overview
> By the end of this session, you will be able to:
> - Applying Limit Laws
> - Evaluating Common Limits & One-Sided Piecewise Limits
> - Analytical & Algebraic Techniques

## Timeline & Session Breakdown

### 00:00 - 00:10 (10 mins) — Micro-Lecture: Motivation & Theory
> [!example] Engineering Context: Predicting System Trends
> In this session, we investigate the mathematical principles of **Computing Limits with Algebraic Techniques** and explore how engineers apply these concepts to analyze real-world physical and structural systems.

### 00:10 - 00:25 (15 mins) — Skill Block 1: Applying Limit Laws
> [!note]- Theory & Derivations
> **Core Concept:** If the individual limits $\lim_{x\to a} f(x)$ and $\lim_{x\to a} g(x)$ both exist, complex mathematical operations can be cleanly evaluated by distributing the limit operator across the individual functions using basic algebraic properties.
> 
> ---
> 
> ## 1. Fundamental Limit Laws
> 
> Assuming that $\lim_{x\rightarrow a}f(x) = L$ and $\lim_{x\rightarrow a}g(x) = M$ (where $L$ and $M$ are real numbers):
> 
> * **Sum Law:** The limit of a sum is the sum of the limits.
>   $$\lim_{x\rightarrow a}(f(x)+g(x)) = \lim_{x\rightarrow a}f(x) + \lim_{x\rightarrow a}g(x) = L + M$$
> * **Difference Law:** The limit of a difference is the difference of the limits.
>   $$\lim_{x\rightarrow a}(f(x)-g(x)) = \lim_{x\rightarrow a}f(x) - \lim_{x\rightarrow a}g(x) = L - M$$
> * **Constant Multiple Law:** The limit of a constant times a function is the constant times the limit.
>   $$\lim_{x\rightarrow a}[c \cdot f(x)] = c \cdot \lim_{x\rightarrow a}f(x) = c \cdot L \quad \text{(where } c \text{ is a constant)}$$
> * **Product Law:** The limit of a product is the product of the limits.
>   $$\lim_{x\rightarrow a}(f(x)\cdot g(x)) = \left(\lim_{x\rightarrow a}f(x)\right) \cdot \left(\lim_{x\rightarrow a}g(x)\right) = L \cdot M$$
> * **Quotient Law:** The limit of a quotient is the quotient of the limits, provided the denominator's limit is non-zero.
>   $$\lim_{x\rightarrow a}\frac{f(x)}{g(x)} = \frac{\lim_{x\rightarrow a}f(x)}{\lim_{x\rightarrow a}g(x)} = \frac{L}{M} \quad \text{(provided } M \neq 0\text{)}$$
> * **Power Law:** The limit of a function raised to a fractional power is the limit raised to that power.
>   $$\lim_{x\rightarrow a}(f(x))^{\frac{n}{m}} = \left(\lim_{x\rightarrow a}f(x)\right)^{\frac{n}{m}} = L^{\frac{n}{m}} \quad \text{(where } n, m \text{ are integers and } m \neq 0\text{)}$$
> 
> ### 💡 Important Instructor Note:
> Limit laws *only* apply if the individual component limits exist as finite numbers. If an individual limit yields $\infty$ or an indeterminate form like $\frac{0}{0}$, you cannot separate them using these laws until the expression is simplified algebraically.
> 
> ---
> 
> ## 2. Standard Activity Problems
> 
> **Given Baseline Conditions:**
> * $\lim_{x\to1}f(x) = 2$
> * $\lim_{x\to1}g(x) = -3$
> * $\lim_{x\to1}h(x) = 5$
> 
> ### Problem 1(a) — Sum Law
> Evaluate $\lim_{x\to1}(f(x)+g(x))$:
> $$\lim_{x\to1}f(x) + \lim_{x\to1}g(x) = 2 + (-3) = -1$$
> **Answer:** $-1$
> 
> ### Problem 1(b) — Difference Law
> Evaluate $\lim_{x\to1}(g(x)-h(x))$:
> $$\lim_{x\to1}g(x) - \lim_{x\to1}h(x) = -3 - 5 = -8$$
> **Answer:** $-8$
> 
> ### Problem 1(c) — Product Law
> Evaluate $\lim_{x\to1}(f(x)\cdot h(x))$:
> $$\left(\lim_{x\to1}f(x)\right) \cdot \left(\lim_{x\to1}h(x)\right) = 2 \cdot 5 = 10$$
> **Answer:** $10$
> 
> ### Problem 1(d) — Power & Constant Multiple Laws
> Evaluate $\lim_{x\to1}(3f(x))^{2}$:
> $$\left[ 3 \cdot \lim_{x\to1}f(x) \right]^2 = [3 \cdot 2]^2 = 6^2 = 36$$
> **Answer:** $36$
> 
> ### Problem 1(e) — Quotient Law
> Evaluate $\lim_{x\to1}\left(\frac{g(x)}{h(x)}\right)$ (Note: $\lim_{x\to1}h(x) = 5 \neq 0$):
> $$\frac{\lim_{x\to1}g(x)}{\lim_{x\to1}h(x)} = \frac{-3}{5} = -\frac{3}{5}$$
> **Answer:** $-\frac{3}{5}$
> 
> ---
> 
> ## 3. Real-Life & Engineering Application Problems
> 
> Real-world engineering quantities are often combinations of separate variables. We can use Limit Laws to predict how systems behave as they approach stable boundaries.
> 
> ### Application Example 1: [[Rocket Payload Velocity (Product Law)]]
> [[Rocket Payload Velocity (Product Law) Solution]]
> 
> 
> ---
> 
> ### Application Example 2: [[Electrical Circuit Mesh Network (Sum & Difference Laws)]]
> [[Electrical Circuit Mesh Network (Sum & Difference Laws) Solution]]
> 
> 
> ---
> 
> ### Application Example 3: [[Chemical Fluid Concentration (Quotient Law)]]
> [[Chemical Fluid Concentration (Quotient Law) Solution]]


#### Worked Example
1. Given $\lim_{x\to1}f(x)=2$, $\lim_{x\to1}g(x)=-3$, and $\lim_{x\to1}h(x)=5$, compute the following:

(a) $\lim_{x\to1}(f(x)+g(x))$

(b) $\lim_{x\to1}(g(x)-h(x))$

(c) $\lim_{x\to1}(f(x)\cdot h(x))$

(d) $\lim_{x\to1}(3f(x))^{2}$

(e) $\lim_{x\to1}\left(\frac{g(x)}{h(x)}\right)$

> [!check]- Worked Solution
> Here are the step-by-step solutions for the limit problems using basic limit laws.
> 
> Given the following limits:
> * $\lim_{x\to1}f(x)=2$
> * $\lim_{x\to1}g(x)=-3$
> * $\lim_{x\to1}h(x)=5$
> 
> ---
> 
> ### **(a) $\lim_{x\to1}(f(x)+g(x))$**
> 
> Using the **Sum Law**, we can separate the limits:
> $$\lim_{x\to1}(f(x)+g(x)) = \lim_{x\to1}f(x) + \lim_{x\to1}g(x)$$
> 
> Substitute the given values:
> $$2 + (-3) = -1$$
> 
> **Answer:** $-1$
> 
> ---
> 
> ### **(b) $\lim_{x\to1}(g(x)-h(x))$**
> 
> Using the **Difference Law**, we can separate the limits:
> $$\lim_{x\to1}(g(x)-h(x)) = \lim_{x\to1}g(x) - \lim_{x\to1}h(x)$$
> 
> Substitute the given values:
> $$-3 - 5 = -8$$
> 
> **Answer:** $-8$
> 
> ---
> 
> ### **(c) $\lim_{x\to1}(f(x)\cdot h(x))$**
> 
> Using the **Product Law**, we can multiply the limits:
> $$\lim_{x\to1}(f(x)\cdot h(x)) = \left(\lim_{x\to1}f(x)\right) \cdot \left(\lim_{x\to1}h(x)\right)$$
> 
> Substitute the given values:
> $$2 \cdot 5 = 10$$
> 
> **Answer:** $10$
> 
> ---
> 
> ### **(d) $\lim_{x\to1}(3f(x))^{2}$**
> 
> Using the **Power Law** and the **Constant Multiple Law**, we bring the limit inside the square and pull out the constant coefficient:
> $$\lim_{x\to1}(3f(x))^{2} = \left[ 3 \cdot \lim_{x\to1}f(x) \right]^2$$
> 
> Substitute the given value for $f(x)$:
> $$\left[ 3 \cdot 2 \right]^2 = 6^2 = 36$$
> 
> **Answer:** $36$
> 
> ---
> 
> ### **(e) $\lim_{x\to1}\left(\frac{g(x)}{h(x)}\right)$**
> 
> Using the **Quotient Law** (since the limit of the denominator is not zero):
> $$\lim_{x\to1}\left(\frac{g(x)}{h(x)}\right) = \frac{\lim_{x\to1}g(x)}{\lim_{x\to1}h(x)}$$
> 
> Substitute the given values:
> $$\frac{-3}{5} = -\frac{3}{5}$$
> 
> **Answer:** $-\frac{3}{5}$ (or $-0.6$)

#### Active Practice Problem
2. Consider the piecewise-defined function:

$$f(x)=\begin{cases}0 & : x<-5\\ \sqrt{25-x^{2}} & : -5\le x<4\\ 5x & : x\ge4\end{cases}$$


Determine the following limits:

(a) $\lim_{x\to-5^{+}}f(x)$

(b) $\lim_{x\to-5^{-}}f(x)$

(c) $\lim_{x\to-5}f(x)$

(d) $\lim_{x\to4^{+}}f(x)$

(e) $\lim_{x\to4^{-}}f(x)$

(f) $\lim_{x\to4}f(x)$

---

> [!workspace] Student Practice Space
> 

> [!check]- Solution
> $$f(x) = \begin{cases} 0 & : x < -5 \\ \sqrt{25 - x^2} & : -5 \le x < 4 \\ 5x & : x \ge 4 \end{cases}$$
> 
> ---
> 
> ### **Evaluating Limits at $x = -5$**
> 
> #### **(a) $\lim_{x\to-5^{+}}f(x)$**
> This is a right-sided limit, meaning $x$ approaches $-5$ from values greater than $-5$ ($x > -5$). We use the middle piece of the function:
> $$\lim_{x\to-5^{+}}f(x) = \lim_{x\to-5^{+}}\sqrt{25 - x^2}$$
> 
> Substitute $x = -5$:
> $$\sqrt{25 - (-5)^2} = \sqrt{25 - 25} = \sqrt{0} = 0$$
> 
> **Answer:** $0$
> 
> #### **(b) $\lim_{x\to-5^{-}}f(x)$**
> This is a left-sided limit, meaning $x$ approaches $-5$ from values less than $-5$ ($x < -5$). We use the top piece of the function:
> $$\lim_{x\to-5^{-}}f(x) = \lim_{x\to-5^{-}}(0) = 0$$
> 
> **Answer:** $0$
> 
> #### **(c) $\lim_{x\to-5}f(x)$**
> For a two-sided limit to exist, the left-sided and right-sided limits must be equal:
> $$\lim_{x\to-5^{-}}f(x) = \lim_{x\to-5^{+}}f(x) = 0$$
> 
> Since both sides match, the limit exists and equals that value.
> 
> **Answer:** $0$
> 
> ---
> 
> ### **Evaluating Limits at $x = 4$**
> 
> #### **(d) $\lim_{x\to4^{+}}f(x)$**
> This is a right-sided limit, meaning $x$ approaches $4$ from values greater than $4$ ($x > 4$). We use the bottom piece of the function:
> $$\lim_{x\to4^{+}}f(x) = \lim_{x\to4^{+}}(5x)$$
> 
> Substitute $x = 4$:
> $$5(4) = 20$$
> 
> **Answer:** $20$
> 
> #### **(e) $\lim_{x\to4^{-}}f(x)$**
> This is a left-sided limit, meaning $x$ approaches $4$ from values less than $4$ ($x < 4$). We use the middle piece of the function:
> $$\lim_{x\to4^{-}}f(x) = \lim_{x\to4^{-}}\sqrt{25 - x^2}$$
> 
> Substitute $x = 4$:
> $$\sqrt{25 - (4)^2} = \sqrt{25 - 16} = \sqrt{9} = 3$$
> 
> **Answer:** $3$
> 
> #### **(f) $\lim_{x\to4}f(x)$**
> We check if the left-sided and right-sided limits are equal:
> * $\lim_{x\to4^{-}}f(x) = 3$
> * $\lim_{x\to4^{+}}f(x) = 20$
> 
> Since $3 \neq 20$, the two-sided limit does not exist (DNE).
> 
> **Answer:** Does Not Exist (DNE)

> [!info]- Extra Practice & Extensions
> ##### Extension Problem (Activity)
> 3. $\lim_{x\to0}(x-8)^{2/3}$
> 
> > [!check]- Solution
> > $$\lim_{x\to0}(x-8)^{2/3}$$
> > 
> > ---
> > 
> > **Solution by Direct Substitution** Since the function $f(x) = (x-8)^{2/3}$ is continuous at $x = 0$, we can evaluate the limit by directly substituting $x = 0$ into the expression: $$\lim_{x\to0}(x-8)^{2/3} = (0 - 8)^{2/3}$$ $$= (-8)^{2/3}$$
> > 
> > ---
> > 
> > **Simplifying the Fractional Exponent** A fractional exponent of $\frac{2}{3}$ means we take the cube root first, and then square the result: $$(-8)^{2/3} = \left(\sqrt[3]{-8}\right)^2$$ 1. Evaluate the cube root: $$\sqrt[3]{-8} = -2 \quad \text{(since } (-2)^3 = -8\text{)}$$ 2. Square the result: $$(-2)^2 = 4$$
> > 
> > 
> > **Answer:** $4$
> 

### 00:25 - 00:30 (5 mins) — Regroup 1: Class Discussion
- Review common misconceptions and clarify key notations.

### 00:30 - 00:45 (15 mins) — Skill Block 2: Evaluating Common Limits & One-Sided Piecewise Limits
> [!note]- Theory & Derivations
> **Core Concept:** A limit describes how a function behaves as it *approaches* a target input value, rather than the function's value exactly at that point. While common functions (like constants or identity functions) evaluate predictably, piecewise functions require analyzing independent left-handed and right-handed paths to determine if an overall limit exists at a domain boundary.
> 
> ---
> 
> ## 1. Fundamental Rules & Core Definitions
> 
> ### Common Default Limits
> * **Constant Functions:** The limit of a constant function is simply the constant itself.
>   $$\lim_{x\rightarrow a} c = c$$
> * **Identity Function:** The limit of the variable $x$ as it approaches $a$ is simply $a$.
>   $$\lim_{x\rightarrow a} x = a$$
> 
> ### The Existence Theorem for Limits
> For an overall, two-sided limit to exist at a point $x = a$, the function must approach the exact same real value from both the left and right directions. 
> 
> $$\lim_{x\rightarrow a^{-}} f(x) = L \quad \text{and} \quad \lim_{x\rightarrow a^{+}} f(x) = L \iff \lim_{x\rightarrow a} f(x) = L$$
> 
> * **Left-Sided Limit ($\lim_{x\to a^{-}}$):** Approaching $a$ from values strictly less than $a$ ($x < a$).
> * **Right-Sided Limit ($\lim_{x\to a^{+}}$):** Approaching $a$ from values strictly greater than $a$ ($x > a$).
> * **Does Not Exist (DNE):** If the left-sided limit does not match the right-sided limit ($L \neq M$), then the overall two-sided limit **does not exist**.
> 
> ---
> 
> ## 2. Standard Activity Problems
> 
> **Context Function:** Consider the piecewise-defined function:
> $$f(x)=\begin{cases}0 & : x<-5\\ \sqrt{25-x^{2}} & : -5\le x<4\\ 5x & : x\ge4\end{cases}$$
> 
> 
> ### Problem 2(a) — Right-Sided Limit at a Boundary
> Evaluate $\lim_{x\to-5^{+}}f(x)$:
> * **Step-by-step:** The notation $x \to -5^{+}$ means approaching from the right ($x > -5$). We must use the middle interval equation piece.
> * **Evaluation:**
>   $$\lim_{x\to-5^{+}}\sqrt{25-x^{2}} = \sqrt{25 - (-5)^2} = \sqrt{25 - 25} = 0$$
> **Answer:** $0$
> 
> ### Problem 2(b) — Left-Sided Limit at a Boundary
> Evaluate $\lim_{x\to-5^{-}}f(x)$:
> * **Step-by-step:** The notation $x \to -5^{-}$ means approaching from the left ($x < -5$). We use the top interval equation piece.
> * **Evaluation:**
>   $$\lim_{x\to-5^{-}}(0) = 0$$
> **Answer:** $0$
> 
> ### Problem 2(c) — Two-Sided Limit Verification
> Evaluate $\lim_{x\to-5}f(x)$:
> * **Step-by-step:** Check if the left-sided limit matches the right-sided limit.
> * **Evaluation:** Since $\lim_{x\to-5^{-}}f(x) = 0$ and $\lim_{x\to-5^{+}}f(x) = 0$, they are equal.
> **Answer:** $0$
> 
> ### Problem 2(d) — Right-Sided Limit at Second Boundary
> Evaluate $\lim_{x\to4^{+}}f(x)$:
> * **Step-by-step:** Approaching from the right ($x > 4$). We use the bottom interval equation piece.
> * **Evaluation:**
>   $$\lim_{x\to4^{+}}(5x) = 5(4) = 20$$
> **Answer:** $20$
> 
> ### Problem 2(e) — Left-Sided Limit at Second Boundary
> Evaluate $\lim_{x\to4^{-}}f(x)$:
> * **Step-by-step:** Approaching from the left ($x < 4$). We use the middle interval equation piece.
> * **Evaluation:**
>   $$\lim_{x\to4^{-}}\sqrt{25-x^{2}} = \sqrt{25 - (4)^2} = \sqrt{25 - 16} = \sqrt{9} = 3$$
> **Answer:** $3$
> 
> ### Problem 2(f) — Two-Sided Limit Discontinuity Check
> Evaluate $\lim_{x\to4}f(x)$:
> * **Step-by-step:** Check if the left-sided limit matches the right-sided limit.
> * **Evaluation:** $\lim_{x\to4^{-}}f(x) = 3$ whereas $\lim_{x\to4^{+}}f(x) = 20$. Since $3 \neq 20$, the boundaries do not meet.
> **Answer:** Does Not Exist (DNE)
> 
> ---
> 
> ## 3. Real-Life & Engineering Application Problems
> 
> ### Application Example 1: [[Electrical Step Function (Surge Protection Circuit)]]
> [[Electrical Step Function (Surge Protection Circuit) Solution]]
> An electrical engineer designs a protective power switch that triggers instantly when voltage surges past a safe timeline. The electric current profile $I(t)$ (in amperes) relative to initialization time $t = 2$ milliseconds is governed by this piecewise setup:
> 
> $$I(t) = \begin{cases} 4 & : t < 2 \\ t^2 + 5 & : t \ge 2 \end{cases}$$
> 
> Determine whether the electrical signal is clean and continuous or if a sudden gap occurs by evaluating:
> 1. $\lim_{t\to2^{-}} I(t)$
> 2. $\lim_{t\to2^{+}} I(t)$
> 3. $\lim_{t\to2} I(t)$
> 
> **Solution:**
> 1. **Left-sided limit ($t < 2$):** Use the constant equation piece.
>    $$\lim_{t\to2^{-}}(4) = 4\text{ A}$$
> 2. **Right-sided limit ($t > 2$):** Use the polynomial equation piece.
>    $$\lim_{t\to2^{+}}(t^2 + 5) = (2)^2 + 5 = 4 + 5 = 9\text{ A}$$
> 3. **Two-sided limit comparison:**
>    $$\lim_{t\to2^{-}} I(t) = 4 \quad \neq \quad \lim_{t\to2^{+}} I(t) = 9$$
> 
> **Answer:** The left-hand limit is $4\text{ A}$, the right-hand limit is $9\text{ A}$, and the overall limit **Does Not Exist (DNE)** due to a $5\text{-ampere}$ current jump at the switch threshold.
> 
> ---
> 
> ### Application Example 2: [[Material Tensile Failure (Mechanical Engineering)]]
> [[Material Tensile Failure (Mechanical Engineering) Solution]]
> A structural testing laboratory pulls a specialized synthetic carbon wire to measure stress resistance up to its critical physical elongation limit of $x = 10\text{ mm}$. The internal material stress function $S(x)$ matches this piecewise layout:
> 
> $$S(x) = \begin{cases} 8x & : 0 \le x < 10 \\ 0 & : x \ge 10 \quad \text{(The wire snaps completely)} \end{cases}$$
> 
> Analyze the system boundaries around the failure point by evaluating:
> 1. $\lim_{x\to10^{-}} S(x)$
> 2. $\lim_{x\to10^{+}} S(x)$
> 
> **Solution:**
> 1. **Left-sided limit ($x \to 10^{-}$):** This tracks the stress climbing inside the wire right up to the split second before it fails ($x < 10$).
>    $$\lim_{x\to10^{-}}(8x) = 8(10) = 80\text{ MPa}$$
> 2. **Right-sided limit ($x \to 10^{+}$):** This tracks the physical status after the snapping threshold has been passed ($x \ge 10$).
>    $$\lim_{x\to10^{+}}(0) = 0\text{ MPa}$$
> 
> **Answer:** The limit as you approach the failure point from the structural side is $80\text{ MPa}$, while from the post-snap side it is $0\text{ MPa}$.


#### Worked Example
4. $\lim_{x\to-1}\frac{x^{2}-3x-4}{x^{2}+2x-3}$

> [!check]- Worked Solution
> $$\lim_{x\to-1}\frac{x^{2}-3x-4}{x^{2}+2x-3}$$
> ---
> ### **Step 1: Check with Direct Substitution**
> First, let's try substituting $x = -1$ directly into the rational function to see if it yields a determinate form:
> **Numerator:** $(-1)^2 - 3(-1) - 4 = 1 + 3 - 4 = 0$ *
> **Denominator:** $(-1)^2 + 2(-1) - 3 = 1 - 2 - 3 = -4$ Evaluating the full fraction gives: $$\frac{0}{-4} = 0$$
> **Conclusion** Because the denominator does not equal zero when $x = -1$, this is **not** an indeterminate form (like $\frac{0}{0}$). We do not need to factor or simplify the expression further. The function is continuous at $x = -1$, so direct substitution gives the final answer.
> 
> **Answer:** $0$

#### Active Practice Problem
5. $\lim_{x\to2}\frac{x^{2}+3x-10}{x-2}$

> [!workspace] Student Practice Space
> 

> [!check]- Solution
> $$\lim_{x\to2}\frac{x^{2}+3x-10}{x-2}$$
> 
> ---
> 
> 
> **Step 1: Check with Direct Substitution** First, let's try substituting $x = 2$ directly into the function: *
> **Numerator:** $(2)^2 + 3(2) - 10 = 4 + 6 - 10 = 0$ *
> **Denominator:** $2 - 2 = 0$ This yields the indeterminate form **$\frac{0}{0}$**. This means a limit likely exists, but we must simplify the expression (algebraically eliminate the hole) to find it.
> 
> ---
> 
> **Step 2: Factor the Numerator** We need to find two numbers that multiply to $-10$ and add up to $3$. These numbers are $5$ and $-2$: $$x^2 + 3x - 10 = (x + 5)(x - 2)$$ Now rewrite the limit with the factored numerator: $$\lim_{x\to2}\frac{(x+5)(x-2)}{x-2}$$
> 
> ---
> 
> **Step 3: Simplify and Evaluate** Since $x \to 2$ means $x$ approaches 2 but is never exactly equal to 2, we can safely cancel out the common factor $(x - 2)$ from both the numerator and the denominator: $$\lim_{x\to2} (x + 5)$$ Now substitute $x = 2$ into the simplified expression: $$2 + 5 = 7$$
> 
> **Answer:** $7$

> [!info]- Extra Practice & Extensions
> ##### Extension Problem (Activity)
> 6. $\lim_{x\to1}\frac{x-1}{\sqrt{x}-1}$
> 
> > [!check]- Solution
> > $$\lim_{x\to1}\frac{x-1}{\sqrt{x}-1}$$
> > 
> > ---
> > 
> > ### **Step 1: Check with Direct Substitution**
> > 
> > First, let's substitute $x = 1$ directly into the expression:
> > 
> > * **Numerator:** $1 - 1 = 0$
> > * **Denominator:** $\sqrt{1} - 1 = 1 - 1 = 0$
> > 
> > This yields the indeterminate form **$\frac{0}{0}$**. This means a limit exists, but we need to eliminate the hole algebraically. There are two standard algebraic ways to solve this: **Method 1 (Rationalizing)** or **Method 2 (Factoring)**.
> > 
> > ---
> > 
> > ### **Method 1: Rationalizing the Denominator**
> > 
> > To clear the radical from the denominator, multiply both the numerator and denominator by the conjugate of the denominator, which is $(\sqrt{x} + 1)$:
> > 
> > $$\lim_{x\to1}\frac{x-1}{\sqrt{x}-1} \cdot \frac{\sqrt{x}+1}{\sqrt{x}+1}$$
> > 
> > Expand the denominator using the difference of squares formula $(a-b)(a+b) = a^2 - b^2$:
> > $$(\sqrt{x}-1)(\sqrt{x}+1) = (\sqrt{x})^2 - 1^2 = x - 1$$
> > 
> > Keep the numerator in factored form:
> > $$\lim_{x\to1}\frac{(x-1)(\sqrt{x}+1)}{x-1}$$
> > 
> > Cancel the common factor $(x-1)$ from the numerator and denominator:
> > $$\lim_{x\to1}(\sqrt{x}+1)$$
> > 
> > Now, evaluate by direct substitution:
> > $$\sqrt{1} + 1 = 1 + 1 = 2$$
> > 
> > ---
> > 
> > ### **Method 2: Factoring the Numerator**
> > 
> > Alternatively, you can view the numerator $(x - 1)$ as a difference of squares if you treat $x$ as $(\sqrt{x})^2$:
> > $$x - 1 = (\sqrt{x})^2 - 1^2 = (\sqrt{x}-1)(\sqrt{x}+1)$$
> > 
> > Rewrite the limit using this substitution:
> > $$\lim_{x\to1}\frac{(\sqrt{x}-1)(\sqrt{x}+1)}{\sqrt{x}-1}$$
> > 
> > Cancel out the common factor $(\sqrt{x}-1)$:
> > $$\lim_{x\to1}(\sqrt{x}+1)$$
> > 
> > Evaluate by direct substitution:
> > $$1 + 1 = 2$$
> > 
> > **Answer:** $2$
> 

### 00:45 - 00:50 (5 mins) — Regroup 2: Reflection
- Reflect on the physical modeling applications and mathematical setups.

### 00:50 - 01:05 (15 mins) — Skill Block 3: Analytical & Algebraic Techniques
> [!note]- Theory & Derivations
> **Core Concept:** When presented with any limit, direct substitution is always the mandatory first step in trying to evaluate it This simply means plugging the $x$-value being approached directly into the function. If the result of this substitution is a defined real number, the evaluation is complete and you are done. However, if direct substitution yields the invalid output of $\frac{0}{0}$—known as an indeterminate form—it indicates a removable discontinuity (a hole) exists in the graph. In this scenario, you must use algebraic techniques to simplify the expression, isolate and cancel out the common factor causing the zero, and then apply direct substitution a second time to find the final limit.
> 
> ---
> 
> ## 1. Written Workflow for Analytical Limits
> 
> Rather than using a visual chart, follow this exact step-by-step verbal progression for every analytical limit problem:
> 
> 1. **Attempt Direct Substitution:** Take the target value $x = a$ and plug it into every variable instance in the function.
> 2. **Evaluate the Numerical Output:** * If the output is a standard real number, stop; you have successfully found the limit.
>    * If the denominator evaluates to non-zero while the numerator is zero, the final answer is simply zero.
>    * If the output results in the indeterminate form $\frac{0}{0}$, move to the next step.
> 1. **Select an Algebraic Manipulation Strategy:** Look closely at the mathematical structure of the function to choose your tool:
>    * **Factoring Strategy:** If the equation consists of standard polynomials, factor the numerator, denominator, or both to expose the hidden common factor.
>    * **Conjugate Rationalization Strategy:** If the equation contains a square root radical, multiply both the numerator and the denominator by the radical's conjugate expression.
>    * **Trigonometric Substitution Strategy:** If the equation uses transcendental terms like sine or cosine, apply a foundational identity to rewrite the variables.
> 1. **Execute Cancellation:** Mathematically cross out the identical zero-inducing factors from the top and bottom of the fraction.
> 2. **Final Re-Substitution:** Plug the target $x$-value back into the newly simplified remaining function to get your final real number answer.
> 
> ---
> 
> ## 2. Core Methodological Breakdowns
> 
> ### Core Archetype 1: The Factoring Method
> **Problem:** Evaluate $\lim_{x\to4} \frac{x^2 - 2x - 8}{x - 4}$
> 
> * **Step-by-step Execution:**
>   1. **Direct Substitution Check:** Plugging in $x = 4$ yields $\frac{4^2 - 2(4) - 8}{4 - 4} = \frac{16 - 8 - 8}{0} = \frac{0}{0}$, which is indeterminate
>   2. **Factor the Numerator:** Seek two integers that multiply to $-8$ and sum to $-2$. Those numbers are $-4$ and $+2$, rewriting the trinomial into binomial factors:
>      $$x^2 - 2x - 8 = (x - 4)(x + 2)$$
>   3. **Cancel and Re-substitute:** Cancel out the matching $(x - 4)$ zero-factor from the top and bottom, then evaluate the remaining expression:
>      $$\lim_{x\to4} \frac{(x - 4)(x + 2)}{x - 4} = \lim_{x\to4} (x + 2) = 4 + 2 = 6$$
> 
> **Why this problem is here:** This is the baseline strategy for solving algebraic limits when direct substitution fails. It teaches students to look for polynomial expansions first to reveal and eliminate hidden removable discontinuities.
> 
> ---
> 
> ### Core Archetype 2: The Conjugate Rationalization Method
> **Problem:** Evaluate $\lim_{x\to2} \frac{\sqrt{x + 2} - 2}{x - 2}$
> 
> * **Step-by-step Execution:**
>   1. **Direct Substitution Check:** Plugging in $x = 2$ yields $\frac{\sqrt{2 + 2} - 2}{2 - 2} = \frac{\sqrt{4} - 2}{0} = \frac{0}{0}$, which is indeterminate.
>   2. **Multiply by the Radical Conjugate:** Because a square root blocks basic factoring, multiply the top and bottom by the conjugate $(\sqrt{x + 2} + 2)$ to clear the radical
>      $$\lim_{x\to2} \frac{\sqrt{x + 2} - 2}{x - 2} \cdot \frac{\sqrt{x + 2} + 2}{\sqrt{x + 2} + 2} = \lim_{x\to2} \frac{(x + 2) - 4}{(x - 2)(\sqrt{x + 2} + 2)}$$
>   3. **Simplify and Cancel:** Simplify the numerator down to $(x - 2)$, then cancel this common group out entirely:
>      $$\lim_{x\to2} \frac{x - 2}{(x - 2)(\sqrt{x + 2} + 2)} = \lim_{x\to2} \frac{1}{\sqrt{x + 2} + 2}$$
>   4. **Re-substitute:** Plug $x = 2$ back into the remaining parts:
>      $$\frac{1}{\sqrt{2 + 2} + 2} = \frac{1}{\sqrt{4} + 2} = \frac{1}{2 + 2} = \frac{1}{4}$$
> 
> **Why this problem is here:** When standard polynomial factoring is impossible due to an active root, students must pivot to rationalization. This example demonstrates how the difference of squares identity forces radical terms to resolve so the canceling factor can be extracted.
> 
> ---
> 
> ### Core Archetype 3: The Trigonometric Identity Method
> **Problem:** Evaluate $\lim_{x\to0} \frac{\sin^2 x}{1 - \cos x}$
> 
> * **Step-by-step Execution:**
>   1. **Direct Substitution Check:** Plugging in $x = 0$ yields $\frac{\sin^2(0)}{1 - \cos(0)} = \frac{0}{1 - 1} = \frac{0}{0}$, which is indeterminate.
>   2. **Apply Pythagorean Identity:** Replace the numerator using the identity $\sin^2 x = 1 - \cos^2 x$:
>      $$\lim_{x\to0} \frac{1 - \cos^2 x}{1 - \cos x}$$
>   3. **Factor as a Difference of Squares:** Expand the numerator into $(1 - \cos x)(1 + \cos x)$ and cancel out the matching denominator factor
>      $$\lim_{x\to0} \frac{(1 - \cos x)(1 + \cos x)}{1 - \cos x} = \lim_{x\to0} (1 + \cos x)$$
>   4. **Re-substitute:** Safely compute the remaining terms using direct substitution:
>      $$1 + \cos(0) = 1 + 1 = 2$$
> 
> **Why this problem is here:** This problem bridges the gap between pure polynomial algebra and transcendental expressions. It shows students that trigonometric formulas serve an algebraic purpose in calculus: transforming a non-factorable function layout into a factorable difference-of-squares format.
> 
> ---
> 
> ## 3. Real-Life & Engineering Application Problems
> 
> ### Application Example 1: [[Fluid Dynamics — Flow Control Valve Restriction (Factoring Strategy)]]
> [[Fluid Dynamics — Flow Control Valve Restriction (Factoring Strategy) Solution]]
> 
> 
> ---
> 
> ### Application Example 2: [[Mechanical Engineering — Instantaneous Robot Arm Deflection (Conjugate Strategy)]]
> [[Mechanical Engineering — Instantaneous Robot Arm Deflection (Conjugate Strategy) Solution]]


#### Worked Example
7. $\lim_{x\to3}\frac{\sqrt{x^{2}+7}-4}{x-3}$

> [!check]- Worked Solution
> $$\lim_{x\to3}\frac{\sqrt{x^{2}+7}-4}{x-3}$$
> 
> ---
> 
> ### **Step 1: Check with Direct Substitution**
> 
> First, let's substitute $x = 3$ directly into the function:
> 
> * **Numerator:** $\sqrt{3^2 + 7} - 4 = \sqrt{9 + 7} - 4 = \sqrt{16} - 4 = 4 - 4 = 0$
> * **Denominator:** $3 - 3 = 0$
> 
> This yields the indeterminate form **$\frac{0}{0}$**. This means a limit exists, but we need to manipulate the expression algebraically to eliminate the shared zero factor $(x-3)$.
> 
> ---
> 
> ### **Step 2: Rationalize the Numerator**
> 
> To eliminate the radical expression, multiply both the numerator and the denominator by the conjugate of the numerator, which is $\left(\sqrt{x^2+7} + 4\right)$:
> 
> $$\lim_{x\to3}\frac{\sqrt{x^2+7}-4}{x-3} \cdot \frac{\sqrt{x^2+7}+4}{\sqrt{x^2+7}+4}$$
> 
> ---
> 
> ### **Step 3: Simplify the Expression**
> 
> 1. Expand the numerator using the difference of squares identity $(a-b)(a+b) = a^2 - b^2$:
> $$(\sqrt{x^2+7}-4)(\sqrt{x^2+7}+4) = (\sqrt{x^2+7})^2 - 4^2$$
> $$= (x^2 + 7) - 16$$
> $$= x^2 - 9$$
> 
> 2. Keep the denominator in factored form (do not distribute):
> $$\lim_{x\to3}\frac{x^2-9}{(x-3)(\sqrt{x^2+7}+4)}$$
> 
> 3. Factor the new numerator $x^2 - 9$ as a difference of squares:
> $$x^2 - 9 = (x-3)(x+3)$$
> 
> 4. Rewrite the limit:
> $$\lim_{x\to3}\frac{(x-3)(x+3)}{(x-3)(\sqrt{x^2+7}+4)}$$
> 
> ---
> 
> ### **Step 4: Cancel and Evaluate**
> 
> Cancel out the common factor $(x-3)$ from both the numerator and denominator:
> $$\lim_{x\to3}\frac{x+3}{\sqrt{x^2+7}+4}$$
> 
> Now, evaluate the limit by substituting $x = 3$:
> $$\frac{3+3}{\sqrt{3^2+7}+4} = \frac{6}{\sqrt{16}+4}$$
> 
> $$\frac{6}{4+4} = \frac{6}{8} = \frac{3}{4}$$
> 
> **Answer:** $\frac{3}{4}$ (or $0.75$)

#### Active Practice Problem
8. $\lim_{x\to0}\frac{e^{2x}-1}{2e^{x}-2}$

> [!workspace] Student Practice Space
> 

> [!check]- Solution
> $$\lim_{x\to0}\frac{e^{2x}-1}{2e^{x}-2}$$
> 
> ---
> 
> ### **Step 1: Check with Direct Substitution**
> 
> First, let's substitute $x = 0$ directly into the expression, remembering that $e^0 = 1$:
> 
> * **Numerator:** $e^{2(0)} - 1 = e^0 - 1 = 1 - 1 = 0$
> * **Denominator:** $2e^0 - 2 = 2(1) - 2 = 0$
> 
> This yields the indeterminate form **$\frac{0}{0}$**. This means a limit exists, but we need an algebraic approach to eliminate the shared factor causing the zeros.
> 
> ---
> 
> ### **Method: Factoring (Algebraic Method)**
> 
> 1. **Factor the Denominator:**
> Pull out the greatest common factor, which is $2$:
> $$2e^x - 2 = 2(e^x - 1)$$
> 
> 2. **Factor the Numerator:**
> Notice that $e^{2x}$ can be written as $(e^x)^2$. This makes the numerator a difference of squares ($a^2 - b^2 = (a-b)(a+b)$):
> $$e^{2x} - 1 = (e^x)^2 - 1^2 = (e^x - 1)(e^x + 1)$$
> 
> 3. **Rewrite and Simplify the Limit:**
> Substitute these factored forms back into the limit expression:
> $$\lim_{x\to0}\frac{(e^x - 1)(e^x + 1)}{2(e^x - 1)}$$
> 
> Cancel out the common factor $(e^x - 1)$ from the numerator and denominator:
> $$\lim_{x\to0}\frac{e^x + 1}{2}$$
> 
> 4. **Evaluate:**
> Now evaluate by substituting $x = 0$:
> $$\frac{e^0 + 1}{2} = \frac{1 + 1}{2} = \frac{2}{2} = 1$$
> 
> ---

> [!info]- Extra Practice & Extensions
> ##### Extension Problem (Activity)
> 9. $\lim_{x\to\frac{\pi}{2}}\frac{1-\sin^{2}x}{2\cos x}$
> 
> > [!check]- Solution
> > $$\lim_{x\to\frac{\pi}{2}}\frac{1-\sin^{2}x}{2\cos x}$$
> > 
> > ---
> > 
> > ### **Step 1: Check with Direct Substitution**
> > 
> > First, let's substitute $x = \frac{\pi}{2}$ directly into the expression, remembering that $\sin\left(\frac{\pi}{2}\right) = 1$ and $\cos\left(\frac{\pi}{2}\right) = 0$:
> > 
> > * **Numerator:** $1 - \sin^2\left(\frac{\pi}{2}\right) = 1 - (1)^2 = 0$
> > * **Denominator:** $2\cos\left(\frac{\pi}{2}\right) = 2(0) = 0$
> > 
> > This yields the indeterminate form **$\frac{0}{0}$**. This means a limit exists, but we need an algebraic approach to rewrite the function and eliminate the term causing the division by zero.
> > 
> > ---
> > 
> > ### **Method: Using Trigonometric Identities (Algebraic Method)**
> > 
> > 1. **Apply the Pythagorean Identity:**
> > Recall the fundamental identity:
> > $$\sin^2 x + \cos^2 x = 1 \implies 1 - \sin^2 x = \cos^2 x$$
> > 
> > 2. **Rewrite and Simplify the Limit:**
> > Substitute $\cos^2 x$ into the numerator:
> > $$\lim_{x\to\frac{\pi}{2}}\frac{\cos^2 x}{2\cos x}$$
> > 
> > Cancel out one factor of $\cos x$ from both the numerator and denominator:
> > $$\lim_{x\to\frac{\pi}{2}}\frac{\cos x}{2}$$
> > 
> > 3. **Evaluate:**
> > Now substitute $x = \frac{\pi}{2}$ into the simplified expression:
> > $$\frac{\cos\left(\frac{\pi}{2}\right)}{2} = \frac{0}{2} = 0$$
> > 
> > ---
> 

### 01:05 - 01:10 (5 mins) — Regroup 3: Verification
- Verify calculations and mathematical reasoning.

### 01:10 - 01:15 (5 mins) — Synthesis Wrap-up
- Core takeaways from Session 03 and overview of homework Knewton: *Algebraic Limit Evaluation*.
