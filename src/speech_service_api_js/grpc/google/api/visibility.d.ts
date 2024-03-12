import * as pb_1 from "google-protobuf";
export declare namespace google.api {
    class Visibility extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            rules?: VisibilityRule[];
        });
        get rules(): VisibilityRule[];
        set rules(value: VisibilityRule[]);
        static fromObject(data: {
            rules?: ReturnType<typeof VisibilityRule.prototype.toObject>[];
        }): Visibility;
        toObject(): {
            rules?: {
                selector?: string | undefined;
                restriction?: string | undefined;
            }[] | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Visibility;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Visibility;
    }
    class VisibilityRule extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            selector?: string;
            restriction?: string;
        });
        get selector(): string;
        set selector(value: string);
        get restriction(): string;
        set restriction(value: string);
        static fromObject(data: {
            selector?: string;
            restriction?: string;
        }): VisibilityRule;
        toObject(): {
            selector?: string | undefined;
            restriction?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): VisibilityRule;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): VisibilityRule;
    }
}
