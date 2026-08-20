---
title: "Session 21 - Alternating and Convergence"
type: course-session
course: MATH-182
semester: Fall 2026
publish: true
cssclasses: []
updated: 2026-08-18
---

# Session 21 - Alternating and Convergence

## Session Objectives
By the end of this session, you will be able to:
- Benchmark Modeling and Growth-Rate Comparison
- Navigating Absolute vs. Conditional Convergence
- Structural Identification and Test Selection

## Session Timeline
- **00:00 - 00:10 (10 mins)**: Micro-Lecture
- **00:10 - 00:25 (15 mins)**: Skill Block 1
- **00:25 - 00:30 (5 mins)**: Regroup 1
- **00:30 - 00:45 (15 mins)**: Skill Block 2
- **00:45 - 00:50 (5 mins)**: Regroup 2
- **00:50 - 01:05 (15 mins)**: Skill Block 3
- **01:05 - 01:10 (5 mins)**: Regroup 3
- **01:10 - 01:15 (5 mins)**: Synthesis Wrap-up

## Session Content

### Micro-Lecture
#### Engineering Context: Engineering Calculus II Application
In these engineering applications, these skills allow professionals to analyze the fundamental convergence behavior of the infinite series—such as the harmonic series—that model acoustics and sorting algorithm performance. Because calculating or studying explicit partial sums in these complex systems is often a highly challenging task, engineers must rely on alternative testing approaches. By using structural identification and benchmark modeling, they can determine the ultimate fate of a series when simpler methods fail; for instance, while a basic tool like the Divergence Test is entirely inconclusive for the harmonic series, these advanced skills provide the exact alternative frameworks needed to successfully verify its behavior and validity in scientific applications.

### Skill Block 1
## 1. Topic Overview: Modeling Complex Growth Rates

When evaluating a highly complex infinite series, calculating explicit partial sums directly is often an incredibly challenging or impossible task. Instead of evaluating the series in isolation, we look at its long-term behavior at infinity and model it against simpler, known benchmark series. This technique typically uses positive-term benchmarks whose convergence properties are already fully established, such as geometric series or $p$-series.

To do this, engineers rely on two comparison frameworks:

### 1.1 The Direct Comparison Test (DCT)

The Direct Comparison Test relies on establishing a strict geometric trap between the terms of your unknown positive series ($\sum a_n$) and a known benchmark series ($\sum b_n$):

- **The Ceiling Rule:** If your terms are strictly smaller than a known _convergent_ series ($a_n \le b_n$), then your series $\sum a_n$ is forced to **converge**.
    
- **The Floor Rule:** If your terms are strictly larger than a known _divergent_ series ($a_n \ge b_n$), then your series $\sum a_n$ is forced to **diverge**.
    

### 1.2 The Limit Comparison Test (LCT)

When algebraic terms make setting up a clean inequality difficult, the Limit Comparison Test offers a powerful alternative. Instead of trapping the terms, you analyze the relative rate of growth between your series ($a_n$) and a chosen benchmark ($b_n$) as $n$ approaches infinity:

- **Isolate the dominant terms:** To build your benchmark $b_n$, you strip away the minor terms and keep only the highest-degree powers in both the numerator and denominator of the original series.
    
- **Evaluate the ratio:** You calculate the limit of their ratio:
    
    $$L = \lim_{n \to \infty} \frac{a_n}{b_n}$$
    
- **Interpret the limit:** If $L$ is a finite, positive number ($0 < L < \infty$), it mathematically proves that both series grow at comparable relative rates. Therefore, **both series share the exact same fate**—either both converge or both diverge.
    

## 2. Sample Mathematical Problems

### Problem A:

$$\sum_{n=1}^{\infty} \frac{1}{n^2 + 5}$$

- **Structural Identification:** The denominator resembles a standard $p$-series but has an added constant.
    
- **Test Selected:** Direct Comparison Test (DCT).
    
- **Solution:** Let our benchmark series be $b_n = \frac{1}{n^2}$, which is a $p$-series with $p = 2 > 1$ and is known to **converge**. Because adding $5$ to the denominator makes the overall fraction smaller, we can write the inequality:
    
    $$n^2 + 5 > n^2 \implies \frac{1}{n^2 + 5} < \frac{1}{n^2}$$
    
    Since our original series is bounded above by a known convergent benchmark, the original series **converges**.
    

### Problem B:

$$\sum_{n=1}^{\infty} \frac{n - 2}{n^3 + n}$$

- **Structural Identification:** This is a rational expression with multiple polynomial terms, making a direct inequality messy to prove.
    
- **Test Selected:** Limit Comparison Test (LCT).
    
- **Solution:** Isolate the dominant highest-degree terms to create the benchmark series $b_n$:
    
    $$b_n = \frac{n}{n^3} = \frac{1}{n^2}$$
    
    The benchmark series $\sum \frac{1}{n^2}$ is a $p$-series ($p = 2 > 1$), which **converges**. Now, evaluate the limit of the ratio:
    
    $$L = \lim_{n \to \infty} \frac{\frac{n-2}{n^3+n}}{\frac{1}{n^2}} = \lim_{n \to \infty} \left( \frac{n-2}{n^3+n} \cdot \frac{n^2}{1} \right) = \lim_{n \to \infty} \frac{n^3 - 2n^2}{n^3 + n} = 1$$
    
    Since $L = 1$ is a finite, positive number ($0 < L < \infty$), both series share the same behavior. Because the benchmark converges, our original series **converges**.
    

## 3. Engineering Application Problems

### Application 1: [[Acoustic Insulation Panel Performance]]
[[Acoustic Insulation Panel Performance Solution]]


### Application 2: [[Distributed Sorting Overheads under High Data Volume]]
[[Distributed Sorting Overheads under High Data Volume Solution]]

#### Worked Example
Determine whether the following series diverge, converge absolutely, or converge conditionally.
1. $$ \sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n^{6}} $$

##### Solution
###### Given Problem

Determine whether the following series diverges, converges absolutely, or converges conditionally:

$$\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n^6}$$

###### Step-by-Step Solution

###### Step 1: Understand the Definitions

Before applying any tests, recall what the terms mean:

- **Absolute Convergence:** A series $\sum a_n$ converges absolutely if the series of its absolute values, $\sum \vert{}a_n\vert{}$, converges.

- **Conditional Convergence:** A series converges conditionally if the original series $\sum a_n$ converges, but the absolute series $\sum \vert{}a_n\vert{}$ diverges.

- **Divergence:** The series does not approach a finite limit.


**Strategy Tip:** It is usually best to test for **absolute convergence** first. If the absolute value version of the series converges, the original series automatically converges absolutely, and your work is done!

###### Step 2: Set up the Absolute Value Series

Take the absolute value of the terms in the given series to strip away the alternating $(-1)^{n+1}$ factor:

$$\sum_{n=1}^{\infty} \left\vert{} \frac{(-1)^{n+1}}{n^6} \right\vert{} = \sum_{n=1}^{\infty} \frac{1}{n^6}$$

###### Step 3: Analyze the Absolute Series using the $p$-Series Test

Now, we look at the resulting series: $\sum_{n=1}^{\infty} \frac{1}{n^6}$.

This is a standard **$p$-series**, which is any series in the form $\sum \frac{1}{n^p}$.

