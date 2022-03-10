export async function getWord(): Promise<string> {
  const response = await fetch('../assets/words.json', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  const wordsJson: string = await response.json();
  const words = JSON.parse(wordsJson);
  return words[Math.floor(Math.random() * words.length)];
}
