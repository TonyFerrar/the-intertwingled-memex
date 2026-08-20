A regional environmental protection agency models the topographic elevation (in meters) of a high-risk chemical storage valley using the coordinate field function:

$$h(x,y) = 300 - 0.05x^2 - 0.1y^2$$

A container leak occurs at the coordinate position $(10, 5)$.

1. Determine the gradient vector $\nabla h$ at the site of the leak.
    
2. Provide a vector representing the immediate physical path the liquid contaminant will take.
    

#### Solution:

1. Find the gradient components:
    
    $$h_x = -0.1x \quad \implies \quad h_x(10,5) = -0.1(10) = -1$$
    
    $$h_y = -0.2y \quad \implies \quad h_y(10,5) = -0.2(5) = -1$$
    
    $$\nabla h(10,5) = \langle -1, \, -1 \rangle$$
    
2. Liquid naturally flows downhill via the path of **steepest descent**, which is designated by $-\nabla h$:
    
    $$\vec{v}_{\text{flow}} = -\langle -1, \, -1 \rangle = \langle 1, \, 1 \rangle$$
    

#### Engineering Meaning and Real-Life Application:

- **Meaning of the Answer:** The gradient vector $\nabla h = \langle -1, -1 \rangle$ points toward the direction of steepest ascent (uphill, toward the northwest on this coordinate grid). Consequently, its exact negative, $\langle 1, 1 \rangle$, dictates the path of steepest descent. The magnitude of this vector is $|\vec{v}_{\text{flow}}| = \sqrt{1^2 + 1^2} = \sqrt{2} \approx 1.41$, showing an instantaneous vertical drop of 1.41 meters per meter moved horizontally.
    
- **Real-Life Engineering Application:** Environmental engineers use this vector to build predictive fluid containment models. By knowing the precise tracking vector $\langle 1, 1 \rangle$, emergency response teams can determine exactly where to deploy earthen berms, absorption barriers, or interceptor trenches downstream to capture the chemical before it compromises nearby public groundwater reservoirs.
    