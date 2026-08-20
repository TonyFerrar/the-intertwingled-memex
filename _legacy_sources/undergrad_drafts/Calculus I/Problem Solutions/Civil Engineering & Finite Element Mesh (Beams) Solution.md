A civil engineer is analyzing a $12$-meter concrete structural beam support inside a building. Due to variable building loads, the internal bending stress distribution along the beam is modeled by $S(x) = 3x(12 - x)$ (in kiloNewtons $\cdot$ meters). To perform a preliminary manual Finite Element Analysis (FEA), partition the beam into $n = 3$ elements and use a **Midpoint Riemann Sum** to estimate the total accumulated stress profile.

#### Solution:

1. **Partition the domain:**
    
    $$\Delta x = \frac{12 - 0}{3} = 4 \text{ meters per element}$$
    
2. **Identify subintervals and midpoints:**
    
    - Element 1: $[0, 4] \rightarrow \text{Midpoint } m_1 = 2$
        
    - Element 2: $[4, 8] \rightarrow \text{Midpoint } m_2 = 6$
        
    - Element 3: $[8, 12] \rightarrow \text{Midpoint } m_3 = 10$
        
3. **Calculate stress at midpoints:**
    
    - $S(2) = 3(2)(12 - 2) = 6(10) = 60 \text{ kNm}$
        
    - $S(6) = 3(6)(12 - 6) = 18(6) = 108 \text{ kNm}$
        
    - $S(10) = 3(10)(12 - 10) = 30(2) = 60 \text{ kNm}$
        
4. **Compute the Riemann sum:**
    
    $$\text{Accumulated Stress Factor} \approx \Delta x \cdot [S(2) + S(6) + S(10)]$$
    
    $$\text{Accumulated Stress Factor} \approx 4 \cdot (60 + 108 + 60) = 4 \cdot (228) = 912 \text{ kN}\cdot\text{m}^2$$
    

#### Meaning & Real-Life Application:

- **Meaning of the answer:** The value $912 \text{ kN}\cdot\text{m}^2$ scales proportionally to the total internal strain energy stored across the entire geometric profile of the beam under weight load.
    
- **How it applies:** This simple 3-element partition mimics how automated FEA engineering software analyzes buildings. Engineers use the midpoint valuation to catch peak stress behavior (which happens at the center of the beam, $x=6$, evaluated here at $108\text{ kNm}$). This tells the civil engineer exactly how much thick steel rebar must be embedded into the concrete matrix at different segments along the beam to prevent catastrophic structural collapse.