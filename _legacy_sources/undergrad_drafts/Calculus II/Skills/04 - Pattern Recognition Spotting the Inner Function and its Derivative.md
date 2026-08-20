# Skill 1: Pattern Recognition — Spotting the "Inner Function" and its Derivative

## 1. Guided Notes: The Core Philosophy of Skill 1

When confronted with a complex, intimidating integral, your first line of defense is always **Pattern Recognition**. The substitution rule is essentially the **Chain Rule in reverse**.

Recall from differential calculus that the Chain Rule for a composite function is written as:

$$\frac{d}{dx}[f(g(x))] = f^{\prime}(g(x))g^{\prime}(x) \text{ [cite: 29]}$$

By reversing this logic to find an antiderivative, we get:

$$\int f^{\prime}(g(x))g^{\prime}(x) \, dx = f(g(x)) + C \text{ [cite: 31]}$$

The absolute core of Skill 1 is learning how to split an integrand into two distinct roles:

1. **The Inner Function ($u$):** A function $g(x)$ that is "trapped" inside another function.
    
2. **The Derivative Partner ($du$):** The exact derivative of that inner function ($g^{\prime}(x) \, dx$), floating freely elsewhere in the integrand.
    

### How to Spot the Pattern

Train your eyes to scan for algebraic pairings. If you choose $u = g(x)$, you must be able to see its derivative $g^{\prime}(x)$ multiplying the rest of the expression. Common nesting spots for the inner function include:

- Inside a radical: $\sqrt{g(x)}$
    
- In the denominator: $\frac{1}{g(x)}$
    
- As an exponent: $e^{g(x)}$
    
- Inside a trigonometric function: $\sin(g(x))$
    

## 2. Standard Sample Problems

### Sample Problem 1: The Polynomial Pair

Evaluate the following indefinite integral:

$$\int 3x^2 \cos(x^3 + 4) \, dx$$

#### Step-by-Step Solution:

- **Step 1: Identify the inner function ($u$) and its derivative ($du$).** Looking at the integrand, $x^3 + 4$ is trapped inside the cosine function. Its derivative is $3x^2$. This is a perfect match. Let $u = x^3 + 4$ Then $du = 3x^2 \, dx$
    
- **Step 2: Substitute components into the integral.**
    
    $$\int \underbrace{\cos(x^3 + 4)}_{\cos(u)} \cdot \underbrace{3x^2 \, dx}_{du} = \int \cos(u) \, du \text{ [cite: 51]}$$
    
- **Step 3: Integrate with respect to $u$.**
    
    $$\int \cos(u) \, du = \sin(u) + C \text{ [cite: 53]}$$
    
- **Step 4: Substitute back in terms of $x$.**
    
    $$\sin(x^3 + 4) + C \text{ [cite: 54]}$$
    

### Sample Problem 2: The Hidden Fraction Pattern

Evaluate the following indefinite integral:

$$\int \frac{\ln(x)}{x} \, dx$$

#### Step-by-Step Solution:

- **Step 1: Identify the inner function ($u$) and its derivative ($du$).**
    
    This expression can be rewritten to reveal the pattern more clearly: $\int \ln(x) \cdot \frac{1}{x} \, dx$.
    
    Let $u = \ln(x)$
    
    Then $du = \frac{1}{x} \, dx$
    
- **Step 2: Substitute components into the integral.**
    
    $$\int (u) \, du$$
    
- **Step 3: Integrate using the power rule.**
    
    $$\int u^1 \, du = \frac{1}{2}u^2 + C$$
    
- **Step 4: Substitute back in terms of $x$.**
    
    $$\frac{1}{2}(\ln(x))^2 + C$$
    

## 3. Real-Life Engineering Application Problems

### Engineering Problem 1: [[Civil Engineering — Hydrostatic Force on a Curved Dam Wall]]
[[Civil Engineering — Hydrostatic Force on a Curved Dam Wall Solution]]


### Engineering Problem 2: [[Mechanical Engineering — Mechanical Shear Stress in a Shaft]]
[[Mechanical Engineering — Mechanical Shear Stress in a Shaft Solution]]
