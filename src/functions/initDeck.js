let initDeck = (decks) => {
  decks = decks || 1;
  let x;
  let deck = [];
  let suits = ['H', 'D', 'S', 'C'];
  let numbers = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
  for(let i = 0; i < decks; i++){
    for(let j = 0; j < suits.length; j++){
      for(let k = 0; k < 13; k++){
        if(k >= 9){
          x = 10;
        } else if (k === 0){
          x = 1;
        } else{
          x = numbers[k];
        }
        deck.push({name : numbers[k], suit: suits[j], value : x})
      }
    }
  }
  return deck;
};

export default initDeck;