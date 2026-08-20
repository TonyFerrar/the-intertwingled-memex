An aerospace engineer is designing a thermal protection tile for a spacecraft re-entering the atmosphere. The temperature distribution $T$ (in degrees Celsius) across a flat region of the tile's surface is modeled by the function:

$$T(x,y) = 800e^{-0.1(x^2 + 2y^2)}$$

where $x$ and $y$ represent spatial coordinates in centimeters measured from the center of the tile.

Find the spatial temperature gradients $\frac{\partial T}{\partial x}$ and $\frac{\partial T}{\partial y}$ at the specific location $(2, 1)$.

#### Solution:

First, find the general partial derivative with respect to $x$ using the chain rule:

$$\frac{\partial T}{\partial x} = 800e^{-0.1(x^2 + 2y^2)} \cdot \frac{\partial}{\partial x}\left[-0.1(x^2 + 2y^2)\right]$$

$$\frac{\partial T}{\partial x} = 800e^{-0.1(x^2 + 2y^2)} \cdot (-0.2x) = -160xe^{-0.1(x^2 + 2y^2)}$$

Now evaluate $\frac{\partial T}{\partial x}$ at $(2,1)$:

$$\frac{\partial T}{\partial x}(2,1) = -160(2)e^{-0.1(2^2 + 2(1)^2)} = -320e^{-0.1(4 + 2)} = -320e^{-0.6} \approx -175.61^\circ\text{C/cm}$$

Next, find the general partial derivative with respect to $y$:

$$\frac{\partial T}{\partial y} = 800e^{-0.1(x^2 + 2y^2)} \cdot \frac{\partial}{\partial y}\left[-0.1(x^2 + 2y^2)\right]$$

$$\frac{\partial T}{\partial y} = 800e^{-0.1(x^2 + 2y^2)} \cdot (-0.4y) = -320ye^{-0.1(x^2 + 2y^2)}$$

Now evaluate $\frac{\partial T}{\partial y}$ at $(2,1)$:

$$\frac{\partial T}{\partial y}(2,1) = -320(1)e^{-0.1(2^2 + 2(1)^2)} = -320e^{-0.6} \approx -175.61^\circ\text{C/cm}$$

#### Meaning of the Answer & Real-Life Application:

The numerical results show that at the coordinate $(2, 1)$, the thermal rates of change are $\frac{\partial T}{\partial x} \approx -175.61^\circ\text{C/cm}$ and $\frac{\partial T}{\partial y} \approx -175.61^\circ\text{C/cm}$.

- **Meaning:** This means that if you move $1\text{ cm}$ in the positive $x$-direction from that point, the temperature drops instantaneously by approximately $175.61^\circ\text{C}$. Similarly, moving $1\text{ cm}$ in the positive $y$-direction drops the temperature by the same amount.
    
- **Application:** In thermodynamics, heat naturally flows from hot areas to cold areas at a rate proportional to the temperature gradient (Fourier's Law of Heat Conduction). Knowing these steep partial derivatives tells the aerospace engineer exactly how fast heat is moving through that specific zone. This allows them to calculate the localized heat flux and determine if the insulation thickness needs to be reinforced at $(2,1)$ to prevent structural failure of the underlying spacecraft hull.
    