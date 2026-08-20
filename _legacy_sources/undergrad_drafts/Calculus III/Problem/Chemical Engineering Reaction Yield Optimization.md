A chemical engineer is modeling the mass distribution of an unstable intermediate compound inside a highly specialized batch reactor. The spatial configuration of the mixture zone is bounded by the inequalities $0 \le x \le 2$, $0 \le y \le x$, and $0 \le z \le x - y$. The density concentration profile of the compound is given by $f(x,y,z) = 1$. The total mass integral was initially formulated in the order $dz \, dy \, dx$ as:

$$M = \int_{0}^{2} \int_{0}^{x} \int_{0}^{x-y} 1 \, dz \, dy \, dx$$

To integrate this into a automated process control loop that monitors properties dynamically across the front viewing port, rewrite this integral into the order $dx \, dz \, dy$ and evaluate the volume.