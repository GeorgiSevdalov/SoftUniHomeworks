function exam3(arr) {
    let cardList = arr.shift().split(", ");
    let nuberOfComadn = Number(arr.shift().split(", "));
    let index = 0;
    let command = arr[index];
    // console.log(arr.length);
    index++;
    let i;
    while (index <= nuberOfComadn) {
        let nextItem = command.split(', ');
        let operation = nextItem.shift();
        // console.log(nextItem);
        // console.log(operation)
        switch (operation) {
            case 'Add':
                for (el of nextItem) {
                    if (!cardList.includes(el)) {
                        cardList.push(el)
                        console.log('Card successfully added');
                    } else {
                        console.log("Card is already in the deck");
                    }
                }
                break;
            case 'Remove':
                let elen = nextItem[0];
                    if (!cardList.includes(elen)) {
                        console.log("Card not found");
                    }else{
                        i = cardList.indexOf(elen);
                        cardList.splice(i,1)
                        console.log("Card successfully removed")
                    }
                
                break;
            case 'Remove At':
                i = Number(nextItem[0]);
                if(i>cardList.length -1 || i < 0){
                    console.log('Index out of range');
                }else{
                    cardList.splice(i,1)
                    console.log('Card successfully removed');
                }
                break;
            case 'Insert':
                i = Number(nextItem[0]);
                if(i>cardList.length -1 || i < 0){
                    console.log('Index out of range');
                    break;
                }
                let ele = nextItem[1];
                if (!cardList.includes(ele)) {
                    cardList.splice(i, 0, ele)
                    console.log('Card successfully added');
                } else {
                    console.log("Card is already added");
                }
                break;
        }

        command = arr[index];
        index++;
    }
    console.log(cardList.join(', '))
}
exam3(["Ace of Diamonds, Queen of Hearts, King of Clubs",
"3",
"Add, King of Diamonds",
"Insert, 2, Jack of Spades",
"Remove, Ace of Diamonds"])



