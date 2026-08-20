**Scenario:** An aerospace engineer is building a weight allocation matrix for a satellite payload. To ensure the launch vehicle capacity is not exceeded, every component's raw mass must be multiplied by a strict mass contingency factor.

- The mass contingency multiplier ($1.15$, representing a 15% safety buffer) is a fixed parameter stored in cell **`C1`**.
    
- The raw measured component masses ($M_{\text{raw}}$) are listed down **Column B** (starting in cell `B4`).
    

**Task:** Write the spreadsheet formula for cell **`C4`** to calculate the penalized design mass, ensuring it can be dragged down safely through row 150.