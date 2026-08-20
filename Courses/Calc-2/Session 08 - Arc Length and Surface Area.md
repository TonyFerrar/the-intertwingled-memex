---
title: "Session 08 - Arc Length and Surface Area"
type: course-session
course: MATH-182
semester: Fall 2026
publish: true
cssclasses: []
updated: 2026-08-18
---

# Session 08 - Arc Length and Surface Area

## Session Objectives
By the end of this session, you will be able to:
- Advanced Algebraic Manipulation (The Simplifier)
- Differential Calculus & Form Recognizing (The Setup)
- Integral Evaluation Techniques (The Finisher)

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
In the physical world, translating 2D calculus equations into 3D structures is what keeps engineering projects functional, optimized, and financially viable. Civil engineers use arc length integrals to calculate the exact physical length needed for sagging suspension bridge cables—which naturally form exponential catenary curves—while aerospace and robotics engineers use the same math to map out optimal paths for drones and autonomous vehicles to minimize fuel consumption. Concurrently, calculating the surface area of revolution allows aerospace engineers to determine the exact material skin required for curved rocket fuselages, helps thermal engineers maximize heat dissipation in computer microchip heat sinks, and enables manufacturing plants to precisely budget the paint and anti-corrosive coatings needed for millions of mass-produced items, ultimately preventing structural failures and saving millions of dollars in wasted raw materials.

### Skill Block 1
The single biggest roadblock to successfully finding arc lengths or surface areas is not the calculus itself—it is surviving the algebra inside the radical $\sqrt{1 + (f'(x))^2}$. Because of the square root, standard integration is completely blocked unless the expression inside can be cleaned up. Skill 2 is all about recognizing hidden algebraic patterns to dissolve the radical.

## Topic Notes: The Two Core Algebraic Strategies

To clear the square root and unlock the integral, engineers and mathematicians look for two specific algebraic loopholes:

### 1. The Perfect Square Trinomial Identity

This classic calculus loophole relies on a subtle sign-flipping trick. Consider the expansion of a squared binomial:

$$(A - B)^2 = A^2 - 2AB + B^2$$

In arc length problems, if the product $2AB$ simplifies to a constant like $\frac{1}{2}$ or $2$, adding the number $1$ from the core formula changes the sign of that middle term:

$$1 + (A - B)^2 = 1 + A^2 - 2AB + B^2 = A^2 + 2AB + B^2 = (A + B)^2$$

By adding $1$, you have flipped a subtraction perfect square into a addition perfect square. When you take the square root of this new expression, the radical and the exponent cancel out completely:

$$\sqrt{(A + B)^2} = A + B$$

### 2. Common Denominator Pull-Out & Cancellation

When your derivative contains fractions, adding $1$ requires finding a common denominator. The target pattern looks like this:

$$1 + \frac{P(x)}{Q(x)} = \frac{Q(x) + P(x)}{Q(x)}$$

If the numerator $Q(x) + P(x)$ simplifies into a perfect square or a constant, you can distribute the square root to the top and bottom separately:

$$\sqrt{\frac{\text{Perfect Square}}{Q(x)}} = \frac{\text{Simplified Term}}{\sqrt{Q(x)}}$$

In surface area problems, the $\sqrt{Q(x)}$ in the denominator will almost always perfectly cancel out the radius term $2\pi f(x)$ sitting outside the radical, turning a terrifying integral into a basic polynomial.

## Standard Sample Problems

### Sample Problem 1: The Perfect Square Trinomial Trick

**Problem:** Find the arc length of the curve $x = \frac{y^3}{3} + \frac{1}{4y}$ over the interval $y \in [1, 2]$.

**Step-by-Step Solution:**

1. **Differentiate with respect to $y$:** Rewrite as $x = \frac{1}{3}y^3 + \frac{1}{4}y^{-1}$.
    
    $$\frac{dx}{dy} = y^2 - \frac{1}{4y^2}$$
    
2. **Square the derivative:** Treat $y^2$ as $A$ and $\frac{1}{4y^2}$ as $B$. Note that $2AB = 2(y^2)(\frac{1}{4y^2}) = \frac{1}{2}$.
    
    $$\left(\frac{dx}{dy}\right)^2 = y^4 - \frac{1}{2} + \frac{1}{16y^4}$$
    
3. **Add 1 (The Sign Flip):**
    
    $$1 + \left(\frac{dx}{dy}\right)^2 = 1 + y^4 - \frac{1}{2} + \frac{1}{16y^4} = y^4 + \frac{1}{2} + \frac{1}{16y^4}$$
    
4. **Collapse back into a perfect square:**
    
    $$y^4 + \frac{1}{2} + \frac{1}{16y^4} = \left(y^2 + \frac{1}{4y^2}\right)^2$$
    
5. **Set up and solve the integral:** The square root and square cancel perfectly.
    
    $$L = \int_{1}^{2} \left(y^2 + \frac{1}{4}y^{-2}\right) \, dy = \left[ \frac{y^3}{3} - \frac{1}{4y} \right]_{1}^{2}$$
    
    $$L = \left(\frac{8}{3} - \frac{1}{8}\right) - \left(\frac{1}{3} - \frac{1}{4}\right) = \frac{61}{24} - \frac{2}{24} = \frac{59}{24}$$
    

### Sample Problem 2: Denominator Cancellation

**Problem:** Find the area of the surface generated by revolving the semicircle $y = \sqrt{4-x^2}$ over the interval $x \in [-1, 1]$ about the $x$-axis.

**Step-by-Step Solution:**

1. **Find the derivative:** $\frac{dy}{dx} = \frac{-x}{\sqrt{4-x^2}}$
    
2. **Square it and add 1:**
    
    $$1 + \left(\frac{dy}{dx}\right)^2 = 1 + \frac{x^2}{4-x^2}$$
    
3. **Find a common denominator:**
    
    $$\frac{4-x^2}{4-x^2} + \frac{x^2}{4-x^2} = \frac{4}{4-x^2}$$
    
4. **Apply the square root:** $\sqrt{\frac{4}{4-x^2}} = \frac{2}{\sqrt{4-x^2}}$
    
5. **Set up the surface area integral:** Substitute into the $x$-axis revolution formula:
    
    $$S = \int_{-1}^{1} 2\pi \left(\sqrt{4-x^2}\right) \left(\frac{2}{\sqrt{4-x^2}}\right) \, dx$$
    
    The radical terms completely cancel out:
    
    $$S = \int_{-1}^{1} 4\pi \, dx = \left[ 4\pi x \right]_{-1}^{1} = 4\pi(1 - (-1)) = 8\pi$$
    

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Manufacturing & CNC Toolpaths (Parabolic Component)]]
[[Manufacturing & CNC Toolpaths (Parabolic Component) Solution]]


