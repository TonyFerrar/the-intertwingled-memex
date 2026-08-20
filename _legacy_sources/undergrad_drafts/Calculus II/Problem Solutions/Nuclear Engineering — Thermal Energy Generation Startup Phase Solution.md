A nuclear engineer is evaluating the rate of heat production inside a reactor core section during a critical 2-minute startup sequence. The total thermal energy $H$ (in Megajoules) generated from time $t = 0$ to $t = 2$ minutes is modeled by the following definite integral:

$$H = \int_{0}^{2} 10t e^{-t^2} \, dt$$

Determine the total thermal energy output produced during this startup phase.

#### Step-by-Step Solution:

- **Step 1: Choose $u$ and calculate $du$.** Set $u$ equal to the exponential inner function:
    
    $$u = -t^2$$
    
    $$du = -2t \, dt$$
    
- **Step 2: Introduce the balancing constant factor.** The integrand features a positive term of $10t \, dt$. To transform our $du$ expression into a perfect match, multiply both sides by $-5$:
    
    $$-5 \, du = 10t \, dt$$
    
- **Step 3: Update the integration boundaries.** Convert the time units ($t$) into transformed core units ($u$) using $u = -t^2$:
    
    - Lower limit: When $t = 0 \implies u = -(0)^2 = 0$
        
    - Upper limit: When $t = 2 \implies u = -(2)^2 = -4$
        
- **Step 4: Substitute components and simplify.**
    
    $$H = \int_{0Viewport}^{-4} e^u \cdot (-5 \, du) = -5 \int_{0}^{-4} e^u \, du$$
    
    Invert the limits to eliminate the negative sign:
    
    $$H = 5 \int_{-4}^{0} e^u \, du$$
    
- **Step 5: Complete the definite integration.**
    
    $$H = 5 \Big[ e^u \Big]_{-4}^{0} = 5 \left( e^0 - e^{-4} \right)$$
    
    Using the exponential values $e^0 = 1$ and $e^{-4} \approx 0.0183$:
    
    $$H = 5(1 - 0.0183) = 5(0.9817) \approx 4.91 \text{ Megajoules}$$
    

#### Meaning of the Answer & Engineering Real-Life Application:

The definite integral indicates that the reactor core section produces **4.91 Megajoules** of thermal energy during the initial 2-minute startup period.

In automated nuclear safety engineering, cooling pumps must be dynamically programmed to scale up their volumetric flow rates to match the exact pace of thermal energy output. If an engineer misses a constant factor or fails to properly shift integration boundaries, the calculated heat load will be incorrect. Ensuring precise mechanical evaluation allows automated control systems to match coolant flow to the exact heat output, preventing hazardous thermal stress or core meltdowns.