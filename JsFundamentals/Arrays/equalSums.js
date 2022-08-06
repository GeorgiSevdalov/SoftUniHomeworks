function equalSums(array) {
    let foutInd = 'no';
    let arrLen = array.length;

    for (let i = 0; i < arrLen; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let l = 0; l < i; l++) {
            leftSum += array[l];
        }
        for (let j = i + 1; j < arrLen; j++) {
            rightSum += array[j];
        }

        if(leftSum ===rightSum){
            foutInd = i;
        }
    }
    console.log(foutInd);
}
    equalSums([1, 2, 3, 3])