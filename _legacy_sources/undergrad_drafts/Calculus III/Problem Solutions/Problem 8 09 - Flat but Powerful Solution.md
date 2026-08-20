**Problem:** Use a linear approximation at $(1, 1)$ to estimate $f(1.1, 0.9)$ for $f(x,y) = x^{2} + y^{2}$.

**Solution:**
1. Evaluate $f(1, 1)$:
   $$f(1, 1) = 1^2 + 1^2 = 2$$
2. Compute and evaluate partial derivatives at $(1, 1)$:
   $$f_x = 2x \implies f_x(1, 1) = 2$$
   $$f_y = 2y \implies f_y(1, 1) = 2$$
3. Construct the linearization function $L(x,y)$:
   $$L(x,y) = 2 + 2(x - 1) + 2(y - 1)$$
4. Estimate at $(1.1, 0.9)$:
   $$L(1.1, 0.9) = 2 + 2(1.1 - 1) + 2(0.9 - 1)$$
   $$L(1.1, 0.9) = 2 + 2(0.1) + 2(-0.1) = 2$$
