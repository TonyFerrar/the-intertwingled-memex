## Calculus I Mastery: Skill 2 Verification, Classification, and Mapping of Discontinuity

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
