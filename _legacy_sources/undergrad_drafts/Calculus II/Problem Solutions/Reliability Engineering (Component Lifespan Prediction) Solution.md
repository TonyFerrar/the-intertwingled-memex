A safety systems engineer at a nuclear power plant tracks the reliability of an emergency backup water pump. The probability density function modeling the time $t$ (in years) until the pump fails is given by $f(t) = 3t^{-4}$ for $t \ge 1$. To calculate the probability that the pump survives beyond 2 years without failing, the engineer evaluates the infinite tail of the distribution:

$$P(t > 2) = \int_{2}^{\infty} 3t^{-4} \, dx$$

#### **Step 1: Diagnosis**

The upper limit of integration is infinity ($\infty$), representing the infinite potential future operational life of the pump. The function is continuous for all values greater than or equal to 2, classifying this as a **Type I improper integral**.

#### **Step 2: Solution**

$$\lim_{b \to \infty} \int_{2}^{b} 3t^{-4} \, dt = \lim_{b \to \infty} \left[ -t^{-3} \right]_2^b$$

$$= \lim_{b \to \infty} \left( -\frac{1}{b^3} - \left(-\frac{1}{2^3}\right) \right) = 0 + \frac{1}{8} = 0.125$$

#### **Meaning of the Answer & Real-Life Application**

- **Meaning:** The integral converges to **0.125** (or **12.5%**). This value represents the definitive probability that a given backup water pump will continuously operate past the 2-year mark without experiencing a critical hardware failure.
    
- **Application:** Plant managers use this percentage to structure preventive maintenance schedules. Because there is only a **12.5%** chance of the pump surviving past 2 years (meaning an **87.5%** chance it will have failed by then), reliability engineers will use this data to mandate a complete component overhaul or replacement at the 1.5-year mark to guarantee plant safety and prevent catastrophic system meltdowns.