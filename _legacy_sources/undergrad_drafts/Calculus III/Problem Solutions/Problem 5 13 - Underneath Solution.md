## Problem Statement

Let $R = \{(x,y) : 0 \le x \le 1, x^{2} \le y \le x\}$. Evaluate $\iint_{R} \sqrt{y} \, dA$ as a Type 1 region.

## Part 1: Setting up the Integral

A **Type 1 region** means we slice the region vertically, integrating with respect to $y$ first, then with respect to $x$. The problem explicitly gives us the boundaries:

- **Outer bounds (constants for $x$):** $x \in [0, 1]$
    
- **Inner bounds (functions for $y$):** From a lower boundary of $y = x^2$ to an upper boundary of $y = x$
    

Setting up the iterated double integral:

$$I = \int_{0}^{1} \int_{x^2}^{x} \sqrt{y} \, dy \, dx$$

## Part 2: Evaluating the Integral

### Step 1: Inner Integral (with respect to $y$)

Treat $x$ as a constant and integrate $\sqrt{y}$ (or $y^{1/2}$) with respect to $y$:

$$\int_{x^2}^{x} y^{1/2} \, dy = \left[ \frac{2}{3}y^{3/2} \right]_{x^2}^{x}$$

Substitute the upper limit ($y = x$) and lower limit ($y = x^2$):

$$= \frac{2}{3} \left( (x)^{3/2} - (x^2)^{3/2} \right)$$

Simplify the exponents ($(x^2)^{3/2} = x^3$):

$$= \frac{2}{3} \left( x^{3/2} - x^3 \right)$$

### Step 2: Outer Integral (with respect to $x$)

Now substitute this result into our outer integral and integrate from $0$ to $1$:

$$I = \int_{0}^{1} \frac{2}{3} \left( x^{3/2} - x^3 \right) \, dx$$

Pull out the constant multiplier $\frac{2}{3}$ and find the antiderivative for each term:

$$I = \frac{2}{3} \left[ \frac{2}{5}x^{5/2} - \frac{x^4}{4} \right]_{0}^{1}$$

Evaluate at the limits from $0$ to $1$:

$$I = \frac{2}{3} \left( \left( \frac{2}{5}(1)^{5/2} - \frac{(1)^4}{4} \right) - 0 \right)$$

$$I = \frac{2}{3} \left( \frac{2}{5} - \frac{1}{4} \right)$$

Find a common denominator ($20$) for the terms inside the parentheses:

$$\frac{2}{5} - \frac{1}{4} = \frac{8}{20} - \frac{5}{20} = \frac{3}{20}$$

Multiply by the fractional scalar outside:

$$I = \frac{2}{3} \times \frac{3}{20} = \frac{2}{20} = \frac{1}{10}$$

## Final Answer

- **Integral Setup:** $\int_{0}^{1} \int_{x^2}^{x} \sqrt{y} \, dy \, dx$
    
- **Evaluated Value:** $\frac{1}{10}$ (or $0.1$)