### Engineering Problem 2: [[Thermal Engineering (Cooling Tower Shell)]]
[[Thermal Engineering (Cooling Tower Shell) Solution]]

#### Worked Example
Express the arc length of the curve defined in terms of $x$ over the indicated interval in terms of a definite integral.
**Do not compute the integrals for this problem!**

(a) $y = x^3 + 1$; $x \in [1, 2]$

(b) $y = e^x + e^{-x}$; $x \in [0, 1]$

##### Solution
###### **The Arc Length Formula**

For a smooth curve defined by $y = f(x)$ over an interval $[a, b]$, the arc length $L$ is expressed by the definite integral:

$$L = \int_{a}^{b} \sqrt{1 + \left(\frac{dy}{dx}\right)^2} \, dx$$

###### **Part (a)**

**Curve:** $y = x^3 + 1$ over the interval $x \in [1, 2]$

- **Step 1: Find the derivative $\frac{dy}{dx}$**

$$\frac{dy}{dx} = \frac{d}{dx}(x^3 + 1) = 3x^2$$

- **Step 2: Square the derivative**

$$\left(\frac{dy}{dx}\right)^2 = (3x^2)^2 = 9x^4$$

- **Step 3: Set up the definite integral**

Substitute the squared derivative and the interval limits ($a = 1$ and $b = 2$) into the arc length formula:

$$L = \int_{1}^{2} \sqrt{1 + 9x^4} \, dx$$


###### **Part (b)**

**Curve:** $y = e^x + e^{-x}$ over the interval $x \in [0, 1]$

- **Step 1: Find the derivative $\frac{dy}{dx}$**

$$\frac{dy}{dx} = \frac{d}{dx}(e^x + e^{-x}) = e^x - e^{-x}$$

- **Step 2: Square the derivative**

$$\left(\frac{dy}{dx}\right)^2 = (e^x - e^{-x})^2$$

Expanding this expression yields:

$$(e^x)^2 - 2(e^x)(e^{-x}) + (e^{-x})^2 = e^{2x} - 2 + e^{-2x}$$

- **Step 3: Simplify the term inside the square root ($1 + \left(\frac{dy}{dx}\right)^2$)**

$$1 + (e^{2x} - 2 + e^{-2x}) = e^{2x} - 1 + e^{-2x}$$

- **Step 4: Set up the definite integral**

Substitute the terms and the interval limits ($a = 0$ and $b = 1$) into the formula:

$$L = \int_{0}^{1} \sqrt{1 + (e^x - e^{-x})^2} \, dx$$

_Or in its expanded form:_

$$L = \int_{0}^{1} \sqrt{e^{2x} - 1 + e^{-2x}} \, dx$$
#### Active Practice Problem
Use integration to find the arc length of the curve defined in terms of $x$ over the indicated interval:

(a) $y = 3x + 1$; $x \in [1, 2]$

(b) $y = \frac{1}{2}(e^x + e^{-x})$; $x \in [0, 1]$

##### Workspace

##### Solution
We will use the standard arc length formula:

$$L = \int_{a}^{b} \sqrt{1 + \left(\frac{dy}{dx}\right)^2} \, dx$$

###### **Part (a)**

**Curve:** $y = 3x + 1$ over the interval $x \in [1, 2]$

- **Step 1: Find the derivative $\frac{dy}{dx}$**

