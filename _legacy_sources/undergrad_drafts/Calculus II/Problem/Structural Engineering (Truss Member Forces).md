**Scenario:** A structural engineer needs to determine the internal axial forces ($F_1$ and $F_2$) acting inside two supporting steel members of a construction crane truss. Static equilibrium analysis creates the simultaneous equation system:

$$0.866F_1 + 0.5F_2 = 50$$

$$-0.5F_1 + 0.866F_2 = 0$$

An automated engineering tool outputs the inverted geometry matrix as:

$$[A]^{-1} = \begin{bmatrix} 0.866 & -0.5 \\ 0.5 & 0.866 \end{bmatrix}$$

**Task:** Solve for the internal structural forces vector using matrix inversion methods.