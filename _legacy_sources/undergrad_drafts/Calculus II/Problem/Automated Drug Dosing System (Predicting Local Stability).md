**Scenario:** A biomedical engineer is programming an automated IV drip for a hospital. The concentration of the drug in the patient's bloodstream $C(t)$ over time (in minutes) relies on a power series approximation centered at $t = 60$ minutes:
$$ C(t) = \sum_{k=0}^{\infty} \frac{k!(t - 60)^k}{10^k} $$

**Problem:** Determine the radius of convergence for this series to check the stability of the software's dosing algorithm.