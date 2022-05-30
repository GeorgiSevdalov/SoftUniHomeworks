function onTimeForExam(input) {

    let hourExam = Number(input[0]);
    let minetExam = Number(input[1]);
    let hourArrive = Number(input[2]);
    let minetArrive = Number(input[3]);

    let timeEx = hourExam * 60 + minetExam;
    let timeAr = hourArrive * 60 + minetArrive;
    let diferenceT = Math.abs(timeAr - timeEx);

    if (timeEx < timeAr) {
        console.log("Late");
        if (diferenceT >= 60) {
            let h = Math.floor(diferenceT / 60);
            let m = diferenceT % 60;
            if (m < 10) {
                console.log(`${h}:0${m} hours after the start`)
            } else {
                console.log(`${h}:${m} hours after the start`)
            }
        } else {
            console.log(`${diferenceT} minutes after the start`);
        }

    } else if (timeEx === timeAr || (timeEx - timeAr) <= 30) {
        console.log("On time");
        if ((timeEx - timeAr) <= 30 && (timeEx - timeAr) !== 0) {
            console.log(`${diferenceT} minutes before the start`)
        }
    } else {
        console.log("Early");
        if (diferenceT >= 60) {
            let h = Math.floor(diferenceT / 60);
            let m = diferenceT % 60;
            if (m < 10) {
                console.log(`${h}:0${m} hours before the start`)
            } else {
                console.log(`${h}:${m} hours before the start`)
            }
        } else {
            console.log(`${diferenceT} minutes before the start`);
        }
    }
}