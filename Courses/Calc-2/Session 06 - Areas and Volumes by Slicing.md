---
title: "Session 06 - Areas and Volumes by Slicing"
type: course-session
course: MATH-182
semester: Fall 2026
publish: true
cssclasses: []
updated: 2026-08-18
---

# Session 06 - Areas and Volumes by Slicing

## Session Objectives
By the end of this session, you will be able to:
- Algebraic Fluency & Definite Integral Execution
- Geometric-to-Algebraic Modeling (Formulating Radii & Area)
- Graph Orientation & Variable Selection (Choosing dx vs. dy)

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
The conceptual shift from a flat two-dimensional curve to a three-dimensional volume is how engineers translate raw mathematical models into physical hardware. In **mechanical and aerospace engineering**, the disk and washer methods define precise tool paths for machining round parts like engine pistons on a lathe, as well as calculating the wall volume of hollow rocket nozzles to optimize weight and aerodynamics. **Civil engineers** rely on the cross-sectional slicing method to navigate irregular natural terrains, allowing them to calculate the exact water capacity of a reservoir bounded by jagged canyon walls or determine "cut-and-fill" earthwork volumes before laying down highways. Finally, in medicine, **biomedical engineers** utilize these exact integration principles to reconstruct thousands of flat 2D MRI or CT scan slices into highly accurate 3D digital models, enabling doctors to measure the exact volume of a patient's organ or tumor for targeted treatments.

### Skill Block 1
## 1. Core Concept Notes

Many students understand the calculus setup of a volume or area problem perfectly, only to lose points on the final steps. In Calculus II, the calculus step (finding the antiderivative) is often the shortest part of the problem. The majority of your time and effort will be spent on **algebraic expansion** before integrating and **fraction arithmetic** during the evaluation phase.

### The Binomial Expansion Trap

When utilizing the Washer Method or computing volumes with square cross-sections, you will constantly encounter squared binomials such as $[R(x)]^2$.

- **The Fatal Error:** $(a - b)^2 \neq a^2 - b^2$.
    
- **The Correct Path:** You must explicitly expand using the FOIL method or the perfect square trinomial formula:
    
    $$(a - b)^2 = a^2 - 2ab + b^2$$
    
    $$(a + b)^2 = a^2 + 2ab + b^2$$
    

Failure to expand polynomials cleanly makes it impossible to apply the basic power rule for integration.

### Execution of the Fundamental Theorem of Calculus (FTC)

The evaluation phase, $F(b) - F(a)$, is highly prone to arithmetic slips. To maintain perfect precision, implement these systemic habits:

1. **Bracket Protection:** Always place the entire evaluation of the lower limit inside a protected set of parentheses or brackets preceded by a subtraction sign: $F(b) - [F(a)]$. This forces you to distribute the negative sign to _every single term_ inside.
    
2. **Symmetry Utilization:** If your integrand is an **even function** (all variable exponents are even numbers) and your integration boundaries are symmetric across the origin ($[-a, a]$), rewrite your integral as:
    
    $$\int_{-a}^{a} f(x) \, dx = 2 \int_{0}^{a} f(x) \, dx$$
    
    Evaluating a lower limit of $0$ eliminates half of your fraction arithmetic and drastically minimizes sign errors.
    

## 2. Pure Mathematics Sample Problems

### Sample Problem 1: Binomial Expansion & Radical Manipulation

Evaluate the definite integral representing the area of a region:

$$\int_{1}^{4} \left( \sqrt{x} - \frac{2}{\sqrt{x}} \right)^2 \, dx$$

#### Step-by-Step Algebraic Execution:

1. **Expand the Integrand First:** Do not attempt to integrate a squared grouped expression. Rewrite radicals as fractional exponents and expand the binomial:
    
    $$\left( x^{1/2} - 2x^{-1/2} \right)^2 = (x^{1/2})^2 - 2(x^{1/2})(2x^{-1/2}) + (2x^{-1/2})^2$$
    
    $$= x - 4x^0 + 4x^{-1} = x - 4 + \frac{4}{x}$$
    
2. **Integrate Term-by-Term:** Apply the power rule and the natural log integration rule ($\int \frac{1}{x} dx = \ln|x|$):
    
    $$\int (x - 4 + 4x^{-1}) \, dx = \frac{x^2}{2} - 4x + 4\ln|x|$$
    
3. **Evaluate via FTC from 1 to 4:**
    
    $$\left[ \frac{x^2}{2} - 4x + 4\ln|x| \right]_{1}^{4}$$
    
    $$\text{Upper Limit (4): } \left( \frac{4^2}{2} - 4(4) + 4\ln(4) \right) = 8 - 16 + 4\ln(4) = -8 + 4\ln(4)$$
    
    $$\text{Lower Limit (1): } \left( \frac{1^2}{2} - 4(1) + 4\ln(1) \right) = \frac{1}{2} - 4 + 0 = -\frac{7}{2}$$
    
4. **Subtract and Distribute the Negative Sign:**
    
    $$\text{Area} = (-8 + 4\ln(4)) - \left( -\frac{7}{2} \right) = -8 + 4\ln(4) + \frac{7}{2}$$
    
    $$\text{Area} = -\frac{16}{2} + \frac{7}{2} + 4\ln(4) = -\frac{9}{2} + 4\ln(4)$$
    

### Sample Problem 2: Fraction Arithmetic and LCD Management

Evaluate the definite integral representing a solid of revolution:

$$V = \pi \int_{1}^{2} (3x - x^2)^2 \, dx$$

#### Step-by-Step Algebraic Execution:

1. **Expand the Polynomial:**
    
    $$(3x - x^2)^2 = 9x^2 - 6x^3 + x^4$$
    
2. **Find the Antiderivative:**
    
    $$\int (9x^2 - 6x^3 + x^4) \, dx = 3x^3 - \frac{6}{4}x^4 + \frac{x^5}{5} = 3x^3 - \frac{3}{2}x^4 + \frac{x^5}{5}$$
    
