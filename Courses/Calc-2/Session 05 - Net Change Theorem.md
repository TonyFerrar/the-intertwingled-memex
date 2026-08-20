---
title: "Session 05 - Net Change Theorem"
type: course-session
course: MATH-182
semester: Fall 2026
publish: true
cssclasses: []
updated: 2026-08-18
---

# Session 05 - Net Change Theorem

> [!abstract] Session Objectives & Overview
> By the end of this session, you will be able to:
> - Differentiating Between Net Change (Displacement) and Total Change (Distance Traveled)
> - Generalizing and Translating Mathematical Models Across Contexts

## Timeline & Session Breakdown

### 00:00 - 00:10 (10 mins) — Micro-Lecture: Motivation & Theory
> [!example] Engineering Context: Engineering Calculus II Application
> In real-world engineering, tracking rates of change is vital for monitoring and managing dynamic systems where direct measurement is impossible. Aerospace engineers apply these concepts to distinguish between a vehicle's net altitude change (displacement) and its total structural wear and fuel burn (distance traveled), while electrical engineers integrate electrical current over time to dynamically calculate a smartphone or electric vehicle's remaining battery capacity from its initial charge. Additionally, civil and chemical engineers rely on the Net Change Theorem to balance changing fluid volumes in municipal water reservoirs or to precisely quantify the total volume of oil lost during a decaying pipeline leak. By translating these calculus models across disciplines, engineers can accurately predict future system states, optimize efficiency, and prevent critical infrastructure failures.

