function sumOfOddNumbers(digit){
    let sum = 0;
    let counter = 0
    while (counter !== digit){
        for (let i=1; i<= Number.MAX_SAFE_INTEGER; i++){
            if(i % 2 !== 0){
                counter++;
                sum+=i;
                console.log(i)
            }
            if(counter===digit){
                break;
            }
        }
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5)