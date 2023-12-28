def get_age(year, month, day):
    current_year = 2023
    current_month = 12

    age = current_year - year - ((current_month, 31) < (month, day))
    return age

def can_retire(gender, date_of_birth):
    year, month, day = map(int, date_of_birth.split('/'))
    age = get_age(year, month, day)

    if gender == 'm' and age >= 67:
        return True
    elif gender == 'f' and age >= 62:
        return True
    else:
        return False


gender = input("Please enter your gender (m/f): ").lower()
date_of_birth = input("Please enter your date of birth (yyyy/mm/dd): ")

if can_retire(gender, date_of_birth):
    print("You are eligible to retire.")
else:
    print("You are not eligible to retire yet.")
