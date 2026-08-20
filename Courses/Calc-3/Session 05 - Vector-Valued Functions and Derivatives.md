---
title: "Session 05 - Vector-Valued Functions and Derivatives"
type: course-session
course: MATH-283
semester: Fall 2026
publish: true
cssclasses: []
updated: 2026-08-18
---

# Session 05 - Vector-Valued Functions and Derivatives

## Session Objectives
By the end of this session, you will be able to:
- Review core multivariable mathematical concepts and engineering calculus prerequisites.

## Session Timeline
- **00:00 - 00:10 (10 mins)**: Micro-Lecture
- **00:10 - 00:25 (15 mins)**: Skill Block 1
- **00:25 - 00:30 (5 mins)**: Regroup 1
- **00:30 - 00:45 (15 mins)**: Skill Block 2
- **00:45 - 00:50 (5 mins)**: Regroup 2
- **00:50 - 01:05 (15 mins)**: Skill Block 3
- **01:05 - 01:10 (5 mins)**: Regroup 3
- **01:10 - 01:15 (5 mins)**: Synthesis Wrap-up

## Session Content

### Micro-Lecture
#### Engineering Context: Motion in Mechanical Systems
In this session, we investigate the mathematical principles of **Vector-Valued Functions and Derivatives** and explore how engineers apply these concepts to analyze real-world physical and structural systems.

### Skill Block 1
Explanations and derivations of the core concepts.

#### Worked Example
Determine the domain of $\vec{r}(t) = \left\langle \sqrt{t+2}, \frac{-9}{t+3}, \frac{-7}{\sqrt{t-5}} \right\rangle$ and plot the function using Desmos.

##### Solution
Here is the step-by-step solution to the problem presented in the image.

###### Problem Statement

Determine the domain of the vector-valued function:

$$\vec{r}(t) = \left\langle \sqrt{t+2}, \frac{-9}{t+3}, \frac{-7}{\sqrt{t-5}} \right\rangle$$

###### Step-by-Step Solution

To find the domain of a vector-valued function, we must find the intersection of the domains of its individual component functions ($x(t)$, $y(t)$, and $z(t)$).

###### 1. Analyze the $x$-component: $x(t) = \sqrt{t+2}$

- The term inside a square root must be greater than or equal to zero.

- Set up the inequality:

$$t + 2 \ge 0 \implies t \ge -2$$

- **Domain of $x(t)$**: $[-2, \infty)$


###### 2. Analyze the $y$-component: $y(t) = \frac{-9}{t+3}$

- The denominator cannot equal zero.

- Set up the equation:

$$t + 3 \neq 0 \implies t \neq -3$$

- **Domain of $y(t)$**: $(-\infty, -3) \cup (-3, \infty)$


###### 3. Analyze the $z$-component: $z(t) = \frac{-7}{\sqrt{t-5}}$

- The term inside the square root must be non-negative ($t - 5 \ge 0$).

- Additionally, because the square root is in the denominator, it cannot be equal to zero ($t - 5 \neq 0$).

- Combining these restrictions yields:

$$t - 5 > 0 \implies t > 5$$

- **Domain of $z(t)$**: $(5, \infty)$


###### Finding the Intersection

Now, we intersect the three individual domains to find where all components are simultaneously defined:

1. $t \ge -2$

2. $t \neq -3$

3. $t > 5$


Since any value of $t$ that is strictly greater than $5$ automatically satisfies $t \ge -2$ and $t \neq -3$, the restriction $t > 5$ dictates the overall domain.

###### Final Answer

- **Inequality Notation:** $t > 5$

- **Interval Notation:** $(5, \infty)$


###### Desmos Plotting Tip

To plot this 3D vector-valued function in Desmos (specifically using the Desmos 3D Grapher), you can input the curve using the parameter $t$ exactly as written:

Plaintext

```
r(t) = (sqrt(t+2), -9/(t+3), -7/sqrt(t-5))
```

Be sure to set the parameter bounds for $t$ starting from just above $5$ (e.g., `5 < t < 15`) to see the curve render correctly!
#### Active Practice Problem
Determine the domain and plot using Desmos:
$$\vec{r}(t) = \left\langle \sqrt{3t-4}, \sqrt{t+7}, \frac{6}{t-1} \right\rangle$$

