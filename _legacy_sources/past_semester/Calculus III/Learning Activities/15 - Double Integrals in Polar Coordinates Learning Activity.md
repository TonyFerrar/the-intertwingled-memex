
# Calc 3 Session 15

## Double Integrals in Polar Coordinates
Curved Regions and Circular Systems

> [!info] Printable PDF
> [[15 - Double Integrals in Polar Coordinates Learning Activity.pdf]]

## 📋 Skill Roadmap for Today
- [ ] [[Describe and Bound General Regions]]
- [ ] [[Convert Rectangular Double Integrals to Polar Coordinates]]
- [ ] [[Evaluate Integrals Over Circular or Radially Symmetric Regions]]

## Essential notes & formulas
*This space is for you to use.*

<div style="page-break-after: always;"></div>


---
## Skill 1: Describe and Bound General Regions

> [!info] Double Integrals Essential Formulas
> 
> $$x = r\cos\theta \quad\quad y = r\sin\theta$$
> $$r = \sqrt{x^{2} + y^{2}} \quad\quad \theta = \tan^{-1}\!\left(\frac{y}{x}\right)$$
> $$\iint_R f(x,y)\,dx\,dy\;\;=\;\;\iint_R f(r\cos\theta,\;r\sin\theta)\,r\,dr\,d\theta$$
> **Always include the Jacobian $r$.**

### Skill 1 Demo 1:

Find the area of the region bounded by the curves $y=\sqrt{x}$ and $y=x$.

1) Sketch the region and label the intersection points.
2) Set up a **double integral** in rectangular coordinates that computes the area.
3) Evaluate your integral to get a numerical value.

<div style="page-break-after: always;"></div>

%%

> [!Success] Skill 1 Demo Solution
> 
> *Intersections.** Solve $\sqrt{x}=x$ with $x\ge 0$. Either $x=0$ or $x=1$.  
> On $[0,1]$, top curve is $y=\sqrt{x}$ and bottom curve is $y=x$
> **Double integral (rectangular).**
> $$A=\int_{x=0}^{1}\int_{y=x}^{\sqrt{x}} 1\,dy\,dx=\int_{0}^{1}\Big[\;y\;\Big]_{y=x}^{y=\sqrt{x}}\,dx =\int_{0}^{1}\big(\sqrt{x}-x\big)\,dx.$$
> **Evaluate.**
> $$\int_{0}^{1}\sqrt{x}\,dx=\left[\tfrac{2}{3}x^{3/2}\right]_{0}^{1}=\tfrac{2}{3},\qquad\int_{0}^{1}x\,dx=\left[\tfrac{1}{2}x^{2}\right]_{0}^{1}=\tfrac{1}{2}.$$
> Thus
> $$A=\tfrac{2}{3}-\tfrac{1}{2}=\tfrac{1}{6}.$$

%%

### Skill 1 Demo 2:
Find the area enclosed by the circle $x^2+y^2=a^2$ in **two ways**:

- (A) **Rectangular coordinates** — set up a double integral over the region and evaluate.
- (B) **Polar coordinates** — convert the region and differential area to polar and evaluate.

Compare the setups and comment on which is simpler and why.

<div style="page-break-after: always;"></div>

%%
> [!Success] Skill 1 Demo 2 Solution
> 
>  **(A) Rectangular.** The region is
>  $$R=\{(x,y)\mid -a\le x\le a,\; -\sqrt{a^2-x^2}\le y\le \sqrt{a^2-x^2}\}.$$
>  Area:$$A=\int_{-a}^{a}\int_{-\sqrt{a^2-x^2}}^{\sqrt{a^2-x^2}} 1\,dy\,dx
>  =\int_{-a}^{a}2\sqrt{a^2-x^2}\,dx=\pi a^{2}$$
>  (trig sub or known semicircle area).
>  
>  **(B) Polar.** The circle is $0\le r\le a$, $0\le \theta\le 2\pi$, and $dA=r\,dr\,d\theta$.
>  $$A=\int_{0}^{2\pi}\int_{0}^{a} 1\cdot r\,dr\,d\theta
>  =\int_{0}^{2\pi}\left[\tfrac{1}{2}r^{2}\right]_{0}^{a}d\theta
>  =\int_{0}^{2\pi}\tfrac{1}{2}a^{2}\,d\theta
>  =\pi a^{2}.$$
>  **Comment.** Polar turns the curved boundary into a constant $r=a$ with independent bounds; the Jacobian $r$ handles radial “stretch.” Simpler limits, cleaner computation.

