To evaluate the triple integral over the unit cube:
$$I = \int_{0}^{1} \int_{0}^{1} \int_{0}^{1} e^{x+2y+3z} \, dz \, dy \, dx$$

We can use the exponent rule $e^{a+b+c} = e^a \cdot e^b \cdot e^c$ to separate the variables completely since the limits of integration are all constants:
$$I = \left( \int_{0}^{1} e^x \, dx \right) \left( \int_{0}^{1} e^{2y} \, dy \right) \left( \int_{0}^{1} e^{3z} \, dz \right)$$

Let's evaluate each single integral individually:

### 1. Evaluate the $x$-integral
$$\int_{0}^{1} e^x \, dx = \left[ e^x \right]_{0}^{1} = e^1 - e^0 = e - 1$$

### 2. Evaluate the $y$-integral
$$\int_{0}^{1} e^{2y} \, dy = \left[ \frac{1}{2} e^{2y} \right]_{0}^{1} = \frac{1}{2}(e^2 - e^0) = \frac{e^2 - 1}{2}$$

### 3. Evaluate the $z$-integral
$$\int_{0}^{1} e^{3z} \, dz = \left[ \frac{1}{3} e^{3z} \right]_{0}^{1} = \frac{1}{3}(e^3 - e^0) = \frac{e^3 - 1}{3}$$

### Combine the Results
Multiply the three independent pieces together:
$$I = (e - 1) \cdot \left( \frac{e^2 - 1}{2} \right) \cdot \left( \frac{e^3 - 1}{3} \right)$$

$$I = \frac{(e - 1)(e^2 - 1)(e^3 - 1)}{6}$$