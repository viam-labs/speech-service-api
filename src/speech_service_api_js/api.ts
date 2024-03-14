import pb from './grpc/speech_pb';
import { SpeechServiceClient } from './grpc/speech_pb_service';
import * as Viam from '@viamrobotics/sdk';
import type { Speech } from './interface';

/**
 * A gRPC-web client for a Vision service.
 *
 * @group Clients
 */
export class SpeechClient implements Speech {
  private client: SpeechServiceClient;
  private readonly name: string;
  private readonly options: Viam.Options;

  constructor(client: Viam.RobotClient, name: string, options: Viam.Options = {}) {
    this.client = client.createServiceClient(SpeechServiceClient);
    this.name = name;
    this.options = options;
  }

  private get service() {
    return this.client;
  }

  async say(text: string, blocking: boolean) {
    const { service } = this;

    const request = new pb.SayRequest();
    request.setName(this.name);
    request.setText(text);
    request.setBlocking(blocking);

    this.options.requestLogger?.(request);

    const response = await Viam.promisify<
      pb.SayRequest,
      pb.SayResponse
    >(service.say.bind(service), request);

    return response.getText();
  }

  async toText(speech: Uint8Array, format: string) {
    const { service } = this;

    const request = new pb.ToTextRequest();
    request.setName(this.name);
    request.setSpeech(speech);
    request.setFormat(format)

    this.options.requestLogger?.(request);

    const response = await Viam.promisify<
      pb.ToTextRequest,
      pb.ToTextResponse
    >(service.toText.bind(service), request);

    return response.getText();
  }

  async toSpeech(text: string) {
    const { service } = this;

    const request = new pb.ToSpeechRequest();
    request.setName(this.name);
    request.setText(text);

    this.options.requestLogger?.(request);

    const response = await Viam.promisify<
      pb.ToSpeechRequest,
      pb.ToSpeechResponse
    >(service.toSpeech.bind(service), request);

    return response.getSpeech_asU8();
  }

  async completion(text: string, blocking: boolean) {
    const { service } = this;

    const request = new pb.CompletionRequest();
    request.setName(this.name);
    request.setText(text);
    request.setBlocking(blocking);

    this.options.requestLogger?.(request);

    const response = await Viam.promisify<
      pb.CompletionRequest,
      pb.CompletionResponse
    >(service.completion.bind(service), request);

    return response.getText();
  }

  async getCommands(number: number) {
    const { service } = this;

    const request = new pb.GetCommandsRequest();
    request.setName(this.name);
    request.setNumber(number);

    this.options.requestLogger?.(request);

    const response = await Viam.promisify<
      pb.GetCommandsRequest,
      pb.GetCommandsResponse
    >(service.getCommands.bind(service), request);

    return response.getCommandsList();
  }

  async listenTrigger(type: string) {
    const { service } = this;

    const request = new pb.ListenTriggerRequest();
    request.setName(this.name);
    request.setType(type);

    this.options.requestLogger?.(request);

    const response = await Viam.promisify<
      pb.ListenTriggerRequest,
      pb.ListenTriggerResponse
    >(service.listenTrigger.bind(service), request);

    return response.getText();
  }

  async listen() {
    const { service } = this;

    const request = new pb.ListenRequest();
    request.setName(this.name);

    this.options.requestLogger?.(request);

    const response = await Viam.promisify<
      pb.ListenRequest,
      pb.ListenResponse
    >(service.listen.bind(service), request);

    return response.getText();
  }

  async isSpeaking() {
    const { service } = this;

    const request = new pb.IsSpeakingRequest();
    request.setName(this.name);

    this.options.requestLogger?.(request);

    const response = await Viam.promisify<
      pb.IsSpeakingRequest,
      pb.IsSpeakingResponse
    >(service.isSpeaking.bind(service), request);

    return response.getStatus();
  }

  async doCommand(_command: Viam.StructType): Promise<Viam.StructType> {
    return {}
  }
}
