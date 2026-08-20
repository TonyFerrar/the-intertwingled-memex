# Skill 3: Logarithmic Transformations & Power Indeterminate Forms 

## Topic Overview: Evaluating Power Indeterminate Forms

The third advanced group of indeterminate forms involves variable bases raised to variable powers ($f(x)^{g(x)}$). When evaluating a limit $\lim_{x \to a} f(x)^{g(x)}$ via direct substitution, you may encounter three distinct **Power Indeterminate Forms**:
1. **$1^\infty$** (A base approaching 1, compounding infinitely many times)
2. **$0^0$** (A base collapsing to 0, while the exponent demands it equal 1)
3. **$\infty^0$** (A base exploding to infinity, while the exponent attempts to flatten it to 1)

Because these functions do not look like fractions, you cannot apply L'Hôpital's Rule directly. To evaluate them, you must use a **Logarithmic Transformation**. By applying the natural logarithm ($\ln$), you can use the algebraic power property of logarithms to bring the exponent down as a multiplier, turning a power problem into a product problem, which can then be turned into a quotient.

### The Standard Logarithmic Procedure

To solve any power indeterminate form, you must follow this exact multi-step protocol:

1. **Set the limit equal to a temporary variable $y$**:
   $$y = \lim_{x \to a} f(x)^{g(x)}$$
2. **Take the natural logarithm ($\ln$) of both sides** and utilize the log power rule ($\ln(M^k) = k \ln M$) to pull down the exponent:
   $$\ln y = \lim_{x \to a} \ln\left[f(x)^{g(x)}\right] = \lim_{x \to a} g(x) \cdot \ln[f(x)]$$
3. **Classify the new product form** (which will usually be $0 \cdot \infty$) and use a reciprocal rewrite to create a fraction ($\frac{0}{0}$ or $\frac{\infty}{\infty}$).
4. **Apply L'Hôpital's Rule** to find the limit value of $\ln y$. Let's call this numeric result $L$:
   $$\lim_{x \to a} \ln y = L$$
5. **The "Return Path" Exponentiation**: The value $L$ is *not* your final answer; it is the limit of $\ln y$. To isolate the original limit $y$, you must exponentiate both sides using base $e$:
   $$\text{Final Answer: } y = e^L$$

---

## Guided Notes Sample Problems

Below are examples adapted from the guided notes demonstrating how to execute logarithmic transformations on power forms.

### Example 1: The $0^0$ Form
**Problem:** Evaluate $\lim_{x\rightarrow0^{+}}x^{x}$

**Step 1: Check the form via direct substitution**
Substituting $x = 0$ yields $0^0$, an indeterminate power form.

**Step 2: Apply the logarithmic transformation**
Let $y = \lim_{x\rightarrow0^{+}}x^{x}$. Take the natural log of both sides:
$$\ln y = \lim_{x\rightarrow0^{+}} \ln(x^x) = \lim_{x\rightarrow0^{+}} x \ln x$$
*Check the new form:* As $x \to 0^{+}$, $x \to 0$ and $\ln x \to -\infty$, giving the product form **$0 \cdot -\infty$**.

**Step 3: Algebraically rewrite as a fraction**
Move the $x$ to the denominator as its reciprocal $\frac{1}{x}$:
$$\ln y = \lim_{x\rightarrow0^{+}} \frac{\ln x}{\frac{1}{x}} \quad \left[\text{New Form: } \frac{-\infty}{\infty}\right]$$

