
# Calc 3 Session 19 

## Line Integrals
Energy in Motion

> [!info] Printable PDF
> [[19 - Line Integrals Learning Activity.pdf]]


## 📋 Skill Roadmap for Today
- [ ] [[Evaluating Scalar Line Integrals]]
- [ ] [[Evaluating Vector Line Integrals]]
- [ ] [[Applications of Vector Line Integrals - Flux, Work, Circulation]]

## Essential notes & formulas
*This space is for you to use.*

<div style="page-break-after: always;"></div>

---
## Skill 1: Evaluating Scalar Line Integrals 

> [!info] Scalar Line Integrals Essential Formulas
> A **scalar line integral** measures how a scalar quantity accumulates along a curve.  
> 
> If a curve $C$ is given by a vector function $\mathbf{r}(t)$ for $a \le t \le b$, and a scalar field is $f(x,y,z)$, then
> $$\int_C f(x,y,z)\,ds=\int_a^b f(\mathbf{r}(t))\,\|\mathbf{r}'(t)\|\,dt.$$
> Here $ds$ represents a tiny piece of **arc length**, and $f$ tells us the "amount per unit length" of the quantity we are accumulating (mass, heat, concentration, etc.).
### Skill 1 Demo:
A thin wire lies along the parabola $C$ in the $xy$-plane given by
$$
\mathbf{r}(t) = \langle t,\, t^2 \rangle, \quad 0 \le t \le 2.
$$
The linear density of the wire at the point $(x,y)$ is
$$
\rho(x,y) = 2x + y \ \ (\text{kg/m}).
$$
Compute the total mass of the wire.
<div style="page-break-after: always;"></div>


%%
> [!Success] Demo Problem Solution
> 
> **Identify the scalar field and the curve.**
> Scalar field (density):
> $$\rho(x,y) = 2x + y$$
> Curve:
> $$\mathbf{r}(t) = \langle x(t), y(t) \rangle= \langle t,\, t^2 \rangle, \quad 0 \le t \le 2.$$
> **Rewrite $\rho$ along the curve.**
>  Substitute $x(t) = t$, $y(t) = t^2$:
>  $$\rho(\mathbf{r}(t)) = \rho(t, t^2) = 2t + t^2.$$
>  **Compute $\mathbf{r}'(t)$ and its magnitude.**
>  Differentiate:
>  $$\mathbf{r}'(t) = \langle 1,\, 2t \rangle.$$
>  Magnitude:
>  $$\|\mathbf{r}'(t)\|= \sqrt{1^2 + (2t)^2}= \sqrt{1 + 4t^2}.$$
>  **Set up the scalar line integral for mass.**
>   The total mass is
>   $$ 
>   m = \int_C \rho\,ds= \int_0^2 \rho(\mathbf{r}(t))\,\|\mathbf{r}'(t)\|\,dt.
>   $$
>    Substitute:
>    $$m = \int_0^2 (2t + t^2)\sqrt{1 + 4t^2}\,dt.$$
>    **(Optional) Evaluate the integral.**
>    This integral is a bit messy but doable with substitution or technology.  
>    A typical exam/handout might:
>    Focus on **setting up** the integral correctly, or  
>    Provide this as a technology-assisted or "leave as an integral" problem.
>    For this demo, we **emphasize setup**:
>    $$\boxed{m = \int_0^2 (2t + t^2)\sqrt{1 + 4t^2}\,dt}$$
>    is a correct and complete expression for the mass.
>    Instructor note: You can decide whether to push through the algebra or stop at setup. The key learning goal here is "parameterize + compute $\rho(\mathbf{r}(t))$ + compute $\|\mathbf{r}'(t)\|$."

%%

--- 
### Problem 1.1 Scalar Line Integral Along a Line Segment 
Let $C$ be the line segment from $(1,2)$ to $(5,4)$ in the $xy$-plane.  
Let
$$
f(x,y) = x - 2y.
$$
Compute the scalar line integral
$$
\int_C f(x,y)\,ds.
$$

<div style="page-break-after: always;"></div>

%%