3. **Apply the FTC Limits:**
    
    $$V = \pi \left[ 3x^3 - \frac{3}{2}x^4 + \frac{x^5}{5} \right]_{1}^{2}$$
    
    $$\text{Upper Limit (2): } \pi \left( 3(2)^3 - \frac{3}{2}(2)^4 + \frac{2^5}{5} \right) = \pi \left( 24 - 24 + \frac{32}{5} \right) = \frac{32\pi}{5}$$
    
    $$\text{Lower Limit (1): } \pi \left( 3(1)^3 - \frac{3}{2}(1)^4 + \frac{1^5}{5} \right) = \pi \left( 3 - \frac{3}{2} + \frac{1}{5} \right)$$
    
4. **Find a Common Denominator for the Lower Limit:** The least common denominator for 1, 2, and 5 is 10.
    
    $$\pi \left( \frac{30}{10} - \frac{15}{10} + \frac{2}{10} \right) = \frac{17\pi}{10}$$
    
5. **Final Subtraction (Find LCD between 5 and 10):**
    
    $$V = \frac{32\pi}{5} - \frac{17\pi}{10} = \frac{64\pi}{10} - \frac{17\pi}{10} = \frac{47\pi}{10}$$
    

## 3. Real-Life Engineering Application Problems

### Engineering Problem 1: [[Mechanical Lathe Component Manufacturing]]
[[Mechanical Lathe Component Manufacturing Solution]]


### Engineering Problem 2: [[Aerospace Lightweight Fuel Structural Ring]]
[[Aerospace Lightweight Fuel Structural Ring Solution]]

#### Worked Example
Find the area of the region between the curves $y=x^{2}$ and $y=-2x^{4}$ in the interval $[0, 1]$.

![[06 - Areas and Volume by Slicing LA Image 1.png]]

##### Solution
###### Step-by-Step Solution

To find the area of the region between two curves, you integrate the difference between the upper function and the lower function over the given interval.

###### Step 1: Identify the Upper and Lower Functions

By looking at the graph and analyzing the functions on the interval [0, 1]:

- **Upper function ($y_{\text{upper}}$):** $y = x^2$ (the curve above the x-axis)

- **Lower function ($y_{\text{lower}}$):** $y = -2x^4$ (the curve below the x-axis)


###### Step 2: Set Up the Area Integral

The formula for the area $A$ between two curves from $x = a$ to $x = b$ is:

$$A = \int_{a}^{b} (y_{\text{upper}} - y_{\text{lower}}) \, dx$$

Substituting the bounds $a = 0$ and $b = 1$, alongside our functions:

$$A = \int_{0}^{1} (x^2 - (-2x^4)) \, dx$$

$$A = \int_{0}^{1} (x^2 + 2x^4) \, dx$$

###### Step 3: Find the Antiderivative

Integrate each term individually using the power rule, which states that $\int x^n \, dx = \frac{x^{n+1}}{n+1}$:

$$\int (x^2 + 2x^4) \, dx = \frac{x^3}{3} + \frac{2x^5}{5}$$

###### Step 4: Evaluate the Definite Integral

Apply the Fundamental Theorem of Calculus by plugging in the upper limit (1) and subtracting the lower limit (0):

$$A = \left[ \frac{x^3}{3} + \frac{2x^5}{5} \right]_{0}^{1}$$

$$A = \left( \frac{1^3}{3} + \frac{2(1)^5}{5} \right) - \left( \frac{0^3}{3} + \frac{2(0)^5}{5} \right)$$

$$A = \left( \frac{1}{3} + \frac{2}{5} \right) - 0$$

###### Step 5: Find a Common Denominator and Solve

To combine the fractions, find the least common multiple for the denominators 3 and 5, which is 15:

$$\frac{1}{3} = \frac{5}{15}$$

$$\frac{2}{5} = \frac{6}{15}$$

Now, add them together:

$$A = \frac{5}{15} + \frac{6}{15} = \frac{11}{15}$$

###### Final Answer

The exact area of the shaded region is **$\frac{11}{15}$** (or approximately **0.733**).
#### Active Practice Problem
Find the area of the region, illustrated in the figure below, bounded by the curves $x=y^{2}$ and $x=y^{3}$ in the interval $[0, 1]$.

![[06 - Areas and Volume by Slicing LA Image 2.png]]

##### Workspace

##### Solution
###### Step-by-Step Solution

When functions are given as $x$ in terms of $y$ (i.e., $x = f(y)$), it is much easier to integrate with respect to $y$. Instead of finding "upper minus lower" curves, we look for the **"rightmost curve minus leftmost curve"** over the given $y$-interval.

###### Step 1: Identify the Right and Left Functions

Looking at the interval $y \in [0, 1]$ along the vertical axis:

- To determine which curve is further to the right, we can test a value in the interval, such as $y = 0.5$:

- For $x = y^2 \implies (0.5)^2 = 0.25$

- For $x = y^3 \implies (0.5)^3 = 0.125$

- Since $0.25 > 0.125$, the curve $x = y^2$ is further to the right.

- **Right function ($x_{\text{right}}$):** $x = y^2$

- **Left function ($x_{\text{left}}$):** $x = y^3$


###### Step 2: Set Up the Area Integral

The formula for the area $A$ between two curves integrated with respect to $y$ from $y = c$ to $y = d$ is:

$$A = \int_{c}^{d} (x_{\text{right}} - x_{\text{left}}) \, dy$$

Substituting our boundaries ($c = 0, d = 1$) and our functions:

$$A = \int_{0}^{1} (y^2 - y^3) \, dy$$

###### Step 3: Find the Antiderivative

Integrate each term using the power rule ($\int y^n \, dy = \frac{y^{n+1}}{n+1}$):

$$\int (y^2 - y^3) \, dy = \frac{y^3}{3} - \frac{y^4}{4}$$

###### Step 4: Evaluate the Definite Integral

Apply the Fundamental Theorem of Calculus by plugging in the upper limit (1) and subtracting the lower limit (0):

$$A = \left[ \frac{y^3}{3} - \frac{y^4}{4} \right]_{0}^{1}$$

$$A = \left( \frac{1^3}{3} - \frac{1^4}{4} \right) - \left( \frac{0^3}{3} - \frac{0^4}{4} \right)$$

$$A = \left( \frac{1}{3} - \frac{1}{4} \right) - 0$$

###### Step 5: Find a Common Denominator and Solve

Find a common denominator for 3 and 4, which is 12:

