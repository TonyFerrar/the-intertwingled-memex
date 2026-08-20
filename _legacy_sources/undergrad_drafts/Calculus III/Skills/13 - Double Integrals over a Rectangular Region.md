# Skill 1: Double Integrals over a Rectangular Region

## Theoretical Notes & Formulas

### 1. Definition of a Double Integral over a Rectangle

When integrating a function of two variables $f(x, y)$ over a rectangular region $R$, the domain is bounded by constant lines for both variables:

$$R = [a, b] \times [c, d] = \{(x, y) \in \mathbb{R}^2 \mid a \le x \le b, \, c \le y \le d\}$$

Geometrically, if $f(x, y) \ge 0$, the double integral $\iint_R f(x, y) \, dA$ represents the **volume** of the solid that lies underneath the surface $z = f(x, y)$ and above the rectangular region $R$ in the $xy$-plane.

### 2. Fubini's Theorem (Changing the Order of Integration)

Fubini's Theorem states that if $f(x, y)$ is continuous on the rectangular region $R$, the double integral can be evaluated as an iterated integral in either order:

$$\text{Volume} = \iint_R f(x, y) \, dA = \int_{c}^{d} \int_{a}^{b} f(x, y) \, dx \, dy = \int_{a}^{b} \int_{c}^{d} f(x, y) \, dy \, dx$$

- **Integrating $dx \, dy$:** You integrate with respect to $x$ first (treating $y$ as a constant) between the limits $a$ and $b$, and then integrate the resulting expression with respect to $y$ between the limits $c$ and $d$.
    
- **Integrating $dy \, dx$:** You integrate with respect to $y$ first (treating $x$ as a constant) between the limits $c$ and $d$, and then integrate the resulting expression with respect to $x$ between the limits $a$ and $b$.
    

Over a rectangular region, switching the order of integration is straightforward because all four limits are constants. However, choosing one order over the other can sometimes significantly simplify the integration process.

### 3. Average Value of a Function

The average value ($f_{\text{avg}}$) of a continuous function $f(x, y)$ over a region $R$ is defined as the total integral divided by the area of the region:

$$f_{\text{avg}} = \frac{1}{\text{Area}(R)} \iint_{R} f(x, y) \, dA$$

For a rectangular region $R = [a, b] \times [c, d]$, the area is simply:

$$\text{Area}(R) = (b - a) \times (d - c)$$

## Pure Mathematics Sample Problems

### Sample Problem 1: Basic Polynomial Integration

**Problem:** Evaluate $\iint_R (4x^3 + 6xy^2) \, dA$ where $R = [0, 2] \times [1, 3]$.

**Solution:**

We will integrate with respect to $y$ first, then $x$:

$$I = \int_{0}^{2} \int_{1}^{3} (4x^3 + 6xy^2) \, dy \, dx$$

1. **Inner Integral (with respect to $y$):**
    
    Treat $x$ as a constant:
    
    $$\int_{1}^{3} (4x^3 + 6xy^2) \, dy = \left[ 4x^3y + 2xy^3 \right]_{1}^{3}$$
    
    Substitute the limits $y = 3$ and $y = 1$:
    
    $$= \left( 4x^3(3) + 2x(3)^3 \right) - \left( 4x^3(1) + 2x(1)^3 \right)$$
    
    $$= (12x^3 + 54x) - (4x^3 + 2x) = 8x^3 + 52x$$
    
2. **Outer Integral (with respect to $x$):**
    
    $$\int_{0}^{2} (8x^3 + 52x) \, dx = \left[ 2x^4 + 26x^2 \right]_{0}^{2}$$
    
    Evaluate at the limits:
    
    $$= \left( 2(2)^4 + 26(2)^2 \right) - 0$$
    
    $$= 2(16) + 26(4) = 32 + 104 = 136$$
    

**Answer:** $136$

### Sample Problem 2: Choosing an Efficient Order

**Problem:** Evaluate $\iint_R x e^{xy} \, dA$ where $R = [0, 1] \times [0, 2]$.

**Solution:**

Let's consider our options. If we integrate with respect to $x$ first, we will have to use integration by parts because of the $x$ out front. However, if we integrate with respect to $y$ first, $x$ acts as a constant multiplier, matching the chain rule derivative of the exponent. Let's integrate with respect to $y$ first:

$$I = \int_{0}^{1} \int_{0}^{2} x e^{xy} \, dy \, dx$$

1. **Inner Integral (with respect to $y$):**
    
    $$\int_{0}^{2} x e^{xy} \, dy = x \left[ \frac{1}{x}e^{xy} \right]_{0}^{2} = \left[ e^{xy} \right]_{0}^{2}$$
    
    Evaluate at the limits from $y = 0$ to $y = 2$:
    
    $$= e^{2x} - e^{0} = e^{2x} - 1$$
    
2. **Outer Integral (with respect to $x$):**
    
    $$\int_{0}^{1} (e^{2x} - 1) \, dx = \left[ \frac{1}{2}e^{2x} - x \right]_{0}^{1}$$
    
    Evaluate at the limits:
    
    $$= \left( \frac{1}{2}e^{2(1)} - 1 \right) - \left( \frac{1}{2}e^{0} - 0 \right)$$
    
    $$= \frac{1}{2}e^2 - 1 - \frac{1}{2} = \frac{1}{2}e^2 - \frac{3}{2}$$
    

**Answer:** $\frac{1}{2}e^2 - \frac{3}{2}$

## Real-Life Engineering Application Problems

### Application 1: [[Optoelectronics & Display Engineering (Average Irradiance)]]
[[Optoelectronics & Display Engineering (Average Irradiance) Solution]]


### Application 2: [[Semiconductor & Electrical Engineering (Total Surface Charge)]]
[[Semiconductor & Electrical Engineering (Total Surface Charge) Solution]]
