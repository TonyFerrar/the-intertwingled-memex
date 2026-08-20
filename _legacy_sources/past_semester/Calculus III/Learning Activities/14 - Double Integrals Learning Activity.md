
# Calc 3 Session 14

## Double Integrals
Finding What's Underneath

> [!info] Printable PDF
> [[14 - Double Integrals Learning Activity.pdf]]

## 📋 Skill Roadmap for Today
- [ ] [[Double Integrals over a Rectangular Region]]
- [ ] [[Double Integrals over a General Region]]
- [ ] [[Switching the Order of Integration]]

## Essential notes & formulas
*This space is for you to use.*

<div style="page-break-after: always;"></div>


---
## Skill 1: Double Integrals over a Rectangular Region

> [!info] Double Integrals Essential Formulas
> **Double Integral**
> $$\text{Volume}=\int_{c}^{d}\!\!\int_{a}^{b} f(x,y)\,dx\,dy=\int_{a}^{b}\!\!\int_{c}^{d} f(x,y)\,dy\,dx$$
> $$x\in[a,b],\quad y\in[c,d]$$
> ___
> **Average Value of $f(x,y)$**
> $$  f_{\text{avg}}=\frac{1}{\text{Area}(R)}\iint_R f\,dA $$
> 
### Skill 1 Demo:
Evaluate the double integral
$$
I = \iint_R x\sin(xy)\,dA,
$$
where $R=[0,1]\times[0,\pi]$.  
Compute it in two ways:
1. Integrate **with respect to $y$ first**,  
2. Integrate **with respect to $x$ first**.  
Compare the difficulty and results, and discuss why changing the order matters.

%%
> [!Success] Demo Problem Solution
> **Step 1: Establish Integral With Bounds**
> $$I = \int_{x=0}^{1}\int_{y=0}^{\pi} x\sin(xy)\,dy\,dx.$$
> ___
> **Step 2: Integrate With Respect to $y$ first**
> $$\int_{y=0}^{\pi} x\sin(xy)\,dy$$
> - Let $u=xy \Rightarrow du = x\,dy \Rightarrow dy = \frac{du}{x}u$
> - Then apply substitution and integrate
> $$\int x\sin(xy)\,dy = \int \sin(u)\,du = -\cos(u) + C = -\cos(xy).$$
> $$I = \int_{0}^{1}\!\!\big[-\cos(xy)\big]_{y=0}^{\pi}\,dx = \int_{0}^{1}\!\! \big(1 - \cos(\pi x)\big)\,dx.$$
> - Compute the rest
> $$\int_{0}^{1}\!\! \big(1 - \cos(\pi x)\big)\,dx
= \left[x - \frac{\sin(\pi x)}{\pi}\right]_{0}^{1}
= 1 - 0 = 1.$$
> Thus, when integrating $y$ first, $I=1$ with almost no algebra.
> ___
> **Step 3: Integrate with Respect to $x$ First**
> - We need $\displaystyle \int x\sin(xy)\,dx$ — this requires **integration by parts**
> - Let $u = x,\quad dv = \sin(xy)\,dx$
> - then $du = dx,\quad v = -\frac{\cos(xy)}{y}.$
> - Hence$$\int x\sin(xy)\,dx= -\frac{x\cos(xy)}{y} + \frac{1}{y}\int \cos(xy)\,dx.$$
> - The remaining integral gives$$\int \cos(xy)\,dx = \frac{\sin(xy)}{y}.$$
> - Combine:$$\int x\sin(xy)\,dx= -\frac{x\cos(xy)}{y} + \frac{\sin(xy)}{y^{2}} + C.$$
> - Evaluate from $x=0$ to $x=1$:$$\int_{0}^{1}x\sin(xy)\,dx= -\frac{\cos(y)}{y} + \frac{\sin(y)}{y^{2}}.$$
> - Now substitute back into the outer integral:$$I = \int_{0}^{\pi}\!\!\left(-\frac{\cos(y)}{y} + \frac{\sin(y)}{y^{2}}\right)dy.$$
> - This integral has no elementary antiderivative; it must be expressed in terms of **Si(y)** and **Ci(y)** special functions or evaluated numerically.  

%%
<div style="page-break-after: always;"></div>


---
### Problem 1.1:

Evaluate $\displaystyle \iint_{[0,2]\times[1,3]} (3x^2-2y)\,dA$ and find the average value.

