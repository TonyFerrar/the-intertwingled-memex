**Problem:** Evaluate $\lim_{x \to 0} \frac{1}{x^2}$ numerically and graphically.


![[02 - Diagnosing and Classifying Why a Limit Fails to Exist (DNE) Image 2.png]]


**Step 1 (Numerical Setup):** Pick test inputs that squeeze tightly toward $0$ from both sides:
  * $f(\pm 0.1) = \frac{1}{(0.1)^2} = 100$
  * $f(\pm 0.01) = \frac{1}{(0.01)^2} = 10,000$
  * $f(\pm 0.001) = \frac{1}{(0.001)^2} = 1,000,000$
* **Step 2 (Diagnostic Conclusion):** As the inputs get closer to $0$, the values do not approach a finite number; instead, they explode upward towards infinity. Graphically, both sides shoot straight up along the vertical asymptote at $x = 0$.
* **Final Answer:** $\lim_{x \to 0} \frac{1}{x^2} = \text{DNE}$ (or $+\infty$) (Reason: Unbounded Behavior).


