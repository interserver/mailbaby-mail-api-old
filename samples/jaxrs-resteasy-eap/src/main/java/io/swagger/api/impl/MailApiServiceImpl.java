package io.swagger.api.impl;

import io.swagger.api.*;
import io.swagger.model.*;

import io.swagger.model.Error;
import io.swagger.model.GenericResponse;
import io.swagger.model.MailLog;
import io.swagger.model.MailOrder;
import io.swagger.model.MailOrders;

import java.util.List;

import java.io.InputStream;

import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;

@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaResteasyEapServerCodegen", date = "2021-04-06T14:15:02.961379-04:00[America/New_York]")public class MailApiServiceImpl implements MailApi {
      public Response getMailById(Long id,SecurityContext securityContext) {
      // do some magic!
      return Response.ok().build();
  }
      public Response getMailOrders(SecurityContext securityContext) {
      // do some magic!
      return Response.ok().build();
  }
      public Response placeMailOrder(MailOrder body,SecurityContext securityContext) {
      // do some magic!
      return Response.ok().build();
  }
      public Response sendMailById(Long id,String subject,String body,String to,String from,SecurityContext securityContext) {
      // do some magic!
      return Response.ok().build();
  }
      public Response validateMailOrder(SecurityContext securityContext) {
      // do some magic!
      return Response.ok().build();
  }
      public Response viewMailLogById(Long id,String searchString,Integer skip,Integer limit,SecurityContext securityContext) {
      // do some magic!
      return Response.ok().build();
  }
}
