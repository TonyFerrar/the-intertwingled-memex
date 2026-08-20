# Skill 1: Mathematical Modeling & Variable Reduction in Optimization

Optimization is the mathematical process of finding the maximum or minimum value of a specific quantity. In real-world scenarios, this requires translating a descriptive narrative into precise mathematical expressions. The core challenge of this skill is taking an objective function that initially contains multiple variables and using a physical constraint to reduce it down to a single variable so that it can be differentiated.

---

## 📘 Key Concepts & Workflow

### 1. The Objective Function

The objective function represents the primary quantity you want to maximize (e.g., area, volume, efficiency) or minimize (e.g., cost, weight, material waste). It is derived directly from the primary goal of the problem.

* 
*Example:* If you want to maximize the area of a rectangle, your initial objective function is $A = xy$.



### 2. The Constraint Equation

The constraint equation represents the real-world limitation, boundary, or fixed resource available. It restricts how large or small your variables can be.

* *Example:* If you only have 100 meters of total perimeter material, your constraint is $2x + 2y = 100$.

### 3. Variable Reduction (Substitution)

Standard single-variable calculus techniques ($\frac{dy}{dx}$) cannot directly differentiate a function containing multiple independent variables. To bypass this, you must:

1. Solve the **constraint equation** for one variable (e.g., $y = 50 - x$).
2. Substitute that expression into the **objective function**.
3. Simplify to obtain a single-variable function (e.g., $A(x) = x(50 - x) = 50x - x^2$) ready for optimization.

---

## 📝 Sample Problems (From Guided Notes)

### Sample Problem 1: Multi-Pen Optimization

**Problem Statement:** A farmer wants to build three identical and adjacent rectangular pens against a barn, but only has 400 feet of fencing material to use. What dimensions will maximize the total enclosed area?

```
   =================== BARN ===================
     |             |             |             |
     |   Pen 1     |   Pen 2     |   Pen 3     |  x
     |             |             |             |
     -------------------------------------------
                        y

```

#### Solution:

1. 
**Define Variables:** * Let $x = \text{length of each dividing fence piece (perpendicular to the barn)}$.


* Let $y = \text{overall width of the combined pens (parallel to the barn)}$.


* Let $A = \text{total area}$.




2. 
**Objective Function:** We want to maximize total area:



$$A = xy$$





3. 
**Constraint Equation:** The 400 feet of fencing must cover 4 vertical segments of length $x$ and 1 long horizontal segment of length $y$:



$$4x + y = 400$$





4. 
**Variable Reduction:** Solve the constraint for $y$:



$$y = 400 - 4x$$


Substitute into the objective function:



$$A(x) = x(400 - 4x) = 400x - 4x^2$$





5. 
**Optimize:** Find the critical points by taking the derivative and setting it to zero:



$$A'(x) = 400 - 8x$$





$$400 - 8x = 0 \implies 8x = 400 \implies x = 50\text{ feet}$$





6. 
**Find remaining dimensions:** 
$$y = 400 - 4(50) = 200\text{ feet}$$






**Conclusion:** The maximum area is achieved when each dividing fence is 50 feet long and the overall width parallel to the barn is 200 feet.

---

### Sample Problem 2: Maximizing Rectangular Area

**Problem Statement:** Determine the side lengths to maximize the area of a rectangle with a fixed perimeter of 100 meters.

#### Solution:

1. **Define Variables:** Let $x$ be the length and $y$ be the width of the rectangle.
2. **Objective Function:** Maximize Area ($A$):

$$A = xy$$


3. **Constraint Equation:** Fixed perimeter of 100 meters:

$$2x + 2y = 100 \implies x + y = 50$$


4. **Variable Reduction:** Isolate $y$:

$$y = 50 - x$$



Substitute into the objective function:

$$A(x) = x(50 - x) = 50x - x^2$$


5. **Optimize:** Take the derivative and set to zero:

$$A'(x) = 50 - 2x$$


$$50 - 2x = 0 \implies 2x = 50 \implies x = 25\text{ meters}$$


6. **Find remaining dimensions:** 
$$y = 50 - 25 = 25\text{ meters}$$



**Conclusion:** The dimensions that maximize the area are 25 meters by 25 meters (forming a perfect square).

---

## 🛠️ Real-Life Engineering Application Problems

### Engineering Problem 1: [[Civil Engineering Beam Structural Weight Minimization]]
[[Civil Engineering Beam Structural Weight Minimization Solution]]
**Problem Statement:** A structural engineer must design a solid rectangular support beam out of carbon steel. The beam's cross-sectional area must be exactly $96\text{ inches}^2$ to guarantee it meets architectural requirements. However, the cost and weight of the structural assembly depend directly on its perimeter. To minimize steel manufacturing costs and keep the total dead weight of the structure as low as possible, find the dimensions ($x$ and $y$) of the beam's cross-section that will minimize its total perimeter.

#### Solution:

