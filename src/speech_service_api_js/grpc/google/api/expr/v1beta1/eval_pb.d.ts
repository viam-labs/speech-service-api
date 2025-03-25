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
// @generated from file google/api/expr/v1beta1/eval.proto (package google.api.expr.v1beta1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
import type { Value } from "./value_pb";
import type { Status } from "../../../rpc/status_pb";

/**
 * Describes the file google/api/expr/v1beta1/eval.proto.
 */
export declare const file_google_api_expr_v1beta1_eval: GenFile;

/**
 * The state of an evaluation.
 *
 * Can represent an initial, partial, or completed state of evaluation.
 *
 * @generated from message google.api.expr.v1beta1.EvalState
 */
export declare type EvalState = Message<"google.api.expr.v1beta1.EvalState"> & {
  /**
   * The unique values referenced in this message.
   *
   * @generated from field: repeated google.api.expr.v1beta1.ExprValue values = 1;
   */
  values: ExprValue[];

  /**
   * An ordered list of results.
   *
   * Tracks the flow of evaluation through the expression.
   * May be sparse.
   *
   * @generated from field: repeated google.api.expr.v1beta1.EvalState.Result results = 3;
   */
  results: EvalState_Result[];
};

/**
 * Describes the message google.api.expr.v1beta1.EvalState.
 * Use `create(EvalStateSchema)` to create a new message.
 */
export declare const EvalStateSchema: GenMessage<EvalState>;

/**
 * A single evaluation result.
 *
 * @generated from message google.api.expr.v1beta1.EvalState.Result
 */
export declare type EvalState_Result = Message<"google.api.expr.v1beta1.EvalState.Result"> & {
  /**
   * The expression this result is for.
   *
   * @generated from field: google.api.expr.v1beta1.IdRef expr = 1;
   */
  expr?: IdRef;

  /**
   * The index in `values` of the resulting value.
   *
   * @generated from field: int32 value = 2;
   */
  value: number;
};

/**
 * Describes the message google.api.expr.v1beta1.EvalState.Result.
 * Use `create(EvalState_ResultSchema)` to create a new message.
 */
export declare const EvalState_ResultSchema: GenMessage<EvalState_Result>;

/**
 * The value of an evaluated expression.
 *
 * @generated from message google.api.expr.v1beta1.ExprValue
 */
export declare type ExprValue = Message<"google.api.expr.v1beta1.ExprValue"> & {
  /**
   * An expression can resolve to a value, error or unknown.
   *
   * @generated from oneof google.api.expr.v1beta1.ExprValue.kind
   */
  kind: {
    /**
     * A concrete value.
     *
     * @generated from field: google.api.expr.v1beta1.Value value = 1;
     */
    value: Value;
    case: "value";
  } | {
    /**
     * The set of errors in the critical path of evalution.
     *
     * Only errors in the critical path are included. For example,
     * `(<error1> || true) && <error2>` will only result in `<error2>`,
     * while `<error1> || <error2>` will result in both `<error1>` and
     * `<error2>`.
     *
     * Errors cause by the presence of other errors are not included in the
     * set. For example `<error1>.foo`, `foo(<error1>)`, and `<error1> + 1` will
     * only result in `<error1>`.
     *
     * Multiple errors *might* be included when evaluation could result
     * in different errors. For example `<error1> + <error2>` and
     * `foo(<error1>, <error2>)` may result in `<error1>`, `<error2>` or both.
     * The exact subset of errors included for this case is unspecified and
     * depends on the implementation details of the evaluator.
     *
     * @generated from field: google.api.expr.v1beta1.ErrorSet error = 2;
     */
    value: ErrorSet;
    case: "error";
  } | {
    /**
     * The set of unknowns in the critical path of evaluation.
     *
     * Unknown behaves identically to Error with regards to propagation.
     * Specifically, only unknowns in the critical path are included, unknowns
     * caused by the presence of other unknowns are not included, and multiple
     * unknowns *might* be included included when evaluation could result in
     * different unknowns. For example:
     *
     *     (<unknown[1]> || true) && <unknown[2]> -> <unknown[2]>
     *     <unknown[1]> || <unknown[2]> -> <unknown[1,2]>
     *     <unknown[1]>.foo -> <unknown[1]>
     *     foo(<unknown[1]>) -> <unknown[1]>
     *     <unknown[1]> + <unknown[2]> -> <unknown[1]> or <unknown[2[>
     *
     * Unknown takes precidence over Error in cases where a `Value` can short
     * circuit the result:
     *
     *     <error> || <unknown> -> <unknown>
     *     <error> && <unknown> -> <unknown>
     *
     * Errors take precidence in all other cases:
     *
     *     <unknown> + <error> -> <error>
     *     foo(<unknown>, <error>) -> <error>
     *
     * @generated from field: google.api.expr.v1beta1.UnknownSet unknown = 3;
     */
    value: UnknownSet;
    case: "unknown";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.api.expr.v1beta1.ExprValue.
 * Use `create(ExprValueSchema)` to create a new message.
 */
export declare const ExprValueSchema: GenMessage<ExprValue>;

/**
 * A set of errors.
 *
 * The errors included depend on the context. See `ExprValue.error`.
 *
 * @generated from message google.api.expr.v1beta1.ErrorSet
 */
export declare type ErrorSet = Message<"google.api.expr.v1beta1.ErrorSet"> & {
  /**
   * The errors in the set.
   *
   * @generated from field: repeated google.rpc.Status errors = 1;
   */
  errors: Status[];
};

/**
 * Describes the message google.api.expr.v1beta1.ErrorSet.
 * Use `create(ErrorSetSchema)` to create a new message.
 */
export declare const ErrorSetSchema: GenMessage<ErrorSet>;

/**
 * A set of expressions for which the value is unknown.
 *
 * The unknowns included depend on the context. See `ExprValue.unknown`.
 *
 * @generated from message google.api.expr.v1beta1.UnknownSet
 */
export declare type UnknownSet = Message<"google.api.expr.v1beta1.UnknownSet"> & {
  /**
   * The ids of the expressions with unknown values.
   *
   * @generated from field: repeated google.api.expr.v1beta1.IdRef exprs = 1;
   */
  exprs: IdRef[];
};

/**
 * Describes the message google.api.expr.v1beta1.UnknownSet.
 * Use `create(UnknownSetSchema)` to create a new message.
 */
export declare const UnknownSetSchema: GenMessage<UnknownSet>;

/**
 * A reference to an expression id.
 *
 * @generated from message google.api.expr.v1beta1.IdRef
 */
export declare type IdRef = Message<"google.api.expr.v1beta1.IdRef"> & {
  /**
   * The expression id.
   *
   * @generated from field: int32 id = 1;
   */
  id: number;
};

/**
 * Describes the message google.api.expr.v1beta1.IdRef.
 * Use `create(IdRefSchema)` to create a new message.
 */
export declare const IdRefSchema: GenMessage<IdRef>;

