// @generated by protoc-gen-connect-es v1.6.1
// @generated from file speech.proto (package viamlabs.service.speech.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CompletionRequest, CompletionResponse, GetCommandsRequest, GetCommandsResponse, IsSpeakingRequest, IsSpeakingResponse, ListenRequest, ListenResponse, ListenTriggerRequest, ListenTriggerResponse, SayRequest, SayResponse, ToSpeechRequest, ToSpeechResponse, ToTextRequest, ToTextResponse } from "./speech_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service viamlabs.service.speech.v1.SpeechService
 */
export const SpeechService = {
  typeName: "viamlabs.service.speech.v1.SpeechService",
  methods: {
    /**
     * @generated from rpc viamlabs.service.speech.v1.SpeechService.Say
     */
    say: {
      name: "Say",
      I: SayRequest,
      O: SayResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc viamlabs.service.speech.v1.SpeechService.ToText
     */
    toText: {
      name: "ToText",
      I: ToTextRequest,
      O: ToTextResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc viamlabs.service.speech.v1.SpeechService.ToSpeech
     */
    toSpeech: {
      name: "ToSpeech",
      I: ToSpeechRequest,
      O: ToSpeechResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc viamlabs.service.speech.v1.SpeechService.Completion
     */
    completion: {
      name: "Completion",
      I: CompletionRequest,
      O: CompletionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc viamlabs.service.speech.v1.SpeechService.GetCommands
     */
    getCommands: {
      name: "GetCommands",
      I: GetCommandsRequest,
      O: GetCommandsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc viamlabs.service.speech.v1.SpeechService.ListenTrigger
     */
    listenTrigger: {
      name: "ListenTrigger",
      I: ListenTriggerRequest,
      O: ListenTriggerResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc viamlabs.service.speech.v1.SpeechService.Listen
     */
    listen: {
      name: "Listen",
      I: ListenRequest,
      O: ListenResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc viamlabs.service.speech.v1.SpeechService.IsSpeaking
     */
    isSpeaking: {
      name: "IsSpeaking",
      I: IsSpeakingRequest,
      O: IsSpeakingResponse,
      kind: MethodKind.Unary,
    },
  }
};

