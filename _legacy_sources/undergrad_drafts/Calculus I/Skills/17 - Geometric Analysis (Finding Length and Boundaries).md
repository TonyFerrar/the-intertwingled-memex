# Skill 3: Geometric Analysis (Finding Length and Boundaries)

## 1. Theoretical Notes

### What is Geometric Analysis in Vectors?

While vector components ($\hat{i}$ and $\hat{j}$) give us an algebraic way to write down spatial paths, **geometric analysis** allows us to measure and scale the physical structures of those paths. Two of the most critical properties evaluated in geometric analysis are **magnitude** (the total absolute size of a vector) and **normalization** (the practice of scaling a vector down to a baseline boundary length of exactly $1$).

### A. Vector Magnitude (Hypotenuse Length)

The magnitude of a vector represents its total length or structural strength, ignoring its directional angle.

Because the horizontal unit vector ($\hat{i}$) and the vertical unit vector ($\hat{j}$) are perfectly perpendicular to each other, a vector and its components always form a right-angled triangle. The vector itself acts as the **hypotenuse**, while its components act as the base and height.

#### The Formula

According to the Pythagorean theorem, the square of the hypotenuse equals the sum of the squares of the sides. Therefore, the magnitude of a vector $\vec{v} = v_x\hat{i} + v_y\hat{j}$ (denoted by absolute value bars $|\vec{v}|$) is calculated as:

$$|\vec{v}| = \sqrt{(v_x)^2 + (v_y)^2}$$

_Note: Squaring a negative component always yields a positive value under the square root (e.g., $(-5)^2 = 25$). Magnitude is always a positive scalar value._

### B. Normalization (Finding a Unit Vector)

In many advanced mathematical, physics, and engineering environments, you need to isolate a vector's **pure direction** without its length getting in the way. This is achieved through a process called **normalization**, which shrinks or stretches a vector so that its final magnitude is exactly **1**. A vector with a length of $1$ is called a **unit vector** (denoted with a "hat" symbol, like $\hat{u}_v$).

#### The Formula

To normalize any vector, you divide each of its individual components by its total magnitude:

$$\hat{u}_v = \frac{\vec{v}}{|\vec{v}|} = \left(\frac{v_x}{|\vec{v}|}\right)\hat{i} + \left(\frac{v_y}{|\vec{v}|}\right)\hat{j}$$

## 2. Standard Sample Problems

### Problem 1: Calculating Magnitude

Calculate the exact magnitude of the vector $\vec{a} = -6\hat{i} + 8\hat{j}$.

**Solution:**

1. Identify components: $a_x = -6$ and $a_y = 8$.
    
2. Apply the magnitude formula:
    
    $$|\vec{a}| = \sqrt{(-6)^2 + (8)^2}$$
    
3. Simplify the squares:
    
    $$|\vec{a}| = \sqrt{36 + 64} = \sqrt{100}$$
    
4. Solve the radical:
    
    $$|\vec{a}| = 10$$
    

### Problem 2: Vector Normalization

Find the normalized unit vector $\hat{u}_b$ pointing in the same direction as $\vec{b} = 4\hat{i} - 3\hat{j}$.

**Solution:**

1. First, find the total magnitude of $\vec{b}$:
    
    $$|\vec{b}| = \sqrt{(4)^2 + (-3)^2} = \sqrt{16 + 9} = \sqrt{25} = 5$$
    
2. Divide each component by the magnitude ($5$):
    
    $$\hat{u}_b = \frac{4}{5}\hat{i} - \frac{3}{5}\hat{j}$$
    
3. Write in clean decimal or fraction form:
    
    $$\hat{u}_b = 0.8\hat{i} - 0.6\hat{j}$$
    

## 3. Real-Life Engineering Application Problems

### Engineering Problem 1: [[Structural Engineering (Cable Tension Limits)]]
[[Structural Engineering (Cable Tension Limits) Solution]]


### Engineering Problem 2: [[Biomedical Engineering (MRI Magnetic Field Direction)]]
[[Biomedical Engineering (MRI Magnetic Field Direction) Solution]]
