---
title: "Session 15 - Trigonometric Integrals"
type: course-session
course: MATH-182
semester: Fall 2026
publish: true
cssclasses: []
updated: 2026-08-18
---

# Session 15 - Trigonometric Integrals

## Session Objectives
By the end of this session, you will be able to:
- Applying Trigonometric Identities to Rewrite Integrands
- Splitting Off Factors to Set Up $u$-Substitution
- Utilizing Reduction Formulas for High-Power Integrals

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
The core mathematical skills of trigonometric integration—including splitting off specific factors, applying half-angle identities, and utilizing reduction formulas—are critical in engineering for analyzing complex periodic and wave-based phenomena. In electrical engineering, these techniques allow for the calculation of Root Mean Square (RMS) voltage and power in alternating current (AC) circuits, while in signal processing, they drive Fourier analysis to decompose communication waveforms for data compression and noise filtering. Additionally, mechanical and civil engineers use these high-power integrations to evaluate non-linear vibrations and structural resonance in systems like skyscrapers or bridges, and coastal engineers apply them to hydrodynamic wave equations to calculate energy density and ensure offshore structures can withstand severe storm surges.

### Skill Block 1
## 1. Explanatory Notes

When our basic integration tools are limited, evaluating integrals that contain powers or products of trigonometric functions requires rewriting the integrand into an integrable form. The primary strategy of **Skill 1** relies on substituting high-power expressions with equivalent lower-power expressions using fundamental trigonometric identities.

Depending on whether the exponent is **odd** or **even**, you will choose between two major families of identities:

### Case A: Handling Odd Powers (Pythagorean Identities)

If an integrand contains an odd, positive power of sine or cosine, we split off exactly one factor of the trigonometric function. This leaves behind an even power, which we can easily rewrite in terms of the opposing function using the Pythagorean identities:

$$\sin^2(x) = 1 - \cos^2(x)$$

$$\cos^2(x) = 1 - \sin^2(x)$$

This strategic split primes the entire expression for a smooth $u$-substitution.

### Case B: Handling Even Powers (Half-Angle Formulas)

When encountering an even, positive power of sine or cosine without an odd companion, standard $u$-substitution fails because there is no "extra" factor to serve as your $du$. Instead, we must use half-angle formulas to structurally eliminate the powers and lower the degree of the expression:

$$\sin^{2}(x)=\frac{1-\cos(2x)}{2} \quad \text{[cite: 39]}$$

$$\cos^{2}(x)=\frac{1+\cos(2x)}{2} \quad \text{[cite: 41]}$$

## 2. Pure Math Sample Problems

### Sample Problem 1 (Odd Power)

Evaluate the following indefinite integral:

$$\int \cos^3(x) \, dx$$

**Solution:**

1. **Split off one factor** of $\cos(x)$ to preserve for your future $du$:
    
    $$\int \cos^2(x) \cdot \cos(x) \, dx$$
    
2. **Apply the Pythagorean identity** to rewrite the remaining $\cos^2(x)$ in terms of sine:
    
    $$\int (1 - \sin^2(x)) \cdot \cos(x) \, dx$$
    
3. **Set up a $u$-substitution** where $u = \sin(x)$ and $du = \cos(x) \, dx$:
    
    $$\int (1 - u^2) \, du$$
    
4. **Integrate term-by-term** using the power rule:
    
    $$u - \frac{1}{3}u^3 + C$$
    
5. **Back-substitute** $u = \sin(x)$ to get the final answer:
    
    $$\sin(x) - \frac{1}{3}\sin^3(x) + C$$
    

### Sample Problem 2 (Even Power)

Evaluate the following indefinite integral:

$$\int \sin^2(x) \, dx$$

**Solution:**

1. **Apply the half-angle formula** directly to rewrite the squared term into a first-degree expression:
    
    $$\int \frac{1 - \cos(2x)}{2} \, dx$$
    
