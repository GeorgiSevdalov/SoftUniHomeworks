function firstEx(arr) {
    let amountExp = arr.shift();
    let coutBattles = arr.shift();
    let exp = 0;
    let battleCount = 0;
    for (el of arr) {
        battleCount++;
        let momentEp;
        let bonus = 0;
        if (battleCount % 3 === 0 && battleCount % 15 !== 0) {
            bonus = el * 0.15;
            momentEp = el + bonus;
            exp += momentEp;
        } else if (battleCount % 5 === 0 && battleCount % 15 !== 0) {
            bonus = el * 0.1;
            momentEp = el - bonus;
            exp += momentEp;
        } else if (battleCount % 15 === 0){
            bonus = el * 0.05;
            momentEp = el + bonus;
            exp += momentEp;
        }else{
            exp +=el
        }
        if(exp>=amountExp){
            console.log(`Player successfully collected his needed experience for ${battleCount} battles.`);
            break;
        }
    }
    if(exp<amountExp){
        console.log(`Player was not able to collect the needed experience, ${(amountExp - exp).toFixed(2)} more needed.`);
    }
}
firstEx([500, 5, 50, 100, 200, 100, 30])
firstEx([500, 5, 50, 100, 200, 100, 20])
    
firstEx([400, 5, 50, 100, 200, 100, 20])