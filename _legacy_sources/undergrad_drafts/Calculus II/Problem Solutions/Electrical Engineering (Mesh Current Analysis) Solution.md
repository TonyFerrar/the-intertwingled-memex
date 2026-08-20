**Scenario:** A circuit design engineer uses mesh analysis to solve for two unknown internal loop currents ($I_1$ and $I_2$) flowing through a dual-loop DC circuit board. The Kirchhoff's Voltage Law equations evaluate to:

$$12I_1 - 4I_2 = 9$$

$$-4I_1 + 16I_2 = 0$$

A web-based solver determines the inverse coefficient matrix to be:

$$[A]^{-1} = \begin{bmatrix} 0.1 & 0.025 \\ 0.025 & 0.075 \end{bmatrix}$$

**Task:** Formulate the system into its matrix equivalent and calculate the exact values of the loop currents using the provided inverse.

#### Solution 1

Matrix setup:

$$\begin{bmatrix} 12 & -4 \\ -4 & 16 \end{bmatrix} \begin{bmatrix} I_1 \\ I_2 \end{bmatrix} = \begin{bmatrix} 9 \\ 0 \end{bmatrix}$$

Isolate and multiply:

$$\begin{bmatrix} I_1 \\ I_2 \end{bmatrix} = \begin{bmatrix} 0.1 & 0.025 \\ 0.025 & 0.075 \end{bmatrix} \begin{bmatrix} 9 \\ 0 \end{bmatrix}$$

$$I_1 = (0.1 \cdot 9) + (0.025 \cdot 0) = 0.9$$

$$I_2 = (0.025 \cdot 9) + (0.075 \cdot 0) = 0.225$$

$$\begin{bmatrix} I_1 \\ I_2 \end{bmatrix} = \begin{bmatrix} 0.9 \text{ A} \\ 0.225 \text{ A} \end{bmatrix}$$

#### Meaning of the Answer & Real-Life Application

- **Meaning of the Output:** The calculation shows that a steady-state current of **$0.9\text{ Amperes}$** flows through the primary loop, while **$0.225\text{ Amperes}$** passes through the secondary loop.
    
- **Real-Life Engineering Application:** Electrical engineers use these calculated current parameters to evaluate the power dissipation ($P = I^2R$) across individual surface-mount resistors on the PCB. Knowing the exact current prevents component failure; if the current values are higher than expected, components can overheat, melting the copper circuit board traces and destroying the device.
    