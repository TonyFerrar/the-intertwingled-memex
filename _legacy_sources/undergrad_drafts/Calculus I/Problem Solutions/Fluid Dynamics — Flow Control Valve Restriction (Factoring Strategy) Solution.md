A civil engineer is designing an automated overflow spillway valve. The velocity flow factor $V$ of fluid passing through a shrinking pipeline aperture is modeled relative to a pipe width variable $x$ (in centimeters) by the following function:

$$V(x) = \frac{x^2 - 5x + 6}{x - 3}$$

The valve mechanism is designed to operate optimally right as the width variable approaches $3\text{ cm}$. Find the limiting flow velocity value by computing $\lim_{x\to3} V(x)$.

**Solution:**
1. **Direct Substitution Check:** Testing $x = 3$ yields $\frac{3^2 - 5(3) + 6}{3 - 3} = \frac{9 - 15 + 6}{0} = \frac{0}{0}$.
2. **Factoring the Numerator:** Find two numbers that multiply to $6$ and sum to $-5$. These numbers are $-2$ and $-3$:
   $$x^2 - 5x + 6 = (x - 2)(x - 3)$$
3. **Rewrite and Cancel:** Substitute the factors back into the limit and eliminate the matching group:
   $$\lim_{x\to3}\frac{(x - 2)(x - 3)}{x - 3} = \lim_{x\to3}(x - 2)$$
4. **Re-substitute:** Complete the evaluation:
   $$3 - 2 = 1\text{ m/s}$$
**Answer:** $1\text{ m/s}$
