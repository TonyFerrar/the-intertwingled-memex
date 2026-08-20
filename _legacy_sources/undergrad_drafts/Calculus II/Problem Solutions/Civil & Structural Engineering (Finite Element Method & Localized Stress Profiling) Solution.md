A civil engineer utilizes the Finite Element Method (FEM) to analyze structural stress configurations along a critical node of a steel suspension bridge. Computer models rewrite complex differential equations into an algebraic boundary integral. To calculate the specific structural load variance across a 1-meter physical section, the software must compute the following definite integral:

$$S = \int_{0}^{1} x^2 e^{-x} \, dx$$

#### Solution:

1. **First Round:** Let $u = x^2 \implies du = 2x \, dx$ and $dv = e^{-x} \, dx \implies v = -e^{-x}$.
    
    $$\int_{0}^{1} x^2 e^{-x} \, dx = \left[ -x^2 e^{-x} \right]_{0}^{1} + 2 \int_{0}^{1} x e^{-x} \, dx$$
    
2. **Second Round (Within Brackets):** For the remaining integral, let $u = x \implies du = dx$ and $dv = e^{-x} \, dx \implies v = -e^{-x}$.
    
    $$\int_{0}^{1} x^2 e^{-x} \, dx = \left[ -x^2 e^{-x} \right]_{0}^{1} + 2 \left( \left[ -xe^{-x} \right]_{0}^{1} - \int_{0}^{1} -e^{-x} \, dx \right)$$
    
3. **Compile the Complete Antiderivative:**
    
    $$\text{Antiderivative} = \left[ -x^2 e^{-x} - 2xe^{-x} - 2e^{-x} \right]_{0}^{1} = \left[ -e^{-x}(x^2 + 2x + 2) \right]_{0}^{1}$$
    
4. **Evaluate Boundaries:**
    
    - **Upper Limit ($x = 1$):** $-e^{-1}(1^2 + 2(1) + 2) = -5e^{-1} = -\frac{5}{e}$
        
    - **Lower Limit ($x = 0$):** $-e^{-0}(0^2 + 2(0) + 2) = -1(2) = -2$
        
        $$\text{Total Score } (S) = \left(-\frac{5}{e}\right) - (-2) = 2 - \frac{5}{e} \approx 2 - 1.8394 = 0.1606 \, \text{kN}$$
        

#### Meaning of the Answer & Real-Life Application:

The result of $0.1606 \, \text{kN}$ represents the total net localized shear force distributed across that finite element node of the bridge. By computing this exact decimal value, the software validates whether the steel beam will flex safely or develop microscopic stress fractures over time under high traffic loads.