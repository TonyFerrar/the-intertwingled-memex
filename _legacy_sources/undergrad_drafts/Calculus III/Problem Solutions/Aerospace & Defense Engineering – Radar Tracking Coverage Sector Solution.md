**Scenario:** An airspace surveillance radar stationed at an airport scans an angular swath to monitor incoming aircraft. The radar is programmed to filter out ground clutter near the airport, meaning it only tracks objects starting at a distance of $r = 10\text{ km}$ out to its maximum power range of $r = 80\text{ km}$. The system is currently targeted to scan an entry corridor between the angles of $\theta = \frac{\pi}{6}$ ($30^\circ$) and $\theta = \frac{\pi}{3}$ ($60^\circ$).

Determine the total geographic surveillance area being monitored within these bounds.

#### Solution:

1. **Define the Bounds:**
    
    - Radial limits: $10 \le r \le 80$
        
    - Angular limits: $\frac{\pi}{6} \le \theta \le \frac{\pi}{3}$
        
2. **Set up and Evaluate the Integral:**
    
    $$\text{Area} = \int_{\frac{\pi}{6}}^{\frac{\pi}{3}} \int_{10}^{80} r \, dr \, d\theta$$
    
    - Evaluate the inner integral:
        
        $$\int_{10}^{80} r \, dr = \left[ \frac{1}{2}r^2 \right]_{10}^{80} = \frac{1}{2}(6400 - 100) = \frac{1}{2}(6300) = 3150\text{ km}^2$$
        
    - Evaluate the outer integral:
        
        $$\text{Area} = \int_{\frac{\pi}{6}}^{\frac{\pi}{3}} 3150 \, d\theta = [3150\theta]_{\frac{\pi}{6}}^{\frac{\pi}{3}} = 3150\left(\frac{\pi}{3} - \frac{\pi}{6}\right) = 3150\left(\frac{\pi}{6}\right) = 525\pi \approx 1649.34\text{ km}^2$$
        

#### Meaning of the Answer & Real-Life Application:

- **The Meaning of the Answer:** The value of $\approx 1649.34\text{ km}^2$ represents the absolute spatial footprint of the regional wedge covered by the active radar beam.
    
- **How it Applies:** Aerospace engineers use this area calculation to determine data load requirements and sensor density. By knowing the physical size of the tracking sector, they can cross-reference it with standard air-traffic density models to predict the maximum number of aircraft targets the radar's processing computer will have to compute simultaneously. It also helps in mapping out blind spots and ensuring that overlapping radar sectors from adjacent airports leave no unmonitored gaps in commercial flight corridors.