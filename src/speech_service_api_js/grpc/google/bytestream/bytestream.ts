/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 0.0.0
 * source: google/bytestream/bytestream.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export namespace google.bytestream {
    export class ReadRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            resource_name?: string;
            read_offset?: number;
            read_limit?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("resource_name" in data && data.resource_name != undefined) {
                    this.resource_name = data.resource_name;
                }
                if ("read_offset" in data && data.read_offset != undefined) {
                    this.read_offset = data.read_offset;
                }
                if ("read_limit" in data && data.read_limit != undefined) {
                    this.read_limit = data.read_limit;
                }
            }
        }
        get resource_name() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set resource_name(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get read_offset() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set read_offset(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        get read_limit() {
            return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
        }
        set read_limit(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            resource_name?: string;
            read_offset?: number;
            read_limit?: number;
        }): ReadRequest {
            const message = new ReadRequest({});
            if (data.resource_name != null) {
                message.resource_name = data.resource_name;
            }
            if (data.read_offset != null) {
                message.read_offset = data.read_offset;
            }
            if (data.read_limit != null) {
                message.read_limit = data.read_limit;
            }
            return message;
        }
        toObject() {
            const data: {
                resource_name?: string;
                read_offset?: number;
                read_limit?: number;
            } = {};
            if (this.resource_name != null) {
                data.resource_name = this.resource_name;
            }
            if (this.read_offset != null) {
                data.read_offset = this.read_offset;
            }
            if (this.read_limit != null) {
                data.read_limit = this.read_limit;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.resource_name.length)
                writer.writeString(1, this.resource_name);
            if (this.read_offset != 0)
                writer.writeInt64(2, this.read_offset);
            if (this.read_limit != 0)
                writer.writeInt64(3, this.read_limit);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ReadRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ReadRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.resource_name = reader.readString();
                        break;
                    case 2:
                        message.read_offset = reader.readInt64();
                        break;
                    case 3:
                        message.read_limit = reader.readInt64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ReadRequest {
            return ReadRequest.deserialize(bytes);
        }
    }
    export class ReadResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            data?: Uint8Array;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("data" in data && data.data != undefined) {
                    this.data = data.data;
                }
            }
        }
        get data() {
            return pb_1.Message.getFieldWithDefault(this, 10, new Uint8Array(0)) as Uint8Array;
        }
        set data(value: Uint8Array) {
            pb_1.Message.setField(this, 10, value);
        }
        static fromObject(data: {
            data?: Uint8Array;
        }): ReadResponse {
            const message = new ReadResponse({});
            if (data.data != null) {
                message.data = data.data;
            }
            return message;
        }
        toObject() {
            const data: {
                data?: Uint8Array;
            } = {};
            if (this.data != null) {
                data.data = this.data;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.data.length)
                writer.writeBytes(10, this.data);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ReadResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ReadResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 10:
                        message.data = reader.readBytes();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ReadResponse {
            return ReadResponse.deserialize(bytes);
        }
    }
    export class WriteRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            resource_name?: string;
            write_offset?: number;
            finish_write?: boolean;
            data?: Uint8Array;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("resource_name" in data && data.resource_name != undefined) {
                    this.resource_name = data.resource_name;
                }
                if ("write_offset" in data && data.write_offset != undefined) {
                    this.write_offset = data.write_offset;
                }
                if ("finish_write" in data && data.finish_write != undefined) {
                    this.finish_write = data.finish_write;
                }
                if ("data" in data && data.data != undefined) {
                    this.data = data.data;
                }
            }
        }
        get resource_name() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set resource_name(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get write_offset() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set write_offset(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        get finish_write() {
            return pb_1.Message.getFieldWithDefault(this, 3, false) as boolean;
        }
        set finish_write(value: boolean) {
            pb_1.Message.setField(this, 3, value);
        }
        get data() {
            return pb_1.Message.getFieldWithDefault(this, 10, new Uint8Array(0)) as Uint8Array;
        }
        set data(value: Uint8Array) {
            pb_1.Message.setField(this, 10, value);
        }
        static fromObject(data: {
            resource_name?: string;
            write_offset?: number;
            finish_write?: boolean;
            data?: Uint8Array;
        }): WriteRequest {
            const message = new WriteRequest({});
            if (data.resource_name != null) {
                message.resource_name = data.resource_name;
            }
            if (data.write_offset != null) {
                message.write_offset = data.write_offset;
            }
            if (data.finish_write != null) {
                message.finish_write = data.finish_write;
            }
            if (data.data != null) {
                message.data = data.data;
            }
            return message;
        }
        toObject() {
            const data: {
                resource_name?: string;
                write_offset?: number;
                finish_write?: boolean;
                data?: Uint8Array;
            } = {};
            if (this.resource_name != null) {
                data.resource_name = this.resource_name;
            }
            if (this.write_offset != null) {
                data.write_offset = this.write_offset;
            }
            if (this.finish_write != null) {
                data.finish_write = this.finish_write;
            }
            if (this.data != null) {
                data.data = this.data;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.resource_name.length)
                writer.writeString(1, this.resource_name);
            if (this.write_offset != 0)
                writer.writeInt64(2, this.write_offset);
            if (this.finish_write != false)
                writer.writeBool(3, this.finish_write);
            if (this.data.length)
                writer.writeBytes(10, this.data);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): WriteRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new WriteRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.resource_name = reader.readString();
                        break;
                    case 2:
                        message.write_offset = reader.readInt64();
                        break;
                    case 3:
                        message.finish_write = reader.readBool();
                        break;
                    case 10:
                        message.data = reader.readBytes();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): WriteRequest {
            return WriteRequest.deserialize(bytes);
        }
    }
    export class WriteResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            committed_size?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("committed_size" in data && data.committed_size != undefined) {
                    this.committed_size = data.committed_size;
                }
            }
        }
        get committed_size() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set committed_size(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            committed_size?: number;
        }): WriteResponse {
            const message = new WriteResponse({});
            if (data.committed_size != null) {
                message.committed_size = data.committed_size;
            }
            return message;
        }
        toObject() {
            const data: {
                committed_size?: number;
            } = {};
            if (this.committed_size != null) {
                data.committed_size = this.committed_size;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.committed_size != 0)
                writer.writeInt64(1, this.committed_size);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): WriteResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new WriteResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.committed_size = reader.readInt64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): WriteResponse {
            return WriteResponse.deserialize(bytes);
        }
    }
    export class QueryWriteStatusRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            resource_name?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("resource_name" in data && data.resource_name != undefined) {
                    this.resource_name = data.resource_name;
                }
            }
        }
        get resource_name() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set resource_name(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            resource_name?: string;
        }): QueryWriteStatusRequest {
            const message = new QueryWriteStatusRequest({});
            if (data.resource_name != null) {
                message.resource_name = data.resource_name;
            }
            return message;
        }
        toObject() {
            const data: {
                resource_name?: string;
            } = {};
            if (this.resource_name != null) {
                data.resource_name = this.resource_name;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.resource_name.length)
                writer.writeString(1, this.resource_name);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryWriteStatusRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryWriteStatusRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.resource_name = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryWriteStatusRequest {
            return QueryWriteStatusRequest.deserialize(bytes);
        }
    }
    export class QueryWriteStatusResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            committed_size?: number;
            complete?: boolean;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("committed_size" in data && data.committed_size != undefined) {
                    this.committed_size = data.committed_size;
                }
                if ("complete" in data && data.complete != undefined) {
                    this.complete = data.complete;
                }
            }
        }
        get committed_size() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set committed_size(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get complete() {
            return pb_1.Message.getFieldWithDefault(this, 2, false) as boolean;
        }
        set complete(value: boolean) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            committed_size?: number;
            complete?: boolean;
        }): QueryWriteStatusResponse {
            const message = new QueryWriteStatusResponse({});
            if (data.committed_size != null) {
                message.committed_size = data.committed_size;
            }
            if (data.complete != null) {
                message.complete = data.complete;
            }
            return message;
        }
        toObject() {
            const data: {
                committed_size?: number;
                complete?: boolean;
            } = {};
            if (this.committed_size != null) {
                data.committed_size = this.committed_size;
            }
            if (this.complete != null) {
                data.complete = this.complete;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.committed_size != 0)
                writer.writeInt64(1, this.committed_size);
            if (this.complete != false)
                writer.writeBool(2, this.complete);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryWriteStatusResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryWriteStatusResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.committed_size = reader.readInt64();
                        break;
                    case 2:
                        message.complete = reader.readBool();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryWriteStatusResponse {
            return QueryWriteStatusResponse.deserialize(bytes);
        }
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    interface GrpcStreamServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
        (message: P, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
    }
    interface GrpWritableServiceInterface<P, R> {
        (metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
    }
    interface GrpcChunkServiceInterface<P, R> {
        (metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
        (options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
    }
    interface GrpcPromiseServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): Promise<R>;
        (message: P, options?: grpc_1.CallOptions): Promise<R>;
    }
    export abstract class UnimplementedByteStreamService {
        static definition = {
            Read: {
                path: "/google.bytestream.ByteStream/Read",
                requestStream: false,
                responseStream: true,
                requestSerialize: (message: ReadRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => ReadRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: ReadResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => ReadResponse.deserialize(new Uint8Array(bytes))
            },
            Write: {
                path: "/google.bytestream.ByteStream/Write",
                requestStream: true,
                responseStream: false,
                requestSerialize: (message: WriteRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => WriteRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: WriteResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => WriteResponse.deserialize(new Uint8Array(bytes))
            },
            QueryWriteStatus: {
                path: "/google.bytestream.ByteStream/QueryWriteStatus",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: QueryWriteStatusRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => QueryWriteStatusRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: QueryWriteStatusResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => QueryWriteStatusResponse.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract Read(call: grpc_1.ServerWritableStream<ReadRequest, ReadResponse>): void;
        abstract Write(call: grpc_1.ServerReadableStream<WriteRequest, WriteResponse>, callback: grpc_1.sendUnaryData<WriteResponse>): void;
        abstract QueryWriteStatus(call: grpc_1.ServerUnaryCall<QueryWriteStatusRequest, QueryWriteStatusResponse>, callback: grpc_1.sendUnaryData<QueryWriteStatusResponse>): void;
    }
    export class ByteStreamClient extends grpc_1.makeGenericClientConstructor(UnimplementedByteStreamService.definition, "ByteStream", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        Read: GrpcStreamServiceInterface<ReadRequest, ReadResponse> = (message: ReadRequest, metadata?: grpc_1.Metadata | grpc_1.CallOptions, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<ReadResponse> => {
            return super.Read(message, metadata, options);
        };
        Write: GrpWritableServiceInterface<WriteRequest, WriteResponse> = (metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<WriteResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<WriteResponse>, callback?: grpc_1.requestCallback<WriteResponse>): grpc_1.ClientWritableStream<WriteRequest> => {
            return super.Write(metadata, options, callback);
        };
        QueryWriteStatus: GrpcUnaryServiceInterface<QueryWriteStatusRequest, QueryWriteStatusResponse> = (message: QueryWriteStatusRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<QueryWriteStatusResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<QueryWriteStatusResponse>, callback?: grpc_1.requestCallback<QueryWriteStatusResponse>): grpc_1.ClientUnaryCall => {
            return super.QueryWriteStatus(message, metadata, options, callback);
        };
    }
}
