"""
@generated by mypy-protobuf.  Do not edit manually!
isort:skip_file
"""

import builtins
import collections.abc
import google.protobuf.descriptor
import google.protobuf.internal.containers
import google.protobuf.message
import typing

DESCRIPTOR: google.protobuf.descriptor.FileDescriptor

@typing.final
class SayRequest(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    NAME_FIELD_NUMBER: builtins.int
    TEXT_FIELD_NUMBER: builtins.int
    BLOCKING_FIELD_NUMBER: builtins.int
    name: builtins.str
    text: builtins.str
    blocking: builtins.bool
    def __init__(
        self,
        *,
        name: builtins.str = ...,
        text: builtins.str = ...,
        blocking: builtins.bool = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing.Literal["blocking", b"blocking", "name", b"name", "text", b"text"]) -> None: ...

global___SayRequest = SayRequest

@typing.final
class SayResponse(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    TEXT_FIELD_NUMBER: builtins.int
    text: builtins.str
    def __init__(
        self,
        *,
        text: builtins.str = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing.Literal["text", b"text"]) -> None: ...

global___SayResponse = SayResponse

@typing.final
class ToTextRequest(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    NAME_FIELD_NUMBER: builtins.int
    SPEECH_FIELD_NUMBER: builtins.int
    FORMAT_FIELD_NUMBER: builtins.int
    name: builtins.str
    speech: builtins.bytes
    format: builtins.str
    def __init__(
        self,
        *,
        name: builtins.str = ...,
        speech: builtins.bytes = ...,
        format: builtins.str = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing.Literal["format", b"format", "name", b"name", "speech", b"speech"]) -> None: ...

global___ToTextRequest = ToTextRequest

@typing.final
class ToTextResponse(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    TEXT_FIELD_NUMBER: builtins.int
    text: builtins.str
    def __init__(
        self,
        *,
        text: builtins.str = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing.Literal["text", b"text"]) -> None: ...

global___ToTextResponse = ToTextResponse

@typing.final
class ToSpeechRequest(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    NAME_FIELD_NUMBER: builtins.int
    TEXT_FIELD_NUMBER: builtins.int
    name: builtins.str
    text: builtins.str
    def __init__(
        self,
        *,
        name: builtins.str = ...,
        text: builtins.str = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing.Literal["name", b"name", "text", b"text"]) -> None: ...

global___ToSpeechRequest = ToSpeechRequest

@typing.final
class ToSpeechResponse(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    SPEECH_FIELD_NUMBER: builtins.int
    speech: builtins.bytes
    def __init__(
        self,
        *,
        speech: builtins.bytes = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing.Literal["speech", b"speech"]) -> None: ...

global___ToSpeechResponse = ToSpeechResponse

@typing.final
class CompletionRequest(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    NAME_FIELD_NUMBER: builtins.int
    TEXT_FIELD_NUMBER: builtins.int
    BLOCKING_FIELD_NUMBER: builtins.int
    name: builtins.str
    text: builtins.str
    blocking: builtins.bool
    def __init__(
        self,
        *,
        name: builtins.str = ...,
        text: builtins.str = ...,
        blocking: builtins.bool = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing.Literal["blocking", b"blocking", "name", b"name", "text", b"text"]) -> None: ...

global___CompletionRequest = CompletionRequest

@typing.final
class CompletionResponse(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    TEXT_FIELD_NUMBER: builtins.int
    text: builtins.str
    def __init__(
        self,
        *,
        text: builtins.str = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing.Literal["text", b"text"]) -> None: ...

global___CompletionResponse = CompletionResponse

@typing.final
class GetCommandsRequest(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    NAME_FIELD_NUMBER: builtins.int
    NUMBER_FIELD_NUMBER: builtins.int
    name: builtins.str
    number: builtins.int
    def __init__(
        self,
        *,
        name: builtins.str = ...,
        number: builtins.int = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing.Literal["name", b"name", "number", b"number"]) -> None: ...

global___GetCommandsRequest = GetCommandsRequest

@typing.final
class GetCommandsResponse(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    COMMANDS_FIELD_NUMBER: builtins.int
    @property
    def commands(self) -> google.protobuf.internal.containers.RepeatedScalarFieldContainer[builtins.str]: ...
    def __init__(
        self,
        *,
        commands: collections.abc.Iterable[builtins.str] | None = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing.Literal["commands", b"commands"]) -> None: ...

global___GetCommandsResponse = GetCommandsResponse

@typing.final
class ListenTriggerRequest(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    NAME_FIELD_NUMBER: builtins.int
    TYPE_FIELD_NUMBER: builtins.int
    name: builtins.str
    type: builtins.str
    def __init__(
        self,
        *,
        name: builtins.str = ...,
        type: builtins.str = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing.Literal["name", b"name", "type", b"type"]) -> None: ...

global___ListenTriggerRequest = ListenTriggerRequest

@typing.final
class ListenTriggerResponse(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    TEXT_FIELD_NUMBER: builtins.int
    text: builtins.str
    def __init__(
        self,
        *,
        text: builtins.str = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing.Literal["text", b"text"]) -> None: ...

global___ListenTriggerResponse = ListenTriggerResponse

@typing.final
class ListenRequest(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    NAME_FIELD_NUMBER: builtins.int
    name: builtins.str
    def __init__(
        self,
        *,
        name: builtins.str = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing.Literal["name", b"name"]) -> None: ...

global___ListenRequest = ListenRequest

@typing.final
class ListenResponse(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    TEXT_FIELD_NUMBER: builtins.int
    text: builtins.str
    def __init__(
        self,
        *,
        text: builtins.str = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing.Literal["text", b"text"]) -> None: ...

global___ListenResponse = ListenResponse

@typing.final
class IsSpeakingRequest(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    NAME_FIELD_NUMBER: builtins.int
    name: builtins.str
    def __init__(
        self,
        *,
        name: builtins.str = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing.Literal["name", b"name"]) -> None: ...

global___IsSpeakingRequest = IsSpeakingRequest

@typing.final
class IsSpeakingResponse(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    STATUS_FIELD_NUMBER: builtins.int
    status: builtins.bool
    def __init__(
        self,
        *,
        status: builtins.bool = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing.Literal["status", b"status"]) -> None: ...

global___IsSpeakingResponse = IsSpeakingResponse
