- **Context:** Circuit boards and microchips route thousands of currents simultaneously. Electrical engineers rely on matrix setups to map out electrical loops and prevent component damage.
    
- **Problem:** Applying Kirchhoff’s Voltage Law to two adjacent loops on an automated sensor circuit board yields the following voltage drop constraints:
    
    $$\begin{cases} 12I_1 - 4I_2 = 9 \\ -4I_1 + 20I_2 = -3 \end{cases}$$
    
    Convert this circuit configuration into a canonical $Ax = b$ matrix equation.
    

#### Solution & Array Construction

The variables are already aligned sequentially ($I_1$, then $I_2$). Extract components directly into the framework:

$$\begin{bmatrix} 12 & -4 \\ -4 & 20 \end{bmatrix} \begin{bmatrix} I_1 \\ I_2 \end{bmatrix} = \begin{bmatrix} 9 \\ -3 \end{bmatrix}$$

#### Meaning of the Answer & Real-Life Application

- **Meaning of the Answer:** The resulting solution vector represents the precise electrical currents ($I_1$ and $I_2$) flowing through those closed wire loops measured in Amperes.
    
- **Real-Life Application:** Engineers feed this matrix into design simulation software to calculate power dissipation using the formula $P = I^2R$. Knowing the exact current allows them to identify if a trace on a smartphone circuit board will draw too much electricity, enabling them to redesign the layout before manufacturing to prevent overheating or battery drain.
    