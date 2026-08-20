---
title: "Session 05 - Special Limits and Continuity"
type: course-session
course: MATH-181
semester: Fall 2026
publish: true
cssclasses: []
updated: 2026-08-18
---

# Session 05 - Special Limits and Continuity

## Session Objectives
By the end of this session, you will be able to:
- Navigating Composite Boundaries (The Inside-Out Limit)
- Algebraic Deflation of Indeterminate Forms
- Formal Verification and Structural Mapping of Discontinuity

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
#### Engineering Context: Designing Smooth and Predictable Systems
The three core mathematical skills taught in these notes—navigating composite boundaries, algebraically deflating indeterminate forms, and formally verifying continuity—serve as foundational pillars across real-life engineering disciplines, where systems inherently change, fail, or stabilize at critical boundaries. In system-of-systems engineering, such as automated biomedical drug delivery pumps or electrical control loops, mastering composite boundaries allows engineers to predict how cascading components handle shifting inputs and ensure output signals clamp safely at stable thresholds. When physical systems reach a structural paradox, mechanical and civil engineers use algebraic deflation to bypass dangerous mathematical singularities, allowing them to reveal true, finite limits of stress concentration at the microscopic tip of a structural crack or calculate the exact maximum sway of a skyscraper experiencing earthquake resonance. Finally, because real-world disruptions like an aerospace polymer freezing into a brittle state or a chemical batch reactor hitting an explosive thermal threshold represent mathematical discontinuities, engineers rely on formal verification to map out these precise phase transitions and program automated safety systems to handle critical operational boundaries.

### Skill Block 1
When evaluating the limit of a composite function, $f(g(x))$, as $x$ approaches a target boundary $c$, we cannot simply plug the value into the entire expression at once. Instead, we must analyze the behavior of the functions sequentially, working from the **inside out**. 

Mathematically, if $\lim_{x \to c} g(x) = L$, and the outer function $f(u)$ is continuous at $u = L$, then:
$$\lim_{x \to c} f(g(x)) = f\left(\lim_{x \to c} g(x)\right) = f(L)$$

However, if the inner function $g(x)$ approaches an infinite boundary ($\pm\infty$) or a point of discontinuity, we must track the directional trajectory of that inner output and evaluate how the outer function behaves as its input pushes toward that same boundary.



[Input x] ---> [ Inner Function: g(x) ] ---> [ Intermediate Output: u ] ---> [ Outer Function: f(u) ] ---> [ Final Output ]



---

## Part 1: Guided Sample Problems

### Sample Problem 1 (From Your Learning Activity)
Evaluate the following limit:
$$\lim_{x \to 0^{+}} \tan^{-1}(\ln x)$$

#### Step-by-Step Solution:
* **Step 1: Isolate and evaluate the inner limit.** Identify the inner function, $g(x) = \ln x$. Observe what happens to the natural log graph as $x$ approaches $0$ from the right side ($0^{+}$):
    $$\lim_{x \to 0^{+}} \ln x = -\infty$$
* **Step 2: Pass the result to the outer function.** Let a temporary variable $u = \ln x$. Since $u \to -\infty$, we translate our original problem into a limit tracking the outer function, $f(u) = \tan^{-1}(u)$, as its input drops toward negative infinity:
    $$\lim_{u \to -\infty} \tan^{-1}(u)$$
* **Step 3: Evaluate the final boundary.** Recall the horizontal asymptote behavior of the inverse tangent function. As its input goes to negative infinity, the graph flattens out at $-\frac{\pi}{2}$:
    $$\lim_{u \to -\infty} \tan^{-1}(u) = -\frac{\pi}{2}$$

#### Final Answer:
$$\lim_{x \to 0^{+}} \tan^{-1}(\ln x) = -\frac{\pi}{2}$$

---

### Sample Problem 2 
Evaluate the following limit:
$$\lim_{x \to 0^{-}} e^{1/x}$$

#### Step-by-Step Solution:
* **Step 1: Isolate and evaluate the inner limit.** The inner function nested in the exponent is $g(x) = \frac{1}{x}$. Analyze its behavior as $x$ approaches $0$ from the negative side ($0^{-}$):
    $$\lim_{x \to 0^{-}} \frac{1}{x} = -\infty$$
* **Step 2: Pass the result to the outer function.** Let the substitution variable be $t = \frac{1}{x}$. Because $t \to -\infty$, rewrite the limit focusing on the outer exponential function, $f(t) = e^t$:
    $$\lim_{t \to -\infty} e^t$$
* **Step 3: Evaluate the final boundary.** Look at the end behavior of the exponential growth function as its exponent grows infinitely negative:
    $$\lim_{t \to -\infty} e^t = 0$$

#### Final Answer:
$$\lim_{x \to 0^{-}} e^{1/x} = 0$$

---

