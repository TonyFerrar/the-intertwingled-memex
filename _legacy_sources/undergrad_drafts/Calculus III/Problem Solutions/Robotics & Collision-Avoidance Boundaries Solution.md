A robotic manufacturing arm operates inside an automated assembly cell next to a tilted conveyor belt. To prevent the robotic arm from crashing into the conveyor belt, a safety engineer must map the conveyor belt's surface as a safety zone boundary plane in the robot's control software. Instruments show that the conveyor surface is perpendicular to a calibration vector $\vec{n} = \langle 1, -2, 2 \rangle$ and passes through a fixed structural anchor coordinate at $P(3, 1, 4)$ meters relative to the robot's base origin.

Find the equation of the safety boundary plane.

#### Solution
1. Extract parameters: $\vec{n} = \langle 1, -2, 2 \rangle \implies a=1, b=-2, c=2$. Point $P(3, 1, 4) \implies x_0=3, y_0=1, z_0=4$.
2. Apply point-normal form:
   $$1(x - 3) - 2(y - 1) + 2(z - 4) = 0$$
3. Expand and isolate constants:
   $$x - 3 - 2y + 2 + 2z - 8 = 0$$
   $$x - 2y + 2z - 9 = 0$$
   $$x - 2y + 2z = 9$$

#### Meaning of the Answer & Real-Life Application
* **Meaning:** The linear algebraic equation $x - 2y + 2z = 9$ mathematically defines every single physical coordinate coordinate $(x,y,z)$ that lies exactly on the conveyor belt's surface. 
* **Real-Life Application:** The robot's trajectory tracking software continuously monitors the coordinate of its moving tip, $T(x_t, y_t, z_t)$, and plugs it into the function $f(x,y,z) = x - 2y + 2z - 9$. If the output value approaches $0$, the tip is dangerously close to hitting the conveyor surface. If the value becomes negative, a "Safe Zone" collision violation is triggered, instantly engaging emergency braking systems to preserve multi-million dollar machinery.
