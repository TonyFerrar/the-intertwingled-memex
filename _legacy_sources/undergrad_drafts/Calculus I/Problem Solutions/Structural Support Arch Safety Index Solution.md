A civil engineer evaluates the safety performance index $S(x)$ of a reinforced concrete support arch holding up a bridge platform. The evaluation tracks the span across a strictly managed, closed construction zone from $x = 0$ meters to $x = 6$ meters. The safety index function is modeled by:

$$S(x) = x^2 - 6x + 12 \quad \text{for} \quad 0 \le x \le 6$$

Perform a hypothesis test to verify if the Extreme Value Theorem applies. If it applies, calculate the location and value of the **absolute minimum safety index** to verify it satisfies municipal safety code rules (which require a safety index of $2.0$ or higher).

#### **Solution:**

- **Hypothesis Test 1 (Continuity):** The function $S(x) = x^2 - 6x + 12$ is a quadratic polynomial. All polynomial functions are structurally continuous across their entire domain. Pass.
    
- **Hypothesis Test 2 (Closed Interval):** The problem specifies the boundaries as $0 \le x \le 6$, which forms the closed interval $[0, 6]$. Pass.
    

Since both hypotheses are met, the EVT applies, guaranteeing an absolute minimum safety value exists. We can find it using optimization derivatives:

$$S'(x) = 2x - 6 = 0 \implies x = 3 \text{ meters}$$

Evaluate $S(x)$ at the critical point and boundary endpoints:

- **Left Boundary:** $S(0) = (0)^2 - 6(0) + 12 = 12$
    
- **Critical Interior Point:** $S(3) = (3)^2 - 6(3) + 12 = 9 - 18 + 12 = 3$
    
- **Right Boundary:** $S(6) = (6)^2 - 6(6) + 12 = 36 - 36 + 12 = 12$
    

#### **Meaning & Application:**

- **Absolute Minimum Safety Value:** $3.0$
    
- **Location:** Span position $x = 3\text{ meters}$
    

The absolute minimum value of $3.0$ represents the **weakest structural point** along the entire bridge arch support system. Mathematically verifying this via the EVT gives the civil engineer total confidence that the safety index will never drop below $3.0$ anywhere across the span. Because this absolute minimum value ($3.0$) sits safely above the legal municipal constraint threshold ($2.0$), the engineer can formally sign off on the design structural blueprint, proving the bridge will safely handle traffic loads without collapsing.
