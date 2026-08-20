# Skill 3: Algebraic System Solving (The Quantitative Solution)

Once you have diagnosed your factors (Skill 1) and built your structural blueprint (Skill 2), you arrive at the final boss of partial fractions: **solving for the unknown constants**. This is the execution phase where abstract placeholders are transformed into precise numerical values.

## 💡 Core Concepts & Methodologies

To solve a partial fraction system, you must clear the fractions and find the values of your constants using one of two primary algebraic workflows:

### Method A: The Convenient Value Method (Heaviside Cover-Up)

This method involves substituting specific values of $x$ that intentionally force parts of your equation to multiply by zero, isolating one constant at a time.

- **When to use:** Ideal for denominators composed entirely of **distinct simple linear factors**.
    

### Method B: Equating Coefficients (The System of Equations)

This method requires expanding the entire right-side polynomial, grouping the terms by their powers of $x$ ($x^2, x^1, x^0$, etc.), and matching them directly against the coefficients on the left side.

- **When to use:** Mandatory when dealing with **repeated linear** or **irreducible quadratic factors** where terms do not easily drop out.
    

## 🧮 Pure Math Sample Problems

### Sample Problem 1: Solving via Convenient Values

**Problem:** Find the constants $A$ and $B$ for the decomposition:

$$\frac{x + 5}{(x - 1)(x + 2)} = \frac{A}{x - 1} + \frac{B}{x + 2}$$

**Solution:**

1. **Clear the fractions** by multiplying both sides by the least common denominator $(x - 1)(x + 2)$:
    
    $$x + 5 = A(x + 2) + B(x - 1)$$
    
2. **Isolate $A$** by letting $x = 1$ (making the $B$ term zero):
    
    $$1 + 5 = A(1 + 2) + B(0)$$
    
    $$6 = 3A \implies A = 2$$
    
3. **Isolate $B$** by letting $x = -2$ (making the $A$ term zero):
    
    $$-2 + 5 = A(0) + B(-2 - 1)$$
    
    $$3 = -3B \implies B = -1$$
    
4. **Final Values:** $A = 2, B = -1$
    

### Sample Problem 2: Solving via Equating Coefficients

**Problem:** Find the constants $A$, $B$, and $C$ for the decomposition:

$$\frac{3x^2 + x + 1}{x(x^2 + 1)} = \frac{A}{x} + \frac{Bx + C}{x^2 + 1}$$

**Solution:**

1. **Clear the fractions**:
    
    $$3x^2 + x + 1 = A(x^2 + 1) + (Bx + C)x$$
    
2. **Expand and group** the right side by like powers of $x$:
    
    $$3x^2 + x + 1 = Ax^2 + A + Bx^2 + Cx$$
    
    $$3x^2 + x + 1 = (A + B)x^2 + (C)x + (A)$$
    
3. **Equate the coefficients** of identical powers from both sides:
    
    - **Constant terms ($x^0$):** $A = 1$
        
    - **Linear terms ($x^1$):** $C = 1$
        
    - **Quadratic terms ($x^2$):** $A + B = 3$
        
4. **Solve the system**:
    
    - Since $A = 1$, substitute it into the $x^2$ equation: $1 + B = 3 \implies B = 2$.
        
5. **Final Values:** $A = 1, B = 2, C = 1$
    

## 🏗️ Real-Life Engineering Application Problems

### Engineering Problem 1: [[Power Surge Dissipation (Electrical Engineering)]]
[[Power Surge Dissipation (Electrical Engineering) Solution]]


### Engineering Problem 2: [[Robotic Arm Shock Absorption (Mechanical Engineering)]]
[[Robotic Arm Shock Absorption (Mechanical Engineering) Solution]]

    

### Engineering Problem 3: [[5G Router Data Stream Allocation (Digital Signal Processing)]]
[[5G Router Data Stream Allocation (Digital Signal Processing) Solution ]]
