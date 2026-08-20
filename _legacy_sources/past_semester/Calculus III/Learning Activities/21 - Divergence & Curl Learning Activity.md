
# Calc 3 Session 23 

## Curl, Divergence, and Physical Systems
Flow Under pressure 

> [!info] Printable PDF
> [[21 - Divergence & Curl Learning Activity.pdf]]

## 📋 Skill Roadmap for Today
1. [[Divergence]]
2. [[Curl]]
3. [[Curl & Divergence in Physical Systems]]

## Essential notes & formulas
*This space is for you to use.*

<div style="page-break-after: always;"></div>

---

## Skill 1: Divergence 

> [!info] Divergence Essential Formulas
> Insert Relevant Formulas Here
> For a vector field  
> $$\mathbf{F}(x,y,z) = P(x,y,z)\,\mathbf{i} + Q(x,y,z)\,\mathbf{j} + R(x,y,z)\,\mathbf{k},$$  
> the divergence is
> $$\nabla \cdot \mathbf{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}.$$
> + **2D version:**  
> If $\mathbf{F}(x,y) = P(x,y)\,\mathbf{i} + Q(x,y)\,\mathbf{j}$,
> $$\nabla \cdot \mathbf{F} = \frac{\partial P}{\partial x}+ \frac{\partial Q}{\partial y}.$$
> Interpretation: net “outflow” from a point.

### Skill 1 Demo:
Compute the divergence of the vector field
$$
\mathbf{F}(x,y,z)
= 3x^2y\,\mathbf{i}
+ (x^2 + y^2)\,\mathbf{j}
+ (xyz)\,\mathbf{k}.
$$

Then evaluate $\nabla \cdot \mathbf{F}$ at the point $(1,2,1)$.

**Tasks**
1. Compute the divergence symbolically.
2. Plug in the point $(1,2,1)$.
3. State whether the field is expanding, compressing, or incompressible at that point.
<div style="page-break-after: always;"></div> 

%%

> [!Success] Skill 1 Demo  Solution
> 
> We are given
> $$
> \mathbf{F}(x,y,z)
> = 3x^2y\,\mathbf{i}
> + (x^2 + y^2)\,\mathbf{j}
> + (xyz)\,\mathbf{k}.
> $$
> So
> $P(x,y,z) = 3x^2y$
> $Q(x,y,z) = x^2 + y^2$
> $R(x,y,z) = xyz$
> The divergence is
> $$
> \nabla \cdot \mathbf{F}
> = \frac{\partial P}{\partial x}
> + \frac{\partial Q}{\partial y}
> + \frac{\partial R}{\partial z}.
> $$
> **Compute each partial derivative**
> $\displaystyle \frac{\partial P}{\partial x}$
> $P = 3x^2y$  
> Treat $y$ as a constant:
> $$
> \frac{\partial P}{\partial x}
> = 3 \cdot 2x \cdot y
> = 6xy.
> $$
> $\displaystyle \frac{\partial Q}{\partial y}$
> $Q = x^2 + y^2$  
> Treat $x$ as a constant:
> $$
> \frac{\partial Q}{\partial y}
> = 0 + 2y
> = 2y.
> $$
> $\displaystyle \frac{\partial R}{\partial z}$
> $R = xyz$  
> Treat $x$ and $y$ as constants:
> $$
> \frac{\partial R}{\partial z}
> = xy.
> $$
> **Add them to find divergence**
> $$
> \nabla \cdot \mathbf{F}
> = 6xy + 2y + xy
> = 7xy + 2y.
> $$
> So the divergence is
> $$
> \nabla \cdot \mathbf{F}(x,y,z) = 7xy + 2y.
> $$
> Note: there is no $z$ in the final expression, which is fine.
> **Evaluate at $(1,2,1)$**
> Plug in $x = 1$, $y = 2$:
> $$
> \nabla \cdot \mathbf{F}(1,2,1)
> = 7(1)(2) + 2(2)
> = 14 + 4
> = 18.
> $$
> **Interpretation**
> At the point $(1,2,1)$, the divergence is positive and fairly large:
> $\nabla \cdot \mathbf{F}(1,2,1) = 18 > 0$
> This indicates **local expansion** (source-like behavior) at that point. The field behaves as if material is "flowing out" from the region near $(1,2,1)$.

%%

---
### Problem 1.1 — Divergence with Trigonometric & Exponential Components

