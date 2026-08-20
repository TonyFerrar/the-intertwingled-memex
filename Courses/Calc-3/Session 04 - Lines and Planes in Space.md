---
title: "Session 04 - Lines and Planes in Space"
type: course-session
course: MATH-283
semester: Fall 2026
publish: true
cssclasses: []
updated: 2026-08-18
---

# Session 04 - Lines and Planes in Space

## Session Objectives
By the end of this session, you will be able to:
- Review core multivariable mathematical concepts and engineering calculus prerequisites.

## Session Timeline
- **00:00 - 00:10 (10 mins)**: Micro-Lecture
- **00:10 - 00:25 (15 mins)**: Skill Block 1
- **00:25 - 00:30 (5 mins)**: Regroup 1
- **00:30 - 00:45 (15 mins)**: Skill Block 2
- **00:45 - 00:50 (5 mins)**: Regroup 2
- **00:50 - 01:05 (15 mins)**: Skill Block 3
- **01:05 - 01:10 (5 mins)**: Regroup 3
- **01:10 - 01:15 (5 mins)**: Synthesis Wrap-up

## Session Content

### Micro-Lecture
#### Engineering Context: Designing in 3D
In this session, we investigate the mathematical principles of **Lines and Planes in Space** and explore how engineers apply these concepts to analyze real-world physical and structural systems.

### Skill Block 1
Explanations and derivations of the core concepts.

#### Worked Example
Given a line with the points $P=(-4,-6,-2)$ and $Q=(10,2,1)$:
* Find the vector equation of the line. Evaluate at a few values of $t$.
* Find the parametric equation of the line.
* Convert the parametric equation into a symmetric equation.

##### Solution
Here is the step-by-step solution to the problem presented in the image.

###### Given Data

- **Point $P$:** $(-4, -6, -2)$

- **Point $Q$:** $(10, 2, 1)$


###### 1. Vector Equation of the Line

To find the vector equation, we first need a position vector $\vec{r}_0$ for a point on the line and a direction vector $\vec{v}$ that is parallel to the line.

1. **Find the direction vector $\vec{v}$** by finding the vector from $P$ to $Q$:

$$\vec{v} = \vec{PQ} = \langle 10 - (-4), 2 - (-6), 1 - (-2) \rangle$$

$$\vec{v} = \langle 14, 8, 3 \rangle$$

2. **Use point $P$ as the initial position vector $\vec{r}_0$:**

$$\vec{r}_0 = \langle -4, -6, -2 \rangle$$

3. Write the vector equation $\vec{r}(t) = \vec{r}_0 + t\vec{v}$:

$$\vec{r}(t) = \langle -4, -6, -2 \rangle + t\langle 14, 8, 3 \rangle$$


Evaluating at a few values of $t$:

- **For $t = 0$:**

$$\vec{r}(0) = \langle -4, -6, -2 \rangle \quad (\text{This is point } P)$$

- **For $t = 1$:**

$$\vec{r}(1) = \langle -4+14, -6+8, -2+3 \rangle = \langle 10, 2, 1 \rangle \quad (\text{This is point } Q)$$

- **For $t = -1$:**

$$\vec{r}(-1) = \langle -4-14, -6-8, -2-3 \rangle = \langle -18, -14, -5 \rangle$$


###### 2. Parametric Equations of the Line

The parametric equations break the vector equation down into separate components for $x$, $y$, and $z$ using the format:

- $x = x_0 + at$

- $y = y_0 + bt$

- $z = z_0 + ct$


Substituting our point $P(-4, -6, -2)$ and direction vector components $\langle 14, 8, 3 \rangle$:

- $$x = -4 + 14t$$

- $$y = -6 + 8t$$

- $$z = -2 + 3t$$


###### 3. Symmetric Equation of the Line

To convert the parametric equations into a symmetric equation, we solve each individual equation for $t$ and set them equal to each other:

1. Solve for $t$ in the $x$ equation:

$$x = -4 + 14t \implies x + 4 = 14t \implies t = \frac{x + 4}{14}$$

2. Solve for $t$ in the $y$ equation:

$$y = -6 + 8t \implies y + 6 = 8t \implies t = \frac{y + 6}{8}$$

3. Solve for $t$ in the $z$ equation:

$$z = -2 + 3t \implies z + 2 = 3t \implies t = \frac{z + 2}{3}$$


