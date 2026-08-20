---
title: "Session 14 - Integration by Parts"
type: course-session
course: MATH-182
semester: Fall 2026
publish: true
cssclasses: []
updated: 2026-08-18
---

# Session 14 - Integration by Parts

## Session Objectives
By the end of this session, you will be able to:
- Algebraic Bookkeeping and Boundary Tracking
- Fluency in Core Calculus Operations (Moving in Both Directions)
- Strategic Selection (The LIATE Rule & The Invisible 1 Trick)

## Session Timeline
- **00:00 - 00:10 (10 mins)**: Micro-Lecture
- **00:10 - 00:25 (15 mins)**: Skill Block 1
- **00:25 - 00:30 (5 mins)**: Regroup 1
- **00:30 - 00:45 (15 mins)**: Skill Block 2
- **00:45 - 00:50 (5 mins)**: Regroup 2
- **00:50 - 01:05 (15 mins)**: Skill Block 3
- **01:05 - 01:10 (5 mins)**: Regroup 3
- **01:10 - 01:15 (5 mins)**: Synthesis Wrap-up

## Session Content

### Micro-Lecture
#### Engineering Context: Engineering Calculus II Application
Integration by parts transitions from a classroom exercise into a vital engineering tool whenever physical systems become dynamic, non-linear, or change over time. In mechanical and aerospace engineering, calculating critical structural properties like a chassis' center of mass or moment of inertia requires finding the volume of a solid, an operation that frequently forces engineers to integrate a distance variable multiplied by a geometric curve. Meanwhile, electrical and audio engineers rely on the technique daily to compute Laplace and Fourier transforms for signal processing, which isolates clean frequencies from messy data streams by integrating products of algebraic and exponential functions. Finally, in civil and chemical engineering, this math is fundamental to solving the complex differential equations that govern heat transfer or fluid dynamics; by utilizing partial integration to transform these intractable differential equations into a simplified "weak form," engineers can program Finite Element Method (FEM) simulators to predict exactly when and where a skyscraper or a nuclear reactor might fail under stress.

### Skill Block 1
## Conceptual Notes

Once you have learned how to select your variables (Skill 1) and execute the calculus operations (Skill 2), the final hurdle is maintaining the organizational stamina required to cross the finish line. In many real-world applications, an integration by parts problem cannot be solved in a single stage. Instead, you must carefully juggle layered algebraic constants and manage boundary evaluations.

### 1. Repeated Integration by Parts

When an integrand contains an algebraic term with an exponent greater than 1 (such as $x^2$ or $x^3$), it acts as a mechanical countdown timer. Each iteration of the integration by parts formula drops the degree of that exponent by exactly one.

The primary danger zone here is **bookkeeping**. When nesting a second integration by parts formula directly inside the leftover integral of the first round, failing to use brackets will cause catastrophic distribution errors with negative signs and scalar coefficients.

> **Pro-Tip Checklist for Repeated Rounds:**
> 
> - Keep your primary $uv$ term completely isolated out front.
>     
> - Wrap the entire secondary integration by parts expression in large brackets. * Explicitly distribute the negative sign and any constant multipliers to _all_ terms inside those brackets before trying to simplify.
>     

### 2. Definite Integration by Parts

When evaluating physical systems with fixed spatial or temporal boundaries, the integration by parts formula must be combined with the Fundamental Theorem of Calculus. The formal notation is expressed using differentials:

$$\int_{a}^{b} u \, dv = \left. uv \right|_{a}^{b} - \int_{a}^{b} v \, du$$

It is crucial to remember that the lower limit $a$ and upper limit $b$ represent strict $x$-values (or independent variable boundaries). This boundary tracking can be managed in one of two ways:

1. **Immediate Evaluation:** Apply the boundaries $\left. uv \right|_{a}^{b}$ right away to compute a standalone number, then focus entirely on the remaining definite integral.
    
2. **Global Evaluation:** Treat the problem as an indefinite integral to find the complete, combined antiderivative first, and then plug the boundaries into the entire expression at the very end.
    

## Sample Problems

### Sample Problem 1: Repeated Integration (The Exponent Countdown)

**Evaluate:**

$$\int x^2 e^{3x} \, dx$$

**Solution:**

