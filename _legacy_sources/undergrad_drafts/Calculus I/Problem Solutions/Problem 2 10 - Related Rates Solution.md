## Problem Breakdown

Let:
* $V =$ the volume of the basketball (in cubic inches).
* $r =$ the radius of the basketball (in inches).
* $D =$ the diameter of the basketball (in inches), where $D = 2r$.

### Given Values:
* $\frac{dV}{dt} = 3\text{ in}^3/\text{sec}$ (positive because air is being added, so volume is increasing)
* $r = 2\text{ in}$

### Find:
* $\frac{dD}{dt}$ at the moment when $r = 2\text{ in}$.

---

### Step-by-Step Solution

1. **Write the primary equation for the volume of a sphere:**
   $$V = \frac{4}{3}\pi r^3$$

2. **Differentiate both sides with respect to time ($t$):**
   Using the chain rule:
   $$\frac{dV}{dt} = \frac{4}{3}\pi \left(3r^2 \frac{dr}{dt}\right)$$
   $$\frac{dV}{dt} = 4\pi r^2 \frac{dr}{dt}$$

3. **Substitute the known values to find $\frac{dr}{dt}$:**
   $$3 = 4\pi (2)^2 \frac{dr}{dt}$$
   $$3 = 16\pi \frac{dr}{dt}$$
   $$\frac{dr}{dt} = \frac{3}{16\pi}\text{ in/sec}$$

4. **Relate the rate of change of the radius to the diameter:**
   Since diameter is twice the radius ($D = 2r$), we differentiate both sides with respect to $t$:
   $$\frac{dD}{dt} = 2\frac{dr}{dt}$$

5. **Calculate $\frac{dD}{dt}$:**
   $$\frac{dD}{dt} = 2 \left(\frac{3}{16\pi}\right) = \frac{3}{8\pi}\text{ in/sec}$$

**Answer:** The diameter of the basketball is increasing at a rate of **$\frac{3}{8\pi}\text{ in/sec}$** (or approximately **$0.12\text{ in/sec}$**).