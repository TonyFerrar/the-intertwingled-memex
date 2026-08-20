## Problem Statement

Evaluate:

$$\iint_{R} (3x^{2}-2y) \, dA$$

over the rectangular region $R = [0,2] \times [1,3]$ , and find the average value.

## Part 1: Evaluate the Double Integral

The rectangular region gives us the integration bounds:

- $x$ ranges from $0$ to $2$ ($x \in [0,2]$)
    
- $y$ ranges from $1$ to $3$ ($y \in [1,3]$)
    

We can set this up as an iterated integral. Integrating with respect to $y$ first ($dy \, dx$):

$$I = \int_{0}^{2} \int_{1}^{3} (3x^{2}-2y) \, dy \, dx$$

### Step 1: Inner Integral (with respect to $y$)

Treat $x$ as a constant and find the antiderivative with respect to $y$:

$$\int_{1}^{3} (3x^{2}-2y) \, dy = \left[ 3x^{2}y - y^{2} \right]_{1}^{3}$$

Substitute the upper limit ($y = 3$) and lower limit ($y = 1$):

$$= \left( 3x^{2}(3) - (3)^{2} \right) - \left( 3x^{2}(1) - (1)^{2} \right)$$

$$= (9x^{2} - 9) - (3x^{2} - 1)$$

$$= 9x^{2} - 9 - 3x^{2} + 1$$

$$= 6x^{2} - 8$$

### Step 2: Outer Integral (with respect to $x$)

Substitute the result back into the outer integral and integrate from $0$ to $2$:

$$I = \int_{0}^{2} (6x^{2} - 8) \, dx$$

Find the antiderivative with respect to $x$:

$$= \left[ \frac{6x^{3}}{3} - 8x \right]_{0}^{2} = \left[ 2x^{3} - 8x \right]_{0}^{2}$$

Evaluate at the limits:

$$= \left( 2(2)^{3} - 8(2) \right) - \left( 2(0)^{3} - 8(0) \right)$$

$$= (2(8) - 16) - 0$$

$$= 16 - 16 = 0$$

The value of the double integral is **$0$**.

## Part 2: Find the Average Value

The average value formula for a function over a region $R$ is defined as:

$$f_{\text{avg}} = \frac{1}{\text{Area}(R)} \iint_{R} f(x,y) \, dA$$

### Step 1: Compute the Area of Region $R$

The region $R$ is a rectangle with a width along the $x$-axis from $0$ to $2$, and a height along the $y$-axis from $1$ to $3$.

$$\text{Width} = 2 - 0 = 2$$

$$\text{Height} = 3 - 1 = 2$$

$$\text{Area}(R) = \text{Width} \times \text{Height} = 2 \times 2 = 4$$

### Step 2: Calculate $f_{\text{avg}}$

Substitute the area and the double integral value into the average value formula:

$$f_{\text{avg}} = \frac{1}{4} \times 0 = 0$$

## Final Answer

- **Value of the double integral:** $0$
    
- **Average value of the function over $R$:** $0$