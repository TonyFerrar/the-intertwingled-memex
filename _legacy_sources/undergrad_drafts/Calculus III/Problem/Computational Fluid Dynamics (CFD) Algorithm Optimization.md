A computational fluid dynamics software package needs to calculate the mass accumulation rate within a section of a turbine blade cooling passage. The geometry is bounded by $0 \le x \le 1/2$, $0 \le y \le 1/2$, and $0 \le z \le 1 - 2x + 2y$. The internal routine attempts to solve the volume using a traditional vertical stack order ($dz \, dy \, dx$):

$$V = \int_{0}^{1/2} \int_{0}^{1/2} \int_{0}^{1-2x+2y} 1 \, dz \, dy \, dx$$

Because the boundary wall condition creates an algorithmic singularity for parallel GPU threading along the $z$-axis, the programmer must change the integration order to $dx \, dz \, dy$. Rewrite the integral to optimize the software's execution path.
