## Step 1: Choose the Substitution

When an integrand contains a term of the form $a^2 - x^2$, the standard approach is to use the sine substitution: $x = a\sin\theta$.

Here, $a^2 = 4$, which means $a = 2$.

- **Let:** $x = 2\sin\theta$
    
- **Differentiate both sides:** $dx = 2\cos\theta \, d\theta$
    

## Step 2: Substitute into the Integral

Now, transform the expression $(4 - x^2)$ using the trigonometric identity $\text{1} - \sin^2\theta = \cos^2\theta$:

$$4 - x^2 = 4 - (2\sin\theta)^2 = 4 - 4\sin^2\theta = 4(1 - \sin^2\theta) = 4\cos^2\theta$$

Now, raise this expression to the power of $3/2$:

$$(4 - x^2)^{3/2} = (4\cos^2\theta)^{3/2} = (2\cos\theta)^3 = 8\cos^3\theta$$

Substitute both $(4 - x^2)^{3/2}$ and $dx$ back into the original integral:

$$\int (8\cos^3\theta) \cdot (2\cos\theta \, d\theta) = \int 16\cos^4\theta \, d\theta$$

## Step 3: Evaluate the Trigonometric Integral

To integrate $\cos^4\theta$, we can use the standard reduction formula for powers of cosine, $\int \cos^n\theta \, d\theta = \frac{\cos^{n-1}\theta\sin\theta}{n} + \frac{n-1}{n}\int \cos^{n-2}\theta \, d\theta$:

$$\int \cos^4\theta \, d\theta = \frac{\cos^3\theta\sin\theta}{4} + \frac{3}{4}\int \cos^2\theta \, d\theta$$

Using the power-reduction identity $\int \cos^2\theta \, d\theta = \frac{\theta}{2} + \frac{\sin\theta\cos\theta}{2}$, we get:

$$\int \cos^4\theta \, d\theta = \frac{\cos^3\theta\sin\theta}{4} + \frac{3}{4}\left(\frac{\theta}{2} + \frac{\sin\theta\cos\theta}{2}\right) = \frac{\cos^3\theta\sin\theta}{4} + \frac{3\theta}{8} + \frac{3\sin\theta\cos\theta}{8}$$

Now, multiply the entire antiderivative by the constant **16**:

$$16 \left( \frac{\cos^3\theta\sin\theta}{4} + \frac{3\theta}{8} + \frac{3\sin\theta\cos\theta}{8} \right) = 4\cos^3\theta\sin\theta + 6\theta + 6\sin\theta\cos\theta + C$$

To make back-substitution simpler, factor out common trigonometric terms where possible by rewriting $\cos^3\theta$ as $\cos\theta(1-\sin^2\theta)$:

$$= 4\sin\theta\cos\theta(1-\sin^2\theta) + 6\theta + 6\sin\theta\cos\theta + C$$

$$= 4\sin\theta\cos\theta - 4\sin^3\theta\cos\theta + 6\theta + 6\sin\theta\cos\theta + C$$

$$= 6\theta + 10\sin\theta\cos\theta - 4\sin^3\theta\cos\theta + C$$

## Step 4: Convert Back to the Original Variable $x$

We must return to the variable $x$ using our initial substitution relations from the reference right triangle:

- From $x = 2\sin\theta$, we know that $\sin\theta = \frac{x}{2}$ and $\theta = \arcsin\left(\frac{x}{2}\right)$.
    
- Using the Pythagorean theorem, the adjacent side of the triangle is $\sqrt{4-x^2}$, so $\cos\theta = \frac{\sqrt{4-x^2}}{2}$.
    

Substitute these expressions back into our integrated result:

$$= 6\arcsin\left(\frac{x}{2}\right) + 10\left(\frac{x}{2}\right)\left(\frac{\sqrt{4-x^2}}{2}\right) - 4\left(\frac{x}{2}\right)^3\left(\frac{\sqrt{4-x^2}}{2}\right) + C$$

Simplify each algebraic term:

$$= 6\arcsin\left(\frac{x}{2}\right) + \frac{5x\sqrt{4-x^2}}{2} - \frac{x^3\sqrt{4-x^2}}{4} + C$$

Combine the last two fractions under a common denominator of **4**:

$$= 6\arcsin\left(\frac{x}{2}\right) + \frac{10x\sqrt{4-x^2} - x^3\sqrt{4-x^2}}{4} + C$$

## Final Answer

$$\int (4 - x^2)^{3/2} \, dx = 6\arcsin\left(\frac{x}{2}\right) + \frac{x(10 - x^2)\sqrt{4-x^2}}{4} + C$$