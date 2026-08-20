# Calculus I Mastery: Skill 1
## Disentangling Limit Behavior from Function Values (The Concept of "Approaching")

The fundamental hurdle when transitioning from algebra to calculus is shifting your mindset from a static coordinate ($x = c$) to a dynamic trend ($x \to c$). You must master the skill of separating the **visual path** a graph travels along from its **final destination** (which may be a solid point, an open hole, or completely undefined).

---

### 1. Conceptual Framework

In algebra, you are trained to look exactly at an input to find an output. In calculus, **limits look around the target, never at it.**

#### Core Definition
We write the two-sided limit notation as:
$$\lim_{x \to a} f(x) = L$$

This mathematical statement reads: *"The limit of $f(x)$ as $x$ approaches $a$ equals $L$."* According to your guided notes, this is true if we can make the values of $f(x)$ arbitrarily close to a single real number $L$ by taking $x$ sufficiently close to $a$, **but not equal to $a$**. 

#### The Multi-Representational Strategy
To master this skill, you must evaluate this "approaching behavior" using two different perspectives:
1. **Arithmetically (Numerical Approach):** Setting up a table of inputs that incrementally sandwich the target value from both the left side ($x \to a^-$) and the right side ($x \to a^+$) using small decimal steps.
2. **Visually (Graphical Approach):** Placing your fingers on the left and right sides of the curve and tracing them inward toward the vertical line $x = a$ to observe what height ($y$-value) they are targeting.

---

### 2. Guided Note Concepts & Explanations

#### The Indeterminate Hole
When evaluating a rational function like $f(x) = \frac{x^2 - 4}{x - 2}$ at the target value $a = 2$, direct algebraic evaluation fails entirely:
$$f(2) = \frac{2^2 - 4}{2 - 2} = \frac{0}{0}$$

The result $\frac{0}{0}$ is called an **indeterminate form**. It tells us that the exact function value $f(2)$ is completely **undefined** (creating a hole in the graph). However, the limit still exists because the path on either side of $x = 2$ remains completely predictable. 

By factoring the numerator as a difference of squares, we can analyze the structural path of the function for all points where $x \neq 2$:
$$f(x) = \frac{(x - 2)(x + 2)}{x - 2} = x + 2 \quad (\text{when } x \neq 2)$$

This reveals that the graph behaves exactly like the line $y = x + 2$, except it contains a single missing point (a singularity) at $x = 2$.

---

### 3. Step-by-Step Example Problems

#### Example A: [[Numerical Evaluation (The Estimation Table)]]


---

#### Example B: [[Graphical Evaluation (Holes vs. Solid Dots)]]