1. **Define Variables:** * Let $x = \text{width of the cross-section (in)}$
* Let $y = \text{height of the cross-section (in)}$
* Let $P = \text{perimeter to minimize (in)}$


2. **Objective Function (Minimize):**

$$P = 2x + 2y$$


3. **Constraint Equation:** Fixed cross-sectional area:

$$xy = 96 \implies y = \frac{96}{x}$$


4. **Variable Reduction:** Substitute $y$ into the perimeter equation:

$$P(x) = 2x + 2\left(\frac{96}{x}\right) = 2x + 192x^{-1}$$


5. **Optimize:** Take the derivative with respect to $x$ and set to zero:

$$P'(x) = 2 - 192x^{-2} = 2 - \frac{192}{x^2}$$


$$2 - \frac{192}{x^2} = 0 \implies 2 = \frac{192}{x^2} \implies 2x^2 = 192$$


$$x^2 = 96 \implies x = \sqrt{96} \approx 9.8\text{ inches}$$


6. **Find remaining dimension:** 
$$y = \frac{96}{\sqrt{96}} = \sqrt{96} \approx 9.8\text{ inches}$$



#### Meaning of the Answer & Real-Life Application:

* **The Meaning:** The absolute minimum perimeter is achieved when the cross-section is a perfect square ($\approx 9.8 \times 9.8\text{ inches}$).
* **Real-Life Application:** In structural steel fabrication, minimizing the perimeter of a fixed cross-sectional area directly minimizes the total surface area of the steel component. This reduces the dead load (weight) of the beam, allowing structural configurations to handle higher external payloads without bowing or collapsing under their own weight. Furthermore, a minimized perimeter means less surface area requiring anti-corrosive coatings or fireproof paints, significantly dropping total material and maintenance costs for large-scale civil infrastructures like high-rises or bridges.

---

### Engineering Problem 2: [[Logistics & Materials Engineering Container Material Reduction]]
[[Logistics & Materials Engineering Container Material Reduction Solution]]
**Problem Statement:** A logistics company needs to manufacture a line of heavy-duty rectangular shipping crates to transport liquid components. The design specifications demand that each crate hold a fixed volume of $36\text{ m}^3$. To keep manufacturing costs predictable, the layout requires the length of the crate's base to be exactly twice its width. Find the dimensions (width $w$, length $l$, and height $h$) that will minimize the total surface area of the material needed to construct the closed box.

#### Solution:

1. **Define Variables:**
* Let $w = \text{width of the base (m)}$
* Let $l = 2w = \text{length of the base (m)}$
* Let $h = \text{height of the crate (m)}$
* Let $S = \text{surface area to minimize (m}^2)$


2. **Objective Function (Minimize Surface Area):** A closed rectangular box has a surface area equal to the sum of its top, bottom, and four side panels:

$$S = 2(lw) + 2(wh) + 2(lh)$$



Substitute $l = 2w$:

$$S = 2(2w \cdot w) + 2(wh) + 2(2w \cdot h) = 4w^2 + 2wh + 4wh$$


$$S = 4w^2 + 6wh$$


3. **Constraint Equation:** Fixed volume of $36\text{ m}^3$:

$$V = l \cdot w \cdot h = (2w)(w)(h) = 2w^2h = 36$$


4. **Variable Reduction:** Isolate $h$ from the constraint:

$$h = \frac{36}{2w^2} = \frac{18}{w^2}$$



Substitute $h$ into the surface area equation:

$$S(w) = 4w^2 + 6w\left(\frac{18}{w^2}\right) = 4w^2 + \frac{108}{w} = 4w^2 + 108w^{-1}$$


5. **Optimize:** Take the derivative and set to zero:

$$S'(w) = 8w - 108w^{-2} = 8w - \frac{108}{w^2}$$


$$8w - \frac{108}{w^2} = 0 \implies 8w = \frac{108}{w^2} \implies 8w^3 = 108$$


$$w^3 = 13.5 \implies w = \sqrt[3]{13.5} \approx 2.38\text{ meters}$$


6. **Find remaining dimensions:**
* **Width ($w$):** $\approx 2.38\text{ m}$
* **Length ($l = 2w$):** $2(2.38) \approx 4.76\text{ m}$
* **Height ($h = \frac{18}{w^2}$):** $\frac{18}{(2.38)^2} \approx 3.18\text{ m}$



#### Meaning of the Answer & Real-Life Application:

* **The Meaning:** The mathematically ideal crate size to hold the required fluid volume with the least amount of container material is roughly $2.38\text{ m}$ wide, $4.76\text{ m}$ long, and $3.18\text{ m}$ tall.
* **Real-Life Application:** In industrial global logistics, packaging configurations are scaled to millions of individual shipping items. By using variable reduction to mathematically minimize surface area, engineers can significantly reduce the amount of structural material (such as corrugated plastic, sheet aluminum, or reinforced wood composite) required to hold the exact same volume of cargo. A slight optimization change that saves a fraction of a square meter of material per crate can compound into millions of dollars in raw material savings annually, while simultaneously shrinking the physical footprint of industrial waste.