---
title: "Session 06 - Arc Length and Curvature"
type: course-session
course: MATH-283
semester: Fall 2026
publish: true
cssclasses: []
updated: 2026-08-18
---

# Session 06 - Arc Length and Curvature

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
#### Engineering Context: Shaping Motion Paths
In this session, we investigate the mathematical principles of **Arc Length and Curvature** and explore how engineers apply these concepts to analyze real-world physical and structural systems.

### Skill Block 1
Explanations and derivations of the core concepts.

#### Worked Example
Given the line segment given by $\vec{r}(t)=(3t^{2}-7)\hat{i}+(-4t^{2}-10)\hat{j}$:
1. Find the arc length $s$ for $0\le t\le4$.
2. Solve for the arc length function $s(t)$ and evaluate arc length $s$ for $0\le t\le4$.
3. Find the arc length parametrization, $\vec{r}(s)$.

##### Solution
Here is the complete step-by-step solution to the problem presented in the image.

###### **Given**

$$\vec{r}(t) = (3t^2 - 7)\hat{i} + (-4t^2 - 10)\hat{j} \quad \text{for } 0 \le t \le 4$$

First, let's find the derivative vector $\vec{r}'(t)$ and its magnitude $||\vec{r}'(t)||$, as they are required for all three parts:

$$\vec{r}'(t) = \frac{d}{dt}(3t^2 - 7)\hat{i} + \frac{d}{dt}(-4t^2 - 10)\hat{j} = 6t\hat{i} - 8t\hat{j}$$

Now, find the magnitude (speed):

$$||\vec{r}'(t)|| = \sqrt{(6t)^2 + (-8t)^2} = \sqrt{36t^2 + 64t^2} = \sqrt{100t^2} = 10|t|$$

Since our domain is $0 \le t \le 4$, $t$ is non-negative, so:

$$||\vec{r}'(t)|| = 10t$$

###### 1.

Find the arc length $s$ for $0 \le t \le 4$

Using the definite integral formula for arc length:

$$s = \int_{0}^{4} ||\vec{r}'(t)||\, dt$$

$$s = \int_{0}^{4} 10t\, dt = \left[ 5t^2 \right]_{0}^{4}$$

$$s = 5(4)^2 - 5(0)^2 = 5(16) = 80$$

**Answer:** The arc length $s$ is **$80$**.

###### 2.

Solve for the arc length function $s(t)$ and evaluate arc length $s$ for $0 \le t \le 4$

To find the arc length function $s(t)$ starting from $a = 0$:

$$s(t) = \int_{0}^{t} ||\vec{r}'(u)||\, du$$

$$s(t) = \int_{0}^{t} 10u\, du = \left[ 5u^2 \right]_{0}^{t} = 5t^2$$

Evaluating this function at the upper limit $t = 4$:

$$s(4) = 5(4)^2 = 80$$

**Answer:** * Arc length function: **$s(t) = 5t^2$**

- Evaluated arc length: **$80$**


###### 3.

Find the arc length parametrization, $\vec{r}(s)$

Following the parametrization steps:

1. Invert the arc length function to solve for $t$ in terms of $s$:

$$s = 5t^2 \implies t^2 = \frac{s}{5}$$

Since $t \ge 0$:

$$t = \sqrt{\frac{s}{5}}$$

2. Substitute $t(s)$ back into the original position vector $\vec{r}(t)$:

$$\vec{r}(s) = \left(3\left(\sqrt{\frac{s}{5}}\right)^2 - 7\right)\hat{i} + \left(-4\left(\sqrt{\frac{s}{5}}\right)^2 - 10\right)\hat{j}$$

$$\vec{r}(s) = \left(\frac{3}{5}s - 7\right)\hat{i} + \left(-\frac{4}{5}s - 10\right)\hat{j}$$


