function integerAndFloat(num1, num2, num3){
    
    let sum = num1 + num2 + num3;
    let sumString = String(sum);
    let flag = true

    for(let i = 0; i < sumString.length; i++){

        if(sumString[i] === "."){
            flag = false
        }
    }
    if(flag === false){
        console.log(`${sum} - Float`)
    }else{
        console.log(`${sum} - Integer`)
    }

}
integerAndFloat(9, 100, 1)