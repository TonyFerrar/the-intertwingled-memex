In Computational Fluid Dynamics (CFD), aerodynamicists analyze air pressure variations along the curved surfaces of airplane wings using body-fitted coordinate meshes. Suppose an aerospace engineer isolates a single, non-rectangular mesh cell $R$ adjacent to a wing profile. The cell boundaries are defined by lines tracking the fluid streamlines and normal curves: $y - 2x = 0$, $y - 2x = 3$, $y + x = 1$, and $y + x = 4$. 

The local aerodynamic lifting force density per unit area acting within this cell is modeled by the function $f(x,y) = y - 2x$ (measured in Newtons per square meter, $\text{N/m}^2$). Calculate the total lift force generated strictly across this single mesh element.
**Given Transformation:** $u = y - 2x$ and $v = y + x$.
