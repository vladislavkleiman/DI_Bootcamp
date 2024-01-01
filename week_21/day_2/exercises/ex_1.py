class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        return f"{self.amount} {self.currency}s"

    def __int__(self):
        return self.amount

    def __repr__(self):
        return f"{self.amount} {self.currency}s"

    def __add__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
            return Currency(self.currency, self.amount + other.amount)
        elif isinstance(other, int):
            return Currency(self.currency, self.amount + other)
        else:
            raise TypeError("Unsupported operand type(s) for +")

    def __iadd__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
            self.amount += other.amount
        elif isinstance(other, int):
            self.amount += other
        else:
            raise TypeError("Unsupported operand type(s) for +=")
        return self
