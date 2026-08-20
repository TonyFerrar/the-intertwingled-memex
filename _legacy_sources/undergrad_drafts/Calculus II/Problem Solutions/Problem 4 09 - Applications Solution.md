### Key Concepts & Setup

- **The Dye Dilution Method:** A known mass of dye ($A$) is injected into the bloodstream. As the heart pumps, the dye dilutes, and its concentration $C(t)$ is measured over a specific time interval.
    
- **Cardiac Output Formula:** Cardiac output ($F$) is the volume of blood pumped by the heart per minute. It is related to the amount of dye injected and its concentration by the following integral equation:
    
    $$F = \frac{A}{\int_{t_1}^{t_2} C(t) \, dt}$$
    
- **Solving for $A$ (Initial Amount of Dye):** Rearranging the formula to isolate $A$, we get:
    
    $$A = F \cdot \int_{t_1}^{t_2} C(t) \, dt$$
    

#### Given Values:

- **Cardiac Output ($F$):** $4\text{ L/min}$
    
- **Time Interval:** From $t_1 = 1$ to $t_2 = 3$ minutes
    
- **Concentration Function ($C(t)$):** $2e^{-0.1t}$
    

### Step-by-Step Derivation

#### Step 1: Set up the integral

Substitute the concentration function and the time boundaries into the equation:

$$A = 4 \cdot \int_{1}^{3} 2e^{-0.1t} \, dt$$

We can pull the constant $2$ out of the integral:

$$A = 8 \cdot \int_{1}^{3} e^{-0.1t} \, dt$$

#### Step 2: Find the antiderivative

Recall the integration rule $\int e^{at} \, dt = \frac{1}{a}e^{at}$. Here, $a = -0.1$:

$$\int e^{-0.1t} \, dt = \frac{1}{-0.1}e^{-0.1t} = -10e^{-0.1t}$$

#### Step 3: Evaluate the definite integral using limits

Apply the boundaries from $1$ to $3$:

$$\int_{1}^{3} e^{-0.1t} \, dt = \left[ -10e^{-0.1t} \right]_{1}^{3}$$

$$= \left(-10e^{-0.1(3)}\right) - \left(-10e^{-0.1(1)}\right)$$

$$= -10e^{-0.3} + 10e^{-0.1}$$

Factoring out the $10$:

$$= 10\left(e^{-0.1} - e^{-0.3}\right)$$

#### Step 4: Calculate the final value for $A$

Multiply the integral result by the remaining constant multiplier ($8$) from Step 1:

$$A = 8 \cdot \left[ 10\left(e^{-0.1} - e^{-0.3}\right) \right]$$

$$A = 80\left(e^{-0.1} - e^{-0.3}\right)$$

### Final Approximation

Let's evaluate the exponential expressions to find the numerical amount:

- $e^{-0.1} \approx 0.9048$
    
- $e^{-0.3} \approx 0.7408$
    

Substitute these back into the formula:

$$A \approx 80 \cdot (0.9048 - 0.7408)$$

$$A \approx 80 \cdot (0.1640)$$

$$A \approx 13.12$$

**Answer:** The initial amount of dye administered was exactly **$80\left(e^{-0.1} - e^{-0.3}\right)$** or approximately **$13.12\text{ mg}$** (or units of mass).