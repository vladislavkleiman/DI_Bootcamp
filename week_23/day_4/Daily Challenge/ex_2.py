import pandas as pd
import matplotlib.pyplot as plt

chipo = pd.read_csv('data.csv')

chipo['item_price'] = chipo['item_price'].apply(lambda x: float(x.replace('$', '')))

plt.scatter(chipo['item_price'], chipo['quantity'])

plt.title('Relationship between Item Price and Quantity Ordered')
plt.xlabel('Item Price ($)')
plt.ylabel('Quantity Ordered')

plt.savefig('task2_plot.png')

plt.show()
