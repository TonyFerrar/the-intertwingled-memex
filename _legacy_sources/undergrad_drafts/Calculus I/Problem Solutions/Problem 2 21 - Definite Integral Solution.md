### Core Concepts

* **Net Area via Geometry:** The net area is calculated by taking the area of regions above the $x$-axis (positive) and subtracting the area of regions below the $x$-axis (negative). 
    $$\text{Net Area} = \text{Area}_{\text{above}} - \text{Area}_{\text{below}}$$
* **Fundamental Theorem of Calculus (FTOC):** To evaluate a definite integral algebraically, find the antiderivative $F(x)$ of the function and compute $F(b) - F(a)$:
    $$\int_{a}^{b} f(x) \, dx = F(b) - F(a)$$

---

### Step-by-Step Solutions

#### (a) Using geometry, compute the net area between the function $f(x)=2x-8$ and the $x$-axis on the interval $[2, 7]$.

The graph forms two distinct right-angled triangles with the $x$-axis over the interval $[2, 7]$:

1.  **Blue Triangle (Below the $x$-axis, from $x = 2$ to $x = 4$):**
    * **Base ($b_1$):** $4 - 2 = 2$
    * **Height ($h_1$):** Find the $y$-value at $x = 2$: $y = 2(2) - 8 = -4$. The height (length) is $4$.
    * **Area ($\text{Area}_{\text{below}}$):** $$\text{Area} = \frac{1}{2} \cdot \text{base} \cdot \text{height} = \frac{1}{2} \cdot 2 \cdot 4 = 4$$

2.  **Red Triangle (Above the $x$-axis, from $x = 4$ to $x = 7$):**
    * **Base ($b_2$):** $7 - 4 = 3$
    * **Height ($h_2$):** Find the $y$-value at $x = 7$: $y = 2(7) - 8 = 6$. The height is $6$.
    * **Area ($\text{Area}_{\text{above}}$):** $$\text{Area} = \frac{1}{2} \cdot \text{base} \cdot \text{height} = \frac{1}{2} \cdot 3 \cdot 6 = 9$$

3.  **Calculate Net Area:**
    Since the blue triangle is below the axis, it contributes negatively:
    $$\text{Net Area} = \text{Area}_{\text{above}} - \text{Area}_{\text{below}} = 9 - 4 = 5$$

* **Answer:** The net area is **$5$**.

---

#### (b) Confirm your previous answer by evaluating the definite integral $\int_{2}^{7}(2x-8)dx$.

* **Step 1:** Find the antiderivative of the integrand $f(x) = 2x - 8$.
    $$\int (2x - 8) \, dx = x^2 - 8x$$

* **Step 2:** Apply the Fundamental Theorem of Calculus limits from $2$ to $7$.
    $$\int_{2}^{7}(2x-8)dx = \left[ x^2 - 8x \right]_{2}^{7}$$

* **Step 3:** Evaluate at the upper limit ($x = 7$).
    $$F(7) = (7)^2 - 8(7) = 49 - 56 = -7$$

* **Step 4:** Evaluate at the lower limit ($x = 2$).
    $$F(2) = (2)^2 - 8(2) = 4 - 16 = -12$$

* **Step 5:** Subtract the lower limit value from the upper limit value.
    $$\int_{2}^{7}(2x-8)dx = F(7) - F(2) = -7 - (-12) = -7 + 12 = 5$$

* **Answer:** $$\int_{2}^{7}(2x-8)dx = 5$$
    *(This perfectly matches and confirms our geometric calculation from part a).*