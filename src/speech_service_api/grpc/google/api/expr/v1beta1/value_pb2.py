# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/api/expr/v1beta1/value.proto
# Protobuf Python Version: 4.25.3
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import any_pb2 as google_dot_protobuf_dot_any__pb2
from google.protobuf import struct_pb2 as google_dot_protobuf_dot_struct__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n#google/api/expr/v1beta1/value.proto\x12\x17google.api.expr.v1beta1\x1a\x19google/protobuf/any.proto\x1a\x1cgoogle/protobuf/struct.proto\"\xca\x04\n\x05Value\x12;\n\nnull_value\x18\x01 \x01(\x0e\x32\x1a.google.protobuf.NullValueH\x00R\tnullValue\x12\x1f\n\nbool_value\x18\x02 \x01(\x08H\x00R\tboolValue\x12!\n\x0bint64_value\x18\x03 \x01(\x03H\x00R\nint64Value\x12#\n\x0cuint64_value\x18\x04 \x01(\x04H\x00R\x0buint64Value\x12#\n\x0c\x64ouble_value\x18\x05 \x01(\x01H\x00R\x0b\x64oubleValue\x12#\n\x0cstring_value\x18\x06 \x01(\tH\x00R\x0bstringValue\x12!\n\x0b\x62ytes_value\x18\x07 \x01(\x0cH\x00R\nbytesValue\x12\x43\n\nenum_value\x18\t \x01(\x0b\x32\".google.api.expr.v1beta1.EnumValueH\x00R\tenumValue\x12\x39\n\x0cobject_value\x18\n \x01(\x0b\x32\x14.google.protobuf.AnyH\x00R\x0bobjectValue\x12@\n\tmap_value\x18\x0b \x01(\x0b\x32!.google.api.expr.v1beta1.MapValueH\x00R\x08mapValue\x12\x43\n\nlist_value\x18\x0c \x01(\x0b\x32\".google.api.expr.v1beta1.ListValueH\x00R\tlistValue\x12\x1f\n\ntype_value\x18\x0f \x01(\tH\x00R\ttypeValueB\x06\n\x04kind\"5\n\tEnumValue\x12\x12\n\x04type\x18\x01 \x01(\tR\x04type\x12\x14\n\x05value\x18\x02 \x01(\x05R\x05value\"C\n\tListValue\x12\x36\n\x06values\x18\x01 \x03(\x0b\x32\x1e.google.api.expr.v1beta1.ValueR\x06values\"\xbe\x01\n\x08MapValue\x12\x41\n\x07\x65ntries\x18\x01 \x03(\x0b\x32\'.google.api.expr.v1beta1.MapValue.EntryR\x07\x65ntries\x1ao\n\x05\x45ntry\x12\x30\n\x03key\x18\x01 \x01(\x0b\x32\x1e.google.api.expr.v1beta1.ValueR\x03key\x12\x34\n\x05value\x18\x02 \x01(\x0b\x32\x1e.google.api.expr.v1beta1.ValueR\x05valueBk\n\x1b\x63om.google.api.expr.v1beta1B\nValueProtoP\x01Z;google.golang.org/genproto/googleapis/api/expr/v1beta1;expr\xf8\x01\x01\x62\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'google.api.expr.v1beta1.value_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:
  _globals['DESCRIPTOR']._options = None
  _globals['DESCRIPTOR']._serialized_options = b'\n\033com.google.api.expr.v1beta1B\nValueProtoP\001Z;google.golang.org/genproto/googleapis/api/expr/v1beta1;expr\370\001\001'
  _globals['_VALUE']._serialized_start=122
  _globals['_VALUE']._serialized_end=708
  _globals['_ENUMVALUE']._serialized_start=710
  _globals['_ENUMVALUE']._serialized_end=763
  _globals['_LISTVALUE']._serialized_start=765
  _globals['_LISTVALUE']._serialized_end=832
  _globals['_MAPVALUE']._serialized_start=835
  _globals['_MAPVALUE']._serialized_end=1025
  _globals['_MAPVALUE_ENTRY']._serialized_start=914
  _globals['_MAPVALUE_ENTRY']._serialized_end=1025
# @@protoc_insertion_point(module_scope)
