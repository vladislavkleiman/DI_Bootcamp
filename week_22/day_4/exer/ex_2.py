from collections import deque

def check_palindrome(s: str) -> bool:
    formatted_str = ''.join(char.lower() for char in s if char.isalnum())

    char_deque = deque(formatted_str)

    while len(char_deque) > 1:
        if char_deque.popleft() != char_deque.pop():
            return False

    return True

print(check_palindrome("Racecar"))
print(check_palindrome("hello"))
