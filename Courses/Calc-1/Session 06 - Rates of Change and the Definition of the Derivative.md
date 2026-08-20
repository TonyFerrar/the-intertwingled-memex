---
title: "Session 06 - Rates of Change and the Definition of the Derivative"
type: course-session
course: MATH-181
semester: Fall 2026
publish: true
cssclasses: []
updated: 2026-08-18
---

# Session 06 - Rates of Change and the Definition of the Derivative

## Session Objectives
By the end of this session, you will be able to:
- Conceptual & Graphical Interpretation
- Algebraic Manipulation & Fluency
- Functional Application & Synthesis

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
#### Engineering Context: Measuring How Systems Respond
In an engineering context, the core skills covered in these notes—specifically managing instantaneous rates of change, calculating tangent line equations, and evaluating structural differentiability—serve as the mathematical architecture for designing, analyzing, and optimizing complex real-world physical systems. The conceptual transition from an average rate of change to an instantaneous rate of change via a limit quotient ($\lim_{h \to 0}$) forms the absolute foundation of kinematics in aerospace and automotive engineering for tracking real-time vehicle velocity and acceleration, as well as in electrical engineering to analyze dynamic, time-varying current and voltage differentials across capacitors and inductors. Furthermore, the specific workflow of using a derivative to construct a tangent line equation, known in industry as linearization, allows robotics and control systems engineers to simplify highly complex, non-linear physical feedback loops into high-speed linear approximations that an onboard flight controller can process millisecond by millisecond. Finally, mastering the rules of differentiability and its visual breakdowns—such as understanding that a function is non-differentiable at sharp corners, cusps, or vertical tangents—is a safety-critical necessity for mechanical, structural, and civil engineers; it dictates why physical parts cannot have sharp geometric corners due to catastrophic stress concentrations, and demands that highway exit ramps and high-speed railway tracks be mathematically smooth and perfectly differentiable (using transition spirals) to prevent vehicles from experiencing lethal, instantaneous shifts in centrifugal forces.

### Skill Block 1
## 1. The Core Concept: From Secant to Tangent Line
To understand the derivative, we must look at how we measure change on a curve. 

* **Average Rate of Change (ARoC):** If we pick two distinct points on a curve, $(a, f(a))$ and $(a+h, f(a+h))$, the straight line connecting them is called a **secant line**. The slope of this line represents the average rate of change over that interval:
  $$\text{Slope}_{\text{secant}} = \frac{f(a+h) - f(a)}{h}$$
* **Instantaneous Rate of Change (IRoC):** If we want to find the rate of change at the exact moment $x = a$, we look at what happens as the second point moves closer and closer to the first point. As the distance between them shrinks to zero ($h \to 0$), the secant line rotates and collapses into a single line that just brushes the curve at that one point. This line is the **tangent line**, and its slope is the derivative, $f'(a)$.



---

## 2. Understanding Differentiability vs. Continuity
A major foundational rule in calculus states: **If a function is differentiable at a point, it must be continuous at that point.** However, the reverse is not true. A function can be completely continuous (no breaks, holes, or lifting of the pen) but still fail to have a derivative. 

Visually, a derivative fails to exist anywhere the graph does not have a single, clearly defined, non-vertical tangent slope. There are four classic visual indicators where a function exhibits **non-differentiability**:

1. **Corner / Sharp Turn:** The graph is continuous, but it abruptly changes direction. Because the slope coming from the left side is completely different from the slope coming from the right side, a single tangent slope cannot be defined.
2. **Cusp:** An extreme sharp point where the curve turns so sharply that the slope approaches $\infty$ from one side and $-\infty$ from the other.
3. **Vertical Tangent:** The curve becomes perfectly steep for a single instant. Because a vertical line has an undefined slope ($\infty$), the derivative does not exist.
4. **Discontinuity:** If there is a hole, a jump, or a vertical asymptote, you cannot draw a tangent line at all. Non-continuity automatically means non-differentiability.



---

## 3. Custom Sample Problems & Solutions

### Problem 1: Analyzing Limits and Slopes From a Custom Graph
Consider a piecewise function $g(x)$ defined over $[-6, 8]$ with the following graphical characteristics:
* A horizontal asymptote at $y = -1$ as $x \to -\infty$.
* A vertical asymptote at $x = -2$.
* A sharp, V-shaped corner at $(1, 3)$.
* A perfectly straight line segment connecting $(2, 0)$ and $(5, 6)$.
* A jump discontinuity at $x = 5$, breaking from an open hole at $(5, 6)$ to a solid point at $(5, 2)$, then continuing smoothly.

#### (a) Evaluate the following limits and derivatives based on this behavior:
* **i. $\lim_{x\to 5} g(x)$**
* **ii. $\lim_{x\to -2^+} g(x)$**
* **iii. $g'(4)$**

**Step-by-step Solution:**
* **i.** Look at $x = 5$. Approaching from the left ($x \to 5^-$), the curve moves up the straight line segment toward a $y$-value of $6$. Approaching from the right ($x \to 5^+$), the curve leads to a different value. Because the left-hand and right-hand paths do not meet at the same height, the two-sided limit cannot exist.  
  **Answer:** $\lim_{x\to 5} g(x) = \text{Does Not Exist (DNE)}$