## Part 2: Real-Life Engineering Application Problems

### Engineering Problem 1: [[Electrical Control Loops & Signal Saturation]]
[[Electrical Control Loops & Signal Saturation Solution]]
In audio engineering, a pre-amplifier circuit boosts an incoming microphone signal voltage $v$, which is then passed into a hard-limiting saturation circuit to prevent speaker damage. The total output voltage $V_{out}$ as a function of the input voltage $v$ is modeled by the composite function:
$$V_{out}(v) = 5 \cdot \tan^{-1}\left(\ln\left(1 + e^v\right)\right)$$
As a surge of static electricity causes the raw input voltage to spike toward infinity ($v \to \infty$), find the steady-state limit of the output voltage to verify if the circuit clamps safely.

#### Step-by-Step Solution:
* **Step 1: Evaluate the innermost boundary layer.** Look at the expression $1 + e^v$ inside the natural log. As $v \to \infty$, the exponential term $e^v \to \infty$. Therefore:
    $$\lim_{v \to \infty} (1 + e^v) = \infty$$
* **Step 2: Evaluate the next intermediate inner layer.** Now take the limit of the natural logarithm as its input approaches infinity:
    $$\lim_{u \to \infty} \ln(u) = \infty$$
* **Step 3: Evaluate the outer boundary layer.** Finally, pass this result ($\infty$) into the remaining outer inverse tangent function:
    $$\lim_{w \to \infty} 5 \cdot \tan^{-1}(w)$$
    We know that $\lim_{w \to \infty} \tan^{-1}(w) = \frac{\pi}{2}$. Multiplying by the scale factor of $5$ yields:
    $$5 \cdot \left(\frac{\pi}{2}\right) = \frac{5\pi}{2} \approx 7.85 \text{ Volts}$$

#### Engineering Conclusion:
As the input voltage surges toward infinity, the composite limit safely stabilizes. The output signal will successfully clamp at a maximum threshold of $\frac{5\pi}{2}$ Volts, protecting downstream equipment from blowing out.

---

### Engineering Problem 2: [[Biomedical Engineering & Automated Insulin Pumps]]
[[Biomedical Engineering & Automated Insulin Pumps Solution]]
An automated insulin pump uses a composite algorithm to determine how much active hormone remains in a patient's bloodstream before injecting a new dose. The residual active insulin $I(t)$ over time $t$ (in hours) since the last automated basal release is governed by a decay function nested inside a baseline saturation model:
$$I(t) = \frac{10}{1 + e^{-1/t^2}}$$
Evaluate $\lim_{t \to 0^{+}} I(t)$ to calculate the instantaneous residual insulin levels immediately after the mechanical valve opens.

#### Step-by-Step Solution:
* **Step 1: Isolate and evaluate the inner exponent limit.** Look at the innermost fraction within the exponent, $-\frac{1}{t^2}$, as $t \to 0^{+}$:
    Since $t^2$ becomes an incredibly small positive decimal, $\frac{1}{t^2} \to \infty$. Applying the negative sign gives:
    $$\lim_{t \to 0^{+}} \left(-\frac{1}{t^2}\right) = -\infty$$
* **Step 2: Pass the result to the exponential layer.** Treat the exponent as a single variable $u \to -\infty$ and evaluate the behavior of $e^u$:
    $$\lim_{u \to -\infty} e^u = 0$$
* **Step 3: Evaluate the entire outer composite system.** Substitute this intermediate value ($0$) back into the structural denominator of the pump's equation:
    $$\lim_{t \to 0^{+}} \frac{10}{1 + e^{-1/t^2}} = \frac{10}{1 + 0} = \frac{10}{1} = 10 \text{ units}$$

#### Engineering Conclusion:
At the exact instant the pump cycle initiates ($t \to 0^{+}$), the composite limit shows the active insulin measurement begins at a clean, finite baseline of $10$ units, preventing the algorithm from miscalculating and delivering a dangerous overdose.

#### Worked Example
Evaluate the following limit using appropriate methods:

$\lim_{x\rightarrow0^{+}}\tan^{-1}(\ln x)$

##### Solution
Evaluate the following limit using appropriate methods:
$$\lim_{x \to 0^{+}} \tan^{-1}(\ln x)$$

---


To evaluate this limit, we can analyze the behavior of the inner function first and then work our way out.

###### Step 1: Evaluate the inner limit
First, consider what happens to the natural logarithm function, $\ln x$, as $x$ approaches $0$ from the right ($0^{+}$):
$$\lim_{x \to 0^{+}} \ln x = -\infty$$

###### Step 2: Substitute and evaluate the outer limit
Since the inverse tangent function, $\tan^{-1}(u)$, is continuous everywhere, we can look at its behavior as its input $u = \ln x$ approaches $-\infty$:
$$\lim_{u \to -\infty} \tan^{-1}(u) = -\frac{\pi}{2}$$