2. **Factor out the constant** $\frac{1}{2}$ to simplify your workspace:
    
    $$\frac{1}{2} \int (1 - \cos(2x)) \, dx$$
    
3. **Integrate term-by-term** (remembering a reverse chain rule for the $\cos(2x)$ term):
    
    $$\frac{1}{2} \left( x - \frac{1}{2}\sin(2x) \right) + C$$
    
4. **Distribute the constant** for the final simplified solution:
    
    $$\frac{1}{2}x - \frac{1}{4}\sin(2x) + C$$
    

## 3. Real-Life Engineering Application Problems

### Engineering Problem 1: [[Electrical Engineering (AC Power Analysis)]]
[[Electrical Engineering (AC Power Analysis) Solution]]

### Engineering Problem 2: [[Coastal Engineering (Wave Potential Energy Density)]]
[[Coastal Engineering (Wave Potential Energy Density) Solution]]

#### Worked Example
1. $$\int \sin^{3}(x) \, dx$$

##### Solution
###### **The Strategy**

When evaluating an integral with an **odd power** of sine or cosine, the standard strategy is to save one factor of the odd-powered trig function and convert the remaining even-powered factors using the fundamental Pythagorean identity:

$$\sin^2(x) + \cos^2(x) = 1$$

###### **Step 1: Split the odd power**

First, pull out one factor of $\sin(x)$ to save it for the upcoming $u$-substitution.

$$\int \sin^{3}(x) \, dx = \int \sin^{2}(x) \cdot \sin(x) \, dx$$

###### **Step 2: Apply the Pythagorean identity**

Using the identity $\sin^2(x) = 1 - \cos^2(x)$, substitute it into the integral so that the rest of the expression is in terms of cosine.

$$\int (1 - \cos^{2}(x)) \cdot \sin(x) \, dx$$

###### **Step 3: Use $u$-substitution**

Now, set up a substitution where $u$ represents the cosine function.

- Let $u = \cos(x)$

- Then, find the derivative: $du = -\sin(x) \, dx$

- Multiplying by $-1$ gives: $-du = \sin(x) \, dx$


Substitute $u$ and $-du$ into the integral:

$$\int (1 - u^2) \cdot (-du)$$

Distribute the negative sign to rearrange the terms:

$$\int (u^2 - 1) \, du$$

###### **Step 4: Integrate term-by-term**

Use the standard power rule for integration ($\int u^n \, du = \frac{u^{n+1}}{n+1}$) to evaluate the integral.

$$\int (u^2 - 1) \, du = \frac{u^3}{3} - u + C$$

_(where $C$ is the constant of integration)_

###### **Step 5: Substitute back to the original variable**

Finally, replace $u$ with your original substitution, $\cos(x)$.

$$\frac{\cos^3(x)}{3} - \cos(x) + C$$

###### **Final Answer**

$$\int \sin^{3}(x) \, dx = \frac{1}{3}\cos^3(x) - \cos(x) + C$$
#### Active Practice Problem
1. $$\int \sin^{2}(x)\cos^{2}(x) \, dx$$

##### Workspace

##### Solution
###### **The Strategy**

When evaluating trigonometric integrals where **both** sine and cosine have **even powers**, standard $u$-substitution won't work right away because there isn't an "extra" $\sin(x)$ or $\cos(x)$ to act as your $du$.

Instead, the strategy is to use trigonometric identities to reduce the powers. We can use a clever combination of the **double-angle identity** and the **half-angle identity**.

###### **Step 1: Rewrite using the double-angle identity**

Recall the double-angle formula for sine: $\sin(2x) = 2\sin(x)\cos(x)$. If we divide by 2, we get:

$$\sin(x)\cos(x) = \frac{1}{2}\sin(2x)$$

Since our integrand is $\sin^2(x)\cos^2(x)$, we can group them together as a perfect square:

$$\sin^{2}(x)\cos^{2}(x) = (\sin(x)\cos(x))^2$$

Now, substitute the identity into the expression:

