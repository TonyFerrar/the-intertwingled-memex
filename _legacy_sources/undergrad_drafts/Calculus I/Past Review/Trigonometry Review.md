# Trigonometry Review: Reference Triangles, Quadrants, and the 6 Functions

When evaluating trigonometric values given a single trig ratio and a specific interval for $\theta$, you are working with **Reference Triangles** placed on the Cartesian coordinate plane. This review walks through the core rules step-by-step using a brand-new worked example.

---

## Core Concepts

### 1. The 6 Trigonometric Ratios
In a right-angled triangle, the six primary trigonometric functions are defined based on the **Opposite** side ($y$), **Adjacent** side ($x$), and the **Hypotenuse** ($r$):

$$\sin(\theta) = \frac{\text{Opposite}}{\text{Hypotenuse}} = \frac{y}{r} \quad\quad\quad \csc(\theta) = \frac{\text{Hypotenuse}}{\text{Opposite}} = \frac{r}{y}$$

$$\cos(\theta) = \frac{\text{Adjacent}}{\text{Hypotenuse}} = \frac{x}{r} \quad\quad\quad \sec(\theta) = \frac{\text{Hypotenuse}}{\text{Adjacent}} = \frac{r}{x}$$

$$\tan(\theta) = \frac{\text{Opposite}}{\text{Adjacent}} = \frac{y}{x} \quad\quad\quad \cot(\theta) = \frac{\text{Adjacent}}{\text{Opposite}} = \frac{x}{y}$$

---

### 2. The Quadrant Rule (ASTC)
The coordinate sign ($+$ or $-$) of your adjacent and opposite sides depends entirely on which quadrant the angle $\theta$ resides in. The hypotenuse ($r$) is **always positive**.



You can remember which functions are positive in each quadrant using the acronym **ASTC** (*All Students Take Calculus*):

* **Quadrant I** ($0 < \theta < \frac{\pi}{2}$): **A**ll functions are positive.
* **Quadrant II** ($\frac{\pi}{2} < \theta < \pi$): Only **S**ine (and $\csc$) are positive. ($x$ is negative, $y$ is positive)
* **Quadrant III** ($\pi < \theta < \frac{3\pi}{2}$): Only **T**angent (and $\cot$) are positive. ($x$ is negative, $y$ is negative)
* **Quadrant IV** ($\frac{3\pi}{2} < \theta < 2\pi$): Only **C**osine (and $\sec$) are positive. ($x$ is positive, $y$ is negative)

---

## Step-by-Step Problem Solving Framework

Every problem of this type follows a 3-step pipeline:
1. **Identify the Quadrant:** Determine the signs of the $x$ (adjacent) and $y$ (opposite) coordinates based on the given interval.
2. **Find the Missing Side:** Use the Pythagorean theorem ($x^2 + y^2 = r^2$) to calculate the value of the missing side, then apply the correct quadrant sign.
3. **Build the Ratios:** Plug the $x$, $y$, and $r$ values into the definitions of the remaining 5 trig functions.

---

## Worked Example

**Problem:** Given $\cos(\theta) = -\frac{3}{5}$ and $\pi < \theta < \frac{3\pi}{2}$, find the other 5 trigonometric values.

### Step 1: Analyze the Quadrant Constraints
* We are told that $\pi < \theta < \frac{3\pi}{2}$. This bounds the angle between $180^\circ$ and $270^\circ$, landing it inside **Quadrant III**.
* In Quadrant III, horizontal movements along the $x$-axis are negative, and vertical movements along the $y$-axis are also negative.
* Therefore:
  * $\text{Adjacent } (x) = \text{Negative}$
  * $\text{Opposite } (y) = \text{Negative}$

### Step 2: Extract Values and Solve for the Missing Side
From the definition of cosine ($\frac{\text{Adjacent}}{\text{Hypotenuse}}$), we match up the components of the given fraction $-\frac{3}{5}$. Remember that the hypotenuse $r$ is always positive, so the negative sign belongs to the $x$-coordinate:
* $\text{Adjacent } (x) = -3$
* $\text{Hypotenuse } (r) = 5$

Now use the Pythagorean theorem ($x^2 + y^2 = r^2$) to find the missing vertical side $y$:
$$(-3)^2 + y^2 = (5)^2$$
$$9 + y^2 = 25$$

Subtract $9$ from both sides:
$$y^2 = 16$$
$$y = \pm\sqrt{16} = \pm 4$$

Because Step 1 proved we are in Quadrant III, we must choose the negative value for our opposite coordinate:
$$\text{Opposite } (y) = -4$$

### Step 3: Compute the Remaining 5 Ratios
Now that we have all three structural values ($x = -3$, $y = -4$, $r = 5$), construct the rest of the functions:

* **Sine:**
  $$\sin(\theta) = \frac{y}{r} = -\frac{4}{5}$$

* **Tangent:**
  $$\tan(\theta) = \frac{y}{x} = \frac{-4}{-3} = \frac{4}{3}$$

* **Cosecant:** (Reciprocal of Sine)
  $$\csc(\theta) = \frac{r}{y} = -\frac{5}{4}$$

* **Secant:** (Reciprocal of Cosine)
  $$\sec(\theta) = \frac{r}{x} = -\frac{5}{3}$$

* **Cotangent:** (Reciprocal of Tangent)
  $$\cot(\theta) = \frac{x}{y} = \frac{-3}{-4} = \frac{3}{4}$$