$$\lim_{x\to2}\frac{x^{2}+3x-10}{x-2}$$ 

--- 


 **Step 1: Check with Direct Substitution** First, let's try substituting $x = 2$ directly into the function: * 
 **Numerator:** $(2)^2 + 3(2) - 10 = 4 + 6 - 10 = 0$ * 
 **Denominator:** $2 - 2 = 0$ This yields the indeterminate form **$\frac{0}{0}$**. This means a limit likely exists, but we must simplify the expression (algebraically eliminate the hole) to find it. 
 
 --- 
 
 **Step 2: Factor the Numerator** We need to find two numbers that multiply to $-10$ and add up to $3$. These numbers are $5$ and $-2$: $$x^2 + 3x - 10 = (x + 5)(x - 2)$$ Now rewrite the limit with the factored numerator: $$\lim_{x\to2}\frac{(x+5)(x-2)}{x-2}$$ 
 
 ---  
 
 **Step 3: Simplify and Evaluate** Since $x \to 2$ means $x$ approaches 2 but is never exactly equal to 2, we can safely cancel out the common factor $(x - 2)$ from both the numerator and the denominator: $$\lim_{x\to2} (x + 5)$$ Now substitute $x = 2$ into the simplified expression: $$2 + 5 = 7$$ 
 
 **Answer:** $7$