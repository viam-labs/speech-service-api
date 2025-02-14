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

// @generated by protoc-gen-es v2.2.3
// @generated from file google/api/client.proto (package google.api, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenExtension, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
import type { LaunchStage } from "./launch_stage_pb";
import type { Duration, MethodOptions, ServiceOptions } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file google/api/client.proto.
 */
export declare const file_google_api_client: GenFile;

/**
 * Required information for every language.
 *
 * @generated from message google.api.CommonLanguageSettings
 */
export declare type CommonLanguageSettings = Message<"google.api.CommonLanguageSettings"> & {
  /**
   * Link to automatically generated reference documentation.  Example:
   * https://cloud.google.com/nodejs/docs/reference/asset/latest
   *
   * @generated from field: string reference_docs_uri = 1 [deprecated = true];
   * @deprecated
   */
  referenceDocsUri: string;

  /**
   * The destination where API teams want this client library to be published.
   *
   * @generated from field: repeated google.api.ClientLibraryDestination destinations = 2;
   */
  destinations: ClientLibraryDestination[];

  /**
   * Configuration for which RPCs should be generated in the GAPIC client.
   *
   * @generated from field: google.api.SelectiveGapicGeneration selective_gapic_generation = 3;
   */
  selectiveGapicGeneration?: SelectiveGapicGeneration;
};

/**
 * Describes the message google.api.CommonLanguageSettings.
 * Use `create(CommonLanguageSettingsSchema)` to create a new message.
 */
export declare const CommonLanguageSettingsSchema: GenMessage<CommonLanguageSettings>;

/**
 * Details about how and where to publish client libraries.
 *
 * @generated from message google.api.ClientLibrarySettings
 */
export declare type ClientLibrarySettings = Message<"google.api.ClientLibrarySettings"> & {
  /**
   * Version of the API to apply these settings to. This is the full protobuf
   * package for the API, ending in the version element.
   * Examples: "google.cloud.speech.v1" and "google.spanner.admin.database.v1".
   *
   * @generated from field: string version = 1;
   */
  version: string;

  /**
   * Launch stage of this version of the API.
   *
   * @generated from field: google.api.LaunchStage launch_stage = 2;
   */
  launchStage: LaunchStage;

  /**
   * When using transport=rest, the client request will encode enums as
   * numbers rather than strings.
   *
   * @generated from field: bool rest_numeric_enums = 3;
   */
  restNumericEnums: boolean;

  /**
   * Settings for legacy Java features, supported in the Service YAML.
   *
   * @generated from field: google.api.JavaSettings java_settings = 21;
   */
  javaSettings?: JavaSettings;

  /**
   * Settings for C++ client libraries.
   *
   * @generated from field: google.api.CppSettings cpp_settings = 22;
   */
  cppSettings?: CppSettings;

  /**
   * Settings for PHP client libraries.
   *
   * @generated from field: google.api.PhpSettings php_settings = 23;
   */
  phpSettings?: PhpSettings;

  /**
   * Settings for Python client libraries.
   *
   * @generated from field: google.api.PythonSettings python_settings = 24;
   */
  pythonSettings?: PythonSettings;

  /**
   * Settings for Node client libraries.
   *
   * @generated from field: google.api.NodeSettings node_settings = 25;
   */
  nodeSettings?: NodeSettings;

  /**
   * Settings for .NET client libraries.
   *
   * @generated from field: google.api.DotnetSettings dotnet_settings = 26;
   */
  dotnetSettings?: DotnetSettings;

  /**
   * Settings for Ruby client libraries.
   *
   * @generated from field: google.api.RubySettings ruby_settings = 27;
   */
  rubySettings?: RubySettings;

  /**
   * Settings for Go client libraries.
   *
   * @generated from field: google.api.GoSettings go_settings = 28;
   */
  goSettings?: GoSettings;
};

/**
 * Describes the message google.api.ClientLibrarySettings.
 * Use `create(ClientLibrarySettingsSchema)` to create a new message.
 */
export declare const ClientLibrarySettingsSchema: GenMessage<ClientLibrarySettings>;

/**
 * This message configures the settings for publishing [Google Cloud Client
 * libraries](https://cloud.google.com/apis/docs/cloud-client-libraries)
 * generated from the service config.
 *
 * @generated from message google.api.Publishing
 */
