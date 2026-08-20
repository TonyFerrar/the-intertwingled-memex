# Calc 3 Session 8 

## Fine Tuning System Responses
Partial Derivatives 


> [!info] Printable PDF
> [[08 - Partial Derivatives Learning Activity.pdf]]


## 📋 Skill Roadmap for Today
- [ ] Skill 1: [[Compute partial derivatives (2 or 3 variables)]]
- [ ] Skill 2: [[Evaluate and interpret partial derivatives at points]]
- [ ] Skill 3: [[Interpret partial derivatives visually]]

## Essential notes & formulas
*This space is for you to use.*

<div style="page-break-after: always;"></div>


---
## Skill 1: Compute partial Derivatives (2 or 3 variables)

> [!info] Partial Derivatives Essential Formulas
> - Definition:  
> - $\displaystyle f_x(x,y)=\lim_{h\to 0}\frac{f(x+h,y)-f(x,y)}{h}$  
> - $\displaystyle f_y(x,y)=\lim_{h\to 0}\frac{f(x,y+h)-f(x,y)}{h}$
> - Linearity:  
> - $\displaystyle \frac{\partial}{\partial x}(af+bg)=a f_x+b g_x$
> - Product Rule:  
> - $\displaystyle \frac{\partial}{\partial x}(uv)=u_x v+u v_x$
> - Quotient Rule:  
> - $\displaystyle \frac{\partial}{\partial x}\left(\frac{u}{v}\right)=\frac{u_x v - u v_x}{v^2}$
> - Chain Rule (single inside function):  
> - $\displaystyle \frac{\partial}{\partial x} f(g(x,y)) = f'(g(x,y))\cdot g_x$
> - Common Derivatives (applied to $x$ or $y$ if that’s the variable of differentiation):  
> - $\dfrac{d}{dx}(x^n)=n x^{n-1}$  
> - $\dfrac{d}{dx}(\sin x)=\cos x$  
> - $\dfrac{d}{dx}(\cos x)=-\sin x$  
> - $\dfrac{d}{dx}(e^x)=e^x$  
> - $\dfrac{d}{dx}(\ln x)=\tfrac{1}{x}$  
> - $\dfrac{d}{dx}(\arctan x)=\tfrac{1}{1+x^2}$  

### Skill 1 Demo:

Compute $\frac{\partial f}{\partial x}$ and $\frac{\partial f}{\partial y}$ for  

$$f(x,y) = \frac{x^2 y + \sin(xy)}{y^2+1}$$

%%
> [!Success]- Problem S1.1 Solution
> Insert Solutions Here
> **(a) $\partial f/\partial x$**
> - Treat $y$ as constant. Then $y^2+1$ is a constant with respect to $x$.
> - Differentiate the numerator only:
> - $\dfrac{\partial}{\partial x}(x^2 y)=2xy$
> - $\dfrac{\partial}{\partial x}\big(\sin(xy)\big)=\cos(xy)\cdot y$
> - Thus
> - $$\boxed{\,f_x(x,y)=\frac{2xy+y\cos(xy)}{\,y^2+1\,}=\frac{y\big(2x+\cos(xy)\big)}{\,y^2+1\,}.}$$
> - **(b) $\partial f/\partial y$**
> - Now both numerator and denominator depend on $y$ $\Rightarrow$ use the quotient rule.
> - Let $N(x,y)=x^2y+\sin(xy)$ and $D(y)=y^2+1$.
> - $N_y=x^2+\cos(xy)\cdot x=x^2+x\cos(xy)$
> - $D_y=2y$
> - Quotient rule:
> - $$f_y=\frac{N_y D - N D_y}{D^2}=\frac{\big(x^2+x\cos(xy)\big)(y^2+1)-\big(x^2y+\sin(xy)\big)\,2y}{(y^2+1)^2}.$$
> - So
> - $$\boxed{\,f_y(x,y)=\frac{\big(x^2+x\cos(xy)\big)(y^2+1)-2y\big(x^2y+\sin(xy)\big)}{(y^2+1)^2}.}$$

%%

<div style="page-break-after: always;"></div>

