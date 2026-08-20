---
title: "Session 03 - Dot and Cross Product"
type: course-session
course: MATH-283
semester: Fall 2026
publish: true
cssclasses: []
updated: 2026-08-18
---

# Session 03 - Dot and Cross Product

> [!abstract] Session Objectives & Overview
> By the end of this session, you will be able to:
> - Review core multivariable mathematical concepts and engineering calculus prerequisites.

## Timeline & Session Breakdown

### 00:00 - 00:10 (10 mins) — Micro-Lecture: Motivation & Theory
> [!example] Engineering Context: Quantifying Force
> In this session, we investigate the mathematical principles of **Dot and Cross Product** and explore how engineers apply these concepts to analyze real-world physical and structural systems.

### 00:10 - 00:25 (15 mins) — Skill Block 1: Advanced Concept Practice 1
> [!note]- Theory & Derivations
> Explanations and derivations of the core concepts.


#### Worked Example
Find the dot product of $\vec{u} = \langle 6, 7 \rangle$ and $\vec{v} = \langle 7, -6 \rangle$.

> [!check]- Worked Solution
> Here is the step-by-step solution to the problem presented in the image:
> 
> ### **Problem Statement**
> 
> Find the dot product of $\vec{u} = \langle 6, 7 \rangle$ and $\vec{v} = \langle 7, -6 \rangle$.
> 
> ### **Formula**
> 
> For two 2D vectors $\vec{u} = \langle u_x, u_y \rangle$ and $\vec{v} = \langle v_x, v_y \rangle$, the dot product is calculated as:
> 
> $$\vec{u} \cdot \vec{v} = (u_x \cdot v_x) + (u_y \cdot v_y)$$
> 
> ### **Step-by-Step Calculation**
> 
> 1. **Identify the components** of each vector:
> 
> - $u_x = 6$, $u_y = 7$
> 
> - $v_x = 7$, $v_y = -6$
> 
> 2. **Substitute the values** into the formula:
> 
> $$\vec{u} \cdot \vec{v} = (6 \cdot 7) + (7 \cdot -6)$$
> 
> 3. **Simplify the terms**:
> 
> $$\vec{u} \cdot \vec{v} = 42 + (-42)$$
> 
> 4. **Combine the results**:
> 
> $$\vec{u} \cdot \vec{v} = 0$$
> 
> 
> ### **Final Answer**
> 
> The dot product is **$0$**.
> 
> _(Note: Since the dot product is exactly zero, these two vectors are **orthogonal** or perpendicular to each other)._

#### Active Practice Problem
Find the dot product of $\vec{u} = 3\hat{i} - 2\hat{j}$ and $\vec{v} = 4\hat{i} - 5\hat{j}$.

> [!workspace] Student Practice Space
> 

> [!check]- Solution
> Here is the step-by-step solution to the problem in the image:
> 
> ### **Problem Statement**
> 
> Find the dot product of $\vec{u} = 3\hat{i} - 2\hat{j}$ and $\vec{v} = 4\hat{i} - 5\hat{j}$.
> 
> ### **Formula**
> 
> When vectors are written in unit vector notation ($\hat{i}, \hat{j}$), the dot product multiplies the corresponding components together:
> 
> $$\vec{u} \cdot \vec{v} = (u_x \cdot v_x) + (u_y \cdot v_y)$$
> 
> ### **Step-by-Step Calculation**
> 
> 1. **Identify the components** of each vector:
> 
> - **$\vec{u}$**: $u_x = 3$, $u_y = -2$
> 
> - **$\vec{v}$**: $v_x = 4$, $v_y = -5$
> 
> 2. **Substitute the values** into the formula:
> 
> $$\vec{u} \cdot \vec{v} = (3 \cdot 4) + (-2 \cdot -5)$$
> 
> 3. **Multiply the components**:
> 
> - For the $\hat{i}$ components: $3 \cdot 4 = 12$
> 
> - For the $\hat{j}$ components: $-2 \cdot -5 = 10$
> 
> 4. **Add the results together**:
> 
> $$\vec{u} \cdot \vec{v} = 12 + 10$$
> 
> $$\vec{u} \cdot \vec{v} = 22$$
> 
> 
> ### **Final Answer**
> 
> The dot product is **$22$**.