The rule for a $p$-series states:

- It **converges** if $p > 1$.

- It **diverges** if $p \le 1$.


In our series, $p = 6$. Since $6 > 1$, the series of absolute values **converges**.

###### Final Conclusion

Because the series of absolute values converges, the original series **converges absolutely**.
#### Active Practice Problem
**E. Choose an appropriate test and determine whether each of the following series converges or diverges.**

1. $$ \sum_{n=2}^{\infty}\frac{1}{n~\ln n} $$

2. $$ \sum_{n=1}^{\infty}e^{1-n} $$

3. $$ \sum_{n=1}^{\infty}\frac{n}{\sqrt{n+1}} $$

4. $$ \sum_{n=1}^{\infty}\frac{n^{4}+n-1}{2n^{5}-1} $$

5. $$ \sum_{n=1}^{\infty}\frac{1}{5^{n}-3^{n}} $$

6. $$ \sum_{n=1}^{\infty}\frac{n^{4}+n-1}{2n^{4}-1} $$

7. $$ \sum_{n=1}^{\infty}\frac{\sin^{2}n}{n^{2}} $$

8. $$ \sum_{n=1}^{\infty}\frac{2^{n}+1}{2+3^{n}} $$

##### Workspace

##### Solution
###### 1.

$$\sum_{n=2}^{\infty} \frac{1}{n \ln n}$$

###### Step 1: Choose a Test

The term contains $n$ and $\ln n$ in the denominator. This matches a form that is easy to integrate using $u$-substitution because the derivative of $\ln x$ is $\frac{1}{x}$. We will use the **Integral Test**.

###### Step 2: Check Conditions

The corresponding function $f(x) = \frac{1}{x \ln x}$ is continuous, positive, and decreasing for all $x \ge 2$.

###### Step 3: Evaluate the Integral

Set up the improper integral and use the substitution $u = \ln x$, which means $du = \frac{1}{x} \, dx$:

$$\int_{2}^{\infty} \frac{1}{x \ln x} \, dx = \lim_{t \to \infty} \int_{2}^{t} \frac{1}{x \ln x} \, dx$$

$$= \lim_{t \to \infty} \Big[ \ln(\ln x) \Big]_{2}^{t}$$

$$= \lim_{t \to \infty} \Big( \ln(\ln t) - \ln(\ln 2) \Big) = \infty$$

###### Conclusion

Because the improper integral evaluates to $\infty$, it diverges. Therefore, the series **diverges**.

###### 2.

$$\sum_{n=1}^{\infty} e^{1-n}$$

###### Step 1: Choose a Test

Rewrite the general term using basic exponent rules to see its underlying structure:

$$e^{1-n} = e^1 \cdot e^{-n} = e \cdot \left(\frac{1}{e}\right)^n$$

This perfectly fits the form of a **Geometric Series** ($c \cdot r^n$).

###### Step 2: Analyze the Common Ratio

The common ratio is $r = \frac{1}{e}$. Since $e \approx 2.718$, we find that:

$$\vert{}r\vert{} = \frac{1}{e} < 1$$

###### Conclusion

A geometric series converges if and only if the absolute value of its common ratio is strictly less than 1. Therefore, this series **converges**.

###### 3.

$$\sum_{n=1}^{\infty} \frac{n}{\sqrt{n+1}}$$

###### Step 1: Choose a Test

Notice the growth rates of the top and bottom expressions:

- The numerator grows at a linear rate ($n^1$).

- The denominator grows at a radical rate ($\sqrt{n} = n^{1/2}$).


Since the top power is higher than the bottom power, the terms will grow larger instead of shrinking to zero. We will use the **Divergence Test**.

###### Step 2: Evaluate the Limit

Take the limit of the general term as $n$ approaches infinity:

$$\lim_{n \to \infty} \frac{n}{\sqrt{n+1}} = \infty$$

###### Conclusion

The Divergence Test states that if the limit of the terms is not exactly 0, the series cannot settle into a finite sum. Therefore, the series **diverges**.

###### 4.

$$\sum_{n=1}^{\infty} \frac{n^4 + n - 1}{2n^5 - 1}$$

###### Step 1: Choose a Test

This is a rational expression containing messy polynomials. The **Limit Comparison Test (LCT)** is the best tool here.

###### Step 2: Pick a Comparison Series

Keep only the dominant (highest power) terms from the numerator and denominator to find your benchmark series ($b_n$):

$$b_n = \frac{n^4}{2n^5} = \frac{1}{2n} \implies \text{Drop the constant factor: } b_n = \frac{1}{n}$$

The series $\sum \frac{1}{n}$ is the famous **harmonic series** ($p$-series with $p=1$), which is known to **diverge**.

###### Step 3: Run the Limit Comparison Test

$$L = \lim_{n \to \infty} \frac{a_n}{b_n} = \lim_{n \to \infty} \left( \frac{n^4 + n - 1}{2n^5 - 1} \cdot \frac{n}{1} \right)$$

$$L = \lim_{n \to \infty} \frac{n^5 + n^2 - n}{2n^5 - 1} = \frac{1}{2}$$

###### Conclusion

Since $L = \frac{1}{2}$ is a finite, positive number ($0 < L < \infty$), both series must share the same fate. Because our comparison series diverges, the original series **diverges**.

###### 5.

$$\sum_{n=1}^{\infty} \frac{1}{5^n - 3^n}$$

###### Step 1: Choose a Test

For very large values of $n$, $5^n$ grows drastically faster than $3^n$, meaning the $3^n$ term becomes negligible. We will use the **Limit Comparison Test (LCT)**.

###### Step 2: Pick a Comparison Series

We will compare our series to a geometric series built from the dominant base term:

$$b_n = \frac{1}{5^n} = \left(\frac{1}{5}\right)^n$$

The series $\sum \left(\frac{1}{5}\right)^n$ is a geometric series with $\vert{}r\vert{} = \frac{1}{5} < 1$, so it **converges**.

###### Step 3: Run the Limit Comparison Test

$$L = \lim_{n \to \infty} \frac{\frac{1}{5^n - 3^n}}{\frac{1}{5^n}} = \lim_{n \to \infty} \frac{5^n}{5^n - 3^n}$$

Divide both the numerator and the denominator by $5^n$:

$$L = \lim_{n \to \infty} \frac{1}{1 - \left(\frac{3}{5}\right)^n} = \frac{1}{1 - 0} = 1$$

###### Conclusion

Since $L = 1$ is finite and positive, both series behave identically. Since the comparison series converges, this series **converges**.

###### 6.

$$\sum_{n=1}^{\infty} \frac{n^4 + n - 1}{2n^4 - 1}$$

###### Step 1: Choose a Test

Look at the highest power of $n$ in both the numerator and denominator. Since both sharing the same degree ($n^4$), the terms will level out to a non-zero constant at infinity. We will apply the **Divergence Test**.

###### Step 2: Evaluate the Limit

Find the limit of the expression as $n \to \infty$ by comparing the leading coefficients:

$$\lim_{n \to \infty} \frac{n^4 + n - 1}{2n^4 - 1} = \frac{1}{2}$$

###### Conclusion

Because the limit is $\frac{1}{2}$ (which is **not equal to 0**), the series **diverges** by the Divergence Test.

