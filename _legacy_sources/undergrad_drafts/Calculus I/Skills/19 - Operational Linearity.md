# Skill 4: Operational Linearity (Sum/Difference & Constant Multiple Rules)

## Conceptual Notes: Deconstructing Complex Expressions

In real-world engineering environments, physical processes are rarely modeled by a single isolated variable term. Instead, equations are typically built out of multi-term combinations of polynomial, exponential, or trigonometric functions. To compute the antiderivative of a complex, multi-term integrand, we rely on the property of **Operational Linearity**.

Linearity allows us to treat a long, intimidating integral as a collection of separate, smaller sub-problems. It consists of two structural rules that mirror the rules used in differentiation:

### 1. The Constant Multiple Rule
If an integrand is multiplied by a constant factor $k$, that constant can be pulled outside of the integration operator. It passes through unchanged and multiplies the final antiderivative.
$$\int k \cdot f(x) \, dx = k \int f(x) \, dx$$

### 2. The Sum and Difference Rule
The integral of a sum or a difference of two or more functions is equal to the sum or difference of their individual integrals. This allows you to slice an algebraic expression term-by-term at every plus ($+$) or minus ($-$) sign.
$$\int \left( f(x) \pm g(x) \right) \, dx = \int f(x) \, dx \pm \int g(x) \, dx$$



### The Pedagogical Strategy: "Isolate and Concur"
When combining these rules, the operational strategy for any multivariable polynomial or expression is to:
1. Identify each unique term separated by addition or subtraction.
2. Distribute the integral sign $\int$ and the differential operator $dx$ to every single individual term.
3. Factor out any coefficient constants to the front of their respective integral terms.
4. Integrate each clean component piece-by-piece using standard base rules.
5. Collect the individual results together and attach one single constant of integration ($+C$) at the very end of the expression.

---

## Sample Problems (From Guided Notes)

### Sample Problem 1
Evaluate the indefinite integral using the properties of linearity:
$$\int \left(3x^5 - 2x^2 + 7\right) \, dx$$

**Step-by-Step Solution:**
1. **Apply the Sum and Difference Rule:** Deconstruct the polynomial into three independent integrals:
   $$\int 3x^5 \, dx - \int 2x^2 \, dx + \int 7 \, dx$$
2. **Apply the Constant Multiple Rule:** Extract the numerical coefficients to the front of each integration sign:
   $$3 \int x^5 \, dx - 2 \int x^2 \, dx + 7 \int 1 \, dx$$
3. **Integrate individual terms:** Apply the power rule to each sub-component:
   * $\int x^5 \, dx = \frac{x^6}{6}$
   * $\int x^2 \, dx = \frac{x^3}{3}$
   * $\int 1 \, dx = x$
4. **Reassemble and simplify the constants:** Assemble the terms back together, ensuring the constants multiply through:
   $$3\left(\frac{x^6}{6}\right) - 2\left(\frac{x^3}{3}\right) + 7(x) + C$$
   $$\frac{3}{6}x^6 - \frac{2}{3}x^3 + 7x + C = \frac{1}{2}x^6 - \frac{2}{3}x^3 + 7x + C$$

---

### Sample Problem 2
Evaluate the indefinite integral:
$$\int \left(4e^x + 5\cos(x)\right) \, dx$$

**Step-by-Step Solution:**
1. **Apply Linearity Rules:** Distribute the integral and pull out the constant multipliers simultaneously:
   $$4 \int e^x \, dx + 5 \int \cos(x) \, dx$$
2. **Evaluate the fundamental forms:** * The antiderivative of $e^x$ is $e^x$.
   * The antiderivative of $\cos(x)$ is $\sin(x)$.
3. **Combine the results:** Multiply the base rules by their respective constants and add the single arbitrary constant:
   $$4e^x + 5\sin(x) + C$$

---

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Aerodynamic Drag and Hybrid Powertrain Thrust (Mechanical & Automotive Engineering)]]
[[Aerodynamic Drag and Hybrid Powertrain Thrust (Mechanical & Automotive Engineering) Solution]]


---

### Engineering Problem 2: [[Hydrodynamics of Wastewater Reservoir Management (Civil & Environmental Engineering)]]
=[[Hydrodynamics of Wastewater Reservoir Management (Civil & Environmental Engineering) Solution]]
