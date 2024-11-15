export default class Deck {
    constructor(cards) {
        this._cards = cards
    }

    shuffle() {
        for (let i = this._cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this._cards[i], this._cards[j]] = [this._cards[j], this._cards[i]];
        }
        return this
    }

    getTopCard() {
        return this._cards.shift()
    }

    hasCards() {
        return this._cards.length > 0
    }

    setCards(cards) {
        this._cards = cards
    }
}