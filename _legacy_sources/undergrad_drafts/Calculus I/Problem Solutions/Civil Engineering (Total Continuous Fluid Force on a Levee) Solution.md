A civil engineer is designing a concrete levee wall to hold back a reservoir of water. The hydrostatic pressure acting on the wall varies continuously with the depth $x$. The discrete approximation formula for the total force (in kiloNewtons) exerted by the water against a section of the wall across an $n$-element grid is modeled by:

$$\text{Force}_n = \frac{90n^2 + 45n}{2n^2}$$

Compute the exact continuous fluid force by evaluating the limit of this expression as $n \to \infty$.

#### Solution:

1. **Set up the limit equation for continuous fluid force:**
    
    $$\text{Force}_{\text{exact}} = \lim_{n \to \infty} \frac{90n^2 + 45n}{2n^2}$$
    
2. **Separate the fraction into individual terms to isolate $n$:**
    
    $$\text{Force}_{\text{exact}} = \lim_{n \to \infty} \left( \frac{90n^2}{2n^2} + \frac{45n}{2n^2} \right) = \lim_{n \to \infty} \left( 45 + \frac{22.5}{n} \right)$$
    
3. **Evaluate the limit at infinity:**
    
    - $\lim_{n \to \infty} 45 = 45$
        
    - $\lim_{n \to \infty} \frac{22.5}{n} = 0$
        
    
    $$\text{Force}_{\text{exact}} = 45 + 0 = 45 \text{ kiloNewtons}$$
    

#### Meaning & Real-Life Application:

- **Meaning of the answer:** The value of $45\text{ kN}$ is the exact, continuous physical force that the standing water exerts against that specific section of the levee, completely stripping away the geometric errors present in rough, chunked approximations.
    
- **How it applies:** In structural safety designs, engineers cannot afford to rely on loose approximations, as a minor underestimation could cause structural cracking. Evaluating the exact infinite limit gives the precise load value used to dictate how thick the concrete wall must be cast and how deeply the structural anchor foundations must be driven into the earth to resist sliding or overturning from water pressure.
    