export declare type Publishing = Message<"google.api.Publishing"> & {
  /**
   * A list of API method settings, e.g. the behavior for methods that use the
   * long-running operation pattern.
   *
   * @generated from field: repeated google.api.MethodSettings method_settings = 2;
   */
  methodSettings: MethodSettings[];

  /**
   * Link to a *public* URI where users can report issues.  Example:
   * https://issuetracker.google.com/issues/new?component=190865&template=1161103
   *
   * @generated from field: string new_issue_uri = 101;
   */
  newIssueUri: string;

  /**
   * Link to product home page.  Example:
   * https://cloud.google.com/asset-inventory/docs/overview
   *
   * @generated from field: string documentation_uri = 102;
   */
  documentationUri: string;

  /**
   * Used as a tracking tag when collecting data about the APIs developer
   * relations artifacts like docs, packages delivered to package managers,
   * etc.  Example: "speech".
   *
   * @generated from field: string api_short_name = 103;
   */
  apiShortName: string;

  /**
   * GitHub label to apply to issues and pull requests opened for this API.
   *
   * @generated from field: string github_label = 104;
   */
  githubLabel: string;

  /**
   * GitHub teams to be added to CODEOWNERS in the directory in GitHub
   * containing source code for the client libraries for this API.
   *
   * @generated from field: repeated string codeowner_github_teams = 105;
   */
  codeownerGithubTeams: string[];

  /**
   * A prefix used in sample code when demarking regions to be included in
   * documentation.
   *
   * @generated from field: string doc_tag_prefix = 106;
   */
  docTagPrefix: string;

  /**
   * For whom the client library is being published.
   *
   * @generated from field: google.api.ClientLibraryOrganization organization = 107;
   */
  organization: ClientLibraryOrganization;

  /**
   * Client library settings.  If the same version string appears multiple
   * times in this list, then the last one wins.  Settings from earlier
   * settings with the same version string are discarded.
   *
   * @generated from field: repeated google.api.ClientLibrarySettings library_settings = 109;
   */
  librarySettings: ClientLibrarySettings[];

  /**
   * Optional link to proto reference documentation.  Example:
   * https://cloud.google.com/pubsub/lite/docs/reference/rpc
   *
   * @generated from field: string proto_reference_documentation_uri = 110;
   */
  protoReferenceDocumentationUri: string;

  /**
   * Optional link to REST reference documentation.  Example:
   * https://cloud.google.com/pubsub/lite/docs/reference/rest
   *
   * @generated from field: string rest_reference_documentation_uri = 111;
   */
  restReferenceDocumentationUri: string;
};

/**
 * Describes the message google.api.Publishing.
 * Use `create(PublishingSchema)` to create a new message.
 */
export declare const PublishingSchema: GenMessage<Publishing>;

/**
 * Settings for Java client libraries.
 *
 * @generated from message google.api.JavaSettings
 */
export declare type JavaSettings = Message<"google.api.JavaSettings"> & {
  /**
   * The package name to use in Java. Clobbers the java_package option
   * set in the protobuf. This should be used **only** by APIs
   * who have already set the language_settings.java.package_name" field
   * in gapic.yaml. API teams should use the protobuf java_package option
   * where possible.
   *
   * Example of a YAML configuration::
   *
   *  publishing:
   *    java_settings:
   *      library_package: com.google.cloud.pubsub.v1
   *
   * @generated from field: string library_package = 1;
   */
  libraryPackage: string;

  /**
   * Configure the Java class name to use instead of the service's for its
   * corresponding generated GAPIC client. Keys are fully-qualified
   * service names as they appear in the protobuf (including the full
   * the language_settings.java.interface_names" field in gapic.yaml. API
   * teams should otherwise use the service name as it appears in the
   * protobuf.
   *
   * Example of a YAML configuration::
   *
   *  publishing:
   *    java_settings:
   *      service_class_names:
   *        - google.pubsub.v1.Publisher: TopicAdmin
   *        - google.pubsub.v1.Subscriber: SubscriptionAdmin
   *
   * @generated from field: map<string, string> service_class_names = 2;
   */
  serviceClassNames: { [key: string]: string };

  /**
   * Some settings.
   *
   * @generated from field: google.api.CommonLanguageSettings common = 3;
   */
  common?: CommonLanguageSettings;
};

/**
 * Describes the message google.api.JavaSettings.
 * Use `create(JavaSettingsSchema)` to create a new message.
 */
export declare const JavaSettingsSchema: GenMessage<JavaSettings>;

/**
 * Settings for C++ client libraries.
 *
 * @generated from message google.api.CppSettings
 */
