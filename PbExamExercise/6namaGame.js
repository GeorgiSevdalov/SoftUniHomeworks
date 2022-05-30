function examTrein(input) {

    let index = 0;
    let command = input[index];
    let gamePont = 0;
    let maxPoint = 0;
    let bestPlayer = "";
    while (command !== "Stop") {
        let name = command;
        index++;
        let pointCounter = 0;
        while (pointCounter < name.length) {
            let point = Number(input[index]);
            for (i = 0; i < name.length; i++) {
                let letter = name[i].charCodeAt();
                if (point === letter) {
                    gamePont += 10;
                    index++;
                    point = Number(input[index])
                    pointCounter++;
                } else {
                    gamePont += 2;
                    index++;
                    point = Number(input[index])
                    pointCounter++
                }
            }
        }

        if (gamePont >= maxPoint) {
            maxPoint = gamePont;
            bestPlayer = name
        }
        gamePont = 0;
        command = input[index];
    }
    console.log(`The winner is ${bestPlayer} with ${maxPoint} points!`)
}
examTrein(["Pesho",
"124",
"34",
"111",
"97",
"99",
"Gosho",
"98",
"124",
"88",
"76",
"18",
"Stop"])

