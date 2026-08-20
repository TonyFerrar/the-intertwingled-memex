**Context:** A robotic arm on an automated factory assembly line must systematically slow down its movement speed as it nears a sensitive circuit board to avoid crashing into it. The onboard computer calculates the arm's targeted velocity $v_n$ (in mm/s) at every discrete step $n$ using the following explicit formula:

$$v_n = 80 - 6(n-1) \quad \text{for } n \ge 1$$

1. Find the recurrence relation that models this velocity change from one step to the next, making sure to indicate the initial term.
    
2. Determine the velocity of the robotic arm at step $n = 5$.
    

#### Solution

- **Step 1:** To find the recurrence relation, we need the initial term and the step-by-step difference.
    
    - For $n = 1$: $v_1 = 80 - 6(1-1) = 80\text{ mm/s}$.
        
    - For $n = 2$: $v_2 = 80 - 6(2-1) = 74\text{ mm/s}$.
        
    - For $n = 3$: $v_3 = 80 - 6(3-1) = 68\text{ mm/s}$.
        
    
    Each subsequent step reduces the velocity by exactly **6 mm/s**. Therefore, the recurrence relation is:
    
    $$v_1 = 80, \quad v_{n+1} = v_n - 6 \quad \text{for } n \ge 1$$
    
- **Step 2:** Use the explicit formula to find the velocity at step 5:
    
    $$v_5 = 80 - 6(5-1) = 80 - 6(4) = 80 - 24 = 56\text{ mm/s}$$
    

#### Meaning of the Answer & Real-Life Application

The initial speed of the arm is **80 mm/s**, and at step 5, it has slowed down to **56 mm/s**.

In automated robotics engineering, microcontrollers often have limited processing power. While the _explicit formula_ is great for long-term route planning, executing a _recurrence relation_ ($v_{n+1} = v_n - 6$) inside the robot's real-time operational loop is computationally much faster. The computer only has to perform a basic subtraction command every millisecond to update the motor speeds, ensuring real-time, stutter-free, and safe component placement.