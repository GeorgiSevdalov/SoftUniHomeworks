function loop(input){

    let width = Number(input[0]);
    let length = Number(input[1]);
    let index = 2;
    let cakeSize = width * length;
    let comand = input[index];

    while (comand !== "STOP") {
        let numberOfPieces = Number(comand);
        cakeSize -= numberOfPieces;

        if (cakeSize <= 0) {
            console.log(`No more cake left! You need ${Math.abs(cakeSize - numberOfPieces)} pieces more.`);
            break;
        }
        index++;
        comand = input[index];
        if (comand === "STOP") {
            console.log(`${cakeSize - numberOfPieces} pieces are left.`);
            break;
        }
    }
}
loop[("10",
"2",
"2",
"4",
"6",
"STOP")]
