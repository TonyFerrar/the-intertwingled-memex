# Skill 2: Reconstructing a Function's "Future Value" from an Initial Condition

## 1. Core Explanatory Notes

When given the rate of change of a quantity, computing a definite integral over a fixed interval only tells us the net change between two specific points in time. However, engineers and scientists often need to predict the exact state of a system at any arbitrary future time $t$. To do this, we reconstruct the original function by combining its starting state (initial condition) with a dynamic accumulation integral.

### The Fundamental Framework

This skill relies on a direct rearrangement of the Fundamental Theorem of Calculus. If $Q(t)$ represents a changing quantity and $Q'(t)$ represents its rate of change, the net change over the time interval $[0, t]$ is found by integrating the rate function:

$$\int_{0}^{t} Q'(x) \, dx = Q(t) - Q(0) \text{ [cite: 66]}$$

By isolating $Q(t)$, we establish the **Future Value Formula** for any quantity:

$$Q(t) = Q(0) + \int_{0}^{t} Q'(x) \, dx \text{ [cite: 89]}$$

This equation states that the **future value** of a quantity equals its **initial value** plus its **net accumulation (displacement)** over time.

### Critical Conventions to Remember

- **The Dummy Variable**: When the upper limit of integration is the variable tracking future time ($t$), we must change the variable inside the integrand to a "dummy variable" (usually $x$). This avoids notation errors like $\int_{0}^{t} v(t) dt$, which mixes a fixed boundary with a changing variable.
    
- **Generalization**: While physics uses this to find position from velocity ($s(t) = s(0) + \int_{0}^{t} v(x) dx$) , this mathematical framework applies identically to any time-dependent metric, including volume, population size, electrical charge, or cost.
    

## 2. Standard Sample Problems

### Problem 1

An object moves along a straight line with a velocity function of $v(t) = 3t^2 - 4t + 1$ (in meters per second) for times $t \ge 0$. Suppose its initial position at $t = 0$ is $10 \text{ meters}$ from a reference point. Find the general position function, $s(t)$, for any time $t \ge 0$.

### Solution to Problem 1

Using the future value framework for position:

$$s(t) = s(0) + \int_{0}^{t} v(x) \, dx \text{ [cite: 76]}$$

Substitute the initial condition $s(0) = 10$ and the velocity function using the dummy variable $x$:

$$s(t) = 10 + \int_{0}^{t} (3x^2 - 4x + 1) \, dx \text{ [cite: 77]}$$

Find the antiderivative of each term using the power rule:

$$s(t) = 10 + \left[ x^3 - 2x^2 + x \right]_{0}^{t} \text{ [cite: 78]}$$

Evaluate the limits at $t$ and $0$:

$$s(t) = 10 + \left( (t^3 - 2t^2 + t) - 0 \right) \text{ [cite: 79]}$$

$$s(t) = t^3 - 2t^2 + t + 10 \text{ [cite: 80]}$$

## 3. Real-Life Engineering Application Problems

### Engineering Problem 1: [[Electrical Engineering (Battery Management Systems)]]
[[Electrical Engineering (Battery Management Systems) Solution]]


### Engineering Problem 2: [[Civil & Environmental Engineering (Water Resource Management)]]
[[Civil & Environmental Engineering (Water Resource Management) Solution]]
