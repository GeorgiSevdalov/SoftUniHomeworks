function rightPlace(string1, char, string2) {
    let res = "";
    for (i = 0; i < string1.length; i++)
        if (string1[i] === "_") {
            res += char
        } else {
            res += string1[i];
        }
        if(res === string2){
            console.log("Matched")
        }else{
            console.log("Not Matched");
        }
}
rightPlace('Str_ng', 'I', 'Strong')
