function common(array1, array2){
    for (const el of array1) {
        if(array2.includes(el)){
            console.log(el);
        }
    }

}
common(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)