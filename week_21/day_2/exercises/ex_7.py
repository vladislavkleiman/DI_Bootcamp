from faker import Faker

fake = Faker()

users = []

def add_fake_user():
    user = {
        "name": fake.name(),
        "address": fake.address(),
        "language_code": fake.language_code()
    }
    users.append(user)

for _ in range(5):
    add_fake_user()

for user in users:
    print(user)
