/// <reference types="node" />
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace viamlabs.service.speech.v1 {
    export class SayRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            name?: string;
            text?: string;
            blocking?: boolean;
        });
        get name(): string;
        set name(value: string);
        get text(): string;
        set text(value: string);
        get blocking(): boolean;
        set blocking(value: boolean);
        static fromObject(data: {
            name?: string;
            text?: string;
            blocking?: boolean;
        }): SayRequest;
        toObject(): {
            name?: string | undefined;
            text?: string | undefined;
            blocking?: boolean | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SayRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): SayRequest;
    }
    export class SayResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            text?: string;
        });
        get text(): string;
        set text(value: string);
        static fromObject(data: {
            text?: string;
        }): SayResponse;
        toObject(): {
            text?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SayResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): SayResponse;
    }
    export class ToTextRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            name?: string;
            speech?: Uint8Array;
            format?: string;
        });
        get name(): string;
        set name(value: string);
        get speech(): Uint8Array;
        set speech(value: Uint8Array);
        get format(): string;
        set format(value: string);
        static fromObject(data: {
            name?: string;
            speech?: Uint8Array;
            format?: string;
        }): ToTextRequest;
        toObject(): {
            name?: string | undefined;
            speech?: Uint8Array | undefined;
            format?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ToTextRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ToTextRequest;
    }
    export class ToTextResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            text?: string;
        });
        get text(): string;
        set text(value: string);
        static fromObject(data: {
            text?: string;
        }): ToTextResponse;
        toObject(): {
            text?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ToTextResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ToTextResponse;
    }
    export class ToSpeechRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            name?: string;
            text?: string;
        });
        get name(): string;
        set name(value: string);
        get text(): string;
        set text(value: string);
        static fromObject(data: {
            name?: string;
            text?: string;
        }): ToSpeechRequest;
        toObject(): {
            name?: string | undefined;
            text?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ToSpeechRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ToSpeechRequest;
    }
    export class ToSpeechResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            speech?: Uint8Array;
        });
        get speech(): Uint8Array;
        set speech(value: Uint8Array);
        static fromObject(data: {
            speech?: Uint8Array;
        }): ToSpeechResponse;
        toObject(): {
            speech?: Uint8Array | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ToSpeechResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ToSpeechResponse;
    }
    export class CompletionRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            name?: string;
            text?: string;
            blocking?: boolean;
        });
        get name(): string;
        set name(value: string);
        get text(): string;
        set text(value: string);
        get blocking(): boolean;
        set blocking(value: boolean);
        static fromObject(data: {
            name?: string;
            text?: string;
            blocking?: boolean;
        }): CompletionRequest;
        toObject(): {
            name?: string | undefined;
            text?: string | undefined;
            blocking?: boolean | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CompletionRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): CompletionRequest;
    }
    export class CompletionResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            text?: string;
        });
        get text(): string;
        set text(value: string);
        static fromObject(data: {
            text?: string;
        }): CompletionResponse;
        toObject(): {
            text?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CompletionResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): CompletionResponse;
    }
    export class GetCommandsRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            name?: string;
            number?: number;
        });
        get name(): string;
        set name(value: string);
        get number(): number;
        set number(value: number);
        static fromObject(data: {
            name?: string;
            number?: number;
        }): GetCommandsRequest;
        toObject(): {
            name?: string | undefined;
            number?: number | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetCommandsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GetCommandsRequest;
    }
    export class GetCommandsResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            commands?: string[];
        });
        get commands(): string[];
        set commands(value: string[]);
        static fromObject(data: {
            commands?: string[];
        }): GetCommandsResponse;
        toObject(): {
            commands?: string[] | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetCommandsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GetCommandsResponse;
    }
    export class ListenTriggerRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            name?: string;
            type?: string;
        });
        get name(): string;
        set name(value: string);
        get type(): string;
        set type(value: string);
        static fromObject(data: {
            name?: string;
            type?: string;
        }): ListenTriggerRequest;
        toObject(): {
            name?: string | undefined;
            type?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ListenTriggerRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ListenTriggerRequest;
    }
    export class ListenTriggerResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            text?: string;
        });
        get text(): string;
        set text(value: string);
        static fromObject(data: {
            text?: string;
        }): ListenTriggerResponse;
        toObject(): {
            text?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ListenTriggerResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ListenTriggerResponse;
    }
    export class IsSpeakingRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            name?: string;
        });
        get name(): string;
        set name(value: string);
        static fromObject(data: {
            name?: string;
        }): IsSpeakingRequest;
        toObject(): {
            name?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): IsSpeakingRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): IsSpeakingRequest;
    }
    export class IsSpeakingResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            status?: boolean;
        });
        get status(): boolean;
        set status(value: boolean);
        static fromObject(data: {
            status?: boolean;
        }): IsSpeakingResponse;
        toObject(): {
            status?: boolean | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): IsSpeakingResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): IsSpeakingResponse;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedSpeechServiceService {
        static definition: {
            Say: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: SayRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => SayRequest;
                responseSerialize: (message: SayResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => SayResponse;
            };
            ToText: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: ToTextRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => ToTextRequest;
                responseSerialize: (message: ToTextResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => ToTextResponse;
            };
            ToSpeech: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: ToSpeechRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => ToSpeechRequest;
                responseSerialize: (message: ToSpeechResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => ToSpeechResponse;
            };
            Completion: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: CompletionRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => CompletionRequest;
                responseSerialize: (message: CompletionResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => CompletionResponse;
            };
            GetCommands: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: GetCommandsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => GetCommandsRequest;
                responseSerialize: (message: GetCommandsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => GetCommandsResponse;
            };
            ListenTrigger: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: ListenTriggerRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => ListenTriggerRequest;
                responseSerialize: (message: ListenTriggerResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => ListenTriggerResponse;
            };
            IsSpeaking: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: IsSpeakingRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => IsSpeakingRequest;
                responseSerialize: (message: IsSpeakingResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => IsSpeakingResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract Say(call: grpc_1.ServerUnaryCall<SayRequest, SayResponse>, callback: grpc_1.sendUnaryData<SayResponse>): void;
        abstract ToText(call: grpc_1.ServerUnaryCall<ToTextRequest, ToTextResponse>, callback: grpc_1.sendUnaryData<ToTextResponse>): void;
        abstract ToSpeech(call: grpc_1.ServerUnaryCall<ToSpeechRequest, ToSpeechResponse>, callback: grpc_1.sendUnaryData<ToSpeechResponse>): void;
        abstract Completion(call: grpc_1.ServerUnaryCall<CompletionRequest, CompletionResponse>, callback: grpc_1.sendUnaryData<CompletionResponse>): void;
        abstract GetCommands(call: grpc_1.ServerUnaryCall<GetCommandsRequest, GetCommandsResponse>, callback: grpc_1.sendUnaryData<GetCommandsResponse>): void;
        abstract ListenTrigger(call: grpc_1.ServerUnaryCall<ListenTriggerRequest, ListenTriggerResponse>, callback: grpc_1.sendUnaryData<ListenTriggerResponse>): void;
        abstract IsSpeaking(call: grpc_1.ServerUnaryCall<IsSpeakingRequest, IsSpeakingResponse>, callback: grpc_1.sendUnaryData<IsSpeakingResponse>): void;
    }
    const SpeechServiceClient_base: grpc_1.ServiceClientConstructor;
    export class SpeechServiceClient extends SpeechServiceClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        Say: GrpcUnaryServiceInterface<SayRequest, SayResponse>;
        ToText: GrpcUnaryServiceInterface<ToTextRequest, ToTextResponse>;
        ToSpeech: GrpcUnaryServiceInterface<ToSpeechRequest, ToSpeechResponse>;
        Completion: GrpcUnaryServiceInterface<CompletionRequest, CompletionResponse>;
        GetCommands: GrpcUnaryServiceInterface<GetCommandsRequest, GetCommandsResponse>;
        ListenTrigger: GrpcUnaryServiceInterface<ListenTriggerRequest, ListenTriggerResponse>;
        IsSpeaking: GrpcUnaryServiceInterface<IsSpeakingRequest, IsSpeakingResponse>;
    }
    export {};
}
