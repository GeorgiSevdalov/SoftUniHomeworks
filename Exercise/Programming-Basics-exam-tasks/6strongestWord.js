function stongestWord(input) {

    let index = 0;
    let command = input[index];
    let wordScore = 0;
    let maxSxore = 0;
    let strongestW = "";
    while (command !== "End of words") {
        let word = input[index];
        for (i = 0; i < word.length; i++) {
            let letter = word[i];
            let letterPoint = word[i].charCodeAt();
            wordScore += letterPoint;
        }
        if (word[0] === "A" || word[0] === "a" || word[0] === "E" || word[0] === "e" || word[0] === "I" || word[0] === "i" || word[0] === "O" || word[0] === "o" || word[0] === "U" || word[0] === "u" || word[0] === "Y" || word[0] === "y") {
            wordScore = wordScore * word.length;
        } else {
            wordScore = Math.floor(wordScore / word.length);
        }
        if (wordScore > maxSxore) {
            maxSxore = wordScore;
            strongestW = word;
        }
        wordScore = 0;
        index++;
        command = input[index];
    }
    console.log(`The most powerful word is ${strongestW} - ${maxSxore}`)
}
stongestWord(["Experience", "Most", "Powerful", "Word",
    "Is", "Experience", "End of words"])