###### 7.

$$\sum_{n=1}^{\infty} \frac{\sin^2 n}{n^2}$$

###### Step 1: Choose a Test

Trigonometric functions like $\sin(n)$ oscillate but are strictly bounded. Whenever you see a bounded term like $\sin(n)$ or $\cos(n)$, the **Direct Comparison Test (DCT)** is usually the fastest method.

###### Step 2: Build the Inequality

We know that the output of a sine function is always trapped between $-1$ and $1$. Squaring it ensures it stays between $0$ and $1$:

$$0 \le \sin^2 n \le 1$$

Now, divide the entire inequality by $n^2$:

$$0 \le \frac{\sin^2 n}{n^2} \le \frac{1}{n^2}$$

###### Step 3: Analyze the Larger Series

The bounding series is $\sum_{n=1}^{\infty} \frac{1}{n^2}$. This is a standard $p$-series where $p = 2$. Because $p > 1$, this series **converges**.

###### Conclusion

Since our original series is positive and strictly smaller than a known convergent series, it is trapped. The series **converges** by the Direct Comparison Test.

###### 8.

$$\sum_{n=1}^{\infty} \frac{2^n + 1}{2 + 3^n}$$

###### Step 1: Choose a Test

Isolate the dominant exponential terms in the numerator and denominator to see how the function behaves at infinity. We will use the **Limit Comparison Test (LCT)**.

###### Step 2: Pick a Comparison Series

$$b_n = \frac{2^n}{3^n} = \left(\frac{2}{3}\right)^n$$

The series $\sum \left(\frac{2}{3}\right)^n$ is a geometric series. Because its common ratio $\vert{}r\vert{} = \frac{2}{3} < 1$, it **converges**.

###### Step 3: Run the Limit Comparison Test

$$L = \lim_{n \to \infty} \frac{\frac{2^n + 1}{2 + 3^n}}{\frac{2^n}{3^n}} = \lim_{n \to \infty} \left( \frac{2^n + 1}{2 + 3^n} \cdot \frac{3^n}{2^n} \right) = \lim_{n \to \infty} \frac{6^n + 3^n}{2 \cdot 2^n + 6^n}$$

Divide every term by the fastest-growing base ($6^n$):

$$L = \lim_{n \to \infty} \frac{1 + \left(\frac{3}{6}\right)^n}{2\left(\frac{2}{6}\right)^n + 1} = \frac{1 + 0}{0 + 1} = 1$$

###### Conclusion

Since $L = 1$ is a finite, positive value, our series mimics the comparison series. Therefore, the series **converges**.
##### Extra Practice & Extensions
> ##### Extension Problem (Alternating)
> Determine whether the following series diverge, converge absolutely, or converge conditionally.
2. $$ \sum_{n=1}^{\infty}\frac{(-1)^{n}}{\sqrt[4]{n^{3}}} $$
> 
> > [!check]- Solution
> > ## Given Problem
> > 
> > Determine whether the following series diverges, converges absolutely, or converges conditionally:
> > 
> > $$\sum_{n=1}^{\infty} \frac{(-1)^n}{\sqrt[4]{n^3}}$$
> > 
> > ## Step-by-Step Solution
> > 
> > ### Step 1: Test for Absolute Convergence
> > 
> > To see if the series converges absolutely, we take the absolute value of its terms to remove the alternating $(-1)^n$ component:
> > 
> > $$\sum_{n=1}^{\infty} \left\vert{} \frac{(-1)^n}{\sqrt[4]{n^3}} \right\vert{} = \sum_{n=1}^{\infty} \frac{1}{\sqrt[4]{n^3}}$$
> > 
> > We can rewrite the radical in the denominator using a fractional exponent ($\sqrt[4]{n^3} = n^{3/4}$):
> > 
> > $$\sum_{n=1}^{\infty} \frac{1}{n^{3/4}}$$
> > 
> > This is a **$p$-series** where $p = \frac{3}{4}$.
> > 
> > - The $p$-series test states that a series converges only if $p > 1$.
> > 
> > - Since $\frac{3}{4} \le 1$, the absolute series **diverges**.
> > 
> > 
> > **What this means so far:** The series is **not** absolutely convergent. It is either conditionally convergent or completely divergent. Now we must test the original alternating series.
> > 
> > ### Step 2: Test the Original Series using the Alternating Series Test (AST)
> > 
> > The original series is alternating, written in the form $\sum_{n=1}^{\infty} (-1)^n b_n$, where:
> > 
> > $$b_n = \frac{1}{n^{3/4}}$$
> > 
> > To show that this alternating series converges, $b_n$ must satisfy two conditions:
> > 
> > 1. **The terms must be decreasing:** As $n$ grows larger, the denominator $n^{3/4}$ grows larger, which means the overall fraction gets smaller. Thus, $b_{n+1} \le b_n$ for all $n$.
> > 
> > 2. **The limit must approach 0:** We take the limit as $n$ goes to infinity:
> > 
> > $$\lim_{n \to \infty} b_n = \lim_{n \to \infty} \frac{1}{n^{3/4}} = 0$$
> > 
> > 
> > Since both conditions of the Alternating Series Test are satisfied, the original series **converges**.
> > 
> > ## Final Conclusion
> > 
> > Because the original alternating series converges, but its absolute value series diverges, the series **converges conditionally**.
> 
> ##### Extension Problem (Alternating)
> Determine whether the following series diverge, converge absolutely, or converge conditionally.
3. $$ \sum_{n=1}^{\infty}\frac{n!}{n^{4}} $$
> 
> > [!check]- Solution
> > ## Given Problem
> > 
> > Determine whether the following series diverges, converges absolutely, or converges conditionally:
> > 
> > $$\sum_{n=1}^{\infty} \frac{n!}{n^4}$$
> > 
> > ## Step-by-Step Solution
> > 
> > ### Step 1: Identify the Best Test
> > 
> > This series contains a factorial ($n!$). Whenever factorials are present in a series, the **Ratio Test** is almost always the most efficient tool to use.
> > 
> > Since all terms in this series are strictly positive for $n \ge 1$, we do not need to worry about alternating signs. If the series converges, it will automatically be absolute convergence.
> > 
> > ### Step 2: Set up the Ratio Test
> > 
> > Let the general term of our series be $a_n = \frac{n!}{n^4}$.
> > 
> > To find the next term ($a_{n+1}$), we replace every $n$ with $(n+1)$:
> > 
> > $$a_{n+1} = \frac{(n+1)!}{(n+1)^4}$$
> > 
> > The Ratio Test requires us to find the limit $L$ of the absolute ratio of these consecutive terms as $n$ approaches infinity:
> > 
> > $$L = \lim_{n \to \infty} \left\vert{} \frac{a_{n+1}}{a_n} \right\vert{}$$
> > 
> > ### Step 3: Simplify the Fraction
> > 
> > Substitute our terms into the limit formula:
> > 
> > $$L = \lim_{n \to \infty} \frac{\frac{(n+1)!}{(n+1)^4}}{\frac{n!}{n^4}}$$
> > 
> > To simplify, multiply the top fraction by the reciprocal of the bottom fraction:
> > 
> > $$L = \lim_{n \to \infty} \frac{(n+1)!}{(n+1)^4} \cdot \frac{n^4}{n!}$$
> > 
> > Now, rearrange the terms to group the factorials together and the algebraic powers together:
> > 
> > $$L = \lim_{n \to \infty} \left( \frac{(n+1)!}{n!} \cdot \frac{n^4}{(n+1)^4} \right)$$
> > 
> > ### Step 4: Expand the Factorial and Cancel
> > 
> > Recall the definition of a factorial: $(n+1)! = (n+1) \cdot n!$. Let's substitute this into the limit to cancel out the $n!$ terms:
> > 
> > $$L = \lim_{n \to \infty} \left( \frac{(n+1) \cdot n!}{n!} \cdot \left(\frac{n}{n+1}\right)^4 \right)$$
> > 
> > The $n!$ in the numerator and denominator cancel out completely, leaving:
> > 
> > $$L = \lim_{n \to \infty} \left( (n+1) \cdot \left(\frac{n}{n+1}\right)^4 \right)$$
> > 
> > ### Step 5: Evaluate the Limit
> > 
> > Let's look at the two parts of our limit as $n \to \infty$:
> > 
> > 1. For the rational expression, dividing the numerator and denominator by $n$ gives $\lim_{n \to \infty} \frac{n}{n+1} = 1$. Raised to the fourth power, it remains $1^4 = 1$.
> > 
> > 2. For the front term, $\lim_{n \to \infty} (n+1) = \infty$.
> > 
> > 
> > Multiplying them together gives:
> > 
> > $$L = \infty \cdot 1 = \infty$$
> > 
> > ## Final Conclusion
> > 
> > The Ratio Test states that:
> > 
> > - If $L < 1$, the series converges absolutely.
> > 
> > - If $L > 1$ (including $L = \infty$), the series **diverges**.
> > 
> > 
> > Since our limit $L = \infty$, the series **diverges**.
> > 
> > **Alternative Quick Check (The Divergence Test):**
> > 
> > You can also think of this intuitively. Factorials ($n!$) grow vastly faster than any polynomial power ($n^4$). Because the numerator grows so much quicker than the denominator, the individual terms grow infinitely large ($\lim_{n \to \infty} a_n = \infty$). Because the terms do not approach 0, the series must diverge.
>

