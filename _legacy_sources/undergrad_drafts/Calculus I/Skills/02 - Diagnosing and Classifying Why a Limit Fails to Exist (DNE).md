# Calculus I Mastery: Skill 2
## Diagnosing and Classifying Why a Limit Fails to Exist (DNE)

A critical skill in calculus is identifying not just *when* a limit fails to exist, but diagnosing the exact mathematical or structural reason *why* the function breaks down at that boundary. 

---

### 1. Conceptual Framework

According to your guided notes, a standard two-sided limit $\lim_{x \to a} f(x)$ describes what happens as a function approaches an $x$-value from both the left and right sides. 

#### The One-Sided Foundation
* **Left-Hand Limit:** $\lim_{x \to a^-} f(x) = L_1$ represents the value $f(x)$ approaches as $x$ gets close to $a$ from inputs strictly *less than* $a$.
* **Right-Hand Limit:** $\lim_{x \to a^+} f(x) = L_2$ represents the value $f(x)$ approaches as $x$ gets close to $a$ from inputs strictly *greater than* $a$.

#### The Requirement for Existence
The absolute rule for limit existence states:
$$\lim_{x \to a} f(x) = L \iff \lim_{x \to a^-} f(x) = L \text{ AND } \lim_{x \to a^+} f(x) = L$$

If the one-sided directional paths do not point to the exact same finite real number, or if the function exhibits unstable behavior, the two-sided limit fails to exist, and we write **DNE**.

---

### 2. The Three Classifications of Limit Failure (DNE)

Your notes outline three structural behaviors that cause a limit to fail to exist:

#### Classification 1: Non-Matching One-Sided Limits (The Jump Discontinuity)
* **The Math:** $\lim_{x \to a^-} f(x) = L_1$ and $\lim_{x \to a^+} f(x) = L_2$, where $L_1 \neq L_2$.
* **The Behavior:** The curve approaches one specific height from the left but physically gaps or "jumps" to a completely different height on the right side. 

#### Classification 2: Unbounded Behavior (The Vertical Asymptote)
* **The Math:** $\lim_{x \to a^-} f(x) = \pm\infty$ or $\lim_{x \to a^+} f(x) = \pm\infty$.
* **The Behavior:** As $x$ gets closer to $a$, the function values grow infinitely large or infinitely small rather than settling on a single real number value. The graph shoots straight up or straight down along a vertical line.

#### Classification 3: Wildly Oscillating Behavior (The Volatile Swing)
* **The Math:** The function values oscillate infinitely fast between two values as $x \to a$.
* **The Behavior:** The graph fluctuates up and down so rapidly near the target value that it becomes a solid blur of outputs and never stabilizes onto one unique number

---

### 3. Step-by-Step Example Problems from the Notes

#### Example A: [[Analyzing a Jump Discontinuity]]

---

#### Example B: [[Analyzing Unbounded Behavior]]


---

#### Example C: [[Analyzing Wildly Oscillating Behavior]]
