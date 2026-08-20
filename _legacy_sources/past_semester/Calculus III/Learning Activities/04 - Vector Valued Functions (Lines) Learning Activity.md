# Calc 3 Session 4

## Designing in 3D  
Vector Valued Functions (Lines)

> [!info] Printable PDF
> [[04 - Vector Valued Functions (Lines) Learning Activity.pdf]]

## 📋 Skill Roadmap for Today
- [ ] Skill 1: Parametric Equations of a Line
- [ ] Skill 2: Distance Between a Point and a Line
- [ ] Skill 3: Relationship Between Lines

## Essential notes & formulas
*This space is for you to use.*

<div style="page-break-after: always;"></div>

---
## Skill 1: Parametric Equation of a Line

> [!info]- Skill 1 Essential Formulas
> For points $P = (x_0, y_0, z_0)$ and $Q = (x, y, z)$
>
> **Vector Equation of a Line:**
> $$\vec{r}(t) = \vec{r}_0+t\vec{v}$$
> where $\vec{v}$ is any vector parallel to $\vec{PQ}$ and
> $\vec{v} = a\hat{i} + b\hat{j} + c\hat{k}$, which is useful for the forms below.
> 
> **Parametric Equations of a Line:**
> $$x = x_0 + at, \quad y = y_0 + bt, \quad z = z_0 + ct$$
> **Symmetric Equation of a Line:**
> $$\frac{x - x_0}{a} = \frac{y - y_0}{b} = \frac{z - z_0}{c}$$

### Skill 1 Demo:

Given a line with the points $P=(-4,-6,-2)$ and $Q=(10,2,1)$:
* Find the vector equation of the line. Evaluate at a few values of $t$.
* Find the parametric equation of the line.
* Convert the parametric equation into a symmetric equation.

%%
> [!Success] Demo Problem Solution
> **Step 1: Parametric Equation**
> - Establish vector $\vec{v}$:
> $$\vec{v}=\langle Q_x-P_x,\,Q_y-P_y,\,Q_z-P_z\rangle=\langle 14,\,8,\,3\rangle$$
> - Establish $\vec{r}_0$ to be the first point along the line:
> $$\vec{r}_0=\langle-4,\,-6,\,-2\rangle$$
> - Form Position Vector for the line:
> $$\boxed{\vec{r}(t)=\langle(14t-4),\, (8t-6),\, (3t-2)\rangle}$$
> **Step 2: Symmetric Equation**
> - Recognize vector components:
> $$x=14t-4,\quad y=8t-6,\quad z=3t-2$$
> - Solve with respect to $t$:
> $$t=\dfrac{x+4}{14},\quad t=\dfrac{y+6}{8},\quad t=\dfrac{z+2}{3}$$
> - Assemble full equation:
> $$\boxed{\dfrac{x+4}{14} = \dfrac{y+6}{8} = \dfrac{z+2}{3}}$$
> 

%%

<div style="page-break-after: always;"></div>

### Problem S1.1:

Given a line with the points $A = (1, 4, -2)$ and $B=(-3, 5, 0)$:
- Find the vector equation of the line. Evaluate at a few values of $t$.
- Find the Parametric equation of the line.
- Convert the parametric equation into a symmetric equation.

%%
> [!Success] Problem S1.1 Solution
> **Step 1: Parametric Equation**
> - Establish vector $\vec{v}$:
> $$\vec{v}=\langle Q_x-P_x,\,Q_y-P_y,\,Q_z-P_z\rangle=\langle -4,\,1,\,2\rangle$$
> - Establish $\vec{r}_0$ to be the first point along the line:
> $$\vec{r}_0=\langle1,\,4,\,-2\rangle$$
> - Form Position Vector for the line:
> $$\boxed{\vec{r}(t)=\langle(1-4t),\, (t+4),\, (2t-2)\rangle}$$
> **Step 2: Symmetric Equation**
> - Recognize vector components:
> $$x=1-4t,\quad y=t+4,\quad z=2t-2$$
> - Solve with respect to $t$:
> $$t=\dfrac{1-x}{4},\quad t= y-4,\quad t=\dfrac{z+2}{2}$$
> - Assemble full equation:
> $$\boxed{\dfrac{1-x}{4} =  y-4 =\dfrac{z+2}{2}}$$

%%

<div style="page-break-after: always;"></div>
### Problem S1.2:

Given a line $L$ with the following equation
$$\dfrac{x-2}{3}=\dfrac{y+1}{-2}=\dfrac{z-5}{4}$$
- Find the Parametric equation of the line.
- Find 2 points along the line that satisfy the symmetric equation.

%%
> [!Success] Problem S1.2 Solution
> **Step 1: Parametric Equation**
> - Rewrite symmetric form into parametric form:
> $$x = (3t+2),\quad y=-2t-1,\quad z=4t+5$$
> - Therefore,
> $$\boxed{\vec{v} = \langle(3t+2),\,(-2t-1),\,(4t+5)\rangle}$$
> **Step 2: Finding Points**
> - Assume $t=0$:
> $$\vec{r}(0)=\langle2, -1, 5\rangle$$
> - Assume $t=1$
> $$\vec{r}(1)=\langle5, -3, 9\rangle$$

