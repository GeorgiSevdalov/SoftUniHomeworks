function specialNumbers(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum = 0;
        let strNum = String(i)
        for(let m = 0; m < strNum.length; m++){
        let againNum = Number(strNum[m]);
        sum += againNum;
        }
        if(sum === 5 || sum === 7 || sum === 11){
            console.log(`${i} -> True`)
        }else{
            console.log(`${i} -> False`)
        }
    }
}
specialNumbers(15)