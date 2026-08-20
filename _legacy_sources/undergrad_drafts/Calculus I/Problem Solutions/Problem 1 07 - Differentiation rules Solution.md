## Proof: Derivative of $\cot(x)$

**Goal:** Prove that $\frac{d}{dx} \cot(x) = -\csc^2(x)$ using the quotient rule.

### 1. Rewrite the function
First, express $\cot(x)$ in terms of sine and cosine:
$$\cot(x) = \frac{\cos(x)}{\sin(x)}$$

### 2. Apply the Quotient Rule
The quotient rule states that for a function $\frac{u}{v}$:
$$\frac{d}{dx}\left(\frac{u}{v}\right) = \frac{u'v - uv'}{v^2}$$

Assigning our terms:
* $u = \cos(x) \implies u' = -\sin(x)$
* $v = \sin(x) \implies v' = \cos(x)$

Plugging these into the quotient rule formula:
$$\frac{d}{dx} \cot(x) = \frac{(-\sin(x))(\sin(x)) - (\cos(x))(\cos(x))}{(\sin(x))^2}$$

### 3. Simplify the Numerator
Multiply the terms in the numerator:
$$\frac{d}{dx} \cot(x) = \frac{-\sin^2(x) - \cos^2(x)}{\sin^2(x)}$$

Factor out a negative one ($-1$) from the numerator:
$$\frac{d}{dx} \cot(x) = \frac{-(\sin^2(x) + \cos^2(x))}{\sin^2(x)}$$

### 4. Apply the Pythagorean Identity
Recall the fundamental trigonometric identity: $\sin^2(x) + \cos^2(x) = 1$. Substitute this into the numerator:
$$\frac{d}{dx} \cot(x) = \frac{-1}{\sin^2(x)}$$

### 5. Final Trigonometric Substitution
Since the reciprocal of $\sin(x)$ is $\csc(x)$, it follows that $\frac{1}{\sin^2(x)} = \csc^2(x)$:
$$\frac{d}{dx} \cot(x) = -\csc^2(x)$$

**$\blacksquare$ Proof Complete**