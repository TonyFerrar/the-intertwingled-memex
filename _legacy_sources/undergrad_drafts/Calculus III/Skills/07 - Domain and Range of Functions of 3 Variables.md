# Skill 2: Domain and Range of Functions of 3 Variables

## Comprehensive Lecture Notes

When extending multivariable calculus from two independent variables to three independent variables, a function is written as $w = f(x, y, z)$. This function maps an ordered triple of real numbers $(x, y, z)$ from a three-dimensional input space to a unique real number output $w$ on a one-dimensional output scale.

### The Domain
The **domain** of a three-variable function $f(x, y, z)$ is the set of all ordered triples $(x, y, z)$ in three-dimensional space ($\mathbb{R}^3$) for which the expression is mathematically valid and produces a real value. 

While domains for functions of two variables are represented as flat 2D regions in the $xy$-plane, domains for functions of three variables are visualized as **three-dimensional solid regions, volumes, or geometric boundaries** within $xyz$-space. The algebraic rules for finding these domains remain identical to previous functions, but their geometric descriptions change completely:

1. **Polynomial Functions:** Free of restrictions. The domain is all of 3D space: $\mathbb{R}^3$.
2. **Rational Functions:** The denominator cannot be zero. Geometrically, setting the denominator to zero identifies entire **surfaces** (such as planes, cylinders, or spheres) that must be completely hollowed out or excluded from 3D space.
3. **Radical Functions (Even Roots):** The radicand must be non-negative ($\ge 0$). This defines a solid three-dimensional volume bounded by a surface, such as the interior of a solid ball or a solid cylinder.
4. **Logarithmic Functions:** The argument must be strictly positive ($> 0$). This typically splits 3D space along a boundary plane, defining an **open half-space**.

### The Range
The **range** of $f(x, y, z)$ is the set of all actual real number outputs $w$ generated as the input triple $(x, y, z)$ sweeps across every allowed coordinate inside the 3D domain. To find the range, analyze the behaviors of the internal algebraic terms and find their absolute minimum and maximum boundary outputs.

---

## Guided Notes: Sample Problems

Below are analytical solutions to the fundamental core types of three-variable functions from the guided session demonstrations.

### Sample Problem 1: 3D Polynomial Function
Find the domain and range of:
$$f(x,y,z) = x^2 + y^2 + z^2$$

#### **Solution:**
* **Domain Analysis:** This function is a simple polynomial combination with no roots, fractions, or logs.
  * *Geometric Meaning:* The domain is the entirety of three-dimensional space ($\mathbb{R}^3$).
  * *Notation:* $D = \{(x,y,z) \in \mathbb{R}^3\}$
* **Range Analysis:** Each variable is squared, meaning $x^2 \ge 0$, $y^2 \ge 0$, and $z^2 \ge 0$. The minimum output occurs exactly at the coordinate origin $(0,0,0)$, where $w = 0$. As the coordinates move away from the origin in any direction, the values grow infinitely large.
  * *Notation:* $R = [0, \infty)$

---

### Sample Problem 2: 3D Rational Function
Find the domain and range of:
$$g(x,y,z) = \frac{1}{x^2 + y^2 + z^2 - 1}$$

#### **Solution:**
* **Domain Analysis:** The denominator cannot evaluate to zero:
  $$x^2 + y^2 + z^2 - 1 \neq 0 \implies x^2 + y^2 + z^2 \neq 1$$
  * *Geometric Meaning:* The expression $x^2 + y^2 + z^2 = 1$ defines a sphere with a radius of $1$ centered at the origin. Therefore, the domain contains all points in 3D space *except* for those resting exactly on the shell of this unit sphere.
  * *Notation:* $D = \{(x,y,z) \in \mathbb{R}^3 \mid x^2 + y^2 + z^2 \neq 1\}$
* **Range Analysis:** The term $x^2 + y^2 + z^2$ spans $[0, \infty)$. Subtracting $1$ means the denominator spans $[-1, \infty)$ excluding $0$. 
  * At $(0,0,0)$, the denominator is $-1$, yielding a local maximum for negative numbers: $w = -1$. As the inputs approach the sphere from the inside, outputs trend to $-\infty$, covering $(-\infty, -1]$.
  * Approaching the sphere from the outside causes outputs to shoot up to $\infty$. As coordinates move out toward infinity, the fraction shrinks toward $0$ without ever touching it, covering $(0, \infty)$.
  * *Notation:* $R = (-\infty, -1] \cup (0, \infty)$

---

### Sample Problem 3: 3D Radical Function
Find the domain and range of:
$$h(x,y,z) = \sqrt{9 - x^2 - y^2 - z^2}$$

#### **Solution:**
* **Domain Analysis:** The expression under the radical must be non-negative:
  $$9 - x^2 - y^2 - z^2 \ge 0 \implies x^2 + y^2 + z^2 \le 9$$
  * *Geometric Meaning:* The domain is a solid 3D sphere (a solid ball) centered at the origin with an outer radius of $3$.
  * *Notation:* $D = \{(x,y,z) \in \mathbb{R}^3 \mid x^2 + y^2 + z^2 \le 9\}$
* **Range Analysis:** The sum $x^2 + y^2 + z^2$ varies between $0$ and $9$ inside this solid ball.
  * Max output occurs at the origin $(0,0,0)$: $\sqrt{9 - 0} = 3$
  * Min output occurs on the outer boundary shell where $x^2 + y^2 + z^2 = 9$: $\sqrt{9 - 9} = 0$
  * *Notation:* $R = [0, 3]$

---

### Sample Problem 4: 3D Logarithmic Function
Find the domain and range of:
$$m(x,y,z) = \ln(x+y+z)$$

#### **Solution:**
* **Domain Analysis:** The internal argument of the natural log must be strictly positive:
  $$x + y + z > 0 \implies z > -x - y$$
  * *Geometric Meaning:* The equation $x + y + z = 0$ defines a flat plane passing through the origin. The condition defines an open, infinite half-space extending entirely on one side of this plane.
  * *Notation:* $D = \{(x,y,z) \in \mathbb{R}^3 \mid x + y + z > 0\}$
* **Range Analysis:** The value of the plane combination spans across the open range $(0, \infty)$, which maps out all real outputs through the natural log.
  * *Notation:* $R = (-\infty, \infty)$

---

## Real-Life Engineering Application Problems

### Application Problem 1: [[Structural Engineering — Stress Analysis in Material Joints]]
[[Structural Engineering — Stress Analysis in Material Joints Solution]]


---

### Application Problem 2: [[Chemical & Environmental Engineering — Underground Contaminant Dispersion]]
[[Chemical & Environmental Engineering — Underground Contaminant Dispersion Solution]]
