# Comprehensive Review of the Unit Circle: Evaluating Trig and Inverse Trig Functions

The **unit circle** is a fundamental tool in trigonometry. It is a circle with a radius of exactly $1$ centered at the origin $(0,0)$ of the Cartesian coordinate plane. Because the radius is $1$, any point $(x, y)$ lying on the circle directly gives us the values of the trigonometric functions for the corresponding angle $\theta$.

---

## 1. Core Structure of the Unit Circle



### Coordinates as Trig Ratios
For any angle $\theta$ in standard position (starting on the positive $x$-axis and rotating counterclockwise):
* **$x$-coordinate** represents **$\cos(\theta)$**
* **$y$-coordinate** represents **$\sin(\theta)$**
* **The ratio $\frac{y}{x}$** represents **$\tan(\theta)$**

Therefore, every point on the unit circle can be written as:
$$(x, y) = (\cos(\theta), \sin(\theta))$$

### Key Reference Values (Quadrant I)
Memorizing the first quadrant allows you to derive any other value on the circle by adjusting the positive/negative signs based on the quadrant rules:

| Angle in Degrees | Angle in Radians | Coordinate Pair $(x, y)$ | $\tan(\theta) = \frac{y}{x}$ |
| :---: | :---: | :---: | :---: |
| $0^\circ$ | $0$ | $(1, 0)$ | $0$ |
| $30^\circ$ | $\frac{\pi}{6}$ | $\left(\frac{\sqrt{3}}{2}, \frac{1}{2}\right)$ | $\frac{\sqrt{3}}{3}$ |
| $45^\circ$ | $\frac{\pi}{4}$ | $\left(\frac{\sqrt{2}}{2}, \frac{\sqrt{2}}{2}\right)$ | $1$ |
| $60^\circ$ | $\frac{\pi}{3}$ | $\left(\frac{1}{2}, \frac{\sqrt{3}}{2}\right)$ | $\sqrt{3}$ |
| $90^\circ$ | $\frac{\pi}{2}$ | $(0, 1)$ | Undefined |

---

## 2. Evaluating Trigonometric Functions

To find a trigonometric value for any angle on the circle, follow these steps:
1. Locate the angle $\theta$ on the circle.
2. Identify its $(x, y)$ coordinate pair.
3. Use the definitions to build your answer ($\sin = y$, $\cos = x$, $\tan = \frac{y}{x}$).

### Worked Example 1: Finding a Quadrant II Value
Find the exact value of $\cos\left(\frac{2\pi}{3}\right)$.

#### Step-by-Step Solution:
* **Step 1:** Locate $\frac{2\pi}{3}$ on the unit circle. It lies in Quadrant II ($120^\circ$).
* **Step 2:** Find its coordinate pair. It shares the same reference angle ($\frac{\pi}{3}$) as $( \frac{1}{2}, \frac{\sqrt{3}}{2} )$, but since it's in Quadrant II, the $x$-coordinate is negative:
  $$(x, y) = \left(-\frac{1}{2}, \frac{\sqrt{3}}{2}\right)$$
* **Step 3:** Since cosine corresponds to the $x$-coordinate:
  $$\cos\left(\frac{2\pi}{3}\right) = -\frac{1}{2}$$

---

## 3. Evaluating Inverse Trigonometric Functions

Inverse trigonometric functions ($\sin^{-1}(x)$, $\cos^{-1}(x)$, $\tan^{-1}(x)$ or $\arcsin(x)$, $\arccos(x)$, $\arctan(x)$) work backward: **you are given a ratio (a coordinate value) and must find the corresponding angle $\theta$.**

To ensure each expression returns only a single, unique answer, **strict output restrictions (ranges)** are placed on inverse trig functions:

[Image showing restricted ranges for inverse trigonometric functions highlighted on a coordinate plane]

| Function | Domain (Input) | Range Constraint (Output Angle) | Allowed Quadrants |
| :--- | :--- | :--- | :--- |
| **$\cos^{-1}(x)$** | $[-1, 1]$ | $[0, \pi]$ | Quadrants I and II |
| **$\sin^{-1}(x)$** | $[-1, 1]$ | $\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$ | Quadrants I and IV |
| **$\tan^{-1}(x)$** | $(-\infty, \infty)$ | $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$ | Quadrants I and IV |

*Crucial Tip:* For negative inputs in Quadrant IV ($\sin^{-1}$ and $\tan^{-1}$), your output angle **must** be written as a negative angle (e.g., $-\frac{\pi}{6}$ instead of $\frac{11\pi}{6}$).

### Worked Example 2: Inverse Cosine
Evaluate: $\cos^{-1}\left(-\frac{\sqrt{2}}{2}\right)$

#### Step-by-Step Solution:
* **Step 1:** Rephrase the problem: "At what angle $\theta$ does the $x$-coordinate equal $-\frac{\sqrt{2}}{2}$?"
* **Step 2:** Apply the restriction: For $\cos^{-1}$, the angle must lie between $0$ and $\pi$ (Quadrants I and II).
* **Step 3:** Find the angle on the circle: Since the input is negative, search in Quadrant II. The coordinate pair is $\left(-\frac{\sqrt{2}}{2}, \frac{\sqrt{2}}{2}\right)$, which corresponds to:
  $$\theta = \frac{3\pi}{4}$$

---

### Worked Example 3: Inverse Tangent
Evaluate: $\arctan(-\sqrt{3})$

#### Step-by-Step Solution:
* **Step 1:** Rephrase the problem: "At what angle $\theta$ does the ratio $\frac{y}{x}$ equal $-\sqrt{3}$?"
* **Step 2:** Apply the restriction: For $\arctan$, the angle must lie between $-\frac{\pi}{2}$ and $\frac{\pi}{2}$ (Quadrants I and IV).
* **Step 3:** Find the angle: Because the value is negative, look in Quadrant IV. We know from our reference table that a tangent value of $\sqrt{3}$ occurs at a $\frac{\pi}{3}$ reference angle. In Quadrant IV, traveling clockwise to maintain the correct range constraint gives:
  $$\theta = -\frac{\pi}{3}$$


## Extra Help: 

<iframe width="560" height="315" src="https://www.youtube.com/embed/57VrEiEPD1I?si=7TZxQP484g9wgY1o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>