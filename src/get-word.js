export async function getWord() {
    const response = await fetch('../assets/words.json', {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    });
    const wordsJson = await response.json();
    const words = JSON.parse(wordsJson);
    return words[Math.floor(Math.random() * words.length)];
}
//# sourceMappingURL=get-word.js.map