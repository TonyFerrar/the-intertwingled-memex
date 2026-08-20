## Problem Breakdown

Let:
* $V =$ the volume of the cone-shaped balloon (in cubic centimeters).
* $r =$ the radius of the base of the cone (in centimeters).
* $h =$ the height of the cone (in centimeters).

### Given Values:
* $\frac{dV}{dt} = -20\text{ cm}^3/\text{sec}$ (negative because air is escaping, so volume is decreasing)
* $h = 3r$ (the height is always three times the radius)
* $r = 4\text{ cm}$

### Find:
* $\frac{dr}{dt}$ at the moment when $r = 4\text{ cm}$.

---

### Step-by-Step Solution

1. **Write the primary equation for the volume of a right circular cone:**
   $$V = \frac{1}{3}\pi r^2 h$$

2. **Substitute $h = 3r$ into the volume formula to eliminate $h$:**
   Since we want to find $\frac{dr}{dt}$, rewriting the equation completely in terms of $r$ will save us from using the product rule.
   $$V = \frac{1}{3}\pi r^2 (3r)$$
   $$V = \pi r^3$$

3. **Differentiate both sides with respect to time ($t$):**
   $$\frac{dV}{dt} = 3\pi r^2 \frac{dr}{dt}$$

4. **Substitute the known values to solve for $\frac{dr}{dt}$:**
   $$-20 = 3\pi (4)^2 \frac{dr}{dt}$$
   $$-20 = 3\pi (16) \frac{dr}{dt}$$
   $$-20 = 48\pi \frac{dr}{dt}$$
   $$\frac{dr}{dt} = \frac{-20}{48\pi} = -\frac{5}{12\pi}\text{ cm/sec}$$

**Answer:** The radius of the base of the balloon is decreasing at a rate of **$\frac{5}{12\pi}\text{ cm/sec}$** (or approximately **$0.133\text{ cm/sec}$**).