Equating all three expressions for $t$ gives the **symmetric equation**:

$$\frac{x + 4}{14} = \frac{y + 6}{8} = \frac{z + 2}{3}$$
#### Active Practice Problem
Given a line with the points $A=(1,4,-2)$ and $B=(-3,5,0)$:
* Find the vector equation of the line. Evaluate at a few values of $t$.
* Find the Parametric equation of the line.
* Convert the parametric equation into a symmetric equation.

##### Workspace

##### Solution
Here is the complete solution for **Problem S1.1** from the activity:

###### Given Data

- **Point $A$:** $(1, 4, -2)$

- **Point $B$:** $(-3, 5, 0)$


###### 1. Vector Equation of the Line

To construct the vector equation, we need an initial position vector $\vec{r}_0$ and a direction vector $\vec{v}$.

1. **Find the direction vector $\vec{v}$** by finding the displacement vector from $A$ to $B$:

$$\vec{v} = \vec{AB} = \langle -3 - 1, \ 5 - 4, \ 0 - (-2) \rangle$$

$$\vec{v} = \langle -4, 1, 2 \rangle$$

2. **Set point $A$ as your initial position vector $\vec{r}_0$:**

$$\vec{r}_0 = \langle 1, 4, -2 \rangle$$

3. Assemble the vector equation $\vec{r}(t) = \vec{r}_0 + t\vec{v}$:

$$\vec{r}(t) = \langle 1, 4, -2 \rangle + t\langle -4, 1, 2 \rangle$$


Evaluating at a few values of $t$:

- **For $t = 0$:**

$$\vec{r}(0) = \langle 1, 4, -2 \rangle \quad (\text{Point } A)$$

- **For $t = 1$:**

$$\vec{r}(1) = \langle 1 - 4, \ 4 + 1, \ -2 + 2 \rangle = \langle -3, 5, 0 \rangle \quad (\text{Point } B)$$

- **For $t = 2$:**

$$\vec{r}(2) = \langle 1 - 8, \ 4 + 2, \ -2 + 4 \rangle = \langle -7, 6, 2 \rangle$$


###### 2. Parametric Equations of the Line

By breaking the vector equation down into its distinct scalar components ($x$, $y$, and $z$) using the format $x = x_0 + at$, $y = y_0 + bt$, and $z = z_0 + ct$, we get:

- $$x = 1 - 4t$$

- $$y = 4 + t$$

- $$z = -2 + 2t$$


###### 3. Symmetric Equation of the Line

To find the symmetric equation, we isolate $t$ in each parametric component and set them equal to one another:

1. Solve for $t$ in $x$:

$$x = 1 - 4t \implies x - 1 = -4t \implies t = \frac{x - 1}{-4}$$

2. Solve for $t$ in $y$:

$$y = 4 + t \implies t = \frac{y - 4}{1}$$

3. Solve for $t$ in $z$:

$$z = -2 + 2t \implies z + 2 = 2t \implies t = \frac{z + 2}{2}$$


Equating these gives the **symmetric equation**:

$$\frac{x - 1}{-4} = y - 4 = \frac{z + 2}{2}$$

### Regroup 1
- Review common misconceptions and clarify key notations.

### Skill Block 2
Explanations and derivations of the core concepts.

#### Worked Example
Find the distance between the point $M=(1,1,3)$ and the line:
$$\frac{x-3}{4}=\frac{y+1}{2}=z-3$$

##### Solution
Here is the step-by-step solution for **Skill 2 Demo** using the distance formula provided in the activity.

###### Given Data

- **Point $M$ (anywhere in space):** $(1, 1, 3)$

- **Symmetric equation of the line:** $\frac{x-3}{4} = \frac{y+1}{2} = z-3$


###### 1. Extract Information from the Line

From the symmetric equation form $\frac{x-x_0}{a} = \frac{y-y_0}{b} = \frac{z-z_0}{c}$, we can extract:

1. **A point $P$ on the line:** $(3, -1, 3)$

2. **The direction vector $\vec{v}$ along the line:** $\langle 4, 2, 1 \rangle$ (note that $z-3$ is equivalent to $\frac{z-3}{1}$)


###### 2. Find the Vector $\vec{PM}$

Now, find the vector pointing from the line point $P$ to the external point $M$:

