An aerospace electrical engineer is configuring a radio-frequency (RF) signal transmitter for a satellite ground station. The total output power radiated, $W$ (in Watts), depends on the driving loop current $I$ (in Amperes) and the antenna load impedance $Z$ (in Ohms):

$$W(I, Z) = I^2Z$$

The diagnostic test instruments provide independent measurements with known uncertainty thresholds:

- Nominal current $I = 3.0\text{ A}$ with an instrument uncertainty of $\sigma_I = 0.05\text{ A}$.
    
- Nominal impedance $Z = 50.0\text{ }\Omega$ with an instrument uncertainty of $\sigma_Z = 0.8\text{ }\Omega$.
    

Determine the total absolute uncertainty ($\sigma_W$) of the transmitted power using the RSS method, and express the final result as a percentage.

#### **Step-by-Step Solution:**

1. **Calculate the Nominal Power ($W$):**
    
    $$W = I^2Z = (3.0)^2 \cdot 50.0 = 9 \cdot 50 = 450.0\text{ Watts}$$
    
2. **Compute the Partial Derivatives:**
    
    - $\frac{\partial W}{\partial I} = 2IZ$
        
    - $\frac{\partial W}{\partial Z} = I^2$
        
3. **Evaluate Partials at the Nominal Test Points ($I = 3.0$, $Z = 50.0$):**
    
    - $\frac{\partial W}{\partial I} = 2(3.0)(50.0) = 300\text{ W/A}$
        
    - $\frac{\partial W}{\partial Z} = (3.0)^2 = 9\text{ W/}\Omega$
        
4. **Execute Root-Sum-of-Squares (RSS) Propagation:**
    
    $$\sigma_W = \sqrt{\left(\frac{\partial W}{\partial I} \sigma_I\right)^2 + \left(\frac{\partial W}{\partial Z} \sigma_Z\right)^2}$$
    
    $$\sigma_W = \sqrt{(300 \cdot 0.05)^2 + (9 \cdot 0.8)^2}$$
    
    $$\sigma_W = \sqrt{(15)^2 + (7.2)^2} = \sqrt{225 + 51.84} = \sqrt{276.84} \approx 16.638\text{ Watts}$$
    
5. **Calculate Percentage Uncertainty:**
    
    $$\text{Percent Uncertainty} = \frac{16.638}{450.0} \times 100\% \approx 3.70\%$$
    

#### **Engineering Interpretation:**

- **Meaning of the Answer:** The transmitter is operating at $450.0 \pm 16.6\text{ W}$, carrying a total random measurement uncertainty of $3.70\%$.
    
- **Real-Life Application:** In aerospace telecommunications, maintaining power metrics within explicit limits is vital to pass FCC regulations and prevent signal attenuation through the atmosphere. The RSS breakdown highlights that uncertainty in the current reading generates $15\text{ W}$ of potential error, whereas the impedance accounts for only $7.2\text{ W}$. Systems engineers use these metrics to determine if the transmitter satisfies safety requirements or if they need to invest in a more precise current-sensing ammeter to decrease overall telemetry error margins.