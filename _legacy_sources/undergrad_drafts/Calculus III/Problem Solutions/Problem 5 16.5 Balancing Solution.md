## Step 1: Map the 3D Boundaries and Set the Limits

To solve a 3D accumulation problem, we must establish how the solid region $E$ is bounded in space. The problem gives us four bounding planes:

- Three base coordinate planes: $x = 0$, $y = 0$, and $z = 0$
    
- One sloped ceiling plane: $x + y + z = 2$
    

To set up our iterated triple integral, we slice the solid from the bottom up:

1. **Vertical limits ($z$):** The solid starts at the floor ($z = 0$) and goes up until it hits the sloped ceiling. Rearranging the plane equation for $z$ gives the upper bound:
    
    $$z = 2 - x - y$$
    
2. **Cross-sectional limits ($y$):** Projecting the solid down into the $xy$-plane (where $z = 0$), the sloped ceiling meets the floor along the line $x + y = 2$. Rearranging for $y$ gives a span from the axis $y = 0$ to the line:
    
    $$y = 2 - x$$
    
3. **Outer limits ($x$):** On the $x$-axis, this triangle starts at the origin $x = 0$ and terminates where the boundary line hits the axis at:
    
    $$x = 2$$
    

> **Why we do this:** Breaking down a 3D shape into nested, dependent limits allows us to convert a spatial volume integral into a solvable series of single-variable calculus steps. Our boundary setup is $0 \le x \le 2$, $0 \le y \le 2 - x$, and $0 \le z \le 2 - x - y$.

## Step 2: Leverage the Power of Symmetry

Before diving into four separate triple integrals, look closely at the structure of the problem:

- The boundary equation $x + y + z = 2$ treats $x$, $y$, and $z$ completely interchangeably.
    
- The material density is perfectly uniform ($\rho = 1$).
    

Because the geometry and mass distribution are completely identical along all three spatial axes, the first moments must equal each other ($M_{yz} = M_{xz} = M_{xy}$), meaning the center of mass coordinates will be completely identical ($\overline{x} = \overline{y} = \overline{z}$).

> **Why we do this:** Recognizing physical symmetry saves an immense amount of repetitive integration. We only need to compute the total mass $M$ and _one_ directional moment (we will choose $M_{xy}$) to find the entire solution.

## Step 3: Compute the Total Mass ($M$)

The 3D formula for mass with a density function is:

$$M = \iiint_E \rho(x,y,z) \, dV$$

Substituting our uniform density $\rho = 1$ and our boundaries:

$$M = \int_{0}^{2} \int_{0}^{2-x} \int_{0}^{2-x-y} 1 \, dz \, dy \, dx$$

**1. Evaluate the innermost integral (with respect to $z$):**

$$\int_{0}^{2-x-y} 1 \, dz = [z]_0^{2-x-y} = 2 - x - y$$

**2. Evaluate the middle integral (with respect to $y$):**

$$\int_{0}^{2-x} (2 - x - y) \, dy = \left[ (2-x)y - \frac{y^2}{2} \right]_0^{2-x}$$

Substituting the upper limit $y = 2-x$:

$$(2-x)(2-x) - \frac{(2-x)^2}{2} = (2-x)^2 - \frac{(2-x)^2}{2} = \frac{(2-x)^2}{2}$$

**3. Evaluate the outermost integral (with respect to $x$):**

$$M = \int_{0}^{2} \frac{(2-x)^2}{2} \, dx$$

Using $u$-substitution where $u = 2-x$ and $du = -dx$:

$$M = \int_{2}^{0} \frac{u^2}{2} (-du) = \int_{0}^{2} \frac{u^2}{2} \, du = \left[ \frac{u^3}{6} \right]_0^2 = \frac{8}{6} = \frac{4}{3}$$

The total mass of our concrete wedge is **4/3**.

## Step 4: Compute the First Moment about the $xy$-Plane ($M_{xy}$)

The first moment $M_{xy}$ measures the distribution of mass relative to the $xy$-plane, which dictates the vertical balance point ($\overline{z}$). We multiply the integrand by the vertical distance variable $z$:

$$M_{xy} = \iiint_E z \cdot \rho(x,y,z) \, dV$$

Substituting our values:

$$M_{xy} = \int_{0}^{2} \int_{0}^{2-x} \int_{0}^{2-x-y} z \, dz \, dy \, dx$$

**1. Evaluate the innermost integral (with respect to $z$):**

$$\int_{0}^{2-x-y} z \, dz = \left[ \frac{z^2}{2} \right]_0^{2-x-y} = \frac{(2-x-y)^2}{2}$$

**2. Evaluate the middle integral (with respect to $y$):**

$$\int_{0}^{2-x} \frac{(2-x-y)^2}{2} \, dy$$

Using substitution where $v = 2-x-y$ and $dv = -dy$:

$$\int_{2-x}^{0} \frac{v^2}{2} (-dv) = \int_{0}^{2-x} \frac{v^2}{2} \, dv = \left[ \frac{v^3}{6} \right]_0^{2-x} = \frac{(2-x)^3}{6}$$

**3. Evaluate the outermost integral (with respect to $x$):**

$$M_{xy} = \int_{0}^{2} \frac{(2-x)^3}{6} \, dx$$

Using substitution where $u = 2-x$ and $du = -dx$:

$$M_{xy} = \int_{2}^{0} \frac{u^3}{6} (-du) = \int_{0}^{2} \frac{u^3}{6} \, du = \left[ \frac{u^4}{24} \right]_0^2 = \frac{2^4}{24} = \frac{16}{24} = \frac{2}{3}$$

The first moment $M_{xy}$ is **2/3**. Thanks to our structural symmetry step, we instantly know that $M_{yz} = \frac{2}{3}$ and $M_{xz} = \frac{2}{3}$ as well.

## Step 5: Calculate the Center of Mass Coordinates $(\overline{x}, \overline{y}, \overline{z})$

Now we divide our directional moments by the total mass to find our final coordinates:

$$\overline{x} = \frac{M_{yz}}{M} = \frac{2/3}{4/3} = \frac{2}{4} = 0.5$$

$$\overline{y} = \frac{M_{xz}}{M} = \frac{2/3}{4/3} = \frac{2}{4} = 0.5$$

$$\overline{z} = \frac{M_{xy}}{M} = \frac{2/3}{4/3} = \frac{2}{4} = 0.5$$

## Final Answer

The total mass $M$ and the center of mass coordinates of the uniform 3D wedge are:

- $$\mathbf{M = \frac{4}{3}}$$
    
- $$\mathbf{(\overline{x}, \overline{y}, \overline{z}) = (0.5, 0.5, 0.5)}$$
    

### The Geometric Reality Check

A 3D wedge bounded like this is a solid tetrahedron. For any uniform solid tetrahedron with vertices at the origin $(0,0,0)$ and extending out to a distance of $a$ on each coordinate axis, the geometric balance point is located exactly at a quarter of the height along each direction:

$$\overline{x} = \frac{a}{4}$$

Since our wedge extends out to $a = 2$ on the $x$, $y$, and $z$ axes, our shortcut formula yields:

$$\frac{2}{4} = 0.5$$

The calculus matches structural geometry perfectly!