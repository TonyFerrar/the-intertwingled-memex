# Skill 2: Multi-Variable Implicit Differentiation

Once a physical system is modeled with a geometric equation (Skill 1), the next critical milestone is executing the calculus. Skill 2 shifts the focus from setting up the equation to tracking how multiple changing quantities co-evolve using **Multi-Variable Implicit Differentiation**. 

The core mathematical engine here is the **Chain Rule**, applied under a specific paradigm: time ($t$) is the ultimate independent variable, and every spatial dimension is an implicit function of it.

---

## 1. Core Concepts: The Mechanics of Differentiation with Respect to Time

When executing implicit differentiation in related rates, you are not differentiating with respect to an axis variable like $x$. Instead, you are applying the differential operator $\frac{d}{dt}$ to both sides of an equation.

### The Dynamic Tail (The Chain Rule)
Every variable that changes over time behaves as a composite function like $x(t)$, $r(t)$, or $V(t)$. Because of this, when you differentiate a variable, you must always multiply by its corresponding "rate tail" ($\frac{dx}{dt}$, $\frac{dr}{dt}$, etc.).

* **Standard Calculus I Derivative:** $\frac{d}{dx}[x^2] = 2x$
* **Related Rates Time Derivative:** $\frac{d}{dt}[x^2] = 2x \cdot \frac{dx}{dt}$

### Core Derivatives Cheat Sheet
Here is how common geometric structures transform when the operator $\frac{d}{dt}$ is applied:

| Static/Standard Term | Time Derivative Operation ($\frac{d}{dt}$) | Common Pitfall |
| :--- | :--- | :--- |
| $x^2$ | $2x \frac{dx}{dt}$ | Forgetting the $\frac{dx}{dt}$ |
| $\pi r^2$ | $2\pi r \frac{dr}{dt}$ | Treating $\pi$ as a variable (it's a constant!) |
| $x \cdot y$ *(Product Rule)* | $x \frac{dy}{dt} + y \frac{dx}{dt}$ | Differentiating as just $\frac{dx}{dt} \cdot \frac{dy}{dt}$ |
| $r^2 h$ *(Product Rule)* | $2r \frac{dr}{dt} h + r^2 \frac{dh}{dt}$ | Dropping one of the terms |

---

## 2. Sample Problems (From Guided Notes)

### Sample Problem 1: The Product Rule Challenge (Oil Spill Area)
**Problem Statement:** An offshore rig begins to spill oil in a circular patch centered on the rig. If the radius of the oil spill increases at a rate of $30\text{ m/hr}$, how fast is the area of the oil spill increasing when the radius is $100\text{ meters}$?

#### Step 1: Model Setup (Skill 1 Review)
* **Variables:** Let $A = \text{Area of the circle } (\text{m}^2)$, $r = \text{radius } (\text{m})$.
* **Given Data:** $\frac{dr}{dt} = +30\text{ m/hr}$, snapshot $r = 100\text{ m}$.
* **Primary Equation:** $A = \pi r^2$

#### Step 2: Implicit Differentiation Execution (Skill 2 focus)
Apply the $\frac{d}{dt}$ operator to both sides:
$$\frac{d}{dt}[A] = \frac{d}{dt}[\pi r^2]$$

Remember that $\pi$ is a constant coefficient, so it stays attached. Apply the chain rule to $r^2$:
$$\frac{dA}{dt} = \pi \cdot \left(2r \cdot \frac{dr}{dt}\right)$$
$$\frac{dA}{dt} = 2\pi r \frac{dr}{dt}$$

#### Step 3: Substitute and Evaluate
Plug in the snapshot values ($r = 100$, $\frac{dr}{dt} = 30$):
$$\frac{dA}{dt} = 2\pi (100)(30)$$
$$\frac{dA}{dt} = 6000\pi\text{ m}^2\text{/hr}$$

**Summary Sentence:** The total surface area of the oil spill is expanding at a rate of $6000\pi\text{ m}^2\text{/hr}$.

---

### Sample Problem 2: Simultaneous Variables (Sliding Ladder)
**Problem Statement:** One end of a $13\text{ ft}$ ladder is on the ground and the other end rests on a vertical wall. The bottom end of the ladder is drawn away from the wall at $3\text{ ft/s}$. How fast is the top of the ladder sliding down the wall when the foot of the ladder is $5\text{ feet}$ from the wall?

#### Step 1: Model Setup
* **Variables:** Let $x = \text{distance from wall to foot of ladder } (\text{ft})$, $y = \text{height of the top of ladder } (\text{ft})$.
* **Given Data:** $\frac{dx}{dt} = +3\text{ ft/s}$, snapshot $x = 5\text{ ft}$. Length of ladder $L = 13\text{ ft}$ (Static constant $\implies \frac{dL}{dt}=0$).
* **Primary Equation:** $x^2 + y^2 = 13^2 \implies x^2 + y^2 = 169$

#### Step 2: Implicit Differentiation Execution
Apply $\frac{d}{dt}$ to both sides. Note that the derivative of the constant $169$ is $0$:
$$\frac{d}{dt}[x^2] + \frac{d}{dt}[y^2] = \frac{d}{dt}[169]$$
$$2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 0$$

Divide by 2 to isolate the rate terms easily:
$$x\frac{dx}{dt} + y\frac{dy}{dt} = 0$$

#### Step 3: Substitute and Evaluate
We need the snapshot value for $y$. Use the Pythagorean theorem at the specific moment: $5^2 + y^2 = 13^2 \implies 25 + y^2 = 169 \implies y = 12\text{ ft}$. 

Plug all known values into the differentiated equation:
$$(5)(3) + (12)\frac{dy}{dt} = 0$$
$$15 + 12\frac{dy}{dt} = 0 \implies 12\frac{dy}{dt} = -15 \implies \frac{dy}{dt} = -\frac{15}{12} = -1.25\text{ ft/s}$$

**Summary Sentence:** The top of the ladder is sliding down the wall at a rate of $1.25\text{ ft/s}$ (the negative sign confirms the downward direction).

---

## 3. Real-Life Engineering Application Problems

### Engineering Problem 1: [[High-Speed Robotic Arm Control (Mechanical Engineering)]]
[[High-Speed Robotic Arm Control (Mechanical Engineering) Solution]]

---

### Engineering Problem 2: [[Hydroelectric Turbine Intake Design (Hydraulic Engineering)]]
[[Hydroelectric Turbine Intake Design (Hydraulic Engineering) Solution]]


---

### Engineering Problem 3: [[Industrial Chemical Evaporation Monitoring (Chemical Engineering)]]
[[Industrial Chemical Evaporation Monitoring (Chemical Engineering) Solution]]