* **ii.** Look at the vertical asymptote at $x = -2$. Tracking the curve immediately to the right side of this boundary ($x \to -2^+$), the graph plunges downward indefinitely toward negative infinity.  
  **Answer:** $\lim_{x\to -2^+} g(x) = -\infty$
* **iii.** The expression $g'(4)$ represents the instantaneous slope of the curve at exactly $x = 4$. Because $x = 4$ falls comfortably along the straight line segment connecting $(2, 0)$ and $(5, 6)$, the derivative is simply the constant slope of that segment:
  $$\text{Slope} = \frac{y_2 - y_1}{x_2 - x_1} = \frac{6 - 0}{5 - 2} = \frac{6}{3} = 2$$
  **Answer:** $g'(4) = 2$

#### (b) Identify any points on the interval where $g(x)$ is continuous but NOT differentiable.

**Step-by-step Solution:**
* We must scan the function looking exclusively for points that are fully unbroken and connected (continuous), yet form a sharp peak or abrupt shift in direction (non-differentiable).
* At $x = -2$, the function breaks at an asymptote (not continuous).
* At $x = 5$, the function breaks at a jump (not continuous).
* At **$x = 1$**, the graph forms a sharp V-shaped transition. The line is completely connected at $(1,3)$, but the incoming slope does not match the outgoing slope. This is a classic corner.  
  **Answer:** $x = 1$

---

## 4. Real-Life Engineering Application Problems

### Application Problem 1: [[Civil Engineering (High-Speed Railway Track Alignment)]]
[[Civil Engineering (High-Speed Railway Track Alignment) Solution]]
A transit authority engineer is designing a track layout for a new high-speed train. The position profile of the track layout is modeled by a piecewise function where a straight access line transitions into a curved bypass:
$$T(x) = \begin{cases} 2x & \text{for } x \le 3 \\ x^2 - 4x + 9 & \text{for } x > 3 \end{cases}$$

1. **Graphically and analytically determine if the track layout is continuous at $x = 3$.**
2. **Determine if the track layout is differentiable at $x = 3$. Based on the concepts of differentiability, explain why this design is either safe or hazardous for a train traveling at high speeds.**

#### Step-by-step Solution:

**Step 1: Check for Continuity**
To see if the tracks physically connect without a gap, calculate the limit from both sides of $x = 3$:
* Left-hand limit: $\lim_{x \to 3^-} T(x) = 2(3) = 6$
* Right-hand limit: $\lim_{x \to 3^+} T(x) = (3)^2 - 4(3) + 9 = 9 - 12 + 9 = 6$

Because the left-hand limit equals the right-hand limit, the two tracks meet perfectly at the point $(3, 6)$. **The function is continuous.**

**Step 2: Check for Differentiability (Slope)**
To see if the transition is smooth, check the incoming and outgoing slopes (derivatives) at $x = 3$:
* Incoming slope (from the left straight track): The derivative of $2x$ is a constant **$2$**.
* Outgoing slope (moving onto the curved bypass): The derivative of $x^2 - 4x + 9$ is $2x - 4$. Evaluating this at $x = 3$ gives $2(3) - 4 = 6 - 4 =$ **$2$**.

Because the incoming slope ($2$) matches the outgoing slope ($2$), the graph does not form a sharp corner; it transitions smoothly. 

**Engineering Conclusion:**
Because the function is **differentiable at $x = 3$**, the transition contains no sharp corners. This is **safe** for a high-speed train. If the slopes had mismatched, it would create a non-differentiable corner, causing a sudden, dangerous spike in lateral centrifugal force that could derail the train.

---

### Application Problem 2: [[Mechanical Engineering (Component Failure Analysis)]]
[[Mechanical Engineering (Component Failure Analysis) Solution]]
A mechanical engineer runs a computer simulation mapping the internal stress distribution across a metal support bracket under load. The stress profile along the length of the bracket reveals a sharp $90^\circ$ internal V-notch corner at exactly $x = 5$.



1. **Identify the structural description of why this point is non-differentiable.**
2. **Explain the physical real-world consequence of this non-differentiable point on the structural integrity of the bracket.**

#### Step-by-step Solution:

**Step 1: Locate the Non-Differentiable Point**
The stress layout path meets at a sharp point at **$x = 5$**. This represents a geometric **corner**, which makes it non-differentiable because a single tangent line cannot cleanly balance on a sharp edge.

**Step 2: Real-World Physical Explanation**
In mechanical engineering, a non-differentiable geometric corner indicates a catastrophic structural vulnerability known as a **stress concentration point**. When external loads are applied to the bracket, the internal physical forces cannot distribute smoothly across a sharp point. Instead, the stress values spike exponentially at that exact sharp vertex ($x = 5$). 

