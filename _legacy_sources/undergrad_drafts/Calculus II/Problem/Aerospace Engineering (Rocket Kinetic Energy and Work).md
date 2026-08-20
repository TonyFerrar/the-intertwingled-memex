**Problem:** A flight simulation program models the work done by a rocket booster over a short high-acceleration burn corridor. The discrete software tracking loop produces an expression for the work done using $n$ computational steps:
$$W_n = \frac{15n^3 - 4n^2 + 2}{3n^3 + 5n} \text{ Megajoules (MJ)}$$
To establish the true structural velocity profile, the software engine must run an infinite refinement loop. Find the exact work done by taking the limit as $n \to \infty$.
