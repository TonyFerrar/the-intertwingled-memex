### 3. Using limits, find any horizontal and vertical asymptotes of:
$$f(x) = \frac{2x^{2}}{3x-x^{2}}$$
If there are none, state that.

---

### I. Horizontal Asymptotes (HA)
To find horizontal asymptotes, we evaluate the limit of $f(x)$ as $x \to \infty$ and $x \to -\infty$.

#### 1. As $x \to \infty$:
$$\lim_{x \to \infty} \frac{2x^{2}}{3x - x^{2}}$$

Divide every term in the numerator and denominator by the highest power of $x$ in the denominator, which is $x^{2}$:
$$\lim_{x \to \infty} \frac{\frac{2x^{2}}{x^{2}}}{\frac{3x}{x^{2}} - \frac{x^{2}}{x^{2}}} = \lim_{x \to \infty} \frac{2}{\frac{3}{x} - 1}$$

Since $\lim_{x \to \infty} \frac{3}{x} = 0$:
$$\frac{2}{0 - 1} = -2$$

#### 2. As $x \to -\infty$:
Following the exact same algebraic simplification, the limit as $x \to -\infty$ is also $-2$:
$$\lim_{x \to -\infty} \frac{2}{\frac{3}{x} - 1} = \frac{2}{0 - 1} = -2$$

**Horizontal Asymptote Equation:**
$$y = -2$$

---

### II. Vertical Asymptotes (VA)
To find potential vertical asymptotes, look for values where the denominator is zero. 

Set the denominator equal to zero and factor:
$$3x - x^{2} = 0$$
$$x(3 - x) = 0$$

This gives two candidate locations: $x = 0$ and $x = 3$. We must test these using limits to confirm if they produce an infinite output ($\pm\infty$).

#### 1. Test at $x = 0$:
$$\lim_{x \to 0} \frac{2x^{2}}{x(3-x)}$$

Simplify by canceling a common factor of $x$ from the numerator and denominator (for $x \neq 0$):
$$\lim_{x \to 0} \frac{2x}{3-x}$$

Direct substitution yields:
$$\frac{2(0)}{3 - 0} = \frac{0}{3} = 0$$

Because the limit is a finite value ($0$) and not $\pm\infty$, there is a **removable discontinuity (a hole)** at $x = 0$, not a vertical asymptote.

#### 2. Test at $x = 3$:
Substitute $x = 3$ into the simplified function expression $\frac{2x}{3-x}$:
$$\lim_{x \to 3} \frac{2x}{3-x} \to \frac{2(3)}{3-3} = \frac{6}{0}$$

A non-zero constant divided by a value approaching zero yields an infinite limit ($\pm\infty$). 
* Approaching from the left ($x \to 3^{-}$): the denominator $(3-x)$ is slightly positive, so $\lim_{x \to 3^{-}} f(x) = \infty$.
* Approaching from the right ($x \to 3^{+}$): the denominator $(3-x)$ is slightly negative, so $\lim_{x \to 3^{+}} f(x) = -\infty$.

Since the behavior around $x = 3$ is infinite, it is a vertical asymptote.

**Vertical Asymptote Equation:**
$$x = 3$$