**Answer:** The arc length parametrization is **$\vec{r}(s) = \left(\frac{3}{5}s - 7\right)\hat{i} + \left(-\frac{4}{5}s - 10\right)\hat{j}$** for $0 \le s \le 80$.
#### Active Practice Problem
Given the position vector for a helix shape $\vec{r}(t)=3\sin(t)\hat{i}+3\cos(t)\hat{j}$:
1. Find the arc length $s$ for $0\le t\le4\pi$.
2. Solve for the arc length function $s(t)$ and evaluate arc length $s$ for $0\le t\le4\pi$.
3. Find the arc length parametrization, $\vec{r}(s)$.

##### Workspace

##### Solution
###### **Given**

$$\vec{r}(t) = 3\sin(t)\hat{i} + 3\cos(t)\hat{j} \quad \text{for } 0 \le t \le 4\pi$$

First, let's find the velocity vector $\vec{r}'(t)$ and its magnitude $||\vec{r}'(t)||$:

$$\vec{r}'(t) = \frac{d}{dt}(3\sin(t))\hat{i} + \frac{d}{dt}(3\cos(t))\hat{j} = 3\cos(t)\hat{i} - 3\sin(t)\hat{j}$$

Now, compute the magnitude (speed):

$$||\vec{r}'(t)|| = \sqrt{(3\cos(t))^2 + (-3\sin(t))^2} = \sqrt{9\cos^2(t) + 9\sin^2(t)}$$

Using the fundamental trigonometric identity $\cos^2(t) + \sin^2(t) = 1$:

$$||\vec{r}'(t)|| = \sqrt{9(1)} = 3$$

###### **1. Find the arc length $s$ for $0 \le t \le 4\pi$**

Using the definite integral formula for arc length:

$$s = \int_{0}^{4\pi} ||\vec{r}'(t)||\, dt$$

$$s = \int_{0}^{4\pi} 3\, dt = \left[ 3t \right]_{0}^{4\pi}$$

$$s = 3(4\pi) - 3(0) = 12\pi$$

**Answer:** The arc length $s$ is **$12\pi$** (or approximately $37.70$).

###### **2. Solve for the arc length function $s(t)$ and evaluate arc length $s$ for $0 \le t \le 4\pi$**

To find the arc length function $s(t)$ starting from $a = 0$:

$$s(t) = \int_{0}^{t} ||\vec{r}'(u)||\, du$$

$$s(t) = \int_{0}^{t} 3\, du = \left[ 3u \right]_{0}^{t} = 3t$$

Evaluating this function at the upper limit $t = 4\pi$:

$$s(4\pi) = 3(4\pi) = 12\pi$$

**Answer:** * Arc length function: **$s(t) = 3t$**

- Evaluated arc length: **$12\pi$**


###### **3. Find the arc length parametrization, $\vec{r}(s)$**

Following the arc length parametrization steps:

1. Invert the arc length function to solve for $t$ in terms of $s$:

$$s = 3t \implies t = \frac{s}{3}$$

2. Substitute $t(s)$ back into the original position vector $\vec{r}(t)$:

$$\vec{r}(s) = 3\sin\left(\frac{s}{3}\right)\hat{i} + 3\cos\left(\frac{s}{3}\right)\hat{j}$$


