Here is the step-by-step solution to find the absolute maximum and minimum values of the function:

$$f(x,y) = x^2 + y^2 - 2x - 4y + 5$$

on the closed square region $R$ defined by $0 \le x \le 4$ and $0 \le y \le 4$.

### Step 1: Find Critical Points Inside the Region

First, we find the partial derivatives and set them to zero to locate any interior critical points:

$$\frac{\partial f}{\partial x} = 2x - 2 = 0 \implies x = 1$$

$$\frac{\partial f}{\partial y} = 2y - 4 = 0 \implies y = 2$$

- The point **$(1, 2)$** lies inside our closed square region.
    
- **Evaluate the function at this point:**
    
    $$f(1, 2) = 1^2 + 2^2 - 2(1) - 4(2) + 5 = 1 + 4 - 2 - 8 + 5 = 0$$
    

### Step 2: Find Extrema along the Boundaries

The boundary of the square consists of four segments. We must check each line segment.

#### Boundary 1: Bottom edge ($y = 0$, $0 \le x \le 4$)

Substitute $y = 0$ into the function:

$$g_1(x) = f(x, 0) = x^2 - 2x + 5$$

Find critical points on this boundary:

$$g_1'(x) = 2x - 2 = 0 \implies x = 1$$

- Evaluate at this critical boundary point: **$f(1, 0) = 1^2 - 2(1) + 5 = 4$**
    

#### Boundary 2: Top edge ($y = 4$, $0 \le x \le 4$)

Substitute $y = 4$ into the function:

$$g_2(x) = f(x, 4) = x^2 + 4^2 - 2x - 4(4) + 5 = x^2 - 2x + 5$$

Find critical points on this boundary:

$$g_2'(x) = 2x - 2 = 0 \implies x = 1$$

- Evaluate at this critical boundary point: **$f(1, 4) = 1^2 - 2(1) + 5 = 4$**
    

#### Boundary 3: Left edge ($x = 0$, $0 \le y \le 4$)

Substitute $x = 0$ into the function:

$$h_1(y) = f(0, y) = y^2 - 4y + 5$$

Find critical points on this boundary:

$$h_1'(y) = 2y - 4 = 0 \implies y = 2$$

- Evaluate at this critical boundary point: **$f(0, 2) = 2^2 - 4(2) + 5 = 1$**
    

#### Boundary 4: Right edge ($x = 4$, $0 \le y \le 4$)

Substitute $x = 4$ into the function:

$$h_2(y) = f(4, y) = 4^2 + y^2 - 2(4) - 4y + 5 = y^2 - 4y + 13$$

Find critical points on this boundary:

$$h_2'(y) = 2y - 4 = 0 \implies y = 2$$

- Evaluate at this critical boundary point: **$f(4, 2) = 2^2 - 4(2) + 13 = 9$**
    

### Step 3: Evaluate the Four Corners of the Square

We must also check the absolute vertices of our boundary region:

1. **$(0, 0)$**: $f(0, 0) = 5$
    
2. **$(4, 0)$**: $f(4, 0) = 4^2 - 2(4) + 5 = 13$
    
3. **$(0, 4)$**: $f(0, 4) = 4^2 - 4(4) + 5 = 5$
    
4. **$(4, 4)$**: $f(4, 4) = 4^2 + 4^2 - 2(4) - 4(4) + 5 = 13$
    

### Step 4: Compare All Candidate Values

Let's compile all values evaluated across our candidate points:

|**Point Location**|**Point (x,y)**|**Function Value f(x,y)**|
|---|---|---|
|**Interior Critical Point**|$(1, 2)$|**$0$** (Absolute Minimum)|
|**Boundary Extremum**|$(1, 0)$|$4$|
|**Boundary Extremum**|$(1, 4)$|$4$|
|**Boundary Extremum**|$(0, 2)$|$1$|
|**Boundary Extremum**|$(4, 2)$|$9$|
|**Corner Vertex**|$(0, 0)$|$5$|
|**Corner Vertex**|$(4, 0)$|**$13$** (Absolute Maximum)|
|**Corner Vertex**|$(0, 4)$|$5$|
|**Corner Vertex**|$(4, 4)$|**$13$** (Absolute Maximum)|

### Final Answer

- **Absolute Maximum Value:** **$13$**, occurring at the points **$(4, 0)$** and **$(4, 4)$**.
    
- **Absolute Minimum Value:** **$0$**, occurring at the point **$(1, 2)$**.