
# Algebra of Polar Coordinates

**Introduction and Real-World Uses**
In fields like engineering and physics, the choice of a coordinate system is driven by the natural symmetry of the problem you are trying to solve. While the familiar Cartesian system $(x,y)$ is highly intuitive for straight-line motion, it quickly becomes mathematically cumbersome when analyzing circular patterns. This is where the polar coordinate system $(r, \theta)$ shines. We use polar coordinates to represent figures with circular or radial behavior, which appear in everything from land surveying and highway curves to pipes, fans, wheels, and optics.

**The Coordinate System and Conversion**
Instead of mapping a point by its horizontal and vertical distance from the origin $(x,y)$, a point in polar coordinates is defined by its direct distance from the pole, $r$, and the angle measured counterclockwise from the positive $x$-axis, $\theta$.

Because polar coordinates are based on right triangles formed with the $x$ and $y$ axes, we can use trigonometry and the Pythagorean theorem to convert points and equations back and forth between systems.

- **To convert Rectangular to Polar:** We use $r = \sqrt{x^2 + y^2}$ and $\theta = \tan^{-1}(y/x)$.
- **To convert Polar to Rectangular:** We use $x = r \cos\theta$ and $y = r \sin\theta$

## **Worked Example 1: Converting a Point** 
_Question:_ Convert the rectangular point $(x, y) = (3, 2)$ into polar coordinates.

- First, find the radius: $r = \sqrt{3^2 + 2^2} = \sqrt{9 + 4} = \sqrt{13}$.
- Next, find the angle: $\theta = \tan^{-1}(2/3)$.
- Evaluating this gives us $\theta \approx 33.7^\circ$ or $0.588$ radians.
- _Answer:_ The polar point is $(\sqrt{13}, 0.588 \text{ rad})$.

## **Worked Example 2: Converting an Equation** 
_Question:_ Convert the polar equation $r = 2\cos\theta$ into a rectangular equation and identify the geometric shape.

- First, multiply both sides of the equation by $r$ to get $r^2 = 2r\cos\theta$.
- Using our conversion rules, we substitute $r^2$ with $x^2 + y^2$ and $r\cos\theta$ with $x$.
- This yields $x^2 + y^2 = 2x$.
- To identify the shape, subtract $2x$ to the left side ($x^2 - 2x + y^2 = 0$) and complete the square by adding $1$ to both sides.
- _Answer:_ $(x - 1)^2 + y^2 = 1$. This is the rectangular equation of a circle centered at $(1,0)$ with a radius of $1$.

