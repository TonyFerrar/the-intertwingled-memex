# Skill 1: Domain and Range of Functions of 2 Variables

## Comprehensive Lecture Notes

In single-variable calculus, a function $y = f(x)$ maps a single input variable $x$ to a single output variable $y$. In multivariable calculus, a function of two variables $z = f(x, y)$ maps an ordered pair of real numbers $(x, y)$ from a two-dimensional input space to a unique real number output $z$. 

### The Domain
The **domain** of a function $f(x, y)$ is the set of all possible input coordinates $(x, y)$ in the two-dimensional real plane ($\mathbb{R}^2$) for which the function is mathematically defined and yields a real number output. When looking at the domain analytically, we must identify and enforce specific mathematical restrictions:

1. **Polynomial Functions:** Functions consisting of terms like $x^n y^m$ have no restrictions. Their domain is the entire $xy$-plane: $\mathbb{R}^2$.
2. **Rational Functions:** For functions containing fractions, the denominator cannot equal zero. The domain must exclude any lines or curves where the denominator vanishes.
3. **Radical Functions (Even Roots):** The radicand (expression under an even radical like a square root) must be non-negative ($\ge 0$). Geometrically, this often describes regions bounded by lines, parabolas, or circles.
4. **Logarithmic Functions:** The argument inside a natural logarithm must be strictly greater than zero ($> 0$).
5. **Trigonometric Functions ($\tan, \sec$):** The internal angle cannot result in a value where the primary trigonometric component becomes undefined (e.g., $\cos(\theta) = 0$ for tangent).
6. **Inverse Trigonometric Functions ($\arcsin, \arccos$):** The input argument must sit strictly within the closed interval $[-1, 1]$.

Geometrically, while single-variable domains are represented as intervals on a 1D number line, multivariable domains are represented as **regions** (disks, half-planes, quadrants) in a 2D coordinate system.

### The Range
The **range** of a function $f(x, y)$ is the set of all possible real output values $z$ that the function can produce across its entire domain. To determine the range, analyze the boundary limits and the behavior of the outermost function as the input coordinates span across the allowed domain region.

---

## Guided Notes: Sample Problems

Below are analytical solutions to the fundamental core types of two-variable functions.

### Sample Problem 1: Radical Function
Find the domain and range of:
$$f(x,y) = \sqrt{9 - x^2 - y^2}$$

#### **Solution:**
* **Domain Analysis:** The value under the square root must be non-negative:
  $$9 - x^2 - y^2 \ge 0 \implies x^2 + y^2 \le 9$$
  * *Geometric Meaning:* The domain consists of all coordinates $(x,y)$ sitting on or inside a circle centered at the origin with a radius of $3$.
  * *Notation:* $D = \{(x,y) \in \mathbb{R}^2 \mid x^2 + y^2 \le 9\}$

* **Range Analysis:** The sum $x^2 + y^2$ is bounded between $0$ (at the origin) and $9$ (on the circular boundary). 
  * Max output occurs at $(0,0)$: $\sqrt{9 - 0} = 3$
  * Min output occurs when $x^2 + y^2 = 9$: $\sqrt{9 - 9} = 0$
  * *Notation:* $R = [0, 3]$

---

### Sample Problem 2: Rational Function
Find the domain and range of:
$$g(x,y) = \frac{1}{x^2 - y^2}$$

#### **Solution:**
* **Domain Analysis:** The denominator cannot equal zero:
  $$x^2 - y^2 \neq 0 \implies (x - y)(x + y) \neq 0 \implies y \neq x \text{ and } y \neq -x$$
  * *Geometric Meaning:* The domain is the entire $xy$-plane except for the two diagonal lines $y = x$ and $y = -x$.
  * *Notation:* $D = \{(x,y) \in \mathbb{R}^2 \mid y \neq \pm x\}$

* **Range Analysis:** The term $x^2 - y^2$ can evaluate to any real number except $0$. A fraction with a constant numerator can never equal $0$. As the denominator approaches $0$ from the positive or negative side, the function shoots to $\pm \infty$.
  * *Notation:* $R = (-\infty, 0) \cup (0, \infty)$

---

### Sample Problem 3: Trigonometric Function
Find the domain and range of:
$$h(x,y) = \tan(x+y)$$

#### **Solution:**
* **Domain Analysis:** The tangent function is undefined where its internal argument equals odd multiples of $\frac{\pi}{2}$:
  $$x + y \neq \frac{\pi}{2} + n\pi \implies y \neq -x + \frac{\pi}{2} + n\pi, \quad \text{where } n \in \mathbb{Z}$$
  * *Geometric Meaning:* The domain excludes an infinite sequence of parallel lines across the plane, each having a slope of $-1$.
  * *Notation:* $D = \{(x,y) \in \mathbb{R}^2 \mid x+y \neq \frac{\pi}{2} + n\pi, \, n \in \mathbb{Z}\}$

* **Range Analysis:** The tangent function natively spans all outputs across its periods.
  * *Notation:* $R = (-\infty, \infty)$

---

### Sample Problem 4: Logarithmic Function
Find the domain and range of:
$$k(x,y) = \ln(xy)$$

#### **Solution:**
* **Domain Analysis:** The argument inside a natural logarithm must be strictly positive:
  $$xy > 0$$
  * *Geometric Meaning:* For the product $xy$ to be positive, both coordinates must have the same sign. This restricts the domain to the interior of Quadrant I ($x>0, y>0$) and Quadrant III ($x<0, y<0$), excluding the axes.
  * *Notation:* $D = \{(x,y) \in \mathbb{R}^2 \mid xy > 0\}$

* **Range Analysis:** As the product $xy$ approaches $0$ from the positive side, $\ln(xy) \to -\infty$. As $xy$ grows infinitely large, $\ln(xy) \to \infty$.
  * *Notation:* $R = (-\infty, \infty)$

---

## Real-Life Engineering Application Problems

### Application Problem 1: [[Civil Engineering — Terrain Surveying and Road Grade Safety]]
[[Civil Engineering — Terrain Surveying and Road Grade Safety Solution]]

---

### Application Problem 2: [[Mechanical Engineering — Gas Storage Pressure Threshold Boundaries]]
[[Mechanical Engineering — Gas Storage Pressure Threshold Boundaries Solution]]
