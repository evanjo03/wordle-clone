export function getStatus(letter, word, index) {
    if (word.at(index) === letter) {
        return 'correct';
    }
    if (word.includes(letter)) {
        return 'misplaced';
    }
    return 'incorrect';
}
//# sourceMappingURL=get-status.js.map