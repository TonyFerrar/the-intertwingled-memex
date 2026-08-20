## Solution: Problem 3

### Part 1: Evaluate $F(0, \frac{\pi}{2})$ and Interpret
Given the 2D vector field:
$$F(x,y) = \langle e^x \cos y, e^x \sin y \rangle$$

To evaluate the field at the specific point $(x, y) = (0, \frac{\pi}{2})$, substitute $x = 0$ and $y = \frac{\pi}{2}$ into the component functions:

* **$P(0, \frac{\pi}{2})$ component:** $e^0 \cos(\frac{\pi}{2}) = 1 \cdot 0 = 0$
* **$Q(0, \frac{\pi}{2})$ component:** $e^0 \sin(\frac{\pi}{2}) = 1 \cdot 1 = 1$

$$F(0, \frac{\pi}{2}) = \langle 0, 1 \rangle$$

#### Interpretation
At the point $(0, \frac{\pi}{2})$ on the Cartesian plane, the vector field points exactly straight up in the positive $y$-direction (along the unit vector $\hat{j}$) with a magnitude of exactly $1$ unit.

---

### Part 2: Evaluate $G(1, \frac{\pi}{6})$ and $\|G(1, \frac{\pi}{6})\|$
Given the 2D vector field:
$$G(x,y) = \langle e^{-x^2}, \sin y \rangle$$

**Step A: Evaluate the vector field at $(1, \frac{\pi}{6})$**
Substitute $x = 1$ and $y = \frac{\pi}{6}$ into the component functions:

* **$P(1, \frac{\pi}{6})$ component:** $e^{-(1)^2} = e^{-1} = \frac{1}{e}$
* **$Q(1, \frac{\pi}{6})$ component:** $\sin(\frac{\pi}{6}) = \frac{1}{2}$

$$G(1, \frac{\pi}{6}) = \langle e^{-1}, \frac{1}{2} \rangle = \langle \frac{1}{e}, \frac{1}{2} \rangle$$

**Step B: Find the magnitude $\|G(1, \frac{\pi}{6})\|$**
Use the Euclidean norm formula:

$$\|G(1, \frac{\pi}{6})\| = \sqrt{\left(\frac{1}{e}\right)^2 + \left(\frac{1}{2}\right)^2}$$
$$\|G(1, \frac{\pi}{6})\| = \sqrt{\frac{1}{e^2} + \frac{1}{4}}$$