> [!Success] Problem 1.1 Solution
> 
> **Parameterize the line segment.**
>  A convenient parameterization from $(1,2)$ to $(5,4)$ is
>  $$\mathbf{r}(t) = \langle 1 + 4t,\, 2 + 2t \rangle, \quad 0 \le t \le 1.$$
>  **Compute $\mathbf{r}'(t)$ and its magnitude.**
>  $$
>  \mathbf{r}'(t) = \langle 4,\, 2 \rangle, \quad
>  \|\mathbf{r}'(t)\| = \sqrt{4^2 + 2^2} = \sqrt{16 + 4} = \sqrt{20} = 2\sqrt{5}.
>  $$
>  **Rewrite $f$ along the curve.**
>  $x(t) = 1 + 4t$
>  $y(t) = 2 + 2t$
>  So:
>  $$f(\mathbf{r}(t)) = f(1 + 4t,\, 2 + 2t)
>  = (1 + 4t) - 2(2 + 2t)
>  = 1 + 4t - 4 - 4t
>  = -3.
>  $$
>  **Set up and compute the integral.**
>  $$
>  \int_C f\,ds
>  = \int_0^1 f(\mathbf{r}(t))\,\|\mathbf{r}'(t)\|\,dt
>  = \int_0^1 (-3)(2\sqrt{5})\,dt
>  = -6\sqrt{5} \int_0^1 dt
>  = -6\sqrt{5}.
>  $$
>  So
>  $$\boxed{\displaystyle \int_C f(x,y)\,ds = -6\sqrt{5}.}$$

%%

---
#### Problem 1.2 - Scalar Line Integral Along a Trig curve in 3D 
Consider the space curve
$$
\mathbf{r}(t) = \langle \cos t,\, \sin t,\, t \rangle, \quad 0 \le t \le \pi.
$$
Let the scalar field be
$$
f(x,y,z) = x^2 + y^2 + z.
$$
Compute
$$
\int_C f(x,y,z)\,ds,
$$
where $C$ is the curve traced by $\mathbf{r}(t)$.
<div style="page-break-after: always;"></div>

%%

> [!Success] Problem 1.2 Solution
> 
> **Write $f$ along the curve.**
> Along $C$:
> $x(t) = \cos t$
> $y(t) = \sin t$
> $z(t) = t$
> Then:
> $$
> f(\mathbf{r}(t)) = f(\cos t, \sin t, t)
> = (\cos t)^2 + (\sin t)^2 + t
> = 1 + t.
> $$
> **Compute $\mathbf{r}'(t)$ and its magnitude.**
> $$
> \mathbf{r}'(t) = \langle -\sin t,\, \cos t,\, 1 \rangle.
> $$
> Magnitude:
> $$
> \|\mathbf{r}'(t)\|
> = \sqrt{(-\sin t)^2 + (\cos t)^2 + 1^2}
> $$
> $$
> = \sqrt{\sin^2 t + \cos^2 t + 1}
> = \sqrt{1 + 1}
> $$
> $$
> = \sqrt{2}.
> $$
> **Set up the integral.**
> $$
> \int_C f\,ds
> = \int_0^\pi f(\mathbf{r}(t))\,\|\mathbf{r}'(t)\|\,dt
> $$
> $$
> = \int_0^\pi (1 + t)\sqrt{2}\,dt.
> $$
> **Evaluate the integral.**
> Factor out $\sqrt{2}$:
> $$
> \int_0^\pi (1 + t)\sqrt{2}\,dt
> $$
> $$
> = \sqrt{2}\int_0^\pi (1 + t)\,dt.
> $$
> Compute:
> $$
> \int_0^\pi (1 + t)\,dt
> = \left[t + \frac{t^2}{2}\right]_0^\pi
> $$
> $$
> = \left(\pi + \frac{\pi^2}{2}\right) - (0 + 0)
> $$
> $$
> = \pi + \frac{\pi^2}{2}.
> $$
> Therefore:
> $$
> \int_C f\,ds
> = \sqrt{2}\left(\pi + \frac{\pi^2}{2}\right).
> $$
> So
> $$\boxed{\displaystyle \int_C f(x,y,z)\,ds = \sqrt{2}\left(\pi + \frac{\pi^2}{2}\right).}$$

