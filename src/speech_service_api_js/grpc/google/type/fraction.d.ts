/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 0.0.0
 * source: google/type/fraction.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export declare namespace google.type {
    class Fraction extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            numerator?: number;
            denominator?: number;
        });
        get numerator(): number;
        set numerator(value: number);
        get denominator(): number;
        set denominator(value: number);
        static fromObject(data: {
            numerator?: number;
            denominator?: number;
        }): Fraction;
        toObject(): {
            numerator?: number | undefined;
            denominator?: number | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Fraction;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Fraction;
    }
}
