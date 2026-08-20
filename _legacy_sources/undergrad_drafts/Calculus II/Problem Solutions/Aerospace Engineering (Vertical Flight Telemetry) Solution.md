During a vertical launch test of a prototype reusable rocket pod, sensors record its vertical velocity function as $v(t) = 40 - 10t$ (in meters per second) for the first $0 \le t \le 6$ seconds of the test flight.

- **(a)** Compute the rocket's displacement over the 6-second interval.
    
- **(b)** Compute the total distance traveled by the rocket over the 6-second interval.
    

### Solution to Engineering Problem 1

**(a) Aerospace Displacement:**

$$\text{Displacement} = \int_{0}^{6} (40 - 10t) \, dt = \left[ 40t - 5t^2 \right]_{0}^{6}$$

$$\text{Displacement} = \left( 40(6) - 5(6)^2 \right) - 0 = 240 - 180 = 60 \text{ meters}$$

**Meaning & Real-Life Application:** The displacement value of $60 \text{ meters}$ means that at $t = 6$ seconds, the rocket pod is exactly $60 \text{ meters}$ higher than its initial launchpad position. In aerospace engineering, this represents the net altitude gain, which is critical for flight path tracking and ensuring the vehicle clears local terrain obstacles.

**(b) Aerospace Total Distance:**

Set $v(t) = 0 \implies 40 - 10t = 0 \implies t = 4 \text{ seconds}$. The rocket reaches its peak altitude at $4 \text{ seconds}$ and begins descending.

$$\text{Total Distance} = \int_{0}^{4} (40 - 10t) \, dt + \left| \int_{4}^{6} (40 - 10t) \, dt \right|$$

$$\int_{0}^{4} (40 - 10t) \, dt = \left[ 40t - 5t^2 \right]_{0}^{4} = 160 - 80 = 80 \text{ meters}$$

$$\int_{4}^{6} (40 - 10t) \, dt = \left[ 40t - 5t^2 \right]_{4}^{6} = (240 - 180) - (160 - 80) = 60 - 80 = -20 \text{ meters}$$

Summing the absolute values:

$$\text{Total Distance} = 80 + |-20| = 100 \text{ meters}$$

**Meaning & Real-Life Application:** The total distance value of $100 \text{ meters}$ means the rocket traveled $80 \text{ meters}$ upward to its apex, and then fell $20 \text{ meters}$ back down. While displacement tells engineers where the rocket is, total distance tells them how much mechanical wear, aerodynamic friction, and thermal stress the hull endured. It directly scales with fuel consumption rates, allowing propulsion engineers to calculate the total energy expended during the flight.