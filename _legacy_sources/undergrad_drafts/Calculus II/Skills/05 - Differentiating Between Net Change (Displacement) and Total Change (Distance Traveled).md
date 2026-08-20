# Skill 1: Differentiating Between Net Change (Displacement) and Total Change (Distance Traveled)

## 1. Core Explanatory Notes

In calculus, when analyzing an object moving along a straight line, we track its state using position and velocity functions.

- **Position, $s(t)$**: Denotes the exact location of an object at a given time $t$.
    
- **Velocity, $v(t)$**: The rate of change of the object's position over time. It is the derivative of position, meaning position is an antiderivative of velocity ($s(t) = \int v(t) \, dt$).
    

When integrating velocity over a specific time interval $[a, b]$, the resulting value depends entirely on how we treat the direction of motion.

### Displacement (Net Change)

Displacement measures the net change in position from the starting time $t = a$ to the ending time $t = b$. It only looks at the initial and final states, completely ignoring any back-and-forth movement in between.

$$\text{Displacement} = s(b) - s(a) = \int_{a}^{b} v(t) \, dt$$

> **Geometric Interpretation**: Displacement represents the **net area** bounded by the velocity curve and the time axis. Areas above the axis (forward motion) are treated as positive, while areas below the axis (backward motion) are treated as negative.

### Total Distance Traveled

Total distance measures the entire length of the path traveled by the object, treating all movement as positive cumulative progress.

$$\text{Total Distance} = \int_{a}^{b} |v(t)| [cite_start]\, dt$$

> **Geometric Interpretation**: Distance represents the **total absolute area** bounded by the velocity curve and the time axis. All areas, whether above or below the axis, are evaluated as positive values.

### Methodology for Calculating Total Distance

To evaluate the absolute value integral manually, follow these steps:

1. **Find the roots**: Set $v(t) = 0$ to find the times when the object changes direction.
    
2. **Test the intervals**: Determine where $v(t) \ge 0$ (moving forward) and where $v(t) \le 0$ (moving backward).
    
3. **Split the integral**: Divide the single integral into sub-intervals based on these signs, flipping the sign of the negative regions:
    
    $$\int_{a}^{b} |v(t)| \, dt = \int_{a}^{c} v(t) \, dt + \int_{c}^{b} -v(t) \, dt$$
    

## 2. Standard Sample Problems

### Problem 1

A particle moves along a coordinate line with a velocity function of $v(t) = 6t - 12$ (in meters per second) for times $0 \le t \le 3$.

- **(a)** Find the displacement of the particle on the interval $[0, 3]$.
    
- **(b)** Find the total distance traveled by the particle on the interval $[0, 3]$.
    

### Solution to Problem 1

**(a) Finding Displacement:**

Directly integrate the velocity function over the interval $[0, 3]$:

$$\text{Displacement} = \int_{0}^{3} (6t - 12) \, dt$$

Find the antiderivative:

$$F(t) = 3t^2 - 12t$$

Evaluate from $0$ to $3$:

$$\text{Displacement} = \left[ 3t^2 - 12t \right]_{0}^{3} = \left( 3(3)^2 - 12(3) \right) - (0) = (27 - 36) = -9 \text{ meters}$$

**(b) Finding Total Distance:**

First, determine where the particle changes direction by setting $v(t) = 0$:

$$6t - 12 = 0 \implies t = 2 \text{ seconds}$$

Check intervals:

- For $[0, 2]$, $v(1) = -6$ (negative velocity).
    
- For $[2, 3]$, $v(2.5) = 3$ (positive velocity).
    

Split the integral at $t = 2$ and apply absolute values:

$$\text{Total Distance} = \left| \int_{0}^{2} (6t - 12) \, dt \right| + \int_{2}^{3} (6t - 12) \, dt$$

$$\text{Total Distance} = \left| \left[ 3t^2 - 12t \right]_{0}^{2} \right| + \left[ 3t^2 - 12t \right]_{2}^{3}$$

Evaluate the first region:

$$\left[ 3(2)^2 - 12(2) \right] - 0 = 12 - 24 = -12 \implies |-12| = 12$$

Evaluate the second region:

$$\left[ 3(3)^2 - 12(3) \right] - \left[ 3(2)^2 - 12(2) \right] = (-9) - (-12) = 3$$

Sum the components together:

$$\text{Total Distance} = 12 + 3 = 15 \text{ meters}$$

## 3. Real-Life Engineering Application Problems

### Engineering Problem 1: [[Aerospace Engineering (Vertical Flight Telemetry)]]
[[Aerospace Engineering (Vertical Flight Telemetry) Solution]]


### Engineering Problem 2: [[Mechanical Engineering (Automotive Testing)]]
[[Mechanical Engineering (Automotive Testing) Solution]]
