---
title: "Session 09 - Physical Applications"
type: course-session
course: MATH-182
semester: Fall 2026
publish: true
cssclasses: []
updated: 2026-08-18
---

# Session 09 - Physical Applications

## Session Objectives
By the end of this session, you will be able to:
- Algebraic Rearrangement of Integral Equations
- Applying the Net Change Theorem
- Building Definite Integrals from Variable Quantities
- Fluency in Specific Integration Techniques

## Session Timeline
- **00:00 - 00:10 (10 mins)**: Micro-Lecture
- **00:10 - 00:25 (15 mins)**: Skill Block 1
- **00:25 - 00:30 (5 mins)**: Regroup 1
- **00:30 - 00:45 (15 mins)**: Skill Block 2
- **00:45 - 00:50 (5 mins)**: Regroup 2
- **00:50 - 01:05 (15 mins)**: Skill Block 3
- **01:05 - 01:10 (5 mins)**: Regroup 3
- **01:10 - 01:15 (5 mins)**: Synthesis Wrap-up

## Session Content

### Micro-Lecture
#### Engineering Context: Engineering Calculus II Application
In this session, we investigate the mathematical principles of **Physical Applications** and explore how engineers apply these concepts to analyze real-world physical and structural systems.

### Skill Block 1
## 1. Core Concept Notes

In many advanced calculus applications, a problem will not simply ask you to evaluate an integral to find a final value. Instead, the integral itself is embedded within a larger algebraic equation. You might be given the final accumulated total and asked to work backward to find an initial condition, a boundary limit, or a constant scaling factor. 

To solve these problems, you must treat the definite integral as a single algebraic variable while you rearrange the equation, evaluate the integral completely to turn it into a numerical value, and then perform standard algebraic operations to isolate the unknown variable.

### The Rearrangement Workflow
1. **Isolate the Integral Term:** Treat the entire expression $\int_{a}^{b} f(x) \, dx$ as a single block (like an $X$ in an algebra equation) and move all other constants or variables to the opposite side.
2. **Evaluate the Integral Independently:** Ignore the rest of the equation for a moment. Compute the antiderivative, plug in the upper and lower limits, and find the definitive numerical value of the integral.
3. **Substitute and Solve:** Plug that numerical value back into your rearranged equation and use basic algebra (multiplication, division, roots) to isolate and solve for your target unknown.

---

## 2. Sample Calculus Problems

### Sample Problem 1: Solving for an Unknown Multiplier
Suppose an accumulation process follows the equation $250 = k \cdot \int_{0}^{2} 3x^2 \, dx$, where $k$ is an unknown scaling constant. Solve for $k$.

#### Solution:
1. **Isolate the integral structurally:**
   $$k = \frac{250}{\int_{0}^{2} 3x^2 \, dx}$$
2. **Evaluate the definite integral:**
   $$\int_{0}^{2} 3x^2 \, dx = \left[ x^3 \right]_{0}^{2} = (2)^3 - (0)^3 = 8$$
3. **Substitute the value back to solve for $k$:**
   $$k = \frac{250}{8} = 31.25$$

---

### Sample Problem 2: Solving for an Initial Value
An equation modeling structural deflection is given by $12 = \frac{A}{\int_{1}^{3} \frac{1}{x} \, dx}$, where $A$ represents the initial structural parameter. Solve for the exact value of $A$.

#### Solution:
1. **Rearrange the equation algebraically to isolate $A$:**
   $$A = 12 \cdot \int_{1}^{3} \frac{1}{x} \, dx$$
2. **Evaluate the definite integral:**
   $$\int_{1}^{3} \frac{1}{x} \, dx = \left[ \ln|x| \right]_{1}^{3} = \ln(3) - \ln(1) = \ln(3) - 0 = \ln(3)$$
3. **Substitute back to find the final expression for $A$:**
   $$A = 12\ln(3)$$

---

## 3. Real-Life Engineering Application Problems

### Engineering Problem 1: [[Biomedical Engineering — Calculating Initial Dye Mass for Cardiac Output]]
[[Biomedical Engineering — Calculating Initial Dye Mass for Cardiac Output Solution]]


