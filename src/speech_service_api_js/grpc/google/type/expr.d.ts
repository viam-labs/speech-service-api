/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 0.0.0
 * source: google/type/expr.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export declare namespace google.type {
    class Expr extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            expression?: string;
            title?: string;
            description?: string;
            location?: string;
        });
        get expression(): string;
        set expression(value: string);
        get title(): string;
        set title(value: string);
        get description(): string;
        set description(value: string);
        get location(): string;
        set location(value: string);
        static fromObject(data: {
            expression?: string;
            title?: string;
            description?: string;
            location?: string;
        }): Expr;
        toObject(): {
            expression?: string | undefined;
            title?: string | undefined;
            description?: string | undefined;
            location?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Expr;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Expr;
    }
}