%%
> [!Success] Problem S1.1 Solution
> **Step 1: Evaluating the Integral**
> $$\int_{y=1}^{3}\!\!\int_{x=0}^{2}(3x^2-2y)\,dx\,dy =\int_{1}^{3}\!\!(8-4y)\,dy =\left[8y-2y^2\right]_{1}^{3}=0.$$
> ___
> **Step 2: Finding the Average**
> - Find total Area
> $$\text{Area}=4$$
> - Find average value
> $$f_{ave}=\dfrac{1}{4}\cdot 0 = 0$$

%%
<div style="page-break-after: always;"></div>

---
### Problem 1.2:

Evaluate
$$
I=\iint_{[0,1]\times[0,2]} y\,e^{xy}\,dA.
$$
1. Compute by integrating **$y$ first**, then  
2. Re-evaluate by integrating **$x$ first**.  
Which order is simpler, and why?

%%

> [!Success] Problem S1.2 Solution
> **Step 1: Integrate $y$ First**
> $$I=\int_{x=0}^{1}\int_{y=0}^{2}y\,e^{xy}\,dy\,dx.$$
>- Integration by parts in $y$ ($u=y$, $dv=e^{xy}dy$):$$u=y,\quad du=dy,\quad v=\frac{e^{xy}}{x}.$$$$\int y\,e^{xy}\,dy=\frac{ye^{xy}}{x}-\int\frac{e^{xy}}{x}\,dy=\frac{ye^{xy}}{x}-\frac{e^{xy}}{x^2}+C.$$
>- Evaluate $y=0\to2$:
>$$\frac{2e^{2x}}{x}-\frac{e^{2x}}{x^2}-\Big(0-\frac{1}{x^2}\Big)=\frac{2e^{2x}}{x}-\frac{e^{2x}-1}{x^2}.$$
>- Then$$I=\int_{0}^{1}\!\!\left(\frac{2e^{2x}}{x}-\frac{e^{2x}-1}{x^2}\right)dx,$$
>- which is **messy** and not easily integrated in elementary form. 
>___
>**Step 2: Integrate $x$ First**
>$$I=\int_{y=0}^{2}\int_{x=0}^{1} y\,e^{xy}\,dx\,dy.$$
>- Treat $y$ as constant:$$\int e^{xy}\,dx=\frac{e^{xy}}{y}.$$
>- Hence
>$$I=\int_{0}^{2} y\left[\frac{e^{xy}}{y}\right]_{x=0}^{1}dy=\int_{0}^{2}(e^{y}-1)\,dy=\left[e^{y}-y\right]_{0}^{2}=e^{2}-3.$$

%%
<div style="page-break-after: always;"></div>



---
## Skill 2: Double Integrals over General Regions

> [!info] Double Integrals Over General Regions - Essential Formulas
>**Double Integrals over Type 1 Regions ($y(x)$):**
>$$  \iint_R f\,dA=\int_{a}^{b}\left(\int_{g_1(x)}^{g_2(x)} f(x,y)\,dy\right)\,dx$$
>$$y\in[g_1(x),\,g_2(x)],\quad x\in[a,\, b]$$
>___
>**Double Integrals over Type 2 Regions ($x(y)$):**
>$$  \iint_R f\,dA=\int_{c}^{d}\left(\int_{h_1(y)}^{h_2(y)} f(x,y)\,dx\right)\,dy$$
>$$x\in[h_1(y),\,h_2(y)],\quad y\in[c,\,d]$$
>

### Skill 2 Demo:
Let $R$ be bounded by $y=x^2$ and $y=2x$. Set up $\iint_R (x+y)\,dA$ as Type I (vertical slices) and evaluate.  

%%
> [!Success] Demo Problem Solution
>**Step 1: Establish Bounds**
>- Intersections: $x^2=2x \Rightarrow x=0,2$.
>$$\iint_R (x+y)\,dA=\int_{0}^{2}\int_{x^2}^{2x}(x+y)\,dy\,dx.$$
>**Step 2: Solve**
>- Inner integral first
>$$\int_{x^2}^{2x}(x+y)\,dy =\left[xy+\frac{y^2}{2}\right]_{x^2}^{2x} =4x^2-x^3-\frac{x^4}{2}.$$
>- Outside Integral second
>$$\int_{0}^{2}\left(4x^2-x^3-\frac{x^4}{2}\right)dx =\left[\frac{4x^3}{3}-\frac{x^4}{4}-\frac{x^5}{10}\right]_{0}^{2} =\frac{32}{3}-4-\frac{16}{5} =\frac{52}{15}.$$

%%
<div style="page-break-after: always;"></div> 

---
### Problem 2.1:
Let $R=\{(x,y): 0\le x\le 1,\ x^2\le y\le x\}$. Evaluate $\iint_R \sqrt{y}\,dA$ as a Type 1 region.  

