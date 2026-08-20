Here is the step-by-step solution to the problem, formatted in clean Markdown.

### Core Concepts

To solve these problems, we use the geometric interpretation of a definite integral:

- Regions **above** the $x$-axis contribute **positive** value to the integral.
    
- Regions **below** the $x$-axis contribute **negative** value to the integral.
    
- **Constant Multiple Rule:** $\int c \cdot f(x) \, dx = c \cdot \int f(x) \, dx$
    
- **Additivity Principle:** $\int_{a}^{c} f(x) \, dx = \int_{a}^{b} f(x) \, dx + \int_{b}^{c} f(x) \, dx$
    

Given areas:

- $A_1 = 5$ (above axis $\rightarrow +5$)
    
- $A_2 = 8$ (above axis $\rightarrow +8$)
    
- $A_3 = 9$ (below axis $\rightarrow -9$)
    
- $A_4 = 6$ (above axis $\rightarrow +6$)
    

### Step-by-Step Solutions

#### (a) $\int_{a}^{c}f(x)dx$

- **Step 1:** Break the integral into separate intervals based on the regions from $a$ to $c$.
    
    $$\int_{a}^{c}f(x)dx = \int_{a}^{b}f(x)dx + \int_{b}^{c}f(x)dx$$
    
- **Step 2:** Substitute the signed area values. Both $A_1$ and $A_2$ are above the $x$-axis.
    
    $$\int_{a}^{c}f(x)dx = A_1 + A_2 = 5 + 8$$
    
- **Answer:**
    
    $$\int_{a}^{c}f(x)dx = 13$$
    

#### (b) $\int_{c}^{d}\frac{1}{3}f(x)dx$

- **Step 1:** Pull the constant $\frac{1}{3}$ outside the integral.
    
    $$\int_{c}^{d}\frac{1}{3}f(x)dx = \frac{1}{3}\int_{c}^{d}f(x)dx$$
    
- **Step 2:** Evaluate the integral from $c$ to $d$. This corresponds to region $A_3$, which lies entirely below the $x$-axis.
    
    $$\int_{c}^{d}f(x)dx = -A_3 = -9$$
    
- **Step 3:** Multiply by the constant.
    
    $$\frac{1}{3}(-9) = -3$$
    
- **Answer:**
    
    $$\int_{c}^{d}\frac{1}{3}f(x)dx = -3$$
    

#### (c) $\int_{a}^{d}f(x)dx$

- **Step 1:** Break the integral down into its constituent regions from $a$ to $d$.
    
    $$\int_{a}^{d}f(x)dx = \int_{a}^{b}f(x)dx + \int_{b}^{c}f(x)dx + \int_{c}^{d}f(x)dx$$
    
- **Step 2:** Substitute the signed area values ($A_1$ and $A_2$ are positive, $A_3$ is negative).
    
    $$\int_{a}^{d}f(x)dx = A_1 + A_2 - A_3 = 5 + 8 - 9$$
    
- **Answer:**
    
    $$\int_{a}^{d}f(x)dx = 4$$
    

#### (d) $\int_{b}^{e}-2f(x)dx$

- **Step 1:** Pull the constant $-2$ outside the integral.
    
    $$\int_{b}^{e}-2f(x)dx = -2\int_{b}^{e}f(x)dx$$
    
- **Step 2:** Break down the remaining integral from $b$ to $e$ into its regions ($A_2$, $A_3$, and $A_4$).
    
    $$\int_{b}^{e}f(x)dx = \int_{b}^{c}f(x)dx + \int_{c}^{d}f(x)dx + \int_{d}^{e}f(x)dx$$
    
- **Step 3:** Substitute the signed area values.
    
    $$\int_{b}^{e}f(x)dx = A_2 - A_3 + A_4 = 8 - 9 + 6 = 5$$
    
- **Step 4:** Multiply by the constant factor $-2$.
    
    $$-2 \cdot (5) = -10$$
    
- **Answer:**
    
    $$\int_{b}^{e}-2f(x)dx = -10$$