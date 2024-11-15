export default class Card {
    constructor(name, filePath) {
        this._name = name
        this._filePath = filePath
        this._flipped = false
    }

    getName() {
        return this._name
    }

    getFilePath() {
        return this._filePath
    }

    isFlipped() {
        return this._flipped
    }

    flip() {
        this._flipped = !this._flipped
        return this
    }
}