---

$$\lim_{x \to 0^{+}} \tan^{-1}(\ln x) = -\frac{\pi}{2}$$
#### Active Practice Problem
Evaluate the following limit using appropriate methods:

$\lim_{x\rightarrow\infty}\frac{1+e^{x}}{1-e^{x}}$

##### Workspace

##### Solution
Evaluate the following limit using appropriate methods:
$$\lim_{x \to \infty} \frac{1+e^{x}}{1-e^{x}}$$

---


As $x \to \infty$, both the numerator ($1+e^x$) and the denominator ($1-e^x$) approach infinity, resulting in an indeterminate form of $\frac{\infty}{-\infty}$. To evaluate this limit, we can divide both the numerator and the denominator by the dominant term, which is $e^x$.

###### Step 1: Algebraic Manipulation
Divide every term in the expression by $e^x$:
$$\lim_{x \to \infty} \frac{\frac{1}{e^x} + \frac{e^x}{e^x}}{\frac{1}{e^x} - \frac{e^x}{e^x}}$$

Simplify the fractions:
$$\lim_{x \to \infty} \frac{\frac{1}{e^x} + 1}{\frac{1}{e^x} - 1}$$

###### Step 2: Evaluate the limit
As $x$ approaches $\infty$, the term $\frac{1}{e^x}$ approaches $0$ because the denominator grows infinitely large ($\lim_{x \to \infty} e^x = \infty$).

Substitute $0$ for $\frac{1}{e^x}$:
$$\frac{0 + 1}{0 - 1} = \frac{1}{-1} = -1$$

---

$$\lim_{x \to \infty} \frac{1+e^{x}}{1-e^{x}} = -1$$
##### Extra Practice & Extensions
> ##### Extension Problem (Limits)
> Evaluate the following limit using appropriate methods:

$\lim_{x\rightarrow0}\frac{2 \cos(x)\sin(4x)}{3x}$
> 
> > [!check]- Solution
> > Evaluate the following limit using appropriate methods:
> > $$\lim_{x \to 0} \frac{2 \cos(x) \sin(4x)}{3x}$$
> > 
> > ---
> > 
> > 
> > As $x \to 0$, the expression gives the indeterminate form $\frac{0}{0}$ because $\sin(0) = 0$. To solve this, we can use the special trigonometric limit identity:
> > $$\lim_{\theta \to 0} \frac{\sin(\theta)}{\theta} = 1$$
> > 
> > ### Step 1: Separate the constants and functions
> > We can split the expression into product pieces to isolate the standard trigonometric limits:
> > $$\lim_{x \to 0} \left( \frac{2}{3} \cdot \cos(x) \cdot \frac{\sin(4x)}{x} \right)$$
> > 
> > Using the product rule for limits, we can look at these parts individually:
> > $$\frac{2}{3} \cdot \left( \lim_{x \to 0} \cos(x) \right) \cdot \left( \lim_{x \to 0} \frac{\sin(4x)}{x} \right)$$
> > 
> > ### Step 2: Manipulate the sine limit
> > For the special limit identity to work, the denominator must match the argument of the sine function exactly ($4x$). We multiply the numerator and the denominator of that fraction by $4$:
> > $$\lim_{x \to 0} \frac{\sin(4x)}{x} = \lim_{x \to 0} \left( 4 \cdot \frac{\sin(4x)}{4x} \right) = 4 \cdot \lim_{4x \to 0} \frac{\sin(4x)}{4x}$$
> > 
> > Since $\lim_{\theta \to 0} \frac{\sin(\theta)}{\theta} = 1$ (where $\theta = 4x$):
> > $$4 \cdot 1 = 4$$
> > 
> > ### Step 3: Put it all together
> > Now substitute the evaluated limits back into the full expression:
> > * $\lim_{x \to 0} \cos(x) = \cos(0) = 1$
> > * $\lim_{x \to 0} \frac{\sin(4x)}{x} = 4$
> > 
> > $$\frac{2}{3} \cdot (1) \cdot (4) = \frac{8}{3}$$
> > 
> > ---
> > 
> > $$\lim_{x \to 0} \frac{2 \cos(x) \sin(4x)}{3x} = \frac{8}{3}$$
>

### Regroup 1
- Review common misconceptions and clarify key notations.

### Skill Block 2
In textbook calculus, a discontinuity is often treated as an abstract mathematical break. In real-world engineering, however, a discontinuity marks a sharp, physical boundary where a system completely changes its state—such as ice melting into liquid water, a circuit breaker tripping to prevent an electrical fire, or a shockwave instantly forming around an aircraft as it breaches the supersonic barrier. 

To safely design, analyze, and program automated systems around these boundaries, engineers rely on a strict mathematical framework to formally verify where a function is continuous, classify the exact nature of any breaks, and map these constraints visually.

