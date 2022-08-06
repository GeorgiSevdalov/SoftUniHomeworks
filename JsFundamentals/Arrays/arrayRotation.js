function arrayRotation(array,num){
    while(num > 0){
        let el = array.shift()
        array.push(el);
        num--
    }
    console.log(array.join(' , '));
}
arrayRotation([51, 47, 32, 61, 21], 2)