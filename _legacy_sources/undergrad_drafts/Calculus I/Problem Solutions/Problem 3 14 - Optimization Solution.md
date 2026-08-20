Here is the complete, step-by-step solution to the poster minimization problem written in Markdown:

Markdown


# Optimization Problem Solution

### Problem Statement
[cite_start]You are designing a rectangular poster meant to contain a $60\text{-in}^2$ area of text enclosed by a 3-inch margin at the top and bottom of the poster and a 5-inch margin at each side[cite: 203, 364]. [cite_start]What overall dimensions of the poster will minimize the amount of paper used[cite: 203, 365]?

---

### Step 1: Define Variables and Set Up Equations
Let us define the dimensions of the interior text area:
* $x$ = width of the printed text region (in inches).
* $y$ = height of the printed text region (in inches).



```
  ___________________ Overall Width (x + 10) ___________________
 |                                                              |
 |                         3-in Margin                          |
 |               ______________________________                 |
 |              |                              |                |
 |         5-in |          Text Area           | 5-in           | Overall Height
 |        Margin|           (xy = 60)          | Margin         |    (y + 6)
 |              |                              |                |
 |              |______________________________|                |
 |                         3-in Margin                          |
 |______________________________________________________________|
```



Because there is a 5-inch margin on both the left and right sides, the **overall width** of the poster is $x + 2(5) = x + 10$[cite: 203, 364].  
Because there is a 3-inch margin on both the top and bottom sides, the **overall height** of the poster is $y + 2(3) = y + 6$[cite: 203, 364].

#### 1. Constraint Equation (Fixed Text Area)
The area of the printed text must be exactly $60\text{ in}^2$[cite: 203, 364]:
$$x \cdot y = 60$$

Isolate $y$ in terms of $x$:
$$y = \frac{60}{x}$$

#### 2. Objective Equation (Total Paper Area to minimize)
The total area of the poster paper ($A$) is given by multiplying the overall width and overall height:
$$A = (x + 10)(y + 6)$$

Substitute our expression for $y$ into the area equation to create an objective function in terms of a single variable, $x$:
$$A(x) = (x + 10)\left(\frac{60}{x} + 6\right)$$

Expand the polynomial:
$$A(x) = 60 + 6x + \frac{600}{x} + 60$$
$$A(x) = 120 + 6x + 600x^{-1}$$

---

### Step 2: Find the Critical Points
To find the minimum amount of paper material, take the first derivative of $A(x)$ with respect to $x$ and set it equal to zero:
$$A'(x) = 6 - 600x^{-2} = 6 - \frac{600}{x^2}$$

Set $A'(x) = 0$:
$$6 - \frac{600}{x^2} = 0$$
$$6 = \frac{600}{x^2}$$
$$6x^2 = 600$$
$$x^2 = 100$$
$$x = 10\text{ inches}$$

*(Note: We reject the negative root $x = -10$ since a physical length measurement must be greater than zero[cite: 260, 313].)*

---

### Step 3: Verify the Minimum
Using the Second Derivative Test to ensure this critical value yields an absolute minimum:
$$A''(x) = \frac{1200}{x^3}$$

Evaluate at our positive critical point $x = 10$:
$$A''(10) = \frac{1200}{(10)^3} = \frac{1200}{1000} = 1.2$$

Since $A''(10) = 1.2 > 0$, the function is concave up at this point, mathematically proving that $x = 10\text{ inches}$ produces the **absolute minimum** paper area.

---

### Step 4: Calculate Final Overall Dimensions
Now that we have the optimal interior text width $x = 10\text{ inches}$, find the interior height $y$:
$$y = \frac{60}{10} = 6\text{ inches}$$

Finally, substitute $x$ and $y$ back into our overall dimension expressions:
* **Overall Width:** $x + 10 = 10 + 10 = 20\text{ inches}$
* **Overall Height:** $y + 6 = 6 + 6 = 12\text{ inches}$

---

### Final Answer
To minimize the amount of paper used, the overall dimensions of the poster should be **20 inches wide by 12 inches high**[cite: 203, 365].
