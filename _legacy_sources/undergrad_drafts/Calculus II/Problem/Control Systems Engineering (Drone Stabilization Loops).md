**Scenario:** A flight control engineer is analyzing a drone's automated altitude stabilization loop. To map how the drone responds to sudden wind gusts in the time domain, they must perform a **Partial Fraction Expansion** to solve for two scaling constants ($X_1$ and $X_2$). The algebraic balancing system evaluates to:

$$X_1 + X_2 = 2$$

$$3X_1 - 1X_2 = 6$$

The software matrix inversion tool returns:

$$[A]^{-1} = \begin{bmatrix} 0.25 & 0.25 \\ 0.75 & -0.25 \end{bmatrix}$$

**Task:** Determine the values of the expansion scaling coefficients using the matrix inversion formula.