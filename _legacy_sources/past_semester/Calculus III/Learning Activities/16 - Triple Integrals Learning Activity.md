# Calc 3 Session 16
## Triple Integrals
Measuring Volume and Mass


> [!info] Printable PDF
> [[16 - Triple Integrals Learning Activity.pdf]]

## 📋 Skill Roadmap for Today
- [ ] [[Triple Integrals over Rectangular Regions]]
- [ ] [[Triple Integrals over General Regions]]
- [ ] [[Changing the Order of Integration]]

## Returning/Relevant Topics

> [!example] Returning Topics
> **Generating Bounds for General Regions:** [[Session 14 - Double Integrals]]

## Essential notes & formulas
*This space is for you to use.*

<div style="page-break-after: always;"></div>

---
## Skill 1: Triple Integrals Over Rectangular Regions

> [!info]- Skill 1 Essential Formulas
>**Triple Integrals over Rectangular Regions:**
>$$\iiint_E f(x,y,z)\,dV = \int_{x=a}^{b}\int_{y=c}^{d}\int_{z=r}^{s} f(x,y,z)\,dz\,dy\,dx$$
>$$x\in [a,\,b],\quad y\in[c,\,d],\quad z\in [r,\,s]$$
>___
>**Average Value of a Function:**
>$$\bar{f} = \frac{1}{V(E)} \iiint_E f(x,y,z)\,dV$$
>

### Skill 1 Demo:

Evaluate the triple integral of $f(x,y,z)=x+yz^2$ over the rectangular box
$$x\in[-1,5],\quad y\in[2,4],\quad z\in[0,1].$$
That is,
$$I=\int_{-1}^{5}\int_{2}^{4}\int_{0}^{1} \bigl(x+yz^2\bigr)\,dz\,dy\,dx.$$

%%
> [!Success] Demo Problem Solution
>Integrate in the order $dz\,dy\,dx$:
>$$ \int_{0}^{1} (x+yz^2)\,dz = xz + y\frac{z^3}{3}\Big|_{0}^{1}= x + \frac{y}{3}.$$
>Now
>$$\int_{2}^{4}\left(x+\frac{y}{3}\right)dy = 2x + \frac{1}{3}\cdot\frac{(4^2-2^2)}{2}= 2x + 2.$$
>Finally 
>$$\int_{-1}^{5}\bigl(2x+2\bigr)\,dx= \left(x^2+2x\right)\Big|_{-1}^{5} = (25+10)-\bigl(1-2\bigr)=36.$$
>$$\boxed{I=36.}$$

%%
<div style="page-break-after: always;"></div>

---
### Problem 1.1:

Evaluate  
$$
\iiint_{E} (3 - x + 2yz)\,dV,\qquad 
E:\; x\in[0,2],\ y\in[-1,1],\ z\in[1,2].
$$

%%
> [!Success] Problem 1.1 Solution
>Since limits are constant, integrate iteratively:
>$$ \int_{1}^{2}\int_{-1}^{1}\int_{0}^{2} (3-x+2yz)\,dx\,dy\,dz
>$$
>$$ = \int_{1}^{2}\int_{-1}^{1}\bigl[3x-\tfrac{x^2}{2}+2xyz\bigr]_{0}^{2}dy\,dz
>$$
>Inner result: $6-2+4yz=4+4yz.$
>$$ \int_{1}^{2}\int_{-1}^{1}(4+4yz)\,dy\,dz
>$$
>$$ = \int_{1}^{2}\bigl[4y+4\tfrac{y^2}{2}z\bigr]_{-1}^{1}dz = \int_{1}^{2}(8+0)\,dz = 8(1)=\boxed{8} $$

%%


<div style="page-break-after: always;"></div>

---
### Problem 1.2:

Evaluate  
$$
\int_{0}^{1}\int_{0}^{1}\int_{0}^{1} e^{x+2y+3z}\,dz\,dy\,dx.
$$
%%
> [!Success] Problem S1.2 Solution
>This factors as a product of one-variable integrals:
>$$\left(\int_{0}^{1} e^{x}\,dx\right) \left(\int_{0}^{1} e^{2y}\,dy\right)\left(\int_{0}^{1} e^{3z}\,dz\right)$$
>$$ = (e-1)\cdot\frac{e^2-1}{2}\cdot\frac{e^3-1}{3}.$$
>$$\boxed{\dfrac{(e-1)(e^2-1)(e^3-1)}{6}}.$$

%%
<div style="page-break-after: always;"></div>

---
## Skill 2: Triple Integrals Over a General Region

> [!info] Skill 2 Essential Formulas
>**Triple Integrals over General Regions:**
>$$\iiint_E f(x,y,z)\,dV = \int_{x=a}^{b} \int_{y=g_1(x)}^{g_2(x)} \int_{z=h_1(x,y)}^{h_2(x,y)} f(x,y,z)\,dz\,dy\,dx$$
>$$z\in[h_1(x,y),\,h_2],\quad y\in[g_1(x),\,g_2(x)],\quad x\in[a,\,b]$$
>

### Skill 2Demo:

Evaluate  
$$
\iiint_{E} (5x-3y)\,dV,
$$
where $E$ is the tetrahedron in the first octant bounded by  
$$x=0,\quad y=0,\quad z=0,\quad x+y+z=1.$$  
Use the order $dz\,dy\,dx$.