### 00:10 - 00:25 (15 mins) — Skill Block 1: Differentiating Between Net Change (Displacement) and Total Change (Distance Traveled)
> [!note]- Theory & Derivations
> ## 1. Core Explanatory Notes
> 
> In calculus, when analyzing an object moving along a straight line, we track its state using position and velocity functions.
> 
> - **Position, $s(t)$**: Denotes the exact location of an object at a given time $t$.
>     
> - **Velocity, $v(t)$**: The rate of change of the object's position over time. It is the derivative of position, meaning position is an antiderivative of velocity ($s(t) = \int v(t) \, dt$).
>     
> 
> When integrating velocity over a specific time interval $[a, b]$, the resulting value depends entirely on how we treat the direction of motion.
> 
> ### Displacement (Net Change)
> 
> Displacement measures the net change in position from the starting time $t = a$ to the ending time $t = b$. It only looks at the initial and final states, completely ignoring any back-and-forth movement in between.
> 
> $$\text{Displacement} = s(b) - s(a) = \int_{a}^{b} v(t) \, dt$$
> 
> > **Geometric Interpretation**: Displacement represents the **net area** bounded by the velocity curve and the time axis. Areas above the axis (forward motion) are treated as positive, while areas below the axis (backward motion) are treated as negative.
> 
> ### Total Distance Traveled
> 
> Total distance measures the entire length of the path traveled by the object, treating all movement as positive cumulative progress.
> 
> $$\text{Total Distance} = \int_{a}^{b} |v(t)| [cite_start]\, dt$$
> 
> > **Geometric Interpretation**: Distance represents the **total absolute area** bounded by the velocity curve and the time axis. All areas, whether above or below the axis, are evaluated as positive values.
> 
> ### Methodology for Calculating Total Distance
> 
> To evaluate the absolute value integral manually, follow these steps:
> 
> 1. **Find the roots**: Set $v(t) = 0$ to find the times when the object changes direction.
>     
> 2. **Test the intervals**: Determine where $v(t) \ge 0$ (moving forward) and where $v(t) \le 0$ (moving backward).
>     
> 3. **Split the integral**: Divide the single integral into sub-intervals based on these signs, flipping the sign of the negative regions:
>     
>     $$\int_{a}^{b} |v(t)| \, dt = \int_{a}^{c} v(t) \, dt + \int_{c}^{b} -v(t) \, dt$$
>     
> 
> ## 2. Standard Sample Problems
> 
> ### Problem 1
> 
> A particle moves along a coordinate line with a velocity function of $v(t) = 6t - 12$ (in meters per second) for times $0 \le t \le 3$.
> 
> - **(a)** Find the displacement of the particle on the interval $[0, 3]$.
>     
> - **(b)** Find the total distance traveled by the particle on the interval $[0, 3]$.
>     
> 
> ### Solution to Problem 1
> 
> **(a) Finding Displacement:**
> 
> Directly integrate the velocity function over the interval $[0, 3]$:
> 
> $$\text{Displacement} = \int_{0}^{3} (6t - 12) \, dt$$
> 
> Find the antiderivative:
> 
> $$F(t) = 3t^2 - 12t$$
> 
> Evaluate from $0$ to $3$:
> 
> $$\text{Displacement} = \left[ 3t^2 - 12t \right]_{0}^{3} = \left( 3(3)^2 - 12(3) \right) - (0) = (27 - 36) = -9 \text{ meters}$$
> 
> **(b) Finding Total Distance:**
> 
> First, determine where the particle changes direction by setting $v(t) = 0$:
> 
> $$6t - 12 = 0 \implies t = 2 \text{ seconds}$$
> 
> Check intervals:
> 
> - For $[0, 2]$, $v(1) = -6$ (negative velocity).
>     
> - For $[2, 3]$, $v(2.5) = 3$ (positive velocity).
>     
> 
> Split the integral at $t = 2$ and apply absolute values:
> 
> $$\text{Total Distance} = \left| \int_{0}^{2} (6t - 12) \, dt \right| + \int_{2}^{3} (6t - 12) \, dt$$
> 
> $$\text{Total Distance} = \left| \left[ 3t^2 - 12t \right]_{0}^{2} \right| + \left[ 3t^2 - 12t \right]_{2}^{3}$$
> 
> Evaluate the first region:
> 
> $$\left[ 3(2)^2 - 12(2) \right] - 0 = 12 - 24 = -12 \implies |-12| = 12$$
> 
> Evaluate the second region:
> 
> $$\left[ 3(3)^2 - 12(3) \right] - \left[ 3(2)^2 - 12(2) \right] = (-9) - (-12) = 3$$
> 
> Sum the components together:
> 
> $$\text{Total Distance} = 12 + 3 = 15 \text{ meters}$$
> 
> ## 3. Real-Life Engineering Application Problems
> 
> ### Engineering Problem 1: [[Aerospace Engineering (Vertical Flight Telemetry)]]
> [[Aerospace Engineering (Vertical Flight Telemetry) Solution]]
> 
> 
> ### Engineering Problem 2: [[Mechanical Engineering (Automotive Testing)]]
> [[Mechanical Engineering (Automotive Testing) Solution]]


#### Worked Example
Suppose an object moves with velocity $v(t) = 4 - t^2$ (in m/s) for times $0 \le t \le 3$.
   - **(a)** What is the displacement of the object over the time interval?
   - **(b)** What is the total distance traveled by the object over the interval?

