# Skill 3: Vector Arithmetic

## Essential Notes & Concepts

Vector arithmetic allows us to combine multiple vectors or scale them to find a single, resultant effect. In engineering, this is how we calculate the total impact of multiple simultaneous forces acting on a single object.

### Vector Addition

To add two vectors together, you add their corresponding spatial components. If $\vec{P} = \langle P_x, P_y, P_z \rangle$ and $\vec{Q} = \langle Q_x, Q_y, Q_z \rangle$, then the resultant vector is:

$$\vec{P} + \vec{Q} = \langle P_x + Q_x, P_y + Q_y, P_z + Q_z \rangle$$

- **Graphical Interpretation:** Vector addition follows the **tip-to-tail method**. If you place the tail of the second vector at the tip (arrowhead) of the first vector, the combined resultant vector draws a straight line from the absolute start to the final tip.
    

### Vector-Scalar Multiplication

Multiplying a vector by a real number (a scalar $a$) scales its magnitude without changing its fundamental directional line. You multiply every component by the scalar:

$$a\vec{P} = \langle aP_x, aP_y, aP_z \rangle$$

- If $a > 1$, the vector gets longer.
    
- If $0 < a < 1$, the vector gets shorter.
    
- If $a$ is negative, the vector points in the exact opposite direction.
    

## Sample Problems (Guided Notes Practice)

### Demo Problem S3.1

**Problem:** Given the vectors $\vec{v} = 3\hat{i} + 4\hat{j}$ and $\vec{u} = 2\hat{i} - 2\hat{j}$:

1. Add $\vec{v}$ and $\vec{u}$ and show it graphically.
    
2. Find a new scaled vector $\vec{w} = 3(\vec{u} + \vec{v})$.
    
3. Find the unit vector $\hat{U}_v$.
    

**Solution:**

1. **Vector Addition:** Combine the components directly:
    
    $$\vec{v} + \vec{u} = (3 + 2)\hat{i} + (4 - 2)\hat{j} = 5\hat{i} + 2\hat{j} \quad \text{or} \quad \langle 5, 2 \rangle$$
    
    _Graphics Strategy:_ Draw $\vec{v}$ from $(0,0)$ to $(3,4)$. From $(3,4)$, draw $\vec{u}$ moving 2 units right and 2 units down to land precisely at $(5,2)$.
    
2. **Scalar Multiplication:** Take the resultant vector from step 1 and multiply it by 3:
    
    $$\vec{w} = 3(5\hat{i} + 2\hat{j}) = 15\hat{i} + 6\hat{j}$$
    
3. **Unit Vector $\hat{U}_v$:** Find the magnitude of $\vec{v}$ first, then divide:
    
    $$|\vec{v}| = \sqrt{3^2 + 4^2} = \sqrt{25} = 5$$
    
    $$\hat{U}_v = \frac{3}{5}\hat{i} + \frac{4}{5}\hat{j} = 0.6\hat{i} + 0.8\hat{j}$$
    

## Real-Life Engineering Application Problems

### Application Problem 1: [[Marine Engineering & Navigation]]
[[Marine Engineering & Navigation Solution]]


### Application Problem 2: [[Structural Engineering (Wind and Crane Load)]]
[[Structural Engineering (Wind and Crane Load) Solution]]
