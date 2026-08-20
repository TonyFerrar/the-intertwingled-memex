### **Solution to Problem 7**

Here is the step-by-step solution to find the angle between two vectors using the geometric definition of the dot product.

#### **Formula**

The geometric definition of the dot product states:

$$\vec{u} \cdot \vec{v} = |\vec{u}||\vec{v}|\cos\theta$$

Rearranging this formula allows us to solve directly for the angle $\theta$:

$$\cos\theta = \frac{\vec{u} \cdot \vec{v}}{|\vec{u}||\vec{v}|} \implies \theta = \cos^{-1}\left(\frac{\vec{u} \cdot \vec{v}}{|\vec{u}||\vec{v}|}\right)$$

#### **Given Vectors**

$$\vec{u} = \langle 1, 1 \rangle$$

$$\vec{v} = \langle 0, 1 \rangle$$

#### **Step-by-Step Calculation**

1. Calculate the algebraic dot product ($\vec{u} \cdot \vec{v}$):

$$\vec{u} \cdot \vec{v} = (1)(0) + (1)(1)$$

$$\vec{u} \cdot \vec{v} = 0 + 1 = 1$$

2. Calculate the magnitude of vector $\vec{u}$ ($|\vec{u}|$):

$$|\vec{u}| = \sqrt{1^2 + 1^2} = \sqrt{1 + 1} = \sqrt{2}$$

3. Calculate the magnitude of vector $\vec{v}$ ($|\vec{v}|$):

$$|\vec{v}| = \sqrt{0^2 + 1^2} = \sqrt{0 + 1} = \sqrt{1} = 1$$

4. Substitute these values back into the rearranged formula:

$$\cos\theta = \frac{1}{\sqrt{2} \cdot 1} = \frac{1}{\sqrt{2}}$$

5. Take the inverse cosine ($\cos^{-1}$) to find $\theta$:

$$\theta = \cos^{-1}\left(\frac{1}{\sqrt{2}}\right)$$

Since $\frac{1}{\sqrt{2}}$ is equivalent to $\frac{\sqrt{2}}{2}$, this is a standard value on the unit circle:

$$\theta = 45^\circ$$

#### **Final Answer**

The angle $\theta$ between the two vectors is **$45^\circ$** (or **$\frac{\pi}{4}$ radians**).