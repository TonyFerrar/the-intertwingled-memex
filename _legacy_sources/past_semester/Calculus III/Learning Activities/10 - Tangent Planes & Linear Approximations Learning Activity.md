
# Calc 3 Session 10
## Flat but Powerful
Tangent Planes and Linear Approximations


> [!info] Printable PDF
> [[10 - Tangent Planes & Linear Approximations Learning Activity.pdf]]


## 📋 Skill Roadmap for Today
- [ ] [[Equations of Planes]]    
- [ ] [[Tangent Planes at a Point]]
- [ ] [[Linear Approximations]]

## Essential notes & formulas
*This space is for you to use.*

<div style="page-break-after: always;"></div>


---
## Skill 1: Equations of Planes

> [!info] Equations of Planes Essential Formulas
> 
> **Point-normal form**
> $$a(x - x_0) + b(y - y_0) + c(z - z_0) = 0$$
> 
> **General Form**
> $$ax + by + cz = d$$
> 
> Where
> $$\vec{n} = \langle a, b, c \rangle$$

### Skill 1 Demo:
Given a normal vector $\vec{n}=\langle0,2,6\rangle$ and point $P=(2,5,6)$ from which the normal vector starts from, find the equation of the plane.

%%
> [!Success]- Demo Problem S1.1 Solution
> Insert Solutions Here

%%
<div style="page-break-after: always;"></div>

---
### Problem S1.1:

Given a normal vector $\vec{n}=\langle12,-4,7\rangle$ and point $P=(0,7,4)$ from which the normal vector starts from:
* Find the equation of the plane.
* Plot the plane using Desmos.

%%
> [!Success]- Problem S1.1 Solution
> Insert Solutions Here

%%
<div style="page-break-after: always;"></div>

---
### Problem S1.2:

Given the points $$A(1, 2, -1),\quad B(3, -1, 2),\quad C(0, 1, 1)$$find the equation of the plane contains all 3 points.
%%
> [!Success]- Problem S1.2 Solution
> Insert Solutions Here

%%
<div style="page-break-after: always;"></div>

---
## Skill 2: Tangent Planes at a Point

> [!info] Tangent Planes Essential Formulas
> 
> **Tangent Plane in 3D:**
> $$z = z_0 + f_x(x_0,y_0)[x-x_0] + f_y(x_0,y_0)[y-y_0], \quad z_0=f(x_0,y_0).$$
> 
> **Relating to Other Forms of the Equation of a Plane**
> $$\vec{n}=\langle a, b, c\rangle$$
 $$a=f_x(x-x_0)$$
 $$b = f_y(y-y_0)$$
 $$c=-1$$

### Skill 2 Demo:

Find the equation of the tangent plane to  
$$z = \sin(xy)$$
at $(x_0,y_0) = (0,\pi)$, where $z=0$.

%%
> [!Success]- Demo Problem Solution
> **Step 1: Find $z_0$ and partial derivatives**
> - $f(0,\pi)=\sin(0)=0.$
> - $f_x=y\cos(xy)\;\Rightarrow\; f_x(0,\pi)=\pi,$ 
> - $f_y=x\cos(xy)\;\Rightarrow\; f_y(0,\pi)=0.$
> ___
> **Step 2: Construct Tangent Plane**
> $$z = f(x,0)+f_x(0,\pi)(x-0)+f_y(0,\pi)(y-\pi)=\boxed{\pi x}$$

%%
<div style="page-break-after: always;"></div>

---
### Problem S2.1:

Find the equation of the tangent plane to  
$$z = x^2 + y^2$$  
at $(1,2)$, where $z=5$.
%%
> [!Success]- Problem S2.1 Solution
> **Step 1: Find $z_0$ and Partial Derivatives**
> - $z=x^2+y^2$ at $(1,2)$ where $z_0=5$
> - $f_x=2x\;\Rightarrow\; f_x(1,2)=2,$
> - $f_y=2y\;\Rightarrow\; f_y(1,2)=4.$
> ___
> **Step 2: Tangent Plane**
> $$z=5+2(x-1)+4(y-2)=\boxed{2x+4y-5}$$

%%
<div style="page-break-after: always;"></div>

---
### Problem S2.2:

