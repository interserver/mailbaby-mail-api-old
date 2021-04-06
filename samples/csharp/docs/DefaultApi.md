# IO.Swagger.Api.DefaultApi

All URIs are relative to *http://mynew.interserver.net:8787/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetMailById**](DefaultApi.md#getmailbyid) | **GET** /mail/{id} | Gets mail order information by id
[**GetMailOrders**](DefaultApi.md#getmailorders) | **GET** /mail | displays a list of mail service orders
[**PingServer**](DefaultApi.md#pingserver) | **GET** /ping | Checks if the server is running
[**PlaceMailOrder**](DefaultApi.md#placemailorder) | **POST** /mail/order | places a mail order
[**SendMailById**](DefaultApi.md#sendmailbyid) | **GET** /mail/{id}/send | Sends an Email
[**ValidateMailOrder**](DefaultApi.md#validatemailorder) | **GET** /mail/order | validatess order details before placing an order
[**ViewMailLogById**](DefaultApi.md#viewmaillogbyid) | **GET** /mail/{id}/log | displays the mail log

<a name="getmailbyid"></a>
# **GetMailById**
> MailOrder GetMailById (long? id)

Gets mail order information by id

returns information about a mail order in the system with the given id.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GetMailByIdExample
    {
        public void main()
        {
            // Configure API key authorization: apiKeyAuth
            Configuration.Default.AddApiKey("X-API-KEY", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // Configuration.Default.AddApiKeyPrefix("X-API-KEY", "Bearer");
            // Configure API key authorization: apiLoginAuth
            Configuration.Default.AddApiKey("X-API-LOGIN", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // Configuration.Default.AddApiKeyPrefix("X-API-LOGIN", "Bearer");
            // Configure API key authorization: apiPasswordAuth
            Configuration.Default.AddApiKey("X-API-PASS", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // Configuration.Default.AddApiKeyPrefix("X-API-PASS", "Bearer");

            var apiInstance = new DefaultApi();
            var id = 789;  // long? | User ID

            try
            {
                // Gets mail order information by id
                MailOrder result = apiInstance.GetMailById(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DefaultApi.GetMailById: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **long?**| User ID | 

### Return type

[**MailOrder**](MailOrder.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [apiLoginAuth](../README.md#apiLoginAuth), [apiPasswordAuth](../README.md#apiPasswordAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
<a name="getmailorders"></a>
# **GetMailOrders**
> MailOrders GetMailOrders ()

displays a list of mail service orders

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GetMailOrdersExample
    {
        public void main()
        {
            // Configure API key authorization: apiKeyAuth
            Configuration.Default.AddApiKey("X-API-KEY", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // Configuration.Default.AddApiKeyPrefix("X-API-KEY", "Bearer");
            // Configure API key authorization: apiLoginAuth
            Configuration.Default.AddApiKey("X-API-LOGIN", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // Configuration.Default.AddApiKeyPrefix("X-API-LOGIN", "Bearer");
            // Configure API key authorization: apiPasswordAuth
            Configuration.Default.AddApiKey("X-API-PASS", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // Configuration.Default.AddApiKeyPrefix("X-API-PASS", "Bearer");

            var apiInstance = new DefaultApi();

            try
            {
                // displays a list of mail service orders
                MailOrders result = apiInstance.GetMailOrders();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DefaultApi.GetMailOrders: " + e.Message );
            }
        }
    }
}
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
<a name="pingserver"></a>
# **PingServer**
> void PingServer ()

Checks if the server is running

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class PingServerExample
    {
        public void main()
        {
            var apiInstance = new DefaultApi();

            try
            {
                // Checks if the server is running
                apiInstance.PingServer();
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DefaultApi.PingServer: " + e.Message );
            }
        }
    }
}
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
<a name="placemailorder"></a>
# **PlaceMailOrder**
> void PlaceMailOrder (MailOrder body = null)

places a mail order

Adds an item to the system

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class PlaceMailOrderExample
    {
        public void main()
        {
            // Configure API key authorization: apiKeyAuth
            Configuration.Default.AddApiKey("X-API-KEY", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // Configuration.Default.AddApiKeyPrefix("X-API-KEY", "Bearer");
            // Configure API key authorization: apiLoginAuth
            Configuration.Default.AddApiKey("X-API-LOGIN", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // Configuration.Default.AddApiKeyPrefix("X-API-LOGIN", "Bearer");
            // Configure API key authorization: apiPasswordAuth
            Configuration.Default.AddApiKey("X-API-PASS", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // Configuration.Default.AddApiKeyPrefix("X-API-PASS", "Bearer");

            var apiInstance = new DefaultApi();
            var body = new MailOrder(); // MailOrder | Inventory item to add (optional) 

            try
            {
                // places a mail order
                apiInstance.PlaceMailOrder(body);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DefaultApi.PlaceMailOrder: " + e.Message );
            }
        }
    }
}
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
<a name="sendmailbyid"></a>
# **SendMailById**
> GenericResponse SendMailById (long? id, string subject = null, string body = null, string to = null, string from = null)

Sends an Email

Sends An email through one of your mail orders.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class SendMailByIdExample
    {
        public void main()
        {
            // Configure API key authorization: apiKeyAuth
            Configuration.Default.AddApiKey("X-API-KEY", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // Configuration.Default.AddApiKeyPrefix("X-API-KEY", "Bearer");
            // Configure API key authorization: apiLoginAuth
            Configuration.Default.AddApiKey("X-API-LOGIN", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // Configuration.Default.AddApiKeyPrefix("X-API-LOGIN", "Bearer");
            // Configure API key authorization: apiPasswordAuth
            Configuration.Default.AddApiKey("X-API-PASS", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // Configuration.Default.AddApiKeyPrefix("X-API-PASS", "Bearer");

            var apiInstance = new DefaultApi();
            var id = 789;  // long? | User ID
            var subject = subject_example;  // string |  (optional) 
            var body = body_example;  // string |  (optional) 
            var to = to_example;  // string |  (optional) 
            var from = from_example;  // string |  (optional) 

            try
            {
                // Sends an Email
                GenericResponse result = apiInstance.SendMailById(id, subject, body, to, from);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DefaultApi.SendMailById: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **long?**| User ID | 
 **subject** | **string**|  | [optional] 
 **body** | **string**|  | [optional] 
 **to** | **string**|  | [optional] 
 **from** | **string**|  | [optional] 

### Return type

[**GenericResponse**](GenericResponse.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [apiLoginAuth](../README.md#apiLoginAuth), [apiPasswordAuth](../README.md#apiPasswordAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
<a name="validatemailorder"></a>
# **ValidateMailOrder**
> void ValidateMailOrder ()

validatess order details before placing an order

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class ValidateMailOrderExample
    {
        public void main()
        {
            // Configure API key authorization: apiKeyAuth
            Configuration.Default.AddApiKey("X-API-KEY", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // Configuration.Default.AddApiKeyPrefix("X-API-KEY", "Bearer");
            // Configure API key authorization: apiLoginAuth
            Configuration.Default.AddApiKey("X-API-LOGIN", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // Configuration.Default.AddApiKeyPrefix("X-API-LOGIN", "Bearer");
            // Configure API key authorization: apiPasswordAuth
            Configuration.Default.AddApiKey("X-API-PASS", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // Configuration.Default.AddApiKeyPrefix("X-API-PASS", "Bearer");

            var apiInstance = new DefaultApi();

            try
            {
                // validatess order details before placing an order
                apiInstance.ValidateMailOrder();
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DefaultApi.ValidateMailOrder: " + e.Message );
            }
        }
    }
}
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
<a name="viewmaillogbyid"></a>
# **ViewMailLogById**
> List<MailLog> ViewMailLogById (long? id, string searchString = null, int? skip = null, int? limit = null)

displays the mail log

By passing in the appropriate options, you can search for available inventory in the system 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class ViewMailLogByIdExample
    {
        public void main()
        {
            // Configure API key authorization: apiKeyAuth
            Configuration.Default.AddApiKey("X-API-KEY", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // Configuration.Default.AddApiKeyPrefix("X-API-KEY", "Bearer");
            // Configure API key authorization: apiLoginAuth
            Configuration.Default.AddApiKey("X-API-LOGIN", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // Configuration.Default.AddApiKeyPrefix("X-API-LOGIN", "Bearer");
            // Configure API key authorization: apiPasswordAuth
            Configuration.Default.AddApiKey("X-API-PASS", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // Configuration.Default.AddApiKeyPrefix("X-API-PASS", "Bearer");

            var apiInstance = new DefaultApi();
            var id = 789;  // long? | User ID
            var searchString = searchString_example;  // string | pass an optional search string for looking up inventory (optional) 
            var skip = 56;  // int? | number of records to skip for pagination (optional) 
            var limit = 56;  // int? | maximum number of records to return (optional) 

            try
            {
                // displays the mail log
                List&lt;MailLog&gt; result = apiInstance.ViewMailLogById(id, searchString, skip, limit);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DefaultApi.ViewMailLogById: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **long?**| User ID | 
 **searchString** | **string**| pass an optional search string for looking up inventory | [optional] 
 **skip** | **int?**| number of records to skip for pagination | [optional] 
 **limit** | **int?**| maximum number of records to return | [optional] 

### Return type

[**List<MailLog>**](MailLog.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [apiLoginAuth](../README.md#apiLoginAuth), [apiPasswordAuth](../README.md#apiPasswordAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
