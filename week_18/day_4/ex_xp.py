#ex 1

my_fav_numbers = {3, 7, 9, 15, 42}

my_fav_numbers.add(11)
my_fav_numbers.add(23)

my_fav_numbers.pop()

friend_fav_numbers = {4, 8, 12, 16, 20}

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

print("Our favorite numbers:", our_fav_numbers)

#ex 2

original_tuple = (1, 2, 3)
new_elements = (4, 5)

new_tuple = original_tuple + new_elements

print(new_tuple)

#ex 3
basket = ["Banana", "Apples", "Oranges", "Blueberries"]

basket.remove("Banana")

basket.remove("Blueberries")

basket.append("Kiwi")

basket.insert(0, "Apples")

apple_count = basket.count("Apples")

print("Number of Apples in the basket:", apple_count)

basket.clear()

print("Basket after emptying:", basket)

#ex 4

sequence = [x * 0.5 for x in range(3, 11)]
print(sequence)


#ex 5

for number in range(1, 21):
    print(number)


for number in range(1, 21):
    if number % 2 == 0:
        print(number)


#ex 6

my_name = "Vlad"

while True:
    user_name = input("Please enter your name: ")

    if user_name == my_name:
        print("Hey, that's my name too!")
        break

#ex 7

favorite_fruits_input = input("Enter your favorite fruits, separated by a space: ")

favorite_fruits = favorite_fruits_input.split()

chosen_fruit = input("Enter the name of a fruit: ")

if chosen_fruit in favorite_fruits:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy.")

#ex 8

toppings = []
topping_price = 2.5
base_price = 10

print("Please enter toppings for your pizza. Enter 'quit' when you are done.")

while True:
    topping = input("Add a topping: ")

    if topping.lower() == 'quit':
        break

    toppings.append(topping)
    print(f"{topping} added to your pizza!")

total_price = base_price + topping_price * len(toppings)

print("\nYour pizza toppings are:")
for t in toppings:
    print(f" - {t}")

print(f"Total price: ${total_price:.2f}")

#ex 9

num_family_members = int(input("How many family members are there? "))

total_cost = 0

for i in range(num_family_members):
    age = int(input(f"Enter the age of family member {i+1}: "))
    if age < 3:
        continue
    elif 3 <= age <= 12:
        total_cost += 10
    else:
        total_cost += 15

print(f"The total cost for the family's tickets is: ${total_cost}")

teenagers = ["Alice", "Bob", "Charlie", "Diana", "Ethan"]

allowed_to_watch = []


for teen in teenagers:
    age = int(input(f"Enter the age of {teen}: "))
    if 16 <= age <= 21:
        allowed_to_watch.append(teen)


print("Teenagers allowed to watch the movie:", allowed_to_watch)

#ex 10

sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

finished_sandwiches = []

for sandwich in sandwich_orders:
    print(f"I made your {sandwich.lower()}")
    finished_sandwiches.append(sandwich)

print("\nAll sandwiches made:")
for sandwich in finished_sandwiches:
    print(sandwich)


