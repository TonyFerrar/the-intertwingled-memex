**Problem Statement:** A structural engineer must design a solid rectangular support beam out of carbon steel. The beam's cross-sectional area must be exactly $96\text{ inches}^2$ to guarantee it meets architectural requirements. However, the cost and weight of the structural assembly depend directly on its perimeter. To minimize steel manufacturing costs and keep the total dead weight of the structure as low as possible, find the dimensions ($x$ and $y$) of the beam's cross-section that will minimize its total perimeter.

#### Solution:

1. **Define Variables:** * Let $x = \text{width of the cross-section (in)}$
* Let $y = \text{height of the cross-section (in)}$
* Let $P = \text{perimeter to minimize (in)}$


2. **Objective Function (Minimize):**

$$P = 2x + 2y$$


3. **Constraint Equation:** Fixed cross-sectional area:

$$xy = 96 \implies y = \frac{96}{x}$$


4. **Variable Reduction:** Substitute $y$ into the perimeter equation:

$$P(x) = 2x + 2\left(\frac{96}{x}\right) = 2x + 192x^{-1}$$


5. **Optimize:** Take the derivative with respect to $x$ and set to zero:

$$P'(x) = 2 - 192x^{-2} = 2 - \frac{192}{x^2}$$


$$2 - \frac{192}{x^2} = 0 \implies 2 = \frac{192}{x^2} \implies 2x^2 = 192$$


$$x^2 = 96 \implies x = \sqrt{96} \approx 9.8\text{ inches}$$


6. **Find remaining dimension:** 
$$y = \frac{96}{\sqrt{96}} = \sqrt{96} \approx 9.8\text{ inches}$$



#### Meaning of the Answer & Real-Life Application:

* **The Meaning:** The absolute minimum perimeter is achieved when the cross-section is a perfect square ($\approx 9.8 \times 9.8\text{ inches}$).
* **Real-Life Application:** In structural steel fabrication, minimizing the perimeter of a fixed cross-sectional area directly minimizes the total surface area of the steel component. This reduces the dead load (weight) of the beam, allowing structural configurations to handle higher external payloads without bowing or collapsing under their own weight. Furthermore, a minimized perimeter means less surface area requiring anti-corrosive coatings or fireproof paints, significantly dropping total material and maintenance costs for large-scale civil infrastructures like high-rises or bridges.
