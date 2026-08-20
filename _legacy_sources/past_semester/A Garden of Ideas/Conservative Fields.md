# Conservative Fields

> [!info] Conservative Vector Fields Essential Formulas
> **General 2D Vector Field:**
> $$\mathbf{F}(x,y,z)=\langle
> P(x,y,z),\,Q(x,y,z)\rangle$$
> ---
> **The Gradient of a Scalar Function**
> $$\nabla f=\left\langle \frac{\partial f}{\partial x},\,\frac{\partial f}{\partial y},\,\frac{\partial f}{\partial z}\right\rangle$$
> ___
> **Conservative Test (2D)**
> $$\frac{\partial P}{\partial y}=\frac{\partial Q}{\partial x}$$

### The Gradient of a Scalar Function
$$\nabla f=\left\langle \frac{\partial f}{\partial x},\,\frac{\partial f}{\partial y},\,\frac{\partial f}{\partial z}\right\rangle$$
The **gradient** operator converts a scalar function (a single-valued quantity like temperature or potential) into a vector field.  

- The gradient points in the direction of **steepest increase** of $f$.  
- Its magnitude equals the **rate of increase** in that direction.  
- If $f$ is potential energy, $\nabla f$ gives the force pushing objects toward lower energy regions. 
### Conservative Fields
A 2-D field $\mathbf{F}=\langle P,Q\rangle$ is **conservative** if  
$$\frac{\partial P}{\partial y}=\frac{\partial Q}{\partial x}.$$

This equality—called the **cross-partial test**—guarantees that $\mathbf{F}$ comes from some potential function $f$ with  
$$\mathbf{F}=\nabla f.$$

When the test fails, the field is **non-conservative** and may contain rotation, turbulence, or circulating flow.  

*Physical meaning:* In conservative systems (like gravity or electrostatics), the work done moving between two points is path-independent—energy is stored and recoverable.