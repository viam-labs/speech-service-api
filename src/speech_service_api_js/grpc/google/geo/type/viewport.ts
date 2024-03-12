/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 0.0.0
 * source: google/geo/type/viewport.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../type/latlng";
import * as pb_1 from "google-protobuf";
export namespace google.geo.type {
    export class Viewport extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            low?: dependency_1.google.type.LatLng;
            high?: dependency_1.google.type.LatLng;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("low" in data && data.low != undefined) {
                    this.low = data.low;
                }
                if ("high" in data && data.high != undefined) {
                    this.high = data.high;
                }
            }
        }
        get low() {
            return pb_1.Message.getWrapperField(this, dependency_1.google.type.LatLng, 1) as dependency_1.google.type.LatLng;
        }
        set low(value: dependency_1.google.type.LatLng) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_low() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get high() {
            return pb_1.Message.getWrapperField(this, dependency_1.google.type.LatLng, 2) as dependency_1.google.type.LatLng;
        }
        set high(value: dependency_1.google.type.LatLng) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_high() {
            return pb_1.Message.getField(this, 2) != null;
        }
        static fromObject(data: {
            low?: ReturnType<typeof dependency_1.google.type.LatLng.prototype.toObject>;
            high?: ReturnType<typeof dependency_1.google.type.LatLng.prototype.toObject>;
        }): Viewport {
            const message = new Viewport({});
            if (data.low != null) {
                message.low = dependency_1.google.type.LatLng.fromObject(data.low);
            }
            if (data.high != null) {
                message.high = dependency_1.google.type.LatLng.fromObject(data.high);
            }
            return message;
        }
        toObject() {
            const data: {
                low?: ReturnType<typeof dependency_1.google.type.LatLng.prototype.toObject>;
                high?: ReturnType<typeof dependency_1.google.type.LatLng.prototype.toObject>;
            } = {};
            if (this.low != null) {
                data.low = this.low.toObject();
            }
            if (this.high != null) {
                data.high = this.high.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_low)
                writer.writeMessage(1, this.low, () => this.low.serialize(writer));
            if (this.has_high)
                writer.writeMessage(2, this.high, () => this.high.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Viewport {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Viewport();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.low, () => message.low = dependency_1.google.type.LatLng.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.high, () => message.high = dependency_1.google.type.LatLng.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Viewport {
            return Viewport.deserialize(bytes);
        }
    }
}
