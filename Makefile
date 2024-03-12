generate:
	export PATH="${PATH}:${HOME}/go/bin";buf generate buf.build/googleapis/googleapis --template ./src/proto/buf.gen.yaml  -o ./src
	export PATH="${PATH}:${HOME}/go/bin";buf generate --template ./src/proto/buf.gen.yaml ./src/proto -o ./src
	sed -i "" -e "s/import\ speech_pb2/from\ \.\ import\ speech_pb2/" ./src/speech_service_api/grpc/*.py

install:
	./pw pdm install
	go get .
	npm ci
