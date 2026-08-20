Here is the step-by-step solution to compute the line integral using Green's Theorem.

## Understanding Green's Theorem (Circulation Form)

**Green's Theorem** allows us to swap a line integral around a simple, closed, counterclockwise curve $C$ for a much simpler double integral over the flat region $R$ trapped inside that curve. The formula is:

$$\oint_{C} \mathbf{F} \cdot d\mathbf{r} = \oint_{C} P \, dx + Q \, dy = \iint_{R} \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) dA$$

## Step-by-Step Solution

### Step 1: Identify the Components and the Region

From the given vector field $\mathbf{F}(x,y) = \langle ye^x, x^2 + \cos y \rangle$:

- $P(x,y) = ye^x$
    
- Q(x,y) = x^2 + \cos y$
    

The curve $C$ outlines a flat rectangle $R$ with corners at $(0,0)$, $(2,0)$, $(2,1)$, and $(0,1)$. Looking at the coordinates, we can easily set up our boundaries for the region $R$:

- $x$ goes from **$0$ to $2$**
    
- $y$ goes from **$0$ to $1$**
    

### Step 2: Compute the Partial Derivatives

Next, find the components of the 2D curl:

- **Find $\frac{\partial P}{\partial y}$:** Differentiate $ye^x$ with respect to $y$ (treat $x$ as a constant).
    
    $$\frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(ye^x) = e^x$$
    
- **Find $\frac{\partial Q}{\partial x}$:** Differentiate $x^2 + \cos y$ with respect to $x$ (treat $y$ as a constant).
    
    $$\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(x^2 + \cos y) = 2x + 0 = 2x$$
    

### Step 3: Setup the Double Integral

Subtract the partial derivatives ($\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}$) to get your new integrand:

$$\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = 2x - e^x$$

Now, put it all together inside the rectangular boundaries we found in Step 1:

$$\oint_{C} \mathbf{F} \cdot d\mathbf{r} = \int_{0}^{1} \int_{0}^{2} (2x - e^x) \, dx \, dy$$

### Step 4: Evaluate the Integrals

- **Evaluate the Inner Integral (with respect to $x$):**
    
    $$\int_{0}^{2} (2x - e^x) \, dx = \left[ x^2 - e^x \right]_0^2$$
    
    Substitute the upper limit ($x = 2$):
    
    $$(2)^2 - e^2 = 4 - e^2$$
    
    Substitute the lower limit ($x = 0$):
    
    $$(0)^2 - e^0 = -1$$
    
    Subtract lower from upper:
    
    $$(4 - e^2) - (-1) = 4 - e^2 + 1 = 5 - e^2$$
    
- **Evaluate the Outer Integral (with respect to $y$):**
    
    $$\int_{0}^{1} (5 - e^2) \, dy$$
    
    Since $(5 - e^2)$ is just a constant number relative to $y$:
    
    $$\left[ (5 - e^2)y \right]_0^1 = (5 - e^2)(1) - (5 - e^2)(0) = 5 - e^2$$
    

## Final Answer

$$\oint_{C} \mathbf{F} \cdot d\mathbf{r} = \boxed{5 - e^2}$$