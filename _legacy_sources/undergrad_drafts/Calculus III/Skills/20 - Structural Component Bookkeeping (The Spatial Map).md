
# Skill 2 Study Guide: Curl

## Core Competency Focus: Structural Component Bookkeeping (The Spatial Map)

While divergence collapses a field into a single scalar value, computing the **curl** yields an entirely new vector field. Because you are managing cross-combinations of three distinct spatial directions ($\mathbf{i}, \mathbf{j}, \mathbf{k}$) and three independent partial derivatives ($\partial/\partial x, \partial/\partial y, \partial/\partial z$), your primary obstacle is keeping your notation straight. To succeed, you must master:

- **Vector Field Extraction:** Safely peeling the scalar functions $P$, $Q$, and $R$ out of standard field notation without dropping negative signs attached to the components.
    
- **The Matrix Determinant Map:** Using a $3 \times 3$ symbolic matrix to structure your cross-derivatives, with a strict emphasis on tracking the negative distribution rule for the middle ($\mathbf{j}$) component.
    
- **Multi-Variable Grid Evaluation:** Organizing a substitution column when plugging in coordinates $(x,y,z)$ so arithmetic errors do not corrupt your spatial orientation.
    

## Conceptual Notes & Essential Formulas

The **curl** measures the localized rotational behavior or "spin" of a vector field at a specific point. Unlike divergence, curl has a specific directional axis. If you imagine a microscopic paddle wheel placed in a fluid flow, the curl vector points along the axle of the wheel (using the right-hand rule), and its length represents how rapidly the wheel spins.

### The Spatial Matrix Tool

Setting up a symbolic cross-product determinant is the most reliable way to map out your calculations without cross-wiring your variables:

$$\nabla \times \mathbf{F} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ P & Q & R \end{vmatrix}$$

Expanding this matrix systematically along its top row yields the standard analytical 3D curl formula:

$$\nabla \times \mathbf{F} = \left(\frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z}\right)\mathbf{i} + \left(\frac{\partial P}{\partial z} - \frac{\partial R}{\partial x}\right)\mathbf{j} + \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right)\mathbf{k}$$

> **Critical Bookkeeping Pitfall:** Notice the middle component ($\mathbf{j}$) features a reversed subtraction order ($\frac{\partial P}{\partial z} - \frac{\partial R}{\partial x}$) compared to $\mathbf{i}$ and $\mathbf{k}$. This is due to the alternating $+ / - / +$ signs required when expanding a matrix determinant.

## Worksheet Demo Problem

### Skill 2 Demo

Consider the vector field $\mathbf{F}(x,y,z) = (y^{2}z)\mathbf{i} + (xz^{2})\mathbf{j} + (xy^{2})\mathbf{k}$. Compute the curl $\nabla\times \mathbf{F}(x,y,z)$ , evaluate it at the point $(1, 1, 1)$ , and determine if the field exhibits local rotational behavior there.

#### **Step 1: Structural Component Extraction**

Map your field variables directly to their scalar components:

- $P = y^2z$
    
- $Q = xz^2$
    
- $R = xy^2$
    

#### **Step 2: Construct the Derivative Ledger**

Before assembling the final vector, calculate all six possible cross-partial derivatives independently to keep your workspace clean:

- $\frac{\partial P}{\partial y} = 2yz$ $\quad$ $\frac{\partial P}{\partial z} = y^2$
    
- $\frac{\partial Q}{\partial x} = z^2$ $\quad$ $\frac{\partial Q}{\partial z} = 2xz$
    
- $\frac{\partial R}{\partial x} = y^2$ $\quad$ $\frac{\partial R}{\partial y} = 2xy$
    

#### **Step 3: Assemble the Spatial Map**

Substitute your ledger values directly into the structured components of the curl formula:

$$\nabla \times \mathbf{F} = \left(2xy - 2xz\right)\mathbf{i} + \left(y^2 - y^2\right)\mathbf{j} + \left(z^2 - 2yz\right)\mathbf{k} \text{ [cite: 217]}$$

