# Skill 4: The Closed Interval Method Algorithm

When a function is confirmed to be continuous over a strictly bound, closed interval $[a, b]$, the Extreme Value Theorem guarantees that both an absolute maximum and an absolute minimum must exist. To find these precise values and their locations without relying on a visual graph, we apply a definitive algebraic procedure known as the **Closed Interval Method Algorithm**.

## 📘 Conceptual Notes & Core Definitions

### 1. The Core Mechanical Framework

Because absolute extrema can only occur at interior critical numbers or at the outer boundary endpoints, the algorithm systematically collects all potential candidates, evaluates their original heights ($y$-values), and runs a direct numerical comparison.

### 2. The 5-Step Closed Interval Method Pipeline

To locate the absolute maximum and minimum values of a continuous function $f(x)$ on a closed interval $[a, b]$:

1. **Differentiate:** Compute the first derivative, $f'(x)$.
    
2. **Find Critical Numbers:** Solve $f'(x) = 0$ and identify where $f'(x)$ is undefined to locate all interior critical numbers.
    
3. **Filter Candidates:** Discard any critical numbers that fall completely outside the open interval $(a, b)$. Keep only the valid interior candidates.
    
4. **Evaluate Original Outputs:** Plug all remaining valid critical numbers, along with the two boundary endpoints ($x = a$ and $x = b$), strictly back into the **original function, $f(x)$**.
    
5. **Compare and Conclude:** Identify the highest resulting value as the **absolute maximum value** and the lowest resulting value as the **absolute minimum value**.
    

## ✏️ Original Sample Problem

### Example 1

Find the absolute maximum and absolute minimum values of the function $f(x) = x^3 - 3x^2 + 1$ on the closed interval $[-1, 4]$.

#### **Solution and Analysis:**

- **Step 1: Check Continuity.** The function $f(x)$ is a cubic polynomial, which is continuous everywhere. The interval $[-1, 4]$ is closed. The method is valid.
    
- **Step 2: Differentiate.**
    
    $$f'(x) = 3x^2 - 6x$$
    
- **Step 3: Locate and filter critical numbers.** Set $f'(x) = 0$:
    
    $$3x(x - 2) = 0 \implies x = 0 \quad \text{and} \quad x = 2$$
    
    _The derivative exists everywhere, so there are no undefined points._ **Filter:** Both $x = 0$ and $x = 2$ lie safely inside the interval $(-1, 4)$. Both are kept.
    
- **Step 4: Evaluate the original function $f(x)$ at all candidates.**
    
    - **Left Endpoint ($x = -1$):** $f(-1) = (-1)^3 - 3(-1)^2 + 1 = -1 - 3 + 1 = -3$
        
    - **Critical Number ($x = 0$):** $f(0) = (0)^3 - 3(0)^2 + 1 = 1$
        
    - **Critical Number ($x = 2$):** $f(2) = (2)^3 - 3(2)^2 + 1 = 8 - 12 + 1 = -3$
        
    - **Right Endpoint ($x = 4$):** $f(4) = (4)^3 - 3(4)^2 + 1 = 64 - 48 + 1 = 17$
        
- **Step 5: Compare results.**
    
    - **Absolute Maximum Value:** $17$, which occurs at location $x = 4$.
        
    - **Absolute Minimum Value:** $-3$, which occurs at two separate locations: $x = -1$ and $x = 2$.
        

## 🚀 Real-Life Engineering Application Problems

### Engineering Problem 1: [[Structural Beam Bending Moment Optimization]]
[[Structural Beam Bending Moment Optimization Solution]]
A civil engineer analyzes the internal structural stress acting on a 6-meter long horizontal reinforced support beam across a closed building span. The bending moment $M$ (in kilonewton-meters, $\text{kN}\cdot\text{m}$) at any position $x$ (in meters) from the left support wall over the closed interval $[0, 6]$ is precisely modeled by the cubic function:

$$M(x) = -2x^3 + 15x^2 - 24x + 50 \quad \text{for} \quad 0 \le x \le 6$$

Using the Closed Interval Method Algorithm, determine the **absolute maximum bending moment** and its **location** so that structural designers know where to position extra steel rebar reinforcement.

#### **Solution:**

- **Step 1: Continuity and Domain.** $M(x)$ is a polynomial function (continuous everywhere) evaluated on the closed interval $[0, 6]$.
    
- **Step 2: Differentiate.**
    
    $$M'(x) = -6x^2 + 30x - 24$$
    
- **Step 3: Locate and filter critical points.**
    
    Set $M'(x) = 0$:
    
    $$-6(x^2 - 5x + 4) = 0 \implies -6(x - 1)(x - 4) = 0 \implies x = 1 \quad \text{and} \quad x = 4$$
    
    Both positions $x = 1\text{ m}$ and $x = 4\text{ m}$ fall within the interior domain $(0, 6)$.
    
