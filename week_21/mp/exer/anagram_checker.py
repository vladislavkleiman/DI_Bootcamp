class AnagramChecker:
    def __init__(self):
        with open('wordlist.txt', 'r') as file:
            self.valid_words = set(file.read().split())

    def is_valid_word(self, word):
        return word.lower() in self.valid_words

    def get_anagrams(self, word):
        return [w for w in self.valid_words if self.is_anagram(word, w)]

    def is_anagram(self, word1, word2):
        return sorted(word1.lower()) == sorted(word2.lower()) and word1.lower() != word2.lower()
