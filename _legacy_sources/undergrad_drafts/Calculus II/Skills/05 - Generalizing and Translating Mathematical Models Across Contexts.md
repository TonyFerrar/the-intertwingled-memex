# Skill 3: Generalizing and Translating Mathematical Models Across Contexts

## 1. Core Explanatory Notes

The power of calculus lies in its universality. In your initial studies, integration is often introduced using kinematic terms like "position," "velocity," and "displacement". However, the exact same mathematical frameworks apply to any dynamic system where a quantity changes over time.

The **Net Change Theorem** states that the definite integral of a rate of change function yields the total net accumulation of the corresponding physical quantity over that period.

### The Generalized Framework

Let $Q(t)$ represent any time-dependent quantity (such as fluid volume, consumer cost, electrical current, or population size).

- **Rate of Change:** The instantaneous rate at which $Q$ changes is given by its derivative, $Q'(t)$.
    
- **The Net Change Theorem:** The absolute net change in the quantity from an initial time $t = a$ to a future time $t = b$ is computed by integrating its rate function:
    
    $$Q(b) - Q(a) = \int_{a}^{b} Q'(t) \, dt \quad \text{[cite: 86]}$$
    
- **Future Value Calculation:** If you know the starting amount of the quantity, $Q(0)$, you can predict its total value at any future time $t$ by appending the net accumulation to that initial baseline:
    
    $$Q(t) = Q(0) + \int_{0}^{t} Q'(x) \, dx \quad \text{[cite: 89]}$$
    

### Conceptual Translation Guide

To successfully apply this skill across different engineering disciplines, you must learn to strip away context-specific vocabulary and map the system variables directly to the underlying calculus operations:

|**Kinematic Context**|**Generalized Calculus Context**|**Alternative Engineering Contexts**|
|---|---|---|
|**Velocity, $v(t)$**|Rate of Change, $Q'(t)$|Leakage Rate, Inflow Rate, Population Growth Rate|
|**Displacement**|Net Change, $\int_{a}^{b} Q'(t)dt$|Total Fluid Volume Lost, Net Population Growth|
|**Final Position, $s(t)$**|Future Value, $Q(t)$|Current Battery Capacity, Total Reservoir Volume|

## 2. Standard Sample Problems

### Problem 1

The rate of production of a manufacturing line is modeled by the function $Q'(t) = 6t^2 - 8t$ units per hour, where $t$ is the time in hours since the morning shift began.

- **(a)** Determine the net change in the number of units produced between hour $t = 1$ and hour $t = 3$.
    
- **(b)** If the assembly line already had 100 pre-assembled units in storage at $t = 0$, find the complete future value function $Q(t)$ representing total inventory.
    

### Solution to Problem 1

**(a) Finding Net Change:**

Apply the Net Change Theorem by integrating the rate function directly between the boundaries $t = 1$ and $t = 3$:

$$\text{Net Change} = \int_{1}^{3} (6t^2 - 8t) \, dt$$

Find the antiderivative using the power rule:

$$F(t) = 2t^3 - 4t^2$$

Evaluate the definite integral boundaries:

$$\text{Net Change} = \left[ 2t^3 - 4t^2 \right]_{1}^{3}$$

$$\text{Net Change} = \left( 2(3)^3 - 4(3)^2 \right) - \left( 2(1)^3 - 4(1)^2 \right)$$

$$\text{Net Change} = (54 - 36) - (2 - 4) = 18 - (-2) = 20 \text{ units}$$

**(b) Finding the Future Value Function:**

Using the generalized tracking equation:

$$Q(t) = Q(0) + \int_{0}^{t} Q'(x) \, dx$$

Substitute $Q(0) = 100$ and set up the integration using the dummy variable $x$:

$$Q(t) = 100 + \int_{0}^{t} (6x^2 - 8x) \, dx$$

$$Q(t) = 100 + \left[ 2x^3 - 4x^2 \right]_{0}^{t}$$

$$Q(t) = 100 + (2t^3 - 4t^2 - 0)$$

$$Q(t) = 2t^3 - 4t^2 + 100 \text{ units}$$

## 3. Real-Life Engineering Application Problems

### Engineering Problem 1: [[Chemical & Petroleum Engineering (Pipeline Leak Management)]]
[[Chemical & Petroleum Engineering (Pipeline Leak Management) Solution]]


### Engineering Problem 2: [[Civil & Hydraulic Engineering (Reservoir Volume Management)]]
[[Civil & Hydraulic Engineering (Reservoir Volume Management) Solution]]
