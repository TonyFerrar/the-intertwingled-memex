**Scenario:** An electrical hardware engineer is optimizing the power distribution network on a smart-home control board. Applying Kirchhoff's Current Law ($\Sigma I_{\text{in}} = \Sigma I_{\text{out}}$) at three separate copper trace intersections yields a system of linear equations defining the absolute voltages ($V_1$, $V_2$, and $V_3$ in Volts) across those specific nodes:

$$\begin{aligned} 9V_1 - 3V_2 - 4V_3 &= 12 \\ -3V_1 + 12V_2 - 5V_3 &= 0 \\ -4V_1 - 5V_2 + 15V_3 &= 5 \end{aligned}$$

1. Write out this electronic system using the standard matrix structure $[A][X] = [B]$.
    
2. If executing matrix inversion yields the stable operational solution vector:
    
    $$\begin{bmatrix} V_1 \\ V_2 \\ V_3 \end{bmatrix} = \begin{bmatrix} 2.21 \\ 0.98 \\ 1.25 \end{bmatrix}\text{ Volts}$$
    
    Explain the functional meaning of these answers and how they guide circuit board hardware manufacturing.
    
