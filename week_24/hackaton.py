import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.cluster import KMeans

data = pd.read_csv('Bicycle_Thefts_Open_Data.csv')

print(data.info())
print(data.describe())

data['OCC_DATE'] = pd.to_datetime(data['OCC_DATE'])
data['OCC_MONTH'] = data['OCC_DATE'].dt.month
data['OCC_HOUR'] = data['OCC_DATE'].dt.hour

plt.figure(figsize=(12, 6))
sns.countplot(x='OCC_YEAR', data=data)
plt.title('Bicycle Thefts Per Year')
plt.show()

plt.figure(figsize=(12, 6))
sns.countplot(x='OCC_MONTH', data=data)
plt.title('Bicycle Thefts Per Month')
plt.show()

plt.figure(figsize=(12, 6))
sns.countplot(x='OCC_HOUR', data=data)
plt.title('Bicycle Thefts by Hour of Day')
plt.show()


sns.scatterplot(x='LONG_WGS84', y='LAT_WGS84', data=data, hue='NEIGHBOURHOOD_140')
plt.title('Geographical Distribution of Bicycle Thefts')
plt.show()


plt.figure(figsize=(12, 6))
sns.countplot(y='BIKE_MAKE', data=data, order = data['BIKE_MAKE'].value_counts().index)
plt.title('Most Commonly Stolen Bike Makes')
plt.show()

plt.figure(figsize=(12, 6))
sns.countplot(y='BIKE_COLOUR', data=data, order = data['BIKE_COLOUR'].value_counts().index)
plt.title('Most Common Bike Colors of Stolen Bikes')
plt.show()

kmeans = KMeans(n_clusters=5)
data['cluster'] = kmeans.fit_predict(data[['LONG_WGS84', 'LAT_WGS84']])
sns.scatterplot(x='LONG_WGS84', y='LAT_WGS84', hue='cluster', data=data)
plt.title('Theft Clusters')
plt.show()


correlation = data.corr()
sns.heatmap(correlation, annot=True)
plt.title('Correlation Matrix')
plt.show()


