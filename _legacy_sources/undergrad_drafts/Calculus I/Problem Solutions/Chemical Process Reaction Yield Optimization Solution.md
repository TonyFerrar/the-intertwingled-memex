A chemical engineer monitors the production yield of an eco-friendly bioplastic compound inside a continuous-flow reactor. The mass yield $Y$ (in kilograms) depends on the exact duration of time $t$ (in hours) that the chemical reactants are allowed to interact inside the heated vat. Because the process operates as an open, continuous stream, the elapsed time is modeled on the open interval $(0, \infty)$. The yield function is precisely given by:

$$Y(t) = \frac{40t}{t^2 + 4} \quad \text{for} \quad t > 0$$

Using sign analysis and the First Derivative Test, determine the **absolute maximum yield value** and its **location**, and explain how this impacts real-world factory efficiency.

#### **Solution:**
**Step 1: Find the derivative using the Quotient Rule.**
$$Y'(t) = \frac{(40)(t^2 + 4) - (40t)(2t)}{(t^2 + 4)^2} = \frac{40t^2 + 160 - 80t^2}{(t^2 + 4)^2} = \frac{160 - 40t^2}{(t^2 + 4)^2}$$

**Step 2: Locate critical numbers.**
Set the numerator of the derivative equal to $0$:
$$160 - 40t^2 = 0 \implies 40t^2 = 160 \implies t^2 = 4 \implies t = 2 \text{ hours}$$
*(We discard $t = -2$ since time must be greater than zero in this domain).*

**Step 3: Construct a sign chart for $Y'(t)$ around $t = 2$.**
* **Interval $(0, 2)$:** Test $t = 1 \implies Y'(1) = \frac{160 - 40(1)^2}{(1^2+4)^2} = \frac{120}{25} > 0 \quad (+)$
* **Interval $(2, \infty)$:** Test $t = 3 \implies Y'(3) = \frac{160 - 40(3)^2}{(3^2+4)^2} = \frac{-200}{169} < 0 \quad (-)$

**Step 4: Classify the extremum.**
The derivative transitions from positive to negative at $t = 2$, proving it is a relative maximum. Because it is the only critical point on the open interval $(0, \infty)$, it is also the absolute maximum.
* **Absolute Maximum Value:** $Y(2) = \frac{40(2)}{2^2 + 4} = \frac{80}{8} = 10\text{ kg}$

#### **Meaning & Application:**
The absolute maximum value of $10\text{ kg}$ represents the **peak chemical conversion efficiency** of the reaction. In real-world chemical manufacturing, finding the location of $t = 2\text{ hours}$ tells the automated control engineer exactly when to flush the reactor vat. Halting the reaction exactly at the 2-hour mark prevents the bioplastic chains from decomposing due to over-exposure to heat, ensuring the factory achieves maximum product output per batch while minimizing raw material waste.