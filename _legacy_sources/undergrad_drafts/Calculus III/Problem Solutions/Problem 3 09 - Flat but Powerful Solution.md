**Problem:** Given the points $A(1, 2, -1)$, $B(3, -1, 2)$, and $C(0, 1, 1)$, find the equation of the plane containing all 3 points.

**Solution:**
1. Find two vectors in the plane using the given points:
   $$\vec{AB} = \langle 3-1, -1-2, 2-(-1) \rangle = \langle 2, -3, 3 \rangle$$
   $$\vec{AC} = \langle 0-1, 1-2, 1-(-1) \rangle = \langle -1, -1, 2 \rangle$$

2. Find the normal vector $\vec{n}$ by taking the cross product $\vec{AB} \times \vec{AC}$:
   $$\vec{n} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 2 & -3 & 3 \\ -1 & -1 & 2 \end{vmatrix}$$
   $$\vec{n} = \mathbf{i}((-3)(2) - (3)(-1)) - \mathbf{j}((2)(2) - (3)(-1)) + \mathbf{k}((2)(-1) - (-3)(-1))$$
   $$\vec{n} = \mathbf{i}(-6 + 3) - \mathbf{j}(4 + 3) + \mathbf{k}(-2 - 3)$$
   $$\vec{n} = \langle -3, -7, -5 \rangle$$

3. Using point $A(1, 2, -1)$ and the normal vector $\langle -3, -7, -5 \rangle$:
   $$-3(x - 1) - 7(y - 2) - 5(z + 1) = 0$$
   $$-3x + 3 - 7y + 14 - 5z - 5 = 0$$
   $$-3x - 7y - 5z + 12 = 0 \implies 3x + 7y + 5z = 12$$
