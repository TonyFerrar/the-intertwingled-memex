Because this entire learning activity focuses on the **Shell Method**, we will solve it using shells first. However, since the axis of rotation here is **horizontal** ($y = -1$), using the shell method means our cylindrical shells will open horizontally, requiring us to integrate with respect to $y$ ($dy$).

## Method 1: Finding the Volume Using the Shell Method ($dy$)

The formula for horizontal shells rotated around a horizontal axis is:

$$V = \int_{c}^{d} 2\pi \cdot (\text{radius}) \cdot (\text{height}) \, dy$$

### Step 1: Identify the Components

- **Radius:** The vertical distance from the axis of rotation ($y = -1$) up to a horizontal slice at height $y$.
    
    $$\text{radius} = \text{top} - \text{bottom} = y - (-1) = y + 1$$
    
- **Height:** The length of the horizontal slice, which is the right-hand boundary minus the left-hand boundary.
    
    - Right boundary: $x = 1$
        
    - Left boundary: $y = x^2 \implies x = \sqrt{y}$
        
        $$\text{height} = 1 - \sqrt{y}$$
        
- **Limits of Integration ($c$ to $d$):** We track the region along the $y$-axis. It starts at the bottom ($y = 0$) and goes up to where the curve meets the line $x = 1$, which is $y = (1)^2 = 1$. So, our limits are from $y = 0$ to $y = 1$.
    

### Step 2: Set Up and Expand the Integral

Substitute the components into the shell formula:

$$V = \int_{0}^{1} 2\pi \cdot (y + 1) \cdot (1 - \sqrt{y}) \, dy$$

Pull $2\pi$ out front and foil/expand the binomials inside (using $y^{1/2}$ for $\sqrt{y}$):

$$(y + 1)(1 - y^{1/2}) = y - y^{3/2} + 1 - y^{1/2}$$

Rearranging the terms nicely:

$$V = 2\pi \int_{0}^{1} \left( 1 + y - y^{1/2} - y^{3/2} \right) \, dy$$

### Step 3: Integrate Term by Term

Apply the power rule to each component:

$$V = 2\pi \left[ y + \frac{y^2}{2} - \frac{2}{3}y^{3/2} - \frac{2}{5}y^{5/2} \right]_{0}^{1}$$

### Step 4: Evaluate the Limits

Since plugging in the lower limit ($y = 0$) yields $0$, we only need to evaluate the upper limit ($y = 1$):

$$V = 2\pi \left( 1 + \frac{1}{2} - \frac{2}{3} - \frac{2}{5} \right)$$

Find a common denominator for the fractions inside the parentheses (which is 30):

$$1 + \frac{1}{2} - \frac{2}{3} - \frac{2}{5} = \frac{30}{30} + \frac{15}{30} - \frac{20}{30} - \frac{12}{30} = \frac{13}{30}$$

Now, multiply by the $2\pi$ outside:

$$V = 2\pi \left( \frac{13}{30} \right) = \frac{26\pi}{30}$$

### Final Exact Answer:

$$V = \frac{13\pi}{15} \text{ cubic units} \quad (\approx 2.72)$$

## Method 2: An Easier Alternative (The Washer Method)

While the packet is meant for practice with shells, this specific geometry is actually much faster to solve using the **Washer Method** ($dx$). Since the rotation is around a horizontal axis, the washer method allows us to stay in terms of $x$, saving us from having to change the original equations into square roots.

### The Washer Setup:

- **Outer Radius ($R(x)$):** The distance from $y = -1$ up to the top curve $y = x^2$.
    
    $$R(x) = x^2 - (-1) = x^2 + 1$$
    
- **Inner Radius ($r(x)$):** The distance from $y = -1$ up to the flat bottom boundary $y = 0$.
    
    $$r(x) = 0 - (-1) = 1$$
    
- **Limits:** Along the $x$-axis from $x = 0$ to $x = 1$.
    

$$V = \int_{0}^{1} \pi \left[ [R(x)]^2 - [r(x)]^2 \right] \, dx$$

$$V = \pi \int_{0}^{1} \left[ (x^2 + 1)^2 - (1)^2 \right] \, dx$$

$$V = \pi \int_{0}^{1} \left( x^4 + 2x^2 + 1 - 1 \right) \, dx$$

$$V = \pi \int_{0}^{1} \left( x^4 + 2x^2 \right) \, dx$$

Integrating this gives:

$$V = \pi \left[ \frac{x^5}{5} + \frac{2x^3}{3} \right]_{0}^{1} = \pi \left( \frac{1}{5} + \frac{2}{3} \right) = \pi \left( \frac{3+10}{15} \right) = \frac{13\pi}{15}$$

Both methods yield the exact same elegant answer!