> [!info]- Extra Practice & Extensions
> ##### Extension Problem (Force)
> Find the dot product of $\vec{u} = \langle 1, 2, 3 \rangle$ and $\vec{v} = \langle -2, 0, 4 \rangle$.
> 
> > [!check]- Solution
> > Here is the step-by-step solution to the problem in the image:
> > 
> > ### **Problem Statement**
> > 
> > Find the dot product of $\vec{u} = \langle 1, 2, 3 \rangle$ and $\vec{v} = \langle -2, 0, 4 \rangle$.
> > 
> > ### **Formula**
> > 
> > For two 3D vectors $\vec{u} = \langle u_x, u_y, u_z \rangle$ and $\vec{v} = \langle v_x, v_y, v_z \rangle$, the dot product is calculated as:
> > 
> > $$\vec{u} \cdot \vec{v} = (u_x \cdot v_x) + (u_y \cdot v_y) + (u_z \cdot v_z)$$
> > 
> > ### **Step-by-Step Calculation**
> > 
> > 1. **Identify the components** of each vector:
> > 
> > - **$\vec{u}$**: $u_x = 1$, $u_y = 2$, $u_z = 3$
> > 
> > - **$\vec{v}$**: $v_x = -2$, $v_y = 0$, $v_z = 4$
> > 
> > 2. **Substitute the values** into the formula:
> > 
> > $$\vec{u} \cdot \vec{v} = (1 \cdot -2) + (2 \cdot 0) + (3 \cdot 4)$$
> > 
> > 3. **Multiply the components**:
> > 
> > - For the $x$-components: $1 \cdot -2 = -2$
> > 
> > - For the $y$-components: $2 \cdot 0 = 0$
> > 
> > - For the $z$-components: $3 \cdot 4 = 12$
> > 
> > 4. **Add the results together**:
> > 
> > $$\vec{u} \cdot \vec{v} = -2 + 0 + 12$$
> > 
> > $$\vec{u} \cdot \vec{v} = 10$$
> > 
> > 
> > ### **Final Answer**
> > 
> > The dot product is **$10$**.
> 

### 00:25 - 00:30 (5 mins) — Regroup 1: Class Discussion
- Review common misconceptions and clarify key notations.

### 00:30 - 00:45 (15 mins) — Skill Block 2: Advanced Concept Practice 2
> [!note]- Theory & Derivations
> Explanations and derivations of the core concepts.


#### Worked Example
Calculate $\vec{p} \times \vec{q}$ using a determinant if $\vec{p} = 2\hat{i} + 4\hat{j}$ and $\vec{q} = -4\hat{i} - 5\hat{j}$.