- **Round 1 Setup:** Let $u = x^2 \implies du = 2x \, dx$ and let $dv = e^{3x} \, dx \implies v = \frac{1}{3}e^{3x}$.
    
- **Apply Formula:**
    
    $$\int x^2 e^{3x} \, dx = \frac{1}{3}x^2 e^{3x} - \int \frac{2}{3}x e^{3x} \, dx = \frac{1}{3}x^2 e^{3x} - \frac{2}{3} \underbrace{\int x e^{3x} \, dx}_{\text{Requires Round 2}}$$
    
- **Round 2 Setup:** For the inner integral, let $u = x \implies du = dx$ and let $dv = e^{3x} \, dx \implies v = \frac{1}{3}e^{3x}$.
    
- **Nested Execution (Using Brackets):**
    
    $$\int x^2 e^{3x} \, dx = \frac{1}{3}x^2 e^{3x} - \frac{2}{3} \left[ \frac{1}{3}xe^{3x} - \int \frac{1}{3}e^{3x} \, dx \right]$$
    
    $$\int x^2 e^{3x} \, dx = \frac{1}{3}x^2 e^{3x} - \frac{2}{3} \left[ \frac{1}{3}xe^{3x} - \frac{1}{9}e^{3x} \right] + C$$
    
- **Distribute Coefficients Carefully:**
    
    $$\int x^2 e^{3x} \, dx = \frac{1}{3}x^2 e^{3x} - \frac{2}{9}xe^{3x} + \frac{2}{27}e^{3x} + C$$
    

### Sample Problem 2: Definite Integration by Parts

**Evaluate:**

$$\int_{1}^{e} x^2 \ln x \, dx$$

**Solution:**

- **Setup via LIATE:** Let $u = \ln x \implies du = \frac{1}{x} \, dx$ and let $dv = x^2 \, dx \implies v = \frac{1}{3}x^3$.
    
- **Apply Definite Formula:**
    
    $$\int_{1}^{e} x^2 \ln x \, dx = \left[ \frac{1}{3}x^3 \ln x \right]_{1}^{e} - \int_{1}^{e} \left(\frac{1}{3}x^3\right)\left(\frac{1}{x}\right) \, dx$$
    
    $$\int_{1}^{e} x^2 \ln x \, dx = \left[ \frac{1}{3}x^3 \ln x \right]_{1}^{e} - \frac{1}{3} \int_{1}^{e} x^2 \, dx = \left[ \frac{1}{3}x^3 \ln x - \frac{1}{9}x^3 \right]_{1}^{e}$$
    
- **Evaluate Boundaries (Upper minus Lower):**
    
    - **Upper ($x = e$):** $\frac{1}{3}e^3 \ln(e) - \frac{1}{9}e^3 = \frac{1}{3}e^3(1) - \frac{1}{9}e^3 = \frac{2}{9}e^3$
        
    - **Lower ($x = 1$):** $\frac{1}{3}(1)^3 \ln(1) - \frac{1}{9}(1)^3 = 0 - \frac{1}{9} = -\frac{1}{9}$
        
        $$\text{Total} = \left(\frac{2}{9}e^3\right) - \left(-\frac{1}{9}\right) = \frac{2e^3 + 1}{9} \approx 4.5706$$
        

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Civil & Structural Engineering (Finite Element Method & Localized Stress Profiling)]]
[[Civil & Structural Engineering (Finite Element Method & Localized Stress Profiling) Solution]]


### Engineering Problem 2: [[Electrical Engineering (Fourier Analysis of AC Signal Power Surges)]]
[[Electrical Engineering (Fourier Analysis of AC Signal Power Surges) Solution]]

#### Worked Example
1. $$\int x \sin x \, dx$$

##### Solution
###### Step-by-Step Solution: $\int x \sin x \, dx$

###### 1. The Integration by Parts Formula

The integration by parts formula is a technique based on the product rule of differentiation:

$$\int u \, dv = uv - \int v \, du$$

To choose which part of the function should be $u$ and which should be $dv$, a helpful guideline is the **LIATE** rule (ordered from top priority to bottom):

- **L**ogarithmic functions

- **I**nverse trigonometric functions

- **A**lgebraic functions (e.g., $x, x^2$)

- **T**rigonometric functions (e.g., $\sin x, \cos x$)

- **E**xponential functions


###### 2. Identifying $u$ and $dv$