%%

---
## Skill 2: Evaluating Vector Line Integrals 

> [!info] Vector Line Integrals Essential Formulas
> 
> A **vector line integral** of a vector field $\mathbf{F}$ along a curve $C$ measures how strongly the field aligns with the motion along the curve.
>   
> If $C$ is given by $\mathbf{r}(t)$, $a \le t \le b$, then
> $$\int_C \mathbf{F}\cdot d\mathbf{r}=\int_a^b \mathbf{F}(\mathbf{r}(t))\cdot \mathbf{r}'(t)\,dt.$$
> Physically, when $\mathbf{F}$ is a force field and $\mathbf{r}(t)$ is a particle trajectory, this integral represents **work done**by the force.
### Skill 2 Demo
A particle moves along the curve $C$ in the $xy$-plane given by
$$
\mathbf{r}(t) = \langle t,\, t^2 \rangle, \quad 0 \le t \le 1.
$$
The force field is
$$
\mathbf{F}(x,y) = \langle x + y,\; 2x - y \rangle.
$$
Compute the work done by the force field on the particle as it moves along $C$.

<div style="page-break-after: always;"></div>

%%

> [!Success] Skill 2 Demo Solution
> **Write $\mathbf{F}$ along the curve.**
> Along $C$:
> $x(t) = t$
> $y(t) = t^2$
> Then
> $$
> \mathbf{F}(\mathbf{r}(t))
> = \langle x(t) + y(t),\; 2x(t) - y(t) \rangle
> = \langle t + t^2,\; 2t - t^2 \rangle.
> $$
> **Compute $\mathbf{r}'(t)$.**
> $$
> \mathbf{r}'(t) = \langle 1,\, 2t \rangle.
> $$
> **Compute the dot product $\mathbf{F}(\mathbf{r}(t))\cdot\mathbf{r}'(t)$.**
> $$
> \mathbf{F}(\mathbf{r}(t))\cdot\mathbf{r}'(t)
> = \langle t + t^2,\; 2t - t^2 \rangle \cdot \langle 1,\, 2t \rangle
> $$
> $$
> = (t + t^2)\cdot 1 + (2t - t^2)\cdot (2t)
> = t + t^2 + 4t^2 - 2t^3
> = t + 5t^2 - 2t^3.
> $$
> **Set up the vector line integral for work.**
> $$
> W = \int_C \mathbf{F}\cdot d\mathbf{r}
> = \int_0^1 \mathbf{F}(\mathbf{r}(t))\cdot\mathbf{r}'(t)\,dt
> = \int_0^1 (t + 5t^2 - 2t^3)\,dt.
> $$
> **Evaluate the integral.**
> $$
> \int_0^1 (t + 5t^2 - 2t^3)\,dt
> = \left[\frac{t^2}{2} + \frac{5t^3}{3} - \frac{2t^4}{4}\right]_0^1
> = \frac{1}{2} + \frac{5}{3} - \frac{1}{2}.
> $$
> The $\frac{1}{2}$ and $-\frac{1}{2}$ cancel:
> $$
> W = \frac{5}{3}.
> $$
> So
> $$
> \boxed{\displaystyle W = \int_C \mathbf{F}\cdot d\mathbf{r} = \frac{5}{3}.}
> $$

%%

---
### Problem 2.1 
Let $\mathbf{F}(x,y) = \langle 3x,\, y^2 \rangle$.  
Let $C$ be the line segment from $(0,0)$ to $(2,1)$.  
Compute
$$
\int_C \mathbf{F}\cdot d\mathbf{r}.
$$
<div style="page-break-after: always;"></div>

%%

