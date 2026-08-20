- **Context:** Structural engineers use joint equilibrium equations to balance external loads against internal beam reactions, ensuring structures like bridges do not buckle.
    
- **Problem:** A joint on a steel pedestrian bridge is subjected to an external downward weight. The internal structural forces ($F_1$ and $F_2$) acting on the connecting steel members must satisfy the following static equilibrium layout:
    
    $$\begin{cases} F_1 + F_2 \cos(60^\circ) = 0 \\ F_2 \sin(60^\circ) = 500 \end{cases}$$
    
    Express this structural system as a matrix equation.
    

#### Solution & Array Construction

Expose the implicit zero for the missing $F_1$ in the second constraint:

$$\begin{cases} (1)F_1 + (\cos(60^\circ))F_2 = 0 \\ (0)F_1 + (\sin(60^\circ))F_2 = 500 \end{cases}$$

$$\begin{bmatrix} 1 & \cos(60^\circ) \\ 0 & \sin(60^\circ) \end{bmatrix} \begin{bmatrix} F_1 \\ F_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 500 \end{bmatrix}$$

#### Meaning of the Answer & Real-Life Application

- **Meaning of the Answer:** Solving this matrix yields a vector $x = \begin{bmatrix} F_1 \\ F_2 \end{bmatrix}$ where each value represents the internal physical force magnitude (in Newtons or pounds) inside that specific structural member.
    
- **Real-Life Application:** When an engineering solver processes this matrix, a **positive** result tells the engineer the beam is experiencing _tension_ (stretching), while a **negative** result reveals _compression_ (squeezing). Structural engineers use this precise data to select the appropriate thickness and grade of steel to ensure the bridge can safely sustain rush-hour traffic without collapsing.