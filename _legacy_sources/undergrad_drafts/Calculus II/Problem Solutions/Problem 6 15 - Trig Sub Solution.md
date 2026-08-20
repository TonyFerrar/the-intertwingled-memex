
## Step 1: Choose the Substitution

The integrand contains a term of the form $\sqrt{x^2 - a^2}$, where $a^2 = 4$ (so $a = 2$). For this form, we use the secant substitution:

- **Let:** $x = 2\sec\theta$
    
- **Differentiate both sides:** $dx = 2\sec\theta\tan\theta \, d\theta$
    

## Step 2: Substitute into the Integral

Next, transform the radical expression $\sqrt{x^2 - 4}$ using the Pythagorean identity $\sec^2\theta - 1 = \tan^2\theta$:

$$\sqrt{x^2 - 4} = \sqrt{(2\sec\theta)^2 - 4} = \sqrt{4\sec^2\theta - 4} = \sqrt{4(\sec^2\theta - 1)} = \sqrt{4\tan^2\theta} = 2\tan\theta$$

Now, substitute $x$, $\sqrt{x^2 - 4}$, and $dx$ back into the original integral:

$$\int \frac{2\sec\theta}{2\tan\theta} \cdot (2\sec\theta\tan\theta \, d\theta)$$

Simplify the expression by canceling out the common $2\tan\theta$ terms from the numerator and denominator:

$$\int (2\sec\theta) \cdot (\sec\theta \, d\theta) = \int 2\sec^2\theta \, d\theta$$

## Step 3: Evaluate the Trigonometric Integral

The integral of $\sec^2\theta$ is a basic, standard integration formula because the derivative of $\tan\theta$ is $\sec^2\theta$:

$$\int 2\sec^2\theta \, d\theta = 2\tan\theta + C$$

## Step 4: Convert Back to the Original Variable $x$

We need to convert the result back to the original variable $x$. Refer back to our step 2 simplification where we already established the relationship for $\tan\theta$:

$$\sqrt{x^2 - 4} = 2\tan\theta \implies \tan\theta = \frac{\sqrt{x^2 - 4}}{2}$$

Substitute this directly back into our integrated result:

$$2 \left( \frac{\sqrt{x^2 - 4}}{2} \right) + C$$

Cancel out the constant **2**:

$$\sqrt{x^2 - 4} + C$$

## Final Answer

$$\int \frac{x}{\sqrt{x^2 - 4}} \, dx = \sqrt{x^2 - 4} + C$$

> **Pro-Tip:** While trigonometric substitution works perfectly here, this specific integral can be solved much faster using standard $u$-substitution! If you let $u = x^2 - 4$, then $du = 2x \, dx$ (meaning $x \, dx = \frac{1}{2} \, du$). The integral becomes $\frac{1}{2} \int u^{-1/2} \, du$, which yields the exact same answer ($\sqrt{x^2 - 4} + C$) in just two steps. Keep an eye out for that shortcut on future problems where an $x$ sits perfectly outside the radical!