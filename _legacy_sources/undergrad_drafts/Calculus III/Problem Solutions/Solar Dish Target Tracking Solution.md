**Problem:** A green energy engineer is designing a parabolic solar concentrating dish that focuses sunlight onto a central thermal collector. The dish surface is parameterized by $\vec{r}(r, \theta) = \langle r\cos\theta, \, r\sin\theta, \, 0.5r^2 \rangle$. Determine the surface normal vector $\vec{n}$ at the physical panel coordinate where $r = 2$ and $\theta = \frac{\pi}{4}$.

#### Solution:

- **Step 1: Compute partial derivatives.**
    
    $$\vec{r}_r = \langle \cos\theta, \, \sin\theta, \, r \rangle$$
    
    $$\vec{r}_\theta = \langle -r\sin\theta, \, r\cos\theta, \, 0 \rangle$$
    
- **Step 2: Compute the general cross product.**
    
    $$\vec{n} = \vec{r}_r \times \vec{r}_\theta = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ \cos\theta & \sin\theta & r \\ -r\sin\theta & r\cos\theta & 0 \end{vmatrix} = \langle -r^2\cos\theta, \, -r^2\sin\theta, \, r \rangle$$
    
- **Step 3: Evaluate at the specific point $r = 2, \theta = \frac{\pi}{4}$.**
    
    $$\vec{n} = \langle -(2)^2\cos(\pi/4), \, -(2)^2\sin(\pi/4), \, 2 \rangle = \langle -4\left(\frac{\sqrt{2}}{2}\right), \, -4\left(\frac{\sqrt{2}}{2}\right), \, 2 \rangle$$
    
    $$\vec{n} = \langle -2\sqrt{2}, \, -2\sqrt{2}, \, 2 \rangle$$
    

#### Meaning of the Answer & Real-Life Application:

The vector $\langle -2\sqrt{2}, \, -2\sqrt{2}, \, 2 \rangle$ defines the exact directional line pointing perfectly perpendicular to the face of the solar dish at that precise location. Solar tracking systems feed this vector directly into motorized control loops. By comparing this normal vector to the incoming sunbeam vector via a dot product, the control algorithms automatically adjust the dish positioning to minimize the angle of incidence, guaranteeing the panel absorbs maximum solar radiation throughout the day.