##### Workspace

##### Solution
###### Problem Statement
Determine the domain of the vector-valued function:
$$\vec{r}(t) = \left\langle \sqrt{3t-4}, \sqrt{t+7}, \frac{6}{t-1} \right\rangle$$

---

###### Step-by-Step Solution

To find the domain of this vector-valued function, we find the domain of each component independently and then determine where they intersect.

###### 1. Analyze the $x$-component: $x(t) = \sqrt{3t-4}$
* The expression inside the square root must be greater than or equal to zero.
$$3t - 4 \ge 0 \implies 3t \ge 4 \implies t \ge \frac{4}{3}$$
* **Domain of $x(t)$**: $\left[\frac{4}{3}, \infty\right)$

###### 2. Analyze the $y$-component: $y(t) = \sqrt{t+7}$
* The expression inside the square root must be greater than or equal to zero.
$$t + 7 \ge 0 \implies t \ge -7$$
* **Domain of $y(t)$**: $[-7, \infty)$

###### 3. Analyze the $z$-component: $z(t) = \frac{6}{t-1}$
* The denominator cannot equal zero.
$$t - 1 \neq 0 \implies t \neq 1$$
* **Domain of $z(t)$**: $(-\infty, 1) \cup (1, \infty)$

---

###### Finding the Intersection

Now, find the interval where all three conditions are satisfied at the same time:
1. $t \ge \frac{4}{3}$ (which is approximately $1.33$)
2. $t \ge -7$
3. $t \neq 1$

* Looking at the first condition ($t \ge \frac{4}{3}$), any value in this range is automatically greater than $-7$.
* Furthermore, since $\frac{4}{3} > 1$, the restriction $t \neq 1$ is already excluded automatically because $1$ is strictly less than $\frac{4}{3}$.

Therefore, the condition $t \ge \frac{4}{3}$ is the limiting restriction that satisfies all components.

###### Final Answer

* **Inequality Notation:** $t \ge \frac{4}{3}$
* **Interval Notation:** $\left[\frac{4}{3}, \infty\right)$

---
##### Extra Practice & Extensions
> ##### Extension Problem (Motion)
> Determine the domain and plot using Desmos:
$$\vec{r}(t) = \left\langle \frac{\sqrt{t+2}}{t-1}, \sqrt{4-t}, \frac{3}{\sqrt{t-6}} \right\rangle$$
> 
> > [!check]- Solution
> > ### Problem Statement
> > Determine the domain of the vector-valued function:
> > $$\vec{r}(t) = \left\langle \frac{\sqrt{t+2}}{t-1}, \sqrt{4-t}, \frac{3}{\sqrt{t-6}} \right\rangle$$
> > 
> > ---
> > 
> > ### Step-by-Step Solution
> > 
> > To find the domain of this vector-valued function, we evaluate the domain restrictions of each component function and find where they overlap.
> > 
> > #### 1. Analyze the $x$-component: $x(t) = \frac{\sqrt{t+2}}{t-1}$
> > This component has two separate restrictions:
> > * **Numerator (Square Root):** The radicand must be non-negative.
> > $$t + 2 \ge 0 \implies t \ge -2$$
> > * **Denominator:** The denominator cannot equal zero.
> > $$t - 1 \neq 0 \implies t \neq 1$$
> > * **Domain of $x(t)$:** $[-2, 1) \cup (1, \infty)$
> > 
> > #### 2. Analyze the $y$-component: $y(t) = \sqrt{4-t}$
> > * The expression inside the square root must be non-negative.
> > $$4 - t \ge 0 \implies 4 \ge t \implies t \le 4$$
> > * **Domain of $y(t)$:** $(-\infty, 4]$
> > 
> > #### 3. Analyze the $z$-component: $z(t) = \frac{3}{\sqrt{t-6}}$
> > * The expression inside the square root must be non-negative ($t - 6 \ge 0$).
> > * Because the square root is in the denominator, it also cannot equal zero ($t - 6 \neq 0$).
> > * Combining these gives:
> > $$t - 6 > 0 \implies t > 6$$
> > * **Domain of $z(t)$:** $(6, \infty)$
> > 
> > ---
> > 
> > ### Finding the Intersection
> > 
> > Now, let's look at all the conditions together to find their intersection:
> > 1. $t \ge -2$ and $t \neq 1$
> > 2. $t \le 4$
> > 3. $t > 6$
> > 
> > Let's evaluate the conflict between conditions (2) and (3):
> > * Condition 2 requires $t$ to be **less than or equal to 4**.
> > * Condition 3 requires $t$ to be **strictly greater than 6**.
> > 
> > There is no real number $t$ that can be simultaneously less than or equal to $4$ and greater than $6$.
> > 
> > ### Final Answer
> > 
> > * **Domain:** There is no intersection. The domain of the vector-valued function is the **empty set** ($\emptyset$).
> > * **Conclusion:** This function cannot be plotted because it does not exist for any real value of $t$.
> > 
> > ---
>

