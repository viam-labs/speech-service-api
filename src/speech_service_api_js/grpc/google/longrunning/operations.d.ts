/// <reference types="node" />
import * as dependency_3 from "./../protobuf/any";
import * as dependency_4 from "./../protobuf/duration";
import * as dependency_5 from "./../protobuf/empty";
import * as dependency_6 from "./../rpc/status";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace google.longrunning {
    export class Operation extends pb_1.Message {
        #private;
        constructor(data?: any[] | ({
            name?: string;
            metadata?: dependency_3.google.protobuf.Any;
            done?: boolean;
        } & (({
            error?: dependency_6.google.rpc.Status;
            response?: never;
        } | {
            error?: never;
            response?: dependency_3.google.protobuf.Any;
        }))));
        get name(): string;
        set name(value: string);
        get metadata(): dependency_3.google.protobuf.Any;
        set metadata(value: dependency_3.google.protobuf.Any);
        get has_metadata(): boolean;
        get done(): boolean;
        set done(value: boolean);
        get error(): dependency_6.google.rpc.Status;
        set error(value: dependency_6.google.rpc.Status);
        get has_error(): boolean;
        get response(): dependency_3.google.protobuf.Any;
        set response(value: dependency_3.google.protobuf.Any);
        get has_response(): boolean;
        get result(): "none" | "error" | "response" | undefined;
        static fromObject(data: {
            name?: string;
            metadata?: ReturnType<typeof dependency_3.google.protobuf.Any.prototype.toObject>;
            done?: boolean;
            error?: ReturnType<typeof dependency_6.google.rpc.Status.prototype.toObject>;
            response?: ReturnType<typeof dependency_3.google.protobuf.Any.prototype.toObject>;
        }): Operation;
        toObject(): {
            name?: string | undefined;
            metadata?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            done?: boolean | undefined;
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            response?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Operation;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Operation;
    }
    export class GetOperationRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            name?: string;
        });
        get name(): string;
        set name(value: string);
        static fromObject(data: {
            name?: string;
        }): GetOperationRequest;
        toObject(): {
            name?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetOperationRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GetOperationRequest;
    }
    export class ListOperationsRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            name?: string;
            filter?: string;
            page_size?: number;
            page_token?: string;
        });
        get name(): string;
        set name(value: string);
        get filter(): string;
        set filter(value: string);
        get page_size(): number;
        set page_size(value: number);
        get page_token(): string;
        set page_token(value: string);
        static fromObject(data: {
            name?: string;
            filter?: string;
            page_size?: number;
            page_token?: string;
        }): ListOperationsRequest;
        toObject(): {
            name?: string | undefined;
            filter?: string | undefined;
            page_size?: number | undefined;
            page_token?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ListOperationsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ListOperationsRequest;
    }
    export class ListOperationsResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            operations?: Operation[];
            next_page_token?: string;
        });
        get operations(): Operation[];
        set operations(value: Operation[]);
        get next_page_token(): string;
        set next_page_token(value: string);
        static fromObject(data: {
            operations?: ReturnType<typeof Operation.prototype.toObject>[];
            next_page_token?: string;
        }): ListOperationsResponse;
        toObject(): {
            operations?: {
                name?: string | undefined;
                metadata?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
                done?: boolean | undefined;
                error?: {
                    code?: number | undefined;
                    message?: string | undefined;
                    details?: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
                response?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[] | undefined;
            next_page_token?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ListOperationsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ListOperationsResponse;
    }
    export class CancelOperationRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            name?: string;
        });
        get name(): string;
        set name(value: string);
        static fromObject(data: {
            name?: string;
        }): CancelOperationRequest;
        toObject(): {
            name?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CancelOperationRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): CancelOperationRequest;
    }
    export class DeleteOperationRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            name?: string;
        });
        get name(): string;
        set name(value: string);
        static fromObject(data: {
            name?: string;
        }): DeleteOperationRequest;
        toObject(): {
            name?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DeleteOperationRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): DeleteOperationRequest;
    }
    export class WaitOperationRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            name?: string;
            timeout?: dependency_4.google.protobuf.Duration;
        });
        get name(): string;
        set name(value: string);
        get timeout(): dependency_4.google.protobuf.Duration;
        set timeout(value: dependency_4.google.protobuf.Duration);
        get has_timeout(): boolean;
        static fromObject(data: {
            name?: string;
            timeout?: ReturnType<typeof dependency_4.google.protobuf.Duration.prototype.toObject>;
        }): WaitOperationRequest;
        toObject(): {
            name?: string | undefined;
            timeout?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): WaitOperationRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): WaitOperationRequest;
    }
    export class OperationInfo extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            response_type?: string;
            metadata_type?: string;
        });
        get response_type(): string;
        set response_type(value: string);
        get metadata_type(): string;
        set metadata_type(value: string);
        static fromObject(data: {
            response_type?: string;
            metadata_type?: string;
        }): OperationInfo;
        toObject(): {
            response_type?: string | undefined;
            metadata_type?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): OperationInfo;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): OperationInfo;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedOperationsService {
        static definition: {
            ListOperations: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: ListOperationsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => ListOperationsRequest;
                responseSerialize: (message: ListOperationsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => ListOperationsResponse;
            };
            GetOperation: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: GetOperationRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => GetOperationRequest;
                responseSerialize: (message: Operation) => Buffer;
                responseDeserialize: (bytes: Buffer) => Operation;
            };
            DeleteOperation: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: DeleteOperationRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => DeleteOperationRequest;
                responseSerialize: (message: dependency_5.google.protobuf.Empty) => Buffer;
                responseDeserialize: (bytes: Buffer) => dependency_5.google.protobuf.Empty;
            };
            CancelOperation: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: CancelOperationRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => CancelOperationRequest;
                responseSerialize: (message: dependency_5.google.protobuf.Empty) => Buffer;
                responseDeserialize: (bytes: Buffer) => dependency_5.google.protobuf.Empty;
            };
            WaitOperation: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: WaitOperationRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => WaitOperationRequest;
                responseSerialize: (message: Operation) => Buffer;
                responseDeserialize: (bytes: Buffer) => Operation;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract ListOperations(call: grpc_1.ServerUnaryCall<ListOperationsRequest, ListOperationsResponse>, callback: grpc_1.sendUnaryData<ListOperationsResponse>): void;
        abstract GetOperation(call: grpc_1.ServerUnaryCall<GetOperationRequest, Operation>, callback: grpc_1.sendUnaryData<Operation>): void;
        abstract DeleteOperation(call: grpc_1.ServerUnaryCall<DeleteOperationRequest, dependency_5.google.protobuf.Empty>, callback: grpc_1.sendUnaryData<dependency_5.google.protobuf.Empty>): void;
        abstract CancelOperation(call: grpc_1.ServerUnaryCall<CancelOperationRequest, dependency_5.google.protobuf.Empty>, callback: grpc_1.sendUnaryData<dependency_5.google.protobuf.Empty>): void;
        abstract WaitOperation(call: grpc_1.ServerUnaryCall<WaitOperationRequest, Operation>, callback: grpc_1.sendUnaryData<Operation>): void;
    }
    const OperationsClient_base: grpc_1.ServiceClientConstructor;
    export class OperationsClient extends OperationsClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        ListOperations: GrpcUnaryServiceInterface<ListOperationsRequest, ListOperationsResponse>;
        GetOperation: GrpcUnaryServiceInterface<GetOperationRequest, Operation>;
        DeleteOperation: GrpcUnaryServiceInterface<DeleteOperationRequest, dependency_5.google.protobuf.Empty>;
        CancelOperation: GrpcUnaryServiceInterface<CancelOperationRequest, dependency_5.google.protobuf.Empty>;
        WaitOperation: GrpcUnaryServiceInterface<WaitOperationRequest, Operation>;
    }
    export {};
}