> [!check]- Worked Solution
> Here is the step-by-step solution to the problem in the image:
> 
> ### **Problem Statement**
> 
> Calculate $\vec{p} \times \vec{q}$ using a determinant if $\vec{p} = 2\hat{i} + 4\hat{j}$ and $\vec{q} = -4\hat{i} - 5\hat{j}$.
> 
> ### **Formula**
> 
> Even though these vectors are in 2D ($\hat{i}$ and $\hat{j}$ components), the cross product requires a 3D space because the resulting vector points perpendicular to the $xy$-plane (along the $\hat{k}$ axis). We treat the $\hat{k}$ components as $0$:
> 
> $$\vec{p} \times \vec{q} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ p_x & p_y & p_z \\ q_x & q_y & q_z \end{vmatrix}$$
> 
> ### **Step-by-Step Calculation**
> 
> 1. **Set up the matrix determinant** with $p_z = 0$ and $q_z = 0$:
> 
> $$\vec{p} \times \vec{q} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 2 & 4 & 0 \\ -4 & -5 & 0 \end{vmatrix}$$
> 
> 2. **Expand the determinant** along the top row:
> 
> $$\vec{p} \times \vec{q} = \hat{i}\begin{vmatrix} 4 & 0 \\ -5 & 0 \end{vmatrix} - \hat{j}\begin{vmatrix} 2 & 0 \\ -4 & 0 \end{vmatrix} + \hat{k}\begin{vmatrix} 2 & 4 \\ -4 & -5 \end{vmatrix}$$
> 
> 3. **Evaluate each 2x2 minor**:
> 
> - **$\hat{i}$ component:** $(4 \cdot 0) - (0 \cdot -5) = 0$
> 
> - **$\hat{j}$ component:** $(2 \cdot 0) - (0 \cdot -4) = 0$
> 
> - **$\hat{k}$ component:** $(2 \cdot -5) - (4 \cdot -4) = -10 - (-16) = -10 + 16 = 6$
> 
> 4. **Combine the components**:
> 
> $$\vec{p} \times \vec{q} = 0\hat{i} - 0\hat{j} + 6\hat{k}$$
> 
> $$\vec{p} \times \vec{q} = 6\hat{k}$$
> 
> 
> ### **Final Answer**
> 
> The cross product is **$6\hat{k}$** (or $\langle 0, 0, 6 \rangle$).

#### Active Practice Problem
Calculate $\vec{r} \times \vec{F}$ where $\vec{r} = \langle 3, 2 \rangle$ and $\vec{F} = \langle -2, 5 \rangle$.

> [!workspace] Student Practice Space
> 

> [!check]- Solution
> Here is the step-by-step solution to the problem in the image:
> 
> ### **Problem Statement**
> 
> Calculate $\vec{r} \times \vec{F}$ where $\vec{r} = \langle 3, 2 \rangle$ and $\vec{F} = \langle -2, 5 \rangle$.
> 
> ### **Formula**
> 
> For 2D vectors lying in the $xy$-plane, we extend them into 3D by setting their $z$-components to $0$ ($r_z = 0$ and $F_z = 0$). The cross product is computed using a $3 \times 3$ determinant:
> 
> $$\vec{r} \times \vec{F} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ r_x & r_y & r_z \\ F_x & F_y & F_z \end{vmatrix}$$
> 
> ### **Step-by-Step Calculation**
> 
> 1. **Set up the determinant matrix**:
> 
> $$\vec{r} \times \vec{F} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 3 & 2 & 0 \\ -2 & 5 & 0 \end{vmatrix}$$
> 
> 2. **Expand the determinant along the top row**:
> 
> $$\vec{r} \times \vec{F} = \hat{i}\begin{vmatrix} 2 & 0 \\ 5 & 0 \end{vmatrix} - \hat{j}\begin{vmatrix} 3 & 0 \\ -2 & 0 \end{vmatrix} + \hat{k}\begin{vmatrix} 3 & 2 \\ -2 & 5 \end{vmatrix}$$
> 
> 3. **Evaluate the 2x2 minors**:
> 
> - **$\hat{i}$ component:** $(2 \cdot 0) - (0 \cdot 5) = 0$
> 
> - **$\hat{j}$ component:** $(3 \cdot 0) - (0 \cdot -2) = 0$
> 
> - **$\hat{k}$ component:** $(3 \cdot 5) - (2 \cdot -2) = 15 - (-4) = 15 + 4 = 19$
> 
> 4. **Combine the components**:
> 
> $$\vec{r} \times \vec{F} = 0\hat{i} - 0\hat{j} + 19\hat{k}$$
> 
> $$\vec{r} \times \vec{F} = 19\hat{k}$$
> 
> 
> ### **Final Answer**
> 
> The cross product is **$19\hat{k}$** (or written in component form as $\langle 0, 0, 19 \rangle$).

