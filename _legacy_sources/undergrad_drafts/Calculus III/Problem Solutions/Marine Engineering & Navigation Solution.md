**Context:** A cargo container ship is attempting to cross a river channel. The ship's onboard propulsion engines produce a thrust vector pointing straight north across the channel, represented as $\vec{t} = \langle 0, 3 \rangle$. Concurrently, a heavy crosscurrent flowing down the river exerts a force vector pushing directly east, represented as $\vec{c} = \langle 2, 0 \rangle$.

**Task:** 1. Find the total resultant force vector $\vec{v} = \vec{c} + \vec{t}$ acting on the ship. 2. Calculate the total magnitude $|\vec{v}|$ of this combined force. 3. Explain how a marine navigation autopilot system applies this vector calculation to prevent the ship from drifting off course.

**Mathematical Solution:**

1. **Resultant Force Vector:** Add the components:
    
    $$\vec{v} = \langle 2+0, 0+3 \rangle = \langle 2, 3 \rangle$$
    
2. **Total Magnitude:**
    
    $$|\vec{v}| = \sqrt{2^2 + 3^2} = \sqrt{4 + 9} = \sqrt{13} \approx 3.61\text{ units of force}$$
    

**Real-Life Application Meaning:**

The math reveals that even though the captain points the ship's nose straight north ($\langle 0, 3 \rangle$), the physical reality of nature forces the ship along a diagonal path ($\langle 2, 3 \rangle$) at a higher speed ($3.61$ units). To combat this in real life, a maritime engineer codes the autopilot system to perform automated vector subtraction. The computer calculates the current vector $\vec{c}$ and actively adjusts the engines to point at an offset angle—generating a modified thrust vector $\vec{t}_{\text{new}}$ so that when added to the current, the final resultant path points exactly where the ship needs to go.
