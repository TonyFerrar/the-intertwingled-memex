# Deciding to use Integration by Parts and Strategic Selection of u and dv using LIATE

Integration by Parts is a technique used for "partial substitution" where the integrand is rewritten as a sum of parts that have been partially integrated and partially differentiated. This method should not be your first approach to a problem; you should **only use it after checking if the integrand can be integrated directly or through a standard u-substitution**.

The central challenge is determining which part of the integrand to label as $u$ and which to label as $dv$. As a general rule, you want to choose a $u$ that becomes **“simpler” once differentiated**. If your choice results in a new integral that is "more complicated" than the original, it is a sign you should try a different substitution.

To make this selection easier, students should use the **LIATE rule**, an acronym that provides a hierarchy for choosing $u$. You should prioritize functions for $u$ in this order: **L**ogarithmic, **I**nverse trigonometric, **A**lgebraic ($x^n$), **T**rigonometric, and **E**xponential. 

> [!warning] Trick!
> For certain functions that don't seem like products, such as $\ln x$ or $\arctan x$, you can use a **"sneaky trick"** by letting $u$ be the function itself and setting $dv=1dx$.

