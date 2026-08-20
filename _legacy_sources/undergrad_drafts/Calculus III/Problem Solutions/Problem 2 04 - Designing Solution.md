Here is the complete solution for **Problem S1.1** from the activity:

## Given Data

- **Point $A$:** $(1, 4, -2)$
    
- **Point $B$:** $(-3, 5, 0)$
    

## 1. Vector Equation of the Line

To construct the vector equation, we need an initial position vector $\vec{r}_0$ and a direction vector $\vec{v}$.

1. **Find the direction vector $\vec{v}$** by finding the displacement vector from $A$ to $B$:
    
    $$\vec{v} = \vec{AB} = \langle -3 - 1, \ 5 - 4, \ 0 - (-2) \rangle$$
    
    $$\vec{v} = \langle -4, 1, 2 \rangle$$
    
2. **Set point $A$ as your initial position vector $\vec{r}_0$:**
    
    $$\vec{r}_0 = \langle 1, 4, -2 \rangle$$
    
3. Assemble the vector equation $\vec{r}(t) = \vec{r}_0 + t\vec{v}$:
    
    $$\vec{r}(t) = \langle 1, 4, -2 \rangle + t\langle -4, 1, 2 \rangle$$
    

Evaluating at a few values of $t$:

- **For $t = 0$:**
    
    $$\vec{r}(0) = \langle 1, 4, -2 \rangle \quad (\text{Point } A)$$
    
- **For $t = 1$:**
    
    $$\vec{r}(1) = \langle 1 - 4, \ 4 + 1, \ -2 + 2 \rangle = \langle -3, 5, 0 \rangle \quad (\text{Point } B)$$
    
- **For $t = 2$:**
    
    $$\vec{r}(2) = \langle 1 - 8, \ 4 + 2, \ -2 + 4 \rangle = \langle -7, 6, 2 \rangle$$
    

## 2. Parametric Equations of the Line

By breaking the vector equation down into its distinct scalar components ($x$, $y$, and $z$) using the format $x = x_0 + at$, $y = y_0 + bt$, and $z = z_0 + ct$, we get:

- $$x = 1 - 4t$$
    
- $$y = 4 + t$$
    
- $$z = -2 + 2t$$
    

## 3. Symmetric Equation of the Line

To find the symmetric equation, we isolate $t$ in each parametric component and set them equal to one another:

1. Solve for $t$ in $x$:
    
    $$x = 1 - 4t \implies x - 1 = -4t \implies t = \frac{x - 1}{-4}$$
    
2. Solve for $t$ in $y$:
    
    $$y = 4 + t \implies t = \frac{y - 4}{1}$$
    
3. Solve for $t$ in $z$:
    
    $$z = -2 + 2t \implies z + 2 = 2t \implies t = \frac{z + 2}{2}$$
    

Equating these gives the **symmetric equation**:

$$\frac{x - 1}{-4} = y - 4 = \frac{z + 2}{2}$$