A transit authority engineer is designing a track layout for a new high-speed train. The position profile of the track layout is modeled by a piecewise function where a straight access line transitions into a curved bypass:
$$T(x) = \begin{cases} 2x & \text{for } x \le 3 \\ x^2 - 4x + 9 & \text{for } x > 3 \end{cases}$$

1. **Graphically and analytically determine if the track layout is continuous at $x = 3$.**
2. **Determine if the track layout is differentiable at $x = 3$. Based on the concepts of differentiability, explain why this design is either safe or hazardous for a train traveling at high speeds.**

#### Step-by-step Solution:

**Step 1: Check for Continuity**
To see if the tracks physically connect without a gap, calculate the limit from both sides of $x = 3$:
* Left-hand limit: $\lim_{x \to 3^-} T(x) = 2(3) = 6$
* Right-hand limit: $\lim_{x \to 3^+} T(x) = (3)^2 - 4(3) + 9 = 9 - 12 + 9 = 6$

Because the left-hand limit equals the right-hand limit, the two tracks meet perfectly at the point $(3, 6)$. **The function is continuous.**

**Step 2: Check for Differentiability (Slope)**
To see if the transition is smooth, check the incoming and outgoing slopes (derivatives) at $x = 3$:
* Incoming slope (from the left straight track): The derivative of $2x$ is a constant **$2$**.
* Outgoing slope (moving onto the curved bypass): The derivative of $x^2 - 4x + 9$ is $2x - 4$. Evaluating this at $x = 3$ gives $2(3) - 4 = 6 - 4 =$ **$2$**.

Because the incoming slope ($2$) matches the outgoing slope ($2$), the graph does not form a sharp corner; it transitions smoothly. 

**Engineering Conclusion:**
Because the function is **differentiable at $x = 3$**, the transition contains no sharp corners. This is **safe** for a high-speed train. If the slopes had mismatched, it would create a non-differentiable corner, causing a sudden, dangerous spike in lateral centrifugal force that could derail the train.

---