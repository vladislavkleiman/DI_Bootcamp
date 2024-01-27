import pandas as pd

data = {
    'evolution': ['Ivysaur', 'Charmeleon', 'Wartortle', 'Metapod'],
    'hp': [45, 39, 44, 45],
    'name': ['Bulbasaur', 'Charmander', 'Squirtle', 'Caterpie'],
    'pokedex': ['yes', 'no', 'yes', 'no'],
    'type': ['grass', 'fire', 'water', 'bug']
}

pokemon = pd.DataFrame(data)

pokemon = pokemon[['name', 'type', 'hp', 'evolution', 'pokedex']]

print(pokemon)
