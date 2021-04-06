# {{classname}}

All URIs are relative to *http://mynew.interserver.net:8787/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetMailById**](DefaultApi.md#GetMailById) | **Get** /mail/{id} | Gets mail order information by id
[**GetMailOrders**](DefaultApi.md#GetMailOrders) | **Get** /mail | displays a list of mail service orders
[**PingServer**](DefaultApi.md#PingServer) | **Get** /ping | Checks if the server is running
[**PlaceMailOrder**](DefaultApi.md#PlaceMailOrder) | **Post** /mail/order | places a mail order
[**SendMailById**](DefaultApi.md#SendMailById) | **Get** /mail/{id}/send | Sends an Email
[**ValidateMailOrder**](DefaultApi.md#ValidateMailOrder) | **Get** /mail/order | validatess order details before placing an order
[**ViewMailLogById**](DefaultApi.md#ViewMailLogById) | **Get** /mail/{id}/log | displays the mail log

# **GetMailById**
> MailOrder GetMailById(ctx, id)
Gets mail order information by id

returns information about a mail order in the system with the given id.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **id** | **int64**| User ID | 

### Return type

[**MailOrder**](MailOrder.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [apiLoginAuth](../README.md#apiLoginAuth), [apiPasswordAuth](../README.md#apiPasswordAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetMailOrders**
> []MailOrder GetMailOrders(ctx, )
displays a list of mail service orders

### Required Parameters
This endpoint does not need any parameter.

### Return type

[**[]MailOrder**](array.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [apiLoginAuth](../README.md#apiLoginAuth), [apiPasswordAuth](../README.md#apiPasswordAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **PingServer**
> PingServer(ctx, )
Checks if the server is running

### Required Parameters
This endpoint does not need any parameter.

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **PlaceMailOrder**
> PlaceMailOrder(ctx, optional)
places a mail order

Adds an item to the system

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***DefaultApiPlaceMailOrderOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a DefaultApiPlaceMailOrderOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**optional.Interface of MailOrder**](MailOrder.md)| Inventory item to add | 

### Return type

 (empty response body)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [apiLoginAuth](../README.md#apiLoginAuth), [apiPasswordAuth](../README.md#apiPasswordAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SendMailById**
> GenericResponse SendMailById(ctx, id, optional)
Sends an Email

Sends An email through one of your mail orders.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **id** | **int64**| User ID | 
 **optional** | ***DefaultApiSendMailByIdOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a DefaultApiSendMailByIdOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **subject** | **optional.String**|  | 
 **body** | **optional.String**|  | 
 **to** | **optional.String**|  | 
 **from** | **optional.String**|  | 

### Return type

[**GenericResponse**](GenericResponse.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [apiLoginAuth](../README.md#apiLoginAuth), [apiPasswordAuth](../README.md#apiPasswordAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ValidateMailOrder**
> ValidateMailOrder(ctx, )
validatess order details before placing an order

### Required Parameters
This endpoint does not need any parameter.

### Return type

 (empty response body)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [apiLoginAuth](../README.md#apiLoginAuth), [apiPasswordAuth](../README.md#apiPasswordAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ViewMailLogById**
> []MailLog ViewMailLogById(ctx, id, optional)
displays the mail log

By passing in the appropriate options, you can search for available inventory in the system 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **id** | **int64**| User ID | 
 **optional** | ***DefaultApiViewMailLogByIdOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a DefaultApiViewMailLogByIdOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **searchString** | **optional.String**| pass an optional search string for looking up inventory | 
 **skip** | **optional.Int32**| number of records to skip for pagination | 
 **limit** | **optional.Int32**| maximum number of records to return | 

### Return type

[**[]MailLog**](MailLog.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [apiLoginAuth](../README.md#apiLoginAuth), [apiPasswordAuth](../README.md#apiPasswordAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

