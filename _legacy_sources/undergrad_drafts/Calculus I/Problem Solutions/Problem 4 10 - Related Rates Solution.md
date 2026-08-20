## Problem Breakdown

Let:
* $x =$ the distance from the spotlight to the person (in feet).
* $y =$ the height of the shadow on the wall (in feet).
* The distance from the spotlight to the wall is constant at $30\text{ ft}$.
* The height of the person is constant at $6\text{ ft}$.

### Given Values:
* The person is walking *towards* the wall at $3\text{ ft/sec}$. Because they are moving away from the spotlight, the distance $x$ is increasing: $\frac{dx}{dt} = 3\text{ ft/sec}$.
* We want to find the rate when the person is $10\text{ ft}$ from the wall. This means the person's distance from the spotlight is: $x = 30 - 10 = 20\text{ ft}$.

### Find:
* $\frac{dy}{dt}$ at the moment when $x = 20\text{ ft}$.

---

### Step-by-Step Solution

1. **Set up the primary equation using similar triangles:**
   The smaller triangle is formed by the spotlight and the person, and the larger triangle is formed by the spotlight and the wall shadow.
   $$\frac{\text{height of person}}{\text{distance to person}} = \frac{\text{height of shadow}}{\text{distance to wall}}$$
   $$\frac{6}{x} = \frac{y}{30}$$

2. **Solve for $y$ to make differentiation easier:**
   $$y = \frac{180}{x} = 180x^{-1}$$

3. **Differentiate both sides with respect to time ($t$):**
   $$\frac{dy}{dt} = -180x^{-2} \frac{dx}{dt}$$
   $$\frac{dy}{dt} = -\frac{180}{x^2} \frac{dx}{dt}$$

4. **Substitute the known values ($x = 20$ and $\frac{dx}{dt} = 3$):**
   $$\frac{dy}{dt} = -\frac{180}{(20)^2} \cdot 3$$
   $$\frac{dy}{dt} = -\frac{180}{400} \cdot 3$$
   $$\frac{dy}{dt} = -\frac{9}{20} \cdot 3 = -\frac{27}{20}\text{ ft/sec}$$

**Answer:** The height of the shadow on the wall is decreasing at a rate of **$-\frac{27}{20}\text{ ft/sec}$** (or **$-1.35\text{ ft/sec}$**).