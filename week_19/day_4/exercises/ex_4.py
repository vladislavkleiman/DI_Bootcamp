def sum_pattern(x):
    str_x = str(x)

    return int(str_x) + int(str_x * 2) + int(str_x * 3) + int(str_x * 4)

result = sum_pattern(3)
print(result)
