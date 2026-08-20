### Solution to Problem 7: Finding a Unit Vector

**Problem Statement:** Let the vector be $\vec{u} = 3\hat{i} - 2\hat{j}$ (which has a magnitude of $\sqrt{13}$). Find the normalized unit vector $\hat{u}_u$ that points in the exact same direction as $\vec{u}$ but has a length of exactly $1$.

#### Step 1: Understand the Unit Vector Formula

A unit vector is a vector with a magnitude of exactly $1$. To convert any regular vector into a unit vector pointing in the same direction, you divide the vector by its own magnitude (length). This process is called "normalizing" a vector.

The mathematical formula is:

$$\hat{u}_u = \frac{\vec{u}}{|\vec{u}|} = \frac{u_x}{|\vec{u}|}\hat{i} + \frac{u_y}{|\vec{u}|}\hat{j}$$

#### Step 2: Identify the Given Values

- Original vector: $\vec{u} = 3\hat{i} - 2\hat{j}$
    
- Magnitude of the vector: $|\vec{u}| = \sqrt{13}$ _(derived from $\sqrt{3^2 + (-2)^2} = \sqrt{9 + 4} = \sqrt{13}$)_
    

#### Step 3: Substitute and Simplify

Divide each component of $\vec{u}$ by the magnitude $\sqrt{13}$:

$$\hat{u}_u = \frac{3\hat{i} - 2\hat{j}}{\sqrt{13}}$$

Separate the expression into its individual horizontal and vertical components:

$$\hat{u}_u = \frac{3}{\sqrt{13}}\hat{i} - \frac{2}{\sqrt{13}}\hat{j}$$

#### Step 4: Verification (Optional)

To double-check if this is truly a unit vector, we can calculate its magnitude to ensure it equals 1:

$$|\hat{u}_u| = \sqrt{\left(\frac{3}{\sqrt{13}}\right)^2 + \left(-\frac{2}{\sqrt{13}}\right)^2} = \sqrt{\frac{9}{13} + \frac{4}{13}} = \sqrt{\frac{13}{13}} = \sqrt{1} = 1$$

The magnitude is exactly 1, confirming the answer is correct.

#### Final Answer

The normalized unit vector is:

$$\hat{u}_u = \frac{3}{\sqrt{13}}\hat{i} - \frac{2}{\sqrt{13}}\hat{j}$$