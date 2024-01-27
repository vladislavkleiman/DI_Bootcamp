import pandas as pd

data1 = pd.DataFrame({
    'ID': [1, 2, 3],
    'Name': ['Alice', 'Bob', 'Charlie']
})

data2 = pd.DataFrame({
    'ID': [4, 5, 6],
    'Name': ['David', 'Eve', 'Frank']
})

data3 = pd.DataFrame({
    'ID': [1, 2, 4, 5],
    'Score': [88, 92, 75, 84]
})

all_data = pd.concat([data1, data2])

all_data_col = pd.concat([data1, data2], axis=1)

print("All Data (Merged along rows):")
print(all_data)
print("\nAll Data Col (Merged along columns):")
print(all_data_col)
