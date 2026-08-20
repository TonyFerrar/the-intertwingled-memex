# Skill 3: Model System Sensitivity in Engineering Contexts

## Conceptual Notes & Core Framework

In engineering, systems are rarely perfect or static. Components age, environmental conditions shift, and manufacturing tolerances introduce slight variations. **Sensitivity analysis** is the mathematical framework used to quantify how small shifts or errors in input variables ripple through a system to affect the final outcome.

We leverage two primary tools from multivariable calculus to model this behavior: **Total Differentials** (for direct variations) and **Uncertainty Propagation via Root-Sum-of-Squares (RSS)** (for random, independent errors).

### 1. The Total Differential (Linear Sensitivity)

If a dependent system variable $z$ depends directly on inputs $x$ and $y$, the total differential $dz$ estimates the change in $z$ resulting from small changes $dx$ and $dy$:

$$dz = \frac{\partial z}{\partial x}dx + \frac{\partial z}{\partial y}dy$$

The partial derivatives ($\frac{\partial z}{\partial x}$ and $\frac{\partial z}{\partial y}$) act as **Sensitivity Coefficients** ($S_x$ and $S_y$). They tell us the rate of change of the output per unit change in that specific input, assuming all other variables remain locked.

### 2. Uncertainty Propagation (Root-Sum-of-Squares / RSS)

When measuring physical parameters, errors are often random and independent. If we know the standard deviations or uncertainties ($\sigma_x, \sigma_y$) of our measurements, we cannot simply add the errors together because it is statistically unlikely that all worst-case errors occur simultaneously in the same direction.

Instead, assuming the variations are independent and uncorrelated, we scale each uncertainty by its respective sensitivity coefficient and sum them quadratically using the **RSS formula**:

$$\sigma_z = \sqrt{\left(\frac{\partial z}{\partial x} \sigma_x\right)^2 + \left(\frac{\partial z}{\partial y} \sigma_y\right)^2}$$

Engineers use this to report final values with a confidence interval ($z \pm \sigma_z$) and calculate the **Percent Uncertainty** to check if the design meets reliability tolerances:

$$\text{Percent Uncertainty} = \frac{\sigma_z}{z} \times 100\%$$

## Sample Problems

### Problem 1: Pure Mathematical Exercise

A system function is defined by $z(x, y) = \frac{x^2}{y}$.

1. If the nominal measured values are $x = 6$ and $y = 3$, calculate the nominal value of $z$.
    
2. If the independent uncertainties in the measurements are $\sigma_x = 0.1$ and $\sigma_y = 0.05$, use the RSS formula to find the absolute uncertainty $\sigma_z$.
    

#### **Step-by-Step Solution:**

1. **Calculate Nominal Value:**
    
    $$z(6, 3) = \frac{6^2}{3} = \frac{36}{3} = 12$$
    
2. **Compute Partial Derivatives (Sensitivity Coefficients):**
    
    - $\frac{\partial z}{\partial x} = \frac{2x}{y}$
        
    - $\frac{\partial z}{\partial y} = -\frac{x^2}{y^2}$
        
3. **Evaluate Partials Numerically at $(6,3)$:**
    
    - $\frac{\partial z}{\partial x} = \frac{2(6)}{3} = 4$
        
    - $\frac{\partial z}{\partial y} = -\frac{6^2}{3^2} = -\frac{36}{9} = -4$
        
4. **Apply the RSS Uncertainty Formula:**
    
    $$\sigma_z = \sqrt{\left(\frac{\partial z}{\partial x} \sigma_x\right)^2 + \left(\frac{\partial z}{\partial y} \sigma_y\right)^2}$$
    
    $$\sigma_z = \sqrt{(4 \cdot 0.1)^2 + (-4 \cdot 0.05)^2}$$
    
    $$\sigma_z = \sqrt{(0.4)^2 + (-0.2)^2} = \sqrt{0.16 + 0.04} = \sqrt{0.20} \approx 0.447$$
    

**Answer:** $z = 12 \pm 0.45$ (Percent Uncertainty $\approx 3.73\%$)

## Real-Life Engineering Application Problems

### Problem 2: [[Mechanical & Civil Engineering — Fluid Flow Sensitivity in a Water Supply Pipeline]]
[[Mechanical & Civil Engineering — Fluid Flow Sensitivity in a Water Supply Pipeline Solution]]


### Problem 3: [[Electrical & Computer Engineering — Uncertainty Matrix of an RF Telecom Transmitter]]
[[Electrical & Computer Engineering — Uncertainty Matrix of an RF Telecom Transmitter Solution]]