> [!Success] Problem 2.1 Solution
> 
> **Parameterize the line segment.**
> From $(0,0)$ to $(2,1)$:
> $$
> \mathbf{r}(t) = \langle 2t,\, t \rangle, \quad 0 \le t \le 1.
> $$
> **Compute $\mathbf{r}'(t)$.**
> $$\mathbf{r}'(t) = \langle 2,\, 1 \rangle.$$
> **Write $\mathbf{F}$ along the curve.**
> $x(t) = 2t$
> $y(t) = t$
> Then 
> $$
> \mathbf{F}(\mathbf{r}(t))
> = \langle 3x(t),\, y(t)^2 \rangle
> = \langle 3(2t),\, t^2 \rangle
> = \langle 6t,\, t^2 \rangle.
> $$
> **Compute the dot product $\mathbf{F}(\mathbf{r}(t))\cdot\mathbf{r}'(t)$.**
> $$
> \mathbf{F}(\mathbf{r}(t))\cdot\mathbf{r}'(t)
> = \langle 6t,\, t^2 \rangle \cdot \langle 2,\, 1 \rangle
> = 6t\cdot 2 + t^2\cdot 1
> = 12t + t^2.
> $$
> **Set up and evaluate the integral.**
> $$
> \int_C \mathbf{F}\cdot d\mathbf{r}
> = \int_0^1 (12t + t^2)\,dt
> = \left[6t^2 + \frac{t^3}{3}\right]_0^1
> = 6 + \frac{1}{3}
> = \frac{19}{3}.
> $$
> So
> $$\boxed{\displaystyle \int_C \mathbf{F}\cdot d\mathbf{r} = \frac{19}{3}.}$$

%%

---
### Problem 2.2
Let
$$
\mathbf{F}(x,y) = \left\langle \frac{x}{x^2 + y^2},\; \frac{y}{x^2 + y^2} \right\rangle, \quad (x,y) \neq (0,0).
$$
Let $C$ be the quarter-circle of radius $2$ in the first quadrant, parameterized by
$$
\mathbf{r}(t) = \langle 2\cos t,\, 2\sin t \rangle, \quad 0 \le t \le \frac{\pi}{2}.
$$
Compute
$$
\int_C \mathbf{F}\cdot d\mathbf{r}.
$$

<div style="page-break-after: always;"></div>

%%

> [!Success] Problem 2.2 Solution
> 
> **Compute $\mathbf{r}'(t)$.**
> $$
> \mathbf{r}'(t) = \langle -2\sin t,\, 2\cos t \rangle.
> $$
> **Evaluate $\mathbf{F}$ along the curve.**
> Along $C$:
> $x(t) = 2\cos t$
> $y(t) = 2\sin t$
> The denominator:
> $$
> x(t)^2 + y(t)^2 = (2\cos t)^2 + (2\sin t)^2 = 4\cos^2 t + 4\sin^2 t = 4.
> $$
> Then:
> $$
> \mathbf{F}(\mathbf{r}(t))
> = \left\langle \frac{2\cos t}{4},\; \frac{2\sin t}{4} \right\rangle
> = \left\langle \frac{\cos t}{2},\; \frac{\sin t}{2} \right\rangle.
> $$
> **Compute the dot product $\mathbf{F}(\mathbf{r}(t))\cdot\mathbf{r}'(t)$.**
> $$
> \mathbf{F}(\mathbf{r}(t))\cdot\mathbf{r}'(t)
> = \left\langle \frac{\cos t}{2},\; \frac{\sin t}{2} \right\rangle \cdot \langle -2\sin t,\, 2\cos t \rangle$$
> $$
> = \frac{\cos t}{2}(-2\sin t) + \frac{\sin t}{2}(2\cos t)
> = -\cos t\sin t + \sin t\cos t
> = 0.$$
> **Set up and evaluate the integral.**
> $$
> \int_C \mathbf{F}\cdot d\mathbf{r}
> = \int_0^{\pi/2} 0\,dt
> = 0.
> $$
> So
> $$\boxed{\displaystyle \int_C \mathbf{F}\cdot d\mathbf{r} = 0.}$$
> Interpretation: Along this path, the "radial" field $\mathbf{F}$ is always perpendicular to the direction of motion, so it does no work. This is a nice geometric check.

%%

---
## Skill 3: Applications of Vector Line Integrals: Work, Flux, and Circulation

