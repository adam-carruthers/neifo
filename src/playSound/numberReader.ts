import WordSound from "./wordSound";

class NumberReader {
  wordSounds: WordSound[];

  constructor(numberString: string) {
    const wordsStrings = numberString.split(" ");

    this.wordSounds = wordsStrings.map(
      (wordString) => new WordSound(wordString)
    );
  }

  readPromise = async () => {
    await Promise.all(
      this.wordSounds.map((wordSound) => wordSound.readyPromise())
    );

    for (const wordSound of this.wordSounds) {
      await wordSound.playWithPromise();
    }
  };
}

export default NumberReader;
