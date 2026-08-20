## Step 1: Choose the Substitution

The integrand contains a term of the form $\sqrt{x^2 + a^2}$, where $a^2 = 4$ (so $a = 2$). For this form, the standard choice is the tangent substitution: $x = a\tan\theta$.

- **Let:** $x = 2\tan\theta$
    
- **Differentiate both sides:** $dx = 2\sec^2\theta \, d\theta$
    

## Step 2: Substitute into the Integral

Next, transform the radical term $\sqrt{x^2+4}$ using the fundamental Pythagorean identity $\tan^2\theta + 1 = \sec^2\theta$:

$$\sqrt{x^2+4} = \sqrt{(2\tan\theta)^2 + 4} = \sqrt{4\tan^2\theta + 4} = \sqrt{4(\tan^2\theta + 1)} = \sqrt{4\sec^2\theta} = 2\sec\theta$$

We also need to square $x$ for the denominator:

$$x^2 = (2\tan\theta)^2 = 4\tan^2\theta$$

Now, substitute $x^2$, $\sqrt{x^2+4}$, and $dx$ back into the original algebraic integral:

$$\int \frac{1}{(4\tan^2\theta)(2\sec\theta)} \cdot (2\sec^2\theta \, d\theta)$$

Simplify the expression by canceling out common terms:

$$\int \frac{2\sec^2\theta}{8\tan^2\theta\sec\theta} \, d\theta = \frac{1}{4}\int \frac{\sec\theta}{\tan^2\theta} \, d\theta$$

## Step 3: Evaluate the Trigonometric Integral

To solve $\int \frac{\sec\theta}{\tan^2\theta} \, d\theta$, convert the trigonometric functions into sine and cosine terms:

- $\sec\theta = \frac{1}{\cos\theta}$
    
- $\tan^2\theta = \frac{\sin^2\theta}{\cos^2\theta}$
    

Now expand the fraction:

$$\frac{\sec\theta}{\tan^2\theta} = \frac{\frac{1}{\cos\theta}}{\frac{\sin^2\theta}{\cos^2\theta}} = \frac{1}{\cos\theta} \cdot \frac{\cos^2\theta}{\sin^2\theta} = \frac{\cos\theta}{\sin^2\theta}$$

This simplifies our integral into:

$$\frac{1}{4}\int \frac{\cos\theta}{\sin^2\theta} \, d\theta$$

We can evaluate this easily using standard $u$-substitution:

- **Let:** $u = \sin\theta$
    
- **Differentiate:** $du = \cos\theta \, d\theta$
    

$$\frac{1}{4}\int \frac{1}{u^2} \, du = \frac{1}{4}\int u^{-2} \, du = \frac{1}{4} \left( \frac{u^{-1}}{-1} \right) = -\frac{1}{4u} + C$$

Substituting $u = \sin\theta$ back gives us:

$$-\frac{1}{4\sin\theta} + C = -\frac{1}{4}\csc\theta + C$$

## Step 4: Convert Back to the Original Variable $x$

We must return to our original variable $x$. Refer back to our initial substitution relation:

$$\text{since } x = 2\tan\theta \implies \tan\theta = \frac{x}{2} = \frac{\text{opposite}}{\text{adjacent}}$$

Using a reference right triangle:

- The side **opposite** to $\theta$ is $x$
    
- The side **adjacent** to $\theta$ is **2**
    
- The **hypotenuse** is $\sqrt{x^2 + 2^2} = \sqrt{x^2+4}$
    

From this triangle, find cosecant ($\csc\theta$):

$$\csc\theta = \frac{\text{hypotenuse}}{\text{opposite}} = \frac{\sqrt{x^2+4}}{x}$$

Substitute this value back into our integrated result:

$$-\frac{1}{4} \cdot \left(\frac{\sqrt{x^2+4}}{x}\right) + C$$

## Final Answer

$$\int \frac{1}{x^2\sqrt{x^2+4}} \, dx = -\frac{\sqrt{x^2+4}}{4x} + C$$