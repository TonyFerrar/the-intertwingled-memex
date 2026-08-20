A communications engineer is analyzing an audio signal that propagates through a fiber-optic cable in both past and future time ($-\infty < t < \infty$). The voltage curve of this specific transient signal is modeled by the two-sided attenuation function $v(t) = e^{-\vert{}t\vert{}}$. To find the total electrical energy $E$ carried by the signal, the engineer must integrate across the entire infinite timeline:

$$E = \int_{-\infty}^{\infty} e^{-\vert{}t\vert{}} \, dt$$

#### **Step 1: Structural Setup**

This problem presents two structural challenges: the bounds are doubly infinite ($-\infty$ to $\infty$), and the absolute value function $\vert{}t\vert{}$ changes definition sharply at $t = 0$. You must split the domain at $0$ and introduce two independent limits:

$$E = \lim_{s \to -\infty} \int_{s}^{0} e^{t} \, dt + \lim_{b \to \infty} \int_{0}^{b} e^{-t} \, dt$$

#### **Step 2: Integration and Limit Execution**

- **Left Piece (Past Time):**
    
    $$\lim_{s \to -\infty} \left[ e^t \right]_s^0 = \lim_{s \to -\infty} (e^0 - e^s) = 1 - 0 = 1$$
    
- **Right Piece (Future Time):**
    
    $$\lim_{b \to \infty} \left[ -e^{-t} \right]_0^b = \lim_{b \to \infty} (-e^{-b} - (-e^0)) = 0 + 1 = 1$$
    

Total Energy: $E = 1 + 1 = 2$

#### **Meaning of the Answer & Real-Life Application**

- **Meaning:** The total signal energy converges to exactly **2 Joules**. Even though the signal technically lasts forever across an infinite timeline, its total energy capacity is strictly finite and bounded because the wave dampens rapidly as time passes.
    
- **Application:** Signal processing engineers use this bounded convergence value to design physical electrical filters and amplifiers. Because the total energy is finite, they know this signal can safely pass through hardware transceivers without overloading the system circuitry, causing thermal clipping, or melting the electrical components.
    