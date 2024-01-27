chipo['item_price'] = chipo['item_price'].apply(lambda x: float(x.replace('$', '')))

count_more_than_10 = chipo[chipo['item_price'] > 10].shape[0]
print(count_more_than_10)
