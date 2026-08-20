**Scenario:** A mechanical engineer is configuring an HVAC system's peak cooling load ($Q$) for a glass-facade building layout. The simplified heat gain formula for a zone window array is:

$$Q = A \cdot GF \cdot SC$$

Where:

- The peak solar heat gain factor ($GF$) is a regional weather constant fixed at $450 \text{ W/m}^2$, stored in cell **`D1`**.
    
- Changing window area sizes ($A$) are entered down **Column A** (starting in cell `A6`).
    
- Shading coefficients ($SC$, acting as a multiplier between 0 and 1 depending on glass tinting) are sorted across **Row 5** (starting in cell `B5`).
    

**Task:** Write the single master spreadsheet formula for cell **`B6`** that leverages mixed cell referencing to instantly compute the required cooling power across all geometric variations.