In our integral, we have an algebraic term ($x$) and a trigonometric term ($\sin x$). Since **A**lgebraic comes before **T**rigonometric in LIATE, we assign them as follows:

- **Choose $u$**: $u = x$

- **Choose $dv$**: $dv = \sin x \, dx$


Next, we differentiate $u$ to find $du$, and integrate $dv$ to find $v$:

- **Find $du$**: $du = 1 \cdot dx = dx$

- **Find $v$**: $v = \int \sin x \, dx = -\cos x$


###### 3. Applying the Formula

Now, substitute our pieces ($u$, $v$, $du$, and $dv$) into the integration by parts formula:

$$\int x \sin x \, dx = \underbrace{(x)}_{u}\underbrace{(-\cos x)}_{v} - \int \underbrace{(-\cos x)}_{v} \underbrace{\vphantom{(-\cos x)}dx}_{du}$$

Simplify the expression by factoring out the negative sign from the remaining integral:

$$\int x \sin x \, dx = -x \cos x + \int \cos x \, dx$$

###### 4. Final Integration

Evaluate the final simple integral ($\int \cos x \, dx = \sin x$) and add the constant of integration ($C$):

$$\int x \sin x \, dx = -x \cos x + \sin x + C$$

###### Final Answer

$$\mathbf{-x \cos x + \sin x + C}$$
#### Active Practice Problem
2. $$\int x^2 \cos x \, dx$$

##### Workspace

##### Solution
This one is a classic sequel! Since we have an $x^2$ term here, we are going to use the **Integration by Parts** formula twice to completely break it down.

Here is the step-by-step solution for $\int x^2 \cos x \, dx$.

###### Step-by-Step Solution: $\int x^2 \cos x \, dx$

###### 1. First Round of Integration by Parts

We use the same **LIATE** strategy as before. We have an algebraic term ($x^2$) and a trigonometric term ($\cos x$).

- **Choose $u$**: $u = x^2$

- **Choose $dv$**: $dv = \cos x \, dx$


Now, find $du$ by differentiating and $v$ by integrating:

- **Find $du$**: $du = 2x \, dx$

- **Find $v$**: $v = \int \cos x \, dx = \sin x$


Plug these into the integration by parts formula ($\int u \, dv = uv - \int v \, du$):

$$\int x^2 \cos x \, dx = \underbrace{(x^2)}_{u}\underbrace{(\sin x)}_{v} - \int \underbrace{(\sin x)}_{v} \underbrace{(2x \, dx)}_{du}$$

Clean it up a bit by pulling the constant $2$ out of the integral:

$$\int x^2 \cos x \, dx = x^2 \sin x - 2 \int x \sin x \, dx$$

###### 2. Second Round of Integration by Parts

Look at that remaining integral: $\int x \sin x \, dx$. It still has a product of two different functions, so we need to apply integration by parts a second time just for this piece.

For $\int x \sin x \, dx$:

- **Choose $u$**: $u = x \implies du = dx$

- **Choose $dv$**: $dv = \sin x \, dx \implies v = -\cos x$


Apply the formula to just this internal section:

$$\int x \sin x \, dx = (x)(-\cos x) - \int (-\cos x) \, dx$$

$$\int x \sin x \, dx = -x \cos x + \int \cos x \, dx$$

$$\int x \sin x \, dx = -x \cos x + \sin x$$

###### 3. Bringing It All Together

Now, substitute the result of our second round back into our original equation from Step 1.

**Watch the brackets and negative signs closely here!** The $-2$ needs to distribute to both terms.

$$\int x^2 \cos x \, dx = x^2 \sin x - 2 \left[ -x \cos x + \sin x \right]$$

Distribute the $-2$:

$$\int x^2 \cos x \, dx = x^2 \sin x + 2x \cos x - 2 \sin x$$

Add the constant of integration ($C$) to cross the finish line.

###### Final Answer

$$\mathbf{x^2 \sin x + 2x \cos x - 2 \sin x + C}$$

### Regroup 1
- Review common misconceptions and clarify key notations.

### Skill Block 2
## Conceptual Notes

Once you have successfully used the LIATE rule to assign your $u$ and $dv$ variables, the setup phase is over, and the execution phase begins. The core mechanics of the integration by parts formula—$\int u \, dv = uv - \int v \, du$ —demand that you execute two entirely opposite calculus operations simultaneously:

1. 
**Differentiating $u$** to find the differential $du$ ($u = f(x) \implies du = f'(x)dx$). This is a "forward" operation that tears a function down into its rate of change.


2. 
**Integrating $dv$** to find the function $v$ ($v = \int g'(x)dx$). This is a "backward" operation that builds a component function up from its rate of change.



```
                       ┌───────[ u ]───────┐
                       │   Differentiate   │
                       ▼                   ▼
                     [ du ]              [  v ]
                       ▲                   ▲
                       │     Integrate     │
                       └──────[ dv ]───────┘

```

### The Two Most Common Friction Points

* **Trigonometric Sign Reversals:** The most common mistakes are simple sign errors caused by switching back and forth between derivatives and antiderivatives. For example, the derivative of $\cos x$ is $-\sin x$ , but the integral of $\cos x$ is $+\sin x$. Forgetting which direction you are moving mid-problem will completely derail your signs.


* **Inner Linear Adjustments (The Quick Chain Rule):** When integrating terms like $dv = e^{-3x} \, dx$ or $dv = \cos(2x) \, dx$, you must account for the inner linear constant. Instead of multiplying by the constant (like you do in differentiation), you must divide by it (e.g., $v = -\frac{1}{3}e^{-3x}$ or $v = \frac{1}{2}\sin(2x)$).

As noted in your guided materials, you can safely ignore the constant of integration ($+C$) during this intermediate step and simply apply a single $+C$ at the very end of the final integration process.

---

## Sample Problems

### Sample Problem 1: Navigating Bidirectional Trigonometric Signs

**Evaluate:** 

$$\int x \cos(3x) \, dx$$

**Solution:**

1. **Identify and Separate:** Using LIATE, Algebraic ($x$) outranks Trigonometric ($\cos(3x)$).
* **Differentiate $u$:** $u = x \implies du = dx$
* **Integrate $dv$:** $dv = \cos(3x) \, dx \implies v = \frac{1}{3}\sin(3x)$ *(Note the division by 3 due to the inner linear term)*


2. **Assemble the Parts:**

$$\int x \cos(3x) \, dx = (x)\left(\frac{1}{3}\sin(3x)\right) - \int \left(\frac{1}{3}\sin(3x)\right) \, dx$$


3. **Execute Final Integration:** Now, integrate $\sin(3x)$. Remember, the integral of $\sin(x)$ is $-\cos(x)$, which will create a double negative:

$$\int x \cos(3x) \, dx = \frac{1}{3}x\sin(3x) - \frac{1}{3} \left(-\frac{1}{3}\cos(3x)\right) + C$$


$$\int x \cos(3x) \, dx = \frac{1}{3}x\sin(3x) + \frac{1}{9}\cos(3x) + C$$



### Sample Problem 2: Handling Fractional Exponents

**Evaluate:** 

$$\int \sqrt{x} \ln x \, dx$$

**Solution:**

1. **Identify and Separate:** Logarithmic ($\ln x$) outranks Algebraic ($\sqrt{x} = x^{1/2}$).
* **Differentiate $u$:** $u = \ln x \implies du = \frac{1}{x} \, dx$
* **Integrate $dv$:** $dv = x^{1/2} \, dx \implies v = \frac{2}{3}x^{3/2}$ *(Using the power rule for integration)*


2. **Assemble the Parts:**

$$\int \sqrt{x} \ln x \, dx = \left(\ln x\right)\left(\frac{2}{3}x^{3/2}\right) - \int \left(\frac{2}{3}x^{3/2}\right)\left(\frac{1}{x} \, dx\right)$$


3. **Simplify and Execute:** Algebraically clean up the remaining integral before integrating. Remember that $\frac{x^{3/2}}{x} = x^{1/2}$:

$$\int \sqrt{x} \ln x \, dx = \frac{2}{3}x^{3/2}\ln x - \frac{2}{3}\int x^{1/2} \, dx$$


$$\int \sqrt{x} \ln x \, dx = \frac{2}{3}x^{3/2}\ln x - \frac{2}{3}\left(\frac{2}{3}x^{3/2}\right) + C$$


$$\int \sqrt{x} \ln x \, dx = \frac{2}{3}x^{3/2}\ln x - \frac{4}{9}x^{3/2} + C$$



---

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Aerospace Propulsion (Turbine Blade Balancing)]]
[[Aerospace Propulsion (Turbine Blade Balancing) Solution]]

