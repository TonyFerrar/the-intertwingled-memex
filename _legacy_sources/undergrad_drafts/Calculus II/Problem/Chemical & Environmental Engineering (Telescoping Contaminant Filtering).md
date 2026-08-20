**Context:** An environmental engineer designs a cascading water purification system for a microchip fabrication plant. Wastewater passes through an endless series of filter modules linked in a grid. The reduction in chemical contaminant concentration, $C$, across the $n$-th filtering module is given by the algebraic relation:

$$\Delta C_n = \frac{4}{n(n+2)}$$

Using partial fraction decomposition, this can be rewritten as a telescoping sequence:

$$\Delta C_n = \frac{2}{n} - \frac{2}{n+2}$$

Calculate the total contaminant concentration removed across the entire infinite network, modeled by $\sum_{n=1}^{\infty} \left( \frac{2}{n} - \frac{2}{n+2} \right)$.
