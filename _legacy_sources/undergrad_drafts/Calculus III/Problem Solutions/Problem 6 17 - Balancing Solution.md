## Solution: Problem 2.2

### Classification of the Vector Fields

#### 1. $H(x,y) = \langle -x, y \rangle$
* **Classification:** **Saddle / Hyperbolic Field** (Neither strictly radial nor rotational)
* **Behavior:** Along the $x$-axis ($y=0$), vectors point inward toward the origin because $P = -x$. Along the $y$-axis ($x=0$), vectors point outward away from the origin because $Q = y$. This creates a classic "saddle point" flow where fluid/particles are pulled in from the sides and pushed out from the top and bottom.

#### 2. $J(x,y) = \langle e^x, e^y \rangle$
* **Classification:** **Asymmetric Outward Flow / Exponential Growth Field** (Neither strictly radial nor rotational)
* **Behavior:** All vectors point strictly into the first quadrant because $e^x > 0$ and $e^y > 0$ for all real numbers. The magnitude grows exponentially as you move to the top right, while vectors become microscopic as you move into the third quadrant (bottom-left).

#### 3. $K(x,y) = \langle -\sin y, \cos x \rangle$
* **Classification:** **Periodic / Vortex Grid Field** (Primarily Rotational)
* **Behavior:** Because of the trigonometric functions, the field is periodic along both axes. It creates a repeating grid pattern of clockwise and counter-clockwise swirling vortices (circulations) across the plane.

---

### Software Plot Code (Python)

You can copy and run this script to generate side-by-side plots of all three vector fields:

```python
import numpy as np
import matplotlib.pyplot as plt

# Generate grid points
x = np.linspace(-3, 3, 15)
y = np.linspace(-3, 3, 15)
X, Y = np.meshgrid(x, y)

# Define fields
U1, V1 = -X, Y                # H(x,y) = <-x, y>
U2, V2 = np.exp(X), np.exp(Y) # J(x,y) = <e^x, e^y>
U3, V3 = -np.sin(Y), np.cos(X) # K(x,y) = <-sin y, cos x>

fig, ax = plt.subplots(1, 3, figsize=(18, 5))

# Plot Field 1
ax[0].quiver(X, Y, U1, V1, color='crimson', angles='xy', scale_units='xy', scale=3)
ax[0].set_title(r"$H(x,y) = \langle -x, y \rangle$ (Saddle)")
ax[0].grid(True)
ax[0].set_aspect('equal')

# Plot Field 2
ax[1].quiver(X, Y, U2, V2, color='royalblue', angles='xy', scale=8)
ax[1].set_title(r"$J(x,y) = \langle e^x, e^y \rangle$ (Exponential)")
ax[1].grid(True)
ax[1].set_aspect('equal')

# Plot Field 3
ax[2].quiver(X, Y, U3, V3, color='forestgreen', angles='xy', scale_units='xy', scale=2)
ax[2].set_title(r"$K(x,y) = \langle -\sin y, \cos x \rangle$ (Vortex Grid)")
ax[2].grid(True)
ax[2].set_aspect('equal')

plt.tight_layout()
plt.show()
```

## Graphs 

<iframe src="https://www.desmos.com/calculator/6lchqlmly5?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>

<iframe src="https://www.desmos.com/calculator/jj1qbg1nsz?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>

<iframe src="https://www.desmos.com/calculator/6gkgcwkzua?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>