---

### Engineering Problem 2: [[Chemical Engineering — Optimizing Continuous Flow Reactor Volume]]
[[Chemical Engineering — Optimizing Continuous Flow Reactor Volume Solution]]

#### Worked Example
Hooke's Law & Spring Work
Suppose that a spring obeys Hooke's Law and a force of $-30\text{ N}$ is required to compress and hold this spring $0.5\text{ m}$ from its equilibrium position.

* **(a)** Find the spring constant $k$.
* **(b)** How much work is required to stretch the spring $0.2\text{ m}$ from its equilibrium position?
* **(c)** How much work is required to compress the spring $0.5\text{ m}$ from its equilibrium position?
* **(d)** How much additional work is required to compress the spring $0.2\text{ m}$ if it has already been stretched $0.4\text{ m}$ from its equilibrium position?

##### Solution
###### Key Concepts & Setup

- **Hooke's Law:** The force $F(x)$ required to compress or stretch a spring by a distance $x$ from its equilibrium position is given by:

$$F(x) = kx$$

where $k$ is the spring constant.

- **Work Done:** The work $W$ done in moving an object from position $a$ to position $b$ is the integral of the force function:

$$W = \int_{a}^{b} F(x) \, dx = \int_{a}^{b} kx \, dx$$


To keep track of directions, we will define:

- Equilibrium position as $x = 0$

- Stretching as a positive displacement ($x > 0$)

- Compression as a negative displacement ($x < 0$)


###### (a) Find the spring constant $k$

1. **Identify the given values:** * A force of $-30\text{ N}$ is applied.

- The spring is compressed by $0.5\text{ m}$, meaning the displacement is $x = -0.5\text{ m}$.

2. **Substitute into Hooke's Law:**

$$-30 = k \cdot (-0.5)$$

3. **Solve for $k$:**

$$k = \frac{-30}{-0.5} = 60\text{ N/m}$$


###### (b) How much work is required to stretch the spring $0.2\text{ m}$ from its equilibrium position?

1. **Set up the boundaries:** * Starts at equilibrium ($a = 0$)

- Ends at a stretch of $0.2\text{ m}$ ($b = 0.2$)

2. **Set up and evaluate the work integral:**

$$W = \int_{0}^{0.2} 60x \, dx$$

$$W = \left[ 30x^2 \right]_{0}^{0.2}$$

$$W = 30(0.2)^2 - 30(0)^2$$

$$W = 30(0.04) = 1.2\text{ J}$$


**Answer:** **$1.2\text{ J}$** of work is required.

###### (c) How much work is required to compress the spring $0.5\text{ m}$ from its equilibrium position?

1. **Set up the boundaries:**

- Starts at equilibrium ($a = 0$)

- Ends at a compression of $0.5\text{ m}$ ($b = -0.5$)

2. **Set up and evaluate the work integral:**

$$W = \int_{0}^{-0.5} 60x \, dx$$

$$W = \left[ 30x^2 \right]_{0}^{-0.5}$$

$$W = 30(-0.5)^2 - 0$$

$$W = 30(0.25) = 7.5\text{ J}$$


**Answer:** **$7.5\text{ J}$** of work is required.

###### (d) How much additional work is required to compress the spring $0.2\text{ m}$ if it has already been stretched $0.4\text{ m}$ from its equilibrium position?

1. **Set up the boundaries:**

- Initial position: Stretched $0.4\text{ m}$ ($a = 0.4$)

- Final position: Compressed $0.2\text{ m}$ ($b = -0.2$)

2. **Set up and evaluate the work integral:**

$$W = \int_{0.4}^{-0.2} 60x \, dx$$

$$W = \left[ 30x^2 \right]_{0.4}^{-0.2}$$

$$W = 30(-0.2)^2 - 30(0.4)^2$$

$$W = 30(0.04) - 30(0.16)$$

$$W = 1.2 - 4.8 = -3.6\text{ J}$$


###### Understanding the Answer:

