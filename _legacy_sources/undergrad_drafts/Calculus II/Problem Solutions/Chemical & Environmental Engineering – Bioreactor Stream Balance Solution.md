- **Context:** Chemical plants must track chemical volumes and concentrations across multiple cascading processing units to maintain product purity.
    
- **Problem:** An industrial bioreactor system continuously pumps fluid through three interconnected mixing tanks ($x_1, x_2, x_3$). The steady-state chemical mass balance across these stages is defined by the following system:
    
    $$\begin{cases} 0.8x_1 - 0.2x_2 = 100 \\ -0.1x_1 + 0.9x_2 - 0.3x_3 = 0 \\ -0.2x_2 + 0.7x_3 = 50 \end{cases}$$
    
    Transform this multi-tank mass balance system into its standard matrix equation equivalent.
    

#### Solution & Array Construction

Insert `0` placeholders for missing stream variables to maintain strict column alignment:

$$\begin{cases} 0.8x_1 - 0.2x_2 + 0.0x_3 = 100 \\ -0.1x_1 + 0.9x_2 - 0.3x_3 = 0 \\ 0.0x_1 - 0.2x_2 + 0.7x_3 = 50 \end{cases}$$

$$\begin{bmatrix} 0.8 & -0.2 & 0.0 \\ -0.1 & 0.9 & -0.3 \\ 0.0 & -0.2 & 0.7 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} 100 \\ 0 \\ 50 \end{bmatrix}$$

#### Meaning of the Answer & Real-Life Application

- **Meaning of the Answer:** The values in the solution vector represent the steady-state concentration or mass flow rate of the target compound inside each individual bioreactor tank.
    
- **Real-Life Application:** Environmental and chemical engineers use this information to control chemical processing speeds. For example, in a water treatment facility, this matrix tells the engineer if the final tank ($x_3$) will successfully neutralize toxins down to safe parts-per-million (ppm) levels before the water is safely discharged into local rivers.
    