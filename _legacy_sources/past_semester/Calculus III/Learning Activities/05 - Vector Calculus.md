# Calc 3 Session 5 

## Motion in Mechanical System 
Vector Valued functions and Derivatives 

> [!info] Printable PDF
> [[05 - Vector Calculus.pdf]]

## 📋 Skill Roadmap for Today
- [ ] Skill 1: [[Working with Vector Valued Functions]]
- [ ] Skill 2: [[Vector Calculus - Differentiation]]
- [ ] Skill 3: [[Vector Calculus - Integration]]

## Essential notes & formulas
*This space is for you to use.*

<div style="page-break-after: always;"></div>

---

## Skill 1: Characteristics of Vectors

> [!info]- Essential Formulas
> A vector valued function is a function of the form
> $$\vec{r}(t) = f(t)\hat{i} + g(t)\hat{j} + h(t)\hat{k}$$
> 
> Vector valued functions are evaluated by substituting values of the parameter $t$.
> 
> Domain and Range of vector valued functions works similar to the functions you've been looking at up to this point. The only difference is that you're looking at values of $t$ for the domain and values of $\vec{r}$ for the range.

### Skill 1 Demo:

Determine the domain of $\vec{r}(t)=\langle\sqrt{t+2},\;\frac{-9}{t+3},\;\frac{-7}{\sqrt{t-5}}\rangle$ and plot the function using Desmos.

%%
> [!Success]- Problem 1.1 Solution
> Insert Solutions Here
> - First component: $t+2\ge0 \Rightarrow t\ge -2$  
> - Second: $t\ne -3$  
> - Third: $t-5>0 \Rightarrow t>5$  
> - **Domain:** $(5,\infty)$ (overlap of all).  

%%

<div style="page-break-after: always;"></div>


### Problem S1.1 
Determine the domain and plot using Desmos:
$$
\vec{r}(t)
=
\left\langle
\sqrt{3t-4},\;
\sqrt{t+7},\;
\frac{6}{t-1}
\right\rangle
$$

%%
> [!Success]- Problem S1.2 Solution
> Insert Solutions Here
> $$t \ge \frac{4}{3}$$
> $$t \ge -7$$
> $$t \neq 1$$
> $$\boxed{\text{Domain} = \left[\frac{4}{3}, \infty\right)}$$

%%

<div style="page-break-after: always;"></div>


### Problem S1.2

Determine the domain and plot using Desmos:
$$
\vec{r}(t)
=
\left\langle
\frac{\sqrt{t+2}}{t-1},\;
\sqrt{4-t},\;
\frac{3}{\sqrt{t-6}}
\right\rangle
$$

%%
> [!Success]- Problem S1.3 Solution
> Insert Solutions Here
> $$t \ge -2$$
> $$t \neq 1$$
> $$t \le 4$$
> $$t > 6$$
> $$t \ge -2, \quad t \neq 1, \quad t \le 4, \quad t > 6$$
> $$\boxed{\text{Domain} = \varnothing}$$
> Meaning: If the domain doesn’t exist, the function is **never defined**.

%%

<div style="page-break-after: always;"></div>


## Skill 2: Vector Calculus: Differentiation

> [!info]- Essential Formulas
> Differentiation of Vector Valued Functions
> Let $f$, $g$, and $h$ be differentiable functions of $t$.
> 
> For $\vec{r}(t) = f(t)\hat{i} + g(t)\hat{j} + h(t)\hat{k}$
> 
> The derivative is
> 
> $$\vec{r}'(t) = f'(t)\hat{i} + g'(t)\hat{j} + h'(t)\hat{k}$$
> 
> Note: $\vec{r}'(t)$ is the tangent vector to $\vec{r}(t)$ by definition. The principal unit tangent vector is a tangent vector with magnitude 1. As with all unit vectors, it is found by dividing by the magnitude:
> $$ \hat{T}(t) = \frac{\vec{r}'(t)}{|\vec{r}'(t)|}$$

### Skill 2 Demo:

Find the derivative of the vector valued function and the principal unit tangent vector:$$\vec{r}(t)=-t\,\hat{i}-t^4\,\hat{j}-6t^2\,\hat{k}$$

