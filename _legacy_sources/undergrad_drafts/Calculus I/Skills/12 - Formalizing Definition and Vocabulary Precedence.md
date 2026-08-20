Markdown


# Skill 1: Formalizing Definitions, Extreme Values vs. Locations, and Graphical Identification

An important application of the derivative is using it to find optimal (or best) solutions to problems in various fields, including mathematics, physical sciences, economics, and engineering. To master this foundational skill, you must learn to rigorously define absolute and relative extrema, correctly distinguish between an extreme **value** and its **location**, and identify these points from graphical data.

---

## 📘 Conceptual Notes & Core Definitions

### 1. Absolute Extrema (Global)
* **Absolute Maximum:** A function $f(x)$ has an absolute (or global) maximum value of $f(a)$ if $f(a) \ge f(x)$ for all $x$ in the domain of $f$. It represents the **largest function value** over the entire domain.
* **Absolute Minimum:** A function $f(x)$ has an absolute (or global) minimum value of $f(a)$ if $f(a) \le f(x)$ for all $x$ in the domain of $f$. It represents the **smallest function value** over the entire domain.

### 2. Relative Extrema (Local)
* **Relative Maximum:** A function $f(x)$ has a relative (or local) maximum value of $f(c)$ if $f(c) > f(x)$ for all $x$ near $x=c$. It represents a local peak or hilltop.
* **Relative Minimum:** A function $f(x)$ has a relative (or local) minimum value of $f(c)$ if $f(c) < f(x)$ for all $x$ near $x=c$. It represents a local valley or low point.

### 3. Precision in Vocabulary: Value vs. Location
When documenting or explaining optimization, precision in language is mandatory:
* **Extreme Values** are the actual function values, or the **$y$-values**.
* **Locations** of the extrema are given by the **$x$-values** that state where the extreme values occur.

### 4. The Endpoint Rule
* **Relative extrema do NOT occur at endpoints of intervals**. A relative extremum requires an open neighborhood around the point to look "near" it on both sides; therefore, interval boundaries can only qualify as absolute extrema, never relative ones.

---

## ✏️ Guided Notes Sample Problems

### Example 1
Given the graph of $f(x)$ below defined over the interval $[a, e]$, identify the location of its absolute and relative extrema.

![[12 - Relative Extrema Guided Notes Image 1.png]]

#### **Solution and Analysis:**
* **Absolute Maximum:** Occurs at $x=d$ because the largest function value of $f(x)$ occurs at this point.
* **Absolute Minimum:** Occurs at $x=a$ because the smallest function value of $f(x)$ occurs at this point.
* **Relative Maxima:** Occurs at both $x=b$ and $x=d$ because both are the locations of the largest function values on the graph in an interval around each point. 
* **Relative Minimum:** Occurs at $x=c$ because it is the location of the smallest function value on the graph in the interval around that point.
* **Endpoint Check:** The points $x=a$ and $x=e$ are endpoints, so they cannot be relative minimums or maximums.

### Example 2
Identify the absolute and relative extrema for the function $f(x)=(x+1)^{2}$ on the closed interval $[-2,0]$ using its provided graph.

![[12 - Relative Extrema Guided Notes Image 2.png]]

#### **Solution and Analysis:**
* **Absolute Minimum:** A value of $0$ at location $x=-1$.
* **Relative Minimum:** A value of $0$ at location $x=-1$. *(This is a turning point inside the interior of the interval).*
* **Absolute Maximum:** A value of $1$ at locations $x=-2$ and $x=0$. *(The absolute maximum value can be achieved at more than one location).*
* **Relative Maxima:** None. *(The peaks occur strictly at the boundaries $x=-2$ and $x=0$, which are endpoints and are disqualified from being relative extrema).*

---

---

## 🚀 Real-Life Engineering Application Problems

### Engineering Problem 1: [[Aerospace Vehicle Thermal Re-entry]]
[[Aerospace Vehicle Thermal Re-entry Solution]]

---

### Engineering Problem 2: [[Mechanical Dynamic Dampener Vibration Resonance]]
[[Mechanical Dynamic Dampener Vibration Resonance Solution]]
