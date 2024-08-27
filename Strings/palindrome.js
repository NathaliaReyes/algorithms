function palindrome(word) {
    let wordReversed = word.split('').reverse().join('');
    // console.log(wordReversed);

    if (word === wordReversed) {
        return true;
    }
    return false;

}

console.log(palindrome('hoasadoh'));