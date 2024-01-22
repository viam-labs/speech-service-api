# Speech Service API

Protobuf API and gRPC bindings for `speech` service to use with Viam modules.

*speech_service_api* is a modular service that provides text-to-speech (TTS) and speech-to-text(STT) capabilities for robots running on the Viam platform.

## API

The speech resource provides the following API:

### say(*string*, blocking=*bool*)

The *say()* command takes a string, and converts to speech audio that is played back on the robot, provided it has an audio output (speaker) device attached.
It returns a string response, which is the string that was passed in to the *say()* request.

If blocking is set to True, will wait until the speech is said to return.

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
speech.say(...)
```

For now, the protobuf bindings are only generated for Python.

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

This project is bootstrapped with [Pyprojectx](https://github.com/pyprojectx/pyprojectx) and manages dependencies with [PDM](https://pdm-project.org/latest/#introduction) for modern Python development. The various commands for managing the project are collected under the `Makefile`.

To rebuild the gRPC bindings run:

```
make generate
```
