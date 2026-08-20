 Problem 4 
> To fill out the table, we look for a way to simplify the function for all points where $x \neq 2$. We can factor the numerator as a difference of squares: $$f(x) = \frac{(x - 2)(x + 2)}{x - 2}$$ 
> For any value of $x$ that is not exactly $2$, the term $(x - 2)$ cancels out completely: $$f(x) = x + 2 \quad (\text{for } x \neq 2)$$ Using this simplified linear form ($f(x) = x + 2$), we can easily compute the missing $f(x)$ table values: 
> * $f(1.9) = 1.9 + 2 = 3.9$ 
> * $f(1.99) = 1.99 + 2 = 3.99$ 
> * $f(1.999) = 1.999 + 2 = 3.999$ 
> * $f(2.001) = 2.001 + 2 = 4.001$ 
> * $f(2.01) = 2.01 + 2 = 4.01$ 
> * $f(2.1) = 2.1 + 2 = 4.1$ 
> ---
> ### Completed Reference Table
>  | $x$ | $1.9$ | $1.99$ | $1.999$ | $2.001$ | $2.01$ | $2.1$ | 
>  | :---: | :---: | :---: | :---: | :---: | :---: | :---: | 
>  | **$f(x)$** | $3.9$ | $3.99$ | $3.999$ | $4.001$ | $4.01$ | $4.1$ |
> ---
> ### (a) Evaluate: $\lim_{x \to 2^-} \frac{x^2 - 4}{x - 2}$ 
> **Step:** Look at the outputs as $x$ approaches $2$ from the left side (values slightly less than 2: $1.9 \to 1.99 \to 1.999$). The values are $3.9 \to 3.99 \to 3.999$, which are getting closer and closer to $4$. 
> **Answer:** $$\lim_{x \to 2^-} \frac{x^2 - 4}{x - 2} = 4$$ 
> ### (b) Evaluate: $\lim_{x \to 2^+} \frac{x^2 - 4}{x - 2}$ 
> **Step:** Look at the outputs as $x$ approaches $2$ from the right side (values slightly greater than 2: $2.1 \to 2.01 \to 2.001$). The values are $4.1 \to 4.01 \to 4.001$, which are also getting closer and closer to $4$. * 
> **Answer:** $$\lim_{x \to 2^+} \frac{x^2 - 4}{x - 2} = 4$$ 
> ### (c) Evaluate: $\lim_{x \to 2} \frac{x^2 - 4}{x - 2}$ 
> **Step:** Since the left-hand limit and the right-hand limit both approach the exact same value of $4$, the overall two-sided limit exists and equals that value. 
> **Answer:** $$\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = 4$$ 
> ---
> ### (d) Why can't we just find $f(2)$ to determine $\lim_{x \to 2} f(x)$? 
> **Answer:** We cannot use direct substitution because plugging $x = 2$ into the original function yields an undefined expression: $$f(2) = \frac{2^2 - 4}{2 - 2} = \frac{0}{0}$$ 
> The fraction $\frac{0}{0}$ is an **indeterminate form**, meaning the function value itself does not exist at that single point (there is a hole in the graph). Limits evaluate the behavior of a function as $x$ gets infinitely *close* to a value, not what happens *at* that exact value. Therefore, while $f(2)$ is undefined, the limit as $x \to 2$ is still $4$.