Find the equation of the tangent plane to  
$$z = \sqrt{x+y}$$  
at $(3,1)$, where $z=2$.
%%
> [!Success]- Problem S2.2 Solution
> **Step 1: Find $z_0$ and Partial Derivatives**
> - $z=\sqrt{x+y}$ at $(3,1)$ where $z_0=2$
> - $f_x=\dfrac{1}{2\sqrt{x+y}},\quad f_y=\dfrac{1}{2\sqrt{x+y}}$
> - At $(3,1)$: $f_x=f_y=\tfrac{1}{4}.$
> ___
> **Step 2: Tangent Plane**
> $$z=2+\tfrac14(x-3)+\tfrac14(y-1)=\boxed{1+\tfrac{x+y}{4}}$$

%%
<div style="page-break-after: always;"></div>

---
## Skill 3 Linear Approximations

> [!info] Linear Approximations Essential Formulas
> 
> **Linear Approximation is an Applied Tangent Plane:**
> $$L(x,y) = f(x_0,y_0) + f_x(x_0,y_0)(x-x_0) + f_y(x_0,y_0)(y-y_0).$$
> 
> - $x_0$ and $y_0$ represent the point at which the plane is originating from (starting point)
> - $x$ and $y$ represent the point at which you are attempting to estimate the value of

### Skill 3 Demo:

Use a linear approximation at $(2,1)$ to estimate $f(2.1,0.9)$ for  
$$f(x,y) = \sqrt{x^2 + y}$$
%%
> [!Success]- Demo Problem Solution
> **Step 1: Find $z_0$ and Partial Derivatives**
> - $f(2,1)=z_0=\sqrt{5}$
> - $f_x=\dfrac{x}{\sqrt{x^2+y}},\quad f_y=\dfrac{1}{2\sqrt{x^2+y}}$
> -  $f_x(2,1)=\dfrac{2}{\sqrt{5}},\; f_y(2,1)=\dfrac{1}{2\sqrt{5}}$
> ___
> **Step 2: Estimation**
> - Plug in $f_x$, $f_y$, and $z_0$ into tangent plane
> $$L(x,y)=\sqrt{5}+\dfrac{2}{\sqrt{5}}(x-2)+\dfrac{1}{2\sqrt{5}}(y-1)$$
> - Plug in $x=2.1$ and $y=0.9$
> $$L=\sqrt{5}+\dfrac{0.2}{\sqrt{5}}-\dfrac{0.05}{\sqrt{5}}=\sqrt{5}+\dfrac{0.15}{\sqrt{5}}$$
> - Estimate: $\boxed{f(2.1,0.9)\approx 2.303}$

%%
<div style="page-break-after: always;"></div>

---
### Problem S3.1:

Use a linear approximation at $(1,1)$ to estimate $f(1.1,0.9)$ for  
$$f(x,y) = x^2 + y^2$$
%%
> [!Success]- Problem S3.1 Solution
> **Step 1: Find $z_0$ and Partial Derivatives**
> - Solve for $z_0$
> $$f(1,1)=z_0=2$$
> - Take Partial Derivatives
> $$f_x=2x\;\Rightarrow\; f_x(1,1)=2,$$ 
> $$$f_y=2y\;\Rightarrow\; f_y(1,1)=2.$$  
> **Step 2: Estimation with Tangent Plane**
> - Plug in $z_0$, $f_x$, and $f_y$
> $$L(x,y)=2+2(x-1)+2(y-1).$$
> - Plug in $x=1.1$ and $y=0.9$
> $$L=2+0.2-0.2=2.$$
> - Estimate: $\boxed{f(1.1,0.9)\approx2}$

%%
<div style="page-break-after: always;"></div>

---
### Problem S3.2:

Use a linear approximation at $(4,0)$ to estimate $f(4.1,-0.1)$ for  
$$f(x,y) = \sqrt{x + y + 4}$$
%%
> [!Success]- Problem S3.2 Solution
>  **Step 1: Find $z_0$ and Partial Derivatives**
> - Solve for $z_0$
> $$f(4,0)=\sqrt{8}=2\sqrt{2}.$$
> - Take Partial Derivatives
> $$f_x=f_y=\dfrac{1}{2\sqrt{x+y+4}}\Rightarrow f_x(4,0)=\dfrac{1}{4\sqrt{2}}$$  
> **Step 2: Estimation with Tangent Plane**
> - Plug in $z_0$, $f_x$, and $f_y$
> $$L(x,y)=2\sqrt{2}+\dfrac{1}{4\sqrt{2}}(x-4)+\dfrac{1}{4\sqrt{2}}(y-0)$$
> - Plug in $x=4.1$ and $y=-0.1$
> $$L=2\sqrt{2}\approx 2.828$$
> - Estimate: $\boxed{f(4.1,-0.1)\approx2.828}$

%%

