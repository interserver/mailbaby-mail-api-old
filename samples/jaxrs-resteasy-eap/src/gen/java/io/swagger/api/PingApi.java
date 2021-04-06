package io.swagger.api;

import io.swagger.model.*;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;


import java.util.List;
import java.util.Map;

import java.io.InputStream;

import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;
import javax.ws.rs.*;
import javax.validation.constraints.*;
@Path("/ping")


@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaResteasyEapServerCodegen", date = "2021-04-06T14:15:02.961379-04:00[America/New_York]")public interface PingApi  {
   
    @GET
    
    
    
    @Operation(summary = "Checks if the server is running", description = "", tags={  })
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Server is up and running"),
                @ApiResponse(responseCode = "200", description = "Something is wrong")
         })
    Response pingServer(@Context SecurityContext securityContext);

}
