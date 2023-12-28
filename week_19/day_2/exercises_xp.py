#ex1

def display_message():
    print("I am learning how to write Python functions and call them.")

display_message()

#ex2

def favorite_book(title):
    print(f"One of my favorite books is {title}.")

favorite_book("Alice in Wonderland")

#ex3

def describe_city(city, country='USA'):
    print(f"{city} is in {country}.")

describe_city('New York')
describe_city('Reykjavik', 'Iceland')

#ex4

import random

def compare_random_number(user_number):
    if 1 <= user_number <= 100:
        random_number = random.randint(1, 100)
        if user_number == random_number:
            print("Success! Both numbers are the same.")
        else:
            print(f"Fail! Your number was {user_number}, but the random number was {random_number}.")
    else:
        print("The number must be between 1 and 100.")

compare_random_number(25)

#ex5

def make_shirt(size='large', text='I love Python'):
    print(f"The size of the shirt is {size} and the text is '{text}'.")

make_shirt()

make_shirt(size='medium')

make_shirt(size='small', text='Python is Fun!')

#ex6

def show_magicians(magicians):
    for magician in magicians:
        print(magician)

def make_great(magicians):
    for i in range(len(magicians)):
        magicians[i] = magicians[i] + " the Great"

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

make_great(magician_names)

show_magicians(magician_names)