### Engineering Problem 2: [[Electrical Engineering (Surge Protector Thermal Dissipation)]]
[[Electrical Engineering (Surge Protector Thermal Dissipation) Solution]]

#### Worked Example
3. $$\int x \ln x \, dx$$

##### Solution
Here is the step-by-step solution for $\int x \ln x \, dx$.

###### Step-by-Step Solution: $\int x \ln x \, dx$

###### 1. The Strategy (LIATE Rule)

As a reminder, we use the **LIATE** priority list to choose our $u$:

- **L**ogarithmic functions ($\ln x$)

- **I**nverse trigonometric functions

- **A**lgebraic functions ($x, x^2$)

- **T**rigonometric functions

- **E**xponential functions


Notice that **L**ogarithmic comes _before_ **A**lgebraic. If we tried to make $dv = \ln x \, dx$, we'd get stuck because integrating $\ln x$ requires its own integration by parts process!

###### 2. Identifying $u$ and $dv$

Following LIATE, we set it up like this:

- **Choose $u$**: $u = \ln x$

- **Choose $dv$**: $dv = x \, dx$


Now, differentiate $u$ and integrate $dv$:

- **Find $du$**: $du = \frac{1}{x} \, dx$

- **Find $v$**: $v = \int x \, dx = \frac{1}{2}x^2$


###### 3. Applying the Formula

Substitute these components into the integration by parts formula ($\int u \, dv = uv - \int v \, du$):

$$\int x \ln x \, dx = \underbrace{(\ln x)}_{u}\underbrace{\left(\frac{1}{2}x^2\right)}_{v} - \int \underbrace{\left(\frac{1}{2}x^2\right)}_{v} \underbrace{\left(\frac{1}{x} \, dx\right)}_{du}$$

Let's clean up that remaining integral. Notice how nicely the $x^2$ and $\frac{1}{x}$ simplify:

$$\int x \ln x \, dx = \frac{1}{2}x^2 \ln x - \int \frac{1}{2}x \, dx$$

Pull the constant $\frac{1}{2}$ outside the integral:

$$\int x \ln x \, dx = \frac{1}{2}x^2 \ln x - \frac{1}{2} \int x \, dx$$

###### 4. Final Integration

Now, just integrate the remaining $x$:

$$\int x \, dx = \frac{1}{2}x^2$$

Multiply this by the $\frac{1}{2}$ already outside the integral, and add the constant of integration ($C$):

$$\int x \ln x \, dx = \frac{1}{2}x^2 \ln x - \frac{1}{2}\left(\frac{1}{2}x^2\right) + C$$

$$\int x \ln x \, dx = \frac{1}{2}x^2 \ln x - \frac{1}{4}x^2 + C$$

###### Final Answer

$$\mathbf{\frac{1}{2}x^2 \ln x - \frac{1}{4}x^2 + C}$$

_(Note: You can also factor out $\frac{1}{4}x^2$ to write it as $\frac{1}{4}x^2(2\ln x - 1) + C$, both are perfectly correct!)_
#### Active Practice Problem
4. $$\int \tan^{-1}x \, dx$$

##### Workspace

##### Solution
$$\int (\tan^{-1}x \cdot 1) \, dx$$

By pairing integration by parts with a quick $u$-substitution at the end, we can crack it wide open. Here is the step-by-step breakdown.

###### Step-by-Step Solution: $\int \tan^{-1}x \, dx$

###### 1. The Strategy (LIATE Rule)

Let's check our **LIATE** priority list to choose our $u$:

- **L**ogarithmic functions

- **I**nverse trigonometric functions ($\tan^{-1}x$) $\rightarrow$ **Top priority!**

- **A**lgebraic functions

- **T**rigonometric functions

- **E**xponential functions


Since Inverse Trigonometric sits right near the top, it becomes our $u$, leaving the invisible $1 \cdot dx$ to be our $dv$.

###### 2. Identifying $u$ and $dv$

- **Choose $u$**: $u = \tan^{-1}x$

- **Choose $dv$**: $dv = dx$


Now, differentiate $u$ using the inverse tangent derivative rule, and integrate $dv$:

- **Find $du$**: $du = \frac{1}{1+x^2} \, dx$