Let
$$
\mathbf{F}(x,y,z)
= e^x\sin y\,\mathbf{i}
+ \cos(xy)\,\mathbf{j}
+ z^2 e^{y}\,\mathbf{k}.
$$

Compute $\nabla \cdot \mathbf{F}$.

**Then:**  
Determine all points (if any) where the divergence is zero.

<div style="page-break-after: always;"></div> 

%%
> [!Success] Problem 1.1 Solution
> 
> We are given
> $$
> \mathbf{F}(x,y,z)
> = e^x \sin y\,\mathbf{i}
> + \cos(xy)\,\mathbf{j}
> + z^2 e^{y}\,\mathbf{k}.
> $$
> So
> $P(x,y,z) = e^x \sin y$
> $Q(x,y,z) = \cos(xy)$
> $R(x,y,z) = z^2 e^y$
> The divergence is
> $$
> \nabla \cdot \mathbf{F}
> = \frac{\partial P}{\partial x}
> + \frac{\partial Q}{\partial y}
> + \frac{\partial R}{\partial z}.
> $$
> **Compute $\partial P/\partial x$**
> $P = e^x \sin y$  
> Treat $y$ as a constant, so:
> $$
> \frac{\partial P}{\partial x}
> = e^x \sin y.
> $$
> (derivative of $e^x$ is $e^x$)
> **Compute $\partial Q/\partial y$**
> $Q = \cos(xy)$  
> Think of $xy$ as the inside function. Use chain rule:
> Outer derivative: derivative of $\cos(u)$ is $-\sin(u)$
> Inner derivative: $\frac{\partial}{\partial y}(xy) = x$
> So
> $$
> \frac{\partial Q}{\partial y}
> = -\sin(xy) \cdot x
> = -x\sin(xy).
> $$
> **Compute $\partial R/\partial z$**
> $R = z^2 e^y$  
> Treat $e^y$ as a constant when differentiating with respect to $z$:
> $$
> \frac{\partial R}{\partial z}
> = 2z e^y.
> $$
> **Combine to find divergence**
> $$
> \nabla \cdot \mathbf{F}(x,y,z)
> = e^x \sin y
> - x\sin(xy)
> + 2z e^y.
> $$
> **Find points where divergence is zero**
> We would need to solve
> $$
> e^x \sin y
> - x\sin(xy)
> + 2z e^y = 0.
> $$
> This is a **nonlinear equation** in three variables, so there is no simple closed-form description of *all* solutions. However, we can identify some families of solutions by inspection.
> **Example 1: Take $z = 0$ and $y = 0$.**
> If $y = 0$, then $\sin y = 0$ and $e^x \sin y = 0$.
> Also $xy = x \cdot 0 = 0$, so $\sin(xy) = \sin 0 = 0$ and $-x\sin(xy) = 0$.
> If $z = 0$, then $2z e^y = 0$.
> So for **any** $x$,
> $$
> \nabla \cdot \mathbf{F}(x,0,0) = 0 + 0 + 0 = 0.
> $$
> Thus **every point of the form $(x,0,0)$ has zero divergence.**
> **Example 2: Take $x = 0$ and $z = 0$.**
> If $x = 0$, then $xy = 0$, so $\sin(xy) = \sin 0 = 0$.
> So $-x\sin(xy) = 0$.
> If $x = 0$, the first term becomes $e^0 \sin y = \sin y$.
> If $z = 0$, then $2z e^y = 0$.
> So along the line $(0,y,0)$ we have
> $$
> \nabla \cdot \mathbf{F}(0,y,0) = \sin y.
> $$
> This is zero whenever $\sin y = 0$, i.e., $y = n\pi$ for any integer $n$.
> So **all points of the form $(0, n\pi, 0)$ for integers $n$ have zero divergence.**
> **Summary**
> Divergence:
> $$
> \nabla \cdot \mathbf{F}(x,y,z)
> = e^x \sin y
> - x\sin(xy)
> + 2z e^y.
> $$
> There are many points where divergence is zero (infinitely many).  
> Examples:
> All $(x,0,0)$, for any real $x$.  
> All $(0, n\pi, 0)$ for integers $n$.
> This gives students good practice seeing that **divergence = 0** can describe entire lines or surfaces of points in space.

%%

---
## Skill 2: Curl

