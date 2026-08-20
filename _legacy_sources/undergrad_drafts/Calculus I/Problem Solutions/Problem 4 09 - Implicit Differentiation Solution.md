Here are the step-by-step solutions for finding the derivatives using logarithmic differentiation.

---

### (a) $y=x^{\ln x}$

**Step 1: Take the natural logarithm ($\ln$) of both sides.**
$$\ln y = \ln\left(x^{\ln x}\right)$$

**Step 2: Use log properties to bring the exponent down.**
$$\ln y = (\ln x) \cdot (\ln x)$$
$$\ln y = (\ln x)^2$$

**Step 3: Differentiate both sides with respect to $x$.**
Use the chain rule on both sides:
$$\frac{1}{y} \cdot \frac{dy}{dx} = 2(\ln x) \cdot \frac{1}{x}$$
$$\frac{1}{y} \frac{dy}{dx} = \frac{2\ln x}{x}$$

**Step 4: Solve for $\frac{dy}{dx}$ and substitute back $y$.**
$$\frac{dy}{dx} = y \cdot \left(\frac{2\ln x}{x}\right)$$
$$\frac{dy}{dx} = x^{\ln x} \cdot \frac{2\ln x}{x}$$

---

### (b) $y=(\cos x)^{\sin x}$

**Step 1: Take the natural logarithm ($\ln$) of both sides.**
$$\ln y = \ln\left((\cos x)^{\sin x}\right)$$

**Step 2: Use log properties to bring the exponent down.**
$$\ln y = \sin x \cdot \ln(\cos x)$$

**Step 3: Differentiate both sides with respect to $x$.**
Use the product rule on the right side and the chain rule for $\ln(\cos x)$:
$$\frac{1}{y} \frac{dy}{dx} = \frac{d}{dx}(\sin x) \cdot \ln(\cos x) + \sin x \cdot \frac{d}{dx}(\ln(\cos x))$$
$$\frac{1}{y} \frac{dy}{dx} = \cos x \cdot \ln(\cos x) + \sin x \cdot \left(\frac{1}{\cos x} \cdot (-\sin x)\right)$$
$$\frac{1}{y} \frac{dy}{dx} = \cos x \ln(\cos x) - \frac{\sin^2 x}{\cos x}$$

**Step 4: Solve for $\frac{dy}{dx}$ and substitute back $y$.**
$$\frac{dy}{dx} = y \cdot \left[ \cos x \ln(\cos x) - \frac{\sin^2 x}{\cos x} \right]$$
$$\frac{dy}{dx} = (\cos x)^{\sin x} \left[ \cos x \ln(\cos x) - \frac{\sin^2 x}{\cos x} \right]$$

---

### (c) $y=\left(\frac{x+1}{x^{2}+1}\right)^{x^{3}}$

**Step 1: Take the natural logarithm ($\ln$) of both sides.**
$$\ln y = \ln\left[\left(\frac{x+1}{x^{2}+1}\right)^{x^{3}}\right]$$

**Step 2: Use log properties to expand the right side.**
$$\ln y = x^3 \cdot \ln\left(\frac{x+1}{x^2+1}\right)$$
$$\ln y = x^3 \cdot \left[\ln(x + 1) - \ln(x^2 + 1)\right]$$

**Step 3: Differentiate both sides with respect to $x$.**
Use the product rule on the right side:
$$\frac{1}{y} \frac{dy}{dx} = \frac{d}{dx}(x^3) \cdot \left[\ln(x + 1) - \ln(x^2 + 1)\right] + x^3 \cdot \frac{d}{dx}\left[\ln(x + 1) - \ln(x^2 + 1)\right]$$
$$\frac{1}{y} \frac{dy}{dx} = 3x^2 \left[\ln(x + 1) - \ln(x^2 + 1)\right] + x^3 \left[\frac{1}{x+1} - \frac{2x}{x^2+1}\right]$$

**Step 4: Solve for $\frac{dy}{dx}$ and substitute back $y$.**
$$\frac{dy}{dx} = y \cdot \left\{ 3x^2 \ln\left(\frac{x+1}{x^2+1}\right) + \frac{x^3}{x+1} - \frac{2x^4}{x^2+1} \right\}$$
$$\frac{dy}{dx} = \left(\frac{x+1}{x^{2}+1}\right)^{x^{3}} \left\{ 3x^2 \ln\left(\frac{x+1}{x^2+1}\right) + \frac{x^3}{x+1} - \frac{2x^4}{x^2+1} \right\}$$