import datetime

def time_until_january_first():
    now = datetime.datetime.now()

    next_year = now.year + 1
    january_first = datetime.datetime(next_year, 1, 1)

    time_left = january_first - now

    days = time_left.days
    seconds = time_left.seconds
    hours = seconds // 3600
    minutes = (seconds % 3600) // 60
    seconds = seconds % 60

    print(f"The 1st of January is in {days} days and {hours:02}:{minutes:02}:{seconds:02} hours.")

time_until_january_first()
