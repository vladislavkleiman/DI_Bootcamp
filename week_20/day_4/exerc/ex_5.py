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

class TheIncredibles(Family):
    def __init__(self, last_name, members):
        super().__init__(last_name, members)

    def use_power(self, name):
        for member in self.members:
            if member['name'] == name:
                if member['age'] >= 18:
                    print(f"{member['name']}'s power is: {member['power']}")
                else:
                    raise Exception(f"{member['name']} is not over 18 years old")
                return
        print(f"No family member named {name} found.")

    def incredible_presentation(self):
        print("Here is our powerful family:")
        super().family_presentation()
        for member in self.members:
            print(f"Incredible Name: {member['incredible_name']}, Power: {member['power']}")


incredibles_members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
]


incredibles_family = TheIncredibles("Incredibles", incredibles_members)


incredibles_family.incredible_presentation()


incredibles_family.born(name='Jack', age=0, gender='Male', is_child=True, power='Unknown Power', incredible_name='Baby Jack')


incredibles_family.incredible_presentation()


try:
    incredibles_family.use_power('Michael')
except Exception as e:
    print(e)