- **Net Work (Calculus perspective):** The total direct work is **$-3.6\text{ J}$**. The negative sign means that as the spring transitions from being highly stretched ($0.4\text{ m}$) back toward equilibrium, it releases more stored energy than it takes to push it into the final compression zone (from $0$ to $-0.2\text{ m}$).

- **If looking purely at the compression phase:** Pushing the spring from equilibrium to a compression of $0.2\text{ m}$ requires **$+1.2\text{ J}$** of work (as computed by $\int_{0}^{-0.2} 60x \, dx$).
#### Active Practice Problem
Work Done in Lifting
A heavy chain with density of $2\text{ kg}\cdot\text{m}^{-1}$ is being lifted. How much work will be required to pull $2\text{ m}$ of this chain?

##### Workspace

##### Solution
###### Key Concepts & Setup

When lifting a hanging object like a chain, the force required changes continuously. As you pull the chain up, less and less of it hangs down, meaning the remaining weight decreases. Because the force is variable, we must use calculus to find the total work.

- **Work Formula:** $W = \int_{a}^{b} F(x) \, dx$ or $W = \int_{a}^{b} \text{distance} \cdot dF$

- **Linear Density ($\rho$):** $2\text{ kg/m}$

- **Acceleration due to gravity ($g$):** $9.8\text{ m/s}^2$ (we will also provide the answer in terms of $g$ if your course prefers it).


There are two common ways to set up this problem in Calculus II. Both give the exact same answer.

###### Method 1: Analyzing the Hanging Weight (Variable Force)

Imagine you are pulling the chain straight up onto a platform. Let $x$ represent the length of the chain that has **already been pulled up** (from $x = 0$ to $x = 2\text{ m}$).

1. **Find the length of the chain still hanging:**

$$\text{Hanging length} = 2 - x$$

2. **Find the force (weight) of the remaining hanging chain:**

$$\text{Force} = \text{mass} \cdot g = (\text{density} \cdot \text{length}) \cdot g$$

$$F(x) = 2 \cdot (2 - x) \cdot g = 2g(2 - x)$$

3. **Set up the work integral from $x = 0$ to $x = 2$:**

$$W = \int_{0}^{2} 2g(2 - x) \, dx$$

4. **Evaluate the integral:**

$$W = 2g \int_{0}^{2} (2 - x) \, dx$$

$$W = 2g \left[ 2x - \frac{x^2}{2} \right]_{0}^{2}$$

$$W = 2g \left[ \left(2(2) - \frac{2^2}{2}\right) - (0) \right]$$

$$W = 2g [ 4 - 2 ] = 2g(2) = 4g$$


###### Method 2: Slicing the Chain (Riemann Sum approach)

Alternatively, imagine the chain hanging down from a fixed point. Let $y$ be the distance of a tiny segment of the chain from the top platform (from $y = 0$ at the top to $y = 2\text{ m}$ at the bottom).

1. **Find the weight of a tiny slice of the chain ($dy$):**

$$dF = \text{density} \cdot g \cdot dy = 2g \, dy$$

2. **Determine how far that single slice must be lifted:**

A slice located at a distance $y$ below the platform must be pulled up exactly a distance of $y$.

3. **Set up the work integral for all slices from $y = 0$ to $y = 2$:**

$$W = \int_{0}^{2} y \cdot (2g \, dy) = \int_{0}^{2} 2gy \, dy$$

4. **Evaluate the integral:**

$$W = \left[ gy^2 \right]_{0}^{2}$$

$$W = g(2)^2 - g(0)^2 = 4g$$


###### Final Calculation

Now, substitute the value of gravity ($g = 9.8\text{ m/s}^2$):

$$W = 4 \cdot 9.8 = 39.2\text{ J}$$

**Answer:** The total work required to pull the chain is **$4g\text{ J}$** or **$39.2\text{ Joules}$**.

### Regroup 1
- Review common misconceptions and clarify key notations.

### Skill Block 2
## 1. Core Concept Notes

