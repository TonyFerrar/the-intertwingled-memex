A highway construction crew is grading a hill section whose topography is represented by $z = h(x,y) = 80 - 0.02x^2 - 0.01y^3$ (all dimensions in meters). Heavy machinery is currently stationed at coordinate point $P(10, 4)$. To navigate around a rock outcropping, the supervisor wants to drive the bulldozer in the vector direction $\vec{v} = \langle 12, 5 \rangle$. Calculate the directional derivative in this path.

#### Solution:

1. Evaluate the gradient vector at $P(10, 4)$:
    
    $$h_x = -0.04x \quad \implies \quad h_x(10,4) = -0.04(10) = -0.4$$
    
    $$h_y = -0.03y^2 \quad \implies \quad h_y(10,4) = -0.03(4)^2 = -0.48$$
    
    $$\nabla h(10, 4) = \langle -0.4, \, -0.48 \rangle$$
    
2. Normalize the machine's movement vector $\vec{v} = \langle 12, 5 \rangle$:
    
    $$|\vec{v}| = \sqrt{12^2 + 5^2} = \sqrt{169} = 13 \quad \implies \quad \vec{u} = \left\langle \frac{12}{13}, \, \frac{5}{13} \right\rangle$$
    
3. Compute the directional derivative:
    
    $$D_u h(10,4) = \langle -0.4, \, -0.48 \rangle \cdot \left\langle \frac{12}{13}, \, \frac{5}{13} \right\rangle = \frac{-4.8 - 2.4}{13} = -\frac{7.2}{13} \approx -0.554$$
    

#### Engineering Meaning and Real-Life Application:

- **Meaning of the Answer:** The scalar value $-0.554$ signifies that moving in the direction $\langle 12, 5 \rangle$ results in an instantaneous elevation change rate of $-0.554\text{ meters}$ vertically per 1 horizontal meter traveled. The negative sign denotes that the bulldozer is moving downhill.
    
- **Real-Life Engineering Application:** Civil engineers match directional derivative values against heavy machinery operating specifications. Standard tracked bulldozers have maximum safe grade limitations (e.g., they cannot safely operate on descents steeper than a $30\%$ grade or a slope of $-0.30$ without risking a rollover or losing braking traction). Because this calculated slope value ($-0.554 \implies 55.4\%$ slope) exceeds safety thresholds, a civil engineer would deny this route and redesign the path to travel along a line with a smaller directional derivative.
    