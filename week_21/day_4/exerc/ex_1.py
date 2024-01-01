import random

def get_words_from_file():
    try:
        with open('sowpods.txt', 'r') as file:
            words = file.read().splitlines()
        return words
    except FileNotFoundError:
        print("File not found. Please ensure 'sowpods.txt' is in the current directory.")
        exit()

def get_random_sentence(length):
    words = get_words_from_file()
    sentence = ' '.join(random.choice(words) for _ in range(length)).lower()
    return sentence

def main():
    print("This program generates a random sentence.")
    try:
        length = int(input("Enter the length of the sentence (between 2 and 20): "))
        if 2 <= length <= 20:
            print(get_random_sentence(length))
        else:
            print("Error: Length must be between 2 and 20.")
    except ValueError:
        print("Error: Please enter a valid integer.")

if __name__ == "__main__":
    main()
