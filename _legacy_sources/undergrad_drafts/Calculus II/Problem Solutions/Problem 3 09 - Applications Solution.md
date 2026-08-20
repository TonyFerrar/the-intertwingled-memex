### Key Concepts & Setup

- **Rate of Growth:** The derivative $P'(t)$ represents the rate at which the population changes per minute.
    
- **Total Population:** To find the total population function $P(t)$, we need to find the antiderivative (integrate) of the growth rate function.
    
- **Initial Condition:** We are given that the initial population is $10$ members, which means at $t = 0$, $P(0) = 10$.
    
- **Time Conversion:** The variable $t$ is measured in **minutes**, but the question asks for the population after **one hour**. You must convert hours to minutes before plugging it into the equation:
    
    $$\text{1 hour} = 60\text{ minutes}$$
    

There are two equally valid ways to solve this using calculus. Both lead to the same result.

### Method 1: Using the Net Change Theorem (Definite Integral)

The Net Change Theorem states that the future value of a quantity is its initial value plus the integral of its rate of change:

$$P(t) = P(0) + \int_{0}^{t} P'(x) \, dx$$

1. **Set up the integral for $t = 60$ minutes:**
    
    $$P(60) = 10 + \int_{0}^{60} e^{0.01t} \, dt$$
    
2. **Integrate the function:**
    
    Recall that $\int e^{at} \, dt = \frac{1}{a}e^{at}$. Since $a = 0.01$:
    
    $$\int e^{0.01t} \, dt = \frac{1}{0.01}e^{0.01t} = 100e^{0.01t}$$
    
3. **Evaluate the definite integral from $0$ to $60$:**
    
    $$\int_{0}^{60} e^{0.01t} \, dt = \left[ 100e^{0.01t} \right]_{0}^{60}$$
    
    $$= 100e^{0.01(60)} - 100e^{0.01(0)}$$
    
    $$= 100e^{0.6} - 100e^{0}$$
    

Since $e^0 = 1$:

$$= 100e^{0.6} - 100$$

4. **Add the initial population ($10$):**
    
    $$P(60) = 10 + (100e^{0.6} - 100)$$
    
    $$P(60) = 100e^{0.6} - 90$$
    

### Method 2: Finding the General Equation (Indefinite Integral)

1. **Find the general population function $P(t)$:**
    
    $$P(t) = \int P'(t) \, dt = \int e^{0.01t} \, dt$$
    
    $$P(t) = 100e^{0.01t} + C$$
    
2. **Use the initial condition ($P(0) = 10$) to find the constant $C$:**
    
    $$10 = 100e^{0.01(0)} + C$$
    
    $$10 = 100(1) + C$$
    
    $$10 = 100 + C$$
    
    $$C = 10 - 100 = -90$$
    
3. **Write the complete population function:**
    
    $$P(t) = 100e^{0.01t} - 90$$
    
4. **Substitute $t = 60$ into the function:**
    
    $$P(60) = 100e^{0.01(60)} - 90$$
    
    $$P(60) = 100e^{0.6} - 90$$
    

### Final Calculation

Now, let's approximate the exact mathematical answer to find the actual number of organisms:

1. Calculate $e^{0.6}$:
    
    $$e^{0.6} \approx 1.82212$$
    
2. Multiply by $100$:
    
    $$100 \times 1.82212 = 182.212$$
    
3. Subtract $90$:
    
    $$182.212 - 90 = 92.212$$
    

Since we are counting individual organisms, we round to the nearest whole number.

**Answer:** The population size after an hour will be approximately **$92$ members** (or exactly $100e^{0.6} - 90$).