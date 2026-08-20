An environmental engineer is studying a digital elevation model contour map of a valley to determine where rainwater will pool. The elevation values are marked in meters on a 2D survey plot. Looking at a prospective retention basin location at coordinate point $P$, the engineer notes that the contour lines run perfectly straight from east to west (horizontally). Moving vertically north from point $P$, the contour labels change from $105\text{ m} \rightarrow 100\text{ m} \rightarrow 95\text{ m}$, with lines spaced tightly at $0.5\text{ cm}$ intervals on the map.

Visually determine the signs of $\frac{\partial E}{\partial x}$ and $\frac{\partial E}{\partial y}$, and interpret what the spacing tells you about the terrain.

#### Solution:

1. **Analyze $\frac{\partial E}{\partial x}$ (East-West direction):** Because the contour lines themselves are perfectly horizontal lines, walking horizontally to the right (east) means you are walking exactly along a single contour line. The elevation does not change. Therefore, $\frac{\partial E}{\partial x} = 0$.
    
2. **Analyze $\frac{\partial E}{\partial y}$ (North-South direction):** Moving straight up (north) causes you to cross from the $105\text{ m}$ line down to the $100\text{ m}$ and $95\text{ m}$ lines. Because the elevation values are decreasing as you move in the positive $y$-direction, $\frac{\partial E}{\partial y}$ is **negative**.
    
3. **Analyze the Spacing:** The lines are very tightly packed together ($0.5\text{ cm}$ intervals), meaning the elevation is dropping rapidly over a very short horizontal distance.
    

#### Meaning of the Answer & Real-Life Application:

- **Meaning:** The visual assessment yields $\frac{\partial E}{\partial x} = 0$ and $\frac{\partial E}{\partial y} \ll 0$ (a large negative value). This means that moving east-west is perfectly level, while moving north results in a severe downward plunge.
    
- **Application:** Civil engineers use this specific visual gradient layout to calculate watershed runoff paths. Water naturally flows in the direction of the steepest downward rate of change (the negative gradient). Because the north-south derivative is highly negative and the east-west derivative is zero, water will rush rapidly due north down this natural chute. The tightly packed spacing alerts the engineer that this area will experience high-velocity water flows during a storm, requiring them to install concrete rip-rap channels or heavy vegetation to prevent devastating soil erosion and flash flooding.
    