**Answer:** The arc length parametrization is **$\vec{r}(s) = 3\sin\left(\frac{s}{3}\right)\hat{i} + 3\cos\left(\frac{s}{3}\right)\hat{j}$** for $0 \le s \le 12\pi$.
##### Extra Practice & Extensions
> ##### Extension Problem (Motion)
> Given the position vector $\vec{r}(t)=3\cos(t)\hat{i}+3\sin(t)\hat{j}+4t\hat{k}$:
1. Solve for the arc length from $0\le t\le\pi$.
2. Explain whether or not a closed domain such as this can or cannot be used to perform an arc length parametrization of the position vector $\vec{r}(s)$.
> 
> > [!check]- Solution
> > ### 1.
> > 
> > Solve for the arc length from $0 \le t \le \pi$
> > 
> > First, let's find the derivative vector $\vec{r}'(t)$ and its magnitude:
> > 
> > $$\vec{r}'(t) = \frac{d}{dt}(3\cos(t))\hat{i} + \frac{d}{dt}(3\sin(t))\hat{j} + \frac{d}{dt}(4t)\hat{k}$$
> > 
> > $$\vec{r}'(t) = -3\sin(t)\hat{i} + 3\cos(t)\hat{j} + 4\hat{k}$$
> > 
> > Now, compute the magnitude (speed):
> > 
> > $$||\vec{r}'(t)|| = \sqrt{(-3\sin(t))^2 + (3\cos(t))^2 + (4)^2}$$
> > 
> > $$||\vec{r}'(t)|| = \sqrt{9\sin^2(t) + 9\cos^2(t) + 16}$$
> > 
> > $$||\vec{r}'(t)|| = \sqrt{9(\sin^2(t) + \cos^2(t)) + 16} = \sqrt{9(1) + 16} = \sqrt{25} = 5$$
> > 
> > Using the definite integral formula for arc length from $t = 0$ to $t = \pi$:
> > 
> > $$s = \int_{0}^{\pi} ||\vec{r}'(t)||\, dt$$
> > 
> > $$s = \int_{0}^{\pi} 5\, dt = \left[ 5t \right]_{0}^{\pi} = 5\pi - 0 = 5\pi$$
> > 
> > **Answer:** The arc length is **$5\pi$** (or approximately $15.71$).
> > 
> > ### 2.
> > 
> > Explain whether or not a closed domain such as this can or cannot be used to perform an arc length parametrization of the position vector $\vec{r}(s)$
> > 
> > **Yes, a closed domain can absolutely be used**, but with a constraint on the domain of the new parameter $s$.
> > 
> > Here is why:
> > 
> > - **The Process Works Locally:** The arc length function $s(t) = \int_{0}^{t} 5\, du = 5t$ is smooth, continuous, and strictly increasing on the closed interval $[0, \pi]$.
> > 
> > - **Bijective Mapping:** Because it is strictly increasing, it is a one-to-one (bijective) function over this restricted domain. This allows us to uniquely invert it to get $t(s) = \frac{s}{5}$.
> > 
> > - **Bounded Parameter Restriction:** The only catch is that the resulting arc length parametrization $\vec{r}(s) = 3\cos(\frac{s}{5})\hat{i} + 3\sin(\frac{s}{5})\hat{j} + 4(\frac{s}{5})\hat{k}$ is **only valid for the corresponding finite interval of $s$**. Since $t$ spans $[0, \pi]$, the arc length parameter $s$ is strictly constrained to the closed interval $[0, 5\pi]$.
> > 
> > 
> > **Answer:** A closed domain **can** be used to find the parametrization $\vec{r}(s)$, but the resulting vector function will only be defined on the bounded interval $0 \le s \le 5\pi$ rather than for all real numbers.
>

### Regroup 1
- Review common misconceptions and clarify key notations.

### Skill Block 2
Explanations and derivations of the core concepts.

#### Worked Example
Given the position vector $\vec{r}(t)=\langle4t^{2},(-4t-3),-2t\rangle$:
1. Solve for the unit tangent vector.
2. Solve for the curvature at $t=1$.

##### Solution
###### **Given**

$$\vec{r}(t) = \langle 4t^2, -4t - 3, -2t \rangle \quad \text{[cite: 52]}$$

First, let's find the first derivative vector $\vec{r}'(t)$ and its magnitude:

$$\vec{r}'(t) = \langle 8t, -4, -2 \rangle$$

Now, compute the magnitude (speed):

$$||\vec{r}'(t)|| = \sqrt{(8t)^2 + (-4)^2 + (-2)^2} = \sqrt{64t^2 + 16 + 4} = \sqrt{64t^2 + 20}$$

We can factor out a $4$ from under the radical:

$$||\vec{r}'(t)|| = \sqrt{4(16t^2 + 5)} = 2\sqrt{16t^2 + 5}$$

