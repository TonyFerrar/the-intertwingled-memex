## Part (a): Explicit Sequence

**Formula:**

$$a_n = \frac{1}{3^n}$$

An **explicit formula** allows you to find any term in the sequence directly by plugging in the index number ($n$). Since the sequence starts at $n = 1$, we substitute $n = 1, 2, 3,$ and $4$ into the formula.

- **For $n = 1$:**
    
    $$a_1 = \frac{1}{3^1} = \frac{1}{3}$$
    
- **For $n = 2$:**
    
    $$a_2 = \frac{1}{3^2} = \frac{1}{9}$$
    
- **For $n = 3$:**
    
    $$a_3 = \frac{1}{3^3} = \frac{1}{27}$$
    
- **For $n = 4$:**
    
    $$a_4 = \frac{1}{3^4} = \frac{1}{81}$$
    

**First four terms for (a):**

$$\left\{ \frac{1}{3}, \frac{1}{9}, \frac{1}{27}, \frac{1}{81} \right\}$$

## Part (b): Recursive Sequence

**Formula:**

$$a_{n+1} = a_n^2 - 2 \quad \text{with} \quad a_1 = 0$$

A **recurrence relation** defines each new term based on the value of the previous term. We are already given the very first term, so we use it to chain our way forward.

- **First term ($a_1$):**
    
    Given directly in the problem:
    
    $$a_1 = 0$$
    
- **Second term ($a_2$):**
    
    Plug $a_1$ into the recurrence relation:
    
    $$a_2 = (a_1)^2 - 2 = (0)^2 - 2 = -2$$
    
- **Third term ($a_3$):**
    
    Plug $a_2$ into the recurrence relation:
    
    $$a_3 = (a_2)^2 - 2 = (-2)^2 - 2 = 4 - 2 = 2$$
    
- **Fourth term ($a_4$):**
    
    Plug $a_3$ into the recurrence relation:
    
    $$a_4 = (a_3)^2 - 2 = (2)^2 - 2 = 4 - 2 = 2$$
    

**First four terms for (b):**

$$\{0, -2, 2, 2\}$$