---

## Part 1: The Three-Part Continuity Rubric

A function $f(x)$ is mathematically **continuous** at a specific point $x = c$ if and only if it satisfies all three of the following conditions without exception. If even one condition fails, the function is **discontinuous** at $x = c$.

1. **$f(c)$ is defined:** The input $c$ sits within the domain of the function, yielding a real, finite output value.
2. **$\lim_{x \to c} f(x)$ exists:** The behavior of the function from the left side matches its behavior from the right side exactly:
   $$\lim_{x \to c^-} f(x) = \lim_{x \to c^+} f(x) = L$$
3. **$\lim_{x \to c} f(x) = f(c)$:** The actual value the function approaches from the sides is identical to the exact physical point defined at $x = c$.



### The Three Types of Discontinuities
When a function fails the continuity test, the way it fails determines its classification:

* **Removable Discontinuity (Hole):** Occurs when $\lim_{x \to c} f(x)$ exists, but $f(c)$ is either undefined or points to a completely different value. Graphically, this is a smooth curve missing a single coordinate point.
* **Jump Discontinuity:** Occurs when both one-sided limits exist as finite values, but they do not equal each other ($\lim_{x \to c^-} f(x) \neq \lim_{x \to c^+} f(x)$). The graph abruptly snaps from one level to another.
* **Infinite Discontinuity:** Occurs when one or both of the one-sided limits drive toward $\infty$ or $-\infty$. This behavior indicates the presence of a **vertical asymptote**.

---

## Part 2: Guided Sample Problems

### Sample Problem 1
Using the conditions of continuity, determine if $f(x)$ is continuous at $x=2$ and $x=4$. If it is discontinuous, indicate the type:
$$f(x)=\begin{cases}3x - 1&:x<2\\ 5&:x=2\\ x^2 + 1&:2< x\le4\\ \frac{8}{x-4}&:x>4\end{cases}$$

#### Step-by-Step Solution:

#### Test at Boundary 1: $x = 2$
* **Step 1: Check $f(2)$.** According to the exact point specification given in the piecewise definition:
  $$f(2) = 5 \quad \text{(Defined)}$$
* **Step 2: Check $\lim_{x \to 2} f(x)$.** Evaluate both one-sided limits:
  * *Left-hand limit ($2^-$):* Use $3x-1 \implies \lim_{x \to 2^-} (3(2) - 1) = 5$
  * *Right-hand limit ($2^+$):* Use $x^2+1 \implies \lim_{x \to 2^+} (2^2 + 1) = 5$
  
  Since the one-sided limits match, $\lim_{x \to 2} f(x) = 5$ (Exists).
* **Step 3: Compare.** Because $\lim_{x \to 2} f(x) = f(2) = 5$, all three criteria from the continuity rubric are satisfied.

**Conclusion at $x=2$:** The function is **continuous**.

#### Test at Boundary 2: $x = 4$
* **Step 1: Check $f(4)$.** Look at the piece containing the $\le$ or $\ge$ restriction for 4. Using $x^2+1$:
  $$f(4) = 4^2 + 1 = 17 \quad \text{(Defined)}$$
* **Step 2: Check $\lim_{x \to 4} f(x)$.** Evaluate both one-sided limits:
  * *Left-hand limit ($4^-$):* Use $x^2+1 \implies \lim_{x \to 4^-} (4^2 + 1) = 17$
  * *Right-hand limit ($4^+$):* Use $\frac{8}{x-4} \implies \lim_{x \to 4^+} \frac{8}{4^+-4} = \frac{8}{0^+} = \infty$
  
  Since the right-hand limit shoots up to infinity, the overall limit **does not exist**.

**Conclusion at $x=4$:** The function is **discontinuous** and exhibits an **infinite discontinuity** (with a vertical asymptote at $x = 4$).

---

### Sample Problem 2
Find a value of $k$ for which $g(x)$ is continuous everywhere:
$$g(x)=\begin{cases}\frac{x^{2}-16}{x-4}&:x\ne4\\ kx - 2&:x=4\end{cases}$$

#### Step-by-Step Solution:
* **Step 1: Define the function value.** Using the explicit point specification at $x = 4$:
  $$g(4) = k(4) - 2 = 4k - 2$$
* **Step 2: Compute the limit approaching the transition.** Evaluate the open rational function as $x \to 4$:
  $$\text{Direct substitution yields } \frac{4^2 - 16}{4 - 4} = \frac{0}{0}$$
  Deflate the indeterminate form by factoring the difference of squares in the numerator and canceling the common factor:
  $$\lim_{x \to 4} \frac{(x-4)(x+4)}{x-4} = \lim_{x \to 4} (x+4) = 4 + 4 = 8$$