**Engineering Conclusion:**
Because the profile is non-differentiable at $x = 5$, this corner acts as a structural weak point where micro-cracks will form. Under operational cyclic loading, the bracket will experience structural failure and snap at this exact coordinate. To fix this, an engineer must redesign the bracket using calculus to smooth out the corner into a differentiable curve (called a fillet), ensuring a uniform distribution of force.

#### Worked Example
Consider the graph of $f(x)$ given below:

![[06 - Rates of Change and Definition of Derivative Learning Activity Image 1.png]]

#### (a) Find the following:
* **i.** $\lim_{x\to 4} f(x)$
* **ii.** $\lim_{x\to 1^+} f(x)$
* **iii.** $\lim_{x\to 8} f(x)$
* **iv.** $\lim_{x\to 10^-} f(x)$
* **v.** $\lim_{x\to -\infty} f(x)$
* **vi.** $f'(3)$

#### (b) State any horizontal and vertical asymptotes for $f(x)$. If there are none, state that.

#### (c) Identify any points of discontinuity for $f(x)$ AND indicate the type of discontinuity for each one.

#### (d) At which points, if any, is $f(x)$ continuous but not differentiable? State the $x$-value of any such points.

---

##### Solution
###### Rates of Change as Limits: Limit Definition of Derivative

---

###### 1. Graph Analysis

###### (a) Find the following:

* **i.** $\lim_{x\rightarrow4}f(x) = \text{Does Not Exist (DNE)}$
* *Reason:* The left-hand limit is $\lim_{x\rightarrow4^-}f(x) = 2$ and the right-hand limit is $\lim_{x\rightarrow4^+}f(x) = 4$. Since the one-sided limits are not equal, the two-sided limit does not exist.
* **ii.** $\lim_{x\rightarrow1^{+}}f(x) = \infty$
* *Reason:* Following the curve immediately to the right of the vertical dashed line at $x = 1$, the function values grow without bound toward positive infinity.
* **iii.** $\lim_{x\rightarrow8}f(x) = 1$
* *Reason:* As $x$ approaches $8$ from both sides, the graph leads to the open hole located at $y = 1$, regardless of the solid point at $(8, 2)$.
* **iv.** $\lim_{x\rightarrow10^{-}}f(x) = 3$
* *Reason:* As you approach the right endpoint $x = 10$ from the left, the curve terminates at the open hole at $y = 3$.
* **v.** $\lim_{x\rightarrow-\infty}f(x) = 0$
* *Reason:* Looking to the far left of the graph, the curve approaches the horizontal axis ($y = 0$).
* **vi.** $f^{\prime}(3) = \frac{1}{2}$
* *Reason:* On the interval $[2, 4]$, the graph is a straight line segment passing through $(2, 1)$ and $(4, 2)$. The derivative at $x = 3$ is simply the constant slope of this line segment:
$$\text{Slope} = \frac{2 - 1}{4 - 2} = \frac{1}{2}$$

###### (b) State any horizontal and vertical asymptotes for $f(x)$.
* **Horizontal Asymptote:** $y = 0$ (as $x \rightarrow -\infty$)
* **Vertical Asymptote:** $x = 1$

###### (c) Identify any points of discontinuity for $f(x)$ AND indicate the type of discontinuity for each one.
* **$x = 1$:** **Infinite Discontinuity** (due to the behavior near the vertical asymptote).
* **$x = 4$:** **Jump Discontinuity** (the graph breaks and "jumps" from $y = 2$ to $y = 4$).
* **$x = 8$:** **Removable Discontinuity** (a "hole" exists at $y = 1$ with the single point displaced to $y = 2$).

###### (d) At which points, if any, is $f(x)$ continuous but not differentiable? State the $x$-value of any such points.
* **$x = 2$** and **$x = 6$**
* *Reason:* At both of these locations, the graph forms a sharp turn or **corner**. The function is continuous because there are no breaks, holes, or asymptotes, but it is not differentiable because the slope changes abruptly.

*(Note: While the function is also non-differentiable at $x = 1, 4,$ and $8$, it is not continuous at those points, so they do not satisfy the "continuous but not differentiable" condition).*
#### Active Practice Problem
Use the limit definition of the derivative to find the derivative of $f(x) = x^3 - 9x$.

##### Workspace

##### Solution
###### Rates of Change as Limits: Limit Definition of Derivative

---

###### 2. Use the limit definition of the derivative to find the derivative of $f(x) = x^3 - 9x$.

The limit definition of the derivative is:
$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$

###### Step 1: Expand $f(x+h)$
Substitute $(x+h)$ into the function everywhere there is an $x$:
$$f(x+h) = (x+h)^3 - 9(x+h)$$

Using the binomial expansion for $(x+h)^3 = x^3 + 3x^2h + 3xh^2 + h^3$, we get:
$$f(x+h) = x^3 + 3x^2h + 3xh^2 + h^3 - 9x - 9h$$

###### Step 2: Set up the difference quotient
Substitute $f(x+h)$ and $f(x)$ into the numerator:
$$f'(x) = \lim_{h \to 0} \frac{(x^3 + 3x^2h + 3xh^2 + h^3 - 9x - 9h) - (x^3 - 9x)}{h}$$

