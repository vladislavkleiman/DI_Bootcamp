class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return self.weight / self.age * 10

    def fight(self, other_dog):
        my_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight
        winner = self.name if my_power > other_power else other_dog.name
        return f"The winner is {winner}"



dog1 = Dog("Rex", 5, 30)
dog2 = Dog("Buddy", 3, 20)
dog3 = Dog("Lucy", 7, 25)


print(dog1.bark())
print(f"Rex's running speed: {dog1.run_speed()}")

print(dog2.bark())
print(f"Buddy's running speed: {dog2.run_speed()}")

print(dog3.bark())
print(f"Lucy's running speed: {dog3.run_speed()}")

print(dog1.fight(dog2))
print(dog2.fight(dog3))
