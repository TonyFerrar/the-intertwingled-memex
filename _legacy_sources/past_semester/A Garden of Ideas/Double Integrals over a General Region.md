# Double Integrals over a General Region

> [!info] Double Integrals Over General Regions - Essential Formulas
>**Double Integrals over Type 1 Regions ($y(x)$):**
>$$  \iint_R f\,dA=\int_{a}^{b}\left(\int_{g_1(x)}^{g_2(x)} f(x,y)\,dy\right)\,dx$$
>$$y\in[g_1(x),\,g_2(x)],\quad x\in[a,\, b]$$
>___
>**Double Integrals over Type 2 Regions ($x(y)$):**
>$$  \iint_R f\,dA=\int_{c}^{d}\left(\int_{h_1(y)}^{h_2(y)} f(x,y)\,dx\right)\,dy$$
>$$x\in[h_1(y),\,h_2(y)],\quad y\in[c,\,d]$$
>

### Definition of a General Region

In some cases, you may be tasked with integrating over a shape where the boundaries are not represented by constants ([[Double Integrals over a Rectangular Region|rectangular regions]]), but rather by a function $y(x)$. This means that as one of the variables changes ($x$ in this case), the value for $y$ changes in response to the change in $x$.
$$y\in[g_1(x),\,g_2(x)],\quad x\in[a,\, b]$$
Therefore, the limits of integration become functions for one of the two variables (in this case, the limits on the $y$ integral become functions of the form $y=g(x)$. Double Integrals of this form will be referred to as **type 1 regions.**
$$  \iint_R f\,dA=\int_{a}^{b}\left(\int_{g_1(x)}^{g_2(x)} f(x,y)\,dy\right)\,dx$$
Sometimes you may instead be given $x(y)$, where now it is $x$ that depends on $y$. This results in a  similar case to the type 1 regions, but these regions will be called **type 2 regions**, with the limits on the $x$ integral becoming functions of the form $x = h(y)$.
$$  \iint_R f\,dA=\int_{c}^{d}\left(\int_{h_1(y)}^{h_2(y)} f(x,y)\,dx\right)\,dy$$
$$x\in[h_1(y),\,h_2(y)],\quad y\in[c,\,d]$$

> [!warning] Common Pitfall with Bounding General Regions
> In some instances where say a triangle goes from a $y$ value of $2$ to $0$, it's not uncommon to mistake the bound for being only those aforementioned constants rather than as a function of $x$. This is a mistake that will result in your triangular region transforming into a rectangular region unless handled in a particular way (which will be discussed in [[Switching the Order of Integration]])

