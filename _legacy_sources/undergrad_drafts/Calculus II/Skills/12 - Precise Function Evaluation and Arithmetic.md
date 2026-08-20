# Skill 3: Precise Function Evaluation and Arithmetic

Even if you partition your intervals flawlessly and memorize every numerical integration formula perfectly, your final answer will still fail if your arithmetic slips. Numerical integration is heavily front-loaded with arithmetic bookkeeping. Because you are frequently plugging decimal grid points or midpoints into non-linear functions (like polynomials, exponentials, or trigonometric functions), managing nested brackets and multi-step calculations without dropping signs or misplacing decimals is a foundational skill.

## Conceptual Notes

When calculating numerical integrals manually or validating a computer program's output, you must navigate three major arithmetic phases:

- **Decimal and Fractional Power Evaluations:** You will regularly have to evaluate expressions like $(2.25)^2$ or $(1.5)^3$. Doing this accurately requires strict adherence to the standard Order of Operations (PEMDAS).
    
- **Bracket Bookkeeping:** Numerical integration formulas group multiple function evaluations inside a large set of brackets before applying the outer prefactor. You must fully simplify the interior sum _before_ multiplying by the outer width multiplier ($\Delta x$, $\frac{\Delta x}{2}$, or $\frac{\Delta x}{3}$).
    
- **Coefficient Application:** In both the Trapezoidal and Simpson's Rules, specific interior terms are weighted by multipliers like 2 or 4. A common arithmetic pitfall is adding up the function values first and then multiplying the final sum by 2 or 4, rather than applying the weights to each individual term before adding them together.
    

## Pure Mathematics Sample Problems

### **Sample Problem 1: Multi-Point Polynomial Evaluation**

**Problem:** Given the function $f(x) = 2x^3 - 3x$, precisely evaluate the function values at the subinterval midpoints $m_1 = 1.5$ and $m_2 = 2.5$. Then, find the sum of these evaluations: $f(m_1) + f(m_2)$.

**Step-by-Step Solution:**

1. **Evaluate $f(1.5)$:** First, calculate the cube: $(1.5)^3 = 3.375$.
    
    Multiply by 2: $2 \times 3.375 = 6.75$.
    
    Calculate the linear term: $3 \times 1.5 = 4.5$.
    
    Subtract the values: $f(1.5) = 6.75 - 4.5 = 2.25$.
    
2. **Evaluate $f(2.5)$:**
    
    First, calculate the cube: $(2.5)^3 = 15.625$.
    
    Multiply by 2: $2 \times 15.625 = 31.25$.
    
    Calculate the linear term: $3 \times 2.5 = 7.5$.
    
    Subtract the values: $f(2.5) = 31.25 - 7.5 = 23.75$.
    
3. **Sum the evaluations:**
    
    $$\text{Sum} = 2.25 + 23.75 = 26.00$$
    

### **Sample Problem 2: Bracket Arithmetic Sequencing**

**Problem:** Simplify the following expression, which represents a completed Trapezoidal Rule setup with an outer prefactor multiplier of $0.25$:

$$\text{Area} \approx 0.25 \times \left[ 1.2 + 2(3.5) + 2(5.1) + 7.8 \right]$$

**Step-by-Step Solution:**

1. **Apply the internal weights (multiplication first):**
    
    $$2 \times 3.5 = 7.0$$
    
    $$2 \times 5.1 = 10.2$$
    
2. **Substitute back into the brackets:**
    
    $$\text{Area} \approx 0.25 \times \left[ 1.2 + 7.0 + 10.2 + 7.8 \right]$$
    
3. **Sum the values inside the brackets:**
    
    $$1.2 + 7.0 + 10.2 + 7.8 = 26.2$$
    
4. **Multiply by the outer prefactor:**
    
    $$\text{Area} \approx 0.25 \times 26.2 = 6.55$$
    

## Real-Life Engineering Application Problems

### **Engineering Problem 1: [[Mechanical Engineering Aerodynamic Work Calculation]]**
[[Mechanical Engineering Aerodynamic Work Calculation Solution]]

### **Engineering Problem 2: [[Electrical Engineering Thermal Dissipation]]**
[[Electrical Engineering Thermal Dissipation Solution]]