$$\left(\frac{1}{2}\sin(2x)\right)^2 = \frac{1}{4}\sin^2(2x)$$

Pull the constant outside the integral:

$$\frac{1}{4} \int \sin^2(2x) \, dx$$

###### **Step 2: Lower the power using the half-angle identity**

We still have an even power ($\sin^2$), so we need to use the half-angle identity to reduce it further:

$$\sin^2(\theta) = \frac{1 - \cos(2\theta)}{2}$$

In our case, $\theta = 2x$, which means $2\theta = 4x$. Substituting this in gives:

$$\sin^2(2x) = \frac{1 - \cos(4x)}{2}$$

Now substitute this back into our integral:

$$\frac{1}{4} \int \frac{1 - \cos(4x)}{2} \, dx$$

Pull the denominator out to combine the constants ($\frac{1}{4} \times \frac{1}{2} = \frac{1}{8}$):

$$\frac{1}{8} \int (1 - \cos(4x)) \, dx$$

###### **Step 3: Integrate term-by-term**

Now the integral is in a simple form that we can integrate directly:

- The integral of $1$ with respect to $x$ is $x$.

- The integral of $\cos(4x)$ requires a quick reverse chain rule (or mini $u$-sub), which gives $\frac{1}{4}\sin(4x)$.


Applying these gives:

$$\frac{1}{8} \left( x - \frac{1}{4}\sin(4x) \right) + C$$

_(where $C$ is the constant of integration)_

###### **Final Answer**

Distribute the $\frac{1}{8}$ to get the final, simplified expression:

$$\int \sin^{2}(x)\cos^{2}(x) \, dx = \frac{1}{8}x - \frac{1}{32}\sin(4x) + C$$

### Regroup 1
- Review common misconceptions and clarify key notations.

### Skill Block 2
## 1. Explanatory Notes

When integrating products or powers of trigonometric functions, standard integration formulas cannot always be applied directly. **Skill 2** focuses on strategically breaking apart an integrand to isolate a specific single or squared factor. This isolated factor is deliberately saved to serve as the differential ($du$) component for a future $u$-substitution.

The choice of which factor to split off depends on the relationship between the powers of the trigonometric functions involved:

### Case A: Products of Sines and Cosines (Odd Powers)

If the power of sine ($m$) is an odd, positive integer, you can split off a single factor of $\sin(x)$. This leaves behind an even power of sine, which is easily rewritten in terms of $\cos(x)$ using the Pythagorean identity $\sin^2(x) = 1 - \cos^2(x)$. This prepares the entire integrand for a clean substitution where $u = \cos(x)$ and $du = -\sin(x)dx$. _(Note: If the power of cosine is odd, the exact same logic applies conversely: split off a $\cos(x)$ factor and let $u = \sin(x)$)._

### Case B: Products of Tangents and Secants (Even Secant Powers)

If the power of secant ($n$) is an even, positive integer, you can split off a factor of $\sec^2(x)$. Because the derivative of tangent is secant-squared, this saved factor serves perfectly as your $du$. The remaining even powers of secant are then converted into tangents using the identity $\sec^2(x) = \tan^2(x) + 1$ to set up the substitution $u = \tan(x)$.

### Case C: Products of Tangents and Secants (Odd Tangent Powers)

If the power of tangent ($m$) is an odd, positive integer, you can split off a combined factor of $\sec(x)\tan(x)$. Because the derivative of secant is secant-tangent, this isolated piece becomes your $du$. The remaining even powers of tangent are converted into secants via $\tan^2(x) = \sec^2(x) - 1$, setting up a substitution where $u = \sec(x)$.

## 2. Pure Math Sample Problems

### Sample Problem 1 (Odd Sine Power)

Evaluate the following indefinite integral:

$$\int \sin^5(x)\cos^2(x) \, dx$$

**Solution:**

1. **Split off one factor** of $\sin(x)$ from the odd power:
    
    $$\int \sin^4(x)\cos^2(x) \cdot \sin(x) \, dx$$
    
