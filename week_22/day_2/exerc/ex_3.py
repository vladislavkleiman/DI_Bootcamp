def binary_search(numbers: list, value: int) -> int:
    low = 0
    high = len(numbers) - 1

    while low <= high:
        mid = (low + high) // 2
        if numbers[mid] == value:
            return mid
        elif numbers[mid] < value:
            low = mid + 1
        else:
            high = mid - 1

    return -1

numbers = [1, 3, 5, 7, 9, 11]
index = binary_search(numbers, 7)
print(index)
