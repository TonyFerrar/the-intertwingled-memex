# Problem Solution

**Problem:** Find the derivative of the following using Prime Notation:
$$f(x) = \sin^{-1}(5x^{3})$$

---

### Step 1: Identify the relevant derivative rules
To differentiate an inverse sine function with an inner function, we use the derivative rule for arcsine combined with the Chain Rule:
$$\frac{d}{dx}[\sin^{-1}(u)] = \frac{u'}{\sqrt{1 - u^2}}$$

In this case, our inner function is:
$$u = 5x^{3}$$

### Step 2: Differentiate the inner function
Find the derivative of the inner function, $u'$, using the Power Rule:
$$u' = \frac{d}{dx}(5x^{3}) = 15x^{2}$$

### Step 3: Apply the Chain Rule (Prime Notation)
Substitute $u$ and $u'$ into the derivative formula:
$$f'(x) = \frac{15x^{2}}{\sqrt{1 - (5x^{3})^2}}$$

### Step 4: Simplify the denominator
Simplify the squared expression inside the radical:
$$(5x^{3})^2 = 25x^{6}$$

Putting it all together, the final derivative is:
$$f'(x) = \frac{15x^{2}}{\sqrt{1 - 25x^{6}}}$$