# Skill 2: Notation Agility & Core Function Differentiation

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