2. **Rewrite the remaining even power** of sine as $(\sin^2(x))^2$ and apply the Pythagorean identity:
    
    $$\int (1 - \cos^2(x))^2 \cos^2(x) \cdot \sin(x) \, dx$$
    
3. **Execute the $u$-substitution** where $u = \cos(x)$ and $du = -\sin(x)dx$ (which means $-du = \sin(x)dx$):
    
    $$\int (1 - u^2)^2 \cdot u^2 \cdot (-du)$$
    
4. **Expand the integrand** completely before integrating:
    
    $$-\int (1 - 2u^2 + u^4) \cdot u^2 \, du = \int (-u^2 + 2u^4 - u^6) \, du$$
    
5. **Integrate term-by-term** and substitute back $u = \cos(x)$:
    
    $$-\frac{1}{3}\cos^3(x) + \frac{2}{5}\cos^5(x) - \frac{1}{7}\cos^7(x) + C$$
    

### Sample Problem 2 (Even Secant Power)

Evaluate the following indefinite integral:

$$\int \tan^3(x)\sec^4(x) \, dx$$

**Solution:**

1. **Split off a factor** of $\sec^2(x)$ to serve as the derivative term:
    
    $$\int \tan^3(x)\sec^2(x) \cdot \sec^2(x) \, dx$$
    
2. **Convert the remaining** $\sec^2(x)$ into tangent terms using the identity $\sec^2(x) = \tan^2(x) + 1$:
    
    $$\int \tan^3(x)(\tan^2(x) + 1) \cdot \sec^2(x) \, dx$$
    
3. **Execute the $u$-substitution** where $u = \tan(x)$ and $du = \sec^2(x)dx$:
    
    $$\int u^3(u^2 + 1) \, du = \int (u^5 + u^3) \, du$$
    
4. **Integrate and back-substitute** $u = \tan(x)$ to find the final answer:
    
    $$\frac{1}{6}\tan^6(x) + \frac{1}{4}\tan^4(x) + C$$
    

## 3. Real-Life Engineering Application Problems

### Engineering Problem 1: [[Electrical Engineering (Total Harmonic Distortion Energy)]]
[[Electrical Engineering (Total Harmonic Distortion Energy) Solution]]

### Engineering Problem 2: [[Mechanical Engineering (Friction Work in Variable Geometric Links)]]
[[Mechanical Engineering (Friction Work in Variable Geometric Links) Solution]]

#### Active Practice Problem
1. $$\int \sec^{4}(x) \, dx$$

##### Workspace

##### Solution
###### **The Strategy**

When evaluating integrals involving powers of secant and tangent, if the power of secant is **even**, the strategy is to split off a factor of $\sec^2(x)$. This saved factor will serve as our $du$ during substitution, because the derivative of $\tan(x)$ is $\sec^2(x)$.

The remaining even powers of secant are then converted into tangents using the Pythagorean identity:

$$\sec^2(x) = 1 + \tan^2(x)$$

###### **Step 1: Split the even power**

First, pull out a factor of $\sec^2(x)$ to save it for the $u$-substitution step later.

$$\int \sec^{4}(x) \, dx = \int \sec^{2}(x) \cdot \sec^{2}(x) \, dx$$

###### **Step 2: Apply the Pythagorean identity**

Convert the first $\sec^2(x)$ term into tangent terms using the identity $\sec^2(x) = 1 + \tan^2(x)$.

$$\int (1 + \tan^{2}(x)) \cdot \sec^{2}(x) \, dx$$

###### **Step 3: Use $u$-substitution**

Now, set up a substitution where $u$ represents the tangent function.

- Let $u = \tan(x)$

- Then, find the derivative: $du = \sec^2(x) \, dx$


Substitute $u$ and $du$ directly into the integral:

$$\int (1 + u^2) \, du$$

###### **Step 4: Integrate term-by-term**

Use the standard power rule for integration to evaluate each piece.

