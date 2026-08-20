Before we dive in, remember the golden rule of indefinite integrals: **never forget to add the constant of integration ($+ C$) at the very end!**

### (a) $\int \left(x + \frac{2}{x} - \frac{3}{x^3} + \frac{4}{\sqrt[4]{x}}\right) dx$

**Step 1: Rewrite the terms using exponents** Just like with derivatives, it is much easier to integrate fractions and roots if we convert them into standard power forms ($x^n$).

- $\frac{2}{x}$ stays as $2 \cdot \frac{1}{x}$ because it follows a special rule.
    
- $-\frac{3}{x^3}$ becomes $-3x^{-3}$
    
- $\frac{4}{\sqrt[4]{x}}$ becomes $4x^{-1/4}$
    

Now, rewrite the whole integral:

$$\int \left(x^1 + 2 \cdot \frac{1}{x} - 3x^{-3} + 4x^{-1/4}\right) dx$$

**Step 2: Integrate term-by-term** We will use the **Power Rule for Integration** ($\int x^n dx = \frac{x^{n+1}}{n+1}$) for most of these, and the **Natural Log Rule** ($\int \frac{1}{x} dx = \ln|x|$) for the second term.

- **First term ($x^1$):** Add 1 to the exponent, then divide by the new exponent.
    
    $$\int x^1 dx = \frac{x^2}{2}$$
    
- **Second term ($2 \cdot \frac{1}{x}$):** The integral of $\frac{1}{x}$ is always $\ln|x|$.
    
    $$\int 2 \cdot \frac{1}{x} dx = 2\ln|x|$$
    
- **Third term ($-3x^{-3}$):** Add 1 to the exponent ($-3 + 1 = -2$), then divide by $-2$.
    
    $$\int -3x^{-3} dx = \frac{-3x^{-2}}{-2} = \frac{3}{2}x^{-2} = \frac{3}{2x^2}$$
    
- **Fourth term ($4x^{-1/4}$):** Add 1 to the exponent ($-\frac{1}{4} + 1 = \frac{3}{4}$), then divide by $\frac{3}{4}$ (which is the same as multiplying by $\frac{4}{3}$).
    
    $$\int 4x^{-1/4} dx = 4 \cdot \frac{x^{3/4}}{\frac{3}{4}} = 4 \cdot \left(\frac{4}{3}\right)x^{3/4} = \frac{16}{3}x^{3/4}$$
    

**Final Answer:**

$$\frac{1}{2}x^2 + 2\ln|x| + \frac{3}{2x^2} + \frac{16}{3}x^{3/4} + C$$

### (b) $\int (2x + 1)\sqrt[5]{x^2 + x} \, dx$

**Step 1: Identify the method ($u$-substitution)** Notice that we have a complicated "inner" function ($x^2 + x$) sitting inside a fifth root, and its exact derivative ($2x + 1$) is multiplying the rest of the expression. This is a textbook cue to use **$u$-substitution**.

Let's define our pieces:

- Let $u = x^2 + x$
    
- Take the derivative to find $du$: $du = (2x + 1) \, dx$
    

**Step 2: Substitute $u$ and $du$ into the integral** Replace $(x^2 + x)$ with $u$, and replace $(2x + 1)dx$ with $du$.

$$\int \sqrt[5]{u} \, du$$

**Step 3: Rewrite and integrate** Convert the root into a fractional exponent so you can apply the Power Rule:

$$\int u^{1/5} \, du$$

Add 1 to the exponent ($\frac{1}{5} + 1 = \frac{6}{5}$), and divide by $\frac{6}{5}$ (multiply by $\frac{5}{6}$):

$$\frac{5}{6}u^{6/5} + C$$

**Step 4: Substitute back to the original variable ($x$)** Replace $u$ back with your original expression $(x^2 + x)$ to finish the job.

**Final Answer:**

$$\frac{5}{6}(x^2 + x)^{6/5} + C$$