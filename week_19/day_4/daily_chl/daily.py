def divide_by_zero():
    try:
        return 5 / 0
    except ZeroDivisionError:
        return "Error: Division by zero is not allowed."

result = divide_by_zero()
print(result)
