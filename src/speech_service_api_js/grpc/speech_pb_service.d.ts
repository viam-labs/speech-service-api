// package: viamlabs.service.speech.v1
// file: speech.proto

import * as speech_pb from "./speech_pb";
import {grpc} from "@improbable-eng/grpc-web";

type SpeechServiceSay = {
  readonly methodName: string;
  readonly service: typeof SpeechService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof speech_pb.SayRequest;
  readonly responseType: typeof speech_pb.SayResponse;
};

type SpeechServiceToText = {
  readonly methodName: string;
  readonly service: typeof SpeechService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof speech_pb.ToTextRequest;
  readonly responseType: typeof speech_pb.ToTextResponse;
};

type SpeechServiceToSpeech = {
  readonly methodName: string;
  readonly service: typeof SpeechService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof speech_pb.ToSpeechRequest;
  readonly responseType: typeof speech_pb.ToSpeechResponse;
};

type SpeechServiceCompletion = {
  readonly methodName: string;
  readonly service: typeof SpeechService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof speech_pb.CompletionRequest;
  readonly responseType: typeof speech_pb.CompletionResponse;
};

type SpeechServiceGetCommands = {
  readonly methodName: string;
  readonly service: typeof SpeechService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof speech_pb.GetCommandsRequest;
  readonly responseType: typeof speech_pb.GetCommandsResponse;
};

type SpeechServiceListenTrigger = {
  readonly methodName: string;
  readonly service: typeof SpeechService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof speech_pb.ListenTriggerRequest;
  readonly responseType: typeof speech_pb.ListenTriggerResponse;
};

type SpeechServiceListen = {
  readonly methodName: string;
  readonly service: typeof SpeechService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof speech_pb.ListenRequest;
  readonly responseType: typeof speech_pb.ListenResponse;
};

type SpeechServiceIsSpeaking = {
  readonly methodName: string;
  readonly service: typeof SpeechService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof speech_pb.IsSpeakingRequest;
  readonly responseType: typeof speech_pb.IsSpeakingResponse;
};

export class SpeechService {
  static readonly serviceName: string;
  static readonly Say: SpeechServiceSay;
  static readonly ToText: SpeechServiceToText;
  static readonly ToSpeech: SpeechServiceToSpeech;
  static readonly Completion: SpeechServiceCompletion;
  static readonly GetCommands: SpeechServiceGetCommands;
  static readonly ListenTrigger: SpeechServiceListenTrigger;
  static readonly Listen: SpeechServiceListen;
  static readonly IsSpeaking: SpeechServiceIsSpeaking;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class SpeechServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  say(
    requestMessage: speech_pb.SayRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: speech_pb.SayResponse|null) => void
  ): UnaryResponse;
  say(
    requestMessage: speech_pb.SayRequest,
    callback: (error: ServiceError|null, responseMessage: speech_pb.SayResponse|null) => void
  ): UnaryResponse;
  toText(
    requestMessage: speech_pb.ToTextRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: speech_pb.ToTextResponse|null) => void
  ): UnaryResponse;
  toText(
    requestMessage: speech_pb.ToTextRequest,
    callback: (error: ServiceError|null, responseMessage: speech_pb.ToTextResponse|null) => void
  ): UnaryResponse;
  toSpeech(
    requestMessage: speech_pb.ToSpeechRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: speech_pb.ToSpeechResponse|null) => void
  ): UnaryResponse;
  toSpeech(
    requestMessage: speech_pb.ToSpeechRequest,
    callback: (error: ServiceError|null, responseMessage: speech_pb.ToSpeechResponse|null) => void
  ): UnaryResponse;
  completion(
    requestMessage: speech_pb.CompletionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: speech_pb.CompletionResponse|null) => void
  ): UnaryResponse;
  completion(
    requestMessage: speech_pb.CompletionRequest,
    callback: (error: ServiceError|null, responseMessage: speech_pb.CompletionResponse|null) => void
  ): UnaryResponse;
  getCommands(
    requestMessage: speech_pb.GetCommandsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: speech_pb.GetCommandsResponse|null) => void
  ): UnaryResponse;
  getCommands(
    requestMessage: speech_pb.GetCommandsRequest,
    callback: (error: ServiceError|null, responseMessage: speech_pb.GetCommandsResponse|null) => void
  ): UnaryResponse;
  listenTrigger(
    requestMessage: speech_pb.ListenTriggerRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: speech_pb.ListenTriggerResponse|null) => void
  ): UnaryResponse;
  listenTrigger(
    requestMessage: speech_pb.ListenTriggerRequest,
    callback: (error: ServiceError|null, responseMessage: speech_pb.ListenTriggerResponse|null) => void
  ): UnaryResponse;
  listen(
    requestMessage: speech_pb.ListenRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: speech_pb.ListenResponse|null) => void
  ): UnaryResponse;
  listen(
    requestMessage: speech_pb.ListenRequest,
    callback: (error: ServiceError|null, responseMessage: speech_pb.ListenResponse|null) => void
  ): UnaryResponse;
  isSpeaking(
    requestMessage: speech_pb.IsSpeakingRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: speech_pb.IsSpeakingResponse|null) => void
  ): UnaryResponse;
  isSpeaking(
    requestMessage: speech_pb.IsSpeakingRequest,
    callback: (error: ServiceError|null, responseMessage: speech_pb.IsSpeakingResponse|null) => void
  ): UnaryResponse;
}

