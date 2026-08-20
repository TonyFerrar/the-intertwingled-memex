Unlike indefinite integrals, **definite integrals** give us a specific numerical value (representing the net area under the curve between two boundaries) and do not need a $+ C$ at the end. We will use the **Fundamental Theorem of Calculus**:

$$\int_{a}^{b} f(x) \, dx = F(b) - F(a)$$

where $F(x)$ is the antiderivative.

### (a) $\int_{1}^{3} \left(3x^2 - \frac{1}{4}x^3\right) dx$

**Step 1: Find the antiderivative $F(x)$** Integrate each term individually using the Power Rule ($\int x^n dx = \frac{x^{n+1}}{n+1}$):

- **First term ($3x^2$):** $\int 3x^2 \, dx = 3 \cdot \frac{x^3}{3} = x^3$
    
- **Second term ($-\frac{1}{4}x^3$):** $\int -\frac{1}{4}x^3 \, dx = -\frac{1}{4} \cdot \frac{x^4}{4} = -\frac{1}{16}x^4$
    

So, our antiderivative function is:

$$F(x) = x^3 - \frac{1}{16}x^4$$

**Step 2: Evaluate at the upper limit ($x = 3$)** Plug $3$ into your antiderivative:

$$F(3) = (3)^3 - \frac{1}{16}(3)^4$$

$$F(3) = 27 - \frac{81}{16} = \frac{432}{16} - \frac{81}{16} = \frac{351}{16}$$

**Step 3: Evaluate at the lower limit ($x = 1$)** Plug $1$ into your antiderivative:

$$F(1) = (1)^3 - \frac{1}{16}(1)^4$$

$$F(1) = 1 - \frac{1}{16} = \frac{16}{16} - \frac{1}{16} = \frac{15}{16}$$

**Step 4: Subtract the lower bound value from the upper bound value ($F(3) - F(1)$)**

$$\frac{351}{16} - \frac{15}{16} = \frac{336}{16}$$

Simplifying the fraction gives exactly **21**.

**Final Answer:**

$$21$$

### (b) $\int_{0}^{2} \frac{1}{5x+1} dx$

**Step 1: Use $u$-substitution to find the antiderivative** Because the denominator contains a linear function ($5x + 1$), we need to use a simple $u$-sub.

- Let $u = 5x + 1$
    
- Take the derivative: $du = 5 \, dx \implies dx = \frac{1}{5} \, du$
    

**Step 2: Change the limits of integration to match $u$** When dealing with definite integrals, it's easiest to convert the $x$-boundaries into $u$-boundaries using your substitution formula ($u = 5x + 1$):

- **Lower limit ($x = 0$):** $u = 5(0) + 1 = 1$
    
- **Upper limit ($x = 2$):** $u = 5(2) + 1 = 11$
    

**Step 3: Rewrite and evaluate the integral in terms of $u$** Substitute your components and the new boundaries into the integral:

$$\int_{1}^{11} \frac{1}{u} \cdot \left(\frac{1}{5} \, du\right) = \frac{1}{5} \int_{1}^{11} \frac{1}{u} \, du$$

The integral of $\frac{1}{u}$ is $\ln|u|$:

$$\frac{1}{5} \Big[ \ln|u| \Big]_{1}^{11}$$

**Step 4: Apply the boundaries**

$$\frac{1}{5} \left( \ln(11) - \ln(1) \right)$$

Since $\ln(1) = 0$, this simplifies beautifully:

$$\frac{1}{5} (\ln(11) - 0) = \frac{1}{5}\ln(11)$$

**Final Answer:**

$$\frac{1}{5}\ln(11) \quad \text{(or approximately 0.4796)}$$