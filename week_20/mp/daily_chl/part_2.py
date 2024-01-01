import random

class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __repr__(self):
        return f"{self.value} of {self.suit}"




class Deck:
    def __init__(self):
        suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
        values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
        self.cards = [Card(suit, value) for suit in suits for value in values]

    def shuffle(self):
        if len(self.cards) < 52:
            raise ValueError("Cannot shuffle a deck with less than 52 cards")
        random.shuffle(self.cards)

    def deal(self):
        if len(self.cards) == 0:
            raise ValueError("All cards have been dealt")
        return self.cards.pop()


deck = Deck()
deck.shuffle()

card = deck.deal()
print(f"Dealt card: {card}")

print(f"Cards remaining in the deck: {len(deck.cards)}")
