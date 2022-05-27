function exam(input) {
    let maxfirstNum = Number(input[0]);
    let maxSecondNum = Number(input[1]);
    let maxthirdNum = Number(input[2]);
    let firstNum = "";
    let secondNum = "";
    let thirdNum = "";

    for (let f = 1; f <= maxfirstNum; f++) {
        if (f % 2 === 0) {
            firstNum = f + ""

            for (let s = 2; s <= maxSecondNum; s++) {
                let isPrime = true

                for (let i = 2; i < s; i++) {

                    if (s % i === 0) {
                        isPrime = false
                    }
                }
                if (isPrime) {
                    secondNum = s + "";
                    for (let t = 1; t <= maxthirdNum; t++) {
                        if (t % 2 === 0) {
                            thirdNum = t + "";
                            console.log(firstNum + " " + secondNum + " " + thirdNum)

                        }
                    }
                }
            }

        }
    }

}
exam(["3",
"5",
"5"])