###### **1. Solve for the unit tangent vector**

The formula for the unit tangent vector is $\hat{T}(t) = \frac{\vec{r}'(t)}{||\vec{r}'(t)||}$. Dividing each component of $\vec{r}'(t)$ by its magnitude:

$$\hat{T}(t) = \frac{\langle 8t, -4, -2 \rangle}{2\sqrt{16t^2 + 5}}$$

Simplify by dividing each term by $2$:

$$\hat{T}(t) = \left\langle \frac{4t}{\sqrt{16t^2 + 5}}, \frac{-2}{\sqrt{16t^2 + 5}}, \frac{-1}{\sqrt{16t^2 + 5}} \right\rangle$$

###### **2. Solve for the curvature at $t = 1$**

Since we already have the position vector, it is much more efficient to use the cross-product formula for curvature:

$$\kappa(t) = \frac{||\vec{r}'(t) \times \vec{r}''(t)||}{||\vec{r}'(t)||^3} \quad \text{[cite: 46]}$$

1. **Find the second derivative vector $\vec{r}''(t)$:**

$$\vec{r}''(t) = \frac{d}{dt}\langle 8t, -4, -2 \rangle = \langle 8, 0, 0 \rangle$$

2. **Compute the cross product $\vec{r}'(t) \times \vec{r}''(t)$:**

$$\vec{r}'(t) \times \vec{r}''(t) = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 8t & -4 & -2 \\ 8 & 0 & 0 \end{vmatrix}$$

$$\vec{r}'(t) \times \vec{r}''(t) = \hat{i}(0 - 0) - \hat{j}(0 - (-16)) + \hat{k}(0 - (-32)) = \langle 0, -16, 32 \rangle$$

3. **Find the magnitude of this cross product:**

$$||\vec{r}'(t) \times \vec{r}''(t)|| = \sqrt{0^2 + (-16)^2 + (32)^2} = \sqrt{256 + 1024} = \sqrt{1280} = 16\sqrt{5}$$

4. **Evaluate $||\vec{r}'(t)||$ at $t = 1$:**

$$||\vec{r}'(1)|| = 2\sqrt{16(1)^2 + 5} = 2\sqrt{21}$$

5. **Calculate the curvature $\kappa(1)$:**

$$\kappa(1) = \frac{16\sqrt{5}}{(2\sqrt{21})^3} = \frac{16\sqrt{5}}{8 \cdot 21\sqrt{21}} = \frac{2\sqrt{5}}{21\sqrt{21}}$$


To rationalize the denominator:

$$\kappa(1) = \frac{2\sqrt{105}}{441}$$

**Answer:** * Unit tangent vector: **$\hat{T}(t) = \left\langle \frac{4t}{\sqrt{16t^2 + 5}}, \frac{-2}{\sqrt{16t^2 + 5}}, \frac{-1}{\sqrt{16t^2 + 5}} \right\rangle$**

- Curvature at $t = 1$: **$\kappa(1) = \frac{2\sqrt{5}}{21\sqrt{21}}$** (or approximately **$0.0464$**)
#### Active Practice Problem
Given the position vector $\vec{r}=\langle2\cos(t), 2\sin(t), t\rangle$:
1. Solve for the unit tangent vector.
2. Solve for the radius of curvature.

##### Workspace

##### Solution
###### **Given**

$$\vec{r}(t) = \langle 2\cos(t), 2\sin(t), t \rangle$$

First, let's find the first derivative vector $\vec{r}'(t)$ and its magnitude:

$$\vec{r}'(t) = \langle -2\sin(t), 2\cos(t), 1 \rangle$$

Now, compute the magnitude (speed):

$$||\vec{r}'(t)|| = \sqrt{(-2\sin(t))^2 + (2\cos(t))^2 + (1)^2} = \sqrt{4\sin^2(t) + 4\cos^2(t) + 1}$$