$$\vec{PM} = \langle x_M - x_P, \ y_M - y_P, \ z_M - z_P \rangle$$

$$\vec{PM} = \langle 1 - 3, \ 1 - (-1), \ 3 - 3 \rangle = \langle -2, 2, 0 \rangle$$

###### 3. Compute the Cross Product $\vec{PM} \times \vec{v}$

The formula requires the cross product of $\vec{PM}$ and the direction vector $\vec{v}$:

$$\vec{PM} \times \vec{v} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ -2 & 2 & 0 \\ 4 & 2 & 1 \end{vmatrix}$$

Expand the determinant by the top row:

$$\vec{PM} \times \vec{v} = \hat{i}(2(1) - 0(2)) - \hat{j}((-2)(1) - 0(4)) + \hat{k}((-2)(2) - 2(4))$$

$$\vec{PM} \times \vec{v} = \hat{i}(2) - \hat{j}(-2) + \hat{k}(-4 - 8)$$

$$\vec{PM} \times \vec{v} = \langle 2, 2, -12 \rangle$$

###### 4. Calculate the Magnitudes

Now find the magnitudes (lengths) of both the cross product vector and the direction vector $\vec{v}$:

- **Magnitude of $\vec{PM} \times \vec{v}$:**

$$||\vec{PM} \times \vec{v}|| = \sqrt{2^2 + 2^2 + (-12)^2} = \sqrt{4 + 4 + 144} = \sqrt{152}$$

$$\sqrt{152} = \sqrt{4 \times 38} = 2\sqrt{38}$$

- **Magnitude of $\vec{v}$:**

$$||\vec{v}|| = \sqrt{4^2 + 2^2 + 1^2} = \sqrt{16 + 4 + 1} = \sqrt{21}$$


###### 5. Calculate the Distance $d$

Substitute these magnitudes into the distance formula $d = \frac{||\vec{PM} \times \vec{v}||}{||\vec{v}||}$:

$$d = \frac{2\sqrt{38}}{\sqrt{21}}$$

To write it under a single radical or rationalize it:

$$d = 2\sqrt{\frac{38}{21}} = \frac{2\sqrt{798}}{21} \approx 2.69$$

The exact distance between the point and the line is **$\frac{2\sqrt{798}}{21}$** (or approximately **$2.69$** units).
#### Active Practice Problem
Find the distance between the point $(0, 3, 6)$ and the line with parametric equations:
$$x=1-t, \quad y=1+2t, \quad z=5+3t$$

##### Workspace

##### Solution
###### Given Data

- **Point $M$ (external point):** $(0, 3, 6)$

- **Parametric equations of the line:** $x = 1 - t$, $y = 1 + 2t$, $z = 5 + 3t$


###### 1. Extract Information from the Line

From the parametric equations form $x = x_0 + at$, $y = y_0 + bt$, and $z = z_0 + ct$ , we can easily read off a point on the line and its direction vector:

1. **A point $P$ on the line** (by looking at the constant terms where $t = 0$):

$$P = (1, 1, 5)$$

2. **The direction vector $\vec{v}$ along the line** (the coefficients of $t$):

$$\vec{v} = \langle -1, 2, 3 \rangle$$


###### 2. Find the Vector $\vec{PM}$

Now, find the vector pointing from the line's point $P$ to the external point $M$:

$$\vec{PM} = \langle x_M - x_P, \ y_M - y_P, \ z_M - z_P \rangle$$

$$\vec{PM} = \langle 0 - 1, \ 3 - 1, \ 6 - 5 \rangle = \langle -1, 2, 1 \rangle$$

###### 3. Compute the Cross Product $\vec{PM} \times \vec{v}$

Next, find the cross product required by the formula:

$$\vec{PM} \times \vec{v} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ -1 & 2 & 1 \\ -1 & 2 & 3 \end{vmatrix}$$

Expand the determinant along the top row:

$$\vec{PM} \times \vec{v} = \hat{i}(2(3) - 1(2)) - \hat{j}((-1)(3) - 1(-1)) + \hat{k}((-1)(2) - 2(-1))$$

$$\vec{PM} \times \vec{v} = \hat{i}(6 - 2) - \hat{j}(-3 + 1) + \hat{k}(-2 + 2)$$

