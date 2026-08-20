
# Using Integrals to Solve Physics Problems

## The Real Skill: Finding the Accumulation of a Changing Quantity
In [[Session 5 - Velocity and Net Change]], we learned about using integrals to determine the net change and accumulation of changing quantities. These included distance, displacement, initial value problems, population growth, and volume changes. We will extend those concepts here - the math doesn't change, only the equations and what they represent does.

## Work from Changing Forces
When a force remains constant, work is defined simply as the product of that force and the distance an object travels ($W = F \cdot d$). However, when the force varies depending on an object's position, the calculation requires a more complex **accumulation process**. To find the total work over an interval $[a,b]$, the path is partitioned into 
$n$ small subintervals. For each small segment, the force $F(x)$ is approximated by a single value at a specific point within that segment, and the work for that piece is estimated as $F(c_i​) \Delta x$. Summing these individual pieces creates a **Riemann sum** that approximates the total energy needed for the entire displacement.

$$\text{Work} = W = \sum_{i=1}^{n}{F(c_i) \Delta x}$$
As the number of these subintervals approaches infinity ($n \rightarrow \infty$), the sum transforms into a **definite integral**, which provides the exact value for work done by a variable force. If an object is moved along the $x$-axis from point $x=a$ to point $x=b$, the work is defined as 

$$W = \int_a^b{​F(x)dx}$$
This fundamental principle remains the same regardless of the axis of motion; for an object moving vertically along the $y$-axis from point $y=c$ to $y=d$ under a variable force $F(y)$, the work is calculated using the integral

$$W = \int_c^d{​F(y)dy}$$


## Hooke's Law
**Hooke’s Law** describes a variable force where the energy required to stretch or compress a spring is proportional to its displacement from equilibrium, modeled by the function $F(x)=k \cdot x$. In this formula, $k$ is the spring constant that measures stiffness, and the direction of the force typically matches the direction of the displacement—being positive when stretched and negative when compressed. Because the force changes as the spring moves, the total **work** must be calculated using a **definite integral** to accumulate these varying values over a specific interval. Consequently, the work done in moving a spring from an initial position a to a final position b is determined by evaluating the integral 

$$ W = \int_a^b{​k \cdot x \, dx}$$

### Finding the Spring Constant
To calculate the **spring constant** k, you use **Hooke’s Law**, which is represented by the function $F(x)=k \cdot x$. In this equation, $F(x)$ represents the force applied to the spring, and $x$ represents the spring's displacement from its equilibrium position ($x=0$).

To find the value of $k$ for a specific spring, you can follow these steps:

1. **Identify the Force and Displacement:** Determine the specific amount of force required to hold a spring at a certain distance from its equilibrium.
2. **Apply the Formula:** Substitute the known force and displacement into the Hooke's Law equation. For example, if a force of $30 \, N$ is required to stretch a spring $0.2 \, m$, the equation becomes $30 = k \cdot (0.2)$.
3. **Solve for $k$:** Divide the force by the displacement ($k=F/x$). In the previous example, $k=30/0.2$, resulting in a spring constant of $150 N/m$.

**Key Considerations:**
- **Stiffness:** The constant k measures the **stiffness** of the spring; a higher value indicates a spring that is harder to stretch or compress.
- **Direction of Force:** By convention, the direction of the force is the same as the displacement. When a spring is **compressed**, the force and displacement are typically treated as **negative**; when it is **stretched**, they are **positive**.
- **Applicability:** This calculation only applies to springs that obey Hooke’s Law, as not all springs follow this linear relationship.

## Lifting Heavy Ropes and Chains
Lifting a heavy rope or chain requires integration because the **force needed to move it is variable**, as the weight of the remaining material decreases as more of the rope reaches the top. While work for a constant mass is simply the product of force and distance ($W=mgy$), a rope's mass is distributed across its entire length ($L$), meaning each individual segment must be moved a different distance ($L−y$) to reach the destination. By **partitioning the rope** into tiny sub-intervals ($\Delta y$) based on its density ($\rho$), we can approximate the work for each small piece and sum them together as a **Riemann sum**. As the number of these segments approaches infinity, this accumulation process transforms into the **definite integral** 

$$W = \int_0^L{​ρg(L−y)\, dy}$$

This integral provides the exact total energy required to lift the entire variable mass.

The process for calculating this work involves the following components:

- **Determine the Variable Force:** The force for any small segment of the chain is its weight, which is the product of its mass and gravitational acceleration ($g \approx 9.8 \text{ m/s}^2$). If the chain has a constant **density** ($\rho$), the mass of a small segment ($\Delta y$) is $\rho \Delta y$, making the force for that piece $\rho g \Delta y$.
- **Identify the Distance:** If the total length of the chain is $L$ and the ground is at $y=0$, a segment located at a height $y$ must be moved a distance of **$L - y$** to reach the top.
- **Set Up the Integral:** By partitioning the chain into $n$ subintervals and summing the work for each piece, you create a **Riemann sum**. As the number of segments approaches infinity, this sum becomes the following definite integral used to calculate the total work ($W$): 

$$W = \int_{0}^{L} \rho g (L - y) \, dy$$

