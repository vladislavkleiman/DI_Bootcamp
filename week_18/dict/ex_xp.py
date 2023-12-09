#ex 1

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

result_dict = dict(zip(keys, values))

print(result_dict)

#ex 2

family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

total_cost = 0

for name, age in family.items():
    if age < 3:
        ticket_price = 0
    elif 3 <= age <= 12:
        ticket_price = 10
    else:
        ticket_price = 15
    total_cost += ticket_price
    print(f"{name} has to pay: ${ticket_price}")

print(f"The family's total cost for the movies is: ${total_cost}")

#ex 3

brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}

brand["number_stores"] = 2
print("Zara's clients are men, women, children, and also include home accessories.")

brand["country_creation"] = "Spain"
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")
del brand["creation_date"]

print(brand["international_competitors"][-1])

print("The major clothes colors in the US for Zara are:", brand["major_color"]["US"])
print("Number of key-value pairs in 'brand':", len(brand))
print("Keys of the 'brand' dictionary:", brand.keys())
more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}

brand.update(more_on_zara)

print("Number of stores:", brand["number_stores"])

#ex 4


users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

disney_users_A = {user: i for i, user in enumerate(users)}
print("disney_users_A:", disney_users_A)


disney_users_B = {i: user for i, user in enumerate(users)}
print("disney_users_B:", disney_users_B)


disney_users_C = {user: i for i, user in enumerate(sorted(users))}
print("disney_users_C:", disney_users_C)


disney_users_A_i = {user: i for i, user in enumerate(users) if "i" in user}
print("disney_users_A with 'i':", disney_users_A_i)


disney_users_A_mp = {user: i for i, user in enumerate(users) if user.lower().startswith(("m", "p"))}
print("disney_users_A starting with 'm' or 'p':", disney_users_A_mp)