In Calculus I, you learned the Fundamental Theorem of Calculus (FTC), which links differentiation and integration. In Calculus II, we look at this theorem through a dynamic modeling lens known as the **Net Change Theorem**. 

### The Theorem
The Net Change Theorem states that the definite integral of a rate of change function $f'(t)$ over a time interval $[a, b]$ yields the total **net change** of the original quantity $f(t)$ over that period:

$$\int_{a}^{b} f'(t) \, dt = f(b) - f(a)$$

If we algebraically rearrange this equation, we get the predictive form used constantly across engineering disciplines to find a future value:

$$f(b) = f(a) + \int_{a}^{b} f'(t) \, dt$$

$$\text{Future Value} = \text{Initial Condition} + \text{Accumulated Net Change}$$



### Core Distinction: Net Change vs. Total Accumulation
It is vital to distinguish between a simple *net change* and *total absolute change/distance*:
1. **Net Change:** Integrates the rate directly, allowing positive rates (growth/input) and negative rates (decay/drainage) to cancel each other out.
2. **Total Displacement/Distance:** If you want the total absolute movement or gross accumulation without cancellation, you must integrate the absolute value of the rate function: $\int_{a}^{b} |f'(t)| \, dt$.

### Modeling with Initial Conditions
In real-world engineering systems, you are rarely given the total quantity function directly. Instead, sensors track **rates** (flow meters, current sensors, population counters). To find the absolute state of a system at any given moment, you *must* know its state at some baseline time—this is your **Initial Condition**, $f(a)$. Without it, your definite integral only tells you how much the system shifted, not where it currently stands.

---

## 2. Sample Calculus Problems

### Sample Problem 1: Population Expansion Rate
A bacterial culture grows at a variable rate modeled by $P'(t) = 40e^{0.05t}$ cells per hour, where $t$ is measured in hours. If the culture initially contains $500$ cells at $t = 0$, determine the total population size after $10$ hours.

#### Solution:
Using the Net Change Theorem formula:
$$P(10) = P(0) + \int_{0}^{10} P'(t) \, dt$$

Substitute the initial condition $P(0) = 500$ and the rate function:
$$P(10) = 500 + \int_{0}^{10} 40e^{0.05t} \, dt$$

Find the antiderivative using the exponential rule $\int e^{kt} \, dt = \frac{1}{k}e^{kt}$:
$$\int 40e^{0.05t} \, dt = \frac{40}{0.05}e^{0.05t} = 800e^{0.05t}$$

Now evaluate the definite integral from $0$ to $10$:
$$\int_{0}^{10} 40e^{0.05t} \, dt = \left[ 800e^{0.05t} \right]_{0}^{10} = 800e^{0.05(10)} - 800e^{0.05(0)}$$
$$= 800e^{0.5} - 800(1) = 800e^{0.5} - 800$$

Calculate the numerical value (since $e^{0.5} \approx 1.6487$):
$$\text{Accumulated Growth} \approx 800(1.6487) - 800 = 1318.96 - 800 \approx 519\text{ cells}$$

Add the initial population:
$$P(10) = 500 + 519 = 1019\text{ cells}$$

---

### Sample Problem 2: Linear Exponential Decay
A radioactive tracer utilized in a laboratory experiment decays over time. The rate of mass loss is modeled by the function $M'(t) = -5e^{-0.2t}$ milligrams per hour. If the sample has an initial mass of $100\text{ mg}$ at $t = 0$, find the net change in mass over the first $5$ hours, and state the remaining mass.

#### Solution:
First, calculate the net change by integrating the rate function from $t = 0$ to $t = 5$:
$$\Delta M = \int_{0}^{5} -5e^{-0.2t} \, dt$$

Integrate using the exponential decay rule:
$$\Delta M = \left[ \frac{-5}{-0.2}e^{-0.2t} \right]_{0}^{5} = \left[ 25e^{-0.2t} \right]_{0}^{5}$$
$$\Delta M = 25e^{-0.2(5)} - 25e^{-0.2(0)} = 25e^{-1} - 25(1)$$

