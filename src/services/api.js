export const BASE_URL = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/';
export const API_HOST = 'omgvamp-hearthstone-v1.p.rapidapi.com';
export const API_KEY = 'e57a91de14mshd15df6219868f1ap1f8b6cjsn1e6983480a3d';
import {cardsAndMechanicsMaking,listAllCards} from './helper'

export async function getCardList() {
    return fetch(BASE_URL + 'cards', {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": API_KEY,
            "x-rapidapi-host": API_HOST
        }
    })
        .then((response) => response.json())
        .then((x) => {
            const data= cardsAndMechanicsMaking(x);
            return  data
        }).catch((e) => {
            return false
        })
}

export async function getSearchingCardList(cardName) {
    return fetch(BASE_URL + 'cards/search/'+cardName, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": API_KEY,
            "x-rapidapi-host": API_HOST
        }
    })
        .then((response) => response.json())
        .then((responseData) => {
            return  responseData
        }).catch((e) => {
            return false
        })
}