node_modules := $(shell npm root)
buf := npm exec --offline -- buf

generate:
	export PATH="${PATH}:${HOME}/go/bin";buf generate --template ./src/proto/buf.gen.yaml ./src/proto -o ./src
	sed -i "" -e "s/import\ speech_pb2/from\ \.\ import\ speech_pb2/" ./src/speech_service_api_python/grpc/*.py

install:
	./pw install
