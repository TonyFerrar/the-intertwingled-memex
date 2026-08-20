
# Relationships Between Lines


> [!info] Essential Formulas
> Comparing the direction vectors of two lines can tell us whether the lines are parallel but not equal, equal, intersecting, or skew. Two pieces of information are needed:
> 1. Whether the direction vectors are parallel 
> $$\vec{u}=a\vec{v}$$
> 2. Whether the lines share a point
> $$x(t)=x(s),\quad y(t)=y(s),\quad z(t)=z(s)$$
> 
>
|                                        | Lines share a common point | Lines do not share a common point |
| -------------------------------------- | -------------------------- | --------------------------------- |
| **Direction vectors are parallel**     | Equal                      | Parallel but not equal            |
| **Direction vectors are not parallel** | Intersecting               | Skew                              |

There are 4 main types of relationships that lines may have with one another:
- **Equal**
	- The lines act along the same exact path and intersect at every possible point. The directional vectors for each line are identical. 
- **Parallel:**
	- This relationship is found when the directional vector of one line is a scalar multiple of the other. They will never interact but they act in the same direction. 
	- Consider a case with directional vectors $\vec{u}$ and $\vec{v}$:
$$\vec{u}=a\vec{v}$$
- **Intersecting:**
	- This relationship is found when the two lines intersect at a point. This can be found by solving each vector component of each line for $t$. **If each equation gives you the same result** for $t$, then the lines intersect.
	- Consider a case with one line parametrized with $t$ and the other parametrized with $s$:
$$x(t)=x(s),\quad y(t)=y(s),\quad z(t)=z(s)$$
- **Skew:**
	- This relationship occurs when neither of the 3 previous relationships are true. They will not ever intersect nor will they ever be parallel. 