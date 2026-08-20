# Skill 2: Strategic Algebraic Rewriting 

## Topic Overview: Transformed Representation of Products & Differences

L'Hôpital's Rule is an incredibly powerful shortcut, but it possesses a strict structural limitation: **it can only be applied directly to fractional quotients** ($\frac{0}{0}$ or $\frac{\pm\infty}{\pm\infty}$). When direct substitution yields indeterminate forms such as a product ($0 \cdot \pm\infty$) or a difference ($\infty - \infty$), L'Hôpital's Rule cannot be used immediately. 

To resolve these limits, students must employ **Strategic Algebraic Rewriting**. The goal is to mathematically manipulate the expression to alter its visual structure *without* altering its underlying value, forcing it into a fraction so that L'Hôpital's Rule becomes legal.

### The Two Primary Rewriting Strategies

1. **For Indeterminate Products ($0 \cdot \infty$): Use Reciprocals**
   If $\lim f(x)g(x) \rightarrow 0 \cdot \infty$, choose one of the functions (usually the easier one to differentiate as a reciprocal) and move it to the denominator by taking its reciprocal:
   $$f(x)g(x) = \frac{f(x)}{\frac{1}{g(x)}} \quad \left[\text{Forces } \frac{0}{0}\right] \qquad \text{or} \qquad f(x)g(x) = \frac{g(x)}{\frac{1}{f(x)}} \quad \left[\text{Forces } \frac{\infty}{\infty}\right]$$

2. **For Indeterminate Differences ($\infty - \infty$): Find a Common Denominator**
   If $\lim [f(x) - g(x)] \rightarrow \infty - \infty$ and the terms are fractional, algebraically combine them into a single unified quotient by establishing a common denominator. This mathematical consolidation naturally converts the expression into a $\frac{0}{0}$ or $\frac{\infty}{\infty}$ form.

---

## Guided Notes Sample Problems

Below are examples from the guided notes demonstrating how to algebraically transform non-fractional indeterminate forms before evaluating them.

### Example 1: Transforming a Product ($0 \cdot \infty$)
**Problem:** Evaluate $\lim_{x\rightarrow\infty}x^{2}e^{-x}$

**Step 1: Check the form via direct substitution**
$$\lim_{x\rightarrow\infty}x^{2} \cdot \lim_{x\rightarrow\infty}e^{-x} \rightarrow \infty \cdot 0 \quad (\text{Indeterminate Form})$$

**Step 2: Rewrite using a reciprocal to build a fraction**
Move the negative exponent to the denominator to transform the product into a quotient:
$$\lim_{x\rightarrow\infty}\frac{x^{2}}{e^{x}} \quad \left[\text{New Form: } \frac{\infty}{\infty}\right]$$