###### Step 3: Simplify the numerator
Distribute the negative sign and cancel out the opposing terms ($x^3$ and $-9x$):
$$f'(x) = \lim_{h \to 0} \frac{x^3 + 3x^2h + 3xh^2 + h^3 - 9x - 9h - x^3 + 9x}{h}$$
$$f'(x) = \lim_{h \to 0} \frac{3x^2h + 3xh^2 + h^3 - 9h}{h}$$

###### Step 4: Factor out and cancel $h$
Factor $h$ out of every term in the numerator to eliminate the indeterminate form:
$$f'(x) = \lim_{h \to 0} \frac{h(3x^2 + 3xh + h^2 - 9)}{h}$$
$$f'(x) = \lim_{h \to 0} (3x^2 + 3xh + h^2 - 9)$$

###### Step 5: Evaluate the limit by direct substitution
Set $h = 0$ to find the final derivative:
$$f'(x) = 3x^2 + 3x(0) + (0)^2 - 9$$
$$f'(x) = 3x^2 - 9$$

### Regroup 1
- Review common misconceptions and clarify key notations.

### Skill Block 2
## 1. The Core Concept: Resolving the Indeterminate Form
The limit definition of the derivative states:
$$f^{\prime}(x)=\lim_{h\rightarrow0}\frac{f(x+h)-f(x)}{h}$$

If you attempt to evaluate this limit immediately using direct substitution ($h = 0$), you will always obtain the indeterminate form $\frac{0}{0}$. In calculus, $\frac{0}{0}$ does not mean the answer does not exist; it means the true value is hidden behind a removable algebraic block. 

Your algebraic goal when computing a derivative from scratch is to **manipulate the numerator until every term without an $h$ cancels out**. This allows you to factor out $h$, divide it out with the $h$ in the denominator, and safely evaluate the limit by direct substitution.

---

## 2. The Three Essential Algebraic Paths
Depending on the structural type of function you are working with, you will rely on one of three foundational algebraic toolkits:

### Path A: Polynomial Functions $\to$ Binomial Expansion
When a function contains powers of $x$ (e.g., $x^2, x^3$), you must replace $x$ with $(x+h)$ and fully expand the polynomial. 
* **Key Tools:** * $(x+h)^2 = x^2 + 2xh + h^2$
  * $(x+h)^3 = x^3 + 3x^2h + 3xh^2 + h^3$

### Path B: Rational Functions $\to$ Finding Common Denominators
When a function contains fractions with variables in the denominator (e.g., $\frac{1}{x}, \frac{4}{x^2}$), substituting $(x+h)$ creates a complex fraction (fractions inside a fraction). You must find a common denominator for the top terms to merge them into a single fraction.

### Path C: Radical Functions $\to$ Rationalizing with Conjugates
When a function contains a square root (e.g., $\sqrt{x}, \sqrt{2x+1}$), you cannot expand or combine terms directly. You must multiply the entire numerator and denominator by the **algebraic conjugate** (changing the minus sign between the terms to a plus sign) to clear the radical using the difference of squares identity: $(a-b)(a+b) = a^2 - b^2$.

---

## 3. Custom Sample Problems & Solutions

### Problem 1 (Polynomial Path): Find the derivative of $f(x) = 2x^2 + 5x$ using the limit definition.

**Step 1: Set up the difference quotient**
$$f'(x) = \lim_{h \to 0} \frac{[2(x+h)^2 + 5(x+h)] - (2x^2 + 5x)}{h}$$

**Step 2: Expand the terms in the numerator**
Square the binomial $(x+h)^2$ and distribute the $5$:
$$f'(x) = \lim_{h \to 0} \frac{2(x^2 + 2xh + h^2) + 5x + 5h - 2x^2 - 5x}{h}$$
$$f'(x) = \lim_{h \to 0} \frac{2x^2 + 4xh + 2h^2 + 5x + 5h - 2x^2 - 5x}{h}$$

**Step 3: Cancel opposing non-$h$ terms**
Notice that $2x^2 - 2x^2 = 0$ and $5x - 5x = 0$. Every remaining term contains an $h$:
$$f'(x) = \lim_{h \to 0} \frac{4xh + 2h^2 + 5h}{h}$$

**Step 4: Factor out and divide out $h$**
$$f'(x) = \lim_{h \to 0} \frac{h(4x + 2h + 5)}{h}$$
$$f'(x) = \lim_{h \to 0} (4x + 2h + 5)$$

**Step 5: Evaluate by direct substitution ($h=0$)**
$$f'(x) = 4x + 2(0) + 5 = 4x + 5$$

---

### Problem 2 (Rational Path): Find the derivative of $g(x) = \frac{2}{x+1}$ using the limit definition.

**Step 1: Set up the difference quotient**
$$g'(x) = \lim_{h \to 0} \frac{\frac{2}{(x+h)+1} - \frac{2}{x+1}}{h}$$

**Step 2: Find a common denominator for the numerator fractions**
The common denominator for the two upper fractions is $(x+h+1)(x+1)$. Multiply each term to match:
$$g'(x) = \lim_{h \to 0} \frac{\frac{2(x+1) - 2(x+h+1)}{(x+h+1)(x+1)}}{h}$$

