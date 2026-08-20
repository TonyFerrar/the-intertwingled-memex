**Context:** Acoustic engineers utilize infinite series to model wave reflections and sound propagation. In an active noise-control system, an anti-noise wave is emitted to cancel out a background hum via destructive interference. The residual acoustic pressure variance over $n$ wave cycles is modeled by the alternating harmonic series:

$$\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n}$$

**Problem:** Determine whether this acoustic pressure variance series converges absolutely, conditionally, or diverges.

**Solution:**

1. **Test the absolute value series:** $\sum_{n=1}^{\infty} \left\vert{} \frac{(-1)^{n+1}}{n} \right\vert{} = \sum_{n=1}^{\infty} \frac{1}{n}$. This is the classic **harmonic series**, which is known to **diverge**. Thus, it does not converge absolutely.
    
2. **Apply the AST to the original series:** The magnitude is $a_n = \frac{1}{n}$.
    
    - The terms are decreasing since $\frac{1}{n+1} \le \frac{1}{n}$.
        
    - The limit vanishes: $\lim_{n \to \infty} \frac{1}{n} = 0$.
        

The AST confirms that the original alternating series converges.

**Engineering Meaning & Real-Life Application:** The series **converges conditionally**. In real-life acoustics, this tells the engineer that the noise-canceling system successfully dampens the background noise over time, but the system's stability is highly fragile. Because it lacks absolute convergence, the silencing effect depends entirely on the perfect, uninterrupted alternation of the anti-noise phases. If a timing glitch shifts the phase or skips a cycle, the underlying divergent harmonic behavior will take over, causing the sound energy to destabilize and manifest as a sudden spike in loud noise.