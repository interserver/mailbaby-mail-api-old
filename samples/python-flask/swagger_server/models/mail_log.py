# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class MailLog(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, id: int=None):  # noqa: E501
        """MailLog - a model defined in Swagger

        :param id: The id of this MailLog.  # noqa: E501
        :type id: int
        """
        self.swagger_types = {
            'id': int
        }

        self.attribute_map = {
            'id': 'id'
        }
        self._id = id

    @classmethod
    def from_dict(cls, dikt) -> 'MailLog':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The MailLog of this MailLog.  # noqa: E501
        :rtype: MailLog
        """
        return util.deserialize_model(dikt, cls)

    @property
    def id(self) -> int:
        """Gets the id of this MailLog.


        :return: The id of this MailLog.
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id: int):
        """Sets the id of this MailLog.


        :param id: The id of this MailLog.
        :type id: int
        """

        self._id = id
