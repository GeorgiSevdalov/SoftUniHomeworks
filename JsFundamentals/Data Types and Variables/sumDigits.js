function sumDigits(num) {
    let strNum = String(num);
    let sum = 0
    for (let i = 0; i < strNum.length; i++) {
        sum += Number(strNum[i])
    }
    console.log(sum)
}