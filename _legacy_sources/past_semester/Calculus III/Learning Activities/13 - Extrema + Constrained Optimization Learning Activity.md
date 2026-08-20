# Calc 3 Session 13 

## Solving Design Problems
Optimization With Constraints 


> [!info] Printable PDF
> [[13 - Extrema + Constrained Optimization Learning Activity.pdf]]

## 📋 Skill Roadmap for Today
- [ ] [[Finding Extrema for Multivariable Functions]]
- [ ] [[Optimization with Lagrange Multipliers]]

## Essential notes & formulas
*This space is for you to use.*

<div style="page-break-after: always;"></div>


---
## Skill 1: Finding Extrema for Multivariable Functions

> [!info] Essential Formulas
> 
> Critical points occur where all first partial derivatives vanish or are undefined. The **second-derivative test** (via the discriminant) classifies the point.
> 
> **Step 1: Calculate the Discriminant:**
> $$D = f_{xx}f_{yy} - (f_{xy})^2$$
> 
> **Step 2: Evaluate $D$ and classify:**
> 
> - $D > 0$, $f_{xx} > 0$ → local min
> - $D > 0$, $f_{xx} < 0$ → local max
> - $D < 0$ → saddle point
> - $D = 0$ → inconclusive

### Skill 1 Demo:
Find and classify the critical points of  
$$
f(x,y) = x^3 - 3x + y^2
$$
<div style="page-break-after: always;"></div>

%%
> [!Success]- Skill 1 Demo Solution
> Insert Solutions Here
> Compute partials:  $f_x = 3x^2 - 3$, $f_y = 2y$
> Set = 0:  
> $3x^2 - 3 = 0 \Rightarrow x = \pm 1$, $2y=0 \Rightarrow y=0$
> Critical points: $(1,0)$ and $(-1,0)$
> Second derivatives:  
> $f_{xx}=6x$, $f_{yy}=2$, $f_{xy}=0$
> Compute $D=f_{xx}f_{yy}-(f_{xy})^2$: 
>  At $(1,0)$: $D=6(1)\cdot2=12>0$, $f_{xx}=6>0$ → **local min**  
>  At $(-1,0)$: $D=6(-1)\cdot2=-12<0$ → **saddle point**

%%
### Problem 1.1
Find the absolute maximum and minimum values of  
$$
f(x,y) = x^2 + y^2 - 2x - 4y + 5
$$
on the closed square $0 \le x \le 4$, $0 \le y \le 4$.

<div style="page-break-after: always;"></div>

%%
> [!Success]- Problem S1.1 Solution
> Insert Solutions Here
> Interior critical points:  
> $f_x = 2x - 2$, $f_y = 2y - 4$ → $(1,2)$
> Evaluate interior: $f(1,2)=1+4-2-8+5=0$
> Boundaries:  
>  - $x=0$: $f= y^2 - 4y +5$ → min at $y=2$ → $f=1$ 
>  - $x=4$: $f=16 + y^2 - 8 - 4y +5 = y^2 - 4y +13$ → min at $y=2$, $f=9$  
>  - $y=0$: $f=x^2 - 2x +5$ → min at $x=1$, $f=4$  
>  - $y=4$: $f=x^2 - 2x +5$, min $x=1$, $f=4$.
>   Compare values:  
>   Interior 0 (min), largest on corners $(4,0)$ or $(4,4)$ → $f=13$ (max).
>   **Answer:** Min $f=0$ at $(1,2)$; Max $f=13$ at $(4,0)$ and $(4,4)$.

%%

### Problem 1.2
Determine and classify critical points of  
$$
f(x,y) = y^3 - 3xy + 12x.
$$

<div style="page-break-after: always;"></div>

%%
> [!Success]- Problem S1.2 Solution
> Insert Solutions Here
> $f_x = -3y + 12$, $f_y = 3y^2 - 3x$  
> Set = 0 → $y=4$, $x=y^2=16$ → $(16,4)$  
> Second partials: $f_{xx}=0$, $f_{yy}=6y=24$, $f_{xy}=-3$  
> $D = 0(24) - (-3)^2 = -9 < 0$ → **saddle point**.

%%

### Problem 1.3
Find absolute extrema of  
$$
f(x,y) = x^2 + y^2
$$
on the triangle with vertices $(0,0)$, $(4,0)$, $(0,3)$.

<div style="page-break-after: always;"></div>

%%
> [!Success]- Problem S1.3 Solution
> Insert Solutions Here
> - Interior: $f_x=2x$, $f_y=2y$ → $(0,0)$ → $f=0$  
> - Edges:  
> - 1️⃣ $x=0$: $f=y^2$, min $0$, max $9$ at $y=3$  
> - 2️⃣ $y=0$: $f=x^2$, min $0$, max $16$ at $x=4$  
> - 3️⃣ Line $y=-\frac{3}{4}x+3$: $f=x^2+(\tfrac{-3}{4}x+3)^2 = \tfrac{25}{16}x^2- \tfrac{9}{2}x+9$.  
> Min at $x=\tfrac{9/2}{2(25/16)}=\tfrac{9/2}{25/8}=\tfrac{36}{50}=0.72$, $f≈7.4$, max at $x=4$, $f=16$.  
> **Absolute min = 0 at (0,0); max = 16 at (4,0).**

