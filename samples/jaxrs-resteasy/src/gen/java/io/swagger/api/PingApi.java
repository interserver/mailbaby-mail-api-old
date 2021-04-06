package io.swagger.api;

import io.swagger.model.*;
import io.swagger.api.PingApiService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
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

import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;
import javax.ws.rs.*;
import javax.inject.Inject;

import javax.validation.constraints.*;
@Path("/ping")


@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaResteasyServerCodegen", date = "2021-04-06T14:15:05.831772-04:00[America/New_York]")public class PingApi  {

    @Inject PingApiService service;

    @GET
    
    
    
    @Operation(summary = "Checks if the server is running", description = "", tags={  })
    @ApiResponses(value = { 
        @ApiResponse(responseCode = "200", description = "Server is up and running"),
        
        @ApiResponse(responseCode = "200", description = "Something is wrong") })
    public Response pingServer(@Context SecurityContext securityContext)
    throws NotFoundException {
        return service.pingServer(securityContext);
    }
}