### Regroup 1
- Review common misconceptions and clarify key notations.

### Skill Block 2
## 1. Topic Overview: The Safety Net of Alternating Signs

Up until now, we have primarily dealt with infinite series that have strictly positive terms. However, engineering systems frequently feature terms of mixed signs. When a series strictly alternates between positive and negative values, it is classified as an **alternating series**.

Because alternating signs naturally pull the cumulative sum back and forth, they can sometimes force a series to settle down (converge) when its positive counterpart would normally blow up to infinity. This behavior introduces a critical layer of classification: **Absolute vs. Conditional Convergence**.

### 1.1 The Rules of Engagement

Suppose we have an infinite series $\sum a_n$:

- **Absolute Convergence:** If you strip away the alternating signs by taking the absolute value, and the resulting series $\sum \vert{}a_n\vert{}$ still converges, then the original series **converges absolutely**. If a series converges absolutely, it is mathematically robust and guaranteed to converge under any rearrangement.
    
- **Conditional Convergence:** If the absolute value series $\sum \vert{}a_n\vert{}$ diverges, but the original alternating series $\sum a_n$ still manages to converge, the series **converges conditionally**. It is converging _only_ because the alternating signs are carefully balancing the sum out.
    

### 1.2 The Alternating Series Test (AST) Mechanics

To prove that an alternating series converges conditionally, the sequence of its term magnitudes ($a_n$) must pass two strict criteria:

1. **Non-increasing magnitudes:** The terms must get progressively smaller or stay equal ($a_{n+1} \le a_n$).
    
2. **Limit vanishes:** The terms must shrink to exactly zero as $n$ goes to infinity ($\lim_{n \to \infty} a_n = 0$).
    

## 2. Sample Mathematical Problems

### Problem A: $\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n^3}$

**Step 1: Test for Absolute Convergence.** Take the absolute value of the terms:

$$\sum_{n=1}^{\infty} \left\vert{} \frac{(-1)^{n+1}}{n^3} \right\vert{} = \sum_{n=1}^{\infty} \frac{1}{n^3}$$

This is a standard $p$-series where $p = 3$. Because $p > 1$, the absolute series converges.

- **Conclusion:** The series **converges absolutely**.
    

### Problem B: $\sum_{n=1}^{\infty} \frac{(-1)^{n}}{\sqrt{n}}$

**Step 1: Test for Absolute Convergence.** Take the absolute value of the terms:

$$\sum_{n=1}^{\infty} \left\vert{} \frac{(-1)^{n}}{\sqrt{n}} \right\vert{} = \sum_{n=1}^{\infty} \frac{1}{n^{1/2}}$$

This is a $p$-series where $p = \frac{1}{2}$. Because $p \le 1$, the absolute series diverges.

- _Note:_ This means absolute convergence is ruled out. We must now check for conditional convergence using the AST.
    

**Step 2: Apply the Alternating Series Test.** Identify the term magnitude $a_n = \frac{1}{\sqrt{n}}$.

1. **Decreasing?** Yes, because $\sqrt{n+1} > \sqrt{n} \implies \frac{1}{\sqrt{n+1}} \le \frac{1}{\sqrt{n}}$.
    
2. **Limit is 0?** Yes, $\lim_{n \to \infty} \frac{1}{\sqrt{n}} = 0$.
    

Since both conditions are satisfied, the alternating series converges.

- **Conclusion:** The series **converges conditionally**.
    

## 3. Engineering Application Problems

### Application 1: [[Acoustic Signal Phase Cancellation]]
[[Acoustic Signal Phase Cancellation Solution]]


### Application 2: [[Sorting Algorithm Dynamic Memory Allocation]]
[[Sorting Algorithm Dynamic Memory Allocation Solution]]

#### Worked Example
Determine whether the following series diverge, converge absolutely, or converge conditionally.
4. $$ \sum_{n=1}^{\infty}\left(\frac{n^{2}-3}{n^{3}+2}\right)^{n} $$

##### Solution
###### Given Problem

Determine whether the following series diverges, converges absolutely, or converges conditionally:

$$\sum_{n=1}^{\infty} \left( \frac{n^2 - 3}{n^3 + 2} \right)^n$$

###### Step-by-Step Solution

###### Step 1: Identify the Best Test

The general term of the series is $a_n = \left( \frac{n^2 - 3}{n^3 + 2} \right)^n$.

Notice that the entire expression is raised to the **$n$-th power**. Whenever a series has its entire general term raised to an exponent of $n$, the **Root Test** is almost always the easiest and most effective tool to use. Taking the $n$-th root will perfectly cancel out that outer exponent.

###### Step 2: Set up the Root Test

The Root Test requires us to find the limit $L$ of the $n$-th root of the absolute value of the terms as $n$ approaches infinity:

$$L = \lim_{n \to \infty} \sqrt[n]{\vert{}a_n\vert{}}$$

Substituting our term into the formula:

$$L = \lim_{n \to \infty} \sqrt[n]{\left\vert{} \left( \frac{n^2 - 3}{n^3 + 2} \right)^n \right\vert{}}$$

