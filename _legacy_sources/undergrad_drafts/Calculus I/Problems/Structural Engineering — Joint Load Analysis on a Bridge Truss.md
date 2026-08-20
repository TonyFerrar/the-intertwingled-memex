**Scenario:** A civil engineer is calculating the internal axial tension and compression forces acting within a structural steel triangular truss bridge layout. Evaluating the static equilibrium of forces ($\Sigma F_x = 0$ and $\Sigma F_y = 0$) at two key structural joints yields a system of equations linking three unknown internal structural beam forces ($F_1$, $F_2$, and $F_3$ in kiloNewtons):

$$\begin{aligned} 1.00F_1 + 0.71F_2 + 0.00F_3 &= 50 \\ 0.00F_1 + 0.71F_2 + 1.00F_3 &= 80 \\ -0.50F_1 + 0.00F_2 + 0.86F_3 &= 0 \end{aligned}$$

1. Convert this structural truss system into the standard matrix equation format $[A][X] = [B]$.
    
2. If computing the matrix solution $[X] = [A]^{-1}[B]$ reveals the exact result vector to be:
    
    $$\begin{bmatrix} F_1 \\ F_2 \\ F_3 \end{bmatrix} = \begin{bmatrix} 18.1 \\ 44.9 \\ 48.1 \end{bmatrix}\text{ kN}$$
    
    Explain the physical meaning of these values and how they impact structural safety decisions.
    
