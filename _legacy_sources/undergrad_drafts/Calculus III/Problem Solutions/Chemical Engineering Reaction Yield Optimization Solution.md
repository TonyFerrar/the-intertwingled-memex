A chemical engineer is modeling the mass distribution of an unstable intermediate compound inside a highly specialized batch reactor. The spatial configuration of the mixture zone is bounded by the inequalities $0 \le x \le 2$, $0 \le y \le x$, and $0 \le z \le x - y$. The density concentration profile of the compound is given by $f(x,y,z) = 1$. The total mass integral was initially formulated in the order $dz \, dy \, dx$ as:

$$M = \int_{0}^{2} \int_{0}^{x} \int_{0}^{x-y} 1 \, dz \, dy \, dx$$

To integrate this into a automated process control loop that monitors properties dynamically across the front viewing port, rewrite this integral into the order $dx \, dz \, dy$ and evaluate the volume.

#### Solution:

**Step 1: Extract the original inequalities and find boundaries**

- Inner ($z$): $0 \le z \le x - y \implies x = y + z$
    
- Middle ($y$): $0 \le y \le x \implies y = x$
    
- Outer ($x$): $0 \le x \le 2$
    

**Step 2: Establish the new inner $x$ limits**

Isolating $x$ from the bounding plane equation gives $x = y + z$. Because the solid extends outward up to the maximum cutoff wall at $x = 2$, the variable $x$ is bounded below by the sloped plane and above by the constant wall:

$$y + z \le x \le 2$$

**Step 3: Establish the outer projection bounds ($yz$-plane)**

Setting the inner lower bound equal to the upper bound ($x_{\text{min}} = x_{\text{max}}$) defines the perimeter of the shadow projection on the $yz$-plane:

$$y + z = 2 \implies z = 2 - y$$

Since $y \ge 0$ and $z \ge 0$, the $yz$ shadow is a triangle bounded by the coordinate axes and the line $z = 2 - y$.

- For a fixed $y$, $z$ ranges from $0$ up to the line: $0 \le z \le 2 - y$.
    
- The absolute range for the outer variable $y$ is from $0$ to the intercept: $0 \le y \le 2$.
    

**Step 4: Set up and evaluate the rewritten integral**

$$M = \int_{0}^{2} \int_{0}^{2-y} \int_{y+z}^{2} 1 \, dx \, dz \, dy$$

$$\text{Inner: } \int_{y+z}^{2} 1 \, dx = 2 - y - z$$

$$\text{Middle: } \int_{0}^{2-y} (2 - y - z) \, dz = \left[ (2-y)z - \frac{1}{2}z^2 \right]_{0}^{2-y} = \frac{1}{2}(2-y)^2$$

$$\text{Outer: } \int_{0}^{2} \frac{1}{2}(2-y)^2 \, dy = \left[ -\frac{1}{6}(2-y)^3 \right]_{0}^{2} = 0 - \left(-\frac{1}{6}(2)^3\right) = \frac{8}{6} = \frac{4}{3} \text{ m}^3$$

#### Meaning of the Answer & Real-Life Application:

The resulting volume of the reaction zone is exactly $\frac{4}{3}\text{ m}^3$ ($\approx 1.33\text{ m}^3$). In chemical plant safety and automation, rearranging the integration bounds into the $dx\,dz\,dy$ layout allows sensor algorithms to scan the reactor starting from the front viewing optical plane ($x$) rather than requiring internal vertical height probes ($z$). By computing this exact volume dynamically, control software can cross-reference it with chemical feed rates to prevent pressure buildup, optimize reactant concentrations, and guarantee the mixture does not reach explosive limits.