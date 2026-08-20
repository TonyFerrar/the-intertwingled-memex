**Problem:** Determine why $\lim_{x \to 0} \sin\left(\frac{1}{x}\right)$ fails to exist using the tracking data provided in your notes


* **Step 1 (Analyze Data Tracking Tables):** Examine the functional outputs as $x \to 0^+$
  * At $x = 0.01 \implies f(x) = -0.5064$ 
  * At $x = 0.001 \implies f(x) = 0.8269$ 
  * At $x = 0.0001 \implies f(x) = -0.3056$ 
  * At $x = 0.00001 \implies f(x) = 0.0357$ 
* **Step 2 (Diagnostic Conclusion):** Look at the sequence of outputs. As the decimal inputs shrink, the function values randomly "jump around" violently between $-1$ and $1$ instead of narrowing down or stabilizing near a single unique number
* **Final Answer:** $\lim_{x \to 0} \sin\left(\frac{1}{x}\right) = \text{DNE}$ (Reason: Oscillating Behavior)

