/**
 * Class that represents a card
 */
export default class Card {

    /**
     * Name of the card - it's suit and rank
     * @private
     */
    _name;
    /**
     * Card's image
     * @private
     */
    _image;
    /**
     * Card's caption. The meaning of this card by the rules.
     */
    caption;
    /**
     * The card is flipped of not.
     * If true - the card is face-up.
     * If false - the card is face-down.
     * @private
     */
    _flipped;

    constructor(name, image, caption) {
        this._name = name
        this._image = image
        this._caption = caption
        this._flipped = false
    }

    getName() {
        return this._name
    }

    getFilePath() {
        return this._image.src
    }

    isFlipped() {
        return this._flipped
    }

    getCaption() {
        return this._caption
    }

    /**
     * Flip the card. If it was face-up, put it face-down and vice versa.
     * Return self.
     * @return {Card}
     */
    flip() {
        this._flipped = !this._flipped
        return this
    }
}