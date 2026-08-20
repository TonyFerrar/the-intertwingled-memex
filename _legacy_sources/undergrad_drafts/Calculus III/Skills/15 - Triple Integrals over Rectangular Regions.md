# Skill 1: Triple Integrals Over Rectangular Regions

## Conceptual Notes & Lecture Guide

### What is a Triple Integral Over a Rectangular Region?

A triple integral extends the concept of single and double integrals into three dimensions. When integrating over a **rectangular region** (often called a rectangular box or block $E$), the boundaries for all three coordinate variables are fixed, constant numbers.

Mathematically, we define the 3D box $E$ as a Cartesian product of three closed intervals:

$$E = [a, b] \times [c, d] \times [r, s]$$

This means that the variables span the following constant ranges:

- $a \le x \le b$
    
- $c \le y \le d$
    
- $r \le z \le s$
    

The differential volume element $dV$ represents an infinitesimal 3D cube with dimensions $dx$, $dy$, and $dz$:

$$dV = dz \, dy \, dx$$

### Fubini’s Theorem for Triple Integrals

Fubini’s Theorem states that if the integrand function $f(x, y, z)$ is continuous on the rectangular box $E$, the triple integral can be evaluated as an **iterated integral** in any of the $6$ possible orders ($dz\,dy\,dx$, $dz\,dx\,dy$, $dy\,dz\,dx$, $dy\,dx\,dz$, $dx\,dz\,dy$, or $dx\,dy\,dz$).

The boundaries simply follow their respective variables to the corresponding integration sign:

$$\iiint_{E} f(x,y,z) \, dV = \int_{x=a}^{b} \int_{y=c}^{d} \int_{z=r}^{s} f(x,y,z) \, dz \, dy \, dx$$

Because all limits of integration are constant numbers, you integrate from the **inside layer out**, treating the outer variables as constants during each step.

### Key Applications of Skill 1

1. **Volume of a Rectangular Box:** If $f(x,y,z) = 1$, the integral yields the geometric volume $V(E)$ of the box:
    
    $$V(E) = \iiint_{E} 1 \, dV = (b-a)(d-c)(s-r)$$
    
2. **Average Value of a 3D Function:** The average value $\overline{f}$ of a continuous function over the region $E$ is given by dividing the total triple integral by the volume of the region:
    
    $$\overline{f} = \frac{1}{V(E)} \iiint_{E} f(x,y,z) \, dV$$
    

## Pure Mathematical Sample Problems

### Sample Problem 1.1

Evaluate the triple integral:

$$\iiint_{E} 12xyz^2 \, dV$$

where $E$ is the rectangular region defined by $x \in [0, 1]$, $y \in [1, 2]$, and $z \in [0, 2]$.

#### Solution:

We set up the iterated integral using the order $dz \, dy \, dx$:

$$I = \int_{0}^{1} \int_{1}^{2} \int_{0}^{2} 12xyz^2 \, dz \, dy \, dx$$

**Step 1: Integrate the innermost layer with respect to $z$**

Treat $x$ and $y$ as constants:

$$\int_{0}^{2} 12xyz^2 \, dz = \left[ 12xy \frac{z^3}{3} \right]_{0}^{2} = \left[ 4xyz^3 \right]_{0}^{2} = 4xy(2)^3 - 0 = 32xy$$

**Step 2: Integrate the middle layer with respect to $y$**

Substitute the result into the $y$-integral:

$$\int_{1}^{2} 32xy \, dy = \left[ 16xy^2 \right]_{1}^{2} = 16x(2)^2 - 16x(1)^2 = 64x - 16x = 48x$$

**Step 3: Integrate the outermost layer with respect to $x$**

Substitute the result into the $x$-integral:

$$\int_{0}^{1} 48x \, dx = \left[ 24x^2 \right]_{0}^{1} = 24(1)^2 - 0 = 24$$

#### Final Answer:

$$\iiint_{E} 12xyz^2 \, dV = 24$$

### Sample Problem 1.2

Find the average value of the function $f(x, y, z) = x + 2y - z$ over the rectangular box $E = [0, 2] \times [0, 3] \times [1, 2]$.

#### Solution:

**Step 1: Calculate the volume $V(E)$ of the box**

$$V(E) = (2 - 0)(3 - 0)(2 - 1) = 2 \times 3 \times 1 = 6$$

**Step 2: Evaluate the triple integral over region $E$**

$$I = \int_{0}^{2} \int_{0}^{3} \int_{1}^{2} (x + 2y - z) \, dz \, dy \, dx$$

_Inner $z$-integration:_

$$\int_{1}^{2} (x + 2y - z) \, dz = \left[ (x + 2y)z - \frac{1}{2}z^2 \right]_{1}^{2}$$

$$= \left( 2(x + 2y) - \frac{1}{2}(2)^2 \right) - \left( 1(x + 2y) - \frac{1}{2}(1)^2 \right)$$

$$= (2x + 4y - 2) - \left(x + 2y - \frac{1}{2}\right) = x + 2y - \frac{3}{2}$$

_Middle $y$-integration:_

$$\int_{0}^{3} \left(x + 2y - \frac{3}{2}\right) \, dy = \left[ xy + y^2 - \frac{3}{2}y \right]_{0}^{3}$$

$$= \left( 3x + (3)^2 - \frac{3}{2}(3) \right) - 0 = 3x + 9 - \frac{9}{2} = 3x + \frac{9}{2}$$

_Outer $x$-integration:_

$$\int_{0}^{2} \left(3x + \frac{9}{2}\right) \, dx = \left[ \frac{3}{2}x^2 + \frac{9}{2}x \right]_{0}^{2} = \left(\frac{3}{2}(2)^2 + \frac{9}{2}(2)\right) - 0 = 6 + 9 = 15$$

**Step 3: Compute the average value $\overline{f}$**

$$\overline{f} = \frac{I}{V(E)} = \frac{15}{6} = 2.5$$

#### Final Answer:

The average value is $2.5$.

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Computer Hardware Thermal Management]]
[[Computer Hardware Thermal Management Solution]]

### Engineering Problem 2: [[Semiconductor Device Physics]]
[[Semiconductor Device Physics Solution]]
