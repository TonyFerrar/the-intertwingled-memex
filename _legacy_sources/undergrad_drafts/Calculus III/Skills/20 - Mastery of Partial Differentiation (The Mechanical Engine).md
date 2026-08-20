# Skill 1 Study Guide: Divergence

## Core Competency Focus: Mastery of Partial Differentiation (The Mechanical Engine)

To compute the divergence of a vector field, you must rely on your foundational mathematical execution engine: **Partial Differentiation**. Divergence collapses a vector field into a scalar field by processing derivatives along each coordinate axis independently. Success requires absolute precision in two key areas:

- **Variable Isolation:** When differentiating with respect to one variable (e.g., $x$), you must treat all other independent variables (e.g., $y$ and $z$) as strict constants.
    
- **Advanced Derivative Rules:** Real-world fields feature complex transcendental, exponential, or trigonometric functions. You must confidently apply the **Chain Rule**, **Product Rule**, and **Quotient Rule** while simultaneously maintaining variable isolation.
    

## Conceptual Notes & Essential Formulas

A vector field maps spatial geometry by assigning a vector to every single point in space. The **divergence** is a scalar measure of the local "out-flowingness" or net expansion of that field at a specific point.

### The Mathematical Framework

- **3D Vector Field:** Given a vector field $\mathbf{F}(x,y,z) = P(x,y,z)\mathbf{i} + Q(x,y,z)\mathbf{j} + R(x,y,z)\mathbf{k}$, the divergence is computed as:
    
    $$\nabla \cdot \mathbf{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}$$
    
- **2D Vector Field:** Given a field $\mathbf{F}(x,y) = P(x,y)\mathbf{i} + Q(x,y)\mathbf{j}$, the formulation contracts to:
    
    $$\nabla \cdot \mathbf{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y}$$
    

### Physical Interpretations

- $\nabla \cdot \mathbf{F} > 0$: Net outflow; the point acts as a **source** or is expanding.
    
- $\nabla \cdot \mathbf{F} < 0$: Net inflow; the point acts as a **sink** or is compressing.
    
- $\nabla \cdot \mathbf{F} = 0$: Net balance; the fluid or field is completely **incompressible**.
    

## Worksheet Demo Problem

### Skill 1 Demo

Compute the divergence of the vector field $\mathbf{F}(x,y,z) = 3x^{2}y\mathbf{i} + (x^{2}+y^{2})\mathbf{j} + (xyz)\mathbf{k}$. Then evaluate $\nabla\cdot \mathbf{F}$ at the point $(1, 2, 1)$ and classify its local behavior.

#### **Step 1: Extract Components**

Identify the scalar functions assigned to each spatial direction:

- $P = 3x^2y$
    
- $Q = x^2 + y^2$
    
- $R = xyz$
    

#### **Step 2: Apply Variable Isolation (The Mechanical Engine)**

Execute three separate partial derivatives:

1. Differentiate $P$ with respect to $x$ (treat $y$ as a constant):
    
    $$\frac{\partial P}{\partial x} = \frac{\partial}{\partial x}(3x^2y) = 6xy$$
    
2. Differentiate $Q$ with respect to $y$ (treat $x$ as a constant):
    
    $$\frac{\partial Q}{\partial y} = \frac{\partial}{\partial y}(x^2 + y^2) = 2y$$
    
3. Differentiate $R$ with respect to $z$ (treat $x$ and $y$ as constants):
    
    $$\frac{\partial R}{\partial z} = \frac{\partial}{\partial z}(xyz) = xy$$
    

#### **Step 3: Synthesize the Scalar Expression**

Sum the partial derivatives together to get your symbolic expression:

$$\nabla \cdot \mathbf{F} = 6xy + 2y + xy = 7xy + 2y$$

#### **Step 4: Evaluate Algebraically**

Plug the coordinate parameters $(x=1, y=2, z=1)$ into the function:

$$\nabla \cdot \mathbf{F}(1,2,1) = 7(1)(2) + 2(2) = 14 + 4 = 18$$

- **Physical Meaning:** Because $\nabla \cdot \mathbf{F} = 18 > 0$, the field exhibits local **expanding / source-like** behavior at this point.
    

## Pure Mathematical Sample Problems (Focus: Advanced Differentiation Rules)

### Sample Problem 1: Executing the Product Rule with Isolation

Compute the divergence of the field $\mathbf{F}(x,y,z) = (x e^y \sin x)\mathbf{i} + (x^2 \ln y)\mathbf{j} + (z^2 e^{xy})\mathbf{k}$.

#### **Solution:**

1. **Differentiate $P = x e^y \sin x$ with respect to $x$:**
    
    Isolate $e^y$ as a constant, and use the **Product Rule** on $x \sin x$:
    
    $$\frac{\partial P}{\partial x} = e^y \left[ \frac{\partial}{\partial x}(x)\cdot\sin x + x\cdot\frac{\partial}{\partial x}(\sin x) \right] = e^y(\sin x + x\cos x)$$
    
2. **Differentiate $Q = x^2 \ln y$ with respect to $y$:**
    
    Isolate $x^2$ as a constant:
    
    $$\frac{\partial Q}{\partial y} = x^2 \left(\frac{1}{y}\right) = \frac{x^2}{y}$$
    
3. **Differentiate $R = z^2 e^{xy}$ with respect to $z$:**
    
    Isolate $e^{xy}$ as a constant:
    
    $$\frac{\partial R}{\partial z} = 2z e^{xy}$$
    

#### **Symbolic Divergence Result:**

$$\nabla \cdot \mathbf{F} = e^y(\sin x + x\cos x) + \frac{x^2}{y} + 2z e^{xy}$$

### Sample Problem 2: Executing the Chain Rule with Isolation

Compute the divergence of the field $\mathbf{G}(x,y,z) = \sqrt{x^2 + y^2}\mathbf{i} + \cos(xy^2)\mathbf{j} + (\tan z)\mathbf{k}$.

#### **Solution:**

1. **Differentiate $P = (x^2 + y^2)^{1/2}$ with respect to $x$:**
    
    Apply the **Chain Rule**, keeping $y^2$ treated strictly as a constant:
    
    $$\frac{\partial P}{\partial x} = \frac{1}{2}(x^2 + y^2)^{-1/2} \cdot \frac{\partial}{\partial x}(x^2 + y^2) = \frac{1}{2\sqrt{x^2+y^2}} \cdot 2x = \frac{x}{\sqrt{x^2+y^2}}$$
    
2. **Differentiate $Q = \cos(xy^2)$ with respect to $y$:**
    
    Apply the **Chain Rule**, treating the factor $x$ as a constant multiplier:
    
    $$\frac{\partial Q}{\partial y} = -\sin(xy^2) \cdot \frac{\partial}{\partial y}(xy^2) = -\sin(xy^2) \cdot (2xy) = -2xy\sin(xy^2)$$
    
3. **Differentiate $R = \tan z$ with respect to $z$:**
    
    $$\frac{\partial R}{\partial z} = \sec^2 z$$
    

#### **Symbolic Divergence Result:**

$$\nabla \cdot \mathbf{G} = \frac{x}{\sqrt{x^2+y^2}} - 2xy\sin(xy^2) + \sec^2 z$$

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Aerospace Engineering (Gas Compressibility in Jet Engine Intakes)]]
[[Aerospace Engineering (Gas Compressibility in Jet Engine Intakes) Solution]]


### Engineering Problem 2: [[Chemical Engineering (Exothermic Reactor Hot-Spot Detection)]]
[[Chemical Engineering (Exothermic Reactor Hot-Spot Detection) Solution]]
