**Context:** In digital audio processing, an Infinite Impulse Response (IIR) filter is used to dampen unwanted microphone background hiss or echo. A sound engineer models a feedback loop where the signal amplitude $A$ at digital sample step $n+1$ is a fraction of the previous sample's amplitude.

The filter is programmed with the following recurrence relation:

$$A_{n+1} = 0.4A_n \quad \text{with an initial hiss amplitude of } A_1 = 80\text{ mV}$$

1. Find the explicit formula for the signal amplitude at sample $n$.
    
2. Calculate the exact amplitude of the background hiss remaining by the 4th sample ($A_4$).
    

#### Solution

- **Step 1:** Write out the sequence expansion to find the explicit formula:
    
    - $A_1 = 80$
        
    - $A_2 = 0.4(80)$
        
    - $A_3 = 0.4(0.4 \cdot 80) = 80(0.4)^2$
        
    
    This geometric decay yields the explicit formula:
    
    $$A_n = 80(0.4)^{n-1}$$
    
- **Step 2:** Plug $n = 4$ directly into our new explicit formula:
    
    $$A_4 = 80(0.4)^{4-1} = 80(0.4)^3 = 80(0.064) = 5.12\text{ mV}$$
    

#### Meaning of the Answer & Real-Life Application

The calculation shows that by the time the audio processor processes the 4th data sample, the background noise amplitude has plummeted from **80 mV** down to just **5.12 mV**.

In real-life engineering, transforming the hardware's natural _recurrence relation_ into an _explicit formula_ allows engineers to mathematically prove how fast an audio filter eliminates noise. Because the sequence decays exponentially, it guarantees the user will experience crisp, clear audio almost instantly without any perceptible audio lag.