### Regroup 1
- Review common misconceptions and clarify key notations.

### Skill Block 2
Explanations and derivations of the core concepts.

#### Worked Example
Find the derivative of the vector valued function and the principal unit tangent vector:
$$\vec{r}(t) = -t\hat{i} - t^{4}\hat{j} - 6t^{2}\hat{k}$$

##### Solution
###### Problem Statement
Find the derivative of the vector-valued function and the principal unit tangent vector:
$$\vec{r}(t) = -t\hat{i} - t^{4}\hat{j} - 6t^{2}\hat{k}$$

---

###### Step-by-Step Solution

###### Part 1: Find the Derivative $\vec{r}^{\prime}(t)$
To find the derivative of a vector-valued function, differentiate each component with respect to $t$ individually using the power rule:

* **$\hat{i}$-component:** $\frac{d}{dt}[-t] = -1$
* **$\hat{j}$-component:** $\frac{d}{dt}[-t^4] = -4t^3$
* **$\hat{k}$-component:** $\frac{d}{dt}[-6t^2] = -12t$

$$\vec{r}^{\prime}(t) = -\hat{i} - 4t^{3}\hat{j} - 12t\hat{k}$$

---

###### Part 2: Find the Principal Unit Tangent Vector $\hat{T}(t)$
The principal unit tangent vector is found by dividing the tangent vector $\vec{r}^{\prime}(t)$ by its magnitude $|\vec{r}^{\prime}(t)|$:
$$\hat{T}(t) = \frac{\vec{r}^{\prime}(t)}{|\vec{r}^{\prime}(t)|}$$

**1. Calculate the Magnitude $|\vec{r}^{\prime}(t)|$:**
$$|\vec{r}^{\prime}(t)| = \sqrt{(-1)^2 + (-4t^3)^2 + (-12t)^2}$$
$$|\vec{r}^{\prime}(t)| = \sqrt{1 + 16t^6 + 144t^2}$$

Rearranging the terms in standard descending order:
$$|\vec{r}^{\prime}(t)| = \sqrt{16t^6 + 144t^2 + 1}$$

**2. Divide $\vec{r}^{\prime}(t)$ by its magnitude:**
$$\hat{T}(t) = \frac{-\hat{i} - 4t^{3}\hat{j} - 12t\hat{k}}{\sqrt{16t^6 + 144t^2 + 1}}$$

---

###### Final Answer

* **Derivative:** $$\vec{r}^{\prime}(t) = -\hat{i} - 4t^{3}\hat{j} - 12t\hat{k}$$

* **Principal Unit Tangent Vector:** $$\hat{T}(t) = \frac{-1}{\sqrt{16t^6 + 144t^2 + 1}}\hat{i} - \frac{4t^3}{\sqrt{16t^6 + 144t^2 + 1}}\hat{j} - \frac{12t}{\sqrt{16t^6 + 144t^2 + 1}}\hat{k}$$
#### Active Practice Problem
Given $\vec{r}(t) = -6t^{3}\hat{i} - 3t^{7}\hat{j} - \frac{-3}{t^{4}}\hat{k}$ and $f(t) = \sqrt[4]{t}$, calculate:
1. $\frac{d}{dt}[\vec{r}(t)]$
2. $\frac{d}{dt}[\vec{r}(f(t))]$

##### Workspace

