A civil engineer is designing a non-uniform concrete support beam for a bridge structure. The width of the beam expands along its length from $x = 1$ meter to $x = e$ meters. Because of a specialized chemical setting agent, the density profile of the concrete varies logarithmically. To locate the structural center of mass (the centroid) where the main load-bearing pillar must be anchored, the engineer must evaluate the first moment of mass integral given by:

$$M = \int_{1}^{e} x \ln x \, dx$$

#### Solution:

1. **Apply Skill 1 (LIATE Selection):** We have an algebraic position variable ($x$) and a logarithmic density variable ($\ln x$). Because Logarithmic (**L**) outranks Algebraic (**A**), we must prioritize the logarithm as $u$:
    
    - $u = \ln x \implies du = \frac{1}{x} \, dx$
        
    - $dv = x \, dx \implies v = \frac{1}{2}x^2$
        
2. **Evaluate the integration by parts:**
    
    $$\int_{1}^{e} x \ln x \, dx = \left[ \left(\frac{1}{2}x^2\right)(\ln x) \right]_{1}^{e} - \int_{1}^{e} \left(\frac{1}{2}x^2\right)\left(\frac{1}{x} \, dx\right)$$
    
    $$\int_{1}^{e} x \ln x \, dx = \left[ \frac{1}{2}x^2 \ln x \right]_{1}^{e} - \frac{1}{2} \int_{1}^{e} x \, dx$$
    
    $$\int_{1}^{e} x \ln x \, dx = \left[ \frac{1}{2}x^2 \ln x - \frac{1}{4}x^2 \right]_{1}^{e}$$
    
3. **Plug in boundaries:**
    
    - **Upper ($x = e$):** $\frac{1}{2}e^2 \ln(e) - \frac{1}{4}e^2 = \frac{1}{2}e^2(1) - \frac{1}{4}e^2 = \frac{1}{4}e^2$
        
    - **Lower ($x = 1$):** $\frac{1}{2}(1)^2 \ln(1) - \frac{1}{4}(1)^2 = 0 - \frac{1}{4} = -\frac{1}{4}$
        
        $$\text{Total} = \left(\frac{1}{4}e^2\right) - \left(-\frac{1}{4}\right) = \frac{1}{4}e^2 + \frac{1}{4} = \frac{1}{4}(e^2 + 1) \approx 2.097$$
        

#### Meaning of the Answer & Real-Life Application:

The value of 2.097 represents the physical mass distribution moment of the concrete support beam. By combining this value with the beam's total mass, the civil engineer calculates the precise geometric coordinate for the center of gravity. Placing the structural support pillar exactly at this point balances the non-uniform weight, eliminating unwanted twisting forces (torsional stress) and ensuring the bridge remains stable under high aerodynamic and traffic loads.