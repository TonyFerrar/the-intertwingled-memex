A municipal water tower starts the morning demand cycle with an initial volume of $V(0) = 50,000 \text{ gallons}$ of water. During the peak morning hours, water is consumed by residential neighborhoods faster than water utility pumps can replenish the tower. The net rate of change of the water volume is modeled by $V'(t) = 120t - 1200 \text{ gallons per hour}$, where $t$ is the number of hours past 6:00 AM.

- Find the function $V(t)$ representing the total volume of water inside the tower at any time $t \ge 0$ during the morning cycle.
    

### Solution to Engineering Problem 2

Apply the generalized future value formula:

$$V(t) = V(0) + \int_{0}^{t} V'(x) \, dx$$

Substitute $V(0) = 50,000$ and change the rate variable to $x$:

$$V(t) = 50,000 + \int_{0}^{t} (120x - 1200) \, dx$$

Integrate term by term:

$$V(t) = 50,000 + \left[ 60x^2 - 1200x \right]_{0}^{t}$$

Evaluate across the limits:

$$V(t) = 50,000 + (60t^2 - 1200t - 0)$$

$$V(t) = 60t^2 - 1200t + 50,000$$

**Meaning & Real-Life Application:** The function $V(t) = 60t^2 - 1200t + 50,000$ tracks the exact physical volume of water stored in the tower at any point during the high-demand morning window. Civil engineers upload these tracking equations into automated infrastructure control systems. If the volume function drops near a predetermined minimum threshold, the software triggers emergency backup station pumps to increase the inflow rate. Maintaining an accurate representation of $V(t)$ ensures the city preserves stable hydraulic pressure across municipal pipelines, which is required to deliver running water to upper floors of buildings and sustain functional flow rates for emergency fire hydrants.