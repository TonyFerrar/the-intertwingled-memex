## Part (a): $\{a_n\}_{n=1}^{\infty} = \left\{\frac{(-1)^n}{n^2+1}\right\}_{n=1}^{\infty}$

To find out if a sequence converges or diverges, we evaluate its limit as $n$ approaches infinity ($\infty$).

### Step 1: Handle the alternating sign using the Absolute Value Theorem

The sequence has an alternating term, $(-1)^n$, which causes the terms to flip between positive and negative. A very useful rule for this is the **Absolute Value Theorem for Sequences**, which states:

$$\text{If } \lim_{n \to \infty} \vert{}a_n\vert{} = 0, \text{ then } \lim_{n \to \infty} a_n = 0.$$

Let's take the absolute value of our sequence's formula to remove the negative signs:

$$\vert{}a_n\vert{} = \left\vert{} \frac{(-1)^n}{n^2+1} \right\vert{} = \frac{1}{n^2+1}$$

### Step 2: Take the limit

Now, we take the limit of this simplified expression as $n \to \infty$:

$$\lim_{n \to \infty} \frac{1}{n^2+1} = 0$$

**Why?** As $n$ grows infinitely large, the denominator ($n^2+1$) becomes massive. Dividing a fixed number (1) by an infinitely large number pushes the value closer and closer to $0$.

### Conclusion for (a)

Since the absolute value limit goes to $0$, the original alternating sequence must also go to $0$.

- **Result:** The sequence **converges**.
    
- **Limit Statement:** $\lim_{n \to \infty} a_n = 0$
    

## Part (b): $\{a_n\}_{n=1}^{\infty} = \{10^n - 1\}_{n=1}^{\infty}$

Let's test the behavior of this sequence as $n$ approaches infinity.

### Step 1: Observe the growth of the terms

If we plug in a few values of $n$, we can see what is happening to the sequence:

- For $n = 1$: $10^1 - 1 = 9$
    
- For $n = 2$: $10^2 - 1 = 99$
    
- For $n = 3$: $10^3 - 1 = 999$
    
- For $n = 4$: $10^4 - 1 = 9999$
    

### Step 2: Evaluate the limit

Let's look at the algebraic limit:

$$\lim_{n \to \infty} (10^n - 1)$$

As $n \to \infty$, the base of $10$ is being raised to an infinitely large exponent. Exponential growth with a base greater than 1 increases without bound. Subtracting $1$ from an infinitely large number changes nothing.

$$\lim_{n \to \infty} (10^n - 1) = \infty$$

### Conclusion for (b)

Because the terms grow larger and larger without ever settling down near a specific, finite value, the sequence cannot settle on a limit.

- **Result:** The sequence **diverges**.
    
- **Explanation:** It diverges because its terms grow without bound toward infinity ($\lim_{n \to \infty} a_n = \infty$).