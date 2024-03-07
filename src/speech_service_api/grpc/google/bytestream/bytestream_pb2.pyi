"""
@generated by mypy-protobuf.  Do not edit manually!
isort:skip_file
Copyright 2016 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
"""
import builtins
import google.protobuf.descriptor
import google.protobuf.message
import sys

if sys.version_info >= (3, 8):
    import typing as typing_extensions
else:
    import typing_extensions

DESCRIPTOR: google.protobuf.descriptor.FileDescriptor

@typing_extensions.final
class ReadRequest(google.protobuf.message.Message):
    """Request object for ByteStream.Read."""

    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    RESOURCE_NAME_FIELD_NUMBER: builtins.int
    READ_OFFSET_FIELD_NUMBER: builtins.int
    READ_LIMIT_FIELD_NUMBER: builtins.int
    resource_name: builtins.str
    """The name of the resource to read."""
    read_offset: builtins.int
    """The offset for the first byte to return in the read, relative to the start
    of the resource.

    A `read_offset` that is negative or greater than the size of the resource
    will cause an `OUT_OF_RANGE` error.
    """
    read_limit: builtins.int
    """The maximum number of `data` bytes the server is allowed to return in the
    sum of all `ReadResponse` messages. A `read_limit` of zero indicates that
    there is no limit, and a negative `read_limit` will cause an error.

    If the stream returns fewer bytes than allowed by the `read_limit` and no
    error occurred, the stream includes all data from the `read_offset` to the
    end of the resource.
    """
    def __init__(
        self,
        *,
        resource_name: builtins.str = ...,
        read_offset: builtins.int = ...,
        read_limit: builtins.int = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["read_limit", b"read_limit", "read_offset", b"read_offset", "resource_name", b"resource_name"]) -> None: ...

global___ReadRequest = ReadRequest

@typing_extensions.final
class ReadResponse(google.protobuf.message.Message):
    """Response object for ByteStream.Read."""

    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    DATA_FIELD_NUMBER: builtins.int
    data: builtins.bytes
    """A portion of the data for the resource. The service **may** leave `data`
    empty for any given `ReadResponse`. This enables the service to inform the
    client that the request is still live while it is running an operation to
    generate more data.
    """
    def __init__(
        self,
        *,
        data: builtins.bytes = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["data", b"data"]) -> None: ...

global___ReadResponse = ReadResponse

@typing_extensions.final
class WriteRequest(google.protobuf.message.Message):
    """Request object for ByteStream.Write."""

    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    RESOURCE_NAME_FIELD_NUMBER: builtins.int
    WRITE_OFFSET_FIELD_NUMBER: builtins.int
    FINISH_WRITE_FIELD_NUMBER: builtins.int
    DATA_FIELD_NUMBER: builtins.int
    resource_name: builtins.str
    """The name of the resource to write. This **must** be set on the first
    `WriteRequest` of each `Write()` action. If it is set on subsequent calls,
    it **must** match the value of the first request.
    """
    write_offset: builtins.int
    """The offset from the beginning of the resource at which the data should be
    written. It is required on all `WriteRequest`s.

    In the first `WriteRequest` of a `Write()` action, it indicates
    the initial offset for the `Write()` call. The value **must** be equal to
    the `committed_size` that a call to `QueryWriteStatus()` would return.

    On subsequent calls, this value **must** be set and **must** be equal to
    the sum of the first `write_offset` and the sizes of all `data` bundles
    sent previously on this stream.

    An incorrect value will cause an error.
    """
    finish_write: builtins.bool
    """If `true`, this indicates that the write is complete. Sending any
    `WriteRequest`s subsequent to one in which `finish_write` is `true` will
    cause an error.
    """
    data: builtins.bytes
    """A portion of the data for the resource. The client **may** leave `data`
    empty for any given `WriteRequest`. This enables the client to inform the
    service that the request is still live while it is running an operation to
    generate more data.
    """
    def __init__(
        self,
        *,
        resource_name: builtins.str = ...,
        write_offset: builtins.int = ...,
        finish_write: builtins.bool = ...,
        data: builtins.bytes = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["data", b"data", "finish_write", b"finish_write", "resource_name", b"resource_name", "write_offset", b"write_offset"]) -> None: ...

global___WriteRequest = WriteRequest

@typing_extensions.final
class WriteResponse(google.protobuf.message.Message):
    """Response object for ByteStream.Write."""

    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    COMMITTED_SIZE_FIELD_NUMBER: builtins.int
    committed_size: builtins.int
    """The number of bytes that have been processed for the given resource."""
    def __init__(
        self,
        *,
        committed_size: builtins.int = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["committed_size", b"committed_size"]) -> None: ...

global___WriteResponse = WriteResponse

@typing_extensions.final
class QueryWriteStatusRequest(google.protobuf.message.Message):
    """Request object for ByteStream.QueryWriteStatus."""

    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    RESOURCE_NAME_FIELD_NUMBER: builtins.int
    resource_name: builtins.str
    """The name of the resource whose write status is being requested."""
    def __init__(
        self,
        *,
        resource_name: builtins.str = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["resource_name", b"resource_name"]) -> None: ...

global___QueryWriteStatusRequest = QueryWriteStatusRequest

@typing_extensions.final
class QueryWriteStatusResponse(google.protobuf.message.Message):
    """Response object for ByteStream.QueryWriteStatus."""

    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    COMMITTED_SIZE_FIELD_NUMBER: builtins.int
    COMPLETE_FIELD_NUMBER: builtins.int
    committed_size: builtins.int
    """The number of bytes that have been processed for the given resource."""
    complete: builtins.bool
    """`complete` is `true` only if the client has sent a `WriteRequest` with
    `finish_write` set to true, and the server has processed that request.
    """
    def __init__(
        self,
        *,
        committed_size: builtins.int = ...,
        complete: builtins.bool = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["committed_size", b"committed_size", "complete", b"complete"]) -> None: ...

global___QueryWriteStatusResponse = QueryWriteStatusResponse