%%
> [!Success]- Problem S2.1 Solution
> Insert Solutions Here
> $\mathbf{r}(t)=-t\mathbf{i}-t^4\mathbf{j}-6t^2\mathbf{k}$  
> $\mathbf{r}'(t)=\langle -1,\ -4t^3,\ -12t\rangle$  

%%

<div style="page-break-after: always;"></div>


### Problem S2.1

Given $\vec{r}(t)=-6t^3\,\hat{i},-3t^7\,\hat{j},\frac{-3}{t^4}\hat{k}$ and $f(t)=\sqrt[4]{t}$, calculate
1. $\frac{d}{dt}[\vec{r}(t)]$
2. $\frac{d}{dt}[\,\vec{r}(f(t))\,]$

%%
> [!Success]- Problem S2.2 Solution
> Insert Solutions Here
> $\mathbf{r}(t)=\langle -6t^3,\ -3t^7,\ -3t^4\rangle$, $f(t)=4\sqrt{t}$  
Need $\frac{d}{dt}\mathbf{r}(f(t))$:  
$\mathbf{r}'(t)=\langle -18t^2,\ -21t^6,\ -12t^3\rangle$  
Then substitute $t=f(t)=4\sqrt{t}$, multiply by $f'(t)=\frac{2}{\sqrt{t}}$:  
$\mathbf{r}'(f(t))\cdot f'(t)=\langle -18(16t)\ ,\ -21(4096 t^3),\ -12(64 t^{3/2})\rangle \cdot \frac{2}{\sqrt{t}}$  
= $\langle -576t,\ -86016t^3,\ -768t^{3/2}\rangle\cdot \frac{2}{\sqrt{t}}$  
= $\langle -1152\sqrt{t},\ -172032t^{5/2},\ -1536t\rangle$  
%%

<div style="page-break-after: always;"></div>


### Problem S2.2
The velocity of a car driving along the highway can be represented as the following vector valued function:$$\mathbf{v}=\langle\, t\sin(2t),\;2t\ln({t-3}),\;\frac{t^2}{t-2}\,\rangle\;\frac{m}{s}$$
- Find the acceleration of the car, $\mathbf{a}(t)$. *Hint: acceleration is the derivative of velocity with respect to time.*
- Find the acceleration and principal unit tangent vector at $t=20$ s.


%%
> [!Success]- Problem S2.3 Solution
> Insert Solutions Here
> $v(t)=\langle t\sin(2t),\ 2t\ln(t-3),\ \tfrac{t^2}{t-2}\rangle$  
> $a(t)=v'(t)$:
> $d/dt[t\sin(2t)] = \sin(2t)+2t\cos(2t)$
> $d/dt[2t\ln(t-3)] = 2\ln(t-3)+\tfrac{2t}{t-3}$  
> $d/dt[\tfrac{t^2}{t-2}] = \tfrac{(2t)(t-2)-t^2(1)}{(t-2)^2} = \tfrac{t^2-4t}{(t-2)^2}$  
> So $a(t)=\langle \sin(2t)+2t\cos(2t),\ 2\ln(t-3)+\tfrac{2t}{t-3},\ \tfrac{t^2-4t}{(t-2)^2}\rangle$  
> At $t=20$: plug in values (approx. numeric if desired).  

%%

<div style="page-break-after: always;"></div>


## Skill 3: Vector Calculus: Integration

> [!info]- Essential Formulas
> Integrating vector valued functions:
> 
> Let $f$, $g$, and $h$ be real valued functions of $t$.
> $$\vec{r}(t) = f(t)\hat{i} + g(t)\hat{j} + h(t)\hat{k}$$
> 
> The integral of $\vec{r}(t)$ can be found:
> 
> **Indefinite:**
> $$\int{\vec{r}(t) dt} = \left[\int{f(t)dt}\right]\hat{i} + \left[\int{g(t)dt}\right]\hat{j} + \left[\int{h(t)dt}\right]\hat{k}$$
> Note: each component produces its own constant of integration. For $F$, $G$, and $H$ as antiderivatives of $f$, $g$, and $h$:
> $$\int{\vec{r}(t) dt} = (F(t) + C_1)\hat{i} + (G(t) + C_2)\hat{j} + (H(t) + C_3)\hat{k}$$
> It is typical to collect the integration constants into a single constant vector of integration:
> $$\int{\vec{r}(t) dt} = (F(t))\hat{i} + (G(t))\hat{j} + (H(t))\hat{k} + \vec{C}$$
> where $\vec{C} = C_1\hat{i} + C_2\hat{j} + C_3\hat{k}$ 
> 
> **Definite:**
> $$\int_{a}^{b}{\vec{r}(t) dt} = \left[\int_{a}^{b}{f(t)dt}\right]\hat{i} + \left[\int_{a}^{b}{g(t)dt}\right]\hat{j} + \left[\int_{a}^{b}{h(t)dt}\right]\hat{k}$$
> 