* **Step 3: Force Condition 3 of the continuity rubric.** For $g(x)$ to connect seamlessly without a hole, the limit must equal the exact assigned point value ($\lim_{x \to 4} g(x) = g(4)$):
  $$8 = 4k - 2$$
  $$10 = 4k \implies k = \frac{10}{4} = 2.5$$

**Final Answer:** Setting **$k = 2.5$** forces the linear piece to act as a solid plug, removing the hole at $x = 4$ and rendering the function continuous everywhere.

---

## Part 3: Real-Life Engineering Application Problems

### Engineering Problem 1: [[Materials Science Engineering & Polymer Phase Transitions]]
[[Materials Science Engineering & Polymer Phase Transitions Solution]]

---

### Engineering Problem 2: [[Chemical Engineering & Exothermic Batch Reactor Thresholds]]
[[Chemical Engineering & Exothermic Batch Reactor Thresholds Solution]]

#### Worked Example
Given there exists a function $h(x)$ such that $2x^{3}+8\le h(x)\le x^{4}+8$ for all $x$ near 2, find $\lim_{x\rightarrow2}\frac{h(x)+5}{3}.$

##### Solution
Given there exists a function $h(x)$ such that $2x^{3}+8 \le h(x) \le x^{4}+8$ for all $x$ near 2, find:
$$\lim_{x \to 2} \frac{h(x)+5}{3}$$

---


Because we are given an inequality bounding $h(x)$ from above and below, this problem can be solved using the **Squeeze Theorem** (also known as the Sandwich Theorem).

###### Step 1: Find the limit of the lower and upper bounds
First, we calculate the limits of the bounding functions as $x$ approaches 2.

* **Lower bound function:**
$$\lim_{x \to 2} (2x^{3}+8) = 2(2)^{3} + 8 = 2(8) + 8 = 16 + 8 = 24$$

* **Upper bound function:**
$$\lim_{x \to 2} (x^{4}+8) = (2)^{4} + 8 = 16 + 8 = 24$$

###### Step 2: Apply the Squeeze Theorem to $h(x)$
Since both the lower and upper functions approach $24$ as $x \to 2$, the function trapped between them must also approach the same value:
$$\lim_{x \to 2} h(x) = 24$$

###### Step 3: Evaluate the target limit
Now that we know the limit of $h(x)$, we can use the limit laws to substitute this value into the required expression:
$$\lim_{x \to 2} \frac{h(x)+5}{3} = \frac{\left(\lim_{x \to 2} h(x)\right) + 5}{3}$$

Substitute $24$ for $\lim_{x \to 2} h(x)$:
$$\frac{24 + 5}{3} = \frac{29}{3}$$

---

$$\lim_{x \to 2} \frac{h(x)+5}{3} = \frac{29}{3}$$
#### Active Practice Problem
Using the conditions of continuity, determine if $f(x)$ is continuous at $x=0$ and $x=1$. If $f(x)$ is discontinuous at either point, indicate the type of discontinuity.
   
   $$f(x)=\begin{cases}1-x&:x<0\\ e^{x}&:0\le x\le1\\ x^{2}+2&:x>1\end{cases}$$

##### Workspace

##### Solution
Using the conditions of continuity, determine if $f(x)$ is continuous at $x=0$ and $x=1$. If $f(x)$ is discontinuous at either point, indicate the type of discontinuity.

$$f(x)=\begin{cases}1-x&:x<0\\ e^{x}&:0\le x\le1\\ x^{2}+2&:x>1\end{cases}$$

---

A function $f(x)$ is continuous at a point $x = c$ if and only if it satisfies all three of the following conditions:
1. $f(c)$ is defined.
2. $\lim_{x \to c} f(x)$ exists (meaning the left-hand limit equals the right-hand limit: $\lim_{x \to c^-} f(x) = \lim_{x \to c^+} f(x)$).
3. $\lim_{x \to c} f(x) = f(c)$.

---


###### Part 1: Checking Continuity at $x = 0$

###### 1. Check if $f(0)$ is defined:
Looking at the piece defined for $0 \le x \le 1$:
$$f(0) = e^{0} = 1$$
*(Condition 1 is met)*

###### 2. Check if $\lim_{x \to 0} f(x)$ exists:
We must evaluate both the left-hand and right-hand limits at $x = 0$.
* **Left-hand limit ($x \to 0^{-}$):** Use the piece $1 - x$ (where $x < 0$).
$$\lim_{x \to 0^{-}} (1 - x) = 1 - 0 = 1$$
* **Right-hand limit ($x \to 0^{+}$):** Use the piece $e^x$ (where $x \ge 0$).
$$\lim_{x \to 0^{+}} e^x = e^0 = 1$$