> [!info] Curl Essential Formulas
>  $$
>  \nabla \times \mathbf{F}
>  = \left( R_y - Q_z \right)\mathbf{i}
>  + \left( P_z - R_x \right)\mathbf{j}
>  + \left( Q_x - P_y \right)\mathbf{k}
>  $$

### Skill 2 Demo:
Consider the vector field
$$
\mathbf{F}(x,y,z)
= (y^2z)\,\mathbf{i}
+ (xz^2)\,\mathbf{j}
+ (xy^2)\,\mathbf{k}.
$$

**Tasks**

1. Compute the curl $\nabla \times \mathbf{F}(x,y,z)$.
2. Evaluate the curl at the point $(1,1,1)$.
3. Based on your result at $(1,1,1)$, describe whether the field exhibits local rotational behavior there.
<div style="page-break-after: always;"></div> 

%%

> [!Success] Skill 2 Demo Solution
> 
> We are given
> $$
> \mathbf{F}(x,y,z)
> = (y^2z)\,\mathbf{i}
> + (xz^2)\,\mathbf{j}
> + (xy^2)\,\mathbf{k}.
> $$
> So
> $P(x,y,z) = y^2z$
> $Q(x,y,z) = xz^2$
> $R(x,y,z) = xy^2$
> For a 3D vector field, the curl is
> $$
> \nabla \times \mathbf{F}
> =
> \begin{vmatrix}
> \mathbf{i} & \mathbf{j} & \mathbf{k} \\
> \frac{\partial}{\partial x} &
> \frac{\partial}{\partial y} &
> \frac{\partial}{\partial z} \\
> P & Q & R
> \end{vmatrix}.
> $$
> Expanded, this gives
> $$
> \nabla \times \mathbf{F}
> = \left( R_y - Q_z \right)\mathbf{i}
> + \left( P_z - R_x \right)\mathbf{j}
> + \left( Q_x - P_y \right)\mathbf{k}.
> $$
> **Compute the needed partial derivatives**
> $\displaystyle R_y$
> $R = xy^2$, so
> $$
> R_y = \frac{\partial}{\partial y}(xy^2) = x \cdot 2y = 2xy.
> $$
> $\displaystyle Q_z$
> $Q = xz^2$, so
> $$
> Q_z = \frac{\partial}{\partial z}(xz^2) = x \cdot 2z = 2xz.
> $$
> $\displaystyle P_z$
> $P = y^2z$, so
> $$
> P_z = \frac{\partial}{\partial z}(y^2z) = y^2.
> $$
> $\displaystyle R_x$
> $R = xy^2$, so
> $$
> R_x = \frac{\partial}{\partial x}(xy^2) = y^2.
> $$
> $\displaystyle Q_x$
> $Q = xz^2$, so
> $$
> Q_x = \frac{\partial}{\partial x}(xz^2) = z^2.
> $$
> $\displaystyle P_y$
> $P = y^2z$, so
> $$
> P_y = \frac{\partial}{\partial y}(y^2z) = 2yz.
> $$
> **Plug into the curl formula**
> - $i$-component:
> $$
> R_y - Q_z = 2xy - 2xz = 2x(y - z).
> $$
> - $j$-component:
> $$
> P_z - R_x = y^2 - y^2 = 0.
> $$
> $k$-component:
> $$
> Q_x - P_y = z^2 - 2yz.
> $$
> So
> $$
> \nabla \times \mathbf{F}(x,y,z)
> = \big(2x(y - z)\big)\,\mathbf{i} + 0\,\mathbf{j} + (z^2 - 2yz)\,\mathbf{k}. $$
> We can rewrite this as
> $$\nabla \times \mathbf{F}(x,y,z)= 2x(y - z)\,\mathbf{i}+ (z^2 - 2yz)\,\mathbf{k}.$$
> **Evaluate at $(1,1,1)$**
> Set $x = 1$, $y = 1$, $z = 1$:
> $i$-component:
> $$2x(y - z) = 2(1)(1 - 1) = 0.$$
> $k$-component:
> $$z^2 - 2yz = 1^2 - 2(1)(1) = 1 - 2 = -1.$$
> So
> $$
> \nabla \times \mathbf{F}(1,1,1)= 0\,\mathbf{i} + 0\,\mathbf{j} - 1\,\mathbf{k}= -\mathbf{k}.$$
> **Interpretation at $(1,1,1)$**
> The curl is **nonzero** at $(1,1,1)$.
> Specifically, it points in the **negative $z$-direction** with magnitude $1$.
> This means the field has **local rotational behavior** around an axis parallel to the $z$-axis, with a sense of rotation corresponding to $-\mathbf{k}$ at that point.


