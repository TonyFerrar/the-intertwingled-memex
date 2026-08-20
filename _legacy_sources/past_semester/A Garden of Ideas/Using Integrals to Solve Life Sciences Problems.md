
# Using Integrals to Solve Life Sciences Problems
## The Real Skill: Finding the Accumulation of a Changing Quantity
In [[Session 5 - Velocity and Net Change]], we learned about using integrals to determine the net change and accumulation of changing quantities. These included distance, displacement, initial value problems, population growth, and volume changes. We will extend those concepts here - the math doesn't change, only the equations and what they represent does.

## Exponential Growth and Decay
**Exponential growth models** are used in biology to describe how the number of individuals in a population changes over time, typically using a base $e$ exponential function. The population size at any given time $t$ is represented by the formula

$$P(t) = P_0 e^{kt}$$

where $P_0$ is the initial population and $k$ is a constant specific to the growth conditions.

By applying the **Fundamental Theorem of Calculus**, the population size after a certain duration can be found by integrating the rate-of-change function, $P'(t)$, and adding the result to the initial population: 

$$P(t) = P(0) + \int_{0}^{t} P'(x) dx$$

Furthermore, if the rate of change is expressed as $P'(t) = Ce^{kt}$, the initial population can be determined by dividing the coefficient $C$ by the growth constant $k$.

**Exponential decay models** apply similar principles to decreasing populations or the declining concentration of substances within an environment, such as **caffeine levels in the bloodstream**. These models utilize a rate-of-change function with a negative exponent, **$P'(t) = -y_0 k e^{-kt}$**, where $k$ is referred to as the **decay constant**. This mathematical approach allows researchers to calculate critical biological values, such as the **half-life** of a substance or the initial amount consumed based on how much remains after a specific period of time. For instance, by observing that $80\%$ of caffeine remains in the blood after two hours, one can determine the specific decay model and predict future concentration levels.

## Concentration and Dilution
In the biological field of hemodynamics, the **dye dilution method** utilizes the concept of integration to calculate **cardiac output**, which is the volume of blood the heart pumps over a specific period. This process involves injecting a known quantity of dye ($D$) into the circulatory system and monitoring its **concentration** as it moves between two points over a designated time interval. Because the concentration is often a variable function **$C(t)$** rather than a constant, the total amount of dye must be approximated using a **Riemann sum** to account for these fluctuations over small sub-intervals. As the number of sub-intervals approaches infinity, this accumulation transforms into a **definite integral**, allowing the flow rate ($R$) to be determined by the formula 

$$R = \frac{D}{C(t_a - t_b)}$$

$$D = R \int_{t_a}^{t_b}{R C(t) dt}$$
Solving for flow rate,

$$R = \frac{D}{\int_{t_a}^{t_b}{R C(t) dt}}$$
