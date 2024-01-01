import datetime

def display_current_date():
    current_date = datetime.date.today()
    formatted_date = current_date.strftime("%Y-%m-%d")
    print("Current Date:", formatted_date)

display_current_date()
