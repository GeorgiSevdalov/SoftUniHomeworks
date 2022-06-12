function amazingNumbers(number) {
    let numbStr = String(number)
    let sum = 0;
    for (let i = 0; i < numbStr.length; i++) {
        let returnToNum = Number(numbStr[i]);
        sum += returnToNum;
    }
    let sumStr = String(sum)
    let flag = false;
    for(let m = 0; m < sumStr.length; m++){
        if(sumStr[m] == 9){
            flag = true;
        }
    }
    if(sum === 9 || flag === true){
        console.log(`${number} Amazing? True`)
    }else{
        console.log(`${number} Amazing? False`)
    }
}
amazingNumbers(583472 )