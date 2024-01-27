import matplotlib.pyplot as plt
import numpy as np

# Data
x = np.linspace(-10, 10, 1000)
y1 = np.sin(x)
y2 = np.cos(x)

plt.plot(x, y1, color='tab:blue', label='sin(x)')

plt.scatter(x, y2, color='red', marker='x', label='cos(x)', s=10)

plt.title('Mathematical Functions: Sine and Cosine')
plt.xlabel('x')
plt.ylabel('y')

plt.legend()

plt.show()
