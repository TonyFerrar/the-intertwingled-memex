# Skill 1: The Mechanics of Implicit Differentiation

## Conceptual Notes

### 1. Explicit vs. Implicit Relations
Up to this point in calculus, most equations have been presented in **explicit form**, written cleanly as $y = f(x)$. In these cases, the dependent variable $y$ is isolated entirely on one side of the equation (for example, $y = x^2 + 2x + 1$). 

However, many mathematical and physical relationships are expressed in **implicit form**, where the variables $x$ and $y$ are intimately intertwined (such as $x^2 + y^2 = 1$ or $x^2y - 2 = 3y^3$). In an implicit relation, it is often algebraically difficult, or entirely impossible, to isolate $y$ as a single function of $x$. 



Geometrically, implicit equations often describe curves that fail the Vertical Line Test, meaning a single $x$-value can map to multiple $y$-values. Despite not being standard functions, we can still find the slope of the tangent line ($\frac{dy}{dx}$) at any specific point on these curves using **Implicit Differentiation**.

---

### 2. The Core Mechanism: Global Chain Rule
The foundational secret to implicit differentiation is treating $y$ not as an independent variable, but as an implicit, nested function of $x$ (effectively, $y = y(x)$). 

When we differentiate both sides of an equation with respect to $x$:
* Differentiating an $x$ term follows standard derivative rules: 
  $$\frac{d}{dx}[x^2] = 2x$$
* Differentiating a $y$ term **strictly requires the Chain Rule**. You take the derivative of the outer layer with respect to $y$, and then multiply by the derivative of the inner layer ($\frac{dy}{dx}$):
  $$\frac{d}{dx}[y^2] = 2y \cdot \frac{dy}{dx}$$

⚠️ **CRITICAL REMINDER:** Every single time you differentiate an expression containing $y$, you must append a factor of $\frac{dy}{dx}$ to account for this chain rule step.

---

### 3. Step-by-Step Procedure
1. **Differentiate:** Take the derivative of both sides of the equation with respect to $x$. Apply product, quotient, and chain rules where necessary, making sure to generate a $\frac{dy}{dx}$ term whenever differentiating a $y$ variable.
2. **Isolate:** Use algebra to collect all terms containing $\frac{dy}{dx}$ onto one side of the equation (typically the left side) and move all terms without $\frac{dy}{dx}$ to the opposite side.
3. **Factor:** Factor out $\frac{dy}{dx}$ from the gathered terms.
4. **Solve:** Divide both sides by the remaining algebraic expression to cleanly isolate $\frac{dy}{dx}$.

---

## Sample Problems (Guided Notes Examples)

### Example 1: Differentiating Basic Relationships
Find $\frac{dy}{dx}$ for the implicit relation: 
$$x^2y - 2 = 3y^3$$

**Step 1: Differentiate both sides with respect to $x$.**
Note that the first term, $x^2y$, is a product of two functions ($x^2$ and $y$), so we must apply the Product Rule: $\frac{d}{dx}[uv] = u'v + uv'$.
$$\frac{d}{dx}[x^2y] - \frac{d}{dx}[2] = \frac{d}{dx}[3y^3]$$
$$\left(2x \cdot y + x^2 \cdot \frac{dy}{dx}\right) - 0 = 9y^2 \cdot \frac{dy}{dx}$$
$$2xy + x^2\frac{dy}{dx} = 9y^2\frac{dy}{dx}$$

**Step 2: Collect all $\frac{dy}{dx}$ terms on one side.**
Move $x^2\frac{dy}{dx}$ to the right side to group it with the other derivative term:
$$2xy = 9y^2\frac{dy}{dx} - x^2\frac{dy}{dx}$$

**Step 3: Factor out $\frac{dy}{dx}$.**
$$2xy = \frac{dy}{dx}(9y^2 - x^2)$$

**Step 4: Isolate $\frac{dy}{dx}$ by dividing.**
$$\frac{dy}{dx} = \frac{2xy}{9y^2 - x^2}$$

---

### Example 2: Managing Trigonometric Layers
Find $\frac{dy}{dx}$ for the equation:
$$\cos(y) = x^2 - y^2$$

**Step 1: Differentiate both sides with respect to $x$.**
Apply the chain rule to the left side: the derivative of $\cos(\text{blob})$ is $-\sin(\text{blob}) \cdot \text{blob}'$.
$$-\sin(y) \cdot \frac{dy}{dx} = 2x - 2y \cdot \frac{dy}{dx}$$

**Step 2: Collect all $\frac{dy}{dx}$ terms on one side.**
Add $2y\frac{dy}{dx}$ to the left side:
$$2y\frac{dy}{dx} - \sin(y)\frac{dy}{dx} = 2x$$

**Step 3: Factor out $\frac{dy}{dx}$.**
$$\frac{dy}{dx}(2y - \sin y) = 2x$$

**Step 4: Isolate $\frac{dy}{dx}$.**
$$\frac{dy}{dx} = \frac{2x}{2y - \sin y}$$

---

### Example 3: Solving the Equation
Find $\frac{dy}{dx}$ for the equation:
$$y^2 - 2x = 1 - 2y$$

**Step 1: Differentiate both sides with respect to $x$.**
$$2y\frac{dy}{dx} - 2 = 0 - 2\frac{dy}{dx}$$

**Step 2: Collect all $\frac{dy}{dx}$ terms on the left side and constants on the right.**
$$2y\frac{dy}{dx} + 2\frac{dy}{dx} = 2$$

**Step 3: Factor out $\frac{dy}{dx}$.**
$$\frac{dy}{dx}(2y + 2) = 2$$

**Step 4: Isolate and simplify by canceling common factors.**
$$\frac{dy}{dx} = \frac{2}{2y + 2} = \frac{2}{2(y + 1)} = \frac{1}{y + 1}$$

---

## Real-Life Engineering Application Problems

### Problem 1: [[Mechanical Kinematics (Robotic Linkages)]]
[[Mechanical Kinematics (Robotic Linkages) Solution]]

---

### Problem 2: [[Chemical & Aerospace Engineering (Non-Linear Fluids)]]
[[Chemical & Aerospace Engineering (Non-Linear Fluids) Solution]]
