**Scenario:** An aerospace engineer is building a weight allocation matrix for a satellite payload. To ensure the launch vehicle capacity is not exceeded, every component's raw mass must be multiplied by a strict mass contingency factor.

- The mass contingency multiplier ($1.15$, representing a 15% safety buffer) is a fixed parameter stored in cell **`C1`**.
    
- The raw measured component masses ($M_{\text{raw}}$) are listed down **Column B** (starting in cell `B4`).
    

**Task:** Write the spreadsheet formula for cell **`C4`** to calculate the penalized design mass, ensuring it can be dragged down safely through row 150.

#### Solution 

Plaintext

```
=B4*$C$1
```

#### Meaning of the Answer & Real-Life Application

- **Meaning of the Output:** If a communications transponder has a raw mass of $12.0 \text{ kg}$ in cell `B4`, the formula outputs **$13.8 \text{ kg}$**. This means the engineer has allocated a $1.8 \text{ kg}$ margin of safety to absorb unexpected design changes during component manufacturing.
    
- **Real-Life Engineering Application:** Launching objects into orbit costs thousands of dollars per kilogram, and launch vehicles have unyielding maximum weight ceilings. Aerospace systems engineers aggregate this exact column of calculated values to continuously audit the satellite's weight. If the absolute reference (`$C$1`) is omitted, downstream components will fail to apply the buffer, masking a potential mass overrun that could result in a catastrophic mission cancelation or launch failure.