# Calc 3 Session 17
## Change of Variables in Multiple Integrals
Switching Perspectives


> [!info] Printable PDF
> [[17 - Change of Variables in Multiple Integrals Learning Activity.pdf]]


## 📋 Skill Roadmap for Today
- [ ] [[2D Change of Variables with a given transformation]]
- [ ] [[3D Change of Variables with a given transformation]]
- [ ] [[Selecting Your Own Transformation for 2D]]

## Essential notes & formulas
*This space is for you to use.*

<div style="page-break-after: always;"></div>

---
## Skill 1: Given 2-D Transformations

> [!info] 2D Change of Variables Essential Formulas
> 
> $$\iint_R f(x,y)\,dx\,dy= \iint_{R'} f(x(u,v),y(u,v))\,|J|\,du\,dv$$
> **Jacobian Matrix (2D)**
> $$
> J=\frac{\partial(x,y)}{\partial(u,v)}
> =\begin{bmatrix}
> \frac{\partial x}{\partial u} & \frac{\partial x}{\partial v}\\[6pt]
> \frac{\partial y}{\partial u} & \frac{\partial y}{\partial v}
> \end{bmatrix},
> \qquad
> |J|=
> \begin{vmatrix}
> \frac{\partial x}{\partial u} & \frac{\partial x}{\partial v}\\[4pt]
> \frac{\partial y}{\partial u} & \frac{\partial y}{\partial v}
> \end{vmatrix}
> $$
> **Interpretation**
> $|J|$ is the **area-scaling factor** between coordinate systems.
> Always compute $\partial(x,y)/\partial(u,v)$.
> Use $|J|$ in integrals.

### Skill 1 Demo:
Evaluate
$$
\iint_R (x+y)\,dA
$$
where $R$ is bounded by $x+y=0$, $x+y=2$, $x-y=0$, $x-y=1$.

**Given Transformation:** $u=x-y,\; v=x+y$.

<div style="page-break-after: always;"></div>


%%
> [!Success] Demo Problem Solution
> 
> **Step-by-Step Solution**
> 1️⃣ Inverse relations: $x=\tfrac{1}{2}(v+u)$, $y=\tfrac{1}{2}(v-u)$ 
> 2️⃣ Jacobian: $$ J=\begin{vmatrix} \frac{1}{2}&\frac{1}{2}\\[4pt] -\frac{1}{2}&\frac{1}{2} \end{vmatrix} =\tfrac{1}{2}. $$ 
> 3️⃣ Transform region: $0\le v\le2$, $0\le u\le1$. 
> 4️⃣ Integrand: $x+y=v$. 
> 5️⃣ New integral: $$ \iint_{R'} v|J|\,du\,dv =\tfrac{1}{2}\int_0^{2}\!\!\int_0^{1} v\,du\,dv =\tfrac{1}{2}\int_0^{2} v(1)\,dv =\tfrac{1}{2}\left[\tfrac{v^2}{2}\right]_0^{2}=1. $$ 
> ✅ **Answer:** 1

%%


### Problem 1.1 
Evaluate 
$\displaystyle\iint_R(x-y)\,dA$ where $R$ is bounded by $x-y=0$, $x-y=2$, $x+y=1$, $x+y=3$. Use $u=x-y$, $v=x+y$. 
<div style="page-break-after: always;"></div>

%%

> [!Success] Problem 1.1 Solution
> 
> 1) **Transform and inverse.** Let $u=x-y,\ v=x+y$. Then $$ x=\tfrac{v+u}{2},\quad y=\tfrac{v-u}{2}. $$
> 2) **Jacobian.** $$ J=\frac{\partial(x,y)}{\partial(u,v)}= \begin{vmatrix} \tfrac12 & \tfrac12\\[4pt] -\tfrac12 & \tfrac12 \end{vmatrix}=\tfrac12, \quad |J|=\tfrac12. $$
> 3) *Region in $(u,v)$.** From the bounds: $0\le u\le2$, $1\le v\le3$ (a rectangle).
> 4) **Integrand.** $(x-y)=u$.
> 5) **Integral.** $$ \iint_R (x-y)\,dA =\iint_{R'} u\,|J|\,du\,dv =\tfrac12\int_{v=1}^{3}\!\int_{u=0}^{2} u\,du\,dv. $$ Compute: $$ \int_{u=0}^{2} u\,du=\left[\tfrac{u^2}{2}\right]_0^2=2, \quad \tfrac12\int_{1}^{3} 2\,dv=\tfrac12\cdot 2\cdot(3-1)=2. $$
> 6) **Answer.** $2$.

%%

