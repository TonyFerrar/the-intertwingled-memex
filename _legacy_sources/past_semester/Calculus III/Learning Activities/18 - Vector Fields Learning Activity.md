# Calc 3 Session 18

## Vector Fields
Fields All Around us


> [!info] Printable PDF
> [[18 - Vector Fields Learning Activity.pdf]]

## 📋 Skill Roadmap for Today
- [ ] [[Defining Vector Fields]]
- [ ] [[Visualizing and Classifying Field Behavior]]
- [ ] [[Conservative Fields]]

## Essential notes & formulas
*This space is for you to use.*

<div style="page-break-after: always;"></div>

---
## Skill 1: Defining Vector Fields

> [!info] Defining Vector Fields Essential Formulas
> **General Vector Field:**
> $$\mathbf{F}(x,y,z)=\langle
> P(x,y,z),\,Q(x,y,z),\,R(x,y,z)\rangle$$
> $$ = P(x,y,z) \hat{i} + Q(x,y,z) \hat{j} + R(x,y,z) \hat{k}$$
> ___
> **Magnitude of a Vector Field**
> $$|\mathbf{F}|=\sqrt{P^2+Q^2+R^2}$$
> 

### Skill 1 Demo:

Given $\mathbf{F}(x,y)=\langle xy,\,x^2-y\rangle$, find $\mathbf{F}(2,1)$, $||\mathbf{F}||$, and interpret.
%%
> [!Success] Skill 1 Demo Solution
> 1. Substitute $x=2$, $y=1$:  
> $P(2,1)=2(1)=2$, $Q(2,1)=4-1=3$  
> $\Rightarrow\ \mathbf{F}(2,1)=\langle2,3\rangle$  
> 2. Magnitude $|\mathbf{F}|=\sqrt{2^2+3^2}=\sqrt{13}\approx3.6$.  
> 3. Meaning – at (2, 1) the field points up and right with moderate strength.

%%
<div style="page-break-after: always;"></div>

---
### Problem 1.1:

1. $\mathbf{F}(x,y)=\langle2x-y,\,x+3y\rangle$.  Find $\mathbf{F}(1,2)$.
2. $\mathbf{G}(x,y,z)=\langle yz,\,xz,\,xy\rangle$.  Find $\mathbf{G}(1,2,3)$.
%%
> [!Success] Problem 1.1 Solution
> **Part 1: $\mathbf{F}(x,y)$**
>$\langle2(1)-2,\,1+6\rangle=\langle0,7\rangle$.
>___
>**Part 2: $\mathbf{G}(x,y,z)$**
>$\langle6,3,2\rangle$.

%%
<div style="page-break-after: always;"></div>

---
### Problem 1.2:

1. $\mathbf{F}(x,y)=\langle e^{x}\cos y,\,e^{x}\sin y\rangle$. Find $\mathbf{F}(0,\tfrac{\pi}{2})$ and interpret.
2. $\mathbf{G}(x,y)=\langle e^{-x^2},\,\sin y\rangle$.  Evaluate $\mathbf{G}(1,\tfrac{\pi}{6})$ and $||\mathbf{G}(1,\frac{\pi}{6})||$.
%%
> [!Success] Problem 1.2 Solution
> **Step 1: $\mathbf{F(x,y)}$**
> At $(0,\tfrac{\pi}{2})$:  
> $P=e^{0}\cos(\tfrac{\pi}{2})=0$, $Q=e^{0}\sin(\tfrac{\pi}{2})=1$.  
> $\mathbf{F}(0,\tfrac{\pi}{2})=\langle0,1\rangle$ — unit vector pointing straight up.
> ___
> **Step 2: $\mathbf{G}(x,y)$**
> $P=e^{-1}\approx0.3679$, $Q=\sin(\tfrac{\pi}{6})=\tfrac{1}{2}$. 
> $\mathbf{F}(1,\tfrac{\pi}{6})=\langle0.3679,\,0.5\rangle$ → points
> up/right, small magnitude.
> $||\mathbf{G}(1,\frac{\pi}{6})||=0.6208$

%%
<div style="page-break-after: always;"></div>

---
## Skill 2: Visualizing and Classifying Behavior
### Skill 2 Demo:

Compare two fields:

A. $\mathbf{F}(x,y)=\langle x,y\rangle$ (radial)  
B. $\mathbf{G}(x,y)=\langle -y,\,x\rangle$ (rotational)

Plot both fields using software.

%%
> [!Success] Skill 2 Demo Solution
>For $\mathbf{F}$:
>- At (1,0): $\langle1,0\rangle$ (right)
>- At (0,1): $\langle0,1\rangle$ (up)
>- Vectors point away from the origin; magnitude increases with distance.
> → **Radial source field.**
>___
>For $\mathbf{G}$:
>- At (1,0): $\langle0,1\rangle$ (up)
>- At (0,1): $\langle-1,0\rangle$ (left)
>- Vectors circle counterclockwise.
>- → **Rotational field.**
>___
>Interpretation:  
>$\mathbf{F}$ models outward flow from a source (like air leaving a vent).  
>$\mathbf{G}$ models circular motion (like fluid swirling around a drain).