- **Find $v$**: $v = \int 1 \, dx = x$


###### 3. Applying the Formula

Plug these components into the integration by parts formula ($\int u \, dv = uv - \int v \, du$):

$$\int \tan^{-1}x \, dx = \underbrace{(\tan^{-1}x)}_{u}\underbrace{\vphantom{\tan^{-1}x}(x)}_{v} - \int \underbrace{\vphantom{\frac{1}{1+x^2}}(x)}_{v} \underbrace{\left(\frac{1}{1+x^2} \, dx\right)}_{du}$$

Clean it up to see what we are working with:

$$\int \tan^{-1}x \, dx = x \tan^{-1}x - \int \frac{x}{1+x^2} \, dx$$

###### 4. Solving the Remaining Integral ($u$-Substitution)

To solve this new integral, $\int \frac{x}{1+x^2} \, dx$, we will use a quick substitution. To avoid mixing up our letters, let's use the variable $w$ instead of $u$:

- Let $w = 1+x^2$

- Differentiate to get $dw = 2x \, dx$, which means $x \, dx = \frac{1}{2} dw$


Substitute these into the integral:

$$\int \frac{x}{1+x^2} \, dx = \int \frac{1}{w} \cdot \frac{1}{2} dw = \frac{1}{2} \ln|w|$$

Replace $w$ back with $1+x^2$ (we can drop the absolute value bars because $1+x^2$ is always positive):

$$\frac{1}{2} \ln(1+x^2)$$

###### 5. Bringing It All Together

Now, slide this result back into our main equation from Step 3 and attach the constant of integration ($C$):

$$\int \tan^{-1}x \, dx = x \tan^{-1}x - \frac{1}{2} \ln(1+x^2) + C$$

###### Final Answer

$$\mathbf{x \tan^{-1}x - \frac{1}{2} \ln(1+x^2) + C}$$

### Regroup 2
- Reflect on the physical modeling applications and mathematical setups.

### Skill Block 3
## Conceptual Notes

The foundational formula for Integration by Parts is derived directly by reversing the Product Rule for differentiation:

$$\int u \, dv = uv - \int v \, du$$

When handed an integral, the core challenge is deciding which part of your integrand represents $u$ and which part represents $dv$. If you choose incorrectly, your secondary integral ($\int v \, du$) can quickly become far more complicated than the original problem. As a general rule of thumb, your choice of $u$ should have a derivative that becomes "simpler" or is easily manageable , while $dv$ must be something you can readily integrate.

### The LIATE Rule

To remove the guesswork from this process, engineers use the **LIATE** rule (developed by Herbert Kasube). This is a strict priority hierarchy for picking your $u$ variable:

1. **L**ogarithmic functions (e.g., $\ln x$)
    
2. **I**nverse trigonometric functions (e.g., $\tan^{-1}x$, $\sin^{-1}x$)
    
3. **A**lgebraic functions (e.g., $x, x^2, 3x^3$)
    
4. **T**rigonometric functions (e.g., $\sin x, \cos x$)
    
5. **E**xponential functions (e.g., $e^x, e^{-2x}$)
    

Whichever function type in your integrand appears **highest** on this list is designated as $u$, and whatever remains (alongside the $dx$) automatically becomes $dv$.

### The "Invisible 1" Trick

Sometimes, an integrand consists of only a single function that you do not know how to integrate directly, such as $\int \ln x \, dx$ or $\int \tan^{-1}x \, dx$. In these scenarios, you can employ a creative workaround: treat the integrand as if it is being multiplied by an invisible 1. By prioritizing the function as $u$ via LIATE, you assign the remaining differential to $dv$ ($dv = 1 \, dx$). This allows you to differentiate the challenging term into a manageable algebraic fraction and integrate the 1 up to an $x$.

## Sample Problems

### Sample Problem 1: Standard LIATE Selection

**Evaluate:**

$$\int x e^{2x} \, dx$$

**Solution:**

1. **Identify the parts:** We have an algebraic term ($x$) and an exponential term ($e^{2x}$). According to LIATE, Algebraic (**A**) outranks Exponential (**E**), so we choose:
    
    - $u = x$
        
    - $dv = e^{2x} \, dx$
        
2. **Compute differentials:**
    
    - $du = dx$
        
    - $v = \int e^{2x} \, dx = \frac{1}{2}e^{2x}$
        