export declare type CppSettings = Message<"google.api.CppSettings"> & {
  /**
   * Some settings.
   *
   * @generated from field: google.api.CommonLanguageSettings common = 1;
   */
  common?: CommonLanguageSettings;
};

/**
 * Describes the message google.api.CppSettings.
 * Use `create(CppSettingsSchema)` to create a new message.
 */
export declare const CppSettingsSchema: GenMessage<CppSettings>;

/**
 * Settings for Php client libraries.
 *
 * @generated from message google.api.PhpSettings
 */
export declare type PhpSettings = Message<"google.api.PhpSettings"> & {
  /**
   * Some settings.
   *
   * @generated from field: google.api.CommonLanguageSettings common = 1;
   */
  common?: CommonLanguageSettings;
};

/**
 * Describes the message google.api.PhpSettings.
 * Use `create(PhpSettingsSchema)` to create a new message.
 */
export declare const PhpSettingsSchema: GenMessage<PhpSettings>;

/**
 * Settings for Python client libraries.
 *
 * @generated from message google.api.PythonSettings
 */
export declare type PythonSettings = Message<"google.api.PythonSettings"> & {
  /**
   * Some settings.
   *
   * @generated from field: google.api.CommonLanguageSettings common = 1;
   */
  common?: CommonLanguageSettings;

  /**
   * Experimental features to be included during client library generation.
   *
   * @generated from field: google.api.PythonSettings.ExperimentalFeatures experimental_features = 2;
   */
  experimentalFeatures?: PythonSettings_ExperimentalFeatures;
};

/**
 * Describes the message google.api.PythonSettings.
 * Use `create(PythonSettingsSchema)` to create a new message.
 */
export declare const PythonSettingsSchema: GenMessage<PythonSettings>;

/**
 * Experimental features to be included during client library generation.
 * These fields will be deprecated once the feature graduates and is enabled
 * by default.
 *
 * @generated from message google.api.PythonSettings.ExperimentalFeatures
 */
export declare type PythonSettings_ExperimentalFeatures = Message<"google.api.PythonSettings.ExperimentalFeatures"> & {
  /**
   * Enables generation of asynchronous REST clients if `rest` transport is
   * enabled. By default, asynchronous REST clients will not be generated.
   * This feature will be enabled by default 1 month after launching the
   * feature in preview packages.
   *
   * @generated from field: bool rest_async_io_enabled = 1;
   */
  restAsyncIoEnabled: boolean;

  /**
   * Enables generation of protobuf code using new types that are more
   * Pythonic which are included in `protobuf>=5.29.x`. This feature will be
   * enabled by default 1 month after launching the feature in preview
   * packages.
   *
   * @generated from field: bool protobuf_pythonic_types_enabled = 2;
   */
  protobufPythonicTypesEnabled: boolean;

  /**
   * Disables generation of an unversioned Python package for this client
   * library. This means that the module names will need to be versioned in
   * import statements. For example `import google.cloud.library_v2` instead
   * of `import google.cloud.library`.
   *
   * @generated from field: bool unversioned_package_disabled = 3;
   */
  unversionedPackageDisabled: boolean;
};

/**
 * Describes the message google.api.PythonSettings.ExperimentalFeatures.
 * Use `create(PythonSettings_ExperimentalFeaturesSchema)` to create a new message.
 */
export declare const PythonSettings_ExperimentalFeaturesSchema: GenMessage<PythonSettings_ExperimentalFeatures>;

/**
 * Settings for Node client libraries.
 *
 * @generated from message google.api.NodeSettings
 */
export declare type NodeSettings = Message<"google.api.NodeSettings"> & {
  /**
   * Some settings.
   *
   * @generated from field: google.api.CommonLanguageSettings common = 1;
   */
  common?: CommonLanguageSettings;
};

/**
 * Describes the message google.api.NodeSettings.
 * Use `create(NodeSettingsSchema)` to create a new message.
 */
export declare const NodeSettingsSchema: GenMessage<NodeSettings>;

/**
 * Settings for Dotnet client libraries.
 *
 * @generated from message google.api.DotnetSettings
 */
