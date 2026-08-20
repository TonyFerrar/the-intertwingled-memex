
---

## 1. $f(x,y) = \sqrt{16 - x^2 - y^2}$

### **Domain**
For a square root function, the radicand must be non-negative:
$$16 - x^2 - y^2 \ge 0 \implies x^2 + y^2 \le 16$$

* **Description:** The domain is a closed disk centered at the origin with a radius of $4$.
* **Set-Builder Notation:** $D = \{(x,y) \in \mathbb{R}^2 \mid x^2 + y^2 \le 16\}$

### **Range**
The expression $x^2 + y^2$ ranges from $0$ to $16$ within the domain.
* Maximum value: occurs when $x=0, y=0 \implies \sqrt{16} = 4$
* Minimum value: occurs on the boundary $x^2 + y^2 = 16 \implies \sqrt{0} = 0$
* **Interval Notation:** $R = [0, 4]$

### **Evaluation**
$$f(2,2) = \sqrt{16 - (2)^2 - (2)^2} = \sqrt{16 - 4 - 4} = \sqrt{8} = 2\sqrt{2}$$

---

## 2. $g(x,y) = \frac{1}{x^2 + y^2 - 4}$

### **Domain**
For a rational function, the denominator cannot be zero:
$$x^2 + y^2 - 4 \neq 0 \implies x^2 + y^2 \neq 4$$

* **Description:** The domain includes all points in the $xy$-plane *except* the boundary line of the circle centered at the origin with a radius of $2$.
* **Set-Builder Notation:** $D = \{(x,y) \in \mathbb{R}^2 \mid x^2 + y^2 \neq 4\}$

### **Range**
The denominator expression $x^2 + y^2 - 4$ can take on any real value in the interval $[-4, \infty)$ except for $0$. 
* As $x^2 + y^2 - 4 \to 0$ from the positive side, $g(x,y) \to \infty$.
* As $x^2 + y^2 - 4 \to 0$ from the negative side, $g(x,y) \to -\infty$.
* The minimum possible value for the denominator is $-4$ (at $x=0, y=0$), yielding $g(0,0) = -\frac{1}{4}$. As the denominator increases towards $0$ from below, the output goes to $-\infty$, covering $(-\infty, -\frac{1}{4}]$.
* **Interval Notation:** $R = (-\infty, -\frac{1}{4}] \cup (0, \infty)$

### **Evaluation**
$$g(1,1) = \frac{1}{(1)^2 + (1)^2 - 4} = \frac{1}{1 + 1 - 4} = -\frac{1}{2}$$

---

## 3. $h(x,y) = \tan(x - y)$

### **Domain**
The tangent function is undefined where its argument equals odd multiples of $\frac{\pi}{2}$:
$$x - y \neq \frac{\pi}{2} + n\pi, \quad \text{where } n \in \mathbb{Z}$$

Solving for $y$:
$$y \neq x - \frac{\pi}{2} - n\pi$$

* **Description:** The domain excludes an infinite set of parallel lines with a slope of $1$.
* **Set-Builder Notation:** $D = \{(x,y) \in \mathbb{R}^2 \mid x - y \neq \frac{\pi}{2} + n\pi, \, n \in \mathbb{Z}\}$

### **Range**
The tangent function spans all real outputs over its periods.
* **Interval Notation:** $R = (-\infty, \infty)$

### **Evaluation**
$$h\left(\frac{\pi}{4},0\right) = \tan\left(\frac{\pi}{4} - 0\right) = \tan\left(\frac{\pi}{4}\right) = 1$$

---

## 4. $k(x,y) = \ln(x^2 - y^2)$

### **Domain**
The argument of a natural logarithm must be strictly positive:
$$x^2 - y^2 > 0 \implies x^2 > y^2 \implies |x| > |y|$$

* **Description:** The domain consists of regions where the absolute value of $x$ is strictly greater than the absolute value of $y$. This corresponds to the left and right regions bounded by the lines $y = x$ and $y = -x$ (excluding the lines themselves).
* **Set-Builder Notation:** $D = \{(x,y) \in \mathbb{R}^2 \mid x^2 - y^2 > 0\}$

### **Range**
The inner term $x^2 - y^2$ can yield any value in the open interval $(0, \infty)$. The natural log of this open set maps to all real numbers.
* **Interval Notation:** $R = (-\infty, \infty)$

### **Evaluation**
$$k(3,1) = \ln((3)^2 - (1)^2) = \ln(9 - 1) = \ln(8) = 3\ln(2)$$