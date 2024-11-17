/**
 * Class that represents a deck of cards
 */
export default class Deck {
    /**
     * An array of cards in the deck
     * @see Card
     * @private
     */
    _cards;

    constructor(cards) {
        this._cards = cards
    }

    /**
     * Shuffles the remaining cards in the deck in random order.
     * Returns self.
     * @return {Deck}
     */
    shuffle() {
        for (let i = this._cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this._cards[i], this._cards[j]] = [this._cards[j], this._cards[i]];
        }
        return this
    }

    /**
     * Returns top card from the deck and deletes it.
     * @return {Card}
     */
    getTopCard() {
        return this._cards.shift()
    }

    /**
     * Returns if the deck has any more cards in it
     * @return {boolean}
     */
    hasCards() {
        return this._cards.length > 0
    }

    /**
     * Replaces the cards in the deck with new ones
     * @param cards
     */
    setCards(cards) {
        this._cards = cards
    }
}