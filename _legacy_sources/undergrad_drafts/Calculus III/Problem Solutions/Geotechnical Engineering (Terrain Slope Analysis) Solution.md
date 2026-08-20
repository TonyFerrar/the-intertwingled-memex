A geotechnical engineer is assessing the ground stability of a hillside before clearing land for a building foundation. The elevation $E$ (in meters) of the surveyed landscape is modeled by the function:

$$E(x,y) = 50 - 0.05x^3 + 0.1xy + 0.02y^2$$

where $x$ is the horizontal distance east and $y$ is the horizontal distance north (both measured in meters from a reference survey marker).

Evaluate and determine the slopes $\frac{\partial E}{\partial x}$ and $\frac{\partial E}{\partial y}$ at the proposed building center point $(4, 10)$.

#### Solution:

1. **Find the general partial derivative with respect to $x$:**
    
    $$\frac{\partial E}{\partial x} = \frac{\partial}{\partial x}\left(50 - 0.05x^3 + 0.1xy + 0.02y^2\right)$$
    
    $$\frac{\partial E}{\partial x} = -0.15x^2 + 0.1y$$
    
2. **Evaluate $\frac{\partial E}{\partial x}$ at $(4,10)$:**
    
    $$\left.\left(\frac{\partial E}{\partial x}\right)\right|_{(4,10)} = -0.15(4)^2 + 0.1(10) = -0.15(16) + 1 = -2.4 + 1 = -1.4\text{ m/m}$$
    
3. **Find the general partial derivative with respect to $y$:**
    
    $$\frac{\partial E}{\partial y} = \frac{\partial}{\partial y}\left(50 - 0.05x^3 + 0.1xy + 0.02y^2\right)$$
    
    $$\frac{\partial E}{\partial y} = 0.1x + 0.04y$$
    
4. **Evaluate $\frac{\partial E}{\partial y}$ at $(4,10)$:**
    
    $$\left.\left(\frac{\partial E}{\partial y}\right)\right|_{(4,10)} = 0.1(4) + 0.04(10) = 0.4 + 0.4 = 0.8\text{ m/m}$$
    

#### Meaning of the Answer & Real-Life Application:

- **Meaning:** At the building location point $(4, 10)$, the terrain drops $1.4\text{ meters}$ vertically for every $1\text{ meter}$ traveled eastward ($\frac{\partial E}{\partial x} = -1.4$). Conversely, the terrain climbs $0.8\text{ meters}$ vertically for every $1\text{ meter}$ traveled northward ($\frac{\partial E}{\partial y} = 0.8$).
    
- **Application:** Civil and geotechnical regulations place strict constraints on the maximum permissible slopes for safe building construction to prevent structural sliding or soil failures. By finding these precise slopes from the partial derivatives, the engineer identifies that the eastward drop is extremely steep ($140\%$ grade). This quantitative evaluation tells the civil engineer that the site cannot be safely built upon without extensive earth grading, excavation, and the construction of heavy concrete retaining walls to counteract the high lateral soil pressure caused by the hillside's steepness.