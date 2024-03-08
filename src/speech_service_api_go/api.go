// Package speech implements the viam-labs:service:speech API
package speech

import (
	"context"

	"go.viam.com/rdk/logging"
	"go.viam.com/utils/rpc"

	pb "github.com/viam-labs/speech-service-api/src/speech_service_api_go/grpc"
	"go.viam.com/rdk/resource"
	"go.viam.com/rdk/robot"
)

// API is the full API definition.
var API = resource.APINamespace("viam-labs").WithServiceType("speech")

// Named is a helper for getting the named speech's typed resource name.
func Named(name string) resource.Name {
	return resource.NewName(API, name)
}

// FromRobot is a helper for getting the named Speech from the given Robot.
func FromRobot(r robot.Robot, name string) (Speech, error) {
	return robot.ResourceFromRobot[Speech](r, Named(name))
}

func init() {
	resource.RegisterAPI(API, resource.APIRegistration[Speech]{
		// Reconfigurable, and contents of reconfwrapper.go are only needed for standalone (non-module) uses.
		RPCServiceServerConstructor: NewRPCServiceServer,
		RPCServiceHandler:           pb.RegisterSpeechServiceHandlerFromEndpoint,
		RPCServiceDesc:              &pb.SpeechService_ServiceDesc,
		RPCClient: func(
			ctx context.Context,
			conn rpc.ClientConn,
			remoteName string,
			name resource.Name,
			logger logging.Logger,
		) (Speech, error) {
			return NewClientFromConn(conn, remoteName, name, logger), nil
		},
	})
}

// Speech defines the Go interface for the component (should match the protobuf methods.)
type Speech interface {
	resource.Resource
	Say(ctx context.Context, text string, blocking bool) (string, error)
	ToText(ctx context.Context, speech []byte) (string, error)
	ToSpeech(ctx context.Context, text string) ([]byte, error)
	Completion(ctx context.Context, text string, blocking bool) (string, error)
	GetCommands(ctx context.Context, number int) ([]string, error)
	ListenTrigger(ctx context.Context, typ string) (string, error)
	IsSpeaking(ctx context.Context) (bool, error)
}

// serviceServer implements the Speech RPC service from speech.proto.
type serviceServer struct {
	pb.UnimplementedSpeechServiceServer
	coll resource.APIResourceCollection[Speech]
}

// NewRPCServiceServer returns a new RPC server for the Speech API.
func NewRPCServiceServer(coll resource.APIResourceCollection[Speech]) interface{} {
	return &serviceServer{coll: coll}
}

func (s *serviceServer) Say(ctx context.Context, req *pb.SayRequest) (*pb.SayResponse, error) {
	g, err := s.coll.Resource(req.Name)
	if err != nil {
		return nil, err
	}
	resp, err := g.Say(ctx, req.Text, req.Blocking)
	if err != nil {
		return nil, err
	}
	return &pb.SayResponse{Text: resp}, nil
}

func (s *serviceServer) ToText(ctx context.Context, req *pb.ToTextRequest) (*pb.ToTextResponse, error) {
	g, err := s.coll.Resource(req.Name)
	if err != nil {
		return nil, err
	}
	resp, err := g.ToText(ctx, req.Speech)
	if err != nil {
		return nil, err
	}
	return &pb.ToTextResponse{Text: resp}, nil
}

func (s *serviceServer) ToSpeech(ctx context.Context, req *pb.ToSpeechRequest) (*pb.ToSpeechResponse, error) {
	g, err := s.coll.Resource(req.Name)
	if err != nil {
		return nil, err
	}
	resp, err := g.ToSpeech(ctx, req.Text)
	if err != nil {
		return nil, err
	}
	return &pb.ToSpeechResponse{Speech: resp}, nil
}

func (s *serviceServer) Completion(ctx context.Context, req *pb.CompletionRequest) (*pb.CompletionResponse, error) {
	g, err := s.coll.Resource(req.Name)
	if err != nil {
		return nil, err
	}
	resp, err := g.Completion(ctx, req.Text, req.Blocking)
	if err != nil {
		return nil, err
	}
	return &pb.CompletionResponse{Text: resp}, nil
}