%%


### Problem 1.1 
**PRACTICE 1 (Rectangular – Bounding a General Region, Set Up Only)**

Set up (but do not evaluate) a double integral in rectangular coordinates for the **area** of the region bounded by $y=x^{2}$ and $y=2x$.

1) Find intersection points.
2) Decide top/bottom on the interval.
3) Write the double integral for the area.

<div style="page-break-after: always;"></div>

%%
> [!Success] Problem S1.1 Solution
>
> **Intersections.** Solve $x^{2}=2x\;\Rightarrow\;x(x-2)=0\;\Rightarrow\;x=0,2$.  
> On $[0,2]$, $y=2x$ (line) is above $y=x^{2}$ (parabola).
> **Set up (rectangular).**
> $$A=\int_{x=0}^{2}\int_{y=x^{2}}^{\,2x} 1\,dy\,dx.$$
> (Do not evaluate.)

%%

### Problem 1.2 
**PRACTICE 2 (Polar – Bounding an Annular Sector, Compute Area)**

Describe the region in **polar** coordinates and compute its **area**: the set of points between the circles $r=1$ and $r=3$ and between the angles $\theta=\frac{\pi}{6}$ and $\theta=\frac{\pi}{2}$.

1) Write the bounds in polar.
2) Set up the double integral for area.
3) Evaluate.

<div style="page-break-after: always;"></div>

%%
> [!Success]- Problem 1.2 Solution
> 
> **Bounds.** $1\le r\le 3,\;\;\frac{\pi}{6}\le \theta\le \frac{\pi}{2}$, with
> $dA=r\,dr\,d\theta$.
> **Area.**
> $$
> A=\int_{\theta=\pi/6}^{\pi/2}\int_{r=1}^{3} r\,dr\,d\theta
> =\int_{\pi/6}^{\pi/2}\left[\tfrac{1}{2}r^{2}\right]_{1}^{3}d\theta
> =\int_{\pi/6}^{\pi/2}\tfrac{1}{2}(9-1)\,d\theta
> =4\int_{\pi/6}^{\pi/2} d\theta
> =4\left(\tfrac{\pi}{2}-\tfrac{\pi}{6}\right)
> =\tfrac{4\pi}{3}.$$

%%

### Problem S1.3
Region: inside the circle $x^{2}+y^{2}\le 9$ and **above** the line $y=x$.

1) Choose the coordinate system (rectangular or polar) that gives the **cleanest bounds** and justify briefly.
2) **Set up** (but do not evaluate) a double integral for the **area**.

(Optional challenge: also set it up in the other coordinate system to compare complexity.)

<div style="page-break-after: always;"></div> 


%%
> [!Success] Problem S1.3 Solution
> 
> **Best choice: Polar.** The circle is $r\le 3$. The half-plane $y\ge x$ is $\sin\theta\ge \cos\theta\Rightarrow \tan\theta\ge 1$, so $\theta\in\left[\tfrac{\pi}{4},\tfrac{5\pi}{4}\right]$ (covering the entire half-plane above the line).
> **Polar setup.**
> $$A=\int_{\theta=\pi/4}^{\,5\pi/4}\int_{r=0}^{3} r\,dr\,d\theta$$
> (Do not evaluate.)
> **Rectangular (optional).** Requires splitting by orientation if integrating in $x$ or $y$, with circular bounds $y=\pm\sqrt{9-x^{2}}$ plus half-plane constraint $y\ge x$. This leads to piecewise limits; polar is cleaner.

%%

### Problem S1.4
Set up (but do not evaluate) a double integral for the **area** of the region bounded by $y=\sin x$ and $y=\cos x$ on $0\le x\le \frac{\pi}{2}$.

1) Find where the curves cross on $[0,\frac{\pi}{2}]$.
2) Split the interval accordingly and identify top/bottom on each piece.
3) Write the sum of double integrals.

<div style="page-break-after: always;"></div> 


%%
> [!Success] Problem 1.4 Solution
> 
> **Intersection.** $\sin x=\cos x\Rightarrow x=\frac{\pi}{4}$ on $\left[0,\tfrac{\pi}{2}\right]$.
> On $[0,\tfrac{\pi}{4}]$, $\cos x\ge \sin x$ (top is $\cos x$).
> On $[\tfrac{\pi}{4},\tfrac{\pi}{2}]$, $\sin x\ge \cos x$ (top is $\sin x$).
> **Set up (rectangular).**
> $$A=\int_{0}^{\pi/4}\int_{y=\sin x}^{\,\cos x}1\,dy\,dx\;+\;\int_{\pi/4}^{\pi/2}\int_{y=\cos x}^{\,\sin x}1\,dy\,dx.$$
> (Do not evaluate.)

