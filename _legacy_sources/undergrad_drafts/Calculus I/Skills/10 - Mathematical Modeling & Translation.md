
# Skill 1: Mathematical Modeling & Translation 

In related rates problems, the most critical step is translating a real-world, narrative description of a physical system into precise calculus notation. Before performing any differentiation, you must construct a mathematical model by identifying constants, assigning variables, and establishing a geometric or algebraic equation that binds the components of the system together.

---

## 1. Core Concepts: The Language of Related Rates

To model a system successfully, you must interpret how words translate into calculus symbols. 

### The Independent Variable: Time ($t$)
In related rates, every changing quantity is treated as an implicit function of time ($t$). Therefore, rates of change are always expressed as derivatives taken with respect to $t$ (e.g., $\frac{dx}{dt}$, $\frac{dV}{dt}$, $\frac{d\theta}{dt}$).

### Sign Conventions for Rates
The wording of a problem dictates whether a rate of change is algebraically positive or negative:
* **Positive Rates ($\frac{d\square}{dt} > 0$):** Used when a quantity is **increasing**, growing, expanding, or moving away from a reference point. (Examples: "filling with air", "traveling east/north away from a port", "drawn away from a wall").
* **Negative Rates ($\frac{d\square}{dt} < 0$):** Used when a quantity is **decreasing**, shrinking, draining, or moving toward a reference point. (Examples: "a leak causing air to escape", "sliding down the wall").

### Static vs. Dynamic Quantities
* **Static Quantities:** Values that remain constant throughout the entire duration of the problem. Their rate of change with respect to time is always zero ($\frac{d(\text{constant})}{dt} = 0$). These can be substituted into your primary equation *before* differentiating. (Example: The length of a rigid ladder, or the radius of a solid cylinder).
* **Dynamic Quantities:** Values that change continuously as time passes. These must be kept as variables ($x$, $y$, $r$, $h$) during differentiation. You may only substitute their specific "snapshot" values at the very final step of the problem.

---

## 2. Sample Problems (From Guided Notes)

### Sample Problem 1: Right Triangle Model (Two Boats)
**Problem Statement:** Two boats leave a port at the same time. Boat A travels east at 24 miles per hour, while Boat B travels north at 10 mph. At what rate is the distance between the two boats changing at the moment Boat A has traveled 12 miles and Boat B has traveled 5 miles?


#### Step 1: Define Variables & Label Diagram
* Let $a =$ the distance from Boat A to the port (in miles).
* Let $b =$ the distance from Boat B to the port (in miles).
* Let $c =$ the straight-line distance between Boat A and Boat B (in miles).
* Let $t =$ time passed (in hours).

#### Step 2: Extract Given Information & Determine the Goal
* **Given Rates:** $\frac{da}{dt} = 24\text{ mph}$ and $\frac{db}{dt} = 10\text{ mph}$. (Both are positive because the boats are moving away from the port, increasing $a$ and $b$).
* **Snapshot Values:** $a = 12\text{ miles}$ and $b = 5\text{ miles}$.
* **Goal:** Find $\frac{dc}{dt}$.

#### Step 3: Establish the Primary Equation
The physical constraints form a right triangle. By the Pythagorean Theorem:
$$a^2 + b^2 = c^2$$

#### Step 4: Differentiate and Solve
Differentiate both sides implicitly with respect to $t$:
$$2a\frac{da}{dt} + 2b\frac{db}{dt} = 2c\frac{dc}{dt}$$

Find the snapshot value for $c$ using the Pythagorean theorem ($12^2 + 5^2 = c^2 \implies c = 13$). Plug in all values:
$$2(12)(24) + 2(5)(10) = 2(13)\frac{dc}{dt}$$
$$576 + 100 = 26\frac{dc}{dt}$$
$$676 = 26\frac{dc}{dt} \implies \frac{dc}{dt} = 26\text{ mph}$$

**Summary Sentence:** At the specified moment, the distance between the two boats is increasing at a rate of 26 mph.

---

### Sample Problem 2: Geometry Model (Cylindrical Tank)
**Problem Statement:** Suppose a cylindrical tank containing water has a leak which causes the water to drain at a rate of 50 $\text{in}^3/\text{s}$. If the tank has a radius of 10 inches, how is the height of the water changing when the tank is 25 inches full?


#### Step 1: Define Variables
* Let $V =$ the volume of water in the tank (in cubic inches).
* Let $r =$ the radius of the water surface (in inches).
* Let $h =$ the height of the water in the tank (in inches).

#### Step 2: Extract Given Information & Determine the Goal
* **Given Rate:** $\frac{dV}{dt} = -50\text{ in}^3/\text{s}$. (Negative because water is draining out, decreasing the volume).
* **Static Constraint:** The tank is a rigid cylinder, so the radius of the water is constant at all times ($r = 10\text{ in}$ and $\frac{dr}{dt} = 0\text{ in/s}$).
* **Snapshot Value:** $h = 25\text{ in}$.
* **Goal:** Find $\frac{dh}{dt}$.

#### Step 3: Establish the Primary Equation
The volume of a cylinder is:
$$V = \pi r^2 h$$

*Crucial Step 1 Practice:* Because $r$ is static ($r = 10$ forever), substitute it into the formula **before** differentiating to simplify the tracking:
$$V = \pi (10)^2 h \implies V = 100\pi h$$

#### Step 4: Differentiate and Solve
Differentiate implicitly with respect to $t$:
$$\frac{dV}{dt} = 100\pi \frac{dh}{dt}$$

Plug in $\frac{dV}{dt} = -50$:
$$-50 = 100\pi \frac{dh}{dt} \implies \frac{dh}{dt} = \frac{-50}{100\pi} = -\frac{1}{2\pi}\text{ in/s}$$

**Summary Sentence:** When the tank is 25 inches full, the height of the water is decreasing at a rate of $\frac{1}{2\pi}\text{ in/s}$.

---

## 3. Real-Life Engineering Application Problems

### Engineering Problem 1: [[Hydraulic Reservoir Surge Control (Civil Engineering)]]
[[Hydraulic Reservoir Surge Control (Civil Engineering) Solution]]

---

### Engineering Problem 2: [[Radar-Guided Missile Intercept Tracking (Aerospace Engineering)]]
[[Radar-Guided Missile Intercept Tracking (Aerospace Engineering) Solution]]

---

### Engineering Problem 3: [[Environmental Plume Mapping (Chemical & Environmental Engineering)]]
[[Environmental Plume Mapping (Chemical & Environmental Engineering) Solution]]
