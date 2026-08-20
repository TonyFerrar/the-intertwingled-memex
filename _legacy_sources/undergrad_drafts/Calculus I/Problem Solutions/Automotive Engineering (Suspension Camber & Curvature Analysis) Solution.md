An automotive suspension engineer designs a new double-wishbone suspension linkage. As the car turns and hitting bumps causes the wheel to compress upward, the movement path of the tire's contact patch relative to the chassis is modeled by the implicit polynomial equation:
$$x^3 - y^2 = 4$$
Where $x$ is horizontal track width shift and $y$ is vertical suspension travel (both measured in decimeters). The normal riding baseline point sits at $(x, y) = (2, 2)$.

**Engineering Task:** Calculate the first derivative $\frac{dy}{dx}$ and second derivative $\frac{d^2y}{dx^2}$ at the baseline configuration point $(2, 2)$.

#### **Solution:**
1. Find the first derivative $\frac{dy}{dx}$ using implicit differentiation:
   $$\frac{d}{dx}[x^3] - \frac{d}{dx}[y^2] = \frac{d}{dx}[4]$$
   $$3x^2 - 2y\frac{dy}{dx} = 0 \implies \frac{dy}{dx} = \frac{3x^2}{2y}$$
2. Calculate the value of the first derivative at $(2, 2)$:
   $$\left.\frac{dy}{dx}\right|_{(2,2)} = \frac{3(2)^2}{2(2)} = \frac{12}{4} = 3$$
3. Differentiate $\frac{dy}{dx} = \frac{3x^2}{2y}$ using the Quotient Rule to establish the second derivative formula:
   $$\frac{d^2y}{dx^2} = \frac{(6x)(2y) - (3x^2)\left(2\frac{dy}{dx}\right)}{(2y)^2} = \frac{12xy - 6x^2\frac{dy}{dx}}{4y^2}$$
4. Back-substitute the first derivative expression ($\frac{dy}{dx} = \frac{3x^2}{2y}$):
   $$\frac{d^2y}{dx^2} = \frac{12xy - 6x^2\left(\frac{3x^2}{2y}\right)}{4y^2} = \frac{12xy - \frac{18x^4}{2y}}{4y^2} = \frac{12xy - \frac{9x^4}{y}}{4y^2}$$
5. Clear the complex fraction by multiplying the numerator and denominator by $y$:
   $$\frac{d^2y}{dx^2} = \frac{12xy^2 - 9x^4}{4y^3}$$
6. Evaluate the second derivative directly at the suspension position $(2, 2)$:
   $$\frac{d^2y}{dx^2} = \frac{12(2)(2)^2 - 9(2)^4}{4(2)^3} = \frac{12(2)(4) - 9(16)}{4(8)} = \frac{96 - 144}{32} = \frac{-48}{32} = -1.5\text{ dm}^{-1}$$

#### **Engineering Meaning & Real-Life Application:**
* **Meaning of the Answer ($-1.5$):** The first derivative of $3$ indicates that as the tire moves outward, it rapidly cycles upward. The second derivative of $-1.5$ shows that this rate of upward travel is slowing down relative to horizontal displacement, confirming a concave-down path geometry.
* **Real-Life Application:** Suspension engineers track this second derivative value to manage a vehicle's **wheel camber angle**—the angle of the tire relative to the road surface during extreme cornering maneuvers. A wheel assembly moving along a curve with a second derivative of $-1.5$ means the tire will tip inward (gaining negative camber) as the car leans into a high-speed turn. This keeps the tire tread perfectly flat against the asphalt, maximizing grip and preventing the car from sliding out out of control. Knowing the exact value of the second derivative allows engineers to optimize the lengths of the suspension arms to balance high-speed handling performance with even tire wear.