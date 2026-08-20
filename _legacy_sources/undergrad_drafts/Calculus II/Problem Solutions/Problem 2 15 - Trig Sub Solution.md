## Step 1: Choose the Substitution

The integrand contains the term $\sqrt{9 - x^2}$, which fits the form $\sqrt{a^2 - x^2}$ where $a^2 = 9$ (so $a = 3$). For this form, we use the sine substitution:

- **Let:** $x = 3\sin\theta$
    
- **Differentiate both sides:** $dx = 3\cos\theta \, d\theta$
    

## Step 2: Substitute into the Integral

First, let's find the indefinite antiderivative by substituting our expressions for $x$ and $dx$ into the integral.

Simplify the radical portion using the identity $1 - \sin^2\theta = \cos^2\theta$:

$$\sqrt{9 - x^2} = \sqrt{9 - (3\sin\theta)^2} = \sqrt{9 - 9\sin^2\theta} = \sqrt{9(1 - \sin^2\theta)} = 3\cos\theta$$

Now substitute $\sqrt{9-x^2}$, $x$, and $dx$ into the integral:

$$\int \frac{3\cos\theta}{3\sin\theta} \cdot (3\cos\theta \, d\theta) = 3\int \frac{\cos^2\theta}{\sin\theta} \, d\theta$$

## Step 3: Evaluate the Trigonometric Integral

To integrate $\frac{\cos^2\theta}{\sin\theta}$, use the Pythagorean identity to rewrite the numerator in terms of sine:

$$3\int \frac{1 - \sin^2\theta}{\sin\theta} \, d\theta = 3\int \left( \frac{1}{\sin\theta} - \frac{\sin^2\theta}{\sin\theta} \right) d\theta = 3\int (\csc\theta - \sin\theta) \, d\theta$$

Now, integrate each term individually using standard trigonometric integration formulas:

- $\int \csc\theta \, d\theta = \ln|\csc\theta - \cot\theta|$
    
- $\int \sin\theta , d\theta = -\cos\theta$$
    

Distributing the constant **3**, we get the antiderivative in terms of $\theta$:

$$3\ln|\csc\theta - \cot\theta| - 3(-\cos\theta) = 3\ln|\csc\theta - \cot\theta| + 3\cos\theta$$

## Step 4: Convert Back to the Original Variable $x$

Using our initial substitution $x = 3\sin\theta$, we can construct a reference right triangle to find the remaining trigonometric ratios:

- $\sin\theta = \frac{x}{3} \implies \csc\theta = \frac{3}{x}$
    
- $\cos\theta = \frac{\sqrt{9-x^2}}{3}$
    
- $\cot\theta = \frac{\text{adjacent}}{\text{opposite}} = \frac{\sqrt{9-x^2}}{x}$
    

Substitute these values back into the expression:

$$F(x) = 3\ln\left| \frac{3}{x} - \frac{\sqrt{9-x^2}}{x} \right| + 3\left(\frac{\sqrt{9-x^2}}{3}\right)$$

$$F(x) = 3\ln\left| \frac{3 - \sqrt{9-x^2}}{x} \right| + \sqrt{9-x^2}$$

## Step 5: Evaluate the Definite Limits

Now we apply the limits of integration from $x = 1$ to $x = 2$:

$$\int_{1}^{2} \frac{\sqrt{9 - x^2}}{x} \, dx = F(2) - F(1)$$

**Evaluate at upper limit $x = 2$:**

$$F(2) = 3\ln\left| \frac{3 - \sqrt{9-2^2}}{2} \right| + \sqrt{9-2^2} = 3\ln\left( \frac{3 - \sqrt{5}}{2} \right) + \sqrt{5}$$

**Evaluate at lower limit $x = 1$:**

$$F(1) = 3\ln\left| \frac{3 - \sqrt{9-1^2}}{1} \right| + \sqrt{9-1^2} = 3\ln(3 - \sqrt{8}) + \sqrt{8} = 3\ln(3 - 2\sqrt{2}) + 2\sqrt{2}$$

## Final Answer

Subtracting $F(1)$ from $F(2)$ gives the final exact value:

$$\int_{1}^{2} \frac{\sqrt{9 - x^2}}{x} \, dx = 3\ln\left( \frac{3 - \sqrt{5}}{2} \right) - 3\ln(3 - 2\sqrt{2}) + \sqrt{5} - 2\sqrt{2}$$

_(Note: Using logarithm properties, this can also be written in a single combined log term as $3\ln\left( \frac{3-\sqrt{5}}{2(3-2\sqrt{2})} \right) + \sqrt{5} - 2\sqrt{2}$)_