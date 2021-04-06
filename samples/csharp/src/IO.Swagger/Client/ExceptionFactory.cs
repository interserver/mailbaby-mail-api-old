/* 
 * Mail Baby API
 *
 * This is an API for accesssing the mail services.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: detain@interserver.net
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

using System;
using RestSharp;

namespace IO.Swagger.Client
{
    /// <summary>
    /// A delegate to ExceptionFactory method
    /// </summary>
    /// <param name="methodName">Method name</param>
    /// <param name="response">Response</param>
    /// <returns>Exceptions</returns>
        public delegate Exception ExceptionFactory(string methodName, IRestResponse response);
}