> [!info]- Extra Practice & Extensions
> ##### Extension Problem (Force)
> Calculate $\vec{p} \times \vec{q}$ given $\vec{p} = 2\hat{i} + 4\hat{j} - 4\hat{k}$ and $\vec{q} = -4\hat{i} - 5\hat{j} - 2\hat{k}$.
> 
> > [!check]- Solution
> > Here is the step-by-step solution to the problem in the image:
> > 
> > ### **Problem Statement**
> > 
> > Calculate $\vec{p} \times \vec{q}$ given $\vec{p} = 2\hat{i} + 4\hat{j} - 4\hat{k}$ and $\vec{q} = -4\hat{i} - 5\hat{j} - 2\hat{k}$.
> > 
> > ### **Formula**
> > 
> > The cross product of two full 3D vectors is computed using a $3 \times 3$ matrix determinant:
> > 
> > $$\vec{p} \times \vec{q} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ p_x & p_y & p_z \\ q_x & q_y & q_z \end{vmatrix}$$
> > 
> > ### **Step-by-Step Calculation**
> > 
> > 1. **Set up the determinant matrix**:
> > 
> > $$\vec{p} \times \vec{q} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 2 & 4 & -4 \\ -4 & -5 & -2 \end{vmatrix}$$
> > 
> > 2. **Expand the determinant** along the top row:
> > 
> > $$\vec{p} \times \vec{q} = \hat{i}\begin{vmatrix} 4 & -4 \\ -5 & -2 \end{vmatrix} - \hat{j}\begin{vmatrix} 2 & -4 \\ -4 & -2 \end{vmatrix} + \hat{k}\begin{vmatrix} 2 & 4 \\ -4 & -5 \end{vmatrix}$$
> > 
> > 3. **Evaluate each 2x2 minor**:
> > 
> > - **$\hat{i}$ component:**
> > 
> > $$(4 \cdot -2) - (-4 \cdot -5) = -8 - (20) = -28$$
> > 
> > - **$\hat{j}$ component:**
> > 
> > $$(2 \cdot -2) - (-4 \cdot -4) = -4 - (16) = -20$$
> > 
> > _(Remember the negative sign in front of the $\hat{j}$ bracket: $-(-20) = +20$)_
> > 
> > - **$\hat{k}$ component:**
> > 
> > $$(2 \cdot -5) - (4 \cdot -4) = -10 - (-16) = -10 + 16 = 6$$
> > 
> > 4. **Combine the components**:
> > 
> > $$\vec{p} \times \vec{q} = -28\hat{i} - (-20)\hat{j} + 6\hat{k}$$
> > 
> > $$\vec{p} \times \vec{q} = -28\hat{i} + 20\hat{j} + 6\hat{k}$$
> > 
> > 
> > ### **Final Answer**
> > 
> > The cross product is **$-28\hat{i} + 20\hat{j} + 6\hat{k}$** (or written in component form as $\langle -28, 20, 6 \rangle$).
> 

### 00:45 - 00:50 (5 mins) — Regroup 2: Reflection
- Reflect on the physical modeling applications and mathematical setups.

### 00:50 - 01:05 (15 mins) — Skill Block 3: Advanced Concept Practice 3
> [!note]- Theory & Derivations
> Explanations and derivations of the core concepts.


#### Worked Example
Find $\vec{a} \cdot \vec{b}$ if $|\vec{a}| = 16\text{ N}$, $|\vec{b}| = 5\text{ m}$, and the angle between $\vec{a}$ and $\vec{b}$ is $77^\circ$. Express the answer rounded to two decimal places.

