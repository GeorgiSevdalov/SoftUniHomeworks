function treasurehunt(arr){
let chest = arr.shift() .split("|");
console.log(chest);
let index = 0;
let command = arr[index];
index++;
let i;
while(command !== 'Yohoho!'){
    let nextItem = command.split(' ');
    let operation = nextItem.shift();
  
    
    switch(operation){
        case "Loot":
            for(el of nextItem){
                if(!chest.includes(el)){
                    chest.unshift(el)
                }
            }
            break;
            case "Drop":
                i = Number(nextItem[0]);
                let neededEl = chest.splice(i,1)
                chest.push(neededEl[0])
            break;
            case "Steal":
                i = Number(nextItem[0]);
                
            break;
    }
    command = arr[index];
    index++;
}
console.log(chest)
}
treasurehunt(["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"])