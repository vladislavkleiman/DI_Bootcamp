import requests
import time

def measure_load_time(url):
    try:
        start_time = time.time()
        response = requests.get(url)
        end_time = time.time()
        return end_time - start_time
    except requests.RequestException as e:
        return f"An error occurred: {e}"

websites = ["https://www.google.com", "https://www.ynet.co.il", "https://www.imdb.com"]

for site in websites:
    load_time = measure_load_time(site)
    print(f"Time taken to load {site}: {load_time} seconds")