---
### Problem S1.1

Compute $\frac{\partial f}{\partial x}$ and $\frac{\partial f}{\partial y}$ for  

$$f(x,y) = \sqrt{x^2 + y^2}$$  

%%
> [!Success]- Problem S1.1 Solution
> Insert Solutions Here
> $f(x,y)=\sqrt{x^2+y^2}=(x^2+y^2)^{1/2}$
> - $f_x=\dfrac{1}{2}(x^2+y^2)^{-1/2}\cdot 2x=\dfrac{x}{\sqrt{x^2+y^2}}$
> - $f_y=\dfrac{1}{2}(x^2+y^2)^{-1/2}\cdot 2y=\dfrac{y}{\sqrt{x^2+y^2}}$
> - Domain note: at $(0,0)$, the formulae are undefined; $f$ is not differentiable there.

%%

<div style="page-break-after: always;"></div>

---
### Problem S1.2

Compute $\frac{\partial f}{\partial x}$ and $\frac{\partial f}{\partial y}$ for  

$$f(x,y) = e^{xy}$$

%%
> [!Success]- Problem S1.2 Solution
> Insert Solutions Here
> $f(x,y)=e^{xy}$
> - $f_x = y\,e^{xy}$
> - $f_y = x\,e^{xy}$

%%

<div style="page-break-after: always;"></div>

---
### Problem S1.3

Compute $\frac{\partial f}{\partial x}$ and $\frac{\partial f}{\partial y}$ for  

 $$f(x,y,z) = \ln(x^2 + y^2 + z^2)$$

%%
> [!Success]- Problem S1.3 Solution
> Insert Solutions Here
> $f(x,y,z)=\ln(x^2+y^2+z^2)$ (assume $(x,y,z)\neq(0,0,0)$)
> Let $r^2=x^2+y^2+z^2$.
> - $f_x=\dfrac{1}{r^2}\cdot 2x=\dfrac{2x}{x^2+y^2+z^2}$
> - $f_y=\dfrac{2y}{x^2+y^2+z^2}$
> - $f_z=\dfrac{2z}{x^2+y^2+z^2}$


%%

<div style="page-break-after: always;"></div>

---
## Skill 2: Evaluate and interpret partial derivatives at points

> [!info] Evaluating and Interpreting Partial Derivatives
> 
> - General derivatives (compute first):  
> - $\displaystyle f_x=\frac{\partial f}{\partial x}, \quad f_y=\frac{\partial f}{\partial y}, \quad f_z=\frac{\partial f}{\partial z}$
> - Evaluation:  
> - $\displaystyle f_x(x_0,y_0)=\Big(\frac{\partial f}{\partial x}\Big)\bigg|_{(x_0,y_0)}$
> - Tangent plane traces:  
> - In the $x$-direction (hold $y=y_0$): slope = $f_x(x_0,y_0)$  
> - In the $y$-direction (hold $x=x_0$): slope = $f_y(x_0,y_0)$

### Skill 2 Demo: 

For the given function, determine $\frac{\partial f}{\partial x}$ and $\frac{\partial f}{\partial y}$.

$$f(x,y) = x^2y - y^3$$

Evaluate and interpret these values in terms of the slope of the surface at $(1,2)$.

%%
> [!Success]- Problem S2.1 Solution
> Insert Solutions Here
> **Step 1: Compute general partials.**
> - $f_x=2xy$
> - $f_y=x^2-3y^2$
> - **Step 2: Evaluate at $(1,2)$.**
> - $f_x(1,2)=2\cdot 1\cdot 2=4$
> - $f_y(1,2)=1^2-3\cdot 2^2=1-12=-11$
> - **Step 3: Interpret.**
> - $f_x(1,2)=4$: If you move in the $+x$ direction from $(1,2)$ while holding $y=2$ fixed, the surface height $z=f(x,y)$ increases at about **4 units of $z$ per unit of $x$** locally. This is the slope of the $x$-trace at that point.
> - $f_y(1,2)=-11$: If you move in the $+y$ direction from $(1,2)$ while holding $x=1$ fixed, $z$ **decreases at about 11 units of $z$ per unit of $y$** locally. This is the slope of the $y$-trace at that point (negative means downhill in $+y$).

