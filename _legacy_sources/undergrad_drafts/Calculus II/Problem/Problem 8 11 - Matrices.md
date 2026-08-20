Aerospace Engineering – Flight Trim Configurations 

- **Context:** This problem tests the critical step of checking the determinant before executing an automated simulation solution.
    
- **Problem:** An automated flight control system calculates three elevator trim parameters ($p_1, p_2, p_3$) using the following matrix array:
    
    $$A = \begin{bmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 3 & -1 & 4 \end{bmatrix}, \quad b = \begin{bmatrix} 10 \\ 20 \\ 5 \end{bmatrix}$$
    
    1. Before attempting to compute $A^{-1}$, calculate $\det(A)$.
        
    2. Based on your determinant calculations, will the flight control computer be able to find a _unique_ baseline trim setting using the matrix inverse method ($x = A^{-1}b$)? Why or why not?
        
    3. Identify if this specific system has _infinitely many solutions_ or _no solution_ by checking how the rows interact.