class Text:
    def __init__(self, text):
        self.text = text
        self.words = self._preprocess_text(text)

    def _preprocess_text(self, text):
        cleaned_text = ''.join(char.lower() if char.isalnum() or char.isspace() else ' ' for char in text)
        return cleaned_text.split()

    def frequency_of_word(self, word):
        word = word.lower()
        word_count = self.words.count(word)
        if word_count == 0:
            return None
        return word_count

    def most_common_word(self):
        if not self.words:
            return None
        return max(set(self.words), key=self.words.count)

    def unique_words(self):
        return list(set(self.words))

text = "A good book would sometimes cost as much as a good house."
text_analysis = Text(text)

print("Frequency of 'good':", text_analysis.frequency_of_word('good'))
print("Most common word:", text_analysis.most_common_word())
print("Unique words:", text_analysis.unique_words())
