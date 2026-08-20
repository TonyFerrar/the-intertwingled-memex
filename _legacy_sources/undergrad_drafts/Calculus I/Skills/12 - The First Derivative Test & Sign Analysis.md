
# Skill 2: The First Derivative Test & Sign Analysis

When optimizing functions over open or infinite intervals, we cannot rely on comparing boundary endpoints because those boundaries do not exist or are excluded from the domain. Instead, we analyze the behavior of the function's slope. By using **Sign Analysis** on the first derivative, we can map out exactly where a function is climbing or falling, and apply the **First Derivative Test** to definitively classify its relative and absolute extrema.

---

## 📘 Conceptual Notes & Core Definitions

### 1. Direction of a Function (Increasing vs. Decreasing)
The sign of the first derivative tells us whether a function's curve is moving upward or downward:
* If $f'(x) > 0$ for all $x$ on an interval, then $f(x)$ is **increasing** (moving upward from left to right).
* If $f'(x) < 0$ for all $x$ on an interval, then $f(x)$ is **decreasing** (moving downward from left to right).

### 2. The First Derivative Test
Suppose $f(x)$ is continuous and $c$ is an interior critical number. We test the sign of $f'(x)$ in the intervals immediately to the left and right of $c$:
* **Relative Maximum:** If $f'(x)$ changes sign from **positive to negative** at $x = c$, then $f(c)$ is a relative maximum. (The graph transitions from climbing to falling, creating a peak).
* **Relative Minimum:** If $f'(x)$ changes sign from **negative to positive** at $x = c$, then $f(c)$ is a relative minimum. (The graph transitions from falling to climbing, creating a valley).
* **No Extrema:** If $f'(x)$ is positive on both sides or negative on both sides of $x = c$, then $x = c$ is neither a maximum nor a minimum.

### 3. Sign Analysis Workflow (The Sign Chart)
To perform sign analysis cleanly:
1. Find $f'(x)$ and determine all critical numbers where $f'(x) = 0$ or is undefined.
2. Place these critical numbers onto a blank number line to divide the domain into distinct test intervals.
3. Select an arbitrary "test value" from inside each interval and plug it strictly into the **derivative function, $f'(x)$**.
4. Record whether the result is positive ($+$) or negative ($-$) to determine the function's directional behavior.

### 4. Single Critical Point Rule for Absolute Extrema
If a function $f(x)$ is continuous on an open or infinite interval and contains **exactly one** relative extremum at a local coordinate $x_0$:
* If that single point is a relative minimum, it is automatically the **absolute minimum** over the entire interval.
* If that single point is a relative maximum, it is automatically the **absolute maximum** over the entire interval.

---

## ✏️ Original Sample Problem

### Example 1
Find the absolute extrema, if any, of the function $f(x) = x - \ln(x)$ on its natural open domain $(0, \infty)$.

#### **Solution and Analysis:**
**Step 1: Locate the critical numbers.**
Find the derivative of the function:
$$f'(x) = 1 - \frac{1}{x} = \frac{x - 1}{x}$$

Set the derivative equal to $0$:
$$\frac{x - 1}{x} = 0 \implies x - 1 = 0 \implies x = 1$$
The derivative is undefined at $x = 0$, but since $x = 0$ is outside the open domain $(0, \infty)$, our only valid interior critical point is $x = 1$.

**Step 2: Set up a Sign Chart.**
We build a sign chart for $f'(x)$ around our critical number $x = 1$:


* **Testing Interval $(0, 1)$:** Choose $x = 0.5$.  
  $$f'(0.5) = 1 - \frac{1}{0.5} = 1 - 2 = -1 \quad (-)$$
* **Testing Interval $(1, \infty)$:** Choose $x = 2$.  
  $$f'(2) = 1 - \frac{1}{2} = 0.5 \quad (+)$$

**Step 3: Apply the First Derivative Test & Single Critical Point Rule.**
Because the sign of $f'(x)$ changes from negative to positive at $x = 1$, the function reaches a relative minimum at this location. Since $x = 1$ is the **only** critical point contained within the entire open interval, this local valley is automatically the absolute lowest point on the graph.

* **Absolute Minimum Value:** $f(1) = 1 - \ln(1) = 1 - 0 = 1$ at location $x = 1$.
* **Absolute Maximum Value:** Does not exist (the function increases infinitely on either side of the minimum).

---

## 🚀 Real-Life Engineering Application Problems

### Engineering Problem 1: [[Chemical Process Reaction Yield Optimization]]
[[Chemical Process Reaction Yield Optimization Solution]]

---

### Engineering Problem 2: [[Marine Vehicle Energy Consumption Minimization]]
[[Marine Vehicle Energy Consumption Minimization Solution]]
