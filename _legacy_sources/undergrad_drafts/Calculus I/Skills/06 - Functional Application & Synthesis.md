## Calculus I Mastery: Skill 3 Functional Application and Synthesis with Tangent Lines

## 1. The Core Concept: Moving from a Point to a General Formula
In previous calculus topics, you may have calculated the numerical slope of a function at an isolated, single point $x=a$. While useful, this requires you to redo the entire limit process from scratch if you want to find the slope at a different point on the same curve. 

**The Derivative Function, $f'(x)$:** By evaluating the limit definition using the variable $x$ instead of a fixed number $a$, we generate a completely new function called the derivative:
$$f^{\prime}(x)=\lim_{h\rightarrow0}\frac{f(x+h)-f(x)}{h}$$

This derivative function operates as a universal **"slope machine"**. You plug any $x$-value along the domain into $f'(x)$, and it outputs the exact instantaneous slope ($m$) of the original curve at that coordinate.

---

## 2. Synthesizing the Tangent Line Equation
Once you can find the instantaneous slope at any point, you can construct a **linear approximation**—known as the tangent line. A line tangent to a curve at a single point mimics the exact trajectory and behavior of the curve in the immediate neighborhood of that point.

To build the formal geometric equation of a tangent line, you must synthesize three distinct values:
1. **The $x$-coordinate ($x_1$):** This is the target value provided to you (often written as $x = a$).
2. **The $y$-coordinate ($y_1$):** Found by plugging $a$ into the *original* function: $y_1 = f(a)$.
3. **The slope ($m$):** Found by evaluating the limit or plugging $a$ into the *derivative* function: $m = f'(a)$.

Once you have these three pieces, you substitute them directly into the algebraic **point-slope form**:
$$y - y_1 = m(x - x_1) \implies y - f(a) = f'(a)(x - a)$$



---

## 3. Custom Sample Problems & Solutions

### Problem 1: Building a General Derivative and Tangent Line
Consider the function $f(x) = 4x - x^2$. 
1. Find the general derivative function $f'(x)$ using the limit definition.
2. Find the equation of the line tangent to $f(x)$ at $x = 3$.

#### Step-by-step Solution:

**Part 1: Find $f'(x)$**
Set up the difference quotient with the variable $x$:
$$f'(x) = \lim_{h \to 0} \frac{[4(x+h) - (x+h)^2] - (4x - x^2)}{h}$$

Expand the polynomial terms in the numerator:
$$f'(x) = \lim_{h \to 0} \frac{4x + 4h - (x^2 + 2xh + h^2) - 4x + x^2}{h}$$
$$f'(x) = \lim_{h \to 0} \frac{4x + 4h - x^2 - 2xh - h^2 - 4x + x^2}{h}$$

Cancel out opposing non-$h$ terms ($4x - 4x = 0$ and $-x^2 + x^2 = 0$):
$$f'(x) = \lim_{h \to 0} \frac{4h - 2xh - h^2}{h}$$

Factor out $h$ and divide it out from the denominator to remove the $\frac{0}{0}$ form:
$$f'(x) = \lim_{h \to 0} \frac{h(4 - 2x - h)}{h} = \lim_{h \to 0} (4 - 2x - h)$$

Evaluate the limit by direct substitution ($h = 0$):
$$f'(x) = 4 - 2x$$

**Part 2: Construct the Tangent Line at $x = 3$**
* **Find the point ($y_1$):** Evaluate the original function at $x = 3$.
  $$y_1 = f(3) = 4(3) - (3)^2 = 12 - 9 = 3 \implies \text{Point: } (3, 3)$$
* **Find the slope ($m$):** Evaluate your new derivative function at $x = 3$.
  $$m = f'(3) = 4 - 2(3) = 4 - 6 = -2$$
* **Assemble using Point-Slope Form:**
  $$y - 3 = -2(x - 3)$$
  $$y - 3 = -2x + 6 \implies y = -2x + 9$$

---

## 4. Real-Life Engineering Application Problems

### Application Problem 1: [[Robotics & Control Systems (Drone Flight Path Linearization)]]
[[Robotics & Control Systems (Drone Flight Path Linearization) Solution]]

---

### Application Problem 2: [[Structural Engineering (Deformation Hooke's Modulus)]]
[[Structural Engineering (Deformation Hooke's Modulus) Solution]]
