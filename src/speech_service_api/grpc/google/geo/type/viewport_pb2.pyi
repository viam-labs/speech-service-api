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
import google.protobuf.descriptor
import google.protobuf.message
import google.type.latlng_pb2
import sys

if sys.version_info >= (3, 8):
    import typing as typing_extensions
else:
    import typing_extensions

DESCRIPTOR: google.protobuf.descriptor.FileDescriptor

@typing_extensions.final
class Viewport(google.protobuf.message.Message):
    """A latitude-longitude viewport, represented as two diagonally opposite `low`
    and `high` points. A viewport is considered a closed region, i.e. it includes
    its boundary. The latitude bounds must range between -90 to 90 degrees
    inclusive, and the longitude bounds must range between -180 to 180 degrees
    inclusive. Various cases include:

     - If `low` = `high`, the viewport consists of that single point.

     - If `low.longitude` > `high.longitude`, the longitude range is inverted
       (the viewport crosses the 180 degree longitude line).

     - If `low.longitude` = -180 degrees and `high.longitude` = 180 degrees,
       the viewport includes all longitudes.

     - If `low.longitude` = 180 degrees and `high.longitude` = -180 degrees,
       the longitude range is empty.

     - If `low.latitude` > `high.latitude`, the latitude range is empty.

    Both `low` and `high` must be populated, and the represented box cannot be
    empty (as specified by the definitions above). An empty viewport will result
    in an error.

    For example, this viewport fully encloses New York City:

    {
        "low": {
            "latitude": 40.477398,
            "longitude": -74.259087
        },
        "high": {
            "latitude": 40.91618,
            "longitude": -73.70018
        }
    }
    """

    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    LOW_FIELD_NUMBER: builtins.int
    HIGH_FIELD_NUMBER: builtins.int
    @property
    def low(self) -> google.type.latlng_pb2.LatLng:
        """Required. The low point of the viewport."""
    @property
    def high(self) -> google.type.latlng_pb2.LatLng:
        """Required. The high point of the viewport."""
    def __init__(
        self,
        *,
        low: google.type.latlng_pb2.LatLng | None = ...,
        high: google.type.latlng_pb2.LatLng | None = ...,
    ) -> None: ...
    def HasField(self, field_name: typing_extensions.Literal["high", b"high", "low", b"low"]) -> builtins.bool: ...
    def ClearField(self, field_name: typing_extensions.Literal["high", b"high", "low", b"low"]) -> None: ...

global___Viewport = Viewport
