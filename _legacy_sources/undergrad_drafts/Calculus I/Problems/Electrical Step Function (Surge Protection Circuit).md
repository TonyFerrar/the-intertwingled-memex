An electrical engineer designs a protective power switch that triggers instantly when voltage surges past a safe timeline. The electric current profile $I(t)$ (in amperes) relative to initialization time $t = 2$ milliseconds is governed by this piecewise setup:

$$I(t) = \begin{cases} 4 & : t < 2 \\ t^2 + 5 & : t \ge 2 \end{cases}$$

Determine whether the electrical signal is clean and continuous or if a sudden gap occurs by evaluating:
1. $\lim_{t\to2^{-}} I(t)$
2. $\lim_{t\to2^{+}} I(t)$
3. $\lim_{t\to2} I(t)$