import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(-10, 10, 1000)
y1 = np.sin(x)
y2 = np.cos(x)

fig, axs = plt.subplots(2)


axs[0].plot(x, y1, color='tab:blue', label='sin(x)')
axs[0].set_title('Sine Function')
axs[0].set_xlabel('x')
axs[0].set_ylabel('sin(x)')
axs[0].legend()


axs[1].scatter(x, y2, color='red', marker='x', label='cos(x)', s=10)
axs[1].set_title('Cosine Function')
axs[1].set_xlabel('x')
axs[1].set_ylabel('cos(x)')
axs[1].legend()


plt.tight_layout()


plt.show()
