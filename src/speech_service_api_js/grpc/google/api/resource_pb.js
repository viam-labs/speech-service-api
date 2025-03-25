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
// @generated from file google/api/resource.proto (package google.api, syntax proto3)
/* eslint-disable */

import { enumDesc, extDesc, fileDesc, messageDesc, tsEnum } from "@bufbuild/protobuf/codegenv1";
import { file_google_protobuf_descriptor } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file google/api/resource.proto.
 */
export const file_google_api_resource = /*@__PURE__*/
  fileDesc("Chlnb29nbGUvYXBpL3Jlc291cmNlLnByb3RvEgpnb29nbGUuYXBpIu4CChJSZXNvdXJjZURlc2NyaXB0b3ISDAoEdHlwZRgBIAEoCRIPCgdwYXR0ZXJuGAIgAygJEhIKCm5hbWVfZmllbGQYAyABKAkSNwoHaGlzdG9yeRgEIAEoDjImLmdvb2dsZS5hcGkuUmVzb3VyY2VEZXNjcmlwdG9yLkhpc3RvcnkSDgoGcGx1cmFsGAUgASgJEhAKCHNpbmd1bGFyGAYgASgJEjMKBXN0eWxlGAogAygOMiQuZ29vZ2xlLmFwaS5SZXNvdXJjZURlc2NyaXB0b3IuU3R5bGUiWwoHSGlzdG9yeRIXChNISVNUT1JZX1VOU1BFQ0lGSUVEEAASHQoZT1JJR0lOQUxMWV9TSU5HTEVfUEFUVEVSThABEhgKFEZVVFVSRV9NVUxUSV9QQVRURVJOEAIiOAoFU3R5bGUSFQoRU1RZTEVfVU5TUEVDSUZJRUQQABIYChRERUNMQVJBVElWRV9GUklFTkRMWRABIjUKEVJlc291cmNlUmVmZXJlbmNlEgwKBHR5cGUYASABKAkSEgoKY2hpbGRfdHlwZRgCIAEoCTpsChJyZXNvdXJjZV9yZWZlcmVuY2USHS5nb29nbGUucHJvdG9idWYuRmllbGRPcHRpb25zGJ8IIAEoCzIdLmdvb2dsZS5hcGkuUmVzb3VyY2VSZWZlcmVuY2VSEXJlc291cmNlUmVmZXJlbmNlOm4KE3Jlc291cmNlX2RlZmluaXRpb24SHC5nb29nbGUucHJvdG9idWYuRmlsZU9wdGlvbnMYnQggAygLMh4uZ29vZ2xlLmFwaS5SZXNvdXJjZURlc2NyaXB0b3JSEnJlc291cmNlRGVmaW5pdGlvbjpcCghyZXNvdXJjZRIfLmdvb2dsZS5wcm90b2J1Zi5NZXNzYWdlT3B0aW9ucxidCCABKAsyHi5nb29nbGUuYXBpLlJlc291cmNlRGVzY3JpcHRvclIIcmVzb3VyY2VCawoOY29tLmdvb2dsZS5hcGlCDVJlc291cmNlUHJvdG9QAVpBZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9hcGkvYW5ub3RhdGlvbnM7YW5ub3RhdGlvbnOiAgRHQVBJYgZwcm90bzM", [file_google_protobuf_descriptor]);

/**
 * Describes the message google.api.ResourceDescriptor.
 * Use `create(ResourceDescriptorSchema)` to create a new message.
 */
export const ResourceDescriptorSchema = /*@__PURE__*/
  messageDesc(file_google_api_resource, 0);

/**
 * Describes the enum google.api.ResourceDescriptor.History.
 */
export const ResourceDescriptor_HistorySchema = /*@__PURE__*/
  enumDesc(file_google_api_resource, 0, 0);

/**
 * A description of the historical or future-looking state of the
 * resource pattern.
 *
 * @generated from enum google.api.ResourceDescriptor.History
 */
export const ResourceDescriptor_History = /*@__PURE__*/
  tsEnum(ResourceDescriptor_HistorySchema);

/**
 * Describes the enum google.api.ResourceDescriptor.Style.
 */
export const ResourceDescriptor_StyleSchema = /*@__PURE__*/
  enumDesc(file_google_api_resource, 0, 1);

/**
 * A flag representing a specific style that a resource claims to conform to.
 *
 * @generated from enum google.api.ResourceDescriptor.Style
 */
export const ResourceDescriptor_Style = /*@__PURE__*/
  tsEnum(ResourceDescriptor_StyleSchema);

/**
 * Describes the message google.api.ResourceReference.
 * Use `create(ResourceReferenceSchema)` to create a new message.
 */
export const ResourceReferenceSchema = /*@__PURE__*/
  messageDesc(file_google_api_resource, 1);

/**
 * An annotation that describes a resource reference, see
 * [ResourceReference][].
 *
 * @generated from extension: google.api.ResourceReference resource_reference = 1055;
 */
export const resource_reference = /*@__PURE__*/
  extDesc(file_google_api_resource, 0);

/**
 * An annotation that describes a resource definition without a corresponding
 * message; see [ResourceDescriptor][].
 *
 * @generated from extension: repeated google.api.ResourceDescriptor resource_definition = 1053;
 */
export const resource_definition = /*@__PURE__*/
  extDesc(file_google_api_resource, 1);

/**
 * An annotation that describes a resource definition, see
 * [ResourceDescriptor][].
 *
 * @generated from extension: google.api.ResourceDescriptor resource = 1053;
 */
export const resource = /*@__PURE__*/
  extDesc(file_google_api_resource, 2);

