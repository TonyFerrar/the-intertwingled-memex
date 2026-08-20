## Calculus I Mastery: Skill 2 Algebraic Manipulation and Fluency with the Difference Quotient

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