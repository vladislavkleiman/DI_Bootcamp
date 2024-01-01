class Family:
    def __init__(self, last_name, members):
        self.last_name = last_name
        self.members = members

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations on the new addition to the {self.last_name} family!")

    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] >= 18
        return False

    def family_presentation(self):
        print(f"The {self.last_name} Family:")
        for member in self.members:
            print(f"Name: {member['name']}, Age: {member['age']}, Gender: {member['gender']}, Is Child: {'Yes' if member['is_child'] else 'No'}")

members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
]

smith_family = Family("Smith", members)


smith_family.family_presentation()


smith_family.born(name='John', age=0, gender='Male', is_child=True)


smith_family.family_presentation()


print(f"Is Michael over 18? {'Yes' if smith_family.is_18('Michael') else 'No'}")
