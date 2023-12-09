#challenge 1

word = input("Enter a word: ")

letter_indexes = {}

for index, letter in enumerate(word):
    if letter not in letter_indexes:
        letter_indexes[letter] = [index]
    else:
        letter_indexes[letter].append(index)

print(letter_indexes)


#challenge 2

def convert_price(price_str):
    """Convert price from string format to a number."""
    return float(price_str.replace("$", "").replace(",", ""))

def items_affordable(items, wallet):
    """Return a list of items that can be afforded with the amount in the wallet."""
    wallet_amount = convert_price(wallet)
    affordable_items = [item for item, price in items.items() if convert_price(price) <= wallet_amount]

    if not affordable_items:
        return "Nothing"
    else:
        return sorted(affordable_items)

# Example usage
items_purchase = {
    "Water": "$1",
    "Bread": "$3",
    "TV": "$1,000",
    "Fertilizer": "$20"
}
wallet = "$300"
print(items_affordable(items_purchase, wallet))

items_purchase = {
    "Apple": "$4",
    "Honey": "$3",
    "Fan": "$14",
    "Bananas": "$4",
    "Pan": "$100",
    "Spoon": "$2"
}
wallet = "$100"
print(items_affordable(items_purchase, wallet))

items_purchase = {
    "Phone": "$999",
    "Speakers": "$300",
    "Laptop": "$5,000",
    "PC": "$1200"
}
wallet = "$1"
print(items_affordable(items_purchase, wallet))
