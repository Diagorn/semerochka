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

const rankCaptions = new Map()
rankCaptions.set('6', 'Тема для разговора. Вытянувший предлагает перечисляемую тему для разговора, которую остальные ' +
    'по очереди должны поддержать. Если кто-то повторяется или не может придумать новое, он пьёт.')
rankCaptions.set('7', 'Семёрочка. Каждый по очереди называет числа, кратные 7 или содержащие 7. Тот, кто повторится ' +
    'или скажет неправильное число - пьёт.')
rankCaptions.set('8', 'Зига. Все одновременно поднимают правую руку выше головы. Тот, кто сделал это последним, должен ' +
    'выпить.')
rankCaptions.set('9', 'Выход из-за стола. Вытянувшему предоставляется право выйти из-за стола на 1 минуту. Он может ' +
    'передать это право любому игроку. Если вышедший не уложился по времени, он пьёт.')
rankCaptions.set('10', 'Человек-вопрос. На вопросы этого человека нельзя отвечать до того момента, пока не будет вытянута ' +
    'ещё одна десятка, или не закончится игра. Тот, кто ответил на вопрос этого человека - пьёт.')
rankCaptions.set('j', 'Новый тост. Вытянувший говорит тост. Всё, что сказано вытянувшим сейчас, будет новым тостом. ' +
    'Всегда, когда по правилам игры необходимо будет выпить, необходимо будет произносить этот тост.')
rankCaptions.set('q', 'Пропуск хода. Вытянувший пропускает свой ход.')
rankCaptions.set('k', 'Пьёшь ты. Человек, который вытянул эту карту, должен выпить.')
rankCaptions.set('a', 'Пьют все. Выпить должны все игроки, за исключением этого человека.')

/**
 * Creates an array of all possible cards.
 * Any card is represented by its rank and suit.
 */
export function createDeckArray() {
    let array = []
    for (const suit of suits) {
        for (const rank of ranks) {
            array.push({
                fileTemplate: `${rank}${suit}`,
                caption: rankCaptions.get(rank)
            })
        }
    }
    return array
}

/**
 * Creates an array of all possible card files.
 */
export function createDeckArrayFiles() {
    return createDeckArray().map(card => card.fileTemplate = `${card.fileTemplate}.jpg`)
}

/**
 * Creates an array of all possible cards
 * @return {Card[]} - array of cards
 */
export function createCards() {
    const deckArray = createDeckArray()
    return deckArray.map(card => new Card(
        card.name,
        `${card.fileTemplate}.jpg`,
        rankCaptions.get(card.fileTemplate.substring(0, card.fileTemplate.length - 1))
    ))
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