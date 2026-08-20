# Skill 2 Learning Page: Fluency with the Properties of Definite Integrals

## Core Conceptual Notes

In calculus, you will frequently encounter scenarios where a function's explicit algebraic equation is unknown or too complex to integrate directly. The **properties of definite integrals** serve as an algebraic toolkit, allowing you to manipulate, deconstruct, and solve integral problems by treating them as puzzle pieces.

These properties are derived directly from the behavior of Riemann sums and the geometric properties of areas under curves.

### The Four Essential Integral Properties

- **Constant Multiple Rule:** You can factor out a constant multiplier from inside the integral to simplify calculation: $\int_{a}^{b} k \cdot f(x) \, dx = k \int_{a}^{b} f(x) \, dx$.
    
- **Sum and Difference Rule:** The integral of a combined sum or difference of two functions can be separated into individual integrals: $\int_{a}^{b} (f(x) \pm g(x)) \, dx = \int_{a}^{b} f(x) \, dx \pm \int_{a}^{b} g(x) \, dx$.
    
- **Additivity of Intervals (Splitting Rule):** If an interval spans from $a$ to $c$, you can break it up at any intermediate point $b$: $\int_{a}^{b} f(x) \, dx + \int_{b}^{c} f(x) \, dx = \int_{a}^{c} f(x) \, dx$.
    
- **Reversal of Limits Rule:** Integrating backward from an upper limit to a lower limit flips the sign of the net area: $\int_{a}^{b} f(x) \, dx = -\int_{b}^{a} f(x) \, dx$.
    

## Pure Mathematical Sample Problems

### Sample Problem 1: Combining Interval Splitting and Constants

Given that $\int_{1}^{4} f(x) \, dx = 5$ and $\int_{4}^{7} f(x) \, dx = -2$, find the exact value of:

$$\int_{1}^{7} 3f(x) \, dx$$

#### Step-by-Step Solution:

1. **Apply the Constant Multiple Rule:** Pull the constant multiplier 3 out to the front of the entire expression.
    
    $$\int_{1}^{7} 3f(x) \, dx = 3 \int_{1}^{7} f(x) \, dx$$
    
2. **Apply the Additivity Rule:** Split the remaining interval $[1, 7]$ into the two known sub-intervals $[1, 4]$ and $[4, 7]$.
    
    $$3 \int_{1}^{7} f(x) \, dx = 3 \left( \int_{1}^{4} f(x) \, dx + \int_{4}^{7} f(x) \, dx \right)$$
    
3. **Substitute the Given Values:** Replace the integrals inside the parentheses with their known numerical values.
    
    $$3 \cdot (5 + (-2)) = 3 \cdot (3)$$
    
4. **Calculate the Final Value:**
    
    $$\int_{1}^{7} 3f(x) \, dx = 9$$
    

### Sample Problem 2: Handling Reversal of Limits and Subtraction

Given that $\int_{2}^{8} g(x) \, dx = 12$ and $\int_{5}^{8} g(x) \, dx = 4$, evaluate the following integral:

$$\int_{5}^{2} g(x) \, dx$$

#### Step-by-Step Solution:

1. **Set Up the Interval Relationship:** We know that the total interval from 2 to 8 is the sum of the intervals from 2 to 5 and 5 to 8.
    
    $$\int_{2}^{8} g(x) \, dx = \int_{2}^{5} g(x) \, dx + \int_{5}^{8} g(x) \, dx$$
    
2. **Isolate the Unknown Lower-to-Upper Interval ($\int_{2}^{5}$):** Rearrange the equation to solve for the missing piece.
    
    $$\int_{2}^{5} g(x) \, dx = \int_{2}^{8} g(x) \, dx - \int_{5}^{8} g(x) \, dx$$
    
3. **Substitute the Given Values:**
    
    $$\int_{2}^{5} g(x) \, dx = 12 - 4 = 8$$
    
4. **Apply the Reversal of Limits Rule:** The problem asks for $\int_{5}^{2}$ (integrating from 5 down to 2), which is the exact reverse of our calculated interval.
    
    $$\int_{5}^{2} g(x) \, dx = -\int_{2}^{5} g(x) \, dx = -8$$
    

## Real-Life Engineering Application Problems

### Problem 1: [[Aerospace Engineering (Multi-Stage Rocket Booster Work)]]
[[Aerospace Engineering (Multi-Stage Rocket Booster Work) Solution]]


### Problem 2: [[Civil Engineering (Superposition of Structural Bridge Loads)]]
[[Civil Engineering (Superposition of Structural Bridge Loads) Solution]]