> [!check]- Worked Solution
> ## Part (a): Finding the Displacement
> 
> ### **Concept Explanation**
> 
> **Displacement** is the net change in an object's position. It only cares about where the object started and where it ended, regardless of any back-and-forth movement in between.
> 
> Mathematically, displacement is found by taking the definite integral of the velocity function $v(t)$ over the given time interval $[a, b]$:
> 
> $$\text{Displacement} = \int_{a}^{b} v(t) \, dt$$
> 
> ### **Step-by-Step Calculation**
> 
> **Step 1: Set up the definite integral**
> 
> Using our velocity function $v(t) = 4 - t^2$ over the interval $[0, 3]$:
> 
> $$\text{Displacement} = \int_{0}^{3} (4 - t^2) \, dt$$
> 
> **Step 2: Find the antiderivative**
> 
> Integrate each term individually using the power rule ($\int t^n \, dt = \frac{t^{n+1}}{n+1}$):
> 
> - The antiderivative of $4$ is $4t$.
> 
> - The antiderivative of $-t^2$ is $-\frac{t^3}{3}$.
> 
> 
> So, the general antiderivative is:
> 
> $$F(t) = 4t - \frac{t^3}{3}$$
> 
> **Step 3: Evaluate the integral using the Fundamental Theorem of Calculus**
> 
> We evaluate $F(t)$ at the upper limit ($t = 3$) and subtract the value at the lower limit ($t = 0$):
> 
> $$\text{Displacement} = \left[ 4t - \frac{t^3}{3} \right]_{0}^{3}$$
> 
> Substitute $t = 3$:
> 
> $$F(3) = 4(3) - \frac{3^3}{3} = 12 - \frac{27}{3} = 12 - 9 = 3$$
> 
> Substitute $t = 0$:
> 
> $$F(0) = 4(0) - \frac{0^3}{3} = 0$$
> 
> Subtract the two values:
> 
> $$\text{Displacement} = 3 - 0 = 3\text{ meters}$$
> 
> ### **Final Answer for (a)**
> 
> The displacement of the object over the time interval is **$3\text{ meters}$**.
> 
> ## Part (b): Finding the Total Distance Traveled
> 
> ### **Concept Explanation**
> 
> **Total distance traveled** measures every single inch the object moved, whether it was going forward or backward. Because distance cannot be negative, we must integrate the _absolute value_ of the velocity function:
> 
> $$\text{Total Distance} = \int_{a}^{b} |v(t)| \, dt$$
> 
> Because the absolute value changes how we handle the function depending on whether it is positive or negative, we need to see if the object changes direction (crosses the t-axis) during the interval $[0, 3]$.
> 
> ### **Step-by-Step Calculation**
> 
> **Step 1: Find where the object changes direction**
> 
> Set the velocity function equal to zero to find the turning points:
> 
> $$4 - t^2 = 0$$
> 
> $$t^2 = 4$$
> 
> $$t = 2 \quad \text{(ignoring } t = -2 \text{ since time must be } \ge 0\text{)}$$
> 
> The object changes direction at $t = 2$ seconds.
> 
> **Step 2: Determine the sign of velocity in each interval**
> 
> - **Interval $[0, 2]$:** Pick a test point like $t = 1$. Here, $v(1) = 4 - 1^2 = 3$ (Positive velocity $\rightarrow$ moving forward).
> 
> - **Interval $[2, 3]$:** Pick a test point like $t = 2.5$. Here, $v(2.5) = 4 - 6.25 = -2.25$ (Negative velocity $\rightarrow$ moving backward).
> 
> 
> **Step 3: Split the integral into two parts**
> 
> To account for the backward movement, we split the integral at $t = 2$ and take the absolute value of each section's result:
> 
> $$\text{Total Distance} = \int_{0}^{2} (4 - t^2) \, dt + \left| \int_{2}^{3} (4 - t^2) \, dt \right|$$
> 
> **Step 4: Evaluate the first interval $[0, 2]$ (Forward motion)**
> 
> Using our antiderivative from Part (a):
> 
> $$\int_{0}^{2} (4 - t^2) \, dt = \left[ 4t - \frac{t^3}{3} \right]_{0}^{2}$$
> 
> $$= \left( 4(2) - \frac{2^3}{3} \right) - 0$$
> 
> $$= 8 - \frac{8}{3} = \frac{24}{3} - \frac{8}{3} = \frac{16}{3}\text{ meters}$$
> 
> **Step 5: Evaluate the second interval $[2, 3]$ (Backward motion)**
> 
> $$\int_{2}^{3} (4 - t^2) \, dt = \left[ 4t - \frac{t^3}{3} \right]_{2}^{3}$$
> 
> We already know the value at $t = 3$ is $3$, and the value at $t = 2$ is $\frac{16}{3}$:
> 
> $$= 3 - \frac{16}{3} = \frac{9}{3} - \frac{16}{3} = -\frac{7}{3}\text{ meters}$$
> 
> Taking the absolute value (since distance is positive):
> 
> $$\left| -\frac{7}{3} \right| = \frac{7}{3}\text{ meters}$$
> 
> **Step 6: Add the distances together**
> 
> $$\text{Total Distance} = \frac{16}{3} + \frac{7}{3} = \frac{23}{3}\text{ meters}$$
> 
> Converting to a mixed fraction or decimal gives:
> 
> $$\frac{23}{3} = 7\frac{2}{3} \approx 7.67\text{ meters}$$
> 
> ### **Final Answer for (b)**
> 
> The total distance traveled by the object over the interval is **$\frac{23}{3}\text{ meters}$** (or approximately **$7.67\text{ meters}$**).

