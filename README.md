# Speech Service API

Protobuf API and gRPC bindings for `speech` service to use with Viam modules.

*speech_service_api* is a modular service that provides text-to-speech (TTS) and speech-to-text(STT) capabilities for robots running on the Viam platform.

## API

The speech resource provides the following API:

### say(*string*, blocking=*bool*)

The *say()* command takes a string, and converts to speech audio that is played back on the robot, provided it has an audio output (speaker) device attached.
It returns a string response, which is the string that was passed in to the *say()* request.

If blocking is set to True, will wait until the speech is said to return.

### to_text(*bytes*, format=*string*)

The *to_text()* command takes bytes and the format (`wav | mp3 | mp4 | aac | flv | ogg`) of an audio file, and returns extracted text as a string response.

### to_speech(*string*)

The *to_speech()* command takes a string of text, and returns bytes of an audio speech file.

### completion(*string*, blocking=*bool*)

The *completion()* command takes a string, sends that to an AI LLM completion provider (if configured) and converts the returned completion to speech audio that is played back on the robot, provided it has an audio output (speaker) device attached.
It returns a string response, which is the completion returned from the completion provider.

If blocking is set to True, will wait until the speech is said to return.

### get_commands(*integer*)

The *get_commands()* command takes an integer representing the number of commands to return, and returns that number of commands as a list of strings from the FIFO command buffer, removing them from that buffer at the time of return.
Commands will exist in the buffer if [listen](#listen) is configured and the robot has heard any commands (triggered by [listen_trigger_command](#listen_trigger_command)).
This enables voice-activated programmatic control of the robot.

### listen_trigger(type=*enum(say|completion|command)*)

The next phrase heard will trigger *say*, *completion* or *command*, depending on the trigger_type passed in.
No trigger string is required, but any configured trigger string will be respected.

### listen()

The *listen()* command starts detecting speech from an audio input, like a microphone, and returns it as text. It will return an empty string if no speech is detected.

### is_speaking()

Will return True if the speech module is currently speaking.

## Using speech with the Python SDK

Because this module uses a custom protobuf-based API, you must include this project in your client code.  One way to do this is to include it in your requirements.txt as follows:

``` txt
speech_service_api @ git+https://github.com/viam-labs/speech-service-api.git@main
```

You can now import and use it in your code as follows:

``` python
from speech_service_api import SpeechService
speech = SpeechService.from_robot(robot, name="speech")
await speech.say("hello", True)
```

See client.py for an example.

## Using speech with the Golang SDK

Because this module uses a custom protobuf-based API, you must import and use in your client code as follows:

``` go
import speech "github.com/viam-labs/speech-service-api/src/speech_service_api_go"

sp, err := speech.FromRobot(robot, "speechio")
fmt.Println("err", err)
sp.Say(context.Background(), "hello", true)
```

See client.go for an example.

## Using speech with the Typescript SDK

Because this module uses a custom protobuf-based API, you must include this project in your client code.  One way to do this is to include it in your package.json as follows:

``` txt
"speech-service-api": "github:viam-labs/speech-service-api",
```

It is recommended that you include a tag at the end of the github import.
You can now use it in your code as follows:

``` javascript
const speech = new SpeechClient(client, "speechio");
await speech.say("hello", true);
```

## Troubleshooting

When using a USB audio device, it may sometimes come up as the default, sometimes not.  To ensure that it comes up consistently as the default:

1. check the existing alsa modules:

```
cat /proc/asound/modules
```

This will output something like:

```
 0 snd_usb_audio
 2 snd_soc_meson_card_utils
 3 snd_usb_audio
```

2. ensure the USB device comes up first by editing /etc/modprobe.d/alsa-base.conf, adding content similar to:

```
options snd slots=snd-usb-audio,snd_soc_meson_card_utils
```

## Development

This project is managed by [uv](https://docs.astral.sh/uv/). To initialize the development environment, follow the [installation instructions](https://docs.astral.sh/uv/#installation) and run:

```console
uv sync
```

To rebuild the gRPC bindings run:

``` bash
make generate
```

To publish a new version:

- update the version string in `pyproject.toml` and `package.json`
- tag a commit with the new version `git tag v<major>.<minor>.<patch>`
- push the commit and tag to the GitHub repo `git push origin main --tags`

**Be sure to update any dependent Viam module to this new release version.**
