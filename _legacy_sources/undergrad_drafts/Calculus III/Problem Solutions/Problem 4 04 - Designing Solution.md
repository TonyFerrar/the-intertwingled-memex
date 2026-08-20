## Given Data

- **Point $M$ (external point):** $(0, 3, 6)$
    
- **Parametric equations of the line:** $x = 1 - t$, $y = 1 + 2t$, $z = 5 + 3t$
    

## 1. Extract Information from the Line

From the parametric equations form $x = x_0 + at$, $y = y_0 + bt$, and $z = z_0 + ct$ , we can easily read off a point on the line and its direction vector:

1. **A point $P$ on the line** (by looking at the constant terms where $t = 0$):
    
    $$P = (1, 1, 5)$$
    
2. **The direction vector $\vec{v}$ along the line** (the coefficients of $t$):
    
    $$\vec{v} = \langle -1, 2, 3 \rangle$$
    

## 2. Find the Vector $\vec{PM}$

Now, find the vector pointing from the line's point $P$ to the external point $M$:

$$\vec{PM} = \langle x_M - x_P, \ y_M - y_P, \ z_M - z_P \rangle$$

$$\vec{PM} = \langle 0 - 1, \ 3 - 1, \ 6 - 5 \rangle = \langle -1, 2, 1 \rangle$$

## 3. Compute the Cross Product $\vec{PM} \times \vec{v}$

Next, find the cross product required by the formula:

$$\vec{PM} \times \vec{v} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ -1 & 2 & 1 \\ -1 & 2 & 3 \end{vmatrix}$$

Expand the determinant along the top row:

$$\vec{PM} \times \vec{v} = \hat{i}(2(3) - 1(2)) - \hat{j}((-1)(3) - 1(-1)) + \hat{k}((-1)(2) - 2(-1))$$

$$\vec{PM} \times \vec{v} = \hat{i}(6 - 2) - \hat{j}(-3 + 1) + \hat{k}(-2 + 2)$$

$$\vec{PM} \times \vec{v} = \hat{i}(4) - \hat{j}(-2) + \hat{k}(0)$$

$$\vec{PM} \times \vec{v} = \langle 4, 2, 0 \rangle$$

## 4. Calculate the Magnitudes

Now compute the magnitudes (lengths) of our cross product vector and the line's direction vector $\vec{v}$:

- **Magnitude of $\vec{PM} \times \vec{v}$:**
    
    $$||\vec{PM} \times \vec{v}|| = \sqrt{4^2 + 2^2 + 0^2} = \sqrt{16 + 4 + 0} = \sqrt{20} = 2\sqrt{5}$$
    
- **Magnitude of $\vec{v}$:**
    
    $$||\vec{v}|| = \sqrt{(-1)^2 + 2^2 + 3^2} = \sqrt{1 + 4 + 9} = \sqrt{14}$$
    

## 5. Calculate the Distance $d$

Substitute these values into the distance formula $d = \frac{||\vec{PM} \times \vec{v}||}{||\vec{v}||}$:

$$d = \frac{\sqrt{20}}{\sqrt{14}} = \sqrt{\frac{20}{14}} = \sqrt{\frac{10}{7}}$$

To rationalize the denominator:

$$d = \frac{\sqrt{10}}{\sqrt{7}} \cdot \frac{\sqrt{7}}{\sqrt{7}} = \frac{\sqrt{70}}{7} \approx 1.20$$

The exact distance between the point and the line is **$\frac{\sqrt{70}}{7}$** (or approximately **$1.20$** units).