3. **Apply the formula:**
    
    $$\int x e^{2x} \, dx = (x)\left(\frac{1}{2}e^{2x}\right) - \int \left(\frac{1}{2}e^{2x}\right) \, dx$$
    
    $$\int x e^{2x} \, dx = \frac{1}{2}xe^{2x} - \frac{1}{2} \int e^{2x} \, dx$$
    
    $$\int x e^{2x} \, dx = \frac{1}{2}xe^{2x} - \frac{1}{4}e^{2x} + C$$
    

### Sample Problem 2: The "Invisible 1" Trick

**Evaluate:**

$$\int \ln(5x) \, dx$$

**Solution:**

1. **Identify the parts:** We cannot integrate $\ln(5x)$ directly, so we treat the integrand as $\ln(5x) \cdot 1$. Logarithmic (**L**) sits at the absolute top of LIATE:
    
    - $u = \ln(5x)$
        
    - $dv = 1 \, dx$
        
2. **Compute differentials:**
    
    - $du = \frac{1}{5x} \cdot 5 \, dx = \frac{1}{x} \, dx$
        
    - $v = \int 1 \, dx = x$
        
3. **Apply the formula:**
    
    $$\int \ln(5x) \, dx = (\ln(5x))(x) - \int (x)\left(\frac{1}{x} \, dx\right)$$
    
    $$\int \ln(5x) \, dx = x\ln(5x) - \int 1 \, dx$$
    
    $$\int \ln(5x) \, dx = x\ln(5x) - x + C$$
    

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Signal Processing & Electrical Transients]]
[[Signal Processing & Electrical Transients Solution]]


### Engineering Problem 2: [[Structural Mechanics & Material Centroids]]
[[Structural Mechanics & Material Centroids Solution]]

#### Worked Example
5. $$\int_{1}^{e} \ln(2x) \, dx$$

##### Solution
###### Step-by-Step Solution: $\int_{1}^{e} \ln(2x) \, dx$

###### 1. Identifying $u$ and $dv$

Just like the $\tan^{-1}x$ problem, this looks like a single function. We will treat it as being multiplied by an invisible 1: $\int \ln(2x) \cdot 1 \, dx$.

Following the **LIATE** rule, **L**ogarithmic functions are at the absolute top of the priority list for $u$:

- **Choose $u$**: $u = \ln(2x)$

- **Choose $dv$**: $dv = dx$


Now, find $du$ using the chain rule, and find $v$ by integrating:

- **Find $du$**: $du = \frac{1}{2x} \cdot 2 \, dx = \frac{1}{x} \, dx$

- **Find $v$**: $v = \int 1 \, dx = x$


###### 2. Finding the Antiderivative

Let's apply the integration by parts formula ($\int u \, dv = uv - \int v \, du$) to find the general shape of our function before worrying about the boundaries:

$$\int \ln(2x) \, dx = \underbrace{(\ln(2x))}_{u}\underbrace{\vphantom{\ln(2x)}(x)}_{v} - \int \underbrace{\vphantom{\frac{1}{x}}(x)}_{v} \underbrace{\left(\frac{1}{x} \, dx\right)}_{du}$$

Simplify the remaining integral (the $x$ and $\frac{1}{x}$ perfectly cancel each other out):

$$\int \ln(2x) \, dx = x \ln(2x) - \int 1 \, dx$$

$$\int \ln(2x) \, dx = x \ln(2x) - x$$

###### 3. Evaluating the Definite Integral (Plugging in Limits)

Now we bring back our boundaries from $1$ to $e$:

$$\left[ x \ln(2x) - x \right]_{1}^{e}$$

According to the Fundamental Theorem of Calculus, we evaluate the function at the upper limit ($e$) and subtract the function evaluated at the lower limit ($1$).

###### Evaluate at the Upper Limit ($x = e$):

$$e \ln(2e) - e$$

Using logarithm rules, we can split $\ln(2e)$ into $\ln(2) + \ln(e)$. Since $\ln(e) = 1$:

$$e (\ln(2) + 1) - e$$

$$e \ln(2) + e - e = e \ln(2)$$

###### Evaluate at the Lower Limit ($x = 1$):

$$1 \cdot \ln(2 \cdot 1) - 1$$

$$\ln(2) - 1$$

