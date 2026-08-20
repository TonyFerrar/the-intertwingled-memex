**Problem:** Use a linear approximation at $(2, 1)$ to estimate $f(2.1, 0.9)$ for $f(x,y) = \sqrt{x^{2} + y}$.

**Solution:**
1. Evaluate $f(2, 1)$:
   $$f(2, 1) = \sqrt{2^2 + 1} = \sqrt{5}$$
2. Compute and evaluate partial derivatives at $(2, 1)$:
   $$f_x = \frac{x}{\sqrt{x^2+y}} \implies f_x(2, 1) = \frac{2}{\sqrt{5}}$$
   $$f_y = \frac{1}{2\sqrt{x^2+y}} \implies f_y(2, 1) = \frac{1}{2\sqrt{5}}$$
3. Construct the linearization function $L(x,y)$:
   $$L(x,y) = \sqrt{5} + \frac{2}{\sqrt{5}}(x - 2) + \frac{1}{2\sqrt{5}}(y - 1)$$
4. Estimate at $(2.1, 0.9)$:
   $$L(2.1, 0.9) = \sqrt{5} + \frac{2}{\sqrt{5}}(2.1 - 2) + \frac{1}{2\sqrt{5}}(0.9 - 1)$$
   $$L(2.1, 0.9) = \sqrt{5} + \frac{2}{\sqrt{5}}(0.1) + \frac{1}{2\sqrt{5}}(-0.1)$$
   $$L(2.1, 0.9) = \sqrt{5} + \frac{0.2}{\sqrt{5}} - \frac{0.05}{\sqrt{5}} = \sqrt{5} + \frac{0.15}{\sqrt{5}} \approx 2.3032$$
