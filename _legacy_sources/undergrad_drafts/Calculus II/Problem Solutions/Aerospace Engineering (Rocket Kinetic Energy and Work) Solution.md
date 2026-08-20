**Problem:** A flight simulation program models the work done by a rocket booster over a short high-acceleration burn corridor. The discrete software tracking loop produces an expression for the work done using $n$ computational steps:
$$W_n = \frac{15n^3 - 4n^2 + 2}{3n^3 + 5n} \text{ Megajoules (MJ)}$$
To establish the true structural velocity profile, the software engine must run an infinite refinement loop. Find the exact work done by taking the limit as $n \to \infty$.

**Solution:**
1. **Set up the continuous limit expression:**
   $$W = \lim_{n \to \infty} \frac{15n^3 - 4n^2 + 2}{3n^3 + 5n}$$
2. **Analyze the leading polynomial degrees:** Both the numerator and denominator share a maximum degree of 3 ($n^3$).
3. **Extract the leading coefficients:**
   $$W = \frac{15}{3} = 5 \text{ MJ}$$

**Meaning of the Answer & Real-Life Application:**
The calculated limit of $5\text{ MJ}$ represents the exact total work performed on the rocket by the expanding exhaust gases. While the computer program can only run a finite number of loops during real-time telemetry tracking, engineers use this infinite limit calculation to determine the absolute theoretical maximum velocity the rocket can achieve. This ensures that guidance systems can predict exactly where the rocket's path will peak, preventing path deviations and ensuring payloads reach their intended orbits safely.
