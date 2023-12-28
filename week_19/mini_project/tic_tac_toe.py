def display_board(board):
    for row in board:
        print(" | ".join(row))
        print("-" * 5)

def player_input(board, player):
    valid_input = False
    while not valid_input:
        player_move = input(f"Player {player}, enter your move (row,col): ")
        row, col = map(int, player_move.split(','))
        if 0 <= row < 3 and 0 <= col < 3 and board[row][col] == " ":
            valid_input = True
        else:
            print("Invalid move. Try again.")
    return row, col

def check_win(board):
    for i in range(3):
        if board[i][0] == board[i][1] == board[i][2] != " " or \
           board[0][i] == board[1][i] == board[2][i] != " ":
            return True
    if board[0][0] == board[1][1] == board[2][2] != " " or \
       board[0][2] == board[1][1] == board[2][0] != " ":
        return True
    return False


def play():
    board = [[" " for _ in range(3)] for _ in range(3)]
    player = "X"
    moves = 0

    while moves < 9:
        display_board(board)
        row, col = player_input(board, player)
        board[row][col] = player
        if check_win(board):
            display_board(board)
            print(f"Player {player} wins!")
            return
        player = "O" if player == "X" else "X"
        moves += 1

    print("It's a tie!")

play()