**Step 3: Simplify the upper numerator and bring the inner denominator down**
Distribute the constants on top and drop the denominator down to join $h$:
$$g'(x) = \lim_{h \to 0} \frac{2x + 2 - 2x - 2h - 2}{h(x+h+1)(x+1)}$$
$$g'(x) = \lim_{h \to 0} \frac{-2h}{h(x+h+1)(x+1)}$$

**Step 4: Cancel the $h$ term**
$$g'(x) = \lim_{h \to 0} \frac{-2}{(x+h+1)(x+1)}$$

**Step 5: Evaluate by direct substitution ($h=0$)**
$$g'(x) = \frac{-2}{(x+0+1)(x+1)} = \frac{-2}{(x+1)(x+1)} = \frac{-2}{(x+1)^2}$$

---

### Problem 3 (Radical Path): Find the derivative of $f(x) = \sqrt{3x}$ using the limit definition.

**Step 1: Set up the difference quotient**
$$f'(x) = \lim_{h \to 0} \frac{\sqrt{3(x+h)} - \sqrt{3x}}{h} = \lim_{h \to 0} \frac{\sqrt{3x+3h} - \sqrt{3x}}{h}$$

**Step 2: Multiply the numerator and denominator by the conjugate**
The conjugate of the numerator is $\sqrt{3x+3h} + \sqrt{3x}$:
$$f'(x) = \lim_{h \to 0} \frac{\left(\sqrt{3x+3h} - \sqrt{3x}\right)\left(\sqrt{3x+3h} + \sqrt{3x}\right)}{h\left(\sqrt{3x+3h} + \sqrt{3x}\right)}$$

**Step 3: Simplify the numerator using $(a-b)(a+b) = a^2 - b^2$**
$$f'(x) = \lim_{h \to 0} \frac{(3x+3h) - (3x)}{h\left(\sqrt{3x+3h} + \sqrt{3x}\right)}$$
$$f'(x) = \lim_{h \to 0} \frac{3h}{h\left(\sqrt{3x+3h} + \sqrt{3x}\right)}$$

**Step 4: Cancel $h$**
$$f'(x) = \lim_{h \to 0} \frac{3}{\sqrt{3x+3h} + \sqrt{3x}}$$

**Step 5: Evaluate by direct substitution ($h=0$)**
$$f'(x) = \frac{3}{\sqrt{3x+3(0)} + \sqrt{3x}} = \frac{3}{\sqrt{3x} + \sqrt{3x}} = \frac{3}{2\sqrt{3x}}$$

---

## 4. Real-Life Engineering Application Problems

### Application Problem 1: [[Electrical Engineering (Inductor Voltage Calculations)]]
[[Electrical Engineering (Inductor Voltage Calculations) Solution]]
An electrical engineer is testing a specialized inductor component. The time-varying current (in Amperes) passing through the inductor is dictated by the rational function $i(t) = \frac{6}{t}$. The fundamental physics equation tracking the instantaneous voltage $V(t)$ generated across an inductor with an inductance of $L = 0.5\text{ Henries}$ is given by the derivative relationship:
$$V(t) = L \cdot \frac{di}{dt}$$



**Using the limit definition of the derivative, find the algebraic equation for the voltage $V(t)$ across the inductor for any time $t > 0$.**

#### Step-by-step Solution:

**Step 1: Find the derivative of the current function $\frac{di}{dt}$ using limits**
Set up the limit definition using the rational function path:
$$\frac{di}{dt} = \lim_{h \to 0} \frac{\frac{6}{t+h} - \frac{6}{t}}{h}$$

Find a common denominator for the numerator fractions, which is $t(t+h)$:
$$\frac{di}{dt} = \lim_{h \to 0} \frac{\frac{6t - 6(t+h)}{t(t+h)}}{h}$$

Multiply by the reciprocal of $h$ and expand the upper terms:
$$\frac{di}{dt} = \lim_{h \to 0} \frac{6t - 6t - 6h}{h \cdot t(t+h)}$$
$$\frac{di}{dt} = \lim_{h \to 0} \frac{-6h}{h \cdot t(t+h)}$$

Cancel out the variable $h$ to resolve the indeterminate form:
$$\frac{di}{dt} = \lim_{h \to 0} \frac{-6}{t(t+h)}$$

Evaluate the limit via direct substitution by setting $h = 0$:
$$\frac{di}{dt} = \frac{-6}{t(t+0)} = -\frac{6}{t^2}$$

**Step 2: Calculate the Voltage $V(t)$**
Substitute the calculated derivative and the given inductance value ($L = 0.5$) into the voltage equation:
$$V(t) = 0.5 \cdot \left(-\frac{6}{t^2}\right) = -\frac{3}{t^2}\text{ Volts}$$

---

### Application Problem 2: [[Aerospace Engineering (Rocket Burn Telemetry)]]
[[Aerospace Engineering (Rocket Burn Telemetry) Solution]]
During a static firing test of a solid rocket booster prototype, an automated telemetry sensor monitors the total mass of the rocket engine assembly. As the solid propellant matrix ignites and burns away, the mass (in kilograms) decreases according to the polynomial profile:
$$M(t) = 800 - 12t^2$$

