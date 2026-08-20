## 1. $f(x,y,z) = x^2 + y^2 - z$

### **Domain**
This function is a standard polynomial combination. There are no square roots, logarithmic arguments, or denominators to present structural limitations.
* **Description:** The domain is the entirety of 3D space ($\mathbb{R}^3$).
* **Set-Builder Notation:** $D = \{(x,y,z) \in \mathbb{R}^3\}$

### **Range**
For any choice of $x$ and $y$, we can freely adjust $z$ to yield any real value from negative infinity to positive infinity.
* **Interval Notation:** $R = (-\infty, \infty)$ (or $\mathbb{R}$)

### **Evaluation**
$$f(1,2,3) = (1)^2 + (2)^2 - 3 = 1 + 4 - 3 = 2$$

---

## 2. $g(x,y,z) = \frac{1}{x^2 + y^2 + z^2 - 9}$

### **Domain**
For a rational function, the denominator expression cannot evaluate to zero:
$$x^2 + y^2 + z^2 - 9 \neq 0 \implies x^2 + y^2 + z^2 \neq 9$$

* **Description:** The domain contains all points in $\mathbb{R}^3$ *except* for those located directly on the surface shell of a sphere centered at the origin with a radius of $3$.
* **Set-Builder Notation:** $D = \{(x,y,z) \in \mathbb{R}^3 \mid x^2 + y^2 + z^2 \neq 9\}$

### **Range**
The value of the sum $x^2 + y^2 + z^2$ spans across the interval $[0, \infty)$. Therefore, the denominator term $x^2 + y^2 + z^2 - 9$ spans across $[-9, \infty)$ except for $0$.
* When $x=0, y=0, z=0$, the denominator takes its minimum possible value of $-9$, which yields $g(0,0,0) = -\frac{1}{9}$.
* As $x^2 + y^2 + z^2$ approaches $9$ from below, the denominator approaches $0$ from the negative side, pushing outputs to $-\infty$. This covers the interval $(-\infty, -\frac{1}{9}]$.
* As $x^2 + y^2 + z^2$ approaches $9$ from above, the denominator approaches $0$ from the positive side, pushing outputs to $\infty$. As the inputs grow infinitely large, the fraction approaches $0$ from above, covering $(0, \infty)$.
* **Interval Notation:** $R = (-\infty, -\frac{1}{9}] \cup (0, \infty)$

### **Evaluation**
$$g(2,1,2) = \frac{1}{(2)^2 + (1)^2 + (2)^2 - 9} = \frac{1}{4 + 1 + 4 - 9} = \frac{1}{0} \implies \text{Undefined}$$

---

## 3. $h(x,y,z) = \sqrt{25 - (x^2 + y^2 + z^2)}$

### **Domain**
The radicand underneath a square root expression cannot be negative:
$$25 - (x^2 + y^2 + z^2) \ge 0 \implies x^2 + y^2 + z^2 \le 25$$

* **Description:** The domain is a solid 3D ball (solid sphere) centered at the origin with a radius of $5$.
* **Set-Builder Notation:** $D = \{(x,y,z) \in \mathbb{R}^3 \mid x^2 + y^2 + z^2 \le 25\}$

### **Range**
The total sum $x^2 + y^2 + z^2$ ranges from $0$ to $25$ within the constraints of this domain.
* Maximum value: occurs at the origin $(0,0,0) \implies \sqrt{25 - 0} = 5$.
* Minimum value: occurs on the boundary shell $x^2 + y^2 + z^2 = 25 \implies \sqrt{25 - 25} = 0$.
* **Interval Notation:** $R = [0, 5]$

### **Evaluation**
$$h(3,4,0) = \sqrt{25 - ((3)^2 + (4)^2 + (0)^2)} = \sqrt{25 - (9 + 16 + 0)} = \sqrt{25 - 25} = 0$$

---

## 4. $k(x,y,z) = \cos(x - y + z)$

### **Domain**
The cosine function handles any real number input parameter without restriction.
* **Description:** The domain is all of 3D space ($\mathbb{R}^3$).
* **Set-Builder Notation:** $D = \{(x,y,z) \in \mathbb{R}^3\}$

### **Range**
The inner calculation output spans across all real values, and the outer cosine function restricts any output to its structural periodic boundaries.
* **Interval Notation:** $R = [-1, 1]$

### **Evaluation**
$$k(0,0,\pi) = \cos(0 - 0 + \pi) = \cos(\pi) = -1$$

---

## 5. $m(x,y,z) = \ln(x + 2y + 3z)$

### **Domain**
The inner argument of a natural logarithm function must be strictly greater than zero:
$$x + 2y + 3z > 0$$

* **Description:** The domain represents an open half-space in 3D space, containing all points sitting strictly on the positive side of the plane $x + 2y + 3z = 0$.
* **Set-Builder Notation:** $D = \{(x,y,z) \in \mathbb{R}^3 \mid x + 2y + 3z > 0\}$

### **Range**
The plane combination $x + 2y + 3z$ can yield any value in the open span $(0, \infty)$ within the domain, which maps out all possible real numbers through the natural log.
* **Interval Notation:** $R = (-\infty, \infty)$ (or $\mathbb{R}$)

### **Evaluation**
$$m(1,1,1) = \ln(1 + 2(1) + 3(1)) = \ln(1 + 2 + 3) = \ln(6)$$