import Card from "@/lib/Card.js";
import Deck from "@/lib/Deck.js";

/**
 * all possible suits of the cards
 */
const suits = ['d', 'h', 'k', 's']
/**
 * all possible ranks of the cards
 */
const ranks = ['6', '7', '8', '9', '10', 'j', 'q', 'k', 'a']

/**
 * Creates an array of all possible cards.
 * Any card is represented by its rank and suit.
 */
export function createDeckArray() {
    let array = []
    for (const suit of suits) {
        for (const rank of ranks) {
            array.push(`${rank}${suit}`)
        }
    }
    return array
}

/**
 * Creates an array of all possible card files.
 */
export function createDeckArrayFiles() {
    return createDeckArray().map(card => `${card}.jpg`)
}

export function createCards() {
    const deckArray = createDeckArray()
    return deckArray.map(card => new Card(card, `${card}.jpg`))
}

export function createDeck() {
    return new Deck(createCards())
}

export function getBackFilePath() {
    return 'back.jpg'
}

export function getFolderPath() {
    return '/src/assets/cards'
}

export function getBackFile() {
    return `${getFolderPath()}/${getBackFilePath()}`
}