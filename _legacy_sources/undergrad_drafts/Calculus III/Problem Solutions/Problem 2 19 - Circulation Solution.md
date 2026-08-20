## (a) Use the mixed partials test to determine whether $\mathbf{G}$ is conservative.

To check if a 2D vector field $\mathbf{G}(x,y) = \langle P(x,y), Q(x,y) \rangle$ is conservative, we check if its cross-partial derivatives match:

$$\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$$

### Step-by-Step Calculation:

- **Step 1: Identify the components $P$ and $Q$.**
    
    From the vector field $\mathbf{G}(x,y) = \langle y e^x, e^x + 2y \rangle$:
    
    $$P(x,y) = y e^x$$
    
    $$Q(x,y) = e^x + 2y$$
    
- **Step 2: Find the partial derivative of $P$ with respect to $y$.**
    
    Treat $x$ as a constant and differentiate with respect to $y$:
    
    $$\frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(y e^x) = 1 \cdot e^x = e^x$$
    
- **Step 3: Find the partial derivative of $Q$ with respect to $x$.**
    
    Treat $y$ as a constant and differentiate with respect to $x$:
    
    $$\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(e^x + 2y) = e^x + 0 = e^x$$
    

### Conclusion for Part (a):

Since $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x} = e^x$ everywhere, the vector field **passes the mixed partials test**.

## (b) Explain why the domain matters.

The mixed partials test is a **local** condition—it tells us that the vector field doesn't have any local "swirl" (its 2D curl is zero) at any given point. However, to declare a field globally conservative over an entire region, the region's geometry matters.

The domain must be **simply connected**. Informally, this means the domain has no "holes" in it, allowing any closed loop to be shrunk down to a single point without leaving the domain.

### Why this is crucial:

If a domain has a hole (like a punctured plane $\mathbb{R}^2 \setminus \{(0,0)\}$), a vector field can satisfy $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$ everywhere it is defined, yet _still_ fail to be conservative. This happens because a path wrapping completely around the hole can trap a net non-zero circulation.

Because our problem specifies that $\mathbf{G}$ is defined on $\mathbb{R}^2$ (the entire $xy$-plane, which is completely solid and has no holes), it is **simply connected**. Therefore, passing the mixed partials test guarantees that $\mathbf{G}$ is truly conservative.

## (c) State the implication for $\oint_{C} \mathbf{G} \cdot d\mathbf{r}$ over any closed curve $C$.

Because $\mathbf{G}$ is a conservative vector field on a simply connected domain, it is completely **path-independent**.

When a path is path-independent, the work done moving through the field depends only on where you start and where you finish. If you travel along a closed curve $C$, your starting point and your ending point are exactly the same.

Therefore, the net line integral around any closed loop is **always zero**:

$$\oint_{C} \mathbf{G} \cdot d\mathbf{r} = 0$$