%%

## Skill 2: Convert Rectangular Double Integrals to Polar Coordinates

> [!info] Polar Coordinates Essential Formulas
> 
> To convert between rectangular and polar coordinates:
> $$
> x = r\cos\theta \quad\quad y = r\sin\theta
> $$
> $$
> r = \sqrt{x^{2} + y^{2}} \quad\quad \theta = \tan^{-1}\!\left(\frac{y}{x}\right)
> $$
>  $$\iint_R f(x,y)\,dx\,dy\;\;=\;\;\iint_R f(r\cos\theta,\;r\sin\theta)\,r\,dr\,d\theta$$
> **Always include the Jacobian $r$.**


### Skill 2 Demo: 
**DEMO – Converting to Polar Coordinates**

Evaluate the integral  
$$
I=\int_{x=-1}^{1}\int_{y=0}^{\sqrt{1-x^{2}}} (x^{2}+y^{2})\,dy\,dx
$$  
by converting to polar coordinates.

1) Sketch the region and describe it in words.  
2) Express the integrand and limits in polar form.  
3) Evaluate the polar integral and compare effort with the rectangular form.

<div style="page-break-after: always;"></div>

%%

> [!Success] Skill 2 Demo Solution
> 
> **1. Region.**  
> Upper semicircle of radius 1 centered at the origin: $x^{2}+y^{2}=1$, $y\ge0$. 
> **2. Convert.**  
> Use $x=r\cos\theta$, $y=r\sin\theta$, $dA=r\,dr\,d\theta$.  
> Bounds: $0\le r\le1$, $0\le\theta\le\pi$.  
> Integrand: $x^{2}+y^{2}=r^{2}$.  
> So
> $$I=\int_{0}^{\pi}\int_{0}^{1} r^{2}\,(r\,dr\,d\theta)=\int_{0}^{\pi}\int_{0}^{1} r^{3}\,dr\,d\theta.$$
> **3. Evaluate.**
> $$
> \int_{0}^{1}r^{3}\,dr=\tfrac{1}{4},\qquad
> I=\int_{0}^{\pi}\tfrac{1}{4}\,d\theta=\tfrac{\pi}{4}.
> $$

%%


### Problem 2.1
**PRACTICE 1 – Converting a Polynomial Function**

Convert the integral  
$$
\int_{x=0}^{1}\int_{y=0}^{\sqrt{1-x^{2}}} (x^{2}+y^{2})^{2}\,dy\,dx
$$  
to polar coordinates **and set it up for evaluation**, but do not compute.

<div style="page-break-after: always;"></div>

%%

> [!Success] Problem S2.1 Solution
> 
> Region: quarter of the unit disk in the first quadrant.  
> Bounds: $0\le r\le1$, $0\le\theta\le\frac{\pi}{2}$.
> Integrand: $(x^{2}+y^{2})^{2}=r^{4}$ and $dA=r\,dr\,d\theta$.
> Setup:
> $$
> \int_{0}^{\pi/2}\int_{0}^{1} r^{4}\,r\,dr\,d\theta
> =\int_{0}^{\pi/2}\int_{0}^{1} r^{5}\,dr\,d\theta.
> $$

%%

### Problem 2.2
**PRACTICE 2 – Trigonometric Integrand**

Convert and evaluate  
$$
\int_{x=0}^{1}\int_{y=0}^{\sqrt{1-x^{2}}} y\,dy\,dx.
$$
<div style="page-break-after: always;"></div>

%%

> [!Success] Problem 2.2 Solution
> 
> region: same quarter-circle ($0\le r\le1$, $0\le\theta\le\frac{\pi}{2}$).
> Integrand: $y=r\sin\theta$, $dA=r\,dr\,d\theta$.
> So
> $$
> I=\int_{0}^{\pi/2}\int_{0}^{1} (r\sin\theta)\,r\,dr\,d\theta
> $$
> $$
> =\int_{0}^{\pi/2}\sin\theta\int_{0}^{1}r^{2}\,dr\,d\theta
> $$
> $$
> =\int_{0}^{\pi/2}\sin\theta\left[\tfrac{1}{3}\right]d\theta
> $$
> $$
> =\tfrac{1}{3}[\,-\cos\theta\,]_{0}^{\pi/2}
> $$
> $$
> =\tfrac{1}{3}.
> $$

