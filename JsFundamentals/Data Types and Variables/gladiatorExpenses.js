function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmetConter = 0;
    let swordCounter = 0;
    let shieldCounter = 0;
    let armorCounter = 0;

    for (i = 1; i <= lostFights; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            shieldCounter++;
            helmetConter++;
            swordCounter++;
            if (shieldCounter % 2 === 0) {
                armorCounter++;
            }
        } else if (i % 3 === 0) {
            swordCounter++;
        } else if (i % 2 === 0) {
            helmetConter++;
        }
    }
    let allPrice = (helmetConter * helmetPrice) + 
    (swordCounter * swordPrice) + (shieldCounter * shieldPrice) + 
    (armorCounter * armorPrice);
    console.log(`Gladiator expenses: ${(allPrice).toFixed(2)} aureus`)
}
gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200
    )