## Problem Statement

Let $R = \{(x, y) : y \le x \le \sqrt{y}, 0 \le y \le 1\}$. Evaluate $\iint_{R} \sqrt{y} \, dA$ as a Type 1 region.

## Part 1: Converting the Region to Type 1

The problem presents the region $R$ in **Type 2** form, where the bounds for $y$ are constants ($0 \le y \le 1$) and the bounds for $x$ are functions of $y$ ($y \le x \le \sqrt{y}$).

To evaluate it as a **Type 1 region**, we must slice it vertically instead of horizontally. This means our outer limits must be constants for $x$ and our inner limits must be functions of $y$ expressed in terms of $x$ ($y(x)$).

### 1. Invert the Boundary Functions

- **Left Boundary:** $x = \sqrt{y} \implies y = x^2$ (since $x \ge 0$)
    
- **Right Boundary:** $x = y \implies y = x$
    

### 2. Determine Upper and Lower Bounds for $y$

By looking at the region bounded between $y = x^2$ and $y = x$ on the interval $[0, 1]$:

- **Upper boundary:** $y = x$
    
- **Lower boundary:** $y = x^2$
    

### 3. Determine the Constant Bounds for $x$

The curves intersect where $x^2 = x \implies x(x - 1) = 0$, giving $x = 0$ and $x = 1$.

Thus, our rewritten **Type 1 region** is exactly the same set of points as Problem 2.1:

$$R = \{(x, y) : 0 \le x \le 1, x^2 \le y \le x\}$$

## Part 2: Setting up the Integral

Setting up the iterated double integral with $y$ on the inside ($dy \, dx$):

$$I = \int_{0}^{1} \int_{x^2}^{x} \sqrt{y} \, dy \, dx$$

## Part 3: Evaluating the Integral

### Step 1: Inner Integral (with respect to $y$)

Treat $x$ as a constant and integrate $y^{1/2}$ with respect to $y$:

$$\int_{x^2}^{x} y^{1/2} \, dy = \left[ \frac{2}{3}y^{3/2} \right]_{x^2}^{x}$$

Substitute the upper limit ($y = x$) and lower limit ($y = x^2$):

$$= \frac{2}{3} \left( x^{3/2} - (x^2)^{3/2} \right) = \frac{2}{3} \left( x^{3/2} - x^3 \right)$$

### Step 2: Outer Integral (with respect to $x$)

Substitute this back into the outer integral and integrate from $0$ to $1$:

$$I = \int_{0}^{1} \frac{2}{3} \left( x^{3/2} - x^3 \right) \, dx$$

Find the antiderivative for each power term:

$$I = \frac{2}{3} \left[ \frac{2}{5}x^{5/2} - \frac{x^4}{4} \right]_{0}^{1}$$

Evaluate at the limits:

$$I = \frac{2}{3} \left( \frac{2}{5}(1)^{5/2} - \frac{(1)^4}{4} \right) - 0$$

$$I = \frac{2}{3} \left( \frac{2}{5} - \frac{1}{4} \right)$$

Find a common denominator ($20$) inside the parentheses:

$$I = \frac{2}{3} \left( \frac{8}{20} - \frac{5}{20} \right) = \frac{2}{3} \left( \frac{3}{20} \right)$$

Simplify the fractions:

$$I = \frac{2 \times 3}{3 \times 20} = \frac{2}{20} = \frac{1}{10}$$

## Final Answer

- **Type 1 Integral Setup:** $\int_{0}^{1} \int_{x^2}^{x} \sqrt{y} \, dy \, dx$
    
- **Evaluated Value:** $\frac{1}{10}$ (or $0.1$)