%%

### Problem 2.3
**PRACTICE 3 – General Polar Region**

Convert to polar form and evaluate:
$$
\iint_{R} r^{2}\,dA,
$$
where $R$ is the annular region between $x^{2}+y^{2}=1$ and $x^{2}+y^{2}=4$ in the **first quadrant**.

<div style="page-break-after: always;"></div>

%%

> [!Success] Problem 2.3 Solution
> 
> Region: $1\le r\le2$, $0\le\theta\le\frac{\pi}{2}$.
> Integral:
> $$
> I=\int_{0}^{\pi/2}\int_{1}^{2} r^{2}\,(r\,dr\,d\theta)
> $$
> $$
> =\int_{0}^{\pi/2}\int_{1}^{2} r^{3}\,dr\,d\theta
> $$
> $$
> =\int_{0}^{\pi/2}\left[\tfrac{1}{4}r^{4}\right]_{1}^{2}d\theta
> $$
> $$
> =\int_{0}^{\pi/2}\tfrac{15}{4}\,d\theta
> $$
> $$
> =\tfrac{15\pi}{8}.
> $$

%%


### Problem 2.4
**PRACTICE 4 – Decide: Rectangular or Polar?**

Evaluate the integral by **choosing whichever coordinate system is simpler**:
$$
\iint_{R} (x^{2}+y^{2})\,dA,
$$
where $R$ is the region bounded by the circle $x^{2}+y^{2}=9$ and the line $y=0$ (the upper semicircle).

1) Choose the coordinate system and explain why.  
2) Evaluate the integral.

<div style="page-break-after: always;"></div>

%%

> [!Success] Problem 2.4 Solution
> 
> Best choice: **Polar**, because region is a semicircle.
> Bounds: $0\le r\le3$, $0\le\theta\le\pi$, integrand $r^{2}$, $dA=r\,dr\,d\theta$.
> Compute:
> $$
> I=\int_{0}^{\pi}\int_{0}^{3} r^{2}\,r\,dr\,d\theta
> $$
> $$
> =\int_{0}^{\pi}\int_{0}^{3} r^{3}\,dr\,d\theta
> $$
> $$
> =\int_{0}^{\pi}\left[\tfrac{1}{4}r^{4}\right]_{0}^{3}d\theta
> $$
> $$
> =\int_{0}^{\pi}\tfrac{81}{4}\,d\theta
> $$
> $$
> =\tfrac{81\pi}{4}.
> $$
> Rectangular setup would involve $y=\sqrt{9-x^{2}}$; polar is cleaner.

%%

---

## Skill 3: Evaluate Integrals Over Circular or Radially Symmetric Regions 

> [!info] Polar Coordinates Essential Formulas
> 
> Compute
> $$\int \int_R f (r,\theta)\; r \,dr\, d\theta$$
> for disks, sectors, and annuli, interpreting bounds geometrically.  
> To convert between rectangular and polar coordinates:
> $$x = r\cos\theta \quad\quad y = r\sin\theta$$
> $$r = \sqrt{x^{2} + y^{2}} \quad\quad \theta = \tan^{-1}\!\left(\frac{y}{x}\right)$$
> $$\iint_R f(x,y)\,dx\,dy\;\;=\;\;\iint_R f(r\cos\theta,\;r\sin\theta)\,r\,dr\,d\theta$$
> **Always include the Jacobian $r$.**

### Skill 3 Demo:
**DEMO – Evaluating a Polar Double Integral**

A circular metal plate of radius 2 cm has a surface density given by $\rho(r,\theta)=r$ g/cm².  
Find the total mass of the plate.

1) Express the mass as a double integral in polar coordinates.  
2) Evaluate the integral.  
3) Interpret the result.

<div style="page-break-after: always;"></div>

%%

