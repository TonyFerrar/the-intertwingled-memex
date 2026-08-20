# Double Integrals over a Rectangular Region


> [!info] Double Integrals Essential Formulas
> **Double Integral**
> $$\text{Volume}=\int_{c}^{d}\!\!\int_{a}^{b} f(x,y)\,dx\,dy=\int_{a}^{b}\!\!\int_{c}^{d} f(x,y)\,dy\,dx$$
> $$x\in[a,b],\quad y\in[c,d]$$
> ___
> **Average Value of $f(x,y)$**
> $$  f_{\text{avg}}=\frac{1}{\text{Area}(R)}\iint_R f\,dA $$
> 
  
 In Calculus [[MATH 181 - Calculus I For Engineers|1]] and [[MATH 182 - Calculus II for Engineers|2]], you explored the idea of taking an integral. With functions of multiple variables, the concept of the integral also expands.

### Basic Idea Behind Integrating in 3D
- **Normal Integrals** are defined by taking the sum of small **areas** defined by $f(x)\,dx$ ($dx$ is infinitesimally small change in $x$) spanning from $a \leq x \leq b$. 

- **Double Integrals** are defined by taking the sum of small **volumes** underneath the sheet $f(x,y)$. The volumetric elements are defined by $f(x, y)\,dA$ where $dA$ (infinitesimally small area element) is defined to be $dA = dx\,dy$ where both $dx$ and $dy$ are infinitesimally small changes in $x$ and $y$ respectively. 
$$  \iint_R f(x,y)\,dA
  =\int_{c}^{d}\!\!\int_{a}^{b} f(x,y)\,dx\,dy
  $$

### Key Considerations With Double Integrals
1. A way to think about the double integral is to think about one integral nested inside of another integral. Solve the **inside integral first**, then the outside integral after.
$$\int_{a}^{b}\!\!\int_{c}^{d} f(x,y)\,dy\,dx=\int_{a}^{b}\!\;\left(\int_{c}^{d}f(x,y)\,dy\right)\;dx$$
2. The domains double integrals are bounded by is now no longer just limited by the $x$-axis, but by **the whole $xy$-plane**. With this context, the domain that double integrals act over are **regions** or shapes in the $xy$-plane. The easiest domain to integrate over are **Rectangular Regions.** These regions are defined below with $a,\,b,\,c,$ and $d$ **all being constants**.
$$x\in[a,b],\quad y\in[c,d]$$
3. It is possible to switch whether you integrate with $x$ first or $y$. But when you switch the order of integration, you must also switch the corresponding limits of integration
$$\int_{c}^{d}\!\!\int_{a}^{b} f(x,y)\,dx\,dy
  =\int_{a}^{b}\!\!\int_{c}^{d} f(x,y)\,dy\,dx$$

### Average Value Along a Region

In [[MATH 181 - Calculus I For Engineers|Calculus 1]], the average value of a function was defined as the following:$$f_{ave}=\frac{1}{x_2-x_1}\int_{x_1}^{x_2}f\,dx$$
The average value of a double integral follows a similar format:
$$  f_{\text{avg}}=\frac{1}{\text{Area}(R)}\iint_R f\,dA
  $$
where $\text{Area}(R)$ is the area of the region you're integrating over.