### Problem 1.2 
Set up (but do not evaluate) $\displaystyle\iint_R xy\,dA$ for $R$ bounded by $x+y=0$, $x+y=1$, $x-y=-1$, $x-y=1$. Hint: use $u=x+y$, $v=x-y$. 

<div style="page-break-after: always;"></div>

%%
> [!Success] Problem 1.2 Solution
> 
> 1) Transform and inverse.** $$ u=x+y,\ v=x-y\quad\Longrightarrow\quad x=\tfrac{u+v}{2},\ y=\tfrac{u-v}{2}. $$ 
> 2) **Jacobian.** $$ J=\frac{\partial(x,y)}{\partial(u,v)}= \begin{vmatrix} \tfrac12 & \tfrac12\\[4pt] -\tfrac12 & \tfrac12 \end{vmatrix}=\tfrac12,\quad |J|=\tfrac12. $$ 
> 3) **Region in $(u,v)$.** $0\le u\le1$, $-1\le v\le1$ (rectangle). 
> 4) **Integrand.** $$ xy=\left(\tfrac{u+v}{2}\right)\left(\tfrac{u-v}{2}\right)=\tfrac{u^2-v^2}{4}. $$ 
> 5) **Setup.** $$ \iint_R xy\,dA =\iint_{R'} \left(\tfrac{u^2-v^2}{4}\right)\,|J|\,du\,dv =\int_{v=-1}^{1}\!\int_{u=0}^{1} \left(\tfrac{u^2-v^2}{4}\right)\left(\tfrac12\right)\,du\,dv. $$

%%

## Skill 2: Given 3D Transformations

> [!info] 3D Change of Variables Essential Formulas
> 
> $$ \iiint_E f(x,y,z)\,dV$$
> $$= \iiint_{E'} f(x(u,v,w),y(u,v,w),z(u,v,w))\,|J|\,du\,dv\,dw $$ **Jacobian Matrix (3D)** $$ J=\frac{\partial(x,y,z)}{\partial(u,v,w)} =\begin{bmatrix} \dfrac{\partial x}{\partial u} & \dfrac{\partial x}{\partial v} & \dfrac{\partial x}{\partial w}\\[6pt] \dfrac{\partial y}{\partial u} & \dfrac{\partial y}{\partial v} & \dfrac{\partial y}{\partial w}\\[6pt] \dfrac{\partial z}{\partial u} & \dfrac{\partial z}{\partial v} & \dfrac{\partial z}{\partial w} \end{bmatrix}, \qquad |J|=\left| \begin{matrix} \dfrac{\partial x}{\partial u} & \dfrac{\partial x}{\partial v} & \dfrac{\partial x}{\partial w}\\[4pt] \dfrac{\partial y}{\partial u} & \dfrac{\partial y}{\partial v} & \dfrac{\partial y}{\partial w}\\[4pt] \dfrac{\partial z}{\partial u} & \dfrac{\partial z}{\partial v} & \dfrac{\partial z}{\partial w} \end{matrix}\right|. $$

### Skill 2Demo:

Evaluate $$ \iiint_E z\,dV, $$ where $E$ is the solid bounded by $x^2+y^2\le1$ and $0\le z\le2$.
**Given Transformation:** $x=r\cos\theta$, $y=r\sin\theta$, $z=z$. 

<div style="page-break-after: always;"></div> 

%%

> [!Success] Skill 2 Demo Solution
> 
> 1️⃣ Jacobian: $$ J=\begin{vmatrix} \cos\theta & -r\sin\theta & 0\\[4pt] \sin\theta & r\cos\theta & 0\\[4pt] 0&0&1 \end{vmatrix}=r. $$ 
> 2️⃣ Limits: $0\le r\le1$, $0\le\theta\le2\pi$, $0\le z\le2$.
> 3️⃣ Integrate: $$ \int_0^{2\pi}\!\!\int_0^1\!\!\int_0^2 z\,r\,dz\,dr\,d\theta =$$
> $$\int_0^{2\pi}\!\!\int_0^1 r\!\left[\tfrac{z^2}{2}\right]_0^{2}\!dr\,d\theta$$
> $$=\int_0^{2\pi}\!\!\int_0^1 2r\,dr\,d\theta =2\!\left[\tfrac{r^2}{2}\right]_0^{1}\!\!\int_0^{2\pi}\!d\theta=2\pi. $$
> ✅ **Answer:** $2\pi$ 

%%


### Problem 2.1
Set up (do not evaluate) $$ \iiint_E (x^2+y^2)\,dV $$ for $E:\ x^2+y^2\le 4,\ 0\le z\le 3$. Use cylindrical $(r,\theta,z)$ and show $|J|=r$. 

<div style="page-break-after: always;"></div>

%%

> [!Success] Problem 2.1 Solution
> 
> 1) **Cylindrical relations.** $$ x=r\cos\theta,\quad y=r\sin\theta,\quad z=z,\quad dV=r\,dr\,d\theta\,dz. $$ Hence $|J|=r$.
> 2) **Bounds.** $0\le r\le 2$, $0\le \theta\le 2\pi$, $0\le z\le 3$.
> 3) **Integrand.** $x^2+y^2=r^2$.
> 4) **Setup.** $$ \iiint_E (x^2+y^2)\,dV =\int_{\theta=0}^{2\pi}\int_{r=0}^{2}\int_{z=0}^{3} r^2\,(r)\,dz\,dr\,d\theta. $$

