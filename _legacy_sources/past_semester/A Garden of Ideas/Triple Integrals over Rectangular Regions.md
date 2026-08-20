# Triple Integrals over Rectangular Regions

> [!info] Triple Integrals over Rectangular Regions Essential Formulas
>**Triple Integrals over Rectangular Regions:**
>$$\iiint_E f(x,y,z)\,dV = \int_{x=a}^{b}\int_{y=c}^{d}\int_{z=r}^{s} f(x,y,z)\,dz\,dy\,dx$$
>$$x\in [a,\,b],\quad y\in[c,\,d],\quad z\in [r,\,s]$$
>___
>**Average Value of a Function:**
>$$\bar{f} = \frac{1}{V(E)} \iiint_E f(x,y,z)\,dV$$

### Triple Integral Definition

 So far we've integrated to get volumes by taking the integral in 3 dimensions. Now, we can expand the concept and integrate with respect to 3 variables in a 4 dimensional region.

The idea is almost exactly the same as with double integrals. Only now, there's a third integral to worry about, $z$. This results in us integrating over a **volume element** $dV$ instead of an area element, $dA$.
$$\iiint_E f(x,y,z)\,dV = 
\int_{x=a}^{b}\int_{y=c}^{d}\int_{z=r}^{s} f(x,y,z)\,dz\,dy\,dx$$
$$x\in [a,\,b],\quad y\in[c,\,d],\quad z\in [r,\,s]$$
In this case now, the rectangular region $E$ is now a 3 dimensional volume that we are integrating from.

### Step-by-Step Process for Setting up the Triple Integral

1. **Define the region $E$.**  
   Identify the solid in 3D space, either from verbal description or given boundaries.

2. **Visualize and project.**  
   Sketch the region and its projection onto the coordinate plane that matches your chosen order of integration.

3. **Determine limits of integration.**  
   Write the limits for one variable at a time, starting from the innermost to the outermost integral.

4. **Select the order of integration.**  
   Choose the order ($dz\,dy\,dx$, $dy\,dx\,dz$, etc.) that makes the limits easiest to describe or the integration simplest.

5. **Set up the integral.**  
   Write  
   $$
   \iiint_E f(x,y,z)\,dV
   $$
   with the appropriate limits and differential order.

6. **Integrate iteratively.**  
   Evaluate one integral at a time, moving from the innermost variable outward.
