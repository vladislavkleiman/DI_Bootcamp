import string
import random

def generate_random_string(length=5):
    letters = string.ascii_letters
    random_string = ''.join(random.choice(letters) for i in range(length))
    return random_string

print(generate_random_string(5))
