# Skill 2: Applying the Net Change Theorem

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
