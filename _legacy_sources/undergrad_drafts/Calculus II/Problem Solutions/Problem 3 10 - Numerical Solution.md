## The Final Formula

Type the following exact syntax into cell **`B4`**:

Plaintext

```
=PI()*($A4^2)*B$1
```

(Note: Spreadsheet formulas are case-insensitive, so typing `=pi()*($a4^2)*b$1` works exactly the same way ).

## Step-by-Step Breakdown

When building a two-dimensional grid (where values change both down a column and across a row), you cannot use a fully absolute reference like `$B$1` or a fully relative reference like `B1`. Instead, you must use **mixed referencing** to freeze _only_ the row or _only_ the column.

### 1. Representing Pi ($\pi$)

In Google Sheets, the mathematical constant $\pi$ is written using the built-in function **`PI()`** followed by an empty set of parentheses.

### 2. Referencing the Radius ($r$)

The radius values are listed vertically down **Column A** (starting at cell `A4`).

- **When dragging horizontally (across columns):** You want the formula to always pull the radius from Column A, meaning the column must be frozen.
    
- **When dragging vertically (down rows):** You want row 4 to dynamically change to row 5, row 6, etc., to use the new radius values. The row must remain free.
    
- **Mixed Reference:** Place the `$` only in front of the column letter $\rightarrow$ **`$A4`**.
    

### 3. Referencing the Height ($h$)

The height values are listed horizontally across **Row 1** (starting at cell `B1`).

- **When dragging horizontally (across columns):** You want Column B to dynamically change to Column C, Column D, etc., to pick up the changing heights. The column must remain free.
    
- **When dragging vertically (down rows):** You want the formula to always pull from Row 1, meaning the row must be frozen.
    
- **Mixed Reference:** Place the `$` only in front of the row number $\rightarrow$ **`B$1`**.
    

### 4. Putting it Together

Plugging these components back into the cylinder volume equation ($V = \pi \cdot r^2 \cdot h$) gives you the complete, copy-pasteable grid formula:

$$\text{=PI()} \;\cdot\; \mathbf{(\$A4^{\wedge}2)} \;\cdot\; \mathbf{B\$1}$$

Now, when you Autofill cell `B4` across the entire spreadsheet grid, the formulas will perfectly align with their corresponding row and column inputs without creating errors!