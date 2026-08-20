**Scenario:** A structural engineer is calculating the total dead-load mass ($M$) of various reinforced concrete beams. The formula for mass is:

$$M = \rho \cdot w \cdot h \cdot L$$

Where:

- Concrete density ($\rho$) is a global constant fixed at $2400 \text{ kg/m}^3$, stored in cell **`B1`**.
    
- Beam length ($L$) is a global constant fixed at $6.0 \text{ m}$, stored in cell **`B2`**.
    
- Changing beam widths ($w$) are listed vertically down **Column A** (starting in cell `A5`).
    
- Changing beam heights ($h$) are listed horizontally across **Row 4** (starting in cell `B4`).
    

**Task:** Write the single master spreadsheet formula for cell **`B5`** using appropriate mixed and absolute referencing so that it can be Autofilled across the entire structural dimensions grid.
