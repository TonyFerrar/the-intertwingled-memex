During a structural health inspection of a steel bridge truss, engineers monitor the stress intensity factor $K$ (in $\text{MPa}\cdot\sqrt{\text{m}}$) around a critical micro-crack on a primary gusset plate. The intensity factor depends on the applied tension stress $\sigma$ (in $\text{MPa}$) and the physical length of the crack $a$ (in meters), modeled by:

$$K(\sigma, a) = 1.5\sigma \sqrt{a} = 1.5\sigma a^{0.5}$$

As heavy morning commuter traffic moves onto the bridge, the load-induced stress peaks. Simultaneously, due to structural fatigue, the crack lengthens dynamically over time $t$ (in minutes) according to the parameters:

- $\sigma(t) = 200 + 10t^2$
    
- $a(t) = 0.04 + 0.002t$
    

Calculate the dynamic rate of change of the stress intensity factor, $\frac{dK}{dt}$, at exactly $t = 2$ minutes.

#### **Step-by-Step Solution:**

1. **State the Chain Rule Formula:**
    
    $$\frac{dK}{dt} = \frac{\partial K}{\partial \sigma}\frac{d\sigma}{dt} + \frac{\partial K}{\partial a}\frac{da}{dt}$$
    
2. **Compute the Partial Derivatives:**
    
    - $\frac{\partial K}{\partial \sigma} = 1.5a^{0.5} = 1.5\sqrt{a}$
        
    - $\frac{\partial K}{\partial a} = 1.5\sigma \cdot (0.5a^{-0.5}) = \frac{0.75\sigma}{\sqrt{a}}$
        
3. **Compute Time Derivatives of the Parameters:**
    
    - $\frac{d\sigma}{dt} = \frac{d}{dt}(200 + 10t^2) = 20t$
        
    - $\frac{da}{dt} = \frac{d}{dt}(0.04 + 0.002t) = 0.002$
        
4. **Evaluate System Variables at $t = 2$:**
    
    - $\sigma(2) = 200 + 10(2)^2 = 240\text{ MPa}$
        
    - $a(2) = 0.04 + 0.002(2) = 0.044\text{ m}$
        
    - $\frac{d\sigma}{dt} = 20(2) = 40\text{ MPa/min}$
        
    - $\frac{da}{dt} = 0.002\text{ m/min}$
        
5. **Evaluate Partials Numerically at $t = 2$:**
    
    - $\frac{\partial K}{\partial \sigma} = 1.5\sqrt{0.044} \approx 0.31464$
        
    - $\frac{\partial K}{\partial a} = \frac{0.75(240)}{\sqrt{0.044}} = \frac{180}{0.20976} \approx 858.116$
        
6. **Combine the Branches:**
    
    $$\frac{dK}{dt} = (0.31464)(40) + (858.116)(0.002)$$
    
    $$\frac{dK}{dt} = 12.5856 + 1.7162 = 14.3018$$
    

#### **Engineering Interpretation:**

- **Meaning of the Answer:** At the 2-minute mark of traffic accumulation, the stress intensity factor around the structural flaw is expanding at a net total rate of approximately $+14.30\text{ MPa}\cdot\sqrt{\text{m}}/\text{min}$.
    
- **Real-Life Application:** In structural and civil engineering, fractures occur instantly if the stress intensity factor ($K$) exceeds the material's fracture toughness threshold. This quantitative calculation reveals that increasing traffic loading ($\sigma$) is the dominant driver pushing the beam toward a hazard condition (contributing $+12.59$ units), while geometric crack growth ($a$) contributes a smaller but steady growth component ($+1.72$ units). Bridge management software uses this multi-variable data to dynamically assess asset safety margins and trip automated alerts if load trends jeopardize structural integrity.
    