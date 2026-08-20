# Solving Right Triangles

### Solving Right Triangles: The 4 Cases

In vector analysis (and Calc 3), we rarely solve "random" triangles. We usually look for components or magnitudes. Since one angle is always fixed at $90^\circ$, you only need **two pieces of information** to solve the triangle.

#### 1. The "Two Sides" Cases
*Use these when you have components and need the resultant vector.*

**A. Two Legs (The "SAS" Case)**
* **Given:** Leg $a$ (horizontal) and Leg $b$ (vertical).
* **Engineering Context:** You have the $x$ and $y$ components of a force; you need the total magnitude and direction.
* **Strategy:**
    * **Find Hypotenuse:** Pythagorean Theorem $$c = \sqrt{a^2 + b^2}$$
    * **Find Angle:** Inverse Tangent $$\theta = \arctan\left(\frac{b}{a}\right)$$

**B. Hypotenuse and One Leg (The "HL" Case)**
* **Given:** Hypotenuse $c$ and Leg $a$.
* **Engineering Context:** You know the total speed of a particle and its horizontal velocity; you need the vertical velocity.
* **Strategy:**
    * **Find Leg:** Rearranged Pythagorean $$b = \sqrt{c^2 - a^2}$$
    * **Find Angle:** Inverse Cosine $$\theta = \arccos\left(\frac{a}{c}\right)$$

---

#### 2. The "Side and Angle" Cases
*Use these for Vector Decomposition (breaking a vector into components).*

**C. Hypotenuse and Acute Angle (The "HA" Case)**
* **Given:** Hypotenuse $c$ and Angle $\theta$.
* **Engineering Context:** **Most Common.** You have a force vector of magnitude $|\mathbf{F}|$ at an angle $\theta$; you need the $\mathbf{i}$ and $\mathbf{j}$ components.
* **Strategy:**
    * **Find Adjacent:** $$a = c \cdot \cos(\theta)$$
    * **Find Opposite:** $$b = c \cdot \sin(\theta)$$

**D. Leg and Acute Angle (The "LA" Case)**
* **Given:** Leg $a$ and Angle $\theta$.
* **Engineering Context:** You know the horizontal distance (run) and the slope angle (grade); you need the elevation change (rise).
* **Strategy:**
    * **Find Opposite:** $$b = a \cdot \tan(\theta)$$
    * **Find Hypotenuse:** $$c = \frac{a}{\cos(\theta)}$$

---

### Summary Table

| Case | Given | Primary Tool for Missing Side | Primary Tool for Missing Angle |
| :--- | :--- | :--- | :--- |
| **Two Legs** | $a, b$ | $a^2+b^2=c^2$ | $\theta = \arctan(b/a)$ |
| **Hyp & Leg** | $c, a$ | $c^2-a^2=b^2$ | $\theta = \arccos(a/c)$ |
| **Hyp & Angle** | $c, \theta$ | $\sin$ and $\cos$ | $90^\circ - \theta$ |
| **Leg & Angle** | $a, \theta$ | $\tan$ (or $\sin/\cos$) | $90^\circ - \theta$ |