function reverseAnArray(number, array) {
    let reversIndex = array.length - 1;
    let num = 0;
    let res = "";

    for (let i = reversIndex; i >= 0; i--) {
        if (i<= number -1) {
            num = String(array[i]);
            res += num + " ";
        }
    }
    console.log(res);
}
reverseAnArray(3, [10, 20, 30, 40, 50])