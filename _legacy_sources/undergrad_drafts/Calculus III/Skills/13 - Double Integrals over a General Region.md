# Skill 2: Double Integrals over General Regions

## Theoretical Notes & Formulas

### 1. Understanding General Regions

Unlike rectangular regions where all integration boundaries are constant straight lines ($x \in [a,b]$, $y \in [c,d]$), a **general region** is bounded by curved or slanted lines defined by functions.

When evaluating a double integral $\iint_R f(x, y) \, dA$ over a general region, the order of integration dictates how we establish our boundaries. To ensure the final result evaluates to a single numeric value (like volume, area, or mass), **the outer integral must always have constant limits, while the inner integral contains functional limits**.

We classify these domains into two primary types: **Type 1** (vertical slices) and **Type 2** (horizontal slices).

### 2. Type 1 Regions (Vertical Slices)

A region $R$ is of **Type 1** if it lies between two vertical constant lines ($x = a$ and $x = b$) and is bounded below and above by continuous functions of $x$ ($y = g_1(x)$ and $y = g_2(x)$).

$$\iint_{R} f(x,y) \, dA = \int_{a}^{b} \left( \int_{g_{1}(x)}^{g_{2}(x)} f(x,y) \, dy \right) dx$$

- **Geometric Visualization:** Imagine taking a thin vertical needle and sliding it left-to-right from $x = a$ to $x = b$. For any fixed $x$ coordinate, the needle enters the region at the lower curve $y = g_1(x)$ and leaves the region at the upper curve $y = g_2(x)$.
    
- **Order:** You integrate with respect to $y$ first ($dy$), treating $x$ as a constant, and then evaluate with respect to $x$ ($dx$).
    

### 3. Type 2 Regions (Horizontal Slices)

A region $R$ is of **Type 2** if it lies between two horizontal constant lines ($y = c$ and $y = d$) and is bounded on the left and right by continuous functions of $y$ ($x = h_1(y)$ and $x = h_2(y)$).

$$\iint_{R} f(x,y) \, dA = \int_{c}^{d} \left( \int_{h_{1}(y)}^{h_{2}(y)} f(x,y) \, dx \right) dy$$

- **Geometric Visualization:** Imagine taking a thin horizontal needle and sliding it bottom-to-top from $y = c$ to $y = d$. For any fixed $y$ coordinate, the needle enters the region from the left side at $x = h_1(y)$ and exits on the right side at $x = h_2(y)$.
    
- **Order:** You integrate with respect to $x$ first ($dx$), treating $y$ as a constant, and then evaluate with respect to $y$ ($dy$).
    

## Pure Mathematics Sample Problems

### Sample Problem 1: Type 1 Region (Vertical Slices)

**Problem:** Evaluate $\iint_R 2xy \, dA$ where $R$ is the region bounded by the parabola $y = x^2$ and the line $y = x$.

**Solution:**

1. **Find the intersection points (outer bounds):**
    
    Set the curves equal to each other to find where they cross:
    
    $$x^2 = x \implies x^2 - x = 0 \implies x(x - 1) = 0$$
    
    The curves intersect at $x = 0$ and $x = 1$. These are our constant outer bounds.
    
2. **Determine the lower and upper functions (inner bounds):**
    
    On the interval $[0, 1]$, the line $y = x$ lies above the parabola $y = x^2$ (e.g., at $x = 0.5$, $0.5 > 0.25$).
    
    - Lower boundary: $y = x^2$
        
    - Upper boundary: $y = x$
        
3. **Set up and integrate:**
    
    $$I = \int_{0}^{1} \int_{x^2}^{x} 2xy \, dy \, dx$$
    
    _Inner Integral ($dy$):_
    
    $$\int_{x^2}^{x} 2xy \, dy = \left[ xy^2 \right]_{x^2}^{x} = x(x)^2 - x(x^2)^2 = x^3 - x^5$$
    
    _Outer Integral ($dx$):_
    
    $$I = \int_{0}^{1} (x^3 - x^5) \, dx = \left[ \frac{x^4}{4} - \frac{x^6}{6} \right]_{0}^{1} = \frac{1}{4} - \frac{1}{6} = \frac{3}{12} - \frac{2}{12} = \frac{1}{12}$$
    

**Answer:** $\frac{1}{12}$

### Sample Problem 2: Type 2 Region (Horizontal Slices)

**Problem:** Evaluate $\iint_R (x + y) \, dA$ where $R$ is bounded by $x = y^2$ and $x = y$ from $y = 0$ to $y = 2$.

**Solution:**

The problem naturally gives $x$ as functions of $y$, making it ideal for a Type 2 setup.

- Outer constant bounds: $y \in [0, 2]$
    
- Left boundary curve: $x = y^2$
    
- Right boundary curve: $x = y$
    

1. **Set up the iterated integral:**
    
    $$I = \int_{0}^{2} \int_{y^2}^{y} (x + y) \, dx \, dy$$
    
2. **Inner Integral (with respect to $x$):**
    
    $$\int_{y^2}^{y} (x + y) \, dx = \left[ \frac{x^2}{2} + xy \right]_{y^2}^{y}$$
    
    Substitute the limits $x = y$ and $x = y^2$:
    
    $$= \left( \frac{y^2}{2} + y(y) \right) - \left( \frac{(y^2)^2}{2} + y^2(y) \right)$$
    
    $$= \left( \frac{1}{2}y^2 + y^2 \right) - \left( \frac{1}{2}y^4 + y^3 \right) = \frac{3}{2}y^2 - y^3 - \frac{1}{2}y^4$$
    
3. **Outer Integral (with respect to $y$):**
    
    $$I = \int_{0}^{2} \left( \frac{3}{2}y^2 - y^3 - \frac{1}{2}y^4 \right) \, dy = \left[ \frac{1}{2}y^3 - \frac{1}{4}y^4 - \frac{1}{10}y^5 \right]_{0}^{2}$$
    
    Evaluate at the limit $y = 2$:
    
    $$= \left( \frac{1}{2}(8) - \frac{1}{4}(16) - \frac{1}{10}(32) \right) - 0$$
    
    $$= 4 - 4 - 3.2 = -3.2 = -\frac{16}{5}$$
    

**Answer:** $-\frac{16}{5}$ (or $-3.2$)

## Real-Life Engineering Application Problems

### Application 1: [[Civil & Structural Engineering (Centroid of a Non-Uniform Plate)]]
[[Civil & Structural Engineering (Centroid of a Non-Uniform Plate) Solution]]


### Application 2: [[Fluid Mechanics & Hydraulic Engineering (Hydrostatic Force on a Parabolic Floodgate)]]
[[Fluid Mechanics & Hydraulic Engineering (Hydrostatic Force on a Parabolic Floodgate) Solution]]