#### Active Practice Problem
The velocity (in miles per hour) of a hiker walking along a straight trail is given by $v(t) = 2\pi \sin(\pi t)$ for $t \ge 0$. You can assume that $s(0) = 0$.
   - **(a)** How far has the hiker traveled in the first hour?
   - **(b)** Determine the position of the hiker, $s(t)$, for any time $t \ge 0$.

> [!workspace] Student Practice Space
> 

> [!check]- Solution
> ## Part (a): How far has the hiker traveled in the first hour?
> 
> ### **Concept Explanation**
> 
> To find how far an object has traveled, we typically look at its **total distance** or **displacement**.
> 
> First, we need to check if the hiker ever changes direction or walks backward during the first hour ($t = 0$ to $t = 1$). A change in direction occurs if the velocity $v(t)$ becomes negative.
> 
> - Our velocity function is $v(t) = 2\pi \sin(\pi t)$.
> 
> - Over the first hour ($0 \le t \le 1$), the angle inside the sine function ($\pi t$) ranges from $0$ to $\pi$.
> 
> - Since $\sin(\theta)$ is always positive or zero when $\theta$ is between $0$ and $\pi$, the velocity $v(t)$ is entirely non-negative during this hour.
> 
> 
> Because the hiker never walks backward during this interval, the **displacement** and the **total distance traveled** are identical. We can find the distance by computing the definite integral of $v(t)$ from $0$ to $1$.
> 
> ### **Step-by-Step Calculation**
> 
> **Step 1: Set up the definite integral**
> 
> $$\text{Distance} = \int_{0}^{1} 2\pi \sin(\pi t) \, dt$$
> 
> **Step 2: Find the antiderivative**
> 
> To integrate $2\pi \sin(\pi t)$, we can use a basic $u$-substitution mentally or explicitly:
> 
> - Let $u = \pi t$, which means the derivative is $du = \pi \, dt$.
> 
> - Notice we have a $2\pi$ in front. We can rewrite the integral to perfectly match our $du$:
> 
> $$\int 2\pi \sin(\pi t) \, dt = 2 \int \sin(\pi t) \cdot (\pi \, dt)$$
> 
> 
> Since the antiderivative of $\sin(u)$ is $-\cos(u)$, the antiderivative is:
> 
> $$F(t) = -2 \cos(\pi t)$$
> 
> **Step 3: Evaluate the definite integral**
> 
> Apply the Fundamental Theorem of Calculus by evaluating $F(t)$ at the upper limit ($t = 1$) and subtracting the value at the lower limit ($t = 0$):
> 
> $$\text{Distance} = \Big[ -2 \cos(\pi t) \Big]_{0}^{1}$$
> 
> Substitute the upper limit ($t = 1$):
> 
> $$-2 \cos(\pi \cdot 1) = -2 \cos(\pi)$$
> 
> Since $\cos(\pi) = -1$:
> 
> $$-2(-1) = 2$$
> 
> Substitute the lower limit ($t = 0$):
> 
> $$-2 \cos(\pi \cdot 0) = -2 \cos(0)$$
> 
> Since $\cos(0) = 1$:
> 
> $$-2(1) = -2$$
> 
> Subtract the lower limit value from the upper limit value:
> 
> $$\text{Distance} = 2 - (-2) = 2 + 2 = 4 \text{ miles}$$
> 
> ### **Final Answer for (a)**
> 
> The hiker has traveled **$4\text{ miles}$** in the first hour.
> 
> ## Part (b): Determine the position of the hiker, $s(t)$, for any time $t \ge 0$
> 
> ### **Concept Explanation**
> 
> The position function $s(t)$ is the antiderivative (indefinite integral) of the velocity function $v(t)$.
> 
> $$s(t) = \int v(t) \, dt$$
> 
> When we find an indefinite integral, it includes an unknown constant of integration, $+ C$. We will use the problem's given initial condition, $s(0) = 0$ (the hiker starts at position 0 at time $t = 0$), to solve for the exact value of $C$.
> 
> ### **Step-by-Step Calculation**
> 
> **Step 1: Find the general position function**
> 
> Integrate the velocity function with respect to $t$:
> 
> $$s(t) = \int 2\pi \sin(\pi t) \, dt$$
> 
> Using our antiderivative work from Part (a), we include the constant $C$:
> 
> $$s(t) = -2 \cos(\pi t) + C$$
> 
> **Step 2: Solve for the initial constant $C$**
> 
> We are told that $s(0) = 0$. Plug $t = 0$ into our function and set the entire equation equal to $0$:
> 
> $$0 = -2 \cos(\pi \cdot 0) + C$$
> 
> $$0 = -2 \cos(0) + C$$
> 
> Since $\cos(0) = 1$:
> 
> $$0 = -2(1) + C$$
> 
> $$0 = -2 + C$$
> 
> $$C = 2$$
> 
> **Step 3: Write the final position formula**
> 
> Substitute $C = 2$ back into your general position equation:
> 
> $$s(t) = -2 \cos(\pi t) + 2$$
> 
> For standard formatting, this is typically written with the positive constant first:
> 
> $$s(t) = 2 - 2 \cos(\pi t)$$
> 
> ### **Final Answer for (b)**
> 
> The position of the hiker for any time $t \ge 0$ is **$s(t) = 2 - 2 \cos(\pi t)$** (in miles).

