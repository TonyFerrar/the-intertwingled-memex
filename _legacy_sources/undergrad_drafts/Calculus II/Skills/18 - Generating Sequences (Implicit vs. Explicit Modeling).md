# Skill 1: Generating Sequences (Implicit vs. Explicit Modeling)

A **sequence** is simply an ordered list of numbers governed by a specific mathematical rule. In engineering and calculus, we represent these lists using index variables (usually $n$) to denote the position of each number in the line.

There are two primary ways to define and generate these sequences: **implicitly** (via a recurrence relation) and **explicitly** (via an explicit formula).

## Conceptual Overview

### 1. Recurrence Relations (Implicit Modeling)

A recurrence relation defines each new term of a sequence by performing operations on the **previous term(s)**.

- **The Catch:** You cannot calculate a far-out term (like $a_{100}$) unless you know the term right before it ($a_{99}$).
    
- **Structure:** It _must_ include an explicit **initial term** (the starting point) and a **dependent rule**.
    
    $$a_1 = \text{value}, \quad a_{n+1} = f(a_n)$$
    

### 2. Explicit Formulas (Direct Modeling)

An explicit formula defines the $n$-th term directly as a function of its index position $n$.

- **The Advantage:** You can plug in _any_ integer $n$ and calculate that specific term instantly without knowing any prior terms.
    
- **Structure:**
    
    $$a_n = f(n) \quad \text{for } n \ge 1$$
    

> 💡 **Calculus Tip:** Think of a recurrence relation like an assembly line where each machine modifies the part coming from the previous machine. Think of an explicit formula like a GPS coordinate grid—you can pinpoint any location instantly without traveling through the intermediate points.

## Standard Sample Problems

### Problem 1: From a Pattern to Both Models

**Scenario:** Consider the following mathematical sequence: $\{4, 7, 10, 13, 16, \dots\}$

1. Find a recurrence relation that generates the sequence.
    
2. Find an explicit formula for the $n$-th term assuming a starting index of $n = 1$.
    

#### Solution

- **Step 1 (Recurrence):** Notice that each term is found by adding $3$ to the term preceding it. The initial term is $4$.
    
    $$a_1 = 4, \quad a_{n+1} = a_n + 3 \quad \text{for } n \ge 1$$
    
- **Step 2 (Explicit):** Because we add $3$ repeatedly, this is an arithmetic progression involving multiples of $3$. Let's align them with $n$:
    
    - For $n=1 \rightarrow 4 = 3(1) + 1$
        
    - For $n=2 \rightarrow 7 = 3(2) + 1$
        
    - For $n=3 \rightarrow 10 = 3(3) + 1$
        
    
    The explicit formula is:
    
    $$a_n = 3n + 1 \quad \text{for } n \ge 1$$
    

### Problem 2: Converting a Recurrence Relation to an Explicit Formula

**Scenario:** A sequence is defined implicitly by $a_1 = 5$ and $a_{n+1} = 2a_n$. Find its explicit formula.

#### Solution

Let's unpack the first few terms to discover the underlying pattern:

- $a_1 = 5$
    
- $a_2 = 2(5) = 10$
    
- $a_3 = 2(10) = 2 \cdot 2 \cdot 5 = 5(2)^2$
    
- $a_4 = 2(20) = 2 \cdot 2 \cdot 2 \cdot 5 = 5(2)^3$
    

Notice that the exponent of the base $2$ is always exactly **one less** than the index $n$.

$$a_n = 5 \cdot 2^{n-1} \quad \text{for } n \ge 1$$

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Digital Signal Processing (Audio Echo Filter)]]
[[Digital Signal Processing (Audio Echo Filter) Solution]]

### Engineering Problem 2: [[Robotics (Precision Automated Deceleration)]]
[[Robotics (Precision Automated Deceleration) Solution]]