The instantaneous rate of change of mass over time, $\frac{dM}{dt}$, represents the mass flow rate of the fuel combustion. **Using the limit definition of the derivative, calculate the mass flow rate of the rocket engine at exactly $t = 5\text{ seconds}$ into the test.**

#### Step-by-step Solution:

**Step 1: Set up the limit definition of the derivative for $M(t)$**
$$M'(t) = \lim_{h \to 0} \frac{M(t+h) - M(t)}{h}$$
$$M'(t) = \lim_{h \to 0} \frac{[800 - 12(t+h)^2] - (800 - 12t^2)}{h}$$

**Step 2: Expand the polynomial expression**
Expand the squared time binomial $(t+h)^2 = t^2 + 2th + h^2$:
$$M'(t) = \lim_{h \to 0} \frac{800 - 12(t^2 + 2th + h^2) - 800 + 12t^2}{h}$$
$$M'(t) = \lim_{h \to 0} \frac{800 - 12t^2 - 24th - 12h^2 - 800 + 12t^2}{h}$$

**Step 3: Simplify the numerator**
Cancel out the constants ($800 - 800 = 0$) and the non-$h$ variables ($-12t^2 + 12t^2 = 0$):
$$M'(t) = \lim_{h \to 0} \frac{-24th - 12h^2}{h}$$

**Step 4: Factor out and cancel $h$**
$$M'(t) = \lim_{h \to 0} \frac{h(-24t - 12h)}{h}$$
$$M'(t) = \lim_{h \to 0} (-24t - 12h)$$

**Step 5: Evaluate the general derivative function**
Substitute $h = 0$ to get the final mass flow rate formula:
$$M'(t) = -24t - 12(0) = -24t$$

**Step 6: Compute the value at the specific engineering target ($t = 5$)**
$$M'(5) = -24(5) = -120\text{ kg/s}$$

**Engineering Conclusion:**
At exactly 5 seconds into the test, the rocket motor is expelling mass at a rate of **$120\text{ kg/s}$** (the negative sign indicates that total system mass is decreasing as the propellant exits the exhaust nozzle).

#### Worked Example
Using limits, find an equation of the line tangent to the function $g(x) = \frac{4}{x^2}$ at $x = -2$.

##### Solution
###### Rates of Change as Limits: Limit Definition of Derivative

---

###### 3. Using limits, find an equation of the line tangent to the function $g(x) = \frac{4}{x^2}$ at $x = -2$.

To find the equation of a tangent line, we need two components: a point of tangency and the slope of the curve at that point.

###### Step 1: Find the point of tangency
Evaluate the function at $x = -2$ to find the corresponding $y$-value:
$$g(-2) = \frac{4}{(-2)^2} = \frac{4}{4} = 1$$

So, the point of tangency is **$(-2, 1)$**.

###### Step 2: Set up the limit for the slope ($m$)
Using the limit definition of the derivative at a specific point $x = a$:
$$m = g'(a) = \lim_{h \to 0} \frac{g(a+h) - g(a)}{h}$$

Substitute $a = -2$ and $g(-2) = 1$ into the formula:
$$m = \lim_{h \to 0} \frac{\frac{4}{(-2+h)^2} - 1}{h}$$

###### Step 3: Find a common denominator in the numerator
Combine the terms in the numerator over a single denominator, $(-2+h)^2$:
$$m = \lim_{h \to 0} \frac{\frac{4 - (-2+h)^2}{(-2+h)^2}}{h}$$

Multiply by the reciprocal of $h$ to clear the complex fraction:
$$m = \lim_{h \to 0} \frac{4 - (-2+h)^2}{h(-2+h)^2}$$

###### Step 4: Expand and simplify the numerator
Expand the squared term $(-2+h)^2 = 4 - 4h + h^2$:
$$m = \lim_{h \to 0} \frac{4 - (4 - 4h + h^2)}{h(-2+h)^2}$$

Distribute the negative sign and cancel out the constants:
$$m = \lim_{h \to 0} \frac{4 - 4 + 4h - h^2}{h(-2+h)^2}$$
$$m = \lim_{h \to 0} \frac{4h - h^2}{h(-2+h)^2}$$

###### Step 5: Factor out and cancel $h$
Factor out $h$ from the numerator to remove the $0$ in the denominator:
$$m = \lim_{h \to 0} \frac{h(4 - h)}{h(-2+h)^2}$$
$$m = \lim_{h \to 0} \frac{4 - h}{(-2+h)^2}$$

###### Step 6: Evaluate the limit
Substitute $h = 0$ into the simplified expression:
$$m = \frac{4 - 0}{(-2+0)^2} = \frac{4}{4} = 1$$

The slope of the tangent line is **$m = 1$**.

