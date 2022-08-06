function computerStr(input){
    let arrOfStr = input.split(" ");
    let arrOfNum =[];
    let sum = 0;
    for(el of arrOfStr){
        let curNum = Number(el)
        arrOfNum.push(curNum);
        sum+=curNum
    }
    let averSum = sum / arrOfNum.length;  
    arrOfNum = arrOfNum
        .filter(el => el >= averSum)
        .sort((a,b) => b-a)
        .slice(0, 5)

        return arrOfNum.length > 0 ? arrOfNum.join(" ") : 'No';

    

}
console.log(computerStr('10 20 30 40 50'))
computerStr('5 2 3 4 -10 30 40 50 20 50 60 60 51')
computerStr('1')