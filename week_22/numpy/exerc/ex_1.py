#Task 1

import numpy as np

vector_zeros = np.zeros(10)
print(vector_zeros)

#Task 2

memory_size = vector_zeros.size * vector_zeros.itemsize
print(memory_size)

#Task 3

help(np.add)

#Task 4

vector_range = np.arange(10, 50)
print(vector_range)

#Task 5

reversed_vector = vector_range[::-1]
print(reversed_vector)

#Task 6

matrix_3x3 = np.arange(9).reshape(3, 3)
print(matrix_3x3)

#Task 7

non_zero_indices = np.nonzero([1, 2, 0, 0, 4, 0])
print(non_zero_indices)

#Task 8

identity_matrix = np.eye(3)
print(identity_matrix)

#Task 9

matrix_5x5 = np.tile(np.arange(5), (5, 1))
print(matrix_5x5)

#Task 10

vector_0_to_1 = np.linspace(0, 1, 12)[1:-1]
print(vector_0_to_1)

#Task 11

random_vector = np.random.random(10)
random_vector.sort()
print(random_vector)

#Task 12

for dtype in [np.int8, np.int32, np.int64, np.float32, np.float64]:
    info = np.iinfo(dtype) if np.issubdtype(dtype, np.integer) else np.finfo(dtype)
    print(f"{dtype}: min {info.min}, max {info.max}")

#Task 13

float_array = np.array([1.5, 2.3, 3.9], dtype=np.float32)
int_array = float_array.astype(np.int32)
print(int_array)

#Task 14

matrix = np.random.rand(3, 3)
row_means = matrix.mean(axis=1, keepdims=True)
normalized_matrix = matrix - row_means
print(normalized_matrix)

#Task 15

def sort_by_nth_column(arr, n):
    return arr[arr[:, n].argsort()]

array = np.random.rand(5, 3)
sorted_array = sort_by_nth_column(array, 1)
print(sorted_array)

#Task16

def swap_rows(arr, row1, row2):
    arr[[row1, row2]] = arr[[row2, row1]]

array = np.array([[0, 1, 2], [3, 4, 5], [6, 7, 8]])
swap_rows(array, 0, 1)
print(array)

#Task17

def array_from_bincount(bincount):
    return np.repeat(np.arange(len(bincount)), bincount)

bincount = [2, 3, 1]
array = array_from_bincount(bincount)
print(array)