%%


## Skill 2: Constrained Optimization using Lagrange Multipliers 
> [!info] Essential Formulas
> 
> **Concept:**  
> When you must optimize $f(x, y, z)$ subject to $g(x, y, z)=k$, the gradients are parallel at an optimum:
> $$\nabla f = \lambda \nabla g$$
> 
> Here $\lambda$ (Lagrange multiplier) represents how the optimum value of $f$ changes per unit relaxation of the constraint $g$—a quantitative measure of trade-off.
> - $f$ is called the objective function
> - $g$ is called the constraint equation
> 
> **Process:**
> - Calculate the gradients $\nabla f$ and $\nabla g$. Note that both produce vectors, and so you should see $\hat{i}$, $\hat{j}$, and (for 3 variables) $\hat{k}$. 
> - Set up one equation per vector component:
> 	- $\hat{i}$: $\frac{\partial f}{\partial x} = \lambda \frac{\partial g}{\partial x}$
> 	- $\hat{j}$: $\frac{\partial f}{\partial y} = \lambda \frac{\partial g}{\partial y}$
> 	- $\hat{k}$: $\frac{\partial f}{\partial z} = \lambda \frac{\partial g}{\partial z}$
> - Solve these equations for $\lambda$ and use the results to eliminate $\lambda$
> - Substitute results into the constraint equation to solve for $x$, $y$, and $,z$

***Note: This Desmos 3D graph contains visualizations of all optimization exercises for this learning activity.***
<iframe src="https://www.desmos.com/3d/qyghs8nthv" width="100%" height="500px" frameborder="0"></iframe>

### Skill 2 Demo:
Find the maximum and minimum values of  
$$
f(x,y) = x^2 + y^2
$$
subject to $x + 2y = 6$

<div style="page-break-after: always;"></div>

%%
> [!Success]- Skill 2 Demo Solution
> Insert Solutions Here
> Define $g(x,y)=x+2y-6=0$.  
> $\nabla f = ⟨2x,2y⟩$, $\nabla g=⟨1,2⟩$  
> Set $\nabla f = λ\nabla g$: $2x = λ$, $2y = 2λ$ → $λ=2x$, $λ=y$ → $y=2x$.  
> Substitute into constraint: $x + 2(2x)=6$ → $x=1.2$, $y=2.4$.  
> Check endpoints (if any) not needed (line extends infinite).  
> $f(1.2, 2.4)=1.44+5.76=7.2$ → **Minimum** (smallest distance to origin).  
> No maximum since function grows without bound along constraint.

%%

### Problem 2.1
Minimize $f(x,y)=x^2+y^2$ subject to $4x+3y=12$.

<div style="page-break-after: always;"></div>

%%
> [!Success]- Problem S2.1 Solution
> Insert Solutions Here
> $\nabla f=⟨2x,2y⟩$, $\nabla g=⟨4,3⟩$  
> $2x=4λ$, $2y=3λ$ → $x=2λ$, $y=1.5λ$  
> Constraint: $4(2λ)+3(1.5λ)=12$ → $8λ+4.5λ=12$ → $λ=0.96$.  
> $(x,y)=(1.92,1.44)$ → $f=1.92^2+1.44^2=5.76$ (min distance ≈ √5.76 = 2.4).


%%

### Problem 2.2
Find max and min of  
$$
f(x,y)=xy
$$
subject to $x^2 + y^2 = 8$.

<div style="page-break-after: always;"></div>

%%
> [!Success]- Problem S2.2 Solution
> Insert Solutions Here
> $\nabla f=⟨y,x⟩$, $\nabla g=⟨2x,2y⟩$  
> $y=2λx$, $x=2λy$ → $y^2=x^2$ → $y=±x$.  
> Constraint: $x^2+y^2=8$.  
> If $y=x$: $2x^2=8$ → $x=±2$ → $f=4$ (max).  
> If $y=-x$: $2x^2=8$ → $x=±2$ → $f=-4$ (min).  
> **Max = 4 at (2,2),(–2,–2); Min = –4 at (2,–2),(–2,2).**

%%

### Problem 2.3
An environmental engineer designs a rectangular channel with cross-section area $A=xy=9 \text{m}^2$.  

Find dimensions $(x,y)$ that minimize the perimeter $P=2x+2y$.

<div style="page-break-after: always;"></div>

%%

> [!Success]- Problem S2.3 Solution
> Insert Solutions Here
> Objective $f(x,y)=2x+2y$, constraint $g(x,y)=xy-9=0$.  
> $\nabla f=⟨2,2⟩$, $\nabla g=⟨y,x⟩$ → $2=λy$, $2=λx$ → $x=y$.  
> Constraint: $x^2=9$ → $x=y=3$.  
> **Optimal dimensions:** $3 \text{m} × 3 \text{m}$ (square channel minimizes perimeter for given area).**

%%