%%

<div style="page-break-after: always;"></div>

---
### Problem S2.1

For the given function, determine $\frac{\partial f}{\partial x}$ and $\frac{\partial f}{\partial y}$. Evaluate and interpret these values in terms of the slope of the surface at the specified point $(2,1)$.

$$f(x,y) = \frac{x}{y+1}$$ 
%%

> [!Success]- Problem S2.1 Solution
> Insert Solutions Here
> $f(x,y)=\dfrac{x}{y+1}$ at $(2,1)$
> $f_x=\dfrac{1}{y+1}\ \Rightarrow\ f_x(2,1)=\dfrac{1}{2}$
> $f_y=\dfrac{-x}{(y+1)^2}\ \Rightarrow\ f_y(2,1)=\dfrac{-2}{(2)^2}=-\dfrac{1}{2}$
> **Interpretation:** near $(2,1)$, increasing $x$ raises $f$ at about $+0.5$ per unit; increasing $y$ (holding $x$ fixed) lowers $f$ at about $-0.5$ per unit.

%%

<div style="page-break-after: always;"></div>

---
### Problem S2.2
For the given function, determine $\frac{\partial f}{\partial x}$ and $\frac{\partial f}{\partial y}$. Evaluate and interpret these values in terms of the slope of the surface at the specified point $(0,1)$.


$$f(x,y) = \arctan(xy)$$

%%
> [!Success]- Problem S2.2 Solution
> Insert Solutions Here
> $f(x,y)=\arctan(xy)$ at $(0,1)$
> Use $\dfrac{d}{du}\arctan u=\dfrac{1}{1+u^2}$ and $u=xy$.
> $f_x=\dfrac{1}{1+(xy)^2}\cdot y=\dfrac{y}{1+x^2y^2}\ \Rightarrow\ f_x(0,1)=1$
> $f_y=\dfrac{1}{1+(xy)^2}\cdot x=\dfrac{x}{1+x^2y^2}\ \Rightarrow\ f_y(0,1)=0$
> **Note:** the $y$-slope vanishes at $(0,1)$; moving in $+y$ initially doesn’t change $f$.

%%

<div style="page-break-after: always;"></div>


---
### Problem S2.3
For the given function, determine $\frac{\partial f}{\partial x}$ and $\frac{\partial f}{\partial y}$. Evaluate and interpret these values in terms of the slope of the surface at the specified point $(1, -1, 2)$.

$$f(x,y,z) = x^2 + y^2 - z^2$$

%%
> [!Success]- Problem S2.3 Solution
> Insert Solutions Here
> $f(x,y,z)=x^2+y^2-z^2$ at $(1,-1,2)$
> $f_x=2x\ \Rightarrow\ f_x(1,-1,2)=2$
> $f_y=2y\ \Rightarrow\ f_y(1,-1,2)=-2$
> $f_z=-2z\ \Rightarrow\ f_z(1,-1,2)=-4$
> **Interpretation:** increase in $x$ raises $f$; increase in $y$ lowers $f$ here; increase in $z$ lowers $f$ twice as strongly as unit $z$-change.

%%

<div style="page-break-after: always;"></div>

---
## Skill 3: Interpret partial derivatives visually

> [!info] Interpreting Partial Derivatives Graphically
> 
> 
> From slices:  
> - $\displaystyle f_x(x_0,y_0)$ = slope along $y=y_0$ (horizontal slice).  
> - $\displaystyle f_y(x_0,y_0)$ = slope along $x=x_0$ (vertical slice).  
> 
> From contours:  
> - Increasing contour values in the direction of motion → derivative $>0$  
> - Decreasing contour values → derivative $<0$  
> - Contour spacing $\propto$ slope magnitude

### Skill 3 Demo:

Given the contour plot of $f(x,y) = x^2 + 2y^2$, estimate:  

- $\frac{\partial f}{\partial x}(1,0)$  
- $\frac{\partial f}{\partial y}(1,0)$  

Explain how to interpret these using the contour plot.

