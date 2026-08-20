### **Topic 1: Spreadsheet Basics & Formula Execution (Additional Practice)**

* **Make sure you put all of your solutions in 1 spreadsheet, labeling every single problem and their solution. **
* **Please turn in 1 PDF of your spreadsheet with all answers**

#### **Problem 1: Complex Algebraic Translation**

You are modeling the thermal expansion of a metal alloy. The expansion factor $E(x)$ based on temperature $x$ is defined by the following complex fraction:

$$E(x) = \frac{4x^3 - 2x}{\sqrt{x^2 + 1.5}}$$

If the temperature values ($x$) are listed in column A starting at cell `A2`, write the exact spreadsheet formula you must type into cell `B2` to evaluate this function correctly.

#### **Problem 2: Catching a Syntax Error (Order of Operations)**

A junior engineering student is trying to calculate the voltage output of a sensor using the formula $V = \frac{5x}{x + 2}$. The $x$ values are in column A.

The student types the following into the spreadsheet: `=5*A2/A2+2`

1. Explain why this formula will calculate the wrong answer based on spreadsheet order of operations.
    
2. Write the corrected formula.
    

#### **Problem 3: Using the PI() Function for Geometry**

You are a manufacturing engineer calculating the surface area of various custom steel ball bearings. The formula for the surface area of a sphere is $A = 4\pi r^2$.

If a list of varying radii ($r$) is contained in column A starting at cell `A4`, write the exact spreadsheet formula for cell `B4` to compute the surface area.

#### **Problem 4: Mixed Cell Referencing (Cone Volume)**

You are designing a series of conical storage hoppers. The volume of a cone is $V = \frac{1}{3}\pi r^2 h$.

The radius is a fixed design constraint of $12\text{ meters}$ and is typed into cell `B1`. You want to test a variety of heights ($h$), which are listed in column A starting at `A4`.

Write the formula for cell `B4` so that it references the radius in `B1` as an absolute constant, but allows the height reference to change dynamically as you autofill down the column.

#### **Problem 5: Predicting Autofill Behavior**

You have entered the initial values `0.1` in cell `A2` and `0.2` in cell `A3`.

If you highlight both cells and drag the autofill handle down to cell `A7`, what exact numerical values will Google Sheets automatically populate in cells `A4`, `A5`, `A6`, and `A7`?

#### **Problem 6: Debugging the #VALUE! Error**

An engineer sets up a spreadsheet to calculate force ($F = ma$). The fixed mass of $50\text{ kg}$ is stored in cell `C1`. A list of accelerations is in column A (starting at `A3`). The engineer types `=A3*C1` into cell `B3` and hits enter. It calculates perfectly.

However, when they autofill the formula down to `B4`, the cell outputs a `#VALUE!` error.

Explain exactly why this error occurred and how to fix the original formula in `B3`.

#### **Problem 7: Exponential Decay of a Radioactive Isotope**

A nuclear engineer is modeling the radioactive decay of a sample. The remaining mass $M(t)$ at time $t$ is given by the formula:

$$M(t) = M_0 e^{-0.05t}$$

The initial mass constant $M_0$ is $500\text{ grams}$, stored securely in cell `$D$2`. The time intervals ($t$) are listed in column A starting at `A5`.

Write the exact formula for cell `B5` to calculate the remaining mass using built-in spreadsheet functions.

#### **Problem 8: Tracking Absolute Referencing Shifts**

An engineer types the following formula into cell `C5`:

`=($A5 * 2) + B$2`

If the engineer uses the autofill tool to copy this exact formula down one row into cell `C6`, write out what the newly shifted formula inside `C6` will look like.

%%

## **Solutions / Answer Key**

### **Problem 1 Solution**

- **Formula:** `=(4*A2^3 - 2*A2) / SQRT(A2^2 + 1.5)`
    
- _Why:_ Parentheses must enclose the entire numerator to force it to evaluate together before the division operator (`/`). The `SQRT()` function acts as its own grouping for the denominator.
    

### **Problem 2 Solution**

1. **Explanation:** Spreadsheets strictly follow PEMDAS. The student's formula `=5*A2/A2+2` will first multiply $5$ by $A2$, then divide that result by $A2$ (which just equals $5$), and finally add $2$ at the end. It essentially calculates $\left(\frac{5x}{x}\right) + 2$.
    
2. **Corrected Formula:** `=(5*A2) / (A2 + 2)`
    

### **Problem 3 Solution**

- **Formula:** `=4 * PI() * A4^2`
    
- _Why:_ The constant $\pi$ is called using the empty function `PI()`, and standard exponentiation is handled with the `^` symbol.
    

### **Problem 4 Solution**

- **Formula:** `=(1/3) * PI() * ($B$1^2) * A4`
    
- _Why:_ The `$B$1` uses absolute referencing to permanently freeze the radius lookup to cell `B1`. The `A4` is left relative so that as the formula is dragged down, it dynamically shifts to `A5`, `A6`, etc., to test the new heights.
    

### **Problem 5 Solution**

- **Cell `A4`:** `0.3`
    
- **Cell `A5`:** `0.4`
    
- **Cell `A6`:** `0.5`
    
- **Cell `A7`:** `0.6`
    
- _Why:_ When you highlight multiple cells, the spreadsheet detects the linear delta (an increment of $+0.1$) and continues that exact mathematical pattern down the column.
    

### **Problem 6 Solution**

- **Explanation:** Because the engineer did not use absolute reference anchors (`$`), dragging the formula down caused the relative references to shift. `A3` correctly shifted to `A4`, but `C1` shifted down to `C2`. If `C2` contains a text header (like the word "Acceleration") or an empty space, attempting to multiply a number by text results in a `#VALUE!` error.
    
- **The Fix:** The formula in `B3` should be rewritten as `=A3*$C$1` before autofilling.
    

### **Problem 7 Solution**

- **Formula:** `=$D$2 * EXP(-0.05 * A5)`
    
- _Why:_ The `$D$2` reference locks onto the initial mass. The natural exponential function $e^x$ must be written using the `EXP()` syntax in sheets, with the multiplication explicitly declared using an asterisk (`*`) inside the parentheses.
    

### **Problem 8 Solution**

- **Shifted Formula in C6:** `=($A6 * 2) + B$2`
    
- _Why:_
    
    - In `$A5`, the column `A` is frozen, but the row `5` is relative. Moving down one row changes it to `$A6`.
        
    - In `B$2`, the column `B` is relative, but the row `2` is frozen. Moving down a row does not affect the frozen row `2`, so it remains `B$2`.




%%