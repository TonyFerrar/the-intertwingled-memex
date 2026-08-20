---
title: "Session 08 - Chain Rule and Derivatives of Exponential, Logarithmic, and Inverse Trig Functions"
type: course-session
course: MATH-181
semester: Fall 2026
publish: true
cssclasses: []
updated: 2026-08-18
---

# Session 08 - Chain Rule and Derivatives of Exponential, Logarithmic, and Inverse Trig Functions

## Session Objectives
By the end of this session, you will be able to:
- Structural Recognition (Deconstruction)
- Notation Agility
- Operational Layering (Algorithmic Execution)

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
#### Engineering Context: Multilayer Systems and Feedback Loops
The calculus principles introduced in these guided notes are essential for engineering systems that involve dynamic layering or translate linear motion into rotational and exponential states. The **Chain Rule** combined with **exponential functions** allows electrical and aerospace engineers to calculate transient current surges in discharging circuits ($V(t) = V_0 e^{-t/RC}$) and predict aerodynamic stress thresholds (Max-Q) as vehicles traverse rapidly changing atmospheric densities. Furthermore, **logarithmic derivatives** govern the optimization of thrust-to-weight ratios in rocket propulsion via the Tsiolkovsky rocket equation ($\Delta v = v_e \ln(m_0/m_f)$), while **inverse trigonometric derivatives** are utilized in robotics and radar telemetry to translate linear tracking coordinates into precise angular motor velocities ($\frac{d\theta}{dt}$) using the derivative of $\tan^{-1}(u)$.

### Skill Block 1
## 1. Conceptual Notes & Core Principles

The foundational skill of composite differentiation is **Structural Recognition (Deconstruction)**—the ability to look at a complex mathematical expression and mentally isolate it into a nested sequence of "outer," "middle," and "inner" layers. 

When functions are nested inside one another, a simple rate of change cannot be calculated in a single step. Instead, we use the **Chain Rule**, which dictates that the derivative of a composite function is the product of the derivatives of its layers, evaluated from the outside in. Think of it like peeling the layers of an onion: you must differentiate the outer layer first, leaving the inner contents completely untouched, before moving inward.



### The Two Notational Frameworks

#### 1. Leibniz Notation
Leibniz notation is highly operational, systematic, and tracking-oriented. By explicitly introducing an intermediate variable $u$ to represent the inner function, it breaks a confusing composition down into manageable, independent derivative pieces. This notation is especially favored in engineering and physics because it explicitly tracks which variable is changing with respect to what.
$$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$$

**Algorithmic Steps for Leibniz Notation:**
1. **Identify** the outer function $f$ and the inner function $g$ within $y = f(g(x))$.
2. **Substitute** by letting $u = g(x)$, rewriting the main function as a simpler expression: $y = f(u)$.
3. **Differentiate** both pieces independently to find $\frac{dy}{du}$ (using $u$ rules) and $\frac{du}{dx}$ (using $x$ rules).
4. **Multiply** the two components together as a single product.
5. **Back-substitute** the original expression for $u$ so your final answer is entirely in terms of $x$.

#### 2. Prime Notation
Prime notation emphasizes functional mapping and positional evaluation. It allows for rapid calculation by multiplying the derivative of the outer function (evaluated at the unchanged inner function) by the derivative of the inner function.
$$\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)$$

**Algorithmic Steps for Prime Notation:**
1. Identify the "outside" shell and the "inside" expression.
2. Take the derivative of the outside shell, keeping whatever was on the inside exactly the same.
3. Multiply that result by the derivative of the inside expression.

---

## 2. Guided Practice & Sample Problems

### Example 1: Applying Leibniz Notation (Two Layers)
**Problem:** Find the derivative of $y = \cos(x^3)$ using Leibniz Notation.

* **Step 1: Deconstruct the layers.**
  * Outer layer: $y = \cos(\dots)$
  * Inner layer: $u = x^3$

* **Step 2: Rewrite in terms of $u$.**
  $$y = \cos(u) \quad \text{where} \quad u = x^3$$

* **Step 3: Differentiate both components independently.**
  $$\frac{dy}{du} = -\sin(u)$$
  $$\frac{du}{dx} = 3x^2$$

* **Step 4: Combine using the Chain Rule.**
  $$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$$
  $$\frac{dy}{dx} = -\sin(u) \cdot 3x^2$$

* **Step 5: Back-substitute $u$.**
  Replace $u$ with $x^3$ and rearrange coefficients nicely:
  $$\frac{dy}{dx} = -3x^2 \sin(x^3)$$

---

### Example 2: Multi-Layer Composition (Three Layers)
**Problem:** Find the derivative of $y = e^{\cot(x)}$ using Prime Notation.

* **Step 1: Recognize the structural layers.**
  * Outer layer: $f(u) = e^u$
  * Inner layer: $g(x) = \cot(x)$