$$\frac{1}{3} = \frac{4}{12}$$

$$\frac{1}{4} = \frac{3}{12}$$

Subtract the fractions:

$$A = \frac{4}{12} - \frac{3}{12} = \frac{1}{12}$$

###### Final Answer

The exact area of the shaded region is **$\frac{1}{12}$** (or approximately **0.0833**).
##### Extra Practice & Extensions
> ##### Extension Problem (Slicing)
> Find the area of the region enclosed above the parabola $y=x^{2}$ and below the line $y=2-x$.

![[06 - Areas and Volume by Slicing LA Image 3.png]]
> 
> > [!check]- Solution
> > ## Step-by-Step Solution
> > 
> > Unlike the previous problems where the integration intervals were explicitly given, this problem requires us to find where the two curves intersect to determine our limits of integration.
> > 
> > ### Step 1: Identify the Upper and Lower Functions
> > 
> > Looking at the shaded region in the graph:
> > 
> > - **Upper function ($y_{\text{upper}}$):** $y = 2 - x$ (the straight line forming the top boundary)
> > 
> > - **Lower function ($y_{\text{lower}}$):** $y = x^2$ (the parabola forming the bottom boundary)
> > 
> > 
> > ### Step 2: Find the Intersection Points (Limits of Integration)
> > 
> > To find the boundaries where the region starts and ends, set the two equations equal to each other:
> > 
> > $$x^2 = 2 - x$$
> > 
> > Move all terms to one side to form a quadratic equation:
> > 
> > $$x^2 + x - 2 = 0$$
> > 
> > Factor the quadratic equation:
> > 
> > $$(x + 2)(x - 1) = 0$$
> > 
> > Setting each factor to zero gives our limits of integration:
> > 
> > - $x = -2$ (lower limit, $a$)
> > 
> > - $x = 1$ (upper limit, $b$)
> > 
> > 
> > ### Step 3: Set Up the Area Integral
> > 
> > The formula for the area $A$ between the curves is:
> > 
> > $$A = \int_{a}^{b} (y_{\text{upper}} - y_{\text{lower}}) \, dx$$
> > 
> > Substituting our boundaries and functions:
> > 
> > $$A = \int_{-2}^{1} ((2 - x) - x^2) \, dx$$
> > 
> > $$A = \int_{-2}^{1} (2 - x - x^2) \, dx$$
> > 
> > ### Step 4: Find the Antiderivative
> > 
> > Integrate each term individually using the power rule:
> > 
> > $$\int (2 - x - x^2) \, dx = 2x - \frac{x^2}{2} - \frac{x^3}{3}$$
> > 
> > ### Step 5: Evaluate the Definite Integral
> > 
> > Apply the Fundamental Theorem of Calculus by evaluating the antiderivative at the upper limit (1) and subtracting the value at the lower limit (-2):
> > 
> > $$A = \left[ 2x - \frac{x^2}{2} - \frac{x^3}{3} \right]_{-2}^{1}$$
> > 
> > **Evaluate at $x = 1$:**
> > 
> > $$\left( 2(1) - \frac{1^2}{2} - \frac{1^3}{3} \right) = 2 - \frac{1}{2} - \frac{1}{3}$$
> > 
> > $$= \frac{12}{6} - \frac{3}{6} - \frac{2}{6} = \frac{7}{6}$$
> > 
> > **Evaluate at $x = -2$:**
> > 
> > $$\left( 2(-2) - \frac{(-2)^2}{2} - \frac{(-2)^3}{3} \right) = -4 - \frac{4}{2} - \left(-\frac{8}{3}\right)$$
> > 
> > $$= -4 - 2 + \frac{8}{3} = -6 + \frac{8}{3}$$
> > 
> > $$= -\frac{18}{3} + \frac{8}{3} = -\frac{10}{3} = -\frac{20}{6}$$
> > 
> > **Subtract the lower limit value from the upper limit value:**
> > 
> > $$A = \frac{7}{6} - \left(-\frac{20}{6}\right)$$
> > 
> > $$A = \frac{7}{6} + \frac{20}{6} = \frac{27}{6}$$
> > 
> > Simplify the fraction by dividing the numerator and denominator by 3:
> > 
> > $$A = \frac{9}{2}$$
> > 
> > ### Final Answer
> > 
> > The exact area of the enclosed region is **$\frac{9}{2}$** (or **4.5**).
>

### Regroup 1
- Review common misconceptions and clarify key notations.

### Skill Block 2
## 1. Core Concept Notes

The core of the slicing method relies on translating a physical or geometric description of a 3D solid into an explicit algebraic function that can be integrated. Instead of just executing a given formula, you must build the integrand yourself by mapping geometric dimensions directly to coordinate variables.

### Modeling Cross-Sections for General Slicing

To find the volume of a solid with known cross-sections built upon a 2D base region, you must express the cross-sectional area, $A(x)$ or $A(y)$, in terms of the position along the coordinate axis.

- **Identify the Base Length ($b$):** The structural link between the 2D base region and the 3D slice is the length of the cross-section's line segment spanning the base. This length is found using the difference between the boundary functions (e.g., $b(x) = y_{\text{top}} - y_{\text{bottom}}$).
    
- **Apply the Area Formula:** Once the base dimension is written as a variable function, substitute it into the standard geometric formula for that specific cross-sectional shape:
    
    - **Squares:** The side length $s$ is equal to the base length across the region , so $A(x) = s^2 = [b(x)]^2$.
        
    - **Semicircles:** The base length across the region represents the full diameter ($d$) of the semicircle. Since $\text{radius } r = \frac{d}{2}$, the area is $A(x) = \frac{1}{2}\pi r^2 = \frac{1}{2}\pi \left(\frac{b(x)}{2}\right)^2 = \frac{\pi}{8}[b(x)]^2$.
        
    - **Isosceles Right Triangles (Leg on Base):** The area is $A(x) = \frac{1}{2}(\text{base})(\text{height}) = \frac{1}{2}[b(x)]^2$.
        

### Modeling Radii for Solids of Revolution

When a region is spun around an axis to create a solid of revolution, the cross-sections become circles (disks) or rings (washers). The algebraic challenge lies in properly formulating the radius as a distance relative to the axis of rotation.

