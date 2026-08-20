**Scenario:** A structural engineer is calculating the total dead-load mass ($M$) of various reinforced concrete beams. The formula for mass is:

$$M = \rho \cdot w \cdot h \cdot L$$

Where:

- Concrete density ($\rho$) is a global constant fixed at $2400 \text{ kg/m}^3$, stored in cell **`B1`**.
    
- Beam length ($L$) is a global constant fixed at $6.0 \text{ m}$, stored in cell **`B2`**.
    
- Changing beam widths ($w$) are listed vertically down **Column A** (starting in cell `A5`).
    
- Changing beam heights ($h$) are listed horizontally across **Row 4** (starting in cell `B4`).
    

**Task:** Write the single master spreadsheet formula for cell **`B5`** using appropriate mixed and absolute referencing so that it can be Autofilled across the entire structural dimensions grid.

#### Solution 

Plaintext

```
=$B$1*$B$2*$A5*B$4
```

#### Meaning of the Answer & Real-Life Application

- **Meaning of the Output:** Evaluating this formula for a width of $0.3 \text{ m}$ (cell `A5`) and a height of $0.5 \text{ m}$ (cell `B4`) yields an answer of **$2160 \text{ kg}$**. This value represents the total physical mass of that specific concrete structural element.
    
- **Real-Life Engineering Application:** In structural design, this mass calculation dictates the "dead load" of the building frame. Structural engineers feed these calculated totals directly into building foundation and columns equations. If the beam mass is computed incorrectly due to a broken spreadsheet loop, the foundations could be under-designed, leading to catastrophic structural settling or cracking under load.
    