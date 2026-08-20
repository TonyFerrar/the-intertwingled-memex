---
title: "Derivatives"
type: garden
course: [[MATH-181]]
semester: Fall 2026
publish: true
updated: 2026-08-18
cssclasses: []
---

# Derivatives

> [!tip] Core Definition
> The instantaneous rate of change of a function $f(x)$ with respect to $x$. Geometrically, it is the slope of the tangent line to the curve at $x$. Formally defined as the limit of the difference quotient:
$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$

## Concept Explanation
While algebra measures average rates of change over finite intervals ($m = \frac{\Delta y}{\Delta x}$), calculus measures instantaneous rates by taking the limit as the interval $\Delta x \to 0$. If this limit exists at $x$, the function is differentiable at that point.

### Visual / Geometric Intuition
[Interactive Desmos Graph](https://www.desmos.com/calculator/derivative-tangent-placeholder)
<!-- <iframe src="https://www.desmos.com/calculator/derivative-tangent-placeholder" width="100%" height="400px" style="border: 1px solid #ccc"></iframe> -->

## Engineering Applications
Derivatives are everywhere in engineering physics. Velocity is the derivative of position ($v = \frac{ds}{dt}$), acceleration is the derivative of velocity ($a = \frac{dv}{dt}$), and electric current is the derivative of charge flow ($I = \frac{dq}{dt}$).

### Example Problem
Use the limit definition of the derivative to find $f'(x)$ for $f(x) = x^2$.

> [!workspace] Practice Space
> 

> [!check]- Solution
> Apply the limit definition:
> $$f'(x) = \lim_{h \to 0} \frac{(x+h)^2 - x^2}{h}$$
> 
> Expand the numerator:
> $$f'(x) = \lim_{h \to 0} \frac{x^2 + 2xh + h^2 - x^2}{h}$$
> 
> Simplify the terms:
> $$f'(x) = \lim_{h \to 0} \frac{2xh + h^2}{h}$$
> 
> Factor out and cancel $h$:
> $$f'(x) = \lim_{h \to 0} (2x + h)$$
> 
> Evaluate the limit as $h \to 0$:
> $$f'(x) = 2x$$

---

## Connections & References
- **Parent Concepts:** [[Continuity]]
- **Sub-concepts:** [[Chain Rule]], [[Implicit Differentiation]], [[Partial Derivatives]]
- **Course Links:** [[Courses/Calc-1/Session 06 - Rates of Change and the Definition of the Derivative|Calc-1 Session 06]]
