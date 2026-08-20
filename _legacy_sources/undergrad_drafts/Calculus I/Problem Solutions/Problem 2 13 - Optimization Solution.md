# Optimization Problem Solution

### Problem Statement
A rectangular plot of land is to be fenced in using two types of fencing. Two opposite sides will use heavy-duty fencing selling for $4.50 a foot. The two remaining sides will use standard fencing selling for $3 a foot. How much of the heavy-duty and standard fencing should be used so that the greatest area can be fenced in at a cost of $18,000?

---

### Step 1: Define Variables and Set Up Equations
Let the rectangular plot have the following dimensions:
* $x$ = the length of the two opposite sides using heavy-duty fencing (in feet).
* $y$ = the length of the two opposite sides using standard fencing (in feet).

#### 1. Constraint Equation (Total Budget)
The total cost consists of the cost for the heavy-duty sides ($2 \cdot 4.50 \cdot x$) and the standard sides ($2 \cdot 3.00 \cdot y$):
$$4.50(2x) + 3.00(2y) = 18,000$$
$$9x + 6y = 18,000$$

We can isolate $y$ in terms of $x$:
$$6y = 18,000 - 9x$$
$$y = 3,000 - 1.5x$$

#### 2. Objective Equation (Area to maximize)
The formula for the area ($A$) of the rectangular plot is:
$$A = x \cdot y$$

Substitute our expression for $y$ into the area formula to get the objective function in terms of a single variable:
$$A(x) = x(3,000 - 1.5x)$$
$$A(x) = 3,000x - 1.5x^2$$

---

### Step 2: Find the Critical Points
To find the maximum area, take the first derivative of $A(x)$ with respect to $x$ and set it equal to zero:
$$A'(x) = 3,000 - 3x$$

Set $A'(x) = 0$:
$$3,000 - 3x = 0$$
$$3x = 3,000$$
$$x = 1,000\text{ feet}$$

---

### Step 3: Verify the Maximum
Using the Second Derivative Test to verify that this critical point gives a maximum:
$$A''(x) = -3$$

Since $A''(1,000) = -3 < 0$, the function is concave down, confirming that $x = 1,000$ yields an **absolute maximum**.

---

### Step 4: Calculate the Required Amount of Fencing
The problem asks for **how much** of each type of fencing should be used (i.e., the total linear feet for each type).

#### 1. Heavy-duty fencing
Since there are two sides of length $x$:
$$\text{Total heavy-duty fencing} = 2x = 2(1,000) = 2,000\text{ feet}$$

#### 2. Standard fencing
First, find the length of side $y$:
$$y = 3,000 - 1.5(1,000) = 3,000 - 1,500 = 1,500\text{ feet}$$

Since there are two sides of length $y$:
$$\text{Total standard fencing} = 2y = 2(1,500) = 3,000\text{ feet}$$

---

### Final Answer
To achieve the greatest area within the budget, you should use:
* **2,000 feet** of heavy-duty fencing.
* **3,000 feet** of standard fencing.