import * as Viam from '@viamrobotics/sdk';

/** A service that enables speech to text and text to speech */
export interface Speech extends Viam.Resource {
  /**
   * Speak the provided text out loud via speaker/physical audio out device.
   *
   * @param text - The name of the camera to use for detection.
   * @param blocking - If the command should block.
   * @returns - The spoken text.
   */
  say: (
    text: string,
    blocking: boolean
  ) => Promise<string>;

   /**
   * Convert the provided audio bytes (mp3) to text and return that text.
   *
   * @param speech - The bytes of audio in mp3 format.
   * @returns - The detected text.
   */
    toText: (
        speech: Uint8Array,
        format: string,
    ) => Promise<string>;

   /**
   * Convert the provided text to audio bytes and return that audio.
   *
   * @param speech - The bytes of audio in mp3 format.
   * @returns - The converted audio.
   */
    toSpeech: (
        text: string,
    ) => Promise<Uint8Array>;

   /**
   * Send the provided text to an LLM completion provider and play the results as speech.
   *
   * @param text - The bytes of audio in mp3 format.
   * @param blocking - If the command should block.
   * @returns - The text of the completion.
   */
    completion: (
        text: string,
        blocking: boolean
    ) => Promise<string>;

   /**
   * Pull commands from speech buffer and return them as text.
   *
   * @param number - The number of commands to return.
   * @returns - The commands, if any were found.
   */
    getCommands: (
        number: number,
    ) => Promise<string[]>;

   /**
   * The next phrase heard will trigger the type of trigger specified.
   *
   * @param type - say|completion|command - the type of trigger for the next phrase.
   * @returns - "OK" if set.
   */
    listenTrigger: (
        type: string,
    ) => Promise<string>;

   /**
   * Listen for speech and return processed text
   *
   * @returns - string of detected text
   */
   listen: (
    ) => Promise<string>;
   
   /**
   * Is the speech service current speaking out loud?
   *
   * @returns - true or false
   */
   isSpeaking: (
    ) => Promise<boolean>;
}
