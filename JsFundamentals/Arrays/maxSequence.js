function maxSequence(array){
let maxSequence = [];
    for(let i = 0; i < array.length; i++){
        let currentSequemce = [];
        for(let j = i ; j < array.length; j++){
            if(array[i]===array[j]){
                currentSequemce.push(array[i])
            }else{
                break;
            }
        }
        if(currentSequemce.length > maxSequence.length){
            maxSequence = currentSequemce;
        }
    }
    console.log(maxSequence.join(' '));

}
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])