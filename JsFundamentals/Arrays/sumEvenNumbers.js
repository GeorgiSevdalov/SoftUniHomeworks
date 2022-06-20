function sumEvenNumbers(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        let digit = Number(array[i]);
        if(digit % 2 === 0){
            sum+= digit;
        }
    }
    console.log(sum)
}
sumEvenNumbers(['1', '2', '3', '4', '5', '6'])