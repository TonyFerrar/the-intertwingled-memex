Here is the step-by-step solution for **Problem S3.1** to determine the relationship between line A and line B.

## Given Data

- **Line A** passes through: $A_1 = (2, 0, 3)$ and $A_2 = (4, 7, 8)$
    
- **Line B** passes through: $B_1 = (-3, -1, 4)$ and $B_2 = (-1, 5, 9)$
    

## Step 1: Find and Compare Direction Vectors

First, we calculate the direction vectors ($\vec{u}$ and $\vec{v}$) for both lines by subtracting their given coordinates:

- **Direction vector for Line A ($\vec{u}$):**
    
    $$\vec{u} = \vec{A_1A_2} = \langle 4 - 2, \ 7 - 0, \ 8 - 3 \rangle = \langle 2, 7, 5 \rangle$$
    
- **Direction vector for Line B ($\vec{v}$):**
    
    $$\vec{v} = \vec{B_1B_2} = \langle -1 - (-3), \ 5 - (-1), \ 9 - 4 \rangle = \langle 2, 6, 5 \rangle$$
    

Now we check if the direction vectors are parallel ($\vec{u} = a\vec{v}$): Comparing the components:

- $x$-component ratio: $\frac{2}{2} = 1$
    
- $y$-component ratio: $\frac{7}{6}$
    

Since $\frac{2}{2} \neq \frac{7}{6}$, the direction vectors are **not parallel**. Based on the classification table, the lines must be either **Intersecting** or **Skew**.

## Step 2: Write Parametric Equations for Both Lines

To check if they share a common point, we first write out their parametric forms using $A_1$ and $B_1$ as our initial points:

- **Line A (using parameter $t$):**
    
    $$x = 2 + 2t$$
    
    $$y = 0 + 7t = 7t$$
    
    $$z = 3 + 5t$$
    
- **Line B (using parameter $s$):**
    
    $$x = -3 + 2s$$
    
    $$y = -1 + 6s$$
    
    $$z = 4 + 5s$$
    

## Step 3: Check for an Intersection Point

We set the corresponding coordinate equations equal to one another ($x_A = x_B$, $y_A = y_B$, $z_A = z_B$):

1. $$2 + 2t = -3 + 2s$$
    
2. $$7t = -1 + 6s$$
    
3. $$3 + 5t = 4 + 5s$$
    

### Solve the system using equations (1) and (3):

From equation (3), subtract $5s$ and 3 from both sides:

$$5t - 5s = 1 \implies 5(t - s) = 1 \implies t - s = \frac{1}{5}$$

From equation (1), rearrange to group $t$ and $s$:

$$2t - 2s = -5 \implies 2(t - s) = -5 \implies t - s = -\frac{5}{2}$$

### Notice the contradiction:

From equation (3) we get $t - s = 0.2$, but from equation (1) we get $t - s = -2.5$. Because $0.2 \neq -2.5$, it is mathematically impossible to find values for $t$ and $s$ that satisfy this system. The system is inconsistent, meaning the lines **do not share a common point**.

## Conclusion

Since the direction vectors are **not parallel** and the lines **do not share a common point**, the lines are **Skew**.

- [ ] Equal
    
- [ ] Parallel
    
- [x] **Skew** **(Correct Answer)**
    
- [ ] Intersecting