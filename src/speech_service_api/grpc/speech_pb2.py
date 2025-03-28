# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: speech.proto
# Protobuf Python Version: 5.29.2
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import runtime_version as _runtime_version
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
_runtime_version.ValidateProtobufRuntimeVersion(
    _runtime_version.Domain.PUBLIC,
    5,
    29,
    2,
    '',
    'speech.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x0cspeech.proto\x12\x1aviamlabs.service.speech.v1\x1a\x1cgoogle/api/annotations.proto\"P\n\nSayRequest\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\x12\x12\n\x04text\x18\x02 \x01(\tR\x04text\x12\x1a\n\x08\x62locking\x18\x03 \x01(\x08R\x08\x62locking\"!\n\x0bSayResponse\x12\x12\n\x04text\x18\x01 \x01(\tR\x04text\"S\n\rToTextRequest\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\x12\x16\n\x06speech\x18\x02 \x01(\x0cR\x06speech\x12\x16\n\x06\x66ormat\x18\x03 \x01(\tR\x06\x66ormat\"$\n\x0eToTextResponse\x12\x12\n\x04text\x18\x01 \x01(\tR\x04text\"9\n\x0fToSpeechRequest\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\x12\x12\n\x04text\x18\x02 \x01(\tR\x04text\"*\n\x10ToSpeechResponse\x12\x16\n\x06speech\x18\x01 \x01(\x0cR\x06speech\"W\n\x11\x43ompletionRequest\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\x12\x12\n\x04text\x18\x02 \x01(\tR\x04text\x12\x1a\n\x08\x62locking\x18\x03 \x01(\x08R\x08\x62locking\"(\n\x12\x43ompletionResponse\x12\x12\n\x04text\x18\x01 \x01(\tR\x04text\"@\n\x12GetCommandsRequest\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\x12\x16\n\x06number\x18\x02 \x01(\x05R\x06number\"1\n\x13GetCommandsResponse\x12\x1a\n\x08\x63ommands\x18\x01 \x03(\tR\x08\x63ommands\">\n\x14ListenTriggerRequest\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\x12\x12\n\x04type\x18\x02 \x01(\tR\x04type\"+\n\x15ListenTriggerResponse\x12\x12\n\x04text\x18\x01 \x01(\tR\x04text\"#\n\rListenRequest\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\"$\n\x0eListenResponse\x12\x12\n\x04text\x18\x01 \x01(\tR\x04text\"\'\n\x11IsSpeakingRequest\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\",\n\x12IsSpeakingResponse\x12\x16\n\x06status\x18\x01 \x01(\x08R\x06status2\xa8\n\n\rSpeechService\x12\x8a\x01\n\x03Say\x12&.viamlabs.service.speech.v1.SayRequest\x1a\'.viamlabs.service.speech.v1.SayResponse\"2\x82\xd3\xe4\x93\x02,\"*/viamlabs/api/v1/service/speech/{name}/say\x12\x97\x01\n\x06ToText\x12).viamlabs.service.speech.v1.ToTextRequest\x1a*.viamlabs.service.speech.v1.ToTextResponse\"6\x82\xd3\xe4\x93\x02\x30\"./viamlabs/api/v1/service/speech/{name}/to_text\x12\x9f\x01\n\x08ToSpeech\x12+.viamlabs.service.speech.v1.ToSpeechRequest\x1a,.viamlabs.service.speech.v1.ToSpeechResponse\"8\x82\xd3\xe4\x93\x02\x32\"0/viamlabs/api/v1/service/speech/{name}/to_speech\x12\xa6\x01\n\nCompletion\x12-.viamlabs.service.speech.v1.CompletionRequest\x1a..viamlabs.service.speech.v1.CompletionResponse\"9\x82\xd3\xe4\x93\x02\x33\"1/viamlabs/api/v1/service/speech/{name}/completion\x12\xab\x01\n\x0bGetCommands\x12..viamlabs.service.speech.v1.GetCommandsRequest\x1a/.viamlabs.service.speech.v1.GetCommandsResponse\";\x82\xd3\xe4\x93\x02\x35\"3/viamlabs/api/v1/service/speech/{name}/get_commands\x12\xb3\x01\n\rListenTrigger\x12\x30.viamlabs.service.speech.v1.ListenTriggerRequest\x1a\x31.viamlabs.service.speech.v1.ListenTriggerResponse\"=\x82\xd3\xe4\x93\x02\x37\"5/viamlabs/api/v1/service/speech/{name}/listen_trigger\x12\x96\x01\n\x06Listen\x12).viamlabs.service.speech.v1.ListenRequest\x1a*.viamlabs.service.speech.v1.ListenResponse\"5\x82\xd3\xe4\x93\x02/\"-/viamlabs/api/v1/service/speech/{name}/listen\x12\xa7\x01\n\nIsSpeaking\x12-.viamlabs.service.speech.v1.IsSpeakingRequest\x1a..viamlabs.service.speech.v1.IsSpeakingResponse\":\x82\xd3\xe4\x93\x02\x34\"2/viamlabs/api/v1/service/speech/{name}/is_speakingB\x0eZ\x0c./speech-apib\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'speech_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z\014./speech-api'
  _globals['_SPEECHSERVICE'].methods_by_name['Say']._loaded_options = None
  _globals['_SPEECHSERVICE'].methods_by_name['Say']._serialized_options = b'\202\323\344\223\002,\"*/viamlabs/api/v1/service/speech/{name}/say'
  _globals['_SPEECHSERVICE'].methods_by_name['ToText']._loaded_options = None
  _globals['_SPEECHSERVICE'].methods_by_name['ToText']._serialized_options = b'\202\323\344\223\0020\"./viamlabs/api/v1/service/speech/{name}/to_text'
  _globals['_SPEECHSERVICE'].methods_by_name['ToSpeech']._loaded_options = None
  _globals['_SPEECHSERVICE'].methods_by_name['ToSpeech']._serialized_options = b'\202\323\344\223\0022\"0/viamlabs/api/v1/service/speech/{name}/to_speech'
  _globals['_SPEECHSERVICE'].methods_by_name['Completion']._loaded_options = None
  _globals['_SPEECHSERVICE'].methods_by_name['Completion']._serialized_options = b'\202\323\344\223\0023\"1/viamlabs/api/v1/service/speech/{name}/completion'
  _globals['_SPEECHSERVICE'].methods_by_name['GetCommands']._loaded_options = None
  _globals['_SPEECHSERVICE'].methods_by_name['GetCommands']._serialized_options = b'\202\323\344\223\0025\"3/viamlabs/api/v1/service/speech/{name}/get_commands'
  _globals['_SPEECHSERVICE'].methods_by_name['ListenTrigger']._loaded_options = None
  _globals['_SPEECHSERVICE'].methods_by_name['ListenTrigger']._serialized_options = b'\202\323\344\223\0027\"5/viamlabs/api/v1/service/speech/{name}/listen_trigger'
  _globals['_SPEECHSERVICE'].methods_by_name['Listen']._loaded_options = None
  _globals['_SPEECHSERVICE'].methods_by_name['Listen']._serialized_options = b'\202\323\344\223\002/\"-/viamlabs/api/v1/service/speech/{name}/listen'
  _globals['_SPEECHSERVICE'].methods_by_name['IsSpeaking']._loaded_options = None
  _globals['_SPEECHSERVICE'].methods_by_name['IsSpeaking']._serialized_options = b'\202\323\344\223\0024\"2/viamlabs/api/v1/service/speech/{name}/is_speaking'
  _globals['_SAYREQUEST']._serialized_start=74
  _globals['_SAYREQUEST']._serialized_end=154
  _globals['_SAYRESPONSE']._serialized_start=156
  _globals['_SAYRESPONSE']._serialized_end=189
  _globals['_TOTEXTREQUEST']._serialized_start=191
  _globals['_TOTEXTREQUEST']._serialized_end=274
  _globals['_TOTEXTRESPONSE']._serialized_start=276
  _globals['_TOTEXTRESPONSE']._serialized_end=312
  _globals['_TOSPEECHREQUEST']._serialized_start=314
  _globals['_TOSPEECHREQUEST']._serialized_end=371
  _globals['_TOSPEECHRESPONSE']._serialized_start=373
  _globals['_TOSPEECHRESPONSE']._serialized_end=415
  _globals['_COMPLETIONREQUEST']._serialized_start=417
  _globals['_COMPLETIONREQUEST']._serialized_end=504
  _globals['_COMPLETIONRESPONSE']._serialized_start=506
  _globals['_COMPLETIONRESPONSE']._serialized_end=546
  _globals['_GETCOMMANDSREQUEST']._serialized_start=548
  _globals['_GETCOMMANDSREQUEST']._serialized_end=612
  _globals['_GETCOMMANDSRESPONSE']._serialized_start=614
  _globals['_GETCOMMANDSRESPONSE']._serialized_end=663
  _globals['_LISTENTRIGGERREQUEST']._serialized_start=665
  _globals['_LISTENTRIGGERREQUEST']._serialized_end=727
  _globals['_LISTENTRIGGERRESPONSE']._serialized_start=729
  _globals['_LISTENTRIGGERRESPONSE']._serialized_end=772
  _globals['_LISTENREQUEST']._serialized_start=774
  _globals['_LISTENREQUEST']._serialized_end=809
  _globals['_LISTENRESPONSE']._serialized_start=811
  _globals['_LISTENRESPONSE']._serialized_end=847
  _globals['_ISSPEAKINGREQUEST']._serialized_start=849
  _globals['_ISSPEAKINGREQUEST']._serialized_end=888
  _globals['_ISSPEAKINGRESPONSE']._serialized_start=890
  _globals['_ISSPEAKINGRESPONSE']._serialized_end=934
  _globals['_SPEECHSERVICE']._serialized_start=937
  _globals['_SPEECHSERVICE']._serialized_end=2257
# @@protoc_insertion_point(module_scope)
