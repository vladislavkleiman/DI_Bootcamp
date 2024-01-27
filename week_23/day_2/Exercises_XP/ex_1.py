import pandas as pd

chipo_url = "https://raw.githubusercontent.com/justmarkham/DAT8/master/data/chipotle.tsv"
chipo = pd.read_csv(chipo_url, sep='\t')

print(chipo.head(10))

chipo.info()

print(chipo.shape[1])

print(chipo.columns.tolist())

print(chipo.index)

print(chipo['item_name'].value_counts().idxmax())

print(chipo['quantity'].sum())

print(chipo['choice_description'].value_counts().idxmax())

chipo['item_price'] = chipo['item_price'].apply(lambda x: float(x.replace('$', '')))

print(chipo['item_price'].sum())

print(chipo['order_id'].nunique())

total_revenue = chipo['item_price'].sum()
total_orders = chipo['order_id'].nunique()
average_order_value = total_revenue / total_orders
print(average_order_value)

print(chipo['item_name'].nunique())