$$\vec{PM} \times \vec{v} = \hat{i}(4) - \hat{j}(-2) + \hat{k}(0)$$

$$\vec{PM} \times \vec{v} = \langle 4, 2, 0 \rangle$$

###### 4. Calculate the Magnitudes

Now compute the magnitudes (lengths) of our cross product vector and the line's direction vector $\vec{v}$:

- **Magnitude of $\vec{PM} \times \vec{v}$:**

$$||\vec{PM} \times \vec{v}|| = \sqrt{4^2 + 2^2 + 0^2} = \sqrt{16 + 4 + 0} = \sqrt{20} = 2\sqrt{5}$$

- **Magnitude of $\vec{v}$:**

$$||\vec{v}|| = \sqrt{(-1)^2 + 2^2 + 3^2} = \sqrt{1 + 4 + 9} = \sqrt{14}$$


###### 5. Calculate the Distance $d$

Substitute these values into the distance formula $d = \frac{||\vec{PM} \times \vec{v}||}{||\vec{v}||}$:

$$d = \frac{\sqrt{20}}{\sqrt{14}} = \sqrt{\frac{20}{14}} = \sqrt{\frac{10}{7}}$$

To rationalize the denominator:

$$d = \frac{\sqrt{10}}{\sqrt{7}} \cdot \frac{\sqrt{7}}{\sqrt{7}} = \frac{\sqrt{70}}{7} \approx 1.20$$

The exact distance between the point and the line is **$\frac{\sqrt{70}}{7}$** (or approximately **$1.20$** units).

### Regroup 2
- Reflect on the physical modeling applications and mathematical setups.

### Skill Block 3
Explanations and derivations of the core concepts.

#### Worked Example
Determine whether the lines $L_{1}$ and $L_{2}$ are equal, parallel but not skew, skew, or intersecting.
$$L_{1}:x=5t, \quad y=-13-6t, \quad z=19-t$$
$$L_{2}:x=-1-6s, \quad y=-12-12s, \quad z=19-18s$$

* [ ] Equal
* [ ] Parallel
* [ ] Skew
* [ ] Intersecting

##### Solution
###### Given Data

- **Line 1 ($L_1$):** $x = 5t, \quad y = -13 - 6t, \quad z = 19 - t$

- **Line 2 ($L_2$):** $x = -1 - 6s, \quad y = -12 - 12s, \quad z = 19 - 18s$


###### Step 1: Extract and Compare Direction Vectors

First, we extract the direction vectors ($\vec{u}$ and $\vec{v}$) from the coefficients of the parameters $t$ and $s$:

- **Direction vector of $L_1$ ($\vec{u}$):** $\langle 5, -6, -1 \rangle$

- **Direction vector of $L_2$ ($\vec{v}$):** $\langle -6, -12, -18 \rangle$


To check if the lines are parallel, we see if one vector is a scalar multiple of the other ($\vec{u} = a\vec{v}$):

$$\frac{-6}{5} \neq \frac{-12}{-6}$$

Because the components do not scale proportionally, the direction vectors are **not parallel**. Looking at our relationship table, this leaves two possibilities: **Intersecting** or **Skew**.

###### Step 2: Check for an Intersection Point

To find out if they share a common point, we set the corresponding coordinate components equal to each other ($x_1 = x_2$, $y_1 = y_2$, $z_1 = z_2$):

1. $$5t = -1-6s$$

2. $$-13-6t = -12-12s$$

3. $$19-t = 19-18s$$


###### Solve the system using equations (1) and (3):

From equation (3), we can simplify by subtracting 19 from both sides:

$$-t = -18s \implies t = 18s$$

Substitute $t = 18s$ into equation (1):

$$5(18s) = -1 - 6s$$

$$90s = -1 - 6s$$

$$96s = -1 \implies s = -\frac{1}{96}$$

Now find $t$:

$$t = 18\left(-\frac{1}{96}\right) = -\frac{3}{16}$$

###### Test the values in the remaining equation (2):

We must check if these values for $t$ and $s$ satisfy equation (2) to see if the lines actually cross:

$$\text{Left Side (LS): } -13 - 6\left(-\frac{3}{16}\right) = -13 + \frac{9}{8} = -\frac{104}{8} + \frac{9}{8} = -\frac{95}{8} = -11.875$$

