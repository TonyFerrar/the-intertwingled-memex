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