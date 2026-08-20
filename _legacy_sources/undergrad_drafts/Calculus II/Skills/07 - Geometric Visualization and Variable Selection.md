# Skill 1: Geometric Visualization and Variable Selection

The core of the cylindrical shell method relies on your ability to look at a 2D region, envision its 3D rotation, and choose the correct variable of integration ($dx$ vs. $dy$). When a region is difficult to rewrite in terms of the opposite variable, the disk or washer method becomes impractical, making the shell method an essential alternative.

## Explanatory Notes: The Core Mechanics

Unlike the disk and washer methods where slicing rectangles are drawn _perpendicular_ to the axis of rotation, the **cylindrical shell method requires slicing rectangles to be drawn _parallel_ to the axis of rotation**.

### 1. The Slicing Rules ($dx$ vs. $dy$)

- **Rotation around a Vertical Axis (like the $y$-axis or $x = L$):** Your thin representative slices must run vertically to stay parallel to the axis. Because the thickness of a vertical slice rests on the $x$-axis ($\Delta x$), you **must integrate with respect to $x$ ($dx$)**.
    
- **Rotation around a Horizontal Axis (like the $x$-axis or $y = L$):** Your thin representative slices must run horizontally to stay parallel to the axis. Because the thickness of a horizontal slice rests on the $y$-axis ($\Delta y$), you **must integrate with respect to $y$ ($dy$)**.
    

### 2. Identifying Boundaries (Height Formulation)

The height of your shell is determined by the length of your slice:

- For **$dx$ integrals**, the height is the upper boundary curve minus the lower boundary curve: $h(x) = f(x) - g(x)$.
    
- For **$dy$ integrals**, the height is the rightmost boundary curve minus the leftmost boundary curve: $h(y) = f(y) - g(y)$.
    

### 3. Finding Limits of Integration

The limits of integration span across the width of the original region, tracking the movement of the slices. If the boundary intersection points are not explicitly given, you must set the boundary equations equal to each other to solve for the intersection coordinates.

## Sample Problems

### Sample Problem 1: Vertical Axis Rotation ($dx$)

**Problem:** The region enclosed by the parabola $y = 4x - x^2$ and the $x$-axis ($y = 0$) is rotated about the $y$-axis. Set up and evaluate the integral for the volume of the solid.

**Solution:**

1. **Visualize and Select Variable:** The axis of rotation is vertical ($y$-axis). Slicing parallel means drawing vertical lines, so we integrate with respect to $x$ ($dx$).
    
2. **Find Limits:** Find where $y = 4x - x^2$ intersects the $x$-axis ($y = 0$):
    
    $$4x - x^2 = 0 \implies x(4 - x) = 0 \implies x = 0 \text{ and } x = 4$$
    
    Our limits are $a = 0$ and $b = 4$.
    
3. **Identify Shell Components:**
    
    - $\text{Radius } r(x) = x$ (distance from $y$-axis to slice)
        
    - $\text{Height } h(x) = (4x - x^2) - 0 = 4x - x^2$
        
4. **Set Up and Integrate:**
    
    $$V = \int_{0}^{4} 2\pi \cdot x \cdot (4x - x^2) \, dx$$
    
    $$V = 2\pi \int_{0}^{4} (4x^2 - x^3) \, dx$$
    
    $$V = 2\pi \left[ \frac{4x^3}{3} - \frac{x^4}{4} \right]_{0}^{4}$$
    
    $$V = 2\pi \left( \frac{4(64)}{3} - \frac{256}{4} \right) = 2\pi \left( \frac{256}{3} - 64 \right) = 2\pi \left( \frac{64}{3} \right) = \frac{128\pi}{3}$$
    

### Sample Problem 2: Horizontal Axis Rotation ($dy$)

**Problem:** The region bounded by $x = y^2$, the $y$-axis ($x = 0$), and the horizontal line $y = 2$ is rotated about the $x$-axis. Set up and evaluate the integral for the volume of the solid.

**Solution:**

1. **Visualize and Select Variable:** The axis of rotation is horizontal ($x$-axis). Slicing parallel means drawing horizontal lines, so we integrate with respect to $y$ ($dy$).
    
2. **Find Limits:** The region is bounded vertically between the $x$-axis ($y = 0$) and the line $y = 2$. Thus, our limits are $c = 0$ and $d = 2$.
    
3. **Identify Shell Components:**
    
    - $\text{Radius } r(y) = y$ (distance from $x$-axis to horizontal slice)
        
    - $\text{Height } h(y) = \text{Right} - \text{Left} = y^2 - 0 = y^2$
        
4. **Set Up and Integrate:**
    
    $$V = \int_{0}^{2} 2\pi \cdot y \cdot (y^2) \, dy$$
    
    $$V = 2\pi \int_{0}^{2} y^3 \, dy$$
    
    $$V = 2\pi \left[ \frac{y^4}{4} \right]_{0}^{2} = 2\pi \left( \frac{16}{4} - 0 \right) = 8\pi$$
    

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Aerospace Engineering (Jet Engine Component Profile)]]
[[Aerospace Engineering (Jet Engine Component Profile) Solution]]


### Engineering Problem 2: [[Civil Engineering (Industrial Wastewater Funnel)]]
[[Civil Engineering (Industrial Wastewater Funnel) Solution]]
