Civil engineers are designing a high-capacity municipal water delivery pipeline. The volumetric flow rate $Q$ (in $\text{m}^3/\text{s}$) through a section of the pipe depends on the internal pipe radius $r$ (in meters) and the pressure drop gradient $P$ (in $\text{kPa/m}$), governed by the simplified fluid-dynamics model:

$$Q(r, P) = 5r^4P$$

During field installation, corrosion and manufacturing tolerances introduce slight deviations in the physical parameters.

- The nominal pipe radius is measured at $r = 0.5\text{ m}$ with an error tolerance of $dr = \pm 0.01\text{ m}$.
    
- The pressure drop gradient is nominalized at $P = 4\text{ kPa/m}$ with an operational fluctuation of $dP = \pm 0.2\text{ kPa/m}$.
    

Using total differentials, calculate the estimated maximum variation in flow rate ($dQ$) and identify which parameter the system is most sensitive to.

#### **Step-by-Step Solution:**

1. **State the Total Differential Formula:**
    
    $$dQ = \frac{\partial Q}{\partial r}dr + \frac{\partial Q}{\partial P}dP$$
    
2. **Compute the Sensitivity Coefficients (Partials):**
    
    - $\frac{\partial Q}{\partial r} = 20r^3P$
        
    - $\frac{\partial Q}{\partial P} = 5r^4$
        
3. **Evaluate Sensitivity Coefficients at Nominal States ($r = 0.5$, $P = 4$):**
    
    - $S_r = \frac{\partial Q}{\partial r} = 20(0.5)^3(4) = 20(0.125)(4) = 10\text{ m}^2/\text{s}$
        
    - $S_P = \frac{\partial Q}{\partial P} = 5(0.5)^4 = 5(0.0625) = 0.3125\text{ m}^4/(\text{kPa}\cdot\text{s})$
        
4. **Calculate the Contributions to $dQ$:**
    
    $$dQ = (10)(\pm 0.01) + (0.3125)(\pm 0.2)$$
    
    $$dQ = \pm 0.10 + \pm 0.0625 = \pm 0.1625\text{ m}^3/\text{s}$$
    

#### **Engineering Interpretation:**

- **Meaning of the Answer:** The total pipeline flow rate will vary by up to $\pm 0.1625\text{ m}^3/\text{s}$ from its nominal value due to the combined structural variations.
    
- **Real-Life Application:** Comparing the standalone sensitivity coefficients shows that $S_r = 10$ is dramatically higher than $S_P = 0.3125$. Because radius is raised to the fourth power ($r^4$), a tiny change of just $1\text{ cm}$ in pipe radius changes flow rates twice as much as a standard pressure variation. Civil engineers apply this sensitivity insight to prioritize strict quality control on pipe dimensions during manufacturing over buying tighter pressure-regulation valves, optimizing the project budget while ensuring predictable water delivery.
    