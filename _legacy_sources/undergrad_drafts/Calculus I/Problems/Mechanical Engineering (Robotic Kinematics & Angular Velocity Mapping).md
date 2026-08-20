**Context:** A mechanical automation engineer is programming a high-speed robotic sorting arm on an industrial assembly line. The base of the arm is a rotational joint pivoting at an angle $\theta$ (in radians). The arm is tracking an item moving along a parallel linear conveyor belt running at a fixed clearance distance of $1\text{ meter}$ above the pivot.

The item moves along the belt such that its horizontal position coordinate $x$ (in meters) changes over time according to a variable velocity acceleration profile:
$$x(t) = \frac{2t}{t+1}$$

The rotational tracking angle $\theta$ required to follow the item is dictated by the geometric inverse trigonometric function:
$$\theta(t) = \tan^{-1}\left(x(t)\right)$$



**Task:** Use operational layering by combining the Inverse Tangent Chain Rule and the Quotient Rule to calculate the required angular tracking velocity of the robotic base motor ($\frac{d\theta}{dt}$) at $t = 1$ second.
