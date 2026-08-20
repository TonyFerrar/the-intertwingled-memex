An electrical engineer samples a discrete voltage signal over a specific duration. The voltage readings at any discrete time interval $i$ are modeled by the sequence $V_i = \frac{5i}{n}$ millivolts. The total energy metric of this digital sequence requires evaluating a squared sum multiplied by a time interval constant: $\text{Energy} = \sum_{i=1}^{n} \frac{3}{n} (V_i)^2$. Find the closed-form expression for this signal energy metric in terms of the total number of samples $n$.

#### Solution:

1. **Substitute $V_i$ into the energy equation:**
    
    $$\text{Energy} = \sum_{i=1}^{n} \frac{3}{n} \left( \frac{5i}{n} \right)^2$$
    
2. **Expand the square and multiply terms:**
    
    $$\text{Energy} = \sum_{i=1}^{n} \frac{3}{n} \cdot \frac{25i^2}{n^2} = \sum_{i=1}^{n} \frac{75i^2}{n^3}$$
    
3. **Isolate the summation index $i^2$:**
    
    $$\text{Energy} = \frac{75}{n^3} \sum_{i=1}^{n} i^2$$
    
4. **Substitute the consecutive squared integers formula:**
    
    $$\text{Energy} = \frac{75}{n^3} \cdot \left[ \frac{n(n+1)(2n+1)}{6} \right]$$
    
5. **Simplify the constants and expand the polynomial:**
    
    $$\text{Energy} = \frac{75}{6} \cdot \frac{2n^3 + 3n^2 + n}{n^3} = 12.5 \left( 2 + \frac{3}{n} + \frac{1}{n^2} \right) = 25 + \frac{37.5}{n} + \frac{12.5}{n^2}$$
    

#### Meaning & Real-Life Application:

- **Meaning of the answer:** The expression $25 + \frac{37.5}{n} + \frac{12.5}{n^2}$ represents the exact formula for the signal's energy profile based on how densely it is sampled ($n$).
    
- **How it applies:** Electrical engineers use these closed-form algebraic expressions to program microchips (like DSPs or microcontrollers). Instead of forcing a low-power device to run a heavy processing loop calculating millions of squared entries individually, the processor can simply use this algebraic shortcut to compute signal properties instantly based on the chosen sampling rate $n$.
    