- **Standard Axes (The $x$-axis or $y$-axis):** * For rotation around the $x$-axis, the radius is simply the vertical distance from $y=0$ to the curve: $R(x) = f(x)$.
    
    - For rotation around the $y$-axis, the radius is the horizontal distance from $x=0$ to the curve: $R(y) = f(y)$.
        
- **Shifted Axes (Lines like $y = k$ or $x = h$):** When the axis of rotation shifts away from the coordinate axes, the radius must be adjusted to represent the true physical distance between the rotation line and the boundary curves.
    
    - **Axis above the region ($y = k$):** The distance decreases as the curve moves upward, so $\text{Radius} = k - y_{\text{curve}}$.
        
    - **Axis below the region ($y = k$):** The distance increases as the curve moves upward, so $\text{Radius} = y_{\text{curve}} - k$.
        
    - **Axis to the right of the region ($x = h$):** $\text{Radius} = h - x_{\text{curve}}$.
        
    - **Axis to the left of the region ($x = h$):** $\text{Radius} = x_{\text{curve}} - h$.
        

## 2. Pure Mathematics Sample Problems

### Sample Problem 1: Semicircular Cross-Sections

Find the volume of a solid whose base is the region bounded by the parabola $y = x^2$, the line $x = 2$, and the $x$-axis ($y = 0$), if its cross-sections perpendicular to the $x$-axis are semicircles with diameters resting on the base.

#### Modeling Process:

1. **Find the integration variable and limits:** Because the cross-sections are perpendicular to the $x$-axis, we integrate with respect to $x$ ($dx$). The region starts at the origin ($x=0$) and ends at $x=2$.
    
2. **Formulate the diameter ($d$):** The diameter of any given semicircle is the vertical distance across the base region:
    
    $$d(x) = y_{\text{top}} - y_{\text{bottom}} = x^2 - 0 = x^2$$
    
3. **Formulate the area function $A(x)$:** The area of a semicircle is:
    
    $$A(x) = \frac{1}{2}\pi r^2 = \frac{1}{2}\pi \left(\frac{d(x)}{2}\right)^2 = \frac{1}{2}\pi \left(\frac{x^2}{2}\right)^2 = \frac{\pi}{8}x^4$$
    

#### Solution:

Set up and evaluate the volume integral using the cross-sectional area function:

$$Volume = \int_{0}^{2} A(x) \, dx = \int_{0}^{2} \frac{\pi}{8}x^4 \, dx$$

$$Volume = \frac{\pi}{8} \left[ \frac{x^5}{5} \right]_{0}^{2}$$

$$Volume = \frac{\pi}{8} \left( \frac{2^5}{5} - 0 \right) = \frac{\pi}{8} \left( \frac{32}{5} \right) = \frac{4\pi}{5}$$

### Sample Problem 2: Shifted Horizontal Axis of Rotation

Find the volume of the solid generated by revolving the region bounded by $y = \sqrt{x}$, the $x$-axis ($y = 0$), and the vertical line $x = 4$ about the horizontal line $y = -1$.

#### Modeling Process:

1. **Identify the method and variable:** Slicing perpendicular to the horizontal axis of rotation ($y = -1$) requires vertical slices, meaning we integrate with respect to $x$ ($dx$). Because there is a clear space/gap between the lower boundary ($y=0$) and the line of rotation ($y=-1$), spinning this region creates a hollow center, requiring the **washer method**.
    
2. **Formulate the Outer Radius ($R(x)$):** The distance from the axis of rotation $y = -1$ up to the furthest boundary curve ($y = \sqrt{x}$):
    
    $$R(x) = y_{\text{curve}} - y_{\text{axis}} = \sqrt{x} - (-1) = \sqrt{x} + 1$$
    
3. **Formulate the Inner Radius ($r(x)$):** The distance from the axis of rotation $y = -1$ to the nearest boundary curve ($y = 0$):
    
    $$r(x) = y_{\text{curve}} - y_{\text{axis}} = 0 - (-1) = 1$$
    

#### Solution:

Set up the washer method volume integral from $x = 0$ to $x = 4$:

$$Volume = \int_{0}^{4} \pi \left( [R(x)]^2 - [r(x)]^2 \right) \, dx$$

$$Volume = \pi \int_{0}^{4} \left( (\sqrt{x} + 1)^2 - (1)^2 \right) \, dx$$

Expand the squared binomial expression to simplify:

$$(\sqrt{x} + 1)^2 - 1 = (x + 2\sqrt{x} + 1) - 1 = x + 2x^{1/2}$$

$$Volume = \pi \int_{0}^{4} (x + 2x^{1/2}) \, dx$$

Integrate each term using the power rule:

$$Volume = \pi \left[ \frac{x^2}{2} + \frac{4}{3}x^{3/2} \right]_{0}^{4}$$

$$Volume = \pi \left( \left( \frac{4^2}{2} + \frac{4}{3}(4)^{3/2} \right) - 0 \right)$$

$$Volume = \pi \left( 8 + \frac{4}{3}(8) \right) = \pi \left( 8 + \frac{32}{3} \right) = \pi \left( \frac{24 + 32}{3} \right) = \frac{56\pi}{3}$$

## 3. Real-Life Engineering Application Problems

### Engineering Problem 1: [[Biomedical Ventricle Capacity Modeling]]
[[Biomedical Ventricle Capacity Modeling Solution]]


### Engineering Problem 2: [[Civil Engineering Water Reservoir Stress Balancing]]
[[Civil Engineering Water Reservoir Stress Balancing Solution]]

#### Worked Example
Determine the volume of the solid whose base is the region enclosed by the parabola $y=4-x^{2}$ and the x-axis, and whose cross sections perpendicular to the x-axis are squares.

![[06 - Areas and Volume by Slicing LA Image 4.png]]

##### Solution
###### Step-by-Step Solution

To find the volume of a solid with known cross-sections, we find the area of a single representative cross-section as a function of $x$ (or $y$) and integrate it across the boundaries of the base region.

###### Step 1: Find the Limits of Integration

The base of the solid is bounded by the parabola $y = 4 - x^2$ and the $x$-axis ($y = 0$). To find where they intersect, set the two equations equal to each other:

