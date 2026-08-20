**Context:** Renewable energy engineers write software algorithms for solar tracking arrays. To maximize energy capture, the angle between incoming sunlight rays and the face of the solar panel must be monitored. Suppose the flat surface normal vector pointing straight out of a solar panel is tracking along the vector $\vec{n} = \langle 2, 2, 1 \rangle$. At a specific time of day, the vector pointing directly toward the incoming sun rays is $\vec{s} = \langle 0, 3, 4 \rangle$.

**Problem:** Use the dot product to find the angle $\theta$ between the panel's normal orientation vector $\vec{n}$ and the sun ray vector $\vec{s}$.

**Solution:**

1. Calculate the dot product:
    
    $$\vec{n} \cdot \vec{s} = (2)(0) + (2)(3) + (1)(4) = 0 + 6 + 4 = 10$$
    
2. Calculate the magnitudes:
    
    - $|\vec{n}| = \sqrt{2^2 + 2^2 + 1^2} = \sqrt{9} = 3$
        
    - $|\vec{s}| = \sqrt{0^2 + 3^2 + 4^2} = \sqrt{25} = 5$
        
3. Compute the angle:
    
    $$\cos\theta = \frac{10}{(3)(5)} = \frac{10}{15} = \frac{2}{3}$$
    
    $$\theta = \cos^{-1}\left(\frac{2}{3}\right) \approx 48.19^\circ$$
    

**Meaning of the Answer & Real-Life Application:**

- **$\theta \approx 48.19^\circ$** means the sun rays are striking the solar panel off-center by roughly $48^\circ$.
    
- Ideal solar power collection happens when sunlight hits a panel perfectly dead-on ($\theta = 0^\circ$). Because the dot product math shows a significant deviation, the mechanical tracking system's motorized gears will read this angle error data and tilt the solar panel frame until $\theta$ approaches $0^\circ$, ensuring maximum electrical grid efficiency.
    