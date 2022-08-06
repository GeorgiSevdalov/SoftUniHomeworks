function evenOdd(array){
    let index = 0;
    let finArr = [];
    let sum = 0;
    let sum2 = 0;

    while(index < array.length){
        let el = array[index];
        let toPush = 0;
        if(el%2===0){
            toPush = el + index;
        }else{
            toPush = el - index;
        }
        finArr.push(toPush)
        index++;
    }
    array.forEach(element => {
        sum += element;
        
    });
    finArr.forEach(element => {
        sum2 += element;
    })

    console.log(finArr);
    console.log(sum);
    console.log(sum2);

}


evenOdd([5, 15, 23, 56, 35])