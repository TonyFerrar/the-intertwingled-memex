An electrical engineer monitors an Alternating Current (AC) voltage signal $V(t)$ (in Volts) over a microsecond timeline. Over one complete cycle lasting 4 microseconds, the signal forms a perfect triangle above the time axis from $t = 0$ to $t = 2$ with a peak of $+10\text{ V}$, and an identical inverted triangle below the time axis from $t = 2$ to $t = 4$ with a trough of $-10\text{ V}$.

Compute the net voltage accumulation over the full cycle by evaluating:

$$\int_{0}^{4} V(t) \, dt$$

#### Step-by-Step Solution:

1. **Calculate the positive cycle ($t = 0$ to $t = 2$):**
    
    - $\text{base} = 2$, $\text{height} = 10$
        
    - $\text{Area}_{\text{positive}} = \frac{1}{2} \times 2 \times 10 = 10\text{ V}\cdot\mu\text{s}$
        
2. **Calculate the negative cycle ($t = 2$ to $t = 4$):**
    
    - $\text{base} = 2$, $\text{height} = 10$
        
    - $\text{Area}_{\text{negative}} = \frac{1}{2} \times 2 \times 10 = 10\text{ V}\cdot\mu\text{s} \rightarrow \text{Signed value} = -10\text{ V}\cdot\mu\text{s}$
        
3. **Compute total value:**
    
    $$\int_{0}^{4} V(t) \, dt = 10 - 10 = 0\text{ V}\cdot\mu\text{s}$$
    

#### Engineering Meaning of the Answer:

> A net signed area of exactly **0** means the **average voltage** over this full cycle is $0\text{ V}$. This confirms that the signal is a pure alternating current wave with zero "DC offset". For power grid systems, this balance is crucial because any non-zero net area represents a residual direct current component that can cause transformer cores to magnetically saturate, overheat, and fail.