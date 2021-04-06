# DefaultApi

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
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.DefaultApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: apiKeyAuth
ApiKeyAuth apiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("apiKeyAuth");
apiKeyAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.setApiKeyPrefix("Token");

// Configure API key authorization: apiLoginAuth
ApiKeyAuth apiLoginAuth = (ApiKeyAuth) defaultClient.getAuthentication("apiLoginAuth");
apiLoginAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiLoginAuth.setApiKeyPrefix("Token");

// Configure API key authorization: apiPasswordAuth
ApiKeyAuth apiPasswordAuth = (ApiKeyAuth) defaultClient.getAuthentication("apiPasswordAuth");
apiPasswordAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiPasswordAuth.setApiKeyPrefix("Token");

DefaultApi apiInstance = new DefaultApi();
Long id = 789L; // Long | User ID
try {
    MailOrder result = apiInstance.getMailById(id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#getMailById");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Long**| User ID |

### Return type

[**MailOrder**](MailOrder.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)[apiLoginAuth](../README.md#apiLoginAuth)[apiPasswordAuth](../README.md#apiPasswordAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMailOrders"></a>
# **getMailOrders**
> MailOrders getMailOrders()

displays a list of mail service orders

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.DefaultApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: apiKeyAuth
ApiKeyAuth apiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("apiKeyAuth");
apiKeyAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.setApiKeyPrefix("Token");

// Configure API key authorization: apiLoginAuth
ApiKeyAuth apiLoginAuth = (ApiKeyAuth) defaultClient.getAuthentication("apiLoginAuth");
apiLoginAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiLoginAuth.setApiKeyPrefix("Token");

// Configure API key authorization: apiPasswordAuth
ApiKeyAuth apiPasswordAuth = (ApiKeyAuth) defaultClient.getAuthentication("apiPasswordAuth");
apiPasswordAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiPasswordAuth.setApiKeyPrefix("Token");

DefaultApi apiInstance = new DefaultApi();
try {
    MailOrders result = apiInstance.getMailOrders();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#getMailOrders");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**MailOrders**](MailOrders.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)[apiLoginAuth](../README.md#apiLoginAuth)[apiPasswordAuth](../README.md#apiPasswordAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/plain

<a name="pingServer"></a>
# **pingServer**
> pingServer()

Checks if the server is running

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
try {
    apiInstance.pingServer();
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#pingServer");
    e.printStackTrace();
}
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
> placeMailOrder(body)

places a mail order

Adds an item to the system

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.DefaultApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: apiKeyAuth
ApiKeyAuth apiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("apiKeyAuth");
apiKeyAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.setApiKeyPrefix("Token");

// Configure API key authorization: apiLoginAuth
ApiKeyAuth apiLoginAuth = (ApiKeyAuth) defaultClient.getAuthentication("apiLoginAuth");
apiLoginAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiLoginAuth.setApiKeyPrefix("Token");

// Configure API key authorization: apiPasswordAuth
ApiKeyAuth apiPasswordAuth = (ApiKeyAuth) defaultClient.getAuthentication("apiPasswordAuth");
apiPasswordAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiPasswordAuth.setApiKeyPrefix("Token");

DefaultApi apiInstance = new DefaultApi();
MailOrder body = new MailOrder(); // MailOrder | Inventory item to add
try {
    apiInstance.placeMailOrder(body);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#placeMailOrder");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MailOrder**](MailOrder.md)| Inventory item to add | [optional]

### Return type

null (empty response body)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)[apiLoginAuth](../README.md#apiLoginAuth)[apiPasswordAuth](../README.md#apiPasswordAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendMailById"></a>
# **sendMailById**
> GenericResponse sendMailById(id, subject, body, to, from)

Sends an Email

Sends An email through one of your mail orders.

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.DefaultApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: apiKeyAuth
ApiKeyAuth apiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("apiKeyAuth");
apiKeyAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.setApiKeyPrefix("Token");

// Configure API key authorization: apiLoginAuth
ApiKeyAuth apiLoginAuth = (ApiKeyAuth) defaultClient.getAuthentication("apiLoginAuth");
apiLoginAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiLoginAuth.setApiKeyPrefix("Token");

// Configure API key authorization: apiPasswordAuth
ApiKeyAuth apiPasswordAuth = (ApiKeyAuth) defaultClient.getAuthentication("apiPasswordAuth");
apiPasswordAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiPasswordAuth.setApiKeyPrefix("Token");

DefaultApi apiInstance = new DefaultApi();
Long id = 789L; // Long | User ID
String subject = "subject_example"; // String | 
String body = "body_example"; // String | 
String to = "to_example"; // String | 
String from = "from_example"; // String | 
try {
    GenericResponse result = apiInstance.sendMailById(id, subject, body, to, from);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#sendMailById");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Long**| User ID |
 **subject** | **String**|  | [optional]
 **body** | **String**|  | [optional]
 **to** | **String**|  | [optional]
 **from** | **String**|  | [optional]

### Return type

[**GenericResponse**](GenericResponse.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)[apiLoginAuth](../README.md#apiLoginAuth)[apiPasswordAuth](../README.md#apiPasswordAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="validateMailOrder"></a>
# **validateMailOrder**
> validateMailOrder()

validatess order details before placing an order

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.DefaultApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: apiKeyAuth
ApiKeyAuth apiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("apiKeyAuth");
apiKeyAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.setApiKeyPrefix("Token");

// Configure API key authorization: apiLoginAuth
ApiKeyAuth apiLoginAuth = (ApiKeyAuth) defaultClient.getAuthentication("apiLoginAuth");
apiLoginAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiLoginAuth.setApiKeyPrefix("Token");

// Configure API key authorization: apiPasswordAuth
ApiKeyAuth apiPasswordAuth = (ApiKeyAuth) defaultClient.getAuthentication("apiPasswordAuth");
apiPasswordAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiPasswordAuth.setApiKeyPrefix("Token");

DefaultApi apiInstance = new DefaultApi();
try {
    apiInstance.validateMailOrder();
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#validateMailOrder");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)[apiLoginAuth](../README.md#apiLoginAuth)[apiPasswordAuth](../README.md#apiPasswordAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="viewMailLogById"></a>
# **viewMailLogById**
> List&lt;MailLog&gt; viewMailLogById(id, searchString, skip, limit)

displays the mail log

By passing in the appropriate options, you can search for available inventory in the system 

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.DefaultApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: apiKeyAuth
ApiKeyAuth apiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("apiKeyAuth");
apiKeyAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.setApiKeyPrefix("Token");

// Configure API key authorization: apiLoginAuth
ApiKeyAuth apiLoginAuth = (ApiKeyAuth) defaultClient.getAuthentication("apiLoginAuth");
apiLoginAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiLoginAuth.setApiKeyPrefix("Token");

// Configure API key authorization: apiPasswordAuth
ApiKeyAuth apiPasswordAuth = (ApiKeyAuth) defaultClient.getAuthentication("apiPasswordAuth");
apiPasswordAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiPasswordAuth.setApiKeyPrefix("Token");

DefaultApi apiInstance = new DefaultApi();
Long id = 789L; // Long | User ID
String searchString = "searchString_example"; // String | pass an optional search string for looking up inventory
Integer skip = 56; // Integer | number of records to skip for pagination
Integer limit = 56; // Integer | maximum number of records to return
try {
    List<MailLog> result = apiInstance.viewMailLogById(id, searchString, skip, limit);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#viewMailLogById");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Long**| User ID |
 **searchString** | **String**| pass an optional search string for looking up inventory | [optional]
 **skip** | **Integer**| number of records to skip for pagination | [optional] [enum: ]
 **limit** | **Integer**| maximum number of records to return | [optional] [enum: ]

### Return type

[**List&lt;MailLog&gt;**](MailLog.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)[apiLoginAuth](../README.md#apiLoginAuth)[apiPasswordAuth](../README.md#apiPasswordAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

