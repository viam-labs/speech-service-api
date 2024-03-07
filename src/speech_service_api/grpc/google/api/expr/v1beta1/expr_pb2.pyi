"""
@generated by mypy-protobuf.  Do not edit manually!
isort:skip_file
Copyright 2019 Google LLC.

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
import google.api.expr.v1beta1.source_pb2
import google.protobuf.descriptor
import google.protobuf.internal.containers
import google.protobuf.message
import google.protobuf.struct_pb2
import sys

if sys.version_info >= (3, 8):
    import typing as typing_extensions
else:
    import typing_extensions

DESCRIPTOR: google.protobuf.descriptor.FileDescriptor

@typing_extensions.final
class ParsedExpr(google.protobuf.message.Message):
    """An expression together with source information as returned by the parser."""

    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    EXPR_FIELD_NUMBER: builtins.int
    SOURCE_INFO_FIELD_NUMBER: builtins.int
    SYNTAX_VERSION_FIELD_NUMBER: builtins.int
    @property
    def expr(self) -> global___Expr:
        """The parsed expression."""
    @property
    def source_info(self) -> google.api.expr.v1beta1.source_pb2.SourceInfo:
        """The source info derived from input that generated the parsed `expr`."""
    syntax_version: builtins.str
    """The syntax version of the source, e.g. `cel1`."""
    def __init__(
        self,
        *,
        expr: global___Expr | None = ...,
        source_info: google.api.expr.v1beta1.source_pb2.SourceInfo | None = ...,
        syntax_version: builtins.str = ...,
    ) -> None: ...
    def HasField(self, field_name: typing_extensions.Literal["expr", b"expr", "source_info", b"source_info"]) -> builtins.bool: ...
    def ClearField(self, field_name: typing_extensions.Literal["expr", b"expr", "source_info", b"source_info", "syntax_version", b"syntax_version"]) -> None: ...

global___ParsedExpr = ParsedExpr

@typing_extensions.final
class Expr(google.protobuf.message.Message):
    """An abstract representation of a common expression.

    Expressions are abstractly represented as a collection of identifiers,
    select statements, function calls, literals, and comprehensions. All
    operators with the exception of the '.' operator are modelled as function
    calls. This makes it easy to represent new operators into the existing AST.

    All references within expressions must resolve to a [Decl][google.api.expr.v1beta1.Decl] provided at
    type-check for an expression to be valid. A reference may either be a bare
    identifier `name` or a qualified identifier `google.api.name`. References
    may either refer to a value or a function declaration.

    For example, the expression `google.api.name.startsWith('expr')` references
    the declaration `google.api.name` within a [Expr.Select][google.api.expr.v1beta1.Expr.Select] expression, and
    the function declaration `startsWith`.
    """

    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    @typing_extensions.final
    class Ident(google.protobuf.message.Message):
        """An identifier expression. e.g. `request`."""

        DESCRIPTOR: google.protobuf.descriptor.Descriptor

        NAME_FIELD_NUMBER: builtins.int
        name: builtins.str
        """Required. Holds a single, unqualified identifier, possibly preceded by a
        '.'.

        Qualified names are represented by the [Expr.Select][google.api.expr.v1beta1.Expr.Select] expression.
        """
        def __init__(
            self,
            *,
            name: builtins.str = ...,
        ) -> None: ...
        def ClearField(self, field_name: typing_extensions.Literal["name", b"name"]) -> None: ...

    @typing_extensions.final
    class Select(google.protobuf.message.Message):
        """A field selection expression. e.g. `request.auth`."""

        DESCRIPTOR: google.protobuf.descriptor.Descriptor

        OPERAND_FIELD_NUMBER: builtins.int
        FIELD_FIELD_NUMBER: builtins.int
        TEST_ONLY_FIELD_NUMBER: builtins.int
        @property
        def operand(self) -> global___Expr:
            """Required. The target of the selection expression.

            For example, in the select expression `request.auth`, the `request`
            portion of the expression is the `operand`.
            """
        field: builtins.str
        """Required. The name of the field to select.

        For example, in the select expression `request.auth`, the `auth` portion
        of the expression would be the `field`.
        """
        test_only: builtins.bool
        """Whether the select is to be interpreted as a field presence test.

        This results from the macro `has(request.auth)`.
        """
        def __init__(
            self,
            *,
            operand: global___Expr | None = ...,
            field: builtins.str = ...,
            test_only: builtins.bool = ...,
        ) -> None: ...
        def HasField(self, field_name: typing_extensions.Literal["operand", b"operand"]) -> builtins.bool: ...
        def ClearField(self, field_name: typing_extensions.Literal["field", b"field", "operand", b"operand", "test_only", b"test_only"]) -> None: ...

    @typing_extensions.final
    class Call(google.protobuf.message.Message):
        """A call expression, including calls to predefined functions and operators.

        For example, `value == 10`, `size(map_value)`.
        """

        DESCRIPTOR: google.protobuf.descriptor.Descriptor

        TARGET_FIELD_NUMBER: builtins.int
        FUNCTION_FIELD_NUMBER: builtins.int
        ARGS_FIELD_NUMBER: builtins.int
        @property
        def target(self) -> global___Expr:
            """The target of an method call-style expression. For example, `x` in
            `x.f()`.
            """
        function: builtins.str
        """Required. The name of the function or method being called."""
        @property
        def args(self) -> google.protobuf.internal.containers.RepeatedCompositeFieldContainer[global___Expr]:
            """The arguments."""
        def __init__(
            self,
            *,
            target: global___Expr | None = ...,
            function: builtins.str = ...,
            args: collections.abc.Iterable[global___Expr] | None = ...,
        ) -> None: ...
        def HasField(self, field_name: typing_extensions.Literal["target", b"target"]) -> builtins.bool: ...
        def ClearField(self, field_name: typing_extensions.Literal["args", b"args", "function", b"function", "target", b"target"]) -> None: ...

    @typing_extensions.final
    class CreateList(google.protobuf.message.Message):
        """A list creation expression.

        Lists may either be homogenous, e.g. `[1, 2, 3]`, or heterogenous, e.g.
        `dyn([1, 'hello', 2.0])`
        """

        DESCRIPTOR: google.protobuf.descriptor.Descriptor

        ELEMENTS_FIELD_NUMBER: builtins.int
        @property
        def elements(self) -> google.protobuf.internal.containers.RepeatedCompositeFieldContainer[global___Expr]:
            """The elements part of the list."""
        def __init__(
            self,
            *,
            elements: collections.abc.Iterable[global___Expr] | None = ...,
        ) -> None: ...
        def ClearField(self, field_name: typing_extensions.Literal["elements", b"elements"]) -> None: ...

    @typing_extensions.final
    class CreateStruct(google.protobuf.message.Message):
        """A map or message creation expression.

        Maps are constructed as `{'key_name': 'value'}`. Message construction is
        similar, but prefixed with a type name and composed of field ids:
        `types.MyType{field_id: 'value'}`.
        """

        DESCRIPTOR: google.protobuf.descriptor.Descriptor

        @typing_extensions.final
        class Entry(google.protobuf.message.Message):
            """Represents an entry."""

            DESCRIPTOR: google.protobuf.descriptor.Descriptor

            ID_FIELD_NUMBER: builtins.int
            FIELD_KEY_FIELD_NUMBER: builtins.int
            MAP_KEY_FIELD_NUMBER: builtins.int
            VALUE_FIELD_NUMBER: builtins.int
            id: builtins.int
            """Required. An id assigned to this node by the parser which is unique
            in a given expression tree. This is used to associate type
            information and other attributes to the node.
            """
            field_key: builtins.str
            """The field key for a message creator statement."""
            @property
            def map_key(self) -> global___Expr:
                """The key expression for a map creation statement."""
            @property
            def value(self) -> global___Expr:
                """Required. The value assigned to the key."""
            def __init__(
                self,
                *,
                id: builtins.int = ...,
                field_key: builtins.str = ...,
                map_key: global___Expr | None = ...,
                value: global___Expr | None = ...,
            ) -> None: ...
            def HasField(self, field_name: typing_extensions.Literal["field_key", b"field_key", "key_kind", b"key_kind", "map_key", b"map_key", "value", b"value"]) -> builtins.bool: ...
            def ClearField(self, field_name: typing_extensions.Literal["field_key", b"field_key", "id", b"id", "key_kind", b"key_kind", "map_key", b"map_key", "value", b"value"]) -> None: ...
            def WhichOneof(self, oneof_group: typing_extensions.Literal["key_kind", b"key_kind"]) -> typing_extensions.Literal["field_key", "map_key"] | None: ...

        TYPE_FIELD_NUMBER: builtins.int
        ENTRIES_FIELD_NUMBER: builtins.int
        type: builtins.str
        """The type name of the message to be created, empty when creating map
        literals.
        """
        @property
        def entries(self) -> google.protobuf.internal.containers.RepeatedCompositeFieldContainer[global___Expr.CreateStruct.Entry]:
            """The entries in the creation expression."""
        def __init__(
            self,
            *,
            type: builtins.str = ...,
            entries: collections.abc.Iterable[global___Expr.CreateStruct.Entry] | None = ...,
        ) -> None: ...
        def ClearField(self, field_name: typing_extensions.Literal["entries", b"entries", "type", b"type"]) -> None: ...

    @typing_extensions.final
    class Comprehension(google.protobuf.message.Message):
        """A comprehension expression applied to a list or map.

        Comprehensions are not part of the core syntax, but enabled with macros.
        A macro matches a specific call signature within a parsed AST and replaces
        the call with an alternate AST block. Macro expansion happens at parse
        time.

        The following macros are supported within CEL:

        Aggregate type macros may be applied to all elements in a list or all keys
        in a map:

        *  `all`, `exists`, `exists_one` -  test a predicate expression against
           the inputs and return `true` if the predicate is satisfied for all,
           any, or only one value `list.all(x, x < 10)`.
        *  `filter` - test a predicate expression against the inputs and return
           the subset of elements which satisfy the predicate:
           `payments.filter(p, p > 1000)`.
        *  `map` - apply an expression to all elements in the input and return the
           output aggregate type: `[1, 2, 3].map(i, i * i)`.

        The `has(m.x)` macro tests whether the property `x` is present in struct
        `m`. The semantics of this macro depend on the type of `m`. For proto2
        messages `has(m.x)` is defined as 'defined, but not set`. For proto3, the
        macro tests whether the property is set to its default. For map and struct
        types, the macro tests whether the property `x` is defined on `m`.
        """

        DESCRIPTOR: google.protobuf.descriptor.Descriptor

        ITER_VAR_FIELD_NUMBER: builtins.int
        ITER_RANGE_FIELD_NUMBER: builtins.int
        ACCU_VAR_FIELD_NUMBER: builtins.int
        ACCU_INIT_FIELD_NUMBER: builtins.int
        LOOP_CONDITION_FIELD_NUMBER: builtins.int
        LOOP_STEP_FIELD_NUMBER: builtins.int
        RESULT_FIELD_NUMBER: builtins.int
        iter_var: builtins.str
        """The name of the iteration variable."""
        @property
        def iter_range(self) -> global___Expr:
            """The range over which var iterates."""
        accu_var: builtins.str
        """The name of the variable used for accumulation of the result."""
        @property
        def accu_init(self) -> global___Expr:
            """The initial value of the accumulator."""
        @property
        def loop_condition(self) -> global___Expr:
            """An expression which can contain iter_var and accu_var.

            Returns false when the result has been computed and may be used as
            a hint to short-circuit the remainder of the comprehension.
            """
        @property
        def loop_step(self) -> global___Expr:
            """An expression which can contain iter_var and accu_var.

            Computes the next value of accu_var.
            """
        @property
        def result(self) -> global___Expr:
            """An expression which can contain accu_var.

            Computes the result.
            """
        def __init__(
            self,
            *,
            iter_var: builtins.str = ...,
            iter_range: global___Expr | None = ...,
            accu_var: builtins.str = ...,
            accu_init: global___Expr | None = ...,
            loop_condition: global___Expr | None = ...,
            loop_step: global___Expr | None = ...,
            result: global___Expr | None = ...,
        ) -> None: ...
        def HasField(self, field_name: typing_extensions.Literal["accu_init", b"accu_init", "iter_range", b"iter_range", "loop_condition", b"loop_condition", "loop_step", b"loop_step", "result", b"result"]) -> builtins.bool: ...
        def ClearField(self, field_name: typing_extensions.Literal["accu_init", b"accu_init", "accu_var", b"accu_var", "iter_range", b"iter_range", "iter_var", b"iter_var", "loop_condition", b"loop_condition", "loop_step", b"loop_step", "result", b"result"]) -> None: ...

    ID_FIELD_NUMBER: builtins.int
    LITERAL_EXPR_FIELD_NUMBER: builtins.int
    IDENT_EXPR_FIELD_NUMBER: builtins.int
    SELECT_EXPR_FIELD_NUMBER: builtins.int
    CALL_EXPR_FIELD_NUMBER: builtins.int
    LIST_EXPR_FIELD_NUMBER: builtins.int
    STRUCT_EXPR_FIELD_NUMBER: builtins.int
    COMPREHENSION_EXPR_FIELD_NUMBER: builtins.int
    id: builtins.int
    """Required. An id assigned to this node by the parser which is unique in a
    given expression tree. This is used to associate type information and other
    attributes to a node in the parse tree.
    """
    @property
    def literal_expr(self) -> global___Literal:
        """A literal expression."""
    @property
    def ident_expr(self) -> global___Expr.Ident:
        """An identifier expression."""
    @property
    def select_expr(self) -> global___Expr.Select:
        """A field selection expression, e.g. `request.auth`."""
    @property
    def call_expr(self) -> global___Expr.Call:
        """A call expression, including calls to predefined functions and operators."""
    @property
    def list_expr(self) -> global___Expr.CreateList:
        """A list creation expression."""
    @property
    def struct_expr(self) -> global___Expr.CreateStruct:
        """A map or object creation expression."""
    @property
    def comprehension_expr(self) -> global___Expr.Comprehension:
        """A comprehension expression."""
    def __init__(
        self,
        *,
        id: builtins.int = ...,
        literal_expr: global___Literal | None = ...,
        ident_expr: global___Expr.Ident | None = ...,
        select_expr: global___Expr.Select | None = ...,
        call_expr: global___Expr.Call | None = ...,
        list_expr: global___Expr.CreateList | None = ...,
        struct_expr: global___Expr.CreateStruct | None = ...,
        comprehension_expr: global___Expr.Comprehension | None = ...,
    ) -> None: ...
    def HasField(self, field_name: typing_extensions.Literal["call_expr", b"call_expr", "comprehension_expr", b"comprehension_expr", "expr_kind", b"expr_kind", "ident_expr", b"ident_expr", "list_expr", b"list_expr", "literal_expr", b"literal_expr", "select_expr", b"select_expr", "struct_expr", b"struct_expr"]) -> builtins.bool: ...
    def ClearField(self, field_name: typing_extensions.Literal["call_expr", b"call_expr", "comprehension_expr", b"comprehension_expr", "expr_kind", b"expr_kind", "id", b"id", "ident_expr", b"ident_expr", "list_expr", b"list_expr", "literal_expr", b"literal_expr", "select_expr", b"select_expr", "struct_expr", b"struct_expr"]) -> None: ...
    def WhichOneof(self, oneof_group: typing_extensions.Literal["expr_kind", b"expr_kind"]) -> typing_extensions.Literal["literal_expr", "ident_expr", "select_expr", "call_expr", "list_expr", "struct_expr", "comprehension_expr"] | None: ...

global___Expr = Expr

@typing_extensions.final
class Literal(google.protobuf.message.Message):
    """Represents a primitive literal.

    This is similar to the primitives supported in the well-known type
    `google.protobuf.Value`, but richer so it can represent CEL's full range of
    primitives.

    Lists and structs are not included as constants as these aggregate types may
    contain [Expr][google.api.expr.v1beta1.Expr] elements which require evaluation and are thus not constant.

    Examples of literals include: `"hello"`, `b'bytes'`, `1u`, `4.2`, `-2`,
    `true`, `null`.
    """

    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    NULL_VALUE_FIELD_NUMBER: builtins.int
    BOOL_VALUE_FIELD_NUMBER: builtins.int
    INT64_VALUE_FIELD_NUMBER: builtins.int
    UINT64_VALUE_FIELD_NUMBER: builtins.int
    DOUBLE_VALUE_FIELD_NUMBER: builtins.int
    STRING_VALUE_FIELD_NUMBER: builtins.int
    BYTES_VALUE_FIELD_NUMBER: builtins.int
    null_value: google.protobuf.struct_pb2.NullValue.ValueType
    """null value."""
    bool_value: builtins.bool
    """boolean value."""
    int64_value: builtins.int
    """int64 value."""
    uint64_value: builtins.int
    """uint64 value."""
    double_value: builtins.float
    """double value."""
    string_value: builtins.str
    """string value."""
    bytes_value: builtins.bytes
    """bytes value."""
    def __init__(
        self,
        *,
        null_value: google.protobuf.struct_pb2.NullValue.ValueType = ...,
        bool_value: builtins.bool = ...,
        int64_value: builtins.int = ...,
        uint64_value: builtins.int = ...,
        double_value: builtins.float = ...,
        string_value: builtins.str = ...,
        bytes_value: builtins.bytes = ...,
    ) -> None: ...
    def HasField(self, field_name: typing_extensions.Literal["bool_value", b"bool_value", "bytes_value", b"bytes_value", "constant_kind", b"constant_kind", "double_value", b"double_value", "int64_value", b"int64_value", "null_value", b"null_value", "string_value", b"string_value", "uint64_value", b"uint64_value"]) -> builtins.bool: ...
    def ClearField(self, field_name: typing_extensions.Literal["bool_value", b"bool_value", "bytes_value", b"bytes_value", "constant_kind", b"constant_kind", "double_value", b"double_value", "int64_value", b"int64_value", "null_value", b"null_value", "string_value", b"string_value", "uint64_value", b"uint64_value"]) -> None: ...
    def WhichOneof(self, oneof_group: typing_extensions.Literal["constant_kind", b"constant_kind"]) -> typing_extensions.Literal["null_value", "bool_value", "int64_value", "uint64_value", "double_value", "string_value", "bytes_value"] | None: ...

global___Literal = Literal