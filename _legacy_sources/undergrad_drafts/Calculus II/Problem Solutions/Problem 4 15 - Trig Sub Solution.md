## Step 1: Simplify and Choose the Substitution

Before substituting, we can make the algebra much cleaner by factoring out a **4** from inside the square root:

$$\sqrt{4x^2 + 16} = \sqrt{4(x^2 + 4)} = 2\sqrt{x^2 + 4}$$

The integral now becomes:

$$\int \frac{1}{2\sqrt{x^2 + 4}} \, dx = \frac{1}{2} \int \frac{1}{\sqrt{x^2 + 4}} \, dx$$

The remaining radical contains a term of the form $\sqrt{x^2 + a^2}$, where $a^2 = 4$ (so $a = 2$). For this form, we use the tangent substitution:

- **Let:** $x = 2\tan\theta$
    
- **Differentiate both sides:** $dx = 2\sec^2\theta \, d\theta$
    

## Step 2: Substitute into the Integral

Next, transform the radical expression $\sqrt{x^2 + 4}$ using the Pythagorean identity $\tan^2\theta + 1 = \sec^2\theta$:

$$\sqrt{x^2 + 4} = \sqrt{(2\tan\theta)^2 + 4} = \sqrt{4\tan^2\theta + 4} = \sqrt{4(\tan^2\theta + 1)} = \sqrt{4\sec^2\theta} = 2\sec\theta$$

Now, substitute $\sqrt{x^2 + 4}$ and $dx$ back into our modified integral:

$$\frac{1}{2} \int \frac{1}{2\sec\theta} \cdot (2\sec^2\theta \, d\theta)$$

Cancel out the common factors:

$$\frac{1}{2} \int \sec\theta \, d\theta$$

## Step 3: Evaluate the Trigonometric Integral

The integral of $\sec\theta$ is a standard calculus formula:

$$\int \sec\theta \, d\theta = \ln|\sec\theta + \tan\theta|$$

Applying this gives us the antiderivative in terms of $\theta$:

$$\frac{1}{2}\ln|\sec\theta + \tan\theta| + C$$

## Step 4: Convert Back to the Original Variable $x$

We need to convert our terms back to the variable $x$ using our initial substitution relation:

$$\text{since } x = 2\tan\theta \implies \tan\theta = \frac{x}{2}$$

Using a reference right triangle where the opposite side is $x$ and the adjacent side is **2**:

- $\tan\theta = \frac{x}{2}$
    
- The hypotenuse is $\sqrt{x^2 + 2^2} = \sqrt{x^2 + 4}$
    
- Therefore, $\sec\theta = \frac{\text{hypotenuse}}{\text{adjacent}} = \frac{\sqrt{x^2 + 4}}{2}$
    

Substitute these two values back into the logarithmic result:

$$\frac{1}{2}\ln\left| \frac{\sqrt{x^2 + 4}}{2} + \frac{x}{2} \right| + C$$

Combine the terms over a common denominator:

$$\frac{1}{2}\ln\left| \frac{\sqrt{x^2 + 4} + x}{2} \right| + C$$

## Final Answer

Using logarithm properties ($\ln|\frac{A}{B}| = \ln|A| - \ln|B|$), the constant denominator of **2** can be absorbed into the integration constant $C$. Either form below is correct:

$$\int \frac{1}{\sqrt{4x^2 + 16}} \, dx = \frac{1}{2}\ln\left| \frac{\sqrt{x^2 + 4} + x}{2} \right| + C$$

$$\text{or simplified as: } \frac{1}{2}\ln\left| \sqrt{x^2 + 4} + x \right| + C$$