$$4 - x^2 = 0$$

$$x^2 = 4$$

$$x = -2 \quad \text{and} \quad x = 2$$

So, our limits of integration along the $x$-axis are from $a = -2$ to $b = 2$.

###### Step 2: Determine the Side Length of the Square Cross-Section

The cross-sections are perpendicular to the $x$-axis. For any given position $x$, the length of the base of that cross-section is the vertical distance from the $x$-axis up to the parabola:

$$\text{Side length } s(x) = y_{\text{upper}} - y_{\text{lower}}$$

$$s(x) = (4 - x^2) - 0 = 4 - x^2$$

###### Step 3: Find the Area Function $A(x)$

Since each cross-section is a **square**, the area $A$ of a cross-section with side length $s(x)$ is given by $A = s^2$:

$$A(x) = [s(x)]^2 = (4 - x^2)^2$$

Expand this expression to make integration easier:

$$A(x) = 16 - 8x^2 + x^4$$

###### Step 4: Set Up the Volume Integral

The volume $V$ is computed by integrating the cross-sectional area function over the interval $[-2, 2]$:

$$V = \int_{-2}^{2} A(x) \, dx$$

$$V = \int_{-2}^{2} (16 - 8x^2 + x^4) \, dx$$

**Tip (Using Symmetry):** Because the region and the function are perfectly symmetrical across the $y$-axis (an even function), we can integrate from $0$ to $2$ and multiply the result by 2 to simplify our calculations:

$$V = 2 \int_{0}^{2} (16 - 8x^2 + x^4) \, dx$$

###### Step 5: Find the Antiderivative and Evaluate

Integrate each term individually using the power rule:

$$\int (16 - 8x^2 + x^4) \, dx = 16x - \frac{8x^3}{3} + \frac{x^5}{5}$$

Now, apply the Fundamental Theorem of Calculus from $0$ to $2$:

$$V = 2 \left[ 16x - \frac{8x^3}{3} + \frac{x^5}{5} \right]_{0}^{2}$$

**Evaluate at the upper limit ($x = 2$):**

$$16(2) - \frac{8(2)^3}{3} + \frac{(2)^5}{5} = 32 - \frac{64}{3} + \frac{32}{5}$$

Find a common denominator, which is 15:

$$32 = \frac{480}{15}$$

$$\frac{64}{3} = \frac{320}{15}$$

$$\frac{32}{5} = \frac{96}{15}$$

Combine the fractions:

$$\frac{480 - 320 + 96}{15} = \frac{256}{15}$$

**Evaluate at the lower limit ($x = 0$):**

Everything simplifies directly to $0$.

###### Step 6: Compute the Final Volume

Multiply the result by 2 to account for the symmetry:

$$V = 2 \times \frac{256}{15} = \frac{512}{15}$$

###### Final Answer

The exact volume of the solid is **$\frac{512}{15}$** (or approximately **34.13**).
#### Active Practice Problem
Use the disk method to find the volume of the cone generated by revolving about the x-axis the region enclosed by the curve $y=2x$, the x-axis, and the vertical line $x=1$. Confirm your result using the formula for the volume of a cone ($V=\frac{1}{3}\pi r^{2}h$).

![[06 - Areas and Volume by Slicing LA Image 5.png]]

##### Workspace

##### Solution
###### Step-by-Step Solution

The **disk method** is used to find the volume of a solid of revolution when the region is rotated around an axis and there are no holes in the center of the solid. The cross-sections perpendicular to the axis of rotation are solid circular disks.

###### Part 1: Using the Disk Method

###### Step 1: Identify the Radius Function and Limits of Integration

- **Axis of Rotation:** The $x$-axis ($y = 0$).

- **Radius $R(x)$:** The distance from the $x$-axis to the curve $y = 2x$.

$$R(x) = 2x$$

- **Limits of Integration:** The region starts at the origin ($x = 0$) and ends at the vertical line ($x = 1$). So, $a = 0$ and $b = 1$.


###### Step 2: Set Up the Volume Integral

The general formula for the disk method when revolving around the $x$-axis is:

$$V = \int_{a}^{b} \pi [R(x)]^2 \, dx$$

Substitute the limits and the radius function:

$$V = \int_{0}^{1} \pi (2x)^2 \, dx$$

$$V = \int_{0}^{1} \pi (4x^2) \, dx$$

Factor out the constants to simplify the integration:

$$V = 4\pi \int_{0}^{1} x^2 \, dx$$

###### Step 3: Integrate and Evaluate

Integrate $x^2$ using the power rule ($\int x^n \, dx = \frac{x^{n+1}}{n+1}$):

$$\int x^2 \, dx = \frac{x^3}{3}$$

Now, apply the Fundamental Theorem of Calculus from $0$ to $1$:

$$V = 4\pi \left[ \frac{x^3}{3} \right]_{0}^{1}$$

$$V = 4\pi \left( \frac{1^3}{3} - \frac{0^3}{3} \right)$$

$$V = 4\pi \left( \frac{1}{3} \right) = \frac{4\pi}{3}$$

###### Part 2: Confirming with the Geometric Cone Formula

When you rotate this triangular region around the $x$-axis, it forms a right circular cone lying on its side.

###### Step 1: Identify the Cone's Dimensions

- **Height ($h$):** The length along the axis of rotation from $x = 0$ to $x = 1$.

$$h = 1 - 0 = 1$$

- **Radius ($r$):** The vertical height of the triangle at the widest point ($x = 1$). Plug $x = 1$ into our curve equation $y = 2x$:

$$r = 2(1) = 2$$


###### Step 2: Plug Dimensions into the Formula

Use the standard formula for the volume of a cone:

$$V = \frac{1}{3}\pi r^2 h$$

Substitute $r = 2$ and $h = 1$:

$$V = \frac{1}{3}\pi (2)^2 (1)$$

$$V = \frac{1}{3}\pi (4)(1) = \frac{4\pi}{3}$$

###### Final Answer

Both the calculus disk method and the geometric formula yield the exact same result. The volume of the generated cone is **$\frac{4\pi}{3}$** (or approximately **4.19**).
##### Extra Practice & Extensions
> ##### Extension Problem (Slicing)
> Use the disk method to find the volume of the solid generated by revolving about the y-axis the region enclosed by the curve $x=e^{-y}$, the y-axis, and the horizontal line $y=\ln 2$.

