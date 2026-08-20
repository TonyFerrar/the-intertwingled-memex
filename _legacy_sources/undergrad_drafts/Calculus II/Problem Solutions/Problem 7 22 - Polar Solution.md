Set up and evaluate the integral to find the area of the region that lies inside the circle $r = 3\sin\theta$ and outside the cardioid $r = 1 + \sin\theta$.

#### **Solution:**

- **Find the points of intersection:** Set the two equations equal to each other:
    
    $$3\sin\theta = 1 + \sin\theta$$
    
    $$2\sin\theta = 1 \implies \sin\theta = \frac{1}{2}$$
    
    $$\theta = \frac{\pi}{6} \quad \text{and} \quad \theta = \frac{5\pi}{6}$$
    
- **Set up the integral:** The area is the difference between the outer curve (circle $r_2 = 3\sin\theta$) and the inner curve (cardioid $r_1 = 1+\sin\theta$):
    
    $$A = \frac{1}{2}\int_{\pi/6}^{5\pi/6} \big[(3\sin\theta)^2 - (1+\sin\theta)^2\big] d\theta$$
    
    $$A = \frac{1}{2}\int_{\pi/6}^{5\pi/6} \big(9\sin^2\theta - (1 + 2\sin\theta + \sin^2\theta)\big) d\theta$$
    
    $$A = \frac{1}{2}\int_{\pi/6}^{5\pi/6} \big(8\sin^2\theta - 2\sin\theta - 1\big) d\theta$$
    
- **Integrate and Evaluate:** Using the half-angle formula $\sin^2\theta = \frac{1-\cos(2\theta)}{2}$:
    
    $$A = \frac{1}{2}\int_{\pi/6}^{5\pi/6} \big(4(1-\cos(2\theta)) - 2\sin\theta - 1\big) d\theta$$
    
    $$A = \frac{1}{2}\int_{\pi/6}^{5\pi/6} \big(3 - 4\cos(2\theta) - 2\sin\theta\big) d\theta$$
    
    $$A = \frac{1}{2} \Big[ 3\theta - 2\sin(2\theta) + 2\cos\theta \Big]_{\pi/6}^{5\pi/6}$$
    
    Evaluating this definite integral yields:
    
    $$A = \pi$$
    
