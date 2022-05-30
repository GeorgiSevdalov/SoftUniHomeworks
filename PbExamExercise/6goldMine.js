function examTrain(input) {
    let index = 0;
    let location = Number(input[index]);
    index++;
    let locationCounter = 1;
    while (locationCounter <= location) {
        locationCounter++;
        let averageYield = Number(input[index]);
        let yieldForlocat = 0
        index++;
        let numberOfDays = Number(input[index]);
        index++
        let daycounter = 1;
        while (daycounter <= numberOfDays) {
            daycounter++;
            let yieldPerDay = Number(input[index]);
            yieldForlocat += yieldPerDay;
            index++;
        }
        if((yieldForlocat/numberOfDays) >= averageYield){
            console.log(`Good job! Average gold per day: ${(yieldForlocat/numberOfDays).toFixed(2)}.`)
        }else{
            console.log(`You need ${(averageYield - (yieldForlocat/numberOfDays)).toFixed(2)} gold.`)
        }
    }
}
examTrain(["1",
"5",
"3",
"10",
"1",
"3"])