# Skill 2: Algebraic Manipulation of Sigma Notation and Summation Formulas

## Topic Notes

Once a geometric region is partitioned into $n$ subintervals, the next core skill is translating the expanding sum into a compact algebraic expression. This allows us to handle an arbitrary number of rectangles ($n$) without having to manually add up hundreds or thousands of terms. To do this, we use the properties of **Sigma ($\Sigma$) Notation** alongside known formulas for the sums of powers of integers.

### 1. Linearity Properties of Sigma Notation

Summations distribute across addition and subtraction, and constant factors can be pulled outside of the summation. These rules work identically to basic algebraic distribution:

- **Constant Multiple Rule:** If a term inside the sum is multiplied by a factor $c$ that does not depend on the index variable $i$, you can factor it out front:
    
    $$\sum_{i=1}^{n} c \cdot a_i = c \sum_{i=1}^{n} a_i$$
    
    _(Note: In Riemann sums, terms like $\Delta x$, $\frac{1}{n}$, or $\frac{5}{n^2}$ act as constants relative to $i$ and can be pulled out.)_
    
- **Sum/Difference Rule:** You can split a compound summation into individual sums:
    
    $$\sum_{i=1}^{n} (a_i \pm b_i) = \sum_{i=1}^{n} a_i \pm \sum_{i=1}^{n} b_i$$
    

### 2. Standard Closed-Form Summation Formulas

Instead of manually evaluating a sum as it loops from $i=1$ to $n$, we substitute known algebraic equivalents derived from your notes:

- **Sum of a Constant:** Adding the number $1$ to itself $n$ times simply equals $n$.
    
    $$\sum_{i=1}^{n} c = c \cdot n$$
    
- **Sum of Consecutive Integers ($i$):**
    
    $$\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$$
    
- **Sum of Consecutive Integers Squared ($i^2$):**
    
    $$\sum_{i=1}^{n} i^2 = \frac{n(n+1)(2n+1)}{6}$$
    

## Conceptual Sample Problems

### Problem 1: Factoring and Distributing

Simplify the following summation expression into a single algebraic function of $n$ by pulling out constants and substituting formulas:

$$\sum_{i=1}^{n} \frac{4}{n} \left( \frac{3i}{n} - 2 \right)$$

#### Solution:

1. **Distribute the outer constant factor:**
    
    $$\sum_{i=1}^{n} \left( \frac{12i}{n^2} - \frac{8}{n} \right)$$
    
2. **Split into two separate sums using the Sum/Difference Rule:**
    
    $$\sum_{i=1}^{n} \frac{12i}{n^2} - \sum_{i=1}^{n} \frac{8}{n}$$
    
3. **Pull out terms acting as constants (relative to index $i$):**
    
    $$\frac{12}{n^2} \sum_{i=1}^{n} i - \frac{8}{n} \sum_{i=1}^{n} 1$$
    
4. **Substitute the closed-form summation formulas:**
    
    - Replace $\sum i$ with $\frac{n(n+1)}{2}$
        
    - Replace $\sum 1$ with $n$
        
    
    $$\frac{12}{n^2} \cdot \left[ \frac{n(n+1)}{2} \right] - \frac{8}{n} \cdot [n]$$
    
5. **Simplify the expression algebraically:**
    
    $$\left( \frac{12}{2} \cdot \frac{n^2 + n}{n^2} \right) - 8 = 6 \left( 1 + \frac{1}{n} \right) - 8 = 6 + \frac{6}{n} - 8 = -2 + \frac{6}{n}$$
    

### Problem 2: Handling Squared Index Terms

Fully expand and simplify the following Riemann sum expression into a closed-form rational function of $n$:

$$\sum_{i=1}^{n} \frac{2}{n} \left( \frac{i}{n} \right)^2$$

#### Solution:

1. **Simplify the term inside the summation first:**
    
    $$\sum_{i=1}^{n} \frac{2}{n} \cdot \frac{i^2}{n^2} = \sum_{i=1}^{n} \frac{2i^2}{n^3}$$
    
2. **Pull out the constant variables relative to $i$:**
    
    $$\frac{2}{n^3} \sum_{i=1}^{n} i^2$$
    
3. **Substitute the formula for $\sum i^2$:**
    
    $$\frac{2}{n^3} \cdot \left[ \frac{n(n+1)(2n+1)}{6} \right]$$
    
4. **Multiply out the numerator terms:**
    
    $$n(n+1)(2n+1) = n(2n^2 + 3n + 1) = 2n^3 + 3n^2 + n$$
    
5. **Combine and simplify the fraction:**
    
    $$\frac{2(2n^3 + 3n^2 + n)}{6n^3} = \frac{4n^3 + 6n^2 + 2n}{6n^3} = \frac{2}{3} + \frac{1}{n} + \frac{1}{3n^2}$$
    

## Real-Life Engineering Application Problems

### Application 1: [[Digital Signal Processing (Computing Average Signal Power)]]
[[Digital Signal Processing (Computing Average Signal Power) Solution]]


### Application 2: [[Robotics (Calculating Moment of Inertia for a Link)]]
[[Robotics (Calculating Moment of Inertia for a Link) Solution]]
