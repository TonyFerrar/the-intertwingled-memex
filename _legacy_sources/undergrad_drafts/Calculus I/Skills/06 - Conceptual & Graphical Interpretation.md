## Calculus I Mastery: Skill 1 Graphical Interpretation of Limits, Derivatives, and Differentiability

## 1. The Core Concept: From Secant to Tangent Line
To understand the derivative, we must look at how we measure change on a curve. 

* **Average Rate of Change (ARoC):** If we pick two distinct points on a curve, $(a, f(a))$ and $(a+h, f(a+h))$, the straight line connecting them is called a **secant line**. The slope of this line represents the average rate of change over that interval:
  $$\text{Slope}_{\text{secant}} = \frac{f(a+h) - f(a)}{h}$$
* **Instantaneous Rate of Change (IRoC):** If we want to find the rate of change at the exact moment $x = a$, we look at what happens as the second point moves closer and closer to the first point. As the distance between them shrinks to zero ($h \to 0$), the secant line rotates and collapses into a single line that just brushes the curve at that one point. This line is the **tangent line**, and its slope is the derivative, $f'(a)$.



---

## 2. Understanding Differentiability vs. Continuity
A major foundational rule in calculus states: **If a function is differentiable at a point, it must be continuous at that point.** However, the reverse is not true. A function can be completely continuous (no breaks, holes, or lifting of the pen) but still fail to have a derivative. 

Visually, a derivative fails to exist anywhere the graph does not have a single, clearly defined, non-vertical tangent slope. There are four classic visual indicators where a function exhibits **non-differentiability**:

1. **Corner / Sharp Turn:** The graph is continuous, but it abruptly changes direction. Because the slope coming from the left side is completely different from the slope coming from the right side, a single tangent slope cannot be defined.
2. **Cusp:** An extreme sharp point where the curve turns so sharply that the slope approaches $\infty$ from one side and $-\infty$ from the other.
3. **Vertical Tangent:** The curve becomes perfectly steep for a single instant. Because a vertical line has an undefined slope ($\infty$), the derivative does not exist.
4. **Discontinuity:** If there is a hole, a jump, or a vertical asymptote, you cannot draw a tangent line at all. Non-continuity automatically means non-differentiability.



---

## 3. Custom Sample Problems & Solutions

### Problem 1: Analyzing Limits and Slopes From a Custom Graph
Consider a piecewise function $g(x)$ defined over $[-6, 8]$ with the following graphical characteristics:
* A horizontal asymptote at $y = -1$ as $x \to -\infty$.
* A vertical asymptote at $x = -2$.
* A sharp, V-shaped corner at $(1, 3)$.
* A perfectly straight line segment connecting $(2, 0)$ and $(5, 6)$.
* A jump discontinuity at $x = 5$, breaking from an open hole at $(5, 6)$ to a solid point at $(5, 2)$, then continuing smoothly.

#### (a) Evaluate the following limits and derivatives based on this behavior:
* **i. $\lim_{x\to 5} g(x)$**
* **ii. $\lim_{x\to -2^+} g(x)$**
* **iii. $g'(4)$**

**Step-by-step Solution:**
* **i.** Look at $x = 5$. Approaching from the left ($x \to 5^-$), the curve moves up the straight line segment toward a $y$-value of $6$. Approaching from the right ($x \to 5^+$), the curve leads to a different value. Because the left-hand and right-hand paths do not meet at the same height, the two-sided limit cannot exist.  
  **Answer:** $\lim_{x\to 5} g(x) = \text{Does Not Exist (DNE)}$
* **ii.** Look at the vertical asymptote at $x = -2$. Tracking the curve immediately to the right side of this boundary ($x \to -2^+$), the graph plunges downward indefinitely toward negative infinity.  
  **Answer:** $\lim_{x\to -2^+} g(x) = -\infty$
* **iii.** The expression $g'(4)$ represents the instantaneous slope of the curve at exactly $x = 4$. Because $x = 4$ falls comfortably along the straight line segment connecting $(2, 0)$ and $(5, 6)$, the derivative is simply the constant slope of that segment:
  $$\text{Slope} = \frac{y_2 - y_1}{x_2 - x_1} = \frac{6 - 0}{5 - 2} = \frac{6}{3} = 2$$
  **Answer:** $g'(4) = 2$

