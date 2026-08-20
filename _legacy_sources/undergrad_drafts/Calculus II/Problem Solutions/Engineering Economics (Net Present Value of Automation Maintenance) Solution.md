**Context:** A manufacturing systems engineer designs an automated production line. Long-term operating costs must be calculated before purchasing equipment. The specialized robotic sensors require an annual calibration and maintenance cost that occurs every year indefinitely.

Due to the time-value of money (interest and inflation), a dollar spent in the future is worth less than a dollar today. The engineer applies a discount factor of $r = 0.90$. If the baseline maintenance cost is $\$10,000$ annually, the total cost in today's dollars over an infinite timeline is modeled by the geometric series:

$$\text{Total Cost} = \sum_{n=1}^{\infty} 10,000(0.90)^n$$

Calculate the total fund needed today to cover these infinite future costs.

#### Solution

- **Step 1:** Expand the first term ($n = 1$) to find the true baseline value $a$:
    
    $$a = 10,000(0.90)^1 = 9,000$$
    
- **Step 2:** Identify the common ratio, which is $r = 0.90$. Since $\vert{}0.90\vert{} < 1$, the series converges.
    
- **Step 3:** Calculate the infinite sum:
    
    $$\text{Total Cost} = \frac{a}{1-r} = \frac{9,000}{1 - 0.90} = \frac{9,000}{0.10} = \$90,000$$
    

#### Meaning of the Answer & Real-Life Application

The geometric series converges to a total of **$\$90,000$**.

In engineering economics, this finite sum is called the **Net Present Value (NPV)** of a perpetual cost. Even though the robotic assembly line will theoretically demand $\$10,000$ every single year forever (amounting to an infinite amount of nominal cash), the engineer only needs to set aside exactly $\$90,000$ in a corporate asset account today. This mathematical proof allows the company to accurately budget the life-cycle cost of automation against alternative manual assembly systems.