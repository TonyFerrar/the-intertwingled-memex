## Part (a): What is the population of the town, $P(t)$, at time $t$?

### **Concept Explanation**

We are given the annual rate of population growth, $P'(t)$, which is the derivative of the population function. To find the original population function $P(t)$, we need to perform the reverse operation: integration.

$$P(t) = \int P'(t) \, dt$$

Integrating a rate of change gives us a general function with an unknown constant $+ C$. We can find the exact value of $C$ by using the initial condition provided in the problem: the initial population ($t = 0$) is 250 people.

### **Step-by-Step Calculation**

**Step 1: Set up the indefinite integral** Substitute the rate of growth function into the integral:

$$P(t) = \int 30(1 + \sqrt{t}) \, dt$$

**Step 2: Simplify the integrand**

To make integration easier, rewrite the square root as a fractional exponent ($\sqrt{t} = t^{1/2}$) and factor out or distribute the constant 30:

$$P(t) = 30 \int (1 + t^{1/2}) \, dt$$

**Step 3: Integrate term by term**

Apply the power rule ($\int t^n \, dt = \frac{t^{n+1}}{n+1}$) to each term inside the parentheses:

- The integral of $1$ is $t$.
    
- The integral of $t^{1/2}$ is $\frac{t^{3/2}}{3/2} = \frac{2}{3}t^{3/2}$.
    

Now, multiply these terms by the 30 out front and add the constant of integration $C$:

$$P(t) = 30 \left( t + \frac{2}{3}t^{3/2} \right) + C$$

Distribute the 30:

$$P(t) = 30t + 20t^{3/2} + C$$

**Step 4: Solve for the constant $C$ using the initial condition** We are told the initial population is 250, meaning $P(0) = 250$. Plug $t = 0$ into our function:

$$250 = 30(0) + 20(0)^{3/2} + C$$

$$250 = 0 + 0 + C$$

$$C = 250$$

**Step 5: Write the final population function**

Substitute $C = 250$ back into your equation:

$$P(t) = 30t + 20t^{3/2} + 250$$

### **Final Answer for (a)**

The population of the town at any time $t$ is given by the function **$P(t) = 30t + 20t^{3/2} + 250$**.

## Part (b): How has the population changed after 9 years?

### **Concept Explanation**

This question asks for the **net change** in population over a 9-year interval ($t = 0$ to $t = 9$). According to the Net Change Theorem, the net change of a quantity is the definite integral of its rate of change:

$$\text{Net Change} = \int_{0}^{9} P'(t) \, dt$$

Alternatively, since we already solved for the specific population function $P(t)$ in Part (a), we can simply find the difference between the population at year 9 and the starting population:

$$\text{Net Change} = P(9) - P(0)$$

### **Step-by-Step Calculation**

**Step 1: Evaluate the population at $t = 9$**

Plug $t = 9$ into the equation found in Part (a):

$$P(9) = 30(9) + 20(9)^{3/2} + 250$$

**Step 2: Simplify the exponential term**

To calculate $9^{3/2}$, take the square root of 9 first, then cube the result:

$$\sqrt{9} = 3 \longrightarrow 3^3 = 27$$

So, $9^{3/2} = 27$.

**Step 3: Finish evaluating $P(9)$**

$$P(9) = 270 + 20(27) + 250$$

$$P(9) = 270 + 540 + 250$$

$$P(9) = 1,060 \text{ people}$$

**Step 4: Calculate the net change**

Subtract the initial population from the population at year 9:

$$\text{Net Change} = P(9) - P(0)$$

$$\text{Net Change} = 1,060 - 250 = 810 \text{ people}$$

_(Note: If you calculated this using the definite integral $\left[ 30t + 20t^{3/2} \right]_{0}^{9}$, you would get $270 + 540 = 810$ directly.)_

### **Final Answer for (b)**

After 9 years, the population has increased by **810 people**.