# Skill 3: Right Triangle Geometry & Back-Substitution

An integral that begins in terms of the spatial variable $x$ must ultimately be answered in terms of $x$. **Skill 3** centers on the geometric bridge used to exit "theta-space" ($\theta$) and return safely to your original coordinate system using right triangles and trigonometric ratios.

## 1. Core Explanational Notes

### The Geometric Framework

Once you have successfully integrated a trigonometric expression, the mathematical result is expressed in terms of $\theta$. To convert these values back into $x$, you must map your initial substitution equation onto a reference right triangle. This process turns an abstract trigonometric expression back into physical algebraic components.

1. **Map Known Sides:** Use your initial substitution to define two sides of a right triangle. For example, if you chose the substitution $x = a\sin\theta$, you can rewrite it as $\sin\theta = \frac{x}{a}$. Since sine represents $\frac{\text{Opposite}}{\text{Hypotenuse}}$, you label the opposite side as $x$ and the hypotenuse as $a$.
    
2. **Find the Missing Side:** Use the Pythagorean theorem ($A^2 + B^2 = C^2$) to solve for the remaining unknown side. This step will always naturally reproduce the exact radical expression found in your original problem statement.
    
3. **Extract the Target Ratios:** Read the required trigonometric terms ($\tan\theta$, $\cos\theta$, $\sec\theta$, etc.) directly off your newly completed reference triangle to replace the $\theta$ variables in your antiderivative.
    

### Decoding the Three Structural Configurations

Depending on your initial substitution choice, your reference triangle will be constructed in one of three ways:

|**Chosen Substitution**|**Isolation Ratio**|**Opposite Side**|**Adjacent Side**|**Hypotenuse**|**Remaining Ratios PDF**|
|---|---|---|---|---|---|
|**$x = a\sin\theta$**|$\sin\theta = \frac{x}{a}$|$x$|$\sqrt{a^2 - x^2}$|$a$|$\cos\theta = \frac{\sqrt{a^2-x^2}}{a}$, $\tan\theta = \frac{x}{\sqrt{a^2-x^2}}$|
|**$x = a\tan\theta$**|$\tan\theta = \frac{x}{a}$|$x$|$a$|$\sqrt{x^2 + a^2}$|$\cos\theta = \frac{a}{\sqrt{x^2+a^2}}$, $\sin\theta = \frac{x}{\sqrt{x^2+a^2}}$|
|**$x = a\sec\theta$**|$\sec\theta = \frac{x}{a}$|$\sqrt{x^2 - a^2}$|$a$|$x$|$\tan\theta = \frac{\sqrt{x^2-a^2}}{a}$, $\cos\theta = \frac{a}{x}$, $\sin\theta = \frac{\sqrt{x^2-a^2}}{x}$|

## 2. Sample Pure-Math Problems

### Sample Problem 1: Decoding Compound Sine-Cosine Products

**Evaluate the integral using a reference triangle to finish:**

$$\int \sqrt{9 - x^2} \, dx$$

#### Step-by-Step Solution:

1. **Substitute:** Let $x = 3\sin\theta \implies dx = 3\cos\theta \, d\theta$. The radical simplifies to $3\cos\theta$.
    
2. **Integrate:**
    
    $$\int (3\cos\theta)(3\cos\theta) \, d\theta = 9\int \cos^2\theta \, d\theta = \frac{9}{2}(\theta + \sin\theta\cos\theta) + C$$
    
3. **Construct the Reference Triangle (Skill 3):**
    
    - Since $\sin\theta = \frac{x}{3}$, label the **Opposite = $x$** and the **Hypotenuse = 3**.
        
    - Solve for the adjacent side: $\text{Adjacent} = \sqrt{3^2 - x^2} = \sqrt{9 - x^2}$.
        
4. **Extract Ratios:**
    
    - $\theta = \arcsin\left(\frac{x}{3}\right)$
        
    - $\sin\theta = \frac{x}{3}$
        
    - From the triangle, $\cos\theta = \frac{\text{Adjacent}}{\text{Hypotenuse}} = \frac{\sqrt{9 - x^2}}{3}$.
        
5. **Back-Substitute:** Replace the trigonometric functions with these algebraic fractions:
    
    $$\frac{9}{2}\left( \arcsin\left(\frac{x}{3}\right) + \left(\frac{x}{3}\right)\left(\frac{\sqrt{9-x^2}}{3}\right) \right) + C = \frac{9}{2}\arcsin\left(\frac{x}{3}\right) + \frac{x\sqrt{9-x^2}}{2} + C$$
    

### Sample Problem 2: Decoding Reciprocal Trig Functions

**Evaluate the integral:**

$$\int \frac{1}{x^2\sqrt{x^2 - 4}} \, dx$$

#### Step-by-Step Solution:

1. **Substitute:** Let $x = 2\sec\theta \implies dx = 2\sec\theta\tan\theta \, d\theta$. The radical simplifies to $2\tan\theta$.
    
2. **Integrate:**
    
    $$\int \frac{2\sec\theta\tan\theta}{(4\sec^2\theta)(2\tan\theta)} \, d\theta = \frac{1}{4}\int \frac{1}{\sec\theta} \, d\theta = \frac{1}{4}\int \cos\theta \, d\theta = \frac{1}{4}\sin\theta + C$$
    
3. **Construct the Reference Triangle (Skill 3):**
    
    - Since $\sec\theta = \frac{x}{2}$, label the **Hypotenuse = $x$** and the **Adjacent = 2**.
        
    - Solve for the opposite side: $\text{Opposite} = \sqrt{x^2 - 2^2} = \sqrt{x^2 - 4}$.
        
4. **Extract Ratios:** We need to replace $\sin\theta$. Looking at our triangle:
    
    $$\sin\theta = \frac{\text{Opposite}}{\text{Hypotenuse}} = \frac{\sqrt{x^2 - 4}}{x}$$
    
5. **Back-Substitute:**
    
    $$\frac{1}{4}\left( \frac{\sqrt{x^2 - 4}}{x} \right) + C = \frac{\sqrt{x^2 - 4}}{4x} + C$$
    

## 3. Real-Life Engineering Application Problems

### Engineering Problem 1: [[Robotic Joint Coordinate Workspace Transformation]]
[[Robotic Joint Coordinate Workspace Transformation Solution]]

### Engineering Problem 2: [[Fluid Casing Hydrostatic Pressure Distribution]]
[[Fluid Casing Hydrostatic Pressure Distribution Solution]]