$$\int (1 + u^2) \, du = u + \frac{u^3}{3} + C$$

_(where $C$ is the constant of integration)_

###### **Step 5: Substitute back to the original variable**

Finally, replace $u$ with your original substitution, $\tan(x)$.

$$\tan(x) + \frac{\tan^3(x)}{3} + C$$

###### **Final Answer**

Rearranging the terms slightly for standard polynomial order:

$$\int \sec^{4}(x) \, dx = \frac{1}{3}\tan^3(x) + \tan(x) + C$$

### Regroup 2
- Reflect on the physical modeling applications and mathematical setups.

### Skill Block 3
## 1. Explanatory Notes

Evaluating trigonometric integrals with exceptionally high exponents (such as $\int \sin^{8}(x) \, dx$) using basic expansion or half-angle identities can become incredibly tedious and time-consuming. To ease this operational workload, mathematicians and engineers use **Reduction Formulas**.

A reduction formula is an integration rule derived using integration by parts that equates an integral involving a high power of a trigonometric function with an algebraic expression added to an alternative integral where the power has been reduced. By applying these formulas repeatedly, a high-degree expression can step-by-step be broken down until it reaches a low-degree power that can be integrated using basic calculus rules.

The standard reduction formulas for positive integers $n$ include:

- **Sine Power Reduction:**
    
    $$\int \sin^{n}(x) \, dx = -\frac{\sin^{n-1}(x)\cos(x)}{n} + \frac{n-1}{n}\int \sin^{n-2}(x) \, dx$$
    
- **Cosine Power Reduction:**
    
    $$\int \cos^{n}(x) \, dx = \frac{\cos^{n-1}(x)\sin(x)}{n} + \frac{n-1}{n}\int \cos^{n-2}(x) \, dx$$
    
- **Tangent Power Reduction (where $n \neq 1$):**
    
    $$\int \tan^{n}(x) \, dx = \frac{\tan^{n-1}(x)}{n-1} - \int \tan^{n-2}(x) \, dx$$
    
- **Secant Power Reduction (where $n \neq 1$):**
    
    $$\int \sec^{n}(x) \, dx = \frac{\sec^{n-2}(x)\tan(x)}{n-1} + \frac{n-2}{n-1}\int \sec^{n-2}(x) \, dx$$
    

## 2. Pure Math Sample Problems

### Sample Problem 1 (Sine Reduction)

Evaluate the following indefinite integral using a reduction formula:

$$\int \sin^4(x) \, dx$$

**Solution:**

1. Identify the exponent, which is $n = 4$. Apply the **sine reduction formula** once:
    
    $$\int \sin^{4}(x) \, dx = -\frac{\sin^{3}(x)\cos(x)}{4} + \frac{3}{4}\int \sin^{2}(x) \, dx$$
    
2. We must now evaluate the remaining reduced integral, $\int \sin^{2}(x) \, dx$. Apply the formula a second time, now with $n = 2$:
    
    $$\int \sin^{2}(x) \, dx = -\frac{\sin^{1}(x)\cos(x)}{2} + \frac{1}{2}\int \sin^{0}(x) \, dx$$
    
    Since $\sin^0(x) = 1$, the remaining integral is simply $\int 1 \, dx = x$:
    
    $$\int \sin^{2}(x) \, dx = -\frac{\sin(x)\cos(x)}{2} + \frac{1}{2}x$$
    
3. Substitute this result back into the original step-1 equation:
    
    $$\int \sin^{4}(x) \, dx = -\frac{\sin^{3}(x)\cos(x)}{4} + \frac{3}{4}\left( -\frac{\sin(x)\cos(x)}{2} + \frac{1}{2}x \right) + C$$
    
4. Distribute the constant to find the final answer:
    
    $$\int \sin^{4}(x) \, dx = -\frac{1}{4}\sin^{3}(x)\cos(x) - \frac{3}{8}\sin(x)\cos(x) + \frac{3}{8}x + C$$
    

### Sample Problem 2 (Tangent Reduction)

