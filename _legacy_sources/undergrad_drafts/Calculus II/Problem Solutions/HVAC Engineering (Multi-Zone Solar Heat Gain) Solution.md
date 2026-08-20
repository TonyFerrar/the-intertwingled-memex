**Scenario:** A mechanical engineer is configuring an HVAC system's peak cooling load ($Q$) for a glass-facade building layout. The simplified heat gain formula for a zone window array is:

$$Q = A \cdot GF \cdot SC$$

Where:

- The peak solar heat gain factor ($GF$) is a regional weather constant fixed at $450 \text{ W/m}^2$, stored in cell **`D1`**.
    
- Changing window area sizes ($A$) are entered down **Column A** (starting in cell `A6`).
    
- Shading coefficients ($SC$, acting as a multiplier between 0 and 1 depending on glass tinting) are sorted across **Row 5** (starting in cell `B5`).
    

**Task:** Write the single master spreadsheet formula for cell **`B6`** that leverages mixed cell referencing to instantly compute the required cooling power across all geometric variations.

#### Solution 

Plaintext

```
=$A6*$D$1*B$5
```

#### Meaning of the Answer & Real-Life Application

- **Meaning of the Output:** For a window area of $20 \text{ m}^2$ (cell `A6`) and a shading coefficient of $0.60$ (cell `B5`), the formula outputs **$5400 \text{ W}$** (or $5.4 \text{ kW}$). This is the precise thermal energy rate entering the room that the cooling equipment must neutralize.
    
- **Real-Life Engineering Application:** This output dictates the physical capacity rating of the air conditioning units installed in the building. Over-specifying this value results in massive, unnecessary equipment procurement and energy costs, while under-specifying it means the building will fail to maintain temperature on hot days. Using mixed referencing (`$A6` and `B$5`) allows the engineer to quickly compare an entire grid of glass options against room dimensions to find the perfect cost-to-performance equilibrium.