![[06 - Areas and Volume by Slicing LA Image 6.png]]
> 
> > [!check]- Solution
> > ## Step-by-Step Solution
> > 
> > Since this region is being rotated around the **y-axis**, we slice the solid horizontally. This means we will set up our radius function and integrate with respect to $y$ ($dy$).
> > 
> > ### Step 1: Identify the Radius Function and Limits of Integration
> > 
> > - **Axis of Rotation:** The $y$-axis ($x = 0$).
> > 
> > - **Radius $R(y)$:** The horizontal distance from the $y$-axis out to the curve $x = e^{-y}$.
> > 
> > $$R(y) = e^{-y}$$
> > 
> > - **Limits of Integration:** Looking at the vertical axis, the shaded region starts at the $x$-axis ($y = 0$) and goes up to the given horizontal line ($y = \ln 2$). So, our boundaries are $c = 0$ and $d = \ln 2$.
> > 
> > 
> > ### Step 2: Set Up the Volume Integral
> > 
> > The general formula for the disk method when revolving around the $y$-axis is:
> > 
> > $$V = \int_{c}^{d} \pi [R(y)]^2 \, dy$$
> > 
> > Substitute our limits and the radius function:
> > 
> > $$V = \int_{0}^{\ln 2} \pi \left(e^{-y}\right)^2 \, dy$$
> > 
> > Using exponent rules, simplify the integrand by multiplying the exponents $\left((e^{-y})^2 = e^{-2y}\right)$:
> > 
> > $$V = \pi \int_{0}^{\ln 2} e^{-2y} \, dy$$
> > 
> > ### Step 3: Find the Antiderivative
> > 
> > Integrate using the exponential integration rule $\int e^{ky} \, dy = \frac{1}{k} e^{ky}$:
> > 
> > $$\int e^{-2y} \, dy = -\frac{1}{2}e^{-2y}$$
> > 
> > ### Step 4: Evaluate the Definite Integral
> > 
> > Apply the Fundamental Theorem of Calculus from $0$ to $\ln 2$:
> > 
> > $$V = \pi \left[ -\frac{1}{2}e^{-2y} \right]_{0}^{\ln 2}$$
> > 
> > To make evaluating easier, factor out the constant coefficient $-\frac{1}{2}$:
> > 
> > $$V = -\frac{\pi}{2} \left[ e^{-2y} \right]_{0}^{\ln 2}$$
> > 
> > **Evaluate at the upper limit ($y = \ln 2$):**
> > 
> > Using log properties, rewrite the exponent: $-2\ln 2 = \ln(2^{-2}) = \ln\left(\frac{1}{4}\right)$.
> > 
> > $$e^{-2\ln 2} = e^{\ln(1/4)} = \frac{1}{4}$$
> > 
> > **Evaluate at the lower limit ($y = 0$):**
> > 
> > $$e^{-2(0)} = e^0 = 1$$
> > 
> > **Subtract the lower limit value from the upper limit value:**
> > 
> > $$V = -\frac{\pi}{2} \left( \frac{1}{4} - 1 \right)$$
> > 
> > $$V = -\frac{\pi}{2} \left( -\frac{3}{4} \right)$$
> > 
> > $$V = \frac{3\pi}{8}$$
> > 
> > ### Final Answer
> > 
> > The exact volume of the generated solid is **$\frac{3\pi}{8}$** (or approximately **1.18**).
>

### Regroup 2
- Reflect on the physical modeling applications and mathematical setups.

### Skill Block 3
## 1. Core Concept Notes

When calculating areas or volumes by slicing, the most critical decision you make happens before writing down a single integral: **Should you integrate with respect to $x$ ($dx$) or with respect to $y$ ($dy$)?** Choosing incorrectly or inefficiently can turn a simple problem into a long, error-prone algebraic nightmare.

### Vertical Slicing ($dx$)

You choose vertical slicing when the boundaries of the region are easily defined from top to bottom over a continuous left-to-right interval $[a, b]$.

- **Representative Rectangle:** Vertically oriented with a width of $\Delta x$.
    
- **Height:** Defined by the **Upper Curve minus the Lower Curve** ($y_{\text{top}} - y_{\text{bottom}}$).
    
- **Integral Formula for Area:**
    
    $$\text{Area} = \int_{a}^{b} (f(x) - g(x)) \, dx \quad \text{where } f(x) \ge g(x) \text{ on } [a, b]$$
    

### Horizontal Slicing ($dy$)

You choose horizontal slicing when the boundaries are cleaner from right to left, or if a single vertical line would cross the same curve multiple times (violating the vertical line test).

- **Representative Rectangle:** Horizontally oriented with a thickness of $\Delta y$.
    
- **Width:** Defined by the **Rightmost Curve minus the Leftmost Curve** ($x_{\text{right}} - x_{\text{left}}$).
    
- **Integral Formula for Area:**
    
    $$\text{Area} = \int_{c}^{d} (f(y) - g(y)) \, dy \quad \text{where } f(y) \ge g(y) \text{ on } [c, d]$$
    

### Volume Considerations (Disk vs. Washer)

Your choice of variable also dictates the visual structure of a solid of revolution.

- **Slices Parallel to the Axis of Rotation** create nested cylindrical shells.
    
- **Slices Perpendicular to the Axis of Rotation** create solid disks or hollow washers.
    
    - If a vertical slice ($dx$) revolves around the **$x$-axis** (or any horizontal line), it creates a disk or a washer.
        
    - If a horizontal slice ($dy$) revolves around the **$y$-axis** (or any vertical line), it creates a disk or a washer.
        

## 2. Pure Mathematics Sample Problems

### Sample Problem 1: Choosing $dx$ vs. $dy$ for Area Efficiency

Find the area of the region bounded by the curves $x = y^2$ and $y = x - 2$.

#### Step-by-Step Selection Process:

1. **Analyze with $dx$:** If we slice vertically, the bottom boundary changes structurally at $x = 1$. From $x = 0$ to $x = 1$, the bottom is the lower half of the parabola ($y = -\sqrt{x}$). From $x = 1$ to $x = 4$, the bottom is the line ($y = x - 2$). This forces us to set up _two separate integrals_.
    
