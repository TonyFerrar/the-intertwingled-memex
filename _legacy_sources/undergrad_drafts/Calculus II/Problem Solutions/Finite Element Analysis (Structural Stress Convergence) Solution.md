**Context:** A civil engineer utilizes Finite Element Analysis (FEA) software to simulate the maximum mechanical stress on a newly designed steel bridge truss under peak traffic load. The simulation framework runs an iterative calculation sequence where the estimated stress value $\sigma_n$ (in Megapascals, MPa) at mesh refinement step $n$ is modeled by:

$$\sigma_n = 215 - \frac{60}{n}$$

Determine whether this calculation sequence converges or diverges, and find the limit.

#### Solution

Take the limit of the calculation sequence as the mesh refinement step $n$ approaches infinity:

$$\lim_{n \to \infty} \left( 215 - \frac{60}{n} \right)$$

As the computer breaks the truss down into smaller and smaller pieces ($n \to \infty$), the correction factor $\frac{60}{n}$ approaches $0$:

$$215 - 0 = 215\text{ MPa}$$

#### Meaning of the Answer & Real-Life Application

The sequence **converges** to a finite limit of **215 MPa**.

In structural engineering, proving that an FEA mathematical sequence converges means the computer simulation is stable, reliable, and mathematically sound. The limit of 215 MPa represents the true, physical stress the actual bridge will experience under load. The engineer can confidently compare this 215 MPa limit to the yield strength of structural steel (typically 250 MPa) to guarantee that the bridge will safely support traffic without collapsing.