"""
@generated by mypy-protobuf.  Do not edit manually!
isort:skip_file
Copyright 2023 Google LLC

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
import collections.abc
import google.api.expr.v1alpha1.value_pb2
import google.protobuf.descriptor
import google.protobuf.internal.containers
import google.protobuf.message
import sys

if sys.version_info >= (3, 8):
    import typing as typing_extensions
else:
    import typing_extensions

DESCRIPTOR: google.protobuf.descriptor.FileDescriptor

@typing_extensions.final
class Explain(google.protobuf.message.Message):
    """Values of intermediate expressions produced when evaluating expression.
    Deprecated, use `EvalState` instead.
    """

    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    @typing_extensions.final
    class ExprStep(google.protobuf.message.Message):
        """ID and value index of one step."""

        DESCRIPTOR: google.protobuf.descriptor.Descriptor

        ID_FIELD_NUMBER: builtins.int
        VALUE_INDEX_FIELD_NUMBER: builtins.int
        id: builtins.int
        """ID of corresponding Expr node."""
        value_index: builtins.int
        """Index of the value in the values list."""
        def __init__(
            self,
            *,
            id: builtins.int = ...,
            value_index: builtins.int = ...,
        ) -> None: ...
        def ClearField(self, field_name: typing_extensions.Literal["id", b"id", "value_index", b"value_index"]) -> None: ...

    VALUES_FIELD_NUMBER: builtins.int
    EXPR_STEPS_FIELD_NUMBER: builtins.int
    @property
    def values(self) -> google.protobuf.internal.containers.RepeatedCompositeFieldContainer[google.api.expr.v1alpha1.value_pb2.Value]:
        """All of the observed values.

        The field value_index is an index in the values list.
        Separating values from steps is needed to remove redundant values.
        """
    @property
    def expr_steps(self) -> google.protobuf.internal.containers.RepeatedCompositeFieldContainer[global___Explain.ExprStep]:
        """List of steps.

        Repeated evaluations of the same expression generate new ExprStep
        instances. The order of such ExprStep instances matches the order of
        elements returned by Comprehension.iter_range.
        """
    def __init__(
        self,
        *,
        values: collections.abc.Iterable[google.api.expr.v1alpha1.value_pb2.Value] | None = ...,
        expr_steps: collections.abc.Iterable[global___Explain.ExprStep] | None = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["expr_steps", b"expr_steps", "values", b"values"]) -> None: ...

global___Explain = Explain
