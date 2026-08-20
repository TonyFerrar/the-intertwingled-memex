### Part (a): Writing the Formula for the LHS Riemann Sum

To build the Left-Hand Sum (LHS) formula for $\int_{0}^{1} x^2 \, dx$ using $n$ rectangles, we use the components given in the problem:

- **Function:** $f(x) = x^2$
    
- **Width of each rectangle:** $\Delta x = \frac{1}{n}$
    
- **Left-hand endpoints:** $c_i = \frac{i}{n}$ for $i = 0, 1, 2, \dots, n-1$
    

**Step 1: Evaluate the function at the left-hand endpoints ($c_i$)** Substitute the endpoint formula $c_i = \frac{i}{n}$ into the function $f(x) = x^2$:

$$f(c_i) = f\left(\frac{i}{n}\right) = \left(\frac{i}{n}\right)^2 = \frac{i^2}{n^2}$$

**Step 2: Set up the Riemann Sum definition** The Left-Hand Riemann sum is the sum of the areas of all $n$ rectangles (height $\times$ width) from $i = 0$ to $n-1$:

$$\text{LHS} = \sum_{i=0}^{n-1} f(c_i) \cdot \Delta x$$

**Step 3: Substitute our expressions** Substitute $f(c_i) = \frac{i^2}{n^2}$ and $\Delta x = \frac{1}{n}$ into the summation:

$$\text{LHS} = \sum_{i=0}^{n-1} \left(\frac{i^2}{n^2}\right) \cdot \frac{1}{n}$$

$$\text{LHS} = \sum_{i=0}^{n-1} \frac{i^2}{n^3}$$

**Answer for (a):** The formula for the LHS Riemann sum is **$\sum_{i=0}^{n-1} \frac{i^2}{n^3}$** (or written as $\frac{1}{n^3} \sum_{i=0}^{n-1} i^2$).

### Part (b): Finding the Exact Value Using Limits

Now we evaluate the limit of this sum as the number of rectangles ($n$) approaches infinity.

**Step 1: Factor out the constant terms from the summation**

Since the summation runs over the index $i$, the term $n^3$ acts as a constant relative to the sum and can be pulled out front:

$$\text{LHS} = \frac{1}{n^3} \sum_{i=0}^{n-1} i^2$$

**Step 2: Substitute the given summation formula** We are given the identity $\sum_{i=0}^{n-1} i^2 = \frac{n(n-1)(2n-1)}{6}$. Replacing the summation yields:

$$\text{LHS} = \frac{1}{n^3} \cdot \frac{n(n-1)(2n-1)}{6}$$

$$\text{LHS} = \frac{n(n-1)(2n-1)}{6n^3}$$

**Step 3: Expand the numerator to find the leading polynomial term**

Let's expand the top expression to determine its highest degree term:

$$n(n-1)(2n-1) = n(2n^2 - 3n + 1) = 2n^3 - 3n^2 + n$$

This gives us the simplified expression for the sum:

$$\text{LHS} = \frac{2n^3 - 3n^2 + n}{6n^3}$$

**Step 4: Take the limit as $n \rightarrow \infty$** To evaluate the exact value of the integral, take the limit:

$$\int_{0}^{1} x^2 \, dx = \lim_{n \to \infty} \frac{2n^3 - 3n^2 + n}{6n^3}$$

Since the degrees of the numerator and the denominator are both 3, the limit is simply the ratio of their leading coefficients:

$$\lim_{n \to \infty} \frac{2n^3 - 3n^2 + n}{6n^3} = \frac{2}{6} = \frac{1}{3}$$

**Answer for (b):** The exact value of the integral is **$\frac{1}{3}$**.