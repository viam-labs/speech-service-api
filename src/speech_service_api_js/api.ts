import { Struct, type JsonValue } from '@bufbuild/protobuf';
import { type Client } from '@connectrpc/connect';
import * as Viam from '@viamrobotics/sdk';
import * as pb from './grpc/speech_pb';
import { SpeechService } from './grpc/speech_connect';
import type { Speech } from './interface';

/**
 * A gRPC-web client for a Vision service.
 *
 * @group Clients
 */
export class SpeechClient implements Speech {
  private client: Client<typeof SpeechService>;
  private readonly name: string;
  private readonly options: Viam.Options;

  constructor(client: Viam.RobotClient, name: string, options: Viam.Options = {}) {
    this.client = client.createServiceClient(SpeechService);
    this.name = name;
    this.options = options;
  }

  async say(text: string, blocking: boolean) {
    const request = new pb.SayRequest({
      name: this.name,
      text,
      blocking,
    });

    this.options.requestLogger?.(request);

    const response = await this.client.say(request)
    return response.text
  }

  async toText(speech: Uint8Array, format: string) {
    const request = new pb.ToTextRequest({
      name: this.name,
      speech,
      format,
    });

    this.options.requestLogger?.(request);

    const response = await this.client.toText(request);
    return response.text;
  }

  async toSpeech(text: string) {
    const request = new pb.ToSpeechRequest({
      name: this.name,
      text,
    });

    this.options.requestLogger?.(request);

    const response = await this.client.toSpeech(request);
    return response.speech
  }

  async completion(text: string, blocking: boolean) {
    const request = new pb.CompletionRequest({
      name: this.name,
      text,
      blocking,
    });

    this.options.requestLogger?.(request);

    const response = await this.client.completion(request);
    return response.text;
  }

  async getCommands(number: number) {
    const request = new pb.GetCommandsRequest({
      name: this.name,
      number,
    });

    this.options.requestLogger?.(request);

    const response = await this.client.getCommands(request);
    return response.commands;
  }

  async listenTrigger(type: string) {
    const request = new pb.ListenTriggerRequest({
      name: this.name,
      type,
    });

    this.options.requestLogger?.(request);

    const response = await this.client.listenTrigger(request);
    return response.text;
  }

  async listen() {
    const request = new pb.ListenRequest({ name: this.name });

    this.options.requestLogger?.(request);

    const response = await this.client.listen(request);
    return response.text;
  }

  async isSpeaking() {
    const request = new pb.IsSpeakingRequest({ name: this.name });

    this.options.requestLogger?.(request);

    const response = await this.client.isSpeaking(request);
    return response.status;
  }

  async doCommand(_command: Struct): Promise<JsonValue> {
    return {}
  }
}