%%

---
### Problem 2.1 — 2D Curl (Scalar Rotation) with Trig

Let
$$
\mathbf{F}(x,y)
= \big(\sin x + y\big)\,\mathbf{i}
+ \big(\cos y - x\big)\,\mathbf{j}.
$$

In 2D, the curl is a scalar given by
$$
\text{curl}\,\mathbf{F}
= \frac{\partial Q}{\partial x}
- \frac{\partial P}{\partial y},
$$
where $\mathbf{F} = P\,\mathbf{i} + Q\,\mathbf{j}$.

**Tasks**

1. Identify $P(x,y)$ and $Q(x,y)$.
2. Compute $\text{curl}\,\mathbf{F}(x,y)$.
3. Determine all points $(x,y)$ where $\text{curl}\,\mathbf{F} = 0$, and interpret what “curl = 0” means physically in this 2D setting.
<div style="page-break-after: always;"></div> 

%%

> [!Success] Problem 2.1 Solution
> We are given the 2D field
> $$
> \mathbf{F}(x,y)
> = \big(\sin x + y\big)\,\mathbf{i}
> + \big(\cos y - x\big)\,\mathbf{j}.
> $$
> So
> - $P(x,y) = \sin x + y$
> - $Q(x,y) = \cos y - x$
> In 2D, the curl is a scalar:
> $$
> \text{curl}\,\mathbf{F} = \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}.$$
> **Step 1: Compute $\partial Q/\partial x$**
> $Q(x,y) = \cos y - x$.
> Treat $y$ as a constant:
> $$
> \frac{\partial Q}{\partial x}
> = 0 - 1
> = -1.
> $$
> **Step 2: Compute $\partial P/\partial y$**
> $P(x,y) = \sin x + y$.
> Treat $x$ as a constant:
> $$
> \frac{\partial P}{\partial y}
> = 0 + 1
> = 1.
> $$
> **Step 3: Compute curl**
> $$\text{curl}\,\mathbf{F}(x,y) = \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = (-1) - (1) = -2. $$
> So the curl is a **constant**:
> $$\text{curl}\,\mathbf{F}(x,y) = -2 \quad \text{for all }(x,y).$$
> **Step 4: Where is curl equal to zero?**
> We solve
> $$\text{curl}\,\mathbf{F}(x,y) = -2 = 0,$$
> which has **no solution**.
> So there are **no points** in the plane where the curl is zero.
> **Step 5: Physical interpretation in 2D**
> In 2D, curl is a scalar that measures the tendency of the field to **rotate** around a point.
> A **nonzero constant curl** ($-2$ everywhere) means the field has a **uniform rotational tendency** at every point:
> The sign (negative) tells us the direction of rotation (clockwise vs counterclockwise, depending on the orientation convention).
> The magnitude ($2$) tells us the strength of that rotation.
> Because $\text{curl}\,\mathbf{F}$ is never zero:
> There is **no point** in the plane where the flow is locally non-rotating.
> The entire field has a built-in "spin" in the same rotational sense everywhere.

%%
___
## Skill 3: Curl & Divergence in Physical Systems

> [!info] Divergence & Curl Essential Formulas
> 
> The divergence is
> $$
> \nabla \cdot \mathbf{F}
> = \frac{\partial P}{\partial x}
> + \frac{\partial Q}{\partial y}
> + \frac{\partial R}{\partial z}
> $$
> Recall the curl formula:
> $$
> \nabla \times \mathbf{F}
> = \left( R_y - Q_z \right)\mathbf{i}
> + \left( P_z - R_x \right)\mathbf{j}
> + \left( Q_x - P_y \right)\mathbf{k}
> $$

### Skill 3 Demo — Rotating Flow in the Plane (Fan Model)

A simplified 2D velocity field for air moving under a ceiling fan is modeled by
$$
\mathbf{F}(x,y) = -y\,\mathbf{i} + x\,\mathbf{j}.
$$

Here $(x,y)$ are coordinates in the horizontal plane under the fan.

**Tasks**

