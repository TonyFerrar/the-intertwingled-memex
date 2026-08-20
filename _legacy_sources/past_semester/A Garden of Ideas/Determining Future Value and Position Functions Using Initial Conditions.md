
# Determining Future Value and Position Functions Using Initial Conditions

To determine the future value and position functions, use an **initial value** (such as an object's starting position or a population's starting size) alongside a rate of change to find the state of that quantity at any future time.

## Finding Position from Velocity
To find the **position function** $s(t)$, add the initial position $s(0)$ to the integral of the velocity over the time interval $[0,t]$. Note: this is simply assigning meaning to the constant of integration that arises when performing an integral.

$$ s(t) = \int_0^t{v(t) dt} + s(0)$$

## Generalizing to Future Value of Any Quantity
This skill is generalized to any quantity $Q(t)$, where the **future value** is found by the formula: 

$$Q(t) = Q(0)+\int_0^t{Q'(t)dt}$$

This allows for the mathematical prediction of future states based on current rates of change.