func (s *serviceServer) GetCommands(ctx context.Context, req *pb.GetCommandsRequest) (*pb.GetCommandsResponse, error) {
	g, err := s.coll.Resource(req.Name)
	if err != nil {
		return nil, err
	}
	resp, err := g.GetCommands(ctx, int(req.Number))
	if err != nil {
		return nil, err
	}
	return &pb.GetCommandsResponse{Commands: resp}, nil
}

func (s *serviceServer) ListenTrigger(ctx context.Context, req *pb.ListenTriggerRequest) (*pb.ListenTriggerResponse, error) {
	g, err := s.coll.Resource(req.Name)
	if err != nil {
		return nil, err
	}
	resp, err := g.ListenTrigger(ctx, req.Type)
	if err != nil {
		return nil, err
	}
	return &pb.ListenTriggerResponse{Text: resp}, nil
}

func (s *serviceServer) IsSpeaking(ctx context.Context, req *pb.IsSpeakingRequest) (*pb.IsSpeakingResponse, error) {
	g, err := s.coll.Resource(req.Name)
	if err != nil {
		return nil, err
	}
	resp, err := g.IsSpeaking(ctx)
	if err != nil {
		return nil, err
	}
	return &pb.IsSpeakingResponse{Status: resp}, nil
}

// NewClientFromConn creates a new Speech RPC client from an existing connection.
func NewClientFromConn(conn rpc.ClientConn, remoteName string, name resource.Name, logger logging.Logger) Speech {
	sc := newSvcClientFromConn(conn, remoteName, name, logger)
	return clientFromSvcClient(sc, name.ShortName())
}

func newSvcClientFromConn(conn rpc.ClientConn, remoteName string, name resource.Name, logger logging.Logger) *serviceClient {
	client := pb.NewSpeechServiceClient(conn)
	sc := &serviceClient{
		Named:  name.PrependRemote(remoteName).AsNamed(),
		client: client,
		logger: logger,
	}
	return sc
}

type serviceClient struct {
	resource.Named
	resource.AlwaysRebuild
	resource.TriviallyCloseable
	client pb.SpeechServiceClient
	logger logging.Logger
}

// client is an Speech client.
type client struct {
	*serviceClient
	name string
}

func clientFromSvcClient(sc *serviceClient, name string) Speech {
	return &client{sc, name}
}

func (c *client) Say(ctx context.Context, Text string, Blocking bool) (string, error) {
	resp, err := c.client.Say(ctx, &pb.SayRequest{
		Name:     c.name,
		Text:     Text,
		Blocking: Blocking,
	})
	if err != nil {
		return "", err
	}
	return resp.Text, nil
}

func (c *client) ToText(ctx context.Context, Speech []byte) (string, error) {
	resp, err := c.client.ToText(ctx, &pb.ToTextRequest{
		Name:   c.name,
		Speech: Speech,
	})
	if err != nil {
		return "", err
	}
	return resp.Text, nil
}

func (c *client) ToSpeech(ctx context.Context, Text string) ([]byte, error) {
	resp, err := c.client.ToSpeech(ctx, &pb.ToSpeechRequest{
		Name: c.name,
		Text: Text,
	})
	if err != nil {
		return nil, err
	}
	return resp.Speech, nil
}

func (c *client) Completion(ctx context.Context, Text string, Blocking bool) (string, error) {
	resp, err := c.client.Completion(ctx, &pb.CompletionRequest{
		Name:     c.name,
		Text:     Text,
		Blocking: Blocking,
	})
	if err != nil {
		return "", err
	}
	return resp.Text, nil
}

func (c *client) GetCommands(ctx context.Context, Number int) ([]string, error) {
	resp, err := c.client.GetCommands(ctx, &pb.GetCommandsRequest{
		Name:   c.name,
		Number: int32(Number),
	})
	if err != nil {
		return nil, err
	}
	return resp.Commands, nil
}

func (c *client) ListenTrigger(ctx context.Context, Type string) (string, error) {
	resp, err := c.client.ListenTrigger(ctx, &pb.ListenTriggerRequest{
		Name: c.name,
		Type: Type,
	})
	if err != nil {
		return "", err
	}
	return resp.Text, nil
}

func (c *client) IsSpeaking(ctx context.Context) (bool, error) {
	resp, err := c.client.IsSpeaking(ctx, &pb.IsSpeakingRequest{
		Name: c.name,
	})
	if err != nil {
		return false, err
	}
	return resp.Status, nil
}
