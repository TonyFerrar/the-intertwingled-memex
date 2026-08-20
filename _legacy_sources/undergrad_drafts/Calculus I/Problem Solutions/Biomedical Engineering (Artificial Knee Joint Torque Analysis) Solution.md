**Context:** Biomedical engineers design artificial joint replacements, such as robotic knees or prosthetic limbs. Mechanical rotational force around a pivot point is called **torque** ($\vec{\tau}$), and it is calculated as the cross product of the lever-arm displacement vector $\vec{r}$ and the applied physical force vector $\vec{F}$ ($\vec{\tau} = \vec{r} \times \vec{F}$). Suppose during a physical therapy gate trial, a patient's lower leg bone exerts a displacement vector of $\vec{r} = \langle 0.4, 0.1, 0 \rangle\text{ meters}$ relative to the knee joint center. The force vector applied by a major tendon at that moment is $\vec{F} = \langle -100, 500, 0 \rangle\text{ Newtons}$.

**Problem:** Calculate the resulting torque vector $\vec{\tau}$ acting around the artificial knee joint.

**Solution:**

1. Construct the cross product matrix determinant:
    
    $$\vec{\tau} = \vec{r} \times \vec{F} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 0.4 & 0.1 & 0 \\ -100 & 500 & 0 \end{vmatrix}$$
    
2. Expand the matrix components:
    
    - $\hat{i}\text{-component}: (0.1)(0) - (0)(500) = 0$
        
    - $\hat{j}\text{-component}: -[(0.4)(0) - (0)(-100)] = 0$
        
    - $\hat{k}\text{-component}: (0.4)(500) - (0.1)(-100) = 200 - (-10) = 210$
        

In vector component form: $\vec{\tau} = \langle 0, 0, 210 \rangle\text{ N}\cdot\text{m}$.

**Meaning of the Answer & Real-Life Application:**

- **$\vec{\tau} = \langle 0, 0, 210 \rangle\text{ N}\cdot\text{m}$** shows that the turning force has a magnitude of $210\text{ Newton-meters}$ and acts purely along the $z$-axis.
    
- This means the knee is experiencing an active rotational movement pushing forward and backward (flexion/extension) rather than twisting sideways, which would strip or break the joint components. Biomedical engineers use this calculated torque value to stress-test materials (like titanium or carbon fiber), ensuring the prosthetic design can repeatedly withstand $210\text{ N}\cdot\text{m}$ of rotational force without shearing or failing during daily walking cycles.