$$\frac{dy}{dx} = \frac{d}{dx}(3x + 1) = 3$$

- **Step 2: Square the derivative and add 1**

$$\left(\frac{dy}{dx}\right)^2 = 3^2 = 9$$

$$1 + \left(\frac{dy}{dx}\right)^2 = 1 + 9 = 10$$

- **Step 3: Evaluate the integral**

Substitute these values into the arc length formula:

$$L = \int_{1}^{2} \sqrt{10} \, dx$$

Since $\sqrt{10}$ is a constant, we can pull it out of the integral:

$$L = \sqrt{10} \int_{1}^{2} 1 \, dx = \sqrt{10} \Big[ x \Big]_{1}^{2}$$

$$L = \sqrt{10} (2 - 1) = \sqrt{10}$$


**Answer (a):** The arc length is **$\sqrt{10}$** (approx. **3.16**).

_Fun Fact:_ Since $y = 3x + 1$ is a straight line, you could also verify this using the standard geometric distance formula between the endpoints $(1, 4)$ and $(2, 7)$, which gives $\sqrt{(2-1)^2 + (7-4)^2} = \sqrt{1 + 9} = \sqrt{10}$.

###### **Part (b)**

**Curve:** $y = \frac{1}{2}(e^x + e^{-x})$ over the interval $x \in [0, 1]$

- **Step 1: Find the derivative $\frac{dy}{dx}$**

$$\frac{dy}{dx} = \frac{1}{2}(e^x - e^{-x})$$

- **Step 2: Square the derivative**

$$\left(\frac{dy}{dx}\right)^2 = \left[\frac{1}{2}(e^x - e^{-x})\right]^2 = \frac{1}{4}(e^{2x} - 2 + e^{-2x})$$

- **Step 3: Simplify the term inside the square root ($1 + \left(\frac{dy}{dx}\right)^2$)**

$$1 + \frac{1}{4}(e^{2x} - 2 + e^{-2x}) = \frac{4}{4} + \frac{e^{2x} - 2 + e^{-2x}}{4}$$

$$= \frac{e^{2x} + 2 + e^{-2x}}{4}$$

Notice that the numerator perfectly factors back into a perfect square:

$$\frac{(e^x + e^{-x})^2}{4} = \left[\frac{1}{2}(e^x + e^{-x})\right]^2$$

- **Step 4: Evaluate the integral**

Now take the square root of that perfect square inside the integral:

$$L = \int_{0}^{1} \sqrt{\left[\frac{1}{2}(e^x + e^{-x})\right]^2} \, dx$$

$$L = \int_{0}^{1} \frac{1}{2}(e^x + e^{-x}) \, dx$$

Integrate term-by-term:

$$L = \frac{1}{2} \Big[ e^x - e^{-x} \Big]_{0}^{1}$$

Plug in the upper limit ($x = 1$) and lower limit ($x = 0$):

$$L = \frac{1}{2} \left[ (e^1 - e^{-1}) - (e^0 - e^0) \right]$$

$$L = \frac{1}{2}(e - e^{-1}) - 0 = \frac{e - e^{-1}}{2}$$


**Answer (b):** The arc length is **$\frac{e - e^{-1}}{2}$** (or written using hyperbolic functions as **$\sinh(1)$**, which is approx. **1.18**).

### Regroup 1
- Review common misconceptions and clarify key notations.

### Skill Block 2
The primary objective of Skill 1 is translating a physical path or geometric curve into a properly structured definite integral template. Before evaluating any integral, you must establish its mathematical framework by checking continuity, finding derivatives, and identifying the correct geometric boundaries.

## Topic Notes: The Anatomy of a Setup

To build an arc length or surface area integral, you must correctly combine differential calculus with specific geometric constraints.

### 1. Form Recognizing: Choosing Your Template

Depending on what the problem asks you to measure, you will select one of two core integration frameworks:

