Here is the step-by-step solution for **Skill 2 Demo** using the distance formula provided in the activity.

## Given Data

- **Point $M$ (anywhere in space):** $(1, 1, 3)$
    
- **Symmetric equation of the line:** $\frac{x-3}{4} = \frac{y+1}{2} = z-3$
    

## 1. Extract Information from the Line

From the symmetric equation form $\frac{x-x_0}{a} = \frac{y-y_0}{b} = \frac{z-z_0}{c}$, we can extract:

1. **A point $P$ on the line:** $(3, -1, 3)$
    
2. **The direction vector $\vec{v}$ along the line:** $\langle 4, 2, 1 \rangle$ (note that $z-3$ is equivalent to $\frac{z-3}{1}$)
    

## 2. Find the Vector $\vec{PM}$

Now, find the vector pointing from the line point $P$ to the external point $M$:

$$\vec{PM} = \langle x_M - x_P, \ y_M - y_P, \ z_M - z_P \rangle$$

$$\vec{PM} = \langle 1 - 3, \ 1 - (-1), \ 3 - 3 \rangle = \langle -2, 2, 0 \rangle$$

## 3. Compute the Cross Product $\vec{PM} \times \vec{v}$

The formula requires the cross product of $\vec{PM}$ and the direction vector $\vec{v}$:

$$\vec{PM} \times \vec{v} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ -2 & 2 & 0 \\ 4 & 2 & 1 \end{vmatrix}$$

Expand the determinant by the top row:

$$\vec{PM} \times \vec{v} = \hat{i}(2(1) - 0(2)) - \hat{j}((-2)(1) - 0(4)) + \hat{k}((-2)(2) - 2(4))$$

$$\vec{PM} \times \vec{v} = \hat{i}(2) - \hat{j}(-2) + \hat{k}(-4 - 8)$$

$$\vec{PM} \times \vec{v} = \langle 2, 2, -12 \rangle$$

## 4. Calculate the Magnitudes

Now find the magnitudes (lengths) of both the cross product vector and the direction vector $\vec{v}$:

- **Magnitude of $\vec{PM} \times \vec{v}$:**
    
    $$||\vec{PM} \times \vec{v}|| = \sqrt{2^2 + 2^2 + (-12)^2} = \sqrt{4 + 4 + 144} = \sqrt{152}$$
    
    $$\sqrt{152} = \sqrt{4 \times 38} = 2\sqrt{38}$$
    
- **Magnitude of $\vec{v}$:**
    
    $$||\vec{v}|| = \sqrt{4^2 + 2^2 + 1^2} = \sqrt{16 + 4 + 1} = \sqrt{21}$$
    

## 5. Calculate the Distance $d$

Substitute these magnitudes into the distance formula $d = \frac{||\vec{PM} \times \vec{v}||}{||\vec{v}||}$:

$$d = \frac{2\sqrt{38}}{\sqrt{21}}$$

To write it under a single radical or rationalize it:

$$d = 2\sqrt{\frac{38}{21}} = \frac{2\sqrt{798}}{21} \approx 2.69$$

The exact distance between the point and the line is **$\frac{2\sqrt{798}}{21}$** (or approximately **$2.69$** units).