
import numpy as np

data = np.array(np.random.randint(1, 100, size=25)).reshape(5, 5)
print("Original Data Matrix:\n", data)

#Task 1: Matrix Manipulation - Swap Rows

data[[1, 3]] = data[[3, 1]]
print("Matrix after swapping second and fourth rows:\n", data)

#Task 2: Normalization

normalized_data = (data - np.min(data)) / (np.max(data) - np.min(data))
print("Normalized Data:\n", normalized_data)

#Task 3: Z-score Normalization

z_score_data = (data - np.mean(data)) / np.std(data)
print("Z-score Normalized Data:\n", z_score_data)

#Task 4: Array Splitting

raveled_data = np.ravel(data)
split_arrays = np.array_split(raveled_data, 5)
print("Split Arrays:\n", split_arrays)

#Task 5: Dot Product of Two Vectors

vector1 = np.array([3, 5, 6, 7, 8])
vector2 = np.array([2, 4, 6, 8, 10])
dot_product = np.dot(vector1, vector2)
print("Dot Product:", dot_product)

#Task 6: Matrix Multiplication

data2 = np.random.randint(1, 100, size=(3, 3))
matrix_multiplication = np.dot(data[:3, :3], data2)
print("Matrix Multiplication Result:\n", matrix_multiplication)

#Task 7: Inverse of a Matrix

identity_matrix = np.eye(3) * 2
inverse_matrix = np.linalg.inv(identity_matrix)
print("Inverse of the Matrix:\n", inverse_matrix)

#Task 8: Eigenvalues and Eigenvectors

eigenvalues, eigenvectors = np.linalg.eig(data[:3, :3])
print("Eigenvalues:", eigenvalues)
print("Eigenvectors:\n", eigenvectors)

#Task 9: Find Missing Values

data.ravel()[np.random.choice(data.size, 5, replace=False)] = np.nan
print("Data with Missing Values:\n", data)
missing_indices = np.where(np.isnan(data))
print("Indices of Missing Values:", missing_indices)

#Task 10: Replace Missing Values

mean_val = np.nanmean(data)
data[np.isnan(data)] = mean_val
print("Data after Replacing Missing Values:\n", data)