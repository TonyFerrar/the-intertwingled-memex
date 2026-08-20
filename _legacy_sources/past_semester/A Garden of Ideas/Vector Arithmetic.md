# Vector Arithmetic

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

## Vector Addition:
Vectors can be added together to produce a **resultant vector** that is the sum of the two or more vectors added.

![[Vector Addition.png]]

- **Geometric Representation:**
	- Vectors add "head to tail," with the resultant connecting the tail of the first to the head of the second.

- **Algebraic Representation:**
	- To add vectors algebraically, add each vector component together to obtain the resultant vector.

$$\vec{P}=\langle P_x,\, P_y,\, P_z\rangle$$
$$\vec{Q}=\langle Q_x,\, Q_y,\, Q_z\rangle$$$$\boxed{\Rightarrow \quad \vec{P}+\vec{Q}=\langle P_x+Q_x,\, P_y+Q_y,\,P_z+Q_z\rangle}$$
## Scalar Multiplication:
Scalar multiplication is the process of multiplying a vector by a scalar value. When performing scalar multiplication, the scalar value is distributed to each vector component. An example of such multiplication is provided below:
$$\vec{P}=\langle P_x,\,P_y,\,P_z\rangle\quad\Rightarrow\quad 3\vec{P} = \langle3P_x,\,3P_y,\,3P_z\rangle$$

Scalar multiplication changes the **magnitude** of a vector, but not its **direction** - in other words, scalar multiplication stretches or shrinks the vector.

## Unit Vectors:
Unit vectors are a special vector with a magnitude of 1. The purpose of a unit vector is to describe a vector's **direction**. Multiplying a unit vector by a magnitude will give you a vector with a magnitude different from 1. 
$$|\hat{U}| = 1$$
For the purpose of describing a vector in terms of its $x$, $y$, and $z$ components, the standard unit vectors $\hat{i}$, $\hat{j}$, $\hat{k}$ are used. The unit vectors correspond to:
$$
\hat{i}\rightarrow x,\quad\hat{j}\rightarrow y,\quad \hat{k}\rightarrow z
$$
The carrot hat notation is what will differentiate a unit vector from a typical vector. The use of $\hat{i}, \hat{j},$ and $\hat{k}$ can be used to give an alternative expression for a vector:
$$
\vec{v}=\langle v_x, v_y, v_z\rangle=v_x\hat{i} + v_y\hat{j}+v_z\hat{k}
$$
Unit vectors are found through a form of scalar multiplication with the magnitude of the given vector. The formula is given below:
$$\hat{U}_v=\dfrac{\vec{v}}{|\vec{v}|}$$

Here, $U_v$ is a vector of magnitude 1, pointing in the same direction as $\vec{v}$.



<div style="page-break-after: always;"></div>

---
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
<div style="page-break-after: always;"></div>

---