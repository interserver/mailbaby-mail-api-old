# Swagger\Client\DefaultApi

All URIs are relative to *http://mynew.interserver.net:8787/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMailById**](DefaultApi.md#getmailbyid) | **GET** /mail/{id} | Gets mail order information by id
[**getMailOrders**](DefaultApi.md#getmailorders) | **GET** /mail | displays a list of mail service orders
[**pingServer**](DefaultApi.md#pingserver) | **GET** /ping | Checks if the server is running
[**placeMailOrder**](DefaultApi.md#placemailorder) | **POST** /mail/order | places a mail order
[**sendMailById**](DefaultApi.md#sendmailbyid) | **GET** /mail/{id}/send | Sends an Email
[**validateMailOrder**](DefaultApi.md#validatemailorder) | **GET** /mail/order | validatess order details before placing an order
[**viewMailLogById**](DefaultApi.md#viewmaillogbyid) | **GET** /mail/{id}/log | displays the mail log

# **getMailById**
> \Swagger\Client\Model\MailOrder getMailById($id)

Gets mail order information by id

returns information about a mail order in the system with the given id.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: apiKeyAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');// Configure API key authorization: apiLoginAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('X-API-LOGIN', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-LOGIN', 'Bearer');// Configure API key authorization: apiPasswordAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('X-API-PASS', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-PASS', 'Bearer');

$apiInstance = new Swagger\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 789; // int | User ID

try {
    $result = $apiInstance->getMailById($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->getMailById: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| User ID |

### Return type

[**\Swagger\Client\Model\MailOrder**](../Model/MailOrder.md)

### Authorization

[apiKeyAuth](../../README.md#apiKeyAuth), [apiLoginAuth](../../README.md#apiLoginAuth), [apiPasswordAuth](../../README.md#apiPasswordAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getMailOrders**
> \Swagger\Client\Model\MailOrders getMailOrders()

displays a list of mail service orders

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: apiKeyAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');// Configure API key authorization: apiLoginAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('X-API-LOGIN', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-LOGIN', 'Bearer');// Configure API key authorization: apiPasswordAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('X-API-PASS', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-PASS', 'Bearer');

$apiInstance = new Swagger\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->getMailOrders();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->getMailOrders: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**\Swagger\Client\Model\MailOrders**](../Model/MailOrders.md)

### Authorization

[apiKeyAuth](../../README.md#apiKeyAuth), [apiLoginAuth](../../README.md#apiLoginAuth), [apiPasswordAuth](../../README.md#apiPasswordAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/plain

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **pingServer**
> pingServer()

Checks if the server is running

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $apiInstance->pingServer();
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->pingServer: ', $e->getMessage(), PHP_EOL;
}
?>
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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **placeMailOrder**
> placeMailOrder($body)

places a mail order

Adds an item to the system

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: apiKeyAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');// Configure API key authorization: apiLoginAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('X-API-LOGIN', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-LOGIN', 'Bearer');// Configure API key authorization: apiPasswordAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('X-API-PASS', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-PASS', 'Bearer');

$apiInstance = new Swagger\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$body = new \Swagger\Client\Model\MailOrder(); // \Swagger\Client\Model\MailOrder | Inventory item to add

try {
    $apiInstance->placeMailOrder($body);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->placeMailOrder: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\MailOrder**](../Model/MailOrder.md)| Inventory item to add | [optional]

### Return type

void (empty response body)

### Authorization

[apiKeyAuth](../../README.md#apiKeyAuth), [apiLoginAuth](../../README.md#apiLoginAuth), [apiPasswordAuth](../../README.md#apiPasswordAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **sendMailById**
> \Swagger\Client\Model\GenericResponse sendMailById($id, $subject, $body, $to, $from)

Sends an Email

Sends An email through one of your mail orders.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: apiKeyAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');// Configure API key authorization: apiLoginAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('X-API-LOGIN', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-LOGIN', 'Bearer');// Configure API key authorization: apiPasswordAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('X-API-PASS', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-PASS', 'Bearer');

$apiInstance = new Swagger\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 789; // int | User ID
$subject = "subject_example"; // string | 
$body = "body_example"; // string | 
$to = "to_example"; // string | 
$from = "from_example"; // string | 

try {
    $result = $apiInstance->sendMailById($id, $subject, $body, $to, $from);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->sendMailById: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| User ID |
 **subject** | **string**|  | [optional]
 **body** | **string**|  | [optional]
 **to** | **string**|  | [optional]
 **from** | **string**|  | [optional]

### Return type

[**\Swagger\Client\Model\GenericResponse**](../Model/GenericResponse.md)

### Authorization

[apiKeyAuth](../../README.md#apiKeyAuth), [apiLoginAuth](../../README.md#apiLoginAuth), [apiPasswordAuth](../../README.md#apiPasswordAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **validateMailOrder**
> validateMailOrder()

validatess order details before placing an order

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: apiKeyAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');// Configure API key authorization: apiLoginAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('X-API-LOGIN', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-LOGIN', 'Bearer');// Configure API key authorization: apiPasswordAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('X-API-PASS', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-PASS', 'Bearer');

$apiInstance = new Swagger\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $apiInstance->validateMailOrder();
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->validateMailOrder: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[apiKeyAuth](../../README.md#apiKeyAuth), [apiLoginAuth](../../README.md#apiLoginAuth), [apiPasswordAuth](../../README.md#apiPasswordAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **viewMailLogById**
> \Swagger\Client\Model\MailLog[] viewMailLogById($id, $search_string, $skip, $limit)

displays the mail log

By passing in the appropriate options, you can search for available inventory in the system

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: apiKeyAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');// Configure API key authorization: apiLoginAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('X-API-LOGIN', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-LOGIN', 'Bearer');// Configure API key authorization: apiPasswordAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('X-API-PASS', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-PASS', 'Bearer');

$apiInstance = new Swagger\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 789; // int | User ID
$search_string = "search_string_example"; // string | pass an optional search string for looking up inventory
$skip = 56; // int | number of records to skip for pagination
$limit = 56; // int | maximum number of records to return

try {
    $result = $apiInstance->viewMailLogById($id, $search_string, $skip, $limit);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->viewMailLogById: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| User ID |
 **search_string** | **string**| pass an optional search string for looking up inventory | [optional]
 **skip** | **int**| number of records to skip for pagination | [optional]
 **limit** | **int**| maximum number of records to return | [optional]

### Return type

[**\Swagger\Client\Model\MailLog[]**](../Model/MailLog.md)

### Authorization

[apiKeyAuth](../../README.md#apiKeyAuth), [apiLoginAuth](../../README.md#apiLoginAuth), [apiPasswordAuth](../../README.md#apiPasswordAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

