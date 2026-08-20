## Problem Breakdown

Let:
* $x =$ the distance from the base of the ladder to the house (in feet).
* $y =$ the distance from the top of the ladder to the ground along the wall (in feet).
* $\theta =$ the angle between the ladder and the ground (in radians).
* $L =$ the length of the ladder ($L = 25\text{ ft}$, which is constant, so $\frac{dL}{dt} = 0$).



### Given Values:
* $x = 12\text{ ft}$
* $\frac{dx}{dt} = -1\text{ ft/sec}$ (negative because the base is being pushed *towards* the wall, so $x$ is decreasing)

### Find Missing Side ($y$):
Using the Pythagorean theorem ($x^2 + y^2 = L^2$):
$$12^2 + y^2 = 25^2$$
$$144 + y^2 = 625$$
$$y^2 = 481$$
$$y = \sqrt{481}\text{ ft} \approx 21.93\text{ ft}$$

---

### Part (a): At what rate is the ladder sliding up the wall?

1. **Write the primary equation:**
   $$x^2 + y^2 = 25^2$$

2. **Differentiate both sides with respect to time ($t$):**
   $$2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 0$$

3. **Simplify and solve for $\frac{dy}{dt}$:**
   $$x\frac{dx}{dt} + y\frac{dy}{dt} = 0$$
   $$\frac{dy}{dt} = -\frac{x}{y}\frac{dx}{dt}$$

4. **Substitute the known values:**
   $$\frac{dy}{dt} = -\frac{12}{\sqrt{481}}(-1) = \frac{12}{\sqrt{481}}\text{ ft/sec}$$

**Answer (a):** The ladder is sliding up the wall at a rate of **$\frac{12}{\sqrt{481}}\text{ ft/sec}$** (or approximately **$0.55\text{ ft/sec}$**).

---

### Part (b): At what rate is the angle between the ladder and the ground changing?

1. **Write the trigonometric relationship:**
   $$\cos(\theta) = \frac{x}{25}$$

2. **Differentiate both sides with respect to time ($t$):**
   $$-\sin(\theta)\frac{d\theta}{dt} = \frac{1}{25}\frac{dx}{dt}$$

3. **Find $\sin(\theta)$ at this moment:**
   $$\sin(\theta) = \frac{\text{opposite}}{\text{hypotenuse}} = \frac{y}{25} = \frac{\sqrt{481}}{25}$$

4. **Substitute $\sin(\theta)$ and solve for $\frac{d\theta}{dt}$:**
   $$-\left(\frac{\sqrt{481}}{25}\right)\frac{d\theta}{dt} = \frac{1}{25}(-1)$$
   $$\sqrt{481}\frac{d\theta}{dt} = 1$$
   $$\frac{d\theta}{dt} = \frac{1}{\sqrt{481}}\text{ rad/sec}$$

**Answer (b):** The angle between the ladder and the ground is increasing at a rate of **$\frac{1}{\sqrt{481}}\text{ rad/sec}$** (or approximately **$0.046\text{ rad/sec}$**).