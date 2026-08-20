# Skill 3: Fluency with Fundamental Antiderivative Rules

## Conceptual Notes: Reversing the Calculus Mindset

Because integration is the exact inverse operation of differentiation, every derivative rule you have learned has a corresponding integration rule that acts backward. Fluency with fundamental antiderivative rules means developing the visual memory to look at a cleanly prepared algebraic expression and instantly recognize which standard calculus formula will invert it. 



### The Baseline Catalog of Integration Rules

#### 1. The Power Rule (Where $n \neq -1$)
Instead of multiplying by the exponent and subtracting $1$ (differentiation), you add $1$ to the exponent and divide the expression by that brand-new power.
$$\int x^n \, dx = \frac{x^{n+1}}{n+1} + C$$

#### 2. The Logarithmic Rule (Where $n = -1$)
If you try to apply the power rule to $x^{-1}$ ($\frac{1}{x}$), the denominator becomes zero ($\frac{x^0}{0}$), which is mathematically undefined. Because the derivative of $\ln|x|$ is $\frac{1}{x}$, this unique form integrates directly into a natural log.
$$\int \frac{1}{x} \, dx = \ln|x| + C$$

#### 3. Base-$e$ Exponential Rule
Since the natural exponential function $e^x$ is its own derivative, it acts as its own antiderivative.
$$\int e^x \, dx = e^x + C$$

#### 4. Trigonometric Rules
These come directly from identifying what function differentiates into your integrand:
* $\int \cos(x) \, dx = \sin(x) + C$  *(because $\frac{d}{dx}[\sin x] = \cos x$)*
* $\int \sin(x) \, dx = -\cos(x) + C$ *(because $\frac{d}{dx}[-\cos x] = \sin x$)*
* $\int \sec^2(x) \, dx = \tan(x) + C$ *(because $\frac{d}{dx}[\tan x] = \sec^2 x$)*

---

## Sample Problems (From Guided Notes)

### Sample Problem 1
Evaluate the indefinite integral:
$$\int \cos(x) \, dx$$

**Step-by-Step Solution:**
1. **Identify the baseline rule:** This is a core trigonometric integral matching our basic catalog.
2. **Evaluate:** Recall the function whose derivative is exactly $\cos(x)$. That function is $\sin(x)$.
3. **Add the constant of integration:**
   $$\sin(x) + C$$

---

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Thermal System Dissipation (Mechanical Engineering)]]
[[Thermal System Dissipation (Mechanical Engineering) Solution]]


---

### Engineering Problem 2: [[Fluid Flow and Tank Sizing (Civil & Environmental Engineering)]]
[[Fluid Flow and Tank Sizing (Civil & Environmental Engineering) Solution]]
