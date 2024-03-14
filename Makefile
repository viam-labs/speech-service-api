generate:
	PATH="${PATH}:${PWD}/node_modules/.bin" buf generate buf.build/googleapis/googleapis --template ./src/proto/buf.gen.yaml  -o ./src
	PATH="${PATH}:${PWD}/node_modules/.bin" buf generate --template ./src/proto/buf.gen.yaml ./src/proto -o ./src
	sed -i "" -e "s/import\ speech_pb2/from\ \.\ import\ speech_pb2/" ./src/speech_service_api/grpc/*.py

install:
	pip install -r requirements.lock
	npm ci
