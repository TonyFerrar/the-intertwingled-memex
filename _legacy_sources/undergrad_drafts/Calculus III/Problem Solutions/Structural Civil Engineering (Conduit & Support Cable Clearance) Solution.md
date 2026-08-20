A high-tension steel stabilization cable anchors a section of an open-air building terminal. The cable forms a line mapped by the parametric path $x = 2 + t$, $y = -1 + 2t$, $z = 3 - 2t$ (in meters). A high-voltage main electrical line passes nearby and is treated as a point target located at $M = (5, 5, 2)$.

1. Calculate the shortest distance from the electrical wire point to the steel structural cable.
    

#### Solution

1. **Identify elements from the cable's parametric path:**
    
    - Point on the cable line ($P$): $(2, -1, 3)$
        
    - Direction vector of the cable ($\vec{v}$): $\langle 1, 2, -2 \rangle$
        
2. **Form the vector $\vec{PM}$ pointing to the electrical line:**
    
    $$\vec{PM} = \langle 5 - 2, \ 5 - (-1), \ 2 - 3 \rangle = \langle 3, 6, -1 \rangle$$
    
3. **Compute the cross product $\vec{PM} \times \vec{v}$:**
    
    $$\vec{PM} \times \vec{v} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 3 & 6, & -1 \\ 1 & 2 & -2 \end{vmatrix}$$
    
    $$\vec{PM} \times \vec{v} = \hat{i}(-12 - (-2)) - \hat{j}(-6 - (-1)) + \hat{k}(6 - 6)$$
    
    $$\vec{PM} \times \vec{v} = -10\hat{i} + 5\hat{j} + 0\hat{k} = \langle -10, 5, 0 \rangle$$
    
4. **Calculate magnitudes and find distance $d$:**
    
    $$||\vec{PM} \times \vec{v}|| = \sqrt{(-10)^2 + 5^2 + 0^2} = \sqrt{100 + 25} = \sqrt{125} = 5\sqrt{5}$$
    
    $$||\vec{v}|| = \sqrt{1^2 + 2^2 + (-2)^2} = \sqrt{1 + 4 + 4} = \sqrt{9} = 3$$
    
    $$d = \frac{5\sqrt{5}}{3} \approx 3.73 \text{ meters}$$
    

#### Real-Life Engineering Meaning & Application

- **Meaning of the answer:** The distance of $3.73$ meters defines the minimum spatial separation between the high-voltage wire and the metallic stabilizing structural cable.
    
- **Engineering Application:** Electrical and building safety codes demand rigorous minimum air gaps between high-voltage lines and conductive structural steel to prevent dangerous electrical arcing (which can cause fires or structural shock hazards). A calculated clearance of $3.73$ meters confirms to the civil engineer that the layout satisfies standard regulatory electrical clearance protocols before building inspection sign-offs.