"""
This file outlines the general structure for the API around a custom, modularized service.

It defines the abstract class definition that all concrete implementations must follow,
the gRPC service that will handle calls to the service,
and the gRPC client that will be able to make calls to this service.

In this example, the ``Speech`` abstract class defines what functionality is required for all Speech services.
It extends ``ServiceBase``, as all service types must.
It also defines its specific ``SUBTYPE``, which is used internally to keep track of supported types.

The ``SpeechRPCService`` implements the gRPC service for the Speech service. This will allow other robots and clients to make
requests of the Speech service. It extends both from ``SpeechServiceBase`` and ``RPCServiceBase``.
The former is the gRPC service as defined by the proto, and the latter is the class that all gRPC services must inherit from.

Finally, the ``SpeechClient`` is the gRPC client for a Speech service. It inherits from SpeechService since it implements
 all the same functions. The implementations are simply gRPC calls to some remote Speech service.

To see how this custom modular service is registered, see the __init__.py file.
To see the custom implementation of this service, see the speechio.py file.
"""

import abc
from typing import Final, Literal, Sequence

from grpclib.client import Channel
from grpclib.server import Stream

from viam.resource.rpc_service_base import ResourceRPCServiceBase
from viam.resource.types import RESOURCE_TYPE_SERVICE, Subtype
from viam.services.service_base import ServiceBase

from .grpc.speech_grpc import SpeechServiceBase, SpeechServiceStub
from .grpc.speech_pb2 import (
    SayRequest,
    SayResponse,
    ToTextRequest,
    ToTextResponse,
    ToSpeechRequest,
    ToSpeechResponse,
    CompletionRequest,
    CompletionResponse,
    GetCommandsRequest,
    GetCommandsResponse,
    ListenTriggerRequest,
    ListenTriggerResponse,
    IsSpeakingRequest,
    IsSpeakingResponse,
)


class SpeechService(ServiceBase):

    SUBTYPE: Final = Subtype("viam-labs", RESOURCE_TYPE_SERVICE, "speech")

    @abc.abstractmethod
    async def say(self, text: str, blocking: bool) -> str: ...

    @abc.abstractmethod
    async def to_text(self, speech: bytes, format: str) -> str: ...

    @abc.abstractmethod
    async def to_speech(self, text: str) -> bytes: ...

    @abc.abstractmethod
    async def completion(self, text: str, blocking: bool) -> str: ...

    @abc.abstractmethod
    async def get_commands(self, number: int) -> Sequence[str]: ...

    @abc.abstractmethod
    async def listen_trigger(self, type: str) -> Sequence[str]: ...

    @abc.abstractmethod
    async def is_speaking(self) -> bool: ...


class SpeechRPCService(SpeechServiceBase, ResourceRPCServiceBase):

    RESOURCE_TYPE = SpeechService

    async def Say(self, stream: Stream[SayRequest, SayResponse]) -> None:
        request = await stream.recv_message()
        assert request is not None
        name = request.name
        service = self.get_resource(name)
        resp = await service.say(request.text, request.blocking)
        await stream.send_message(SayResponse(text=resp))

    async def ToText(self, stream: Stream[ToTextRequest, ToTextResponse]) -> None:
        request = await stream.recv_message()
        assert request is not None
        name = request.name
        service = self.get_resource(name)
        resp = await service.to_text(request.speech, request.format)
        await stream.send_message(ToTextResponse(text=resp))

    async def ToSpeech(self, stream: Stream[ToSpeechRequest, ToSpeechResponse]) -> None:
        request = await stream.recv_message()
        assert request is not None
        name = request.name
        service = self.get_resource(name)
        resp = await service.to_speech(request.text)
        await stream.send_message(ToSpeechResponse(speech=resp))

    async def Completion(
        self, stream: Stream[CompletionRequest, CompletionResponse]
    ) -> None:
        request = await stream.recv_message()
        assert request is not None
        name = request.name
        service = self.get_resource(name)
        resp = await service.completion(request.text, request.blocking)
        await stream.send_message(CompletionResponse(text=resp))

    async def GetCommands(
        self, stream: Stream[GetCommandsRequest, GetCommandsResponse]
    ) -> None:
        request = await stream.recv_message()
        assert request is not None
        name = request.name
        service = self.get_resource(name)
        resp = await service.get_commands(request.number)
        await stream.send_message(GetCommandsResponse(commands=resp))

    async def ListenTrigger(
        self, stream: Stream[ListenTriggerRequest, ListenTriggerResponse]
    ) -> None:
        request = await stream.recv_message()
        assert request is not None
        name = request.name
        service = self.get_resource(name)
        resp = await service.listen_trigger(request.type)
        await stream.send_message(ListenTriggerResponse(text=resp))

    async def IsSpeaking(
        self, stream: Stream[IsSpeakingRequest, IsSpeakingResponse]
    ) -> None:
        request = await stream.recv_message()
        assert request is not None
        name = request.name
        service = self.get_resource(name)
        resp = await service.is_speaking()
        await stream.send_message(IsSpeakingResponse(status=resp))


class SpeechClient(SpeechService):

    def __init__(self, name: str, channel: Channel) -> None:
        self.channel = channel
        self.client = SpeechServiceStub(channel)
        super().__init__(name)

    async def say(self, text: str, blocking: bool) -> str:
        request = SayRequest(name=self.name, text=text, blocking=blocking)
        response: SayResponse = await self.client.Say(request)
        return response.text

    async def to_text(self, speech: bytes, format: str) -> str:
        request = ToTextRequest(name=self.name, speech=speech, format=format)
        response: ToTextResponse = await self.client.ToText(request)
        return response.text

    async def to_speech(self, text: str) -> bytes:
        request = ToSpeechRequest(name=self.name, text=text)
        response: ToSpeechResponse = await self.client.ToSpeech(request)
        return response.speech

    async def completion(self, text: str, blocking: bool) -> str:
        request = CompletionRequest(name=self.name, text=text, blocking=blocking)
        response: CompletionResponse = await self.client.Completion(request)
        return response.text

    async def get_commands(self, number: int) -> list[str]:
        request = GetCommandsRequest(name=self.name, number=number)
        response: GetCommandsResponse = await self.client.GetCommands(request)
        return response.commands

    async def listen_trigger(self, type: str) -> str:
        request = ListenTriggerRequest(name=self.name, type=type)
        response: ListenTriggerResponse = await self.client.ListenTrigger(request)
        return response.text

    async def is_speaking(self) -> bool:
        request = IsSpeakingRequest(name=self.name)
        response: IsSpeakingResponse = await self.client.IsSpeaking(request)
        return response.status
