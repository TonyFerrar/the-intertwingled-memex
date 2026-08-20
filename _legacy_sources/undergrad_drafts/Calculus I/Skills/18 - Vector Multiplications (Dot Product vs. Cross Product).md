# Skill 3 – Vector Multiplications (Dot Product vs. Cross Product)

Vector multiplication comes in two distinct types: the **Dot Product** (which yields a scalar value) and the **Cross Product** (which yields a completely new vector). Understanding when and why to use each is vital for analyzing geometric systems and engineering mechanics.

## Core Concepts & Lecture Notes

### 1. The Dot Product (Scalar Product)

The dot product multiplies the corresponding components of two vectors and sums them up. The final output is **always a single number (scalar)**, never a vector.

For 3D vectors $\vec{u} = \langle u_x, u_y, u_z \rangle$ and $\vec{v} = \langle v_x, v_y, v_z \rangle$:

$$\vec{u} \cdot \vec{v} = u_x v_x + u_y v_y + u_z v_z$$

#### Geometric Formula & Angle Extraction

The dot product is also geometrically defined by the magnitudes of the vectors and the angle $\theta$ between them:

$$\vec{u} \cdot \vec{v} = |\vec{u}||\vec{v}|\cos\theta$$

By isolating $\theta$, we can calculate the exact angle separating any two pathways in space:

$$\theta = \cos^{-1}\left(\frac{\vec{u} \cdot \vec{v}}{|\vec{u}||\vec{v}|}\right)$$

- If $\vec{u} \cdot \vec{v} = 0$, then $\cos\theta = 0$, meaning the two vectors are **orthogonal** ($90^\circ$ or perpendicular, denoted as $\perp$).
    

### 2. The Cross Product (Vector Product)

The cross product is an operation performed exclusively on 3D vectors. Unlike the dot product, its output is a **completely new vector** that is perfectly perpendicular ($\perp$) to the entire plane containing the original two vectors.

Mathematically, it is evaluated as the determinant of a $3 \times 3$ matrix using the standard unit vectors $\hat{i}$, $\hat{j}$, and $\hat{k}$ in the top row:

$$\vec{u} \times \vec{v} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ u_x & u_y & u_z \\ v_x & v_y & v_z \end{vmatrix}$$

Expanding this determinant gives the component formula:

$$\vec{u} \times \vec{v} = (u_y v_z - u_z v_y)\hat{i} - (u_x v_z - u_z v_x)\hat{j} + (u_x v_y - u_y v_x)\hat{k}$$

## Pure Mathematical Sample Problems

### Sample Problem 1: Calculating the Angle Between Two Vectors

**Problem:** Find the angle $\theta$ between the vectors $\vec{u} = \langle 3, 4 \rangle$ and $\vec{v} = \langle 5, 12 \rangle$.

**Solution:**

1. **Find the dot product:** $\vec{u} \cdot \vec{v} = (3)(5) + (4)(12) = 15 + 48 = 63$.
    
2. **Find the magnitudes:** * $|\vec{u}| = \sqrt{3^2 + 4^2} = \sqrt{25} = 5$
    
    - $|\vec{v}| = \sqrt{5^2 + 12^2} = \sqrt{169} = 13$
        
3. **Apply the angle formula:**
    
    $$\cos\theta = \frac{63}{(5)(13)} = \frac{63}{65}$$
    
    $$\theta = \cos^{-1}\left(\frac{63}{65}\right) \approx 14.25^\circ$$
    

### Sample Problem 2: Finding a Perpendicular Vector via Cross Product

**Problem:** Find a vector that is completely perpendicular to both $\vec{u} = \langle 2, -1, 3 \rangle$ and $\vec{v} = \langle 1, 3, -2 \rangle$.

**Solution:**

1. Set up the matrix determinant:
    
    $$\vec{u} \times \vec{v} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 2 & -1 & 3 \\ 1 & 3 & -2 \end{vmatrix}$$
    
2. Expand the $2 \times 2$ determinants:
    
    $$\vec{u} \times \vec{v} = \hat{i}((-1)(-2) - (3)(3)) - \hat{j}((2)(-2) - (3)(1)) + \hat{k}((2)(3) - (-1)(1))$$
    
    $$\vec{u} \times \vec{v} = \hat{i}(2 - 9) - \hat{j}(-4 - 3) + \hat{k}(6 + 1)$$
    
    $$\vec{u} \times \vec{v} = -7\hat{i} - (-7)\hat{j} + 7\hat{k} = \langle -7, 7, 7 \rangle$$
    

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Mechanical & Electrical Engineering (Solar Panel Efficiency Tracking)]]
[[Mechanical & Electrical Engineering (Solar Panel Efficiency Tracking) Solution]]


### Engineering Problem 2: [[Biomedical Engineering (Artificial Knee Joint Torque Analysis)]]
[[Biomedical Engineering (Artificial Knee Joint Torque Analysis) Solution]]
