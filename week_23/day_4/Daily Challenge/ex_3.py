import matplotlib.pyplot as plt

item_quantity = chipo.groupby('item_name')['quantity'].sum()

top_items = item_quantity.sort_values(ascending=False).head(5)

top_items.plot(kind='bar')

plt.title('Top 5 Items by Total Quantity Ordered')
plt.xlabel('Item Name')
plt.ylabel('Total Quantity Ordered')

plt.savefig('task3_plot.png')

plt.show()