Since $\lim_{x \to 0^{-}} f(x) = \lim_{x \to 0^{+}} f(x) = 1$, the overall limit exists:
$$\lim_{x \to 0} f(x) = 1$$
*(Condition 2 is met)*

###### 3. Check if $\lim_{x \to 0} f(x) = f(0)$:
$$\lim_{x \to 0} f(x) = 1 \quad \text{and} \quad f(0) = 1$$
*(Condition 3 is met)*

**Conclusion for $x = 0$:** $f(x)$ is **continuous** at $x = 0$.

---

###### Part 2: Checking Continuity at $x = 1$

###### 1. Check if $f(1)$ is defined:
Looking at the piece defined for $0 \le x \le 1$:
$$f(1) = e^{1} = e \approx 2.718$$
*(Condition 1 is met)*

###### 2. Check if $\lim_{x \to 1} f(x)$ exists:
Evaluate the one-sided limits at $x = 1$.
* **Left-hand limit ($x \to 1^{-}$):** Use the piece $e^x$ (where $x \le 1$).
$$\lim_{x \to 1^{-}} e^x = e^1 = e$$
* **Right-hand limit ($x \to 1^{+}$):** Use the piece $x^2 + 2$ (where $x > 1$).
$$\lim_{x \to 1^{+}} (x^2 + 2) = 1^2 + 2 = 3$$

Because the left-hand limit ($e$) does not equal the right-hand limit ($3$), the overall limit **does not exist**:
$$\lim_{x \to 1} f(x) = \text{DNE}$$
*(Condition 2 fails)*

###### 3. Determine the type of discontinuity:
Since both one-sided limits exist as finite, distinct values ($\lim_{x \to 1^{-}} f(x) \neq \lim_{x \to 1^{+}} f(x)$), the graph breaks or "jumps" from one value to another.

**Conclusion for $x = 1$:** $f(x)$ is **discontinuous** at $x = 1$, and it is a **jump discontinuity**.

---

* At **$x = 0$**, the function is **continuous**.
* At **$x = 1$**, the function is **discontinuous** with a **jump discontinuity**.

### Regroup 2
- Reflect on the physical modeling applications and mathematical setups.

### Skill Block 3
In textbook calculus, a discontinuity is often treated as an abstract mathematical break. In real-world engineering, however, a discontinuity marks a sharp, physical boundary where a system completely changes its state—such as ice melting into liquid water, a circuit breaker tripping to prevent an electrical fire, or a shockwave instantly forming around an aircraft as it breaches the supersonic barrier. 

To safely design, analyze, and program automated systems around these boundaries, engineers rely on a strict mathematical framework to formally verify where a function is continuous, classify the exact nature of any breaks, and map these constraints visually.

---

## Part 1: The Three-Part Continuity Rubric

A function $f(x)$ is mathematically **continuous** at a specific point $x = c$ if and only if it satisfies all three of the following conditions without exception. If even one condition fails, the function is **discontinuous** at $x = c$.

1. **$f(c)$ is defined:** The input $c$ sits within the domain of the function, yielding a real, finite output value.
2. **$\lim_{x \to c} f(x)$ exists:** The behavior of the function from the left side matches its behavior from the right side exactly:
   $$\lim_{x \to c^-} f(x) = \lim_{x \to c^+} f(x) = L$$
3. **$\lim_{x \to c} f(x) = f(c)$:** The actual value the function approaches from the sides is identical to the exact physical point defined at $x = c$.



### The Three Types of Discontinuities
When a function fails the continuity test, the way it fails determines its classification:

* **Removable Discontinuity (Hole):** Occurs when $\lim_{x \to c} f(x)$ exists, but $f(c)$ is either undefined or points to a completely different value. Graphically, this is a smooth curve missing a single coordinate point.
* **Jump Discontinuity:** Occurs when both one-sided limits exist as finite values, but they do not equal each other ($\lim_{x \to c^-} f(x) \neq \lim_{x \to c^+} f(x)$). The graph abruptly snaps from one level to another.
* **Infinite Discontinuity:** Occurs when one or both of the one-sided limits drive toward $\infty$ or $-\infty$. This behavior indicates the presence of a **vertical asymptote**.

---

## Part 2: Guided Sample Problems

### Sample Problem 1
Using the conditions of continuity, determine if $f(x)$ is continuous at $x=2$ and $x=4$. If it is discontinuous, indicate the type:
$$f(x)=\begin{cases}3x - 1&:x<2\\ 5&:x=2\\ x^2 + 1&:2< x\le4\\ \frac{8}{x-4}&:x>4\end{cases}$$

#### Step-by-Step Solution:

#### Test at Boundary 1: $x = 2$
* **Step 1: Check $f(2)$.** According to the exact point specification given in the piecewise definition:
  $$f(2) = 5 \quad \text{(Defined)}$$
