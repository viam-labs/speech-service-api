import * as Viam from '@viamrobotics/sdk';
import type { Speech } from './interface';
/**
 * A gRPC-web client for a Vision service.
 *
 * @group Clients
 */
export declare class SpeechClient implements Speech {
    private client;
    private readonly name;
    private readonly options;
    constructor(client: Viam.RobotClient, name: string, options?: Viam.Options);
    private get service();
    say(text: string, blocking: boolean): Promise<string>;
    toText(speech: Uint8Array, format: string): Promise<string>;
    toSpeech(text: string): Promise<Uint8Array>;
    completion(text: string, blocking: boolean): Promise<string>;
    getCommands(number: number): Promise<string[]>;
    listenTrigger(type: string): Promise<string>;
    isSpeaking(): Promise<boolean>;
    doCommand(command: Viam.StructType): Promise<Viam.StructType>;
}
