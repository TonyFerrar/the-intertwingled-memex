## Solution for Problem 3

**Function:** $$r(\theta) = \frac{\sin \theta}{1 + \csc \theta}$$

While you can differentiate this directly using the **Quotient Rule**, simplifying the trigonometric expression first will make the derivative much easier to compute and automatically simplified.

### Step 1: Simplify the Function First
Recall that $\csc \theta = \frac{1}{\sin \theta}$. Substitute this into the function:

$$r(\theta) = \frac{\sin \theta}{1 + \frac{1}{\sin \theta}}$$

To clear the fraction in the denominator, multiply both the numerator and the denominator by $\sin \theta$:

$$r(\theta) = \frac{\sin \theta \cdot \sin \theta}{\left(1 + \frac{1}{\sin \theta}\right) \sin \theta}$$

$$r(\theta) = \frac{\sin^2 \theta}{\sin \theta + 1}$$

---

### Step 2: Apply the Quotient Rule
The quotient rule states that for a function $\frac{u}{v}$:
$$\frac{d}{d\theta}\left(\frac{u}{v}\right) = \frac{u'v - uv'}{v^2}$$

Assigning our terms:
* $u = \sin^2 \theta \implies u' = 2\sin \theta \cos \theta$ *(using the Chain Rule)*
* $v = \sin \theta + 1 \implies v' = \cos \theta$

Plugging these into the formula:

$$r'(\theta) = \frac{(2\sin \theta \cos \theta)(\sin \theta + 1) - (\sin^2 \theta)(\cos \theta)}{(\sin \theta + 1)^2}$$

---

### Step 3: Distribute and Simplify
Distribute the terms in the numerator:

$$r'(\theta) = \frac{2\sin^2 \theta \cos \theta + 2\sin \theta \cos \theta - \sin^2 \theta \cos \theta shadow}{(\sin \theta + 1)^2}$$

Combine the like terms ($2\sin^2 \theta \cos \theta - \sin^2 \theta \cos \theta$):

$$r'(\theta) = \frac{\sin^2 \theta \cos \theta + 2\sin \theta \cos \theta}{(\sin \theta + 1)^2}$$

Factor out the common factor $\sin \theta \cos \theta$ from the numerator:

$$r'(\theta) = \frac{\sin \theta \cos \theta (\sin \theta + 2)}{(\sin \theta + 1)^2}$$