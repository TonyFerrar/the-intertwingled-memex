# Multi-Step Execution of the Integration by Parts Formula

This technique is essentially **reversing the [[product rule for derivatives|Product Rule]]** from differential calculus. To evaluate an indefinite integral, you must follow a structured multi-step process using the formula: 

$$ \int u \, dv = uv - \int v \, du$$

1. First, [[Deciding to use Integration by Parts and Strategic Selection of u and dv using LIATE|identify]] your $u$ and $dv$ based on the [[Deciding to use Integration by Parts and Strategic Selection of u and dv using LIATE|LIATE]] rule.
2. Second, **differentiate** $u$ to find $du$.
3. Third, **integrate** $dv$ to find $v$ (you can ignore the constant of integration during this specific step).
4. Once you have all four components ($u$, $v$, $du$, $dv$), substitute them into the formula. The goal of this substitution is to replace the original integral with a new expression containing a **"less complicated" integral** ($\int v \, du$) that you can actually solve.
5. After evaluating that final integral, you must remember to **include the constant of integration ($+C$)** to complete the antiderivative.