##### Solution
###### Problem Statement
Given $\vec{r}(t) = -6t^{3}\hat{i} - 3t^{7}\hat{j} - \frac{-3}{t^{4}}\hat{k}$ and $f(t) = \sqrt[4]{t}$, calculate:
1. $\frac{d}{dt}[\vec{r}(t)]$
2. $\frac{d}{dt}[\vec{r}(f(t))]$

---

###### Step-by-Step Solution

First, let's rewrite the given vector-valued function $\vec{r}(t)$ and scalar function $f(t)$ in simplified power form to make differentiation easier:
$$\vec{r}(t) = -6t^{3}\hat{i} - 3t^{7}\hat{j} + 3t^{-4}\hat{k}$$
$$f(t) = t^{1/4}$$

---

###### Part 1: Calculate $\frac{d}{dt}[\vec{r}(t)]$

To find the derivative, use the power rule on each component individually:

* **$\hat{i}$-component:** $\frac{d}{dt}[-6t^3] = -18t^2$
* **$\hat{j}$-component:** $\frac{d}{dt}[-3t^7] = -21t^6$
* **$\hat{k}$-component:** $\frac{d}{dt}[3t^{-4}] = -12t^{-5} = -\frac{12}{t^5}$

$$\frac{d}{dt}[\vec{r}(t)] = -18t^{2}\hat{i} - 21t^{6}\hat{j} - \frac{12}{t^{5}}\hat{k}$$

---

###### Part 2: Calculate $\frac{d}{dt}[\vec{r}(f(t))]$

There are two common methods to solve this: by substitution first, or by using the Vector Chain Rule. Let's use **Method 1: Direct Substitution** as it is often simpler.

**Step 1: Substitute $f(t) = t^{1/4}$ into $\vec{r}(t)$**
$$\vec{r}(f(t)) = -6\left(t^{1/4}\right)^{3}\hat{i} - 3\left(t^{1/4}\right)^{7}\hat{j} + 3\left(t^{1/4}\right)^{-4}\hat{k}$$
$$\vec{r}(f(t)) = -6t^{3/4}\hat{i} - 3t^{7/4}\hat{j} + 3t^{-1}\hat{k}$$

**Step 2: Differentiate with respect to $t$**
Now, apply the power rule to each component of this composite vector function:
* **$\hat{i}$-component:** $\frac{d}{dt}[-6t^{3/4}] = -6 \cdot \frac{3}{4}t^{-1/4} = -\frac{9}{2}t^{-1/4}$
* **$\hat{j}$-component:** $\frac{d}{dt}[-3t^{7/4}] = -3 \cdot \frac{7}{4}t^{3/4} = -\frac{21}{4}t^{3/4}$
* **$\hat{k}$-component:** $\frac{d}{dt}[3t^{-1}] = 3 \cdot (-1)t^{-2} = -3t^{-2}$

$$\frac{d}{dt}[\vec{r}(f(t))] = -\frac{9}{2t^{1/4}}\hat{i} - \frac{21t^{3/4}}{4}\hat{j} - \frac{3}{t^2}\hat{k}$$

---

###### Final Answers

1. $$\frac{d}{dt}[\vec{r}(t)] = -18t^{2}\hat{i} - 21t^{6}\hat{j} - \frac{12}{t^{5}}\hat{k}$$

2. $$\frac{d}{dt}[\vec{r}(f(t))] = -\frac{9}{2t^{1/4}}\hat{i} - \frac{21t^{3/4}}{4}\hat{j} - \frac{3}{t^2}\hat{k}$$
##### Extra Practice & Extensions
> ##### Extension Problem (Motion)
> The velocity of a car driving along the highway can be represented as the following vector valued function:
$$\vec{v}(t) = \left\langle t \sin(2t), 2t \ln(t-3), \frac{t^{2}}{t-2} \right\rangle \text{ m/s}$$

