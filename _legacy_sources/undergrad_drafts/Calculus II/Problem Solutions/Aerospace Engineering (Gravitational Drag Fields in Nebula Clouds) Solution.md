An aerospace mission specialist is programming the trajectory equations for a deep-space science probe scheduled to fly through an unmapped, highly irregular interstellar gas cloud. The mechanical drag force field slowing the probe down as it travels away from the cloud's center is modeled by the function $F(r) = \frac{3 + \cos(r)}{r^2}$ for a distance $r \ge 1$ million meters. To verify if a spacecraft traveling along an infinite path can successfully escape the cloud's continuous drag without losing all its kinetic energy, the engineer must test the convergence of total energy loss:

$$E_{\text{loss}} = \int_{1}^{\infty} \frac{3 + \cos(r)}{r^2} \, dr$$

#### **Step 1: Build the Inequality**

Because the cloud's density fluctuates via the $\cos(r)$ term, integrating this exactly is impractical. We can bound the expression qualitatively instead. We know the maximum value that $\cos(r)$ can ever reach is 1. Therefore:

$$3 + \cos(r) \le 3 + 1 = 4$$

$$\frac{3 + \cos(r)}{r^2} \le \frac{4}{r^2}$$

#### **Step 2: Evaluate the Reference Function**

Test the larger reference function:

$$\int_{1}^{\infty} \frac{4}{r^2} \, dr = 4 \int_{1}^{\infty} \frac{1}{r^2} \, dr \implies p = 2$$

Since $p = 2 > 1$, this reference integral **converges**.

#### **Step 3: Conclude**

By the Direct Comparison Test, because the larger ceiling function converges, the total energy loss integral must also **converge**.

#### **Meaning of the Answer & Real-Life Application**

- **Meaning:** The total integrated energy loss experienced by the probe over an infinitely long journey through the gas field converges to a finite, bounded value of Joules.
    
- **Application:** Aerospace engineers use this qualitative confirmation to validate the spacecraft's fuel budget. Because the total kinetic energy loss is mathematically proven to be bounded, mission control can guarantee that as long as the probe enters the cloud with an initial velocity greater than this finite energy threshold, it will successfully clear the nebula and escape into deep space rather than being permanently bogged down and trapped by the cumulative drag of the cloud.
    