**Scenario:** A hypersonic test vehicle is flying along a parabolic trajectory modeled by the flight path function:
$$P(x) = 2x^2 - 3x + 5$$
Where $x$ represents horizontal distance in kilometers downrange. At $x = 3\text{ km}$, a payload must be cleanly deployed. Because of momentum conservation, the moment the payload disconnects from the vehicle's curved fuselage, it will travel forward along a straight path tangent to the vehicle's curve at that exact departure coordinate.

**Your Task:**
1. Determine the exact coordinate point $(x_1, y_1)$ where the payload detaches.
2. Calculate the instantaneous flight path slope $m$ at that point.
3. Construct the linear tangent flight path equation modeling the payload's independent trajectory.
4. Explain what this equation means in an aerospace engineering context.

#### Solution:
* **Step 1: Find the Point of Departure ($y_1$)** Evaluate the original trajectory curve equation at $x = 3$:
  $$y_1 = P(3) = 2(3)^2 - 3(3) + 5 = 18 - 9 + 5 = 14 \longrightarrow \text{Point: } (3, 14)$$

* **Step 2: Find the Trajectory Vector Slope ($m$)** Find the derivative of the path profile using the Power Rule:
  $$P'(x) = 4x - 3$$
  Evaluate the rate of change at $x = 3$:
  $$m = P'(3) = 4(3) - 3 = 12 - 3 = 9 \longrightarrow \text{Slope: } m = 9$$

* **Step 3: Construct the Flight Path Line** Substitute the point and slope into point-slope form:
  $$y - 14 = 9(x - 3)$$
  $$y - 14 = 9x - 27 \longrightarrow y = 9x - 13$$

* **Engineering Context Interpretation:**
  The tangent line equation $y = 9x - 13$ models the **inertial path vector** of the payload after detachment. Aerospace guidance engineers use these geometric tangent line calculations to predict precisely where unpowered objects will travel once dropped. By converting the vehicle's instantaneous derivative into a linear equation, telemetry computers can cross-reference this straight line path against downrange maps to ensure the payload safely clears ground obstacles, or hits a target recovery zone without requiring onboard navigation thrusters.