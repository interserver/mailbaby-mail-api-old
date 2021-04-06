# MailBabyApi.DefaultApi

All URIs are relative to *http://mynew.interserver.net:8787/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMailById**](DefaultApi.md#getMailById) | **GET** /mail/{id} | Gets mail order information by id
[**getMailOrders**](DefaultApi.md#getMailOrders) | **GET** /mail | displays a list of mail service orders
[**pingServer**](DefaultApi.md#pingServer) | **GET** /ping | Checks if the server is running
[**placeMailOrder**](DefaultApi.md#placeMailOrder) | **POST** /mail/order | places a mail order
[**sendMailById**](DefaultApi.md#sendMailById) | **GET** /mail/{id}/send | Sends an Email
[**validateMailOrder**](DefaultApi.md#validateMailOrder) | **GET** /mail/order | validatess order details before placing an order
[**viewMailLogById**](DefaultApi.md#viewMailLogById) | **GET** /mail/{id}/log | displays the mail log

<a name="getMailById"></a>
# **getMailById**
> MailOrder getMailById(id)

Gets mail order information by id

returns information about a mail order in the system with the given id.

### Example
```javascript
import MailBabyApi from 'mail_baby_api';
let defaultClient = MailBabyApi.ApiClient.instance;

// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

// Configure API key authorization: apiLoginAuth
let apiLoginAuth = defaultClient.authentications['apiLoginAuth'];
apiLoginAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiLoginAuth.apiKeyPrefix = 'Token';

// Configure API key authorization: apiPasswordAuth
let apiPasswordAuth = defaultClient.authentications['apiPasswordAuth'];
apiPasswordAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiPasswordAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailBabyApi.DefaultApi();
let id = 789; // Number | User ID

apiInstance.getMailById(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| User ID | 

### Return type

[**MailOrder**](MailOrder.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [apiLoginAuth](../README.md#apiLoginAuth), [apiPasswordAuth](../README.md#apiPasswordAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMailOrders"></a>
# **getMailOrders**
> MailOrders getMailOrders()

displays a list of mail service orders

### Example
```javascript
import MailBabyApi from 'mail_baby_api';
let defaultClient = MailBabyApi.ApiClient.instance;

// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

// Configure API key authorization: apiLoginAuth
let apiLoginAuth = defaultClient.authentications['apiLoginAuth'];
apiLoginAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiLoginAuth.apiKeyPrefix = 'Token';

// Configure API key authorization: apiPasswordAuth
let apiPasswordAuth = defaultClient.authentications['apiPasswordAuth'];
apiPasswordAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiPasswordAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailBabyApi.DefaultApi();
apiInstance.getMailOrders((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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

<a name="pingServer"></a>
# **pingServer**
> pingServer()

Checks if the server is running

### Example
```javascript
import MailBabyApi from 'mail_baby_api';

let apiInstance = new MailBabyApi.DefaultApi();
apiInstance.pingServer((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="placeMailOrder"></a>
# **placeMailOrder**
> placeMailOrder(opts)

places a mail order

Adds an item to the system

### Example
```javascript
import MailBabyApi from 'mail_baby_api';
let defaultClient = MailBabyApi.ApiClient.instance;

// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

// Configure API key authorization: apiLoginAuth
let apiLoginAuth = defaultClient.authentications['apiLoginAuth'];
apiLoginAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiLoginAuth.apiKeyPrefix = 'Token';

// Configure API key authorization: apiPasswordAuth
let apiPasswordAuth = defaultClient.authentications['apiPasswordAuth'];
apiPasswordAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiPasswordAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailBabyApi.DefaultApi();
let opts = { 
  'body': new MailBabyApi.MailOrder() // MailOrder | Inventory item to add
};
apiInstance.placeMailOrder(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MailOrder**](MailOrder.md)| Inventory item to add | [optional] 

### Return type

null (empty response body)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [apiLoginAuth](../README.md#apiLoginAuth), [apiPasswordAuth](../README.md#apiPasswordAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendMailById"></a>
# **sendMailById**
> GenericResponse sendMailById(id, opts)

Sends an Email

Sends An email through one of your mail orders.

### Example
```javascript
import MailBabyApi from 'mail_baby_api';
let defaultClient = MailBabyApi.ApiClient.instance;

// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

// Configure API key authorization: apiLoginAuth
let apiLoginAuth = defaultClient.authentications['apiLoginAuth'];
apiLoginAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiLoginAuth.apiKeyPrefix = 'Token';

// Configure API key authorization: apiPasswordAuth
let apiPasswordAuth = defaultClient.authentications['apiPasswordAuth'];
apiPasswordAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiPasswordAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailBabyApi.DefaultApi();
let id = 789; // Number | User ID
let opts = { 
  'subject': "subject_example", // String | 
  'body': "body_example", // String | 
  'to': "to_example", // String | 
  'from': "from_example" // String | 
};
apiInstance.sendMailById(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| User ID | 
 **subject** | **String**|  | [optional] 
 **body** | **String**|  | [optional] 
 **to** | **String**|  | [optional] 
 **from** | **String**|  | [optional] 

### Return type

[**GenericResponse**](GenericResponse.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [apiLoginAuth](../README.md#apiLoginAuth), [apiPasswordAuth](../README.md#apiPasswordAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="validateMailOrder"></a>
# **validateMailOrder**
> validateMailOrder()

validatess order details before placing an order

### Example
```javascript
import MailBabyApi from 'mail_baby_api';
let defaultClient = MailBabyApi.ApiClient.instance;

// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

// Configure API key authorization: apiLoginAuth
let apiLoginAuth = defaultClient.authentications['apiLoginAuth'];
apiLoginAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiLoginAuth.apiKeyPrefix = 'Token';

// Configure API key authorization: apiPasswordAuth
let apiPasswordAuth = defaultClient.authentications['apiPasswordAuth'];
apiPasswordAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiPasswordAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailBabyApi.DefaultApi();
apiInstance.validateMailOrder((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [apiLoginAuth](../README.md#apiLoginAuth), [apiPasswordAuth](../README.md#apiPasswordAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="viewMailLogById"></a>
# **viewMailLogById**
> [MailLog] viewMailLogById(id, opts)

displays the mail log

By passing in the appropriate options, you can search for available inventory in the system 

### Example
```javascript
import MailBabyApi from 'mail_baby_api';
let defaultClient = MailBabyApi.ApiClient.instance;

// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

// Configure API key authorization: apiLoginAuth
let apiLoginAuth = defaultClient.authentications['apiLoginAuth'];
apiLoginAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiLoginAuth.apiKeyPrefix = 'Token';

// Configure API key authorization: apiPasswordAuth
let apiPasswordAuth = defaultClient.authentications['apiPasswordAuth'];
apiPasswordAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiPasswordAuth.apiKeyPrefix = 'Token';

let apiInstance = new MailBabyApi.DefaultApi();
let id = 789; // Number | User ID
let opts = { 
  'searchString': "searchString_example", // String | pass an optional search string for looking up inventory
  'skip': 56, // Number | number of records to skip for pagination
  'limit': 56 // Number | maximum number of records to return
};
apiInstance.viewMailLogById(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| User ID | 
 **searchString** | **String**| pass an optional search string for looking up inventory | [optional] 
 **skip** | **Number**| number of records to skip for pagination | [optional] 
 **limit** | **Number**| maximum number of records to return | [optional] 

### Return type

[**[MailLog]**](MailLog.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [apiLoginAuth](../README.md#apiLoginAuth), [apiPasswordAuth](../README.md#apiPasswordAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

