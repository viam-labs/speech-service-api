// Copyright 2025 Google LLC
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

// @generated by protoc-gen-es v2.2.5
// @generated from file google/api/field_info.proto (package google.api, syntax proto3)
/* eslint-disable */

import { enumDesc, extDesc, fileDesc, messageDesc, tsEnum } from "@bufbuild/protobuf/codegenv1";
import { file_google_protobuf_descriptor } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file google/api/field_info.proto.
 */
export const file_google_api_field_info = /*@__PURE__*/
  fileDesc("Chtnb29nbGUvYXBpL2ZpZWxkX2luZm8ucHJvdG8SCmdvb2dsZS5hcGkiwQEKCUZpZWxkSW5mbxIsCgZmb3JtYXQYASABKA4yHC5nb29nbGUuYXBpLkZpZWxkSW5mby5Gb3JtYXQSMwoQcmVmZXJlbmNlZF90eXBlcxgCIAMoCzIZLmdvb2dsZS5hcGkuVHlwZVJlZmVyZW5jZSJRCgZGb3JtYXQSFgoSRk9STUFUX1VOU1BFQ0lGSUVEEAASCQoFVVVJRDQQARIICgRJUFY0EAISCAoESVBWNhADEhAKDElQVjRfT1JfSVBWNhAEIiIKDVR5cGVSZWZlcmVuY2USEQoJdHlwZV9uYW1lGAEgASgJOlcKCmZpZWxkX2luZm8SHS5nb29nbGUucHJvdG9idWYuRmllbGRPcHRpb25zGMzx+YoBIAEoCzIVLmdvb2dsZS5hcGkuRmllbGRJbmZvUglmaWVsZEluZm9CbAoOY29tLmdvb2dsZS5hcGlCDkZpZWxkSW5mb1Byb3RvUAFaQWdvb2dsZS5nb2xhbmcub3JnL2dlbnByb3RvL2dvb2dsZWFwaXMvYXBpL2Fubm90YXRpb25zO2Fubm90YXRpb25zogIER0FQSWIGcHJvdG8z", [file_google_protobuf_descriptor]);

/**
 * Describes the message google.api.FieldInfo.
 * Use `create(FieldInfoSchema)` to create a new message.
 */
export const FieldInfoSchema = /*@__PURE__*/
  messageDesc(file_google_api_field_info, 0);

/**
 * Describes the enum google.api.FieldInfo.Format.
 */
export const FieldInfo_FormatSchema = /*@__PURE__*/
  enumDesc(file_google_api_field_info, 0, 0);

/**
 * The standard format of a field value. The supported formats are all backed
 * by either an RFC defined by the IETF or a Google-defined AIP.
 *
 * @generated from enum google.api.FieldInfo.Format
 */
export const FieldInfo_Format = /*@__PURE__*/
  tsEnum(FieldInfo_FormatSchema);

/**
 * Describes the message google.api.TypeReference.
 * Use `create(TypeReferenceSchema)` to create a new message.
 */
export const TypeReferenceSchema = /*@__PURE__*/
  messageDesc(file_google_api_field_info, 1);

/**
 * Rich semantic descriptor of an API field beyond the basic typing.
 *
 * Examples:
 *
 *     string request_id = 1 [(google.api.field_info).format = UUID4];
 *     string old_ip_address = 2 [(google.api.field_info).format = IPV4];
 *     string new_ip_address = 3 [(google.api.field_info).format = IPV6];
 *     string actual_ip_address = 4 [
 *       (google.api.field_info).format = IPV4_OR_IPV6
 *     ];
 *     google.protobuf.Any generic_field = 5 [
 *       (google.api.field_info).referenced_types = {type_name: "ActualType"},
 *       (google.api.field_info).referenced_types = {type_name: "OtherType"},
 *     ];
 *     google.protobuf.Any generic_user_input = 5 [
 *       (google.api.field_info).referenced_types = {type_name: "*"},
 *     ];
 *
 * @generated from extension: google.api.FieldInfo field_info = 291403980;
 */
export const field_info = /*@__PURE__*/
  extDesc(file_google_api_field_info, 0);