> [!Success] Skill 3 Demo Solution
> 
> **1. Setup.**  
> Region: full disk $0\le r\le2$, $0\le\theta\le2\pi$.  
> Mass $M=\iint_R\rho(r,\theta)\,dA$ with $dA=r\,dr\,d\theta$.  
> **2. Substitute $\rho(r,\theta)=r$.**
> $$M=\int_{0}^{2\pi}\int_{0}^{2} r\,(r\,dr\,d\theta)=\int_{0}^{2\pi}\int_{0}^{2} r^{2}\,dr\,d\theta.$$
> Compute inner integral:
> $$\int_{0}^{2}r^{2}\,dr=\tfrac{8}{3},\qquad
> M=\int_{0}^{2\pi}\tfrac{8}{3}\,d\theta=\tfrac{16\pi}{3}.
> $$
> **3. Interpretation.**  
> Mass ≈ $16.76$ g if units are consistent.  
> Radial density means material is heavier near the rim—polar coordinates make this direct.

%%
   
### Problem 3.1
**PRACTICE 1 – Annular Region (Evaluate)**

Evaluate the double integral  
$$
I=\iint_R (x^{2}+y^{2})\,dA,
$$
where $R$ is the annulus bounded by $x^{2}+y^{2}=1$ and $x^{2}+y^{2}=4$.

<div style="page-break-after: always;"></div>

%%

> [!Success] Problem 3.1 Solution
> 
> Convert to polar: $x^{2}+y^{2}=r^{2}$, $dA=r\,dr\,d\theta$, region $1\le r\le2$, $0\le\theta\le2\pi$.
> $$
> I=\int_{0}^{2\pi}\int_{1}^{2} r^{2}\,r\,dr\,d\theta
> $$
> $$
> =\int_{0}^{2\pi}\int_{1}^{2} r^{3}\,dr\,d\theta
> $$
> $$
> =\int_{0}^{2\pi}\tfrac{15}{4}\,d\theta
> $$
> $$
> =\tfrac{15\pi}{2}.
> $$

%%

### Problem 3.2
**PRACTICE 2 – Sector of a Disk (Evaluate)**

Find the area and then the centroid $(\bar r,\bar\theta)$ of the **sector** of radius 3 bounded by $0\le\theta\le\frac{\pi}{3}$.

*(Hint: for the centroid, compute $\bar r=\dfrac{1}{A}\iint r\,dA$ and $\bar\theta=\frac{\theta_{1}+\theta_{2}}{2}$.)*

<div style="page-break-after: always;"></div>

%%

> [!Success] Problem 3.2 Solution
> 
> **Area.**
> $$
> A=\int_{0}^{\pi/3}\int_{0}^{3} r\,dr\,d\theta
> $$
> $$
> =\int_{0}^{\pi/3}\tfrac{9}{2}\,d\theta
> $$
> $$
> =\tfrac{3\pi}{2}.
> $$
> 
> **Centroid radius.**
> $$
> \bar r=\frac{1}{A}\int_{0}^{\pi/3}\int_{0}^{3} r\,(r\,dr\,d\theta)
> $$
> $$
> =\frac{1}{A}\int_{0}^{\pi/3}\int_{0}^{3} r^{2}\,dr\,d\theta
> $$
> $$
> =\frac{1}{A}\int_{0}^{\pi/3}9\,d\theta
> $$
> $$
> =\frac{9(\pi/3)}{A}=\frac{3\pi}{A}.
> $$
> Substitute $A=\tfrac{3\pi}{2}$ → $\bar r=2$.  
> Angular centroid $\bar\theta=\frac{\pi}{6}$.  
> Hence $(\bar r,\bar\theta)=(2,\pi/6)$.

%%

### Problem 3.3 (Heat Distribution Problem)
Temperature on a circular plate of radius 4 is $T(r,\theta)=100-5r^{2}$ (°C).  
Find the **average temperature** over the plate.

$$
T_{\text{avg}}=\frac{1}{A}\iint_{R}T(r,\theta)\,dA.
$$

<div style="page-break-after: always;"></div>

%%

> [!Success] Problem 3.3 Solution
> 
> Region: $0\le r\le4$, $0\le\theta\le2\pi$.  
> $dA=r\,dr\,d\theta$, $A=\pi(4)^{2}=16\pi$.
> Compute numerator:
> $$
> \int_{0}^{2\pi}\int_{0}^{4}(100-5r^{2})\,r\,dr\,d\theta
> $$
> $$
> =2\pi\int_{0}^{4}(100r-5r^{3})\,dr
> $$
> $$
> =2\pi\left[50r^{2}-\tfrac{5}{4}r^{4}\right]_{0}^{4}
> $$
> $$
> =2\pi(800-320)=960\pi.
> $$
> Average:
> $$
> T_{\text{avg}}=\frac{960\pi}{16\pi}=60^\circ\text{C}.
> $$

%%