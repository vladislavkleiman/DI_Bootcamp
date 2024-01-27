import numpy as np
import matplotlib.pyplot as plt


x = np.linspace(0, 20, 100)

y = x ** 2

plt.plot(x, y)

plt.title('Square of Numbers from 0 to 20')
plt.xlabel('x')
plt.ylabel('y = x^2')
plt.xlim(0, 20)
plt.ylim(0, max(y))

plt.savefig('x_vs_y_squared.png')

plt.show()
