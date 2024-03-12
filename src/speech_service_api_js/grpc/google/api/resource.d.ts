import * as pb_1 from "google-protobuf";
export declare namespace google.api {
    class ResourceDescriptor extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            type?: string;
            pattern?: string[];
            name_field?: string;
            history?: ResourceDescriptor.History;
            plural?: string;
            singular?: string;
            style?: ResourceDescriptor.Style[];
        });
        get type(): string;
        set type(value: string);
        get pattern(): string[];
        set pattern(value: string[]);
        get name_field(): string;
        set name_field(value: string);
        get history(): ResourceDescriptor.History;
        set history(value: ResourceDescriptor.History);
        get plural(): string;
        set plural(value: string);
        get singular(): string;
        set singular(value: string);
        get style(): ResourceDescriptor.Style[];
        set style(value: ResourceDescriptor.Style[]);
        static fromObject(data: {
            type?: string;
            pattern?: string[];
            name_field?: string;
            history?: ResourceDescriptor.History;
            plural?: string;
            singular?: string;
            style?: ResourceDescriptor.Style[];
        }): ResourceDescriptor;
        toObject(): {
            type?: string | undefined;
            pattern?: string[] | undefined;
            name_field?: string | undefined;
            history?: ResourceDescriptor.History | undefined;
            plural?: string | undefined;
            singular?: string | undefined;
            style?: ResourceDescriptor.Style[] | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ResourceDescriptor;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ResourceDescriptor;
    }
    namespace ResourceDescriptor {
        enum History {
            HISTORY_UNSPECIFIED = 0,
            ORIGINALLY_SINGLE_PATTERN = 1,
            FUTURE_MULTI_PATTERN = 2
        }
        enum Style {
            STYLE_UNSPECIFIED = 0,
            DECLARATIVE_FRIENDLY = 1
        }
    }
    class ResourceReference extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            type?: string;
            child_type?: string;
        });
        get type(): string;
        set type(value: string);
        get child_type(): string;
        set child_type(value: string);
        static fromObject(data: {
            type?: string;
            child_type?: string;
        }): ResourceReference;
        toObject(): {
            type?: string | undefined;
            child_type?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ResourceReference;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ResourceReference;
    }
}
