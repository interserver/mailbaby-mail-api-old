# swagger_client.DefaultApi

All URIs are relative to *http://mynew.interserver.net:8787/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_mail_by_id**](DefaultApi.md#get_mail_by_id) | **GET** /mail/{id} | Gets mail order information by id
[**get_mail_orders**](DefaultApi.md#get_mail_orders) | **GET** /mail | displays a list of mail service orders
[**ping_server**](DefaultApi.md#ping_server) | **GET** /ping | Checks if the server is running
[**place_mail_order**](DefaultApi.md#place_mail_order) | **POST** /mail/order | places a mail order
[**send_mail_by_id**](DefaultApi.md#send_mail_by_id) | **GET** /mail/{id}/send | Sends an Email
[**validate_mail_order**](DefaultApi.md#validate_mail_order) | **GET** /mail/order | validatess order details before placing an order
[**view_mail_log_by_id**](DefaultApi.md#view_mail_log_by_id) | **GET** /mail/{id}/log | displays the mail log

# **get_mail_by_id**
> MailOrder get_mail_by_id(id)

Gets mail order information by id

returns information about a mail order in the system with the given id.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# Configure API key authorization: apiKeyAuth
configuration = swagger_client.Configuration()
configuration.api_key['X-API-KEY'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-API-KEY'] = 'Bearer'
# Configure API key authorization: apiLoginAuth
configuration = swagger_client.Configuration()
configuration.api_key['X-API-LOGIN'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-API-LOGIN'] = 'Bearer'
# Configure API key authorization: apiPasswordAuth
configuration = swagger_client.Configuration()
configuration.api_key['X-API-PASS'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-API-PASS'] = 'Bearer'

# create an instance of the API class
api_instance = swagger_client.DefaultApi(swagger_client.ApiClient(configuration))
id = 789 # int | User ID

try:
    # Gets mail order information by id
    api_response = api_instance.get_mail_by_id(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DefaultApi->get_mail_by_id: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| User ID | 

### Return type

[**MailOrder**](MailOrder.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [apiLoginAuth](../README.md#apiLoginAuth), [apiPasswordAuth](../README.md#apiPasswordAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_mail_orders**
> MailOrders get_mail_orders()

displays a list of mail service orders

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# Configure API key authorization: apiKeyAuth
configuration = swagger_client.Configuration()
configuration.api_key['X-API-KEY'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-API-KEY'] = 'Bearer'
# Configure API key authorization: apiLoginAuth
configuration = swagger_client.Configuration()
configuration.api_key['X-API-LOGIN'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-API-LOGIN'] = 'Bearer'
# Configure API key authorization: apiPasswordAuth
configuration = swagger_client.Configuration()
configuration.api_key['X-API-PASS'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-API-PASS'] = 'Bearer'

# create an instance of the API class
api_instance = swagger_client.DefaultApi(swagger_client.ApiClient(configuration))

try:
    # displays a list of mail service orders
    api_response = api_instance.get_mail_orders()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DefaultApi->get_mail_orders: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**MailOrders**](MailOrders.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [apiLoginAuth](../README.md#apiLoginAuth), [apiPasswordAuth](../README.md#apiPasswordAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ping_server**
> ping_server()

Checks if the server is running

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DefaultApi()

try:
    # Checks if the server is running
    api_instance.ping_server()
except ApiException as e:
    print("Exception when calling DefaultApi->ping_server: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **place_mail_order**
> place_mail_order(body=body)

places a mail order

Adds an item to the system

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# Configure API key authorization: apiKeyAuth
configuration = swagger_client.Configuration()
configuration.api_key['X-API-KEY'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-API-KEY'] = 'Bearer'
# Configure API key authorization: apiLoginAuth
configuration = swagger_client.Configuration()
configuration.api_key['X-API-LOGIN'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-API-LOGIN'] = 'Bearer'
# Configure API key authorization: apiPasswordAuth
configuration = swagger_client.Configuration()
configuration.api_key['X-API-PASS'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-API-PASS'] = 'Bearer'

# create an instance of the API class
api_instance = swagger_client.DefaultApi(swagger_client.ApiClient(configuration))
body = swagger_client.MailOrder() # MailOrder | Inventory item to add (optional)

try:
    # places a mail order
    api_instance.place_mail_order(body=body)
except ApiException as e:
    print("Exception when calling DefaultApi->place_mail_order: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MailOrder**](MailOrder.md)| Inventory item to add | [optional] 

### Return type

void (empty response body)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [apiLoginAuth](../README.md#apiLoginAuth), [apiPasswordAuth](../README.md#apiPasswordAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_mail_by_id**
> GenericResponse send_mail_by_id(id, subject=subject, body=body, to=to, _from=_from)

Sends an Email

Sends An email through one of your mail orders.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# Configure API key authorization: apiKeyAuth
configuration = swagger_client.Configuration()
configuration.api_key['X-API-KEY'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-API-KEY'] = 'Bearer'
# Configure API key authorization: apiLoginAuth
configuration = swagger_client.Configuration()
configuration.api_key['X-API-LOGIN'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-API-LOGIN'] = 'Bearer'
# Configure API key authorization: apiPasswordAuth
configuration = swagger_client.Configuration()
configuration.api_key['X-API-PASS'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-API-PASS'] = 'Bearer'

# create an instance of the API class
api_instance = swagger_client.DefaultApi(swagger_client.ApiClient(configuration))
id = 789 # int | User ID
subject = 'subject_example' # str |  (optional)
body = 'body_example' # str |  (optional)
to = 'to_example' # str |  (optional)
_from = '_from_example' # str |  (optional)

try:
    # Sends an Email
    api_response = api_instance.send_mail_by_id(id, subject=subject, body=body, to=to, _from=_from)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DefaultApi->send_mail_by_id: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| User ID | 
 **subject** | **str**|  | [optional] 
 **body** | **str**|  | [optional] 
 **to** | **str**|  | [optional] 
 **_from** | **str**|  | [optional] 

### Return type

[**GenericResponse**](GenericResponse.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [apiLoginAuth](../README.md#apiLoginAuth), [apiPasswordAuth](../README.md#apiPasswordAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validate_mail_order**
> validate_mail_order()

validatess order details before placing an order

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# Configure API key authorization: apiKeyAuth
configuration = swagger_client.Configuration()
configuration.api_key['X-API-KEY'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-API-KEY'] = 'Bearer'
# Configure API key authorization: apiLoginAuth
configuration = swagger_client.Configuration()
configuration.api_key['X-API-LOGIN'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-API-LOGIN'] = 'Bearer'
# Configure API key authorization: apiPasswordAuth
configuration = swagger_client.Configuration()
configuration.api_key['X-API-PASS'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-API-PASS'] = 'Bearer'

# create an instance of the API class
api_instance = swagger_client.DefaultApi(swagger_client.ApiClient(configuration))

try:
    # validatess order details before placing an order
    api_instance.validate_mail_order()
except ApiException as e:
    print("Exception when calling DefaultApi->validate_mail_order: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [apiLoginAuth](../README.md#apiLoginAuth), [apiPasswordAuth](../README.md#apiPasswordAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **view_mail_log_by_id**
> list[MailLog] view_mail_log_by_id(id, search_string=search_string, skip=skip, limit=limit)

displays the mail log

By passing in the appropriate options, you can search for available inventory in the system 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# Configure API key authorization: apiKeyAuth
configuration = swagger_client.Configuration()
configuration.api_key['X-API-KEY'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-API-KEY'] = 'Bearer'
# Configure API key authorization: apiLoginAuth
configuration = swagger_client.Configuration()
configuration.api_key['X-API-LOGIN'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-API-LOGIN'] = 'Bearer'
# Configure API key authorization: apiPasswordAuth
configuration = swagger_client.Configuration()
configuration.api_key['X-API-PASS'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-API-PASS'] = 'Bearer'

# create an instance of the API class
api_instance = swagger_client.DefaultApi(swagger_client.ApiClient(configuration))
id = 789 # int | User ID
search_string = 'search_string_example' # str | pass an optional search string for looking up inventory (optional)
skip = 56 # int | number of records to skip for pagination (optional)
limit = 56 # int | maximum number of records to return (optional)

try:
    # displays the mail log
    api_response = api_instance.view_mail_log_by_id(id, search_string=search_string, skip=skip, limit=limit)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DefaultApi->view_mail_log_by_id: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| User ID | 
 **search_string** | **str**| pass an optional search string for looking up inventory | [optional] 
 **skip** | **int**| number of records to skip for pagination | [optional] 
 **limit** | **int**| maximum number of records to return | [optional] 

### Return type

[**list[MailLog]**](MailLog.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [apiLoginAuth](../README.md#apiLoginAuth), [apiPasswordAuth](../README.md#apiPasswordAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

