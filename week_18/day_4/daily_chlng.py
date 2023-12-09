#Challenge 1

number = int(input("Enter a number: "))
length = int(input("Enter the length: "))

multiples = [number * i for i in range(1, length + 1)]

print(multiples)

#Challenge 2

user_string = input("Enter a word: ")

new_string = ""

for char in user_string:
    if not new_string or new_string[-1] != char:
        new_string += char

print(new_string)
