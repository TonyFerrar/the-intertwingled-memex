**Problem:** A rectangular micro-capacitor plate on a semiconductor wafer occupies the region $R = [0, 3] \times [0, 2]$ (units in millimeters). Due to a manufacturing doping gradient, the surface charge density $\sigma(x, y)$ across the plate is given by:

$$\sigma(x, y) = 5xy \cdot \cos(x^2y) \quad (\text{nC/mm}^2)$$

Find the total net electrical charge $Q$ accumulated on the plate.

**Solution:**

The total charge is found by integrating the charge density function over the plate's area:

$$Q = \iint_R \sigma(x, y) \, dA = \int_{0}^{2} \int_{0}^{3} 5xy \cdot \cos(x^2y) \, dx \, dy$$

_Note: Integrating with respect to $x$ first is much easier here because the term $x$ outside the cosine matches the derivative of the inside $x^2$ term._

1. **Inner Integral (with respect to $x$):**
    
    $$\int_{0}^{3} 5xy \cdot \cos(x^2y) \, dx$$
    
    Let $u = x^2y \implies du = 2xy \, dx \implies xy \, dx = \frac{du}{2}$.
    
    Changing limits: When $x=0 \implies u=0$. When $x=3 \implies u=9y$.
    
    $$\int_{0}^{9y} 5 \cdot \cos(u) \frac{du}{2} = \frac{5}{2} \left[ \sin(u) \right]_{0}^{9y} = \frac{5}{2}\sin(9y)$$
    
2. **Outer Integral (with respect to $y$):**
    
    $$Q = \int_{0}^{2} \frac{5}{2}\sin(9y) \, dy = \frac{5}{2} \left[ -\frac{1}{9}\cos(9y) \right]_{0}^{2}$$
    
    $$= -\frac{5}{18} \left( \cos(18) - \cos(0) \right) = -\frac{5}{18}(\cos(18) - 1) = \frac{5}{18}(1 - \cos(18))$$
    
    Using a calculator (with $18$ in radians, $\cos(18) \approx 0.6603$):
    
    $$Q \approx \frac{5}{18}(1 - 0.6603) \approx 0.2778 \times 0.3397 \approx 0.0944\text{ nC}$$
    

#### Meaning of the Answer & Real-Life Application

- **Meaning of the Answer:** The final value of approximately $0.0944\text{ nC}$ represents the net quantity of electrostatic charge stored across the entire microscopic plate after accounting for how the density oscillates and balances out across the coordinates.
    
- **How it applies in real life:** In integrated circuit (IC) design, unexpected charge variations alter the capacitance values of micro-components. Electrical engineers calculate total net charge using double integrals to accurately predict the RC time constants (switching speeds) of transistors and memory cells, preventing timing bugs in smartphone processors and computer chips.