
## Step 1: Complete the Square

The expression under the radical ($x^2 + 2x$) needs to be rewritten into a standard square form ($u^2 \pm a^2$).

1. Take half of the $x$-coefficient ($\frac{2}{2} = 1$) and square it ($1^2 = 1$).
    
2. Add and subtract this value inside the expression:
    
    $$x^2 + 2x + 1 - 1$$
    
3. Group the perfect square trinomial:
    
    $$(x^2 + 2x + 1) - 1 = (x + 1)^2 - 1$$
    

Now substitute this back into the radical. The integral becomes:

$$\int \sqrt{(x + 1)^2 - 1} \, dx$$

## Step 2: Choose the Substitution

The expression inside the radical matches the form $\sqrt{u^2 - a^2}$, where $a^2 = 1$ (so $a = 1$) and $u = x + 1$. For this structure, we use the secant substitution:

- **Let:** $x + 1 = \sec\theta \implies x = \sec\theta - 1$
    
- **Differentiate both sides:** $dx = \sec\theta\tan\theta \, d\theta$
    

## Step 3: Substitute into the Integral

Transform the radical term using the Pythagorean identity $\sec^2\theta - 1 = \tan^2\theta$:

$$\sqrt{(x + 1)^2 - 1} = \sqrt{\sec^2\theta - 1} = \sqrt{\tan^2\theta} = \tan\theta$$

Now substitute both the simplified radical and $dx$ back into the integral:

$$\int (\tan\theta) \cdot (\sec\theta\tan\theta \, d\theta) = \int \sec\theta\tan^2\theta \, d\theta$$

## Step 4: Evaluate the Trigonometric Integral

To integrate $\sec\theta\tan^2\theta$, convert $\tan^2\theta$ back into secant terms using $\tan^2\theta = \sec^2\theta - 1$:

$$\int \sec\theta(\sec^2\theta - 1) \, d\theta = \int (\sec^3\theta - \sec\theta) \, d\theta$$

This leaves us with two separate standard trigonometric integrals to evaluate:

1. **The integral of $\sec^3\theta$** is a classic result typically solved using integration by parts:
    
    $$\int \sec^3\theta \, d\theta = \frac{1}{2}\sec\theta\tan\theta + \frac{1}{2}\ln|\sec\theta + \tan\theta|$$
    
2. **The integral of $\sec\theta$** is a known standard log rule:
    
    $$\int \sec\theta \, d\theta = \ln|\sec\theta + \tan\theta|$$
    

Combine these two parts together:

$$\left( \frac{1}{2}\sec\theta\tan\theta + \frac{1}{2}\ln|\sec\theta + \tan\theta| \right) - \ln|\sec\theta + \tan\theta| + C$$

Combine the like logarithmic terms ($\frac{1}{2} - 1 = -\frac{1}{2}$):

$$\frac{1}{2}\sec\theta\tan\theta - \frac{1}{2}\ln|\sec\theta + \tan\theta| + C$$

## Step 5: Convert Back to the Original Variable $x$

We need to revert the trigonometric components back into functions of $x$ using our initial substitution relationships:

- From our substitution, we directly know that $\sec\theta = x + 1$.
    
- From Step 3, we already established that $\tan\theta = \sqrt{(x + 1)^2 - 1} = \sqrt{x^2 + 2x}$.
    

Substitute these algebraic terms back into our integrated expression:

$$\frac{1}{2}(x + 1)\sqrt{x^2 + 2x} - \frac{1}{2}\ln\left| (x + 1) + \sqrt{x^2 + 2x} \right| + C$$

## Final Answer

$$\int \sqrt{x^2 + 2x} \, dx = \frac{1}{2}(x + 1)\sqrt{x^2 + 2x} - \frac{1}{2}\ln\left| x + 1 + \sqrt{x^2 + 2x} \right| + C$$