$$\nabla \times \mathbf{F} = \left(2xy - 2xz\right)\mathbf{i} + \left(z^2 - 2yz\right)\mathbf{k} \text{ [cite: 217]}$$

#### **Step 4: Coordinate Grid Evaluation**

Plug in the coordinate values $(x=1, y=1, z=1)$:

- $\mathbf{i}\text{-component}: 2(1)(1) - 2(1)(1) = 0$
    
- $\mathbf{j}\text{-component}: 0$
    
- $\mathbf{k}\text{-component}: (1)^2 - 2(1)(1) = -1$
    

$$\nabla \times \mathbf{F}(1,1,1) = -\mathbf{k} \text{ [cite: 218]}$$

- **Rotational Status:** Because the final vector is non-zero ($\nabla \times \mathbf{F} \neq \mathbf{0}$), the field **does exhibit local rotational behavior** at that point.
    

## Pure Mathematical Sample Problems

### Sample Problem 1: Bookkeeping with Sign Distributions

Compute the curl of the vector field $\mathbf{F}(x,y,z) = (x^2z)\mathbf{i} - (2yz)\mathbf{j} + (xy^2)\mathbf{k}$.

#### **Solution:**

1. **Extract Components (Watch the negative sign on $Q$!):**
    
    - $P = x^2z$
        
    - $Q = -2yz$
        
    - $R = xy^2$
        
2. **Map the Determinant Cross-Derivatives:**
    
    - $\mathbf{i}\text{-component}: \frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z} = \frac{\partial}{\partial y}(xy^2) - \frac{\partial}{\partial z}(-2yz) = 2xy - (-2y) = 2xy + 2y$
        
    - $\mathbf{j}\text{-component}: \frac{\partial P}{\partial z} - \frac{\partial R}{\partial x} = \frac{\partial}{\partial z}(x^2z) - \frac{\partial}{\partial x}(xy^2) = x^2 - y^2$
        
    - $\mathbf{k}\text{-component}: \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = \frac{\partial}{\partial x}(-2yz) - \frac{\partial}{\partial y}(x^2z) = 0 - 0 = 0$
        
3. **Synthesize Vector Field:**
    
    $$\nabla \times \mathbf{F} = (2xy + 2y)\mathbf{i} + (x^2 - y^2)\mathbf{j}$$
    

### Sample Problem 2: Tracking Disappearing Components

Compute the curl of the vector field $\mathbf{G}(x,y,z) = (\sin z)\mathbf{i} + (x^3y)\mathbf{j} + (0)\mathbf{k}$.

#### **Solution:**

1. **Extract Components:**
    
    - $P = \sin z$
        
    - $Q = x^3y$
        
    - $R = 0$
        
2. **Map the Determinant Cross-Derivatives:**
    
    - $\mathbf{i}\text{-component}: \frac{\partial}{\partial y}(0) - \frac{\partial}{\partial z}(x^3y) = 0 - 0 = 0$
        
    - $\mathbf{j}\text{-component}: \frac{\partial}{\partial z}(\sin z) - \frac{\partial}{\partial x}(0) = \cos z - 0 = \cos z$
        
    - $\mathbf{k}\text{-component}: \frac{\partial}{\partial x}(x^3y) - \frac{\partial}{\partial y}(\sin z) = 3x^2y - 0 = 3x^2y$
        
3. **Synthesize Vector Field:**
    
    $$\nabla \times \mathbf{G} = (\cos z)\mathbf{j} + (3x^2y)\mathbf{k}$$
    

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Electrical Engineering (Current Density mapping via Ampere's Law)]]
[[Electrical Engineering (Current Density mapping via Ampere's Law) Solution]]


### Engineering Problem 2: [[Aerospace Engineering (Vorticity in Wingtip Air Currents)]]
[[Aerospace Engineering (Vorticity in Wingtip Air Currents) Solution]]
