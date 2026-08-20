# Full Solution and Verification

## Part 1: Complete Step-by-Step Integration Solution

### Problem
Evaluate the following indefinite integral:
$$\int \frac{\cos x}{\sin^2(x)} \, dx$$

### Step-by-Step Solution

We can rewrite the rational trigonometric function into standard trigonometric terms by splitting the fraction:
$$\frac{\cos x}{\sin^2(x)} = \frac{1}{\sin x} \cdot \frac{\cos x}{\sin x}$$

Using standard trigonometric identities:
* $\frac{1}{\sin x} = \csc(x)$
* $\frac{\cos x}{\sin x} = \cot(x)$

Now rewrite the integral expression:
$$\int \csc(x)\cot(x) \, dx$$

#### Evaluating the Integral
Recall from standard derivative rules that the derivative of $\csc(x)$ is $-\csc(x)\cot(x)$. Therefore, the antiderivative of $\csc(x)\cot(x)$ is simply negative cosecant:
$$\int \csc(x)\cot(x) \, dx = -\csc(x)$$

---

### Final Answer

Adding the constant of integration ($C$):

$$-\csc(x) + C$$

*(Alternatively, this can be written as $-\frac{1}{\sin x} + C$)*

---

## Part 2: Checking the Answer by Differentiating

To verify our result, we take the derivative of our final expression with respect to $x$:
$$\frac{d}{dx} \left( -\csc(x) + C \right)$$

We differentiate each term:

1. **First term:** Using the standard derivative rule $\frac{d}{dx}(\csc(x)) = -\csc(x)\cot(x)$:
   $$\frac{d}{dx}\left(-\csc(x)\right) = -1 \cdot \left(-\csc(x)\cot(x)\right) = \csc(x)\cot(x)$$
   
   Converting back into sine and cosine form:
   $$\csc(x)\cot(x) = \frac{1}{\sin x} \cdot \frac{\cos x}{\sin x} = \frac{\cos x}{\sin^2(x)}$$

2. **Constant term:** $$\frac{d}{dx}(C) = 0$$

Combining these results gives back our original integrand function:
$$\frac{0}{\sin^2(x)} + \frac{\cos x}{\sin^2(x)} = \frac{\cos x}{\sin^2(x)}$$

The solution is officially verified!