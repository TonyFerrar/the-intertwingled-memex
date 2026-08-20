# Skill 1: Describe and Bound General Regions in Polar Coordinates

## 1. Theoretical Notes & Core Concepts

### Why Polar Bounds?

In multi-variable calculus, calculating double integrals over circular, curved, or radially symmetric domains using rectangular coordinates ($x$ and $y$) often leads to highly complicated boundary functions involving square roots (e.g., $y = \pm\sqrt{a^2 - x^2}$). By transitioning to polar coordinates, domains with circular geometry can be described using constant or significantly simpler boundaries.

### Foundations of Polar Bounding

To bound a region in polar coordinates, we must find the limits for two variables:

1. **Radial distance ($r$):** Represents how far the region extends outward from the origin. It is defined by an inner radius and an outer radius:
    
    $$r_{\text{in}}(\theta) \le r \le r_{\text{out}}(\theta)$$
    
2. **Angular sweep ($\theta$):** Represents the counter-clockwise rotation starting from the positive $x$-axis. It is defined by a starting angle and an ending angle:
    
    $$\theta_1 \le \theta \le \theta_2$$
    

### Types of Regions

- **Polar Rectangles:** The simplest type of polar region where both the radial and angular limits are completely constant numbers (e.g., $a \le r \le b$ and $\alpha \le \theta \le \beta$). This describes a concentric ring sector (an _annular sector_).
    
- **General Polar Regions:** Regions where the radius $r$ depends directly on the angle $\theta$. The boundaries are written as functions, $r = f(\theta)$.
    

## 2. Standard Practice Problems

### Problem 1: Bounding an Annular Wedge

**Statement:** Describe the region $R$ in polar coordinates that lies within the first quadrant, bounded inside the circle $x^2 + y^2 = 16$ and outside the circle $x^2 + y^2 = 4$. Set up a double integral representing its area.

#### Solution:

1. **Identify Radial Limits ($r$):** The equations of the circles in polar form are $r^2 = 4 \implies r = 2$ and $r^2 = 16 \implies r = 4$. Thus, the radius ranges from the inner boundary to the outer boundary:
    
    $$2 \le r \le 4$$
    
2. **Identify Angular Limits ($\theta$):** The region is entirely restricted to the first quadrant. The first quadrant begins at the positive $x$-axis ($\theta = 0$) and sweeps up to the positive $y$-axis ($\theta = \frac{\pi}{2}$).
    
    $$0 \le \theta \le \frac{\pi}{2}$$
    
3. **Integral Setup:** Using the polar area element $dA = r \, dr \, d\theta$:
    
    $$\text{Area} = \int_{0}^{\frac{\pi}{2}} \int_{2}^{4} r \, dr \, d\theta$$
    

### Problem 2: Regions Bounded by Lines and Circles

**Statement:** Find the polar bounds for the region $R$ that lies in the first quadrant, inside the circle $x^2 + y^2 = 25$, and below the line $y = \sqrt{3}x$.

#### Solution:

1. **Identify Radial Limits ($r$):** The region starts at the origin ($r = 0$) and extends out to the perimeter of the circle $x^2 + y^2 = 25$, which is $r = 5$.
    
    $$0 \le r \le 5$$
    
2. **Identify Angular Limits ($\theta$):** The region is bounded below by the positive $x$-axis, meaning the lower angular bound is $\theta_1 = 0$. The upper angular bound is defined by the line $y = \sqrt{3}x$. Using the polar identity $\tan\theta = \frac{y}{x}$:
    
    $$\tan\theta = \frac{\sqrt{3}x}{x} = \sqrt{3} \implies \theta = \tan^{-1}(\sqrt{3}) = \frac{\pi}{3}$$
    
    Thus, the angular limits are:
    
    $$0 \le \theta \le \frac{\pi}{3}$$
    
3. **Integral Setup:**
    
    $$\text{Area} = \int_{0}^{\frac{\pi}{3}} \int_{0}^{5} r \, dr \, d\theta$$
    

## 3. Real-Life Engineering Application Problems

### Problem 3: [[Mechanical Engineering – Friction Clutch Plate Contact Zone]]
[[Mechanical Engineering – Friction Clutch Plate Contact Zone Solution]]

### Problem 4: [[Aerospace & Defense Engineering – Radar Tracking Coverage Sector]]
[[Aerospace & Defense Engineering – Radar Tracking Coverage Sector Solution]]