Since $e^{-1} \approx 0.3679$:
$$\Delta M \approx 25(0.3679) - 25 = 9.20 - 25 = -15.80\text{ mg}$$
*(The negative sign confirms a net loss of mass).*

Now, find the final remaining mass $M(5)$:
$$M(5) = M(0) + \Delta M = 100 + (-15.80) = 84.20\text{ mg}$$

---

## 3. Real-Life Engineering Application Problems

### Engineering Problem 1: [[Biomedical Engineering — Pharmacokinetics & Patient Dosing Window]]
[[Biomedical Engineering — Pharmacokinetics & Patient Dosing Window Solution]]




---

### Engineering Problem 2: [[Environmental Engineering — Contaminant Accumulation in a Retention Basin]]
[[Environmental Engineering — Contaminant Accumulation in a Retention Basin Solution]]


---

### Engineering Problem 3: [[Electrical & Energy Engineering — Microgrid Battery Bank Storage]]
[[Electrical & Energy Engineering — Microgrid Battery Bank Storage Solution]]

#### Active Practice Problem
Population Growth Modeling
A certain organism develops with a rate of growth defined by:
$$P'(t) = e^{0.01t}$$
where $t$ represents minutes. Find the population size after an hour, if the organism initially started to develop with $10$ members.

##### Workspace

##### Solution
###### Key Concepts & Setup

- **Rate of Growth:** The derivative $P'(t)$ represents the rate at which the population changes per minute.

- **Total Population:** To find the total population function $P(t)$, we need to find the antiderivative (integrate) of the growth rate function.

- **Initial Condition:** We are given that the initial population is $10$ members, which means at $t = 0$, $P(0) = 10$.

- **Time Conversion:** The variable $t$ is measured in **minutes**, but the question asks for the population after **one hour**. You must convert hours to minutes before plugging it into the equation:

$$\text{1 hour} = 60\text{ minutes}$$


There are two equally valid ways to solve this using calculus. Both lead to the same result.

###### Method 1: Using the Net Change Theorem (Definite Integral)

The Net Change Theorem states that the future value of a quantity is its initial value plus the integral of its rate of change:

$$P(t) = P(0) + \int_{0}^{t} P'(x) \, dx$$

1. **Set up the integral for $t = 60$ minutes:**

$$P(60) = 10 + \int_{0}^{60} e^{0.01t} \, dt$$

2. **Integrate the function:**

Recall that $\int e^{at} \, dt = \frac{1}{a}e^{at}$. Since $a = 0.01$:

$$\int e^{0.01t} \, dt = \frac{1}{0.01}e^{0.01t} = 100e^{0.01t}$$

3. **Evaluate the definite integral from $0$ to $60$:**

$$\int_{0}^{60} e^{0.01t} \, dt = \left[ 100e^{0.01t} \right]_{0}^{60}$$

$$= 100e^{0.01(60)} - 100e^{0.01(0)}$$

$$= 100e^{0.6} - 100e^{0}$$


Since $e^0 = 1$:

$$= 100e^{0.6} - 100$$

4. **Add the initial population ($10$):**

$$P(60) = 10 + (100e^{0.6} - 100)$$

$$P(60) = 100e^{0.6} - 90$$


###### Method 2: Finding the General Equation (Indefinite Integral)

1. **Find the general population function $P(t)$:**

$$P(t) = \int P'(t) \, dt = \int e^{0.01t} \, dt$$

$$P(t) = 100e^{0.01t} + C$$

2. **Use the initial condition ($P(0) = 10$) to find the constant $C$:**

$$10 = 100e^{0.01(0)} + C$$

$$10 = 100(1) + C$$

$$10 = 100 + C$$

$$C = 10 - 100 = -90$$

3. **Write the complete population function:**

$$P(t) = 100e^{0.01t} - 90$$

4. **Substitute $t = 60$ into the function:**

$$P(60) = 100e^{0.01(60)} - 90$$

$$P(60) = 100e^{0.6} - 90$$


###### Final Calculation

Now, let's approximate the exact mathematical answer to find the actual number of organisms:

1. Calculate $e^{0.6}$:

