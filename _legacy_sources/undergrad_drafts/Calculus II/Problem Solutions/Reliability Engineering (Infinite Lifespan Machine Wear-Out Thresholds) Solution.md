A safety reliability engineer models the wear-and-tear lifecycle of an automated cooling valve in a manufacturing plant. The long-term failure hazard function over time $t$ (in decades) is modeled by $h(t) = \frac{1}{\sqrt{t} + e^{-t}}$ for $t \ge 1$. To determine if a machine running indefinitely without maintenance will eventually hit a 100% certainty of failure, the engineer must analyze if the cumulative hazard index diverges across an infinite operational lifespan:

$$\text{Cumulative Hazard} = \int_{1}^{\infty} \frac{1}{\sqrt{t} + e^{-t}} \, dt$$

#### **Step 1: Build the Inequality**

The mixture of algebraic roots and exponential terms makes symbolic integration exceptionally messy. We can bound the expression from below. For all $t \ge 1$, the exponential term $e^{-t}$ drops rapidly and is always less than or equal to 1 ($e^{-t} \le 1$). Furthermore, since $t \ge 1$, we know that $1 \le \sqrt{t}$. Therefore, we can create a conservative lower bound:

$$\sqrt{t} + e^{-t} \le \sqrt{t} + 1 \le \sqrt{t} + \sqrt{t} = 2\sqrt{t}$$

Taking the reciprocal flips the inequality sign:

$$\frac{1}{\sqrt{t} + e^{-t}} \ge \frac{1}{2\sqrt{t}}$$

#### **Step 2: Evaluate the Reference Function**

Test the smaller reference function:

$$\int_{1}^{\infty} \frac{1}{2\sqrt{t}} \, dt = \frac{1}{2} \int_{1}^{\infty} \frac{1}{t^{1/2}} \, dt \implies p = \frac{1}{2}$$

Since $p = \frac{1}{2} \le 1$, this reference integral **diverges**.

#### **Step 3: Conclude**

By the Direct Comparison Test, because the smaller floor function diverges to infinity, our original cumulative hazard integral is forced to also **diverge**.

#### **Meaning of the Answer & Real-Life Application**

- **Meaning:** The cumulative hazard index diverges to infinity over an unbounded timeline. This indicates that the total accumulated probability of wear-out continues to grow without limit.
    
- **Application:** In plant management, a diverging cumulative hazard index is a definitive safety indicator. It proves that the component suffers from an inescapable mechanical wear-out profile over time. Because failure is mathematically guaranteed if the valve runs indefinitely (as the risk bounds approach infinity), reliability engineers use this qualitative proof to mandate strict, calendar-based preventive replacement schedules, ensuring the component is replaced long before it enters the dangerous, high-probability failure window.