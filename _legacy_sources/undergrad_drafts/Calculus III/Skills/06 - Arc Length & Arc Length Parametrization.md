# Skill 1: Arc Length & Arc Length Parametrization

## Core Notes & Concepts

When a particle moves along a 3D path dictated by a vector-valued position function $\vec{r}(t) = f(t)\hat{i} + g(t)\hat{j} + h(t)\hat{k}$, we often need to measure the distance it covers or treat its position as a function of the distance traveled rather than a function of time.

### 1. Arc Length ($s$)

The total distance traversed along a smooth curve from an initial time $t = a$ to a final time $t = b$ is the definite integral of the particle's speed. Because the velocity vector is $\vec{r}'(t)$ , its magnitude $||\vec{r}'(t)||$ represents the scalar speed.

$$s = \int_{a}^{b} ||\vec{r}'(t)||\,dt = \int_{a}^{b} \sqrt{(f'(t))^2 + (g'(t))^2 + (h'(t))^2}\,dt$$

### 2. The Arc Length Function ($s(t)$)

If we fix a starting point at $t = a$ and let the upper integration limit be a variable time $t$, we obtain the **arc length function**, $s(t)$. This function outputs the total accumulated distance covered by the particle from time $a$ up to time $t$:

$$s(t) = \int_{a}^{t} ||\vec{r}'(u)||\,du$$

### 3. Arc Length Parametrization ($\vec{r}(s)$)

A standard position vector $\vec{r}(t)$ tells you _where_ an object is at a specific _time_. However, in many engineering applications, we do not care about time; we care about where an object is located based on the _distance_ it has traveled along the curve. Rewriting a path this way is called **arc length parametrization** (or intrinsic parametrization).

When a curve is parametrized by arc length, its speed is always exactly equal to $1$ ($||\vec{r}'(s)|| = 1$), meaning a particle moving along the curve traverses it at a perfectly uniform unit rate.

#### Steps to find the Arc Length Parametrization:

1. **Find $s(t)$:** Integrate the speed from the chosen initial boundary $a$ to a variable time $t$.
    
2. **Invert the function:** Solve the resulting equation for $t$ in terms of $s$ to get an expression $t(s)$.
    
3. **Substitute:** Replace all occurrences of $t$ in the original vector function $\vec{r}(t)$ with your expression for $t(s)$ to form $\vec{r}(s)$.
    

## Guided Sample Problem

### Problem Statement

A particle moves along a path described by the vector function:

$$\vec{r}(t) = (3t^2 - 7)\hat{i} + (-4t^2 - 10)\hat{j} \quad \text{for } t \ge 0$$

1. Find the total distance (arc length $s$) traversed by the particle from $t = 0$ to $t = 4$.
    
2. Find the general arc length function $s(t)$ starting from $t = 0$.
    
3. Find the arc length parametrization $\vec{r}(s)$ for the curve.
    

### Step-by-Step Solution

#### 1. Compute the Total Arc Length from $t = 0$ to $t = 4$

First, calculate the derivative components:

$$f'(t) = \frac{d}{dt}(3t^2 - 7) = 6t$$

$$g'(t) = \frac{d}{dt}(-4t^2 - 10) = -8t$$

Set up the magnitude of the velocity vector (speed):

$$||\vec{r}'(t)|| = \sqrt{(6t)^2 + (-8t)^2} = \sqrt{36t^2 + 64t^2} = \sqrt{100t^2} = 10|t|$$

Since the problem states $t \ge 0$, we drop the absolute value bars, giving the speed $||\vec{r}'(t)|| [cite_start]= 10t$. Now, evaluate the integral from $0$ to $4$:

$$s = \int_{0}^{4} 10t\,dt = \left[ 5t^2 \right]_{0}^{4} = 5(4)^2 - 5(0)^2 = 80$$

**Answer:** The total distance traveled is **$80$ units**.

#### 2. Find the Arc Length Function $s(t)$

Integrate the speed function using a dummy variable $u$ from the boundary $0$ to variable time $t$:

$$s(t) = \int_{0}^{t} 10u\,du = \left[ 5u^2 \right]_{0}^{t} = 5t^2$$

**Answer:** The arc length function is **$s(t) = 5t^2$**. (Evaluating $s(4) = 5(4)^2 = 80$ confirms our result from part 1.)

#### 3. Determine the Arc Length Parametrization $\vec{r}(s)$

Invert the arc length function to isolate $t$:

$$s = 5t^2 \implies t^2 = \frac{s}{5} \implies t(s) = \sqrt{\frac{s}{5}}$$

Substitute this expression back into the original position vector $\vec{r}(t)$:

$$\vec{r}(s) = \left(3\left(\sqrt{\frac{s}{5}}\right)^2 - 7\right)\hat{i} + \left(-4\left(\sqrt{\frac{s}{5}}\right)^2 - 10\right)\hat{j}$$

$$\vec{r}(s) = \left(\frac{3}{5}s - 7\right)\hat{i} + \left(-\frac{4}{5}s - 10\right)\hat{j}$$

**Answer:** The arc length parametrization is **$\vec{r}(s) = \left(\frac{3}{5}s - 7\right)\hat{i} + \left(-\frac{4}{5}s - 10\right)\hat{j}$**.

## Real-Life Engineering Application Problems

### Application 1: [[Robotic Manufacturing & CNC Toolpaths]]
[[Robotic Manufacturing & CNC Toolpaths Solution]]

### Application 2: [[Structural Pipeline & Infrastructure Routing]]
[[Structural Pipeline & Infrastructure Routing Solution]]
