
## Step 1: Understand the Parametric Equations

You are given the following parametric equations:

$$x = 5t$$

$$y = 1 - 2t^2$$

For the domain:

$$-\infty < t < \infty$$

The parameter is $t$. To understand what geometric shape these equations form, we need to eliminate $t$ and find a direct relationship between $x$ and $y$.

## Step 2: Eliminate the Parameter ($t$)

First, we isolate $t$ in the simpler equation, which is the equation for $x$:

$$x = 5t \implies t = \frac{x}{5}$$

Next, we substitute this expression for $t$ into the equation for $y$:

$$y = 1 - 2\left(\frac{x}{5}\right)^2$$

Now, simplify the equation:

$$y = 1 - 2\left(\frac{x^2}{25}\right)$$

$$y = -\frac{2}{25}x^2 + 1$$

## Step 3: Identify the Geometric Curve

The resulting equation, $y = -\frac{2}{25}x^2 + 1$, is a quadratic equation in terms of $x$.

- This tells us that the curve is a **parabola**.
    
- Because the leading coefficient ($-\frac{2}{25}$) is negative, the parabola **opens downward**.
    

## Step 4: Find Key Points to Sketch the Graph

To draw an accurate sketch, we find the critical features of this parabola:

- **Vertex:** The equation is in the form $y = ax^2 + k$, where the vertex is at $(0, k)$. Thus, the vertex is at **$(0, 1)$**.
    
- **$y$-intercept:** Set $x = 0$, which gives $y = 1$. The $y$-intercept is the vertex itself: **$(0, 1)$**.
    
- **$x$-intercepts:** Set $y = 0$ and solve for $x$:
    
    $$0 = -\frac{2}{25}x^2 + 1$$
    
    $$\frac{2}{25}x^2 = 1$$
    
    $$x^2 = \frac{25}{2}$$
    
    $$x = \pm \sqrt{\frac{25}{2}} = \pm \frac{5}{\sqrt{2}} \approx \pm 3.54$$
    
    So, the $x$-intercepts are approximately **$(3.54, 0)$** and **$(-3.54, 0)$**.
    

## Step 5: Determine the Orientation (Direction of Motion)

Parametric curves have an orientation, meaning they are traced in a specific direction as $t$ increases from $-\infty$ to $\infty$. Let's plug in a few values for $t$ to find the direction:

- **At $t = -1$:**
    
    $$x = 5(-1) = -5$$
    
    $$y = 1 - 2(-1)^2 = -1$$
    
    Point: **$(-5, -1)$**
    
- **At $t = 0$:**
    
    $$x = 5(0) = 0$$
    
    $$y = 1 - 2(0)^2 = 1$$
    
    Point: **$(0, 1)$** (Vertex)
    
- **At $t = 1$:**
    
    $$x = 5(1) = 5$$
    
    $$y = 1 - 2(1)^2 = -1$$
    
    Point: **$(5, -1)$**
    

As $t$ increases, the graph moves from the left side ($x = -5$) through the vertex ($x = 0$) toward the right side ($x = 5$).

## How to Sketch the Graph

1. Draw a standard Cartesian $xy$-plane.
    
2. Plot the vertex at **$(0, 1)$**.
    
3. Plot the $x$-intercepts at roughly **$(3.54, 0)$** and **$(-3.54, 0)$**.
    
4. Plot a couple of symmetric guide points, like **$(-5, -1)$** and **$(5, -1)$**.
    
5. Smoothly connect the points to form a downward-opening parabola.
    
6. **Add arrows** pointing from left to right along the curve to show the orientation as $t$ increases.