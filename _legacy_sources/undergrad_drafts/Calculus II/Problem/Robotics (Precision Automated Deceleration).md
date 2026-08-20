**Context:** A robotic arm on an automated factory assembly line must systematically slow down its movement speed as it nears a sensitive circuit board to avoid crashing into it. The onboard computer calculates the arm's targeted velocity $v_n$ (in mm/s) at every discrete step $n$ using the following explicit formula:

$$v_n = 80 - 6(n-1) \quad \text{for } n \ge 1$$

1. Find the recurrence relation that models this velocity change from one step to the next, making sure to indicate the initial term.
    
2. Determine the velocity of the robotic arm at step $n = 5$.
    