import pandas as pd

temperature = [30, 31, 29, 32, 33, 34, 28, 27, 25, 35]
humidity = [80, 75, 70, 85, 90, 80, 75, 60, 65, 70]
wind_speed = [5, 6, 7, 8, 9, 4, 10, 5, 6, 7]

date_rng = pd.date_range(start='2021-01-01', end='2021-01-10', freq='D')

weather_data = pd.DataFrame({
    'Date': date_rng,
    'Temperature': temperature,
    'Humidity': humidity,
    'Wind_Speed': wind_speed
})

frequency = pd.infer_freq(weather_data['Date'])
print(f"The frequency of the dataset is {frequency}.")

weather_data.set_index('Date', inplace=True)

print(weather_data)
