# Skill 2: Solving Multi-Stage Initial Value Problems (IVPs)

## Conceptual Notes: Moving from Families of Curves to Particular Solutions

When evaluating an indefinite integral, the result includes an arbitrary constant ($+C$). Geometrically, this represents an infinite **family of parallel curves** that all share the exact same slope profile but are shifted vertically. 



In engineering and physics, we usually need to find one exact, specific function that models reality. An **Initial Value Problem (IVP)** provides the system's differential behavior alongside a known data point—called an **initial condition** or **boundary condition**—such as $f(a) = b$. This coordinate point acts as a anchor that pinpoints exactly one curve out of the infinite family.

### Higher-Order Multi-Stage IVPs
When a system is governed by a higher-order derivative (such as a second derivative, $f''(x)$), the problem must be solved sequentially from the top down. 

Because each integration step introduces a brand new, independent constant of integration, a second-order problem requires a multi-stage approach:
1. **First Integration:** Integrate the second derivative $f''(x)$ to find the general expression for the first derivative, which includes the first constant: $f'(x) + C_1$.
2. **First Evaluation:** Immediately apply the given first derivative condition ($f'(a) = b$) to solve for the numerical value of $C_1$.
3. **Second Integration:** Integrate the completed $f'(x)$ function to find the general expression for the original function, introducing a second constant: $f(x) + C_2$.
4. **Second Evaluation:** Apply the second given condition ($f(c) = d$) to solve for the numerical value of $C_2$, leaving you with the final particular equation.

---

## Sample Problems (From Guided Notes)

### Sample Problem 1
Solve the initial value problem:
$$f^{\prime}(x) = 7x^6 - 4x^3 + 12; \quad f(1) = 25$$

**Step-by-Step Solution:**
1. **Find the general antiderivative:** Integrate $f'(x)$ term-by-term using the power rule:
   $$f(x) = \int (7x^6 - 4x^3 + 12) \, dx$$
   $$f(x) = 7\left(\frac{x^7}{7}\right) - 4\left(\frac{x^4}{4}\right) + 12x + C$$
   $$f(x) = x^7 - x^4 + 12x + C$$
2. **Apply the initial condition:** We are given $f(1) = 25$. Substitute $x = 1$ into the general equation:
   $$25 = (1)^7 - (1)^4 + 12(1) + C$$
   $$25 = 1 - 1 + 12 + C$$
   $$25 = 12 + C$$
   $$C = 13$$

**Final Answer:**
$$f(x) = x^7 - x^4 + 12x + 13$$

---

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Kinematics of an Autonomous Braking System (Mechanical & Automotive Engineering)]]
[[Kinematics of an Autonomous Braking System (Mechanical & Automotive Engineering) Solution]]

---

### Engineering Problem 2: [[Capacitor Charging in a Power Supply Grid (Electrical Engineering)]]
[[Capacitor Charging in a Power Supply Grid (Electrical Engineering) Solution]]
