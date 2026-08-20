**Problem:** Complete the table for $f(x) = \frac{x^2 - 4}{x - 2}$ to find $\lim_{x \to 2} f(x)$. 

**Step 1:** Plug values slightly less than $2$ into the simplified path rule $f(x) = x + 2$ to evaluate the left-hand trend ($x \to 2^-$):
* $f(1.9) = 1.9 + 2 = 3.9$
* $f(1.99) = 1.99 + 2 = 3.99$
* $f(1.999) = 1.999 + 2 = 3.999$

**Step 2:** Plug values slightly greater than $2$ into the path rule to evaluate the right-hand trend ($x \to 2^+$):
* $f(2.1) = 2.1 + 2 = 4.1$
* $f(2.01) = 2.01 + 2 = 4.01$
* $f(2.001) = 2.001 + 2 = 4.001$

**Step 3:** Assemble the table and analyze the convergence:

| $x$ approaches from left $\to$ | $1.9$ | $1.99$ | $1.999$ | **$2$** | $2.001$ | $2.01$ | $2.1$ | $\leftarrow$ $x$ approaches from right |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | ---: |
| **$f(x)$ trend** | $3.9$ | $3.99$ | $3.999$ | **?** | $4.001$ | $4.01$ | $4.1$ | |

**Conclusion:** As $x$ pinches closer to $2$ from both sides, the output values explicitly head toward the distinct whole number $4$. Therefore, even though $f(2)$ is undefined, the limit is valid:
$$\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = 4$$


