**Context:** In digital audio processing, an Infinite Impulse Response (IIR) filter is used to dampen unwanted microphone background hiss or echo. A sound engineer models a feedback loop where the signal amplitude $A$ at digital sample step $n+1$ is a fraction of the previous sample's amplitude.

The filter is programmed with the following recurrence relation:

$$A_{n+1} = 0.4A_n \quad \text{with an initial hiss amplitude of } A_1 = 80\text{ mV}$$

1. Find the explicit formula for the signal amplitude at sample $n$.
    
2. Calculate the exact amplitude of the background hiss remaining by the 4th sample ($A_4$).
    
