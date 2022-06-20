function equalArrays(arr1, arr2) {
    let sum = 0;
    let flag = true;
    
    if (arr1.length === arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] === arr2[i]) {
                let num = Number(arr1[i]);
                sum += num;
            } else {
                console.log(`Arrays are not identical. Found difference at ${i} index`);
                flag = false
            }
        }
        if (flag === true) {
            console.log(`Arrays are identical. Sum: ${sum}`)
        }
    }else{
        if(arr1.length > arr2.length){
            console.log(`Arrays are not identical. Found difference at ${arr2.length} index`);
        }else{
            console.log(`Arrays are not identical. Found difference at ${arr1.length} index`);
        }
    }
}
equalArrays(['10','20','30','-12'], ['10','20','30','-12'])