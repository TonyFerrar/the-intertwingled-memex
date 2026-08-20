
# Vector Calculus: Integration

 Let $f$, $g$, and $h$ be real valued functions of $t$.
 $$\vec{r}(t) = f(t)\hat{i} + g(t)\hat{j} + h(t)\hat{k}$$
 
 The integral of $\vec{r}(t)$ can be found by integrating each component separately and then recombining. In other words, integrate $f(t)$, $g(t)$, $h(t)$ separately and then combine them to form a new vector.
 
## Indefinite Integrals:
 $$\int{\vec{r}(t) dt} = \left[\int{f(t)dt}\right]\hat{i} + \left[\int{g(t)dt}\right]\hat{j} + \left[\int{h(t)dt}\right]\hat{k}$$
 Note: each component produces its own constant of integration. For $F$, $G$, and $H$ as antiderivatives of $f$, $g$, and $h$:
 $$\int{\vec{r}(t) dt} = (F(t) + C_1)\hat{i} + (G(t) + C_2)\hat{j} + (H(t) + C_3)\hat{k}$$
 It is typical to collect the integration constants into a single constant vector of integration:
 $$\int{\vec{r}(t) dt} = (F(t))\hat{i} + (G(t))\hat{j} + (H(t))\hat{k} + \vec{C}$$
 where $\vec{C} = C_1\hat{i} + C_2\hat{j} + C_3\hat{k}$ 
 
## Definite Integrals:
 $$\int_{a}^{b}{\vec{r}(t) dt} = \left[\int_{a}^{b}{f(t)dt}\right]\hat{i} + \left[\int_{a}^{b}{g(t)dt}\right]\hat{j} + \left[\int_{a}^{b}{h(t)dt}\right]\hat{k}$$
 
