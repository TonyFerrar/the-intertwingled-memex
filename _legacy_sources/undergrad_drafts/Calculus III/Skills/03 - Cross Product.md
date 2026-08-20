# Skill 2: Cross Product

## Notes & Core Concepts

Unlike the dot product, which results in a scalar, the **cross product** (also known as the vector product) takes two vectors and produces a **new vector**. This operation is only defined in three-dimensional space.

### 1. Geometric Characteristics of the Cross Product Vector

The resulting vector $\vec{c} = \vec{a} \times \vec{b}$ has two unique traits:

- **Direction:** The vector $\vec{c}$ is always **orthogonal (perpendicular)** to both original vectors, $\vec{a}$ and $\vec{b}$. Its direction is determined by the **Right-Hand Rule** (curl the fingers of your right hand from $\vec{a}$ to $\vec{b}$, and your thumb points in the direction of $\vec{a} \times \vec{b}$).
    
- **Magnitude:** The length of the resulting vector represents the area of the parallelogram formed by $\vec{a}$ and $\vec{b}$:
    
    $$|\vec{a} \times \vec{b}| = |\vec{a}| |\vec{b}| \sin\theta$$
    

### 2. Algebraic Calculation ($3 \times 3$ Determinant)

To calculate the cross product using components, we set up and evaluate a $3 \times 3$ matrix determinant where the top row contains the standard basis vectors ($\hat{i}, \hat{j}, \hat{k}$), the second row contains the components of the first vector, and the third row contains the components of the second vector:

$$\vec{a} \times \vec{b} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ a_x & a_y & a_z \\ b_x & b_y & b_z \end{vmatrix}$$

Expanding this determinant by the top row gives the core formula:

$$\vec{a} \times \vec{b} = (a_y b_z - a_z b_y)\hat{i} - (a_x b_z - a_z b_x)\hat{j} + (a_x b_y - a_y b_x)\hat{k}$$

### Key Properties

- **Anti-commutative:** Changing the order of multiplication reverses the direction of the output vector:
    
    $$\vec{a} \times \vec{b} = -(\vec{b} \times \vec{a})$$
    
- **Parallel Vectors Test:** If two vectors are parallel ($\theta = 0^\circ$ or $180^\circ$), their cross product is the **zero vector ($\vec{0}$)** because $\sin(0^\circ) = 0$.
    

## Guided Notes Sample Problems

### Sample Problem 1: 3x3 Determinant Calculation

**Problem:** Calculate the cross product $\vec{a} \times \vec{b}$ given $\vec{a} = \langle 1, 2, 3 \rangle$ and $\vec{b} = \langle 4, 5, 6 \rangle$.

**Solution:**

1. Set up the matrix determinant:
    
    $$\vec{a} \times \vec{b} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 1 & 2 & 3 \\ 4 & 5 & 6 \end{vmatrix}$$
    
2. Expand along the first row:
    
    $$\vec{a} \times \vec{b} = \hat{i}\begin{vmatrix} 2 & 3 \\ 5 & 6 \end{vmatrix} - \hat{j}\begin{vmatrix} 1 & 3 \\ 4 & 6 \end{vmatrix} + \hat{k}\begin{vmatrix} 1 & 2 \\ 4 & 5 \end{vmatrix}$$
    
3. Evaluate the $2 \times 2$ determinants:
    
    - $\hat{i}\text{ comp}: (2 \cdot 6) - (3 \cdot 5) = 12 - 15 = -3$
        
    - $\hat{j}\text{ comp}: (1 \cdot 6) - (3 \cdot 4) = 6 - 12 = -6$
        
    - $\hat{k}\text{ comp}: (1 \cdot 5) - (2 \cdot 4) = 5 - 8 = -3$
        
4. Assemble the vector (remembering the negative sign on the $\hat{j}$ term):
    
    $$\vec{a} \times \vec{b} = -3\hat{i} - (-6)\hat{j} - 3\hat{k} = -3\hat{i} + 6\hat{j} - 3\hat{k}$$
    

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Fluid Mechanics & Aerodynamic Lift]]
[[Fluid Mechanics & Aerodynamic Lift Solution]]


### Engineering Problem 2: [[Mechanical Tool Leverage & Torque Analysis]]
[[Mechanical Tool Leverage & Torque Analysis Solution]]
