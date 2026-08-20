# Skill 1: Computing Partial Derivatives (2 or 3 Variables)

## Topic Overview & Essential Notes

In single-variable calculus, the derivative $\frac{df}{dx}$ measures the instantaneous rate of change of a function $f(x)$ as the single independent variable $x$ changes. In multivariable calculus, functions depend on two or more independent variables (e.g., $f(x,y)$ or $f(x,y,z)$). Because these variables can change independently, we use **partial derivatives** to measure the rate of change with respect to _one variable at a time_.

### The Core Rule of Partial Differentiation

To find the partial derivative of a multivariable function with respect to a specific variable, **differentiate with respect to that variable while treating all other variables as if they are constant coefficients.**

### Notation

The partial derivative of a function $f(x,y)$ with respect to $x$ can be written in several equivalent ways:

$$\frac{\partial f}{\partial x} = \frac{\partial}{\partial x}[f(x,y)] = f_x(x,y) = f_x$$

Similarly, with respect to $y$:

$$\frac{\partial f}{\partial y} = \frac{\partial}{\partial y}[f(x,y)] = f_y(x,y) = f_y$$

### Essential Formulas & Calculus Rules

Because non-differentiated variables are treated as constants, all standard rules from single-variable calculus apply exactly the same way:

- **Linearity:** $\frac{\partial}{\partial x}(af + bg) = a \frac{\partial f}{\partial x} + b \frac{\partial g}{\partial x}$
    
- **Product Rule:** $\frac{\partial}{\partial x}(uv) = \frac{\partial u}{\partial x}v + u\frac{\partial v}{\partial x}$
    
- **Quotient Rule:** $\frac{\partial}{\partial x}\left(\frac{u}{v}\right) = \frac{\frac{\partial u}{\partial x}v - u\frac{\partial v}{\partial x}}{v^2}$
    
- **Chain Rule:** $\frac{\partial}{\partial x}[f(g(x,y))] = f'(g(x,y)) \cdot \frac{\partial g}{\partial x}$
    

## Guided Notes Sample Problems

### Sample Problem 1: Differentiating with respect to $x$

Compute $\frac{\partial f}{\partial x}$ for the function:

$$f(x,y) = \frac{x^{2}y + \sin(xy)}{y^{2} + 1}$$

#### Solution:

When differentiating with respect to $x$, the entire denominator $(y^2 + 1)$ treats entirely as a constant multiplier. We can pull it out to the front:

$$\frac{\partial f}{\partial x} = \frac{1}{y^{2} + 1} \cdot \frac{\partial}{\partial x}\left[x^{2}y + \sin(xy)\right]$$

Now, we differentiate the numerator terms individually with respect to $x$ (treating $y$ as a constant coefficient):

1. The derivative of $x^2y$ with respect to $x$ is $2xy$.
    
2. The derivative of $\sin(xy)$ with respect to $x$ requires the chain rule: $\cos(xy) \cdot \frac{\partial}{\partial x}(xy) = \cos(xy) \cdot y$.
    

Combining these components:

$$\frac{\partial f}{\partial x} = \frac{1}{y^{2} + 1} \left(2xy + y\cos(xy)\right)$$

$$\frac{\partial f}{\partial x} = \frac{2xy + y\cos(xy)}{y^{2} + 1}$$

### Sample Problem 2: Differentiating with respect to $y$

Compute $\frac{\partial f}{\partial y}$ for the same function:

$$f(x,y) = \frac{x^{2}y + \sin(xy)}{y^{2} + 1}$$

#### Solution:

Because $y$ appears in both the numerator and the denominator, we must apply the **Quotient Rule**: $\frac{u'v - uv'}{v^2}$.

Let the numerator be $u = x^2y + \sin(xy)$ and the denominator be $v = y^2 + 1$.

1. **Find $\frac{\partial u}{\partial y}$ (treating $x$ as a constant):**
    
    - The derivative of $x^2y$ with respect to $y$ is $x^2$.
        
    - The derivative of $\sin(xy)$ with respect to $y$ uses the chain rule: $\cos(xy) \cdot \frac{\partial}{\partial y}(xy) = \cos(xy) \cdot x$.
        
    - Therefore, $\frac{\partial u}{\partial y} = x^2 + x\cos(xy)$.
        
2. **Find $\frac{\partial v}{\partial y}$:**
    
    - The derivative of $y^2 + 1$ with respect to $y$ is $2y$.
        

Now, substitute $u$, $v$, and their partial derivatives into the quotient rule formula:

$$\frac{\partial f}{\partial y} = \frac{\left(x^{2} + x\cos(xy)\right)(y^{2} + 1) - \left(x^{2}y + \sin(xy)\right)(2y)}{(y^{2} + 1)^{2}}$$

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Aerospace & Thermodynamics (Heat Flux)]]
[[Aerospace & Thermodynamics (Heat Flux) Solution]]


### Engineering Problem 2: [[Fluid Mechanics & Chemical Pipelines (Velocity Profile)]]
[[Fluid Mechanics & Chemical Pipelines (Velocity Profile) Solution]]
