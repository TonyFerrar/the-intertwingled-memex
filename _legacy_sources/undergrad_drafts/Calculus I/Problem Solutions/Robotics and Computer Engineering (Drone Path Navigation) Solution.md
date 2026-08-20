**Context:** Robotics engineers write guidance software for autonomous aerial drones. Suppose a quadcopter drone attempts to fly forward through a canyon. The drone's onboard propulsion creates an intentional velocity vector of $\vec{v}_d = \langle 4, 7, -1 \rangle\text{ m/s}$. Simultaneously, a localized wind gust blowing through the canyon introduces an unintended velocity vector of $\vec{v}_w = \langle -1, -3, -2 \rangle\text{ m/s}$.

**Problem:** Compute the drone's true resultant velocity vector $\vec{v}_R$. Then, determine the unit vector $\hat{u}_R$ representing the exact true directional path of the drone's travel.

**Solution:**

1. Find the true resultant velocity vector:
    
    $$\vec{v}_R = \vec{v}_d + \vec{v}_w = \langle 4 + (-1), 7 + (-3), -1 + (-2) \rangle$$
    
    $$\vec{v}_R = \langle 3, 4, -3 \rangle\text{ m/s}$$
    
2. Calculate the magnitude of the velocity (true ground speed):
    
    $$|\vec{v}_R| = \sqrt{3^2 + 4^2 + (-3)^2} = \sqrt{9 + 16 + 9} = \sqrt{34} \approx 5.83\text{ m/s}$$
    
3. Find the unit vector of direction:
    
    $$\hat{u}_R = \frac{\vec{v}_R}{|\vec{v}_R|} = \left\langle \frac{3}{\sqrt{34}}, \frac{4}{\sqrt{34}}, -\frac{3}{\sqrt{34}} \right\rangle \approx \langle 0.51, 0.69, -0.51 \rangle$$
    

**Meaning of the Answer & Real-Life Application:**

- **$\vec{v}_R = \langle 3, 4, -3 \rangle\text{ m/s}$** reveals that despite trying to fly faster and flatter, the wind is slowing down the drone's forward progress and forcing it downward (indicated by the negative $z$-component, $-3$).
    
- **$|\vec{v}_R| \approx 5.83\text{ m/s}$** tells the automated flight controller the actual speed the drone is tracking across the terrain.
    
- **$\hat{u}_R \approx \langle 0.51, 0.69, -0.51 \rangle$** strips away the speed value and isolates the pure 3D direction trajectory. Robotics engineers program autopilot systems to continuously compute this unit vector. If this direction unit vector deviates from the pre-mapped, safe flight path corridor, the flight software triggers an immediate correction algorithm, adjusting the power of individual rotors to fight off the wind drift and keep the drone from colliding with the canyon walls.