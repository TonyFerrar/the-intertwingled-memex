## Step-by-Step Solution

The **disk method** is used to find the volume of a solid of revolution when the region is rotated around an axis and there are no holes in the center of the solid. The cross-sections perpendicular to the axis of rotation are solid circular disks.

### Part 1: Using the Disk Method

#### Step 1: Identify the Radius Function and Limits of Integration

- **Axis of Rotation:** The $x$-axis ($y = 0$).
    
- **Radius $R(x)$:** The distance from the $x$-axis to the curve $y = 2x$.
    
    $$R(x) = 2x$$
    
- **Limits of Integration:** The region starts at the origin ($x = 0$) and ends at the vertical line ($x = 1$). So, $a = 0$ and $b = 1$.
    

#### Step 2: Set Up the Volume Integral

The general formula for the disk method when revolving around the $x$-axis is:

$$V = \int_{a}^{b} \pi [R(x)]^2 \, dx$$

Substitute the limits and the radius function:

$$V = \int_{0}^{1} \pi (2x)^2 \, dx$$

$$V = \int_{0}^{1} \pi (4x^2) \, dx$$

Factor out the constants to simplify the integration:

$$V = 4\pi \int_{0}^{1} x^2 \, dx$$

#### Step 3: Integrate and Evaluate

Integrate $x^2$ using the power rule ($\int x^n \, dx = \frac{x^{n+1}}{n+1}$):

$$\int x^2 \, dx = \frac{x^3}{3}$$

Now, apply the Fundamental Theorem of Calculus from $0$ to $1$:

$$V = 4\pi \left[ \frac{x^3}{3} \right]_{0}^{1}$$

$$V = 4\pi \left( \frac{1^3}{3} - \frac{0^3}{3} \right)$$

$$V = 4\pi \left( \frac{1}{3} \right) = \frac{4\pi}{3}$$

### Part 2: Confirming with the Geometric Cone Formula

When you rotate this triangular region around the $x$-axis, it forms a right circular cone lying on its side.

#### Step 1: Identify the Cone's Dimensions

- **Height ($h$):** The length along the axis of rotation from $x = 0$ to $x = 1$.
    
    $$h = 1 - 0 = 1$$
    
- **Radius ($r$):** The vertical height of the triangle at the widest point ($x = 1$). Plug $x = 1$ into our curve equation $y = 2x$:
    
    $$r = 2(1) = 2$$
    

#### Step 2: Plug Dimensions into the Formula

Use the standard formula for the volume of a cone:

$$V = \frac{1}{3}\pi r^2 h$$

Substitute $r = 2$ and $h = 1$:

$$V = \frac{1}{3}\pi (2)^2 (1)$$

$$V = \frac{1}{3}\pi (4)(1) = \frac{4\pi}{3}$$

### Final Answer

Both the calculus disk method and the geometric formula yield the exact same result. The volume of the generated cone is **$\frac{4\pi}{3}$** (or approximately **4.19**).