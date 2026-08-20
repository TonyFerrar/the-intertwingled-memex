Here is the step-by-step solution to the **Skill 3 Demo** problem shown in the image.

### **Given**

$$\vec{r}(t) = -7t^8\hat{i} + 7t^3\hat{j} \quad \text{at } t = 1$$

To decompose the acceleration vector into its tangential component $a_T$ and normal component $a_N$, we use the following formulas from your learning activity document:

$$a_T = \frac{\vec{v} \cdot \vec{a}}{||\vec{v}||}$$

$$a_N = \frac{||\vec{v} \times \vec{a}||}{||\vec{v}||}$$

### **Step 1: Find the Velocity Vector $\vec{v}(t)$ and evaluate at $t = 1$**

Take the first derivative of the position vector $\vec{r}(t)$:

$$\vec{v}(t) = \vec{r}'(t) = \frac{d}{dt}(-7t^8)\hat{i} + \frac{d}{dt}(7t^3)\hat{j} = -56t^7\hat{i} + 21t^2\hat{j}$$

Evaluating at $t = 1$:

$$\vec{v}(1) = -56(1)^7\hat{i} + 21(1)^2\hat{j} = \langle -56, 21 \rangle$$

### **Step 2: Find the Speed $||\vec{v}(1)||$**

Compute the magnitude of the velocity vector at $t = 1$:

$$||\vec{v}(1)|| = \sqrt{(-56)^2 + (21)^2} = \sqrt{3136 + 441} = \sqrt{3577}$$

### **Step 3: Find the Acceleration Vector $\vec{a}(t)$ and evaluate at $t = 1$**

Take the derivative of the velocity vector $\vec{v}(t)$:

$$\vec{a}(t) = \vec{v}'(t) = \frac{d}{dt}(-56t^7)\hat{i} + \frac{d}{dt}(21t^2)\hat{j} = -392t^6\hat{i} + 42t\hat{j}$$

Evaluating at $t = 1$:

$$\vec{a}(1) = -392(1)^6\hat{i} + 42(1)\hat{j} = \langle -392, 42 \rangle$$

### **Step 4: Calculate the Tangential Component of Acceleration $a_T$**

Compute the dot product $\vec{v} \cdot \vec{a}$ at $t = 1$:

$$\vec{v}(1) \cdot \vec{a}(1) = (-56)(-392) + (21)(42)$$

$$\vec{v}(1) \cdot \vec{a}(1) = 21952 + 882 = 22834$$

Now divide by the speed $||\vec{v}(1)||$:

$$a_T = \frac{22834}{\sqrt{3577}}$$

### **Step 5: Calculate the Normal Component of Acceleration $a_N$**

Since $\vec{v}$ and $\vec{a}$ are 2D vectors lying in the $xy$-plane, we can treat them as 3D vectors with a $z$-component of $0$ to find their cross product:

$$\vec{v}(1) \times \vec{a}(1) = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ -56 & 21 & 0 \\ -392 & 42 & 0 \end{vmatrix}$$

$$\vec{v}(1) \times \vec{a}(1) = \hat{k} \Big( (-56)(42) - (21)(-392) \Big)$$

$$\vec{v}(1) \times \vec{a}(1) = \hat{k} (-2352 + 8232) = 5880\hat{k}$$

Find the magnitude of this cross product vector:

$$||\vec{v}(1) \times \vec{a}(1)|| = 5880$$

Now divide by the speed $||\vec{v}(1)||$:

$$a_N = \frac{5880}{\sqrt{3577}}$$

### **Answer**

The decomposition of the acceleration vector at $t = 1$ yields:

- **Tangential component:** $a_T = \frac{22834}{\sqrt{3577}}$ (approx. **$381.82$**)
    
- **Normal component:** $a_N = \frac{5880}{\sqrt{3577}}$ (approx. **$98.32$**)