// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             (unknown)
// source: google/longrunning/operations.proto

package longrunningpb

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

const (
	Operations_ListOperations_FullMethodName  = "/google.longrunning.Operations/ListOperations"
	Operations_GetOperation_FullMethodName    = "/google.longrunning.Operations/GetOperation"
	Operations_DeleteOperation_FullMethodName = "/google.longrunning.Operations/DeleteOperation"
	Operations_CancelOperation_FullMethodName = "/google.longrunning.Operations/CancelOperation"
	Operations_WaitOperation_FullMethodName   = "/google.longrunning.Operations/WaitOperation"
)

// OperationsClient is the client API for Operations service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type OperationsClient interface {
	// Lists operations that match the specified filter in the request. If the
	// server doesn't support this method, it returns `UNIMPLEMENTED`.
	//
	// NOTE: the `name` binding allows API services to override the binding
	// to use different resource name schemes, such as `users/*/operations`. To
	// override the binding, API services can add a binding such as
	// `"/v1/{name=users/*}/operations"` to their service configuration.
	// For backwards compatibility, the default name includes the operations
	// collection id, however overriding users must ensure the name binding
	// is the parent resource, without the operations collection id.
	ListOperations(ctx context.Context, in *ListOperationsRequest, opts ...grpc.CallOption) (*ListOperationsResponse, error)
	// Gets the latest state of a long-running operation.  Clients can use this
	// method to poll the operation result at intervals as recommended by the API
	// service.
	GetOperation(ctx context.Context, in *GetOperationRequest, opts ...grpc.CallOption) (*Operation, error)
	// Deletes a long-running operation. This method indicates that the client is
	// no longer interested in the operation result. It does not cancel the
	// operation. If the server doesn't support this method, it returns
	// `google.rpc.Code.UNIMPLEMENTED`.
	DeleteOperation(ctx context.Context, in *DeleteOperationRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
	// Starts asynchronous cancellation on a long-running operation.  The server
	// makes a best effort to cancel the operation, but success is not
	// guaranteed.  If the server doesn't support this method, it returns
	// `google.rpc.Code.UNIMPLEMENTED`.  Clients can use
	// [Operations.GetOperation][google.longrunning.Operations.GetOperation] or
	// other methods to check whether the cancellation succeeded or whether the
	// operation completed despite cancellation. On successful cancellation,
	// the operation is not deleted; instead, it becomes an operation with
	// an [Operation.error][google.longrunning.Operation.error] value with a [google.rpc.Status.code][google.rpc.Status.code] of 1,
	// corresponding to `Code.CANCELLED`.
	CancelOperation(ctx context.Context, in *CancelOperationRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
	// Waits until the specified long-running operation is done or reaches at most
	// a specified timeout, returning the latest state.  If the operation is
	// already done, the latest state is immediately returned.  If the timeout
	// specified is greater than the default HTTP/RPC timeout, the HTTP/RPC
	// timeout is used.  If the server does not support this method, it returns
	// `google.rpc.Code.UNIMPLEMENTED`.
	// Note that this method is on a best-effort basis.  It may return the latest
	// state before the specified timeout (including immediately), meaning even an
	// immediate response is no guarantee that the operation is done.
	WaitOperation(ctx context.Context, in *WaitOperationRequest, opts ...grpc.CallOption) (*Operation, error)
}

type operationsClient struct {
	cc grpc.ClientConnInterface
}

func NewOperationsClient(cc grpc.ClientConnInterface) OperationsClient {
	return &operationsClient{cc}
}

func (c *operationsClient) ListOperations(ctx context.Context, in *ListOperationsRequest, opts ...grpc.CallOption) (*ListOperationsResponse, error) {
	out := new(ListOperationsResponse)
	err := c.cc.Invoke(ctx, Operations_ListOperations_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *operationsClient) GetOperation(ctx context.Context, in *GetOperationRequest, opts ...grpc.CallOption) (*Operation, error) {
	out := new(Operation)
	err := c.cc.Invoke(ctx, Operations_GetOperation_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *operationsClient) DeleteOperation(ctx context.Context, in *DeleteOperationRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, Operations_DeleteOperation_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *operationsClient) CancelOperation(ctx context.Context, in *CancelOperationRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, Operations_CancelOperation_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *operationsClient) WaitOperation(ctx context.Context, in *WaitOperationRequest, opts ...grpc.CallOption) (*Operation, error) {
	out := new(Operation)
	err := c.cc.Invoke(ctx, Operations_WaitOperation_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// OperationsServer is the server API for Operations service.
// All implementations must embed UnimplementedOperationsServer
// for forward compatibility
type OperationsServer interface {
	// Lists operations that match the specified filter in the request. If the
	// server doesn't support this method, it returns `UNIMPLEMENTED`.
	//
	// NOTE: the `name` binding allows API services to override the binding
	// to use different resource name schemes, such as `users/*/operations`. To
	// override the binding, API services can add a binding such as
	// `"/v1/{name=users/*}/operations"` to their service configuration.
	// For backwards compatibility, the default name includes the operations
	// collection id, however overriding users must ensure the name binding
	// is the parent resource, without the operations collection id.
	ListOperations(context.Context, *ListOperationsRequest) (*ListOperationsResponse, error)
	// Gets the latest state of a long-running operation.  Clients can use this
	// method to poll the operation result at intervals as recommended by the API
	// service.
	GetOperation(context.Context, *GetOperationRequest) (*Operation, error)
	// Deletes a long-running operation. This method indicates that the client is
	// no longer interested in the operation result. It does not cancel the
	// operation. If the server doesn't support this method, it returns
	// `google.rpc.Code.UNIMPLEMENTED`.
	DeleteOperation(context.Context, *DeleteOperationRequest) (*emptypb.Empty, error)
	// Starts asynchronous cancellation on a long-running operation.  The server
	// makes a best effort to cancel the operation, but success is not
	// guaranteed.  If the server doesn't support this method, it returns
	// `google.rpc.Code.UNIMPLEMENTED`.  Clients can use
	// [Operations.GetOperation][google.longrunning.Operations.GetOperation] or
	// other methods to check whether the cancellation succeeded or whether the
	// operation completed despite cancellation. On successful cancellation,
	// the operation is not deleted; instead, it becomes an operation with
	// an [Operation.error][google.longrunning.Operation.error] value with a [google.rpc.Status.code][google.rpc.Status.code] of 1,
	// corresponding to `Code.CANCELLED`.
	CancelOperation(context.Context, *CancelOperationRequest) (*emptypb.Empty, error)
	// Waits until the specified long-running operation is done or reaches at most
	// a specified timeout, returning the latest state.  If the operation is
	// already done, the latest state is immediately returned.  If the timeout
	// specified is greater than the default HTTP/RPC timeout, the HTTP/RPC
	// timeout is used.  If the server does not support this method, it returns
	// `google.rpc.Code.UNIMPLEMENTED`.
	// Note that this method is on a best-effort basis.  It may return the latest
	// state before the specified timeout (including immediately), meaning even an
	// immediate response is no guarantee that the operation is done.
	WaitOperation(context.Context, *WaitOperationRequest) (*Operation, error)
	mustEmbedUnimplementedOperationsServer()
}

// UnimplementedOperationsServer must be embedded to have forward compatible implementations.
type UnimplementedOperationsServer struct {
}

func (UnimplementedOperationsServer) ListOperations(context.Context, *ListOperationsRequest) (*ListOperationsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListOperations not implemented")
}
func (UnimplementedOperationsServer) GetOperation(context.Context, *GetOperationRequest) (*Operation, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetOperation not implemented")
}
func (UnimplementedOperationsServer) DeleteOperation(context.Context, *DeleteOperationRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteOperation not implemented")
}
func (UnimplementedOperationsServer) CancelOperation(context.Context, *CancelOperationRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CancelOperation not implemented")
}
func (UnimplementedOperationsServer) WaitOperation(context.Context, *WaitOperationRequest) (*Operation, error) {
	return nil, status.Errorf(codes.Unimplemented, "method WaitOperation not implemented")
}
func (UnimplementedOperationsServer) mustEmbedUnimplementedOperationsServer() {}

// UnsafeOperationsServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to OperationsServer will
// result in compilation errors.
type UnsafeOperationsServer interface {
	mustEmbedUnimplementedOperationsServer()
}

func RegisterOperationsServer(s grpc.ServiceRegistrar, srv OperationsServer) {
	s.RegisterService(&Operations_ServiceDesc, srv)
}

func _Operations_ListOperations_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListOperationsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OperationsServer).ListOperations(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Operations_ListOperations_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OperationsServer).ListOperations(ctx, req.(*ListOperationsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Operations_GetOperation_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetOperationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OperationsServer).GetOperation(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Operations_GetOperation_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OperationsServer).GetOperation(ctx, req.(*GetOperationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Operations_DeleteOperation_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteOperationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OperationsServer).DeleteOperation(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Operations_DeleteOperation_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OperationsServer).DeleteOperation(ctx, req.(*DeleteOperationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Operations_CancelOperation_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CancelOperationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OperationsServer).CancelOperation(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Operations_CancelOperation_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OperationsServer).CancelOperation(ctx, req.(*CancelOperationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Operations_WaitOperation_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(WaitOperationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OperationsServer).WaitOperation(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Operations_WaitOperation_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OperationsServer).WaitOperation(ctx, req.(*WaitOperationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// Operations_ServiceDesc is the grpc.ServiceDesc for Operations service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Operations_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "google.longrunning.Operations",
	HandlerType: (*OperationsServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListOperations",
			Handler:    _Operations_ListOperations_Handler,
		},
		{
			MethodName: "GetOperation",
			Handler:    _Operations_GetOperation_Handler,
		},
		{
			MethodName: "DeleteOperation",
			Handler:    _Operations_DeleteOperation_Handler,
		},
		{
			MethodName: "CancelOperation",
			Handler:    _Operations_CancelOperation_Handler,
		},
		{
			MethodName: "WaitOperation",
			Handler:    _Operations_WaitOperation_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "google/longrunning/operations.proto",
}
