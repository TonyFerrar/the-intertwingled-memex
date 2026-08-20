## Solution: Problem 3.1

### Part 1: Determine if $F(x,y) = \langle 2xy, x^2 \rangle$ is conservative
Given the 2D vector field components:
* $P(x,y) = 2xy$
* $Q(x,y) = x^2$

We apply the 2D cross-partial test:
$$\frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(2xy) = 2x$$
$$\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(x^2) = 2x$$

Since $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x} = 2x$, the vector field passes the cross-partial test. 

**Conclusion:** **Yes**, $F(x,y)$ is a conservative vector field.

---

### Part 2: Find $\nabla g$ for $g(x,y,z) = e^{x+y+z}$ and classify the field
Given the 3D scalar function:
$$g(x,y,z) = e^{x+y+z}$$

**Step A: Find the gradient field $\nabla g$**
The gradient vector consists of the first-order partial derivatives:
$$\nabla g = \langle \frac{\partial g}{\partial x}, \frac{\partial g}{\partial y}, \frac{\partial g}{\partial z} \rangle$$

Using the chain rule, the derivative of $e^{x+y+z}$ with respect to $x$, $y$, or $z$ remains unchanged since the inner derivative of $(x+y+z)$ with respect to each individual variable is simply $1$:
* $\frac{\partial g}{\partial x} = e^{x+y+z}$
* $\frac{\partial g}{\partial y} = e^{x+y+z}$
* $\frac{\partial g}{\partial z} = e^{x+y+z}$

$$\nabla g = \langle e^{x+y+z}, e^{x+y+z}, e^{x+y+z} \rangle = e^{x+y+z}\langle 1, 1, 1 \rangle$$

**Step B: Classify the field**
* **Conservative Status:** Because this vector field is derived directly from the gradient of a scalar function, it is **conservative** by definition.
* **Directional Behavior:** All vectors in this field point in the exact same direction along the line $x = y = z$ (parallel to the vector $\langle 1, 1, 1 \rangle$). 
* **Magnitude Behavior:** The vectors scale uniformly in magnitude purely based on the value of the scalar exponential multiplier $e^{x+y+z}$.