using System;
using System.Collections.Generic;
using RestSharp;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace IO.Swagger.Api
{
    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface IDefaultApi
    {
        /// <summary>
        /// Gets mail order information by id returns information about a mail order in the system with the given id.
        /// </summary>
        /// <param name="id">User ID</param>
        /// <returns>MailOrder</returns>
        MailOrder GetMailById (long? id);
        /// <summary>
        /// displays a list of mail service orders 
        /// </summary>
        /// <returns>MailOrders</returns>
        MailOrders GetMailOrders ();
        /// <summary>
        /// Checks if the server is running 
        /// </summary>
        /// <returns></returns>
        void PingServer ();
        /// <summary>
        /// places a mail order Adds an item to the system
        /// </summary>
        /// <param name="body">Inventory item to add</param>
        /// <returns></returns>
        void PlaceMailOrder (MailOrder body);
        /// <summary>
        /// Sends an Email Sends An email through one of your mail orders.
        /// </summary>
        /// <param name="id">User ID</param>
        /// <param name="subject"></param>
        /// <param name="body"></param>
        /// <param name="to"></param>
        /// <param name="from"></param>
        /// <returns>GenericResponse</returns>
        GenericResponse SendMailById (long? id, string subject, string body, string to, string from);
        /// <summary>
        /// validatess order details before placing an order 
        /// </summary>
        /// <returns></returns>
        void ValidateMailOrder ();
        /// <summary>
        /// displays the mail log By passing in the appropriate options, you can search for available inventory in the system 
        /// </summary>
        /// <param name="id">User ID</param>
        /// <param name="searchString">pass an optional search string for looking up inventory</param>
        /// <param name="skip">number of records to skip for pagination</param>
        /// <param name="limit">maximum number of records to return</param>
        /// <returns>List&lt;MailLog&gt;</returns>
        List<MailLog> ViewMailLogById (long? id, string searchString, int? skip, int? limit);
    }
  
    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public class DefaultApi : IDefaultApi
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DefaultApi"/> class.
        /// </summary>
        /// <param name="apiClient"> an instance of ApiClient (optional)</param>
        /// <returns></returns>
        public DefaultApi(ApiClient apiClient = null)
        {
            if (apiClient == null) // use the default one in Configuration
                this.ApiClient = Configuration.DefaultApiClient; 
            else
                this.ApiClient = apiClient;
        }
    
        /// <summary>
        /// Initializes a new instance of the <see cref="DefaultApi"/> class.
        /// </summary>
        /// <returns></returns>
        public DefaultApi(String basePath)
        {
            this.ApiClient = new ApiClient(basePath);
        }
    
        /// <summary>
        /// Sets the base path of the API client.
        /// </summary>
        /// <param name="basePath">The base path</param>
        /// <value>The base path</value>
        public void SetBasePath(String basePath)
        {
            this.ApiClient.BasePath = basePath;
        }
    
        /// <summary>
        /// Gets the base path of the API client.
        /// </summary>
        /// <param name="basePath">The base path</param>
        /// <value>The base path</value>
        public String GetBasePath(String basePath)
        {
            return this.ApiClient.BasePath;
        }
    
        /// <summary>
        /// Gets or sets the API client.
        /// </summary>
        /// <value>An instance of the ApiClient</value>
        public ApiClient ApiClient {get; set;}
    
        /// <summary>
        /// Gets mail order information by id returns information about a mail order in the system with the given id.
        /// </summary>
        /// <param name="id">User ID</param>
        /// <returns>MailOrder</returns>
        public MailOrder GetMailById (long? id)
        {
            // verify the required parameter 'id' is set
            if (id == null) throw new ApiException(400, "Missing required parameter 'id' when calling GetMailById");
    
            var path = "/mail/{id}";
            path = path.Replace("{format}", "json");
            path = path.Replace("{" + "id" + "}", ApiClient.ParameterToString(id));
    
            var queryParams = new Dictionary<String, String>();
            var headerParams = new Dictionary<String, String>();
            var formParams = new Dictionary<String, String>();
            var fileParams = new Dictionary<String, FileParameter>();
            String postBody = null;
    
                                    
            // authentication setting, if any
            String[] authSettings = new String[] { "apiKeyAuth", "apiLoginAuth", "apiPasswordAuth" };
    
            // make the HTTP request
            IRestResponse response = (IRestResponse) ApiClient.CallApi(path, Method.GET, queryParams, postBody, headerParams, formParams, fileParams, authSettings);
    
            if (((int)response.StatusCode) >= 400)
                throw new ApiException ((int)response.StatusCode, "Error calling GetMailById: " + response.Content, response.Content);
            else if (((int)response.StatusCode) == 0)
                throw new ApiException ((int)response.StatusCode, "Error calling GetMailById: " + response.ErrorMessage, response.ErrorMessage);
    
            return (MailOrder) ApiClient.Deserialize(response.Content, typeof(MailOrder), response.Headers);
        }
    
        /// <summary>
        /// displays a list of mail service orders 
        /// </summary>
        /// <returns>MailOrders</returns>
        public MailOrders GetMailOrders ()
        {
    
            var path = "/mail";
            path = path.Replace("{format}", "json");
                
            var queryParams = new Dictionary<String, String>();
            var headerParams = new Dictionary<String, String>();
            var formParams = new Dictionary<String, String>();
            var fileParams = new Dictionary<String, FileParameter>();
            String postBody = null;
    
                                    
            // authentication setting, if any
            String[] authSettings = new String[] { "apiKeyAuth", "apiLoginAuth", "apiPasswordAuth" };
    
            // make the HTTP request
            IRestResponse response = (IRestResponse) ApiClient.CallApi(path, Method.GET, queryParams, postBody, headerParams, formParams, fileParams, authSettings);
    
            if (((int)response.StatusCode) >= 400)
                throw new ApiException ((int)response.StatusCode, "Error calling GetMailOrders: " + response.Content, response.Content);
            else if (((int)response.StatusCode) == 0)
                throw new ApiException ((int)response.StatusCode, "Error calling GetMailOrders: " + response.ErrorMessage, response.ErrorMessage);
    
            return (MailOrders) ApiClient.Deserialize(response.Content, typeof(MailOrders), response.Headers);
        }
    
        /// <summary>
        /// Checks if the server is running 
        /// </summary>
        /// <returns></returns>
        public void PingServer ()
        {
    
            var path = "/ping";
            path = path.Replace("{format}", "json");
                
            var queryParams = new Dictionary<String, String>();
            var headerParams = new Dictionary<String, String>();
            var formParams = new Dictionary<String, String>();
            var fileParams = new Dictionary<String, FileParameter>();
            String postBody = null;
    
                                    
            // authentication setting, if any
            String[] authSettings = new String[] {  };
    
            // make the HTTP request
            IRestResponse response = (IRestResponse) ApiClient.CallApi(path, Method.GET, queryParams, postBody, headerParams, formParams, fileParams, authSettings);
    
            if (((int)response.StatusCode) >= 400)
                throw new ApiException ((int)response.StatusCode, "Error calling PingServer: " + response.Content, response.Content);
            else if (((int)response.StatusCode) == 0)
                throw new ApiException ((int)response.StatusCode, "Error calling PingServer: " + response.ErrorMessage, response.ErrorMessage);
    
            return;
        }
    
        /// <summary>
        /// places a mail order Adds an item to the system
        /// </summary>
        /// <param name="body">Inventory item to add</param>
        /// <returns></returns>
        public void PlaceMailOrder (MailOrder body)
        {
    
            var path = "/mail/order";
            path = path.Replace("{format}", "json");
                
            var queryParams = new Dictionary<String, String>();
            var headerParams = new Dictionary<String, String>();
            var formParams = new Dictionary<String, String>();
            var fileParams = new Dictionary<String, FileParameter>();
            String postBody = null;
    
                                    postBody = ApiClient.Serialize(body); // http body (model) parameter

            // authentication setting, if any
            String[] authSettings = new String[] { "apiKeyAuth", "apiLoginAuth", "apiPasswordAuth" };
    
            // make the HTTP request
            IRestResponse response = (IRestResponse) ApiClient.CallApi(path, Method.POST, queryParams, postBody, headerParams, formParams, fileParams, authSettings);
    
            if (((int)response.StatusCode) >= 400)
                throw new ApiException ((int)response.StatusCode, "Error calling PlaceMailOrder: " + response.Content, response.Content);
            else if (((int)response.StatusCode) == 0)
                throw new ApiException ((int)response.StatusCode, "Error calling PlaceMailOrder: " + response.ErrorMessage, response.ErrorMessage);
    
            return;
        }
    
        /// <summary>
        /// Sends an Email Sends An email through one of your mail orders.
        /// </summary>
        /// <param name="id">User ID</param>
        /// <param name="subject"></param>
        /// <param name="body"></param>
        /// <param name="to"></param>
        /// <param name="from"></param>
        /// <returns>GenericResponse</returns>
        public GenericResponse SendMailById (long? id, string subject, string body, string to, string from)
        {
            // verify the required parameter 'id' is set
            if (id == null) throw new ApiException(400, "Missing required parameter 'id' when calling SendMailById");
    
            var path = "/mail/{id}/send";
            path = path.Replace("{format}", "json");
            path = path.Replace("{" + "id" + "}", ApiClient.ParameterToString(id));
    
            var queryParams = new Dictionary<String, String>();
            var headerParams = new Dictionary<String, String>();
            var formParams = new Dictionary<String, String>();
            var fileParams = new Dictionary<String, FileParameter>();
            String postBody = null;
    
             if (subject != null) queryParams.Add("subject", ApiClient.ParameterToString(subject)); // query parameter
 if (body != null) queryParams.Add("body", ApiClient.ParameterToString(body)); // query parameter
 if (to != null) queryParams.Add("to", ApiClient.ParameterToString(to)); // query parameter
 if (from != null) queryParams.Add("from", ApiClient.ParameterToString(from)); // query parameter
                        
            // authentication setting, if any
            String[] authSettings = new String[] { "apiKeyAuth", "apiLoginAuth", "apiPasswordAuth" };
    
            // make the HTTP request
            IRestResponse response = (IRestResponse) ApiClient.CallApi(path, Method.GET, queryParams, postBody, headerParams, formParams, fileParams, authSettings);
    
            if (((int)response.StatusCode) >= 400)
                throw new ApiException ((int)response.StatusCode, "Error calling SendMailById: " + response.Content, response.Content);
            else if (((int)response.StatusCode) == 0)
                throw new ApiException ((int)response.StatusCode, "Error calling SendMailById: " + response.ErrorMessage, response.ErrorMessage);
    
            return (GenericResponse) ApiClient.Deserialize(response.Content, typeof(GenericResponse), response.Headers);
        }
    
        /// <summary>
        /// validatess order details before placing an order 
        /// </summary>
        /// <returns></returns>
        public void ValidateMailOrder ()
        {
    
            var path = "/mail/order";
            path = path.Replace("{format}", "json");
                
            var queryParams = new Dictionary<String, String>();
            var headerParams = new Dictionary<String, String>();
            var formParams = new Dictionary<String, String>();
            var fileParams = new Dictionary<String, FileParameter>();
            String postBody = null;
    
                                    
            // authentication setting, if any
            String[] authSettings = new String[] { "apiKeyAuth", "apiLoginAuth", "apiPasswordAuth" };
    
            // make the HTTP request
            IRestResponse response = (IRestResponse) ApiClient.CallApi(path, Method.GET, queryParams, postBody, headerParams, formParams, fileParams, authSettings);
    
            if (((int)response.StatusCode) >= 400)
                throw new ApiException ((int)response.StatusCode, "Error calling ValidateMailOrder: " + response.Content, response.Content);
            else if (((int)response.StatusCode) == 0)
                throw new ApiException ((int)response.StatusCode, "Error calling ValidateMailOrder: " + response.ErrorMessage, response.ErrorMessage);
    
            return;
        }
    
        /// <summary>
        /// displays the mail log By passing in the appropriate options, you can search for available inventory in the system 
        /// </summary>
        /// <param name="id">User ID</param>
        /// <param name="searchString">pass an optional search string for looking up inventory</param>
        /// <param name="skip">number of records to skip for pagination</param>
        /// <param name="limit">maximum number of records to return</param>
        /// <returns>List&lt;MailLog&gt;</returns>
        public List<MailLog> ViewMailLogById (long? id, string searchString, int? skip, int? limit)
        {
            // verify the required parameter 'id' is set
            if (id == null) throw new ApiException(400, "Missing required parameter 'id' when calling ViewMailLogById");
    
            var path = "/mail/{id}/log";
            path = path.Replace("{format}", "json");
            path = path.Replace("{" + "id" + "}", ApiClient.ParameterToString(id));
    
            var queryParams = new Dictionary<String, String>();
            var headerParams = new Dictionary<String, String>();
            var formParams = new Dictionary<String, String>();
            var fileParams = new Dictionary<String, FileParameter>();
            String postBody = null;
    
             if (searchString != null) queryParams.Add("searchString", ApiClient.ParameterToString(searchString)); // query parameter
 if (skip != null) queryParams.Add("skip", ApiClient.ParameterToString(skip)); // query parameter
 if (limit != null) queryParams.Add("limit", ApiClient.ParameterToString(limit)); // query parameter
                        
            // authentication setting, if any
            String[] authSettings = new String[] { "apiKeyAuth", "apiLoginAuth", "apiPasswordAuth" };
    
            // make the HTTP request
            IRestResponse response = (IRestResponse) ApiClient.CallApi(path, Method.GET, queryParams, postBody, headerParams, formParams, fileParams, authSettings);
    
            if (((int)response.StatusCode) >= 400)
                throw new ApiException ((int)response.StatusCode, "Error calling ViewMailLogById: " + response.Content, response.Content);
            else if (((int)response.StatusCode) == 0)
                throw new ApiException ((int)response.StatusCode, "Error calling ViewMailLogById: " + response.ErrorMessage, response.ErrorMessage);
    
            return (List<MailLog>) ApiClient.Deserialize(response.Content, typeof(List<MailLog>), response.Headers);
        }
    
    }
}