### 00:25 - 00:30 (5 mins) — Regroup 1: Class Discussion
- Review common misconceptions and clarify key notations.

### 00:30 - 00:45 (15 mins) — Skill Block 2: Generalizing and Translating Mathematical Models Across Contexts
> [!note]- Theory & Derivations
> ## 1. Core Explanatory Notes
> 
> The power of calculus lies in its universality. In your initial studies, integration is often introduced using kinematic terms like "position," "velocity," and "displacement". However, the exact same mathematical frameworks apply to any dynamic system where a quantity changes over time.
> 
> The **Net Change Theorem** states that the definite integral of a rate of change function yields the total net accumulation of the corresponding physical quantity over that period.
> 
> ### The Generalized Framework
> 
> Let $Q(t)$ represent any time-dependent quantity (such as fluid volume, consumer cost, electrical current, or population size).
> 
> - **Rate of Change:** The instantaneous rate at which $Q$ changes is given by its derivative, $Q'(t)$.
>     
> - **The Net Change Theorem:** The absolute net change in the quantity from an initial time $t = a$ to a future time $t = b$ is computed by integrating its rate function:
>     
>     $$Q(b) - Q(a) = \int_{a}^{b} Q'(t) \, dt \quad \text{[cite: 86]}$$
>     
> - **Future Value Calculation:** If you know the starting amount of the quantity, $Q(0)$, you can predict its total value at any future time $t$ by appending the net accumulation to that initial baseline:
>     
>     $$Q(t) = Q(0) + \int_{0}^{t} Q'(x) \, dx \quad \text{[cite: 89]}$$
>     
> 
> ### Conceptual Translation Guide
> 
> To successfully apply this skill across different engineering disciplines, you must learn to strip away context-specific vocabulary and map the system variables directly to the underlying calculus operations:
> 
> |**Kinematic Context**|**Generalized Calculus Context**|**Alternative Engineering Contexts**|
> |---|---|---|
> |**Velocity, $v(t)$**|Rate of Change, $Q'(t)$|Leakage Rate, Inflow Rate, Population Growth Rate|
> |**Displacement**|Net Change, $\int_{a}^{b} Q'(t)dt$|Total Fluid Volume Lost, Net Population Growth|
> |**Final Position, $s(t)$**|Future Value, $Q(t)$|Current Battery Capacity, Total Reservoir Volume|
> 
> ## 2. Standard Sample Problems
> 
> ### Problem 1
> 
> The rate of production of a manufacturing line is modeled by the function $Q'(t) = 6t^2 - 8t$ units per hour, where $t$ is the time in hours since the morning shift began.
> 
> - **(a)** Determine the net change in the number of units produced between hour $t = 1$ and hour $t = 3$.
>     
> - **(b)** If the assembly line already had 100 pre-assembled units in storage at $t = 0$, find the complete future value function $Q(t)$ representing total inventory.
>     
> 
> ### Solution to Problem 1
> 
> **(a) Finding Net Change:**
> 
> Apply the Net Change Theorem by integrating the rate function directly between the boundaries $t = 1$ and $t = 3$:
> 
> $$\text{Net Change} = \int_{1}^{3} (6t^2 - 8t) \, dt$$
> 
> Find the antiderivative using the power rule:
> 
> $$F(t) = 2t^3 - 4t^2$$
> 
> Evaluate the definite integral boundaries:
> 
> $$\text{Net Change} = \left[ 2t^3 - 4t^2 \right]_{1}^{3}$$
> 
> $$\text{Net Change} = \left( 2(3)^3 - 4(3)^2 \right) - \left( 2(1)^3 - 4(1)^2 \right)$$
> 
> $$\text{Net Change} = (54 - 36) - (2 - 4) = 18 - (-2) = 20 \text{ units}$$
> 
> **(b) Finding the Future Value Function:**
> 
> Using the generalized tracking equation:
> 
> $$Q(t) = Q(0) + \int_{0}^{t} Q'(x) \, dx$$
> 
> Substitute $Q(0) = 100$ and set up the integration using the dummy variable $x$:
> 
> $$Q(t) = 100 + \int_{0}^{t} (6x^2 - 8x) \, dx$$
> 
> $$Q(t) = 100 + \left[ 2x^3 - 4x^2 \right]_{0}^{t}$$
> 
> $$Q(t) = 100 + (2t^3 - 4t^2 - 0)$$
> 
> $$Q(t) = 2t^3 - 4t^2 + 100 \text{ units}$$
> 
> ## 3. Real-Life Engineering Application Problems
> 
> ### Engineering Problem 1: [[Chemical & Petroleum Engineering (Pipeline Leak Management)]]
> [[Chemical & Petroleum Engineering (Pipeline Leak Management) Solution]]
> 
> 
> ### Engineering Problem 2: [[Civil & Hydraulic Engineering (Reservoir Volume Management)]]
> [[Civil & Hydraulic Engineering (Reservoir Volume Management) Solution]]


