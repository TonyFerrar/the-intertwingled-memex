**Problem:** Analyze the function $f(x) = \frac{|x|}{x}$ near $x = 0$ using the graph below to evaluate the one-sided limits and the two-sided limit

![[02 - Diagnosing and Classifying Why a Limit Fails to Exist (DNE) Image 1.png]]


* **Step 1 (Left-Hand Limit):** Trace the graph from the left toward $x = 0$ (where $x < 0$). The function forms a flat line at a height of $-1$
  $$\lim_{x \to 0^-} \frac{|x|}{x} = -1$$
* **Step 2 (Right-Hand Limit):** Trace the graph from the right toward $x = 0$ (where $x > 0$). The function forms a flat line at a height of $1$
  $$\lim_{x \to 0^+} \frac{|x|}{x} = 1$$
* **Step 3 (Diagnostic Conclusion):** Compare the two results. Because $-1 \neq 1$, the left and right-hand limits do not agree
* **Final Answer:** $\lim_{x \to 0} \frac{|x|}{x} = \text{DNE}$ (Reason: Jump Discontinuity)

---