from webbrowser import get
from dotenv import load_dotenv
from google.cloud import texttospeech
from num2words import num2words
import itertools
import os
import pathlib


LANGUAGE_CODE_GOOGLE = "es-US"
LANGUAGE_CODE_NUM2WORDS = "es"
OTHER_TEXT_NEEDED = [
    "ciento",
    "y",
    "un",
    "millión",
    "millones",
    "menos",
    "más",
    "por",
    "dividido",
    "es",
    "comma",
]


RECORDINGS_FOLDER = pathlib.Path("./public/recordings")
OUTPUT_FOLDER = RECORDINGS_FOLDER / LANGUAGE_CODE_GOOGLE


class TextToSpeechSimpleGenerator:
    def __init__(self, language_code_google):
        self.client = texttospeech.TextToSpeechClient()

        self.voice = texttospeech.VoiceSelectionParams(
            language_code=language_code_google,
            ssml_gender=texttospeech.SsmlVoiceGender.NEUTRAL,
        )

        self.audio_config = texttospeech.AudioConfig(
            audio_encoding=texttospeech.AudioEncoding.MP3
        )

    def generate_audio_response_from_text(self, text):
        synthesis_input = texttospeech.SynthesisInput(text=text)

        audio_response = self.client.synthesize_speech(
            input=synthesis_input, voice=self.voice, audio_config=self.audio_config
        )

        return audio_response


def get_numbers_to_speak():
    return itertools.chain(
        range(0, 30),
        range(30, 100, 10),
        range(100, 1001, 100),
    )


def get_all_words_needed():
    return [
        num2words(n, lang=LANGUAGE_CODE_NUM2WORDS) for n in get_numbers_to_speak()
    ] + OTHER_TEXT_NEEDED


def filter_out_words_already_generated(words):
    return [word for word in words if not (OUTPUT_FOLDER / f"{word}.mp3").exists()]


def get_words_to_generate_this_program():
    all_words_needed = get_all_words_needed()
    return filter_out_words_already_generated(all_words_needed)


def check_output_folder():
    if not RECORDINGS_FOLDER.exists():
        raise Exception("Recordings folder not found")
    if not OUTPUT_FOLDER.exists():
        RECORDINGS_FOLDER.mkdir(LANGUAGE_CODE_GOOGLE)


def save_audio_response(audio_response, text):
    with open(
        f"./public/recordings/{LANGUAGE_CODE_GOOGLE}/{text}.mp3", "wb"
    ) as out_file:
        out_file.write(audio_response.audio_content)


def main():
    # gcloud needs for the GOOGLE_APPLICATION_CREDENTIALS to be set
    load_dotenv()

    print("Generating for", LANGUAGE_CODE_GOOGLE)

    check_output_folder()

    to_speech_simple = TextToSpeechSimpleGenerator(
        language_code_google=LANGUAGE_CODE_GOOGLE
    )

    words = get_words_to_generate_this_program()

    print("Words to generate:", words)

    for word in words:
        audio_response = to_speech_simple.generate_audio_response_from_text(text=word)
        save_audio_response(audio_response=audio_response, text=word)
        print(f"Audio processed for {word}")


if __name__ == "__main__":
    main()