* **Step 2: Check $\lim_{x \to 2} f(x)$.** Evaluate both one-sided limits:
  * *Left-hand limit ($2^-$):* Use $3x-1 \implies \lim_{x \to 2^-} (3(2) - 1) = 5$
  * *Right-hand limit ($2^+$):* Use $x^2+1 \implies \lim_{x \to 2^+} (2^2 + 1) = 5$
  
  Since the one-sided limits match, $\lim_{x \to 2} f(x) = 5$ (Exists).
* **Step 3: Compare.** Because $\lim_{x \to 2} f(x) = f(2) = 5$, all three criteria from the continuity rubric are satisfied.

**Conclusion at $x=2$:** The function is **continuous**.

#### Test at Boundary 2: $x = 4$
* **Step 1: Check $f(4)$.** Look at the piece containing the $\le$ or $\ge$ restriction for 4. Using $x^2+1$:
  $$f(4) = 4^2 + 1 = 17 \quad \text{(Defined)}$$
* **Step 2: Check $\lim_{x \to 4} f(x)$.** Evaluate both one-sided limits:
  * *Left-hand limit ($4^-$):* Use $x^2+1 \implies \lim_{x \to 4^-} (4^2 + 1) = 17$
  * *Right-hand limit ($4^+$):* Use $\frac{8}{x-4} \implies \lim_{x \to 4^+} \frac{8}{4^+-4} = \frac{8}{0^+} = \infty$
  
  Since the right-hand limit shoots up to infinity, the overall limit **does not exist**.

**Conclusion at $x=4$:** The function is **discontinuous** and exhibits an **infinite discontinuity** (with a vertical asymptote at $x = 4$).

---

### Sample Problem 2
Find a value of $k$ for which $g(x)$ is continuous everywhere:
$$g(x)=\begin{cases}\frac{x^{2}-16}{x-4}&:x\ne4\\ kx - 2&:x=4\end{cases}$$

#### Step-by-Step Solution:
* **Step 1: Define the function value.** Using the explicit point specification at $x = 4$:
  $$g(4) = k(4) - 2 = 4k - 2$$
* **Step 2: Compute the limit approaching the transition.** Evaluate the open rational function as $x \to 4$:
  $$\text{Direct substitution yields } \frac{4^2 - 16}{4 - 4} = \frac{0}{0}$$
  Deflate the indeterminate form by factoring the difference of squares in the numerator and canceling the common factor:
  $$\lim_{x \to 4} \frac{(x-4)(x+4)}{x-4} = \lim_{x \to 4} (x+4) = 4 + 4 = 8$$
* **Step 3: Force Condition 3 of the continuity rubric.** For $g(x)$ to connect seamlessly without a hole, the limit must equal the exact assigned point value ($\lim_{x \to 4} g(x) = g(4)$):
  $$8 = 4k - 2$$
  $$10 = 4k \implies k = \frac{10}{4} = 2.5$$

**Final Answer:** Setting **$k = 2.5$** forces the linear piece to act as a solid plug, removing the hole at $x = 4$ and rendering the function continuous everywhere.

---

## Part 3: Real-Life Engineering Application Problems

### Engineering Problem 1: [[Computer Engineering & Dynamic Power Clamping]]
[[Computer Engineering & Dynamic Power Clamping Solution]]


---

### Engineering Problem 2: [[Mechanical Infrastructure Engineering & Fluid Cavitation]]
[[Mechanical Infrastructure Engineering & Fluid Cavitation Solution]]

#### Worked Example
Find a value of $k$ for which $g(x)$ is continuous everywhere:

   $$g(x)=\begin{cases}\frac{x^{2}-9}{x-3}&:x\ne3\\ kx&:x=3\end{cases}$$

##### Solution
Find a value of $k$ for which $g(x)$ is continuous everywhere:
$$g(x)=\begin{cases}\frac{x^{2}-9}{x-3}&:x\ne3\\ kx&:x=3\end{cases}$$

---


For a piecewise function to be continuous everywhere, the individual pieces must be continuous on their intervals, and they must seamlessly connect at the transition point, $x = 3$. This means the limit of the function as $x$ approaches $3$ must equal the actual value of the function at $x = 3$.

###### Step 1: Find the value of the function at $x = 3$
Using the second piece of the function where $x = 3$:
$$g(3) = k(3) = 3k$$

###### Step 2: Evaluate the limit as $x \to 3$
To find the limit, we look at the piece defined for $x \neq 3$:
$$\lim_{x \to 3} \frac{x^2 - 9}{x - 3}$$

Direct substitution of $x = 3$ gives the indeterminate form $\frac{0}{0}$. We can resolve this by factoring the numerator (difference of squares):
$$\lim_{x \to 3} \frac{(x - 3)(x + 3)}{x - 3}$$

Since $x \to 3$ means $x \neq 3$, we can safely cancel the common factor $(x - 3)$ from the numerator and denominator:
$$\lim_{x \to 3} (x + 3)$$

