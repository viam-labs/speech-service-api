/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 0.0.0
 * source: google/api/resource.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../protobuf/descriptor";
import * as pb_1 from "google-protobuf";
export namespace google.api {
    export class ResourceDescriptor extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            type?: string;
            pattern?: string[];
            name_field?: string;
            history?: ResourceDescriptor.History;
            plural?: string;
            singular?: string;
            style?: ResourceDescriptor.Style[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2, 10], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("type" in data && data.type != undefined) {
                    this.type = data.type;
                }
                if ("pattern" in data && data.pattern != undefined) {
                    this.pattern = data.pattern;
                }
                if ("name_field" in data && data.name_field != undefined) {
                    this.name_field = data.name_field;
                }
                if ("history" in data && data.history != undefined) {
                    this.history = data.history;
                }
                if ("plural" in data && data.plural != undefined) {
                    this.plural = data.plural;
                }
                if ("singular" in data && data.singular != undefined) {
                    this.singular = data.singular;
                }
                if ("style" in data && data.style != undefined) {
                    this.style = data.style;
                }
            }
        }
        get type() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set type(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get pattern() {
            return pb_1.Message.getFieldWithDefault(this, 2, []) as string[];
        }
        set pattern(value: string[]) {
            pb_1.Message.setField(this, 2, value);
        }
        get name_field() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set name_field(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get history() {
            return pb_1.Message.getFieldWithDefault(this, 4, ResourceDescriptor.History.HISTORY_UNSPECIFIED) as ResourceDescriptor.History;
        }
        set history(value: ResourceDescriptor.History) {
            pb_1.Message.setField(this, 4, value);
        }
        get plural() {
            return pb_1.Message.getFieldWithDefault(this, 5, "") as string;
        }
        set plural(value: string) {
            pb_1.Message.setField(this, 5, value);
        }
        get singular() {
            return pb_1.Message.getFieldWithDefault(this, 6, "") as string;
        }
        set singular(value: string) {
            pb_1.Message.setField(this, 6, value);
        }
        get style() {
            return pb_1.Message.getFieldWithDefault(this, 10, []) as ResourceDescriptor.Style[];
        }
        set style(value: ResourceDescriptor.Style[]) {
            pb_1.Message.setField(this, 10, value);
        }
        static fromObject(data: {
            type?: string;
            pattern?: string[];
            name_field?: string;
            history?: ResourceDescriptor.History;
            plural?: string;
            singular?: string;
            style?: ResourceDescriptor.Style[];
        }): ResourceDescriptor {
            const message = new ResourceDescriptor({});
            if (data.type != null) {
                message.type = data.type;
            }
            if (data.pattern != null) {
                message.pattern = data.pattern;
            }
            if (data.name_field != null) {
                message.name_field = data.name_field;
            }
            if (data.history != null) {
                message.history = data.history;
            }
            if (data.plural != null) {
                message.plural = data.plural;
            }
            if (data.singular != null) {
                message.singular = data.singular;
            }
            if (data.style != null) {
                message.style = data.style;
            }
            return message;
        }
        toObject() {
            const data: {
                type?: string;
                pattern?: string[];
                name_field?: string;
                history?: ResourceDescriptor.History;
                plural?: string;
                singular?: string;
                style?: ResourceDescriptor.Style[];
            } = {};
            if (this.type != null) {
                data.type = this.type;
            }
            if (this.pattern != null) {
                data.pattern = this.pattern;
            }
            if (this.name_field != null) {
                data.name_field = this.name_field;
            }
            if (this.history != null) {
                data.history = this.history;
            }
            if (this.plural != null) {
                data.plural = this.plural;
            }
            if (this.singular != null) {
                data.singular = this.singular;
            }
            if (this.style != null) {
                data.style = this.style;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.type.length)
                writer.writeString(1, this.type);
            if (this.pattern.length)
                writer.writeRepeatedString(2, this.pattern);
            if (this.name_field.length)
                writer.writeString(3, this.name_field);
            if (this.history != ResourceDescriptor.History.HISTORY_UNSPECIFIED)
                writer.writeEnum(4, this.history);
            if (this.plural.length)
                writer.writeString(5, this.plural);
            if (this.singular.length)
                writer.writeString(6, this.singular);
            if (this.style.length)
                writer.writePackedEnum(10, this.style);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ResourceDescriptor {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ResourceDescriptor();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.type = reader.readString();
                        break;
                    case 2:
                        pb_1.Message.addToRepeatedField(message, 2, reader.readString());
                        break;
                    case 3:
                        message.name_field = reader.readString();
                        break;
                    case 4:
                        message.history = reader.readEnum();
                        break;
                    case 5:
                        message.plural = reader.readString();
                        break;
                    case 6:
                        message.singular = reader.readString();
                        break;
                    case 10:
                        message.style = reader.readPackedEnum();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ResourceDescriptor {
            return ResourceDescriptor.deserialize(bytes);
        }
    }
    export namespace ResourceDescriptor {
        export enum History {
            HISTORY_UNSPECIFIED = 0,
            ORIGINALLY_SINGLE_PATTERN = 1,
            FUTURE_MULTI_PATTERN = 2
        }
        export enum Style {
            STYLE_UNSPECIFIED = 0,
            DECLARATIVE_FRIENDLY = 1
        }
    }
    export class ResourceReference extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            type?: string;
            child_type?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("type" in data && data.type != undefined) {
                    this.type = data.type;
                }
                if ("child_type" in data && data.child_type != undefined) {
                    this.child_type = data.child_type;
                }
            }
        }
        get type() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set type(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get child_type() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set child_type(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            type?: string;
            child_type?: string;
        }): ResourceReference {
            const message = new ResourceReference({});
            if (data.type != null) {
                message.type = data.type;
            }
            if (data.child_type != null) {
                message.child_type = data.child_type;
            }
            return message;
        }
        toObject() {
            const data: {
                type?: string;
                child_type?: string;
            } = {};
            if (this.type != null) {
                data.type = this.type;
            }
            if (this.child_type != null) {
                data.child_type = this.child_type;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.type.length)
                writer.writeString(1, this.type);
            if (this.child_type.length)
                writer.writeString(2, this.child_type);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ResourceReference {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ResourceReference();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.type = reader.readString();
                        break;
                    case 2:
                        message.child_type = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ResourceReference {
            return ResourceReference.deserialize(bytes);
        }
    }
}
