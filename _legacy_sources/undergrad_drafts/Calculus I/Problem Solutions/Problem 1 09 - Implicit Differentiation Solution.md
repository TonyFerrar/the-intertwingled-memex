Here are the step-by-step solutions for finding $\frac{dy}{dx}$ using implicit differentiation.

---

### (a) $x^{5}+y^{5}=1+xy$

**Step 1: Differentiate both sides with respect to $x$.**
Remember to apply the chain rule to terms with $y$ (treating $y$ as a function of $x$), and use the product rule for $xy$.
$$\frac{d}{dx}(x^{5}) + \frac{d}{dx}(y^{5}) = \frac{d}{dx}(1) + \frac{d}{dx}(xy)$$

$$5x^{4} + 5y^{4}\frac{dy}{dx} = 0 + \left(1 \cdot y + x \cdot \frac{dy}{dx}\right)$$

$$5x^{4} + 5y^{4}\frac{dy}{dx} = y + x\frac{dy}{dx}$$

**Step 2: Collect all terms involving $\frac{dy}{dx}$ on one side.**
Move the $x\frac{dy}{dx}$ term to the left and $5x^{4}$ to the right:
$$5y^{4}\frac{dy}{dx} - x\frac{dy}{dx} = y - 5x^{4}$$

**Step 3: Factor out $\frac{dy}{dx}$ and solve.**
$$\frac{dy}{dx}(5y^{4} - x) = y - 5x^{4}$$

$$\frac{dy}{dx} = \frac{y - 5x^{4}}{5y^{4} - x}$$

---

### (b) $e^{x-y}=2xy$

**Step 1: Differentiate both sides with respect to $x$.**
Use the chain rule on the left side and the product rule on the right side.
$$e^{x-y} \cdot \frac{d}{dx}(x - y) = 2\left(1 \cdot y + x \cdot \frac{dy}{dx}\right)$$

$$e^{x-y}\left(1 - \frac{dy}{dx}\right) = 2y + 2x\frac{dy}{dx}$$

**Step 2: Expand the left side to isolate $\frac{dy}{dx}$.**
$$e^{x-y} - e^{x-y}\frac{dy}{dx} = 2y + 2x\frac{dy}{dx}$$

**Step 3: Group the $\frac{dy}{dx}$ terms together.**
Move the $\frac{dy}{dx}$ terms to the right side to keep things positive:
$$e^{x-y} - 2y = 2x\frac{dy}{dx} + e^{x-y}\frac{dy}{dx}$$

**Step 4: Factor out $\frac{dy}{dx}$ and solve.**
$$e^{x-y} - 2y = \frac{dy}{dx}(2x + e^{x-y})$$

$$\frac{dy}{dx} = \frac{e^{x-y} - 2y}{2x + e^{x-y}}$$

*(Note: Since original equation states $e^{x-y} = 2xy$, you can also substitute $2xy$ in place of $e^{x-y}$ to get $\frac{2xy - 2y}{2x + 2xy} = \frac{2y(x - 1)}{2x(1 + y)} = \frac{y(x - 1)}{x(1 + y)}$, but the un-substituted form is perfectly correct.)*

---

### (c) $\sin\left(\frac{y}{x}\right)=2x^{3}-3y^{2}$

**Step 1: Differentiate both sides with respect to $x$.**
Use the chain rule on the left side (with the quotient rule for the inner function $\frac{y}{x}$) and standard implicit differentiation on the right side.
$$\cos\left(\frac{y}{x}\right) \cdot \frac{d}{dx}\left(\frac{y}{x}\right) = 6x^{2} - 6y\frac{dy}{dx}$$

$$\cos\left(\frac{y}{x}\right) \cdot \left[\frac{\frac{dy}{dx} \cdot x - y \cdot 1}{x^{2}}\right] = 6x^{2} - 6y\frac{dy}{dx}$$

**Step 2: Multiply through by $x^{2}$ to eliminate the fraction.**
$$\cos\left(\frac{y}{x}\right) \cdot \left(x\frac{dy}{dx} - y\right) = 6x^{4} - 6x^{2}y\frac{dy}{dx}$$

**Step 3: Distribute the cosine term.**
$$x\cos\left(\frac{y}{x}\right)\frac{dy}{dx} - y\cos\left(\frac{y}{x}\right) = 6x^{4} - 6x^{2}y\frac{dy}{dx}$$

**Step 4: Gather all $\frac{dy}{dx}$ terms on the left.**
$$x\cos\left(\frac{y}{x}\right)\frac{dy}{dx} + 6x^{2}y\frac{dy}{dx} = 6x^{4} + y\cos\left(\frac{y}{x}\right)$$

**Step 5: Factor out $\frac{dy}{dx}$ and solve.**
$$\frac{dy}{dx}\left[x\cos\left(\frac{y}{x}\right) + 6x^{2}y\right] = 6x^{4} + y\cos\left(\frac{y}{x}\right)$$

$$\frac{dy}{dx} = \frac{6x^{4} + y\cos\left(\frac{y}{x}\right)}{x\cos\left(\frac{y}{x}\right) + 6x^{2}y}$$