- **Step 4: Evaluate the original bending moment function $M(x)$ at all candidates.**
    
    - **Left Boundary Wall ($x = 0$):** $M(0) = -2(0)^3 + 15(0)^2 - 24(0) + 50 = 50\text{ kN}\cdot\text{m}$
        
    - **First Critical Point ($x = 1$):** $M(1) = -2(1)^3 + 15(1)^2 - 24(1) + 50 = -2 + 15 - 24 + 50 = 39\text{ kN}\cdot\text{m}$
        
    - **Second Critical Point ($x = 4$):** $M(4) = -2(4)^3 + 15(4)^2 - 24(4) + 50 = -128 + 240 - 96 + 50 = 66\text{ kN}\cdot\text{m}$
        
    - **Right Boundary Wall ($x = 6$):** $M(6) = -2(6^3) + 15(6^2) - 24(6) + 50 = -432 + 540 - 144 + 50 = 14\text{ kN}\cdot\text{m}$
        
- **Step 5: Compare results.**
    
    - **Absolute Maximum Bending Moment Value:** $66\text{ kN}\cdot\text{m}$
        
    - **Location:** Position $x = 4\text{ meters}$
        

#### **Meaning & Application:**

The absolute maximum bending moment of $66\text{ kN}\cdot\text{m}$ defines the absolute point of highest rotational tearing stress experienced by the internal beam fibers. In structural engineering design, if a beam is going to crack under load, it will fail at the point where this value peaks. By mathematically proving that this maximum occurs exactly at location $x = 4\text{ meters}$, the engineer can optimize the material distribution—specifically ordering factory workers to cluster heavy-duty steel rebar plates at the 4-meter mark while tapering down reinforcement near the 6-meter mark (the absolute minimum moment of $14\text{ kN}\cdot\text{m}$), successfully saving thousands of dollars in excess steel while guaranteeing structural building safety.

### Engineering Problem 2: [[Microchip Transistor Thermal Cycle Profiling]]
[[Microchip Transistor Thermal Cycle Profiling Solution]]
An electronic systems engineer tests the thermal profile of a high-power gallium-nitride (GaN) transistor during a scheduled 6-second operational duty cycle. The internal junction temperature $T$ (in degrees Celsius, $^\circ\text{C}$) over the closed time interval $[0, 6]$ seconds is precisely modeled by the function:

$$T(t) = t^3 - 9t^2 + 15t + 100 \quad \text{for} \quad 0 \le t \le 6$$

Using the Closed Interval Method Algorithm, find the **absolute maximum temperature** and **absolute minimum temperature** along with their exact **locations**, and explain how this impacts component safety and diagnostic testing.

#### **Solution:**

- **Step 1: Continuity and Domain.** $T(t)$ is a polynomial function (continuous everywhere) on the closed interval $[0, 6]$.
    
- **Step 2: Differentiate.**
    
    $$T'(t) = 3t^2 - 18t + 15$$
    
- **Step 3: Locate and filter critical points.**
    
    Set $T'(t) = 0$:
    
    $$3(t^2 - 6t + 5) = 0 \implies 3(t - 1)(t - 5) = 0 \implies t = 1 \quad \text{and} \quad t = 5$$
    
    Both timing marks $t = 1\text{ s}$ and $t = 5\text{ s}$ fit within the interior interval $(0, 6)$.
    
- **Step 4: Evaluate the original temperature function $T(t)$ at all candidates.**
    
    - **Cycle Start Boundary ($t = 0$):** $T(0) = (0)^3 - 9(0)^2 + 15(0) + 100 = 100^\circ\text{C}$
        
    - **First Critical Point ($t = 1$):** $T(1) = (1)^3 - 9(1)^2 + 15(1) + 100 = 1 - 9 + 15 + 100 = 107^\circ\text{C}$
        
    - **Second Critical Point ($t = 5$):** $T(5) = (5)^3 - 9(5)^2 + 15(5) + 100 = 125 - 225 + 75 + 100 = 75^\circ\text{C}$
        
    - **Cycle End Boundary ($t = 6$):** $T(6) = (6)^3 - 9(6)^2 + 15(6) + 100 = 216 - 324 + 90 + 100 = 82^\circ\text{C}$
        
- **Step 5: Compare results.**
    
    - **Absolute Maximum Thermal Value:** $107^\circ\text{C}$ occurring at time location $t = 1\text{ second}$.
        
    - **Absolute Minimum Thermal Value:** $75^\circ\text{C}$ occurring at time location $t = 5\text{ seconds}$.
        

#### **Meaning & Application:**

The absolute maximum value of $107^\circ\text{C}$ is the critical diagnostic indicator for component safety. The engineer compares this peak output against the silicon substrate's maximum safe rated ceiling (e.g., $125^\circ\text{C}$) to ensure the microchip will not melt or undergo permanent thermal breakdown during execution. Conversely, finding the absolute minimum location at $t = 5\text{ seconds}$ where the temperature drops to $75^\circ\text{C}$ reveals the exact moment the transistor is coolest due to circuit phase shifting. The engineer applies this calculus baseline to program precise low-noise signal calibration readings exactly at the 5-second mark, when thermal electronic interference is at its absolute lowest level.