// Copyright 2024 Google LLC
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

// @generated by protoc-gen-es v2.2.3
// @generated from file google/api/expr/v1beta1/decl.proto (package google.api.expr.v1beta1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
import type { Expr } from "./expr_pb";

/**
 * Describes the file google/api/expr/v1beta1/decl.proto.
 */
export declare const file_google_api_expr_v1beta1_decl: GenFile;

/**
 * A declaration.
 *
 * @generated from message google.api.expr.v1beta1.Decl
 */
export declare type Decl = Message<"google.api.expr.v1beta1.Decl"> & {
  /**
   * The id of the declaration.
   *
   * @generated from field: int32 id = 1;
   */
  id: number;

  /**
   * The name of the declaration.
   *
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * The documentation string for the declaration.
   *
   * @generated from field: string doc = 3;
   */
  doc: string;

  /**
   * The kind of declaration.
   *
   * @generated from oneof google.api.expr.v1beta1.Decl.kind
   */
  kind: {
    /**
     * An identifier declaration.
     *
     * @generated from field: google.api.expr.v1beta1.IdentDecl ident = 4;
     */
    value: IdentDecl;
    case: "ident";
  } | {
    /**
     * A function declaration.
     *
     * @generated from field: google.api.expr.v1beta1.FunctionDecl function = 5;
     */
    value: FunctionDecl;
    case: "function";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.api.expr.v1beta1.Decl.
 * Use `create(DeclSchema)` to create a new message.
 */
export declare const DeclSchema: GenMessage<Decl>;

/**
 * The declared type of a variable.
 *
 * Extends runtime type values with extra information used for type checking
 * and dispatching.
 *
 * @generated from message google.api.expr.v1beta1.DeclType
 */
export declare type DeclType = Message<"google.api.expr.v1beta1.DeclType"> & {
  /**
   * The expression id of the declared type, if applicable.
   *
   * @generated from field: int32 id = 1;
   */
  id: number;

  /**
   * The type name, e.g. 'int', 'my.type.Type' or 'T'
   *
   * @generated from field: string type = 2;
   */
  type: string;

  /**
   * An ordered list of type parameters, e.g. `<string, int>`.
   * Only applies to a subset of types, e.g. `map`, `list`.
   *
   * @generated from field: repeated google.api.expr.v1beta1.DeclType type_params = 4;
   */
  typeParams: DeclType[];
};

/**
 * Describes the message google.api.expr.v1beta1.DeclType.
 * Use `create(DeclTypeSchema)` to create a new message.
 */
export declare const DeclTypeSchema: GenMessage<DeclType>;

/**
 * An identifier declaration.
 *
 * @generated from message google.api.expr.v1beta1.IdentDecl
 */
export declare type IdentDecl = Message<"google.api.expr.v1beta1.IdentDecl"> & {
  /**
   * Optional type of the identifier.
   *
   * @generated from field: google.api.expr.v1beta1.DeclType type = 3;
   */
  type?: DeclType;

  /**
   * Optional value of the identifier.
   *
   * @generated from field: google.api.expr.v1beta1.Expr value = 4;
   */
  value?: Expr;
};

/**
 * Describes the message google.api.expr.v1beta1.IdentDecl.
 * Use `create(IdentDeclSchema)` to create a new message.
 */
export declare const IdentDeclSchema: GenMessage<IdentDecl>;

/**
 * A function declaration.
 *
 * @generated from message google.api.expr.v1beta1.FunctionDecl
 */
export declare type FunctionDecl = Message<"google.api.expr.v1beta1.FunctionDecl"> & {
  /**
   * The function arguments.
   *
   * @generated from field: repeated google.api.expr.v1beta1.IdentDecl args = 1;
   */
  args: IdentDecl[];

  /**
   * Optional declared return type.
   *
   * @generated from field: google.api.expr.v1beta1.DeclType return_type = 2;
   */
  returnType?: DeclType;

  /**
   * If the first argument of the function is the receiver.
   *
   * @generated from field: bool receiver_function = 3;
   */
  receiverFunction: boolean;
};

/**
 * Describes the message google.api.expr.v1beta1.FunctionDecl.
 * Use `create(FunctionDeclSchema)` to create a new message.
 */
export declare const FunctionDeclSchema: GenMessage<FunctionDecl>;

