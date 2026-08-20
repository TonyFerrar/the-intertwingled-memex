An environmental engineer is constructing a long open-top rectangular drainage channel to bypass storm runoff safely through an urban area. To accommodate the local water table, the channel's cross-sectional fluid flow area must be kept exactly at $A = xy = 9\text{ m}^2$.

The concrete construction cost is directly proportional to the length of the channel's wetted perimeter ($P$). Because it is an open-top channel, the perimeter needing concrete lining along the cross-section is given by:

$$P(x, y) = x + 2y$$

where $x$ is the width of the channel base and $y$ is the depth of the vertical walls. Use Lagrange multipliers to model and solve for the dimensions $(x, y)$ that minimize construction costs.

#### Solution:

**Step 1: Formulate the mathematical model.**

- **Objective Function to minimize (Perimeter):** $P(x, y) = x + 2y$
    
- **Constraint Equation (Area):** $g(x, y) = xy = 9$
    

**Step 2: Compute the partial derivatives.**

$$\frac{\partial P}{\partial x} = 1, \quad \frac{\partial P}{\partial y} = 2$$

$$\frac{\partial g}{\partial x} = y, \quad \frac{\partial g}{\partial y} = x$$

**Step 3: Set up the component equations ($\nabla P = \lambda \nabla g$).**

$$\hat{i}: 1 = \lambda y \implies \lambda = \frac{1}{y}$$

$$\hat{j}: 2 = \lambda x \implies \lambda = \frac{2}{x}$$

**Step 4: Eliminate $\lambda$ to establish the engineering ratio.**

Set the two expressions for $\lambda$ equal to each other:

$$\frac{1}{y} = \frac{2}{x} \implies x = 2y$$

**Step 5: Substitute into the area constraint.**

Plugging $x = 2y$ back into $xy = 9$:

$$(2y)y = 9 \implies 2y^2 = 9 \implies y^2 = 4.5$$

$$y = \sqrt{4.5} \approx 2.12\text{ meters}$$

Now compute the optimal channel width $x$:

$$x = 2(2.12) = 4.24\text{ meters}$$

**Step 6: Evaluate the minimized perimeter.**

$$P(4.24, 2.12) = 4.24 + 2(2.12) = 8.48\text{ meters}$$

#### Real-Life Meaning of the Answer:

To achieve the lowest possible concrete material cost while maintaining the required $9\text{ m}^2$ water drainage flow area, the channel must be engineered to a **base width of $4.24\text{ meters}$** and a **vertical wall depth of $2.12\text{ meters}$**.

In fluid mechanics, this specific structural ratio ($x = 2y$) creates what is known as the _most hydraulically efficient rectangular cross-section_. By keeping the wetted concrete perimeter to its absolute mathematical minimum of **$8.48\text{ meters}$**, the engineer minimizes the friction losses slowing down the water flow. This allows the channel to move maximum storm runoff volumes at the lowest possible infrastructure construction cost.