def administer_quiz(data):
    correct_answers = 0
    wrong_answers = []

    for item in data:
        user_answer = input(item["question"] + " ")
        if user_answer.lower() == item["answer"].lower():
            correct_answers += 1
        else:
            wrong_answers.append({"question": item["question"], "correct_answer": item["answer"], "your_answer": user_answer})

    return correct_answers, wrong_answers

def provide_feedback(correct_answers, wrong_answers):
    print(f"\nYou got {correct_answers} out of {len(data)} questions correct.")

    if wrong_answers:
        print("\nHere are the questions you got wrong:")
        for item in wrong_answers:
            print(f"Question: {item['question']}")
            print(f"Your answer: {item['your_answer']}")
            print(f"Correct answer: {item['correct_answer']}\n")
    else:
        print("Congratulations, you got all questions right!")

data = [
    {"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
    {"question": "Where did Obi-Wan take Luke after his birth?", "answer": "Tatooine"},
    {"question": "What year did the first Star Wars movie come out?", "answer": "1977"},
    {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
    {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"},
    {"question": "What species is Chewbacca?", "answer": "Wookiee"}
]

correct, wrong = administer_quiz(data)
provide_feedback(correct, wrong)
