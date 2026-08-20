# Skill 4: Trigonometric Navigation (Finding Orientation and Direction Angles)

## 1. Theoretical Notes

### What is Trigonometric Navigation?

While a vector's components ($\hat{i}$ and $\hat{j}$) provide an algebraic description of how far a vector moves along the axes, **trigonometric navigation** gives us a way to find its exact orientation as an angle $\theta$.

Because a vector and its components form a right-angled triangle, we can use basic trigonometry to bridge the gap between the component form and the direction angle.

### A. The Fundamental Trigonometric Formula

When a vector $\vec{V} = V_x\hat{i} + V_y\hat{j}$ is plotted on a Cartesian plane:

- The $x$-component ($V_x$) acts as the **adjacent side** relative to the direction angle.
    
- The $y$-component ($V_y$) acts as the **opposite side** relative to the direction angle.
    

From right-triangle trigonometry, the tangent of an angle is defined as the ratio of the opposite side over the adjacent side:

$$\tan\theta = \frac{\text{Opposite}}{\text{Adjacent}} = \frac{V_y}{V_x}$$

To isolate the direction angle $\theta$, you apply the inverse tangent function ($\tan^{-1}$ or $\text{arctan}$):

$$\theta = \tan^{-1}\left(\frac{V_y}{V_x}\right)$$

### B. Quadrant Awareness and Corrections

A standard calculator will only yield an output between $-90^\circ$ and $+90^\circ$ when evaluating an inverse tangent. However, a full circle spans $360^\circ$. Therefore, you must use **quadrant awareness** to determine if your calculated angle matches the physical direction of the vector.

You must look at the signs of your components to identify which of the four quadrants the vector sits in:

1. **Quadrant I ($+V_x, +V_y$):** The vector points up and right. The calculator angle is correct as given.
    
2. **Quadrant II ($-V_x, +V_y$):** The vector points up and left. **Correction:** Add $180^\circ$ to the calculator's output.
    
3. **Quadrant III ($-V_x, -V_y$):** The vector points down and left. **Correction:** Add $180^\circ$ to the calculator's output.
    
4. **Quadrant IV ($+V_x, -V_y$):** The vector points down and right. The calculator will give a negative angle. **Correction:** Add $360^\circ$ to express it as a standard positive angle counterclockwise from the $x$-axis.
    

## 2. Standard Sample Problems

### Problem 1: First Quadrant Angle

A vector is given as $\vec{u} = 4\hat{i} + 3\hat{j}$. Find its direction angle $\theta$ relative to the positive $x$-axis.

**Solution:**

1. Identify components: $V_x = 4$ and $V_y = 3$ (Both positive, so it is in Quadrant I).
    
2. Set up the inverse tangent equation:
    
    $$\theta = \tan^{-1}\left(\frac{3}{4}\right)$$
    
3. Compute using a calculator in degree mode:
    
    $$\theta \approx \tan^{-1}(0.75) \approx 36.87^\circ$$
    
4. Since it is in Quadrant I, no adjustment is needed.
    
    $$\theta = 36.87^\circ$$
    

### Problem 2: Second Quadrant Correction

A vector is given as $\vec{w} = -5\hat{i} + 2\hat{j}$. Find its standard direction angle.

**Solution:**

1. Identify components: $V_x = -5$ and $V_y = 2$ (Negative $x$, positive $y$, meaning Quadrant II).
    
2. Compute the initial base angle via inverse tangent:
    
    $$\theta_{\text{calc}} = \tan^{-1}\left(\frac{2}{-5}\right) = \tan^{-1}(-0.4) \approx -21.80^\circ$$
    
3. Because the vector points up and left into Quadrant II, apply the correction rule by adding $180^\circ$:
    
    $$\theta = -21.80^\circ + 180^\circ = 158.20^\circ$$
    
    $$\theta = 158.20^\circ$$
    

## 3. Real-Life Engineering Application Problems

### Engineering Problem 1: [[Aerospace Engineering (Crosswind Crab Angle Correction)]]
[[Aerospace Engineering (Crosswind Crab Angle Correction) Solution]]


### Engineering Problem 2: [[Robotics and Manufacturing (Orientation of a Laser Cutter)]]
[[Robotics and Manufacturing (Orientation of a Laser Cutter) Solution]]
