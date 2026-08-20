## Calculus I Mastery: Skill 2 Global "Growth Dominance" Filtering (Limits at Infinity)

When evaluating limits as $x \to \infty$ or $x \to -\infty$, we are looking at the **global end behavior** of a function. Rather than checking what occurs near a specific point, we are zooming out infinitely far to the left or right to see if the function levels off at a horizontal boundary line or grows infinitely without bound.

---

## 1. Understanding the Core Concept

To master limits at infinity, you must learn to filter out the "noise" of an expression and look exclusively at **Growth Dominance**. 

As $x$ becomes extremely large, lower-powered terms become completely insignificant compared to higher-powered terms. We can determine the global path of a polynomial or rational function by evaluating only its **leading terms**.

### The "Who Wins the Race?" Dominance Rules for Rational Functions
When evaluating $\lim_{x \to \pm\infty} \frac{P(x)}{Q(x)}$ where $P(x)$ and $Q(x)$ are polynomials:

1. **Denominator Wins (Bottom-Heavy):** If the degree of the denominator is strictly *greater* than the degree of the numerator, the denominator grows much faster. The fraction shrinks to $0$.
   * **Result:** The limit is $0$, creating a horizontal asymptote at $y = 0$.
2. **Tie Game (Balanced Degrees):** If the highest degree of the numerator matches the highest degree of the denominator, they grow at the same relative speed. 
   * **Result:** The limit is the ratio of their leading coefficients, creating a horizontal asymptote at $y = \frac{\text{Leading Coefficient of Top}}{\text{Leading Coefficient of Bottom}}$.
3. **Numerator Wins (Top-Heavy):** If the degree of the numerator is strictly *greater* than the degree of the denominator, the numerator grows unrestrictedly faster.
   * **Result:** The limit will grow without bound toward $\infty$ or $-\infty$ (no horizontal asymptote).

---

## 2. Sample Problems & Step-by-Step Solutions

### Problem 1 (New Balanced Degree Example)
Evaluate analytically and state any horizontal asymptotes:
$$\lim_{x \to \infty} \frac{6x^2 - 5x + 1}{2x^2 + 7}$$

#### Step-by-Step Solution:
1. **Identify the Highest Degrees:** The degree of the numerator is $2$ (leading term $6x^2$). The degree of the denominator is $2$ (leading term $2x^2$). This is a **Tie Game** because the degrees are balanced.
2. **Filter via Growth Dominance:** As $x \to \infty$, the lower-power terms ($-5x$, $1$, and $7$) become negligible. We can simplify our focus down to the leading terms:
   $$\lim_{x \to \infty} \frac{6x^2 - 5x + 1}{2x^2 + 7} = \lim_{x \to \infty} \frac{6x^2}{2x^2}$$
3. **Simplify the Expression:** Cancel out the common $x^2$ variable terms:
   $$\lim_{x \to \infty} \frac{6}{2} = 3$$
4. **Final Answer:** * **Limit:** $3$
   * **Horizontal Asymptote:** $y = 3$

---

### Problem 2 (New Radical / Fractional Degree Example)
Evaluate analytically and state any horizontal asymptotes:
$$\lim_{x \to \infty} \frac{5\sqrt{x} - 2}{3x + 4}$$

#### Step-by-Step Solution:
1. **Convert to Fractional Exponents:** Rewrite the radical term using an exponent so growth rates can be easily compared:
   $$\sqrt{x} = x^{1/2}$$
   The expression becomes: $\lim_{x \to \infty} \frac{5x^{1/2} - 2}{3x^1 + 4}$.
2. **Identify the Highest Degrees:** The degree of the numerator is $\frac{1}{2}$ ($0.5$). The degree of the denominator is $1$. Because $1 > 0.5$, this function is **Bottom-Heavy** (the denominator wins).
3. **Filter via Growth Dominance:** Isolate the highest dominating power in both sections:
   $$\lim_{x \to \infty} \frac{5x^{1/2}}{3x^1}$$
4. **Evaluate the Behavior:** Since the denominator has a higher power of $x$, it grows exponentially larger than the numerator as $x \to \infty$. A fixed value divided by an infinitely growing value shrinks down to zero:
   $$\lim_{x \to \infty} \frac{5}{3x^{1/2}} \longrightarrow \frac{5}{\infty} = 0$$
5. **Final Answer:**
   * **Limit:** $0$
   * **Horizontal Asymptote:** $y = 0$

---

## 3. Real-Life Engineering Application Problems

### Engineering Problem 1: [[Terminal Velocity of a Re-entry Capsule (Aerospace Engineering)]]
[[Terminal Velocity of a Re-entry Capsule (Aerospace Engineering) Solution]]

---

### Engineering Problem 2: [[Industrial Bioreactor Output Bottlenecks (Chemical Engineering)]]
[[Industrial Bioreactor Output Bottlenecks (Chemical Engineering) Solution]]