###### Step 7: Write the equation of the tangent line
Using the point-slope form $y - y_1 = m(x - x_1)$ with the point $(-2, 1)$ and slope $m = 1$:
$$y - 1 = 1(x - (-2))$$
$$y - 1 = x + 2$$
$$y = x + 3$$
#### Active Practice Problem
### 4. 
Using the limit definition of the derivative, find the derivative of $g(x) = \sqrt{2x+1}$.

##### Workspace

##### Solution
###### Rates of Change as Limits: Limit Definition of Derivative

---

###### 4. Using the limit definition of the derivative, find the derivative of $g(x) = \sqrt{2x+1}$.

The limit definition of the derivative is:
$$g'(x) = \lim_{h \to 0} \frac{g(x+h) - g(x)}{h}$$

###### Step 1: Set up the difference quotient
Substitute $(x+h)$ into the function for $x$:
$$g(x+h) = \sqrt{2(x+h)+1} = \sqrt{2x+2h+1}$$

Now, plug $g(x+h)$ and $g(x)$ into the limit formula:
$$g'(x) = \lim_{h \to 0} \frac{\sqrt{2x+2h+1} - \sqrt{2x+1}}{h}$$

###### Step 2: Rationalize the numerator
Multiply both the numerator and the denominator by the conjugate of the numerator, which is $\sqrt{2x+2h+1} + \sqrt{2x+1}$:
$$g'(x) = \lim_{h \to 0} \frac{\left(\sqrt{2x+2h+1} - \sqrt{2x+1}\right)\cdot\left(\sqrt{2x+2h+1} + \sqrt{2x+1}\right)}{h\cdot\left(\sqrt{2x+2h+1} + \sqrt{2x+1}\right)}$$

Using the difference of squares identity, $(a-b)(a+b) = a^2 - b^2$, the numerator simplifies to:
$$g'(x) = \lim_{h \to 0} \frac{(2x + 2h + 1) - (2x + 1)}{h\left(\sqrt{2x+2h+1} + \sqrt{2x+1}\right)}$$

###### Step 3: Simplify the numerator
Distribute the negative sign and combine like terms to isolate $h$ terms:
$$g'(x) = \lim_{h \to 0} \frac{2x + 2h + 1 - 2x - 1}{h\left(\sqrt{2x+2h+1} + \sqrt{2x+1}\right)}$$
$$g'(x) = \lim_{h \to 0} \frac{2h}{h\left(\sqrt{2x+2h+1} + \sqrt{2x+1}\right)}$$

###### Step 4: Cancel $h$ from the fraction
Divide out $h$ from the numerator and denominator to remove the zero in the denominator:
$$g'(x) = \lim_{h \to 0} \frac{2}{\sqrt{2x+2h+1} + \sqrt{2x+1}}$$

###### Step 5: Evaluate the limit
Substitute $h = 0$ into the expression:
$$g'(x) = \frac{2}{\sqrt{2x+2(0)+1} + \sqrt{2x+1}}$$
$$g'(x) = \frac{2}{\sqrt{2x+1} + \sqrt{2x+1}}$$
$$g'(x) = \frac{2}{2\sqrt{2x+1}}$$

###### Step 6: Final Simplification
Cancel out the common factor of $2$:
$$g'(x) = \frac{1}{\sqrt{2x+1}}$$

### Regroup 2
- Reflect on the physical modeling applications and mathematical setups.

### Skill Block 3
## 1. The Core Concept: Moving from a Point to a General Formula
In previous calculus topics, you may have calculated the numerical slope of a function at an isolated, single point $x=a$. While useful, this requires you to redo the entire limit process from scratch if you want to find the slope at a different point on the same curve. 

**The Derivative Function, $f'(x)$:** By evaluating the limit definition using the variable $x$ instead of a fixed number $a$, we generate a completely new function called the derivative:
$$f^{\prime}(x)=\lim_{h\rightarrow0}\frac{f(x+h)-f(x)}{h}$$

This derivative function operates as a universal **"slope machine"**. You plug any $x$-value along the domain into $f'(x)$, and it outputs the exact instantaneous slope ($m$) of the original curve at that coordinate.

---

## 2. Synthesizing the Tangent Line Equation
Once you can find the instantaneous slope at any point, you can construct a **linear approximation**—known as the tangent line. A line tangent to a curve at a single point mimics the exact trajectory and behavior of the curve in the immediate neighborhood of that point.

To build the formal geometric equation of a tangent line, you must synthesize three distinct values:
1. **The $x$-coordinate ($x_1$):** This is the target value provided to you (often written as $x = a$).
2. **The $y$-coordinate ($y_1$):** Found by plugging $a$ into the *original* function: $y_1 = f(a)$.
3. **The slope ($m$):** Found by evaluating the limit or plugging $a$ into the *derivative* function: $m = f'(a)$.

Once you have these three pieces, you substitute them directly into the algebraic **point-slope form**:
$$y - y_1 = m(x - x_1) \implies y - f(a) = f'(a)(x - a)$$



---

## 3. Custom Sample Problems & Solutions

### Problem 1: Building a General Derivative and Tangent Line
Consider the function $f(x) = 4x - x^2$. 
1. Find the general derivative function $f'(x)$ using the limit definition.
2. Find the equation of the line tangent to $f(x)$ at $x = 3$.

