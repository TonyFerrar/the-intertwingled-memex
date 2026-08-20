# Calculus I Mastery: Skill 1 - Directional "Zero" Sign Analysis (Infinite Limits)

When evaluating a limit, a common outcome of direct substitution is a form like $\frac{c}{0}$, where $c$ is a non-zero constant. In algebra, division by zero is strictly undefined. In calculus, however, we use **infinite limits** to describe the behavior of a function whose values grow arbitrarily large in magnitude as the input approaches a specific point.

---

## 1. Understanding the Core Concept

An infinite limit does not mean the limit "exists" in the traditional sense of settling on a single finite number. Instead, expressions like $\lim_{x \to a} f(x) = \infty$ or $-\infty$ are descriptive labels that track **unbounded growth**.

The primary tool for analyzing these limits analytically is **Directional "Zero" Sign Analysis**. 

* **The Magnitude Rule:** When the numerator approaches a fixed non-zero number $c$ and the denominator approaches $0$, the overall fraction grows infinitely large in magnitude ($\infty$).
* **The Directional Rule:** The *sign* of that infinity ($+$ or $-$) depends entirely on whether the denominator approaches $0$ through positive values ($0^+$) or negative values ($0^-$), combined with the sign of the numerator.

### The Sign Matrix
When you encounter a $\frac{\text{constant}}{0}$ form, use this mental framework to determine the direction of growth:
* $\frac{\text{Positive Constant}}{\text{Tiny Positive Number } (0^+)} \longrightarrow +\infty$
* $\frac{\text{Positive Constant}}{\text{Tiny Negative Number } (0^-)} \longrightarrow -\infty$
* $\frac{\text{Negative Constant}}{\text{Tiny Positive Number } (0^+)} \longrightarrow -\infty$
* $\frac{\text{Negative Constant}}{\text{Tiny Negative Number } (0^-)} \longrightarrow +\infty$

---

## 2. Sample Problems & Step-by-Step Solutions

### Problem 1
Evaluate analytically: 
$$\lim_{x \to 5^{-}} \frac{7}{x-5}$$

#### Step-by-Step Solution:
1. **Attempt Direct Substitution:** Plugging in $x = 5$ gives $\frac{7}{5-5} = \frac{7}{0}$. Because the numerator is a non-zero constant and the denominator is zero, we know the output will head toward either $\infty$ or $-\infty$.
2. **Analyze the Directional Approach:** The limit specifies $x \to 5^{-}$, meaning $x$ approaches $5$ from the left side (using values slightly less than $5$, such as $4.99, 4.999$).
3. **Perform Sign Analysis on the Denominator:**
   If $x = 4.99$, then the denominator expression is:
   $$x - 5 = 4.99 - 5 = -0.01$$
   Because $-0.01 < 0$, the denominator is approaching $0$ through strictly negative values ($0^-$).
4. **Combine the Signs:**
   $$\frac{\text{Numerator}}{\text{Denominator}} \longrightarrow \frac{\text{Positive Constant } (7)}{\text{Tiny Negative Number } (0^-)} \longrightarrow -\infty$$
5. **Final Answer:**
   $$\lim_{x \to 5^{-}} \frac{7}{x-5} = -\infty$$

---

### Problem 2 
Evaluate analytically: 
$$\lim_{x \to -1^{+}} \frac{-2x}{x+1}$$

#### Step-by-Step Solution:
1. **Attempt Direct Substitution:**
   Substitute $x = -1$ into the expression:
   $$\frac{-2(-1)}{-1+1} = \frac{2}{0}$$
   This matches our $\frac{c}{0}$ form, indicating a vertical asymptote and infinite behavior.
2. **Analyze the Directional Approach:**
   The limit specifies $x \to -1^{+}$, meaning $x$ approaches $-1$ from the right side (using values slightly larger/less negative than $-1$, such as $-0.99, -0.999$).
3. **Perform Sign Analysis:**
   * **Numerator:** $-2(-0.99) = 1.98$, which is a **positive** constant.
   * **Denominator:** $x + 1 = -0.99 + 1 = +0.01$, which is a **positive** tiny number ($0^+$).
4. **Combine the Signs:**
   $$\frac{\text{Positive Constant}}{\text{Tiny Positive Number}} \longrightarrow \infty$$
5. **Final Answer:**
   $$\lim_{x \to -1^{+}} \frac{-2x}{x+1} = \infty$$

---

## 3. Real-Life Engineering Application Problems

### Engineering Problem 1: [[Structural Resonance Threshold (Civil Engineering)]]
[[Structural Resonance Threshold (Civil Engineering) Solution]]


---

### Engineering Problem 2: [[Thermal Runaway in Electrical Discharges (Electrical Engineering)]]
[[Thermal Runaway in Electrical Discharges (Electrical Engineering) Solution]]
