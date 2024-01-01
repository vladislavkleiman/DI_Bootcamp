def word_frequency(input_str):
    words = input_str.split()

    frequency = {}

    for word in words:
        if word in frequency:
            frequency[word] += 1
        else:
            frequency[word] = 1

    return frequency

input_str = "apple orange apple banana orange apple"
result = word_frequency(input_str)
print(result)
