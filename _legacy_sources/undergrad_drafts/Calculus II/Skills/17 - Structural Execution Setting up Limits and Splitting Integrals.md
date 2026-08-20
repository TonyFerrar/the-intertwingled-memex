# Skill 2: Structural Execution – Setting up Limits and Splitting Integrals

## Conceptual Notes

Once you have diagnosed an integral as improper, you cannot evaluate it using standard plugging-and-chugging methods. The Fundamental Theorem of Calculus strictly requires the integration interval $[a, b]$ to be closed and the function to be continuous. To get around this, you must use **Structural Execution**: replacing the problem areas with a variable and setting up a formal limit expression.

There are two major structural mechanics you must master:

### 1. Translating Singularities into Limits

You must strip away the improper component ($\infty$, $-\infty$, or a vertical asymptote) and substitute a dummy variable (usually $t$, $s$, $b$, or $c$), then evaluate the limit as that variable approaches the problem point.

- **For Type I (Infinite Bounds):** Replace $\infty$ with $t$ and evaluate $\lim_{t \to \infty}$.
    
- **For Type II (Asymptotes):** You must use **one-sided limits** because the function only exists on the side of the asymptote that falls within the integration zone. If the asymptote is at the lower bound $a$, approach from the right ($\lim_{t \to a^+}$). If it is at the upper bound $b$, approach from the left ($\lim_{t \to b^-}$).
    

### 2. Splitting the Domain of Integration

You cannot evaluate a limit at two different problem zones simultaneously. If an integral contains more than one "impropriety," you must structurally split the integral into separate, independent pieces at a convenient interior point.

- **Doubly Unbounded Domains ($-\infty$ to $\infty$):** Split the domain at a baseline integer (usually $0$):
    
    $$\int_{-\infty}^{\infty} f(x) \, dx = \lim_{s \to -\infty} \int_{s}^{0} f(x) \, dx + \lim_{t \to \infty} \int_{0}^{t} f(x) \, dx$$
    
- **Interior Discontinuities:** If a vertical asymptote occurs at a point $c$ hidden inside the interval $[a, b]$, you must split the integral exactly at $x = c$:
    
    $$\int_{a}^{b} f(x) \, dx = \lim_{b \to c^-} \int_{a}^{b} f(x) \, dx + \lim_{c \to c^+} \int_{c}^{b} f(x) \, dx$$
    

> ⚠️ **The Absolute Convergence Rule:** For the entire original integral to converge, **every single individual piece must converge independently**. If even one piece blows up to infinity (diverges), the entire integral is declared divergent. You cannot subtract $\infty$ from $\infty$ to cancel them out.

## Standard Sample Problems

### Sample Problem 1: Doubly Infinite Bounds (Type I Splitting)

**Problem:** Structurally execute and evaluate the following integral:

$$\int_{-\infty}^{\infty} \frac{1}{1+x^2} \, dx$$

#### **Step 1: Structural Setup**

Both bounds are infinite. Split the domain at $x = 0$ and introduce two independent limit expressions using variables $s$ and $t$:

$$\int_{-\infty}^{\infty} \frac{1}{1+x^2} \, dx = \lim_{s \to -\infty} \int_{s}^{0} \frac{1}{1+x^2} \, dx + \lim_{t \to \infty} \int_{0}^{t} \frac{1}{1+x^2} \, dx$$

#### **Step 2: Integration and Limit Execution**

The standard antiderivative is $\arctan(x)$. Evaluate both pieces separately:

- **Left Piece:**
    
    $$\lim_{s \to -\infty} \left[ \arctan(x) \right]_s^0 = \lim_{s \to -\infty} (\arctan(0) - \arctan(s))$$
    
    Since $\arctan(0) = 0$ and $\lim_{s \to -\infty} \arctan(s) = -\frac{\pi}{2}$:
    
    $$= 0 - \left(-\frac{\pi}{2}\right) = \frac{\pi}{2}$$
    
- **Right Piece:**
    
    $$\lim_{t \to \infty} \left[ \arctan(x) \right]_0^t = \lim_{t \to \infty} (\arctan(t) - \arctan(0))$$
    
    Since $\lim_{t \to \infty} \arctan(t) = \frac{\pi}{2}$:
    
    $$= \frac{\pi}{2} - 0 = \frac{\pi}{2}$$
    

#### **Step 3: Combine**

Since both individual pieces converged to finite values, add them together:

$$\frac{\pi}{2} + \frac{\pi}{2} = \pi$$

### Sample Problem 2: Hidden Interior Discontinuity (Type II Splitting)

**Problem:** Structurally execute and evaluate the following integral:

$$\int_{0}^{3} \frac{1}{(x-1)^{2/3}} \, dx$$

#### **Step 1: Structural Setup**

The bounds ($0$ and $3$) look normal, but the denominator goes to zero at $x = 1$. Because $1$ lies directly inside the interval $[0, 3]$, you must split the domain at $x = 1$:

$$\int_{0}^{3} \frac{1}{(x-1)^{2/3}} \, dx = \lim_{b \to 1^-} \int_{0}^{b} (x-1)^{-2/3} \, dx + \lim_{c \to 1^+} \int_{c}^{3} (x-1)^{-2/3} \, dx$$

#### **Step 2: Integration and Limit Execution**

Using the power rule, the antiderivative is $3(x-1)^{1/3}$.

- **Left Piece (Approaching 1 from the left):**
    
    $$\lim_{b \to 1^-} \left[ 3(x-1)^{1/3} \right]_0^b = \lim_{b \to 1^-} \left( 3(b-1)^{1/3} - 3(0-1)^{1/3} \right)$$
    
    $$= 3(0) - 3(-1) = 3$$
    
- **Right Piece (Approaching 1 from the right):**
    
    $$\lim_{c \to 1^+} \left[ 3(x-1)^{1/3} \right]_c^3 = \lim_{c \to 1^+} \left( 3(3-1)^{1/3} - 3(c-1)^{1/3} \right)$$
    
    $$= 3(2)^{1/3} - 3(0) = 3\sqrt[3]{2}$$
    

#### **Step 3: Combine**

Both sections converge independently, so the total integral converges to their sum:

$$3 + 3\sqrt[3]{2}$$

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Electrical Engineering & Signal Processing (Total Signal Energy)]]
[[Electrical Engineering & Signal Processing (Total Signal Energy) Solution]]


### Engineering Problem 2: [[Thermal & Mechanical Engineering (Point-Source Stress Fields)]]
[[Thermal & Mechanical Engineering (Point-Source Stress Fields) Solution]]


### Engineering Problem 3: [[Safety & Reliability Engineering (Multi-Phase System Risk Lifecycle)]]
[[Safety & Reliability Engineering (Multi-Phase System Risk Lifecycle) Solution]]