> [!check]- Worked Solution
> Here is the step-by-step solution to the problem in the image:
> 
> ### **Problem Statement**
> 
> Find $\vec{a} \cdot \vec{b}$ if $|\vec{a}| = 16\text{ N}$, $|\vec{b}| = 5\text{ m}$, and the angle between $\vec{a}$ and $\vec{b}$ is $77^\circ$. Express the answer rounded to two decimal places.
> 
> ### **Formula**
> 
> When given the magnitudes of two vectors and the angle $\theta$ between them, the geometric definition of the dot product is used:
> 
> $$\vec{a} \cdot \vec{b} = |\vec{a}| |\vec{b}| \cos \theta$$
> 
> ### **Step-by-Step Calculation**
> 
> 1. **Identify the given values**:
> 
> - Magnitude of $\vec{a}$: $|\vec{a}| = 16$
> 
> - Magnitude of $\vec{b}$: $|\vec{b}| = 5$
> 
> - Angle: $\theta = 77^\circ$
> 
> 2. **Substitute the values into the formula**:
> 
> $$\vec{a} \cdot \vec{b} = 16 \cdot 5 \cdot \cos(77^\circ)$$
> 
> 3. **Simplify the multiplication**:
> 
> $$16 \cdot 5 = 80$$
> 
> $$\vec{a} \cdot \vec{b} = 80 \cdot \cos(77^\circ)$$
> 
> 4. **Calculate the cosine value** (ensure your calculator is in **Degree** mode):
> 
> $$\cos(77^\circ) \approx 0.224951$$
> 
> 5. **Multiply to find the dot product**:
> 
> $$\vec{a} \cdot \vec{b} \approx 80 \cdot 0.224951 = 17.99608$$
> 
> 6. **Round to two decimal places**:
> 
> $$\vec{a} \cdot \vec{b} \approx 18.00$$
> 
> 
> ### **Final Answer**
> 
> The dot product is **$18.00$** (or **$18.00\text{ J}$** / $\text{N} \cdot \text{m}$ if keeping track of the physical work units).

#### Active Practice Problem
Find the work (in Joules) done by the force $\vec{F} = \langle 4, -4, 4 \rangle$ (in Newtons) acting on a particle as it moves from point $P(-7, -2, 5)$ to point $Q(8, -7, -5)$ along a straight line. The coordinates of $P$ and $Q$ are measured in meters. 

Units:
* $1\text{ N} = 1\text{ kg} \cdot \text{m/s}^2$
* $1\text{ J} = 1\text{ N} \cdot \text{m}$

> [!workspace] Student Practice Space
> 

> [!check]- Solution
> Here is the step-by-step solution to the problem in the image:
> 
> ### **Problem Statement**
> 
> Find the work (in Joules) done by the force $\vec{F} = \langle 4, -4, 4 \rangle$ (in Newtons) acting on a particle as it moves from point $P(-7, -2, 5)$ to point $Q(8, -7, -5)$ along a straight line. The coordinates of $P$ and $Q$ are measured in meters.
> 
> ### **Formula**
> 
> Work ($W$) done by a constant force vector $\vec{F}$ over a displacement vector $\vec{d}$ is given by the dot product:
> 
> $$W = \vec{F} \cdot \vec{d}$$
> 
> Where the displacement vector $\vec{d}$ from a starting point $P$ to an ending point $Q$ is calculated as:
> 
> $$\vec{d} = \vec{PQ} = \langle x_Q - x_P, \ y_Q - y_P, \ z_Q - z_P \rangle$$
> 
> ### **Step-by-Step Calculation**
> 
> #### **Step 1: Find the displacement vector $\vec{d}$**
> 
> Subtract the coordinates of the initial point $P(-7, -2, 5)$ from the final point $Q(8, -7, -5)$:
> 
> - $d_x = 8 - (-7) = 8 + 7 = 15$
> 
> - $d_y = -7 - (-2) = -7 + 2 = -5$
> 
> - $d_z = -5 - 5 = -10$
> 
> 
> So, the displacement vector is:
> 
> $$\vec{d} = \langle 15, -5, -10 \rangle\text{ m}$$
> 
> #### **Step 2: Calculate the work using the dot product**
> 
> Now, take the dot product of the force vector $\vec{F} = \langle 4, -4, 4 \rangle$ and the displacement vector $\vec{d} = \langle 15, -5, -10 \rangle$:
> 
> $$W = \vec{F} \cdot \vec{d} = (4 \cdot 15) + (-4 \cdot -5) + (4 \cdot -10)$$
> 
> #### **Step 3: Simplify the terms**
> 
> - $4 \cdot 15 = 60$
> 
> - $-4 \cdot -5 = 20$
> 
> - $4 \cdot -10 = -40$
> 
> 
> Combine the values:
> 
> $$W = 60 + 20 - 40$$
> 
> $$W = 40\text{ J}$$
> 
> ### **Final Answer**
> 
> The work done by the force is **$40\text{ Joules}$**.