1. Compute the divergence $\nabla \cdot \mathbf{F}(x,y)$.
2. Compute the 2D curl (scalar)
   $$
   \text{curl}\,\mathbf{F}
   = \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}.
   $$
3. Classify the field as:
   - incompressible or not (based on divergence),
   - rotational or irrotational (based on curl).
4. In plain language, explain what this model is saying about the way air moves under the fan.
<div style="page-break-after: always;"></div> 

%%
> [!Success] Skill 3 Demo Solution
> 
> We have
> $$\mathbf{F}(x,y) = -y\,\mathbf{i} + x\,\mathbf{j},$$
> so
> $P(x,y) = -y$
> $Q(x,y) = x$.
> **Divergence**
> In 2D,
> $$
> \nabla \cdot \mathbf{F}
> = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y}.
> $$
> Compute:
> $\displaystyle \frac{\partial P}{\partial x} = \frac{\partial}{\partial x}(-y) = 0$  
> (no $x$ in $-y$)
> $\displaystyle \frac{\partial Q}{\partial y} = \frac{\partial}{\partial y}(x) = 0$  
> (no $y$ in $x$)
> So
> $$\nabla \cdot \mathbf{F}(x,y) = 0 + 0 = 0.$$
> The field is **divergence-free** (source-free, incompressible) everywhere.
> **2D curl (scalar)**
> In 2D,
> $$
> \text{curl}\,\mathbf{F}
> = \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}.
> $$
> Compute:
> $\displaystyle \frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(x) = 1$
> $\displaystyle \frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(-y) = -1$
> So
> $$\text{curl}\,\mathbf{F}(x,y)= 1 - (-1) = 2.$$
> The curl is a **constant positive value** everywhere.
> **Classification**
> **Incompressible?** Yes. $\nabla \cdot \mathbf{F} = 0$ everywhere, so there is **no net expansion or compression** at any point. The total amount of air is conserved locally.
> **Rotational?** Yes. $\text{curl}\,\mathbf{F} = 2 \ne 0$, so the field is **rotational everywhere**. There is a uniform tendency to spin.
>  **Physical interpretation**
>  This model describes air moving in **circles** around the origin in the plane, with:
>  No net “sources” or “sinks” — air is not piling up or disappearing anywhere.
>  A built-in spin: the positive curl means a consistent rotational direction (counterclockwise under the usual convention).
>  In plain language:  
> This vector field models a **swirling airflow** under the fan, where the air circulates around the center without compressing or expanding overall.

%%

---
### Problem 3.1 — Divergence in a Pipe System (Expansion vs Compression)

A simplified 3D velocity field for water flowing in a vertical pipe is
$$
\mathbf{V}(x,y,z)
= (ax)\,\mathbf{i} + (ay)\,\mathbf{j} - 2az\,\mathbf{k},
$$
where $a$ is a positive constant and $z$ measures height (upwards along the pipe).

**Tasks**

1. Compute the divergence $\nabla \cdot \mathbf{V}(x,y,z)$.
2. Does this flow model represent a **source**, a **sink**, or an **incompressible** flow? Explain based on your divergence result.
3. Suppose $a = 1$ and consider a point on the centerline of the pipe $(0,0,z_0)$.  
   Explain in words what the sign of the divergence tells you about how water behaves near that point (think: expanding, compressing, or neither).

<div style="page-break-after: always;"></div> 

%%

