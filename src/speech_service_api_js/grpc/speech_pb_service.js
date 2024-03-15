// package: viamlabs.service.speech.v1
// file: speech.proto

var speech_pb = require("./speech_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var SpeechService = (function () {
  function SpeechService() {}
  SpeechService.serviceName = "viamlabs.service.speech.v1.SpeechService";
  return SpeechService;
}());

SpeechService.Say = {
  methodName: "Say",
  service: SpeechService,
  requestStream: false,
  responseStream: false,
  requestType: speech_pb.SayRequest,
  responseType: speech_pb.SayResponse
};

SpeechService.ToText = {
  methodName: "ToText",
  service: SpeechService,
  requestStream: false,
  responseStream: false,
  requestType: speech_pb.ToTextRequest,
  responseType: speech_pb.ToTextResponse
};

SpeechService.ToSpeech = {
  methodName: "ToSpeech",
  service: SpeechService,
  requestStream: false,
  responseStream: false,
  requestType: speech_pb.ToSpeechRequest,
  responseType: speech_pb.ToSpeechResponse
};

SpeechService.Completion = {
  methodName: "Completion",
  service: SpeechService,
  requestStream: false,
  responseStream: false,
  requestType: speech_pb.CompletionRequest,
  responseType: speech_pb.CompletionResponse
};

SpeechService.GetCommands = {
  methodName: "GetCommands",
  service: SpeechService,
  requestStream: false,
  responseStream: false,
  requestType: speech_pb.GetCommandsRequest,
  responseType: speech_pb.GetCommandsResponse
};

SpeechService.ListenTrigger = {
  methodName: "ListenTrigger",
  service: SpeechService,
  requestStream: false,
  responseStream: false,
  requestType: speech_pb.ListenTriggerRequest,
  responseType: speech_pb.ListenTriggerResponse
};

SpeechService.Listen = {
  methodName: "Listen",
  service: SpeechService,
  requestStream: false,
  responseStream: false,
  requestType: speech_pb.ListenRequest,
  responseType: speech_pb.ListenResponse
};

SpeechService.ListenInBackground = {
  methodName: "ListenInBackground",
  service: SpeechService,
  requestStream: false,
  responseStream: true,
  requestType: speech_pb.ListenInBackgroundRequest,
  responseType: speech_pb.ListenInBackgroundResponse
};

SpeechService.IsSpeaking = {
  methodName: "IsSpeaking",
  service: SpeechService,
  requestStream: false,
  responseStream: false,
  requestType: speech_pb.IsSpeakingRequest,
  responseType: speech_pb.IsSpeakingResponse
};

exports.SpeechService = SpeechService;

function SpeechServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

SpeechServiceClient.prototype.say = function say(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SpeechService.Say, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SpeechServiceClient.prototype.toText = function toText(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SpeechService.ToText, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SpeechServiceClient.prototype.toSpeech = function toSpeech(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SpeechService.ToSpeech, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SpeechServiceClient.prototype.completion = function completion(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SpeechService.Completion, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SpeechServiceClient.prototype.getCommands = function getCommands(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SpeechService.GetCommands, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SpeechServiceClient.prototype.listenTrigger = function listenTrigger(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SpeechService.ListenTrigger, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SpeechServiceClient.prototype.listen = function listen(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SpeechService.Listen, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SpeechServiceClient.prototype.listenInBackground = function listenInBackground(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(SpeechService.ListenInBackground, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

SpeechServiceClient.prototype.isSpeaking = function isSpeaking(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SpeechService.IsSpeaking, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.SpeechServiceClient = SpeechServiceClient;