Using the fundamental identity $\sin^2(t) + \cos^2(t) = 1$:

$$||\vec{r}'(t)|| = \sqrt{4(1) + 1} = \sqrt{5}$$

###### **1. Solve for the unit tangent vector**

The formula for the unit tangent vector is $\hat{T}(t) = \frac{\vec{r}'(t)}{||\vec{r}'(t)||}$. Dividing each component of $\vec{r}'(t)$ by its constant magnitude:

$$\hat{T}(t) = \frac{\langle -2\sin(t), 2\cos(t), 1 \rangle}{\sqrt{5}}$$

$$\hat{T}(t) = \left\langle -\frac{2}{\sqrt{5}}\sin(t), \frac{2}{\sqrt{5}}\cos(t), \frac{1}{\sqrt{5}} \right\rangle$$

###### **2. Solve for the radius of curvature**

To find the radius of curvature $\rho = \frac{1}{\kappa}$, we first need to determine the curvature $\kappa$. Since we have a fully worked out unit tangent vector $\hat{T}(t)$, we can use the derivative method:

$$\kappa(t) = \frac{||\hat{T}'(t)||}{\|\vec{r}'(t)\|}$$

1. **Find $\hat{T}'(t)$:**

$$\hat{T}'(t) = \left\langle -\frac{2}{\sqrt{5}}\cos(t), -\frac{2}{\sqrt{5}}\sin(t), 0 \right\rangle$$

2. **Compute its magnitude $||\hat{T}'(t)||$:**

$$||\hat{T}'(t)|| = \sqrt{\left(-\frac{2}{\sqrt{5}}\cos(t)\right)^2 + \left(-\frac{2}{\sqrt{5}}\sin(t)\right)^2 + 0^2}$$

$$||\hat{T}'(t)|| = \sqrt{\frac{4}{5}\cos^2(t) + \frac{4}{5}\sin^2(t)} = \sqrt{\frac{4}{5}(\cos^2(t) + \sin^2(t))} = \sqrt{\frac{4}{5}} = \frac{2}{\sqrt{5}}$$

3. **Calculate curvature $\kappa$:**

$$\kappa = \frac{||\hat{T}'(t)||}{\|\vec{r}'(t)\|} = \frac{\frac{2}{\sqrt{5}}}{\sqrt{5}} = \frac{2}{5}$$

4. **Calculate the radius of curvature $\rho$:**

$$\rho = \frac{1}{\kappa} = \frac{1}{\frac{2}{5}} = \frac{5}{2}$$


**Answer:** * Unit tangent vector: **$\hat{T}(t) = \left\langle -\frac{2}{\sqrt{5}}\sin(t), \frac{2}{\sqrt{5}}\cos(t), \frac{1}{\sqrt{5}} \right\rangle$**

