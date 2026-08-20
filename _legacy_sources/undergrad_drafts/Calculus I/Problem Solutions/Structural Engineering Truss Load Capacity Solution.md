**Problem Statement:** A structural engineer has modeled the maximum load capacity $L$ (in kilonewtons) that a reinforced structural truss can handle before buckling. The capacity function is governed by the thickness $t$ (in centimeters) of its core support plate: $L(t) = 12t^3 - 180t^2 + 720t$. Manufacturing machinery limitations restrict the allowable plate thickness to a closed interval domain of $t \in [0, 8]\text{ cm}$. Find the absolute maximum load capacity the truss can achieve and determine the corresponding plate thickness.

#### Solution:

1. **Find Critical Points:** Find $L'(t)$ and set it to zero:
    
    $$L'(t) = 36t^2 - 360t + 720 \implies 36(t^2 - 10t + 20) = 0$$
    
    Using the quadratic formula for $t^2 - 10t + 20 = 0$:
    
    $$t = \frac{10 \pm \sqrt{(-10)^2 - 4(1)(20)}}{2} = \frac{10 \pm \sqrt{20}}{2} = 5 \pm \sqrt{5}$$
    
    - $t_1 = 5 - \sqrt{5} \approx 2.76\text{ cm}$
        
    - $t_2 = 5 + \sqrt{5} \approx 7.24\text{ cm}$
        
2. **Filter Through Domain:** Both $2.76\text{ cm}$ and $7.24\text{ cm}$ fall inside the allowable manufacturing domain of $[0, 8]$.
    
3. **Evaluate and Compare Outputs:** Evaluate $L(t)$ at the endpoints and both critical points:
    
    - **Endpoint:** $L(0) = 12(0)^3 - 180(0)^2 + 720(0) = 0\text{ kN}$
        
    - **Critical Point 1:** $L(2.76) = 12(2.76)^3 - 180(2.76)^2 + 720(2.76) \approx 867.7\text{ kN}$
        
    - **Critical Point 2:** $L(7.24) = 12(7.24)^3 - 180(7.24)^2 + 720(7.24) \approx 332.3\text{ kN}$
        
    - **Endpoint:** $L(8) = 12(8)^3 - 180(8)^2 + 720(8) = 384\text{ kN}$
        

#### Meaning of the Answer & Real-Life Application:

- **The Meaning:** The absolute maximum load capacity is $867.7\text{ kN}$, which occurs when the support plate is manufactured to a precise thickness of $2.76\text{ cm}$.
    
- **Real-Life Application:** This problem reveals a counterintuitive physical reality common in mechanical and civil engineering: adding more material does not always make a structure stronger. Notice that a thicker plate ($7.24\text{ cm}$) actually results in a much lower load capacity ($332.3\text{ kN}$) because excessive thickness adds massive internal dead weight, causing the truss to buckle prematurely under its own bulk. Global extrema evaluation allows engineers to find the precise sweet spot where material efficiency perfectly aligns with structural performance.