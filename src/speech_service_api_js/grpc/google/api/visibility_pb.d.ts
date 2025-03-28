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
// @generated from file google/api/visibility.proto (package google.api, syntax proto3)
/* eslint-disable */

import type { GenExtension, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
import type { EnumOptions, EnumValueOptions, FieldOptions, MessageOptions, MethodOptions, ServiceOptions } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file google/api/visibility.proto.
 */
export declare const file_google_api_visibility: GenFile;

/**
 * `Visibility` restricts service consumer's access to service elements,
 * such as whether an application can call a visibility-restricted method.
 * The restriction is expressed by applying visibility labels on service
 * elements. The visibility labels are elsewhere linked to service consumers.
 *
 * A service can define multiple visibility labels, but a service consumer
 * should be granted at most one visibility label. Multiple visibility
 * labels for a single service consumer are not supported.
 *
 * If an element and all its parents have no visibility label, its visibility
 * is unconditionally granted.
 *
 * Example:
 *
 *     visibility:
 *       rules:
 *       - selector: google.calendar.Calendar.EnhancedSearch
 *         restriction: PREVIEW
 *       - selector: google.calendar.Calendar.Delegate
 *         restriction: INTERNAL
 *
 * Here, all methods are publicly visible except for the restricted methods
 * EnhancedSearch and Delegate.
 *
 * @generated from message google.api.Visibility
 */
export declare type Visibility = Message<"google.api.Visibility"> & {
  /**
   * A list of visibility rules that apply to individual API elements.
   *
   * **NOTE:** All service configuration rules follow "last one wins" order.
   *
   * @generated from field: repeated google.api.VisibilityRule rules = 1;
   */
  rules: VisibilityRule[];
};

/**
 * Describes the message google.api.Visibility.
 * Use `create(VisibilitySchema)` to create a new message.
 */
export declare const VisibilitySchema: GenMessage<Visibility>;

/**
 * A visibility rule provides visibility configuration for an individual API
 * element.
 *
 * @generated from message google.api.VisibilityRule
 */
export declare type VisibilityRule = Message<"google.api.VisibilityRule"> & {
  /**
   * Selects methods, messages, fields, enums, etc. to which this rule applies.
   *
   * Refer to [selector][google.api.DocumentationRule.selector] for syntax
   * details.
   *
   * @generated from field: string selector = 1;
   */
  selector: string;

  /**
   * A comma-separated list of visibility labels that apply to the `selector`.
   * Any of the listed labels can be used to grant the visibility.
   *
   * If a rule has multiple labels, removing one of the labels but not all of
   * them can break clients.
   *
   * Example:
   *
   *     visibility:
   *       rules:
   *       - selector: google.calendar.Calendar.EnhancedSearch
   *         restriction: INTERNAL, PREVIEW
   *
   * Removing INTERNAL from this restriction will break clients that rely on
   * this method and only had access to it through INTERNAL.
   *
   * @generated from field: string restriction = 2;
   */
  restriction: string;
};

/**
 * Describes the message google.api.VisibilityRule.
 * Use `create(VisibilityRuleSchema)` to create a new message.
 */
export declare const VisibilityRuleSchema: GenMessage<VisibilityRule>;

/**
 * See `VisibilityRule`.
 *
 * @generated from extension: google.api.VisibilityRule enum_visibility = 72295727;
 */
export declare const enum_visibility: GenExtension<EnumOptions, VisibilityRule>;

/**
 * See `VisibilityRule`.
 *
 * @generated from extension: google.api.VisibilityRule value_visibility = 72295727;
 */
export declare const value_visibility: GenExtension<EnumValueOptions, VisibilityRule>;

/**
 * See `VisibilityRule`.
 *
 * @generated from extension: google.api.VisibilityRule field_visibility = 72295727;
 */
export declare const field_visibility: GenExtension<FieldOptions, VisibilityRule>;

/**
 * See `VisibilityRule`.
 *
 * @generated from extension: google.api.VisibilityRule message_visibility = 72295727;
 */
export declare const message_visibility: GenExtension<MessageOptions, VisibilityRule>;

/**
 * See `VisibilityRule`.
 *
 * @generated from extension: google.api.VisibilityRule method_visibility = 72295727;
 */
export declare const method_visibility: GenExtension<MethodOptions, VisibilityRule>;

/**
 * See `VisibilityRule`.
 *
 * @generated from extension: google.api.VisibilityRule api_visibility = 72295727;
 */
export declare const api_visibility: GenExtension<ServiceOptions, VisibilityRule>;

