class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

bengal_cat = Bengal("Bengal Cat", 3)
chartreux_cat = Chartreux("Chartreux Cat", 4)
siamese_cat = Siamese("Siamese Cat", 5)

all_cats = [bengal_cat, chartreux_cat, siamese_cat]

sara_pets = Pets(all_cats)

sara_pets.walk()