%%
> [!Success] Problem 2.1 Solution
> $$\int_{0}^{1}\int_{x^2}^{x}\sqrt{y}\,dy\,dx=\int_{0}^{1}\left[\frac{2}{3}y^{3/2}\right]_{x^2}^{x}dx=\frac{2}{3}\int_{0}^{1}\left(x^{3/2}-x^3\right)dx=\frac{2}{3}\left(\frac{2}{5}-\frac{1}{4}\right)=\frac{1}{10}.$$

%%
<div style="page-break-after: always;"></div>

---
### Problem 2.2:
Let $R=\{(x,y): y\le x\le \sqrt{y},\ 0\le y\le 1\}$. Evaluate $\iint_R \sqrt{y}\,dA$ as a Type 1 region. 

%%

> [!Success] Problem S2.2 Solution
>$$\int_{0}^{1}\int_{y}^{\sqrt{y}}\sqrt{y}\,dx\,dy=\int_{0}^{1}\sqrt{y}\left(\sqrt{y}-y\right)dy=\int_{0}^{1}\left(y-y^{3/2}\right)dy =\left[\frac{y^2}{2}-\frac{2}{5}y^{5/2}\right]_{0}^{1} =\frac{1}{10}.$$

%%
<div style="page-break-after: always;"></div>



---
## Skill 3 Switching the Order of Integration

> [!warning] Important Notes for switching bounds
> When switching the order of integration over a general region, the region **switches** from a type 1 to a type 2 region (or vice versa). This means that when switching the order of integration, you must convert the bounds from $y(x)$ to $x(y)$ (i.e. **inverting the functions** within your bounds)
> 
> As was mentioned in [[Double Integrals over a General Region]], you **always** integrate the bounds defined by a function ($y(x)$ or $x(y)$) first, **then** move to constants.

### Skill 3 Demo:
Let $R$ be the triangle with vertices $(0,0)$, $(3,0)$, $(3,2)$.  
1.  Write $\iint_R (2x+3y)\,dA$ as Type I and evaluate.  
2.  Switch the order and evaluate again.

%%
> [!Success] Demo Problem Solution
> **Step 1: Establish Region**
> - Region is triangular with edges along $x=3$, $y=0$, and $y=\tfrac{2}{3}x$.
> ___
> **Step 2: Integrate as a type 1 region**
> - Bounds are $x\in[0,3]$, $y\in[0,\tfrac{2}{3}x]$
> - Integrate
> $$\int_{0}^{3}\int_{0}^{(2/3)x}(2x+3y)\,dy\,dx =\int_{0}^{3}\left[(2x)y+\frac{3y^2}{2}\right]_{0}^{(2/3)x}dx =\int_{0}^{3}2x^2\,dx =\left[\frac{2x^3}{3}\right]_{0}^{3}=18.$$
> ___
> **Step 3: Integrate as a type 2 region**
> - Bounds are $y\in[0,2]$, $x\in[\tfrac{3}{2}y,3]$
> - Integrate
> $$\int_{0}^{2}\int_{(3/2)y}^{3}(2x+3y)\,dx\,dy =\int_{0}^{2}\left[x^2+3yx\right]_{(3/2)y}^{3}dy =\int_{0}^{2}\left(9+9y-\frac{27y^2}{4}\right)dy =18.$$

%%
<div style="page-break-after: always;"></div>



---
### Problem 3.1:
Let $R$ be bounded by $y=x^3$, $y = 4$, and the vertical lines $x=-2$ and $x=2$
1. Convert bounds to a type 2 region
2. evaluate the integral

