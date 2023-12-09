user_string = input("Enter a string: ")


if len(user_string) < 10:
    print("String not long enough")
elif len(user_string) > 10:
    print("String too long")
else:
    print("Perfect string")

    print("First character:", user_string[0])
    print("Last character:", user_string[-1])

    for i in range(1, len(user_string) + 1):
        print(user_string[:i])