#### Step-by-step Solution:

**Part 1: Find $f'(x)$**
Set up the difference quotient with the variable $x$:
$$f'(x) = \lim_{h \to 0} \frac{[4(x+h) - (x+h)^2] - (4x - x^2)}{h}$$

Expand the polynomial terms in the numerator:
$$f'(x) = \lim_{h \to 0} \frac{4x + 4h - (x^2 + 2xh + h^2) - 4x + x^2}{h}$$
$$f'(x) = \lim_{h \to 0} \frac{4x + 4h - x^2 - 2xh - h^2 - 4x + x^2}{h}$$

Cancel out opposing non-$h$ terms ($4x - 4x = 0$ and $-x^2 + x^2 = 0$):
$$f'(x) = \lim_{h \to 0} \frac{4h - 2xh - h^2}{h}$$

Factor out $h$ and divide it out from the denominator to remove the $\frac{0}{0}$ form:
$$f'(x) = \lim_{h \to 0} \frac{h(4 - 2x - h)}{h} = \lim_{h \to 0} (4 - 2x - h)$$

Evaluate the limit by direct substitution ($h = 0$):
$$f'(x) = 4 - 2x$$

**Part 2: Construct the Tangent Line at $x = 3$**
* **Find the point ($y_1$):** Evaluate the original function at $x = 3$.
  $$y_1 = f(3) = 4(3) - (3)^2 = 12 - 9 = 3 \implies \text{Point: } (3, 3)$$
* **Find the slope ($m$):** Evaluate your new derivative function at $x = 3$.
  $$m = f'(3) = 4 - 2(3) = 4 - 6 = -2$$
* **Assemble using Point-Slope Form:**
  $$y - 3 = -2(x - 3)$$
  $$y - 3 = -2x + 6 \implies y = -2x + 9$$

---

## 4. Real-Life Engineering Application Problems

### Application Problem 1: [[Robotics & Control Systems (Drone Flight Path Linearization)]]
[[Robotics & Control Systems (Drone Flight Path Linearization) Solution]]

---

### Application Problem 2: [[Structural Engineering (Deformation Hooke's Modulus)]]
[[Structural Engineering (Deformation Hooke's Modulus) Solution]]

#### Active Practice Problem
Using limits, find an equation of the line tangent to the function $f(x) = 5x - 3x^2$ at $x = 2$.

##### Workspace

##### Solution
###### Rates of Change as Limits: Limit Definition of Derivative

---

###### 5. Using limits, find an equation of the line tangent to the function $f(x) = 5x - 3x^2$ at $x = 2$.

To determine the equation of the tangent line, we need to calculate the coordinates for the point of tangency and find the slope of the function at that specific point.

###### Step 1: Find the point of tangency
Evaluate $f(x)$ at $x = 2$ to obtain the corresponding $y$-value:
$$f(2) = 5(2) - 3(2)^2$$
$$f(2) = 10 - 3(4) = 10 - 12 = -2$$

The point of tangency is **$(2, -2)$**.

###### Step 2: Set up the limit for the slope ($m$)
Using the limit definition of the derivative at a specific point $x = a$:
$$m = f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}$$

Substitute $a = 2$ and $f(2) = -2$ into the expression:
$$m = \lim_{h \to 0} \frac{\left[5(2+h) - 3(2+h)^2\right] - (-2)}{h}$$

###### Step 3: Expand and simplify the numerator
First, expand the squared term $(2+h)^2 = 4 + 4h + h^2$ and distribute the constants:
$$\text{Numerator} = 5(2+h) - 3(4 + 4h + h^2) + 2$$
$$\text{Numerator} = 10 + 5h - 12 - 12h - 3h^2 + 2$$

Combine like numerical and variable terms together:
$$\text{Numerator} = (10 - 12 + 2) + (5h - 12h) - 3h^2$$
$$\text{Numerator} = -7h - 3h^2$$

###### Step 4: Substitute back into the limit and cancel $h$
Put the simplified numerator back into the limit fraction:
$$m = \lim_{h \to 0} \frac{-7h - 3h^2}{h}$$

Factor out $h$ from the numerator to cancel it out with the denominator:
$$m = \lim_{h \to 0} \frac{h(-7 - 3h)}{h}$$
$$m = \lim_{h \to 0} (-7 - 3h)$$

###### Step 5: Evaluate the limit
Apply direct substitution by setting $h = 0$:
$$m = -7 - 3(0) = -7$$

The slope of the tangent line is **$m = -7$**.

###### Step 6: Formulate the tangent line equation
Use the point-slope formula $y - y_1 = m(x - x_1)$ with the point $(2, -2)$ and slope $m = -7$:
$$y - (-2) = -7(x - 2)$$
$$y + 2 = -7x + 14$$

Convert to slope-intercept form by isolating $y$:
$$y = -7x + 12$$

### Regroup 3
- Verify calculations and mathematical reasoning.

### Synthesis Wrap-up
- Core takeaways from Session 06 and overview of homework Knewton: *Rates of Change
Derivative as a Function*.
