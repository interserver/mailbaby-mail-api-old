package io.swagger.api;

import io.swagger.model.*;
import io.swagger.api.PingApiService;
import io.swagger.api.factories.PingApiServiceFactory;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;


import java.util.Map;
import java.util.List;
import io.swagger.api.NotFoundException;

import java.io.InputStream;

import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import org.glassfish.jersey.media.multipart.FormDataParam;

import javax.servlet.ServletConfig;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;
import javax.ws.rs.*;
import javax.validation.constraints.*;


@Path("/ping")


@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaJerseyServerCodegen", date = "2021-04-06T14:14:57.434748-04:00[America/New_York]")public class PingApi  {
   private final PingApiService delegate;

   public PingApi(@Context ServletConfig servletContext) {
      PingApiService delegate = null;

      if (servletContext != null) {
         String implClass = servletContext.getInitParameter("PingApi.implementation");
         if (implClass != null && !"".equals(implClass.trim())) {
            try {
               delegate = (PingApiService) Class.forName(implClass).newInstance();
            } catch (Exception e) {
               throw new RuntimeException(e);
            }
         } 
      }

      if (delegate == null) {
         delegate = PingApiServiceFactory.getPingApi();
      }

      this.delegate = delegate;
   }

    @GET
    
    
    
    @Operation(summary = "Checks if the server is running", description = "", tags={  })
    @ApiResponses(value = { 
        @ApiResponse(responseCode = "200", description = "Server is up and running"),
        
        @ApiResponse(responseCode = "200", description = "Something is wrong") })
    public Response pingServer(@Context SecurityContext securityContext)
    throws NotFoundException {
        return delegate.pingServer(securityContext);
    }
}
