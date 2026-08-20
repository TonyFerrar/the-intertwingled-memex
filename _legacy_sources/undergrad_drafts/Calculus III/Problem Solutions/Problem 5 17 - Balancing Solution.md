## Solution: Problem 2.1

### Part 1: Classification of $F(x,y) = \langle x, y \rangle$
The vector field $F(x,y) = \langle x, y \rangle$ is **radial**.

* **Why:** At any coordinate $(x,y)$, the vector points in the same direction as a ray extending outwards directly from the origin.

---

### Part 2: Sketching $G(x,y) = \langle -y, x \rangle$
To sketch the vectors at the specified points, substitute each coordinate pair into the vector field definition:

| Point $(x, y)$ | Field Calculation $\langle -y, x \rangle$ | Resulting Vector | Description |
| :--- | :--- | :--- | :--- |
| **$(1, 0)$** | $\langle -(0), 1 \rangle$ | $\langle 0, 1 \rangle$ | Points straight up ($\hat{j}$) |
| **$(0, 1)$** | $\langle -(1), 0 \rangle$ | $\langle -1, 0 \rangle$ | Points straight left ($-\hat{i}$) |
| **$(-1, 0)$** | $\langle -(0), -1 \rangle$ | $\langle 0, -1 \rangle$ | Points straight down ($-\hat{j}$) |
| **$(0, -1)$** | $\langle -(-1), 0 \rangle$ | $\langle 1, 0 \rangle$ | Points straight right ($\hat{i}$) |

*If you connect these four arrows visually, they form a clear counter-clockwise circle around the origin.*

---

### Part 3: Software Plot Code (Python)

You can use the following snippet to generate a localized plot of these four points and the broader rotational movement of the field:

```python
import numpy as np
import matplotlib.pyplot as plt

# Explicit points from Part 2
pts_x = np.array([1, 0, -1, 0])
pts_y = np.array([0, 1, 0, -1])
U_pts, V_pts = -pts_y, pts_x

# Dense grid for background reference
x = np.linspace(-2, 2, 11)
y = np.linspace(-2, 2, 11)
X, Y = np.meshgrid(x, y)
U, V = -Y, X

plt.figure(figsize=(6, 6))

# Plot background field lightly
plt.quiver(X, Y, U, V, color='gainsboro', angles='xy', scale_units='xy', scale=3)

# Highlight the specific requested problem points
plt.quiver(pts_x, pts_y, U_pts, V_pts, color='indigo', angles='xy', scale_units='xy', scale=2, width=0.007)
plt.scatter(pts_x, pts_y, color='darkorange', zorder=5)

plt.title(r"Rotational Field $G(x,y) = \langle -y, x \rangle$ at Specific Points")
plt.xlim([-2.5, 2.5])
plt.ylim([-2.5, 2.5])
plt.axhline(0, color='black',linewidth=0.5)
plt.axvline(0, color='black',linewidth=0.5)
plt.grid(True, linestyle='--')
plt.gca().set_aspect('equal')
plt.show()
```



