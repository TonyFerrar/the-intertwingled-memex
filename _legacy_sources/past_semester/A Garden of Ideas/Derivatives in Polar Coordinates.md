
# Derivatives in Polar Coordinates

**Introduction and Real-World Uses**
In calculus, taking the derivative allows us to find the exact slope of a tangent line to a curve at any given point. In applied sciences, understanding the tangent line of a radial path is vital. For example, civil engineers rely on these derivatives when calculating curve banking (superelevation) to ensure vehicles can safely navigate highway turns without losing traction. It is also critical for analyzing the directional trajectory of an object the moment it breaks free from a circular orbit.

**Finding the Derivative ($dy/dx$) in Polar Coordinates**
Because polar curves are typically expressed as a function of the angle, $r = f(\theta)$, we cannot directly take a standard $dy/dx$ derivative. Instead, we treat the polar curve as a set of parametric equations. By substituting the function $r = f(\theta)$ into our standard conversion formulas, we define $x$ and $y$ strictly in terms of $\theta$:

- $x = f(\theta)\cos\theta$
- $y = f(\theta)\sin\theta$

To find the slope of the tangent line ($dy/dx$), we use the chain rule to divide the derivative of $y$ by the derivative of $x$: $\frac{dy}{dx} = \frac{dy/d\theta}{dx/d\theta}$.

## **Worked Example: Finding the Slope of a Cardioid** 
_Question:_ Find the general derivative formula $\frac{dy}{dx}$ for the cardioid defined by $r = 1 + \sin\theta$.

- First, set up your parametric equations by substituting $r$ into the conversion formulas: $x = (1 + \sin\theta)\cos\theta$ and $y = (1 + \sin\theta)\sin\theta$.
- Find $dy/d\theta$ using the product rule: $\frac{dy}{d\theta} = \cos\theta(\sin\theta) + (1 + \sin\theta)(\cos\theta) = \cos\theta(1 + 2\sin\theta)$.
- Find $dx/d\theta$ using the product rule: $\frac{dx}{d\theta} = \cos\theta(\cos\theta) - \sin\theta(1 + \sin\theta) = \cos^2\theta - \sin\theta - \sin^2\theta$.
- Simplify $dx/d\theta$ by substituting $\cos^2\theta$ with $1 - \sin^2\theta$: $1 - \sin^2\theta - \sin\theta - \sin^2\theta = 1 - \sin\theta - 2\sin^2\theta$, which factors neatly to $(1 + \sin\theta)(1 - 2\sin\theta)$.
- _Answer:_ Combine the two parts to find the final slope equation: $\frac{dy}{dx} = \frac{\cos\theta(1 + 2\sin\theta)}{(1 + \sin\theta)(1 - 2\sin\theta)}$.