* **Step 2: Apply the Prime Notation formula.**
  Differentiate the outer exponential layer (recall that the derivative of $e^u$ is just $e^u$), preserve the inner expression completely, and set up the multiplication for the inner derivative:
  $$y' = e^{\cot(x)} \cdot \frac{d}{dx}[\cot(x)]$$

* **Step 3: Evaluate the inner derivative.**
  Recall from your basic trigonometric derivative rules that $\frac{d}{dx}[\cot(x)] = -\csc^2(x)$.
  $$y' = e^{\cot(x)} \cdot \left(-\csc^2(x)\right)$$

* **Step 4: Simplify the final algebraic expression.**
  $$y' = -\csc^2(x)e^{\cot(x)}$$

---

## 3. Real-Life Engineering Application Problems

### Problem 1: [[Electrical Engineering (RC Circuit Transient Surge)]]
[[Electrical Engineering (RC Circuit Transient Surge) Solution]]

---

### Problem 2: [[Aerospace Engineering (Atmospheric Density & Aerodynamic Drag Force)]]
[[Aerospace Engineering (Atmospheric Density & Aerodynamic Drag Force) Solution]]

#### Worked Example
Find the derivative of the following using Leibniz Notation: 
   $$y=\frac{1}{\sqrt{1+x^{5}}}$$

##### Solution
**Problem:** Find the derivative of the following using Leibniz Notation:
$$y = \frac{1}{\sqrt{1+x^{5}}}$$

---

###### Step 1: Rewrite the function
Before applying the derivative rules, rewrite the function using a negative rational exponent to make it easier to differentiate:
$$y = (1 + x^{5})^{-\frac{1}{2}}$$

###### Step 2: Define variables for the Chain Rule (Leibniz Notation)
To use Leibniz notation for the chain rule ($\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$), let the inner function be $u$:
$$u = 1 + x^{5}$$

Now express $y$ in terms of $u$:
$$y = u^{-\frac{1}{2}}$$

###### Step 3: Differentiate both components
Find the derivative of $y$ with respect to $u$ using the Power Rule:
$$\frac{dy}{du} = -\frac{1}{2}u^{-\frac{3}{2}}$$

Find the derivative of $u$ with respect to $x$:
$$\frac{du}{dx} = 5x^{4}$$

###### Step 4: Apply the Chain Rule
Multiply the two derivatives together:
$$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$$

$$\frac{dy}{dx} = \left(-\frac{1}{2}u^{-\frac{3}{2}}\right) \cdot (5x^{4})$$

###### Step 5: Substitute $u$ back and simplify
Replace $u$ with its original expression ($1 + x^{5}$):
$$\frac{dy}{dx} = -\frac{1}{2}(1 + x^{5})^{-\frac{3}{2}} \cdot 5x^{4}$$

Combine the terms into a single, clean fraction:
$$\frac{dy}{dx} = -\frac{5x^{4}}{2(1 + x^{5})^{\frac{3}{2}}}$$

Alternatively, expressing it back in radical form:
$$\frac{dy}{dx} = -\frac{5x^{4}}{2\sqrt{(1 + x^{5})^3}}$$
#### Active Practice Problem
Find the derivative of the following using Prime Notation: 
   $$f(x)=\sin^{-1}(5x^{3})$$

##### Workspace

##### Solution
**Problem:** Find the derivative of the following using Prime Notation:
$$f(x) = \sin^{-1}(5x^{3})$$

---

