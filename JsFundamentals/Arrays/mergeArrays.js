function mergeArrays(arr1, arr2) {
    let finalArray = [];
    let lenArr = arr1.length;
    for (let i = 0; i < lenArr; i++) {
        if (i % 2 === 0) {
            finalArray[i] = Number(arr1[i]) + Number(arr2[i]);
        } else {
            finalArray[i] = arr1[i] + arr2[i]
        }
    }
    console.log(finalArray.join(' - '));
}
mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
)