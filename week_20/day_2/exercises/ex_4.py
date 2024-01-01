class Zoo:
    def __init__(self, zoo_name):
        self.animals = []
        self.name = zoo_name

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        for animal in self.animals:
            print(animal)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self):
        sorted_animals = sorted(self.animals)
        groups = {}
        for animal in sorted_animals:
            letter = animal[0]
            if letter not in groups:
                groups[letter] = [animal]
            else:
                groups[letter].append(animal)
        return {i + 1: groups[key] for i, key in enumerate(sorted(groups))}

    def get_groups(self):
        groups = self.sort_animals()
        for key in groups:
            print(f"{key}: {groups[key]}")

ramat_gan_safari = Zoo("Ramat Gan Safari")

ramat_gan_safari.add_animal("Giraffe")
ramat_gan_safari.add_animal("Ape")
ramat_gan_safari.add_animal("Bear")
ramat_gan_safari.add_animal("Baboon")
ramat_gan_safari.add_animal("Cougar")
ramat_gan_safari.add_animal("Cat")
ramat_gan_safari.add_animal("Eel")
ramat_gan_safari.add_animal("Emu")

print("Animals in the zoo:")
ramat_gan_safari.get_animals()

ramat_gan_safari.sell_animal("Bear")
print("\nAnimals in the zoo after selling one:")
ramat_gan_safari.get_animals()

print("\nAnimal groups:")
ramat_gan_safari.get_groups()
