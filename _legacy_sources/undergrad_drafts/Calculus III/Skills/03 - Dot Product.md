# Skill 1: Dot Product

## Notes & Core Concepts

In engineering and physics, we often need to multiply vectors together. The **dot product** (also known as the scalar product) is an operation that takes two vectors and returns a single **scalar value** (a number, not a vector).

There are two primary ways to calculate the dot product depending on the information available:

### 1. Algebraic Definition (Component Form)

If you know the Cartesian components of two vectors $\vec{a} = \langle a_x, a_y, a_z \rangle$ and $\vec{b} = \langle b_x, b_y, b_z \rangle$, the dot product is the sum of the products of their corresponding components:

$$\vec{a} \cdot \vec{b} = a_x b_x + a_y b_y + a_z b_z$$

### 2. Geometric Definition (Magnitude & Angle Form)

If you know the magnitudes of the vectors and the angle $\theta$ between them, the dot product is defined as:

$$\vec{a} \cdot \vec{b} = |\vec{a}| |\vec{b}| \cos\theta$$

### Key Properties & Geometric Interpretation

- **Orthogonality Test:** If two non-zero vectors are perpendicular ($\theta = 90^\circ$), their dot product is exactly **$0$** because $\cos(90^\circ) = 0$. This is an essential tool used by engineers to check if two vectors are orthogonal:
    
    $$\vec{a} \cdot \vec{b} = 0 \iff \vec{a} \perp \vec{b}$$
    
- **Vector Projection:** The dot product allows us to find the shadow or "component" of one vector lying along the direction of another. The magnitude of the component of $\vec{b}$ along $\vec{a}$ is given by:
    
    $$\text{comp}_{\vec{a}}\vec{b} = \vec{b} \cdot \frac{\vec{a}}{|\vec{a}|}$$
    

## Guided Notes Sample Problems

### Sample Problem 1: Component Multiplication

**Problem:** Find the dot product of the 3D vectors $\vec{a} = 5\hat{i} + 6\hat{j} - 2\hat{k}$ and $\vec{b} = 2\hat{i} - 3\hat{j} + 1\hat{k}$.

**Solution:**

1. Identify the components:
    
    - $a_x = 5, a_y = 6, a_z = -2$
        
    - $b_x = 2, b_y = -3, b_z = 1$
        
2. Apply the component formula:
    
    $$\vec{a} \cdot \vec{b} = (5)(2) + (6)(-3) + (-2)(1)$$
    
    $$\vec{a} \cdot \vec{b} = 10 - 18 - 2 = -10$$
    

### Sample Problem 2: Finding the Angle Between Vectors

**Problem:** Given the vectors $\vec{a} = 5\hat{i} + 3\hat{j}$ and $\vec{b} = 4\hat{i} + 2\hat{j}$, find the angle $\theta$ between them.

**Solution:**

1. Calculate the dot product algebraically:
    
    $$\vec{a} \cdot \vec{b} = (5)(4) + (3)(2) = 20 + 6 = 26$$
    
2. Calculate the magnitudes of both vectors:
    
    $$|\vec{a}| = \sqrt{5^2 + 3^2} = \sqrt{25 + 9} = \sqrt{34} \approx 5.831$$
    
    $$|\vec{b}| = \sqrt{4^2 + 2^2} = \sqrt{16 + 4} = \sqrt{20} \approx 4.472$$
    
3. Use the geometric definition to solve for $\cos\theta$:
    
    $$\vec{a} \cdot \vec{b} = |\vec{a}||\vec{b}|\cos\theta \implies 26 = (\sqrt{34})(\sqrt{20})\cos\theta$$
    
    $$\cos\theta = \frac{26}{\sqrt{680}} \approx \frac{26}{26.077} \approx 0.997$$
    
4. Take the inverse cosine:
    
    $$\theta = \cos^{-1}(0.997) \approx 4.40^\circ$$
    

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Mechanical Efficiency and Work Done]]
[[Mechanical Efficiency and Work Done Solution]]

### Engineering Problem 2: [[Structural Decompositions (Vector Projection)]]
[[Structural Decompositions (Vector Projection) Solution]]
