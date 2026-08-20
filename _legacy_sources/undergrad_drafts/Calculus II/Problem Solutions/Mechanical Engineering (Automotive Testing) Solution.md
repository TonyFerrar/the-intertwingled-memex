A mechanical engineer tests the automated emergency braking and reversing system of an autonomous vehicle on a linear test track. The velocity of the car during the test sequence is modeled by $v(t) = 3t^2 - 12t$ (in feet per second) for the time interval $0 \le t \le 5$ seconds.

- **(a)** Find the net change in the vehicle's position (displacement) over the 5-second test.
    
- **(b)** Find the total distance covered by the vehicle during the 5-second test.
    

### Solution to Engineering Problem 2

**(a) Mechanical Displacement:**

$$\text{Displacement} = \int_{0}^{5} (3t^2 - 12t) \, dt = \left[ t^3 - 6t^2 \right]_{0}^{5}$$

$$\text{Displacement} = \left( (5)^3 - 6(5)^2 \right) - 0 = 125 - 150 = -25 \text{ feet}$$

**Meaning & Real-Life Application:** A displacement of $-25 \text{ feet}$ indicates that at the end of the test sequence, the vehicle stopped $25 \text{ feet}$ _behind_ its original starting line. Mechanical engineers use this net metric to confirm that the vehicle's reversing control loop executed properly and to map out the final spatial footprint of the machinery relative to a fixed origin.

**(b) Mechanical Total Distance:**

Set $v(t) = 0 \implies 3t(t - 4) = 0 \implies t = 4 \text{ seconds}$. The car moves in reverse from $t = 0$ to $t = 4$, and shifts into forward gear after $t = 4$.

$$\text{Total Distance} = \left| \int_{0}^{4} (3t^2 - 12t) \, dt \right| + \int_{4}^{5} (3t^2 - 12t) \, dt$$

$$\int_{0}^{4} (3t^2 - 12t) \, dt = \left[ t^3 - 6t^2 \right]_{0}^{4} = 64 - 96 = -32 \text{ feet}$$

$$\int_{4}^{5} (3t^2 - 12t) \, dt = \left[ t^3 - 6t^2 \right]_{4}^{5} = (125 - 150) - (64 - 96) = -25 - (-32) = 7 \text{ feet}$$

Summing the absolute values:

$$\text{Total Distance} = |-32| + 7 = 39 \text{ feet}$$

**Meaning & Real-Life Application:** The total distance of $39 \text{ feet}$ means the car backed up $32 \text{ feet}$ and then drove forward $7 \text{ feet}$. Automotive engineers rely on this total value to calculate tire tread degradation, brake pad friction wear, and overall powertrain energy efficiency. If engineers only looked at the displacement ($-25 \text{ feet}$), they would undercount the actual mechanical work done by the tires and motor by $14 \text{ feet}$, leading to incorrect component lifespan calculations.