* Find the acceleration of the car, $\vec{a}(t)$. *Hint: acceleration is the derivative of velocity with respect to time.*
* Find the acceleration and principal unit tangent vector at $t = 20$ s.
> 
> > [!check]- Solution
> > ### Problem Statement
> > The velocity of a car driving along the highway can be represented as the following vector-valued function:
> > $$\vec{v}(t) = \left\langle t \sin(2t), 2t \ln(t-3), \frac{t^{2}}{t-2} \right\rangle \text{ m/s}$$
> > 
> > * Find the acceleration of the car, $\vec{a}(t)$. *Hint: acceleration is the derivative of velocity with respect to time.*
> > * Find the acceleration and principal unit tangent vector at $t = 20$ s.
> > 
> > ---
> > 
> > ### Step-by-Step Solution
> > 
> > #### Part 1: Find the Acceleration Vector Function $\vec{a}(t)$
> > To find $\vec{a}(t) = \vec{v}'(t)$, we need to differentiate each component function individually with respect to $t$.
> > 
> > **1. Differentiate the $x$-component: $v_x(t) = t \sin(2t)$**
> > Using the Product Rule ($\frac{d}{dt}[uv] = u'v + uv'$):
> > $$\frac{d}{dt}[t \sin(2t)] = (1)\sin(2t) + t \cdot \cos(2t) \cdot 2$$
> > $$a_x(t) = \sin(2t) + 2t \cos(2t)$$
> > 
> > **2. Differentiate the $y$-component: $v_y(t) = 2t \ln(t-3)$**
> > Using the Product Rule:
> > $$\frac{d}{dt}[2t \ln(t-3)] = (2)\ln(t-3) + 2t \cdot \frac{1}{t-3}$$
> > $$a_y(t) = 2\ln(t-3) + \frac{2t}{t-3}$$
> > 
> > **3. Differentiate the $z$-component: $v_z(t) = \frac{t^2}{t-2}$**
> > Using the Quotient Rule ($\frac{d}{dt}\left[\frac{u}{v}\right] = \frac{u'v - uv'}{v^2}$):
> > $$\frac{d}{dt}\left[\frac{t^2}{t-2}\right] = \frac{(2t)(t-2) - (t^2)(1)}{(t-2)^2}$$
> > $$\frac{d}{dt}\left[\frac{t^2}{t-2}\right] = \frac{2t^2 - 4t - t^2}{(t-2)^2} = \frac{t^2 - 4t}{(t-2)^2}$$
> > $$a_z(t) = \frac{t^2 - 4t}{(t-2)^2}$$
> > 
> > **Combined Acceleration Vector:**
> > $$\vec{a}(t) = \left\langle \sin(2t) + 2t \cos(2t), 2\ln(t-3) + \frac{2t}{t-3}, \frac{t^2 - 4t}{(t-2)^2} \right\rangle$$
> > 
> > ---
> > 
> > #### Part 2: Find Acceleration at $t = 20$ s
> > Substitute $t = 20$ into each component of our acceleration function $\vec{a}(t)$:
> > 
> > * **$x$-component:** $\sin(40) + 40 \cos(40) \approx 0.745 + 40(-0.667) \approx -25.93$
> > * **$y$-component:** $2\ln(17) + \frac{40}{17} \approx 5.666 + 2.353 \approx 8.02$
> > * **$z$-component:** $\frac{20^2 - 4(20)}{(20-2)^2} = \frac{400 - 80}{18^2} = \frac{320}{324} \approx 0.99$
> > 
> > $$\vec{a}(20) \approx \langle -25.93, 8.02, 0.99 \rangle \text{ m/s}^2$$
> > 
> > ---
> > 
> > #### Part 3: Find the Principal Unit Tangent Vector at $t = 20$ s
> > By definition, the principal unit tangent vector $\hat{T}(t)$ points in the exact direction of the velocity vector (the tangent vector to position). Therefore:
> > $$\hat{T}(20) = \frac{\vec{v}(20)}{|\vec{v}(20)|}$$
> > 
> > **1. Find the components of velocity $\vec{v}(20)$:**
> > Substitute $t = 20$ into the original velocity function:
> > * $v_x(20) = 20 \sin(40) \approx 20(0.745) \approx 14.90$
> > * $v_y(20) = 40 \ln(17) \approx 40(2.833) \approx 113.33$
> > * $v_z(20) = \frac{20^2}{20-2} = \frac{400}{18} \approx 22.22$
> > 
> > $$\vec{v}(20) \approx \langle 14.90, 113.33, 22.22 \rangle$$
> > 
> > **2. Calculate the Magnitude $|\vec{v}(20)|$:**
> > $$|\vec{v}(20)| \approx \sqrt{(14.90)^2 + (113.33)^2 + (22.22)^2}$$
> > $$|\vec{v}(20)| \approx \sqrt{222.01 + 12843.69 + 493.73}$$
> > $$|\vec{v}(20)| \approx \sqrt{13559.43} \approx 116.44$$
> > 
> > **3. Compute $\hat{T}(20)$:**
> > $$\hat{T}(20) \approx \left\langle \frac{14.90}{116.44}, \frac{113.33}{116.44}, \frac{22.22}{116.44} \right\rangle$$
> > $$\hat{T}(20) \approx \langle 0.128, 0.973, 0.191 \rangle$$
> > 
> > ---
> > 
> > ### Final Answers
> > 
> > * **Acceleration Vector Function:**
> > $$\vec{a}(t) = \left\langle \sin(2t) + 2t \cos(2t), 2\ln(t-3) + \frac{2t}{t-3}, \frac{t^2 - 4t}{(t-2)^2} \right\rangle$$
> > 
> > * **Acceleration at $t = 20$ s:**
> > $$\vec{a}(20) \approx \langle -25.93, 8.02, 0.99 \rangle \text{ m/s}^2$$
> > 
> > * **Principal Unit Tangent Vector at $t = 20$ s:**
> > $$\hat{T}(20) \approx \langle 0.128, 0.973, 0.191 \rangle$$
>