%%





<div style="page-break-after: always;"></div>

---
## Skill 2: Distance Between a Point and a Line

> [!info]- Skill 2 Essential Formulas
>**Distance Between a Point and a Line**
>For a point $P$ on the line and point $M$ anywhere in space, the distance between $M$ and $P$ can be found using
>$$d = \dfrac{||\vec{PM}\times\vec{v}||}{||\vec{v}||}$$
>where $\vec{v}$ is a vector along the line and $\vec{PM}$ is the vector pointing from $P$ to $M$.

### Skill 2 Demo:

Find the distance between the point $M=(1,1,3)$ and the line $\dfrac{x-3}{4}=\dfrac{y+1}{2}=z-3$.

%%
> [!Success] Demo Problem Solution
> **Step 1: Establish Vectors**
> - Rewrite symmetric equation and find vector of the line, $\vec{v}$:
> $$x=3+4t, \quad, y = -1+2t, \quad, z = 3+t$$
> $\vec{v}=\langle4,\, 2,\, 1\rangle$
> - Point on the line (Assume $t=0$):
> $$P_0 = (3, -1, 3)$$
> - Find vector from the line to the point, $M$
> $$\vec{PM}=\langle(1-3),\, (1+1),\, (3-3)\rangle = \langle-2,\,2,\,0\rangle$$
> **Step 2: Finding Distance:**
> - Take Cross products and find the magnitude of cross product and $\vec{v}$
> $$\vec{PM}\times\vec{v}= \langle2, \, 2, \, -12\rangle$$
> $$||\vec{PM}\times\vec{v}||=\sqrt{2^2 + 2^2 + (-12)^2}=\sqrt{152}$$
> $$||\vec{v}||=\sqrt{4^2 + 2^2 + 1^2}=\sqrt{21}$$
> - Find the distance:
> $$\boxed{d = \dfrac{||\vec{PM}\times\vec{v}||}{||\vec{v}||} = \sqrt{\dfrac{152}{21}}}$$
> 

%%
<div style="page-break-after: always;"></div>

---
### Problem S2.1:

Find the distance between the point $(0,3,6)$ and the line with parametric equations $x=1-t,\;y=1+2t,\;z=5+3t$.

%%
> [!Success] Problem S2.1 Solution
> **Step 1: Establish Vectors:**
> - Find point on the line (Assume $t=0$):
> $$P_0 = (1, 1, 5)$$
> - Find vector from the line to the point, $M$
> $$\vec{PM}=\langle(0-1),\, (3-1),\, (5-6)\rangle = \langle--1,\,1,\,1\rangle$$
> **Step 2: Finding Distance:**
> - Take Cross products and find the magnitude of cross product and $\vec{v}$
> $$\vec{PM}\times\vec{v}= \langle4, \, -2, \, 0\rangle$$
> $$||\vec{PM}\times\vec{v}||=\sqrt{6^2 + 14^2 + (-4)^2}=\sqrt{20}$$
> $$||\vec{v}||=\sqrt{3^2 + (-1)^2 + 1^2}=\sqrt{14}$$
> - Find the distance:
> $$\boxed{d = \dfrac{||\vec{PM}\times\vec{v}||}{||\vec{v}||} = \sqrt{\dfrac{10}{7}}}$$

<div style="page-break-after: always;"></div>

%%
### Problem S2.2:

Find the distance between the point $M = (2, -1, 4)$ given the line $\dfrac{x-1}{3}=\dfrac{y+2}{-1}=z+1$.

%%
> [!Success] Problem S2.2 Solution
> **Step 1: Establish Vectors**
> - Rewrite symmetric equation and find vector of the line, $\vec{v}$:
> $$x=1+3t, \quad, y = -2-t, \quad, z = -1+t$$
> $\vec{v}=\langle3,\, -1,\, 1\rangle$
> - Point on the line (Assume $t=0$):
> $$P_0 = (1, -2, -1)$$
>  - Find vector from the line to the point, $M$
> $$\vec{PM}=\langle(2-1),\, (-1+1),\, (4+1)\rangle = \langle-1,\,1,\,5\rangle$$
> **Step 2: Finding Distance:**
> - Take Cross products and find the magnitude of cross product and $\vec{v}$
> $$\vec{PM}\times\vec{v}= \langle6, \, 14, \, -4\rangle$$
> $$||\vec{PM}\times\vec{v}||=\sqrt{6^2 + 14^2 + (-4)^2}=\sqrt{248}$$
> $$||\vec{v}||=\sqrt{3^2 + (-1)^2 + 1^2}=\sqrt{11}$$
> - Find the distance:
> $$\boxed{d = \dfrac{||\vec{PM}\times\vec{v}||}{||\vec{v}||} = \sqrt{\dfrac{248}{11}}}$$

