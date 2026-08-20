**Context:** An acoustic engineer is analyzing the decay of sound waves inside a concert hall. The residual energy of the sound waves bouncing off the walls at the $n$-th reflection is modeled by the series $\sum_{n=1}^{\infty} n e^{-n}$. If the sum of this infinite series converges, the concert hall will quickly settle into silence (good acoustics). If it diverges, the sound energy builds up to infinity, creating an infinite echo chamber (bad acoustics).

**Problem:** Determine if the acoustic energy series $\sum_{n=1}^{\infty} \frac{n}{e^n}$ converges or diverges.

**Structural Identification:** We have a polynomial ($n$) over an exponential ($e^n$). The Ratio Test is an excellent choice.
**Test Selected:** Ratio Test.

**Solution:**
$$ L = \lim_{n \to \infty} \frac{n+1}{e^{n+1}} \cdot \frac{e^n}{n} = \lim_{n \to \infty} \frac{n+1}{n} \cdot \frac{1}{e} = 1 \cdot \frac{1}{e} = \frac{1}{e} $$
Since $e \approx 2.718$, $L = \frac{1}{e} < 1$. The series **converges**.

**Engineering Meaning & Real-Life Application:**
Because the series converges, it means the total acoustic energy bouncing around the room adds up to a finite, manageable amount. In real-life acoustics, this tells the engineer that the concert hall is well-designed—the sound will naturally decay and dissipate rather than endlessly echoing and drowning out the orchestra.
