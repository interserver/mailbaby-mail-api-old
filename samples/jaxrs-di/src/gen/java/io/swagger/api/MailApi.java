package io.swagger.api;

import io.swagger.model.*;
import io.swagger.api.MailApiService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;

import io.swagger.model.Error;
import io.swagger.model.GenericResponse;
import io.swagger.model.MailLog;
import io.swagger.model.MailOrder;
import io.swagger.model.MailOrders;

import java.util.Map;
import java.util.List;

import java.io.InputStream;

import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import org.glassfish.jersey.media.multipart.FormDataParam;

import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;
import javax.ws.rs.*;
import javax.validation.constraints.*;

@Path("/mail")


@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaJerseyDIServerCodegen", date = "2021-04-06T14:15:00.173072-04:00[America/New_York]")public class MailApi  {

   private MailApiService delegate;

   protected MailApi() {
   }

   @javax.inject.Inject
   public MailApi(MailApiService delegate) {
      this.delegate = delegate;
   }

    @GET
    @Path("/{id}")
    
    @Produces({ "application/json" })
    @Operation(summary = "Gets mail order information by id", description = "returns information about a mail order in the system with the given id.", security = {
        @SecurityRequirement(name = "apiKeyAuth"),
@SecurityRequirement(name = "apiLoginAuth"),
@SecurityRequirement(name = "apiPasswordAuth")    }, tags={  })
    @ApiResponses(value = { 
        @ApiResponse(responseCode = "200", description = "Successful operation", content = @Content(schema = @Schema(implementation = MailOrder.class))) })
    public Response getMailById(@Parameter(in = ParameterIn.PATH, description = "User ID",required=true) @PathParam("id") Long id
,@Context SecurityContext securityContext)
    throws NotFoundException {
        return delegate.getMailById(id,securityContext);
    }
    @GET
    
    
    @Produces({ "application/json", "application/xml", "text/plain" })
    @Operation(summary = "displays a list of mail service orders", description = "", security = {
        @SecurityRequirement(name = "apiKeyAuth"),
@SecurityRequirement(name = "apiLoginAuth"),
@SecurityRequirement(name = "apiPasswordAuth")    }, tags={  })
    @ApiResponses(value = { 
        @ApiResponse(responseCode = "200", description = "OK", content = @Content(schema = @Schema(implementation = MailOrders.class))),
        
        @ApiResponse(responseCode = "401", description = "Unauthorized", content = @Content(schema = @Schema(implementation = Error.class))) })
    public Response getMailOrders(@Context SecurityContext securityContext)
    throws NotFoundException {
        return delegate.getMailOrders(securityContext);
    }
    @POST
    @Path("/order")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
    @Operation(summary = "places a mail order", description = "Adds an item to the system", security = {
        @SecurityRequirement(name = "apiKeyAuth"),
@SecurityRequirement(name = "apiLoginAuth"),
@SecurityRequirement(name = "apiPasswordAuth")    }, tags={  })
    @ApiResponses(value = { 
        @ApiResponse(responseCode = "200", description = "list of mail orders"),
        
        @ApiResponse(responseCode = "400", description = "invalid input, object invalid"),
        
        @ApiResponse(responseCode = "409", description = "an existing item already exists"),
        
        @ApiResponse(responseCode = "401", description = "Unauthorized", content = @Content(schema = @Schema(implementation = Error.class))) })
    public Response placeMailOrder(@Parameter(in = ParameterIn.DEFAULT, description = "Inventory item to add" ) MailOrder body

,@Context SecurityContext securityContext)
    throws NotFoundException {
        return delegate.placeMailOrder(body,securityContext);
    }
    @GET
    @Path("/{id}/send")
    
    @Produces({ "application/json" })
    @Operation(summary = "Sends an Email", description = "Sends An email through one of your mail orders.", security = {
        @SecurityRequirement(name = "apiKeyAuth"),
@SecurityRequirement(name = "apiLoginAuth"),
@SecurityRequirement(name = "apiPasswordAuth")    }, tags={  })
    @ApiResponses(value = { 
        @ApiResponse(responseCode = "200", description = "search results matching criteria", content = @Content(schema = @Schema(implementation = GenericResponse.class))),
        
        @ApiResponse(responseCode = "400", description = "bad input parameter"),
        
        @ApiResponse(responseCode = "401", description = "Unauthorized", content = @Content(schema = @Schema(implementation = Error.class))),
        
        @ApiResponse(responseCode = "404", description = "The specified resource was not found", content = @Content(schema = @Schema(implementation = Error.class))) })
    public Response sendMailById(@Parameter(in = ParameterIn.PATH, description = "User ID",required=true) @PathParam("id") Long id
,@Parameter(in = ParameterIn.QUERY, description = "") @QueryParam("subject") String subject
,@Parameter(in = ParameterIn.QUERY, description = "") @QueryParam("body") String body
,@Parameter(in = ParameterIn.QUERY, description = "") @QueryParam("to") String to
,@Parameter(in = ParameterIn.QUERY, description = "") @QueryParam("from") String from
,@Context SecurityContext securityContext)
    throws NotFoundException {
        return delegate.sendMailById(id,subject,body,to,from,securityContext);
    }
    @GET
    @Path("/order")
    
    @Produces({ "application/json" })
    @Operation(summary = "validatess order details before placing an order", description = "", security = {
        @SecurityRequirement(name = "apiKeyAuth"),
@SecurityRequirement(name = "apiLoginAuth"),
@SecurityRequirement(name = "apiPasswordAuth")    }, tags={  })
    @ApiResponses(value = { 
        @ApiResponse(responseCode = "200", description = "list of mail orders"),
        
        @ApiResponse(responseCode = "401", description = "Unauthorized", content = @Content(schema = @Schema(implementation = Error.class))) })
    public Response validateMailOrder(@Context SecurityContext securityContext)
    throws NotFoundException {
        return delegate.validateMailOrder(securityContext);
    }
    @GET
    @Path("/{id}/log")
    
    @Produces({ "application/json" })
    @Operation(summary = "displays the mail log", description = "By passing in the appropriate options, you can search for available inventory in the system ", security = {
        @SecurityRequirement(name = "apiKeyAuth"),
@SecurityRequirement(name = "apiLoginAuth"),
@SecurityRequirement(name = "apiPasswordAuth")    }, tags={  })
    @ApiResponses(value = { 
        @ApiResponse(responseCode = "200", description = "search results matching criteria", content = @Content(array = @ArraySchema(schema = @Schema(implementation = MailLog.class)))),
        
        @ApiResponse(responseCode = "400", description = "bad input parameter") })
    public Response viewMailLogById(@Parameter(in = ParameterIn.PATH, description = "User ID",required=true) @PathParam("id") Long id
,@Parameter(in = ParameterIn.QUERY, description = "pass an optional search string for looking up inventory") @QueryParam("searchString") String searchString
,@Parameter(in = ParameterIn.QUERY, description = "number of records to skip for pagination", schema=@Schema(allowableValues={  })
) @QueryParam("skip") Integer skip
,@Parameter(in = ParameterIn.QUERY, description = "maximum number of records to return", schema=@Schema(allowableValues={  }, maximum="50")
) @QueryParam("limit") Integer limit
,@Context SecurityContext securityContext)
    throws NotFoundException {
        return delegate.viewMailLogById(id,searchString,skip,limit,securityContext);
    }
}
