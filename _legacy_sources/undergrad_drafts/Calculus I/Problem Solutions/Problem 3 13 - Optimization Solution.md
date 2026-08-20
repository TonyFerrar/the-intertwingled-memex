# Optimization Problem Solution

### Problem Statement
A box with an open top is to be constructed from a 15 inch by 24 inch piece of cardboard by cutting squares of equal sides length from the corners and folding up the sides. Find the dimensions of the box of largest volume that can be constructed.

---

### Step 1: Define Variables and Set Up the Equation
Let $x$ be the side length of the square cut out from each corner (in inches). 

When the four corners are removed and the flaps are folded up, the resulting open-top box will have the following dimensions:
* **Height ($h$):** $x$
* **Width ($w$):** $15 - 2x$
* **Length ($l$):** $24 - 2x$

#### Objective Equation (Volume to maximize)
The formula for the volume ($V$) of a rectangular box is:
$$V = l \cdot w \cdot h$$

Substitute the dimensions in terms of $x$:
$$V(x) = (24 - 2x)(15 - 2x)x$$

Expand the polynomial expression to make differentiation easier:
$$V(x) = (360 - 48x - 30x + 4x^2)x$$
$$V(x) = (360 - 78x + 4x^2)x$$
$$V(x) = 4x^3 - 78x^2 + 360x$$

#### Physical Domain Constraints
Since lengths must be positive:
* $x > 0$
* $15 - 2x > 0 \implies x < 7.5$

Thus, our feasible interval is $0 < x < 7.5$.

---

### Step 2: Find the Critical Points
To maximize the volume, take the first derivative of $V(x)$ with respect to $x$ and set it equal to zero:
$$V'(x) = 12x^2 - 156x + 360$$

Set $V'(x) = 0$ and simplify by dividing the entire equation by 12:
$$12(x^2 - 13x + 30) = 0$$
$$x^2 - 13x + 30 = 0$$

Factor the quadratic equation:
$$(x - 10)(x - 3) = 0$$

This gives two critical points:
* $x = 10$
* $x = 3$

Since $x = 10$ lies outside our physical domain interval ($0 < x < 7.5$), we reject it. The only viable critical point is **$x = 3$ inches**.

---

### Step 3: Verify the Maximum
Using the Second Derivative Test to ensure $x = 3$ yields a maximum volume:
$$V''(x) = 24x - 156$$

Plug in $x = 3$:
$$V''(3) = 24(3) - 156 = 72 - 156 = -84$$

Since $V''(3) = -84 < 0$, the function is concave down at this point, confirming that $x = 3$ produces an **absolute maximum** volume.

---

### Step 4: Calculate the Final Dimensions
Substitute $x = 3$ back into the formulas for the box's dimensions:
* **Height:** $x = 3\text{ inches}$
* **Width:** $15 - 2(3) = 15 - 6 = 9\text{ inches}$
* **Length:** $24 - 2(3) = 24 - 6 = 18\text{ inches}$

---

### Final Answer
The dimensions of the box of largest volume are **18 inches long, 9 inches wide, and 3 inches high**. 
*(This yields a maximum possible volume of $18 \times 9 \times 3 = 486\text{ cubic inches}$.)*