###### Step 3: Simplify the Expression

As $n$ grows very large ($n \ge 2$), the value inside the parentheses $\frac{n^2 - 3}{n^3 + 2}$ is always positive. Therefore, we can safely remove the absolute value bars for the limit.

The $n$-th root ($\sqrt[n]{\dots}$) and the power of $n$ cancel each other out completely:

$$L = \lim_{n \to \infty} \frac{n^2 - 3}{n^3 + 2}$$

###### Step 4: Evaluate the Limit

To evaluate this limit as $n \to \infty$, we compare the highest powers of $n$ in the numerator and the denominator:

- The highest power in the numerator is $n^2$.

- The highest power in the denominator is $n^3$.


Because the denominator has a higher degree than the numerator, the bottom fraction grows significantly faster than the top as $n$ goes to infinity. This forces the entire fraction to approach zero.

_(Formally, you can divide every term by the highest power, $n^3$):_

$$L = \lim_{n \to \infty} \frac{\frac{n^2}{n^3} - \frac{3}{n^3}}{\frac{n^3}{n^3} + \frac{2}{n^3}} = \lim_{n \to \infty} \frac{\frac{1}{n} - \frac{3}{n^3}}{1 + \frac{2}{n^3}} = \frac{0 - 0}{1 + 0} = 0$$

So, we find that:

$$L = 0$$

###### Final Conclusion

The Root Test states that:

- If $L < 1$, the series converges absolutely.

- If $L > 1$, the series diverges.

- If $L = 1$, the test is inconclusive.


Since our limit is $L = 0$, which is less than $1$, the series **converges absolutely**.
#### Active Practice Problem
Determine whether the following series diverge, converge absolutely, or converge conditionally.
5. $$ \sum_{n=1}^{\infty}(-1)^{n+1}\frac{n^{n}}{2} $$

##### Workspace

##### Solution
Here is the step-by-step solution to determine the convergence of the fifth series.

###### Given Problem

Determine whether the following series diverges, converges absolutely, or converges conditionally:

$$\sum_{n=1}^{\infty} (-1)^{n+1} \frac{n^n}{2}$$

###### Step-by-Step Solution

###### Step 1: Analyze the General Term and Choose a Test

Let the general term of our series be:

$$a_n = (-1)^{n+1} \frac{n^n}{2}$$

Before trying complex tests like the Ratio or Root tests, it is always wise to take a quick look at how the terms behave as $n$ goes to infinity.

- The numerator is $n^n$ (a variable base raised to a variable power), which is the fastest-growing standard function in calculus.

- The denominator is simply a constant, $2$.


Because the numerator is growing explosively while the denominator stays exactly the same, the terms are getting massive rather than shrinking toward $0$. This tells us that the **Divergence Test** (or $n$-th term test) is our best tool.

###### Step 2: Apply the Divergence Test

The Divergence Test states that for any series $\sum a_n$:

- If $\lim_{n \to \infty} a_n \neq 0$, or if the limit does not exist, then the series **must diverge**.

- If $\lim_{n \to \infty} a_n = 0$, the test is inconclusive (and you must try a different test).


Let's test the limit of the magnitude (absolute value) of the terms first to see where they are heading:

$$\lim_{n \to \infty} \left\vert{} (-1)^{n+1} \frac{n^n}{2} \right\vert{} = \lim_{n \to \infty} \frac{n^n}{2}$$

###### Step 3: Evaluate the Limit

As $n$ approaches infinity, $n^n$ approaches infinity at an extreme rate:

$$\lim_{n \to \infty} \frac{n^n}{2} = \frac{\infty}{2} = \infty$$

Because the absolute value of the terms goes to infinity, the actual alternating terms ($a_n$) will bounce back and forth between larger and larger positive and negative values without ever settling down.

Therefore, the limit does not exist:

$$\lim_{n \to \infty} a_n \neq 0$$

###### Final Conclusion

Since the limit of the terms as $n \to \infty$ is not equal to $0$, the series **diverges** by the Divergence Test.
##### Extra Practice & Extensions
> ##### Extension Problem (Alternating)
> Determine whether the following series diverge, converge absolutely, or converge conditionally.
6. $$ \sum_{n=1}^{\infty}\frac{(-1)^{n}n}{5^{n}} $$
> 
> > [!check]- Solution
> > ## Given Problem
> > 
> > Determine whether the following series diverges, converges absolutely, or converges conditionally:
> > 
> > $$\sum_{n=1}^{\infty} \frac{(-1)^n n}{5^n}$$
> > 
> > ## Step-by-Step Solution
> > 
> > ### Step 1: Test for Absolute Convergence
> > 
> > As a standard best practice, we begin by testing for **absolute convergence**. We do this by taking the absolute value of the general term to strip away the alternating $(-1)^n$ factor:
> > 
> > $$\sum_{n=1}^{\infty} \left\vert{} \frac{(-1)^n n}{5^n} \right\vert{} = \sum_{n=1}^{\infty} \frac{n}{5^n}$$
> > 
> > ### Step 2: Choose the Best Test
> > 
> > The terms of our absolute series are $a_n = \frac{n}{5^n}$.
> > 
> > Because this expression contains a mix of an algebraic term ($n$) and an exponential term ($5^n$), the **Ratio Test** is the most effective tool to analyze its behavior.
> > 
> > ### Step 3: Set up the Ratio Test
> > 
> > To find the next term ($a_{n+1}$), replace every $n$ in the expression with $(n+1)$:
> > 
> > $$a_{n+1} = \frac{n+1}{5^{n+1}}$$
> > 
> > Now, set up the limit $L$ of the ratio of the consecutive terms as $n$ approaches infinity:
> > 
> > $$L = \lim_{n \to \infty} \frac{a_{n+1}}{a_n} = \lim_{n \to \infty} \frac{\frac{n+1}{5^{n+1}}}{\frac{n}{5^n}}$$
> > 
> > ### Step 4: Simplify the Fraction
> > 
> > Multiply the numerator by the reciprocal of the denominator:
> > 
> > $$L = \lim_{n \to \infty} \left( \frac{n+1}{5^{n+1}} \cdot \frac{5^n}{n} \right)$$
> > 
> > Group the like terms together to make cancellation straightforward:
> > 
> > $$L = \lim_{n \to \infty} \left( \frac{n+1}{n} \cdot \frac{5^n}{5^{n+1}} \right)$$
> > 
> > Using exponent rules, we know that $5^{n+1} = 5 \cdot 5^n$. Substituting this allows us to cancel out $5^n$:
> > 
> > $$L = \lim_{n \to \infty} \left( \frac{n+1}{n} \cdot \frac{5^n}{5 \cdot 5^n} \right)$$
> > 
> > $$L = \lim_{n \to \infty} \left( \frac{n+1}{n} \cdot \frac{1}{5} \right)$$
> > 
> > ### Step 5: Evaluate the Limit
> > 
> > Pull the constant $\frac{1}{5}$ out of the limit:
> > 
> > $$L = \frac{1}{5} \cdot \lim_{n \to \infty} \frac{n+1}{n}$$
> > 
> > Since the degrees of the polynomial in the numerator and denominator are equal, the limit of $\frac{n+1}{n}$ as $n \to \infty$ is simply the ratio of their leading coefficients, which is $1$:
> > 
> > $$L = \frac{1}{5} \cdot 1 = \frac{1}{5}$$
> > 
> > ## Final Conclusion
> > 
> > The Ratio Test states that:
> > 
> > - If $L < 1$, the series converges absolutely.
> > 
> > - If $L > 1$, the series diverges.
> > 
> > 
> > Since our limit is $L = \frac{1}{5}$, which is strictly less than $1$, the series of absolute values converges. Therefore, the original series **converges absolutely**.
>

