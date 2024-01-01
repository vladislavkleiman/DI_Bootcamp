import datetime

def minutes_lived(birthdate_str):
    birthdate = datetime.datetime.strptime(birthdate_str, "%Y-%m-%d")

    now = datetime.datetime.now()

    time_lived = now - birthdate

    minutes = time_lived.total_seconds() / 60

    print(f"You have lived for approximately {int(minutes):,} minutes.")

birthdate = input("Enter your birthdate (YYYY-MM-DD): ")
minutes_lived(birthdate)
