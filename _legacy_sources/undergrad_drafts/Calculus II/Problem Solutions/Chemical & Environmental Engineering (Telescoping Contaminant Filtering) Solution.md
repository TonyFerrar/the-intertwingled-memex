**Context:** An environmental engineer designs a cascading water purification system for a microchip fabrication plant. Wastewater passes through an endless series of filter modules linked in a grid. The reduction in chemical contaminant concentration, $C$, across the $n$-th filtering module is given by the algebraic relation:

$$\Delta C_n = \frac{4}{n(n+2)}$$

Using partial fraction decomposition, this can be rewritten as a telescoping sequence:

$$\Delta C_n = \frac{2}{n} - \frac{2}{n+2}$$

Calculate the total contaminant concentration removed across the entire infinite network, modeled by $\sum_{n=1}^{\infty} \left( \frac{2}{n} - \frac{2}{n+2} \right)$.

#### Solution

- **Step 1:** Expand the partial sum $S_n$ to locate the exact spots where the numbers cancel out:
    
    - For $n=1$: $\left( \frac{2}{1} - \frac{2}{3} \right)$
        
    - For $n=2$: $\left( \frac{2}{2} - \frac{2}{4} \right)$
        
    - For $n=3$: $\left( \frac{2}{3} - \frac{2}{5} \right)$
        
    - For $n=4$: $\left( \frac{2}{4} - \frac{2}{6} \right)$
        
- **Step 2:** Write out the total expression up to a step $k$:
    
    $$S_k = \left( 2 - \cancel{\frac{2}{3}} \right) + \left( 1 - \cancel{\frac{2}{4}} \right) + \left( \cancel{\frac{2}{3}} - \frac{2}{5} \right) + \left( \cancel{\frac{2}{4}} - \frac{2}{6} \right) + \dots + \left( \frac{2}{k-1} - \frac{2}{k+1} \right) + \left( \frac{2}{k} - \frac{2}{k+2} \right)$$
    
- **Step 3:** Notice that the negative fractions are canceled out two steps later by positive fractions. Isolating the terms that survive at the beginning and the end leaves:
    
    $$S_k = 2 + 1 - \frac{2}{k+1} - \frac{2}{k+2} = 3 - \frac{2}{k+1} - \frac{2}{k+2}$$
    
- **Step 4:** Evaluate the limit of the partial sums as $k \to \infty$:
    
    $$\text{Total Contaminant Removed} = \lim_{k \to \infty} \left( 3 - \frac{2}{k+1} - \frac{2}{k+2} \right) = 3 - 0 - 0 = 3\text{ mg/L}$$
    

#### Meaning of the Answer & Real-Life Application

The telescoping series converges to a value of **$3\text{ mg/L}$**.

In fluid network modeling, engineering systems often feature nested internal dependencies where local changes cancel each other out across boundaries. The telescoping property proves that the engineer does not need to analyze or measure the chemical state inside the millions of intermediate pipe connections. By knowing that the mathematical series telescopes, the engineer safely concludes that the total system performance depends entirely on the input state of the first two modules minus the zeroed-out remnants at infinity.