> [!info] Work, Flux, and Circulation Essential Formulas
>  **Work**:
>   $$
>   W = \int_C \mathbf{F}\cdot d\mathbf{r}
>   $$
>   measures energy transfer along the direction of motion.
>  ---
> 
> **Flux** across a curve $C$ in the plane:
> $$
> \text{flux}_C(\mathbf{F}) = \int_C \mathbf{F}\cdot \mathbf{n}\,ds
> $$
> where $\mathbf{n}$ is a **unit normal vector** to the curve, measuring how much of the field flows **through** the curve.  
>
> ---
> 
> **Circulation** around a closed curve $C$:
> $$
> \text{circ}_C(\mathbf{F}) = \oint_C \mathbf{F}\cdot d\mathbf{r}
> $$
> measures how strongly the field "swirls" along the curve.


### Skill 3 Demo: Circulation Around a Circle
Let
$$
\mathbf{F}(x,y) = \langle -y,\, x \rangle.
$$
Compute the **circulation** of $\mathbf{F}$ counterclockwise around the unit circle
$$
C: \quad \mathbf{r}(t) = \langle \cos t,\, \sin t \rangle,\quad 0 \le t \le 2\pi.
$$
<div style="page-break-after: always;"></div>

%%

> [!Success] Skill 3 Demo Solution
> 
> **Evaluate $\mathbf{F}$ along the curve.**
> Along $C$:
> $x(t) = \cos t$
> $y(t) = \sin t$
> Then:
> $$
> \mathbf{F}(\mathbf{r}(t))
> = \langle -\sin t,\, \cos t \rangle.
> $$
> **Compute $\mathbf{r}'(t)$.**
> $$
> \mathbf{r}'(t) = \langle -\sin t,\, \cos t \rangle.
> $$
> **Compute the dot product $\mathbf{F}(\mathbf{r}(t))\cdot\mathbf{r}'(t)$.**
> $$
> \mathbf{F}(\mathbf{r}(t))\cdot\mathbf{r}'(t)
> $$
> $$
> = \langle -\sin t,\, \cos t \rangle \cdot \langle -\sin t,\, \cos t \rangle
> $$
> $$
> = (-\sin t)^2 + (\cos t)^2
> $$
> $$
> = \sin^2 t + \cos^2 t
> = 1.
> $$
> 
> **Compute the dot product $\mathbf{F}(\mathbf{r}(t))\cdot\mathbf{r}'(t)$.**
>  $$
>  \mathbf{F}(\mathbf{r}(t))\cdot\mathbf{r}'(t)
>  $$
>  $$
>  = \langle -\sin t,\, \cos t \rangle \cdot \langle -\sin t,\, \cos t \rangle
>  $$
>  $$
>  = (-\sin t)^2 + (\cos t)^2
>  $$
>  $$
>  = \sin^2 t + \cos^2 t
>  = 1.
>  $$
>  
>   **Set up and evaluate the circulation integral.**
>   Since $C$ is closed and oriented counterclockwise, we write:
>   $$
>   \text{circ}_C(\mathbf{F})
>   = \oint_C \mathbf{F}\cdot d\mathbf{r}
>   $$
>   $$
>   = \int_0^{2\pi} 1\,dt
>   = 2\pi.
>   $$
>   
>   So
>    $$
>    \boxed{\displaystyle \text{circ}_C(\mathbf{F}) = 2\pi.}
>    $$
>    
>  Interpretation: The field $\mathbf{F}(x,y)=\langle -y, x\rangle$ is a pure rotation around the origin. The circulation around the unit circle is positive and equal to the circumference.

%%

---
### Problem 3.1 
In the plane, consider the vector field
$$
\mathbf{F}(x,y) = \langle y,\, 2x \rangle.
$$
Let $C$ be the line segment from $(0,0)$ to $(2,0)$, oriented from left to right.  

1. Parameterize $C$.  
2. Find a unit normal vector $\mathbf{n}$ pointing **upward**.  
3. Compute the **flux** of $\mathbf{F}$ across $C$:
   $$
   \text{flux}_C(\mathbf{F}) = \int_C \mathbf{F}\cdot\mathbf{n}\,ds.
   $$

