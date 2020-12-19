"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollections = void 0;
var CharactersCollections = /** @class */ (function () {
    function CharactersCollections(data) {
        this.data = data;
    }
    Object.defineProperty(CharactersCollections.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharactersCollections.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    };
    CharactersCollections.prototype.swap = function (leftIndex, rightIndex) {
        var characters = this.data.split("");
        var leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHand;
        this.data = characters.join("");
    };
    return CharactersCollections;
}());
exports.CharactersCollections = CharactersCollections;
