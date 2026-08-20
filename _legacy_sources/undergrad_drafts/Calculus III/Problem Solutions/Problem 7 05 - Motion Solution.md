### Problem Statement
Evaluate the indefinite integral:
$$\int \left\langle 5 \cos(7t), 3 \cos(4t), \frac{-9}{t} \right\rangle dt$$

---

### Step-by-Step Solution

To integrate a vector-valued function, integrate each component function independently with respect to $t$. Remember to include a constant of integration for each component, which can ultimately be combined into a single constant vector $\vec{C}$.

#### 1. Integrate the $x$-component: $f(t) = 5 \cos(7t)$
Using $u$-substitution where $u = 7t$ and $du = 7\,dt$:
$$\int 5 \cos(7t) \, dt = 5 \cdot \frac{1}{7} \sin(7t) + C_1 = \frac{5}{7} \sin(7t) + C_1$$

#### 2. Integrate the $y$-component: $g(t) = 3 \cos(4t)$
Similarly, using $u$-substitution where $u = 4t$ and $du = 4\,dt$:
$$\int 3 \cos(4t) \, dt = 3 \cdot \frac{1}{4} \sin(4t) + C_2 = \frac{3}{4} \sin(4t) + C_2$$

#### 3. Integrate the $z$-component: $h(t) = \frac{-9}{t}$
Using the standard logarithmic integration rule $\int \frac{1}{t} \, dt = \ln|t|$:
$$\int \frac{-9}{t} \, dt = -9 \ln|t| + C_3$$

---

### Combining the Components

We can write out the final vector in standard component form, merging the individual integration constants ($C_1, C_2, C_3$) into a single constant vector $\vec{C} = \langle C_1, C_2, C_3 \rangle$:

$$\int \left\langle 5 \cos(7t), 3 \cos(4t), \frac{-9}{t} \right\rangle dt = \left\langle \frac{5}{7} \sin(7t), \frac{3}{4} \sin(4t), -9 \ln|t| \right\rangle + \vec{C}$$

---

### Final Answer

$$\left\langle \frac{5}{7} \sin(7t), \frac{3}{4} \sin(4t), -9 \ln|t| \right\rangle + \vec{C}$$