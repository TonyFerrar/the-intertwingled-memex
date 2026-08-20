#### Scenario:

An aerospace engineer is designing a conical nose module for an orbital satellite thruster. The nose cone is bounded below by the conical surface $z = r$ and above by the flat mounting plate $z = 3 \text{ dm}$ (where $r$ and $z$ are in decimeters, $1 \text{ dm} = 0.1 \text{ m}$).

Due to dense internal avionics packed near the base ($z = 0$), the material density varies vertically:

$$\rho(z) = 4 - z \quad (\text{in kg/dm}^3)$$

1. Calculate the total mass $M$ and the vertical center of mass $\overline{z}$.
    
2. Compute the moment of inertia $I_z$ about the central thrust axis.
    

```
       z
       ^
    3 +|=========== (Plane z = 3)
      | \         /
      |  \       /    Cone z = r
      |   \     /     Density: rho(z) = 4 - z
    0 +----+---+---> r
```