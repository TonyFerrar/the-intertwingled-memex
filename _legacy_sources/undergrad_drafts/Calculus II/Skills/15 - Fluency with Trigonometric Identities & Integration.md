# Skill 2: Trigonometric Fluency & Integration

Once an algebraic integral has been successfully set up using an initial substitution, the problem transforms completely into a trigonometric calculus problem. **Skill 2** focuses on your ability to manipulate these trigonometric expressions using core identities and evaluate the resulting integrals.

---

## 1. Core Explanational Notes

### Collapsing the Radical

The fundamental mechanism of trigonometric substitution relies on the Pythagorean trigonometric identities to simplify a binomial expression. These identities include:

* $\cos^{2}x + \sin^{2}x = 1$

* $1 + \tan^{2}x = \sec^{2}x$

* $\cot^{2}x + 1 = \csc^{2}x$


The primary analytical advantage of these identities is their mathematical capacity to compress a sum or difference of two distinct squared variables into a single, unified term. By executing this contraction, a complex square root expression can be canceled out entirely, reducing a demanding algebraic fraction to a workable trigonometric product or quotient.

### Evaluating the Trigonometric Integral

After removing the radical, you are often left with higher powers or combinations of trigonometric functions that cannot be integrated directly. Resolving these expressions requires fluent command of reduction strategies, including:

* **Half-Angle / Power-Reduction Identities:** Used to break down even powers of sine and cosine (such as rewriting $\cos^2\theta$ as $\frac{1}{2}(1 + \cos 2\theta)$).


* **Standard $u$-Substitution:** Used to compute the remaining linear periodic components after a power-reduction split has occurred.


* **Double-Angle Identities:** Used to systematically untangle compound double-angle results (like expanding $\frac{1}{2}\sin2\theta$ out into $\sin\theta\cos\theta$) to prepare the final expression for a clean algebraic back-substitution phase.



---

## 2. Sample Pure-Math Problems

### Sample Problem 1: Even Powers of Sine (Power-Reduction Strategy)

**Evaluate the integral:** 

$$\int \frac{x^2}{\sqrt{4 - x^2}} \, dx$$

#### Step-by-Step Solution:

1. **Substitute:** Let $x = 2\sin\theta$, so $dx = 2\cos\theta \, d\theta$. The radical simplifies to $\sqrt{4 - 4\sin^2\theta} = 2\cos\theta$.
2. **Transform the Expression:** Substitute these components directly into the integral:

$$\int \frac{(2\sin\theta)^2}{2\cos\theta} \cdot (2\cos\theta \, d\theta) = \int 4\sin^2\theta \, d\theta$$


3. **Apply Trig Fluency (Power Reduction):** Use the half-angle reduction identity $\sin^2\theta = \frac{1 - \cos2\theta}{2}$:

$$\int 4 \left( \frac{1 - \cos2\theta}{2} \right) d\theta = 2 \int (1 - \cos2\theta) \, d\theta$$


4. **Integrate:** Complete the integration term-by-term using a basic internal $u$-substitution for the double-angle term:

$$2\theta - \sin2\theta + C$$


5. **Expand using Double-Angle Identity:** Before returning to variable $x$, use the identity $\sin2\theta = 2\sin\theta\cos\theta$ to match single-angle triangle dimensions:

$$2\theta - 2\sin\theta\cos\theta + C$$


6. **Back-Substitute:** Given $\sin\theta = \frac{x}{2}$, $\theta = \arcsin(\frac{x}{2})$, and $\cos\theta = \frac{\sqrt{4-x^2}}{2}$:

$$2\arcsin\left(\frac{x}{2}\right) - 2\left(\frac{x}{2}\right)\left(\frac{\sqrt{4 - x^2}}{2}\right) + C = 2\arcsin\left(\frac{x}{2}\right) - \frac{x\sqrt{4 - x^2}}{2} + C$$



### Sample Problem 2: Tangent-Secant Identity Swapping

**Evaluate the integral:** 

$$\int \frac{\sqrt{x^2 - 9}}{x} \, dx$$

#### Step-by-Step Solution:

1. **Substitute:** Let $x = 3\sec\theta$, so $dx = 3\sec\theta\tan\theta \, d\theta$. The radical reduces to $\sqrt{9\sec^2\theta - 9} = 3\tan\theta$.
2. **Transform the Expression:** Substitute terms into the integral:

$$\int \frac{3\tan\theta}{3\sec\theta} \cdot (3\sec\theta\tan\theta \, d\theta) = 3\int \tan^2\theta \, d\theta$$


3. **Apply Trig Fluency (Pythagorean Identity):** The term $\tan^2\theta$ cannot be integrated as-is. Swap it using $\tan^2\theta = \sec^2\theta - 1$:

$$3\int (\sec^2\theta - 1) \, d\theta$$


4. **Integrate:** The antiderivative of $\sec^2\theta$ is standard ($\tan\theta$):

$$3(\tan\theta - \theta) + C$$


5. **Back-Substitute:** From $\sec\theta = \frac{x}{3}$, our reference triangle yields $\tan\theta = \frac{\sqrt{x^2 - 9}}{3}$ and $\theta = \sec^{-1}(\frac{x}{3})$:

$$3\left( \frac{\sqrt{x^2 - 9}}{3} - \sec^{-1}\left(\frac{x}{3}\right) \right) + C = \sqrt{x^2 - 9} - 3\sec^{-1}\left(\frac{x}{3}\right) + C$$



---

## 3. Real-Life Engineering Application Problems

### Engineering Problem 1: [[Electrical Grid Dissipation (Power Integration)]]
[[Electrical Grid Dissipation (Power Integration) Solution]]

### Engineering Problem 2: [[Mechanical Damper Fluid Shear Strain]]
[[Mechanical Damper Fluid Shear Strain Solution]]
