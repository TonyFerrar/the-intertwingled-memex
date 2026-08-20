A structural engineer needs to determine the total combined downward load pressing on a 10-meter bridge girder. The girder must support two separate distributed load profiles simultaneously: the stationary weight of the concrete decking $D(x)$ (dead load) and the weight of bumper-to-bumper vehicle traffic $L(x)$ (live load).

- Calculations prove that the total accumulated force from the concrete alone is $\int_{0}^{10} D(x) \, dx = 50\text{ kN}$.
    
- Traffic sensor calibration logs a reverse boundary profile, showing $\int_{10}^{0} L(x) \, dx = -35\text{ kN}$.
    

Evaluate the total combined vertical load on the girder by computing:

$$\int_{0}^{10} (D(x) + L(x)) \, dx$$

#### Step-by-Step Solution:

1. **Apply the Reversal of Limits Rule:** Before combining, adjust the traffic sensor data so its integration bounds run left-to-right ($0\text{ to }10$) instead of right-to-left.
    
    $$\int_{0}^{10} L(x) \, dx = -\int_{10}^{0} L(x) \, dx = -(-35) = +35\text{ kN}$$
    
2. **Apply the Sum Rule:** Separate the combined system integral into the sum of the individual dead load and live load components.
    
    $$\int_{0}^{10} (D(x) + L(x)) \, dx = \int_{0}^{10} D(x) \, dx + \int_{0}^{10} L(x) \, dx$$
    
3. **Combine the Values:**
    
    $$\int_{0}^{10} (D(x) + L(x)) \, dx = 50 + 35 = 85\text{ kN}$$
    

#### Engineering Meaning of the Answer:

> The integrated total load equals **85 kN**. By utilizing the sum and reversal properties, the civil engineer has applied the structural principle of superposition to compute the worst-case structural stress scenario. This total value dictates the minimum thickness and steel-reinforcement grade required for the bridge piers to guarantee the structure will not undergo catastrophic structural buckling when fully loaded.