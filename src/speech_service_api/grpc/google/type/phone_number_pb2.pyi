"""
@generated by mypy-protobuf.  Do not edit manually!
isort:skip_file
Copyright 2021 Google LLC

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
import google.protobuf.descriptor
import google.protobuf.message
import sys

if sys.version_info >= (3, 8):
    import typing as typing_extensions
else:
    import typing_extensions

DESCRIPTOR: google.protobuf.descriptor.FileDescriptor

@typing_extensions.final
class PhoneNumber(google.protobuf.message.Message):
    """An object representing a phone number, suitable as an API wire format.

    This representation:

     - should not be used for locale-specific formatting of a phone number, such
       as "+1 (650) 253-0000 ext. 123"

     - is not designed for efficient storage
     - may not be suitable for dialing - specialized libraries (see references)
       should be used to parse the number for that purpose

    To do something meaningful with this number, such as format it for various
    use-cases, convert it to an `i18n.phonenumbers.PhoneNumber` object first.

    For instance, in Java this would be:

       com.google.type.PhoneNumber wireProto =
           com.google.type.PhoneNumber.newBuilder().build();
       com.google.i18n.phonenumbers.Phonenumber.PhoneNumber phoneNumber =
           PhoneNumberUtil.getInstance().parse(wireProto.getE164Number(), "ZZ");
       if (!wireProto.getExtension().isEmpty()) {
         phoneNumber.setExtension(wireProto.getExtension());
       }

     Reference(s):
      - https://github.com/google/libphonenumber
    """

    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    @typing_extensions.final
    class ShortCode(google.protobuf.message.Message):
        """An object representing a short code, which is a phone number that is
        typically much shorter than regular phone numbers and can be used to
        address messages in MMS and SMS systems, as well as for abbreviated dialing
        (e.g. "Text 611 to see how many minutes you have remaining on your plan.").

        Short codes are restricted to a region and are not internationally
        dialable, which means the same short code can exist in different regions,
        with different usage and pricing, even if those regions share the same
        country calling code (e.g. US and CA).
        """

        DESCRIPTOR: google.protobuf.descriptor.Descriptor

        REGION_CODE_FIELD_NUMBER: builtins.int
        NUMBER_FIELD_NUMBER: builtins.int
        region_code: builtins.str
        """Required. The BCP-47 region code of the location where calls to this
        short code can be made, such as "US" and "BB".

        Reference(s):
         - http://www.unicode.org/reports/tr35/#unicode_region_subtag
        """
        number: builtins.str
        """Required. The short code digits, without a leading plus ('+') or country
        calling code, e.g. "611".
        """
        def __init__(
            self,
            *,
            region_code: builtins.str = ...,
            number: builtins.str = ...,
        ) -> None: ...
        def ClearField(self, field_name: typing_extensions.Literal["number", b"number", "region_code", b"region_code"]) -> None: ...

    E164_NUMBER_FIELD_NUMBER: builtins.int
    SHORT_CODE_FIELD_NUMBER: builtins.int
    EXTENSION_FIELD_NUMBER: builtins.int
    e164_number: builtins.str
    """The phone number, represented as a leading plus sign ('+'), followed by a
    phone number that uses a relaxed ITU E.164 format consisting of the
    country calling code (1 to 3 digits) and the subscriber number, with no
    additional spaces or formatting, e.g.:
     - correct: "+15552220123"
     - incorrect: "+1 (555) 222-01234 x123".

    The ITU E.164 format limits the latter to 12 digits, but in practice not
    all countries respect that, so we relax that restriction here.
    National-only numbers are not allowed.

    References:
     - https://www.itu.int/rec/T-REC-E.164-201011-I
     - https://en.wikipedia.org/wiki/E.164.
     - https://en.wikipedia.org/wiki/List_of_country_calling_codes
    """
    @property
    def short_code(self) -> global___PhoneNumber.ShortCode:
        """A short code.

        Reference(s):
         - https://en.wikipedia.org/wiki/Short_code
        """
    extension: builtins.str
    """The phone number's extension. The extension is not standardized in ITU
    recommendations, except for being defined as a series of numbers with a
    maximum length of 40 digits. Other than digits, some other dialing
    characters such as ',' (indicating a wait) or '#' may be stored here.

    Note that no regions currently use extensions with short codes, so this
    field is normally only set in conjunction with an E.164 number. It is held
    separately from the E.164 number to allow for short code extensions in the
    future.
    """
    def __init__(
        self,
        *,
        e164_number: builtins.str = ...,
        short_code: global___PhoneNumber.ShortCode | None = ...,
        extension: builtins.str = ...,
    ) -> None: ...
    def HasField(self, field_name: typing_extensions.Literal["e164_number", b"e164_number", "kind", b"kind", "short_code", b"short_code"]) -> builtins.bool: ...
    def ClearField(self, field_name: typing_extensions.Literal["e164_number", b"e164_number", "extension", b"extension", "kind", b"kind", "short_code", b"short_code"]) -> None: ...
    def WhichOneof(self, oneof_group: typing_extensions.Literal["kind", b"kind"]) -> typing_extensions.Literal["e164_number", "short_code"] | None: ...

global___PhoneNumber = PhoneNumber