### Regroup 2
- Reflect on the physical modeling applications and mathematical setups.

### Skill Block 3
Explanations and derivations of the core concepts.

#### Worked Example
Evaluate the indefinite integral:
$$\int \left\langle 5 \cos(7t), 3 \cos(4t), \frac{-9}{t} \right\rangle dt$$

##### Solution
###### Problem Statement
Evaluate the indefinite integral:
$$\int \left\langle 5 \cos(7t), 3 \cos(4t), \frac{-9}{t} \right\rangle dt$$

---

###### Step-by-Step Solution

To integrate a vector-valued function, integrate each component function independently with respect to $t$. Remember to include a constant of integration for each component, which can ultimately be combined into a single constant vector $\vec{C}$.

###### 1. Integrate the $x$-component: $f(t) = 5 \cos(7t)$
Using $u$-substitution where $u = 7t$ and $du = 7\,dt$:
$$\int 5 \cos(7t) \, dt = 5 \cdot \frac{1}{7} \sin(7t) + C_1 = \frac{5}{7} \sin(7t) + C_1$$

###### 2. Integrate the $y$-component: $g(t) = 3 \cos(4t)$
Similarly, using $u$-substitution where $u = 4t$ and $du = 4\,dt$:
$$\int 3 \cos(4t) \, dt = 3 \cdot \frac{1}{4} \sin(4t) + C_2 = \frac{3}{4} \sin(4t) + C_2$$

###### 3. Integrate the $z$-component: $h(t) = \frac{-9}{t}$
Using the standard logarithmic integration rule $\int \frac{1}{t} \, dt = \ln|t|$:
$$\int \frac{-9}{t} \, dt = -9 \ln|t| + C_3$$

---

###### Combining the Components

We can write out the final vector in standard component form, merging the individual integration constants ($C_1, C_2, C_3$) into a single constant vector $\vec{C} = \langle C_1, C_2, C_3 \rangle$:

$$\int \left\langle 5 \cos(7t), 3 \cos(4t), \frac{-9}{t} \right\rangle dt = \left\langle \frac{5}{7} \sin(7t), \frac{3}{4} \sin(4t), -9 \ln|t| \right\rangle + \vec{C}$$

---

###### Final Answer

$$\left\langle \frac{5}{7} \sin(7t), \frac{3}{4} \sin(4t), -9 \ln|t| \right\rangle + \vec{C}$$
#### Active Practice Problem
Given that an object has a velocity of $\vec{v}(t) = \left[ \sqrt[3]{t}\hat{i}, \frac{1}{t+2}\hat{j}, e^{8t}\hat{k} \right] \text{ ft/s}$:
* Use an indefinite integral to find the displacement vector of the object.
* Use a definite integral to find the displacement vector of the object over the interval $1 \le t \le 5$.

##### Workspace

