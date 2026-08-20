Here is the step-by-step solution for setting up the automated iteration architecture in your spreadsheet.

## The Formula for Cell `A3`

Type the following exact formula into cell **`A3`**:

Plaintext

```
=D2
```

## Step-by-Step Breakdown

The power of using a spreadsheet for numerical methods like Newton-Raphson is its ability to automatically turn a linear calculation into a recursive loop. Here is exactly how that works:

### 1. Linking Iteration 1 to Iteration 2

In the Newton-Raphson method, the improved approximation ($x_{n+1}$) calculated at the end of the current step becomes the starting guess ($x_n$) for the very next step.

- Your first row (Row 2) takes the initial guess from `A2` and outputs the updated value in cell `D2`.
    
- Therefore, the starting value for your second loop in cell `A3` must directly pull that calculated output from `D2`.
    

### 2. Creating the Recursive Architecture

By typing `=D2` into cell `A3`, you establish a structural dependency.

Once you copy the formulas from Row 2 for columns B, C, and D down into Row 3, the spreadsheet naturally calculates the second iteration:

- **`B3`** will automatically evaluate $f(x_2)$ using the value now sitting in `A3`.
    
- **`C3`** will automatically evaluate $f'(x_2)$ using `A3`.
    
- **`D3`** will compute the newest approximation, $x_3$.
    

### 3. Unleashing Autofill

Now that Row 3 is completely set up and referencing Row 2, the loop is completely dynamic. When you select Row 3 and use **Autofill** to drag it down through subsequent rows, relative cell referencing takes over automatically:

- Cell **`A4`** automatically updates to `=D3`
    
- Cell **`A5`** automatically updates to `=D4`
    
- Cell **`A6`** automatically updates to `=D5`
    

The spreadsheet will instantly chain these calculations together down the entire page. You can then simply look down the columns until the numbers stop changing, indicating that the solver has successfully converged on a true root.