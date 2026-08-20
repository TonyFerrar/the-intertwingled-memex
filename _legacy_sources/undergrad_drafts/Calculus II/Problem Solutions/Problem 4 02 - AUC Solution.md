Here are the step-by-step solutions for evaluating these definite integrals.

### (a)

$\int_{1}^{2} \frac{2}{x^2} \, dx$

**1. Rewrite the integrand with a negative exponent:** To make it easier to apply the power rule, rewrite $\frac{2}{x^2}$ as $2x^{-2}$:

$$\int_{1}^{2} 2x^{-2} \, dx$$

**2. Find the antiderivative:**

Using the power rule for integration ($\int x^n \, dx = \frac{x^{n+1}}{n+1}$):

$$F(x) = 2 \left( \frac{x^{-1}}{-1} \right) = -2x^{-1} = -\frac{2}{x}$$

**3. Evaluate at the upper limit ($x = 2$):**

$$F(2) = -\frac{2}{2} = -1$$

**4. Evaluate at the lower limit ($x = 1$):**

$$F(1) = -\frac{2}{1} = -2$$

**5. Subtract the lower limit evaluation from the upper limit evaluation ($F(2) - F(1)$):**

$$\text{Value} = -1 - (-2) = -1 + 2 = 1$$

### (b)

$\int_{0}^{3} \frac{1}{5x+1} \, dx$

Because the denominator contains a linear function, this requires **$u$-substitution**.

1. Define $u$ and find $du$:

- Let $u = 5x + 1$
    
- Then $du = 5 \, dx$, which means $dx = \frac{1}{5} \, du$
    

**2. Change the integration limits to match $u$:**

- **Lower limit:** When $x = 0$, then $u = 5(0) + 1 = 1$
    
- **Upper limit:** When $x = 3$, then $u = 5(3) + 1 = 16$
    

**3. Rewrite the integral in terms of $u$:**

$$\int_{1}^{16} \frac{1}{u} \cdot \left(\frac{1}{5} \, du\right) = \frac{1}{5} \int_{1}^{16} \frac{1}{u} \, du$$

**4. Find the antiderivative:**

The antiderivative of $\frac{1}{u}$ is $\ln|u|$:

$$\frac{1}{5} \Big[ \ln|u| \Big]_{1}^{16}$$

**5. Evaluate the definite integral:**

$$\frac{1}{5} \left( \ln(16) - \ln(1) \right)$$

> Since $\ln(1) = 0$, the expression simplifies completely to:

$$\text{Value} = \frac{1}{5} \ln(16)$$

_(Note: If you want to simplify further using log properties, $\ln(16) = \ln(2^4) = 4\ln(2)$, so the answer can also be written as $\frac{4}{5}\ln(2)$)._

### (c)

$\int_{1}^{3} \left(3x^2 - \frac{1}{4}x^3\right) \, dx$

**1. Find the antiderivative term-by-term:** Apply the power rule to each component of the function:

- For $3x^2$: $\int 3x^2 \, dx = x^3$
    
- For $-\frac{1}{4}x^3$: $\int -\frac{1}{4}x^3 \, dx = -\frac{1}{4} \left( \frac{x^4}{4} \right) = -\frac{1}{16}x^4$
    

Combining them gives the total antiderivative function:

$$F(x) = x^3 - \frac{1}{16}x^4$$

**2. Evaluate at the upper limit ($x = 3$):**

$$F(3) = (3)^3 - \frac{1}{16}(3)^4$$

$$F(3) = 27 - \frac{81}{16}$$

$$F(3) = \frac{432}{16} - \frac{81}{16} = \frac{351}{16}$$

**3. Evaluate at the lower limit ($x = 1$):**

$$F(1) = (1)^3 - \frac{1}{16}(1)^4$$

$$F(1) = 1 - \frac{1}{16} = \frac{15}{16}$$

**4. Subtract the lower limit from the upper limit ($F(3) - F(1)$):**

$$\text{Value} = \frac{351}{16} - \frac{15}{16}$$

$$\text{Value} = \frac{336}{16}$$

**5. Simplify the fraction:**

$$\text{Value} = 21$$