2. **Analyze with $dy$:** If we slice horizontally, the rightmost boundary is always the line ($x = y + 2$) and the leftmost boundary is always the parabola ($x = y^2$) throughout the entire vertical span. This allows us to use a _single integral_.
    

We choose **$dy$**.

#### Solution:

Find the $y$-limits of integration by setting the equations equal to each other:

$$y^2 = y + 2 \implies y^2 - y - 2 = 0 \implies (y - 2)(y + 1) = 0$$

Our limits are $c = -1$ and $d = 2$.

Set up the single $dy$ integral using $\text{Right} - \text{Left}$:

$$\text{Area} = \int_{-1}^{2} ((y + 2) - y^2) \, dy$$

$$\text{Area} = \left[ \frac{y^2}{2} + 2y - \frac{y^3}{3} \right]_{-1}^{2}$$

Evaluating at the upper limit ($y = 2$):

$$\left( \frac{4}{2} + 4 - \frac{8}{3} \right) = 6 - \frac{8}{3} = \frac{10}{3}$$

Evaluating at the lower limit ($y = -1$):

$$\left( \frac{1}{2} - 2 - \frac{-1}{3} \right) = -\frac{3}{2} + \frac{1}{3} = -\frac{7}{6}$$

Subtract to find the total area:

$$\text{Area} = \frac{10}{3} - \left(-\frac{7}{6}\right) = \frac{20}{6} + \frac{7}{6} = \frac{27}{6} = \frac{9}{2}$$

### Sample Problem 2: Visualizing Solid vs. Hollow Volumes

Let a region be bounded by $y = x^3$, $y = 0$, and $x = 1$. Set up the integral expressions to find the volume when rotated about:

1. The $x$-axis
    
2. The $y$-axis
    

#### Step-by-Step Selection Process:

1. **Rotation about the $x$-axis:** Slicing perpendicular to this axis requires a vertical slice ($dx$). The base of the slice rests completely on the axis of rotation ($y = 0$), meaning there is no gap. This will form a **solid disk**.
    
2. **Rotation about the $y$-axis:** Slicing perpendicular to this axis requires a horizontal slice ($dy$). There is an empty gap between the axis of rotation ($x = 0$) and the inner curve. This will form a **hollow washer**.
    

#### Solution:

- **For the $x$-axis rotation (Disk Method):**
    
    $$\text{Radius } R(x) = x^3 \text{ from } x = 0 \text{ to } x = 1$$
    
    $$V = \int_{0}^{1} \pi (x^3)^2 \, dx = \pi \int_{0}^{1} x^6 \, dx = \pi \left[ \frac{x^7}{7} \right]_{0}^{1} = \frac{\pi}{7}$$
    
- **For the $y$-axis rotation (Washer Method):**
    
    We must convert functions to terms of $y$: $y = x^3 \implies x = y^{1/3}$.
    
    $$\text{Outer Radius } R(y) = 1 \quad \text{(the line } x = 1\text{)}$$
    
    $$\text{Inner Radius } r(y) = y^{1/3} \quad \text{(the curve } x = y^{1/3}\text{)}$$
    

The limits along the $y$-axis span from $y = 0^3 = 0$ to $y = 1^3 = 1$.

$$V = \int_{0}^{1} \pi \left( (1)^2 - (y^{1/3})^2 \right) \, dy = \pi \int_{0}^{1} (1 - y^{2/3}) \, dy$$

$$V = \pi \left[ y - \frac{3}{5}y^{5/3} \right]_{0}^{1} = \pi \left( 1 - \frac{3}{5} \right) = \frac{2\pi}{5}$$

## 3. Real-Life Engineering Application Problems

### Engineering Problem 1: [[Aerospace Nozzle Wall Weight Optimization]]
[[Aerospace Nozzle Wall Weight Optimization Solution]]

### Engineering Problem 2: [[Civil Engineering Highway Topography Slicing]]
[[Civil Engineering Highway Topography Slicing Solution]]

#### Worked Example
The region between the curves $y=2x$ and $y=4$ and the y-axis is rotated about the x-axis. Find the volume of the generated solid. (What does this solid look like?)

![[06 - Areas and Volume by Slicing LA Image 7.png]]

##### Solution
###### Step-by-Step Solution

Because there is an empty space between our shaded region and the axis of rotation (the $x$-axis), spinning this shape creates a hollow center. To find the volume, we must use the **washer method** (which is essentially a outer disk minus an inner disk).

###### Step 1: Identify the Outer and Inner Radii

Looking at the shaded region from the perspective of the $x$-axis:

- **Outer Radius ($R(x)$):** The distance from the $x$-axis up to the top boundary, which is the flat line $y = 4$.

$$R(x) = 4$$

- **Inner Radius ($r(x)$):** The distance from the $x$-axis up to the lower boundary of the shaded region, which is the line $y = 2x$.

$$r(x) = 2x$$


###### Step 2: Determine the Limits of Integration

Looking at the $x$-axis, the shaded region spans from the $y$-axis ($x = 0$) up to where the two lines intersect.

To find the intersection, set them equal to each other:

$$2x = 4 \implies x = 2$$

So, our limits of integration are from $a = 0$ to $b = 2$.

###### Step 3: Set Up the Volume Integral

The general formula for the washer method is:

$$V = \int_{a}^{b} \pi \left( [R(x)]^2 - [r(x)]^2 \right) \, dx$$

Substitute our limits and radius functions:

$$V = \int_{0}^{2} \pi \left( (4)^2 - (2x)^2 \right) \, dx$$

$$V = \pi \int_{0}^{2} (16 - 4x^2) \, dx$$

###### Step 4: Find the Antiderivative and Evaluate

Integrate each term using the power rule:

$$\int (16 - 4x^2) \, dx = 16x - \frac{4x^3}{3}$$

Apply the Fundamental Theorem of Calculus from $0$ to $2$:

$$V = \pi \left[ 16x - \frac{4x^3}{3} \right]_{0}^{2}$$

**Evaluate at the upper limit ($x = 2$):**

$$\left( 16(2) - \frac{4(2)^3}{3} \right) = 32 - \frac{4(8)}{3} = 32 - \frac{32}{3}$$

