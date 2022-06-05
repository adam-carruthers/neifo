from webbrowser import get
from dotenv import load_dotenv
from google.cloud import texttospeech
from num2words import num2words
import itertools


LANGUAGE_CODE_GOOGLE = "es-US"
LANGUAGE_CODE_NUM2WORDS = "es"
OTHER_TEXT_NEEDED = ["ciento", "y", "un", "millión", "millones"]


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


def get_text_to_speak():
    return [
        num2words(n, lang=LANGUAGE_CODE_NUM2WORDS) for n in get_numbers_to_speak()
    ] + OTHER_TEXT_NEEDED


def save_audio_response(audio_response, text):
    with open(
        f"./public/recordings/{LANGUAGE_CODE_GOOGLE}/{text}.mp3", "wb"
    ) as out_file:
        out_file.write(audio_response.audio_content)


def main():
    # gcloud needs for the GOOGLE_APPLICATION_CREDENTIALS to be set
    load_dotenv()

    to_speech_simple = TextToSpeechSimpleGenerator(
        language_code_google=LANGUAGE_CODE_GOOGLE
    )

    text_items = get_text_to_speak()

    for text_item in text_items:
        audio_response = to_speech_simple.generate_audio_response_from_text(
            text=text_item
        )
        save_audio_response(audio_response=audio_response, text=text_item)
        print(f"Audio processed for {text_item}")


if __name__ == "__main__":
    main()