<div style="page-break-after: always;"></div>

%%

> [!Success] Problem 3.1 Solution
> 
> **Parameterize the curve $C$.**
> From $(0,0)$ to $(2,0)$:
> $$
> \mathbf{r}(t) = \langle 2t,\, 0 \rangle,\quad 0 \le t \le 1.
> $$
> **Compute the tangent vector and its magnitude.**
> $$
> \mathbf{r}'(t) = \langle 2,\, 0 \rangle,\quad
> \|\mathbf{r}'(t)\| = 2.
> $$
> **Find a unit normal vector pointing upward.**
> The tangent direction is to the right: $\mathbf{T} = \langle 1, 0 \rangle$.
> A unit vector pointing **upward** is $\mathbf{n} = \langle 0, 1 \rangle$.
> For a straight, horizontal segment, $\mathbf{n}$ is constant along $C$.
> **Write $\mathbf{F}$ along the curve.**
> Along $C$:
> $x(t) = 2t$
> $y(t) = 0$
> Therefore:
> $$
> \mathbf{F}(\mathbf{r}(t))
> = \langle y(t),\, 2x(t) \rangle
> = \langle 0,\, 2(2t) \rangle
> = \langle 0,\, 4t \rangle.
> $$
> **Write $\mathbf{F}$ along the curve.**
> Along $C$:
> $x(t) = 2t$
> $y(t) = 0$
> Therefore:
> $$
> \mathbf{F}(\mathbf{r}(t))
> = \langle y(t),\, 2x(t) \rangle
> = \langle 0,\, 2(2t) \rangle
> = \langle 0,\, 4t \rangle.
> $$
> **Compute $\mathbf{F}(\mathbf{r}(t))\cdot\mathbf{n}$.**
> $$
> \mathbf{F}(\mathbf{r}(t))\cdot\mathbf{n}
> = \langle 0,\, 4t \rangle \cdot \langle 0,\, 1 \rangle
> = 4t.
> $$
> **Set up the flux integral.**
> Recall $ds = \|\mathbf{r}'(t)\|\,dt = 2\,dt$. Then:
> $$
> \text{flux}_C(\mathbf{F})
> = \int_C \mathbf{F}\cdot\mathbf{n}\,ds
> $$
> $$
> = \int_0^1 \left(\mathbf{F}(\mathbf{r}(t))\cdot\mathbf{n}\right)\,ds
> $$
> $$
> = \int_0^1 4t \cdot 2\,dt
> = \int_0^1 8t\,dt.
> $$
> 
> **Evaluate the integral.**
> $$
> \int_0^1 8t\,dt = \left[4t^2\right]_0^1 = 4.
> $$
> So
> $$
> \boxed{\displaystyle \text{flux}_C(\mathbf{F}) = 4.}
> $$
> Interpretation: A total "flow" of $4$ units passes upward through the line segment.

%%

---
### Problem 3.2 
A particle moves through a three-dimensional force field
$$
\mathbf{F}(x,y,z) = \langle yz,\, xz,\, xy \rangle.
$$
The particle follows the path
$$
\mathbf{r}(t) = \langle t,\, t^2,\, 1 \rangle,\quad 0 \le t \le 1.
$$
Compute the work done by the force as the particle moves along this path.

<div style="page-break-after: always;"></div>

%%