- **Arc Length Framework:** Measures the physical distance along a smooth curve. The formal definition states that if the first derivative $f'(x)$ is continuous over an interval $[a, b]$, the exact length is given by:
    
    $$L = \int_{a}^{b} \sqrt{1 + (f'(x))^2} \, dx$$
    
- **Surface Area Framework (Revolution about the $x$-axis):** Measures the outer surface area of a 3D solid swept out by a curve. The theorem requires a continuous first derivative over the interval $[a, b]$ to yield the surface area:
    
    $$\text{Area} = \int_{a}^{b} 2\pi f(x) \sqrt{1 + (f'(x))^2} \, dx$$
    

### 2. Differential Calculus: The Differential Element ($ds$)

Both equations rely on the "slanted" differential arc length element, $ds = \sqrt{1 + (f'(x))^2} \, dx$. This means your setup will always live or die by your ability to calculate $f'(x)$ accurately and square it without making algebraic errors.

## Standard Sample Problems

### Sample Problem 1: Arc Length Setup & Basic Integration

**Problem:** Find the arc length of the curve $y = \frac{2}{3}(x-1)^{3/2}$ over the interval $x \in [1, 4]$.

**Step-by-Step Solution:**

1. **Find the derivative:** Use the power rule combined with the chain rule.
    
    $$\frac{dy}{dx} = \frac{2}{3} \cdot \frac{3}{2}(x-1)^{1/2} \cdot 1 = \sqrt{x-1}$$
    
2. **Square the derivative:**
    
    $$\left(\frac{dy}{dx}\right)^2 = (\sqrt{x-1})^2 = x - 1$$
    
3. **Add 1 inside the radical:**
    
    $$1 + \left(\frac{dy}{dx}\right)^2 = 1 + (x - 1) = x$$
    
4. **Set up and solve the integral:** Substitute this into the arc length template:
    
    $$L = \int_{1}^{4} \sqrt{x} \, dx$$
    
    Using the basic power rule for integration:
    
    $$L = \left[ \frac{2}{3}x^{3/2} \right]_{1}^{4} = \frac{2}{3}(4^{3/2} - 1^{3/2}) = \frac{2}{3}(8 - 1) = \frac{14}{3}$$
    

### Sample Problem 2: Surface Area Setup & Linear $u$-Substitution

**Problem:** Find the area of the surface generated by revolving the curve $y = \sqrt{x}$ over the interval $x \in [1, 4]$ about the $x$-axis.

**Step-by-Step Solution:**

1. **Find the derivative:**
    
    $$\frac{dy}{dx} = \frac{1}{2\sqrt{x}}$$
    
2. **Square the derivative and add 1:**
    
    $$\left(\frac{dy}{dx}\right)^2 = \frac{1}{4x} \implies 1 + \left(\frac{dy}{dx}\right)^2 = \frac{4x+1}{4x}$$
    
3. **Isolate the radical element:**
    
    $$\sqrt{1 + \left(\frac{dy}{dx}\right)^2} = \sqrt{\frac{4x+1}{4x}} = \frac{\sqrt{4x+1}}{2\sqrt{x}}$$
    
4. **Assemble the surface area integral:**
    
    $$S = \int_{1}^{4} 2\pi (\sqrt{x}) \left( \frac{\sqrt{4x+1}}{2\sqrt{x}} \right) \, dx$$
    
    Simplifying algebraically by canceling out the $\sqrt{x}$ and the 2:
    
    $$S = \pi \int_{1}^{4} \sqrt{4x+1} \, dx$$
    
5. **Solve using $u$-substitution:** Let $u = 4x+1$, so $du = 4 \, dx \implies dx = \frac{du}{4}$.
    
    - Shift the limits: When $x=1$, $u=5$. When $x=4$, $u=17$.
        
        $$S = \frac{\pi}{4} \int_{5}^{17} u^{1/2} \, du = \frac{\pi}{4} \left[ \frac{2}{3}u^{3/2} \right]_{5}^{17} = \frac{\pi}{6}(17\sqrt{17} - 5\sqrt{5})$$
        

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Civil Engineering (Power Line Sag)]]
[[Civil Engineering (Power Line Sag) Solution]]

### Engineering Problem 2: [[Aerospace Engineering (Rocket Nose Cone Coating)]]
[[Aerospace Engineering (Rocket Nose Cone Coating) Solution]]

#### Worked Example
Use integration to find the arc length of the curve defined in terms of $y$ over the indicated interval:

(a) $x = 2y - 1$; $y \in [-1, 1]$

(b) $x = \frac{y^3}{3} + \frac{1}{4y}$; $y \in [1, 2]$

##### Solution
###### **The Arc Length Formula (with respect to $y$)**

When a smooth curve is defined by $x = g(y)$ over an interval $y \in [c, d]$, the formula for its arc length $L$ flips the variables but keeps the same structure:

$$L = \int_{c}^{d} \sqrt{1 + \left(\frac{dx}{dy}\right)^2} \, dy$$

###### **Part (a)**

**Curve:** $x = 2y - 1$ over the interval $y \in [-1, 1]$

- **Step 1: Find the derivative $\frac{dx}{dy}$**

$$\frac{dx}{dy} = \frac{d}{dy}(2y - 1) = 2$$

- **Step 2: Square the derivative and add 1**

$$\left(\frac{dx}{dy}\right)^2 = 2^2 = 4$$

$$1 + \left(\frac{dx}{dy}\right)^2 = 1 + 4 = 5$$

- **Step 3: Evaluate the integral**

Substitute into the formula with boundaries from $-1$ to $1$:

$$L = \int_{-1}^{1} \sqrt{5} \, dy$$

Since $\sqrt{5}$ is a constant, integrate it directly:

$$L = \sqrt{5} \Big[ y \Big]_{-1}^{1}$$

$$L = \sqrt{5} \left(1 - (-1)\right) = 2\sqrt{5}$$


**Answer (a):** The arc length is **$2\sqrt{5}$** (approx. **4.47**).

###### **Part (b)**

**Curve:** $x = \frac{y^3}{3} + \frac{1}{4y}$ over the interval $y \in [1, 2]$

- **Step 1: Rewrite the equation and find the derivative $\frac{dx}{dy}$**

To make taking the derivative easier, write it with exponents:

$$x = \frac{1}{3}y^3 + \frac{1}{4}y^{-1}$$

$$\frac{dx}{dy} = \frac{1}{3}(3y^2) + \frac{1}{4}(-1y^{-2}) = y^2 - \frac{1}{4y^2}$$

- **Step 2: Square the derivative**

$$\left(\frac{dx}{dy}\right)^2 = \left(y^2 - \frac{1}{4y^2}\right)^2$$

Expand it using the perfect square identity $(a - b)^2 = a^2 - 2ab + b^2$:

$$\left(\frac{dx}{dy}\right)^2 = y^4 - 2(y^2)\left(\frac{1}{4y^2}\right) + \frac{1}{16y^4} = y^4 - \frac{1}{2} + \frac{1}{16y^4}$$

- **Step 3: Simplify inside the square root ($1 + \left(\frac{dx}{dy}\right)^2$)**

Add 1 to your expanded derivative:

$$1 + \left(y^4 - \frac{1}{2} + \frac{1}{16y^4}\right) = y^4 + \frac{1}{2} + \frac{1}{16y^4}$$

**The Algebraic Trick:** Notice that changing the middle term from $-\frac{1}{2}$ to $+\frac{1}{2}$ turns the expression back into a perfect square, just with a plus sign!

$$y^4 + \frac{1}{2} + \frac{1}{16y^4} = \left(y^2 + \frac{1}{4y^2}\right)^2$$

- **Step 4: Evaluate the integral**

Now cancel the square root with the perfect square:

$$L = \int_{1}^{2} \sqrt{\left(y^2 + \frac{1}{4y^2}\right)^2} \, dy$$

$$L = \int_{1}^{2} \left(y^2 + \frac{1}{4}y^{-2}\right) \, dy$$

Integrate term-by-term:

$$L = \Big[ \frac{y^3}{3} - \frac{1}{4y} \Big]_{1}^{2}$$

Plug in the upper limit ($y = 2$):

$$\left(\frac{2^3}{3} - \frac{1}{4(2)}\right) = \frac{8}{3} - \frac{1}{8} = \frac{64 - 3}{24} = \frac{61}{24}$$

Plug in the lower limit ($y = 1$):

$$\left(\frac{1^3}{3} - \frac{1}{4(1)}\right) = \frac{1}{3} - \frac{1}{4} = \frac{4 - 3}{12} = \frac{1}{12} = \frac{2}{24}$$

Subtract the lower limit from the upper limit:

$$L = \frac{61}{24} - \frac{2}{24} = \frac{59}{24}$$


**Answer (b):** The arc length is **$\frac{59}{24}$** (approx. **2.46**).
#### Active Practice Problem
Find a curve defined over the interval $[1, 2]$ whose length is given by the following integral:

$$\int_{1}^{2} \sqrt{1 + \frac{1}{x^2}} \, dx$$

Can you find other curves defined over this interval with the same length?

##### Workspace

##### Solution
###### **Step 1: Compare to the Arc Length Formula**

The standard formula for arc length over an interval $[a, b]$ is:

$$L = \int_{a}^{b} \sqrt{1 + \left(\frac{dy}{dx}\right)^2} \, dx$$

The integral provided in the problem is:

$$\int_{1}^{2} \sqrt{1 + \frac{1}{x^2}} \, dx$$

By comparing the two, we can identify the matching parts:

- The interval is $x \in [1, 2]$.

- The squared derivative satisfies:

$$\left(\frac{dy}{dx}\right)^2 = \frac{1}{x^2}$$


###### **Step 2: Solve for the Derivative ($\frac{dy}{dx}$)**

Taking the square root of both sides gives two possible cases for the derivative:

$$\frac{dy}{dx} = \frac{1}{x} \quad \text{or} \quad \frac{dy}{dx} = -\frac{1}{x}$$

###### **Step 3: Integrate to Find the Curve ($y$)**

- **Case 1: Positive slope**

$$y = \int \frac{1}{x} \, dx = \ln(x) + C$$

_(We can drop the absolute value bars because the interval $[1, 2]$ contains only positive numbers)._

- **Case 2: Negative slope**

$$y = \int -\frac{1}{x} \, dx = -\ln(x) + C$$


If we set the integration constant to $C = 0$ for simplicity, a primary curve that satisfies this integral is:

$$y = \ln(x)$$

###### **Answering the Second Question:**

_"Can you find other curves defined over this interval with the same length?"_

**Yes, you can find infinitely many curves** with the exact same length over $[1, 2]$. They fall into two categories:

1. **Vertical Shifts:** The constant $C$ disappears during differentiation. Therefore, adding any constant to the function shifts the graph vertically without changing its shape or length.

- _Examples:_ $y = \ln(x) + 5$, $y = \ln(x) - 12$, or $y = \ln(x) + \pi$.

2. **Reflections:** The curve $y = -\ln(x) + C$ is a reflection across the $x$-axis (combined with a vertical shift). Flipping a curve upside down preserves its geometry and total arc length.

- _Examples:_ $y = -\ln(x)$, $y = -\ln(x) + 2$.

### Regroup 2
- Reflect on the physical modeling applications and mathematical setups.

### Skill Block 3
Once an arc length or surface area problem is safely set up and algebraically simplified, the final step is calculating its exact numerical value. Skill 3 focuses on the execution phase of calculus: executing the integration process, managing boundary shifts, and evaluating variables accurately to arrive at a real-world physical metric.

## Topic Notes: The Two Core Finisher Strategies

As the number of sub-intervals approaches infinity, the geometric Riemann sums convert into a definite calculus integral. To evaluate this final integral, engineers rely on two key foundational tools:

### 1. The Fundamental Theorem of Calculus & Boundary Management

The final step of any definite integral requires evaluating the anti-derivative at its upper limit ($b$) and subtracting its value at the lower limit ($a$):

$$\int_{a}^{b} f(x) \, dx = F(b) - F(a)$$

When computing these values, any arithmetic error will break the entire problem. Proper boundary management means keeping tracking constants pulled completely _outside_ the evaluation bracket until the very last step.

### 2. Integration by $u$-Substitution (Change of Variables)

Because the differential arc length element introduces a radical, many integrals will contain an inner function nested inside a square root. To solve these, you must change variables using $u$-substitution:

- Define $u$ as the entire expression inside the radical.
    
- Compute the differential $du$ to replace your remaining $dx$ or $dy$ terms.
    
- **Critical Step:** Directly convert your boundaries from $x$-limits into $u$-limits. Shifting the boundaries directly prevents you from having to "back-substitute" at the end, eliminating a massive source of algebraic mistakes.
    

## Standard Sample Problems

### Sample Problem 1: Basic Evaluation via Power Rule & Pure Algebra

**Problem:** Find the arc length of the curve $y = \frac{1}{3}(x^2+2)^{3/2}$ over the interval $x \in [0, 1]$.

**Step-by-Step Solution:**

1. **Find and square the derivative:**
    
    $$\frac{dy}{dx} = \frac{1}{3} \cdot \frac{3}{2}(x^2+2)^{1/2} \cdot (2x) = x\sqrt{x^2+2}$$
    
    $$\left(\frac{dy}{dx}\right)^2 = x^2(x^2+2) = x^4 + 2x^2$$
    
2. **Simplify the radical component algebraically:**
    
    $$1 + \left(\frac{dy}{dx}\right)^2 = x^4 + 2x^2 + 1 = (x^2+1)^2$$
    
    $$\sqrt{(x^2+1)^2} = x^2 + 1$$
    
3. **Evaluate the integral using the power rule:**
    
    $$L = \int_{0}^{1} (x^2 + 1) \, dx = \left[ \frac{x^3}{3} + x \right]_{0}^{1}$$
    
4. **Apply boundaries:**
    
    $$L = \left(\frac{1^3}{3} + 1\right) - \left(\frac{0^3}{3} + 0\right) = \frac{1}{3} + 1 = \frac{4}{3}$$
    

### Sample Problem 2: Surface Area with $u$-Substitution & Limit Shifting

**Problem:** Find the surface area generated by revolving the curve $y = 2\sqrt{x}$ over the interval $x \in [0, 3]$ about the $x$-axis.

**Step-by-Step Solution:**

1. **Find and square the derivative:**
    
    $$\frac{dy}{dx} = \frac{1}{\sqrt{x}} \implies \left(\frac{dy}{dx}\right)^2 = \frac{1}{x}$$
    
2. **Set up the surface area equation:**
    
    $$S = \int_{0}^{3} 2\pi (2\sqrt{x}) \sqrt{1 + \frac{1}{x}} \, dx$$
    
    Combine terms under the common denominator inside the root: $\sqrt{1+\frac{1}{x}} = \sqrt{\frac{x+1}{x}} = \frac{\sqrt{x+1}}{\sqrt{x}}$.
    
    $$S = \int_{0}^{3} 4\pi \sqrt{x} \left( \frac{\sqrt{x+1}}{\sqrt{x}} \right) \, dx = 4\pi \int_{0}^{3} \sqrt{x+1} \, dx$$
    
3. **Execute $u$-substitution and shift boundaries:** Let $u = x+1$, so $du = dx$.
    
    - Lower limit: When $x=0$, $u = 0+1 = 1$.
        
    - Upper limit: When $x=3$, $u = 3+1 = 4$.
        
        $$S = 4\pi \int_{1}^{4} u^{1/2} \, du = 4\pi \left[ \frac{2}{3}u^{3/2} \right]_{1}^{4}$$
        
4. **Final evaluation:** Pull the constants out: $\frac{8\pi}{3} [u^{3/2}]_{1}^{4} = \frac{8\pi}{3}(4^{3/2} - 1^{3/2}) = \frac{8\pi}{3}(8 - 1) = \frac{56\pi}{3}$.
    

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Aerospace & Autonomous Flight Path Tracking]]
[[Aerospace & Autonomous Flight Path Tracking Solution]]


### Engineering Problem 2: [[Chemical & Thermal Engineering (Reactor Mixing Blade)]]
[[Chemical & Thermal Engineering (Reactor Mixing Blade) Solution]]

#### Worked Example
Use integration to find the area of the surface generated by revolving the indicated curve over the $x$-axis:

(a) $y = 2x + 3$; $x \in [0, 2]$

(b) $y = \sqrt{4 - x^2}$; $x \in [-1, 1]$

##### Solution
###### **The Surface Area of Revolution Formula (Around the $x$-axis)**

When a smooth curve $y = f(x)$ is rotated around the $x$-axis over an interval $x \in [a, b]$, the surface area $S$ of the resulting solid is given by:

$$S = \int_{a}^{b} 2\pi y \sqrt{1 + \left(\frac{dy}{dx}\right)^2} \, dx$$

Think of this as summing up the circumferences of infinitely thin cylindrical bands ($2\pi y$) multiplied by their slanted width ($ds = \sqrt{1 + (y')^2} \, dx$).

###### **Part (a)**

**Curve:** $y = 2x + 3$ over the interval $x \in [0, 2]$

- **Step 1: Find the derivative $\frac{dy}{dx}$**

$$\frac{dy}{dx} = \frac{d}{dx}(2x + 3) = 2$$

- **Step 2: Simplify the square root part ($\sqrt{1 + (y')^2}$)**

$$\sqrt{1 + (2)^2} = \sqrt{1 + 4} = \sqrt{5}$$

- **Step 3: Set up and evaluate the integral**

Substitute $y = 2x + 3$, the square root value, and the limits ($0$ to $2$) into the formula:

$$S = \int_{0}^{2} 2\pi (2x + 3) \sqrt{5} \, dx$$

Pull the constants ($2\pi\sqrt{5}$) out front:

$$S = 2\pi\sqrt{5} \int_{0}^{2} (2x + 3) \, dx$$

Integrate the polynomial inside:

$$S = 2\pi\sqrt{5} \Big[ x^2 + 3x \Big]_{0}^{2}$$

Evaluate at the boundaries:

- Upper limit ($x = 2$): $(2)^2 + 3(2) = 4 + 6 = 10$

- Lower limit ($x = 0$): $(0)^2 + 3(0) = 0$


$$S = 2\pi\sqrt{5} (10 - 0) = 20\pi\sqrt{5}$$


**Answer (a):** The area of the surface is **$20\pi\sqrt{5}$** (approx. **140.50** square units).

###### **Part (b)**

**Curve:** $y = \sqrt{4 - x^2}$ over the interval $x \in [-1, 1]$

- **Step 1: Find the derivative $\frac{dy}{dx}$**

Using the chain rule:

$$\frac{dy}{dx} = \frac{1}{2\sqrt{4 - x^2}} \cdot (-2x) = \frac{-x}{\sqrt{4 - x^2}}$$

- **Step 2: Simplify inside the square root ($1 + (y')^2$)**

First, square the derivative:

$$\left(\frac{dy}{dx}\right)^2 = \frac{x^2}{4 - x^2}$$

Next, add 1 and find a common denominator:

$$1 + \frac{x^2}{4 - x^2} = \frac{4 - x^2}{4 - x^2} + \frac{x^2}{4 - x^2} = \frac{4}{4 - x^2}$$

Now take the square root of this expression:

$$\sqrt{\frac{4}{4 - x^2}} = \frac{2}{\sqrt{4 - x^2}}$$

- **Step 3: Set up and evaluate the integral**

Substitute $y = \sqrt{4 - x^2}$ and our simplified radical expression into the formula:

$$S = \int_{-1}^{1} 2\pi \left(\sqrt{4 - x^2}\right) \left(\frac{2}{\sqrt{4 - x^2}}\right) \, dx$$

Notice how beautifully the $\sqrt{4 - x^2}$ terms cancel out completely!

$$S = \int_{-1}^{1} 2\pi \cdot 2 \, dx = \int_{-1}^{1} 4\pi \, dx$$

Integrate the constant:

$$S = 4\pi \Big[ x \Big]_{-1}^{1}$$

$$S = 4\pi (1 - (-1)) = 4\pi (2) = 8\pi$$


**Answer (b):** The area of the surface is **$8\pi$** (approx. **25.13** square units).

_Geometric Insight:_ The equation $y = \sqrt{4-x^2}$ represents the top half of a circle with a radius of $R = 2$. Revolving this section creates a central zone of a sphere. A neat classical geometry rule (Archimedes' Hat-Box Theorem) states that the surface area of a spherical zone depends only on the radius of the sphere and the height of the zone: $S = 2\pi R h$. Here, radius $R = 2$ and height $h = 1 - (-1) = 2$. Multiplying them out gives $2\pi(2)(2) = 8\pi$, confirming our calculus answer perfectly!
#### Active Practice Problem
Use integration to find the area of the surface generated by revolving the indicated curve over the $y$-axis:

(a) $x = y + 3$; $y \in [0, 1]$

(b) $x = \sqrt{y}$; $y \in [1, 2]$

##### Workspace

##### Solution
###### **The Surface Area of Revolution Formula (Around the $y$-axis)**

When a smooth curve $x = g(y)$ is rotated around the $y$-axis over an interval $y \in [c, d]$, the surface area $S$ of the resulting solid is given by:

$$S = \int_{c}^{d} 2\pi x \sqrt{1 + \left(\frac{dx}{dy}\right)^2} \, dy$$

Since the curve is explicitly defined in terms of $y$, we substitute $g(y)$ directly in place of $x$:

$$S = \int_{c}^{d} 2\pi g(y) \sqrt{1 + \left(\frac{dx}{dy}\right)^2} \, dy$$

###### **Part (a)**

**Curve:** $x = y + 3$ over the interval $y \in [0, 1]$

- **Step 1: Find the derivative $\frac{dx}{dy}$**

$$\frac{dx}{dy} = \frac{d}{dy}(y + 3) = 1$$

- **Step 2: Simplify the square root part ($\sqrt{1 + (x')^2}$)**

$$\sqrt{1 + (1)^2} = \sqrt{1 + 1} = \sqrt{2}$$

- **Step 3: Set up and evaluate the integral**

Substitute $x = y + 3$, the square root value, and the limits ($0$ to $1$) into the formula:

$$S = \int_{0}^{1} 2\pi (y + 3) \sqrt{2} \, dy$$

Pull the constants ($2\pi\sqrt{2}$) out of the integral:

$$S = 2\pi\sqrt{2} \int_{0}^{1} (y + 3) \, dy$$

Integrate the linear polynomial expression:

$$S = 2\pi\sqrt{2} \left[ \frac{y^2}{2} + 3y \right]_{0}^{1}$$

Evaluate at the boundaries:

- Upper limit ($y = 1$): $\frac{1^2}{2} + 3(1) = \frac{1}{2} + 3 = \frac{7}{2}$

- Lower limit ($y = 0$): $\frac{0^2}{2} + 3(0) = 0$


Multiply the integrated result by the front constants:

$$S = 2\pi\sqrt{2} \left(\frac{7}{2}\right) = 7\pi\sqrt{2}$$


**Answer (a):** The area of the surface is **$7\pi\sqrt{2}$** (approx. **31.10** square units).

###### **Part (b)**

**Curve:** $x = \sqrt{y}$ over the interval $y \in [1, 2]$

- **Step 1: Find the derivative $\frac{dx}{dy}$**

$$\frac{dx}{dy} = \frac{d}{dy}(y^{1/2}) = \frac{1}{2\sqrt{y}}$$

- **Step 2: Simplify inside the square root ($1 + (x')^2$)**

First, square the derivative:

$$\left(\frac{dx}{dy}\right)^2 = \left(\frac{1}{2\sqrt{y}}\right)^2 = \frac{1}{4y}$$

Next, add 1 and find a common denominator:

$$1 + \frac{1}{4y} = \frac{4y + 1}{4y}$$

Now take the square root of the entire expression:

$$\sqrt{\frac{4y + 1}{4y}} = \frac{\sqrt{4y + 1}}{2\sqrt{y}}$$

- **Step 3: Set up the integral**

Substitute $x = \sqrt{y}$ and our simplified radical expression into the formula:

$$S = \int_{1}^{2} 2\pi (\sqrt{y}) \left(\frac{\sqrt{4y + 1}}{2\sqrt{y}}\right) \, dy$$

Notice that the $\sqrt{y}$ in the numerator and denominator cancel out completely, and the $2$ values cancel out as well:

$$S = \pi \int_{1}^{2} \sqrt{4y + 1} \, dy$$

- **Step 4: Evaluate using $u$-substitution**

Let $u = 4y + 1$, which means $du = 4 \, dy$, or $dy = \frac{du}{4}$.

Next, convert the integration limits to match our new variable $u$:

- Upper limit ($y = 2$): $u = 4(2) + 1 = 9$

- Lower limit ($y = 1$): $u = 4(1) + 1 = 5$


Substitute these components back into the integral:

$$S = \pi \int_{5}^{9} \sqrt{u} \cdot \frac{du}{4} = \frac{\pi}{4} \int_{5}^{9} u^{1/2} \, du$$

Integrate using the power rule:

$$S = \frac{\pi}{4} \left[ \frac{2}{3}u^{3/2} \right]_{5}^{9} = \frac{\pi}{6} \left[ u^{3/2} \right]_{5}^{9}$$

Evaluate at the boundaries:

$$S = \frac{\pi}{6} \left( 9^{3/2} - 5^{3/2} \right)$$

Since $9^{3/2} = (\sqrt{9})^3 = 27$ and $5^{3/2} = 5\sqrt{5}$:

$$S = \frac{\pi}{6} (27 - 5\sqrt{5})$$


**Answer (b):** The area of the surface is **$\frac{\pi}{6}(27 - 5\sqrt{5})$** (approx. **8.28** square units).

### Regroup 3
- Verify calculations and mathematical reasoning.

### Synthesis Wrap-up
- Core takeaways from Session 08 and overview of homework homework assignment.
