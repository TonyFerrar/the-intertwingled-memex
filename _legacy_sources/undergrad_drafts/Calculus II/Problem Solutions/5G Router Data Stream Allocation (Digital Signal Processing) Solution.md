A network systems engineer is designing a dual-band 5G wireless transceiver. The incoming data stream contains high-speed streaming data bundled together with smart-home sensor data. To process them simultaneously across parallel processor chips, the incoming signal must be split:

$$\frac{5x - 7}{(x - 1)(x - 2)} = \frac{A}{x - 1} + \frac{B}{x - 2}$$

**Your Task:** Solve for $A$ and $B$ to divide the signal processing workload.

**Solution:**

1. **Clear the fractions**:
    
    $$5x - 7 = A(x - 2) + B(x - 1)$$
    
2. **Use convenient values**:
    
    - Let $x = 1$: $5(1) - 7 = A(1 - 2) \implies -2 = -A \implies A = 2$
        
    - Let $x = 2$: $5(2) - 7 = B(2 - 1) \implies 3 = B \implies B = 3$
        

#### 📊 The Meaning & Application to Real Life

- **The Meaning of the Answer:** The constants represent the mathematical **gain (amplification factor)** assigned to each isolated data channel. Channel 1 (operating at a data frequency mapped by $x=1$) has a power allocation factor of $2$, while Channel 2 (operating at a frequency mapped by $x=2$) has a power allocation factor of $3$.
    
- **Real-Life Impact:** By solving for these exact coefficients, the engineer can program the router's internal microchip to distribute its electrical power and processing cycles unevenly but optimally. Channel 2 receives a higher processing weight ($3$ vs $2$) because it handles the wider bandwidth required for seamless 4K video streaming, while Channel 1 receives a lighter weight ($2$) because low-priority smart-home sensor data requires less computational power. This precise allocation prevents network lag and optimizes energy efficiency.