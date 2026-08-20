
# Calc 3 Session 7

## Engineering with Many Inputs
Multivariable Functions

> [!info] Printable PDF
> [[07 - Multivariable Functions Learning Activity.pdf]]


## 📋 Skill Roadmap for Today
- [ ] Skill 1: [[Domain and Range of Functions of 2 Variables]] 
- [ ] Skill 2: [[Domain and Range of Functions of 3 Variables]]
- [ ] Skill 3: [[Level Sets and Traces]]

## Essential notes & formulas
*This space is for you to use.*

<div style="page-break-after: always;"></div>


---
## Skill 1: Domain and Range of Functions of 2 Variables

> [!info] Domain and Range Essential Formulas
> **Polynomial Functions:**
> - **Domain:** all $(x,y) \in \mathbb{R}^2$
> - **Range:** unbounded above/below (depends on powers).
> - Example: $f(x,y) = x^2 + y^2$ → Range $[0,\infty)$
> ___
> **Rational Functions:**
> - **Domain:** denominator $\neq 0$  
> - Example: $g(x,y) = \dfrac{1}{x^2 - y^2}$ → exclude $y=\pm x$  
> - **Range:** gaps/asymptotes possible.  
> - Example: $\dfrac{1}{x^2+y^2+1}$ → Range $(0,1]$  
> ___
> **Radical Functions:**
> - **Domain:** radicand $\geq 0$  
> - Example: $f(x,y) = \sqrt{9 - x^2 - y^2}$ → disk $x^2+y^2 \leq 9$ 
> - **Range:** outputs $\geq 0$  
> - Example: $\sqrt{x^2+y^2}$ → Range $[0,\infty)$  
> ___
>  **Trigonometric Functions:**
>  - **Domain:** exclude denominator restrictions (e.g. $\tan$)  
>  - Example: $\tan(x+y)$ → $x+y \neq \tfrac{\pi}{2}+n\pi$  
>  - **Range:** same periodic ranges as in one variable  
>  - Example: $\sin(x-y)$ → Range $[-1,1]$
>  (continued on next page)

<div style="page-break-after: always;"></div>

> [!info] Domain and Range Essential Formulas (continued)
>  **Inverse Trig Functions:**
>  - **Domain:** based on input restrictions  
>  - Example: $\arctan(xy)$ → all real $(x,y)$  
>  - **Range:** same as one variable restrictions  
>  - Example: $\arctan(xy)$ → $(-\tfrac{\pi}{2},\tfrac{\pi}{2})$  
>  ___
>  **Logarithmic Functions:**
>  - **Domain:** argument $>0$   
>  - Example: $\ln(xy)$ → quadrants I & III ($xy>0$) 
>  - **Range:** unbounded, approaches $-\infty$ near domain boundary  
>  - Example: $\ln(x^2+y^2)$ → Range $(-\infty,\infty)$  
>  

### Skill 1 Demo:

Given the functions below:
$$f(x,y)=\sqrt{9 - x^2 - y^2}$$
$$g(x,y) = \dfrac{1}{x^2 - y^2}$$
$$h(x,y) = \tan(x+y)$$
$$k(x,y) = \ln(xy)$$
- Find the domain and range of each function
- Graph each of these functions in desmos
%%
> [!Success]- Demo Problem S1.1 Solution
> **Step 1: Radical Function:**
> **$$f(x,y) = \sqrt{9 - x^2 - y^2}$$**
> - **Domain:** $x^2+y^2 \leq 9$ (disk of radius 3 in the $xy$-plane).  
> - **Range:** $[0,3]$, since the largest value occurs at the center $(0,0)$ and the smallest is $0$ along the boundary circle.
> - **Graph:** Surface is the _upper hemisphere_ of a sphere of radius 3.
> ___ 
> **Step 2: Rational Function:**
> **$$g(x,y) = \dfrac{1}{x^2 - y^2}$$**
> - **Domain:** all $(x,y)$ except $y = x$ and $y = -x$.
> - **Range:** all real numbers except $0$ (by letting $x^2-y^2$ get arbitrarily large or small).
> - **Graph:** Surface has _saddle-like behavior_ with asymptotes along the lines $y=\pm x$.
> ___
> **Step 3: Trigonometric Function:**
> $$h(x,y) = \tan(x+y)$$
> - **Domain:** all $(x,y)$ such that $x+y \neq \tfrac{\pi}{2} + n\pi,; n\in\mathbb{Z}$. These are infinite diagonal lines in the $xy$-plane.
> - **Range:** $(-\infty,\infty)$, just like single-variable tangent.
> - **Graph:** Surface is a “striped” pattern that repeats in diagonal directions, with vertical asymptote walls.
> ___
> **Step 4: Logarithmic Function:**
> $$k(x,y) = \ln(xy)$$
> - **Domain:** quadrants I and III (where $xy > 0$).
> - **Range:** $(-\infty,\infty)$, since $xy$ can be arbitrarily small positive or arbitrarily large.
> - **Graph:** Surface increases slowly as $xy$ grows, drops steeply toward $-\infty$ as $xy \to 0^+$.