**Step 3: Apply L'Hôpital's Rule sequentially**
Since we now have a valid fraction form, differentiate the numerator and denominator independently:
$$\lim_{x\rightarrow\infty}\frac{x^{2}}{e^{x}} \overset{\text{L'H}}{=} \lim_{x\rightarrow\infty}\frac{2x}{e^{x}} \quad \left[\text{Still } \frac{\infty}{\infty}\right]$$
$$\overset{\text{L'H}}{=} \lim_{x\rightarrow\infty}\frac{2}{e^{x}} = \frac{2}{\infty} = 0$$

---

### Example 2: Transforming a Difference ($\infty - \infty$)
**Problem:** Evaluate $\lim_{x\rightarrow1^{+}}\left(\frac{1}{x-1}-\frac{1}{\ln x}\right)$

**Step 1: Check the form via direct substitution**
As $x \rightarrow 1^{+}$, $\frac{1}{0^{+}} - \frac{1}{0^{+}} \rightarrow \infty - \infty$ (Indeterminate Form).

**Step 2: Rewrite using a common denominator**
Combine the terms into a single fraction:
$$\lim_{x\rightarrow1^{+}} \frac{\ln x - (x - 1)}{(x - 1)\ln x} = \lim_{x\rightarrow1^{+}} \frac{\ln x - x + 1}{(x - 1)\ln x}$$
*Re-checking the form at $x = 1$ yields:* $\frac{\ln(1) - 1 + 1}{(1-1)\ln(1)} = \frac{0}{0}$. Now we can use L'Hôpital's Rule.

**Step 3: Apply L'Hôpital's Rule (Iterative)**
Differentiate the numerator and apply the Product Rule to the denominator:
$$\overset{\text{L'H}}{=} \lim_{x\rightarrow1^{+}} \frac{\frac{1}{x} - 1}{(1)\ln x + (x - 1)\frac{1}{x}} = \lim_{x\rightarrow1^{+}} \frac{\frac{1}{x} - 1}{\ln x + 1 - \frac{1}{x}}$$
Multiply the entire top and bottom by $x$ to simplify the algebra before re-testing:
$$\lim_{x\rightarrow1^{+}} \frac{1 - x}{x\ln x + x - 1} \quad \left[\text{Still } \frac{0}{0}\right]$$
Apply L'Hôpital's Rule a second time:
$$\overset{\text{L'H}}{=} \lim_{x\rightarrow1^{+}} \frac{-1}{\ln x + x(\frac{1}{x}) + 1} = \lim_{x\rightarrow1^{+}} \frac{-1}{\ln x + 2}$$

**Step 4: Evaluate**
$$\frac{-1}{\ln(1) + 2} = -\frac{1}{2}$$

---

## Real-Life Engineering Application Problems (Skill 2 focus)

### Engineering Problem 1: [[Circuit Design (Transient Overcurrent Mitigation)]]
[[Circuit Design (Transient Overcurrent Mitigation) Solution]]
An electrical engineer is analyzing the transient current surge $I(t)$ (in Amperes) flowing through a critically damped protection circuit after a high-voltage switch is thrown. The safety system's mathematical model maps the current over time $t$ (in microseconds) as:
$$I(t) = 24 t^2 e^{-4t}$$
Determine the steady-state current residual left in the circuit over the long term by identifying the indeterminate product structure and evaluating:
$$\lim_{t\to \infty} I(t)$$

#### **Solution:**
1. **Identify and Classify the Form:** Direct substitution of $t \to \infty$ yields:
   $$\lim_{t\to \infty} 24 t^2 \cdot \lim_{t\to \infty} e^{-4t} \rightarrow \infty \cdot 0$$
   *Classification:* $0 \cdot \infty$ Indeterminate Form. L'Hôpital's Rule cannot be used yet.
2. **Algebraically Rewrite:** Move the exponential term to the denominator using its reciprocal property to force a fraction structure:
   $$\lim_{t\to \infty} \frac{24t^2}{e^{4t}} \quad \left[\text{New Form: } \frac{\infty}{\infty}\right]$$
3. **Apply L'Hôpital's Rule (First Iteration):**
   $$\overset{\text{L'H}}{=} \lim_{t\to \infty} \frac{\frac{d}{dt}[24t^2]}{\frac{d}{dt}[e^{4t}]} = \lim_{t\to \infty} \frac{48t}{4e^{4t}} = \lim_{t\to \infty} \frac{12t}{e^{4t}} \quad \left[\text{Still } \frac{\infty}{\infty}\right]$$
4. **Apply L'Hôpital's Rule (Second Iteration):**
   $$\overset{\text{L'H}}{=} \lim_{t\to \infty} \frac{12}{4e^{4t}} = \frac{12}{\infty} = 0\text{ Amperes}$$

#### **Meaning of the Answer & Real-Life Application:**
The limit resolves to exactly $0\text{ A}$. In electrical engineering, this mathematical proof tells the designer that the circuit is stable over time and that the current will decay back down to zero following a high-voltage switch event. By using algebraic rewriting to verify that the exponential decay ($e^{-4t}$) overpowers the quadratic growth factor ($t^2$), the engineer ensures that the protection system won't sustain a hazardous residual overcurrent loop, preventing sensitive downstream microprocessors from melting due to long-term heat accumulation.

---

### Engineering Problem 2: [[Mechanical Vibrations (Resonant Frequency Phase Clashing)]]
[[Mechanical Vibrations (Resonant Frequency Phase Clashing) Solution]]
A structural engineer is studying the destructive mechanical displacement mismatch $\Delta x$ (in millimeters) between two poorly synchronized isolation dampers anchoring a heavy industrial pump. As the forced operating frequency $\omega$ approaches the system's structural resonance threshold of $\omega \to 1\text{ rad/s}$, the directional displacement gap formula expands as:
$$\Delta x(\omega) = \frac{3}{\omega^2 - 1} - \frac{3}{e^{\omega - 1} - 1}$$
Classify the mathematical conflict right at the resonance boundary and calculate the ultimate physical displacement mismatch by evaluating:
$$\lim_{\omega\to 1^{+}} \Delta x(\omega)$$

#### **Solution:**
1. **Identify and Classify the Form:** Direct substitution of $\omega = 1$ yields:
   $$\frac{3}{1 - 1} - \frac{3}{e^0 - 1} \rightarrow \frac{3}{0^{+}} - \frac{3}{0^{+}} \rightarrow \infty - \infty$$
   *Classification:* $\infty - \infty$ Indeterminate Form.
2. **Algebraically Rewrite:** Establish a common denominator to force a singular quotient representation:
   $$\Delta x(\omega) = \frac{3(e^{\omega - 1} - 1) - 3(\omega^2 - 1)}{(\omega^2 - 1)(e^{\omega - 1} - 1)} = \frac{3e^{\omega - 1} - 3\omega^2}{(\omega^2 - 1)(e^{\omega - 1} - 1)}$$
   *Re-check the form at $\omega = 1$:* $\frac{3(1) - 3(1)}{(1 - 1)(1 - 1)} = \frac{0}{0}$. We now have a green light for L'Hôpital's Rule.
3. **Apply L'Hôpital's Rule:** *Numerator Derivative:* $\frac{d}{d\omega}[3e^{\omega - 1} - 3\omega^2] = 3e^{\omega - 1} - 6\omega$
   *Denominator Derivative (Product Rule):* $$\frac{d}{d\omega}[(\omega^2 - 1)(e^{\omega - 1} - 1)] = (2\omega)(e^{\omega - 1} - 1) + (\omega^2 - 1)(e^{\omega - 1})$$
   Combine under the limit:
   $$\overset{\text{L'H}}{=} \lim_{\omega\to 1^{+}} \frac{3e^{\omega - 1} - 6\omega}{2\omega(e^{\omega - 1} - 1) + (\omega^2 - 1)e^{\omega - 1}}$$
4. **Evaluate the Limit:** Substitute $\omega = 1$ into the transformed expression:
   $$\frac{3e^0 - 6(1)}{2(1)(e^0 - 1) + (1^2 - 1)e^0} = \frac{3 - 6}{2(0) + (0)} = \frac{-3}{0^{+}} \rightarrow -\infty\text{ mm}$$

#### **Meaning of the Answer & Real-Life Application:**
The limit evaluates to $-\infty\text{ mm}$. In structural mechanical engineering, an indeterminate difference resolving to infinity represents a catastrophic design failure. This tells the engineer that right at the resonance threshold, the algebraic subtraction between the two damping waves does not cancel out smoothly; instead, the physical phase displacement gap grows without bound. This mathematically warns the factory layout engineer that the pump will shake itself entirely off its concrete foundation bolts unless the operating frequency is manually altered or the dampers are physically replaced with decoupled materials.