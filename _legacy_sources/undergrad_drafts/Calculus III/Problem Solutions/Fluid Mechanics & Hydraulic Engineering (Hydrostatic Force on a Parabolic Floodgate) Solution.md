**Problem:** A parabolic vertical floodgate blocking an active irrigation canal outlet is modeled by a region $R$ bounded by the curve $x = y^2$ and the vertical wall line $x = 4$ (with dimensions in meters). The water level reaches the top of the gate at $y = 2$, and the hydrostatic water pressure distributed across the surface increases directly with depth according to the formula:

$$P(x, y) = \rho g (2 - y) \quad (\text{N/m}^2)$$

_(where $\rho$ is water density and $g$ is gravity, treated as constants)._ Compute the total horizontal force $F$ exerted by the fluid against the gate by evaluating $F = \iint_R P(x, y) \, dA$.

**Solution:**

Because the boundary is given as $x = y^2$ and the water depth relates strictly to a vertical coordinate change, choosing a **Type 2 horizontal layout** simplifies the setup:

- Outer constant bounds for $y$: From the bottom of the gate at $y = 0$ to the top of the water line at $y = 2$.
    
- Inner bounds for $x$: Horizontal slices enter along the parabolic plate edge $x = y^2$ and exit at the vertical support wall $x = 4$.
    

1. **Set up the Double Integral:**
    
    $$F = \rho g \int_{0}^{2} \int_{y^2}^{4} (2 - y) \, dx \, dy$$
    
2. **Inner Integral (with respect to $x$):**
    
    The term $(2 - y)$ acts as a constant with respect to $x$:
    
    $$\int_{y^2}^{4} (2 - y) \, dx = (2 - y) \cdot [x]_{y^2}^{4} = (2 - y)(4 - y^2)$$
    
    Expand the expression to make the next step easy:
    
    $$= 8 - 2y^2 - 4y + y^3 = 8 - 4y - 2y^2 + y^3$$
    
3. **Outer Integral (with respect to $y$):**
    
    $$F = \rho g \int_{0}^{2} (8 - 4y - 2y^2 + y^3) \, dy$$
    
    $$F = \rho g \left[ 8y - 2y^2 - \frac{2}{3}y^3 + \frac{1}{4}y^4 \right]_{0}^{2}$$
    
    Evaluate at the upper limit $y = 2$:
    
    $$F = \rho g \left( 8(2) - 2(2)^2 - \frac{2}{3}(2)^3 + \frac{1}{4}(2)^4 \right)$$
    
    $$F = \rho g \left( 16 - 8 - \frac{16}{3} + 4 \right) = \rho g \left( 12 - \frac{16}{3} \right) = \rho g \left( \frac{36 - 16}{3} \right) = \frac{20}{3}\rho g$$
    

#### Meaning of the Answer & Real-Life Application

- **Meaning of the Answer:** The resulting value $\frac{20}{3}\rho g$ (or approximately $65.4\text{ kN}$ substituting standard water parameters) represents the net concentrated fluid load acting directly against the face of the curved gate.
    
- **How it applies in real life:** Civil and hydraulic engineers use the net hydrostatic force computed from general boundaries to determine how thick the steel gate walls must be and to select high-load hydraulic pistons that can lift the gate open safely against fluid pressure during flash flood scenarios.