> [!Success] Problem 3.1 Solution
> 
> We have
> $$\mathbf{V}(x,y,z)= (ax)\,\mathbf{i} + (ay)\,\mathbf{j} - 2az\,\mathbf{k},$$
> so
> $P(x,y,z) = ax$
> $Q(x,y,z) = ay$
> $R(x,y,z) = -2az$.
> **1. Divergence**
> In 3D,
> $$
> \nabla \cdot \mathbf{V}
> = \frac{\partial P}{\partial x}
> + \frac{\partial Q}{\partial y}
> + \frac{\partial R}{\partial z}.
> $$
> Compute each term:
> $\displaystyle \frac{\partial P}{\partial x}= \frac{\partial}{\partial x}(ax) = a.$
> $\displaystyle \frac{\partial Q}{\partial y}= \frac{\partial}{\partial y}(ay) = a.$
> $\displaystyle \frac{\partial R}{\partial z}= \frac{\partial}{\partial z}(-2az) = -2a.$
> Add them:
> $$\nabla \cdot \mathbf{V}(x,y,z)= a + a - 2a = 0.$$
> So the divergence is **zero everywhere**.
> **2. Source, sink, or incompressible?**
> Divergence zero everywhere means the flow is **incompressible / source-free** in this model:
> No net fluid is created or destroyed locally.
> Any fluid that flows into a small region also flows out.
> So this is **not** a source or sink. It is an **incompressible flow** model.
> **3. Interpretation on the centerline $(0,0,z_0)$, with $a = 1$**
> When $a = 1$:
> $$\mathbf{V}(x,y,z)= x\,\mathbf{i} + y\,\mathbf{j} - 2z\,\mathbf{k}.$$
> At a point on the centerline $(0,0,z_0)$:
> The radial components $(x,y)$ are zero at that exact point.
> The vertical component is $-2z_0\,\mathbf{k}$, so the fluid is moving **downward** if $z_0 > 0$.
> The divergence is still $0$:
> $$\nabla \cdot \mathbf{V}(0,0,z_0) = 0.$$
> **Meaning of divergence = 0 here:**
> Even though the flow might be speeding up or slowing down vertically, there is **no net expansion or compression** of water near that point.
> The fluid is being **redistributed**, not created or destroyed: flow lines may converge or diverge in shape, but the local “amount” of fluid remains constant.
> In words:
> Near the centerline of the pipe, water is moving but not piling up or draining away. The model treats the water as incompressible — whatever volume flows into a region must flow out.

%%

---

### Problem 3.2 — Comparing Two Fields: Which System Is “Spinning” or “Leaking”?

Two different vector fields model different physical systems:

- **Field A (airflow in a duct):**
  $$
  \mathbf{F}_A(x,y,z) = (2x)\,\mathbf{i} + (2y)\,\mathbf{j} + (2z)\,\mathbf{k}.
  $$

- **Field B (magnetic field model in a region):**
  $$
  \mathbf{F}_B(x,y,z) = -y\,\mathbf{i} + x\,\mathbf{j} + 0\,\mathbf{k}.
  $$

**Tasks**

1. For each field, compute the divergence:
   - $\nabla \cdot \mathbf{F}_A$
   - $\nabla \cdot \mathbf{F}_B$
2. For each field, compute the curl:
   - $\nabla \times \mathbf{F}_A$
   - $\nabla \times \mathbf{F}_B$
3. Use your answers to classify each field as:
   - **source-like / sink-like / incompressible**, and
   - **rotational / irrotational**.
4. Interpreting the context:
   - For **Field A (airflow in a duct)**, what does your divergence result suggest about the behavior of the duct (e.g., leak, injection, or neither)?
   - For **Field B (magnetic field model)**, what does your curl result suggest about the rotational behavior of the field lines?
<div style="page-break-after: always;"></div> 


