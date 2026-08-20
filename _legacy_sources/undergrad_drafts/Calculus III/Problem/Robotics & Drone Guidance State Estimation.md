An autonomous quadcopter drone's guidance computer must constantly calculate its ideal engine thrust percentage ($T$) using a complex aerodynamic formula based on its forward pitch angle ($x$ in radians) and current altitude velocity ($y$ in m/s). The true physical equation modeled by engineers is $T(x,y) = \ln(x^2 + e^y)$. 

During stable hovering flight, the drone operates at a clean steady-state base point of $(0, 1)$, giving an exact baseline thrust of $T(0,1) = \ln(0^2 + e^1) = \ln(e) = 1$ (or $100\%$). Suddenly, a gust of wind slightly destabilizes the drone to a new messy state of $(0.1, 1.05)$. 

Because running logarithms on a microchip takes too many processor clock cycles, the drone's flight computer uses a **linear approximation** at $(0,1)$ to quickly calculate the new required thrust. Estimate $T(0.1, 1.05)$ using linearization.
