import random

def get_random_temp(season):
    if season == 'winter':
        return random.randint(-10, 16)
    elif season == 'spring':
        return random.randint(0, 23)
    elif season == 'summer':
        return random.randint(20, 40)
    elif season == 'autumn':
        return random.randint(0, 32)
    else:
        return random.randint(-10, 40)

def main():
    season = input("Please enter a season (summer, autumn, winter, spring): ").lower()
    temp = get_random_temp(season)

    print(f"The temperature right now is {temp} degrees Celsius.")

    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif 0 <= temp <= 16:
        print("Quite chilly! Don’t forget your coat.")
    elif 17 <= temp <= 23:
        print("Nice and cool. Perfect for a light jacket.")
    elif 24 <= temp <= 32:
        print("It's quite warm. Dress lightly.")
    elif temp > 32:
        print("Very hot! Stay hydrated and avoid the sun during peak hours.")

main()

