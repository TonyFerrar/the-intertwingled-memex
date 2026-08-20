Here is the complete step-by-step solution to the problem shown in the image:

## Solution

To calculate the directional derivative $D_u f(3, 1)$, we use the gradient-dot-product formula:

$$D_u f(x, y) = \nabla f(x, y) \cdot \vec{u}$$

where $\vec{u}$ **must** be a unit vector.

### Step 1: Normalize the direction vector $\vec{v}$

The given direction vector is $\vec{v} = \langle 5, 12 \rangle$. To find its corresponding unit vector $\vec{u}$, we divide $\vec{v}$ by its magnitude:

1. **Find the magnitude $|\vec{v}|$:**
    
    $$|\vec{v}| = \sqrt{5^2 + 12^2} = \sqrt{25 + 144} = \sqrt{169} = 13$$
    
2. **Compute the unit vector $\vec{u}$:**
    
    $$\vec{u} = \frac{\vec{v}}{|\vec{v}|} = \left\langle \frac{5}{13}, \, \frac{12}{13} \right\rangle$$
    

### Step 2: Find the general gradient vector $\nabla f(x,y)$

Now compute the first partial derivatives of $f(x,y) = x^2y - 2y^2$:

1. **Partial derivative with respect to $x$ ($f_x$):** Treat $y$ as a constant.
    
    $$f_x(x,y) = \frac{\partial}{\partial x}(x^2y - 2y^2) = 2xy$$
    
2. **Partial derivative with respect to $y$ ($f_y$):** Treat $x$ as a constant.
    
    $$f_y(x,y) = \frac{\partial}{\partial y}(x^2y - 2y^2) = x^2 - 4y$$
    

This gives the general gradient vector:

$$\nabla f(x,y) = \langle 2xy, \, x^2 - 4y \rangle$$

### Step 3: Evaluate $\nabla f$ at the point $(3, 1)$

Substitute $x = 3$ and $y = 1$ into your gradient components:

1. **X-component:**
    
    $$2(3)(1) = 6$$
    
2. **Y-component:**
    
    $$(3)^2 - 4(1) = 9 - 4 = 5$$
    

So, the evaluated gradient vector is:

$$\nabla f(3,1) = \langle 6, \, 5 \rangle$$

### Step 4: Compute the Directional Derivative $D_u f(3,1)$

Take the dot product of the evaluated gradient vector and the normalized unit vector:

$$D_u f(3,1) = \nabla f(3,1) \cdot \vec{u}$$

$$D_u f(3,1) = \langle 6, \, 5 \rangle \cdot \left\langle \frac{5}{13}, \, \frac{12}{13} \right\rangle$$

$$D_u f(3,1) = (6)\left(\frac{5}{13}\right) + (5)\left(\frac{12}{13}\right)$$

$$D_u f(3,1) = \frac{30}{13} + \frac{60}{13} = \frac{90}{13}$$

### Final Answer

The directional derivative of the function at $(3,1)$ in the given direction is **$\frac{90}{13}$** (or approximately **$6.92$**). This represents the instantaneous rate of change of the function per unit step in that specific direction.