%%

### Problem 2.2 
Evaluate $$ \iiint_E r\,dV $$ for $E:\ 1\le r\le 2,\ 0\le \theta\le \pi,\ 0\le z\le 1$.

<div style="page-break-after: always;"></div> 

%%

> [!Success] Problem 2.2 Solution
> 
> 1) **Volume element.** $dV=r\,dr\,d\theta\,dz$.
> 2) **Integrand with $dV$.** $r\cdot dV=r\cdot (r\,dr\,d\theta\,dz)=r^2\,dr\,d\theta\,dz$.
> 3) **Integral.** $$ \int_{\theta=0}^{\pi}\int_{r=1}^{2}\int_{z=0}^{1} r^2\,dz\,dr\,d\theta =\int_{0}^{\pi}\int_{1}^{2} r^2\,[z]_{0}^{1}\,dr\,d\theta =\int_{0}^{\pi}\int_{1}^{2} r^2\,dr\,d\theta. $$
> 4) **Compute $r$-integral.** $$ \int_{1}^{2} r^2\,dr=\left[\tfrac{r^3}{3}\right]_{1}^{2}=\tfrac{8-1}{3}=\tfrac{7}{3}. $$
> 5) **Integrate in $\theta$.** $$ \int_{0}^{\pi}\tfrac{7}{3}\,d\theta=\tfrac{7\pi}{3}. $$
> 6) **Answer.** $\displaystyle \tfrac{7\pi}{3}$.

%%


## Skill 3: Select your own Transformation (General 2D)

> [!info] 2D Change of Variables Essential Formulas
> 
> $$ \iint_R f(x,y)\,dx\,dy = \iint_{R'} f(x(u,v),y(u,v))\,|J|\,du\,dv $$ **Jacobian Matrix (2D)** $$ J=\frac{\partial(x,y)}{\partial(u,v)} =\begin{bmatrix} \dfrac{\partial x}{\partial u} & \dfrac{\partial x}{\partial v}\\[6pt] \dfrac{\partial y}{\partial u} & \dfrac{\partial y}{\partial v} \end{bmatrix}, \qquad |J|=\left| \begin{matrix} \dfrac{\partial x}{\partial u} & \dfrac{\partial x}{\partial v}\\[4pt] \dfrac{\partial y}{\partial u} & \dfrac{\partial y}{\partial v} \end{matrix}\right|. $$ 

### Skill 3 Demo:


Evaluate $$ \iint_R e^{x-y}\,dA, $$ where $R$ is bounded by $x-y=0$, $x-y=1$, $x+y=0$, $x+y=2$. 

<div style="page-break-after: always;"></div>


%%
> [!Success] Skill 3 Demo Solution
> 
> 1️⃣ Notice repeated patterns $x\!-\!y$ and $x\!+\!y$. Define $u=x-y$, $v=x+y$. 
> 2️⃣ Inverse: $$ x=\tfrac{1}{2}(v+u),\quad y=\tfrac{1}{2}(v-u). $$
> 3️⃣ Jacobian: $$ J=\begin{vmatrix} \tfrac{1}{2}&\tfrac{1}{2}\\[4pt] -\tfrac{1}{2}&\tfrac{1}{2} \end{vmatrix}=\tfrac{1}{2}. $$ 
> 4️⃣ Transform region: $0\le u\le1$, $0\le v\le2$.
> 5️⃣ Integrand: $e^{x-y}=e^{u}$.
> 6️⃣ New integral: $$ \iint_{R'} e^{u}\,|J|\,du\,dv =\tfrac{1}{2}\int_0^{1}\!\!\int_0^{2} e^{u}\,dv\,du =\tfrac{1}{2}\int_0^{1} 2e^{u}\,du =\int_0^{1} e^{u}\,du =e-1. $$
> ✅ **Answer:** $e-1$ 

%%

### Problem 3.1 
Evaluate $$ \iint_R (x-y)\,dA $$ where $R$ is bounded by $x-y=0\ \text{to}\ 1$ and $x+y=1\ \text{to}\ 3$. 

<div style="page-break-after: always;"></div>

%%
> [!Success] Problem 3.1 Solution
> 
> 1) **Choose transform.** $u=x-y,\ v=x+y$.
> 2) **Inverse and Jacobian.** $$ x=\tfrac{v+u}{2},\ y=\tfrac{v-u}{2},\qquad J=\frac{\partial(x,y)}{\partial(u,v)}= \begin{vmatrix} \tfrac12 & \tfrac12\\[4pt] -\tfrac12 & \tfrac12 \end{vmatrix}=\tfrac12,\ \ |J|=\tfrac12. $$
> 3) **Region in $(u,v)$.** $0\le u\le 1$, $1\le v\le 3$.
> 4) **Integrand.** $(x-y)=u$.
> 5) **Integral.** $$ \iint_R (x-y)\,dA =\tfrac12\int_{v=1}^{3}\!\int_{u=0}^{1} u\,du\,dv =\tfrac12\left(\left[\tfrac{u^2}{2}\right]_0^1\right)\!(3-1) =\tfrac12\cdot\tfrac12\cdot 2=\tfrac12. $$
> 6) **Answer.** $\displaystyle \tfrac12$.

