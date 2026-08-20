**Scenario:** A circuit design engineer uses mesh analysis to solve for two unknown internal loop currents ($I_1$ and $I_2$) flowing through a dual-loop DC circuit board. The Kirchhoff's Voltage Law equations evaluate to:

$$12I_1 - 4I_2 = 9$$

$$-4I_1 + 16I_2 = 0$$

A web-based solver determines the inverse coefficient matrix to be:

$$[A]^{-1} = \begin{bmatrix} 0.1 & 0.025 \\ 0.025 & 0.075 \end{bmatrix}$$

**Task:** Formulate the system into its matrix equivalent and calculate the exact values of the loop currents using the provided inverse.