%%
> [!Success] Skill 2Demo Solution
> $$0\le x\le1,\quad 0\le y\le1-x,\quad 0\le z\le1-x-y.$$
> Compute  
> $$ \int_{0}^{1}\int_{0}^{1-x}\int_{0}^{1-x-y} (5x-3y)\,dz\,dy\,dx$$
> $$ = \int_{0}^{1}\int_{0}^{1-x}(5x-3y)(1-x-y)\,dy\,dx. $$
> Expanding and integrating over $y$ then $x$ gives  
> $$\boxed{\tfrac{1}{12}}.$$

%%
<div style="page-break-after: always;"></div>

---
### Problem 2.1:

Find the volume of the first-octant tetrahedron bounded by  
$$
\frac{x}{2}+\frac{y}{1}+\frac{z}{3}=1,\qquad x,y,z\ge0.
$$
Set up and evaluate a triple integral in rectangular coordinates.

%%
> [!Success] Problem 2.1 Solution
>Intercepts: $(2,0,0)$, $(0,1,0)$, $(0,0,3)$.  
>Use  $$ x\in[0,2],\quad y\in[0,1-\tfrac{x}{2}],\quad z\in[0,3 \tfrac{3}{2}x-3y].$$
>Then  
>$$ V=\int_{0}^{2}\int_{0}^{1-\frac{x}{2}}\int_{0}^{3-\frac{3}{2}x-3y}1\,dz\,dy\,dx = \boxed{1}.$$
>(Also matches $V=\tfrac{abc}{6}=\tfrac{2\cdot1\cdot3}{6}=1$.)

%%
<div style="page-break-after: always;"></div>

---
### Problem 2.2:

Let $E=\{x,y,z\ge0,\ x+y+z\le1\}$ and $\rho(x,y,z)=x+y+z$.  
Compute  
$$M=\iiint_E \rho\,dV.$$
%%
> [!Success] Problem 2.2 Solution
> $$M=\int_{0}^{1}\int_{0}^{1-x}\int_{0}^{1-x-y}(x+y+z)\,dz\,dy\,dx = \boxed{\tfrac{1}{8}}.$$

%%
<div style="page-break-after: always;"></div>

---
## Skill 3 Changing The Order of Integration

> [!success] Changing the Order of Integration
> Steps for Changing Order in 3D
> 1. Sketch or describe the region $E$.
> 2. Identify projection onto the plane of the *outer* two variables.
> 3. Solve for new inner limits using the same region boundaries.
> 4. Write the new triple integral with matching $dV$ order.

> [!warning] Tip for Switching Variables in 3D
> Utilizing traces for a volume can help in illustrating how the integration operates.

### Skill 3 Demo:

Starting from  
$$
\int_{0}^{1}\int_{0}^{x^2}\int_{0}^{y^2} xyz\,dz\,dy\,dx
\quad (\text{order } dz\,dy\,dx),
$$
rewrite the integral in the order $dx\,dz\,dy$ and evaluate.

%%
> [!Success] Skill 3 Demo Problem Solution
> Region:  
> $$0\le x\le1,\quad 0\le y\le x^2,\quad 0\le z\le y^2.$$
> Project to $y$–axis: $0\le y\le1$.  
> For fixed $y$, $0\le z\le y^2$.  
> For fixed $(y,z)$, $y\le x^2\Rightarrow x\in[\sqrt{y},1]$.
> Thus  
> $$\int_{0}^{1}\int_{0}^{y^2}\int_{\sqrt{y}}^{1} xyz\,dx\,dz\,dy.$$
> Evaluating gives  
> $$\boxed{\tfrac{1}{168}}.$$

%%
<div style="page-break-after: always;"></div>

---
### Problem 3.1:

Rewrite  
$$
\int_{0}^{2}\int_{0}^{x}\int_{0}^{x-y} 1\,dz\,dy\,dx
\quad(\text{order } dz\,dy\,dx)
$$
in the order $dx\,dz\,dy$ and evaluate the volume.
%%
> [!Success] Problem 3.1 Solution
>Region: $0\le y\le x\le2$, $0\le z\le x-y$.  
>For fixed $y$, $z\in[0,2-y]$.  
>For fixed $(y,z)$, $x\in[y+z,2]$.
>Hence  $$\int_{0}^{2}\int_{0}^{2-y}\int_{y+z}^{2}1\,dx\,dz\,dy$$
>$$ = \int_{0}^{2}\int_{0}^{2-y}(2-(y+z))\,dz\,dy = \boxed{\tfrac{4}{3}}.$$

%%
<div style="page-break-after: always;"></div>

---
### Problem 3.2:

Given  
$$
\int_{0}^{1}\int_{0}^{1-x}\int_{0}^{x+2y} x\,dz\,dy\,dx
\quad(\text{order } dz\,dy\,dx),
$$
rewrite in the order $dx\,dz\,dy$ (splitting if needed) and evaluate.
%%
> [!Success] Problem 3.2 Solution
> Region: $0\le x\le1$, $0\le y\le1-x$, $0\le z\le x+2y$.  
> Project onto $y$–axis: $0\le y\le1$.  
> For fixed $y$, $z\in[0,1+y]$.  
> For fixed $(y,z)$:
> - If $0\le z\le2y$, inequality $z\le x+2y$ holds for all $x\in[0,1-y]$.
> - If $2y\le z\le1+y$, then $x\ge z-2y$, so $x\in[z-2y,1-y]$.
> Therefore  
> $$\int_{0}^{1}\!\left[\int_{0}^{2y}\!\!\int_{0}^{1-y} x\,dx\,dz+\int_{2y}^{1+y}\!\!\int_{z-2y}^{1-y} x\,dx\,dz\right]\!dy.$$
> Evaluating both parts and summing gives  
> $$\boxed{\tfrac{1}{6}}.$$

%%