export declare type DotnetSettings = Message<"google.api.DotnetSettings"> & {
  /**
   * Some settings.
   *
   * @generated from field: google.api.CommonLanguageSettings common = 1;
   */
  common?: CommonLanguageSettings;

  /**
   * Map from original service names to renamed versions.
   * This is used when the default generated types
   * would cause a naming conflict. (Neither name is
   * fully-qualified.)
   * Example: Subscriber to SubscriberServiceApi.
   *
   * @generated from field: map<string, string> renamed_services = 2;
   */
  renamedServices: { [key: string]: string };

  /**
   * Map from full resource types to the effective short name
   * for the resource. This is used when otherwise resource
   * named from different services would cause naming collisions.
   * Example entry:
   * "datalabeling.googleapis.com/Dataset": "DataLabelingDataset"
   *
   * @generated from field: map<string, string> renamed_resources = 3;
   */
  renamedResources: { [key: string]: string };

  /**
   * List of full resource types to ignore during generation.
   * This is typically used for API-specific Location resources,
   * which should be handled by the generator as if they were actually
   * the common Location resources.
   * Example entry: "documentai.googleapis.com/Location"
   *
   * @generated from field: repeated string ignored_resources = 4;
   */
  ignoredResources: string[];

  /**
   * Namespaces which must be aliased in snippets due to
   * a known (but non-generator-predictable) naming collision
   *
   * @generated from field: repeated string forced_namespace_aliases = 5;
   */
  forcedNamespaceAliases: string[];

  /**
   * Method signatures (in the form "service.method(signature)")
   * which are provided separately, so shouldn't be generated.
   * Snippets *calling* these methods are still generated, however.
   *
   * @generated from field: repeated string handwritten_signatures = 6;
   */
  handwrittenSignatures: string[];
};

/**
 * Describes the message google.api.DotnetSettings.
 * Use `create(DotnetSettingsSchema)` to create a new message.
 */
export declare const DotnetSettingsSchema: GenMessage<DotnetSettings>;

/**
 * Settings for Ruby client libraries.
 *
 * @generated from message google.api.RubySettings
 */
export declare type RubySettings = Message<"google.api.RubySettings"> & {
  /**
   * Some settings.
   *
   * @generated from field: google.api.CommonLanguageSettings common = 1;
   */
  common?: CommonLanguageSettings;
};

/**
 * Describes the message google.api.RubySettings.
 * Use `create(RubySettingsSchema)` to create a new message.
 */
export declare const RubySettingsSchema: GenMessage<RubySettings>;

/**
 * Settings for Go client libraries.
 *
 * @generated from message google.api.GoSettings
 */
export declare type GoSettings = Message<"google.api.GoSettings"> & {
  /**
   * Some settings.
   *
   * @generated from field: google.api.CommonLanguageSettings common = 1;
   */
  common?: CommonLanguageSettings;

  /**
   * Map of service names to renamed services. Keys are the package relative
   * service names and values are the name to be used for the service client
   * and call options.
   *
   * publishing:
   *   go_settings:
   *     renamed_services:
   *       Publisher: TopicAdmin
   *
   * @generated from field: map<string, string> renamed_services = 2;
   */
  renamedServices: { [key: string]: string };
};

/**
 * Describes the message google.api.GoSettings.
 * Use `create(GoSettingsSchema)` to create a new message.
 */
export declare const GoSettingsSchema: GenMessage<GoSettings>;

/**
 * Describes the generator configuration for a method.
 *
 * @generated from message google.api.MethodSettings
 */
export declare type MethodSettings = Message<"google.api.MethodSettings"> & {
  /**
   * The fully qualified name of the method, for which the options below apply.
   * This is used to find the method to apply the options.
   *
   * Example:
   *
   *    publishing:
   *      method_settings:
   *      - selector: google.storage.control.v2.StorageControl.CreateFolder
   *        # method settings for CreateFolder...
   *
   * @generated from field: string selector = 1;
   */
  selector: string;

  /**
   * Describes settings to use for long-running operations when generating
   * API methods for RPCs. Complements RPCs that use the annotations in
   * google/longrunning/operations.proto.
   *
   * Example of a YAML configuration::
   *
   *    publishing:
   *      method_settings:
   *      - selector: google.cloud.speech.v2.Speech.BatchRecognize
   *        long_running:
   *          initial_poll_delay: 60s # 1 minute
   *          poll_delay_multiplier: 1.5
   *          max_poll_delay: 360s # 6 minutes
   *          total_poll_timeout: 54000s # 90 minutes
   *
   * @generated from field: google.api.MethodSettings.LongRunning long_running = 2;
   */
  longRunning?: MethodSettings_LongRunning;

  /**
   * List of top-level fields of the request message, that should be
   * automatically populated by the client libraries based on their
   * (google.api.field_info).format. Currently supported format: UUID4.
   *
   * Example of a YAML configuration:
   *
   *    publishing:
   *      method_settings:
   *      - selector: google.example.v1.ExampleService.CreateExample
   *        auto_populated_fields:
   *        - request_id
   *
   * @generated from field: repeated string auto_populated_fields = 3;
   */
  autoPopulatedFields: string[];
};