%%

### Problem 3.2
Set up (do not evaluate) $$ \iint_R e^{x+y}\,dA $$ where $R$ is given by $x+y=0\ \text{to}\ 1$ and $x-y=0\ \text{to}\ 2$. 

<div style="page-break-after: always;"></div>

%%

> [!Success] Problem 3.2 Solution
> 
> 1) **Transform.** $u=x+y,\ v=x-y$. 
> 2) **Inverse and Jacobian.** $$ x=\tfrac{u+v}{2},\ y=\tfrac{u-v}{2},\qquad |J|=\left|\frac{\partial(x,y)}{\partial(u,v)}\right|=\tfrac12. $$ 
> 3) **Region in $(u,v)$.** $0\le u\le 1$, $0\le v\le 2$.
> 4) **Integrand.** $e^{x+y}=e^{u}$. 
> 5) **Setup.** $$ \iint_R e^{x+y}\,dA =\int_{v=0}^{2}\!\int_{u=0}^{1} e^{u}\,|J|\,du\,dv =\tfrac12\int_{v=0}^{2}\!\int_{u=0}^{1} e^{u}\,du\,dv. $$ 

%%

### Problem 3.3 (Challenge Problem)
For $$ \iint_R \sin(xy)\,dA,\quad R:\ 0\le x\le 1,\ 0\le y\le 2x, $$ propose a substitution that simplifies the region and write the Jacobian. 

<div style="page-break-after: always;"></div>

%%

> [!Success] Problem 3.3 Solution
> 
> 1) **Observe bounds.** The upper bound is $y=2x$ (a ray through the origin). Ratios like $y/x$ are constant along such lines. 
> 2) **Choose transform.** Let $$ u=x,\qquad v=\frac{y}{x}\quad (x>0). $$ Then $x=u,\ y=uv$.
> 3) **Region in $(u,v)$.** Since $0\le x\le 1$ and $0\le y\le 2x$, $$ 0\le u\le 1,\qquad 0\le v\le 2 $$ (a rectangle). The $u=0$ edge is a measure-zero boundary and does not affect the integral. 
> 4) **Jacobian.** $$ \frac{\partial(x,y)}{\partial(u,v)}= \begin{bmatrix} \frac{\partial x}{\partial u} & \frac{\partial x}{\partial v}\\[4pt] \frac{\partial y}{\partial u} & \frac{\partial y}{\partial v} \end{bmatrix} = \begin{bmatrix} 1 & 0\\[4pt] v & u \end{bmatrix} \quad\Longrightarrow\quad |J|=\det= 1\cdot u-0\cdot v=u. $$ 
> 5) **Transformed integrand and setup.** Since $xy=u(uv)=u^2 v$, $$ \iint_R \sin(xy)\,dA =\int_{u=0}^{1}\!\int_{v=0}^{2} \sin(u^2 v)\,|J|\,dv\,du =\int_{0}^{1}\!\int_{0}^{2} \sin(u^2 v)\,u\,dv\,du. $$ 
> 6) **Result.** A rectangular region with Jacobian $|J|=u$ and integrand $\sin(u^2 v)$.


%%