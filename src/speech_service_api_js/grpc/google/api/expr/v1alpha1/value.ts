/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 0.0.0
 * source: google/api/expr/v1alpha1/value.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../protobuf/any";
import * as dependency_2 from "./../../../protobuf/struct";
import * as pb_1 from "google-protobuf";
export namespace google.api.expr.v1alpha1 {
    export class Value extends pb_1.Message {
        #one_of_decls: number[][] = [[1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 15]];
        constructor(data?: any[] | ({} & (({
            null_value?: dependency_2.google.protobuf.NullValue;
            bool_value?: never;
            int64_value?: never;
            uint64_value?: never;
            double_value?: never;
            string_value?: never;
            bytes_value?: never;
            enum_value?: never;
            object_value?: never;
            map_value?: never;
            list_value?: never;
            type_value?: never;
        } | {
            null_value?: never;
            bool_value?: boolean;
            int64_value?: never;
            uint64_value?: never;
            double_value?: never;
            string_value?: never;
            bytes_value?: never;
            enum_value?: never;
            object_value?: never;
            map_value?: never;
            list_value?: never;
            type_value?: never;
        } | {
            null_value?: never;
            bool_value?: never;
            int64_value?: number;
            uint64_value?: never;
            double_value?: never;
            string_value?: never;
            bytes_value?: never;
            enum_value?: never;
            object_value?: never;
            map_value?: never;
            list_value?: never;
            type_value?: never;
        } | {
            null_value?: never;
            bool_value?: never;
            int64_value?: never;
            uint64_value?: number;
            double_value?: never;
            string_value?: never;
            bytes_value?: never;
            enum_value?: never;
            object_value?: never;
            map_value?: never;
            list_value?: never;
            type_value?: never;
        } | {
            null_value?: never;
            bool_value?: never;
            int64_value?: never;
            uint64_value?: never;
            double_value?: number;
            string_value?: never;
            bytes_value?: never;
            enum_value?: never;
            object_value?: never;
            map_value?: never;
            list_value?: never;
            type_value?: never;
        } | {
            null_value?: never;
            bool_value?: never;
            int64_value?: never;
            uint64_value?: never;
            double_value?: never;
            string_value?: string;
            bytes_value?: never;
            enum_value?: never;
            object_value?: never;
            map_value?: never;
            list_value?: never;
            type_value?: never;
        } | {
            null_value?: never;
            bool_value?: never;
            int64_value?: never;
            uint64_value?: never;
            double_value?: never;
            string_value?: never;
            bytes_value?: Uint8Array;
            enum_value?: never;
            object_value?: never;
            map_value?: never;
            list_value?: never;
            type_value?: never;
        } | {
            null_value?: never;
            bool_value?: never;
            int64_value?: never;
            uint64_value?: never;
            double_value?: never;
            string_value?: never;
            bytes_value?: never;
            enum_value?: EnumValue;
            object_value?: never;
            map_value?: never;
            list_value?: never;
            type_value?: never;
        } | {
            null_value?: never;
            bool_value?: never;
            int64_value?: never;
            uint64_value?: never;
            double_value?: never;
            string_value?: never;
            bytes_value?: never;
            enum_value?: never;
            object_value?: dependency_1.google.protobuf.Any;
            map_value?: never;
            list_value?: never;
            type_value?: never;
        } | {
            null_value?: never;
            bool_value?: never;
            int64_value?: never;
            uint64_value?: never;
            double_value?: never;
            string_value?: never;
            bytes_value?: never;
            enum_value?: never;
            object_value?: never;
            map_value?: MapValue;
            list_value?: never;
            type_value?: never;
        } | {
            null_value?: never;
            bool_value?: never;
            int64_value?: never;
            uint64_value?: never;
            double_value?: never;
            string_value?: never;
            bytes_value?: never;
            enum_value?: never;
            object_value?: never;
            map_value?: never;
            list_value?: ListValue;
            type_value?: never;
        } | {
            null_value?: never;
            bool_value?: never;
            int64_value?: never;
            uint64_value?: never;
            double_value?: never;
            string_value?: never;
            bytes_value?: never;
            enum_value?: never;
            object_value?: never;
            map_value?: never;
            list_value?: never;
            type_value?: string;
        })))) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("null_value" in data && data.null_value != undefined) {
                    this.null_value = data.null_value;
                }
                if ("bool_value" in data && data.bool_value != undefined) {
                    this.bool_value = data.bool_value;
                }
                if ("int64_value" in data && data.int64_value != undefined) {
                    this.int64_value = data.int64_value;
                }
                if ("uint64_value" in data && data.uint64_value != undefined) {
                    this.uint64_value = data.uint64_value;
                }
                if ("double_value" in data && data.double_value != undefined) {
                    this.double_value = data.double_value;
                }
                if ("string_value" in data && data.string_value != undefined) {
                    this.string_value = data.string_value;
                }
                if ("bytes_value" in data && data.bytes_value != undefined) {
                    this.bytes_value = data.bytes_value;
                }
                if ("enum_value" in data && data.enum_value != undefined) {
                    this.enum_value = data.enum_value;
                }
                if ("object_value" in data && data.object_value != undefined) {
                    this.object_value = data.object_value;
                }
                if ("map_value" in data && data.map_value != undefined) {
                    this.map_value = data.map_value;
                }
                if ("list_value" in data && data.list_value != undefined) {
                    this.list_value = data.list_value;
                }
                if ("type_value" in data && data.type_value != undefined) {
                    this.type_value = data.type_value;
                }
            }
        }
        get null_value() {
            return pb_1.Message.getFieldWithDefault(this, 1, dependency_2.google.protobuf.NullValue.NULL_VALUE) as dependency_2.google.protobuf.NullValue;
        }
        set null_value(value: dependency_2.google.protobuf.NullValue) {
            pb_1.Message.setOneofField(this, 1, this.#one_of_decls[0], value);
        }
        get has_null_value() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get bool_value() {
            return pb_1.Message.getFieldWithDefault(this, 2, false) as boolean;
        }
        set bool_value(value: boolean) {
            pb_1.Message.setOneofField(this, 2, this.#one_of_decls[0], value);
        }
        get has_bool_value() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get int64_value() {
            return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
        }
        set int64_value(value: number) {
            pb_1.Message.setOneofField(this, 3, this.#one_of_decls[0], value);
        }
        get has_int64_value() {
            return pb_1.Message.getField(this, 3) != null;
        }
        get uint64_value() {
            return pb_1.Message.getFieldWithDefault(this, 4, 0) as number;
        }
        set uint64_value(value: number) {
            pb_1.Message.setOneofField(this, 4, this.#one_of_decls[0], value);
        }
        get has_uint64_value() {
            return pb_1.Message.getField(this, 4) != null;
        }
        get double_value() {
            return pb_1.Message.getFieldWithDefault(this, 5, 0) as number;
        }
        set double_value(value: number) {
            pb_1.Message.setOneofField(this, 5, this.#one_of_decls[0], value);
        }
        get has_double_value() {
            return pb_1.Message.getField(this, 5) != null;
        }
        get string_value() {
            return pb_1.Message.getFieldWithDefault(this, 6, "") as string;
        }
        set string_value(value: string) {
            pb_1.Message.setOneofField(this, 6, this.#one_of_decls[0], value);
        }
        get has_string_value() {
            return pb_1.Message.getField(this, 6) != null;
        }
        get bytes_value() {
            return pb_1.Message.getFieldWithDefault(this, 7, new Uint8Array(0)) as Uint8Array;
        }
        set bytes_value(value: Uint8Array) {
            pb_1.Message.setOneofField(this, 7, this.#one_of_decls[0], value);
        }
        get has_bytes_value() {
            return pb_1.Message.getField(this, 7) != null;
        }
        get enum_value() {
            return pb_1.Message.getWrapperField(this, EnumValue, 9) as EnumValue;
        }
        set enum_value(value: EnumValue) {
            pb_1.Message.setOneofWrapperField(this, 9, this.#one_of_decls[0], value);
        }
        get has_enum_value() {
            return pb_1.Message.getField(this, 9) != null;
        }
        get object_value() {
            return pb_1.Message.getWrapperField(this, dependency_1.google.protobuf.Any, 10) as dependency_1.google.protobuf.Any;
        }
        set object_value(value: dependency_1.google.protobuf.Any) {
            pb_1.Message.setOneofWrapperField(this, 10, this.#one_of_decls[0], value);
        }
        get has_object_value() {
            return pb_1.Message.getField(this, 10) != null;
        }
        get map_value() {
            return pb_1.Message.getWrapperField(this, MapValue, 11) as MapValue;
        }
        set map_value(value: MapValue) {
            pb_1.Message.setOneofWrapperField(this, 11, this.#one_of_decls[0], value);
        }
        get has_map_value() {
            return pb_1.Message.getField(this, 11) != null;
        }
        get list_value() {
            return pb_1.Message.getWrapperField(this, ListValue, 12) as ListValue;
        }
        set list_value(value: ListValue) {
            pb_1.Message.setOneofWrapperField(this, 12, this.#one_of_decls[0], value);
        }
        get has_list_value() {
            return pb_1.Message.getField(this, 12) != null;
        }
        get type_value() {
            return pb_1.Message.getFieldWithDefault(this, 15, "") as string;
        }
        set type_value(value: string) {
            pb_1.Message.setOneofField(this, 15, this.#one_of_decls[0], value);
        }
        get has_type_value() {
            return pb_1.Message.getField(this, 15) != null;
        }
        get kind() {
            const cases: {
                [index: number]: "none" | "null_value" | "bool_value" | "int64_value" | "uint64_value" | "double_value" | "string_value" | "bytes_value" | "enum_value" | "object_value" | "map_value" | "list_value" | "type_value";
            } = {
                0: "none",
                1: "null_value",
                2: "bool_value",
                3: "int64_value",
                4: "uint64_value",
                5: "double_value",
                6: "string_value",
                7: "bytes_value",
                9: "enum_value",
                10: "object_value",
                11: "map_value",
                12: "list_value",
                15: "type_value"
            };
            return cases[pb_1.Message.computeOneofCase(this, [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 15])];
        }
        static fromObject(data: {
            null_value?: dependency_2.google.protobuf.NullValue;
            bool_value?: boolean;
            int64_value?: number;
            uint64_value?: number;
            double_value?: number;
            string_value?: string;
            bytes_value?: Uint8Array;
            enum_value?: ReturnType<typeof EnumValue.prototype.toObject>;
            object_value?: ReturnType<typeof dependency_1.google.protobuf.Any.prototype.toObject>;
            map_value?: ReturnType<typeof MapValue.prototype.toObject>;
            list_value?: ReturnType<typeof ListValue.prototype.toObject>;
            type_value?: string;
        }): Value {
            const message = new Value({});
            if (data.null_value != null) {
                message.null_value = data.null_value;
            }
            if (data.bool_value != null) {
                message.bool_value = data.bool_value;
            }
            if (data.int64_value != null) {
                message.int64_value = data.int64_value;
            }
            if (data.uint64_value != null) {
                message.uint64_value = data.uint64_value;
            }
            if (data.double_value != null) {
                message.double_value = data.double_value;
            }
            if (data.string_value != null) {
                message.string_value = data.string_value;
            }
            if (data.bytes_value != null) {
                message.bytes_value = data.bytes_value;
            }
            if (data.enum_value != null) {
                message.enum_value = EnumValue.fromObject(data.enum_value);
            }
            if (data.object_value != null) {
                message.object_value = dependency_1.google.protobuf.Any.fromObject(data.object_value);
            }
            if (data.map_value != null) {
                message.map_value = MapValue.fromObject(data.map_value);
            }
            if (data.list_value != null) {
                message.list_value = ListValue.fromObject(data.list_value);
            }
            if (data.type_value != null) {
                message.type_value = data.type_value;
            }
            return message;
        }
        toObject() {
            const data: {
                null_value?: dependency_2.google.protobuf.NullValue;
                bool_value?: boolean;
                int64_value?: number;
                uint64_value?: number;
                double_value?: number;
                string_value?: string;
                bytes_value?: Uint8Array;
                enum_value?: ReturnType<typeof EnumValue.prototype.toObject>;
                object_value?: ReturnType<typeof dependency_1.google.protobuf.Any.prototype.toObject>;
                map_value?: ReturnType<typeof MapValue.prototype.toObject>;
                list_value?: ReturnType<typeof ListValue.prototype.toObject>;
                type_value?: string;
            } = {};
            if (this.null_value != null) {
                data.null_value = this.null_value;
            }
            if (this.bool_value != null) {
                data.bool_value = this.bool_value;
            }
            if (this.int64_value != null) {
                data.int64_value = this.int64_value;
            }
            if (this.uint64_value != null) {
                data.uint64_value = this.uint64_value;
            }
            if (this.double_value != null) {
                data.double_value = this.double_value;
            }
            if (this.string_value != null) {
                data.string_value = this.string_value;
            }
            if (this.bytes_value != null) {
                data.bytes_value = this.bytes_value;
            }
            if (this.enum_value != null) {
                data.enum_value = this.enum_value.toObject();
            }
            if (this.object_value != null) {
                data.object_value = this.object_value.toObject();
            }
            if (this.map_value != null) {
                data.map_value = this.map_value.toObject();
            }
            if (this.list_value != null) {
                data.list_value = this.list_value.toObject();
            }
            if (this.type_value != null) {
                data.type_value = this.type_value;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_null_value)
                writer.writeEnum(1, this.null_value);
            if (this.has_bool_value)
                writer.writeBool(2, this.bool_value);
            if (this.has_int64_value)
                writer.writeInt64(3, this.int64_value);
            if (this.has_uint64_value)
                writer.writeUint64(4, this.uint64_value);
            if (this.has_double_value)
                writer.writeDouble(5, this.double_value);
            if (this.has_string_value)
                writer.writeString(6, this.string_value);
            if (this.has_bytes_value)
                writer.writeBytes(7, this.bytes_value);
            if (this.has_enum_value)
                writer.writeMessage(9, this.enum_value, () => this.enum_value.serialize(writer));
            if (this.has_object_value)
                writer.writeMessage(10, this.object_value, () => this.object_value.serialize(writer));
            if (this.has_map_value)
                writer.writeMessage(11, this.map_value, () => this.map_value.serialize(writer));
            if (this.has_list_value)
                writer.writeMessage(12, this.list_value, () => this.list_value.serialize(writer));
            if (this.has_type_value)
                writer.writeString(15, this.type_value);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Value {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Value();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.null_value = reader.readEnum();
                        break;
                    case 2:
                        message.bool_value = reader.readBool();
                        break;
                    case 3:
                        message.int64_value = reader.readInt64();
                        break;
                    case 4:
                        message.uint64_value = reader.readUint64();
                        break;
                    case 5:
                        message.double_value = reader.readDouble();
                        break;
                    case 6:
                        message.string_value = reader.readString();
                        break;
                    case 7:
                        message.bytes_value = reader.readBytes();
                        break;
                    case 9:
                        reader.readMessage(message.enum_value, () => message.enum_value = EnumValue.deserialize(reader));
                        break;
                    case 10:
                        reader.readMessage(message.object_value, () => message.object_value = dependency_1.google.protobuf.Any.deserialize(reader));
                        break;
                    case 11:
                        reader.readMessage(message.map_value, () => message.map_value = MapValue.deserialize(reader));
                        break;
                    case 12:
                        reader.readMessage(message.list_value, () => message.list_value = ListValue.deserialize(reader));
                        break;
                    case 15:
                        message.type_value = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Value {
            return Value.deserialize(bytes);
        }
    }
    export class EnumValue extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            type?: string;
            value?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("type" in data && data.type != undefined) {
                    this.type = data.type;
                }
                if ("value" in data && data.value != undefined) {
                    this.value = data.value;
                }
            }
        }
        get type() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set type(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get value() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set value(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            type?: string;
            value?: number;
        }): EnumValue {
            const message = new EnumValue({});
            if (data.type != null) {
                message.type = data.type;
            }
            if (data.value != null) {
                message.value = data.value;
            }
            return message;
        }
        toObject() {
            const data: {
                type?: string;
                value?: number;
            } = {};
            if (this.type != null) {
                data.type = this.type;
            }
            if (this.value != null) {
                data.value = this.value;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.type.length)
                writer.writeString(1, this.type);
            if (this.value != 0)
                writer.writeInt32(2, this.value);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EnumValue {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EnumValue();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.type = reader.readString();
                        break;
                    case 2:
                        message.value = reader.readInt32();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): EnumValue {
            return EnumValue.deserialize(bytes);
        }
    }
    export class ListValue extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            values?: Value[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("values" in data && data.values != undefined) {
                    this.values = data.values;
                }
            }
        }
        get values() {
            return pb_1.Message.getRepeatedWrapperField(this, Value, 1) as Value[];
        }
        set values(value: Value[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        static fromObject(data: {
            values?: ReturnType<typeof Value.prototype.toObject>[];
        }): ListValue {
            const message = new ListValue({});
            if (data.values != null) {
                message.values = data.values.map(item => Value.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                values?: ReturnType<typeof Value.prototype.toObject>[];
            } = {};
            if (this.values != null) {
                data.values = this.values.map((item: Value) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.values.length)
                writer.writeRepeatedMessage(1, this.values, (item: Value) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ListValue {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ListValue();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.values, () => pb_1.Message.addToRepeatedWrapperField(message, 1, Value.deserialize(reader), Value));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ListValue {
            return ListValue.deserialize(bytes);
        }
    }
    export class MapValue extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            entries?: MapValue.Entry[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("entries" in data && data.entries != undefined) {
                    this.entries = data.entries;
                }
            }
        }
        get entries() {
            return pb_1.Message.getRepeatedWrapperField(this, MapValue.Entry, 1) as MapValue.Entry[];
        }
        set entries(value: MapValue.Entry[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        static fromObject(data: {
            entries?: ReturnType<typeof MapValue.Entry.prototype.toObject>[];
        }): MapValue {
            const message = new MapValue({});
            if (data.entries != null) {
                message.entries = data.entries.map(item => MapValue.Entry.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                entries?: ReturnType<typeof MapValue.Entry.prototype.toObject>[];
            } = {};
            if (this.entries != null) {
                data.entries = this.entries.map((item: MapValue.Entry) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.entries.length)
                writer.writeRepeatedMessage(1, this.entries, (item: MapValue.Entry) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MapValue {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MapValue();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.entries, () => pb_1.Message.addToRepeatedWrapperField(message, 1, MapValue.Entry.deserialize(reader), MapValue.Entry));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MapValue {
            return MapValue.deserialize(bytes);
        }
    }
    export namespace MapValue {
        export class Entry extends pb_1.Message {
            #one_of_decls: number[][] = [];
            constructor(data?: any[] | {
                key?: Value;
                value?: Value;
            }) {
                super();
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("key" in data && data.key != undefined) {
                        this.key = data.key;
                    }
                    if ("value" in data && data.value != undefined) {
                        this.value = data.value;
                    }
                }
            }
            get key() {
                return pb_1.Message.getWrapperField(this, Value, 1) as Value;
            }
            set key(value: Value) {
                pb_1.Message.setWrapperField(this, 1, value);
            }
            get has_key() {
                return pb_1.Message.getField(this, 1) != null;
            }
            get value() {
                return pb_1.Message.getWrapperField(this, Value, 2) as Value;
            }
            set value(value: Value) {
                pb_1.Message.setWrapperField(this, 2, value);
            }
            get has_value() {
                return pb_1.Message.getField(this, 2) != null;
            }
            static fromObject(data: {
                key?: ReturnType<typeof Value.prototype.toObject>;
                value?: ReturnType<typeof Value.prototype.toObject>;
            }): Entry {
                const message = new Entry({});
                if (data.key != null) {
                    message.key = Value.fromObject(data.key);
                }
                if (data.value != null) {
                    message.value = Value.fromObject(data.value);
                }
                return message;
            }
            toObject() {
                const data: {
                    key?: ReturnType<typeof Value.prototype.toObject>;
                    value?: ReturnType<typeof Value.prototype.toObject>;
                } = {};
                if (this.key != null) {
                    data.key = this.key.toObject();
                }
                if (this.value != null) {
                    data.value = this.value.toObject();
                }
                return data;
            }
            serialize(): Uint8Array;
            serialize(w: pb_1.BinaryWriter): void;
            serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
                const writer = w || new pb_1.BinaryWriter();
                if (this.has_key)
                    writer.writeMessage(1, this.key, () => this.key.serialize(writer));
                if (this.has_value)
                    writer.writeMessage(2, this.value, () => this.value.serialize(writer));
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Entry {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Entry();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            reader.readMessage(message.key, () => message.key = Value.deserialize(reader));
                            break;
                        case 2:
                            reader.readMessage(message.value, () => message.value = Value.deserialize(reader));
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            }
            serializeBinary(): Uint8Array {
                return this.serialize();
            }
            static deserializeBinary(bytes: Uint8Array): Entry {
                return Entry.deserialize(bytes);
            }
        }
    }
}
