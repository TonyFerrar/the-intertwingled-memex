# Optimization with Lagrange Multipliers

> [!info] Essential Formulas
> 
> **Concept:**  
> When you must optimize $f(x, y, z)$ subject to $g(x, y, z)=k$, the gradients are parallel at an optimum:
> $$\nabla f = \lambda \nabla g$$
> 
> Here $\lambda$ (Lagrange multiplier) represents how the optimum value of $f$ changes per unit relaxation of the constraint $g$—a quantitative measure of trade-off.
> - $f$ is called the objective function
> - $g$ is called the constraint equation
> 
> **Process:**
> - Calculate the gradients $\nabla f$ and $\nabla g$. Note that both produce vectors, and so you should see $\hat{i}$, $\hat{j}$, and (for 3 variables) $\hat{k}$. 
> - Set up one equation per vector component:
> 	- $\hat{i}$: $\frac{\partial f}{\partial x} = \lambda \frac{\partial g}{\partial x}$
> 	- $\hat{j}$: $\frac{\partial f}{\partial y} = \lambda \frac{\partial g}{\partial y}$
> 	- $\hat{k}$: $\frac{\partial f}{\partial z} = \lambda \frac{\partial g}{\partial z}$
> - Solve these equations for $\lambda$ and use the results to eliminate $\lambda$
> - Substitute results into the constraint equation to solve for $x$, $y$, and $,z$

## Constrained Optimization:
Typical optimization is just an application of [[Finding Extrema for Multivariable Functions|Finding Extrema]] - the maxima and minima of a function. However, most real-world applications face additional constraints. Think about the popular "maximize the area of a fenced pasture" problem from Calculus 1:
- Objective Function: the function that calculates the area of the pen
- Constraint: Fence material costs money, and we only have so much of it.
In this problem, the goal is to take a fixed amount of fencing and shape it into an enclosure with maximum area.

The same type of thing happens in multivariable functions. Here, the constraint equation will form an intersecting surface with the objective function. The goal of constrained optimization is to find the maxima and minima that occur along the curve of intersection between the objective function and the constraint equation.
- The objective function is a surface of all possible outputs
- The constraint equation is a surface of all possible inputs, given some real-world constraint that limits which combinations of input variables are actually possible.

<iframe src="https://www.desmos.com/3d/qyghs8nthv" width="100%" height="500px" frameborder="0"></iframe>


## Example:
Find the maximum and minimum values of  
$$
f(x,y) = x^2 + y^2
$$
subject to $x + 2y = 6$.

**Solution:**

Gradients:
Define $g(x,y)=x+2y-6=0$

$$\nabla f = ⟨2x,2y⟩$$
$$\nabla g=⟨1,2⟩$$ 
Equations:
Set $\nabla f = λ\nabla g$: 
- $\hat{i}$ equation: $2x = λ$
- $\hat{j}$ equation: $2y = 2λ$

Solving for $\lambda$:
- $\hat{i}$ equation: $λ=2x$
- $\hat{j}$ equation: $λ=y$

 Eliminate $\lambda$:
 Set the two equations equal to each other.

$$λ=2x = y$$
 Thus,
 $$y=2x$$

Substitute into constraint equation:
$$x + 2y = 6$$
$$x + 2(2x)=6$$

Solving,
$$x=1.2$$

Substitute to find $y$.
$$y=2x$$
$$y=2(1.2)=2.4$$
Evaluate the original function:
$$f(1.2, 2.4)=1.44+5.76=7.2$$

Thus, the function $f(x,y)$ is minimized at $x=1.2$ and $y=2.4$ with a value of $7.2$.

> [!warning] Don't forget to check endpoints!
> Remember that the maximum can occur anywhere on the border of your constraint as well.
> Also, you need to test these points to determine whether they are local maximum or minimum using the [[Finding Extrema for Multivariable Functions|Discriminant]].

## A great video on this topic:
<iframe width="560" height="315" src="https://www.youtube.com/embed/5-CUqogfPLY?si=3TGsngHrc9kWthQX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
