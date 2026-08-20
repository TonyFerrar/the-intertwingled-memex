## Solution

This problem compares two foundational types of 2D vector fields: **radial** and **rotational**.

---

### Field A: Radial Field 
$$F(x,y) = \langle x, y \rangle$$

#### Mathematical Analysis
* **Direction:** At any point $(x, y)$, the vector points in the exact same direction as the position vector from the origin. This means every vector points directly **away from the origin**.
* **Magnitude:** $\|F(x,y)\| = \sqrt{x^2 + y^2}$, which is the distance from the origin. The further you move away from $(0,0)$, the longer the arrows become.
* **Physical Example:** Explosion debris moving outward, or light radiating from a source.

---

### Field B: Rotational Field
$$G(x,y) = \langle -y, x \rangle$$

#### Mathematical Analysis
* **Direction:** Take the dot product of the position vector $\langle x,y \rangle$ and the field vector $\langle -y,x \rangle$:
  $$\langle x, y \rangle \cdot \langle -y, x \rangle = -xy + yx = 0$$
  Because the dot product is $0$, the vectors are always **perpendicular (orthogonal)** to the position vector, causing them to point **counterclockwise** along concentric circles centered at the origin.
* **Magnitude:** $\|G(x,y)\| = \sqrt{(-y)^2 + x^2} = \sqrt{x^2 + y^2}$. Just like the radial field, the strength increases linearly with distance from the origin.
* **Physical Example:** A whirlpool, a spinning hurricane, or a rigid rotating disk.

---

### Plotting Both Fields Using Python (Software)

You can copy and run this code using Python with the `matplotlib` and `numpy` libraries to visualize both fields simultaneously:

```python
import numpy as np
import matplotlib.pyplot as plt

# Create a grid of points
x = np.linspace(-3, 3, 15)
y = np.linspace(-3, 3, 15)
X, Y = np.meshgrid(x, y)

# Define the vector fields
U_A, V_A = X, Y           # Field A: <x, y>
U_B, V_B = -Y, X          # Field B: <-y, x>

# Plotting
fig, ax = plt.subplots(1, 2, figsize=(12, 5))

# Plot Radial Field
ax[0].quiver(X, Y, U_A, V_A, color='crimson', angles='xy', scale_units='xy', scale=4)
ax[0].set_title(r"Radial Field: $F(x,y) = \langle x, y \rangle$")
ax[0].set_xlim([-3.5, 3.5])
ax[0].set_ylim([-3.5, 3.5])
ax[0].grid(True)
ax[0].set_aspect('equal')

# Plot Rotational Field
ax[1].quiver(X, Y, U_B, V_B, color='royalblue', angles='xy', scale_units='xy', scale=4)
ax[1].set_title(r"Rotational Field: $G(x,y) = \langle -y, x \rangle$")
ax[1].set_xlim([-3.5, 3.5])
ax[1].set_ylim([-3.5, 3.5])
ax[1].grid(True)
ax[1].set_aspect('equal')

plt.tight_layout()
plt.show()

```
## Graphs 
<iframe src="https://www.desmos.com/calculator/mxlstduzrl?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>

<iframe src="https://www.desmos.com/calculator/tse4sy2uq7?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>