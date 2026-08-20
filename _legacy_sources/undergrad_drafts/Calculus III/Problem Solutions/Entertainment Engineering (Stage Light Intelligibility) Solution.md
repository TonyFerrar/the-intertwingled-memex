An entertainment engineer is programming an automated spotlight array for a dynamic theater stage. The light intensity (measured in lux) across the main performance floor grid is modeled by the function $I(x,y) = \frac{4000}{x^2 + y^2 + 1}$. An actor runs away from a coordinate position $P(3, 4)$ traveling directly towards a stage prop positioned at $Q(9, 12)$. Compute the directional derivative of the light intensity as the actor leaves point $P$.

#### Solution:

1. Find and evaluate the gradient of $I(x,y) = 4000(x^2 + y^2 + 1)^{-1}$ at $P(3,4)$:
    
    $$I_x = -4000(x^2+y^2+1)^{-2} \cdot (2x) = \frac{-8000x}{(x^2+y^2+1)^2} \quad \implies \quad I_x(3,4) = \frac{-8000(3)}{(9+16+1)^2} = \frac{-24000}{676} \approx -35.50$$
    
    $$I_y = -4000(x^2+y^2+1)^{-2} \cdot (2y) = \frac{-8000y}{(x^2+y^2+1)^2} \quad \implies \quad I_y(3,4) = \frac{-8000(4)}{(9+16+1)^2} = \frac{-32000}{676} \approx -47.34$$
    
    $$\nabla I(3,4) = \left\langle -\frac{24000}{676}, \, -\frac{32000}{676} \right\rangle$$
    
2. Determine and normalize the actor's motion vector $\vec{v} = \overrightarrow{PQ}$:
    
    $$\vec{v} = \langle 9 - 3, \, 12 - 4 \rangle = \langle 6, \, 8 \rangle$$
    
    $$|\vec{v}| = \sqrt{6^2 + 8^2} = 10 \quad \implies \quad \vec{u} = \left\langle \frac{6}{10}, \, \frac{8}{10} \right\rangle = \langle 0.6, \, 0.8 \rangle$$
    
3. Take the dot product:
    
    $$D_u I(3,4) = \left\langle -\frac{24000}{676}, \, -\frac{32000}{676} \right\rangle \cdot \langle 0.6, \, 0.8 \rangle = \frac{-14400 - 25600}{676} = -\frac{40000}{676} \approx -59.17$$
    

#### Engineering Meaning and Real-Life Application:

- **Meaning of the Answer:** The value of $-59.17\text{ lux/meter}$ reveals that as the performer runs from point $P$ toward point $Q$, they will experience an immediate, sharp drop-off in illuminated brightness at a rate of roughly 59.2 lux for every meter they travel along that vector.
    
- **Real-Life Engineering Application:** Entertainment and lighting design engineers use directional derivatives to manage human visual perception. If an actor moves across a stage and the light intensity drops off too quickly ($D_u I$ is excessively negative), they will suddenly disappear into a dark shadow, making it difficult for the audience or cameras to track them. By computing this rate of change, the engineer can program automated dimmer boards to dynamically ramp up the brightness of adjacent spotlights along the vector $\langle 6, 8 \rangle$, compensating for the calculated loss and maintaining a perfectly uniform appearance.