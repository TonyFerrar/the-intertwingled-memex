# Skill 1: Spreadsheet Basics & Formula Execution

## 1. Core Concepts & Lecture Notes

### Why Use Spreadsheets?

In engineering, you will often need to evaluate the exact same mathematical function or physics equation hundreds of times across a changing set of data. Typing these equations repeatedly into a standard handheld calculator is incredibly slow, tedious, and prone to simple human input errors.

Any time you need to repeat the same calculation across multiple data points, you should map it into a spreadsheet program like Google Sheets.

### The Core Workflow

1. **Column Headings:** Always label your data columns clearly in row 1 so that your tables remain readable.
    
2. **Pattern Detection & Autofill:** To generate a list of inputs (such as $x = 1, 2, 3 \dots 25$), type the first two or three consecutive baseline numbers. Highlight those starting cells, click and drag the bottom-right fill handle down, and select **Autofill**. The software automatically detects the spacing pattern and increments the numbers for you.
    
3. **Typing Formulas:** Every spreadsheet formula **must begin with an equals sign (`=`)**. To include data, click the cell that contains your independent variable or type its coordinate address directly (e.g., `A2`).
    
4. **Order of Operations (Parentheses):** Spreadsheets strictly obey standard mathematical order of operations (PEMDAS). When translating fractions with complex algebraic numerators or denominators, **you must use plentiful parentheses** to explicitly isolate the top and bottom groups before the division (`/`) forward-slash operator executes.
    

### Built-In Functional Syntax

When translating your analytical engineering equations into raw cell syntax, standard mathematical symbols must be replaced with their explicit, built-in spreadsheet function equivalents:

- **Exponents ($x^n$):** Handled via the caret symbol (`^`). Example: $3x^2 \rightarrow$ `3*A2^2`.
    
- **Multiplication:** Never omit the asterisk (`*`). Standard algebraic notation like $4x$ must be written explicitly as `4*A2`.
    
- **The Constant $\pi$:** Triggered using the function `PI()` with open and closed parentheses containing no arguments.
    
- **Euler’s Constant Function ($e^x$):** Triggered using `EXP(x)`. For example, $e^x$ is written as `EXP(A2)`.
    
- **Square Roots ($\sqrt{x}$):** Triggered using the `SQRT(x)` syntax.
    

### Advanced Control: Absolute References (Cell Freezing)

By default, when you write a formula in cell `B2` using reference `A2` and autofill it downward, the spreadsheet uses _relative referencing_—meaning cell references automatically shift down row-by-row (`A3`, `A4`, etc.).

However, engineering design problems often feature **constants** (such as fixed material densities, supply voltages, gravity constraints, or geometric baseline lengths) that live in a single isolated cell. If you autofill a relative reference to that cell, the software shifts off the target, leading to empty values or `#VALUE!` errors.

To freeze a reference to a constant cell and prevent autofill from changing it, you must insert a dollar sign symbol (`$`) as an anchor anchor-point before the column letter and/or row number.

- `B1`: Relative reference (changes completely when dragged).
    
- `$B$1`: Absolute reference (completely frozen; stays locked to cell `B1` no matter where the formula is copied or autofilled).
    

## 2. General Sample Problems

### Problem 1: Formatting Multi-Group Equations

An engineer needs to model the mathematical curve:

$$g(x) = \frac{5x^4 - \sqrt{2x + 1}}{x^3 + e^{-3x}}$$

Assuming the $x$ values are listed sequentially down column A starting at cell `A2`, write the exact syntax that must be entered into cell `B2` to map this function correctly.

#### Solution

Excel
```
=(5*A2^4 - SQRT(2*A2 + 1)) / (A2^3 + EXP(-3*A2))
```


- **Why?** Parentheses completely wrap the numerator `(5*A2^4 - SQRT(2*A2 + 1))` and the denominator `(A2^3 + EXP(-3*A2))`. The explicit multiplication operators (`*`) are placed before the `A2` cells , and the negative sign inside the exponent is grouped safely inside `EXP()`.
    

### Problem 2: Tracking Cell Referencing Shifts

Suppose you type the formula `=(A2 * B1) + $C$1` into cell `D2`, and then use the autofill handle to drag the formula down to cell `D3`. Write out exactly how the formula shifts inside cell `D3`.

#### Solution

Excel

```
=(A3 * B2) + $C$1
```

- **Why?** Because `A2` and `B1` lack the `$` anchor symbol, they behave as relative references and shift down exactly one row to become `A3` and `B2` respectively. Because `$C$1` contains absolute reference anchors, it remains completely locked onto cell `C1`.
    

## 3. Real-Life Engineering Application Problems

### Problem 3: [[Civil Engineering — Structural Beam Mass Verification Table]]
[[Civil Engineering — Structural Beam Mass Verification Table Solution]]


### Problem 4: [[Electrical Engineering — Component Power Dissipation Profiling]]
[[Electrical Engineering — Component Power Dissipation Profiling Solution]]


### Problem 5: [[Aerospace Engineering — High-Altitude Rocket Atmospheric Drag Analysis]]
[[Aerospace Engineering — High-Altitude Rocket Atmospheric Drag Analysis Solution]]
