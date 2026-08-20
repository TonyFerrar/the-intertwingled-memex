# Problem Solution / Proof

**Problem:** Use the chain and product rules to prove the quotient rule. In other words, show that if:
$$y = \frac{f(x)}{g(x)}$$
then
$$\frac{dy}{dx} = \frac{f^{\prime}(x)g(x)-g^{\prime}(x)f(x)}{[g(x)]^{2}}$$

---

### Step 1: Rewrite the Quotient as a Product
Instead of a fraction, express the denominator as a function raised to the power of $-1$:
$$y = f(x) \cdot [g(x)]^{-1}$$

### Step 2: Apply the Product Rule
The function is now a product of $u = f(x)$ and $v = [g(x)]^{-1}$. 
Recall the Product Rule: $\frac{dy}{dx} = u'v + uv'$

Applying this gives:
$$\frac{dy}{dx} = \left( \frac{d}{dx}[f(x)] \right) \cdot [g(x)]^{-1} + f(x) \cdot \left( \frac{d}{dx}[[g(x)]^{-1}] \right)$$

$$\frac{dy}{dx} = f'(x)[g(x)]^{-1} + f(x) \cdot \left( \frac{d}{dx}[[g(x)]^{-1}] \right)$$

### Step 3: Apply the Chain Rule to the second term
To differentiate the inner-outer composite function $[g(x)]^{-1}$, apply the Power Rule combined with the Chain Rule:
$$\frac{d}{dx}[[g(x)]^{-1}] = -1 \cdot [g(x)]^{-2} \cdot g'(x)$$

Substitute this back into our primary derivative equation:
$$\frac{dy}{dx} = f'(x)[g(x)]^{-1} + f(x) \cdot \left( -[g(x)]^{-2} \cdot g'(x) \right)$$

$$\frac{dy}{dx} = f'(x)[g(x)]^{-1} - f(x)g'(x)[g(x)]^{-2}$$

### Step 4: Express with positive exponents
Convert the negative exponents back into fractional form:
$$\frac{dy}{dx} = \frac{f'(x)}{g(x)} - \frac{f(x)g'(x)}{[g(x)]^2}$$

### Step 5: Find a common denominator and simplify
To combine the two terms into a single fraction, multiply the numerator and denominator of the first term by $g(x)$ so that both terms share the common denominator $[g(x)]^2$:
$$\frac{dy}{dx} = \frac{f'(x) \cdot g(x)}{g(x) \cdot g(x)} - \frac{f(x)g'(x)}{[g(x)]^2}$$

$$\frac{dy}{dx} = \frac{f'(x)g(x)}{[g(x)]^2} - \frac{g'(x)f(x)}{[g(x)]^2}$$

Combine the numerators over the shared denominator:
$$\frac{dy}{dx} = \frac{f^{\prime}(x)g(x)-g^{\prime}(x)f(x)}{[g(x)]^{2}}$$

### Conclusion
The identity has been verified successfully. $\blacksquare$