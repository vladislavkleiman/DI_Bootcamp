import math

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
            self.diameter = 2 * radius
        elif diameter is not None:
            self.radius = diameter / 2
            self.diameter = diameter
        else:
            raise ValueError("Must specify either radius or diameter")

    def area(self):
        return math.pi * self.radius ** 2

    def __str__(self):
        return f"Circle(radius={self.radius}, diameter={self.diameter}, area={self.area()})"

    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(radius=self.radius + other.radius)
        raise TypeError("Can only add another Circle")

    def __gt__(self, other):
        return self.radius > other.radius

    def __eq__(self, other):
        return self.radius == other.radius

    def __lt__(self, other):
        return self.radius < other.radius


c1 = Circle(radius=5)
c2 = Circle(diameter=10)
c3 = Circle(radius=3)

print(c1)
print(c1 + c2)
print(c1 > c3)
print(c1 == c2)


circles = [c3, c1, c2]
circles.sort()
print(circles)