###### Step 1: Identify the relevant derivative rules
To differentiate an inverse sine function with an inner function, we use the derivative rule for arcsine combined with the Chain Rule:
$$\frac{d}{dx}[\sin^{-1}(u)] = \frac{u'}{\sqrt{1 - u^2}}$$

In this case, our inner function is:
$$u = 5x^{3}$$

###### Step 2: Differentiate the inner function
Find the derivative of the inner function, $u'$, using the Power Rule:
$$u' = \frac{d}{dx}(5x^{3}) = 15x^{2}$$

###### Step 3: Apply the Chain Rule (Prime Notation)
Substitute $u$ and $u'$ into the derivative formula:
$$f'(x) = \frac{15x^{2}}{\sqrt{1 - (5x^{3})^2}}$$

###### Step 4: Simplify the denominator
Simplify the squared expression inside the radical:
$$(5x^{3})^2 = 25x^{6}$$

Putting it all together, the final derivative is:
$$f'(x) = \frac{15x^{2}}{\sqrt{1 - 25x^{6}}}$$

### Regroup 1
- Review common misconceptions and clarify key notations.

### Skill Block 2
## 1. Conceptual Notes & Core Principles

While Skill 1 establishes the structural layering needed to execute the Chain Rule, **Skill 2 focus on Notation Agility and Core Function Differentiation**. Mastery of this skill means you can seamlessly switch between **Leibniz notation** and **Prime notation** while accurately differentiating the three foundational transcendental function classes: **Exponentials**, **Logarithms**, and **Inverse Trigonometric Functions**.

A common hurdle in calculus is treating derivative rules as isolated formulas. Instead, proficient engineers view notation as a language that adapts to the problem layout:
* **Leibniz Notation ($\frac{dy}{dx}$)** explicitly maps out related rates of change and is highly valuable in physics and multi-variable modeling.
* **Prime Notation ($f'(x)$)** provides operational speed and shorthand clarity when evaluating rates under tight algebraic space.

### The Transcendental Catalog

To build notation agility, you must know how the core rules transform when layered with an inner function, $u$:

| Function Family | Base Derivative Rule | Chain Rule (Leibniz Form) | Chain Rule (Prime Form) |
| :--- | :--- | :--- | :--- |
| **Natural Exponential** | $\frac{d}{dx}[e^x] = e^x$ | $\frac{dy}{dx} = e^u \cdot \frac{du}{dx}$ | $\frac{d}{dx}[e^{g(x)}] = e^{g(x)} \cdot g'(x)$ |
| **General Exponential** | $\frac{d}{dx}[b^x] = \ln(b)b^x$ | $\frac{dy}{dx} = \ln(b)b^u \cdot \frac{du}{dx}$ | $\frac{d}{dx}[b^{g(x)}] = \ln(b)b^{g(x)} \cdot g'(x)$ |
| **Natural Logarithm** | $\frac{d}{dx}[\ln(x)] = \frac{1}{x}$ | $\frac{dy}{dx} = \frac{1}{u} \cdot \frac{du}{dx}$ | $\frac{d}{dx}[\ln(g(x))] = \frac{g'(x)}{g(x)}$ |
| **General Logarithm** | $\frac{d}{dx}[\log_a(x)] = \frac{1}{x\ln(a)}$ | $\frac{dy}{dx} = \frac{1}{u\ln(a)} \cdot \frac{du}{dx}$ | $\frac{d}{dx}[\log_a(g(x))] = \frac{g'(x)}{g(x)\ln(a)}$ |
| **Inverse Sine** | $\frac{d}{dx}[\sin^{-1}x] = \frac{1}{\sqrt{1-x^2}}$ | $\frac{dy}{dx} = \frac{1}{\sqrt{1-u^2}} \cdot \frac{du}{dx}$ | $\frac{d}{dx}[\sin^{-1}(g(x))] = \frac{g'(x)}{\sqrt{1-[g(x)]^2}}$ |
| **Inverse Tangent** | $\frac{d}{dx}[\tan^{-1}x] = \frac{1}{1+x^2}$ | $\frac{dy}{dx} = \frac{1}{1+u^2} \cdot \frac{du}{dx}$ | $\frac{d}{dx}[\tan^{-1}(g(x))] = \frac{g'(x)}{1+[g(x)]^2}$ |

---

## 2. Guided Practice & Sample Problems

### Example 1: Shifting from Simple Base to Chain (Exponential Form)
**Problem:** Find the derivative of $f(x) = 3^x - 5e^x$, then contrast it by finding the derivative of $y = e^{\cot(x)}$ using Prime notation.

* **Part A: Basic Term-by-Term Differentiation**
  $$f'(x) = \frac{d}{dx}[3^x] - \frac{d}{dx}[5e^x]$$
  Using the base exponential rules:
  $$f'(x) = \ln(3)3^x - 5e^x$$

* **Part B: Shifting to Chain Rule Integration ($y = e^{\cot x}$)**
  Here, the inner function is $g(x) = \cot(x)$. The outer function is $e^u$. 
  Using Prime form notation:
  $$y' = e^{\cot(x)} \cdot \frac{d}{dx}[\cot(x)]$$
  $$y' = e^{\cot(x)} \cdot (-\csc^2(x)) = -\csc^2(x)e^{\cot(x)}$$

---

### Example 2: Logarithmic Chain Rule with Algebraic Products
**Problem:** Find the derivative of $g(x) = 3x^2\log_3(x)$ using Prime notation.

* **Step 1: Identify the primary operation.**
  The overarching structure is a *product* of two distinct functions: $u = 3x^2$ and $v = \log_3(x)$. We must apply the Product Rule first: $g'(x) = u'v + uv'$.

* **Step 2: Differentiate the individual components.**
  $$\frac{d}{dx}[3x^2] = 6x$$
  $$\frac{d}{dx}[\log_3(x)] = \frac{1}{x\ln(3)}$$

* **Step 3: Assemble using the Product Rule.**
  $$g'(x) = (6x)\cdot\log_3(x) + (3x^2)\cdot\left(\frac{1}{x\ln(3)}\right)$$

* **Step 4: Clean up algebraic terms.**
  Cancel out the common factor of $x$ in the second term:
  $$g'(x) = 6x\log_3(x) + \frac{3x}{\ln(3)}$$

---

### Example 3: Inverse Trigonometric Composition
**Problem:** Find the derivative of $y = \ln(x^2 + 5)$ using Leibniz Notation.

* **Step 1: Assign variables for the composite chain.**
  Let the inner function be $u$:
  $$u = x^2 + 5 \implies \frac{du}{dx} = 2x$$

* **Step 2: Express $y$ in terms of $u$ and differentiate.**
  $$y = \ln(u) \implies \frac{dy}{du} = \frac{1}{u}$$

* **Step 3: Multiply the rates together.**
  $$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} = \frac{1}{u} \cdot 2x = \frac{2x}{u}$$

* **Step 4: Substitute $u$ back.**
  $$\frac{dy}{dx} = \frac{2x}{x^2 + 5}$$

---

## 3. Real-Life Engineering Application Problems

### Problem 1: [[Aerospace Engineering (Rocket Velocity Optimization via Rocket Equation)]]
[[Aerospace Engineering (Rocket Velocity Optimization via Rocket Equation) Solution]]
**Context:** An aerospace propulsion engineer needs to analyze the acceleration profile of a vertical launch vehicle. The total change in velocity $\Delta v$ (in meters per second, $\text{m/s}$) achieved by burning fuel is modeled by the Tsiolkovsky Rocket Equation:
$$v(m) = v_e \ln\left(\frac{m_0}{m}\right)$$
Where $v_e = 2500 \text{ m/s}$ is the constant effective exhaust velocity, $m_0 = 50,000 \text{ kg}$ is the initial fully fueled wet mass of the rocket, and $m$ is the instantaneous current mass (in $\text{kg}$) as fuel depletes. 

The rocket burns through its propellant fuel supply over time $t$ (in seconds), meaning the instantaneous vehicle mass drops according to the consumption profile:
$$m(t) = 50,000 - 250t$$



**Task:** Use the Chain Rule to find the operational rate of change of the velocity with respect to time ($\frac{dv}{dt}$) exactly $t = 60$ seconds into the burn sequence.

#### Detailed Solution:
1. **Simplify the log function using properties before differentiating:**
   To make tracking simpler, expand the logarithmic vector relationship:
   $$v(m) = v_e \left[ \ln(m_0) - \ln(m) \right] = v_e\ln(m_0) - v_e\ln(m)$$
   Substitute the constant value $v_e = 2500$:
   $$v(m) = 2500\ln(50,000) - 2500\ln(m)$$

2. **Differentiate velocity $v$ with respect to mass $m$:**
   The first term is a pure constant, so its derivative is zero. The second term uses the natural log rule:
   $$\frac{dv}{m} = 0 - 2500 \cdot \left(\frac{1}{m}\right) = -\frac{2500}{m}$$

3. **Differentiate mass $m$ with respect to time $t$:**
   $$\frac{dm}{dt} = \frac{d}{dt}[50,000 - 250t] = -250 \text{ kg/s}$$

4. **Link the rates together using Leibniz Notation:**
   $$\frac{dv}{dt} = \frac{dv}{dm} \cdot \frac{dm}{dt}$$
   $$\frac{dv}{dt} = \left(-\frac{2500}{m}\right) \cdot (-250) = \frac{625,000}{m}$$

5. **Evaluate conditions at the $t = 60$ seconds marker:**
   First, calculate the active remaining rocket mass $m$ at 60 seconds:
   $$m(60) = 50,000 - 250(60) = 50,000 - 15,000 = 35,000 \text{ kg}$$
   Now, substitute $m = 35,000$ into our rate expression:
   $$\frac{dv}{dt} = \frac{625,000}{35,000} = \frac{625}{35} = \frac{125}{7} \approx 17.86 \text{ m/s}^2$$

#### Physical Meaning and Engineering Application:
* **Meaning of the Answer:** The value $\frac{dv}{dt} \approx 17.86 \text{ m/s}^2$ represents the instantaneous acceleration of the rocket at the 60-second mark. Notice that even though the engine burns fuel at a completely constant rate ($\frac{dm}{dt} = -250 \text{ kg/s}$), the derivative of velocity with respect to time is actively increasing because the rocket is shedding dead weight, making the remaining mass easier to push.
* **Real-Life Application:** Guidance and propulsion engineers use the derivative of this log curve to program autonomous flight boundaries. It tells them if the structural framework can handle the accelerating $G$-forces or if they need to command the fuel pumps to throttle back thrust levels to safeguard structural payloads from shaking apart.

---

### Problem 2: [[Robotics and Telemetry Engineering (Angular Velocity of Tracking Actuator)]]
[[Robotics and Telemetry Engineering (Angular Velocity of Tracking Actuator) Solution]]
**Context:** A civil defense installation uses an automated radar tracking dish mounted at ground level to monitor oncoming flight vectors. The radar sits at a fixed horizontal distance of $x = 4\text{ km}$ from the approach path line. An incoming target flies at a constant altitude of $y = 3\text{ km}$ and is tracking horizontally at a linear speed of $v = 0.5\text{ km/s}$ toward the station.

The tracking angle $\theta$ (in radians) of the servo-actuator dish adjusts relative to the plane's horizontal distance position coordinate $z$ (in $\text{km}$) according to the inverse trigonometric relationship:
$$\theta(z) = \tan^{-1}\left(\frac{3}{z}\right)$$

As the plane moves closer, the coordinate distance changes over time $t$ (in seconds) according to the linear tracking speed equation:
$$\frac{dz}{dt} = -0.5 \text{ km/s}$$



**Task:** Use Prime notation and the Chain Rule to determine the exact angular velocity required by the servo-motor ($\theta'$) when the horizontal distance coordinate settles precisely at $z = 3\text{ km}$.

#### Detailed Solution:
1. **Identify the core rules for the inverse trigonometric derivative:**
   We are differentiating $\theta(z) = \tan^{-1}(u)$ where $u = \frac{3}{z} = 3z^{-1}$.
   The base rule states: $\frac{d}{dz}[\tan^{-1}(u)] = \frac{1}{1+u^2} \cdot u'$

2. **Differentiate the inner positional function with respect to $z$:**
   $$u' = \frac{d}{dz}[3z^{-1}] = -3z^{-2} = -\frac{3}{z^2}$$

3. **Assemble the derivative $\theta'(z)$ with respect to spatial distance:**
   $$\theta'(z) = \frac{1}{1 + \left(\frac{3}{z}\right)^2} \cdot \left(-\frac{3}{z^2}\right)$$
   Distribute the $z^2$ into the denominator term to simplify the algebraic expression:
   $$\theta'(z) = \frac{-3}{z^2 \cdot \left(1 + \frac{9}{z^2}\right)} = \frac{-3}{z^2 + 9} \text{ rad/km}$$

4. **Incorporate the time parameter via the Chain Rule:**
   We need the tracking velocity with respect to time: $\frac{d\theta}{dt} = \theta'(z) \cdot \frac{dz}{dt}$
   $$\frac{d\theta}{dt} = \left(\frac{-3}{z^2 + 9}\right) \cdot \left(\frac{dz}{dt}\right)$$

5. **Evaluate operational metrics at the $z = 3\text{ km}$ boundaries:**
   Substitute the active state values ($z = 3$ and $\frac{dz}{dt} = -0.5$):
   $$\frac{d\theta}{dt} = \left(\frac{-3}{(3)^2 + 9}\right) \cdot (-0.5)$$
   $$\frac{d\theta}{dt} = \left(\frac{-3}{9 + 9}\right) \cdot (-0.5) = \left(\frac{-3}{18}\right) \cdot (-0.5)$$
   $$\frac{d\theta}{dt} = \left(-\frac{1}{6}\right) \cdot \left(-\frac{1}{2}\right) = \frac{1}{12} \approx 0.0833 \text{ rad/s}$$

#### Physical Meaning and Engineering Application:
* **Meaning of the Answer:** The value $\frac{d\theta}{dt} = \frac{1}{12} \approx 0.0833 \text{ radians per second}$ measures the necessary angular sweeping speed of the radar enclosure at that exact split second. The positive value signifies that the tracking angle must open up faster as the target approaches close range.
* **Real-Life Application:** Robotics and mechatronics design engineers rely heavily on inverse trigonometric rates to coordinate inverse kinematics. This calculation tells the control system exactly how much voltage to supply to the servo-motor coils at any given distance mark. If the plane comes too close, the calculated required value for $\frac{d\theta}{dt}$ might exceed the physical maximum rotational speed of the motor frame, causing the radar tracker to lag and drop its lock on the tracking target. Engineers map out these boundary limits to prevent mechanical overdrive failure.

#### Worked Example
Suppose $f(3)=2$ and $f^{\prime}(3)=8$. Let $g(x)=x^{2}f(3x)$. Find the equation of the line tangent to $g(x)$ at $x=1$.

##### Solution
**Problem:** Suppose $f(3)=2$ and $f^{\prime}(3)=8$. Let $g(x)=x^{2}f(3x)$. Find the equation of the line tangent to $g(x)$ at $x=1$.

---

###### Step 1: Find the point of tangency $(x_1, y_1)$
We are given $x_1 = 1$. To find the corresponding $y$-value ($y_1$), substitute $x = 1$ into the function $g(x)$:
$$g(1) = (1)^2 \cdot f(3 \cdot 1)$$
$$g(1) = 1 \cdot f(3)$$

Using the given value $f(3) = 2$:
$$g(1) = 2$$

So, the point of tangency is **$(1, 2)$**.

###### Step 2: Find the derivative $g'(x)$ using Product and Chain Rules
The function $g(x) = x^2 \cdot f(3x)$ is a product of two functions: $x^2$ and $f(3x)$.

Using the **Product Rule** $\frac{d}{dx}[u \cdot v] = u'v + uv'$:
* Let $u = x^2 \implies u' = 2x$
* Let $v = f(3x) \implies v' = f'(3x) \cdot 3$ *(by the Chain Rule)*

Now, assemble the derivative:
$$g'(x) = (2x) \cdot f(3x) + x^2 \cdot (3f'(3x))$$
$$g'(x) = 2xf(3x) + 3x^2f'(3x)$$

###### Step 3: Find the slope of the tangent line ($m$)
The slope of the tangent line at $x = 1$ is equal to $g'(1)$. Substitute $x = 1$ into our derivative formula:
$$g'(1) = 2(1)f(3(1)) + 3(1)^2f'(3(1))$$
$$g'(1) = 2f(3) + 3f'(3)$$

Substitute the given values $f(3) = 2$ and $f'(3) = 8$:
$$g'(1) = 2(2) + 3(8)$$
$$g'(1) = 4 + 24 = 28$$

So, the slope **$m = 28$**.

###### Step 4: Write the equation of the tangent line
Using the point-slope form $y - y_1 = m(x - x_1)$ with point $(1, 2)$ and slope $m = 28$:
$$y - 2 = 28(x - 1)$$

Convert to slope-intercept form ($y = mx + b$):
$$y - 2 = 28x - 28$$
$$y = 28x - 26$$

###### Final Answer
The equation of the tangent line is:
$$y = 28x - 26$$
#### Active Practice Problem
Use the chain and product rules to prove the quotient rule. In other words, show that if:
   $$y=\frac{f(x)}{g(x)}$$
   then
   $$\frac{dy}{dx}=\frac{f^{\prime}(x)g(x)-g^{\prime}(x)f(x)}{[g(x)]^{2}}$$

##### Workspace

##### Solution
**Problem:** Use the chain and product rules to prove the quotient rule. In other words, show that if:
$$y = \frac{f(x)}{g(x)}$$
then
$$\frac{dy}{dx} = \frac{f^{\prime}(x)g(x)-g^{\prime}(x)f(x)}{[g(x)]^{2}}$$

---

###### Step 1: Rewrite the Quotient as a Product
Instead of a fraction, express the denominator as a function raised to the power of $-1$:
$$y = f(x) \cdot [g(x)]^{-1}$$

###### Step 2: Apply the Product Rule
The function is now a product of $u = f(x)$ and $v = [g(x)]^{-1}$.
Recall the Product Rule: $\frac{dy}{dx} = u'v + uv'$

Applying this gives:
$$\frac{dy}{dx} = \left( \frac{d}{dx}[f(x)] \right) \cdot [g(x)]^{-1} + f(x) \cdot \left( \frac{d}{dx}[[g(x)]^{-1}] \right)$$

$$\frac{dy}{dx} = f'(x)[g(x)]^{-1} + f(x) \cdot \left( \frac{d}{dx}[[g(x)]^{-1}] \right)$$

###### Step 3: Apply the Chain Rule to the second term
To differentiate the inner-outer composite function $[g(x)]^{-1}$, apply the Power Rule combined with the Chain Rule:
$$\frac{d}{dx}[[g(x)]^{-1}] = -1 \cdot [g(x)]^{-2} \cdot g'(x)$$

Substitute this back into our primary derivative equation:
$$\frac{dy}{dx} = f'(x)[g(x)]^{-1} + f(x) \cdot \left( -[g(x)]^{-2} \cdot g'(x) \right)$$

$$\frac{dy}{dx} = f'(x)[g(x)]^{-1} - f(x)g'(x)[g(x)]^{-2}$$

###### Step 4: Express with positive exponents
Convert the negative exponents back into fractional form:
$$\frac{dy}{dx} = \frac{f'(x)}{g(x)} - \frac{f(x)g'(x)}{[g(x)]^2}$$

###### Step 5: Find a common denominator and simplify
To combine the two terms into a single fraction, multiply the numerator and denominator of the first term by $g(x)$ so that both terms share the common denominator $[g(x)]^2$:
$$\frac{dy}{dx} = \frac{f'(x) \cdot g(x)}{g(x) \cdot g(x)} - \frac{f(x)g'(x)}{[g(x)]^2}$$

$$\frac{dy}{dx} = \frac{f'(x)g(x)}{[g(x)]^2} - \frac{g'(x)f(x)}{[g(x)]^2}$$

Combine the numerators over the shared denominator:
$$\frac{dy}{dx} = \frac{f^{\prime}(x)g(x)-g^{\prime}(x)f(x)}{[g(x)]^{2}}$$

###### Conclusion
The identity has been verified successfully. $\blacksquare$

### Regroup 2
- Reflect on the physical modeling applications and mathematical setups.

### Skill Block 3
## 1. Conceptual Notes & Core Principles

The final evolutionary stage of differentiation mastery is **Operational Layering (Algorithmic Execution)**. While Skills 1 and 2 focus on identifying a single composite function and choosing a notation, **Skill 3 requires navigating expressions where multiple rules are nested inside one another**. 

In high-level mathematics and engineering, a function rarely presents itself as a simple isolated chain. Instead, you will encounter scenarios where:
* A **Product Rule** contains an inner term that requires the **Chain Rule**.
* A **Quotient Rule** possesses a denominator structured around an **Inverse Trigonometric Rule**.
* A **Chain Rule** contains multiple sequential layers (an outer, a middle, and an inner function) that must be peeled back systematically.

### The Mental Priority Algorithm

When evaluating a highly complex derivative, engineers do not guess where to begin. They apply a systematic top-down checklist to establish order of operations:

1. **Global Structure Inspection:** Look at the expression as a whole. What is the outermost operation binding the terms together? Is it a product of two distinct function blocks? A massive fraction? Or is the entire thing trapped inside a radical power shell? 
2. **Establish the Primary Rule:** Set up the template for the global rule first. For instance, if the function is a product, write down the empty framework for the Product Rule: $f'(x) = (\text{blank})'(\text{blank}) + (\text{blank})(\text{blank})'$.
3. **Execute and Chain Sub-Layers:** As you work to fill in the derivatives within that global template, zoom into those localized sub-functions. If a localized piece is a composite function, pause and trigger a nested Chain Rule execution.
4. **Algebraic Factoring Consolidation:** Complex rule integrations yield long, chaotic rows of terms. The final phase is to systematically factor out lowest common bases, simplify negative powers, and reduce fractions to clean, verifiable equations.

---

## 2. Guided Practice & Sample Problems

### Example 1: Integrating Product Rule and Chain Rule
**Problem:** Find the derivative of $f(x) = x^2 \cdot f(3x)$ given that $f(3)=2$ and $f'(3)=8$ using Prime Notation. (From Example 3 of the guided notes skeleton context).

* **Step 1: Determine the Global Structure.**
  The function is a *product* of two distinct terms: $u(x) = x^2$ and $v(x) = f(3x)$. Therefore, the overarching blueprint must be the Product Rule.
  $$g'(x) = u'(x)v(x) + u(x)v'(x)$$

* **Step 2: Differentiate the individual components.**
  * The derivative of the first term is straightforward: $u'(x) = 2x$.
  * The second term, $v(x) = f(3x)$, is a composite function. Its outer layer is $f(\dots)$ and its inner layer is $3x$. We must apply the **Chain Rule** to find its derivative:
    $$v'(x) = f'(3x) \cdot \frac{d}{dx}[3x] = 3f'(3x)$$

* **Step 3: Assemble the Global Template.**
  Plugging our components back into the Product Rule layout:
  $$g'(x) = (2x) \cdot f(3x) + (x^2) \cdot (3f'(3x))$$
  $$g'(x) = 2xf(3x) + 3x^2f'(3x)$$

---

### Example 2: Proof of Quotient Rule via Product and Negative Chain Layering
**Problem:** Prove the Quotient Rule formula $\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x)g(x) - g'(x)f(x)}{[g(x)]^2}$ using exclusively the Product Rule and the Chain Rule.

* **Step 1: Globally restructure the expression.**
  Convert the fraction into a product by giving the denominator an explicit negative index exponent:
  $$y = f(x) \cdot [g(x)]^{-1}$$

* **Step 2: Initialize the global Product Rule framework.**
  $$y' = \left(\frac{d}{dx}[f(x)]\right) \cdot [g(x)]^{-1} + f(x) \cdot \left(\frac{d}{dx}[[g(x)]^{-1}]\right)$$
  $$y' = f'(x)[g(x)]^{-1} + f(x) \cdot \left(\frac{d}{dx}[[g(x)]^{-1}]\right)$$

* **Step 3: Apply the Chain Rule to the nested exponential expression.**
  To find the derivative of $[g(x)]^{-1}$, treat the power of $-1$ as the outer function and $g(x)$ as the inner function:
  $$\frac{d}{dx}[[g(x)]^{-1}] = -1 \cdot [g(x)]^{-2} \cdot g'(x)$$

* **Step 4: Substitute back and clear negative powers.**
  $$y' = f'(x)[g(x)]^{-1} + f(x) \cdot \left(-[g(x)]^{-2}g'(x)\right)$$
  $$y' = \frac{f'(x)}{g(x)} - \frac{f(x)g'(x)}{[g(x)]^2}$$

* **Step 5: Consolidate via common denominators.**
  Multiply the first term's numerator and denominator by $g(x)$ to create a shared base:
  $$y' = \frac{f'(x)g(x)}{[g(x)]^2} - \frac{f(x)g'(x)}{[g(x)]^2} = \frac{f'(x)g(x) - g'(x)f(x)}{[g(x)]^2} \quad \blacksquare$$

---

## 3. Real-Life Engineering Application Problems

### Problem 1: [[Chemical Engineering (Reaction Rate Kinematics and pH Buffering)]]
[[Chemical Engineering (Reaction Rate Kinematics and pH Buffering) Solution]]

---

### Problem 2: [[Mechanical Engineering (Robotic Kinematics & Angular Velocity Mapping)]]
[[Mechanical Engineering (Robotic Kinematics & Angular Velocity Mapping) Solution]]

#### Active Practice Problem
Find the derivatives of the following functions. Simplify as much as possible by combining like terms and canceling common factors.

   (a) $y=2^{\sec(5x)}$

   (b) $f(x)=\log_{3}(x^{2}e^{x})$

   (c) $f(x)=\sqrt{x^{2}+1}\csc^{-1}x$

   (d) $h(x)=\ln\left(\frac{x^{2}-x}{x^{2}+2x}\right)$

##### Workspace

##### Solution
**Problem:** Find the derivatives of the following functions. Simplify as much as possible by combining like terms and canceling common factors.

---

###### Part (a) $y=2^{\sec(5x)}$

###### Step 1: Identify the relevant rules
* Derivative of an exponential function base $a$: $\frac{d}{dx}[a^u] = a^u \ln(a) \cdot u'$
* Derivative of secant: $\frac{d}{dx}[\sec(u)] = \sec(u)\tan(u) \cdot u'$

###### Step 2: Differentiate using the Chain Rule
Let the exponent be the inner function. Differentiating from the outside inward:
$$y' = 2^{\sec(5x)} \cdot \ln(2) \cdot \frac{d}{dx}[\sec(5x)]$$

Now, differentiate the secant layer, keeping its inner function $5x$:
$$y' = 2^{\sec(5x)} \cdot \ln(2) \cdot \sec(5x)\tan(5x) \cdot \frac{d}{dx}[5x]$$

Differentiate the linear terms:
$$y' = 2^{\sec(5x)} \cdot \ln(2) \cdot \sec(5x)\tan(5x) \cdot 5$$

###### Final Answer for (a):
$$y' = 5\ln(2) \cdot 2^{\sec(5x)}\sec(5x)\tan(5x)$$

---

###### Part (b) $f(x)=\log_{3}(x^{2}e^{x})$

###### Step 1: Simplify using logarithm properties first
Before taking the derivative, expand the logarithm to make the calculus much easier:
$$f(x) = \log_{3}(x^2) + \log_{3}(e^x)$$
$$f(x) = 2\log_{3}(x) + x\log_{3}(e)$$

###### Step 2: Identify the derivative rule
* $\frac{d}{dx}[\log_a(x)] = \frac{1}{x\ln(a)}$

###### Step 3: Differentiate each term
$$f'(x) = 2 \cdot \frac{1}{x\ln(3)} + 1 \cdot \log_{3}(e)$$

Using the change of base formula, we can rewrite $\log_{3}(e)$ as $\frac{1}{\ln(3)}$:
$$f'(x) = \frac{2}{x\ln(3)} + \frac{1}{\ln(3)}$$

###### Step 4: Find a common denominator to simplify
$$f'(x) = \frac{2 + x}{x\ln(3)}$$

###### Final Answer for (b):
$$f'(x) = \frac{x+2}{x\ln(3)}$$

---

###### Part (c) $f(x)=\sqrt{x^{2}+1}\csc^{-1}x$

###### Step 1: Apply the Product Rule
The function is a product of $u = (x^2+1)^{\frac{1}{2}}$ and $v = \csc^{-1}x$.
Recall the Product Rule: $f'(x) = u'v + uv'$

###### Step 2: Find the individual derivatives
* $u' = \frac{1}{2}(x^2+1)^{-\frac{1}{2}} \cdot (2x) = \frac{x}{\sqrt{x^2+1}}$
* $v' = -\frac{1}{|x|\sqrt{x^2-1}}$

###### Step 3: Combine using the Product Rule
$$f'(x) = \left(\frac{x}{\sqrt{x^2+1}}\right)\csc^{-1}x + \left(\sqrt{x^2+1}\right)\left(-\frac{1}{|x|\sqrt{x^2-1}}\right)$$

###### Final Answer for (c):
$$f'(x) = \frac{x\csc^{-1}x}{\sqrt{x^2+1}} - \frac{\sqrt{x^2+1}}{|x|\sqrt{x^2-1}}$$

---

###### Part (d) $h(x)=\ln\left(\frac{x^{2}-x}{x^{2}+2x}\right)$

###### Step 1: Simplify the argument and use log properties
First, factor out $x$ in the numerator and denominator to simplify the fraction:
$$\frac{x^2-x}{x^2+2x} = \frac{x(x-1)}{x(x+2)} = \frac{x-1}{x+2} \quad (\text{for } x \neq 0)$$

Rewrite the function:
$$h(x) = \ln\left(\frac{x-1}{x+2}\right)$$

Now expand the expression using log laws:
$$h(x) = \ln(x-1) - \ln(x+2)$$

###### Step 2: Differentiate term by term
Apply the natural log rule $\frac{d}{dx}[\ln(u)] = \frac{u'}{u}$:
$$h'(x) = \frac{1}{x-1} - \frac{1}{x+2}$$

###### Step 3: Find a common denominator and simplify
$$h'(x) = \frac{(x+2) - (x-1)}{(x-1)(x+2)}$$
$$h'(x) = \frac{x + 2 - x + 1}{(x-1)(x+2)}$$

###### Final Answer for (d):
$$h'(x) = \frac{3}{(x-1)(x+2)}$$

### Regroup 3
- Verify calculations and mathematical reasoning.

### Synthesis Wrap-up
- Core takeaways from Session 08 and overview of homework Knewton: *The Chain Rule
Derivatives of Exponential Functions
Derivatives of Log and Exponential Functions*.
