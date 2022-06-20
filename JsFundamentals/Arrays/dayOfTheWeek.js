function dayWeek(number) {
    let dayNameArr = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ]
    let i = number - 1;

    if (number > 7 || number <= 0) {
        console.log("Invalid day!");
    } else {
        console.log(dayNameArr[i]);
    }
}
dayWeek(9)