$$e^{0.6} \approx 1.82212$$

2. Multiply by $100$:

$$100 \times 1.82212 = 182.212$$

3. Subtract $90$:

$$182.212 - 90 = 92.212$$


Since we are counting individual organisms, we round to the nearest whole number.

**Answer:** The population size after an hour will be approximately **$92$ members** (or exactly $100e^{0.6} - 90$).

### Regroup 2
- Reflect on the physical modeling applications and mathematical setups.

### Skill Block 3
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

#### Active Practice Problem
Cardiac Output & Dye Dilution Method
The dye dilution method is used to measure the cardiac output in an individual. If the dye concentration in the blood stream is modeled by the function:
$$C(t) = 2e^{-0.1t}$$
and the cardiac output between $1$ and $3$ minutes after the dye was administered was $4\text{ L/min}$, find the initial amount of dye.

##### Workspace

##### Solution
###### Key Concepts & Setup

- **The Dye Dilution Method:** A known mass of dye ($A$) is injected into the bloodstream. As the heart pumps, the dye dilutes, and its concentration $C(t)$ is measured over a specific time interval.

- **Cardiac Output Formula:** Cardiac output ($F$) is the volume of blood pumped by the heart per minute. It is related to the amount of dye injected and its concentration by the following integral equation:

$$F = \frac{A}{\int_{t_1}^{t_2} C(t) \, dt}$$

- **Solving for $A$ (Initial Amount of Dye):** Rearranging the formula to isolate $A$, we get:

$$A = F \cdot \int_{t_1}^{t_2} C(t) \, dt$$


###### Given Values:

- **Cardiac Output ($F$):** $4\text{ L/min}$

- **Time Interval:** From $t_1 = 1$ to $t_2 = 3$ minutes

- **Concentration Function ($C(t)$):** $2e^{-0.1t}$


###### Step-by-Step Derivation

###### Step 1: Set up the integral

Substitute the concentration function and the time boundaries into the equation:

$$A = 4 \cdot \int_{1}^{3} 2e^{-0.1t} \, dt$$

We can pull the constant $2$ out of the integral:

$$A = 8 \cdot \int_{1}^{3} e^{-0.1t} \, dt$$

###### Step 2: Find the antiderivative

Recall the integration rule $\int e^{at} \, dt = \frac{1}{a}e^{at}$. Here, $a = -0.1$:

$$\int e^{-0.1t} \, dt = \frac{1}{-0.1}e^{-0.1t} = -10e^{-0.1t}$$

###### Step 3: Evaluate the definite integral using limits

Apply the boundaries from $1$ to $3$:

$$\int_{1}^{3} e^{-0.1t} \, dt = \left[ -10e^{-0.1t} \right]_{1}^{3}$$

$$= \left(-10e^{-0.1(3)}\right) - \left(-10e^{-0.1(1)}\right)$$

$$= -10e^{-0.3} + 10e^{-0.1}$$

Factoring out the $10$:

$$= 10\left(e^{-0.1} - e^{-0.3}\right)$$

###### Step 4: Calculate the final value for $A$

Multiply the integral result by the remaining constant multiplier ($8$) from Step 1:

$$A = 8 \cdot \left[ 10\left(e^{-0.1} - e^{-0.3}\right) \right]$$

$$A = 80\left(e^{-0.1} - e^{-0.3}\right)$$

###### Final Approximation

Let's evaluate the exponential expressions to find the numerical amount:

- $e^{-0.1} \approx 0.9048$

- $e^{-0.3} \approx 0.7408$


Substitute these back into the formula:

$$A \approx 80 \cdot (0.9048 - 0.7408)$$

$$A \approx 80 \cdot (0.1640)$$

$$A \approx 13.12$$

**Answer:** The initial amount of dye administered was exactly **$80\left(e^{-0.1} - e^{-0.3}\right)$** or approximately **$13.12\text{ mg}$** (or units of mass).

### Regroup 3
- Verify calculations and mathematical reasoning.

### Synthesis Wrap-up
- Core takeaways from Session 09 and overview of homework homework assignment.
