function secondEx(arr) {
    let carInfo = arr.shift().split(">>");
    let index = 0;
    let command = carInfo[index];
    // console.log(carInfo)
    // console.log(command)
    let taxF;
    let taxH;
    let taxS;
    let allTax = 0;
    let kmt;
    while (index < carInfo.length) {
        let nextItem = command.split(' ')
        let typeCar = nextItem.shift();
        let yearsOfTax = Number(nextItem[0]);
        let kilometers = Number(nextItem[1]);
        switch (typeCar) {
            case 'family':
                if(kilometers >= 3000){
                    kmt = Number(Math.floor(kilometers/3000))
                    taxF = (50 - yearsOfTax * 5) + (12 * kmt);
                }else{
                    taxF = (50 - yearsOfTax * 5);
                }
                allTax += taxF;
                console.log(`A ${typeCar} car will pay ${taxF.toFixed(2)} euros in taxes.`)
                break;
            case 'heavyDuty':
                if(kilometers >= 9000){
                    kmt = Number(Math.floor(kilometers/9000))
                    taxH = (80 - yearsOfTax * 8) + (14 * kmt);
                }else{
                    taxH = (80 - yearsOfTax * 8);
                }
                allTax += taxH;
                console.log(`A ${typeCar} car will pay ${taxH.toFixed(2)} euros in taxes.`)
                break;
            case 'sports':
                if(kilometers >= 3000){
                    kmt = Number(Math.floor(kilometers/2000))
                    taxS = (100 - yearsOfTax * 9) + (18 * kmt);
                }else{
                    taxS = (100 - yearsOfTax * 9);
                }
                allTax += taxS;
                console.log(`A ${typeCar} car will pay ${taxS.toFixed(2)} euros in taxes.`)
                break;
            default:
                console.log("Invalid car type.");
                break;
        }
        index++;
        command = carInfo[index];
    }
    console.log(`The National Revenue Agency will collect ${allTax.toFixed(2)} euros in taxes.`)
}
secondEx(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410'])
// secondEx([ 'family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012' ])