/**
 * Describes the message google.api.MethodSettings.
 * Use `create(MethodSettingsSchema)` to create a new message.
 */
export declare const MethodSettingsSchema: GenMessage<MethodSettings>;

/**
 * Describes settings to use when generating API methods that use the
 * long-running operation pattern.
 * All default values below are from those used in the client library
 * generators (e.g.
 * [Java](https://github.com/googleapis/gapic-generator-java/blob/04c2faa191a9b5a10b92392fe8482279c4404803/src/main/java/com/google/api/generator/gapic/composer/common/RetrySettingsComposer.java)).
 *
 * @generated from message google.api.MethodSettings.LongRunning
 */
export declare type MethodSettings_LongRunning = Message<"google.api.MethodSettings.LongRunning"> & {
  /**
   * Initial delay after which the first poll request will be made.
   * Default value: 5 seconds.
   *
   * @generated from field: google.protobuf.Duration initial_poll_delay = 1;
   */
  initialPollDelay?: Duration;

  /**
   * Multiplier to gradually increase delay between subsequent polls until it
   * reaches max_poll_delay.
   * Default value: 1.5.
   *
   * @generated from field: float poll_delay_multiplier = 2;
   */
  pollDelayMultiplier: number;

  /**
   * Maximum time between two subsequent poll requests.
   * Default value: 45 seconds.
   *
   * @generated from field: google.protobuf.Duration max_poll_delay = 3;
   */
  maxPollDelay?: Duration;

  /**
   * Total polling timeout.
   * Default value: 5 minutes.
   *
   * @generated from field: google.protobuf.Duration total_poll_timeout = 4;
   */
  totalPollTimeout?: Duration;
};

/**
 * Describes the message google.api.MethodSettings.LongRunning.
 * Use `create(MethodSettings_LongRunningSchema)` to create a new message.
 */
export declare const MethodSettings_LongRunningSchema: GenMessage<MethodSettings_LongRunning>;

/**
 * This message is used to configure the generation of a subset of the RPCs in
 * a service for client libraries.
 *
 * @generated from message google.api.SelectiveGapicGeneration
 */
export declare type SelectiveGapicGeneration = Message<"google.api.SelectiveGapicGeneration"> & {
  /**
   * An allowlist of the fully qualified names of RPCs that should be included
   * on public client surfaces.
   *
   * @generated from field: repeated string methods = 1;
   */
  methods: string[];

  /**
   * Setting this to true indicates to the client generators that methods
   * that would be excluded from the generation should instead be generated
   * in a way that indicates these methods should not be consumed by
   * end users. How this is expressed is up to individual language
   * implementations to decide. Some examples may be: added annotations,
   * obfuscated identifiers, or other language idiomatic patterns.
   *
   * @generated from field: bool generate_omitted_as_internal = 2;
   */
  generateOmittedAsInternal: boolean;
};

/**
 * Describes the message google.api.SelectiveGapicGeneration.
 * Use `create(SelectiveGapicGenerationSchema)` to create a new message.
 */
export declare const SelectiveGapicGenerationSchema: GenMessage<SelectiveGapicGeneration>;

/**
 * The organization for which the client libraries are being published.
 * Affects the url where generated docs are published, etc.
 *
 * @generated from enum google.api.ClientLibraryOrganization
 */
export enum ClientLibraryOrganization {
  /**
   * Not useful.
   *
   * @generated from enum value: CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED = 0;
   */
  CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED = 0,

  /**
   * Google Cloud Platform Org.
   *
   * @generated from enum value: CLOUD = 1;
   */
  CLOUD = 1,

  /**
   * Ads (Advertising) Org.
   *
   * @generated from enum value: ADS = 2;
   */
  ADS = 2,

  /**
   * Photos Org.
   *
   * @generated from enum value: PHOTOS = 3;
   */
  PHOTOS = 3,

  /**
   * Street View Org.
   *
   * @generated from enum value: STREET_VIEW = 4;
   */
  STREET_VIEW = 4,

  /**
   * Shopping Org.
   *
   * @generated from enum value: SHOPPING = 5;
   */
  SHOPPING = 5,

  /**
   * Geo Org.
   *
   * @generated from enum value: GEO = 6;
   */
  GEO = 6,

