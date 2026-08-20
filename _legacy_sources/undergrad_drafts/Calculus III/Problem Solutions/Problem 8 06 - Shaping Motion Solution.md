### **Given**

$$\vec{r}(t) = -t^5\hat{i} - 7t^2\hat{j} \quad \text{at } t = 1$$

To decompose the acceleration vector into its tangential component $a_T$ and normal component $a_N$, we use the standard formulas:

$$a_T = \frac{\vec{v} \cdot \vec{a}}{||\vec{v}||}$$

$$a_N = \frac{||\vec{v} \times \vec{a}||}{||\vec{v}||}$$

### **Step 1: Find the Velocity Vector $\vec{v}(t)$ and evaluate at $t = 1$**

Take the first derivative of the position vector $\vec{r}(t)$:

$$\vec{v}(t) = \vec{r}'(t) = \frac{d}{dt}(-t^5)\hat{i} + \frac{d}{dt}(-7t^2)\hat{j} = -5t^4\hat{i} - 14t\hat{j}$$

Evaluating at $t = 1$:

$$\vec{v}(1) = -5(1)^4\hat{i} - 14(1)\hat{j} = \langle -5, -14 \rangle$$

### **Step 2: Find the Speed $||\vec{v}(1)||$**

Compute the magnitude of the velocity vector at $t = 1$:

$$||\vec{v}(1)|| = \sqrt{(-5)^2 + (-14)^2} = \sqrt{25 + 196} = \sqrt{221}$$

### **Step 3: Find the Acceleration Vector $\vec{a}(t)$ and evaluate at $t = 1$**

Take the derivative of the velocity vector $\vec{v}(t)$:

$$\vec{a}(t) = \vec{v}'(t) = \frac{d}{dt}(-5t^4)\hat{i} + \frac{d}{dt}(-14t)\hat{j} = -20t^3\hat{i} - 14\hat{j}$$

Evaluating at $t = 1$:

$$\vec{a}(1) = -20(1)^3\hat{i} - 14\hat{j} = \langle -20, -14 \rangle$$

### **Step 4: Calculate the Tangential Component of Acceleration $a_T$**

Compute the dot product $\vec{v} \cdot \vec{a}$ at $t = 1$:

$$\vec{v}(1) \cdot \vec{a}(1) = (-5)(-20) + (-14)(-14)$$

$$\vec{v}(1) \cdot \vec{a}(1) = 100 + 196 = 296$$

Now divide by the speed $||\vec{v}(1)||$:

$$a_T = \frac{296}{\sqrt{221}}$$

### **Step 5: Calculate the Normal Component of Acceleration $a_N$**

Since $\vec{v}$ and $\vec{a}$ are 2D vectors lying in the $xy$-plane, we append a $z$-component of $0$ to compute their cross product:

$$\vec{v}(1) \times \vec{a}(1) = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ -5 & -14 & 0 \\ -20 & -14 & 0 \end{vmatrix}$$

$$\vec{v}(1) \times \vec{a}(1) = \hat{k} \Big( (-5)(-14) - (-14)(-20) \Big)$$

$$\vec{v}(1) \times \vec{a}(1) = \hat{k} (70 - 280) = -210\hat{k}$$

Find the magnitude of this cross product vector:

$$||\vec{v}(1) \times \vec{a}(1)|| = |-210| = 210$$

Now divide by the speed $||\vec{v}(1)||$:

$$a_N = \frac{210}{\sqrt{221}}$$

### **Answer**

The acceleration vector components at $t = 1$ are:

- **Tangential component:** $a_T = \frac{296}{\sqrt{221}}$ (approx. **$19.91$**)
    
- **Normal component:** $a_N = \frac{210}{\sqrt{221}}$ (approx. **$14.13$**)