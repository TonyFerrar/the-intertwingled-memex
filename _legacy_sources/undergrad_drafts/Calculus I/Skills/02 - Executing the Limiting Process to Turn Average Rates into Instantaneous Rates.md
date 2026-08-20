# Calculus I Mastery: Skill 3
## Executing the "Limiting Process" to Turn Average Rates into Instantaneous Rates

This skill represents the core mechanical transition from algebra to differential calculus. You must master taking a static rate calculated over a wide interval and applying a shrinking limit process ($\Delta x \to 0$) to uncover real-time, instantaneous measurements.

---

### 1. Conceptual Framework

In algebra, you learned to find the constant slope of a straight line. In calculus, curves change direction constantly. To evaluate how fast a function is changing at one singular instant, we must use a limit.

#### The Mathematical Engine
1. **Average Rate of Change:** Measures the change across a real, measurable interval between two distinct points $P(x_1, y_1)$ and $Q(x_2, y_2)$. Geometrically, this forms a **secant line** cutting through the curve
   $$\text{Average Rate of Change} = \frac{\Delta y}{\Delta x} = \frac{f(x_2) - f(x_1)}{x_2 - x_1} = \frac{y_2 - y_1}{x_2 - x_1}$$

2. **Instantaneous Rate of Change:** Measures the rate of change at one specific point ($x_0$). Geometrically, this forms a **tangent line** that brushes past the curve, sharing its exact direction at that exact spot

#### The Connection via Limits
We cannot evaluate an instantaneous rate simply by setting the interval length ($h$) to zero because division by zero is mathematically impossible:
$$\text{Instantaneous Rate} = \frac{f(x_0 + 0) - f(x_0)}{0} = \frac{0}{0} \quad \text{(Undefined Error)}$$

Instead, we find the instantaneous rate of change by computing the **limit** of the secant slopes as the interval distance ($h$) gets infinitely small and approaches zero:
$$\text{Instantaneous Rate} = \lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h}$$



---

### 2. Guided Note Concepts & Explanations

#### Moving Point Analysis
To visualize this concept, imagine fixing a point $P$ on a curve and choosing a second point $Q$ further along the curve. 
* Compute the slope of the secant line passing through $P$ and $Q$.
* Slide point $Q$ along the curve toward point $P$. 
* As the distance shrinks, the secant lines rotate and align with the tangent line at $P$.
* The sequence of secant slopes ($m_{PQ}$) approaches a unique number, which is the exact slope of the tangent line ($m_P$).

---

### 3. Step-by-Step Example Problems from the Notes

#### Example A: [[Calculating Average Rate of Change]]

---

#### Example B: [[The Shifting Interval Process (Kinematics)]]
