A structural engineer is reviewing the blueprints for a high-rise tower in an earthquake-prone zone. To ensure the building safely absorbs seismic shockwaves rather than shaking itself apart, the engineer models the physical properties of the building's structural steel frames. The characteristic polynomial defining the building's internal movement frequencies is found to be:

$$M(s) = s^3 + 100s$$

**Your Task:** Factor $M(s)$ to analyze the building's vibrational characteristics.

**Solution:**

1. Extract the greatest common factor, which is $s$:
    
    $$M(s) = s(s^2 + 100)$$
    
2. Test the remaining quadratic factor $s^2 + 100$. Because it is a sum of squares, its discriminant is deeply negative ($0^2 - 4(1)(100) = -400$), making it an **irreducible quadratic factor**.
    

#### 📊 The Meaning & Application to Real Life

- **The Meaning of the Answer:** The simple linear factor $s$ indicates a baseline state (the building standing still at rest). The irreducible quadratic factor $(s^2 + 100)$ indicates that the system possesses a **pure, un-damped natural resonant frequency**. Taking the square root of the constant ($\sqrt{100} = 10$) reveals that the building's natural resonant frequency is exactly $10\text{ rad/s}$ (about $1.6\text{ Hz}$).
    
- **Real-Life Impact:** Irreducible quadratic factors mathematically signal to the engineer that the building _will oscillate like a pendulum_ when pushed. Armed with this exact frequency calculation ($10\text{ rad/s}$), the engineer knows that if an earthquake hits with seismic waves moving at that exact speed, the building will experience constructive resonance and violently snap its own steel pillars. The engineer uses this factor to design a "Tuned Mass Damper"—a massive concrete pendulum hung inside the top floors tuned to counteract this exact frequency, keeping the building safe and stable during a tremor.
    