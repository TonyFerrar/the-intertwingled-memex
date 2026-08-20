
# Integrals in Polar Coordinates

**Introduction and Real-World Uses**
While calculating the area under a standard rectangular curve involves slicing the space into infinitely thin vertical rectangles, polar integrals require a different geometric perspective. This method is incredibly useful for mapping spatial coverage, such as determining the area swept by a radar system, plotting antenna radiation patterns, or analyzing complex impedance in electrical engineering.

**The Polar Area Formula**
To find the area of a polar region, we slice the space into infinitely thin circular wedges (or "sectors") originating from the pole. From geometry, the area of a single sector of a circle is $A = \frac{1}{2} r^2 \theta$. By replacing the finite angle $\theta$ with an infinitely small differential angle $d\theta$, the area of a single thin slice becomes $dA = \frac{1}{2} r^2 d\theta$.

To find the total area, we integrate this expression over a specific angular interval from $\alpha$ to $\beta$. This gives us the fundamental formula for polar area: **$A = \int_{\alpha}^{\beta} \frac{1}{2} [r(\theta)]^2 d\theta$**.

## **Worked Example: Area of a Single Loop** 
_Question:_ Find the exact area enclosed by one single loop of the "four-petaled rose" curve $r = \cos(2\theta)$.

- First, we must find our limits of integration ($\alpha$ and $\beta$) by determining where the loop begins and ends at the origin ($r = 0$).
- Set $0 = \cos(2\theta)$. The cosine function equals zero at multiples of $\pi/2$. Therefore, $2\theta = \pm \pi/2$, which means the loop is bounded between $\theta = -\pi/4$ and $\theta = \pi/4$.
- Set up the integral: $A = \int_{-\pi/4}^{\pi/4} \frac{1}{2} (\cos(2\theta))^2 d\theta$.
- To evaluate an integral with a squared cosine, use the half-angle formula $\cos^2(x) = \frac{1 + \cos(2x)}{2}$.
- Substituting this identity changes our integral to $\frac{1}{4} \int_{-\pi/4}^{\pi/4} (1 + \cos(4\theta)) d\theta$.
- _Answer:_ Evaluating the integral from $-\pi/4$ to $\pi/4$ yields a final area of $\frac{\pi}{8}$.
