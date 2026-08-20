
## Step 1: Choose the Substitution

The integrand contains a term of the form $\sqrt{x^2 - a^2}$, where $a^2 = 100$ (so $a = 10$). For this specific form, we use the secant substitution because the identity $\sec^2\theta - 1 = \tan^2\theta$ allows us to simplify the radical.

- **Let:** $x = 10\sec\theta$
    
- **Differentiate both sides:** $dx = 10\sec\theta\tan\theta \, d\theta$
    

## Step 2: Substitute into the Integral

Next, transform the radical expression $\sqrt{x^2 - 100}$ using the Pythagorean identity:

$$\sqrt{x^2 - 100} = \sqrt{(10\sec\theta)^2 - 100} = \sqrt{100\sec^2\theta - 100} = \sqrt{100(\sec^2\theta - 1)} = \sqrt{100\tan^2\theta} = 10\tan\theta$$

Now, substitute both the simplified radical and $dx$ back into the original integral:

$$\int \frac{1}{10\tan\theta} \cdot (10\sec\theta\tan\theta \, d\theta)$$

Simplify the expression by canceling out the common $10\tan\theta$ terms from the numerator and denominator:

$$\int \sec\theta \, d\theta$$

## Step 3: Evaluate the Trigonometric Integral

The integral of $\sec\theta$ is a standard calculus formula:

$$\int \sec\theta \, d\theta = \ln|\sec\theta + \tan\theta|$$

Applying this gives us our antiderivative in terms of $\theta$:

$$\ln|\sec\theta + \tan\theta| + C$$

## Step 4: Convert Back to the Original Variable $x$

We need to convert our terms back to the original variable $x$ using our initial substitution relation:

$$\text{Since } x = 10\sec\theta \implies \sec\theta = \frac{x}{10}$$

Using a reference right triangle where the hypotenuse is $x$ and the adjacent side is **10**:

- $\sec\theta = \frac{\text{hypotenuse}}{\text{adjacent}} = \frac{x}{10}$
    
- The opposite side is found via the Pythagorean theorem: $\sqrt{x^2 - 10^2} = \sqrt{x^2 - 100}$
    
- Therefore, $\tan\theta = \frac{\text{opposite}}{\text{adjacent}} = \frac{\sqrt{x^2 - 100}}{10}$
    

Substitute these two values back into our logarithmic result:

$$\ln\left| \frac{x}{10} + \frac{\sqrt{x^2 - 100}}{10} \right| + C$$

Combine the fractions over their common denominator:

$$\ln\left| \frac{x + \sqrt{x^2 - 100}}{10} \right| + C$$

## Final Answer

By applying logarithm properties ($\ln|\frac{A}{B}| = \ln|A| - \ln|B|$), the constant denominator of **10** inside the natural log can be separated out ($-\ln(10)$) and absorbed entirely into the constant of integration $C$. Either form below is mathematically correct:

$$\int \frac{1}{\sqrt{x^2 - 100}} \, dx = \ln\left| \frac{x + \sqrt{x^2 - 100}}{10} \right| + C$$

$$\text{or simplified as: } \ln\left| x + \sqrt{x^2 - 100} \right| + C$$