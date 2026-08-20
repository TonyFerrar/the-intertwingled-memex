# Calc 3 Session 21
## Circulation and Rotation
Green's Theorem

> [!info] Printable PDF
> [[20 - Circulation & Rotation Learning Activity.pdf]]

## 📋 Skill Roadmap for Today
- [ ] [[Conservative Field Test]]
- [ ] [[Green's Theorem - Circulation Form]]
- [ ] [[Green's Theorem - Flux Form]]

## Essential notes & formulas
*This space is for you to use.*

<div style="page-break-after: always;"></div>

---
## Skill 1: Conservative Field Test

> [!info] Conservative Field Test Essential Formulas
> 
> **General 2D Vector Field:**
> $$\mathbf{F}(x,y,z)=\langle
> P(x,y,z),\,Q(x,y,z)\rangle$$
> ___
> **Conservative Test (2D)**
> $$\frac{\partial P}{\partial y}=\frac{\partial Q}{\partial x}$$ 

### Skill 1 Demo:

You are given the vector field

$$\mathbf{F}(x,y) = \langle 2xy + e^x,\; x^2 + \sin y \rangle.$$

1. Determine whether $\mathbf{F}$ is a conservative vector field.
2. If $\mathbf{F}$ is conservative on $\mathbb{R}^2$, what can you say about any line integral of $\mathbf{F}$ over a **closed** curve in $\mathbb{R}^2$?

%%
> [!Success] Skill 1 Demo Solution
> **Step 1: Conservative Field Test**
> - Establish $P$ and $Q$
> $$P(x,y) = x^2 + \sin y, \qquad Q(x,y) = 2xy + \cos x$$
> - Find $P_y$
>$$P_y(x,y) = \cos y.$$
> - Find $Q_x$
> $$Q_x(x,y) = 2y - \sin x.$$
> - Compare
> $$P_y(x,y) \neq Q_x(x,y) \rightarrow \cos y\neq 2y - \sin x.$$
> Not Conservative
> ___
> **Step 2: Role of the Domain**
> The domain here is $\mathbb{R}^2$, which is simply connected, but that only helps us if $P_y = Q_x$ everywhere. Since that equality already fails, we don’t even need to worry about holes in the region. The vector field fails the basic derivative test.


%%
<div style="page-break-after: always;"></div>

---
### Problem 1.1:

Consider

$$\mathbf{G}(x,y) = \langle y e^x,\; e^x + 2y \rangle,$$

defined on $\mathbb{R}^2$.

(a) Use the mixed partials test to determine whether $\mathbf{G}$ is conservative.  
(b) Explain why the domain matters.  
(c) State the implication for $\oint_C \mathbf{G}\cdot d\mathbf{r}$ over any closed curve $C$.

%%
> [!Success] Problem 1.1 Solution
> **Step 1:**
> - Establish $P$ and $Q$
> $$P(x,y) = y e^x, \qquad Q(x,y) = e^x + 2y.$$
> - Find $P_y$
> $$P_y(x,y) = e^x.$$
> - Find $Q_x$
> $$Q_x(x,y) = e^x.$$
> - Compare
> $$P_y(x,y) = e^x, \qquad Q_x(x,y) = e^x.$$
> $$P_y = Q_x$$
> ___
> **Step 2: Check The Domain**
> - No holes → simply connected  
> - The functions involved ($e^x$, polynomials) have continuous derivatives everywhere
> So the hypotheses of the mixed partials test are satisfied.
> ___
> **Step 3: Implications for Closed Curves:**
> For a conservative vector field,
> - Line integrals are path-independent.  
> - For any closed curve $C$ in the domain,
> $$\oint_C \mathbf{G}\cdot d\mathbf{r} = 0.$$
> So if you walk around any loop in the plane and compute the work done by $\mathbf{G}$, the net work is zero.
> 

%%
<div style="page-break-after: always;"></div>

---
## Skill 2: Green's Theorem: Circulation Form

> [!info] Green's Theorem - Circulation Form Essential Formulas
> 
> **Green's Theorem - Circulation Form:**
> $$\oint_C P\,dx + Q\,dy = \iint_R (Q_x - P_y)\, dA.$$
### Skill 2 Demo:

Consider the vector field
$$\mathbf{F}(x,y) = \langle P(x,y), Q(x,y) \rangle = \langle y e^x,\; x^2 + \cos y \rangle.$$
Let $C$ be the positively oriented (counterclockwise) boundary of the rectangle $R$ with corners  $(0,0)$, $(2,0)$, $(2,1)$, $(0,1)$. Use Green's Theorem to compute the line integral $\oint_C\mathbf{F}\cdot d\mathbf{r}$

%%
> [!Success] Skill 2 Demo Solution
>**Step 1: Finding $P_y$ and $Q_x$**
> $$P(x,y) = y e^x, \qquad Q(x,y) = x^2 + \cos y.$$
>- Find partial derivatives
> $$Q_x(x,y) = 2x.$$
> $$P_y(x,y) = e^x.$$
> ___
> **Step 2: Solve the Integral**
> - Compute $Q_x-P_y$
> $$Q_x - P_y = 2x - e^x.$$
> - Set up Domain Restrictions
> - $0 \le x \le 2$
> - $0 \le y \le 1$
> - Put it all Together
> $$\oint_C \mathbf{F}\cdot d\mathbf{r}
> = \iint_R (2x - e^x)\, dA
> = \int_{x=0}^{2} \int_{y=0}^{1} (2x - e^x)\, dy\, dx.$$
> - Integrate
> $$\oint_C \mathbf{F}\cdot d\mathbf{r}= \iint_R (2x - e^x)\, dA = \int_{x=0}^{2} \int_{y=0}^{1} (2x - e^x)\, dy\, dx=5 - e^2$$

%%
<div style="page-break-after: always;"></div>

---
### Problem 2.1:

Let
$$\mathbf{F}(x,y) = \langle P(x,y), Q(x,y) \rangle = \langle x + \sin y,\; y^2 + \cos x \rangle.$$
Let $C$ be the positively oriented boundary of the rectangle with corners $(0,0)$, $(1,0)$, $(1,2)$, $(0,2)$. Compute the line integral $\oint_C \mathbf{F}\cdot d\mathbf{r}$ using Green's Theorem.

%%
> [!Success]- Problem S2.2 Solution
> Insert Solutions Here

%%
<div style="page-break-after: always;"></div>

---
### Problem 2.2:

Let
$$\mathbf{F}(x,y) = \langle x^2,\; 3y + \sin x \rangle.$$
Let $C$ be the positively oriented boundary of the region $R$ in the $xy$-plane bounded by the curves $y = 0$, $y = 1$, $x = 0$, $x = 2$. Compute $\oint_C \mathbf{F}\cdot d\mathbf{r}$ using Green’s Theorem.

%%
> [!Success]- Problem S2.3 Solution
> Insert Solutions Here

%%
<div style="page-break-after: always;"></div>

---
## Skill 3 Green's Theorem: Flux Form

> [!info] Green's Theorem - Flux Form Essential Formulas
> 
> **Green's Theorem: Flux Form**
> $$\oint_C \mathbf{F}\cdot \mathbf{n}\,ds = \oint_C P\,dy -
> Q\,dx=\iint_R (P_x + Q_y)\, dA.$$

### Skill 3 Demo:

Consider the vector field
$$\mathbf{F}(x,y) = \langle P(x,y), Q(x,y) \rangle = \langle x e^y,\; y^2 + e^x \rangle.$$
Let $C$ be the positively oriented boundary of the rectangle  
with corners $(0,0)$, $(3,0)$, $(3,1)$, $(0,1)$. Use **Green’s Theorem (flux form)** to compute the outward flux  

%%
> [!Success]- Demo Problem S3.1 Solution
> Insert Solutions Here

%%
<div style="page-break-after: always;"></div>

---
### Problem 3.1:

Let
$$\mathbf{F}(x,y) = \langle e^x + y,\; x^2 + e^y \rangle.$$
Let $C$ be the positively oriented boundary of the rectangle  
$0 \le x \le 2$, $0 \le y \le 3$. Use Green’s Theorem (flux form) to compute $\oint_C \mathbf{F}\cdot \mathbf{n}\, ds.$

%%
> [!Success]- Problem S3.2 Solution
> Insert Solutions Here

%%
<div style="page-break-after: always;"></div>

---
### Problem 3.2:

Let
$$\mathbf{F}(x,y) = \langle \sin x,\; e^y + x \rangle.$$
Let $C$ be the positively oriented boundary of the unit circle $x^2 + y^2 = 1.$ Use Green’s Theorem (flux form) to compute: $\oint_C \mathbf{F}\cdot \mathbf{n}\, ds.$

%%
> [!Success]- Problem S3.3 Solution
> Insert Solutions Here

%%