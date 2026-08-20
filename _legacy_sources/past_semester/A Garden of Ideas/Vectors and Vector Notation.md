# Vectors and Vector Notation

> [!info]+ Essential Formulas
> **Vectors:**
> - $\vec{v} = \langle v_x, v_y, v_z\rangle = v_x\hat{i} + v_y\hat{j} + v_z\hat{k}$
> 
> **Magnitude:**
> - $|\vec{v}|=\sqrt{v_x^2+v_y^2+v_z^2}$
> 
> **Unit Vectors:**
> - $\hat{U}_v=\dfrac{v_x}{|\vec{v}|}\hat{i}+\dfrac{v_y}{|\vec{v}|}\hat{j}+\dfrac{v_z}{|\vec{v}|}\hat{k}$

## Defining a Vector

A Vector is a quantity that has both a **direction** as well as a **magnitude**
- The **direction** is where the quantity is going.
- The **magnitude** is the size of the quantity - essentially how much of a quantity you have.

Taking force as an example, you can have a force of **30 Newtons** (the magnitude) acting **to the left** (the direction).

Some quantities can be measured but may not have a direction associated with them. Quantities that have a magnitude but lack a direction are called  **Scalars** (the vast majority of quantities you've encountered until now).

### Examples of Vectors and Scalars
| Scalar Quantities | Vector Quantities |
| ----------------- | ----------------- |
| Distance          | Displacement      |
| Speed             | Velocity          |
| Energy            | Acceleration      |
| Time              | Force             |
| Temperature       | Pressure          |
| Mass              | Momentum          |

## Vector Notation

In texts, there are multiple ways to show that a quantity is a vector. Two main methods are
1. Boldface notation $\mathbf{v}$
2. Arrowhead notation $\vec{v}$
 
Either of these are valid means of referring to a vector. It is difficult to write in **bold** by hand, so we tend to use the arrowhead notation when writing vectors with pencil and paper.

## Graphing Vectors
Vectors are drawn as an arrow where the length corresponds to the magnitude of the vector. Using this principle, the vector can be split into horizontal and vertical components where $\vec{v}$ is the vector, $v_x$ describes how far the vector travels along the $x$-axis, and similarly, $v_y$ describes how far the vector travels along the $y$-axis. 

$$
\vec{v} = \langle v_x, v_y\rangle
$$

![[2D Vector Components.png]]

This notation can also be expanded into 3 dimensions when dealing with vectors in 3D:

$$
\vec{v} = \langle v_x, v_y, v_z\rangle
$$
### Magnitude of a Vector
Note: vectors can be represented as a right triangle. The Pythagorean theorem can be used in order to represent the magnitude of a vector.
$$
|\vec{v}| = \sqrt{v_x^2+ v_y^2+ v_z^2}
$$

> [!warning]- Important Note
> The same formula works for 2D vectors. Set the $z$ component to zero.

<div style="page-break-after: always;"></div>

---
### Demo Problem S2.1:

1. Given the points $P_1=(2, 3)$ and $P_2=(4, 4)$, find the vector $\vec{P}$ that lies between these two points.
2. Draw the vector on a 2D graph.
3. Find the Magnitude, $||\vec{P}||$.

%%
> [!Success]- Demo Solution
> **Part 1:**
> Since the vector components will represent the total displacement between two points, then the vector components will be determined by the following:
> $$
> P_x=P_{2x}-P_{1x},\quad P_y=P_{2y}-P_{1y}
> $$
> Therefore, the vector should look like the following:
> $$
> \boxed{\vec{P}=P_x\hat{i}+P_y\hat{j}=2\hat{i}+1\hat{j}}
> $$
> **Part 3:**
> Since the components are now known, the magnitude can be solved for using the following equation:
> $$
> ||\vec{P}||=\sqrt{P_x^2+P_y^2}
> $$
> Therefore, the magnitude will be:
> $$
> \boxed{||\vec{P}|| = \sqrt{5}}
> $$

%%
<div style="page-break-after: always;"></div>

---
### Problem S2.2:

Given the vector, $\langle1, -3\rangle$:
1. Draw the vector starting from the origin
2. Find the magnitude of the vector
%%
> [!Success]- Problem 2.1 Solution
> Insert Solutions Here

%%
<div style="page-break-after: always;"></div>

---
### Problem S2.3:

The tension force from a cable acts along the vector $\vec{F}=\langle250, 100, 500\rangle$
1. Draw the vector starting from the origin
2. Find the magnitude of the tension force acting along the cable
%%
> [!Success]- Problem 2.1 Solution
> Insert Solutions Here

%%
<div style="page-break-after: always;"></div>


![[Empty 3D Plot.png|500]]

___
### Problem S2.4:

Given a vector with magnitude $|\vec{V}|=7$ anchored at the origin making a $30^{\circ}$ angle with the $x$-axis, Determine the horizontal and vertical components of the vector $\vec{V}$. Note: $\cos(30\degree)=\sqrt{3}/2$ and $\sin(30\degree)=1/2$.
%%
> [!Success]- Problem 2.2 Solution
> Insert Solutions Here

%%