> [!info]- Extra Practice & Extensions
> ##### Extension Problem (Force)
> Let $\vec{r} = \vec{OP} = (2\hat{i} + \hat{j})\text{ m}$. A force $\vec{F} = \langle 0, 12, 0 \rangle\text{ N}$ is applied at $P$. Find the torque about $O$ that is produced, measured in $\text{N} \cdot \text{m}$.
> 
> > [!check]- Solution
> > Here is the step-by-step solution to the problem in the image:
> > 
> > ### **Problem Statement**
> > 
> > Let $\vec{r} = \vec{OP} = (2\hat{i} + \hat{j})\text{ m}$. A force $\vec{F} = \langle 0, 12, 0 \rangle\text{ N}$ is applied at $P$. Find the torque about $O$ that is produced, measured in $\text{N} \cdot \text{m}$.
> > 
> > ### **Formula**
> > 
> > Torque ($\vec{\tau}$) is a vector quantity calculated using the cross product of the position vector ($\vec{r}$) and the force vector ($\vec{F}$):
> > 
> > $$\vec{\tau} = \vec{r} \times \vec{F}$$
> > 
> > We compute this using a $3 \times 3$ matrix determinant:
> > 
> > $$\vec{\tau} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ r_x & r_y & r_z \\ F_x & F_y & F_z \end{vmatrix}$$
> > 
> > ### **Step-by-Step Calculation**
> > 
> > #### **Step 1: Identify vector components**
> > 
> > - **Position vector ($\vec{r}$):** Given as $2\hat{i} + \hat{j}\text{ m}$, which means:
> > 
> > $$r_x = 2, \ r_y = 1, \ r_z = 0$$
> > 
> > - **Force vector ($\vec{F}$):** Given as $\langle 0, 12, 0 \rangle\text{ N}$, which means:
> > 
> > $$F_x = 0, \ F_y = 12, \ F_z = 0$$
> > 
> > 
> > #### **Step 2: Set up the matrix determinant**
> > 
> > $$\vec{\tau} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 2 & 1 & 0 \\ 0 & 12 & 0 \end{vmatrix}$$
> > 
> > #### **Step 3: Expand along the top row**
> > 
> > $$\vec{\tau} = \hat{i}\begin{vmatrix} 1 & 0 \\ 12 & 0 \end{vmatrix} - \hat{j}\begin{vmatrix} 2 & 0 \\ 0 & 0 \end{vmatrix} + \hat{k}\begin{vmatrix} 2 & 1 \\ 0 & 12 \end{vmatrix}$$
> > 
> > #### **Step 4: Evaluate the 2x2 minors**
> > 
> > - **$\hat{i}$ component:** $(1 \cdot 0) - (0 \cdot 12) = 0$
> > 
> > - **$\hat{j}$ component:** $(2 \cdot 0) - (0 \cdot 0) = 0$
> > 
> > - **$\hat{k}$ component:** $(2 \cdot 12) - (1 \cdot 0) = 24 - 0 = 24$
> > 
> > 
> > Combine the components:
> > 
> > $$\vec{\tau} = 0\hat{i} - 0\hat{j} + 24\hat{k} = 24\hat{k}$$
> > 
> > ### **Final Answer**
> > 
> > The torque about $O$ is **$24\hat{k}\text{ N}\cdot\text{m}$** (or simply a magnitude of **$24\text{ N}\cdot\text{m}$** pointing out along the $z$-axis).
> 

### 01:05 - 01:10 (5 mins) — Regroup 3: Verification
- Verify calculations and mathematical reasoning.

### 01:10 - 01:15 (5 mins) — Synthesis Wrap-up
- Core takeaways from Session 03 and overview of homework homework assignment: *The Dot Product
The Cross Product*.
