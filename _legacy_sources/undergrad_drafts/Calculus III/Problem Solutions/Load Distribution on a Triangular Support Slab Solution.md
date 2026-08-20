A civil engineer is inspecting a triangular concrete foundation slab that distributes structural weight down to an underground pylon array. The slab's boundaries form a right triangle with vertices at $(0,0)$, $(4,0)$, and $(0,4)$ (measured in meters). The structural bending moment stress $M(x, y)$ (in kilonewton-meters) across the slab is modeled by:

$$M(x, y) = xy - x - y + 5$$

Determine the absolute maximum and minimum bending stress candidates across the slab to ensure the concrete thickness can handle the load without cracking.

#### Solution:

**Step 1: Find interior stress peaks (Critical Points).**

$$\frac{\partial M}{\partial x} = y - 1 = 0 \implies y = 1$$

$$\frac{\partial M}{\partial y} = x - 1 = 0 \implies x = 1$$

The point **$(1, 1)$** falls inside the triangular slab boundary region.

- Evaluate: $M(1, 1) = (1)(1) - 1 - 1 + 5 = 4\text{ kN}\cdot\text{m}$
    

**Step 2: Check the three boundary edges.**

- **Edge 1: Bottom Edge ($y = 0$ for $0 \le x \le 4$)**
    
    Substitute $y = 0$: $M(x, 0) = -x + 5$
    
    Derivative: $-1 \neq 0$. No critical points on this edge.
    
- **Edge 2: Left Edge ($x = 0$ for $0 \le y \le 4$)**
    
    Substitute $x = 0$: $M(0, y) = -y + 5$
    
    Derivative: $-1 \neq 0$. No critical points on this edge.
    
- **Edge 3: Hypotenuse Sloped Boundary ($y = -x + 4$ for $0 \le x \le 4$)**
    
    Substitute $y$: $M(x, -x+4) = x(-x + 4) - x - (-x + 4) + 5 = -x^2 + 4x - x + x - 4 + 5 = -x^2 + 4x + 1$
    
    Take the derivative with respect to $x$ and set to zero:
    
    $$-2x + 4 = 0 \implies x = 2$$
    
    Find $y$: $y = -2 + 4 = 2$. This gives the boundary point **$(2, 2)$**.
    
    - Evaluate: $M(2, 2) = -(2)^2 + 4(2) + 1 = -4 + 8 + 1 = 5\text{ kN}\cdot\text{m}$
        

**Step 3: Evaluate the three corner vertices.**

1. **At $(0, 0)$**: $M(0, 0) = (0)(0) - 0 - 0 + 5 = 5\text{ kN}\cdot\text{m}$
    
2. **At $(4, 0)$**: $M(4, 0) = (4)(0) - 4 - 0 + 5 = 1\text{ kN}\cdot\text{m}$
    
3. **At $(0, 4)$**: $M(0, 4) = (0)(4) - 0 - 4 + 5 = 1\text{ kN}\cdot\text{m}$
    

#### Real-Life Meaning of the Answer:

- **Absolute Maximum Stress:** **$5\text{ kN}\cdot\text{m}$**, occurring at the vertex **$(0, 0)$** and perfectly centered along the sloped boundary edge at **$(2, 2)$**.
    
- **Absolute Minimum Stress:** **$1\text{ kN}\cdot\text{m}$**, occurring at the outer vertices **$(4, 0)$** and **$(0, 4)$**.
    

For the civil engineer, these values dictate the structural reinforcement layouts. The absolute minimum load stress happens at the outer narrow tips of the triangle ($(4,0)$ and $(0,4)$), meaning these areas require less internal steel rebar reinforcement.

However, the structural design must be built to safely handle the maximum stress of $5\text{ kN}\cdot\text{m}$. Because this maximum occurs concurrently at the origin corner $(0,0)$ and dead-center along the hypotenuse edge $(2,2)$, the engineer must add heavy-gauge steel rebar meshing and thicker concrete pouring exactly at these two target zones to prevent the slab from shearing or cracking under high mechanical loads.