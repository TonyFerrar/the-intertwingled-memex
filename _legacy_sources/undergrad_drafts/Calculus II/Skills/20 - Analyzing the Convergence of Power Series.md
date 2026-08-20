# Skill 3: Analyzing the Convergence of Power Series

## 1. Overview and Notes

When we convert a function into an infinite polynomial (Skill 1), we must ask a critical question: *Does this infinite sum actually equal the function for all values of $x$?* The answer is usually no. Power series only work within a specific safe operating boundary. Finding this boundary is called **analyzing convergence**.

### What is Convergence?
If you plug an $x$-value into an infinite series and the sum approaches a finite, stable number, the series **converges**. If the sum spirals out of control to infinity (or oscillates wildly), the series **diverges**.

### The Interval and Radius of Convergence
The set of all $x$-values where a series converges is called the **Interval of Convergence (IOC)**. The distance from the center $a$ to the edge of this interval is the **Radius of Convergence ($R$)**.
*   If $R = 0$, the series only works at the exact center $x = a$.
*   If $R = \infty$, the series works for all real numbers (e.g., $e^x, \sin(x), \cos(x)$).
*   If $R$ is a finite number, the series only works within the bounds $(a - R, a + R)$.

### The Ratio Test
The most powerful tool to find the radius of convergence is the **Ratio Test**. A power series $\sum_{k=0}^{\infty} c_k(x-a)^k$ converges absolutely if the limit of the ratio of successive terms is less than $1$:
$$ \lim_{k \to \infty} \left| \frac{c_{k+1}(x-a)^{k+1}}{c_k(x-a)^k} \right| = \lim_{k \to \infty} \left| \frac{c_{k+1}}{c_k} (x-a) \right| < 1 $$
By isolating $(x-a)$ in this inequality, you can determine exactly which values of $x$ keep the series mathematically stable.

---

## 2. Sample Mathematical Problems

### Problem A: Find the Radius of Convergence for $\sum_{n=0}^{\infty} \frac{x^n}{3^n (n+1)}$.
**Step 1: Set up the Ratio Test**
Identify the general term $a_n = \frac{x^n}{3^n (n+1)}$. 
We need to evaluate $L = \lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right| < 1$.

**Step 2: Substitute $a_n$ and $a_{n+1}$**
$$ \lim_{n \to \infty} \left| \frac{x^{n+1}}{3^{n+1}(n+2)} \cdot \frac{3^n(n+1)}{x^n} \right| < 1 $$

**Step 3: Simplify the expression**
Cancel out the $x$ terms and the $3$ terms:
$$ \lim_{n \to \infty} \left| \frac{x}{3} \cdot \frac{n+1}{n+2} \right| < 1 $$

**Step 4: Evaluate the Limit**
As $n$ approaches infinity, the fraction $\frac{n+1}{n+2}$ approaches $1$. The $x$ and $3$ are independent of $n$ and can be pulled out of the limit:
$$ \left| \frac{x}{3} \right| \cdot (1) < 1 $$

**Step 5: Isolate $x$**
$$ \frac{|x|}{3} < 1 \implies |x| < 3 $$
This means the series converges for $-3 < x < 3$. Therefore, the **Radius of Convergence is $R = 3$**.

### Problem B: Analyze the convergence of the Maclaurin series for $e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!}$.
**Step 1: Set up the Ratio Test**
$$ \lim_{n \to \infty} \left| \frac{x^{n+1}}{(n+1)!} \cdot \frac{n!}{x^n} \right| < 1 $$

**Step 2: Simplify**
Recall that $(n+1)! = (n+1) \cdot n!$, so the factorials cancel out:
$$ \lim_{n \to \infty} \left| x \cdot \frac{1}{n+1} \right| < 1 $$

**Step 3: Evaluate Limit**
$$ |x| \cdot \lim_{n \to \infty} \left( \frac{1}{n+1} \right) = |x| \cdot 0 = 0 $$
Since $0$ is *always* less than $1$ regardless of what $x$ is, this series converges for all real numbers. **The Radius of Convergence is $R = \infty$.**

---

## 3. Engineering Application Problems

### Application 1: [[Fluid Dynamics Simulation (Boundary Definition)]]
[[Fluid Dynamics Simulation (Boundary Definition) Solution]]


***

### Application 2: [[Automated Drug Dosing System (Predicting Local Stability)]]
[[Automated Drug Dosing System (Predicting Local Stability) Solution]]
**Scenario:** A biomedical engineer is programming an automated IV drip for a hospital. The concentration of the drug in the patient's bloodstream $C(t)$ over time (in minutes) relies on a power series approximation centered at $t = 60$ minutes:
$$ C(t) = \sum_{k=0}^{\infty} \frac{k!(t - 60)^k}{10^k} $$

**Problem:** Determine the radius of convergence for this series to check the stability of the software's dosing algorithm.

**Solution:** Apply the Ratio Test.
$$ \lim_{k \to \infty} \left| \frac{(k+1)!(t-60)^{k+1}}{10^{k+1}} \cdot \frac{10^k}{k!(t-60)^k} \right| < 1 $$
Simplify the factorials ($(k+1)! / k! = k+1$) and the powers:
$$ \lim_{k \to \infty} \left| \frac{(k+1)(t-60)}{10} \right| < 1 $$
$$ \frac{|t-60|}{10} \lim_{k \to \infty} (k+1) < 1 $$
Because the limit of $(k+1)$ as $k \to \infty$ is infinity, this inequality can only ever be less than $1$ if the variable portion is exactly zero. That means $|t - 60| = 0$, so $t = 60$. The radius of convergence is $R = 0$.

**Meaning in Real-Life Application:**
The engineer discovers a catastrophic flaw in the mathematical model. A radius of $0$ means this series *only* works at exactly $60$ minutes. If the IV computer tries to calculate the drug concentration at $61$ minutes, the algorithm will diverge and the system will crash, potentially halting the life-saving medication. Thanks to convergence analysis, the engineer knows they must abandon this specific formula entirely and find a different mathematical representation that converges over a wider timeframe.