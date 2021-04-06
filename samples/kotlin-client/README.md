# io.swagger.client - Kotlin client library for Mail Baby API

## Requires

* Kotlin 1.4.30
* Gradle 5.3

## Build

First, create the gradle wrapper script:

```
gradle wrapper
```

Then, run:

```
./gradlew check assemble
```

This runs all tests and packages the library.

## Features/Implementation Notes

* Supports JSON inputs/outputs, File inputs, and Form inputs.
* Supports collection formats for query parameters: csv, tsv, ssv, pipes.
* Some Kotlin and Java types are fully qualified to avoid conflicts with types defined in Swagger definitions.
* Implementation of ApiClient is intended to reduce method counts, specifically to benefit Android targets.

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *http://mynew.interserver.net:8787/*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DefaultApi* | [**getMailById**](docs/DefaultApi.md#getmailbyid) | **GET** /mail/{id} | Gets mail order information by id
*DefaultApi* | [**getMailOrders**](docs/DefaultApi.md#getmailorders) | **GET** /mail | displays a list of mail service orders
*DefaultApi* | [**pingServer**](docs/DefaultApi.md#pingserver) | **GET** /ping | Checks if the server is running
*DefaultApi* | [**placeMailOrder**](docs/DefaultApi.md#placemailorder) | **POST** /mail/order | places a mail order
*DefaultApi* | [**sendMailById**](docs/DefaultApi.md#sendmailbyid) | **GET** /mail/{id}/send | Sends an Email
*DefaultApi* | [**validateMailOrder**](docs/DefaultApi.md#validatemailorder) | **GET** /mail/order | validatess order details before placing an order
*DefaultApi* | [**viewMailLogById**](docs/DefaultApi.md#viewmaillogbyid) | **GET** /mail/{id}/log | displays the mail log

<a name="documentation-for-models"></a>
## Documentation for Models

 - [io.swagger.client.models.Error](docs/Error.md)
 - [io.swagger.client.models.GenericResponse](docs/GenericResponse.md)
 - [io.swagger.client.models.MailLog](docs/MailLog.md)
 - [io.swagger.client.models.MailOrder](docs/MailOrder.md)
 - [io.swagger.client.models.MailOrders](docs/MailOrders.md)

<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="apiKeyAuth"></a>
### apiKeyAuth


<a name="apiLoginAuth"></a>
### apiLoginAuth


<a name="apiPasswordAuth"></a>
### apiPasswordAuth


