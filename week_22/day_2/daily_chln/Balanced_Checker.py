def is_balanced(expr):
    matching_parentheses = {')': '(', '}': '{', ']': '['}
    stack = []

    for char in expr:
        if char in matching_parentheses.values():
            stack.append(char)
        elif char in matching_parentheses.keys():
            if not stack or stack[-1] != matching_parentheses[char]:
                return False
            stack.pop()

    return not stack

print(is_balanced("(1 + 2) * {[(3 / 4) - 5]}"))
print(is_balanced("[1 + 2) * (3 - 4)]"))
print(is_balanced("((1 + 2)"))
