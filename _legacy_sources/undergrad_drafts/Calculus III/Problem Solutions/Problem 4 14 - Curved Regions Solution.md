## 1. Write the Bounds in Polar

The region is an annular sector defined directly by the given circular and angular boundaries:

- **Radial bounds ($r$):** The region lies between the concentric circles of radius $1$ and radius $3$.
    
    $$1 \le r \le 3$$
    
- **Angular bounds ($\theta$):** The region is swept out between the angles $\frac{\pi}{6}$ and $\frac{\pi}{2}$.
    
    $$\frac{\pi}{6} \le \theta \le \frac{\pi}{2}$$
    

## 2. Set Up the Double Integral for Area

The area $A$ of a region in polar coordinates uses the differential area element $dA = r \, dr \, d\theta$. Substituting our constant polar bounds into the integral gives:

$$A = \int_{\frac{\pi}{6}}^{\frac{\pi}{2}} \int_{1}^{3} r \, dr \, d\theta$$

## 3. Evaluate the Integral

We can compute this step-by-step:

### Step A: Evaluate the inner integral with respect to $r$

$$\int_{1}^{3} r \, dr = \left[ \frac{1}{2}r^2 \right]_{1}^{3}$$

$$\int_{1}^{3} r \, dr = \frac{1}{2}(3)^2 - \frac{1}{2}(1)^2 = \frac{9}{2} - \frac{1}{2} = \frac{8}{2} = 4$$

### Step B: Substitute and evaluate the outer integral with respect to $\theta$

$$A = \int_{\frac{\pi}{6}}^{\frac{\pi}{2}} 4 \, d\theta$$

$$A = [4\theta]_{\frac{\pi}{6}}^{\frac{\pi}{2}}$$

$$A = 4\left(\frac{\pi}{2}\right) - 4\left(\frac{\pi}{6}\right)$$

$$A = 2\pi - \frac{2\pi}{3}$$

Find a common denominator to subtract:

$$A = \frac{6\pi}{3} - \frac{2\pi}{3} = \frac{4\pi}{3}$$

### Final Answer:

The area of the region is **$\frac{4\pi}{3}$**.