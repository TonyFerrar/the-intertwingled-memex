A mechanical engineer is designing a turbine blade that spans from $x = -1$ to $x = 1$ meters. A highly localized cryogenic cooling line passes through the exact center of the blade at $x = 0$, creating a severe thermal stress gradient modeled by $S(x) = \frac{1}{\sqrt{\vert{}x\vert{}}}$ across the component. To find the net thermal stress factor accumulated across the structure, the engineer must integrate the function over the blade's full length:

$$\text{Stress Factor} = \int_{-1}^{1} \frac{1}{\sqrt{\vert{}x\vert{}}} \, dx$$

#### **Step 1: Structural Setup**

While the boundary numbers are finite, the function has an infinite Type II discontinuity right in the middle at $x = 0$ due to the localized cooling line. You must split the domain at $0$ and evaluate it using one-sided limits:

$$\text{Stress Factor} = \lim_{b \to 0^-} \int_{-1}^{b} (-x)^{-1/2} \, dx + \lim_{c \to 0^+} \int_{c}^{1} x^{-1/2} \, dx$$

#### **Step 2: Integration and Limit Execution**

- **Left Half (Negative Span):**
    
    $$\lim_{b \to 0^-} \left[ -2\sqrt{-x} \right]_{-1}^b = \lim_{b \to 0^-} (-2\sqrt{-b} - (-2\sqrt{-(-1)})) = 0 + 2 = 2$$
    
- **Right Half (Positive Span):**
    
    $$\lim_{c \to 0^+} \left[ 2\sqrt{x} \right]_c^1 = \lim_{c \to 0^+} (2\sqrt{1} - 2\sqrt{c}) = 2 - 0 = 2$$
    

Total Accumulation: $2 + 2 = 4$

#### **Meaning of the Answer & Real-Life Application**

- **Meaning:** The cumulative stress factor converges to a stable value of **4 structural units**. Even though the temperature drop causes the structural stress gradient to spike to infinity at the exact point of the cooling line ($x = 0$), the total integrated physical impact across the structural body remains entirely finite.
    
- **Application:** Aerospace and structural engineers use these split-domain convergence proofs to validate that sharp cooling lines or point-source loads will not cause localized stress fields to rupture the metal shell. If the limit had diverged, it would indicate an unstable concentration of energy that would cause the turbine blade to immediately crack and tear itself apart.
    