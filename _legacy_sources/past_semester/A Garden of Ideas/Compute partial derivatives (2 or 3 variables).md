
# Compute partial derivatives (2 or 3 variables)

> [!info] Partial Derivatives Essential Formulas
> - Definition:  
> - $\displaystyle f_x(x,y)=\lim_{h\to 0}\frac{f(x+h,y)-f(x,y)}{h}$  
> - $\displaystyle f_y(x,y)=\lim_{h\to 0}\frac{f(x,y+h)-f(x,y)}{h}$
> - Linearity:  
> - $\displaystyle \frac{\partial}{\partial x}(af+bg)=a f_x+b g_x$
> - Product Rule:  
> - $\displaystyle \frac{\partial}{\partial x}(uv)=u_x v+u v_x$
> - Quotient Rule:  
> - $\displaystyle \frac{\partial}{\partial x}\left(\frac{u}{v}\right)=\frac{u_x v - u v_x}{v^2}$
> - Chain Rule (single inside function):  
> - $\displaystyle \frac{\partial}{\partial x} f(g(x,y)) = f'(g(x,y))\cdot g_x$
> - Common Derivatives (applied to $x$ or $y$ if that’s the variable of differentiation):  
> - $\dfrac{d}{dx}(x^n)=n x^{n-1}$  
> - $\dfrac{d}{dx}(\sin x)=\cos x$  
> - $\dfrac{d}{dx}(\cos x)=-\sin x$  
> - $\dfrac{d}{dx}(e^x)=e^x$  
> - $\dfrac{d}{dx}(\ln x)=\tfrac{1}{x}$  
> - $\dfrac{d}{dx}(\arctan x)=\tfrac{1}{1+x^2}$  

Many equations found in engineering depend on more than one independent variable. Performing derivatives of these functions requires expanding our approach to include the effect of each independent variable. In practice, this is accomplished by taking derivatives one variable at a time, treating all others as constants.

## Consider the following examples:

When taking a derivative, constants are treated as multipliers.
$$\dfrac{d}{dx}3x = 3$$
The same process is true for any constant:
$$\dfrac{d}{dx}6x = 6$$
$$\dfrac{d}{dx}10x = 10$$

We could deal with *any* arbitrary constant in the same manner:
$$\dfrac{d}{dx}cx = c$$

When dealing with a multivariable function, we take the partial derivative with respect to one independent variable by treating all other independent variables as constants:
$$\dfrac{\partial}{\partial x}xy = y$$
$$\dfrac{\partial}{\partial x}xy = x$$
In these last two cases, notice that (1) we replaced $d$ with $\partial$ to indicate that it is a partial derivative and other independent variables are present, and (2) we treated one variable as a constant, just like we did when we called it "$c$" in the simpler examples above.

## Subscripts can be used as a shorthand
Remember that the derivative uses prime notation as a shorthand $\dfrac{df}{dx} = f'(x)$.

For partial derivatives, instead of using a prime, we use a subscript with the variable that we took the derivative with respect to.

$$\dfrac{\partial}{\partial x}xy = f_x = y$$
$$\dfrac{\partial}{\partial x}xy = f_y = x$$
## All derivative rules apply in the same manner
Consider the chain rule,

$$\dfrac{\partial}{\partial x} \sin(xy) = \cos(xy)\dfrac{\partial}{\partial x}(xy) = \cos(xy)(y) = y \cos(xy)$$

$$\dfrac{\partial}{\partial y} \sin(xy) = \cos(xy)\dfrac{\partial}{\partial y}(xy) = \cos(xy)(x) = x \cos(xy)$$

This effect can lead to using different rules for different partial derivatives. For instance, the following function requires the use of the quotient rule when taking the partial with respect to $y$ but not $x$:

$$f_x=\dfrac{\partial}{\partial x} \frac{x^2y}{y+1} = \frac{1}{y+1}\dfrac{\partial}{\partial x}(x^2y) = \frac{1}{y+1}(2xy) = \frac{2xy}{y+1}$$

$$f_y = \dfrac{\partial}{\partial y} \frac{x^2y}{y+1} = x^2 \dfrac{\partial}{\partial y}\frac{y}{y+1}=x^2\frac{\left(\dfrac{\partial}{\partial y}y\right)(y+1)-y \left(\dfrac{\partial}{\partial y}(y+1) \right)}{(y+1)^2}$$
$$= x^2\frac{(y+1)-y}{(y+1)^2} = \frac{x^2}{(y+1)^2}$$
