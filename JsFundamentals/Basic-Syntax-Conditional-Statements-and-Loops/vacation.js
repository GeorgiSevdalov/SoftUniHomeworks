function vacation(groupMember, typeOfGroup, day) {
    let price = 0;
    let totalPrice = 0;
    switch (day) {
        case "Friday":
            switch (typeOfGroup) {
                case "Students":
                    price = 8.45
                    break;
                case "Business":
                    price = 10.9
                    break;
                case "Regular":
                    price = 15
                    break;
            }
            break;
        case "Saturday":
            switch (typeOfGroup) {
                case "Students":
                    price = 9.8
                    break;
                case "Business":
                    price = 15.6
                    break;
                case "Regular":
                    price = 20
                    break;
            }
            break;
        case "Sunday":
            switch (typeOfGroup) {
                case "Students":
                    price = 10.46
                    break;
                case "Business":
                    price = 16
                    break;
                case "Regular":
                    price = 22.5
                    break;
            }
            break;
    }
    
    switch (typeOfGroup) {
        case "Students":
            totalPrice = price * groupMember;
            if(groupMember >= 30){
                totalPrice *= 0.85;
            }
            break;
        case "Business":
            if(groupMember >= 100){
                groupMember -= 10;
                totalPrice = price * groupMember;
            }else{
                totalPrice = price * groupMember;
            }
            break;
        case "Regular":
            totalPrice = price * groupMember;
            if(groupMember>=10 && groupMember<=20){
                totalPrice *= 0.95;
            }
            break;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}
vacation(40,
    "Business",
    "Sunday"
    )