%%
<div style="page-break-after: always;"></div>

---
### Problem 2.1:

1. Determine whether $\mathbf{F}(x,y)=\langle x,y\rangle$ is radial, rotational, or neither. 
2. Sketch $\mathbf{G}(x,y)=\langle -y,\,x\rangle$ on the points (1,0), (0,1), (-1,0), (0,-1). 
3. Plot the field using software

%%
> [!Success] Problem 2.1 Solution
>**Step 1: $\mathbf{F}(x,y)$**
>Vectors align with the position vector $\langle x,y\rangle$ → **radial**.
>___
>**Step 2: $\mathbf{G}(x,y)$**
>(1,0): up (0,1): left (-1,0): down (0,-1): right.  
>Pattern forms circles about the origin → **rotational** (counterclockwise).

%%
<div style="page-break-after: always;"></div>

---
### Problem 2.2:

Plot using software and classify the behavior.  
1. $\mathbf{H}(x,y)=\langle -x,\,y\rangle$ 
2. $\mathbf{J}(x,y)=\langle e^{x},\,e^{y}\rangle$  
3. $\mathbf{K}(x,y)=\langle -\sin y,\,\cos x\rangle$
%%
> [!Success] Problem 2.2 Solution
> **Step 1: $\mathbf{H}(x,y)$**
> Vectors flip horizontally; right side points left, left side points right. 
> Flows upward on top and downward on bottom → **saddle-type field** (neither radial nor rotational).
> ___
> **Step 2: $\mathbf{J}(x,y)$**
> Magnitude grows rapidly in positive $x$ and $y$ directions.  
> Vectors point outward and away from the origin → **radial source**, exponential strength.
> ___
> **Step 3: $\mathbf{K}(x,y)$**
> - At (0,0): $\langle0,1\rangle$  
> - At $(\tfrac{\pi}{2},0)$: $\langle0,0\rangle$  
> - At $(0,\tfrac{\pi}{2})$: $\langle-1,1\rangle$  
> Shows curved, oscillatory directions combining rotation and radial variation.  
> → **Complex periodic flow**, partly rotational.

%%
<div style="page-break-after: always;"></div>

---
## Skill 3 Conservative Vector Fields

> [!info] Conservative Vector Fields Essential Formulas
> **General 2D Vector Field:**
> $$\mathbf{F}(x,y,z)=\langle
> P(x,y,z),\,Q(x,y,z)\rangle$$
> ---
> **The Gradient of a Scalar Function**
> $$\nabla f=\left\langle \frac{\partial f}{\partial x},\,\frac{\partial f}{\partial y},\,\frac{\partial f}{\partial z}\right\rangle$$
> ___
> **Conservative Test (2D)**
> $$\frac{\partial P}{\partial y}=\frac{\partial Q}{\partial x}$$
> 

### Skill 3 Demo:

Given $f(x,y)=x^2+y^2$, find $\nabla f$ and describe the field. Is $\nabla f$ conservative?

%%
> [!Success] Skill 3 Demo Solution
>$f_x=2x,\quad f_y=2y$  
>$\nabla f=\langle2x,\,2y\rangle$ 
>Direction depends on both $x$ and $y$; strongest when both large →
>sheared radial pattern.
> $P = 2x \rightarrow \frac{\partial P}{\partial y} = 0$
> $Q = 2y \rightarrow \frac{\partial Q}{\partial x} = 0$
> $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$
> Thus, the field $\nabla f$ is conservative.

%%
<div style="page-break-after: always;"></div>

---
### Problem 3.1:

1. Determine if $\mathbf{F}(x,y)=\langle2xy,\,x^2\rangle$ is conservative.
2. Find $\nabla g$ for $g(x,y,z)=e^{x+y+z}$ and classify the field.
%%
> [!Success] Problem 3.1 Solution
> **Step 1: $\mathbf{F}(x,y)$**
> $P=2xy,\;Q=x^2.$  
> $P_y=2x,\;Q_x=2x\Rightarrow P_y=Q_x$  → **conservative**.  
> ___
> **Step 2: $\nabla g$**
> $f_x=f_y=f_z=e^{x+y+z}$ → $\nabla f=\langle e^{x+y+z},\,e^{x+y+z},\,e^{x+y+z}\rangle.$  
> Uniform direction $\langle1,1,1\rangle$ with exponentially increasing magnitude → **diagonal source** field

%%
<div style="page-break-after: always;"></div>

---
### Problem 3.2:

Use the cross-partial test to decide if $\mathbf{F}(x,y)=\langle y^2,\,2xy+1\rangle$ is conservative.
%%
> [!Success] Problem 3.2 Solution
> $P=y^2,\;Q=2xy+1.$  
> $P_y=2y,\;Q_x=2y$ → equal  → **conservative**.  

%%