### Regroup 2
- Reflect on the physical modeling applications and mathematical setups.

### Skill Block 3
## 1. Topic Overview: Reading the "Anatomy" of a Series
When dealing with infinite series, the most crucial first step isn't crunching numbers—it is analyzing the structure of the series to choose the correct test. If you pick the wrong test, you can end up with inconclusive results or invalid mathematical logic.

### 1.1 Key Structural Triggers
*   **Does the general term fail to shrink to zero?**
    *   *Trigger:* $\lim_{n \to \infty} a_n \neq 0$
    *   *Test:* **Divergence Test (n-th Term Test)**. Always try this first if the numerator grows faster than or equal to the denominator.
*   **Does the series involve factorials ($n!$) or mixed exponential/polynomial terms (e.g., $n \cdot 2^n$)?**
    *   *Trigger:* Terms that grow explosively.
    *   *Test:* **Ratio Test**. The factorials and powers will cancel out beautifully.
*   **Is the entire expression raised to the $n$-th power?**
    *   *Trigger:* Expressions like $(\dots)^n$.
    *   *Test:* **Root Test**. Taking the $n$-th root instantly strips away the outer exponent.
*   **Is the series continuous, positive, and decreasing, and does it look like something you can easily integrate?**
    *   *Trigger:* Expressions involving logarithms like $\frac{1}{n \ln n}$ or recognizable reverse chain rules.
    *   *Test:* **Integral Test**. Use $u$-substitution.
*   **Does it look like a messy polynomial fraction?**
    *   *Trigger:* $\frac{3n^2 - 1}{n^4 + 2n}$
    *   *Test:* **Limit Comparison Test (LCT)**. Drop the minor terms, build a benchmark series (usually a $p$-series), and compare.

---

## 2. Sample Mathematical Problems

### Problem A: $\sum_{n=1}^{\infty} \frac{4n^3 + 2}{5n^3 - n}$
**Structural Identification:** The highest power in the numerator ($n^3$) is equal to the highest power in the denominator ($n^3$). Therefore, the terms do not approach 0.
**Test Selected:** Divergence Test.
**Solution:**
$$ \lim_{n \to \infty} \frac{4n^3 + 2}{5n^3 - n} = \frac{4}{5} $$
Since $\frac{4}{5} \neq 0$, the series **diverges**.

### Problem B: $\sum_{n=1}^{\infty} \left(\frac{2n}{3n+1}\right)^n$
**Structural Identification:** The entire term is raised to the $n$-th power.
**Test Selected:** Root Test.
**Solution:**
$$ L = \lim_{n \to \infty} \sqrt[n]{\left(\frac{2n}{3n+1}\right)^n} = \lim_{n \to \infty} \frac{2n}{3n+1} = \frac{2}{3} $$
Since $L = \frac{2}{3} < 1$, the series **converges absolutely**.

### Problem C: $\sum_{n=1}^{\infty} \frac{n^2}{n!}$
**Structural Identification:** The series contains a factorial ($n!$) mixed with a polynomial ($n^2$).
**Test Selected:** Ratio Test.
**Solution:**
$$ L = \lim_{n \to \infty} \left| \frac{(n+1)^2}{(n+1)!} \cdot \frac{n!}{n^2} \right| = \lim_{n \to \infty} \left| \frac{(n+1)^2}{n^2} \cdot \frac{1}{n+1} \right| = 1 \cdot 0 = 0 $$
Since $L = 0 < 1$, the series **converges absolutely**.

---

## 3. Engineering Application Problems

### Application 1: [[Acoustic Resonance Decay]]
[[Acoustic Resonance Decay Solution]]

---

### Application 2: [[Sorting Algorithm Data Load]]
[[Sorting Algorithm Data Load Solution]]

#### Worked Example
**A. Use the divergence test to determine whether each of the following series converges or diverges (if inconclusive, state so).**

1. $$ \sum_{n=1}^{\infty}\frac{1-n}{2n+3} $$

2. $$ \sum_{n=1}^{\infty}\frac{\sqrt{n}}{n+1} $$

##### Solution
###### Ground Rules: The Divergence Test

For any series $\sum a_n$, we evaluate the limit of its terms as $n$ approaches infinity ($\lim_{n \to \infty} a_n$):

- If the limit is **not equal to 0** (or does not exist), the series **diverges**.

- If the limit is **exactly 0**, the test is **inconclusive**. _(This means the series might converge or might still diverge, and you must use a different test)._


###### Solution for Problem 1

$$\sum_{n=1}^{\infty} \frac{1-n}{2n+3}$$

###### Step 1: Identify the general term

The general term of the series is:

$$a_n = \frac{1-n}{2n+3}$$

###### Step 2: Set up and evaluate the limit

We need to find the limit of $a_n$ as $n \to \infty$:

$$\lim_{n \to \infty} \frac{1-n}{2n+3}$$

Notice that both the numerator ($1-n$) and the denominator ($2n+3$) are polynomials of degree 1. To evaluate the limit, we look at the coefficients of the highest power of $n$ (which is $n^1$):

- The coefficient of $n$ in the numerator is $-1$.

- The coefficient of $n$ in the denominator is $2$.


Dividing the leading coefficients gives:

$$\lim_{n \to \infty} \frac{1-n}{2n+3} = -\frac{1}{2}$$

###### Step 3: Apply the test conclusion

Since the limit is $-\frac{1}{2}$, which is **not equal to 0**, the terms do not shrink to zero as we add them up infinitely.

**Conclusion for 1:** The series **diverges** by the Divergence Test.

###### Solution for Problem 2

$$\sum_{n=1}^{\infty} \frac{\sqrt{n}}{n+1}$$

###### Step 1: Identify the general term

The general term of the series is:

$$a_n = \frac{\sqrt{n}}{n+1} = \frac{n^{1/2}}{n+1}$$

###### Step 2: Set up and evaluate the limit

We find the limit of $a_n$ as $n \to \infty$:

$$\lim_{n \to \infty} \frac{n^{1/2}}{n+1}$$

To evaluate this, compare the highest powers of $n$:

- The numerator has a power of $n^{1/2}$.

- The denominator has a higher power of $n^1$.


Because the denominator grows faster than the numerator, the fraction shrinks down to zero:

$$\lim_{n \to \infty} \frac{\sqrt{n}}{n+1} = 0$$

###### Step 3: Apply the test conclusion

Because the limit is exactly 0, the Divergence Test cannot tell us whether this series builds up to a finite number or spans out to infinity.

**Conclusion for 2:** The Divergence Test is **inconclusive**.

**Bonus Note:** If you needed to go further using a different test, you could use the _Limit Comparison Test_ with the divergent harmonic $p$-series $\sum \frac{1}{\sqrt{n}}$ to prove that this series actually diverges. But for this specific question, writing "inconclusive" is the correct final answer!
#### Active Practice Problem
**B. Use the integral test to determine whether each of the following series converges or diverges.**

