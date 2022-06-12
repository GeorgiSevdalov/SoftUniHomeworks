function spaceMustFlow(startingYield) {
    let daycounter = 0;
    let spicesInStorage = 0;
    let extractSpices = startingYield;
    while (extractSpices >= 100) {
        daycounter++;
        spicesInStorage += extractSpices - 26;
        extractSpices -= 10;
    }
    console.log(daycounter);
    if (daycounter !== 0) {
        console.log(spicesInStorage - 26);
    } else {
        console.log(spicesInStorage);
    }
}
spaceMustFlow(0)