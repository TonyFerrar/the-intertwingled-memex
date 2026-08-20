
# Finding Extrema for Multivariable Functions

> [!info] Essential Formulas
> 
> Critical points occur where all first partial derivatives vanish or are undefined. The **second-derivative test** (via the discriminant) classifies the point.
> 
> **Step 1: Calculate the Discriminant:**
> $$D = f_{xx}f_{yy} - (f_{xy})^2$$
> 
> **Step 2: Evaluate $D$ and classify:**
> 
> - $D > 0$, $f_{xx} > 0$ → local min
> - $D > 0$, $f_{xx} < 0$ → local max
> - $D < 0$ → saddle point
> - $D = 0$ → inconclusive

## The Discriminant
The discriminant is a combination of the second derivatives. It has 4 cases to consider:

### Cases 1 and 2: $D>0$
When the discriminant is positive, the signs of $f_{xx}$ and $f_{yy}$ match. This means the function has the same concavity in both the $x$- and $y$-directions.

**Case 1: $D>0$ and $f_{xx}>0$**
If $f_{xx}>0$, then the function is concave up in the $x$-direction. But because $D>0$, this implies that $f_{yy}>0$ as well (in other words, the function is concave up in both the $x$- and $y$-directions.) This means that the critical point occurs at a local minimum.

**Case 2: $D>0$ and $f_{xx}<0$**
If $f_{xx}<0$, then the function is concave down in the $x$-direction. But because $D>0$, this implies that $f_{yy}<0$ as well (in other words, the function is concave down in both the $x$- and $y$-directions.) This means that the critical point occurs at a local maximum.

### Case 3: $D<0$
If the discriminant is negative, this implies that $f_{xx}$ and $f_{yy}$ have opposite signs. This means the function is concave up in one direction and concave down in the other. This is the definition of a saddle point.

### Case 4: $D=0$
When the discriminant is zero, we cannot draw conclusions from this test.

## Minima and Maxima
A function of 2 variables produces a 3-dimensional surface. The surface can vary in height ($z$ value) in both the $x$ and $y$ directions. Thus, both minima and maxima are possible. In this graph, there are multiple peaks (maxima) and valleys (minima). ***Note that maxima occur where the function is concave down in both directions, while minima occur where the function is concave up in both directions***:

<iframe src="https://www.desmos.com/3d/jj33gloiym" width="100%" height="500px" frameborder="0"></iframe>

## Saddle Points
A saddle point is a combination of a local maximum and a local minimum. In one direction, the saddle point occupies a local minimum. In the other direction, the saddle point occupies a local maximum. In this graph, the saddle point is at the origin, $(x,y) = (0,0)$:

<iframe src="https://www.desmos.com/3d/ujxxvyyttc" width="100%" height="500px" frameborder="0"></iframe>