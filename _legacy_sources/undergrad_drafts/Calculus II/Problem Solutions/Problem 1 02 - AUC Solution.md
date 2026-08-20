To solve these definite integrals, we use the core concept that a definite integral calculates the **net signed area** between the function and the $x$-axis:

- **Above the $x$-axis:** The area contributes **positively** to the integral.
    
- **Below the $x$-axis:** The area contributes **negatively** to the integral.
    

From the given information, we can establish the value of the integral over each individual sub-interval:

- $\int_{a}^{b} f(x) \, dx = A_1 = 5$
    
- $\int_{b}^{c} f(x) \, dx = A_2 = 8$
    
- $\int_{c}^{d} f(x) \, dx = -A_3 = -9$ (since it is below the $x$-axis)
    
- $\int_{d}^{e} f(x) \, dx = A_4 = 6$
    

### (a) $\int_{a}^{c} f(x) \, dx$

1. **Split the interval** into its component regions using the additive property of integrals:
    
    $$\int_{a}^{c} f(x) \, dx = \int_{a}^{b} f(x) \, dx + \int_{b}^{c} f(x) \, dx$$
    
2. **Substitute the signed area values**:
    
    $$\int_{a}^{c} f(x) \, dx = 5 + 8$$
    
3. **Calculate the final value**:
    
    $$\int_{a}^{c} f(x) \, dx = 13$$
    

### (b) $\int_{c}^{d} \frac{1}{3} f(x) \, dx$

1. **Pull out the constant multiplier** using the constant multiple rule:
    
    $$\int_{c}^{d} \frac{1}{3} f(x) \, dx = \frac{1}{3} \int_{c}^{d} f(x) \, dx$$
    
2. **Substitute the signed area value** for the interval $[c, d]$. Since region $A_3$ lies below the $x$-axis, its integral value is $-9$:
    
    $$\frac{1}{3} \int_{c}^{d} f(x) \, dx = \frac{1}{3} \cdot (-9)$$
    
3. **Calculate the final value**:
    
    $$\int_{c}^{d} \frac{1}{3} f(x) \, dx = -3$$
    

### (c) $\int_{a}^{d} f(x) \, dx$

1. **Split the integral** across the three sub-intervals that span from $a$ to $d$:
    
    $$\int_{a}^{d} f(x) \, dx = \int_{a}^{b} f(x) \, dx + \int_{b}^{c} f(x) \, dx + \int_{c}^{d} f(x) \, dx$$
    
2. **Substitute the corresponding signed areas** ($A_1$ and $A_2$ are positive, $A_3$ is negative):
    
    $$\int_{a}^{d} f(x) \, dx = 5 + 8 + (-9)$$
    
3. **Calculate the final value**:
    
    $$\int_{a}^{d} f(x) \, dx = 13 - 9 = 4$$
    

### (d) $\int_{b}^{e} -2f(x) \, dx$

1. **Pull out the constant multiplier**:
    
    $$\int_{b}^{e} -2f(x) \, dx = -2 \int_{b}^{e} f(x) \, dx$$
    
2. **Split the remaining integral** over the intervals spanning from $b$ to $e$:
    
    $$\int_{b}^{e} f(x) \, dx = \int_{b}^{c} f(x) \, dx + \int_{c}^{d} f(x) \, dx + \int_{d}^{e} f(x) \, dx$$
    
3. **Substitute the signed areas** inside the parentheses:
    
    $$-2 \cdot \left( 8 + (-9) + 6 \right)$$
    
4. **Simplify the terms inside the parentheses** first:
    
    $$8 - 9 + 6 = 5$$
    
5. **Multiply by the constant** outside:
    
    $$-2 \cdot 5 = -10$$