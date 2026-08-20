# Skill 2: Compute Directional Derivatives

## Topic Notes & Theoretical Overview

While the partial derivatives $f_x$ and $f_y$ measure the rate of change of a function strictly parallel to the coordinate axes (the $x$ and $y$ directions), the **directional derivative** allows us to calculate the instantaneous rate of change of a function moving in _any_ arbitrary direction across a domain.

### 1. Mathematical Definition

Let $f(x,y)$ be a differentiable function, and let $\vec{u} = \langle u_1, u_2 \rangle$ be a **unit vector** pointing in a specific direction. The directional derivative of $f$ in the direction of $\vec{u}$, denoted by $D_u f(x,y)$, is defined as:

$$D_u f(x,y) = \nabla f(x,y) \cdot \vec{u}$$

Using the definition of the dot product, this can also be written as:

$$D_u f(x,y) = f_x(x,y)u_1 + f_y(x,y)u_2$$

For a function of three variables $f(x,y,z)$ and a 3D unit vector $\vec{u} = \langle u_1, u_2, u_3 \rangle$, the definition expands to:

$$D_u f(x,y,z) = \nabla f(x,y,z) \cdot \vec{u} = f_x u_1 + f_y u_2 + f_z u_3$$

### 2. The Golden Rule: Vector Normalization

The dot-product formula **only works if the direction vector is a unit vector** (its length/magnitude must equal 1). If a problem gives you a generic directional vector $\vec{v}$ whose magnitude $|\vec{v}| \neq 1$, you **must normalize it** before taking the dot product:

$$\vec{u} = \frac{\vec{v}}{|\vec{v}|} = \frac{\langle v_1, v_2 \rangle}{\sqrt{v_1^2 + v_2^2}}$$

_Pitfall Warning:_ Forgetting to normalize $\vec{v}$ will scale your final answer incorrectly by a factor of $|\vec{v}|$, yielding an invalid rate of change.

### 3. Step-by-Step Execution Strategy

1. **Find the Gradient Vector:** Compute the general partial derivatives to find $\nabla f(x,y)$.
    
2. **Evaluate the Gradient:** Plug the given point coordinates into $\nabla f$ to get a vector of constants.
    
3. **Establish the Unit Vector:** Check the given direction. If it is given as a vector $\vec{v}$, normalize it. If it is given as a direction _toward_ another point $Q$, compute the displacement vector $\overrightarrow{PQ} = Q - P$ and normalize it.
    
4. **Compute the Dot Product:** Evaluate $D_u f = \nabla f \cdot \vec{u}$. The output must always be a **scalar number**, representing a rate of change.
    

## Pure Mathematical Sample Problems

### Problem 1: Standard Direction Vector

Find the directional derivative of $f(x,y) = 3x^2 - 2y^2 + 5xy$ at the point $(2, -1)$ in the direction of the vector $\vec{v} = \langle 3, 4 \rangle$.

#### Solution:

1. Find and evaluate the gradient vector at $(2, -1)$:
    
    $$f_x = 6x + 5y \quad \implies \quad f_x(2,-1) = 6(2) + 5(-1) = 12 - 5 = 7$$
    
    $$f_y = -4y + 5x \quad \implies \quad f_y(2,-1) = -4(-1) + 5(2) = 4 + 10 = 14$$
    
    $$\nabla f(2, -1) = \langle 7, \, 14 \rangle$$
    
2. Normalize the direction vector $\vec{v} = \langle 3, 4 \rangle$:
    
    $$|\vec{v}| = \sqrt{3^2 + 4^2} = \sqrt{25} = 5$$
    
    $$\vec{u} = \frac{\langle 3, 4 \rangle}{5} = \left\langle \frac{3}{5}, \, \frac{4}{5} \right\rangle$$
    
3. Compute the dot product:
    
    $$D_u f(2, -1) = \langle 7, \, 14 \rangle \cdot \left\langle \frac{3}{5}, \, \frac{4}{5} \right\rangle = 7\left(\frac{3}{5}\right) + 14\left(\frac{4}{5}\right) = \frac{21 + 56}{5} = \frac{77}{5}$$
    
    **Answer:** $D_u f(2, -1) = 15.4$
    

### Problem 2: Direction Towards a Target Point

Find the directional derivative of $f(x,y,z) = x^2yz + 2z^2$ at the point $P(1, 3, 1)$ in the direction pointing toward the point $Q(3, 1, 2)$.

#### Solution:

1. Find and evaluate the 3D gradient vector at $P(1, 3, 1)$:
    
    $$f_x = 2xyz \quad \implies \quad f_x(1,3,1) = 2(1)(3)(1) = 6$$
    
    $$f_y = x^2z \quad \implies \quad f_y(1,3,1) = (1)^2(1) = 1$$
    
    $$f_z = x^2y + 4z \quad \implies \quad f_z(1,3,1) = (1)^2(3) + 4(1) = 7$$
    
    $$\nabla f(1, 3, 1) = \langle 6, \, 1, \, 7 \rangle$$
    
2. Find and normalize the displacement vector $\vec{v} = \overrightarrow{PQ}$:
    
    $$\vec{v} = \langle 3 - 1, \, 1 - 3, \, 2 - 1 \rangle = \langle 2, \, -2, \, 1 \rangle$$
    
    $$|\vec{v}| = \sqrt{2^2 + (-2)^2 + 1^2} = \sqrt{4 + 4 + 1} = \sqrt{9} = 3$$
    
    $$\vec{u} = \left\langle \frac{2}{3}, \, -\frac{2}{3}, \, \frac{1}{3} \right\rangle$$
    
3. Compute the dot product:
    
    $$D_u f(P) = \langle 6, \, 1, \, 7 \rangle \cdot \left\langle \frac{2}{3}, \, -\frac{2}{3}, \, \frac{1}{3} \right\rangle = 6\left(\frac{2}{3}\right) + 1\left(-\frac{2}{3}\right) + 7\left(\frac{1}{3}\right) = \frac{12 - 2 + 7}{3} = \frac{17}{3}$$
    
    **Answer:** $D_u f(1,3,1) = \frac{17}{3} \approx 5.67$
    

## Real-Life Engineering Application Problems

### Application 1: [[Civil Engineering (Highway Grading Stability)]]
[[Civil Engineering (Highway Grading Stability) Solution]]


### Application 2: [[Entertainment Engineering (Stage Light Intelligibility)]]
[[Entertainment Engineering (Stage Light Intelligibility) Solution]]
