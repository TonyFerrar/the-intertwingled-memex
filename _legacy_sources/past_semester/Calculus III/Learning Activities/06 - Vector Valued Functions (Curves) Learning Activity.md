
# Calc 3 Session 6

## Shaping Motion Paths
Vector Valued Functions (Curves)

> [!info] Printable PDF
> [[06 - Vector Valued Functions (Curves) Learning Activity.pdf]]

## 📋 Skill Roadmap for Today
- [ ] Skill 1: Arc Length
- [ ] Skill 2: Curvature of a Space Curve
- [ ] Skill 3: Tangential and Normal Components of Acceleration

## Essential notes & formulas
*This space is for you to use.*

<div style="page-break-after: always;"></div>

---
## Skill 1: Arc Length Parametrization

> [!info]- Arc Length Essential Formulas
> **Arc Length**
> The arc length of the curve $\vec{r}(t) = f(t)\hat{i} + g(t)\hat{i} + h(t)\hat{i}$ for $a \leq t \leq b$ is
>  
> $$s=\int_a^b||\vec{r}'(t)||\,dt = \int_a^b \sqrt{\left(f'(t)\right)^2 + \left(g'(t)\right)^2 + \left(h'(t)\right)^2}dt$$
> 
> **Arc Length Function**
> The arc length function for the curve $\vec{r}(t)$ gives the arc length at any value of $t > a$.
> 
> $$s(t)=\int_a^t||\vec{r}'(u)||\,du$$
> 
> **Arc Length Parametrization Steps:**
> 1. Solve for arc length function $s(t)$.
> 2. Given your function for $s(t)$, invert it to create $t(s)$.
> 3. Substitute $t(s)$ into $\vec{r}(t)$ to obtain the parametrization.


### Skill 1 Demo:

Given the line segment given by $\vec{r}(t)= (3t^2-7)\hat{i}+(-4t^2-10)\hat{j}$:
1. Find the arc length $s$ for $0 \leq t \leq 4$
2. Solve for the arc length function $s(t)$ and evaluate arc length $s$ for $0 \leq t \leq 4$
3. Find the arc length parametrization, $\vec{r}(s)$
%%
> [!Success]- Demo Solution
> Insert Solutions Here

%%
<div style="page-break-after: always;"></div>

---
### Problem 1.1:

Given the position vector for a helix shape $\vec{r}(t) = 3sin(t)\hat{i}+3cos{t}\hat{j}$:
1. Find the arc length $s$ for $0 \leq t \leq 4\pi$
2. Solve for the arc length function $s(t)$ and evaluate arc length $s$ for $0 \leq t \leq 4\pi$
3. Find the arc length parametrization, $\vec{r}(s)$
%%
> [!Success]- Problem 1.1 Solution
> Insert Solutions Here

%%
<div style="page-break-after: always;"></div>

---
### Problem 1.2:

Given the position vector $\vec{r}(t)=3\cos(t)\hat{i}+3\sin(t)\hat{j}+4t\hat{j}$
1. Solve for the arc length from $0\leq t\leq\pi$.
2. Explain whether or not a closed domain such as this can or cannot be used to perform an arc length parametrization of the position vector $\vec{r}(s)$.
%%
> [!Success]- Problem 1.2 Solution
> Insert Solutions Here

%%
<div style="page-break-after: always;"></div>

---
## Skill 2: Curvature of a Space Curve

> [!info]- Curvature Essential Formulas
> **Unit Tangent Vector:**
> $$\hat{T}=\dfrac{\vec{r}\,'(t)}{||\vec{r}\,'(t)||}$$
> **Unit Normal Vector:**
> $$\hat{N}=\dfrac{\hat{T}\,'}{||\hat{T}\,'||}$$
> **Curvature Equations:**
> 1. Use in the case of needing to solve for a unit tangent vector
> $$\kappa(t)=\dfrac{||\hat{T}\,'(t)||}{||\vec{r}\,'(t)||}$$
> 2. Use in the case of only having the position vector and no need to solve for unit tangent
> $$\kappa(t)=\dfrac{\|\vec r'(t)\times \vec r''(t)\|}{\|\vec r'(t)\|^3}$$
> 3. Use in the case of arc length parametrization
> $$\kappa(s)=||\hat{T}\,'(s)||$$
> **Radius of Curvature:**
> $$\rho = \dfrac{1}{\kappa}$$
<div style="page-break-after: always;"></div>

---
### Skill 2 Demo:

Given the position vector $\vec{r}(t)=\langle4t^2,\;(-4t-3),\;-2t\rangle$:
1. Solve for the unit tangent vector 
2. Solve for the curvature at $t=1$ 

%%
> [!Success]- Demo Solution
> Insert Solutions Here

%%
<div style="page-break-after: always;"></div>

---
### Problem S2.1:

Given the position vector $\vec{r}=\langle2\cos(t),\; 2\sin(t),\;t\rangle$:
1. Solve for the unit tangent vector
2. Solve for the radius of curvature
%%
> [!Success]- Problem 2.1 Solution
> Insert Solutions Here

%%
<div style="page-break-after: always;"></div>

---
### Problem S2.2:

Find the curvature for the curve $\vec{r}(s)=29\cos(\dfrac{s}{29})\hat{i}+29sin(\dfrac{s}{29})\hat{j}$ where $s$ is the arc length parameter.
%%
> [!Success]- Problem 2.2 Solution
> Insert Solutions Here

%%
<div style="page-break-after: always;"></div>

---
## Skill 3: Tangential and Normal Components of Acceleration

> [!info]- Tangential and Normal Components of Acceleration Essential Formulas
> **Velocity:**
> $$\vec{v}(t)=\vec{r}\,'(t)$$
> **Speed:**
> $$\text{Speed}=||\vec{v}||$$
> **Acceleration**
> $$\vec{a}(t) = \vec{v}'(t) = \vec{r}''(t)$$
> **Tangential Acceleration:**
> $$a_T=\dfrac{d}{dt}||\vec{v}(t)||=\dfrac{\vec{v}\;\cdot\vec{a}}{||\vec{v}||}$$
> **Normal Acceleration:**
> $$a_N=\kappa||\vec{v}||^2=\dfrac{||\vec{v}\times\vec{a}||}{||\vec{v}||}$$

### Skill 3 Demo:

A particle is moving along the given path
$$\vec{r}(t)=-7t^8\,\hat{i}+7t^3\,\hat{j}$$
Decompose the acceleration vector into its tangential and normal components at $t=1$.
%%
> [!Success]- Demo Solution
> Insert Solutions Here

%%
<div style="page-break-after: always;"></div>

---
### Problem 3.1:

Given the position vector $\vec{r}(t)=-t^5\,\hat{i}-7t^2\,\hat{j}$, decompose the acceleration vector into its tangential and normal components at $t=1$.
%%
> [!Success]- Problem 2.1 Solution
> Insert Solutions Here

%%
<div style="page-break-after: always;"></div>

---
### Problem 3.2:

A particle moves along the given path
$$\vec{r}(t)=3\cos(t)\,\hat{i}+3\sin(t)\,\hat{j}+4t\,\hat{k}$$
decompose the vector into both its normal and tangential components
%%
> [!Success]- Problem 2.2 Solution
> Insert Solutions Here

%%

