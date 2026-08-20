# Skill 3: Tangential and Normal Components of Acceleration

## Core Notes & Concepts

When an object moves along a curved path in 2D or 3D space, its acceleration vector $\vec{a}(t)$ points inward toward the direction of the turn. To make sense of this acceleration physically, we decompose it into two mutually perpendicular components: one parallel to the path (tangential) and one perpendicular to the path (normal).

$$\vec{a}(t) = a_T \hat{T}(t) + a_N \hat{N}(t)$$

### 1. Tangential Acceleration ($a_T$)

- **Physical Meaning:** Measures how fast the object's **speed** is changing. If you press down on the gas pedal or hit the brakes in a car, you are creating tangential acceleration.
    
- **Core Formula:** Since it represents the derivative of speed, it can be computed using the dot product of velocity and acceleration:
    
    $$a_T = \frac{d}{dt}||\vec{v}(t)|| = \frac{\vec{v} \cdot \vec{a}}{||\vec{v}||}$$
    

### 2. Normal Acceleration ($a_N$)

- **Physical Meaning:** Measures how fast the object's **direction** is changing. Even if a car is on cruise control at a constant speed, turning the steering wheel creates a normal acceleration directed toward the center of the turn.
    
- **Core Formula:** It depends on both how sharply the path bends (curvature $\kappa$) and how fast you travel through it. It can be computed using the cross product:
    
    $$a_N = \kappa ||\vec{v}||^2 = \frac{||\vec{v} \times \vec{a}||}{||\vec{v}||}$$
    

## Guided Sample Problem (Skill 3 Demo)

### Problem Statement

A particle moves along a path described by the position vector:

$$\vec{r}(t) = -7t^8\hat{i} + 7t^3\hat{j}$$

Decompose the acceleration vector into its tangential component $a_T$ and normal component $a_N$ at $t = 1$.

### Step-by-Step Solution

#### 1. Find the Velocity Vector $\vec{v}(t)$ and Evaluate at $t = 1$

Take the first derivative of the position vector $\vec{r}(t)$:

$$\vec{v}(t) = \vec{r}'(t) = -56t^7\hat{i} + 21t^2\hat{j}$$

Evaluating at $t = 1$:

$$\vec{v}(1) = \langle -56, 21 \rangle$$

#### 2. Find the Speed $||\vec{v}(1)||$

Compute the magnitude of the velocity vector at $t = 1$:

$$||\vec{v}(1)|| = \sqrt{(-56)^2 + (21)^2} = \sqrt{3136 + 441} = \sqrt{3577}$$

#### 3. Find the Acceleration Vector $\vec{a}(t)$ and Evaluate at $t = 1$

Take the derivative of the velocity vector $\vec{v}(t)$:

$$\vec{a}(t) = \vec{v}'(t) = -392t^6\hat{i} + 42t\hat{j}$$

Evaluating at $t = 1$:

$$\vec{a}(1) = \langle -392, 42 \rangle$$

#### 4. Calculate the Tangential Component $a_T$

Compute the dot product $\vec{v} \cdot \vec{a}$ at $t = 1$:

$$\vec{v}(1) \cdot \vec{a}(1) = (-56)(-392) + (21)(42) = 21952 + 882 = 22834$$

Divide by the speed $||\vec{v}(1)||$:

$$a_T = \frac{22834}{\sqrt{3577}}$$

#### 5. Calculate the Normal Component $a_N$

Treat the vectors as 3D to perform the cross product in the $xy$-plane:

$$\vec{v}(1) \times \vec{a}(1) = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ -56 & 21 & 0 \\ -392 & 42 & 0 \end{vmatrix} = \hat{k} \Big( (-56)(42) - (21)(-392) \Big) = 5880\hat{k}$$

Find the magnitude and divide by the speed $||\vec{v}(1)||$:

$$a_N = \frac{5880}{\sqrt{3577}}$$

**Answer:** * Tangential component: $a_T = \frac{22834}{\sqrt{3577}}$

- Normal component: $a_N = \frac{5880}{\sqrt{3577}}$
    

## Real-Life Engineering Application Problems

### Application 1: [[Automotive Engineering & Vehicle Cornering Limits]]
[[Automotive Engineering & Vehicle Cornering Limits Solution]]

### Application 2: [[Amusement Park Design & Roller Coaster Physics]]
[[Amusement Park Design & Roller Coaster Physics Solution]]