$$\text{Right Side (RS): } -12 - 12\left(-\frac{1}{96}\right) = -12 + \frac{1}{8} = -\frac{96}{8} + \frac{1}{8} = -\frac{95}{8} = -11.875$$

Since $\text{LS} = \text{RS}$, the system is consistent! The lines share a common intersection point.

###### Conclusion

Because the direction vectors are not parallel and the lines share a common point, the lines are **Intersecting**.

- [ ] Equal

- [ ] Parallel

- [x] **Skew** _(Incorrect option)_

- [x] **Intersecting** **(Correct Answer)**
#### Active Practice Problem
Given line A running through the points $A_{1}=(2,0,3)$ and $A_{2}=(4,7,8)$ as well as line B running through the points $B_{1}=(-3,-1,4)$ and $B_{2}=(-1,5,9)$, determine if the lines A and B are equal, parallel but not skew, skew, or intersecting.

* [ ] Equal
* [ ] Parallel
* [ ] Skew
* [ ] Intersecting

##### Workspace

##### Solution
Here is the step-by-step solution for **Problem S3.1** to determine the relationship between line A and line B.

###### Given Data

- **Line A** passes through: $A_1 = (2, 0, 3)$ and $A_2 = (4, 7, 8)$

- **Line B** passes through: $B_1 = (-3, -1, 4)$ and $B_2 = (-1, 5, 9)$


###### Step 1: Find and Compare Direction Vectors

First, we calculate the direction vectors ($\vec{u}$ and $\vec{v}$) for both lines by subtracting their given coordinates:

- **Direction vector for Line A ($\vec{u}$):**

$$\vec{u} = \vec{A_1A_2} = \langle 4 - 2, \ 7 - 0, \ 8 - 3 \rangle = \langle 2, 7, 5 \rangle$$

- **Direction vector for Line B ($\vec{v}$):**

$$\vec{v} = \vec{B_1B_2} = \langle -1 - (-3), \ 5 - (-1), \ 9 - 4 \rangle = \langle 2, 6, 5 \rangle$$


Now we check if the direction vectors are parallel ($\vec{u} = a\vec{v}$): Comparing the components:

- $x$-component ratio: $\frac{2}{2} = 1$

- $y$-component ratio: $\frac{7}{6}$


Since $\frac{2}{2} \neq \frac{7}{6}$, the direction vectors are **not parallel**. Based on the classification table, the lines must be either **Intersecting** or **Skew**.

###### Step 2: Write Parametric Equations for Both Lines

To check if they share a common point, we first write out their parametric forms using $A_1$ and $B_1$ as our initial points:

- **Line A (using parameter $t$):**

$$x = 2 + 2t$$

$$y = 0 + 7t = 7t$$

$$z = 3 + 5t$$

- **Line B (using parameter $s$):**

$$x = -3 + 2s$$

$$y = -1 + 6s$$

$$z = 4 + 5s$$


###### Step 3: Check for an Intersection Point

We set the corresponding coordinate equations equal to one another ($x_A = x_B$, $y_A = y_B$, $z_A = z_B$):

1. $$2 + 2t = -3 + 2s$$

2. $$7t = -1 + 6s$$

3. $$3 + 5t = 4 + 5s$$


###### Solve the system using equations (1) and (3):

From equation (3), subtract $5s$ and 3 from both sides:

$$5t - 5s = 1 \implies 5(t - s) = 1 \implies t - s = \frac{1}{5}$$

From equation (1), rearrange to group $t$ and $s$:

$$2t - 2s = -5 \implies 2(t - s) = -5 \implies t - s = -\frac{5}{2}$$

###### Notice the contradiction:

From equation (3) we get $t - s = 0.2$, but from equation (1) we get $t - s = -2.5$. Because $0.2 \neq -2.5$, it is mathematically impossible to find values for $t$ and $s$ that satisfy this system. The system is inconsistent, meaning the lines **do not share a common point**.

###### Conclusion

Since the direction vectors are **not parallel** and the lines **do not share a common point**, the lines are **Skew**.

- [ ] Equal

- [ ] Parallel

- [x] **Skew** **(Correct Answer)**

- [ ] Intersecting

### Regroup 3
- Verify calculations and mathematical reasoning.

### Synthesis Wrap-up
- Core takeaways from Session 04 and overview of homework homework assignment: *Equations of Lines and Planes in Space*.
