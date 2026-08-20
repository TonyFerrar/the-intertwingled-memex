# Learning Activity #5 Solutions
## Rates of Change as Limits: Limit Definition of Derivative

---

### 4. Using the limit definition of the derivative, find the derivative of $g(x) = \sqrt{2x+1}$.

The limit definition of the derivative is:
$$g'(x) = \lim_{h \to 0} \frac{g(x+h) - g(x)}{h}$$

#### Step 1: Set up the difference quotient
Substitute $(x+h)$ into the function for $x$:
$$g(x+h) = \sqrt{2(x+h)+1} = \sqrt{2x+2h+1}$$

Now, plug $g(x+h)$ and $g(x)$ into the limit formula:
$$g'(x) = \lim_{h \to 0} \frac{\sqrt{2x+2h+1} - \sqrt{2x+1}}{h}$$

#### Step 2: Rationalize the numerator
Multiply both the numerator and the denominator by the conjugate of the numerator, which is $\sqrt{2x+2h+1} + \sqrt{2x+1}$:
$$g'(x) = \lim_{h \to 0} \frac{\left(\sqrt{2x+2h+1} - \sqrt{2x+1}\right)\cdot\left(\sqrt{2x+2h+1} + \sqrt{2x+1}\right)}{h\cdot\left(\sqrt{2x+2h+1} + \sqrt{2x+1}\right)}$$

Using the difference of squares identity, $(a-b)(a+b) = a^2 - b^2$, the numerator simplifies to:
$$g'(x) = \lim_{h \to 0} \frac{(2x + 2h + 1) - (2x + 1)}{h\left(\sqrt{2x+2h+1} + \sqrt{2x+1}\right)}$$

#### Step 3: Simplify the numerator
Distribute the negative sign and combine like terms to isolate $h$ terms:
$$g'(x) = \lim_{h \to 0} \frac{2x + 2h + 1 - 2x - 1}{h\left(\sqrt{2x+2h+1} + \sqrt{2x+1}\right)}$$
$$g'(x) = \lim_{h \to 0} \frac{2h}{h\left(\sqrt{2x+2h+1} + \sqrt{2x+1}\right)}$$

#### Step 4: Cancel $h$ from the fraction
Divide out $h$ from the numerator and denominator to remove the zero in the denominator:
$$g'(x) = \lim_{h \to 0} \frac{2}{\sqrt{2x+2h+1} + \sqrt{2x+1}}$$

#### Step 5: Evaluate the limit
Substitute $h = 0$ into the expression:
$$g'(x) = \frac{2}{\sqrt{2x+2(0)+1} + \sqrt{2x+1}}$$
$$g'(x) = \frac{2}{\sqrt{2x+1} + \sqrt{2x+1}}$$
$$g'(x) = \frac{2}{2\sqrt{2x+1}}$$

#### Step 6: Final Simplification
Cancel out the common factor of $2$:
$$g'(x) = \frac{1}{\sqrt{2x+1}}$$