%%
> [!Success]- Demo Problem Solution
> 
> **A. How to read partials from contours (general recipe).**
> $\dfrac{\partial f}{\partial x}(x_0,y_0)$: Move **horizontally** through $(x_0,y_0)$ (vary $x$, hold $y=y_0$).  
> If contours increase in label as you move right, $f_x>0$; if they decrease, $f_x<0$.
> The **closer** the contours, the **larger** the magnitude of the partial (steeper slope).
> $\dfrac{\partial f}{\partial y}(x_0,y_0)$: Move **vertically** through $(x_0,y_0)$ (vary $y$, hold $x=x_0$).  
> Same sign/density logic applies.
> **B. Apply to $f(x,y)=x^2+2y^2$ near $(1,0)$.**
> Along $y=0$, $f(x,0)=x^2$. As $x$ increases through $1$, $f$ increases $\Rightarrow f_x(1,0)>0$, and contours get farther apart as $x$ grows (moderate slope at $x=1$).
> Along $x=1$, $f(1,y)=1+2y^2$ is minimized at $y=0$ and increases symmetrically in $\pm y$; the slope at $y=0$ is $0$ $\Rightarrow f_y(1,0)=0$.
> **C. Verify analytically.**
> - $f_x=2x \;\Rightarrow\; f_x(1,0)=2$
> - $f_y=4y \;\Rightarrow\; f_y(1,0)=0$
> - **Conclusion.**
> - $$\boxed{\,\frac{\partial f}{\partial x}(1,0)=2,\qquad \frac{\partial f}{\partial y}(1,0)=0.\,}$$
> - *Teaching note:* Emphasize that the **sign** comes from which way contour labels change, and the **magnitude** comes from how tightly packed the contours are in that direction.

%%

<div style="page-break-after: always;"></div>

---
### Problem S3.1

Sketch contours for $f(x,y) = x^2 + y^2$ and estimate $\frac{\partial f}{\partial x}(2,0)$. 

%%
> [!Success]- Problem S3.1 Solution
> Insert Solutions Here
> Contours of $f(x,y)=x^2+y^2$; estimate $f_x(2,0)$
> From analytic derivatives: $f_x=2x$, $f_y=2y$.  
> So $f_x(2,0)=4$.
> **Contour reasoning:** at $(2,0)$, moving right crosses contours with increasing labels at a moderate/constant spacing → positive slope; magnitude matches $4$.

%%

<div style="page-break-after: always;"></div>

---
### Problem S3.2

Use the contour plot of $f(x,y)=\sqrt{x^2+y^2}$ to estimate $\frac{\partial f}{\partial y}(1,1)$.  

%%
> [!Success]- Problem S3.3 Solution
> Insert Solutions Here
> Contour plot of $f(x,y)=\sqrt{x^2+y^2}$; estimate $f_y(1,1)$
> Analytically, with $r=\sqrt{x^2+y^2}$:
> $f_x=\dfrac{x}{r}$, $f_y=\dfrac{y}{r}$.
> Thus $f_y(1,1)=\dfrac{1}{\sqrt{1^2+1^2}}=\dfrac{1}{\sqrt{2}}\approx 0.7071$.
> **Contour reasoning:** circles centered at the origin; moving upward from $(1,1)$ increases radius/label; spacing near $(1,1)$ indicates a moderate positive slope.

%%

<div style="page-break-after: always;"></div>

---
### Problem S3.3

Conceptual: If contours are horizontal lines, what can you say about $\frac{\partial f}{\partial y}$?  

%%
> [!Success]- Problem S3.3 Solution
> Insert Solutions Here
> Conceptual: If contours are horizontal lines, what about $\dfrac{\partial f}{\partial y}$?
> Horizontal contours mean each contour has equation $y=\text{constant}$ → $f$ depends **only on $y$** (not on $x$).
> Therefore $\displaystyle f_x=0$ everywhere.
>  $\displaystyle f_y$ is **not** necessarily zero; its **sign** depends on whether labels increase upward or downward, and its **magnitude** relates to contour spacing (tighter spacing ⇒ larger $|f_y|$).

%%
