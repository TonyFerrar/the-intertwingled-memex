# Skill 3: Switching the Order of Integration

## Theoretical Notes & Formulas

### 1. Why Switch the Order of Integration?

According to Fubini’s Theorem, integrating over a rectangular region allows you to switch the order of $dx$ and $dy$ effortlessly because all boundaries are fixed constants. However, when integrating over a **general region**, the boundaries consist of functions.

Engineers and mathematicians frequently encounter integrals that are mathematically impossible or exceptionally tedious to solve in their original setup (such as evaluating $\int e^{x^2} \, dx$). By **switching the order of integration**, a region is converted from Type 1 (vertical slices) to Type 2 (horizontal slices), or vice versa. This geometric transformation often simplifies the algebraic integrand, turning a roadblock into a straightforward calculus problem.

### 2. The Process for Switching Bounds

You cannot simply swap the position of the integral signs and variables when dealing with functions. To correctly switch the order of integration, follow these four steps:

1. **Extract the Original Bounds:** Identify whether the current integral is Type 1 ($dy \, dx$) or Type 2 ($dx \, dy$) and write out the inequalities for the region $R$.
    
2. **Sketch the Region $R$:** Draw the boundary functions on the $xy$-plane and shade the area of integration. _This step is essential to avoid boundary errors._
    
3. **Invert the Boundary Functions:** Algebraically solve the inner equations for the opposite variable.
    
    - If given $y = f(x)$, invert it to find $x = f^{-1}(y)$.
        
4. **Re-slice the Region:** Look at your sketch. If you originally sliced vertically, establish new bounds by slicing horizontally (finding the constant limits for $y$ and the new left-to-right functional limits for $x$).
    

## Pure Mathematics Sample Problems

### Sample Problem 1: Overcoming an "Impossible" Integral

**Problem:** Evaluate the following double integral by switching the order of integration:

$$I = \int_{0}^{1} \int_{y}^{1} e^{x^2} \, dx \, dy$$

**Solution:**

As written, the inner integral requires finding $\int e^{x^2} \, dx$, which has no elementary antiderivative. We must switch the order to integrate with respect to $y$ first.

1. **Extract the original bounds:**
    
    The limits tell us that $y$ is bounded by constants and $x$ is bounded by functions (Type 2):
    
    $$0 \le y \le 1 \quad \text{and} \quad y \le x \le 1$$
    
2. **Sketch the region:**
    
    The boundaries are the horizontal lines $y=0$ and $y=1$, the vertical line $x=1$, and the slanted line $x=y$ (or $y=x$). The region is a triangle with vertices at $(0,0)$, $(1,0)$, and $(1,1)$.
    
3. **Establish new bounds (Type 1 - Vertical Slices):**
    
    Looking at the triangular region from left to right:
    
    - The constant bounds for $x$ run from $x = 0$ to $x = 1$.
        
    - A vertical slice enters the region at the bottom line $y = 0$ and exits at the slanted line $y = x$.
        
        New inequalities: $0 \le x \le 1$ and $0 \le y \le x$.
        
4. **Set up and evaluate the new integral:**
    
    $$I = \int_{0}^{1} \int_{0}^{x} e^{x^2} \, dy \, dx$$
    
    _Inner Integral ($dy$):_
    
    $$\int_{0}^{x} e^{x^2} \, dy = \left[ y e^{x^2} \right]_{0}^{x} = x e^{x^2} - 0 = x e^{x^2}$$
    
    _Outer Integral ($dx$):_
    
    Now we can easily solve this using $u$-substitution! Let $u = x^2 \implies du = 2x \, dx \implies x \, dx = \frac{du}{2}$.
    
    $$I = \int_{0}^{1} \frac{1}{2} e^u \, du = \left[ \frac{1}{2} e^u \right]_{0}^{1} = \frac{1}{2}(e^1 - e^0) = \frac{1}{2}(e - 1)$$
    

**Answer:** $\frac{1}{2}(e - 1)$

## Real-Life Engineering Application Problems

### Application 1: [[Aerospace & Mechanical Engineering (Torsional Moment of Inertia)]]
[[Aerospace & Mechanical Engineering (Torsional Moment of Inertia) Solution]]


### Application 2: [[Naval Engineering (Buoyancy Stability of a Ship Hull Section)]]
[[Naval Engineering (Buoyancy Stability of a Ship Hull Section) Solution]]