%%
<div style="page-break-after: always;"></div>

---
### Problem S1.1:

Given the functions below:
$$f(x,y) = \sqrt{16 - x^2 - y^2}$$
$$g(x,y) = \dfrac{1}{x^2 + y^2 - 4}$$
$$h(x,y) = \tan(x-y)$$
$$k(x,y) = \ln(x^2 - y^2)$$
- Find the domain and range of each function
- Graph each function in desmos
- Find $f(2,2),\;g(1,1),\;h(\frac{\pi}{4},0),$ and $k(3,1)$
%%
> [!Success]- Problem S1.2 Solution
> **Step 1: Radical Function:**
> $$f(x,y) = \sqrt{16 - x^2 - y^2}$$
> - **Domain:**  $16 - x^2 - y^2 \ge 0 \;\Rightarrow\; x^2 + y^2 \le 16$  (disk of radius 4).
> - **Range:**  $[0,4]$ (max at $(0,0)$; $f=0$ on boundary circle $x^2+y^2=16$).
> - **Graph (surface & contours):** Upper spherical cap (hemisphere of radius 4).  
> - **Evaluate:**  $f(2,2)=\sqrt{16-8}=2\sqrt{2}$.
> ___
> **Step 2: Rational Function:**
> $$g(x,y) = \dfrac{1}{x^2 + y^2 - 4}$$
> - **Domain:**  Denominator $\ne 0 \;\Rightarrow\; x^2 + y^2 \ne 4$ (exclude the circle of radius 2).
> - **Range:**  $(-\infty,\,-\tfrac{1}{4}] \;\cup\; (0,\infty)$  (At $(0,0)$, $g=-\tfrac{1}{4}$. As $x^2+y^2\to 4^\pm$, $g\to \pm\infty$. No values in $(-\tfrac{1}{4},0)$.)
> - **Graph (surface & contours):** Saddle-like surface with a **cylindrical vertical asymptote** above/below the circle $x^2+y^2=4$.  
> - **Evaluate:**  $g(1,1)=\dfrac{1}{2-4}=-\tfrac{1}{2}$.
> ___
> **Step 3: Trigonometric Function:**
> $$h(x,y) = \tan(x-y)$$
> - **Domain:**  $x - y \ne \tfrac{\pi}{2} + n\pi,\; n\in\mathbb{Z}$ (exclude diagonal lines in the $xy$-plane).
> - **Range:**  $(-\infty,\infty)$.
> - **Graph (surface & contours):** Repeating “striped” surface with **vertical asymptote walls** along $x-y=\tfrac{\pi}{2}+n\pi$.  
> - **Evaluate:**  $h\!\left(\tfrac{\pi}{4},0\right)=\tan\!\left(\tfrac{\pi}{4}\right)=1$.
> ___
> **Step 4: Logarithmic Function:**
> $$k(x,y) = \ln(x^2 - y^2)$$
> - **Domain:**  $x^2 - y^2 > 0 \;\Rightarrow\; |x| > |y|$ (two wedge regions opening along the $\pm x$-axis).
> - **Range:**  $(-\infty,\infty)$ (argument can be any positive real; approaches $-\infty$ as $x^2 - y^2 \to 0^+$).
> - **Graph (surface & contours):** Rises slowly for large $|x|$ with **deep valleys** approaching the boundary $x^2=y^2$.  
> - **Evaluate:**  $k(3,1)=\ln(9-1)=\ln 8$.

%%
<div style="page-break-after: always;"></div>

---
## Skill 2: Domain and Range of 3 Variables
The same restrictions apply here as they do for functions of 3 variables. The only difference is that we must consider all 3 independent variables, $x$, $y$, and $z$.

### Skill 2 Demo:

Given the Functions:
$$f(x,y,z) = x^2 + y^2 + z^2$$
$$g(x,y,z) = \dfrac{1}{x^2+y^2+z^2-1}$$
$$h(x,y,z) = \sqrt{9 - x^2 - y^2 - z^2}$$
$$k(x,y,z)=\sin(x+y+z)$$
$$m(x,y,z)=\ln(x+y+z)$$
- Find the domain and range of each function
- Evaluate $f(1,2,2),\;g(1,0,0),\;h(2,1,2),\;k(0,0,\frac{\pi}{2}),$ and $m(1,1,1)$
%%
> [!Success]- Demo Problem S2.1 Solution
> **Step 1: Polynomial Function:**
> **$$f(x,y,z) = x^2 + y^2 + z^2$$**
> - **Domain:** all $(x,y,z) \in \mathbb{R}^3$
> - **Range:** $[0,\infty)$
> - **Evaluate:** $f(1,2,2)=1+4+4=9$  
> ___ 
> **Step 2: Rational Function:**
> **$$g(x,y,z) = \dfrac{1}{x^2+y^2+z^2-1}$$**
> - **Domain:** all $(x,y,z)$ except $x^2+y^2+z^2=1$ (excluded sphere)
> - **Range:** $(-\infty,0) \cup (0,\infty)$
> - **Evaluate:** $g(1,0,0)=1/(1+0+0-1)=\text{undefined}$  
> ___
> **Step 3: Radical Function:**
> $$h(x,y,z) = \sqrt{9 - x^2 - y^2 - z^2}$$
> - **Domain:** $x^2+y^2+z^2 \leq 9$ (solid ball of radius 3)
> - **Range:** $[0,3]$
> - **Evaluate:** $h(2,1,2)=\sqrt{9-4-1-4}=0$  
> ___
> **Step 4: Trigonometric Function:**
> **$$k(x,y,z)=\sin(x+y+z)$$**
> - **Domain:** all $(x,y,z) \in \mathbb{R}^3$
> - **Range:** $[-1,1]$
> - **Evaluate:** $k(0,0,\pi/2)=\sin(\pi/2)=1$  
> ___
> **Step 5: Logarithmic Function:**
> $$m(x,y,z)=\ln(x+y+z)$$
> - **Domain:** $x+y+z > 0$ (half-space above the plane $x+y+z=0$
> - **Range:** $(-\infty,\infty)$
> - **Evaluate:** $m(1,1,1)=\ln(3)$  

%%
<div style="page-break-after: always;"></div>

---
### Problem S2.1:

Given the functions:
$$f(x,y,z) = x^2 + y^2 - z$$
$$g(x,y,z) = \dfrac{1}{x^2 + y^2 + z^2 - 9}$$
$$h(x,y,z) = \sqrt{25 - (x^2 + y^2 + z^2)}$$
$$k(x,y,z) = \cos(x - y + z)$$
$$m(x,y,z) = \ln(x + 2y + 3z)$$
- Find the domain and range of each function
- Evaluate $f(1,2,3),\;g(2,1,2),\;h(3,4,0),\;k(0,0,\pi),$ and $m(1,1,1)$
%%
> [!Success]- Problem S2.2 Solution
> **Step 1: Polynomial Function:**
> $$f(x,y,z) = x^2 + y^2 - z$$
> - **Domain:** all $(x,y,z)\in\mathbb{R}^3$.
> - **Range:** $(-\infty,\infty)$ (e.g., set $x=y=0$, choose $z=-c$ to get $f=c$).
> - **Evaluate:** $f(1,2,3)=1+4-3=2$.
> ___
> **Step 2: Rational Function:**
> $$g(x,y,z) = \dfrac{1}{x^2 + y^2 + z^2 - 9}$$
> - **Domain:** $x^2+y^2+z^2\ne 9$ (exclude the sphere of radius $3$).
> - **Range:** $(-\infty,-\tfrac{1}{9}] \;\cup\; (0,\infty)$ (denominator $\in(-9,0)\cup(0,\infty)$).
> - **Evaluate:** $g(2,1,2)$ undefined (denominator $=9-9=0$).
> ___
> **Step 3: Radical Function:**
> $$h(x,y,z) = \sqrt{25 - (x^2 + y^2 + z^2)}$$
> - **Domain:** $x^2+y^2+z^2\le 25$ (solid ball of radius $5$).
> - **Range:** $[0,5]$ (max at origin; $0$ on boundary sphere).
> - **Evaluate:** $h(3,4,0)=\sqrt{25-25}=0$.
> ___
> **Step 4: Trigonometric Function:**
> $$k(x,y,z) = \cos(x - y + z)$$
> - **Domain:** all $\mathbb{R}^3$.
> - **Range:** $[-1,1]$.
> - **Evaluate:** $k(0,0,\pi)=\cos(\pi)=-1$.
> ___
> **Step 5: Logarithmic Function:**
> - **Domain:** $x+2y+3z>0$ (open half-space)
> - **Range:** $(-\infty,\infty)$ (argument can be any positive real)
> - **Evaluate:** $m(1,1,1)=\ln(1+2+3)=\ln 6$

%%
<div style="page-break-after: always;"></div>

---
## Skill 3 Level Sets and Traces

> [!info] Level Sets and Traces Essential Formulas
> **Level Curves:**
> $$f(x, y)=c$$
> - Fixed Output in 3 Dimensions
> - Produces a curve along the $xy$-plane representing all possible combination of $x$ and $y$ values that can produce your fixed output for the given function.
> ___
> **Level Surfaces:**
> $$f(x, y, z)=c$$
> - Fixed Output in 4 Dimensions.
> - Produces a surface within the $xyz$-space representing all possible combinations of $x, y,$ and $z$ values that can produce your fixed output for the given function.
> ___
> **Vertical Traces:**
> $$f(c, y)=z\quad\text{or}\quad f(x,c)=z$$
> - Fixed Input in 3 Dimensions.
> - Creates a curve within either the $yz$ or $xz$ planes that describes all corresponding values that can conform to the selected input values.
> ___
> **Cross-Sections:**
> $$f(c, y, z)=w$$
> - Fixed Input in 4 Dimensions.
> - Creates a surface that can describe all corresponding values that can conform to the selected input values.

<div style="page-break-after: always;"></div>


---
### Skill 3 Demo 1:

Let $f(x,y) = x^2 + y^2$.

1. Find and sketch the **level curves** $f(x,y)=c$ for $c=1,4,9$.
2. Find the **vertical traces** when $x=0$ and when $y=0$.
3. Use these slices to describe the shape of the graph $z=f(x,y)$.
%%
> [!Success]- Demo Problem S3.1 Solution
> **Step 1: Leveled Curves:**
> $x^2+y^2=c ;\Rightarrow;$ circles of radius $\sqrt{c}$ in the $xy$-plane.
> - $c=1$: circle radius 1
> - $c=4$: circle radius 2
> - $c=9$: circle radius 3  
>	These give a contour map of concentric circles.
>___
>**Step 2: Vertical Traces:**
>- Fix $x=0$: $z=y^2$ → parabola opening upward in the $yz$-plane.
>- Fix $y=0$: $z=x^2$ → parabola opening upward in the $xz$-plane.
>___
>**Step 3: Putting it all Together:**
>- The graph is a **paraboloid bowl** opening upward. The contour map shows **nested circles**; the traces show **parabolic cross-sections**.

%%
<div style="page-break-after: always;"></div>

---
### Skill 3 Demo 2:

Let $g(x,y,z) = x^2 + y^2 + z^2$.

1. Find and sketch the **level surfaces** $g(x,y,z)=c$ for $c=1,4,9$.
2. Find the **cross-section** when $z=0$.
3. Use these slices to describe the shape of the function.
%%
> [!Success]- Demo Problem 3.2 Solution
> **Step 1: Leveled Surfaces**
> $x^2+y^2+z^2=c ;\Rightarrow;$ spheres centered at the origin of radius $\sqrt{c}$.
> - $c=1$: sphere radius 1
> - $c=4$: sphere radius 2
> - $c=9$: sphere radius 3  
>	These give a family of **nested spheres**.
>___
>**Step 2: Cross-Section:**
>- Fix $z=0$: $g(x,y,0)=x^2+y^2$ → this is exactly the Demo 1 paraboloid surface.
>- Similarly, fixing $x=0$ or $y=0$ gives the same paraboloid shape in other coordinate planes.
>___
>**Step 3: Putting it all together:**
>The function $g$ measures the **square of the distance from the origin**.
>- Level surfaces = spheres of constant radius.
>- Cross-sections = circles or paraboloids in coordinate planes.  
>	This is a simple way to visualize how 3-variable functions extend beyond 2-variable graphs.

%%
<div style="page-break-after: always;"></div>

---
### Problem 3.1:

let $f(x,y)=x^2 - y^2$.

1. **Domain:** State the domain in the $xy$-plane.
2. **Level Curves:** Solve $f(x,y)=c$ and sketch several contours in the $xy$-plane for $c\in\{-4,-1,0,1,4\}$.
3. **Vertical Traces:** Sketch the traces for $x=0$ (in the $yz$-plane) and $y=0$ (in the $xz$-plane).
4. **Synthesis:** From your slices, describe the 3D surface $z=f(x,y)$ in words (name the shape and how it bends in $x$ vs $y$ directions).
%%
> [!Success]- Problem S3.1 Solution
> **Step 1: Domain**
> - No restrictions (polynomial).  
> - **Domain:** all $(x,y)\in\mathbb{R}^2$.
> ___
> **Step 2: Level Curves**
> Solve $x^2 - y^2 = c$.
> - **Case $c>0$**: Hyperbolas opening **left–right** (along the $x$-axis).  
> 	- Example: $c=1,4$ → branches symmetric about both axes. 
> 	- **Asymptotes:** $y=\pm x$.
> - **Case $c<0$**: Hyperbolas opening **up–down** (along the $y$-axis).  
> 	- Example: $c=-1,-4$.  
> 	- **Asymptotes:** $y=\pm x$ (same lines).
> - **Case $c=0$**: Degenerate hyperbola → the pair of lines $x^2=y^2 \Rightarrow y=\pm x$.
> ___
> **Step 3: Vertical Traces**
> - **$x=0$ (trace in the $yz$-plane):** $z=f(0,y)=-y^2$ → **downward** opening parabola.
> - **$y=0$ (trace in the $xz$-plane):** $z=f(x,0)=x^2$ → **upward** opening parabola.
> ___
> **Step 4: Synthesis**
> - The graph $z=x^2-y^2$ is a **hyperbolic paraboloid (saddle)**.  
> - **Why:** Parabolic cross-sections open in opposite directions along coordinate planes; level curves are hyperbolas with asymptotes $y=\pm x$.

%%
<div style="page-break-after: always;"></div>

___
### Problem 3.2:

let $g(x,y,z)=x^2 + y^2 - z$.

1. **Domain (in $\mathbb{R}^3$):** State the domain.
2. **Level Surfaces:** Solve $g(x,y,z)=c$ for $z$ and sketch representative level surfaces for $c\in\{-2,0,2\}$.
3. **Cross-Sections (Traces):**  
   - Fix $z=0$ and sketch $g(x,y,0)$ in the $xy$-plane.  
   - Fix $x=0$ and sketch the curve in the $yz$-plane.
1. **Synthesis:** Describe the geometry you see (family of surfaces, how they shift with $c$, and how the cross-sections relate to the level surfaces).
%%
> [!Success]- Problem S3.2 Solution
> **Step 1: Domain**
> - No restrictions (polynomial).  
> - **Domain:** all $(x,y,z)\in\mathbb{R}^3$.
> ___
> **Step 2: Level Surfaces**
> Solve $x^2 + y^2 - z = c \;\Rightarrow\; z = x^2 + y^2 - c$.
> - Each fixed $c$ gives an **upward-opening paraboloid** shifted **down** by $c$.
> - Representative values:  
> 	- $c=-2$: $z=x^2+y^2+2$ (paraboloid shifted up by $2$).  
> 	- $c=0$: $z=x^2+y^2$ (vertex at origin).  
> 	- $c=2$: $z=x^2+y^2-2$ (paraboloid shifted down by $2$).
> ___
> **Step 3: Cross-Sections**
> - **Intersect level surfaces with $z=0$ (the $xy$-plane):**  
> 	- Substitute $z=0$ into $g=c$: $x^2+y^2=c$.  
> 	- Circles of radius $\sqrt{c}$ if $c>0$; a **point** at $c=0$; **empty** if $c<0$.
> - **Intersect level surfaces with $x=0$ (the $yz$-plane):**  
> 	- Substitute $x=0$ into $z=x^2+y^2-c$: $z=y^2-c$.  
> 	- **Parabolas** opening upward in the $yz$-plane, vertically shifted by $-c$.  
> 	- For $c=-2$: $z=y^2+2$ (shifted up).  
> 	- For $c=0$: $z=y^2$ (vertex at origin).  
> 	- For $c=2$: $z=y^2-2$ (shifted down).
> ___
> **Step 4: Synthesis**
> - **Family:** Parallel paraboloids $z=x^2+y^2-c$; changing $c$ slides the surface along the $z$-axis.  
> - **Cross-section story:** Circles in $z=0$ for $c>0$ (shrinking to a point at $c=0$), none for $c<0$; parabolas in vertical planes with vertices moving with $c$.

%%