Evaluate the following indefinite integral using a reduction formula:

$$\int \tan^3(x) \, dx$$

**Solution:**

1. Identify the exponent, which is $n = 3$. Apply the **tangent reduction formula**:
    
    $$\int \tan^{3}(x) \, dx = \frac{\tan^{3-1}(x)}{3-1} - \int \tan^{3-2}(x) \, dx$$
    
    $$\int \tan^{3}(x) \, dx = \frac{\tan^{2}(x)}{2} - \int \tan(x) \, dx$$
    
2. The remaining reduced integral is a standard natural log integral form: $\int \tan(x) \, dx = \ln|\sec(x)|$.
    
3. Combine the terms to reveal the final expression:
    
    $$\int \tan^{3}(x) \, dx = \frac{1}{2}\tan^2(x) - \ln|\sec(x)| + C$$
    

## 3. Real-Life Engineering Application Problems

### Engineering Problem 1: [[Civil Engineering (Non-linear Restoring Forces in Structural Sways)]]
[[Civil Engineering (Non-linear Restoring Forces in Structural Sways) Solution]]


### Engineering Problem 2: [[Aerospace Engineering (Aerodynamic Boundary Layer Skin Friction)]]
[[Aerospace Engineering (Aerodynamic Boundary Layer Skin Friction) Solution]]

#### Active Practice Problem
1. $$\int \sin(3x)\cos(5x) \, dx$$

##### Workspace

##### Solution
###### **The Strategy**

When evaluating integrals involving the product of a sine and a cosine function with **different angles** (like $3x$ and $5x$), standard $u$-substitution or basic Pythagorean identities won't work.

Instead, the strategy is to use the **Product-to-Sum identities** from trigonometry to break the product into two separate, easily integrable terms. The relevant identity here is:

$$\sin(\alpha)\cos(\beta) = \frac{1}{2}[\sin(\alpha + \beta) + \sin(\alpha - \beta)]$$

###### **Step 1: Apply the Product-to-Sum identity**

In our integral, let $\alpha = 3x$ and $\beta = 5x$. Plug these into the identity:

$$\sin(3x)\cos(5x) = \frac{1}{2}[\sin(3x + 5x) + \sin(3x - 5x)]$$

Simplify the angles inside the sine functions:

$$\sin(3x)\cos(5x) = \frac{1}{2}[\sin(8x) + \sin(-2x)]$$

###### **Step 2: Simplify using the odd-function property**

Recall that sine is an **odd function**, meaning $\sin(-\theta) = -\sin(\theta)$. We can use this to clean up the second term:

$$\sin(-2x) = -\sin(2x)$$

Now substitute this back into our expression and set up the new integral, pulling the constant $\frac{1}{2}$ out front:

$$\frac{1}{2} \int (\sin(8x) - \sin(2x)) \, dx$$

###### **Step 3: Integrate term-by-term**

Now we can integrate each sine function individually using the reverse chain rule (or a simple $u$-substitution where $\int \sin(kx) \, dx = -\frac{1}{k}\cos(kx)$).

- The integral of $\sin(8x)$ is $-\frac{1}{8}\cos(8x)$

- The integral of $-\sin(2x)$ is $-\left(-\frac{1}{2}\cos(2x)\right) = \frac{1}{2}\cos(2x)$


Putting it all together inside the brackets:

$$\frac{1}{2} \left[ -\frac{1}{8}\cos(8x) + \frac{1}{2}\cos(2x) \right] + C$$

_(where $C$ is the constant of integration)_

###### **Final Answer**

Distribute the $\frac{1}{2}$ and rearrange the terms so the positive term comes first:

$$\int \sin(3x)\cos(5x) \, dx = \frac{1}{4}\cos(2x) - \frac{1}{16}\cos(8x) + C$$

### Regroup 3
- Verify calculations and mathematical reasoning.

### Synthesis Wrap-up
- Core takeaways from Session 15 and overview of homework homework assignment.