%%
<div style="page-break-after: always;"></div>

---
## Skill 3: Relationships Between Lines

> [!info]- Skill 3 Essential Formulas
> Comparing the direction vectors of two lines can tell us whether the lines are parallel but not equal, equal, intersecting, or skew. Two pieces of information are needed:
> 1. Whether the direction vectors are parallel 
> $$\vec{u}=a\vec{v}$$
> 2. Whether the lines share a point
> $$x(t)=x(s),\quad y(t)=y(s),\quad z(t)=z(s)$$
> 
>
|                                        | Lines share a common point | Lines do not share a common point |
| -------------------------------------- | -------------------------- | --------------------------------- |
| **Direction vectors are parallel**     | Equal                      | Parallel but not equal            |
| **Direction vectors are not parallel** | Intersecting               | Skew                              |

### Skill 3 Demo:

Determine whether the lines $L_1$ and $L_2$ are equal, parallel but not skew, skew, or intersecting.
$$
L_1:x=5t,\: y=-13-6t,\: z=19-t
$$
$$
L_2:x=-1-6s,\;y=-12-12s,\:z=19-18s
$$
- [ ] Equal
- [ ] Parallel
- [ ] Skew
- [ ] Intersecting  %% at 15/16, -190/16, 307/16) %%
%%
> [!Success] Demo Problem Solution
> **Step 1: Check Parallelism:**
> - Establish vectors for lines $1$ and $2$
> $$\vec{v_1}=\langle5, -6, -1\rangle,\quad \vec{v_2}=\langle-6, -12, -18\rangle$$
> - Check if vectors are scalar multiples:
> $$\text{if } \vec{v_1}=a\vec{v_2},\, \text{then } \dfrac{\vec{v_1}}{v_2}=a$$
> $$\dfrac{5}{-6}\neq \dfrac{-6}{-12}\neq\dfrac{-1}{-18}$$
> - Therefore, not parallel nor equal.
> **Step 2: Intersection Check:**
> - If the lines intersect, there exists a $t$ and $s$ value such that the lines equal one another. 
> - Establish system of equations:
> $$5t = -1-6s, \quad -13-6t = -12-12s,\quad 19-t=19-18s$$
> - Solve third equation:
> $$t = 18s$$
> - Substitute $t$ into first equation:
> $$5(18s) = -1 -6s \Rightarrow s = -\dfrac{1}{96}$$
> - Solve for $t$:
> $$t = 18s = -\dfrac{3}{16}$$
> - Check Second Equation:
> $$-13-6(\dfrac{-3}{16})=-12-12(-\dfrac{1}{96}) \Rightarrow -\dfrac{95}{8}=-\dfrac{95}{8}$$
> - Therefore, lines intersect.

%%

<div style="page-break-after: always;"></div>

---
### Problem S3.1:

Given line $A$ running through the points $A_1=(2,0,3)$ and $A_2=(4,7,8)$ as well as line $B$ running through the points $B_1=(-3,-1,4)$ and $B_2=(-1,5,9)$, determine if the lines A and B are equal, parallel but not skew, or intersecting.
 
- [ ] Equal
- [ ] Parallel
- [ ] Skew
- [ ] Intersecting
%%
> [!Success] Problem S3.1 Solution
> **Step 1: Establish Lines and Vectors:**
> - find direction vectors for lines $A$ and $B$:
> $$\vec{d_A}=A_2-A_1 = \langle2, 7, 5\rangle$$
> $$\vec{d_B} = B_2-B_1 = \langle2, 6, 5\rangle$$
> - Find Line Equations:
> $$L_A: A_1 + t\vec{d_A} \Rightarrow x = 2+2t,\quad y = 7t, \quad, z=3+5t$$
> $$L_B: B_1 + s\vec{d_B} \Rightarrow x = -3+2s,\quad y = -1+6s,\quad z=4+5s$$
> **Step 2: Check Parallelism:**
> - Check if vectors are scalar multiples:
> $$\text{if } \vec{d_A}=\alpha\vec{d_B},\, \text{then } \dfrac{\vec{d_A}}{d_B}=\alpha$$
> $$\dfrac{2}{2}=\dfrac{5}{5}\neq\dfrac{7}{6}$$
> - Therefore, not parallel nor equal.
> **Step 3: Intersection Check:**
> - If the lines intersect, there exists a $t$ and $s$ value such that the lines equal one another. 
> - Establish system of equations from the line equations:
> $$2+2t = -3+2s, \quad 7t = -1+6s,\quad 3+5t=4+5s$$
> - Equate corresponding components:
> $$\text{From x: } 2+2t=-3+2s \Rightarrow t-s = -\dfrac{5}{2}$$
> $$\text{From y: } 7t-1+6s$$
> $$\text{From z: } 3+5t = 4+5s \Rightarrow t-s=\dfrac{1}{5}$$
> - since the values of $t-s$ are not consistent, there is no solution. Therefore, the lines are skew.

%%
