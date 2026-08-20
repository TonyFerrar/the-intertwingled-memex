# Skill 2: Context-Driven Domain Determination

In pure mathematics, the domain of a function is determined solely by algebraic restrictions, such as preventing division by zero or avoiding negative numbers under an even radical. However, in optimization problems representing real-world physical systems, the domain is constrained by physical reality. Dimensions, materials, prices, and capacities cannot be negative, which establishes boundaries that dictate exactly where an absolute maximum or minimum can safely exist.

## 📘 Key Concepts & Workflow

### 1. The Principle of Physical Non-Negativity

When optimization problems model real-world variables (such as length, width, or height), these variables must naturally be greater than or equal to zero ($x \geq 0$).

### 2. Translating Constraints to Boundaries

To establish the complete domain for a single-variable objective function, you must take the expression obtained from your constraint equation and ensure it also satisfies physical limits.

- Set the independent variable to be greater than or equal to zero ($x \geq 0$).
    
- Take the substituted dependent variable expression (e.g., $y = f(x)$ or $h = f(w)$) and set it to be greater than or equal to zero as well.
    
- Solve the resulting inequality to find the upper physical limit of your independent variable.
    

### 3. Why the Domain Matters

The domain dictates the calculus method used to find and verify the absolute extrema. If the domain forms a closed interval $[a, b]$, you can use the **Closed Interval Method**, evaluating the objective function at both the critical points and the endpoints to guarantee an absolute maximum or minimum.

## 📝 Sample Problems (From Guided Notes)

### Sample Problem 1: Fencing Domain Bounds

**Problem Context:** A farmer constructs three adjacent pens using a total of 400 feet of fencing against a barn. The single-variable objective function for the total area is $A(x) = 400x - 4x^2$, where $y = 400 - 4x$ represents the width. Find the domain of this function.

#### Solution:

1. Since $x$ represents a physical length of fencing, it cannot be a negative value:
    
    $$x \geq 0$$
    
2. The width $y$ also represents a physical length and cannot be negative:
    
    $$y \geq 0 \implies 400 - 4x \geq 0$$
    
3. Solve the inequality for the upper bound:
    
    $$-4x \geq -400$$
    
    $$x \leq 100$$
    

**Conclusion:** Combining both physical boundaries, the context-driven domain is restricted to the closed interval:

$$D: 0 \leq x \leq 100 \quad \text{or} \quad x \in [0, 100]$$

### Sample Problem 2: Container Material Domain Bounds

**Problem Context:** A rectangular container with a square base is manufactured from exactly $150\text{ m}^2$ of material. The height of the box is expressed in terms of the width as $h = \frac{75-w^2}{2w}$. Establish the allowable physical domain for the width $w$.

#### Solution:

1. The width of the base cannot be negative:
    
    $$w \geq 0$$
    
2. The height of the container cannot be negative:
    
    $$h \geq 0 \implies \frac{75 - w^2}{2w} \geq 0$$
    
3. Since $w \geq 0$, the denominator is positive, meaning the numerator must be non-negative to satisfy the inequality:
    
    $$75 - w^2 \geq 0$$
    
    $$-w^2 \geq -75 \implies w^2 \leq 75$$
    
    $$w \leq \sqrt{75}$$
    

**Conclusion:** The physical domain for the container's width is bounded by:

$$D: 0 \leq w \leq \sqrt{75} \quad \text{or} \quad w \in [0, \sqrt{75}]$$

## 🛠️ Real-Life Engineering Application Problems

### Engineering Problem 1: [[Structural Civil Engineering (Beam Design Domain)]]
[[Structural Civil Engineering (Beam Design Domain) Solution]]
**Problem Statement:** A civil engineer is optimizing a solid rectangular steel beam that must span a gap in a bridge. To maintain structural balance against shear stress, the cross-sectional height $h$ and width $w$ are governed by the bridge's physical frame constraint: $2w + h = 36\text{ inches}$. The objective is to maximize the beam's moment of inertia (resistance to bending), modeled by $I(w) = w(36 - 2w)^3$. Determine the context-driven domain for the width $w$ to ensure a physically buildable beam.

#### Solution:

1. **Apply Width Non-Negativity:** The physical width of the beam cannot be zero or negative:
    
    $$w \geq 0$$
    
2. **Apply Height Non-Negativity:** The physical height of the beam cannot be zero or negative:
    
    $$h \geq 0 \implies 36 - 2w \geq 0$$
    
3. **Solve for Upper Boundary:**
    
    $$-2w \geq -36 \implies w \leq 18\text{ inches}$$
    

#### Meaning of the Answer & Real-Life Application:

- **The Meaning:** The buildable domain for the beam's width is $w \in [0, 18]$ inches. If $w = 0$, the beam has no width; if $w = 18$, the entire space is consumed by width, forcing the height to $0$.
    
- **Real-Life Application:** Defining this domain keeps the engineering optimization algorithm from calculating structurally impossible solutions. In real-world structural design, checking endpoints is vital; if an optimization algorithm accidentally recommends a width outside this interval (e.g., $w = 20\text{ inches}$), it would mathematically imply a negative height ($h = -4\text{ inches}$), which is physically impossible and would cause automated computer-aided design (CAD) software to crash or yield dangerous structural errors.
    

### Engineering Problem 2: [[Aerospace Engineering Payload Shell (Aerodynamic Radius Domain)]]
[[Aerospace Engineering Payload Shell (Aerodynamic Radius Domain) Solution]]
**Problem Statement:** An aerospace engineer is designing a cylindrical payload shell for a rocket nose cone. The total surface area of the specialized carbon-composite material allocated for this shell section is limited to $54\pi\text{ ft}^2$ to manage launch weight. The height of the cylinder is isolated from the surface area constraint as $h = \frac{27 - r^2}{r}$, where $r$ is the radius. Determine the context-driven domain for the radius $r$ of the payload shell.

#### Solution:

1. **Apply Radius Non-Negativity:** The physical radius of the rocket shell must be non-negative:
    
    $$r \geq 0$$
    
2. **Apply Height Non-Negativity:** The internal height allocated for payload storage cannot be negative:
    
    $$h \geq 0 \implies \frac{27 - r^2}{r} \geq 0$$
    
3. **Solve for Upper Boundary:** Because the radius $r$ is positive, focus on the numerator:
    
    $$27 - r^2 \geq 0 \implies r^2 \leq 27 \implies r \leq \sqrt{27} \approx 5.2\text{ feet}$$
    

#### Meaning of the Answer & Real-Life Application:

- **The Meaning:** The maximum allowable radius for this rocket component is exactly $\sqrt{27}$ feet, rendering the physical domain $r \in [0, \sqrt{27}]$.
    
- **Real-Life Application:** In aerospace manufacturing, materials are extremely expensive and allocated strictly by weight allowances. Determining the domain bounds tells the design team the maximum possible width the rocket body can have before the component runs out of material to enclose its top and bottom. Knowing that the radius cannot exceed $5.2\text{ feet}$ allows logistics engineers to plan assembly floor clearances and verify that the physical rocket diameter will safely clear the dimensions of the launchpad rail system before fabrication begins.