Find a common denominator:

$$\frac{96}{3} - \frac{32}{3} = \frac{64}{3}$$

**Evaluate at the lower limit ($x = 0$):**

Plugging in $0$ leaves us with $0$.

Combine it with $\pi$:

$$V = \frac{64\pi}{3}$$

###### What Does this Solid Look Like?

Imagine the two boundary lines spinning completely around the $x$-axis:

- Spinning the horizontal top line ($y = 4$) from $x = 0$ to $x = 2$ creates a perfectly solid **cylinder** with a radius of 4 and a height of 2.

- Spinning the slanted line ($y = 2x$) carves an empty **cone** out of the exact center of that cylinder.


**Visual Description:** The solid looks like a **solid cylinder with a conical hole or funnel carved out of its center**.

**Optional Geometric Double-Check:**

We can verify this easily using basic geometry!

- $\text{Volume of Cylinder} = \pi r^2 h = \pi (4^2)(2) = 32\pi$

- $\text{Volume of Carved Cone} = \frac{1}{3}\pi r^2 h = \frac{1}{3}\pi (4^2)(2) = \frac{32\pi}{3}$

- $\text{Total Volume} = 32\pi - \frac{32\pi}{3} = \frac{96\pi - 32\pi}{3} = \frac{64\pi}{3}$


###### Final Answer

The exact volume of the generated solid is **$\frac{64\pi}{3}$** (or approximately **67.02**).
#### Active Practice Problem
Find the volume of the solid generated by rotating the region described in the previous problem this time about the line $y=5$. (What does this solid look like?)

##### Workspace

##### Solution
###### Step-by-Step Solution

In the previous problem, our region was bounded by the flat line $y = 4$, the slanted line $y = 2x$, and the $y$-axis ($x = 0$) over the interval $[0, 2]$.

This time, we are rotating that same triangular region around a horizontal line **above** the region: $y = 5$. Because there is a gap between the region and the axis of rotation, we will use the **washer method**.

###### Step 1: Identify the Outer and Inner Radii

When rotating around a line like $y = 5$, the radius is the vertical distance from the axis of rotation down to the boundary curve: $\text{Radius} = 5 - y$.

- **Outer Radius ($R(x)$):** This is the distance from $y = 5$ to the boundary furthest away from it. Looking at the region, the slanted line $y = 2x$ is lower down, making it the furthest away.

$$R(x) = 5 - y_{\text{lower}} = 5 - 2x$$

- **Inner Radius ($r(x)$):** This is the distance from $y = 5$ to the boundary closest to it. This is the flat line $y = 4$.

$$r(x) = 5 - y_{\text{upper}} = 5 - 4 = 1$$


###### Step 2: Set Up the Volume Integral

Using the washer method formula over the interval $[0, 2]$:

$$V = \int_{a}^{b} \pi \left( [R(x)]^2 - [r(x)]^2 \right) \, dx$$

Substitute our radii functions and boundaries:

$$V = \int_{0}^{2} \pi \left( (5 - 2x)^2 - (1)^2 \right) \, dx$$

Expand and simplify the terms inside the integrand:

$$(5 - 2x)^2 = 25 - 20x + 4x^2$$

$$(5 - 2x)^2 - 1 = 25 - 20x + 4x^2 - 1 = 24 - 20x + 4x^2$$

Now substitute the simplified expression back into the integral:

$$V = \pi \int_{0}^{2} (24 - 20x + 4x^2) \, dx$$

###### Step 3: Find the Antiderivative

Integrate each term individually using the power rule:

$$\int (24 - 20x + 4x^2) \, dx = 24x - \frac{20x^2}{2} + \frac{4x^3}{3} = 24x - 10x^2 + \frac{4x^3}{3}$$

###### Step 4: Evaluate the Definite Integral

Apply the Fundamental Theorem of Calculus from $0$ to $2$:

$$V = \pi \left[ 24x - 10x^2 + \frac{4x^3}{3} \right]_{0}^{2}$$

**Evaluate at the upper limit ($x = 2$):**

$$\left( 24(2) - 10(2)^2 + \frac{4(2)^3}{3} \right) = 48 - 10(4) + \frac{4(8)}{3}$$

$$= 48 - 40 + \frac{32}{3}$$

$$= 8 + \frac{32}{3}$$

Find a common denominator to combine them:

$$\frac{24}{3} + \frac{32}{3} = \frac{56}{3}$$

**Evaluate at the lower limit ($x = 0$):**

Plugging in $0$ yields $0$.

Combine the result with $\pi$:

$$V = \frac{56\pi}{3}$$

###### What Does this Solid Look Like?

- Rotating the slanted line $y = 2x$ around $y = 5$ creates a large outer shape known as a **frustum** (a cone with its top chopped off). It starts with a wide outer radius of 5 at the left side ($x=0$) and tapers down to a smaller outer radius of 1 at the right side ($x=2$).

- Rotating the flat line $y = 4$ around $y = 5$ creates a perfectly straight, empty **cylindrical hole** of radius 1 directly through the middle.


**Visual Description:** The solid looks like a **tapered feeding bowl, a megaphone, or a heavy-duty ring-shaped pipe** that is wide on one end and narrow on the other, with a straight cylindrical hole drilled perfectly through its core.

**Optional Geometric Double-Check:**

- $\text{Volume of Outer Frustum} = \frac{1}{3}\pi h (R_1^2 + R_1R_2 + R_2^2) = \frac{1}{3}\pi (2)(5^2 + (5)(1) + 1^2) = \frac{2}{3}\pi(31) = \frac{62\pi}{3}$

- $\text{Volume of Inner Cylindrical Hole} = \pi r^2 h = \pi (1^2)(2) = 2\pi = \frac{6\pi}{3}$

- $\text{Total Volume} = \frac{62\pi}{3} - \frac{6\pi}{3} = \frac{56\pi}{3}$


###### Final Answer

The exact volume of the generated solid is **$\frac{56\pi}{3}$** (or approximately **58.64**).

### Regroup 3
- Verify calculations and mathematical reasoning.

### Synthesis Wrap-up
- Core takeaways from Session 06 and overview of homework homework assignment.