#### Active Practice Problem
A small town has an initial population of 250 people. The annual rate of growth is given by $P'(t) = 30(1 + \sqrt{t})$.
   - **(a)** What is the population of the town, $P(t)$, at time $t$?
   - **(b)** How has the population changed after 9 years?

> [!workspace] Student Practice Space
> 

> [!check]- Solution
> ## Part (a): What is the population of the town, $P(t)$, at time $t$?
> 
> ### **Concept Explanation**
> 
> We are given the annual rate of population growth, $P'(t)$, which is the derivative of the population function. To find the original population function $P(t)$, we need to perform the reverse operation: integration.
> 
> $$P(t) = \int P'(t) \, dt$$
> 
> Integrating a rate of change gives us a general function with an unknown constant $+ C$. We can find the exact value of $C$ by using the initial condition provided in the problem: the initial population ($t = 0$) is 250 people.
> 
> ### **Step-by-Step Calculation**
> 
> **Step 1: Set up the indefinite integral** Substitute the rate of growth function into the integral:
> 
> $$P(t) = \int 30(1 + \sqrt{t}) \, dt$$
> 
> **Step 2: Simplify the integrand**
> 
> To make integration easier, rewrite the square root as a fractional exponent ($\sqrt{t} = t^{1/2}$) and factor out or distribute the constant 30:
> 
> $$P(t) = 30 \int (1 + t^{1/2}) \, dt$$
> 
> **Step 3: Integrate term by term**
> 
> Apply the power rule ($\int t^n \, dt = \frac{t^{n+1}}{n+1}$) to each term inside the parentheses:
> 
> - The integral of $1$ is $t$.
> 
> - The integral of $t^{1/2}$ is $\frac{t^{3/2}}{3/2} = \frac{2}{3}t^{3/2}$.
> 
> 
> Now, multiply these terms by the 30 out front and add the constant of integration $C$:
> 
> $$P(t) = 30 \left( t + \frac{2}{3}t^{3/2} \right) + C$$
> 
> Distribute the 30:
> 
> $$P(t) = 30t + 20t^{3/2} + C$$
> 
> **Step 4: Solve for the constant $C$ using the initial condition** We are told the initial population is 250, meaning $P(0) = 250$. Plug $t = 0$ into our function:
> 
> $$250 = 30(0) + 20(0)^{3/2} + C$$
> 
> $$250 = 0 + 0 + C$$
> 
> $$C = 250$$
> 
> **Step 5: Write the final population function**
> 
> Substitute $C = 250$ back into your equation:
> 
> $$P(t) = 30t + 20t^{3/2} + 250$$
> 
> ### **Final Answer for (a)**
> 
> The population of the town at any time $t$ is given by the function **$P(t) = 30t + 20t^{3/2} + 250$**.
> 
> ## Part (b): How has the population changed after 9 years?
> 
> ### **Concept Explanation**
> 
> This question asks for the **net change** in population over a 9-year interval ($t = 0$ to $t = 9$). According to the Net Change Theorem, the net change of a quantity is the definite integral of its rate of change:
> 
> $$\text{Net Change} = \int_{0}^{9} P'(t) \, dt$$
> 
> Alternatively, since we already solved for the specific population function $P(t)$ in Part (a), we can simply find the difference between the population at year 9 and the starting population:
> 
> $$\text{Net Change} = P(9) - P(0)$$
> 
> ### **Step-by-Step Calculation**
> 
> **Step 1: Evaluate the population at $t = 9$**
> 
> Plug $t = 9$ into the equation found in Part (a):
> 
> $$P(9) = 30(9) + 20(9)^{3/2} + 250$$
> 
> **Step 2: Simplify the exponential term**
> 
> To calculate $9^{3/2}$, take the square root of 9 first, then cube the result:
> 
> $$\sqrt{9} = 3 \longrightarrow 3^3 = 27$$
> 
> So, $9^{3/2} = 27$.
> 
> **Step 3: Finish evaluating $P(9)$**
> 
> $$P(9) = 270 + 20(27) + 250$$
> 
> $$P(9) = 270 + 540 + 250$$
> 
> $$P(9) = 1,060 \text{ people}$$
> 
> **Step 4: Calculate the net change**
> 
> Subtract the initial population from the population at year 9:
> 
> $$\text{Net Change} = P(9) - P(0)$$
> 
> $$\text{Net Change} = 1,060 - 250 = 810 \text{ people}$$
> 
> _(Note: If you calculated this using the definite integral $\left[ 30t + 20t^{3/2} \right]_{0}^{9}$, you would get $270 + 540 = 810$ directly.)_
> 
> ### **Final Answer for (b)**
> 
> After 9 years, the population has increased by **810 people**.

