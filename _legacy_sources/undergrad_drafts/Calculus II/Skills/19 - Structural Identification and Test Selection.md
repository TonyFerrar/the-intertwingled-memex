# Structural Identification and Test Selection

## 1. Topic Overview: Reading the "Anatomy" of a Series
When dealing with infinite series, the most crucial first step isn't crunching numbers—it is analyzing the structure of the series to choose the correct test. If you pick the wrong test, you can end up with inconclusive results or invalid mathematical logic.

### 1.1 Key Structural Triggers
*   **Does the general term fail to shrink to zero?**
    *   *Trigger:* $\lim_{n \to \infty} a_n \neq 0$
    *   *Test:* **Divergence Test (n-th Term Test)**. Always try this first if the numerator grows faster than or equal to the denominator.
*   **Does the series involve factorials ($n!$) or mixed exponential/polynomial terms (e.g., $n \cdot 2^n$)?**
    *   *Trigger:* Terms that grow explosively.
    *   *Test:* **Ratio Test**. The factorials and powers will cancel out beautifully.
*   **Is the entire expression raised to the $n$-th power?**
    *   *Trigger:* Expressions like $(\dots)^n$.
    *   *Test:* **Root Test**. Taking the $n$-th root instantly strips away the outer exponent.
*   **Is the series continuous, positive, and decreasing, and does it look like something you can easily integrate?**
    *   *Trigger:* Expressions involving logarithms like $\frac{1}{n \ln n}$ or recognizable reverse chain rules.
    *   *Test:* **Integral Test**. Use $u$-substitution.
*   **Does it look like a messy polynomial fraction?**
    *   *Trigger:* $\frac{3n^2 - 1}{n^4 + 2n}$
    *   *Test:* **Limit Comparison Test (LCT)**. Drop the minor terms, build a benchmark series (usually a $p$-series), and compare.

---

## 2. Sample Mathematical Problems

### Problem A: $\sum_{n=1}^{\infty} \frac{4n^3 + 2}{5n^3 - n}$
**Structural Identification:** The highest power in the numerator ($n^3$) is equal to the highest power in the denominator ($n^3$). Therefore, the terms do not approach 0.
**Test Selected:** Divergence Test.
**Solution:**
$$ \lim_{n \to \infty} \frac{4n^3 + 2}{5n^3 - n} = \frac{4}{5} $$
Since $\frac{4}{5} \neq 0$, the series **diverges**.

### Problem B: $\sum_{n=1}^{\infty} \left(\frac{2n}{3n+1}\right)^n$
**Structural Identification:** The entire term is raised to the $n$-th power.
**Test Selected:** Root Test.
**Solution:**
$$ L = \lim_{n \to \infty} \sqrt[n]{\left(\frac{2n}{3n+1}\right)^n} = \lim_{n \to \infty} \frac{2n}{3n+1} = \frac{2}{3} $$
Since $L = \frac{2}{3} < 1$, the series **converges absolutely**.

### Problem C: $\sum_{n=1}^{\infty} \frac{n^2}{n!}$
**Structural Identification:** The series contains a factorial ($n!$) mixed with a polynomial ($n^2$).
**Test Selected:** Ratio Test.
**Solution:**
$$ L = \lim_{n \to \infty} \left| \frac{(n+1)^2}{(n+1)!} \cdot \frac{n!}{n^2} \right| = \lim_{n \to \infty} \left| \frac{(n+1)^2}{n^2} \cdot \frac{1}{n+1} \right| = 1 \cdot 0 = 0 $$
Since $L = 0 < 1$, the series **converges absolutely**.

---

## 3. Engineering Application Problems

### Application 1: [[Acoustic Resonance Decay]]
[[Acoustic Resonance Decay Solution]]

---

### Application 2: [[Sorting Algorithm Data Load]]
[[Sorting Algorithm Data Load Solution]]
