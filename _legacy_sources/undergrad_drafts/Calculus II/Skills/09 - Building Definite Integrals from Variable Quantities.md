# Skill 1: Building Definite Integrals from Variable Quantities

## 1. Core Concept Notes

In introductory physics and algebra, formulas are often discrete and static. For example, you learn that $\text{Work} = \text{Force} \times \text{Distance}$ or $\text{Force} = \text{Pressure} \times \text{Area}$. However, these basic algebraic products only hold true if the active quantity (Force, Pressure, Density, etc.) remains **perfectly constant** throughout the entire process or region.

In real-world engineering, systems are dynamic and continuously variable:
* The force required to stretch a spring changes with every millimeter of displacement.
* The water pressure pressing against a dam wall increases with every meter of depth.
* The weight of a heavy cable being reeled in decreases continuously as more cable is gathered.

To solve these problems, calculus treats integration as a tool for **continuous accumulation**. We break a continuously varying system down into infinitesimally small, static "slices," apply our basic algebraic formulas to those individual slices, and then sum them up using a definite integral.

### The 4-Step Framework to Build any Integral

When faced with a variable word problem, follow this structured Riemann sum approach to construct your definite integral:

1. **Identify the Independent Variable and Domain:** Determine the axis along which the variation occurs (usually spatial dimensions like $x$ or $y$, or time $t$) and define the physical boundaries $[a, b]$ of the system.
2. **Slice the Domain:** Imagine dividing the system into $n$ subintervals, each with a tiny width of $\Delta x$ (or $\Delta y$). 
3. **Model a Single Component (The "Differential Element"):** Assume the changing variable is momentarily constant across that single tiny slice. Write an algebraic expression for the small contribution of that slice (e.g., a tiny bit of work $\Delta W$, or a tiny bit of force $\Delta F$).
4. **Accumulate via the Definite Integral:** Sum up all the slices to create a Riemann sum:
   $$\text{Total Quantity} \approx \sum_{i=1}^{n} f(c_i) \Delta x$$
   Take the limit as the number of slices approaches infinity ($n \to \infty$). The Riemann sum transforms into a perfect definite integral, where $\Delta x$ becomes the differential $dx$:
   $$\text{Total Quantity} = \int_{a}^{b} f(x) \, dx$$

---

## 2. Sample Calculus Problems

### Sample Problem 1: Variable Force Field
A robotic actuator moves a magnetic particle along the $x$-axis from $x = 1\text{ m}$ to $x = 3\text{ m}$ through a variable magnetic force field modeled by $F(x) = 4x^3 - 2x$ (measured in Newtons). Find the total work done on the particle.

#### Solution:
Using the definition of work for a variable force along an axis:
$$W = \int_{a}^{b} F(x) \, dx$$

Substitute the boundaries and the force function:
$$W = \int_{1}^{3} (4x^3 - 2x) \, dx$$

Find the antiderivative using the Power Rule:
$$W = \left[ x^4 - x^2 \right]_{1}^{3}$$

Evaluate at the upper bound ($x = 3$) and lower bound ($x = 1$):
$$W = \left( (3)^4 - (3)^2 \right) - \left( (1)^4 - (1)^2 \\right)$$
$$W = (81 - 9) - (1 - 1)$$
$$W = 72 - 0 = 72\text{ Joules}$$

---

### Sample Problem 2: Linear Spring Scaling
A certain linear spring obeys Hooke's Law ($F = kx$). It requires a static holding force of $20\text{ N}$ to keep it stretched $0.4\text{ m}$ from its equilibrium position. Determine the total work required to stretch the spring from an initial displacement of $0.2\text{ m}$ to a final displacement of $0.6\text{ m}$.

#### Solution:
First, find the unique spring constant $k$ using the initial state condition:
$$F = kx \implies 20 = k(0.4) \implies k = \frac{20}{0.4} = 50\text{ N/m}$$

Now, set up the work integral over the specified interval $[0.2, 0.6]$ using our calculated force function $F(x) = 50x$:
$$W = \int_{0.2}^{0.6} 50x \, dx$$
$$W = \left[ 25x^2 \right]_{0.2}^{0.6}$$
$$W = 25(0.6)^2 - 25(0.2)^2$$
$$W = 25(0.36) - 25(0.04)$$
$$W = 9.0 - 1.0 = 8.0\text{ Joules}$$

---

## 3. Real-Life Engineering Application Problems

### Engineering Problem 1: [[Civil Engineering — Hydrostatic Thrust on a Dam Wall]]
[[Civil Engineering — Hydrostatic Thrust on a Dam Wall Solution]]

---

### Engineering Problem 2: [[Mechanical Engineering — Progressive Vehicle Suspension]]
[[Mechanical Engineering — Progressive Vehicle Suspension Solution]]


---

### Engineering Problem 3: [[Marine Engineering — Recovering a Subsea Cable]]
[[Marine Engineering — Recovering a Subsea Cable Solution]]
