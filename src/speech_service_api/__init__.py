"""
This file registers the speech subtype with the Viam Registry, as well as the specific SpeechIOService model.
"""

from viam.resource.registry import Registry, ResourceRegistration

from .api import SpeechClient, SpeechRPCService, SpeechService

Registry.register_subtype(ResourceRegistration(SpeechService, SpeechRPCService, lambda name, channel: SpeechClient(name, channel)))
