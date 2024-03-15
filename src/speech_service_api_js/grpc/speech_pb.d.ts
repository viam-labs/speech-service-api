// package: viamlabs.service.speech.v1
// file: speech.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "./google/api/annotations_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class SayRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getText(): string;
  setText(value: string): void;

  getBlocking(): boolean;
  setBlocking(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SayRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SayRequest): SayRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SayRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SayRequest;
  static deserializeBinaryFromReader(message: SayRequest, reader: jspb.BinaryReader): SayRequest;
}

export namespace SayRequest {
  export type AsObject = {
    name: string,
    text: string,
    blocking: boolean,
  }
}

export class SayResponse extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SayResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SayResponse): SayResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SayResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SayResponse;
  static deserializeBinaryFromReader(message: SayResponse, reader: jspb.BinaryReader): SayResponse;
}

export namespace SayResponse {
  export type AsObject = {
    text: string,
  }
}

export class ToTextRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getSpeech(): Uint8Array | string;
  getSpeech_asU8(): Uint8Array;
  getSpeech_asB64(): string;
  setSpeech(value: Uint8Array | string): void;

  getFormat(): string;
  setFormat(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ToTextRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ToTextRequest): ToTextRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ToTextRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ToTextRequest;
  static deserializeBinaryFromReader(message: ToTextRequest, reader: jspb.BinaryReader): ToTextRequest;
}

export namespace ToTextRequest {
  export type AsObject = {
    name: string,
    speech: Uint8Array | string,
    format: string,
  }
}

export class ToTextResponse extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ToTextResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ToTextResponse): ToTextResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ToTextResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ToTextResponse;
  static deserializeBinaryFromReader(message: ToTextResponse, reader: jspb.BinaryReader): ToTextResponse;
}

export namespace ToTextResponse {
  export type AsObject = {
    text: string,
  }
}

export class ToSpeechRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getText(): string;
  setText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ToSpeechRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ToSpeechRequest): ToSpeechRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ToSpeechRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ToSpeechRequest;
  static deserializeBinaryFromReader(message: ToSpeechRequest, reader: jspb.BinaryReader): ToSpeechRequest;
}

export namespace ToSpeechRequest {
  export type AsObject = {
    name: string,
    text: string,
  }
}

export class ToSpeechResponse extends jspb.Message {
  getSpeech(): Uint8Array | string;
  getSpeech_asU8(): Uint8Array;
  getSpeech_asB64(): string;
  setSpeech(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ToSpeechResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ToSpeechResponse): ToSpeechResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ToSpeechResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ToSpeechResponse;
  static deserializeBinaryFromReader(message: ToSpeechResponse, reader: jspb.BinaryReader): ToSpeechResponse;
}

export namespace ToSpeechResponse {
  export type AsObject = {
    speech: Uint8Array | string,
  }
}

export class CompletionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getText(): string;
  setText(value: string): void;

  getBlocking(): boolean;
  setBlocking(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompletionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CompletionRequest): CompletionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompletionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompletionRequest;
  static deserializeBinaryFromReader(message: CompletionRequest, reader: jspb.BinaryReader): CompletionRequest;
}

export namespace CompletionRequest {
  export type AsObject = {
    name: string,
    text: string,
    blocking: boolean,
  }
}

export class CompletionResponse extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompletionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CompletionResponse): CompletionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompletionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompletionResponse;
  static deserializeBinaryFromReader(message: CompletionResponse, reader: jspb.BinaryReader): CompletionResponse;
}

export namespace CompletionResponse {
  export type AsObject = {
    text: string,
  }
}

export class GetCommandsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getNumber(): number;
  setNumber(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCommandsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCommandsRequest): GetCommandsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCommandsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCommandsRequest;
  static deserializeBinaryFromReader(message: GetCommandsRequest, reader: jspb.BinaryReader): GetCommandsRequest;
}

export namespace GetCommandsRequest {
  export type AsObject = {
    name: string,
    number: number,
  }
}

export class GetCommandsResponse extends jspb.Message {
  clearCommandsList(): void;
  getCommandsList(): Array<string>;
  setCommandsList(value: Array<string>): void;
  addCommands(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCommandsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCommandsResponse): GetCommandsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCommandsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCommandsResponse;
  static deserializeBinaryFromReader(message: GetCommandsResponse, reader: jspb.BinaryReader): GetCommandsResponse;
}

export namespace GetCommandsResponse {
  export type AsObject = {
    commandsList: Array<string>,
  }
}

export class ListenTriggerRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getType(): string;
  setType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListenTriggerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListenTriggerRequest): ListenTriggerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListenTriggerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListenTriggerRequest;
  static deserializeBinaryFromReader(message: ListenTriggerRequest, reader: jspb.BinaryReader): ListenTriggerRequest;
}

export namespace ListenTriggerRequest {
  export type AsObject = {
    name: string,
    type: string,
  }
}

export class ListenTriggerResponse extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListenTriggerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListenTriggerResponse): ListenTriggerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListenTriggerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListenTriggerResponse;
  static deserializeBinaryFromReader(message: ListenTriggerResponse, reader: jspb.BinaryReader): ListenTriggerResponse;
}

export namespace ListenTriggerResponse {
  export type AsObject = {
    text: string,
  }
}

export class ListenRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListenRequest): ListenRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListenRequest;
  static deserializeBinaryFromReader(message: ListenRequest, reader: jspb.BinaryReader): ListenRequest;
}

export namespace ListenRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListenResponse extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListenResponse): ListenResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListenResponse;
  static deserializeBinaryFromReader(message: ListenResponse, reader: jspb.BinaryReader): ListenResponse;
}

export namespace ListenResponse {
  export type AsObject = {
    text: string,
  }
}

export class ListenInBackgroundRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListenInBackgroundRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListenInBackgroundRequest): ListenInBackgroundRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListenInBackgroundRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListenInBackgroundRequest;
  static deserializeBinaryFromReader(message: ListenInBackgroundRequest, reader: jspb.BinaryReader): ListenInBackgroundRequest;
}

export namespace ListenInBackgroundRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class ListenInBackgroundResponse extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListenInBackgroundResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListenInBackgroundResponse): ListenInBackgroundResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListenInBackgroundResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListenInBackgroundResponse;
  static deserializeBinaryFromReader(message: ListenInBackgroundResponse, reader: jspb.BinaryReader): ListenInBackgroundResponse;
}

export namespace ListenInBackgroundResponse {
  export type AsObject = {
    text: string,
  }
}

export class IsSpeakingRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsSpeakingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IsSpeakingRequest): IsSpeakingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IsSpeakingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsSpeakingRequest;
  static deserializeBinaryFromReader(message: IsSpeakingRequest, reader: jspb.BinaryReader): IsSpeakingRequest;
}

export namespace IsSpeakingRequest {
  export type AsObject = {
    name: string,
  }
}

export class IsSpeakingResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsSpeakingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IsSpeakingResponse): IsSpeakingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IsSpeakingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsSpeakingResponse;
  static deserializeBinaryFromReader(message: IsSpeakingResponse, reader: jspb.BinaryReader): IsSpeakingResponse;
}

export namespace IsSpeakingResponse {
  export type AsObject = {
    status: boolean,
  }
}

