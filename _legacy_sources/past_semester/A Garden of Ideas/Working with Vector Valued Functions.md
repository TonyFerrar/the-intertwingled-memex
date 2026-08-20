
# Working with Vector Valued Functions

A vector valued function is a function of the form
 $$\vec{r}(t) = f(t)\hat{i} + g(t)\hat{j} + h(t)\hat{k}$$
 
Vector valued functions are evaluated by substituting values of the parameter $t$.

## 3 functions in one
A useful perspective to take is that a vector valued function is really just a collection of 3 functions:
$$f(t)$$
$$g(t)$$
$$h(t)$$

Work with each individually, and then recombine.

## Plotting
In most apps, the steps are:
- Define $f(t)$, $g(t)$, $h(t)$ separately
- Enter the three functions as an ordered trio: $\left( f(t), g(t), h(t) \right)$
- Change the range of $t$ to plot the interval of interest
- Note: if you also use $\left( f(a), g(a), h(a) \right)$, apps like Desmos will create a slider that will enable visualization of motion along the path.

![[Plotting Vector Valued Functions.png]]


## Analyzing Vector Valued Functions: Domain and Range
Domain and Range of vector valued functions works similar to the functions you've been looking at up to this point. The only difference is that you're looking at values of $t$ for the domain and values of $\vec{r}$ for the range. Keep an eye out for domain limitations:
- Divide by zero
- Even roots of negative values
- Arguments of logarithms $\le 0$