<div style="page-break-after: always;"></div>

### Skill 3 Demo:
Evaluate the indefinite integral:$$\int{\langle\,5\cos(7t),\,3cos(4t),\,\frac{-9}{t}\,\rangle\,dt}$$

%%
> [!Success]- Problem S3.1 Solution
> Insert Solutions Here
> $\int \langle 5\cos(7t),\ 3\cos(4t),\ -9/t\rangle dt$ $=\langle \tfrac{5}{7}\sin(7t),\ \tfrac{3}{4}\sin(4t),\ -9\ln|t|\rangle +C$  

%%

<div style="page-break-after: always;"></div>


### Problem S3.1
Given that an object has a velocity of $\mathbf{v}=[\,\sqrt[3]{t}\,\hat{i},\,\frac{1}{t+2}\,\hat{j},\,e^{8t}\,\hat{k}\,]\,\frac{ft}{s}$, 
- Use an indefinite integral to find the displacement vector of the object
- Use a definite integral to find the displacement vector of the object over the interval $1\leq t\leq 5$

%%
> [!Success]- Problem S3.2 Solution
> Insert Solutions Here
> $v(t)=\langle 3\sqrt{t},\ \tfrac{1}{t+2},\ e^{8t}\rangle$  
> Displacement $=\int_{1}^{5} v(t)\,dt$ 
> $\int_1^5 3\sqrt{t}\,dt = [2t^{3/2}]_1^5 = 2(5^{3/2}-1)$  
> $\int_1^5 \tfrac{1}{t+2} dt = \ln(7)-\ln(3)$  
> $\int_1^5 e^{8t}dt = \tfrac{1}{8}(e^{40}-e^{8})$  
> So $\Delta r=\langle 2(5^{3/2}-1),\ \ln(\tfrac{7}{3}),\ \tfrac{1}{8}(e^{40}-e^{8})\rangle$  

%%

<div style="page-break-after: always;"></div>

### Problem S3.2 
Given an object with velocity
$$
\mathbf{v}(t)
=
\left[
t^{3/2}\,\hat{i},
\;
\frac{\ln(t)}{t}\,\hat{j},
\;
e^{-2t}\sin(3t)\,\hat{k}
\right]
\frac{\text{ft}}{\text{s}},
$$

find the displacement vector of the object over the interval
$$
1 \le t \le 4.
$$

%%
> [!Success]- Problem S3.3 Solution
> Insert Solutions Here
> $$\int t^{3/2}\,dt=\frac{2}{5}t^{5/2}$$
> $$\int \frac{\ln t}{t}\,dt=\int u\,du=\frac{1}{2}(\ln t)^2$$
> $$\int e^{-2t}\sin(3t)\,dt=\frac{e^{-2t}}{13}\big(-2\sin(3t)-3\cos(3t)\big)$$
> $$\mathbf{r}(t)=\left\langle\frac{2}{5}t^{5/2},\;\frac{1}{2}(\ln t)^2,\;\frac{e^{-2t}}{13}\big(-2\sin(3t)-3\cos(3t)\big)\right\rangle$$
> $$\boxed{\left\langle\frac{62}{5},\;\frac{1}{2}(\ln 4)^2,\;\frac{1}{13}\!\left[e^{-8}\!\big(-2\sin 12-3\cos 12\big)-e^{-2}\!\big(-2\sin 3-3\cos 3\big)\right]\right\rangle\text{ ft}}$$

%%







