#ex 1

print("Hello world\n" * 4)

#ex 2

result = (99 ** 3) * 8
print(result)


#ex 3

5 < 3
 #False
3 == 3
#True
3 == "3"
#False
"3" > 3
#TypeError
"Hello" == "hello"
#False

#ex 4
computer_brand = "AOC"
print(f"I have a {computer_brand} computer")

#ex 5

name = "Vlad"
age = 27
shoe_size = 43

info = f"My name is {name}, I am {age} years old, and my shoe size is {shoe_size}."
print(info)

#ex 6

a = 10
b = 5

if a > b:
    print("Hello World")

#ex 7

number = int(input("Enter a number: "))

if number % 2 == 0:
    print(f"The number {number} is even.")
else:
    print(f"The number {number} is odd.")

#ex 8
user_name = input("What is your name? ")


my_name = "Vlad"

if user_name.lower() == my_name.lower():
    print("we have the same name!")
else:
    print("We don't have the same name!")

#ex 9

height_in_inches = float(input("Enter your height in inches: "))

height_in_cm = height_in_inches * 2.54

if height_in_cm >= 145:
    print("You are tall enough to ride the roller coaster!")
else:
    print("You need to grow some more to ride.")
