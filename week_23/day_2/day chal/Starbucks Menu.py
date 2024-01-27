import pandas as pd
import matplotlib.pyplot as plt

starbucks = pd.read_csv('starbucks.csv')


print(starbucks.head(10))


print("Total number of entries:", len(starbucks))


print("Column names:", starbucks.columns.tolist())


print("DataFrame index:", starbucks.index)


max_sugar_drink = starbucks.groupby('Beverage')['Sugars (g)'].mean().idxmax()
print("Drink with the most sugar:", max_sugar_drink)


unique_categories = starbucks['Beverage_category'].nunique()
print("Number of unique drink categories:", unique_categories)


top_5_categories = starbucks['Beverage_category'].value_counts().head(5)
print("Top 5 drink categories:\n", top_5_categories)


avg_calories = starbucks.groupby('Beverage_category')['Calories'].mean()
print("Average calories per category:\n", avg_calories)


starbucks['caffeine_to_calories'] = starbucks['Caffeine (mg)'] / starbucks['Calories']
starbucks['caffeine_to_calories'] = starbucks['caffeine_to_calories'].replace([float('inf'), -float('inf')], 0)


highest_ratio_category = starbucks.groupby('Beverage_category')['caffeine_to_calories'].mean().idxmax()
print("Category with highest caffeine to calories ratio:", highest_ratio_category)


avg_caffeine_calories = starbucks.groupby('Beverage_category')['caffeine_to_calories'].mean()
avg_caffeine_calories.plot(kind='barh')
plt.xlabel('Average Caffeine to Calories Ratio')
plt.title('Average Caffeine to Calories Ratio per Drink Category')
plt.show()


starbucks.groupby('Beverage_category')[['Sugars (g)', 'Caffeine (mg)']].mean().plot(kind='scatter', x='Sugars (g)', y='Caffeine (mg)')
plt.title('Relationship between Sugar and Caffeine in Different Drink Categories')
plt.show()
