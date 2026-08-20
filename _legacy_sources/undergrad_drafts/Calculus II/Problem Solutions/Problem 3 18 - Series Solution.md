## Step 1: Choose a Starting Index and Align the Terms

We need to assign an index number ($n$) to each term. The most natural choice is to start at $n = 1$. Let's map our index numbers to the terms in the sequence:

- For $n = 1$: $a_1 = 1$
    
- For $n = 2$: $a_2 = -\frac{1}{4}$
    
- For $n = 3$: $a_3 = \frac{1}{9}$
    
- For $n = 4$: $a_4 = -\frac{1}{16}$
    
- For $n = 5$: $a_5 = \frac{1}{25}$
    

To build our formula, we will break the pattern down into two separate parts: **the numbers** (ignoring the signs) and **the alternating signs**.

## Step 2: Analyze the Magnitudes (The Numbers)

If we temporarily ignore the negative signs, the sequence looks like this:

$$1, \frac{1}{4}, \frac{1}{9}, \frac{1}{16}, \frac{1}{25}, \dots$$

Notice that the first term can be written as a fraction, $\frac{1}{1}$. Look closely at the denominators: $1, 4, 9, 16, 25$. These are all **perfect squares**:

- $1 = 1^2$
    
- $4 = 2^2$
    
- $9 = 3^2$ 
    
- $16 = 4^2$
    
- $25 = 5^2$
    

Because the denominator perfectly matches the square of our index number ($n$), the fractional part of our formula is:

$$\frac{1}{n^2}$$

## Step 3: Handle the Alternating Signs

The signs of the terms alternate back and forth: $\text{positive, negative, positive, negative, \dots}$

To make signs alternate in a sequence, we use a base of $-1$ raised to a power involving $n$. Let's test the options:

- If we use $(-1)^n$:
    
    - For $n = 1$: $(-1)^1 = -1$ (This is negative, but our first term is positive. This doesn't match!)
        
- If we use $(-1)^{n+1}$ (or $(-1)^{n-1}$):
    
    - For $n = 1$: $(-1)^{1+1} = (-1)^2 = 1$ (Positive $\rightarrow$ Matches!)
        
    - For $n = 2$: $(-1)^{2+1} = (-1)^3 = -1$ (Negative $\rightarrow$ Matches!)
        
    - For $n = 3$: $(-1)^{3+1} = (-1)^4 = 1$ (Positive $\rightarrow$ Matches!)
        

So, the sign regulator we need is $(-1)^{n+1}$.

## Final Answer

Combining the alternating sign piece and the fraction piece together gives us our explicit formula.

$$a_n = \frac{(-1)^{n+1}}{n^2} \quad \text{for } n \ge 1$$