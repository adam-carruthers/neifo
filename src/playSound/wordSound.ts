import { Howl } from "howler";

const delay = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(() => resolve(), ms));

class WordSound {
  howl: Howl;

  constructor(word: string) {
    this.howl = new Howl({
      src: `/recordings/es-ES/${word}.mp3`,
    });
  }

  readyPromise = () => {
    if (this.howl.state() === "loaded") {
      return Promise.resolve();
    }

    return new Promise<void>((resolve, reject) => {
      this.howl.on("load", () => resolve());
      this.howl.on("loaderror", () => reject());
    });
  };

  playWithPromise = async () => {
    await this.readyPromise();

    this.howl.play();

    await delay(this.howl.duration() * 1000 - 200);
  };
}

export default WordSound;
