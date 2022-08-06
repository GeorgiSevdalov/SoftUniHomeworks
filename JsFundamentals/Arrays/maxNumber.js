function maxNum(array){
    let finArr = [];
    let arL = array.length
    

    for (let i = 0; i < arL; i++) {
        let num1 = array[i];
        let isLarge = true
        for (let j = i + 1; j < arL; j++) {
            let num2 = array[j];
            if (num2 >= num1) {
                isLarge = false;
            }
        }
        if (isLarge) {
            finArr.push(num1)
        }
    }
    console.log(finArr.join(' '));
}

maxNum([27, 19, 42, 2, 13, 45, 48])