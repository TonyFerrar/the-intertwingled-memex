
# Equations of Planes


> [!info] Equations of Planes - Essential Formulas
> 
> **Point-normal form**
> $$a(x - x_0) + b(y - y_0) + c(z - z_0) = 0$$
> 
> **General Form**
> $$ax + by + cz = d$$
> 
> Where
> $$\vec{n} = \langle a, b, c \rangle$$

Consider the planes that are already defined by a 3D coordinate system: $xy$, $yz$, and $xz$ planes. While useful, we need the ability to describe mathematically planes other than these coordinate planes because planes can exist anywhere in 3D space (and at any angle).

## What does it take to define a plane?
Remember that it takes 2 points to define a line - and from those two points an equation for the line can be developed. The reason that two points are required is that there are an infinite number of lines passing through a single point - but only one line can connect two points.

![[3D Line.png|400]]
**Two points are required to define a line.** *(Image courtesy OpenStax Calculus Volume 3)*

Building on this idea, three points are required to define a plane. Just as an infinite number of lines pass through a single point, and infinite number of planes can contain the same line. 

![[Planes Intersecting along a Line.png|400]]
**Many planes can pass through a line (2 points).** *(Image courtesy OpenStax Calculus Volume 3)*

Adding a third point fixes this issue, defining a unique plane.

## Plane from a Point and Normal Vector
A convenient way to define a plane involves the use of a point and normal vector. Let $\vec{n}=\langle a,b,c\rangle$, $P=(x_0,\,y_0,\,z_0)$, and $Q=(x,\,y,\,z)$. Ensure that the point $Q$ is set in such a way that $\vec{PQ}$ is perpendicular to $\vec{n}$.

![[Plane from Point and Normal Vector.png|400]]
**A plane can be defined in terms of a point and normal vector.** *(Image courtesy OpenStax Calculus Volume 3)*

Since $\vec{n}\perp\vec{PQ}$, the vector equation of a plane can be found to be $$\vec{n}\cdot\vec{PQ}=0$$ 
This equation can be expanded to yield the following equations:
$$\text{Point-normal form:}\rightarrow\quad a(x-x_0)+b(y-y_0)+c(z-z_0)$$
$$\text{General form:}\rightarrow\quad ax+by+cz=d$$

<div style="page-break-after: always;"></div>