**Step 4: Apply L'Hôpital's Rule to find the limit of $\ln y$**
$$\lim_{x\rightarrow0^{+}} \ln y \overset{\text{L'H}}{=} \lim_{x\rightarrow0^{+}} \frac{\frac{1}{x}}{-\frac{1}{x^2}}$$
Simplify the complex fraction by multiplying by the reciprocal:
$$\lim_{x\rightarrow0^{+}} \ln y = \lim_{x\rightarrow0^{+}} \left(\frac{1}{x} \cdot \frac{-x^2}{1}\right) = \lim_{x\rightarrow0^{+}} (-x) = 0$$

**Step 5: Solve for the original limit ($e^L$)**
Since $\ln y = 0$, isolate $y$ by exponentiating:
$$y = e^0 = 1$$
Therefore, $\lim_{x\rightarrow0^{+}}x^{x} = 1$.

---

### Example 2: The $1^\infty$ Form
**Problem:** Evaluate $\lim_{x\rightarrow\infty}\left(1+\frac{1}{x}\right)^{3x}$

**Step 1: Check the form via direct substitution**
As $x \to \infty$, $\frac{1}{x} \to 0$, so the base approaches $1$ and the exponent approaches $\infty$. This yields the $1^\infty$ indeterminate form.

**Step 2: Logarithmic Transformation & Rewriting**
Let $y = \lim_{x\rightarrow\infty}\left(1+\frac{1}{x}\right)^{3x}$:
$$\ln y = \lim_{x\rightarrow\infty} 3x \ln\left(1+\frac{1}{x}\right) \quad [\text{Form: } \infty \cdot 0]$$
Rewrite the product as a fraction by leaving $3\ln(1 + \frac{1}{x})$ in the numerator and moving $x$ to the denominator as $\frac{1}{x}$:
$$\ln y = \lim_{x\rightarrow\infty} \frac{3\ln\left(1+\frac{1}{x}\right)}{\frac{1}{x}} \quad \left[\text{New Form: } \frac{0}{0}\right]$$

**Step 3: Apply L'Hôpital's Rule**
Differentiate the numerator (using the Chain Rule) and the denominator independently:
$$\lim_{x\rightarrow\infty} \ln y \overset{\text{L'H}}{=} \lim_{x\rightarrow\infty} \frac{3 \cdot \frac{1}{1+\frac{1}{x}} \cdot \left(-\frac{1}{x^2}\right)}{-\frac{1}{x^2}}$$
Cancel the common $\left(-\frac{1}{x^2}\right)$ factor from the top and bottom:
$$\lim_{x\rightarrow\infty} \ln y = \lim_{x\rightarrow\infty} \frac{3}{1+\frac{1}{x}} = \frac{3}{1 + 0} = 3$$

**Step 4: Solve for the original limit ($e^L$)**
$$\ln y = 3 \implies y = e^3$$
Therefore, $\lim_{x\rightarrow\infty}\left(1+\frac{1}{x}\right)^{3x} = e^3$.

---

## Real-Life Engineering Application Problems (Skill 3 focus)

### Engineering Problem 1: [[Financial & Data Center Engineering (High-Frequency Capital Compounding)]]
[[Financial & Data Center Engineering (High-Frequency Capital Compounding) Solution]]
A quantitative software engineer is programming an automated continuous-compounding asset account for an algorithmic trading server. The projected valuation multiplier $M$ over a long-term computational cycle relies on a specialized variable base limit as the processing partition rate $x$ approaches infinity:
$$M = \lim_{x\to \infty} \left(1 + \frac{5}{x}\right)^{2x}$$
Classify the mathematical power profile and calculate the exact scale factor the asset will grow by evaluating the limit.

#### **Solution:**
1. **Identify and Classify the Form:** Direct substitution of $x \to \infty$ yields:
   * Base: $\lim_{x\to \infty} (1 + \frac{5}{x}) = 1 + 0 = 1$
   * Exponent: $\lim_{x\to \infty} 2x = \infty$
   * **Classification:** $1^\infty$ Indeterminate Power Form.
2. **Apply Logarithmic Transformation:** Let $M$ be our target limit value. Take the natural logarithm of both sides:
   $$\ln M = \lim_{x\to \infty} \ln\left[\left(1 + \frac{5}{x}\right)^{2x}\right] = \lim_{x\to \infty} 2x \ln\left(1 + \frac{5}{x}\right) \quad [\text{Form: } \infty \cdot 0]$$
3. **Rewrite as a Quotient fraction:** Move $2x$ to the denominator as $\frac{2}{1/x}$ or pull out the constant factor:
   $$\ln M = \lim_{x\to \infty} \frac{2\ln\left(1 + 5x^{-1}\right)}{x^{-1}} \quad \left[\text{New Form: } \frac{0}{0}\right]$$
4. **Apply L'Hôpital's Rule:** $$\overset{\text{L'H}}{=} \lim_{x\to \infty} \frac{2 \cdot \frac{1}{1 + 5x^{-1}} \cdot \left(-5x^{-2}\right)}{-1x^{-2}}$$
   Simplify by canceling out the negative exponents ($-x^{-2}$):
   $$\ln M = \lim_{x\to \infty} \frac{2 \cdot 5}{1 + \frac{5}{x}} = \lim_{x\to \infty} \frac{10}{1 + \frac{5}{x}}$$
5. **Evaluate the Log Limit:**
   $$\ln M = \frac{10}{1 + 0} = 10$$
6. **Exponentiate to find the Original Limit:**
   $$M = e^{10}$$

#### **Meaning of the Answer & Real-Life Application:**
The limit resolves to $e^{10}$. In real-world data engineering and computational finance, evaluating an indeterminate power form like $1^\infty$ allows engineers to find the exact boundary threshold of continuous exponential expansion. Knowing that the system stabilizes specifically at a scale factor of $e^{10}$ rather than fluctuating unpredictably permits the software engineer to calculate precise future asset reserves, hard-code safety data caps into high-frequency financial platforms, and allocate memory sizes on trading servers without risking arithmetic buffer overflows.

---

### Engineering Problem 2: [[Aerospace & Mechanical Engineering (Supersonic Vacuum Base Pressure)]]
[[Aerospace & Mechanical Engineering (Supersonic Vacuum Base Pressure) Solution]]
An aerospace engineer is calculating the localized aerodynamic pressure drop coefficient $P$ along the trailing edge of a carbon-fiber rocket casing as it accelerates past Mach 1. Because of localized atmospheric shielding effects, the boundary layer pressure model behavior as the localized velocity index $x$ drops toward absolute zero is governed by the following limit:
$$\lim_{x\to 0^{+}} (3x)^{\sin(x)}$$

Determine the foundational pressure limit index by identifying the indeterminate structural type and solving the transformation.

#### **Solution:**
1. **Identify and Classify the Form:** Direct substitution of $x \to 0^{+}$ yields:
   * Base: $3(0) = 0$
   * Exponent: $\sin(0) = 0$
   * **Classification:** $0^0$ Indeterminate Power Form.
2. **Apply Logarithmic Transformation:** Let $P = \lim_{x\to 0^{+}} (3x)^{\sin(x)}$. Take the natural logarithm of both sides:
   $$\ln P = \lim_{x\to 0^{+}} \ln\left[(3x)^{\sin(x)}\right] = \lim_{x\to 0^{+}} \sin(x) \ln(3x) \quad [\text{Form: } 0 \cdot -\infty]$$
3. **Rewrite as a Quotient fraction:** Move $\sin(x)$ to the denominator using its reciprocal identity, $\frac{1}{\sin(x)} = \csc(x)$:
   $$\ln P = \lim_{x\to 0^{+}} \frac{\ln(3x)}{\csc(x)} \quad \left[\text{New Form: } \frac{-\infty}{\infty}\right]$$
4. **Apply L'Hôpital's Rule:** Differentiate the top and bottom with respect to $x$:
   $$\overset{\text{L'H}}{=} \lim_{x\to 0^{+}} \frac{\frac{1}{3x} \cdot 3}{-\csc(x)\cot(x)} = \lim_{x\to 0^{+}} \frac{\frac{1}{x}}{-\frac{1}{\sin(x)} \cdot \frac{\cos(x)}{\sin(x)}} = \lim_{x\to 0^{+}} \frac{\frac{1}{x}}{-\frac{\cos(x)}{\sin^2(x)}}$$
   Rearrange the complex fraction algebraically:
   $$\ln P = \lim_{x\to 0^{+}} \frac{-\sin^2(x)}{x\cos(x)} = \lim_{x\to 0^{+}} \left( \frac{\sin(x)}{x} \cdot \frac{-\sin(x)}{\cos(x)} \right)$$
5. **Evaluate the Log Limit:** We know from fundamental calculus limits that $\lim_{x\to 0} \frac{\sin(x)}{x} = 1$:
   $$\ln P = 1 \cdot \frac{-\sin(0)}{\cos(0)} = 1 \cdot \frac{0}{1} = 0$$
6. **Exponentiate to find the Original Limit:**
   $$P = e^0 = 1$$

#### **Meaning of the Answer & Real-Life Application:**
The limit evaluates to exactly $1$. In aerospace fluid dynamics, when a physical base pressure equation yields a $0^0$ form, it reveals a mathematical tug-of-war between expanding expansion zones and localized compression waves. Resolving this indeterminate form to a definitive values of $1$ tells the design engineer that the trailing edge pressure coefficient will safely equalize at a normalized baseline value of unity as low-velocity boundaries vanish. This allows engineers to safely model drag forces and prevent structural structural buckling caused by unexpected vacuum imbalances acting on the vehicle's rear fuselage.