# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.error import Error  # noqa: E501
from swagger_server.models.generic_response import GenericResponse  # noqa: E501
from swagger_server.models.mail_log import MailLog  # noqa: E501
from swagger_server.models.mail_order import MailOrder  # noqa: E501
from swagger_server.models.mail_orders import MailOrders  # noqa: E501
from swagger_server.test import BaseTestCase


class TestDefaultController(BaseTestCase):
    """DefaultController integration test stubs"""

    def test_get_mail_by_id(self):
        """Test case for get_mail_by_id

        Gets mail order information by id
        """
        response = self.client.open(
            '//mail/{id}'.format(id=789),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_mail_orders(self):
        """Test case for get_mail_orders

        displays a list of mail service orders
        """
        response = self.client.open(
            '//mail',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_ping_server(self):
        """Test case for ping_server

        Checks if the server is running
        """
        response = self.client.open(
            '//ping',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_place_mail_order(self):
        """Test case for place_mail_order

        places a mail order
        """
        body = MailOrder()
        response = self.client.open(
            '//mail/order',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_send_mail_by_id(self):
        """Test case for send_mail_by_id

        Sends an Email
        """
        query_string = [('subject', 'subject_example'),
                        ('body', 'body_example'),
                        ('to', 'to_example'),
                        ('_from', '_from_example')]
        response = self.client.open(
            '//mail/{id}/send'.format(id=789),
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_validate_mail_order(self):
        """Test case for validate_mail_order

        validatess order details before placing an order
        """
        response = self.client.open(
            '//mail/order',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_view_mail_log_by_id(self):
        """Test case for view_mail_log_by_id

        displays the mail log
        """
        query_string = [('search_string', 'search_string_example'),
                        ('skip', 1),
                        ('limit', 50)]
        response = self.client.open(
            '//mail/{id}/log'.format(id=789),
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
