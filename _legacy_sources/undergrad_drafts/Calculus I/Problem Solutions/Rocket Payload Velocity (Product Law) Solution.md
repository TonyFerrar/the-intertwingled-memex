An aerospace engineer is tracking a launching cargo rocket. The rocket's acceleration relies on two separate properties measured relative to the atmospheric burn-time variable $t$:
* Target thrust factor limit: $\lim_{t\to4} T(t) = 8\text{ m/s}^2$
* Target fuel efficiency mass factor limit: $\lim_{t\to4} M(t) = 12$

The total instantaneous velocity function of the payload is determined by the product of these variables: $V(t) = T(t) \cdot M(t)$. Find the expected velocity limit $\lim_{t\to4} V(t)$.

**Solution:**
Using the **Product Law**, we distribute the limit to each component:
$$\lim_{t\to4} V(t) = \lim_{t\to4} [T(t) \cdot M(t)] = \left(\lim_{t\to4} T(t)\right) \cdot \left(\lim_{t\to4} M(t)\right)$$
$$\lim_{t\to4} V(t) = 8 \cdot 12 = 96\text{ m/s}$$
**Answer:** $96\text{ m/s}$

---