Now, apply direct substitution:
$$3 + 3 = 6$$

###### Step 3: Equate the limit to the function value
For $g(x)$ to be continuous at $x = 3$, the limit must equal the function value:
$$\lim_{x \to 3} g(x) = g(3)$$
$$6 = 3k$$

Solve for $k$:
$$k = \frac{6}{3}$$
$$k = 2$$

---

The value of $k$ for which $g(x)$ is continuous everywhere is **$k = 2$**.
#### Active Practice Problem
Consider the function $f(x)$ that satisfies the following conditions:
   * $f(x)$ is continuous for all $x$ except $x=-2$, $x=0$ and $x=3$.
   * $f(0)$ is undefined
   * $\lim_{x\rightarrow0}f(x)=3$
   * $\lim_{x\rightarrow-2^{-}}f(x)=-\infty$
   * $\lim_{x\rightarrow-2^{+}}f(x)=\infty$
   * $\lim_{x\rightarrow3^{-}}f(x)=\infty$
   * $\lim_{x\rightarrow3^{+}}f(x)=-\infty$
   * $\lim_{x\rightarrow-\infty}f(x)=5$
   * $\lim_{x\rightarrow\infty}f(x)=5$

   (a) State the equation(s) for any horizontal asymptote(s) on the graph $f(x)$.  
   (b) State the equation(s) for any vertical asymptote(s) on the graph $f(x)$.  
   (c) At what x-value(s) does $f(x)$ have any discontinuities? What type are they? If there are none, state that.  
   (d) Sketch a possible graph of $f(x)$ on the grid below.  

![[05 - Special Limits and Continuity Learning Activity Image 1.png]]

##### Workspace

##### Solution
Consider the function $f(x)$ that satisfies the following conditions:
* $f(x)$ is continuous for all $x$ except $x = -2$, $x = 0$ and $x = 3$.
* $f(0)$ is undefined
* $\lim_{x \to 0} f(x) = 3$
* $\lim_{x \to -2^{-}} f(x) = -\infty$
* $\lim_{x \to -2^{+}} f(x) = \infty$
* $\lim_{x \to 3^{-}} f(x) = \infty$
* $\lim_{x \to 3^{+}} f(x) = -\infty$
* $\lim_{x \to -\infty} f(x) = 5$
* $\lim_{x \to \infty} f(x) = 5$

(a) State the equation(s) for any horizontal asymptote(s) on the graph $f(x)$.
(b) State the equation(s) for any vertical asymptote(s) on the graph $f(x)$.
(c) At what x-value(s) does $f(x)$ have any discontinuities? What type are they? If there are none, state that.
(d) Sketch a possible graph of $f(x)$ on the grid below.

---


###### (a) Horizontal Asymptotes
Horizontal asymptotes are determined by examining the behavior of the function as $x \to \infty$ and $x \to -\infty$.
* Given $\lim_{x \to -\infty} f(x) = 5$
* Given $\lim_{x \to \infty} f(x) = 5$

**Equation of Horizontal Asymptote:** $$y = 5$$

---

###### (b) Vertical Asymptotes
Vertical asymptotes occur where a function approaches $\pm\infty$ from either side of a finite $x$-value.
* At $x = -2$: $\lim_{x \to -2^{-}} f(x) = -\infty$ and $\lim_{x \to -2^{+}} f(x) = \infty$
* At $x = 3$: $\lim_{x \to 3^{-}} f(x) = \infty$ and $\lim_{x \to 3^{+}} f(x) = -\infty$

**Equations of Vertical Asymptotes:** $$x = -2 \quad \text{and} \quad x = 3$$

---

###### (c) Discontinuities and Their Types
The problem explicitly states that $f(x)$ is discontinuous at $x = -2$, $x = 0$, and $x = 3$.

1. **At $x = -2$:** Since the function goes to $\pm\infty$ here, it is an **infinite discontinuity** (associated with a vertical asymptote).
2. **At $x = 0$:** The limit exists ($\lim_{x \to 0} f(x) = 3$), but the function value $f(0)$ is undefined. This is a **removable discontinuity** (a "hole" in the graph).
3. **At $x = 3$:** Since the function goes to $\pm\infty$ here, it is an **infinite discontinuity** (associated with a vertical asymptote).

---

###### (d) Sketch of a Possible Graph

Below is a visualization mapping out the key features required by the criteria:
* Horizontal asymptote at $y = 5$ on both ends.
* Vertical asymptotes at $x = -2$ and $x = 3$.
* A removable "hole" at $(0, 3)$.

### Regroup 3
- Verify calculations and mathematical reasoning.

### Synthesis Wrap-up
- Core takeaways from Session 05 and overview of homework Knewton: *Continuity*.
