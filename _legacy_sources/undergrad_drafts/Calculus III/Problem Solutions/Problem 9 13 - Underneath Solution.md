## Problem Statement

An LED panel's local irradiance is $E(x,y) = E_{0}(1-0.2x)$ on the wedge $R$ bounded by $y = 0$, $y = x$, and $x = 2$ (units: $x,y$ in meters).

1. Compute $\iint_{R} E \, dA$.
    
2. Find the average irradiance on $R$ in terms of $E_{0}$.
    

## Part 1: Compute $\iint_{R} E \, dA$

To compute the double integral, we first need to set up our integration bounds based on the given region $R$.

### 1. Identify the Bounds for Region $R$

The wedge $R$ is bounded by:

- **Lower boundary:** $y = 0$
    
- **Upper boundary:** $y = x$
    
- **Right vertical boundary:** $x = 2$
    

Setting this up as a **Type I region** (vertical slices), our bounds are:

- **Outer bounds ($x$):** $x$ ranges from $0$ to $2 \implies x \in [0, 2]$
    
- **Inner bounds ($y$):** For any fixed $x$, $y$ goes from $0$ to $x \implies y \in [0, x]$
    

### 2. Set up the Iterated Integral

$$\iint_{R} E \, dA = \int_{0}^{2} \int_{0}^{x} E_{0}(1 - 0.2x) \, dy \, dx$$

### 3. Evaluate the Integral

**Step A: Inner Integral (with respect to $y$)**

Since the integrand $E_{0}(1 - 0.2x)$ contains no $y$ variables, the entire expression acts as a constant during this step:

$$\int_{0}^{x} E_{0}(1 - 0.2x) \, dy = E_{0}(1 - 0.2x) \cdot [y]_{0}^{x} = E_{0}(1 - 0.2x) \cdot x$$

Distribute the $x$:

$$= E_{0}(x - 0.2x^2)$$

**Step B: Outer Integral (with respect to $x$)**

Now substitute this result into the outer integral and integrate from $0$ to $2$:

$$\iint_{R} E \, dA = \int_{0}^{2} E_{0}(x - 0.2x^2) \, dx$$

Factor out the constant $E_{0}$ and find the antiderivative:

$$= E_{0} \left[ \frac{x^2}{2} - \frac{0.2x^3}{3} \right]_{0}^{2}$$

Convert $0.2$ to the fraction $\frac{1}{5}$ to make evaluation clean ($\frac{0.2}{3} = \frac{1}{15}$):

$$= E_{0} \left[ \frac{x^2}{2} - \frac{x^3}{15} \right]_{0}^{2}$$

Evaluate at the upper limit $x = 2$ (the lower limit of $0$ gives $0$):

$$= E_{0} \left( \frac{(2)^2}{2} - \frac{(2)^3}{15} \right) = E_{0} \left( \frac{4}{2} - \frac{8}{15} \right)$$

$$= E_{0} \left( 2 - \frac{8}{15} \right) = E_{0} \left( \frac{30}{15} - \frac{8}{15} \right) = \frac{22}{15}E_{0}$$

## Part 2: Find the Average Irradiance on $R$

The average value formula for a function over a region $R$ is defined as:

$$E_{\text{avg}} = \frac{1}{\text{Area}(R)} \iint_{R} E \, dA$$

### 1. Compute the Area of the Wedge $R$

The region $R$ forms a right triangle with a base along the x-axis from $0$ to $2$ ($\text{base} = 2$) and a height determined by the line $y = x$ at $x = 2$ ($\text{height} = 2$).

$$\text{Area}(R) = \frac{1}{2} \times \text{base} \times \text{height} = \frac{1}{2} \times 2 \times 2 = 2$$

_(Alternatively, you can compute it via integration: $\int_{0}^{2} \int_{0}^{x} 1 \, dy \, dx = \int_{0}^{2} x \, dx = \left[\frac{x^2}{2}\right]_0^2 = 2$.)_

### 2. Calculate $E_{\text{avg}}$

Substitute the area and the value of your double integral into the average formula:

$$E_{\text{avg}} = \frac{1}{2} \times \left( \frac{22}{15}E_{0} \right) = \frac{11}{15}E_{0}$$

## Final Answer

1. **Total Irradiance Integral:** $\iint_{R} E \, dA = \frac{22}{15}E_{0}$
    
2. **Average Irradiance:** $E_{\text{avg}} = \frac{11}{15}E_{0}$ (or approximately $0.733E_{0}$)