### 00:45 - 00:50 (5 mins) — Regroup 2: Reflection
- Reflect on the physical modeling applications and mathematical setups.

### 00:50 - 01:05 (15 mins) — Skill Block 3: Advanced Concept Practice 3
> [!note]- Theory & Derivations
> Explanations and derivations of the core concepts.


#### Active Practice Problem
Oil is leaking from a tank and engineers inspected the leak and determine that the amount of oil in the tank, $Q(t)$, is changing such that:
   $$Q'(t) = \frac{-8}{(t+3)^2}$$
   where $Q$ is in thousands of gallons and $t$ is in hours since the leak started at midnight.
   
   How much oil will leak from the tank between 5 and 6 AM? Give a complete sentence final answer with units.

> [!workspace] Student Practice Space
> 

> [!check]- Solution
> ## Concept Explanation
> 
> The problem provides the **rate of change** of the amount of oil in the tank, $Q'(t)$, and asks for the total quantity of oil lost over a specific time window.
> 
> According to the Net Change Theorem, the total net change of a quantity over a time interval $[a, b]$ is found by calculating the definite integral of its rate of change function:
> 
> $$\text{Net Change} = \int_{a}^{b} Q'(t) \, dt$$
> 
> Since $t$ represents the hours passed since midnight ($t = 0$):
> 
> - **5 AM** corresponds to $t = 5$
> 
> - **6 AM** corresponds to $t = 6$
> 
> 
> The rate function $Q'(t)$ is negative because the total volume of oil inside the tank is decreasing. To find the actual positive amount of oil that _escaped_ the tank, we can drop the negative sign and integrate the absolute rate of leakage:
> 
> $$\text{Amount Leaked} = \int_{5}^{6} \frac{8}{(t+3)^2} \, dt$$
> 
> ## Step-by-Step Calculation
> 
> ### **Step 1: Set up the definite integral**
> 
> To prepare the fraction for integration, rewrite it using a negative exponent:
> 
> $$\text{Amount Leaked} = \int_{5}^{6} 8(t + 3)^{-2} \, dt$$
> 
> ### **Step 2: Find the antiderivative**
> 
> We can integrate this using the power rule ($\int u^n \, du = \frac{u^{n+1}}{n+1}$), where the inner function is $u = t + 3$ (since the derivative of $t+3$ is just $1$, no complex substitution steps are required):
> 
> - Retain the constant coefficient $8$.
> 
> - Add $1$ to the exponent: $-2 + 1 = -1$.
> 
> - Divide by the new exponent: $-1$.
> 
> 
> The resulting antiderivative function is:
> 
> $$F(t) = \frac{8(t + 3)^{-1}}{-1} = -\frac{8}{t + 3}$$
> 
> ### **Step 3: Evaluate the definite integral**
> 
> Apply the Fundamental Theorem of Calculus by substituting the upper limit ($t = 6$) and subtracting the value at the lower limit ($t = 5$):
> 
> $$\text{Amount Leaked} = \left[ -\frac{8}{t + 3} \right]_{5}^{6}$$
> 
> Substitute the upper limit ($t = 6$):
> 
> $$F(6) = -\frac{8}{6 + 3} = -\frac{8}{9}$$
> 
> Substitute the lower limit ($t = 5$):
> 
> $$F(5) = -\frac{8}{5 + 3} = -\frac{8}{8} = -1$$
> 
> Subtract the lower limit evaluation from the upper limit evaluation:
> 
> $$\text{Amount Leaked} = \left( -\frac{8}{9} \right) - (-1)$$
> 
> $$\text{Amount Leaked} = -\frac{8}{9} + 1 = \frac{1}{9}$$
> 
> ## Step 4: Unit Conversion
> 
> The problem notes that the function $Q(t)$ measures oil in **thousands of gallons**. Therefore, our mathematical result of $\frac{1}{9}$ represents $\frac{1}{9}$ thousand gallons.
> 
> To state this in a more standard fashion, we convert it to individual gallons by multiplying by 1,000:
> 
> $$\frac{1}{9} \times 1000 = \frac{1000}{9} \approx 111.11 \text{ gallons}$$
> 
> ### **Final Answer**
> 
> Between 5 and 6 AM, $\frac{1}{9}$ thousand gallons (or approximately 111.11 gallons) of oil will leak from the tank.

### 01:05 - 01:10 (5 mins) — Regroup 3: Verification
- Verify calculations and mathematical reasoning.

### 01:10 - 01:15 (5 mins) — Synthesis Wrap-up
- Core takeaways from Session 05 and overview of homework homework assignment.
