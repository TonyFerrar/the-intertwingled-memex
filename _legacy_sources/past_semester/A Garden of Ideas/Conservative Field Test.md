
# Conservative Field Test

> [!info] Conservative Field Test Essential Formulas
> 
> **General 2D Vector Field:**
> $$\mathbf{F}(x,y,z)=\langle
> P(x,y,z),\,Q(x,y,z)\rangle$$
> ___
> **Conservative Test (2D)**
> $$\frac{\partial P}{\partial y}=\frac{\partial Q}{\partial x}$$ 


 A vector field $\mathbf{F} = \langle P(x,y), Q(x,y)\rangle$ is **conservative** if there exists a scalar potential function $f$ such that  
$$\mathbf{F} = \nabla f.$$

#### Mixed Partials Test

If $P$ and $Q$ have continuous first partial derivatives on a **simply connected** region, then  
$$P_y = Q_x$$  
implies $\mathbf{F}$ is conservative.

#### Simply Connected Regions

A region is **simply connected** if it has **no holes**.

Examples:
- Disk → simply connected  
- Annulus → not simply connected  
- Circle with missing center → not simply connected  

In regions with holes, $P_y = Q_x$ does **not** guarantee a conservative field.

> [!success] Step by Step Conservative Field Test
> 
> 1. Write $\mathbf{F} = \langle P(x,y), Q(x,y)\rangle$.
> 2. Compute $P_y$ and $Q_x$.
> 3. Compare them:
> 	- If $P_y \neq Q_x$ → not conservative.
> 	- If $P_y = Q_x$ → continue.
> 4. Check whether the region is **simply connected**.
> 5. Conclude:
> 	- If region is simply connected → conservative.
> 	- If region has holes → cannot determine.
> 
> (Optional) Compute $\oint_C \mathbf{F}\cdot d\mathbf{r}$. If nonzero → not conservative.
