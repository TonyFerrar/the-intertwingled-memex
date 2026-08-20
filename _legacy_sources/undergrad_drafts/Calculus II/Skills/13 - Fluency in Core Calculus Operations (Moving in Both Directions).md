# Skill 2: Fluency in Core Calculus Operations (Moving in Both Directions)

## Conceptual Notes

Once you have successfully used the LIATE rule to assign your $u$ and $dv$ variables, the setup phase is over, and the execution phase begins. The core mechanics of the integration by parts formula—$\int u \, dv = uv - \int v \, du$ —demand that you execute two entirely opposite calculus operations simultaneously:

1. 
**Differentiating $u$** to find the differential $du$ ($u = f(x) \implies du = f'(x)dx$). This is a "forward" operation that tears a function down into its rate of change.


2. 
**Integrating $dv$** to find the function $v$ ($v = \int g'(x)dx$). This is a "backward" operation that builds a component function up from its rate of change.



```
                       ┌───────[ u ]───────┐
                       │   Differentiate   │
                       ▼                   ▼
                     [ du ]              [  v ]
                       ▲                   ▲
                       │     Integrate     │
                       └──────[ dv ]───────┘

```

### The Two Most Common Friction Points

* **Trigonometric Sign Reversals:** The most common mistakes are simple sign errors caused by switching back and forth between derivatives and antiderivatives. For example, the derivative of $\cos x$ is $-\sin x$ , but the integral of $\cos x$ is $+\sin x$. Forgetting which direction you are moving mid-problem will completely derail your signs.


* **Inner Linear Adjustments (The Quick Chain Rule):** When integrating terms like $dv = e^{-3x} \, dx$ or $dv = \cos(2x) \, dx$, you must account for the inner linear constant. Instead of multiplying by the constant (like you do in differentiation), you must divide by it (e.g., $v = -\frac{1}{3}e^{-3x}$ or $v = \frac{1}{2}\sin(2x)$).

As noted in your guided materials, you can safely ignore the constant of integration ($+C$) during this intermediate step and simply apply a single $+C$ at the very end of the final integration process.

---

## Sample Problems

### Sample Problem 1: Navigating Bidirectional Trigonometric Signs

**Evaluate:** 

$$\int x \cos(3x) \, dx$$

**Solution:**

1. **Identify and Separate:** Using LIATE, Algebraic ($x$) outranks Trigonometric ($\cos(3x)$).
* **Differentiate $u$:** $u = x \implies du = dx$
* **Integrate $dv$:** $dv = \cos(3x) \, dx \implies v = \frac{1}{3}\sin(3x)$ *(Note the division by 3 due to the inner linear term)*


2. **Assemble the Parts:**

$$\int x \cos(3x) \, dx = (x)\left(\frac{1}{3}\sin(3x)\right) - \int \left(\frac{1}{3}\sin(3x)\right) \, dx$$


3. **Execute Final Integration:** Now, integrate $\sin(3x)$. Remember, the integral of $\sin(x)$ is $-\cos(x)$, which will create a double negative:

$$\int x \cos(3x) \, dx = \frac{1}{3}x\sin(3x) - \frac{1}{3} \left(-\frac{1}{3}\cos(3x)\right) + C$$


$$\int x \cos(3x) \, dx = \frac{1}{3}x\sin(3x) + \frac{1}{9}\cos(3x) + C$$



### Sample Problem 2: Handling Fractional Exponents

**Evaluate:** 

$$\int \sqrt{x} \ln x \, dx$$

**Solution:**

1. **Identify and Separate:** Logarithmic ($\ln x$) outranks Algebraic ($\sqrt{x} = x^{1/2}$).
* **Differentiate $u$:** $u = \ln x \implies du = \frac{1}{x} \, dx$
* **Integrate $dv$:** $dv = x^{1/2} \, dx \implies v = \frac{2}{3}x^{3/2}$ *(Using the power rule for integration)*


2. **Assemble the Parts:**

$$\int \sqrt{x} \ln x \, dx = \left(\ln x\right)\left(\frac{2}{3}x^{3/2}\right) - \int \left(\frac{2}{3}x^{3/2}\right)\left(\frac{1}{x} \, dx\right)$$


3. **Simplify and Execute:** Algebraically clean up the remaining integral before integrating. Remember that $\frac{x^{3/2}}{x} = x^{1/2}$:

$$\int \sqrt{x} \ln x \, dx = \frac{2}{3}x^{3/2}\ln x - \frac{2}{3}\int x^{1/2} \, dx$$


$$\int \sqrt{x} \ln x \, dx = \frac{2}{3}x^{3/2}\ln x - \frac{2}{3}\left(\frac{2}{3}x^{3/2}\right) + C$$


$$\int \sqrt{x} \ln x \, dx = \frac{2}{3}x^{3/2}\ln x - \frac{4}{9}x^{3/2} + C$$



---

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Aerospace Propulsion (Turbine Blade Balancing)]]
[[Aerospace Propulsion (Turbine Blade Balancing) Solution]]

### Engineering Problem 2: [[Electrical Engineering (Surge Protector Thermal Dissipation)]]
[[Electrical Engineering (Surge Protector Thermal Dissipation) Solution]]