- Radius of curvature: **$\rho = \frac{5}{2} = 2.5$**
##### Extra Practice & Extensions
> ##### Extension Problem (Motion)
> Find the curvature for the curve where $s$ is the arc length parameter:
$$\vec{r}(s)=29\cos\left(\frac{s}{29}\right)\hat{i}+29\sin\left(\frac{s}{29}\right)\hat{j}$$
> 
> > [!check]- Solution
> > ### **Given**
> > 
> > $$\vec{r}(s) = 29\cos\left(\frac{s}{29}\right)\hat{i} + 29\sin\left(\frac{s}{29}\right)\hat{j} \quad \text{[cite: 62]}$$
> > 
> > Since the vector function is already parametrized by the arc length parameter $s$, we can directly apply the specific formula for curvature in terms of arc length:
> > 
> > $$\kappa(s) = ||\vec{r}''(s)|| \quad \text{or} \quad \kappa(s) = ||\hat{T}'(s)|| [cite_start]\quad \text{[cite: 48]}$$
> > 
> > ### **Step-by-Step Solution**
> > 
> > #### **1. Find the unit tangent vector $\hat{T}(s)$**
> > 
> > When a curve is parametrized by arc length, its derivative with respect to $s$ automatically yields the unit tangent vector ($\hat{T}(s) = \vec{r}'(s)$):
> > 
> > $$\hat{T}(s) = \vec{r}'(s) = \frac{d}{ds}\left[29\cos\left(\frac{s}{29}\right)\right]\hat{i} + \frac{d}{ds}\left[29\sin\left(\frac{s}{29}\right)\right]\hat{j}$$
> > 
> > Applying the chain rule:
> > 
> > $$\hat{T}(s) = 29\left(-\sin\left(\frac{s}{29}\right) \cdot \frac{1}{29}\right)\hat{i} + 29\left(\cos\left(\frac{s}{29}\right) \cdot \frac{1}{29}\right)\hat{j}$$
> > 
> > $$\hat{T}(s) = -\sin\left(\frac{s}{29}\right)\hat{i} + \cos\left(\frac{s}{29}\right)\hat{j}$$
> > 
> > _(As a quick sanity check, $||\hat{T}(s)|| = \sqrt{(-\sin)^2 + (\cos)^2} = 1$, confirming it is a unit vector.)_
> > 
> > #### **2. Find the derivative of the unit tangent vector $\hat{T}'(s)$**
> > 
> > Now, differentiate $\hat{T}(s)$ with respect to $s$:
> > 
> > $$\hat{T}'(s) = \frac{d}{ds}\left[-\sin\left(\frac{s}{29}\right)\right]\hat{i} + \frac{d}{ds}\left[\cos\left(\frac{s}{29}\right)\right]\hat{j}$$
> > 
> > Applying the chain rule again:
> > 
> > $$\hat{T}'(s) = -\cos\left(\frac{s}{29}\right) \cdot \frac{1}{29}\hat{i} - \sin\left(\frac{s}{29}\right) \cdot \frac{1}{29}\hat{j}$$
> > 
> > $$\hat{T}'(s) = -\frac{1}{29}\cos\left(\frac{s}{29}\right)\hat{i} - \frac{1}{29}\sin\left(\frac{s}{29}\right)\hat{j}$$
> > 
> > #### **3. Calculate the curvature $\kappa(s)$**
> > 
> > The curvature is equal to the magnitude of $\hat{T}'(s)$:
> > 
> > $$\kappa(s) = ||\hat{T}'(s)|| = \sqrt{\left(-\frac{1}{29}\cos\left(\frac{s}{29}\right)\right)^2 + \left(-\frac{1}{29}\sin\left(\frac{s}{29}\right)\right)^2}$$
> > 
> > $$\kappa(s) = \sqrt{\frac{1}{29^2}\cos^2\left(\frac{s}{29}\right) + \frac{1}{29^2}\sin^2\left(\frac{s}{29}\right)}$$
> > 
> > Factor out $\frac{1}{29^2}$:
> > 
> > $$\kappa(s) = \sqrt{\frac{1}{29^2}\left[\cos^2\left(\frac{s}{29}\right) + \sin^2\left(\frac{s}{29}\right)\right]}$$
> > 
> > Since $\cos^2(\theta) + \sin^2(\theta) = 1$:
> > 
> > $$\kappa(s) = \sqrt{\frac{1}{29^2}(1)} = \frac{1}{29}$$
> > 
> > ### **Answer**
> > 
> > The curvature for the curve is constant everywhere:
> > 
> > $$\kappa = \frac{1}{29}$$
> > 
> > (Geometrical Note: The given position vector represents a standard circle centered at the origin with a radius of $R = 29$. Because curvature for any circle is flatly defined as $\kappa = \frac{1}{R}$, this matches our result perfectly!)
>

### Regroup 2
- Reflect on the physical modeling applications and mathematical setups.

### Skill Block 3
Explanations and derivations of the core concepts.

#### Worked Example
A particle is moving along the given path:
$$\vec{r}(t)=-7t^{8}\hat{i}+7t^{3}\hat{j}$$
Decompose the acceleration vector into its tangential and normal components at $t=1.$

##### Solution
Here is the step-by-step solution to the **Skill 3 Demo** problem shown in the image.

###### **Given**

$$\vec{r}(t) = -7t^8\hat{i} + 7t^3\hat{j} \quad \text{at } t = 1$$

To decompose the acceleration vector into its tangential component $a_T$ and normal component $a_N$, we use the following formulas from your learning activity document:

$$a_T = \frac{\vec{v} \cdot \vec{a}}{||\vec{v}||}$$

$$a_N = \frac{||\vec{v} \times \vec{a}||}{||\vec{v}||}$$

###### **Step 1: Find the Velocity Vector $\vec{v}(t)$ and evaluate at $t = 1$**

Take the first derivative of the position vector $\vec{r}(t)$:

$$\vec{v}(t) = \vec{r}'(t) = \frac{d}{dt}(-7t^8)\hat{i} + \frac{d}{dt}(7t^3)\hat{j} = -56t^7\hat{i} + 21t^2\hat{j}$$

Evaluating at $t = 1$:

$$\vec{v}(1) = -56(1)^7\hat{i} + 21(1)^2\hat{j} = \langle -56, 21 \rangle$$

###### **Step 2: Find the Speed $||\vec{v}(1)||$**

Compute the magnitude of the velocity vector at $t = 1$:

$$||\vec{v}(1)|| = \sqrt{(-56)^2 + (21)^2} = \sqrt{3136 + 441} = \sqrt{3577}$$

###### **Step 3: Find the Acceleration Vector $\vec{a}(t)$ and evaluate at $t = 1$**

Take the derivative of the velocity vector $\vec{v}(t)$:

$$\vec{a}(t) = \vec{v}'(t) = \frac{d}{dt}(-56t^7)\hat{i} + \frac{d}{dt}(21t^2)\hat{j} = -392t^6\hat{i} + 42t\hat{j}$$

Evaluating at $t = 1$:

$$\vec{a}(1) = -392(1)^6\hat{i} + 42(1)\hat{j} = \langle -392, 42 \rangle$$

###### **Step 4: Calculate the Tangential Component of Acceleration $a_T$**

Compute the dot product $\vec{v} \cdot \vec{a}$ at $t = 1$:

$$\vec{v}(1) \cdot \vec{a}(1) = (-56)(-392) + (21)(42)$$

$$\vec{v}(1) \cdot \vec{a}(1) = 21952 + 882 = 22834$$

Now divide by the speed $||\vec{v}(1)||$:

$$a_T = \frac{22834}{\sqrt{3577}}$$

###### **Step 5: Calculate the Normal Component of Acceleration $a_N$**

Since $\vec{v}$ and $\vec{a}$ are 2D vectors lying in the $xy$-plane, we can treat them as 3D vectors with a $z$-component of $0$ to find their cross product:

$$\vec{v}(1) \times \vec{a}(1) = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ -56 & 21 & 0 \\ -392 & 42 & 0 \end{vmatrix}$$

$$\vec{v}(1) \times \vec{a}(1) = \hat{k} \Big( (-56)(42) - (21)(-392) \Big)$$

$$\vec{v}(1) \times \vec{a}(1) = \hat{k} (-2352 + 8232) = 5880\hat{k}$$

Find the magnitude of this cross product vector:

$$||\vec{v}(1) \times \vec{a}(1)|| = 5880$$

Now divide by the speed $||\vec{v}(1)||$:

$$a_N = \frac{5880}{\sqrt{3577}}$$

###### **Answer**

The decomposition of the acceleration vector at $t = 1$ yields:

- **Tangential component:** $a_T = \frac{22834}{\sqrt{3577}}$ (approx. **$381.82$**)

- **Normal component:** $a_N = \frac{5880}{\sqrt{3577}}$ (approx. **$98.32$**)
#### Active Practice Problem
Given the position vector $\vec{r}(t)=-t^{5}\hat{i}-7t^{2}\hat{j}$, decompose the acceleration vector into its tangential and normal components at $t=1.$

##### Workspace

##### Solution
###### **Given**

$$\vec{r}(t) = -t^5\hat{i} - 7t^2\hat{j} \quad \text{at } t = 1$$

To decompose the acceleration vector into its tangential component $a_T$ and normal component $a_N$, we use the standard formulas:

$$a_T = \frac{\vec{v} \cdot \vec{a}}{||\vec{v}||}$$

$$a_N = \frac{||\vec{v} \times \vec{a}||}{||\vec{v}||}$$

###### **Step 1: Find the Velocity Vector $\vec{v}(t)$ and evaluate at $t = 1$**

Take the first derivative of the position vector $\vec{r}(t)$:

$$\vec{v}(t) = \vec{r}'(t) = \frac{d}{dt}(-t^5)\hat{i} + \frac{d}{dt}(-7t^2)\hat{j} = -5t^4\hat{i} - 14t\hat{j}$$

Evaluating at $t = 1$:

$$\vec{v}(1) = -5(1)^4\hat{i} - 14(1)\hat{j} = \langle -5, -14 \rangle$$

###### **Step 2: Find the Speed $||\vec{v}(1)||$**

Compute the magnitude of the velocity vector at $t = 1$:

$$||\vec{v}(1)|| = \sqrt{(-5)^2 + (-14)^2} = \sqrt{25 + 196} = \sqrt{221}$$

###### **Step 3: Find the Acceleration Vector $\vec{a}(t)$ and evaluate at $t = 1$**

Take the derivative of the velocity vector $\vec{v}(t)$:

$$\vec{a}(t) = \vec{v}'(t) = \frac{d}{dt}(-5t^4)\hat{i} + \frac{d}{dt}(-14t)\hat{j} = -20t^3\hat{i} - 14\hat{j}$$

Evaluating at $t = 1$:

$$\vec{a}(1) = -20(1)^3\hat{i} - 14\hat{j} = \langle -20, -14 \rangle$$

###### **Step 4: Calculate the Tangential Component of Acceleration $a_T$**

Compute the dot product $\vec{v} \cdot \vec{a}$ at $t = 1$:

$$\vec{v}(1) \cdot \vec{a}(1) = (-5)(-20) + (-14)(-14)$$

$$\vec{v}(1) \cdot \vec{a}(1) = 100 + 196 = 296$$

Now divide by the speed $||\vec{v}(1)||$:

$$a_T = \frac{296}{\sqrt{221}}$$

###### **Step 5: Calculate the Normal Component of Acceleration $a_N$**

Since $\vec{v}$ and $\vec{a}$ are 2D vectors lying in the $xy$-plane, we append a $z$-component of $0$ to compute their cross product:

$$\vec{v}(1) \times \vec{a}(1) = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ -5 & -14 & 0 \\ -20 & -14 & 0 \end{vmatrix}$$

$$\vec{v}(1) \times \vec{a}(1) = \hat{k} \Big( (-5)(-14) - (-14)(-20) \Big)$$

$$\vec{v}(1) \times \vec{a}(1) = \hat{k} (70 - 280) = -210\hat{k}$$

Find the magnitude of this cross product vector:

$$||\vec{v}(1) \times \vec{a}(1)|| = |-210| = 210$$

Now divide by the speed $||\vec{v}(1)||$:

$$a_N = \frac{210}{\sqrt{221}}$$

###### **Answer**

The acceleration vector components at $t = 1$ are:

- **Tangential component:** $a_T = \frac{296}{\sqrt{221}}$ (approx. **$19.91$**)

- **Normal component:** $a_N = \frac{210}{\sqrt{221}}$ (approx. **$14.13$**)

### Regroup 3
- Verify calculations and mathematical reasoning.

### Synthesis Wrap-up
- Core takeaways from Session 06 and overview of homework homework assignment: *Arc Length and Curvature
Motion in Space*.
