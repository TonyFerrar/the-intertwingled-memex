A materials engineer is testing a new synthetic polymer matrix intended for aircraft hulls. Under intense thermal loading, the material's expansion volume $v$ changes relative to the applied internal temperature strain $T$ according to a variable-base variable-exponent formula:
$$v = (T^2 + 1)^{\ln T}$$
Where $T > 1$ represents scaled temperature units.

**Engineering Task:** Find the exact rate of volume change with respect to temperature ($\frac{dv}{dT}$). Use it to determine the fractional rate of change ($\frac{1}{v}\frac{dv}{dT}$) when the temperature is at $T = e$ units.

#### **Solution:**
1. Apply the natural logarithm to isolate the variable exponent:
   $$\ln v = \ln\left[ (T^2 + 1)^{\ln T} \right]$$
2. Move the exponent down using the power property:
   $$\ln v = \ln T \cdot \ln(T^2 + 1)$$
3. Differentiate implicitly with respect to $T$. This requires applying the Product Rule to the right side ($u = \ln T, v = \ln(T^2 + 1)$):
   $$\frac{1}{v}\frac{dv}{dT} = \frac{d}{dT}[\ln T] \cdot \ln(T^2 + 1) + \ln T \cdot \frac{d}{dT}[\ln(T^2 + 1)]$$
   $$\frac{1}{v}\frac{dv}{dT} = \left(\frac{1}{T}\right) \cdot \ln(T^2 + 1) + \ln T \cdot \left(\frac{2T}{T^2 + 1}\right)$$
   $$\frac{1}{v}\frac{dv}{dT} = \frac{\ln(T^2 + 1)}{T} + \frac{2T\ln T}{T^2 + 1}$$
4. Because the engineering question specifically requests the **fractional rate of change** ($\frac{1}{v}\frac{dv}{dT}$), we do not need to multiply by $v$. Evaluate the expression directly at $T = e$ (remembering that $\ln e = 1$):
   $$\left. \frac{1}{v}\frac{dv}{dT} \right|_{T=e} = \frac{\ln(e^2 + 1)}{e} + \frac{2e\ln(e)}{e^2 + 1}$$
   $$\left. \frac{1}{v}\frac{dv}{dT} \right|_{T=e} = \frac{\ln(e^2 + 1)}{e} + \frac{2e}{e^2 + 1}$$

#### **Engineering Meaning & Real-Life Application:**
* **Meaning of the Answer:** This resulting quantity represents the **thermal expansion coefficient** of the polymer structure at that temperature threshold. It represents the exact localized percentage shift in volume per unit change in heat.
* **Real-Life Application:** When designing structures that face extreme environmental environments—like supersonic jet wings or spacecraft paneling—materials must be carefully calibrated to ensure they expand predictably. If a material's fractional rate of expansion spikes sharply at a specific temperature threshold, it indicates a high risk of buckling, cracking, or structural delamination. Logarithmic differentiation isolates the ratio $\frac{v'}{v}$ directly without requiring complex volume calculations, allowing materials engineers to quickly verify if the polymer can safely withstand high-temperature flight constraints.