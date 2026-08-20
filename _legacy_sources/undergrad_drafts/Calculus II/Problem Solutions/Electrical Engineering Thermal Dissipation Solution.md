**Problem:** An electrical engineer is monitoring the thermal energy generated inside a power resistor. The current squared over time is modeled by the polynomial expression $I^2(t) = 3t^2 - 2t$, where $t$ is measured in milliseconds.

To run a Simpson's Rule calculation loop to find total heat generation, the engineer must evaluate this expression at three points: $t_0 = 1.1\text{ ms}$, $t_1 = 1.5\text{ ms}$, and $t_2 = 1.9\text{ ms}$. Precisely evaluate these three values.

**Step-by-Step Solution:**

1. **Evaluate $I^2(1.1)$:**
    
    Calculate the square: $(1.1)^2 = 1.21$.
    
    Multiply: $3 \times 1.21 = 3.63$.
    
    Linear term: $2 \times 1.1 = 2.2$.
    
    Subtract: $3.63 - 2.2 = 1.43\text{ A}^2$.
    
2. **Evaluate $I^2(1.5)$:**
    
    Calculate the square: $(1.5)^2 = 2.25$.
    
    Multiply: $3 \times 2.25 = 6.75$.
    
    Linear term: $2 \times 1.5 = 3.0$.
    
    Subtract: $6.75 - 3.0 = 3.75\text{ A}^2$.
    
3. **Evaluate $I^2(1.9)$:**
    
    Calculate the square: $(1.9)^2 = 3.61$.
    
    Multiply: $3 \times 3.61 = 10.83$.
    
    Linear term: $2 \times 1.9 = 3.8$.
    
    Subtract: $10.83 - 3.8 = 7.03\text{ A}^2$.
    

**Meaning of the Answer & Real-Life Application:**

These answers ($1.43\text{ A}^2$, $3.75\text{ A}^2$, and $7.03\text{ A}^2$) describe the squared current passing through the electronic system at distinct moments in time. Because heat generation in electronics is proportional to the square of the current ($P = I^2R$), even tiny errors in decimal arithmetic quickly compound due to the squaring process. By executing these function evaluations with absolute precision, hardware engineers can accurately predict thermal spikes. This ensures they select circuit board materials and cooling fans that prevent smartphones or laptops from overheating and catching fire under heavy processing loads.