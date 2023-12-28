matrix = [
    ['7', 'i', 'i'],
    ['T', 's', 'x'],
    ['h', '%', '?'],
    ['i', ' ', '#'],
    ['s', 'M', ' '],
    ['$', 'a', ' '],
    ['#', 't', '%'],
    ['^', 'r', '!']
]

def decode_matrix(m):
    decoded_message = ''
    for col in range(len(m[0])):
        for row in range(len(m)):
            if m[row][col].isalpha():
                decoded_message += m[row][col]
            elif len(decoded_message) > 0 and decoded_message[-1] != ' ':
                decoded_message += ' '
    return decoded_message


secret_message = decode_matrix(matrix)
print(secret_message)
