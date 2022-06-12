function triplesOfLatinLetters(numberInStrig) {
    let num = Number(numberInStrig);
    let firstLetter = '';
    let secondLetter = '';
    let thirdLetter = '';
    for (let i = 0; i < num; i++) {
        firstLetter = String.fromCharCode(97 + i)
        for (let m = 0; m < num; m++) {
            secondLetter = String.fromCharCode(97 + m)
            for (let n = 0; n < num; n++) {
                thirdLetter = String.fromCharCode(97 + n)
                console.log(firstLetter + secondLetter + thirdLetter);
            }
        }
    }
}
triplesOfLatinLetters("3")
 // let letter = String.fromCharCode(97 + i)