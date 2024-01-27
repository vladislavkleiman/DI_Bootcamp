import pandas as pd

users_url = "https://raw.githubusercontent.com/justmarkham/DAT8/master/data/u.user"
users = pd.read_csv(users_url, sep='|')

mean_age_per_occupation = users.groupby('occupation')['age'].mean()
print(mean_age_per_occupation)
