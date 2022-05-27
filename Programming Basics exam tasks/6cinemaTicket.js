function cinemaTicket(input) {
    let index = 0;
    let command = input[index];
    let totalTicket = 0;
    let studentTicket = 0;
    let standartTickt = 0;
    let kidTicket = 0;

    while (command !== "Finish") {
        let moveName = command;
        index++;
        let freeSeats = Number(input[index]);
        index++;
        let type = input[index];
        let moveTicket = 0;
        let finish = false;

        while (type !== "End") {
            switch (type) {
                case "student":
                    totalTicket++;
                    moveTicket++;
                    studentTicket++;
                    break;
                case "standard":
                    totalTicket++;
                    moveTicket++;
                    standartTickt++;
                    break;
                case "kid":
                    totalTicket++;
                    moveTicket++;
                    kidTicket++;
                    break;
            }
            if (moveTicket === freeSeats) {
                break;
            }
            index++;
            type = input[index];
            if (type === "Finish") {
                finish = true;
                break;
            }
        }
        console.log(`${moveName} - ${(moveTicket / freeSeats * 100).toFixed(2)}% full.`);
        if (finish) break;

        index++;
        command = input[index];
    }

    console.log(`Total tickets: ${totalTicket}`);
    console.log(`${(studentTicket / totalTicket * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standartTickt / totalTicket * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidTicket / totalTicket * 100).toFixed(2)}% kids tickets.`);
}
cinemaTicket(["The Matrix",
    "8",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"])
