A civil engineer is evaluating the pressure distribution inside a specialized circular valve housing at a municipal water treatment facility. The total cumulative load profile along the curved internal wall is modeled by tracking the fluid vector changes across a cross-section using the following structural integral:

$$\int \frac{1}{x\sqrt{x^2 + 4}} \, dx$$

Evaluate the integral using right triangle geometry to map your final answer back to physical casing dimensions.

#### Step-by-Step Solution:

1. **Substitute:** Let $x = 2\tan\theta \implies dx = 2\sec^2\theta \, d\theta$. The radical reduces to $2\sec\theta$.
    
2. **Integrate in Theta-Space:**
    
    $$\int \frac{2\sec^2\theta}{(2\tan\theta)(2\sec\theta)} \, d\theta = \frac{1}{2}\int \frac{\sec\theta}{\tan\theta} \, d\theta = \frac{1}{2}\int \csc\theta \, d\theta = -\frac{1}{2}\ln|\csc\theta + \cot\theta| + C$$
    
3. **Construct the Reference Triangle (Skill 3):**
    
    - Since $\tan\theta = \frac{x}{2}$, label the **Opposite = $x$** and the **Adjacent = 2**.
        
    - Calculate the hypotenuse: $\text{Hypotenuse} = \sqrt{x^2 + 2^2} = \sqrt{x^2 + 4}$.
        
4. **Extract Ratios:** Read cosecant and cotangent directly off the triangle:
    
    - $\csc\theta = \frac{\text{Hypotenuse}}{\text{Opposite}} = \frac{\sqrt{x^2 + 4}}{x}$
        
    - $\cot\theta = \frac{\text{Adjacent}}{\text{Opposite}} = \frac{2}{x}$
        
5. **Back-Substitute:** Replace the trigonometric terms with their spatial equations:
    
    $$-\frac{1}{2}\ln\left| \frac{\sqrt{x^2 + 4}}{x} + \frac{2}{x} \right| + C = -\frac{1}{2}\ln\left| \frac{\sqrt{x^2 + 4} + 2}{x} \right| + C$$
    

#### Meaning of the Answer & Real-Life Application:

> The exact final logarithmic equation allows the civil engineer to plot a precise curve of the cumulative hydrostatic forces exerted against the valve body at any linear position ($x$) along the pipeline. By translating the calculus solution back into physical spatial variables via the reference triangle, structural engineers can easily identify points of peak stress. This dictates exactly where the valve casing needs thicker steel walls to withstand high-pressure water spikes and prevent catastrophic bursting failures.