###### 4. The Final Subtraction

Subtract the lower limit result from the upper limit result.

**Be careful with the negative signs here!** Make sure to distribute the negative sign to the entire lower limit expression.

$$\text{Total} = (\text{Upper}) - (\text{Lower})$$

$$\text{Total} = e \ln(2) - (\ln(2) - 1)$$

$$\text{Total} = e \ln(2) - \ln(2) + 1$$

To make it look ultra-clean, you can factor out the $\ln(2)$ from the first two terms:

###### Final Answer

$$\mathbf{(e - 1)\ln(2) + 1}$$
#### Active Practice Problem
6. $$\int_{0}^{\ln 3} x e^{-x} \, dx$$

##### Workspace

##### Solution
###### Step-by-Step Solution: $\int_{0}^{\ln 3} x e^{-x} \, dx$

###### 1. Identifying $u$ and $dv$

We use the **LIATE** rule to choose our parts. We have an algebraic term ($x$) and an exponential term ($e^{-x}$). Since **A**lgebraic comes before **E**xponential, we assign them like this:

- **Choose $u$**: $u = x$

- **Choose $dv$**: $dv = e^{-x} \, dx$


Now, differentiate $u$ and integrate $dv$ (remember the chain rule rule for integrating $e^{-x}$ throws a negative sign out front):

- **Find $du$**: $du = dx$

- **Find $v$**: $v = \int e^{-x} \, dx = -e^{-x}$


###### 2. Finding the Antiderivative

Let's assemble the pieces using the integration by parts formula ($\int u \, dv = uv - \int v \, du$):

$$\int x e^{-x} \, dx = \underbrace{(x)}_{u}\underbrace{(-e^{-x})}_{v} - \int \underbrace{(-e^{-x})}_{v} \underbrace{\vphantom{-e^{-x}}dx}_{du}$$

Clean up the double negatives before completing the final integration:

$$\int x e^{-x} \, dx = -x e^{-x} + \int e^{-x} \, dx$$

Now, integrate that last $e^{-x}$ term:

$$\int x e^{-x} \, dx = -x e^{-x} - e^{-x}$$

To make plugging in our limits much easier, let's factor out a $-e^{-x}$:

$$\text{Antiderivative} = -e^{-x}(x + 1)$$

###### 3. Evaluating the Definite Integral (Plugging in Limits)

Now we apply our boundaries from $0$ to $\ln 3$:

$$\left[ -e^{-x}(x + 1) \right]_{0}^{\ln 3}$$

We evaluate at the upper limit ($\ln 3$) and subtract the evaluation at the lower limit ($0$).

###### Evaluate at the Upper Limit ($x = \ln 3$):

$$-e^{-\ln 3}(\ln 3 + 1)$$

**Log Rule Trick:** Recall that $-1 \cdot \ln 3 = \ln(3^{-1}) = \ln\left(\frac{1}{3}\right)$.

Because $e^{\ln(\text{anything})} = \text{anything}$, the exponential part simplifies beautifully:

$$e^{-\ln 3} = e^{\ln(3^{-1})} = \frac{1}{3}$$

Substituting that back in gives us the upper limit value:

$$-\frac{1}{3}(\ln 3 + 1) = -\frac{1}{3}\ln 3 - \frac{1}{3}$$

###### Evaluate at the Lower Limit ($x = 0$):

$$-e^{-0}(0 + 1)$$

Since $e^0 = 1$:

$$-1(1) = -1$$

###### 4. The Final Subtraction

Subtract the lower limit value from the upper limit value. Watch out for the double negative!

$$\text{Total} = (\text{Upper}) - (\text{Lower})$$

$$\text{Total} = \left(-\frac{1}{3}\ln 3 - \frac{1}{3}\right) - (-1)$$

$$\text{Total} = -\frac{1}{3}\ln 3 - \frac{1}{3} + 1$$

Combine the constant numbers ($1 - \frac{1}{3} = \frac{2}{3}$):

$$\text{Total} = \frac{2}{3} - \frac{1}{3}\ln 3$$

###### Final Answer

$$\mathbf{\frac{1}{3}(2 - \ln 3)}$$

### Regroup 3
- Verify calculations and mathematical reasoning.

### Synthesis Wrap-up
- Core takeaways from Session 14 and overview of homework homework assignment.
