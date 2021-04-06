# SwaggerClient::DefaultApi

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
```ruby
# load the gem
require 'swagger_client'
# setup authorization
SwaggerClient.configure do |config|
  # Configure API key authorization: apiKeyAuth
  config.api_key['X-API-KEY'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  #config.api_key_prefix['X-API-KEY'] = 'Bearer'

  # Configure API key authorization: apiLoginAuth
  config.api_key['X-API-LOGIN'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  #config.api_key_prefix['X-API-LOGIN'] = 'Bearer'

  # Configure API key authorization: apiPasswordAuth
  config.api_key['X-API-PASS'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  #config.api_key_prefix['X-API-PASS'] = 'Bearer'
end

api_instance = SwaggerClient::DefaultApi.new
id = 789 # Integer | User ID


begin
  #Gets mail order information by id
  result = api_instance.get_mail_by_id(id)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling DefaultApi->get_mail_by_id: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| User ID | 

### Return type

[**MailOrder**](MailOrder.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [apiLoginAuth](../README.md#apiLoginAuth), [apiPasswordAuth](../README.md#apiPasswordAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



# **get_mail_orders**
> MailOrders get_mail_orders

displays a list of mail service orders

### Example
```ruby
# load the gem
require 'swagger_client'
# setup authorization
SwaggerClient.configure do |config|
  # Configure API key authorization: apiKeyAuth
  config.api_key['X-API-KEY'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  #config.api_key_prefix['X-API-KEY'] = 'Bearer'

  # Configure API key authorization: apiLoginAuth
  config.api_key['X-API-LOGIN'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  #config.api_key_prefix['X-API-LOGIN'] = 'Bearer'

  # Configure API key authorization: apiPasswordAuth
  config.api_key['X-API-PASS'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  #config.api_key_prefix['X-API-PASS'] = 'Bearer'
end

api_instance = SwaggerClient::DefaultApi.new

begin
  #displays a list of mail service orders
  result = api_instance.get_mail_orders
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling DefaultApi->get_mail_orders: #{e}"
end
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



# **ping_server**
> ping_server

Checks if the server is running

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::DefaultApi.new

begin
  #Checks if the server is running
  api_instance.ping_server
rescue SwaggerClient::ApiError => e
  puts "Exception when calling DefaultApi->ping_server: #{e}"
end
```

### Parameters
This endpoint does not need any parameter.

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined



# **place_mail_order**
> place_mail_order(opts)

places a mail order

Adds an item to the system

### Example
```ruby
# load the gem
require 'swagger_client'
# setup authorization
SwaggerClient.configure do |config|
  # Configure API key authorization: apiKeyAuth
  config.api_key['X-API-KEY'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  #config.api_key_prefix['X-API-KEY'] = 'Bearer'

  # Configure API key authorization: apiLoginAuth
  config.api_key['X-API-LOGIN'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  #config.api_key_prefix['X-API-LOGIN'] = 'Bearer'

  # Configure API key authorization: apiPasswordAuth
  config.api_key['X-API-PASS'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  #config.api_key_prefix['X-API-PASS'] = 'Bearer'
end

api_instance = SwaggerClient::DefaultApi.new
opts = { 
  body: SwaggerClient::MailOrder.new # MailOrder | Inventory item to add
}

begin
  #places a mail order
  api_instance.place_mail_order(opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling DefaultApi->place_mail_order: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MailOrder**](MailOrder.md)| Inventory item to add | [optional] 

### Return type

nil (empty response body)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [apiLoginAuth](../README.md#apiLoginAuth), [apiPasswordAuth](../README.md#apiPasswordAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **send_mail_by_id**
> GenericResponse send_mail_by_id(id, opts)

Sends an Email

Sends An email through one of your mail orders.

### Example
```ruby
# load the gem
require 'swagger_client'
# setup authorization
SwaggerClient.configure do |config|
  # Configure API key authorization: apiKeyAuth
  config.api_key['X-API-KEY'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  #config.api_key_prefix['X-API-KEY'] = 'Bearer'

  # Configure API key authorization: apiLoginAuth
  config.api_key['X-API-LOGIN'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  #config.api_key_prefix['X-API-LOGIN'] = 'Bearer'

  # Configure API key authorization: apiPasswordAuth
  config.api_key['X-API-PASS'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  #config.api_key_prefix['X-API-PASS'] = 'Bearer'
end

api_instance = SwaggerClient::DefaultApi.new
id = 789 # Integer | User ID
opts = { 
  subject: 'subject_example', # String | 
  body: 'body_example', # String | 
  to: 'to_example', # String | 
  from: 'from_example' # String | 
}

begin
  #Sends an Email
  result = api_instance.send_mail_by_id(id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling DefaultApi->send_mail_by_id: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| User ID | 
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



# **validate_mail_order**
> validate_mail_order

validatess order details before placing an order

### Example
```ruby
# load the gem
require 'swagger_client'
# setup authorization
SwaggerClient.configure do |config|
  # Configure API key authorization: apiKeyAuth
  config.api_key['X-API-KEY'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  #config.api_key_prefix['X-API-KEY'] = 'Bearer'

  # Configure API key authorization: apiLoginAuth
  config.api_key['X-API-LOGIN'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  #config.api_key_prefix['X-API-LOGIN'] = 'Bearer'

  # Configure API key authorization: apiPasswordAuth
  config.api_key['X-API-PASS'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  #config.api_key_prefix['X-API-PASS'] = 'Bearer'
end

api_instance = SwaggerClient::DefaultApi.new

begin
  #validatess order details before placing an order
  api_instance.validate_mail_order
rescue SwaggerClient::ApiError => e
  puts "Exception when calling DefaultApi->validate_mail_order: #{e}"
end
```

### Parameters
This endpoint does not need any parameter.

### Return type

nil (empty response body)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [apiLoginAuth](../README.md#apiLoginAuth), [apiPasswordAuth](../README.md#apiPasswordAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



# **view_mail_log_by_id**
> Array&lt;MailLog&gt; view_mail_log_by_id(id, opts)

displays the mail log

By passing in the appropriate options, you can search for available inventory in the system 

### Example
```ruby
# load the gem
require 'swagger_client'
# setup authorization
SwaggerClient.configure do |config|
  # Configure API key authorization: apiKeyAuth
  config.api_key['X-API-KEY'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  #config.api_key_prefix['X-API-KEY'] = 'Bearer'

  # Configure API key authorization: apiLoginAuth
  config.api_key['X-API-LOGIN'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  #config.api_key_prefix['X-API-LOGIN'] = 'Bearer'

  # Configure API key authorization: apiPasswordAuth
  config.api_key['X-API-PASS'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  #config.api_key_prefix['X-API-PASS'] = 'Bearer'
end

api_instance = SwaggerClient::DefaultApi.new
id = 789 # Integer | User ID
opts = { 
  search_string: 'search_string_example', # String | pass an optional search string for looking up inventory
  skip: 56, # Integer | number of records to skip for pagination
  limit: 56 # Integer | maximum number of records to return
}

begin
  #displays the mail log
  result = api_instance.view_mail_log_by_id(id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling DefaultApi->view_mail_log_by_id: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| User ID | 
 **search_string** | **String**| pass an optional search string for looking up inventory | [optional] 
 **skip** | **Integer**| number of records to skip for pagination | [optional] 
 **limit** | **Integer**| maximum number of records to return | [optional] 

### Return type

[**Array&lt;MailLog&gt;**](MailLog.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [apiLoginAuth](../README.md#apiLoginAuth), [apiPasswordAuth](../README.md#apiPasswordAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



