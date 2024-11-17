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

/**
 * Creates an array of all possible cards
 * @return {Card[]} - array of cards
 */
export function createCards() {
    const deckArray = createDeckArray()
    return deckArray.map(card => new Card(card, `${card}.jpg`))
}

/**
 * Creates a whole new Deck of cards
 * @return {Deck}
 */
export function createDeck() {
    return new Deck(createCards()).shuffle()
}

/**
 * Returns a relative path of the card back file
 * @return {string}
 */
export function getBackFilePath() {
    return 'back.jpg'
}

/**
 * Returns path to folder of cards
 * @return {string}
 */
export function getFolderPath() {
    return '/assets/cards'
}

/**
 * Returns a whole path to the card back file
 * @return {string}
 */
export function getBackFile() {
    return `${getFolderPath()}/${getBackFilePath()}`
}