class Farm:
    def __init__(self, name):
        self.name = name
        self.animals = {}

    def add_animal(self, animal, count=1):
        if animal in self.animals:
            self.animals[animal] += count
        else:
            self.animals[animal] = count

    def get_info(self):
        info = f"{self.name}'s farm\n\n"
        for animal, count in self.animals.items():
            info += f"{animal} : {count}\n"
        info += "\n\tE-I-E-I-0!"
        return info

    def get_animal_types(self):
        return sorted([animal for animal in self.animals])

    def get_short_info(self):
        animal_types = self.get_animal_types()
        animals_string = ', '.join(animal_types[:-1]) + ' and ' + animal_types[-1] + 's.'
        return f"{self.name}'s farm has {animals_string}"


macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)


print(macdonald.get_info())


print(macdonald.get_animal_types())
print(macdonald.get_short_info())

