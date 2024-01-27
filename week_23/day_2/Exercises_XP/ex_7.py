import pandas as pd

baby_names = pd.read_csv('US_Baby_Names.csv')

print("First 10 entries:")
print(baby_names.head(10))

baby_names = baby_names.drop(columns=['Unnamed: 0', 'Id'])

print("\nDataFrame after deleting columns:")
print(baby_names.head(10))
