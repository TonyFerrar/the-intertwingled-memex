# Calc 3 Session 2
## Navigating the World in 3D
_Vectors in 2D and 3D_

> [!info] Printable PDF
> [[02 - Vectors in 2D & 3D Learning Activity.pdf]]

## 📋 Skill Roadmap for Today
- [ ] Skill 1: Plotting Points in 3D
- [ ] Skill 2: Vectors and Vector Notation
- [ ] Skill 3: Vector Arithmetic

## Essential notes & formulas
*This space is for you to use.*

<div style="page-break-after: always;"></div>

---
## Skill 1: Plotting Points in 3D

> [!info]- Skill 1 Essential Formulas
> **Points in 3D:**
> $$P = (x, y, z)$$
> **Distance in 3D**
> $$ d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2+(z_2-z_1)^2}$$

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
![[Empty 3D Plot.png|450]]
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

---
## Skill 2: Vectors

> [!info]+ Skill 2 Essential Formulas
> **Vectors:**
> - $\vec{v} = \langle v_x, v_y, v_z\rangle = v_x\hat{i} + v_y\hat{j} + v_z\hat{k}$
> 
> **Magnitude:**
> - $|\vec{v}|=\sqrt{v_x^2+v_y^2+v_z^2}$
> 
> **Unit Vectors:**
> - $\hat{U}_v=\dfrac{v_x}{|\vec{v}|}\hat{i}+\dfrac{v_y}{|\vec{v}|}\hat{j}+\dfrac{v_z}{|\vec{v}|}\hat{k}$

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


![[Empty 3D Plot.png|500]]
<div style="page-break-after: always;"></div>


___
### Problem S2.4:

Given a vector with magnitude $|\vec{V}|=7$ anchored at the origin making a $30^{\circ}$ angle with the $x$-axis, Determine the horizontal and vertical components of the vector $\vec{V}$. Note: $\cos(30\degree)=\sqrt{3}/2$ and $\sin(30\degree)=1/2$.

%%
> [!Success]- Problem 2.2 Solution
> Insert Solutions Here

%%
<div style="page-break-after: always;"></div>

---
## Skill 3: Vector Arithmetic

> [!info]+ Essential Formulas
> **Vector Addition:**
> $$\vec{P}=\langle P_x,\, P_y,\, P_z\rangle,\quad \vec{Q}=\langle Q_x,\, Q_y,\, Q_z\rangle$$
> $$\quad \Rightarrow \quad \vec{P}+\vec{Q}=\langle P_x+Q_x,\, P_y+Q_y,\,P_z+Q_z\rangle$$
> 
> **Vector-Scalar Multiplication:**
> for vector $\vec{P}$ and scalar $a$,
> $$\vec{P}=\langle P_x,\,P_y,\,P_z\rangle\quad\Rightarrow\quad a\vec{P} = \langle aP_x,\,aP_y,\,aP_z\rangle$$
> 
> **Unit Vector:**
> $$\hat{U}_v=\dfrac{\vec{v}}{|\vec{v}|}$$

### Demo Problem S3.1:

Given the vectors $\vec{v}=3\hat{i}+4\hat{j}$ and $\vec{u} = 2\hat{i}-2\hat{j}$
1. add $\vec{v}$ and $\vec{u}$ and show it graphically
2. find $\vec{w}=3(\vec{u}+\vec{v})$
3. find the unit vector $\hat{U}_v$
%%
> [!Success]- Demo Solution
> Insert Solutions Here

%%
<div style="page-break-after: always;"></div>


---
### Problem S3.2:

A boat is trying to navigate a flowing river. It experiences two forces:

- Current $\mathbf{c}=\langle 2,0\rangle$
- Thrust $\mathbf{t}=\langle 0,3\rangle$  

If the boat is sitting at the origin, draw $\mathbf{c}$ and $\mathbf{t}$ acting on the boat. Add the forces together to obtain to total force acting on the boat, $\mathbf{v}=\mathbf{c}+\mathbf{t}$. Draw the vector addition process, and obtain your answer both graphically and by adding the vector components directly.
%%
> [!Success]- Problem 2.1 Solution
> Insert Solutions Here

%%
<div style="page-break-after: always;"></div>

---
### Problem S3.3:

Consider the lighting vector $\mathbf{L}=\langle 2,1\rangle$ and the structural force $\mathbf{F}=\langle -3,4,0\rangle$
- compute $2\mathbf{L}$, $\tfrac{1}{2}\mathbf{L},$ and $\hat{U}_L$
-  compute $3\mathbf{F}, -2\mathbf{F},$ and $\hat{U}_F$

%%
> [!Success]- Problem 2.2 Solution
> Insert Solutions Here

%%