%%
> [!Success] Problem 3.2 Solution
> 
> We have:
> Field A:
> $$\mathbf{F}_A(x,y,z) = 2x\,\mathbf{i} + 2y\,\mathbf{j} + 2z\,\mathbf{k}.$$
> Field B:$$\mathbf{F}_B(x,y,z) = -y\,\mathbf{i} + x\,\mathbf{j} + 0\,\mathbf{k}.$$
> Field B:
> $$\mathbf{F}_B(x,y,z) = -y\,\mathbf{i} + x\,\mathbf{j} + 0\,\mathbf{k}.$$
> **Divergence of each field**
> **Field A**
> Let
> $P_A = 2x$
> $Q_A = 2y$
> $R_A = 2z$.
> Then
> $$
> \nabla \cdot \mathbf{F}_A
> = \frac{\partial P_A}{\partial x}
> + \frac{\partial Q_A}{\partial y}
> + \frac{\partial R_A}{\partial z}
> = 2 + 2 + 2
> = 6.
> $$
> So the divergence is **constant positive** everywhere.
> **Field B**
> Let
> $P_B = -y$
> $Q_B = x$
> $R_B = 0$.
> Then
> $$
> \nabla \cdot \mathbf{F}_B
> = \frac{\partial P_B}{\partial x}
> + \frac{\partial Q_B}{\partial y}
> + \frac{\partial R_B}{\partial z}.
> $$
> Compute:
> - $\displaystyle \frac{\partial P_B}{\partial x}= \frac{\partial}{\partial x}(-y) = 0.$
> - $\displaystyle \frac{\partial Q_B}{\partial y}= \frac{\partial}{\partial y}(x) = 0.$
> - $\displaystyle \frac{\partial R_B}{\partial z}= \frac{\partial}{\partial z}(0) = 0.$
> - So$$\nabla \cdot \mathbf{F}_B = 0.$$
> - Field B is **divergence-free**.
> **Curl of each field**
> Recall:
> $$
> \nabla \times \mathbf{F} = (R_y - Q_z)\,\mathbf{i} + (P_z - R_x)\,\mathbf{j} + (Q_x - P_y)\,\mathbf{k}.$$
> **Field A**
> $P_A = 2x$, $Q_A = 2y$, $R_A = 2z$.
> Compute partials:
> - $R_{A,y} = \dfrac{\partial}{\partial y}(2z) = 0$  
> - $Q_{A,z} = \dfrac{\partial}{\partial z}(2y) = 0$
> - $P_{A,z} = \dfrac{\partial}{\partial z}(2x) = 0$  
> - $R_{A,x} = \dfrac{\partial}{\partial x}(2z) = 0$
> - $Q_{A,x} = \dfrac{\partial}{\partial x}(2y) = 0$  
> - $P_{A,y} = \dfrac{\partial}{\partial y}(2x) = 0$
> So
> $$\nabla \times \mathbf{F}_A = (0 - 0)\,\mathbf{i} + (0 - 0)\,\mathbf{j} + (0 - 0)\,\mathbf{k} = \mathbf{0}.$$
> Field A is **irrotational**.
> **Field B**
> $P_B = -y$, $Q_B = x$, $R_B = 0$.
> Compute partials:
> - $R_{B,y} = \dfrac{\partial}{\partial y}(0) = 0$
> - $Q_{B,z} = \dfrac{\partial}{\partial z}(x) = 0$
> So $R_{B,y} - Q_{B,z} = 0 - 0 = 0$.
> - $P_{B,z} = \dfrac{\partial}{\partial z}(-y) = 0$
> - $R_{B,x} = \dfrac{\partial}{\partial x}(0) = 0$
> So $P_{B,z} - R_{B,x} = 0 - 0 = 0$.
> - $Q_{B,x} = \dfrac{\partial}{\partial x}(x) = 1$
> - $P_{B,y} = \dfrac{\partial}{\partial y}(-y) = -1$
> So
> $$
> Q_{B,x} - P_{B,y} = 1 - (-1) = 2.
> $$
> Therefore,
> $$
> \nabla \times \mathbf{F}_B
> = 0\,\mathbf{i} + 0\,\mathbf{j} + 2\,\mathbf{k}
> = 2\,\mathbf{k}.
> $$
> Field B has **constant nonzero curl**.
> **Classification of each field**
> **Field A**
> Divergence: $\nabla \cdot \mathbf{F}_A = 6 > 0$ (everywhere).
> - Behavior: **source-like** at every point. Fluid is locally expanding.
> - Curl: $\nabla \times \mathbf{F}_A = \mathbf{0}$.
> - Behavior: **irrotational** (no local spinning).
> **Field B**
> - Divergence: $\nabla \cdot \mathbf{F}_B = 0$.
> - Behavior: **incompressible / source-free** — no net creation or loss.
> - Curl: $\nabla \times \mathbf{F}_B = 2\,\mathbf{k}$.
> - Behavior: strongly **rotational** about the $z$-axis.
> **Interpretation in context**
> **Field A – Airflow in a duct**
> Positive constant divergence ($6$) suggests the flow is **expanding everywhere**.
> Physically, this could model a duct where air is being **injected** or “blown out” uniformly within the region (like many tiny vents adding air).
> It does **not** describe a simple sealed duct with constant-volume flow; instead, it suggests some kind of **distributed source** of air.
> **Field B – Magnetic field model**
> Zero divergence matches a key physical idea: magnetic fields are typically modeled as having **no sources or sinks** (no isolated “magnetic charges”).
> Nonzero curl ($2\,\mathbf{k}$) means the field lines exhibit a **uniform rotational structure** around the $z$-axis.
> In words:
> Field B represents a swirling, incompressible field. Nothing is “leaking” or “appearing,” but the field lines circle around the axis.
> This comparison helps students see:
> **Divergence** → “Is stuff appearing or disappearing?” (sources/sinks)  
> **Curl** → “Is the field swirling?” (local rotation)

%%