1. $$ \sum_{n=1}^{\infty}\frac{1}{(n+1)^{5}} $$

2. $$ \sum_{n=1}^{\infty}\frac{n^{2}}{n^{3}-1} $$

##### Workspace

##### Solution
###### Ground Rules: The Integral Test

To use the Integral Test for a series $\sum a_n$, we find a matching function $f(x)$ by replacing $n$ with $x$. For the test to be valid, $f(x)$ must meet three strict requirements on the interval being tested:

1. **Continuous** (no breaks, holes, or vertical asymptotes)

2. **Positive** (outputs stay above the x-axis)

3. **Decreasing** (the terms continuously shrink)


If these conditions are met, then the series $\sum_{n=k}^{\infty} a_n$ and the improper integral $\int_{k}^{\infty} f(x) \, dx$ share the exact same fate: they **both converge** or **both diverge**.

###### Solution for Problem 1

$$\sum_{n=1}^{\infty} \frac{1}{(n+1)^5}$$

###### Step 1: Check the Conditions

Let $f(x) = \frac{1}{(x+1)^5}$ on the interval $[1, \infty)$.

- **Continuous?** Yes. The only problem spot is at $x = -1$, which is well outside our interval of $[1, \infty)$.

- **Positive?** Yes. For any $x \ge 1$, $(x+1)^5$ is positive, so $\frac{1}{\text{positive}}$ is positive.

- **Decreasing?** Yes. As $x$ grows, the denominator grows, which forces the overall fraction to shrink.


Since all three conditions are satisfied, we can safely proceed with the test.

###### Step 2: Set up the Improper Integral

We change the upper bound to a variable $t$ and evaluate it as a limit approaching infinity:

$$\int_{1}^{\infty} \frac{1}{(x+1)^5} \, dx = \lim_{t \to \infty} \int_{1}^{t} (x+1)^{-5} \, dx$$

###### Step 3: Integrate

We can integrate this using a simple power rule reverse step (or a mental $u$-substitution where $u = x+1$ and $du = dx$):

$$\int (x+1)^{-5} \, dx = \frac{(x+1)^{-4}}{-4} = -\frac{1}{4(x+1)^4}$$

Now, apply the integration bounds from $1$ to $t$:

$$\lim_{t \to \infty} \left[ -\frac{1}{4(x+1)^4} \right]_{1}^{t}$$

###### Step 4: Evaluate the Limit

Substitute the upper bound $t$ and lower bound $1$ into our expression:

$$= \lim_{t \to \infty} \left( -\frac{1}{4(t+1)^4} - \left( -\frac{1}{4(1+1)^4} \right) \right)$$

$$= \lim_{t \to \infty} \left( -\frac{1}{4(t+1)^4} + \frac{1}{4(2)^4} \right)$$

As $t \to \infty$, the fraction $-\frac{1}{4(t+1)^4}$ has a fixed numerator and an infinitely growing denominator, meaning it approaches $0$:

$$= 0 + \frac{1}{4(16)} = \frac{1}{64}$$

###### Conclusion for 1

Because the improper integral evaluates to a clean, finite value ($\frac{1}{64}$), the integral converges. Therefore, the series **converges** by the Integral Test.

###### Solution for Problem 2

$$\sum_{n=1}^{\infty} \frac{n^2}{n^3 - 1}$$

**A Quick Heads-Up:** Notice that if you plug $n=1$ into the denominator, you get $1^3 - 1 = 0$, causing a division-by-zero error. This is a tiny technical typo on the worksheet! Because the behavior of a series at infinity isn't changed by ignoring the very first broken term, we will test the "tail" of the series starting from $n=2$ to $\infty$.

###### Step 1: Check the Conditions

Let $f(x) = \frac{x^2}{x^3 - 1}$ on the interval $[2, \infty)$.

- **Continuous?** Yes. The vertical asymptote is at $x = 1$, which we safely avoid by starting at $2$.

- **Positive?** Yes. For $x \ge 2$, both $x^2$ and $x^3 - 1$ are strictly positive.

- **Decreasing?** We can double-check with the quotient rule:

$$f'(x) = \frac{(2x)(x^3-1) - (x^2)(3x^2)}{(x^3-1)^2} = \frac{2x^4 - 2x - 3x^4}{(x^3-1)^2} = \frac{-x^4 - 2x}{(x^3-1)^2}$$

Since the numerator is negative for all $x \ge 2$, $f'(x) < 0$, meaning the function is officially decreasing.


###### Step 2: Set up the Improper Integral

$$\int_{2}^{\infty} \frac{x^2}{x^3 - 1} \, dx = \lim_{t \to \infty} \int_{2}^{t} \frac{x^2}{x^3 - 1} \, dx$$

###### Step 3: Integrate Using $u$-Substitution

Let's use $u$-substitution to compute the antiderivative:

- Let $u = x^3 - 1$

- Then $du = 3x^2 \, dx \implies \frac{1}{3} \, du = x^2 \, dx$


Substitute these into the integral:

$$\int \frac{x^2}{x^3 - 1} \, dx = \frac{1}{3} \int \frac{1}{u} \, du = \frac{1}{3} \ln\vert{}u\vert{} = \frac{1}{3} \ln\vert{}x^3 - 1\vert{}$$

Now, bring back the limits and evaluation bounds:

$$\lim_{t \to \infty} \left[ \frac{1}{3} \ln(x^3 - 1) \right]_{2}^{t}$$

###### Step 4: Evaluate the Limit

Plug in our bounds:

$$= \lim_{t \to \infty} \left( \frac{1}{3} \ln(t^3 - 1) - \frac{1}{3} \ln(2^3 - 1) \right)$$

$$= \lim_{t \to \infty} \left( \frac{1}{3} \ln(t^3 - 1) \right) - \frac{1}{3} \ln(7)$$

As $t \to \infty$, the term $(t^3 - 1)$ grows infinitely large. The natural log of infinity is still infinity:

$$= \infty - \frac{1}{3}\ln(7) = \infty$$

###### Conclusion for 2

Because the improper integral evaluates to $\infty$, the integral diverges. Therefore, the series **diverges** by the Integral Test.
##### Extra Practice & Extensions
> ##### Extension Problem (Alternating)
> **C. Use the comparison or limit comparison tests to determine whether each of the following series converges or diverges.**

1. $$ \sum_{n=1}^{\infty}\frac{\sqrt{n}}{n+n^{2}} $$

2. $$ \sum_{n=1}^{\infty}\frac{1}{n~2^{n}} $$

3. $$ \sum_{n=2}^{\infty}\frac{2n}{\ln n} $$

