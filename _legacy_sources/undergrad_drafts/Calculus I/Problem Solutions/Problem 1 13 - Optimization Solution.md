Here is the complete, step-by-step solution to the optimization problem written in Markdown:

Markdown


# Optimization Problem Solution

### Problem Statement
A woman has a farm that is adjacent to a river. Suppose she wants to build a rectangular pen for her cows with 1200 feet of fencing. If one side of the pen is the river (her cows will not swim away), what is the area of the largest pen she can build?

---

### Step 1: Define the Variables and Set Up Equations
Let the rectangular pen have the following dimensions:
* $x$ = the length of the two sides perpendicular to the river (in feet).
* $y$ = the length of the single side parallel to the river (in feet).

#### 1. Constraint Equation (Fencing available)
Since the river acts as one of the boundaries, fencing is only needed for three sides ($2x$ and $1y$):
$$2x + y = 1200$$

We can isolate $y$ in terms of $x$:
$$y = 1200 - 2x$$

#### 2. Objective Equation (Area to maximize)
The formula for the area ($A$) of a rectangle is:
$$A = x \cdot y$$

Substitute the expression for $y$ into the area formula to get the objective function in terms of a single variable:
$$A(x) = x(1200 - 2x)$$
$$A(x) = 1200x - 2x^2$$

---

### Step 2: Find the Critical Points
To find the maximum area, take the first derivative of $A(x)$ with respect to $x$ and set it equal to zero:
$$A'(x) = 1200 - 4x$$

Set $A'(x) = 0$:
$$1200 - 4x = 0$$
$$4x = 1200$$
$$x = 300\text{ feet}$$

---

### Step 3: Verify the Maximum
To ensure this critical point yields a maximum value, we can use the Second Derivative Test:
$$A''(x) = -4$$

Since $A''(300) = -4 < 0$, the function is concave down at this point, confirming that $x = 300$ gives a **local and absolute maximum**.

---

### Step 4: Calculate the Dimensions and Maximum Area
Now that we have $x = 300\text{ feet}$, find the parallel dimension $y$:
$$y = 1200 - 2(300)$$
$$y = 1200 - 600 = 600\text{ feet}$$

Finally, compute the maximum area:
$$\text{Maximum Area} = x \cdot y = 300 \cdot 600 = 180,000\text{ square feet}$$

---

### Final Answer
The area of the largest pen she can build is **180,000 square feet** (with dimensions 300 feet by 600 feet).
