Here are the step-by-step solutions for all four problems using the **Direct Comparison Test (DCT)** or the **Limit Comparison Test (LCT)**.

## Quick Reference: Test Rules

> **Direct Comparison Test (DCT):** Let $\sum a_n$ and $\sum b_n$ be series with positive terms.
> 
> - If $a_n \le b_n$ and $\sum b_n$ **converges**, then $\sum a_n$ **converges**.
>     
> - If $a_n \ge b_n$ and $\sum b_n$ **diverges**, then $\sum a_n$ **diverges**.
>     

> **Limit Comparison Test (LCT):** Let $\sum a_n$ and $\sum b_n$ be series with positive terms. Evaluate $L = \lim_{n \to \infty} \frac{a_n}{b_n}$.
> 
> - If $0 < L < \infty$ (a finite, positive number), then **both series share the same behavior** (either both converge or both diverge).
>     

## Problem 1: $\sum_{n=1}^{\infty} \frac{\sqrt{n}}{n+n^2}$

### Step 1: Identify the Dominant Terms

To choose a comparison series ($b_n$), look at the highest powers of $n$ in the numerator and denominator:

- The numerator behaves like $\sqrt{n} = n^{1/2}$.
    
- The denominator is dominated by $n^2$ as $n \to \infty$.
    

This gives our target comparison setup:

$$b_n = \frac{n^{1/2}}{n^2} = \frac{1}{n^{3/2}}$$

### Step 2: Establish the Behavior of the Comparison Series

The series $\sum_{n=1}^{\infty} \frac{1}{n^{3/2}}$ is a standard **$p$-series** where $p = \frac{3}{2}$. Because $p > 1$, this comparison series **converges**.

### Step 3: Apply the Direct Comparison Test

Compare the terms of the original series ($a_n$) directly to our comparison series ($b_n$):

Since adding $n$ to the denominator makes the fraction smaller:

$$n + n^2 > n^2 \implies \frac{\sqrt{n}}{n+n^2} < \frac{\sqrt{n}}{n^2} = \frac{1}{n^{3/2}}$$

Because $a_n < b_n$ and the larger series $\sum b_n$ converges, the smaller series must also converge.

### Conclusion for 1

The series **converges** by the Direct Comparison Test.

## Problem 2: $\sum_{n=1}^{\infty} \frac{1}{n 2^n}$

### Step 1: Choose a Comparison Series

The denominator contains a linear term ($n$) multiplied by an exponential term ($2^n$). For all $n \ge 1$, we know that $n \ge 1$.

If we replace $n$ with its lowest possible value ($1$), the denominator becomes smaller, which makes the overall fraction larger:

$$n \cdot 2^n \ge 1 \cdot 2^n = 2^n \implies \frac{1}{n 2^n} \le \frac{1}{2^n}$$

Let our comparison series be $b_n = \frac{1}{2^n} = \left(\frac{1}{2}\right)^n$.

### Step 2: Establish the Behavior of the Comparison Series

The series $\sum_{n=1}^{\infty} \left(\frac{1}{2}\right)^n$ is a **geometric series** with a common ratio of $r = \frac{1}{2}$. Since $\vert{}r\vert{} < 1$, this geometric series **converges**.

### Step 3: Apply the Direct Comparison Test

Since $a_n \le b_n$ for all $n \ge 1$, and the dominating series $\sum b_n$ converges, our smaller series is trapped and must also converge.

### Conclusion for 2

The series **converges** by the Direct Comparison Test.

## Problem 3: $\sum_{n=2}^{\infty} \frac{2n}{\ln n}$

### Step 1: Analyze Growth Rates

Logarithmic functions ($\ln n$) grow much slower than linear functions ($n$). Because the numerator grows far faster than the denominator, we expect this series to blow up to infinity. We need to compare it to a simple, known **divergent** series.

For all $n \ge 2$, we know that $\ln n < n$. Let's substitute this relationship into our fraction:

$$\ln n < n \implies \frac{2n}{\ln n} > \frac{2n}{n} = 2$$

### Step 2: Choose a Comparison Series

Since $a_n > 2$ for all terms, we can compare it to the constant divergent series $\sum_{n=2}^{\infty} 2$ (or compare it to the divergent harmonic series $b_n = \frac{1}{n}$, since $2 > \frac{1}{n}$ for all $n \ge 2$).

Let's pick the harmonic benchmark: $b_n = \frac{1}{n}$, which is a $p$-series ($p=1$) that **diverges**.

### Step 3: Apply the Direct Comparison Test

Our inequality shows that:

$$a_n > 2 > \frac{1}{n} \implies a_n > b_n$$

Since our terms are strictly larger than the terms of a known divergent series, our series must also expand to infinity.

### Conclusion for 3

The series **diverges** by the Direct Comparison Test.

## Problem 4: $\sum_{n=1}^{\infty} \frac{3n^3-n-1}{2n^5-1}$

### Step 1: Choose a Comparison Series

When handling messy algebraic polynomials, the **Limit Comparison Test (LCT)** is the cleanest approach. First, isolate the highest degrees of $n$ to create the benchmark:

$$b_n = \frac{3n^3}{2n^5} = \frac{3}{2n^2} \quad \text{(or simply use } b_n = \frac{1}{n^2}\text{)}$$

The series $\sum_{n=1}^{\infty} \frac{1}{n^2}$ is a $p$-series with $p = 2 > 1$, meaning it **converges**.

### Step 2: Set up the Limit Comparison Test

Evaluate the limit of the ratio $\frac{a_n}{b_n}$ as $n \to \infty$:

$$L = \lim_{n \to \infty} \frac{\frac{3n^3-n-1}{2n^5-1}}{\frac{1}{n^2}}$$

Multiply by the reciprocal to simplify:

$$L = \lim_{n \to \infty} \frac{(3n^3-n-1) \cdot n^2}{2n^5-1} = \lim_{n \to \infty} \frac{3n^5-n^3-n^2}{2n^5-1}$$

### Step 3: Evaluate the Limit

Because the highest power in both the numerator and the denominator is $n^5$, the limit as $n \to \infty$ is simply the ratio of their leading coefficients:

$$L = \frac{3}{2}$$

### Step 4: Interpret the Result

Since $L = \frac{3}{2}$ is a finite, positive number ($0 < L < \infty$), the LCT confirms that both series behave identically. Since our comparison series converges, the original series must also converge.

### Conclusion for 4

The series **converges** by the Limit Comparison Test.