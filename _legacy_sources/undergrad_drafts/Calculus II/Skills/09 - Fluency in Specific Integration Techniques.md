# Skill 3: Fluency in Specific Integration Techniques

## 1. Core Concept Notes

Setting up a calculus model from a real-world word problem is only half the battle. Once your definite integral is structured, you must execute the mathematical integration flawlessly. In Calculus II physics and biology applications, you will repeatedly encounter two fundamental integration patterns. Mastering these specific integration techniques ensures you can move efficiently from a conceptual setup to an exact numerical value.

### Technique A: The Power Rule & Negative Exponents
The basic power rule states that:
$$\int x^n \, dx = \frac{x^{n+1}}{n+1} + C \quad (\text{for } n \neq -1)$$

In engineering and physics, this rule frequently surfaces when modeling forces that vary across a distance, such as gravitational fields, electromagnetic fields, or spring displacements. A common trap for students is handling **negative exponents** (e.g., inverse-square laws). You must rewrite fractions as negative exponents before integrating:
* Example: $\frac{1}{x^2}$ must be rewritten as $x^{-2}$.
* Applying the rule: $\int x^{-2} \, dx = \frac{x^{-1}}{-1} = -x^{-1} = -\frac{1}{x} + C$.

### Technique B: Exponential Integration Rules (Growth & Decay)
In biological growth models, chemical reactions, and electrical discharging circuits, rates of change are continuously proportional to the current state of the system. This naturally gives rise to exponential functions. The standard rule for integrating base-$e$ exponential functions containing a constant multiplier $k$ in the exponent is:
$$\int e^{kt} \, dt = \frac{1}{k}e^{kt} + C$$

When working with exponential decay models, the constant in the exponent is negative ($-k$). The integration operates under the exact same mechanism, but requires careful tracking of signs:
$$\int e^{-kt} \, dt = \frac{1}{-k}e^{-kt} + C = -\frac{1}{k}e^{-kt} + C$$

### The Core Skill: Recognizing the Structure
Before computing, always look at your integral and identify its core mathematical family. If it varies by a spatial power ($x^n$ or $\frac{1}{x^n}$), prepare to use the Power Rule. If it varies continuously over time ($e^{kt}$ or $e^{-kt}$), instantly prepare to divide by the coefficient $k$ of your exponent variable.

---

## 2. Sample Calculus Problems

### Sample Problem 1: Power Rule with a Negative Exponent
Evaluate the definite integral representing the work done by an attractive force field from $x = 1$ to $x = 4$:
$$W = \int_{1}^{4} \frac{8}{x^3} \, dx$$

#### Solution:
1. **Rewrite with a negative exponent:**
   $$W = \int_{1}^{4} 8x^{-3} \, dx$$
2. **Apply the Power Rule:** Increase the exponent by $1$ (from $-3$ to $-2$) and divide by that new exponent ($-2$):
   $$W = \left[ \frac{8x^{-2}}{-2} \right]_{1}^{4} = \left[ -4x^{-2} \right]_{1}^{4} = \left[ -\frac{4}{x^2} \right]_{1}^{4}$$
3. **Evaluate the limits:**
   $$W = \left( -\frac{4}{4^2} \right) - \left( -\frac{4}{1^2} \right)$$
   $$W = \left( - \frac{4}{16} \right) - (-4) = -0.25 + 4 = 3.75$$

---

### Sample Problem 2: Exponential Decay Integration
Evaluate the definite integral representing total chemical accumulation over a $2$-minute interval:
$$A = \int_{0}^{2} 12e^{-0.5t} \, dt$$

#### Solution:
1. **Identify the constant in the exponent:** Here, $k = -0.5$.
2. **Apply the Exponential Rule:** Divide the coefficient $12$ by the exponent's constant $-0.5$:
   $$A = \left[ \frac{12}{-0.5}e^{-0.5t} \right]_{0}^{2} = \left[ -24e^{-0.5t} \right]_{0}^{2}$$
3. **Evaluate the limits:**
   $$A = \left( -24e^{-0.5(2)} \right) - \left( -24e^{-0.5(0)} \right)$$
   $$A = -24e^{-1} - (-24e^0) = -24e^{-1} + 24(1)$$
4. **Compute the final value** (since $e^{-1} \approx 0.3679$):
   $$A \approx -24(0.3679) + 24 = -8.83 + 24 = 15.17$$

---

## 3. Real-Life Engineering Application Problems

### Engineering Problem 1: [[Aerospace Engineering — Escaping Gravitational Fields]]
[[Aerospace Engineering — Escaping Gravitational Fields Solution]]


---

### Engineering Problem 2: [[Electrical Engineering — Capacitor Energy Dissipation]]
[[Electrical Engineering — Capacitor Energy Dissipation Solution]]

---

### Engineering Problem 3: [[Thermal Engineering — Transient Heat Flux in Microchip Cooling]]
[[Thermal Engineering — Transient Heat Flux in Microchip Cooling Solution]]
