Here are the step-by-step solutions for finding the second derivative $\frac{d^{2}y}{dx^{2}}$ using implicit differentiation.

---

### (a) $x^{2}-y^{2}=1$

**Step 1: Find the first derivative $\frac{dy}{dx}$.**
Differentiate both sides with respect to $x$:
$$\frac{d}{dx}(x^{2}) - \frac{d}{dx}(y^{2}) = \frac{d}{dx}(1)$$

$$2x - 2y\frac{dy}{dx} = 0$$

Isolate $\frac{dy}{dx}$:
$$2x = 2y\frac{dy}{dx}$$

$$\frac{dy}{dx} = \frac{x}{y}$$

**Step 2: Find the second derivative $\frac{d^{2}y}{dx^{2}}$.**
Differentiate $\frac{dy}{dx} = \frac{x}{y}$ with respect to $x$ using the quotient rule:
$$\frac{d^{2}y}{dx^{2}} = \frac{\frac{d}{dx}(x) \cdot y - x \cdot \frac{d}{dx}(y)}{y^{2}}$$

$$\frac{d^{2}y}{dx^{2}} = \frac{1 \cdot y - x \cdot \frac{dy}{dx}}{y^{2}}$$

**Step 3: Substitute $\frac{dy}{dx} = \frac{x}{y}$ into the equation.**
$$\frac{d^{2}y}{dx^{2}} = \frac{y - x\left(\frac{x}{y}\right)}{y^{2}}$$

$$\frac{d^{2}y}{dx^{2}} = \frac{\frac{y^{2} - x^{2}}{y}}{y^{2}} = \frac{y^{2} - x^{2}}{y^{3}}$$

**Step 4: Simplify using the original equation.**
Since the original equation states $x^{2} - y^{2} = 1$, we know that $y^{2} - x^{2} = -1$. Substituting this in:
$$\frac{d^{2}y}{dx^{2}} = \frac{-1}{y^{3}}$$

---

### (b) $y+\cos y=x-\frac{\pi}{3}$

**Step 1: Find the first derivative $\frac{dy}{dx}$.**
Differentiate both sides with respect to $x$:
$$\frac{d}{dx}(y) + \frac{d}{dx}(\cos y) = \frac{d}{dx}(x) - \frac{d}{dx}\left(\frac{\pi}{3}\right)$$

$$\frac{dy}{dx} - \sin y\frac{dy}{dx} = 1 - 0$$

Factor out $\frac{dy}{dx}$:
$$\frac{dy}{dx}(1 - \sin y) = 1$$

$$\frac{dy}{dx} = \frac{1}{1 - \sin y} = (1 - \sin y)^{-1}$$

**Step 2: Find the second derivative $\frac{d^{2}y}{dx^{2}}$.**
Differentiate with respect to $x$ using the chain rule:
$$\frac{d^{2}y}{dx^{2}} = -1(1 - \sin y)^{-2} \cdot \frac{d}{dx}(1 - \sin y)$$

$$\frac{d^{2}y}{dx^{2}} = -\frac{1}{(1 - \sin y)^{2}} \cdot \left(-\cos y \frac{dy}{dx}\right)$$

$$\frac{d^{2}y}{dx^{2}} = \frac{\cos y}{(1 - \sin y)^{2}} \cdot \frac{dy}{dx}$$

**Step 3: Substitute $\frac{dy}{dx} = \frac{1}{1 - \sin y}$ into the equation.**
$$\frac{d^{2}y}{dx^{2}} = \frac{\cos y}{(1 - \sin y)^{2}} \cdot \left(\frac{1}{1 - \sin y}\right)$$

$$\frac{d^{2}y}{dx^{2}} = \frac{\cos y}{(1 - \sin y)^{3}}$$