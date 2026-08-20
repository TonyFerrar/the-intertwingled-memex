# Skill 3: Determining the Relationship Between Two Lines

## Essential Concepts & Formulas

In two-dimensional geometry, two lines can only be parallel, equal, or intersecting. In three-dimensional space, a fourth and very common relationship exists: **Skew**.

To classify the relationship between two lines in 3D, we compare their direction vectors ($\vec{u}$ and $\vec{v}$) and check whether they share any common points. We systematically evaluate them using two main criteria:

1. **Are the direction vectors parallel?** We test if one vector is a scalar multiple of the other ($\vec{u} = a\vec{v}$).
    
2. **Do the lines share a common point?** We set their parametric components equal ($x_1(t) = x_2(s)$, $y_1(t) = y_2(s)$, $z_1(t) = z_2(s)$) and test for consistency.
    

Using these two criteria, we classify the relationship based on the following matrix:

||**Lines share a common point**|**Lines do not share a common point**|
|---|---|---|
|**Direction vectors are parallel**|**Equal** (The exact same line)|**Parallel but not equal**|
|**Direction vectors are not parallel**|**Intersecting** (Cross at one point)|**Skew** (Never cross, different planes)|

## Guided Sample Problem (Skill 3 Demo)

### Problem Statement

Determine whether the lines $L_1$ and $L_2$ are equal, parallel but not equal, skew, or intersecting:

- **$L_1$:** $x = 5t, \quad y = -13 - 6t, \quad z = 19 - t$
    
- **$L_2$:** $x = -1 - 6s, \quad y = -12 - 12s, \quad z = 19 - 18s$
    

### Step-by-Step Solution

#### 1. Extract and Compare Direction Vectors

- **Direction vector of $L_1$ ($\vec{u}$):** $\langle 5, -6, -1 \rangle$
    
- **Direction vector of $L_2$ ($\vec{v}$):** $\langle -6, -12, -18 \rangle$
    

Check for parallelism ($\vec{u} = a\vec{v}$):

$$\frac{-6}{5} \neq \frac{-12}{-6}$$

Because the ratios of the components are not equal, the direction vectors are **not parallel**. The lines are either **Intersecting** or **Skew**.

#### 2. Check for a Shared Intersection Point

Set the corresponding $x$, $y$, and $z$ parametric equations equal to each other using distinct parameters $t$ and $s$:

1. $5t = -1 - 6s$
    
2. $-13 - 6t = -12 - 12s$
    
3. $19 - t = 19 - 18s$
    

Simplify equation (3) by subtracting 19 from both sides:

$$-t = -18s \implies t = 18s$$

Substitute $t = 18s$ into equation (1):

$$5(18s) = -1 - 6s \implies 90s = -1 - 6s \implies 96s = -1 \implies s = -\frac{1}{96}$$

Now, solve for $t$:

$$t = 18\left(-\frac{1}{96}\right) = -\frac{3}{16}$$

#### 3. Verify the Parameters in the Remaining Equation

Test if $t = -\frac{3}{16}$ and $s = -\frac{1}{96}$ satisfy equation (2):

$$\text{Left Side (LS): } -13 - 6\left(-\frac{3}{16}\right) = -13 + \frac{9}{8} = -\frac{95}{8}$$

$$\text{Right Side (RS): } -12 - 12\left(-\frac{1}{96}\right) = -12 + \frac{1}{8} = -\frac{95}{8}$$

Since $\text{LS} = \text{RS}$, the system is consistent, meaning the lines share a common point.

#### Conclusion
 
Because the vectors are not parallel and they share a point, the lines are **Intersecting**.

## Real-Life Engineering Application Problems

### Problem 1: [[Aerospace Engineering & Air Traffic Control (Flight Path Conflict)]]
[[Aerospace Engineering & Air Traffic Control (Flight Path Conflict) Solution]]


### Problem 2: [[Computer Graphics & Game Engines (Ray-Traced Laser Sight)]]
[[Computer Graphics & Game Engines (Ray-Traced Laser Sight) Solution]]
