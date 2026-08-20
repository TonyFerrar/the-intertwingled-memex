## Step 1: Complete the Square

The quadratic expression under the radical ($3 - 2x - x^2$) isn't in a standard $a^2 - u^2$ or $u^2 + a^2$ form yet. Let's rewrite it by completing the square:

1. Factor out a negative sign from the $x$ terms:
    
    $$3 - (x^2 + 2x)$$
    
2. Take half of the $x$-coefficient ($\frac{2}{2} = 1$), square it ($1^2 = 1$), and both add and subtract it inside:
    
    $$3 - (x^2 + 2x + 1 - 1)$$
    
3. Group the perfect square trinomial and distribute the outer negative sign to the remaining $-1$:
    
    $$3 - [(x + 1)^2 - 1] = 3 - (x + 1)^2 + 1 = 4 - (x + 1)^2$$
    

Now, substitute this back into our radical. The integral becomes:

$$\int \frac{x}{\sqrt{4 - (x + 1)^2}} \, dx$$

## Step 2: Choose the Substitution

The radical now perfectly matches the form $\sqrt{a^2 - u^2}$, where $a^2 = 4$ (so $a = 2$) and $u = x + 1$. For this form, we use the sine substitution:

- **Let:** $x + 1 = 2\sin\theta \implies x = 2\sin\theta - 1$
    
- **Differentiate both sides:** $dx = 2\cos\theta \, d\theta$
    

## Step 3: Substitute into the Integral

First, transform the radical denominator using the Pythagorean identity $1 - \sin^2\theta = \cos^2\theta$:

$$\sqrt{4 - (x + 1)^2} = \sqrt{4 - (2\sin\theta)^2} = \sqrt{4 - 4\sin^2\theta} = \sqrt{4(1 - \sin^2\theta)} = 2\cos\theta$$

Now substitute the expressions for $x$, the radical denominator, and $dx$ back into the integral:

$$\int \frac{2\sin\theta - 1}{2\cos\theta} \cdot (2\cos\theta \, d\theta)$$

Notice how beautifully the $2\cos\theta$ terms cancel out from the numerator and denominator:

$$\int (2\sin\theta - 1) \, d\theta$$

## Step 4: Evaluate the Trigonometric Integral

Now we integrate each term individually using standard trigonometric rules:

- $\int \sin\theta \, d\theta = -\cos\theta$
    
- $\int 1 \, d\theta = \theta$
    

This gives us the antiderivative in terms of $\theta$:

$$-2\cos\theta - \theta + C$$

## Step 5: Convert Back to the Original Variable $x$

We need to change our terms back to functions of $x$ using our initial substitution setup:

- From $x + 1 = 2\sin\theta$, we know that $\sin\theta = \frac{x + 1}{2}$, which means $\theta = \arcsin\left(\frac{x + 1}{2}\right)$.
    

To find $\cos\theta$, we use a reference right triangle where the **opposite** side is $(x + 1)$ and the **hypotenuse** is **2**:

- The **adjacent** side is found via the Pythagorean theorem: $\sqrt{2^2 - (x+1)^2} = \sqrt{3 - 2x - x^2}$
    
- Therefore, $\cos\theta = \frac{\text{adjacent}}{\text{hypotenuse}} = \frac{\sqrt{3 - 2x - x^2}}{2}$
    

Substitute these back into our integrated result:

$$-2\left( \frac{\sqrt{3 - 2x - x^2}}{2} \right) - \arcsin\left(\frac{x + 1}{2}\right) + C$$

Cancel the constant factor of **2** in the first term:

$$-\sqrt{3 - 2x - x^2} - \arcsin\left(\frac{x + 1}{2}\right) + C$$

## Final Answer

$$\int \frac{x}{\sqrt{3 - 2x - x^2}} \, dx = -\sqrt{3 - 2x - x^2} - \arcsin\left(\frac{x + 1}{2}\right) + C$$