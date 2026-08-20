Here is the step-by-step solution to the problem presented in the image.

## Given Data

- **Point $P$:** $(-4, -6, -2)$
    
- **Point $Q$:** $(10, 2, 1)$
    

## 1. Vector Equation of the Line

To find the vector equation, we first need a position vector $\vec{r}_0$ for a point on the line and a direction vector $\vec{v}$ that is parallel to the line.

1. **Find the direction vector $\vec{v}$** by finding the vector from $P$ to $Q$:
    
    $$\vec{v} = \vec{PQ} = \langle 10 - (-4), 2 - (-6), 1 - (-2) \rangle$$
    
    $$\vec{v} = \langle 14, 8, 3 \rangle$$
    
2. **Use point $P$ as the initial position vector $\vec{r}_0$:**
    
    $$\vec{r}_0 = \langle -4, -6, -2 \rangle$$
    
3. Write the vector equation $\vec{r}(t) = \vec{r}_0 + t\vec{v}$:
    
    $$\vec{r}(t) = \langle -4, -6, -2 \rangle + t\langle 14, 8, 3 \rangle$$
    

Evaluating at a few values of $t$:

- **For $t = 0$:**
    
    $$\vec{r}(0) = \langle -4, -6, -2 \rangle \quad (\text{This is point } P)$$
    
- **For $t = 1$:**
    
    $$\vec{r}(1) = \langle -4+14, -6+8, -2+3 \rangle = \langle 10, 2, 1 \rangle \quad (\text{This is point } Q)$$
    
- **For $t = -1$:**
    
    $$\vec{r}(-1) = \langle -4-14, -6-8, -2-3 \rangle = \langle -18, -14, -5 \rangle$$
    

## 2. Parametric Equations of the Line

The parametric equations break the vector equation down into separate components for $x$, $y$, and $z$ using the format:

- $x = x_0 + at$
    
- $y = y_0 + bt$
    
- $z = z_0 + ct$
    

Substituting our point $P(-4, -6, -2)$ and direction vector components $\langle 14, 8, 3 \rangle$:

- $$x = -4 + 14t$$
    
- $$y = -6 + 8t$$
    
- $$z = -2 + 3t$$
    

## 3. Symmetric Equation of the Line

To convert the parametric equations into a symmetric equation, we solve each individual equation for $t$ and set them equal to each other:

1. Solve for $t$ in the $x$ equation:
    
    $$x = -4 + 14t \implies x + 4 = 14t \implies t = \frac{x + 4}{14}$$
    
2. Solve for $t$ in the $y$ equation:
    
    $$y = -6 + 8t \implies y + 6 = 8t \implies t = \frac{y + 6}{8}$$
    
3. Solve for $t$ in the $z$ equation:
    
    $$z = -2 + 3t \implies z + 2 = 3t \implies t = \frac{z + 2}{3}$$
    

Equating all three expressions for $t$ gives the **symmetric equation**:

$$\frac{x + 4}{14} = \frac{y + 6}{8} = \frac{z + 2}{3}$$