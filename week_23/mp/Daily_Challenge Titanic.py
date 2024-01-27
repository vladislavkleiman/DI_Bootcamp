import pandas as pd

file_path = 'titanic.csv.csv'
titanic_data = pd.read_csv(file_path)

print(titanic_data.head())
print(titanic_data.describe())
print(titanic_data.info())

import matplotlib.pyplot as plt

male_count = titanic_data[titanic_data['Sex'] == 'male'].shape[0]
female_count = titanic_data[titanic_data['Sex'] == 'female'].shape[0]
plt.figure(figsize=(8, 8))
plt.pie([male_count, female_count], labels=['Male', 'Female'], autopct='%1.1f%%')
plt.title('Ratio of Male to Female Passengers')
plt.show()

plt.figure(figsize=(10, 6))
titanic_data['Age'].dropna().hist(bins=30)
plt.title('Distribution of Passenger Ages')
plt.xlabel('Age')
plt.ylabel('Count')
plt.show()

survived_count = titanic_data['Survived'].value_counts()
plt.figure(figsize=(8, 6))
survived_count.plot(kind='bar')
plt.title('Survival Counts')
plt.xlabel('Survived (1: Yes, 0: No)')
plt.ylabel('Number of Passengers')
plt.show()

survival_gender = titanic_data.groupby(['Sex', 'Survived']).size().unstack()
survival_gender.plot(kind='bar', stacked=True)
plt.title('Survival by Gender')
plt.xlabel('Gender')
plt.ylabel('Count')
plt.show()

plt.figure(figsize=(10, 6))
plt.scatter(titanic_data['Age'], titanic_data['Fare'])
plt.title('Correlation between Fare and Age')
plt.xlabel('Age')
plt.ylabel('Fare')
plt.show()

titanic_data['Age'].fillna(titanic_data['Age'].median(), inplace=True)

titanic_data['Fare'] = (titanic_data['Fare'] - titanic_data['Fare'].mean()) / titanic_data['Fare'].std()

titanic_data = pd.get_dummies(titanic_data, columns=['Sex'])

print(titanic_data.head())
