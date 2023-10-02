function isAnagram(sentence1,sentence2) {
    const str1 = sentence1.toLowerCase().split(' ').join('');
    const str2 = sentence2.toLowerCase().split(' ').join('');
    if (str1.length != str2.length) return false;


    const total = {};
    for (const letter of str1) {
        total[letter] = total[letter] +1 || 1;
    }
    for (const letter of str2) {
        total[letter] = total[letter] ? total[letter] -1 : -1;
    }

    const difference = Object.values(total);
    return difference.every((num) => num === 0);
}

const result = isAnagram('azdlow','asxasf')
console.log(result);