##### Solution
###### Problem Statement
Given that an object has a velocity of $\vec{v}(t) = \left[ \sqrt[3]{t}\hat{i}, \frac{1}{t+2}\hat{j}, e^{8t}\hat{k} \right] \text{ ft/s}$:
* Use an indefinite integral to find the displacement vector of the object.
* Use a definite integral to find the displacement vector of the object over the interval $1 \le t \le 5$.

---

###### Step-by-Step Solution

To find the displacement vector from a velocity vector function, we integrate each component function independently. For easier integration, rewrite the velocity function using fractional exponents:
$$\vec{v}(t) = t^{1/3}\hat{i} + \frac{1}{t+2}\hat{j} + e^{8t}\hat{k}$$

---

###### Part 1: Indefinite Integral for Displacement Vector $\vec{r}(t)$

Integrate each component individually with respect to $t$:

* **$\hat{i}$-component:** Use the power rule ($\int t^n dt = \frac{t^{n+1}}{n+1}$):
$$\int t^{1/3} \, dt = \frac{t^{4/3}}{4/3} = \frac{3}{4}t^{4/3} + C_1$$

* **$\hat{j}$-component:** Use the standard logarithmic rule:
$$\int \frac{1}{t+2} \, dt = \ln|t+2| + C_2$$

* **$\hat{k}$-component:** Use the exponential rule ($\int e^{at} dt = \frac{1}{a}e^{at}$):
$$\int e^{8t} \, dt = \frac{1}{8}e^{8t} + C_3$$

Combine the components and merge the constants $C_1, C_2, C_3$ into a single constant vector $\vec{C}$:
$$\vec{r}(t) = \left( \frac{3}{4}t^{4/3} \right)\hat{i} + \left( \ln|t+2| \right)\hat{j} + \left( \frac{1}{8}e^{8t} \right)\hat{k} + \vec{C}$$

---

###### Part 2: Definite Integral over the Interval $1 \le t \le 5$

To find the total displacement over the time interval $[1, 5]$, evaluate the definite integral component-by-component using the antiderivatives found above:
$$\Delta\vec{r} = \int_{1}^{5} \vec{v}(t) \, dt$$

**1. Evaluate the $\hat{i}$-component:**
$$\left[ \frac{3}{4}t^{4/3} \right]_{1}^{5} = \frac{3}{4}(5)^{4/3} - \frac{3}{4}(1)^{4/3} = \frac{3}{4}\left(5^{4/3} - 1\right) \approx 5.66$$

**2. Evaluate the $\hat{j}$-component:**
$$\left[ \ln|t+2| \right]_{1}^{5} = \ln|5+2| - \ln|1+2| = \ln(7) - \ln(3) = \ln\left(\frac{7}{3}\right) \approx 0.847$$

**3. Evaluate the $\hat{k}$-component:**
$$\left[ \frac{1}{8}e^{8t} \right]_{1}^{5} = \frac{1}{8}e^{8(5)} - \frac{1}{8}e^{8(1)} = \frac{1}{8}\left(e^{40} - e^8\right) \approx 2.94 \times 10^{16}$$

Combine the components into the final displacement vector:
$$\Delta\vec{r} = \left[ \frac{3}{4}\left(5^{4/3} - 1\right) \right]\hat{i} + \left[ \ln\left(\frac{7}{3}\right) \right]\hat{j} + \left[ \frac{1}{8}\left(e^{40} - e^8\right) \right]\hat{k}$$

---

###### Final Answers

* **Indefinite Integral Vector:**
$$\vec{r}(t) = \left( \frac{3}{4}t^{4/3} \right)\hat{i} + \left( \ln|t+2| \right)\hat{j} + \left( \frac{1}{8}e^{8t} \right)\hat{k} + \vec{C}$$

* **Definite Integral (Exact Value):**
$$\Delta\vec{r} = \left[ \frac{3}{4}\left(5^{4/3} - 1\right) \right]\hat{i} + \left[ \ln\left(\frac{7}{3}\right) \right]\hat{j} + \left[ \frac{1}{8}\left(e^{40} - e^8\right) \right]\hat{k}$$

### Regroup 3
- Verify calculations and mathematical reasoning.

### Synthesis Wrap-up
- Core takeaways from Session 05 and overview of homework homework assignment: *Vector-Valued Functions and Space Curves
Calculus of Vector-Valued Functions*.