  /**
   * Generative AI - https://developers.generativeai.google
   *
   * @generated from enum value: GENERATIVE_AI = 7;
   */
  GENERATIVE_AI = 7,
}

/**
 * Describes the enum google.api.ClientLibraryOrganization.
 */
export declare const ClientLibraryOrganizationSchema: GenEnum<ClientLibraryOrganization>;

/**
 * To where should client libraries be published?
 *
 * @generated from enum google.api.ClientLibraryDestination
 */
export enum ClientLibraryDestination {
  /**
   * Client libraries will neither be generated nor published to package
   * managers.
   *
   * @generated from enum value: CLIENT_LIBRARY_DESTINATION_UNSPECIFIED = 0;
   */
  CLIENT_LIBRARY_DESTINATION_UNSPECIFIED = 0,

  /**
   * Generate the client library in a repo under github.com/googleapis,
   * but don't publish it to package managers.
   *
   * @generated from enum value: GITHUB = 10;
   */
  GITHUB = 10,

  /**
   * Publish the library to package managers like nuget.org and npmjs.com.
   *
   * @generated from enum value: PACKAGE_MANAGER = 20;
   */
  PACKAGE_MANAGER = 20,
}

/**
 * Describes the enum google.api.ClientLibraryDestination.
 */
export declare const ClientLibraryDestinationSchema: GenEnum<ClientLibraryDestination>;

/**
 * A definition of a client library method signature.
 *
 * In client libraries, each proto RPC corresponds to one or more methods
 * which the end user is able to call, and calls the underlying RPC.
 * Normally, this method receives a single argument (a struct or instance
 * corresponding to the RPC request object). Defining this field will
 * add one or more overloads providing flattened or simpler method signatures
 * in some languages.
 *
 * The fields on the method signature are provided as a comma-separated
 * string.
 *
 * For example, the proto RPC and annotation:
 *
 *   rpc CreateSubscription(CreateSubscriptionRequest)
 *       returns (Subscription) {
 *     option (google.api.method_signature) = "name,topic";
 *   }
 *
 * Would add the following Java overload (in addition to the method accepting
 * the request object):
 *
 *   public final Subscription createSubscription(String name, String topic)
 *
 * The following backwards-compatibility guidelines apply:
 *
 *   * Adding this annotation to an unannotated method is backwards
 *     compatible.
 *   * Adding this annotation to a method which already has existing
 *     method signature annotations is backwards compatible if and only if
 *     the new method signature annotation is last in the sequence.
 *   * Modifying or removing an existing method signature annotation is
 *     a breaking change.
 *   * Re-ordering existing method signature annotations is a breaking
 *     change.
 *
 * @generated from extension: repeated string method_signature = 1051;
 */
export declare const method_signature: GenExtension<MethodOptions, string[]>;

/**
 * The hostname for this service.
 * This should be specified with no prefix or protocol.
 *
 * Example:
 *
 *   service Foo {
 *     option (google.api.default_host) = "foo.googleapi.com";
 *     ...
 *   }
 *
 * @generated from extension: string default_host = 1049;
 */
export declare const default_host: GenExtension<ServiceOptions, string>;

/**
 * OAuth scopes needed for the client.
 *
 * Example:
 *
 *   service Foo {
 *     option (google.api.oauth_scopes) = \
 *       "https://www.googleapis.com/auth/cloud-platform";
 *     ...
 *   }
 *
 * If there is more than one scope, use a comma-separated string:
 *
 * Example:
 *
 *   service Foo {
 *     option (google.api.oauth_scopes) = \
 *       "https://www.googleapis.com/auth/cloud-platform,"
 *       "https://www.googleapis.com/auth/monitoring";
 *     ...
 *   }
 *
 * @generated from extension: string oauth_scopes = 1050;
 */
export declare const oauth_scopes: GenExtension<ServiceOptions, string>;

/**
 * The API version of this service, which should be sent by version-aware
 * clients to the service. This allows services to abide by the schema and
 * behavior of the service at the time this API version was deployed.
 * The format of the API version must be treated as opaque by clients.
 * Services may use a format with an apparent structure, but clients must
 * not rely on this to determine components within an API version, or attempt
 * to construct other valid API versions. Note that this is for upcoming
 * functionality and may not be implemented for all services.
 *
 * Example:
 *
 *   service Foo {
 *     option (google.api.api_version) = "v1_20230821_preview";
 *   }
 *
 * @generated from extension: string api_version = 525000001;
 */
export declare const api_version: GenExtension<ServiceOptions, string>;