> [!Success] Problem 3.2 Solution
> 
> **Evaluate $\mathbf{F}$ along the curve.**
> Along $C$:
> $x(t) = t$
> $y(t) = t^2$
> $z(t) = 1$
> Then:
> $$
> \mathbf{F}(\mathbf{r}(t))
> = \langle y(t)z(t),\, x(t)z(t),\, x(t)y(t) \rangle
> $$
> $$
> = \langle t^2\cdot 1,\, t\cdot 1,\, t\cdot t^2 \rangle
> = \langle t^2,\, t,\, t^3 \rangle.
> $$
> **Compute $\mathbf{r}'(t)$.**
> $$
> \mathbf{r}'(t) = \langle 1,\, 2t,\, 0 \rangle.
> $$
> **Compute the dot product $\mathbf{F}(\mathbf{r}(t))\cdot\mathbf{r}'(t)$.**
> $$
> \mathbf{F}(\mathbf{r}(t))\cdot\mathbf{r}'(t)
> $$
> $$
> = \langle t^2,\, t,\, t^3 \rangle \cdot \langle 1,\, 2t,\, 0 \rangle
> $$
> $$
> = t^2\cdot 1 + t\cdot 2t + t^3\cdot 0
> $$
> $$
> = t^2 + 2t^2
> = 3t^2.
> $$
> 
> **Set up and evaluate the work integral.**
> $$
> W = \int_C \mathbf{F}\cdot d\mathbf{r}
> $$
> $$
> = \int_0^1 3t^2\,dt
> $$
> $$
> = 3\left[\frac{t^3}{3}\right]_0^1
> = 1.
> $$
> So
> $$
> \boxed{\displaystyle W = 1.}
> $$

%%

---
### Problem 3.3
Let
$$
\mathbf{F}(x,y) = \langle -y,\, x \rangle,
$$
and let $C$ be the unit circle parameterized counterclockwise:
$$
\mathbf{r}(t) = \langle \cos t,\, \sin t \rangle,\quad 0 \le t \le 2\pi.
$$

1. Compute the **circulation** of $\mathbf{F}$ around $C$.  
2. Compute the **flux** of $\mathbf{F}$ across $C$ (with $\mathbf{n}$ pointing outward).  
3. Explain, in words, why one is nonzero and the other is zero.
<div style="page-break-after: always;"></div>

%%

> [!Success] Problem 3.3 Solution
> 
> **Circulation (review of Demo S3.1).**
> We already computed:
> $$
> \mathbf{F}(\mathbf{r}(t)) = \langle -\sin t,\, \cos t \rangle,
> \quad
> \mathbf{r}'(t) = \langle -\sin t,\, \cos t \rangle.
> $$
> Thus:
> $$
> \mathbf{F}(\mathbf{r}(t))\cdot\mathbf{r}'(t) = 1.
> $$
> So:
> $$
> \text{circ}_C(\mathbf{F})
> = \oint_C \mathbf{F}\cdot d\mathbf{r}
> = \int_0^{2\pi} 1\,dt
> = 2\pi.
> $$
> **Flux across $C$.**
> For the unit circle, a natural outward unit normal at $\mathbf{r}(t)$ is
> $$
> \mathbf{n}(t) = \langle \cos t,\, \sin t \rangle,
> $$
> which is radial and outward.
> We need $ds = \|\mathbf{r}'(t)\|\,dt$. Since $\mathbf{r}'(t) = \langle -\sin t,\, \cos t \rangle$, we have
> $$
> \|\mathbf{r}'(t)\| = 1,
> $$
> so $ds = dt$.
> Now:
> $$
> \mathbf{F}(\mathbf{r}(t)) = \langle -\sin t,\, \cos t \rangle,
> $$
> so
> $$
> \mathbf{F}(\mathbf{r}(t))\cdot\mathbf{n}(t)
> $$
> $$
> = \langle -\sin t,\, \cos t \rangle \cdot \langle \cos t,\, \sin t \rangle
> $$
> $$
> = -\sin t\cos t + \cos t\sin t
> = 0.
> $$
> 
> Therefore:
> $$
> \text{flux}_C(\mathbf{F})
> = \int_C \mathbf{F}\cdot\mathbf{n}\,ds
> = \int_0^{2\pi} 0\,dt
> = 0.
> $$
> **Conceptual explanation.**
> $\mathbf{F}(x,y) = \langle -y,\, x \rangle$ is **tangent** to the circle at every point (it represents rotation about the origin).
> Along the curve, this field is perfectly aligned with the direction of motion, so circulation is **maximized**, giving $2\pi$.
> However, the field is always **perpendicular** to the outward radial direction, so there is **no flow across** the boundary: flux is $0$.
> This illustrates the difference between **circulation (tangential alignment)** and **flux (normal alignment)**.

%%