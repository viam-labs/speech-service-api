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
//

// @generated by protoc-gen-es v2.2.5
// @generated from file google/api/expr/v1beta1/source.proto (package google.api.expr.v1beta1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/api/expr/v1beta1/source.proto.
 */
export declare const file_google_api_expr_v1beta1_source: GenFile;

/**
 * Source information collected at parse time.
 *
 * @generated from message google.api.expr.v1beta1.SourceInfo
 */
export declare type SourceInfo = Message<"google.api.expr.v1beta1.SourceInfo"> & {
  /**
   * The location name. All position information attached to an expression is
   * relative to this location.
   *
   * The location could be a file, UI element, or similar. For example,
   * `acme/app/AnvilPolicy.cel`.
   *
   * @generated from field: string location = 2;
   */
  location: string;

  /**
   * Monotonically increasing list of character offsets where newlines appear.
   *
   * The line number of a given position is the index `i` where for a given
   * `id` the `line_offsets[i] < id_positions[id] < line_offsets[i+1]`. The
   * column may be derivd from `id_positions[id] - line_offsets[i]`.
   *
   * @generated from field: repeated int32 line_offsets = 3;
   */
  lineOffsets: number[];

  /**
   * A map from the parse node id (e.g. `Expr.id`) to the character offset
   * within source.
   *
   * @generated from field: map<int32, int32> positions = 4;
   */
  positions: { [key: number]: number };
};

/**
 * Describes the message google.api.expr.v1beta1.SourceInfo.
 * Use `create(SourceInfoSchema)` to create a new message.
 */
export declare const SourceInfoSchema: GenMessage<SourceInfo>;

/**
 * A specific position in source.
 *
 * @generated from message google.api.expr.v1beta1.SourcePosition
 */
export declare type SourcePosition = Message<"google.api.expr.v1beta1.SourcePosition"> & {
  /**
   * The soucre location name (e.g. file name).
   *
   * @generated from field: string location = 1;
   */
  location: string;

  /**
   * The character offset.
   *
   * @generated from field: int32 offset = 2;
   */
  offset: number;

  /**
   * The 1-based index of the starting line in the source text
   * where the issue occurs, or 0 if unknown.
   *
   * @generated from field: int32 line = 3;
   */
  line: number;

  /**
   * The 0-based index of the starting position within the line of source text
   * where the issue occurs.  Only meaningful if line is nonzer..
   *
   * @generated from field: int32 column = 4;
   */
  column: number;
};

/**
 * Describes the message google.api.expr.v1beta1.SourcePosition.
 * Use `create(SourcePositionSchema)` to create a new message.
 */
export declare const SourcePositionSchema: GenMessage<SourcePosition>;

