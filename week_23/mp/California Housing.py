#part 1

from sklearn.datasets import fetch_california_housing
import pandas as pd

data = fetch_california_housing()
df = pd.DataFrame(data['data'], columns=data['feature_names'])
df['Target'] = data['target']

print(df.describe())

print(df.head())

print(df.info())

print(df.isnull().sum())

from sklearn.preprocessing import MinMaxScaler
scaler = MinMaxScaler()
df_scaled = pd.DataFrame(scaler.fit_transform(df), columns=df.columns)

df['HouseAgeCat'] = pd.cut(df['HouseAge'], bins=[0, 10, 30, max(df['HouseAge'])], labels=['New', 'Old', 'Very Old'])

df_one_hot = pd.get_dummies(df, columns=['HouseAgeCat'])

import matplotlib.pyplot as plt

corr_matrix = df.corr()
plt.matshow(corr_matrix)
plt.colorbar()
plt.show()

df['IncomeRooms'] = df['MedInc'] * df['AveRooms']


#part 2

df['AgeGroup'] = pd.cut(df['HouseAge'], bins=[0, 10, 30, max(df['HouseAge'])], labels=['New', 'Old', 'Very Old'])

# Plotting histograms
for age in ['New', 'Old', 'Very Old']:
    subset = df[df['AgeGroup'] == age]
    plt.hist(subset['Target'], bins=20, alpha=0.5, label=age)

plt.xlabel('Median House Value')
plt.ylabel('Frequency')
plt.title('Property Age vs Price')
plt.legend()
plt.show()


#part 3

df['IncomeBin'] = pd.cut(df['MedInc'], bins=5, labels=['Low', 'Below Average', 'Average', 'Above Average', 'High'])

grouped_data = df.groupby('IncomeBin')['Target'].mean()

grouped_data.plot(kind='line')
plt.xlabel('Income Bin')
plt.ylabel('Average Median House Value')
plt.title('Neighborhood Crime Rate Impact on Prices')
plt.show()
