# Parametric Curves: Skill 2 – Graphing and Tracking Orientation

## Topic Overview: The "Movie Reel"

If eliminating the parameter tells you the overall geometric *shape* of a curve, tracking orientation tells you the *story* of how that curve is drawn. Standard Cartesian functions (like $y = x^2$) are just static shapes on a page. Parametric equations, however, possess a dynamic quality: they show a point moving through space as the parameter (usually $t$ for time) changes. 

This movement has a specific direction, known as the curve's **orientation**. 

### How to Graph and Track Orientation
To fully understand a parametric curve, you need to map out where the particle is at specific moments.

1.  **Create a Parameter Table:**
    *   Set up a table with columns for $t$, $x$, and $y$.
    *   Choose a sequence of sequential values for $t$ within the given domain (e.g., $t = -2, -1, 0, 1, 2$).
2.  **Calculate Coordinates:**
    *   Plug each $t$-value into the given $x(t)$ and $y(t)$ equations to generate coordinate pairs $(x, y)$.
3.  **Plot Chronologically:**
    *   Plot the $(x, y)$ points on a Cartesian plane in the order of increasing $t$.
4.  **Draw and Indicate Direction:**
    *   Connect the plotted points with a smooth curve.
    *   **Crucial Step:** Draw arrows along the curve pointing in the direction of the movement as $t$ increases. This visually represents the positive orientation.

---

## Sample Problems (Linear and Non-Linear Paths)

### Sample Problem 1: Linear Motion
**Given:** $x = 1 + 2t$ and $y = 3 - t$ for $-1 \le t \le 3$.
**Goal:** Sketch the curve and indicate its orientation.

**Step 1 & 2: Create a table and calculate points.**

| $t$ | $x = 1 + 2t$ | $y = 3 - t$ | Point $(x,y)$ |
|:---:|:------------:|:-----------:|:-------------:|
| -1  | $1 + 2(-1) = -1$ | $3 - (-1) = 4$ | $(-1, 4)$ |
|  0  | $1 + 2(0) = 1$  | $3 - (0) = 3$  | $(1, 3)$  |
|  1  | $1 + 2(1) = 3$  | $3 - (1) = 2$  | $(3, 2)$  |
|  2  | $1 + 2(2) = 5$  | $3 - (2) = 1$  | $(5, 1)$  |
|  3  | $1 + 2(3) = 7$  | $3 - (3) = 0$  | $(7, 0)$  |

**Step 3 & 4: Plot and track orientation.**
*Conclusion: The graph is a line segment starting exactly at $(-1, 4)$ and ending at $(7, 0)$. Arrows should be drawn along the line pointing down and to the right, showing the direction of travel as time progresses from $t = -1$ to $t = 3$.*

### Sample Problem 2: Circular Motion
**Given:** $x = 3\cos(t)$ and $y = 3\sin(t)$ for $0 \le t \le \pi$.
**Goal:** Sketch the curve and indicate its orientation.

**Step 1 & 2: Create a table using key angles.**

| $t$ | $x = 3\cos(t)$ | $y = 3\sin(t)$ | Point $(x,y)$ |
|:---:|:--------------:|:--------------:|:-------------:|
|  0  | $3(1) = 3$     | $3(0) = 0$     | $(3, 0)$      |
| $\pi/2$| $3(0) = 0$     | $3(1) = 3$     | $(0, 3)$      |
| $\pi$  | $3(-1) = -3$   | $3(0) = 0$     | $(-3, 0)$     |

**Step 3 & 4: Plot and track orientation.**
*Conclusion: The graph is the top half of a circle centered at the origin with radius 3. The orientation arrows must point in a counter-clockwise direction, starting from the right $x$-axis at $(3,0)$ and ending on the left $x$-axis at $(-3,0)$.*

---

## Engineering Application Problems

### Application 1: [[Rolling Mechanical Systems (Automotive Wiper Design)]]
[[Rolling Mechanical Systems (Automotive Wiper Design) Solution]]


---

### Application 2: [[Time-Dependent Trajectory Analysis (CNC Machining)]]
[[Time-Dependent Trajectory Analysis (CNC Machining) Solution]]
