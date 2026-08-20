## Calculus I Mastery: Skill 1 Navigating Composite Boundaries (The "Inside-Out" Limit)

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