#### (b) Identify any points on the interval where $g(x)$ is continuous but NOT differentiable.

**Step-by-step Solution:**
* We must scan the function looking exclusively for points that are fully unbroken and connected (continuous), yet form a sharp peak or abrupt shift in direction (non-differentiable).
* At $x = -2$, the function breaks at an asymptote (not continuous).
* At $x = 5$, the function breaks at a jump (not continuous).
* At **$x = 1$**, the graph forms a sharp V-shaped transition. The line is completely connected at $(1,3)$, but the incoming slope does not match the outgoing slope. This is a classic corner.  
  **Answer:** $x = 1$

---

## 4. Real-Life Engineering Application Problems

### Application Problem 1: [[Civil Engineering (High-Speed Railway Track Alignment)]]
[[Civil Engineering (High-Speed Railway Track Alignment) Solution]]
A transit authority engineer is designing a track layout for a new high-speed train. The position profile of the track layout is modeled by a piecewise function where a straight access line transitions into a curved bypass:
$$T(x) = \begin{cases} 2x & \text{for } x \le 3 \\ x^2 - 4x + 9 & \text{for } x > 3 \end{cases}$$

1. **Graphically and analytically determine if the track layout is continuous at $x = 3$.**
2. **Determine if the track layout is differentiable at $x = 3$. Based on the concepts of differentiability, explain why this design is either safe or hazardous for a train traveling at high speeds.**

#### Step-by-step Solution:

**Step 1: Check for Continuity**
To see if the tracks physically connect without a gap, calculate the limit from both sides of $x = 3$:
* Left-hand limit: $\lim_{x \to 3^-} T(x) = 2(3) = 6$
* Right-hand limit: $\lim_{x \to 3^+} T(x) = (3)^2 - 4(3) + 9 = 9 - 12 + 9 = 6$

Because the left-hand limit equals the right-hand limit, the two tracks meet perfectly at the point $(3, 6)$. **The function is continuous.**

**Step 2: Check for Differentiability (Slope)**
To see if the transition is smooth, check the incoming and outgoing slopes (derivatives) at $x = 3$:
* Incoming slope (from the left straight track): The derivative of $2x$ is a constant **$2$**.
* Outgoing slope (moving onto the curved bypass): The derivative of $x^2 - 4x + 9$ is $2x - 4$. Evaluating this at $x = 3$ gives $2(3) - 4 = 6 - 4 =$ **$2$**.

Because the incoming slope ($2$) matches the outgoing slope ($2$), the graph does not form a sharp corner; it transitions smoothly. 

**Engineering Conclusion:**
Because the function is **differentiable at $x = 3$**, the transition contains no sharp corners. This is **safe** for a high-speed train. If the slopes had mismatched, it would create a non-differentiable corner, causing a sudden, dangerous spike in lateral centrifugal force that could derail the train.

---

### Application Problem 2: [[Mechanical Engineering (Component Failure Analysis)]]
[[Mechanical Engineering (Component Failure Analysis) Solution]]
A mechanical engineer runs a computer simulation mapping the internal stress distribution across a metal support bracket under load. The stress profile along the length of the bracket reveals a sharp $90^\circ$ internal V-notch corner at exactly $x = 5$.



1. **Identify the structural description of why this point is non-differentiable.**
2. **Explain the physical real-world consequence of this non-differentiable point on the structural integrity of the bracket.**

#### Step-by-step Solution:

**Step 1: Locate the Non-Differentiable Point**
The stress layout path meets at a sharp point at **$x = 5$**. This represents a geometric **corner**, which makes it non-differentiable because a single tangent line cannot cleanly balance on a sharp edge.

**Step 2: Real-World Physical Explanation**
In mechanical engineering, a non-differentiable geometric corner indicates a catastrophic structural vulnerability known as a **stress concentration point**. When external loads are applied to the bracket, the internal physical forces cannot distribute smoothly across a sharp point. Instead, the stress values spike exponentially at that exact sharp vertex ($x = 5$). 

**Engineering Conclusion:**
Because the profile is non-differentiable at $x = 5$, this corner acts as a structural weak point where micro-cracks will form. Under operational cyclic loading, the bracket will experience structural failure and snap at this exact coordinate. To fix this, an engineer must redesign the bracket using calculus to smooth out the corner into a differentiable curve (called a fillet), ensuring a uniform distribution of force.