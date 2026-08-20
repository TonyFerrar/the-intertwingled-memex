# Skill 2: Mathematical Structuring of the Decomposition (The Blueprint Setup)

Once a rational function's denominator is completely factored, you enter the engineering phase of the problem: **structuring the template**. You cannot solve for a system's unknown variables until you build the correct mathematical scaffolding. If your structural blueprint is wrong, your final constants will be useless.

The fundamental rule of structural decomposition requires that the degree of each numerator placeholder must be exactly **one degree lower** than its base, irreducible denominator factor.

## 💡 Core Principles & Formatting Rules

According to the mathematical framework of partial fractions, there are three strict architectural rules you must follow when setting up a decomposition template:

### Rule 1: The Simple Linear Rule

When a factor in the denominator is a distinct linear expression $(x - r)$, its numerator placeholder is a single, undetermined constant ($A$).

- **Template Setup:**
    
    $$\frac{p(x)}{(x - r_1)(x - r_2)} = \frac{A}{x - r_1} + \frac{B}{x - r_2}$$
    

### Rule 2: The Repeated Linear Rule

If a linear factor is repeated to the $m$-th power, $(x - r)^m$, it creates an internal system interaction. You must create a distinct fraction for **every single power** starting from $1$ up to $m$, each topped with a single independent constant ($A, B, C$, etc.).

- **Template Setup:**
    
    $$\frac{p(x)}{(x - r)^3} = \frac{A}{x - r} + \frac{B}{(x - r)^2} + \frac{C}{(x - r)^3}$$
    

### Rule 3: The Irreducible Quadratic Rule

When the denominator contains a quadratic polynomial $ax^2 + bx + c$ that cannot be factored over real numbers, its numerator placeholder must be structured as a **complete linear expression** ($Ax + B$).

- **Template Setup:**
    
    $$\frac{p(x)}{(x - r)(ax^2 + bx + c)} = \frac{A}{x - r} + \frac{Bx + C}{ax^2 + bx + c}$$
    

## 🧮 Pure Math Sample Problems

Let's look at how to build flawless structural blueprints for complex rational expressions.

### Sample Problem 1: Dealing with Mixed Linear Structures

**Problem:** Set up the partial fraction decomposition template for the following rational function (do not solve for the constants):

$$f(x) = \frac{7x^2 - 3}{x^2(x + 4)(x - 9)}$$

**Solution:**

1. **Analyze the Denominator Factors:**
    
    - $x^2$ is a repeated linear factor (highest power $m = 2$).
        
    - $(x + 4)$ is a distinct simple linear factor.
        
    - $(x - 9)$ is a distinct simple linear factor.
        
2. **Apply the Rules:**
    
    - The $x^2$ term requires two fractions: one for $x$ and one for $x^2$.
        
    - The distinct terms get one fraction each.
        
3. **Final Blueprint Structure:**
    
    $$\frac{7x^2 - 3}{x^2(x + 4)(x - 9)} = \frac{A}{x} + \frac{B}{x^2} + \frac{C}{x + 4} + \frac{D}{x - 9}$$
    

### Sample Problem 2: Incorporating Irreducible Quadratics

**Problem:** Set up the partial fraction decomposition template for the following rational function (do not solve for the constants):

$$g(x) = \frac{x^3 + 5x - 1}{(x - 1)(x^2 + 16)}$$

**Solution:**

1. **Analyze the Denominator Factors:**
    
    - $(x - 1)$ is a distinct simple linear factor.
        
    - $(x^2 + 16)$ is an irreducible quadratic factor ($b^2 - 4ac = 0 - 64 = -64$).
        
2. **Apply the Rules:**
    
    - The linear factor gets a constant numerator $A$.
        
    - The irreducible quadratic factor gets a linear numerator $Bx + C$.
        
3. **Final Blueprint Structure:**
    
    $$\frac{x^3 + 5x - 1}{(x - 1)(x^2 + 16)} = \frac{A}{x - 1} + \frac{Bx + C}{x^2 + 16}$$
    

### Sample Problem 3: The Ultimate Structural Stress-Test

**Problem:** Set up the partial fraction decomposition template for the following rational function (do not solve for the constants):

$$h(x) = \frac{4x + 2}{x(x - 2)^3(x^2 + x + 5)}$$

**Solution:**

1. **Analyze the Denominator Factors:**
    
    - $x$ is a simple linear factor.
        
    - $(x - 2)^3$ is a repeated linear factor up to the 3rd power.
        
    - $(x^2 + x + 5)$ is an irreducible quadratic factor ($1^2 - 4(1)(5) = -19$).
        
2. **Apply the Rules:**
    
    - $x$ gets one term: $\frac{A}{x}$.
        
    - $(x - 2)^3$ expands into three tiered terms.
        
    - The quadratic gets a linear expression numerator.
        
3. **Final Blueprint Structure:**
    
    $$\frac{4x + 2}{x(x - 2)^3(x^2 + x + 5)} = \frac{A}{x} + \frac{B}{x - 2} + \frac{C}{(x - 2)^2} + \frac{D}{(x - 2)^3} + \frac{Ex + F}{x^2 + x + 5}$$
    

## 🏗️ Real-Life Engineering Application Problems

Here is how engineers use the structural design of equations to break down and optimize complex modern technologies.

### Engineering Problem 1: [[RLC Circuit Transient Isolation (Electrical Engineering)]]
[[RLC Circuit Transient Isolation (Electrical Engineering) Solution]]


### Engineering Problem 2: [[Heavy Machinery Shock Absorber Behavior (Mechanical Engineering)]]
[[Heavy Machinery Shock Absorber Behavior (Mechanical Engineering) Solution]]

    

### Engineering Problem 3: [[Parallel Computing in 5G Transceivers (Digital Signal Processing)]]
[[Parallel Computing in 5G Transceivers (Digital Signal Processing) Solution]]
