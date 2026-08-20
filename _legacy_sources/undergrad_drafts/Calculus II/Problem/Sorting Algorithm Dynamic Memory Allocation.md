**Context:** Software engineers evaluate infinite series to analyze the execution metrics and resource loads of data sorting processes. A dynamic sorting algorithm continuously scales its memory workspace up and down (allocating and deallocating blocks) during recursive passes to maximize processing speeds. The net change in memory overhead at the $n$-th recursive level is given by:

$$\sum_{n=2}^{\infty} \frac{(-1)^n}{n \ln n}$$

**Problem:** Determine if this algorithm's dynamic memory series converges absolutely, conditionally, or diverges.