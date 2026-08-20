# Full Solution and Verification

## Part 1: Complete Step-by-Step Solution

### Problem
Solve the following initial value problem:
$$\frac{dy}{dx} = \frac{4}{1+x^2}; \quad y(1) = \frac{\pi}{2}$$

### Step-by-Step Solution

#### Step 1: Find the general solution $y(x)$
To solve for $y$, we integrate the derivative with respect to $x$:
$$y = \int \frac{4}{1+x^2} \, dx$$

By using the constant multiple rule, we can factor out the $4$:
$$y = 4 \int \frac{1}{1+x^2} \, dx$$

Recall the standard inverse trigonometric integration formula:
$$\int \frac{1}{1+x^2} \, dx = \arctan(x)$$

Applying this rule and adding the constant of integration ($C$) gives the general solution:
$$y = 4\arctan(x) + C$$

#### Step 2: Use the initial condition to solve for $C$
We are given that when $x = 1$, the function value is $y = \frac{\pi}{2}$. Substitute these values into our general solution:
$$\frac{\pi}{2} = 4\arctan(1) + C$$

Recall that $\arctan(1) = \frac{\pi}{4}$ (since $\tan(\frac{\pi}{4}) = 1$):
$$\frac{\pi}{2} = 4\left(\frac{\pi}{4}\right) + C$$
$$\frac{\pi}{2} = \pi + C$$

Subtract $\pi$ from both sides to solve for $C$:
$$C = \frac{\pi}{2} - \pi$$
$$C = -\frac{\pi}{2}$$

---

### Final Answer

Substitute $C = -\frac{\pi}{2}$ back into the general solution equation to obtain the specific function:

$$y = 4\arctan(x) - \frac{\pi}{2}$$

---

## Part 2: Checking the Answer by Differentiating

To verify our result, we compute the derivative of our final function with respect to $x$ to see if it matches $\frac{dy}{dx}$, and check the initial condition.

1. **Differentiate the function:**
   $$\frac{dy}{dx} = \frac{d}{dx} \left( 4\arctan(x) - \frac{\pi}{2} \right)$$
   $$\frac{dy}{dx} = 4 \cdot \left(\frac{1}{1+x^2}\right) - 0$$
   $$\frac{dy}{dx} = \frac{4}{1+x^2}$$
   *(This perfectly matches the given derivative.)*

2. **Verify the initial condition:**
   $$y(1) = 4\arctan(1) - \frac{\pi}{2}$$
   $$y(1) = 4\left(\frac{\pi}{4}\right) - \frac{\pi}{2}$$
   $$y(1) = \pi - \frac{\pi}{2} = \frac{\pi}{2}$$
   *(This perfectly matches the given initial condition $y(1) = \frac{\pi}{2}$.)*

The solution is officially verified!