4. $$ \sum_{n=1}^{\infty}\frac{3n^{3}-n-1}{2n^{5}-1} $$
> 
> > [!check]- Solution
> > Here are the step-by-step solutions for all four problems using the **Direct Comparison Test (DCT)** or the **Limit Comparison Test (LCT)**.
> > 
> > ## Quick Reference: Test Rules
> > 
> > **Direct Comparison Test (DCT):** Let $\sum a_n$ and $\sum b_n$ be series with positive terms.
> > 
> > - If $a_n \le b_n$ and $\sum b_n$ **converges**, then $\sum a_n$ **converges**.
> > 
> > - If $a_n \ge b_n$ and $\sum b_n$ **diverges**, then $\sum a_n$ **diverges**.
> > 
> > 
> > **Limit Comparison Test (LCT):** Let $\sum a_n$ and $\sum b_n$ be series with positive terms. Evaluate $L = \lim_{n \to \infty} \frac{a_n}{b_n}$.
> > 
> > - If $0 < L < \infty$ (a finite, positive number), then **both series share the same behavior** (either both converge or both diverge).
> > 
> > 
> > ## Problem 1: $\sum_{n=1}^{\infty} \frac{\sqrt{n}}{n+n^2}$
> > 
> > ### Step 1: Identify the Dominant Terms
> > 
> > To choose a comparison series ($b_n$), look at the highest powers of $n$ in the numerator and denominator:
> > 
> > - The numerator behaves like $\sqrt{n} = n^{1/2}$.
> > 
> > - The denominator is dominated by $n^2$ as $n \to \infty$.
> > 
> > 
> > This gives our target comparison setup:
> > 
> > $$b_n = \frac{n^{1/2}}{n^2} = \frac{1}{n^{3/2}}$$
> > 
> > ### Step 2: Establish the Behavior of the Comparison Series
> > 
> > The series $\sum_{n=1}^{\infty} \frac{1}{n^{3/2}}$ is a standard **$p$-series** where $p = \frac{3}{2}$. Because $p > 1$, this comparison series **converges**.
> > 
> > ### Step 3: Apply the Direct Comparison Test
> > 
> > Compare the terms of the original series ($a_n$) directly to our comparison series ($b_n$):
> > 
> > Since adding $n$ to the denominator makes the fraction smaller:
> > 
> > $$n + n^2 > n^2 \implies \frac{\sqrt{n}}{n+n^2} < \frac{\sqrt{n}}{n^2} = \frac{1}{n^{3/2}}$$
> > 
> > Because $a_n < b_n$ and the larger series $\sum b_n$ converges, the smaller series must also converge.
> > 
> > ### Conclusion for 1
> > 
> > The series **converges** by the Direct Comparison Test.
> > 
> > ## Problem 2: $\sum_{n=1}^{\infty} \frac{1}{n 2^n}$
> > 
> > ### Step 1: Choose a Comparison Series
> > 
> > The denominator contains a linear term ($n$) multiplied by an exponential term ($2^n$). For all $n \ge 1$, we know that $n \ge 1$.
> > 
> > If we replace $n$ with its lowest possible value ($1$), the denominator becomes smaller, which makes the overall fraction larger:
> > 
> > $$n \cdot 2^n \ge 1 \cdot 2^n = 2^n \implies \frac{1}{n 2^n} \le \frac{1}{2^n}$$
> > 
> > Let our comparison series be $b_n = \frac{1}{2^n} = \left(\frac{1}{2}\right)^n$.
> > 
> > ### Step 2: Establish the Behavior of the Comparison Series
> > 
> > The series $\sum_{n=1}^{\infty} \left(\frac{1}{2}\right)^n$ is a **geometric series** with a common ratio of $r = \frac{1}{2}$. Since $\vert{}r\vert{} < 1$, this geometric series **converges**.
> > 
> > ### Step 3: Apply the Direct Comparison Test
> > 
> > Since $a_n \le b_n$ for all $n \ge 1$, and the dominating series $\sum b_n$ converges, our smaller series is trapped and must also converge.
> > 
> > ### Conclusion for 2
> > 
> > The series **converges** by the Direct Comparison Test.
> > 
> > ## Problem 3: $\sum_{n=2}^{\infty} \frac{2n}{\ln n}$
> > 
> > ### Step 1: Analyze Growth Rates
> > 
> > Logarithmic functions ($\ln n$) grow much slower than linear functions ($n$). Because the numerator grows far faster than the denominator, we expect this series to blow up to infinity. We need to compare it to a simple, known **divergent** series.
> > 
> > For all $n \ge 2$, we know that $\ln n < n$. Let's substitute this relationship into our fraction:
> > 
> > $$\ln n < n \implies \frac{2n}{\ln n} > \frac{2n}{n} = 2$$
> > 
> > ### Step 2: Choose a Comparison Series
> > 
> > Since $a_n > 2$ for all terms, we can compare it to the constant divergent series $\sum_{n=2}^{\infty} 2$ (or compare it to the divergent harmonic series $b_n = \frac{1}{n}$, since $2 > \frac{1}{n}$ for all $n \ge 2$).
> > 
> > Let's pick the harmonic benchmark: $b_n = \frac{1}{n}$, which is a $p$-series ($p=1$) that **diverges**.
> > 
> > ### Step 3: Apply the Direct Comparison Test
> > 
> > Our inequality shows that:
> > 
> > $$a_n > 2 > \frac{1}{n} \implies a_n > b_n$$
> > 
> > Since our terms are strictly larger than the terms of a known divergent series, our series must also expand to infinity.
> > 
> > ### Conclusion for 3
> > 
> > The series **diverges** by the Direct Comparison Test.
> > 
> > ## Problem 4: $\sum_{n=1}^{\infty} \frac{3n^3-n-1}{2n^5-1}$
> > 
> > ### Step 1: Choose a Comparison Series
> > 
> > When handling messy algebraic polynomials, the **Limit Comparison Test (LCT)** is the cleanest approach. First, isolate the highest degrees of $n$ to create the benchmark:
> > 
> > $$b_n = \frac{3n^3}{2n^5} = \frac{3}{2n^2} \quad \text{(or simply use } b_n = \frac{1}{n^2}\text{)}$$
> > 
> > The series $\sum_{n=1}^{\infty} \frac{1}{n^2}$ is a $p$-series with $p = 2 > 1$, meaning it **converges**.
> > 
> > ### Step 2: Set up the Limit Comparison Test
> > 
> > Evaluate the limit of the ratio $\frac{a_n}{b_n}$ as $n \to \infty$:
> > 
> > $$L = \lim_{n \to \infty} \frac{\frac{3n^3-n-1}{2n^5-1}}{\frac{1}{n^2}}$$
> > 
> > Multiply by the reciprocal to simplify:
> > 
> > $$L = \lim_{n \to \infty} \frac{(3n^3-n-1) \cdot n^2}{2n^5-1} = \lim_{n \to \infty} \frac{3n^5-n^3-n^2}{2n^5-1}$$
> > 
> > ### Step 3: Evaluate the Limit
> > 
> > Because the highest power in both the numerator and the denominator is $n^5$, the limit as $n \to \infty$ is simply the ratio of their leading coefficients:
> > 
> > $$L = \frac{3}{2}$$
> > 
> > ### Step 4: Interpret the Result
> > 
> > Since $L = \frac{3}{2}$ is a finite, positive number ($0 < L < \infty$), the LCT confirms that both series behave identically. Since our comparison series converges, the original series must also converge.
> > 
> > ### Conclusion for 4
> > 
> > The series **converges** by the Limit Comparison Test.
>

### Regroup 3
- Verify calculations and mathematical reasoning.

### Synthesis Wrap-up
- Core takeaways from Session 21 and overview of homework homework assignment.
