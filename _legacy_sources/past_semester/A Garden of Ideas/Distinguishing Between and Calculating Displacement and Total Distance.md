
# Distinguishing Between and Calculating Displacement and Total Distance

There are distinct methods required to calculate how much an object has moved (displacement) versus the total path length it has traveled (distance).

## **Displacement** 
Displacement is calculated as the **net area** under a velocity curve, found by integrating the velocity function over a specific time interval:

$$\text{Displacement} = \int_a^b{v(t)dt}$$

**Example:**
The displacement of an object traveling with velocity $v(t) = t^2 - 4$ from $t=-3$ to $t=5$ can be found using the integral

$$ \text{Displacement} = \int_{-3}^5{(t^2-4) dt} = 18.67$$

## **Total Distance**
Total distance, conversely, is the **total area** bound by the velocity curve and the horizontal axis. The areas which fall below the horizontal axis must be treated positive instead of negative. To calculate this, one must integrate the **absolute value** of the velocity:

$$ \text{Distance} = \int_a^b{|v(t)|dt} $$

### To integrate an absolute value,

#### Step 1:
Identify values of the independent variable ($t$ or $x$ for instance) at which the function changes sign. 

**Example:**
The function $v(t) = t^2 - 4$ crosses the $t$-axis at $t=-2$ and $t=2$.

![[x2-4 plot.png]]

#### Step 2:
Break the integral into multiple integrals, using each region identified in (1). 

**Example:**
For $v(t) = t^2 - 4$, finding the total distance traveled between $t = -3$ and $t=5$ requires splitting the integral twice:

$$ \text{Distance} = \int_{-3}^{-2}{|t^2 - 4|dt} + \int_{-2}^{2}{|t^2 - 4|dt} + \int_{2}^{5}{|t^2 - 4|dt} $$
#### Step 3:
For regions that fall above the horizontal axis, remove the absolute value and integrate (these regions are already positive). For regions that fall above the horizontal axis, multiply the integral by $-1$ and remove the absolute value (these regions integrate to a negative area, so multiplying by $-1$ flips them positive).

**Example:**
$$ \text{Distance} = \int_{-3}^{-2}{(t^2 - 4)dt} - \int_{-2}^{2}{(t^2 - 4)dt} + \int_{2}^{5}{(t^2 - 4)dt} $$

#### Step 4:
Perform each integration, being careful with the $\pm$ signs.

**Example:**
$$ \text{Distance} = \left(\frac{t^3}{3} - 4t\right)_{-3}^{-2} - \left(\frac{t^3}{3} - 4t\right)_{-2}^{2} + \left(\frac{t^3}{3} - 4t\right)_{2}^{5} $$

$$ = 2.33 - (-10.67) + 27 = 40$$

Note: this highlights the difference between **displacement** (18.67) and **distance** (40). If you leave your house, drive 600 miles and return home the distance is 600 miles while the displacement is 0.

### Critical Sub-skill
A critical sub-skill explored is **identifying where a velocity function changes sign** (from positive to negative) to correctly split the integral when calculating total distance.
- Graph it and pull values graphically, or
- Set the function equal to zero and solve for the intercepts

