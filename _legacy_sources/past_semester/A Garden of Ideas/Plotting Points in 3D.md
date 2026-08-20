# Plotting Points in 3D

> [!info]+ Essential Formulas
> **Points in 3D:**
> $$P = (x, y, z)$$
> **Distance in 3D**
> $$ d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2+(z_2-z_1)^2}$$

## How to Describe Points in 3D

In 2 Dimensions, points on a graph are described by their $x$ and $y$ coordinates along the $x-y$ plane. In 3 dimensions there is a third axis to take into account, the $z$ axis which points orthogonal to the $x-y$ plane.

- **Points in 2D:** $P = (x, y)$
- **Points in 3D:**  $P = (x, y, z)$

$x$, $y$, and $z$ describe the position along the 3 axes.

## Axes in 3 Dimensions
3 dimensional coordinate systems follow a convention called the **[[Right Hand Rule]]**.

![[Right Hand Rule.jpeg]]
(Courtesy [Stack Overflow](https://stackoverflow.com/questions/19747082/how-does-coordinate-system-handedness-relate-to-rotation-direction-and-vertices))

> [!warning]- Important Note
>For applications in this class, all 3 dimensional coordinate systems must abide by the right hand rule.

### Distance in 3D
In 2 dimensions, the formula between two points is given by a form of the [[Pythagorean Theorem]]:
$$
d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}
$$
In 3 dimensions, a $z$ component is added.
$$
d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2+(z_2-z_1)^2}
$$

<div style="page-break-after: always;"></div>

---
### Skill 1 Demo:

Establish axes in the correct orientation according to the right hand rule and plot the 3 given points:
$$
P_1 = (2, 4, 3)
$$
$$
P_2 = (0, 5, 2)
$$
$$
P_3 = (-1, -2, 3)
$$
![[Empty 3D Plot.png|500]]

%%
> [!Success]- Demo Solution
> Red is $P_1$, Blue is $P_2$, Green is $P_3$
> Solution verified using Desmos
> ![[Demo 1 Session 2 Solution.jpg|500]]

%%
<div style="page-break-after: always;"></div>

---
### Problem 1.1:

Label the axes, ensuring you follow the right hand rule. Plot the given points:
$$
A = (5, -4, 0)
$$
$$
B = (0,3, 0)
$$
$$
C = (1, 3, 2)
$$
![[Empty 3D Plot.png|500]]
%%
> [!Success]- Problem 1.1 Solution
> Red is $A$, Blue is $B$ and Green is $C$
> ![[Problem 1.1 Session 2 Solution.jpg|500]]

%%
<div style="page-break-after: always;"></div>

---
### Problem 1.2:

1. Draw your own coordinate system that follows the right hand rule.
2. Plot the following two points on your drawn coordinate system.
$$
P = (5, -2, -1)
$$
$$
Q = (-2, 4, -6)
$$
3. Find the distance between the 2 points.
%%
> [!Success]- Problem 1.2 Solution
> Solution for parts 1 & 2: Red is $P$, Blue is $Q$.
> ![[Problem 1.2 Session 2 Solution.jpg|500]]
> Solution for part 3:
> - Select $P$ as the first point, so $P = (x_1, y,_1, z_1) = (5, -2, -1)$.
> - Select $Q$ as the second point, so $Q = (x_2, y_2, z_2) = (-2, 4, -6)$.
> - Utilize the 3 dimensional distance formula, $d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2+(z_2-z_1)^2} = \sqrt{(-2-5)^2+(4+2)^2+(-6+1)^2}$.
> - After solving the equation above, $d = \sqrt{110}\approx10.49.$

%%
<div style="page-break-after: always;"></div>
