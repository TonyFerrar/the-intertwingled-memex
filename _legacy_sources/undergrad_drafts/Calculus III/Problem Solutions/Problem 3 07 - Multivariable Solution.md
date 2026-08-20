
---

## 1. $f(x,y,z) = x^2 + y^2 + z^2$

### **Domain**
This is a standard multi-variable polynomial function. There are no square roots, denominators, or logarithms to restrict the inputs.
* **Description:** The domain is all of 3D space ($\mathbb{R}^3$).
* **Set-Builder Notation:** $D = \{(x,y,z) \in \mathbb{R}^3\}$

### **Range**
Since the terms $x^2$, $y^2$, and $z^2$ are all squared real numbers, they must each be greater than or equal to zero. Their sum is minimized at the origin $(0,0,0)$ and grows indefinitely as any variable increases.
* **Interval Notation:** $R = [0, \infty)$

### **Evaluation**
$$f(1,2,2) = 1^2 + 2^2 + 2^2 = 1 + 4 + 4 = 9$$

---

## 2. $g(x,y,z) = \frac{1}{x^2 + y^2 + z^2 - 1}$

### **Domain**
For a rational function, the denominator cannot equal zero:
$$x^2 + y^2 + z^2 - 1 \neq 0 \implies x^2 + y^2 + z^2 \neq 1$$

* **Description:** The domain includes all points in $\mathbb{R}^3$ *except* for those lying directly on the surface of a unit sphere centered at the origin with a radius of $1$.
* **Set-Builder Notation:** $D = \{(x,y,z) \in \mathbb{R}^3 \mid x^2 + y^2 + z^2 \neq 1\}$

### **Range**
The expression $x^2 + y^2 + z^2 - 1$ can take on any real value in the interval $[-1, \infty)$ except for $0$.
* When $x=0, y=0, z=0$, the denominator reaches its absolute minimum value of $-1$, giving $g(0,0,0) = -1$.
* As $x^2 + y^2 + z^2$ approaches $1$ from below, the denominator approaches $0$ from the negative side, meaning $g(x,y,z) \to -\infty$. This covers $(-\infty, -1]$.
* As $x^2 + y^2 + z^2$ approaches $1$ from above, the denominator approaches $0$ from the positive side, meaning $g(x,y,z) \to \infty$. As the variables grow to infinity, the expression drops toward $0$ but never reaches it, covering $(0, \infty)$.
* **Interval Notation:** $R = (-\infty, -1] \cup (0, \infty)$

### **Evaluation**
$$g(1,0,0) = \frac{1}{1^2 + 0^2 + 0^2 - 1} = \frac{1}{1 - 1} = \frac{1}{0} \implies \text{Undefined}$$

---

## 3. $h(x,y,z) = \sqrt{9 - x^2 - y^2 - z^2}$

### **Domain**
The radicand under a square root must be non-negative:
$$9 - x^2 - y^2 - z^2 \ge 0 \implies x^2 + y^2 + z^2 \le 9$$

* **Description:** The domain is a solid 3D ball (solid sphere) centered at the origin with a radius of $3$.
* **Set-Builder Notation:** $D = \{(x,y,z) \in \mathbb{R}^3 \mid x^2 + y^2 + z^2 \le 9\}$

### **Range**
The sum $x^2 + y^2 + z^2$ ranges between $0$ and $9$ within the boundary limits.
* Maximum value: occurs at the origin $(0,0,0) \implies \sqrt{9 - 0} = 3$
* Minimum value: occurs on the boundary shell $x^2 + y^2 + z^2 = 9 \implies \sqrt{0} = 0$
* **Interval Notation:** $R = [0, 3]$

### **Evaluation**
$$h(2,1,2) = \sqrt{9 - 2^2 - 1^2 - 2^2} = \sqrt{9 - 4 - 1 - 4} = \sqrt{0} = 0$$

---

## 4. $k(x,y,z) = \sin(x + y + z)$

### **Domain**
The sine function accepts any real input argument.
* **Description:** The domain is all of 3D space ($\mathbb{R}^3$).
* **Set-Builder Notation:** $D = \{(x,y,z) \in \mathbb{R}^3\}$

### **Range**
Regardless of how large or small the sum $x+y+z$ becomes, the sine function periodically oscillates between its fundamental boundaries.
* **Interval Notation:** $R = [-1, 1]$

### **Evaluation**
$$k\left(0,0,\frac{\pi}{2}\right) = \sin\left(0 + 0 + \frac{\pi}{2}\right) = \sin\left(\frac{\pi}{2}\right) = 1$$

---

## 5. $m(x,y,z) = \ln(x + y + z)$

### **Domain**
The input argument of the natural logarithm must be strictly positive:
$$x + y + z > 0$$

Solving for $z$:
$$z > -x - y$$

* **Description:** The domain is an open half-space in 3D configuration layout, consisting of all points lying strictly on one side of the plane $x + y + z = 0$.
* **Set-Builder Notation:** $D = \{(x,y,z) \in \mathbb{R}^3 \mid x + y + z > 0\}$

### **Range**
The sum $x + y + z$ spans across the entire open boundary interval $(0, \infty)$, which fully maps out all real outputs through the natural log.
* **Interval Notation:** $R = (-\infty, \infty)$ (or $\mathbb{R}$)

### **Evaluation**
$$m(1,1,1) = \ln(1 + 1 + 1) = \ln(3)$$