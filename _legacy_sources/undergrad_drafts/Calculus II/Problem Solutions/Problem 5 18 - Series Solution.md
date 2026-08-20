
## Part (a): Find the first four terms of the sequence of partial sums

A **partial sum** $S_n$ is the sum of the first $n$ terms of the series. To find them, we first calculate the individual terms $a_n = \frac{1}{4n^2-1}$ for $n = 1, 2, 3, 4$:

- **For $n = 1$:** $a_1 = \frac{1}{4(1)^2 - 1} = \frac{1}{3}$
    
- **For $n = 2$:** $a_2 = \frac{1}{4(2)^2 - 1} = \frac{1}{15}$
    
- **For $n = 3$:** $a_3 = \frac{1}{4(3)^2 - 1} = \frac{1}{35}$
    
- **For $n = 4$:** $a_4 = \frac{1}{4(4)^2 - 1} = \frac{1}{63}$
    

Now, we accumulate these terms to get the first four partial sums:

- **First partial sum ($S_1$):**
    
    $$S_1 = a_1 = \frac{1}{3}$$
    
- **Second partial sum ($S_2$):**
    
    $$S_2 = S_1 + a_2 = \frac{1}{3} + \frac{1}{15} = \frac{5}{15} + \frac{1}{15} = \frac{6}{15} = \frac{2}{5}$$
    
- **Third partial sum ($S_3$):**
    
    $$S_3 = S_2 + a_3 = \frac{2}{5} + \frac{1}{35} = \frac{14}{35} + \frac{1}{35} = \frac{15}{35} = \frac{3}{7}$$
    
- **Fourth partial sum ($S_4$):**
    
    $$S_4 = S_3 + a_4 = \frac{3}{7} + \frac{1}{63} = \frac{27}{63} + \frac{1}{63} = \frac{28}{63} = \frac{4}{9}$$
    

**Sequence of partial sums:**

$$\left\{ \frac{1}{3}, \frac{2}{5}, \frac{3}{7}, \frac{4}{9} \right\}$$

## Part (b): Find an expression for $S_n$

Looking closely at the pattern of our answers from part (a) — $\frac{1}{3}, \frac{2}{5}, \frac{3}{7}, \frac{4}{9}$ — the numerator matches $n$ exactly, and the denominator is always $2n + 1$.

To prove this algebraically, we use **Partial Fraction Decomposition** because this is a telescoping series.

### Step 1: Decompose the general term

Factor the denominator as a difference of squares: $4n^2 - 1 = (2n-1)(2n+1)$.

$$\frac{1}{(2n-1)(2n+1)} = \frac{A}{2n-1} + \frac{B}{2n+1}$$

Multiply through by the common denominator:

$$1 = A(2n+1) + B(2n-1)$$

- Setting $n = \frac{1}{2}$ gives: $1 = A(2) \implies A = \frac{1}{2}$
    
- Setting $n = -\frac{1}{2}$ gives: $1 = B(-2) \implies B = -\frac{1}{2}$
    

Thus, the general term can be written as:

$$a_n = \frac{1}{2} \left( \frac{1}{2n-1} - \frac{1}{2n+1} \right)$$

### Step 2: Expand the sum to see it telescope

Write out the partial sum $S_n$:

$$S_n = \frac{1}{2} \left[ \left(\frac{1}{1} - \frac{1}{3}\right) + \left(\frac{1}{3} - \frac{1}{5}\right) + \left(\frac{1}{5} - \frac{1}{7}\right) + \dots + \left(\frac{1}{2n-1} - \frac{1}{2n+1}\right) \right]$$

Notice how the internal terms cancel each other out ($-\frac{1}{3}$ with $+\frac{1}{3}$, $-\frac{1}{5}$ with $+\frac{1}{5}$, etc.). Only the very first and very last terms survive:

$$S_n = \frac{1}{2} \left( 1 - \frac{1}{2n+1} \right)$$

### Step 3: Simplify the expression

Find a common denominator inside the parentheses:

$$S_n = \frac{1}{2} \left( \frac{2n+1 - 1}{2n+1} \right) = \frac{1}{2} \left( \frac{2n}{2n+1} \right) = \frac{n}{2n+1}$$

**Expression for $S_n$:**

$$S_n = \frac{n}{2n+1}$$

## Part (c): Using a limit, make a conjecture about the value of the series

The value of an infinite series is equal to the limit of its partial sums as $n$ approaches infinity.

$$\lim_{n \to \infty} S_n = \lim_{n \to \infty} \frac{n}{2n+1}$$

To evaluate this limit, divide every term in the numerator and denominator by the highest power of $n$ (which is $n^1$):

$$\lim_{n \to \infty} \frac{\frac{n}{n}}{\frac{2n}{n} + \frac{1}{n}} = \lim_{n \to \infty} \frac{1}{2 + \frac{1}{n}}$$

As $n \to \infty$, the fraction $\frac{1}{n}$ approaches $0$:

$$\frac{1}{2 + 0} = \frac{1}{2}$$

**Conjecture:** The infinite series converges to a total value of **$\frac{1}{2}$**.