%%
> [!Success] Problem S3.2 Solution
> ### 1. Visualizing the Region $R$
> The region $R$ is bounded by:
> - **Top/Bottom boundaries:** $y = x^3$ and the horizontal line $y = 4$.
> - **Side boundaries:** The vertical lines $x = -2$ and $x = 2$.
>  
> To find where these curves intersect, we set $x^3 = 4$, which gives $x = \sqrt[3]{4} \approx 1.587$.
> - Between $x = -2$ and $x = \sqrt[3]{4}$, the line $y = 4$ is **above** the curve $y = x^3$.
> - Between $x = \sqrt[3]{4}$ and $x = 2$, the curve $y = x^3$ is **above** the line $y = 4$.
> 
> ### 2. Part 1: Convert Bounds to a Type 2 Region
> A **Type 2 region** is described by horizontal strips, where $y$ is bounded by constants ($c \le y \le d$) and $x$ is bounded by functions of $y$ ($g_1(y) \le x \le g_2(y)$).
> 
> Because the "left" and "right" boundaries change at the line $y = 4$, we must split the region into two sub-regions, $R_1$and $R_2$. First, we solve $y = x^3$ for $x$: $x = \sqrt[3]{y} = y^{1/3}$.
> 
> #### Region $R_1$ (Lower section)
> This section spans from the lowest point on the curve to the horizontal line $y = 4$.
> - **$y$-limits:** At $x = -2$, $y = (-2)^3 = -8$. So, $-8 \le y \le 4$.
> - **$x$-limits:** For any horizontal slice, the left boundary is the vertical line $x = -2$ and the right boundary is the curve $x = y^{1/3}$.
> $$R_1 = \{ (x,y) \mid -8 \le y \le 4, \ -2 \le x \le y^{1/3} \}$$
> 
> #### Region $R_2$ (Upper section)
> This section spans from the horizontal line $y = 4$ to the highest point on the curve.
> - **$y$-limits:** At $x = 2$, $y = (2)^3 = 8$. So, $4 \le y \le 8$.
> - **$x$-limits:** For any horizontal slice, the left boundary is the curve $x = y^{1/3}$ and the right boundary is the vertical line $x = 2$.
> $$R_2 = \{ (x,y) \mid 4 \le y \le 8, \ y^{1/3} \le x \le 2 \}$$
> 
> ### 3. Part 2: Evaluate the Integral
> The total area (or the integral of $f(x,y)=1$ over the region) is the sum of the integrals over $R_1$ and $R_2$:
> $$\text{Area} = \int_{-8}^{4} \int_{-2}^{y^{1/3}} dx \, dy + \int_{4}^{8} \int_{y^{1/3}}^{2} dx \, dy$$
> 
> #### Step 2a: Evaluate the first integral ($R_1$)
> $$\int_{-8}^{4} [x]_{-2}^{y^{1/3}} dy = \int_{-8}^{4} (y^{1/3} + 2) dy$$
> $$= \left[ \frac{3}{4}y^{4/3} + 2y \right]_{-8}^{4}$$
> $$= \left( \frac{3}{4}(4)^{4/3} + 8 \right) - \left( \frac{3}{4}(-8)^{4/3} + 2(-8) \right)$$
> $$= (3\sqrt[3]{4} + 8) - (12 - 16) = 3\sqrt[3]{4} + 12$$
> 
> #### Step 2b: Evaluate the second integral ($R_2$)
> $$\int_{4}^{8} [x]_{y^{1/3}}^{2} dy = \int_{4}^{8} (2 - y^{1/3}) dy$$
> $$= \left[ 2y - \frac{3}{4}y^{4/3} \right]_{4}^{8}$$
> $$= \left( 16 - \frac{3}{4}(16) \right) - \left( 8 - 3\sqrt[3]{4} \right)$$
> $$= (16 - 12) - 8 + 3\sqrt[3]{4} = 3\sqrt[3]{4} - 4$$
> 
> #### Step 2c: Total Value
> $$\text{Total} = (3\sqrt[3]{4} + 12) + (3\sqrt[3]{4} - 4)$$
> $$\text{Total} = 6\sqrt[3]{4} + 8 \approx 17.52$$


%%
<div style="page-break-after: always;"></div>



---
### Problem 3.2:

An LED panel’s local irradiance is $E(x,y)=E_0(1-0.2x)$ on the wedge $R$ bounded by $y=0$, $y=x$, $x=2$ (units: $x,y$ in m).  
- (a) Compute $\iint_R E\,dA$. 
- (b) Find the average irradiance on $R$ in terms of $E_0$.

%%
> [!Success] Problem S3.2 Solution
> Region: $x\in[0,2]$, $y\in[0,x]$.
> $$ \iint_R E\,dA=\int_{0}^{2}\int_{0}^{x}E_0(1-0.2x)\,dy\,dx=\int_{0}^{2}E_0(1-0.2x)\,x\,dx=E_0\int_{0}^{2}\left(x-0.2x^2\right)dx.$$
> Compute:
> $$E_0\left[\frac{x^2}{2}-\frac{0.2x^3}{3}\right]_{0}^{2}=E_0\left(2-\frac{1.6}{3}\right)=E_0\cdot\frac{4.4}{3}.$$ $\text{Area}(R)=\tfrac12(2)(2)=2$. 
> Hence
> $$E_{\text{avg}}=\frac{E_0(4.4/3)}{2}=\frac{2.2}{3}E_0.$$
> 

%%





