const cards = ["Guadalupe", "Ollie", "Aki"];

function writeCards(cards, event) {
    const messages = []
    for (let i = 0; i <cards.length; i++) {
        messages.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`)
    }

    return messages;
}

writeCards(cards);

function countDown(){
let countDown = 10;
while (countDown >= 0) {
    console.log(countDown--)
    
}
return countDown;
}
