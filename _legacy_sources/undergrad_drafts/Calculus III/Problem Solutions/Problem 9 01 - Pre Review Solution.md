Here is the step-by-step solution to evaluate the limit for **Question 9**.

$$\lim_{x \to -5} \frac{\sqrt{-x-2} - \sqrt{3}}{-x-5}$$

### Step 1: Substitute the Value to Check for an Indeterminate Form

First, test if the limit can be evaluated by directly substituting $x = -5$ into the expression:

$$\text{Numerator:} \quad \sqrt{-(-5)-2} - \sqrt{3} = \sqrt{5-2} - \sqrt{3} = \sqrt{3} - \sqrt{3} = 0$$

$$\text{Denominator:} \quad -(-5) - 5 = 5 - 5 = 0$$

Since direct substitution results in $\frac{0}{0}$, this is an **indeterminate form**. Because the numerator contains radical expressions, we can resolve this by rationalizing the numerator using its conjugate.

### Step 2: Multiply by the Conjugate

The conjugate of the numerator $\sqrt{-x-2} - \sqrt{3}$ is $\sqrt{-x-2} + \sqrt{3}$. Multiply both the numerator and the denominator by this conjugate expression:

$$\lim_{x \to -5} \frac{\sqrt{-x-2} - \sqrt{3}}{-x-5} \cdot \frac{\sqrt{-x-2} + \sqrt{3}}{\sqrt{-x-2} + \sqrt{3}}$$

### Step 3: Simplify the Expression

In the numerator, apply the difference of squares formula, $(a-b)(a+b) = a^2 - b^2$:

$$\text{Numerator:} \quad \left(\sqrt{-x-2}\right)^2 - \left(\sqrt{3}\right)^2 = (-x - 2) - 3 = -x - 5$$

Now rewrite the limit with the simplified numerator:

$$\lim_{x \to -5} \frac{-x - 5}{(-x - 5)\left(\sqrt{-x-2} + \sqrt{3}\right)}$$

Since $x$ approaches $-5$ but is not exactly $-5$, the factor $(-x - 5)$ is non-zero. We can safely cancel out the common factor of $(-x - 5)$ from both the top and bottom:

$$\lim_{x \to -5} \frac{1}{\sqrt{-x-2} + \sqrt{3}}$$

### Step 4: Evaluate the Limit by Substitution

Now that the indeterminate form is removed, substitute $x = -5$ into the simplified function:

$$\frac{1}{\sqrt{-(-5)-2} + \sqrt{3}} = \frac{1}{\sqrt{5-2} + \sqrt{3}} = \frac{1}{\sqrt{3} + \sqrt{3}} = \frac{1}{2\sqrt{3}}$$

To write the final answer in conventional exact form, rationalize the denominator by multiplying the numerator and denominator by $\sqrt{3}$:

$$\frac{1}{2\sqrt{3}} \cdot \frac{\sqrt{3}}{\sqrt{3}} = \frac{\sqrt{3}}{2 \cdot 3} = \frac{\sqrt{3}}{6}$$

### Final Answer

$$\frac{\sqrt{3}}{6} \quad \left(\text{or } \frac{1}{2\sqrt{3}}\right)$$