# Skill 1: Total Area vs. Net Area & Geometric Interpretation of Definite Integrals

## 📘 Concept Explanations & Notes

When we study integration, we are ultimately looking at the accumulation of quantities. Graphically, this is represented as the area between a function's curve ($f(x)$) and the horizontal $x$-axis over a specific boundary interval $[a, b]$. 

However, a critical conceptual leap in calculus is realizing that area can be **signed** depending on its position relative to the $x$-axis:
1. **Regions above the $x$-axis** ($f(x) > 0$) accumulate **positive** value.
2. **Regions below the $x$-axis** ($f(x) < 0$) accumulate **negative** value.

### Total Area vs. Net Area
* **Net Area:** This is the cumulative sum of all regions where below-axis areas cancel out above-axis areas. Mathematically, this is precisely what a standard **definite integral** calculates:
  $$\text{Net Area} = \int_{a}^{b} f(x) \, dx = \text{Area}_{\text{above}} - \text{Area}_{\text{below}}$$
* **Total Area:** This is the physical geometric space enclosed between the function and the $x$-axis, treating all regions as strictly positive regardless of whether they are above or below the axis:
  $$\text{Total Area} = \int_{a}^{b} |f(x)| \, dx = \text{Area}_{\text{above}} + \text{Area}_{\text{below}}$$



---

## ✏️ Sample Problems (From Guided Notes)

### Example 1: Pure Geometric Area
**Problem:** Find the area of the region between the curve of $y = 2$ and the $x$-axis from $x = 1$ to $x = 4$.

**Solution:**
1. Plotting the function $y = 2$ on the interval $[1, 4]$ creates a perfect rectangle.
2. The width (length along the $x$-axis) is: $b - a = 4 - 1 = 3$.
3. The height of the rectangle is determined by the constant function value: $y = 2$.
4. Apply the geometric formula for a rectangle:
   $$\text{Area} = \text{width} \times \text{height} = 3 \times 2 = 6$$

---

### Example 2: Net Area and Sign Cancellation
**Problem:** Find the net area of the region between the curve $y = x - 1$ and the $x$-axis on the interval $[0, 2]$.

**Solution:**
1. Looking at the graph of $y = x - 1$, the line crosses the $x$-axis at $x = 1$. This splits our interval into two triangles:
   * **Triangle 1 ($A_1$):** Below the $x$-axis on $[0, 1]$.
   * **Triangle 2 ($A_2$):** Above the $x$-axis on $[1, 2]$.
2. Compute the geometric area of both triangles ($\text{Area} = \frac{1}{2} \cdot \text{base} \cdot \text{height}$):
   * For $A_1$ (base = $1$, height = $1$): $A_1 = \frac{1}{2}(1)(1) = \frac{1}{2}$
   * For $A_2$ (base = $1$, height = $1$): $A_2 = \frac{1}{2}(1)(1) = \frac{1}{2}$
3. Since $A_1$ lies *below* the axis, it contributes negatively to the net area:
   $$\text{Net Area} = A_2 - A_1 = \frac{1}{2} - \frac{1}{2} = 0$$

---

### Example 3: Definite Integral Properties from Graphs
**Problem:** Imagine a continuous function $f(x)$ defined over intervals bounded by points $a$, $b$, $c$, and $d$. Let the absolute geometric areas of the regions between the curve and the $x$-axis be known. Set up expressions for the following integrals based on regions above and below the axis:
* $\int_{a}^{b} f(x) \, dx$ (Region is completely above the axis)
* $\int_{b}^{c} f(x) \, dx$ (Region is completely below the axis)
* $\int_{a}^{c} f(x) \, dx$ (Combined span)

**Solution:**
* Since the region on $[a, b]$ is entirely above the axis, its integral equals its positive geometric area: 
  $$\int_{a}^{b} f(x) \, dx = \text{Area}_{[a,b]}$$
* Since the region on $[b, c]$ is entirely below the axis, its integral takes on a negative sign: 
  $$\int_{b}^{c} f(x) \, dx = -\text{Area}_{[b,c]}$$
* By the additivity property of definite integrals, we sum their signed values: 
  $$\int_{a}^{c} f(x) \, dx = \int_{a}^{b} f(x) \, dx + \int_{b}^{c} f(x) \, dx = \text{Area}_{[a,b]} - \text{Area}_{[b,c]}$$

---

## 🏗️ Real-Life Engineering Application Problems

### Engineering Problem 1: [[Structural Beam Internal Shear Load]]
[[Structural Beam Internal Shear Load Solution]]

---

### Engineering Problem 2: [[Water Treatment Plant Flow Balancing]]
[[Water Treatment Plant Flow Balancing Solution]]
