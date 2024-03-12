/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 0.0.0
 * source: google/type/color.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../protobuf/wrappers";
import * as pb_1 from "google-protobuf";
export namespace google.type {
    export class Color extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            red?: number;
            green?: number;
            blue?: number;
            alpha?: dependency_1.google.protobuf.FloatValue;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("red" in data && data.red != undefined) {
                    this.red = data.red;
                }
                if ("green" in data && data.green != undefined) {
                    this.green = data.green;
                }
                if ("blue" in data && data.blue != undefined) {
                    this.blue = data.blue;
                }
                if ("alpha" in data && data.alpha != undefined) {
                    this.alpha = data.alpha;
                }
            }
        }
        get red() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set red(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get green() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set green(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        get blue() {
            return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
        }
        set blue(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        get alpha() {
            return pb_1.Message.getWrapperField(this, dependency_1.google.protobuf.FloatValue, 4) as dependency_1.google.protobuf.FloatValue;
        }
        set alpha(value: dependency_1.google.protobuf.FloatValue) {
            pb_1.Message.setWrapperField(this, 4, value);
        }
        get has_alpha() {
            return pb_1.Message.getField(this, 4) != null;
        }
        static fromObject(data: {
            red?: number;
            green?: number;
            blue?: number;
            alpha?: ReturnType<typeof dependency_1.google.protobuf.FloatValue.prototype.toObject>;
        }): Color {
            const message = new Color({});
            if (data.red != null) {
                message.red = data.red;
            }
            if (data.green != null) {
                message.green = data.green;
            }
            if (data.blue != null) {
                message.blue = data.blue;
            }
            if (data.alpha != null) {
                message.alpha = dependency_1.google.protobuf.FloatValue.fromObject(data.alpha);
            }
            return message;
        }
        toObject() {
            const data: {
                red?: number;
                green?: number;
                blue?: number;
                alpha?: ReturnType<typeof dependency_1.google.protobuf.FloatValue.prototype.toObject>;
            } = {};
            if (this.red != null) {
                data.red = this.red;
            }
            if (this.green != null) {
                data.green = this.green;
            }
            if (this.blue != null) {
                data.blue = this.blue;
            }
            if (this.alpha != null) {
                data.alpha = this.alpha.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.red != 0)
                writer.writeFloat(1, this.red);
            if (this.green != 0)
                writer.writeFloat(2, this.green);
            if (this.blue != 0)
                writer.writeFloat(3, this.blue);
            if (this.has_alpha)
                writer.writeMessage(4, this.alpha, () => this.alpha.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Color {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Color();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.red = reader.readFloat();
                        break;
                    case 2:
                        message.green = reader.readFloat();
                        break;
                    case 3:
                        message.blue = reader.readFloat();
                        break;
                    case 4:
                        reader.readMessage(message.alpha, () => message.alpha = dependency_1.google.protobuf.FloatValue.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Color {
            return Color.deserialize(bytes);
        }
    }
}
