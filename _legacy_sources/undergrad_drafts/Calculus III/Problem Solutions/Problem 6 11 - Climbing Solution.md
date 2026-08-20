Here is the complete step-by-step solution to Problem 6:

## Solution

### (a) Find the direction of most rapid cooling (steepest descent) at $(3,1)$

The direction of most rapid _increase_ is given by the gradient vector $\nabla T$. Therefore, the direction of most rapid _decrease_ (steepest descent/cooling) is given by the negative gradient vector, $-\nabla T$.

1. **Find the general gradient vector $\nabla T(x,y)$:**
    
    Take the partial derivatives of $T(x,y) = 150 - 2x^2 - 4y^2$:
    
    $$T_x = \frac{\partial}{\partial x}(150 - 2x^2 - 4y^2) = -4x$$
    
    $$T_y = \frac{\partial}{\partial y}(150 - 2x^2 - 4y^2) = -8y$$
    
    $$\nabla T(x,y) = \langle -4x, \, -8y \rangle$$
    
2. **Evaluate at the point $(3,1)$:**
    
    $$\nabla T(3,1) = \langle -4(3), \, -8(1) \rangle = \langle -12, \, -8 \rangle$$
    
3. **Compute the direction of steepest descent ($-\nabla T$):**
    
    $$\vec{v}_{\text{cooling}} = -\nabla T(3,1) = -\langle -12, \, -8 \rangle = \langle 12, \, 8 \rangle$$
    

### (b) Determine the maximum possible rate of temperature increase at $(3,1)$

The maximum possible rate of increase is equal to the **magnitude** of the gradient vector at that point.

$$\text{Maximum Rate of Increase} = |\nabla T(3,1)| = \sqrt{(-12)^2 + (-8)^2}$$

$$= \sqrt{144 + 64} = \sqrt{208} = 4\sqrt{13} \approx 14.42 \text{ °C/unit distance}$$

### (c) Identify the two unit vectors representing paths along which a particle experiences no change in temperature (level curves)

A particle experiences no change in temperature if it moves orthogonal (perpendicular) to the gradient vector. For any 2D vector $\langle a, b \rangle$, the two perpendicular vectors are $\langle -b, a \rangle$ and $\langle b, -a \rangle$.

1. **Find the perpendicular vectors to $\nabla T(3,1) = \langle -12, -8 \rangle$:**
    
    $$\vec{w}_1 = \langle 8, \, -12 \rangle$$
    
    $$\vec{w}_2 = \langle -8, \, 12 \rangle$$
    
2. **Normalize these vectors to make them unit vectors:**
    
    The magnitude of both vectors is $\sqrt{8^2 + (-12)^2} = \sqrt{64 + 144} = \sqrt{208} = 4\sqrt{13}$.
    
    $$\hat{u}_1 = \frac{\langle 8, -12 \rangle}{4\sqrt{13}} = \left\langle \frac{2}{\sqrt{13}}, \, -\frac{3}{\sqrt{13}} \right\rangle$$
    
    $$\hat{u}_2 = \frac{\langle -8, 12 \rangle}{4\sqrt{13}} = \left\langle -\frac{2}{\sqrt{13}}, \, \frac{3}{\sqrt{13}} \right\rangle$$
    

Moving along either unit vector $\hat{u}_1$ or $\hat{u}_2$ will keep the temperature completely constant.