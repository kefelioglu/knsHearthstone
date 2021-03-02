import {AppContext} from '../context/AppContext'

export async function cardsAndMechanicsMaking(cards) {
    var allCards = [];
    var allMechanics = [];
    for (let name in cards) {
        cards[name].forEach(card => {
            if (card.mechanics!=undefined) {
                allCards.push(card)
                card.mechanics.map(x=>{
                    if (!allMechanics.includes(x.name)) {
                        allMechanics.push(x.name)
                    }
                })
            }
        });
    }
    return {allCards,allMechanics};
}


export async function cardListMaking(mechanicName,CardList) {
    var selectedMechanicCardList = [];
    CardList.map(card=>{
        card.mechanics.map(mechanic=>{
           if ( mechanic.name===mechanicName) {
            selectedMechanicCardList.push(card)
           }
        })
    })
return selectedMechanicCardList;
}

export async function listAllCards(cards){
    var allCards = [];
    for (let name in cards) {
        cards[name].forEach(card => {
            allCards.push(card)
        });
    }
    return {allCards};
}