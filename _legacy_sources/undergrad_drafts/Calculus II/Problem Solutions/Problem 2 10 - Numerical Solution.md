## Part 1: What went wrong? (The Autofill Failure)

When you type `=0.5*A4*B1` into cell `B4` and drag it down, the spreadsheet uses **relative referencing**. This means it assumes that when you move down one row, every cell reference inside the formula should also move down one row.

As a result, the spreadsheet automatically increments the row numbers in the subsequent cells like this:

- **Cell `B4`:** `=0.5*A4*B1` (Correctly calculates the area using Height in `A4` and Base in `B1`)
    
- **Cell `B5`:** `=0.5*A5*B2` (Looks at `A5` for height, but shifts down to `B2` for the base length)
    
- **Cell `B6`:** `=0.5*A6*B3` (Looks at `A6` for height, but shifts down to `B3` for the base length)
    

### The Consequence:

Because the base length constant (4) lives exclusively in cell `B1`, shifting down to `B2`, `B3`, and beyond means the spreadsheet is suddenly multiplying by blank cells or text labels (like the column header "Area" in cell `B3`). This causes the spreadsheet to output frustrating **zeros** or **`#VALUE!` errors** down your column.

## Part 2: The Solution (Using Cell Freezing)

To keep Autofill from breaking your sheet, you need to tell it: _"Hey, track the changing heights down column A, but do not move away from cell B1!"_ You do this by placing a dollar sign (`$`) right before the coordinate you want to lock in place.

### The Correct Formula for Cell `B4`:

Plaintext

```
=0.5*A4*B$1
```

(Note: Using `=0.5*A4*$B$1` is also completely valid, but since you are only dragging vertically down a single column, locking just the row number with `B$1` is all that is strictly required ).

### How it Works Now:

When you drag this modified formula down, the `$` acts as a pin:

- **Cell `B4`:** `=0.5*A4*B$1`
    
- **Cell `B5`:** `=0.5*A5*B$1`
    
- **Cell `B6`:** `=0.5*A6*B$1`
    
- **Cell `B7`:** `=0.5*A7*B$1`
    

The height reference (`A4`, `A5`, `A6`...) successfully increments row by row, while your base reference stays securely frozen on cell `B1`. Your Autofill now works perfectly!