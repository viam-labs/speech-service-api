/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 0.0.0
 * source: google/protobuf/timestamp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export declare namespace google.protobuf {
    class Timestamp extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            seconds?: number;
            nanos?: number;
        });
        get seconds(): number;
        set seconds(value: number);
        get nanos(): number;
        set nanos(value: number);
        static fromObject(data: {
            seconds?: number;
            nanos?: number;
        }): Timestamp;
        toObject(): {
            seconds?: number | undefined;
            nanos?: number | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Timestamp;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Timestamp;
    }
}
