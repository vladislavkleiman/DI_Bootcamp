# Filename: dog.py
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


# Filename: pet_dog.py
from dog import Dog
import random

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        dog_names = [self.name] + [dog.name for dog in args]
        print(f"{', '.join(dog_names)} all play together.")

    def do_a_trick(self):
        if self.trained:
            tricks = [f"{self.name} does a barrel roll",
                      f"{self.name} stands on his back legs",
                      f"{self.name} shakes your hand",
                      f"{self.name} plays dead"]
            print(random.choice(tricks))

# Example usage
dog1 = PetDog("Rex", 5, 30)
dog2 = PetDog("Buddy", 3, 20)
dog3 = PetDog("Lucy", 7, 25)

dog1.train()
dog2.train()

dog1.play(dog2, dog3)

dog1.do_a_trick()
dog2.do_a_trick()
