function printMassage() {
    let phrase = prompt("type several words, separated by commas.");
    let words = phrase.split(",");
    trimArr(words);
    let maxLength = getMaxLenght(words);
    let line = "";
    for (let i = 0; i < words.length + 2; i++) {
        for (let j = 0; j < maxLength + 4; j++) {
            if (i == 0 || i == words.length + 1) {
                line += "*";
            } else {
                let word = words[i - 1];
                let w_spaces = getWhitespaces(word, maxLength);
                line = "* " + word + w_spaces + " *";
            }
        }
        console.log(line);
        line = "";
    }
}

printMassage();

function trimArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].trim();
    }
}

function getMaxLenght(stringArr) {
    let max = 0;
    for (let item of stringArr) {
        if (item.length > max) {
            max = item.length;
        }
    }
    return max;
}

function getWhitespaces(word, maxlength) {
    let length = maxlength - word.length;
    let whitespaces = "";
    for (let i = 0; i < length; i++) {
        whitespaces += " ";
    }
    return whitespaces;
}