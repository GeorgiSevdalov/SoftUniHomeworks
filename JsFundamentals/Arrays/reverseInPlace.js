function reverseInPlace(array){
    let revValue = array.length -1;
    let res="";
    for(let i = revValue; i>=0; i--){
        res += array[i] + " ";
    }
    console.log(res);
}
reverseInPlace(['a', 'b', 'c', 'd', 'e'])