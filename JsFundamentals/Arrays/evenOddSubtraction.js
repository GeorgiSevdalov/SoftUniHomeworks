function evenOddSubtraction(array) {
    let sumOdd = 0;
    let sumEven = 0;
    for (let i = 0; i < array.length; i++) {
        let digit = Number(array[i]);
        if (digit % 2 === 0) {
            sumEven += digit;
        }else{
            sumOdd +=digit;
        }
    }
    console.log(sumEven - sumOdd)
}