/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 0.0.0
 * source: google/type/localized_text.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace google.type {
    export class LocalizedText extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            text?: string;
            language_code?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("text" in data && data.text != undefined) {
                    this.text = data.text;
                }
                if ("language_code" in data && data.language_code != undefined) {
                    this.language_code = data.language_code;
                }
            }
        }
        get text() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set text(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get language_code() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set language_code(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            text?: string;
            language_code?: string;
        }): LocalizedText {
            const message = new LocalizedText({});
            if (data.text != null) {
                message.text = data.text;
            }
            if (data.language_code != null) {
                message.language_code = data.language_code;
            }
            return message;
        }
        toObject() {
            const data: {
                text?: string;
                language_code?: string;
            } = {};
            if (this.text != null) {
                data.text = this.text;
            }
            if (this.language_code != null) {
                data.language_code = this.language_code;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.text.length)
                writer.writeString(1, this.text);
            if (this.language_code.length)
                writer.writeString(2, this.language_code);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): LocalizedText {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new LocalizedText();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.text = reader.readString();
                        break;
                    case 2:
                        message.language_code = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): LocalizedText {
            return LocalizedText.deserialize(bytes);
        }
    }
}
