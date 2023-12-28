def sort_words(input_string):
    words = sorted([word for word in input_string.split(',')])
    return ','.join(words)

input_string = "without,hello,bag,world"
sorted_string = sort_words(input_string)
print(sorted_string)
